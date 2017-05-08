def playlistInit(db):
    class Playlist(db.Document):
        meta = {
            'collection': 'playlist',
            'strict': False
        }
        name = db.IntField(required=True)
        userID = db.StringField(required=True)
        wyID = db.IntField()
        commentID = db.StringField()
        songs = db.ListField()
        introduction = db.StringField()
        tag = db.ListField()
        picUrl = db.StringField()
    return Playlist
