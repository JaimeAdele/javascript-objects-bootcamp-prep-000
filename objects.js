var playlist = {
  'The Neighbourhood': 'Sweater Weather'
};

function updatePlaylist(playlist, artistName, songTitle){
  Object.append(playlist, {artistName: songTitle});
}
