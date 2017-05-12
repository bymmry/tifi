# - * -coding: UTF - 8 - * -
import os
import json
import warnings
from dejavu import Dejavu
from dejavu.recognize import FileRecognizer
from flask import request, jsonify
from model.music import musicInit
from model.album import albumInit
from model.artist import artistInit
warnings.filterwarnings("ignore")

with open("controller/dejavu.cnf.SAMPLE") as f:
    config = json.load(f)

ALLOWED_EXTENSIONS = ['wav', 'mp3']
PATH = os.getcwd()


def allowed_file(filename):
    return '.' in filename and\
        filename.rsplit('.', 1)[1] in ALLOWED_EXTENSIONS


def file_recognize(inputSong):
    djv = Dejavu(config)
    djv.fingerprint_directory("upload/music/mp3", [".mp3"])
    song = djv.recognize(FileRecognizer, inputSong)
    if song:
        print '识别完成:', song
        return song
    else:
        print '没有找到相关歌曲'
        return jsonify({'code': 404, 'data': '没有找到相关歌曲'})


def audioRec(app, db):
    Music = musicInit(db)
    Artist = artistInit(db)
    Album = albumInit(db)

    @app.route('/api/audioRec', methods=['POST'])
    def audioRec_c():
        if request.method == 'POST':
            file = request.files['audioMic']
            if file and allowed_file(file.filename):
                filename = 'test/test.wav'
                file.save(os.path.join(PATH, filename))
                search = file_recognize(filename)
                song = Music.objects(id=search['song_name']).first()
                if song:
                    album = Album.objects(id=song['albumID']).first()
                    artist = Artist.objects(id=album['artistID']).first()
                    return jsonify({
                        'code': 200,
                        'data': search,
                        'info': '识别完成',
                        'result': {
                            'id': str(song['id']),
                            'name': song['name'],
                            'wyID': song['wyID'],
                            'url': song['url'],
                            'album': album,
                            'artist': artist
                        }
                    })
                else:
                    return jsonify({
                        'code': 404,
                        'data': search,
                        'info': '未找到歌曲',
                    })

            else:
                filename = 'test/' + request.files['audioName']
                return file_recognize(filename)
        else:
            return jsonify({'code': 404, 'info': '此API不接受GET请求'})