const dance = require('./danceNames')
function generateDanceNames () {
  return dance[Math.floor(Math.random() * dance.length)]
}
module.exports = generateDanceNames
