# - * -coding: UTF - 8 - * -
import time 
import random
import top.api
from flask import json, request, jsonify
from model.code import codeInit
from model.user import userInit
from model.playlist import playlistInit


def user(app, db):
    Code = codeInit(db)
    User = userInit(db)
    Playlist = playlistInit(db)
    
    @app.route('/getPhoneCode', methods=['POST'])
    def getPhoneCode():
        phone = json.loads(request.data)['phone']
        # return phone
        code = str(random.randint(100000, 999999))
        appkey = '23752416'
        secret = 'a7b337e3acea861b9140ef160dc23bb6'
        req = top.api.AlibabaAliqinFcSmsNumSendRequest()
        req.set_app_info(top.appinfo(appkey, secret))
        req.extend = code
        req.sms_type = "normal"
        req.sms_free_sign_name = "TIFI音乐"
        param = "{\"number\":\""+code+"\",\"product\":\"TIFI音乐\"}"
        req.sms_param = param
        req.rec_num = str(phone)
        req.sms_template_code = "SMS_61800227"
        resp = req.getResponse()
        if resp.has_key('alibaba_aliqin_fc_sms_num_send_response'):
            print '发送的验证码为', code
            codeSchema = Code(code=code)
            codeSchema.save()
            return jsonify({
                'code': 200,
                'info': '成功发送验证码',
                'codeID': str(codeSchema['id'])
            })
        else:
            return jsonify({
                'code': 500,
                'info': '发送验证码失败'
            })

    @app.route('/createUser', methods=['POST'])
    def createUser():
        data = json.loads(request.data)
        code = Code.objects(id=data['codeID']).first()
        if code['code'] == data['code']:
            hasUser = User.objects(phone=data['phone']).first()
            if hasUser:
                return jsonify({
                    'code': 400,
                    'info': '该手机已被注册'
                })
            else:
                playlistSchema = Playlist(uid='0', name='我喜欢的音乐')
                print playlistSchema['id']
                playlistSchema.save()
                userSchema = User(
                    phone=data['phone'],
                    psw=data['password'],
                    name='寻声'+str(data['phone'])[-4:],
                    playlist=[str(playlistSchema['id'])]
                )
                userSchema.save()
                Playlist.objects(id=playlistSchema['id']).first().update(
                    uid=str(userSchema['id'])
                )
                return jsonify({
                    'code': 200,
                    'info': '注册成功'
                })
        else:
            return jsonify({
                'code': 404,
                'info': '验证码错误'
            })

    @app.route('/login', methods=['POST'])
    def login():
        data = json.loads(request.data)
        # print data
        hasUser = User.objects(
            phone=data['phone'],
            psw=data['password']
        ).first()
        if hasUser:
            return jsonify({
                'code': 200,
                'info': '登录成功',
                'uid': str(hasUser['id']),
                'name': hasUser['name'],
                'picUrl': hasUser['picUrl'],
                'loginTime': int(time.time()),
                'playlist': Playlist.objects(uid=str(hasUser['id'])).first()
            })
        else:
            return jsonify({
                'code': 404,
                'info': '用户不存在'
            })

    @app.route('/retrieveUser', methods=['POST'])
    def retrieveUser():
        print request.data
        data = json.loads(request.data)
        result = []
        if not data:
            for playlist in Playlist.objects().all():
                user = User.objects(id=playlist['uid']).first()
                result.append({
                    'id': str(playlist['id']),
                    'name': playlist['name'],
                    'picUrl': playlist['picUrl'],
                    'song': playlist['song'],
                    'user': {
                        'id': str(user['id']),
                        'name': user['name'],
                    }
                })
            return jsonify({
                'code': '200',
                'info': '成功查询所有歌单',
                'result': result
            })
        else:
            user = User.objects(id=data['id']).first()
            for playlistID in user['playlist']:
                playlist = Playlist.objects(id=playlistID).first()
                user = User.objects(id=playlist['uid']).first()
                result.append({
                    'id': str(playlist['id']),
                    'name': playlist['name'],
                    'picUrl': playlist['picUrl'],
                    'song': playlist['song'],
                    'user': {
                        'id': str(user['id']),
                        'name': user['name'],
                    }
                })
        return jsonify({
            'code': 200,
            'info': '成功读取用户歌单',
            'result': result
        })