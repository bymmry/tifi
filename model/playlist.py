import time
import datetime


def playlistInit(db):
    class Playlist(db.Document):
        meta = {
            'collection': 'playlist',
            'strict': False
        }
        uid = db.StringField()
        name = db.StringField(required=True)
        wyID = db.IntField()
        comment = db.ListField()
        like = db.ListField()
        play = db.ListField()
        song = db.ListField()
        introduction = db.StringField()
        tag = db.ListField()
        picUrl = db.StringField()
        createTime = db.IntField(
            default=int(time.mktime(datetime.datetime.now().timetuple()))*1000)
    return Playlist
