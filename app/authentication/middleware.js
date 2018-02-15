function authenticationMiddleware () {
  return function (req, res, next) {
    console.log('middleware');
    if (req.isAuthenticated()) {
      console.log('Authenticated');
      return next()
    }
    res.redirect('/')
  }
}

module.exports = authenticationMiddleware
