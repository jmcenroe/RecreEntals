module.exports = {
  localAuth: require('./local'),
  googleAuth: require('./google'),
  facebookAuth: require('./facebook'),
  universalAuth: require('./universal'),
  middleware: require('./middleware')
}
