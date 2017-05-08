def albumInit(db):
    class Album(db.Document):
        meta = {
            'collection': 'album',
            'strict': False,
        }
        wyID = db.IntField()
        name = db.StringField(required=True)
        artistID = db.StringField()
        picUrl = db.StringField()
        publishTime = db.IntField()
        size = db.IntField()
    return Album

