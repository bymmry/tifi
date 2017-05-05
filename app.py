# - * -coding: UTF - 8 - * -
# lib
import os
from flask import Flask, send_from_directory, send_file
from flask_mongoengine import MongoEngine
# controller
from controller.index import index
from controller.audioRec import audioRec
# from controller.musicCURD import createMusic


# main
app = Flask(__name__, static_folder='views')
app.config['MONGODB_SETTINGS'] = {
    'db': 'tifi-music',
    'host': '127.0.0.1',
    'port': 27017
}
db = MongoEngine(app)


# app.register_blueprint(index, url_prefix='/')
# app.register_blueprint(audioRec, url_prefix='/audioRec')
# app.register_blueprint(createMusic, url_prefix='/createMusic')


@app.route('/')
def index_c():
    return index()


@app.route('/spa/<path>')
def spa(path):
    return send_file('views/dist/index.html')


@app.route('/api/audioRec', methods=['POST'])
def audioRec_c():
    return audioRec()


@app.route('/mp3/<filename>')
def playMp3(filename):
    return send_from_directory(os.getcwd(), 'mp3/'+filename)


@app.route('/api/playWav/<filename>')
def playWav(filename):
    return send_from_directory(os.getcwd(), 'wav/'+filename)


if __name__ == '__main__':
    app.run(debug=True)
