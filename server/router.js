const {signUp,signIn} = require('./controllers/authentication');
const passportService = require('./services/passport')
const passport = require('passport')
const requireAuth = passport.authenticate('jwt', {session: false})
const requireSignin = passport.authenticate('local', {session: false})

module.exports = function(app) {
  app.get('/', requireAuth, (req,res)=> { res.send({ok: 'Hi'})})
  app.post('/signup', signUp)
  app.post('/signin',requireSignin, signIn)
}
