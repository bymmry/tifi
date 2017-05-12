# - * -coding: UTF - 8 - * -
import os
from flask import send_from_directory
# model
from model.artist import artistInit
from model.album import albumInit
from model.music import musicInit


def download(app, db):
    Artist = artistInit(db)
    Album = albumInit(db)
    Music = musicInit(db)

    @app.route('/download/upload/music/mp3/<filename>')
    def download_mp3(filename):
        response = send_from_directory(
            os.getcwd(), 'upload/music/mp3/' + filename, as_attachment=True)
        id = filename.rsplit('.', 1)[0]
        music = Music.objects(id=id).first()
        result = '未知曲目'
        if music:
            result = 'test.mp3'
            album = Album.objects(id=music['albumID']).first()
            if album:
                artist = Artist.objects(id=album['artistID']).first()
                result = artist['name'] + ' - ' + music['name'] + '.' + music['type']
            else:
                result = music['name'] + '.' + music['type']
        downloadName = result.encode('utf-8')
        response.headers[
            "Content-Disposition"] = "attachment; filename=" + downloadName
        return response
