# - * -coding: UTF - 8 - * -
# lib
import json
from flask import jsonify, request


def createArtist(Artist):
    artists = json.loads(request.data)['artists']
    postback = []
    for artist in artists:
        flag = Artist.objects(name=artist['name']).first()
        if flag:
            return jsonify({
                'code': 417,
                'info': '数据库中已存在这个歌手',
                'artists': {
                    'id': str(flag['id']),
                    'name': flag['name']
                }
            })
        else:
            artistSchema = Artist(
                wyID=artist['wyID'],
                name=artist['name'],
                picUrl=artist['picUrl'],
                introduction=artist['introduction'])
            artistSchema.save()
            postback.append({
                'id': str(artistSchema['id']),
                'name': artistSchema['name']
            })
    return jsonify({'code': 200, 'info': '成功添加歌手', 'artists': postback})


def retrieveArtist(Artist):
    if request.data:
        data = json.loads(request.data)
        artist = Artist.objects(id=data['id']).first()
        return jsonify({'code': 200, 'artist': artist})
    else:
        artist = Artist.objects().all()
        return jsonify({'code': 200, 'artist': artist})