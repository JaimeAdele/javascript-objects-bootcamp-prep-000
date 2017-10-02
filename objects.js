var playlist = {
  'The Neighbourhood': 'Sweater Weather'
};

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign(playlist, {[artistName]: songTitle});
}
