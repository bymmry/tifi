# - * -coding: UTF - 8 - * -
# lib
from flask import Flask
# 连接mongodb的中间件
from flask_mongoengine import MongoEngine
# 解决跨域问题
from flask_cors import CORS
# controller
from controller.test import test
from controller.index import index
from controller.audioRec import audioRec
from controller.artist import artist
from controller.album import album
from controller.music import music
from controller.play import play
from controller.download import download
from controller.user import user
from controller.playlist import playlist


# main
app = Flask(__name__, static_folder='views')
CORS(app)
app.config['MONGODB_SETTINGS'] = {
    'db': 'tifi-music',
    'host': '127.0.0.1',
    'port': 27017
}
db = MongoEngine(app)
index(app)
audioRec(app, db)
play(app)
test(app, db)
artist(app, db)
album(app, db)
music(app, db)
download(app, db)
user(app, db)
playlist(app, db)

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000, debug=True)
