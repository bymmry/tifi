# - * -coding: UTF - 8 - * -
# lib
import os
from flask import Flask, send_from_directory, send_file
from flask_mongoengine import MongoEngine
from flask_cors import CORS
# model
from model.artist import artistInit
from model.album import albumInit
from model.music import musicInit
# controller
from controller.test import test
from controller.index import index
from controller.audioRec import audioRec
from controller.artist import createArtist
from controller.artist import retrieveArtist
from controller.album import createAlbum
from controller.album import retrieveAlbum
from controller.music import createMusic
from controller.music import updateMusic
from controller.music import retrieveMusic
from controller.download import download


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
Artist = artistInit(db)
Album = albumInit(db)
Music = musicInit(db)


@app.route('/')
def index_c():
    return index()


test(app, db)


@app.route('/spa/<path>')
def spa(path):
    return send_file('views/dist/index.html')


@app.route('/upload/music/mp3/<filename>')
def play_mp3(filename):
    return send_from_directory(os.getcwd(), 'upload/music/mp3/' + filename)


@app.route('/download/upload/music/mp3/<filename>')
def download_mp3(filename):
    response = send_from_directory(
        os.getcwd(), 'upload/music/mp3/' + filename, as_attachment=True)
    downloadName = download(filename, Artist, Album, Music)
    response.headers[
        "Content-Disposition"] = "attachment; filename="+downloadName
    return response


@app.route('/api/audioRec', methods=['POST'])
def audioRec_c():
    return audioRec()


@app.route('/createArtist', methods=['POST'])
def createArtist_c():
    return createArtist(Artist)


@app.route('/retrieveArtist', methods=['POST', 'GET'])
def retrieveArtist_c():
    return retrieveArtist(Artist)


@app.route('/createAlbum', methods=['POST'])
def createAlbum_c():
    return createAlbum(Album)


@app.route('/retrieveAlbum', methods=['POST'])
def retrieveAlbum_c():
    return retrieveAlbum(Album)


@app.route('/createMusic', methods=['POST'])
def createMusic_c():
    return createMusic(Music)


@app.route('/updateMusic', methods=['POST'])
def updateMusic_c():
    return updateMusic(Music)


@app.route('/retrieveMusic', methods=['POST'])
def retrieveMusic_c():
    return retrieveMusic(Artist, Album, Music)


if __name__ == '__main__':
    app.run(debug=True)
