# - * -coding: UTF - 8 - * -
import json
import warnings
from flask.blueprints import Blueprint
from dejavu import Dejavu
from dejavu.recognize import FileRecognizer
from flask import send_file, jsonify
warnings.filterwarnings("ignore")


with open("controller/dejavu.cnf.SAMPLE") as f:
    config = json.load(f)


index = Blueprint('index', __name__) 


@index.route('/') 
def index_control():
    djv = Dejavu(
        config)  # Fingerprint all the mp3 's in the directory we give it
    djv.fingerprint_directory("mp3", [".mp3"])  # Recognize audio from a file
    inputSong = "test/test4.wav"
    song = djv.recognize(FileRecognizer, inputSong)
    print "从你给的文件中,识别出是: %s\n" % song
    return jsonify({'code': 200, 'inputSong': inputSong, 'info': '识别完成', 'data': song})
    # return send_file('views/dist/index.html')