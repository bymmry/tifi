# - * -coding: UTF - 8 - * -
import os
import json
import warnings
from dejavu import Dejavu
from dejavu.recognize import FileRecognizer
from flask import request, jsonify
from werkzeug import secure_filename
warnings.filterwarnings("ignore")


with open("controller/dejavu.cnf.SAMPLE") as f:
    config = json.load(f)


ALLOWED_EXTENSIONS = ['wav', 'mp3']
PATH = os.getcwd()


def allowed_file(filename):
    return '.' in filename and\
        filename.rsplit('.', 1)[1] in ALLOWED_EXTENSIONS


def audioRec():
    if request.method == 'POST':
        file = request.files['audioTest']
        if file and allowed_file(file.filename):
            # filename = secure_filename(file.filename)
            file.save(os.path.join(PATH, 'test/test.wav'))
            djv = Dejavu(config)
            djv.fingerprint_directory("mp3", [".mp3"])
            song = djv.recognize(FileRecognizer, 'test/test.wav')
            if song:
                print '识别完成:', song
                return jsonify({'code': 200, 'data': song})
            else:
                print '没有找到相关歌曲'
                return jsonify({'code': 200, 'data': '没有找到相关歌曲'})
    else:
        return jsonify({'code': 404, 'info': '此API不接受GET请求'})