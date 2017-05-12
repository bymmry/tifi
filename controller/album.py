# - * -coding: UTF - 8 - * -
# lib
import json
from flask import jsonify, request
from model.album import albumInit


def album(app, db):
    Album = albumInit(db)

    @app.route('/createAlbum', methods=['POST'])
    def createAlbum_c():
        data = json.loads(request.data)
        postback = []
        for album in data['albums']:
            flag = Album.objects(name=album['name']).first()
            if flag:
                return jsonify({
                    'code': 417,
                    'info': '数据库中已存在这张专辑',
                    'artists': {
                        'id': str(flag['id']),
                        'name': flag['name']
                    }
                })
            else:
                albumSchema = Album(
                    wyID=album['wyID'],
                    name=album['name'],
                    artistID=album['artistID'],
                    picUrl=album['picUrl'],
                    publishTime=album['publishTime'])
                albumSchema.save()
                postback.append({
                    'id': str(albumSchema['id']),
                    'name': albumSchema['name']
                })
        return jsonify({'code': 200, 'info': '成功添加专辑', 'albums': postback})

    @app.route('/retrieveAlbum', methods=['POST'])
    def retrieveAlbum_c():
        if request.data:
            data = json.loads(request.data)
            album = Album.objects(id=data['id']).first()
            return jsonify({'code': 200, 'album': album})
        else:
            album = Album.objects().all()
            return jsonify({'code': 200, 'album': album})