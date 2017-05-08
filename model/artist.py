def artistInit(db):
    class Artist(db.Document):
        meta = {
            'collection': 'artist',
            'strict': False,
        }
        wyID = db.IntField()
        name = db.StringField(required=True)
        picUrl = db.StringField()
        introduction = db.ListField()
    return Artist

