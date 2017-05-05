# - * -coding: UTF - 8 - * -
# lib
import os
from flask import Flask, send_from_directory, send_file
from flask_mongoengine import MongoEngine
from flask_cors import CORS
# controller
from controller.index import index
from controller.audioRec import audioRec
# from controller.music import createMusic
from controller.artist import createArtist
# model
from model.music import musicInit
from model.artist import artistInit


# main
app = Flask(__name__, static_folder='views')
CORS(app)
app.config['MONGODB_SETTINGS'] = {
    'db': 'tifi-music',
    'host': '127.0.0.1',
    'port': 27017
}
db = MongoEngine(app)


# init Model
Music = musicInit(db)
Artist = artistInit(db)


@app.route('/')
def index_c():
    return index()


@app.route('/spa/<path>')
def spa(path):
    return send_file('views/dist/index.html')


@app.route('/mp3/<filename>')
def play_mp3(filename):
    return send_from_directory(os.getcwd(), 'mp3/'+filename)


@app.route('/api/audioRec', methods=['POST'])
def audioRec_c():
    return audioRec()


@app.route('/createArtist', methods=['POST'])
def createArtist_c():
    return createArtist(Artist)


if __name__ == '__main__':
    app.run(debug=True)
