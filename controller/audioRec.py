# - * -coding: UTF - 8 - * -
import os
import json
import warnings
from dejavu import Dejavu
from dejavu.recognize import FileRecognizer
from flask import request, jsonify
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
    djv.fingerprint_directory("mp3", [".mp3"])
    song = djv.recognize(FileRecognizer, inputSong)
    if song:
        print '识别完成:', song
        return jsonify({'code': 200, 'data': song})
    else:
        print '没有找到相关歌曲'
        return jsonify({'code': 200, 'data': '没有找到相关歌曲'})


def audioRec():
    if request.method == 'POST':
        file = request.files['audioMic']
        if file and allowed_file(file.filename):
            filename = 'test/test.wav'
            file.save(os.path.join(PATH, filename))
            return file_recognize(filename)
        else:
            filename = 'test/'+request.files['audioName']
            return file_recognize(filename)
    else:
        return jsonify({'code': 404, 'info': '此API不接受GET请求'})