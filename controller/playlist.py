# - * -coding: UTF - 8 - * -
from flask import json, request, jsonify
from model.playlist import playlistInit
from model.user import userInit
from model.music import musicInit
from model.album import albumInit
from model.artist import artistInit


def playlist(app, db):
    Playlist = playlistInit(db)
    User = userInit(db)
    Music = musicInit(db)
    Album = albumInit(db)
    Artist = artistInit(db)

    @app.route('/createPlaylist', methods=['POST'])
    def createPlaylist():
        data = json.loads(request.data)
        playlistSchema = Playlist(
            wyID=data['wyID'] if data.has_key('wyID') else 0,
            name=data['playlistName'],
            picUrl=data['picUrl'] if data.has_key('picUrl') else '0', )
        playlistSchema.save()
        user = User.objects(id=data['id']).first()
        if not user:
            return jsonify({'code': 404, 'info': '用户不存在'})
        user.update(playlist=user['playlist'].append(playlistSchema['id']))
        return jsonify({
            'code': 200,
            'info': '成功添加专辑',
            'playlist': playlistSchema
        })

    @app.route('/retrievePlaylist', methods=['POST'])
    def retrievePlaylist():
        data = json.loads(request.data)
        result = []
        if not data:
            return jsonify({'code': 404, 'info': '未找到歌单', 'result': result})
        else:
            playlist = Playlist.objects(id=data['id']).first()
            user = User.objects(id=playlist['uid']).all().first()
            result = {
                'id': str(playlist['id']),
                'name': playlist['name'],
                'createTime': playlist['createTime'],
                'song': playlist['song'],
                'play': playlist['play'],
                'like': playlist['like'],
                'tag': playlist['tag'],
                'introduction': playlist['introduction'],
                'comment': playlist['comment'],
                'user': {
                    'id': str(user['id']),
                    'name': user['name']
                }
            }
        return jsonify({'code': 200, 'info': '成功读取歌单', 'result': result})

    @app.route('/addSongToPlaylist', methods=['POST'])
    def addSongToPlaylist():
        data = json.loads(request.data)
        playlist = Playlist.objects(id=data['pid']).first()
        localSong = playlist['song']
        if type(data['song']) == list:
            for item in data['song']:
                localSong.append(item)
        else:
            localSong.append(data['song'])
        playlist.update(song=localSong)
        return jsonify({'code': 200, 'info': '成功收藏', 'likelist': localSong})
