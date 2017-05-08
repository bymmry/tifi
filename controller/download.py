# - * -coding: UTF - 8 - * -


def download(filename, Artist, Album, Music):
    id = filename.rsplit('.', 1)[0]
    music = Music.objects(id=id).first()
    result = '未知曲目'
    if music:
        result = 'test.mp3'
        album = Album.objects(id=music['albumID']).first()
        if album:
            artist = Artist.objects(id=album['artistID']).first()
            result = artist['name'] + ' - ' + music['name'] + '.'+music['type']
        else:
            result = music['name'] + '.' + music['type']
    return result.encode('utf-8')
