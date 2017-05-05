# - * -coding: UTF - 8 - * -
# lib
import json
from flask import jsonify, request


def createArtist(Artist):
    data = json.loads(request.data)
    print data['wyID']
    artistSchema = Artist(
        wyID=data['wyID'],
        name=data['name'],
        picUrl=data['picUrl'],
        introduction=data['introduction'])
    artistSchema.save()
    return jsonify({'code': 200, 'info': '请求成功'})