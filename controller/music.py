# - * -coding: UTF - 8 - * -
# lib
import json
import os
from flask import jsonify, request
UPLOADPATH = '/upload/music/'
PATH = os.getcwd() + UPLOADPATH


def createMusic(Music):
    files = request.files.to_dict()
    if files:
        count = 0
        musics = json.loads(request.values['musics'])
        for (key, file) in files.items():
            music = musics[count]
            count = count + 1
            if music:
                musicType = file.filename.rsplit('.', 1)[1]
                hasName = Music.objects(name=music['name']).first()
                if hasName:
                    hasAlbumID = Music.objects(albumID=music['albumID']).first()
                    if hasAlbumID:
                        return jsonify({
                            'code': 417,
                            'info': '数据库中已存在这首歌',
                            'artists': {
                                'id': str(hasAlbumID['id']),
                                'name': hasAlbumID['name']
                            }
                        })
                    else:
                        musicSchema = Music(
                            wyID=music['wyID'] if music.has_key('wyID') else 0,
                            name=music['name'].rsplit('.', 1)[0],
                            albumID=music['albumID']
                            if music.has_key('albumID') else '0',
                            bps=music['bps']
                            if music.has_key('bps') else '320kbps',
                            type=musicType)
                        musicSchema.save()
                        filePath = musicType + '/' + str(
                            musicSchema['id']) + '.' + musicType
                        musicSchema.update(url=UPLOADPATH+filePath)
                        file.save(os.path.join(PATH, filePath))
                else:
                    musicSchema = Music(
                        wyID=music['wyID'] if music.has_key('wyID') else 0,
                        name=music['name'].rsplit('.', 1)[0],
                        albumID=music['albumID']
                        if music.has_key('albumID') else '0',
                        bps=music['bps']
                        if music.has_key('bps') else '320kbps',
                        type=musicType)
                    musicSchema.save()
                    filePath = musicType + '/' + str(
                        musicSchema['id']) + '.' + musicType
                    file.save(os.path.join(PATH, filePath))
                    musicSchema.update(url=UPLOADPATH+filePath)
            else:
                return jsonify({'code': 400, 'info': '歌曲信息数与文件数不符'})
        return jsonify({'code': 200, 'info': '成功添加歌曲', 'data': musics})
    else:
        data = json.loads(request.data)
        musics = data['music']
        for music in musics:
            albumID = '0'
            type = 'mp3'
            if data.has_key('albumID'):
                albumID = data['albumID']
            else:
                if music.has_key('albumID'):
                    albumID = music['albumID']
            if data.has_key('type'):
                type = data['type']
            else:
                if music.has_key('type'):
                    type = music['type']
            musicSchema = Music(
                wyID=music['id'] if music.has_key('id') else 0,
                name=music['name'],
                albumID=albumID,
                type=type)
            musicSchema.save()
        return jsonify({'code': 200, 'info': '成功添加歌曲', 'data': musics})


def updateMusic(Music):
    data = json.loads(request.data)
    return jsonify({'code': 200, 'info': '更新音乐API', 'data': data})


def retrieveMusic(Artist, Album, Music):
    if request.data:
        data = json.loads(request.data)
        if data['id']:
            music = Music.objects(id=data['id']).first()
            if music:
                album = Album.objects(id=music['albumID']).first()
                if album:
                    artist = Artist.objects(id=album['artistID']).first()
                else:
                    artist = ''
                result = jsonify({
                    'code': 200,
                    'info': '成功读取此音乐',
                    'data': {
                        'music': {
                            'id': str(music['id']),
                            'name': music['name']
                        },
                        'album': {
                            'id': str(album['id']),
                            'name': album['name']
                        },
                        'artist': {
                            'id': str(artist['id']),
                            'name': artist['name']
                        }
                    }
                })
                return result
            else:
                return jsonify({'code': 404, 'info': '没有找到此音乐'})
        else:
            return jsonify({'code': 500, 'info': '参数错误'})
    else:
        musics = Music.objects().all()
        if musics:
            data = []
            for music in musics:
                if music['albumID'] != '0':
                    hsaAlbum = Album.objects(id=music['albumID']).first()
                    if hsaAlbum:
                        album = {
                            'id': str(hsaAlbum['id']),
                            'name': hsaAlbum['name'],
                            'picUrl': hsaAlbum['picUrl']
                        }
                        if hsaAlbum['artistID'] != '0':
                            hasArtist = Artist.objects(
                                id=hsaAlbum['artistID']).first()
                            if hasArtist:
                                artist = {
                                    'id': str(hasArtist['id']),
                                    'name': hasArtist['name'],
                                    'picUrl': hasArtist['picUrl']
                                }
                            else:
                                artist = {}
                    else:
                        album = {}
                data.append({
                    'music': music,
                    'artist': artist,
                    'album': album
                })
            result = jsonify({
                'code': 200,
                'info': '成功读取所有音乐',
                'data': data
            })
            return result
        else:
            return jsonify({'code': 500, 'info': '数据库中无音乐数据'})


def deleteMusic(Music):
    data = json.loads(request.data)
    return jsonify({'code': 200, 'info': '删除音乐API', 'data': data})