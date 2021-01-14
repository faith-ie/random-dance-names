const dance = require('./danceNames')
async function generateDanceNames () {
  var d = dance[Math.floor(Math.random() * dance.length)]
  console.log(d)
}
module.exports = generateDanceNames()
