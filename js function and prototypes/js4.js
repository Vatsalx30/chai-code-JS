//Create a playlist constructor that initializes with an empty songs array. Add a method addSong(song) to the prototype that adds a new song to the playlist.

function Playlist () {
    this.songs = [] ;
} ;

Playlist.prototype.addSong = function (song) {
    song.push(song) ;
} ;