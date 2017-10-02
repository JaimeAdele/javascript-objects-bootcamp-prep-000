var playlist = {
  'The Neighbourhood': 'Sweater Weather'
};

function updatePlaylist(playlist, artistName, songTitle){
  Object.assign(playlist, {artistName: songTitle});
}
