
function createRoom(room) {
  if (rooms.indexOf(room) > -1) {
    rooms.push(room)
    return true
  }
  return false
}




module.exports = {
  createRoom
}