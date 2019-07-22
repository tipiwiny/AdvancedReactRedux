const passport = require('passport');
const mongoose = require('mongoose');
const { Strategy, ExtractJwt} = require('passport-jwt');
const LocalStrategy = require('passport-local')
const User = mongoose.model('User');
const keys = require('./../config/keys')

const localOptions = { usernameField: 'email'}
const localLogin = new LocalStrategy(localOptions, async(email, password, done) =>{
  try{
    const existingUser = await User.findOne({email})
    if(!existingUser) return done(null, false)
    console.log('Entra aqui')
    const isMatch = existingUser.comparePassword(password)
    if(!isMatch) return done(null, false)
    return done(null, existingUser)

  } catch(e) {
    done(e)
  }
})


const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: keys.secret
}

const jwtLogin = new Strategy(jwtOptions, async (payload, done) => {
  try{
    const user = await User.findById(payload.sub)
    if(user) done(null, user);
    else done(null, false)
  } catch(e) {
    done(e, false)
  }
})

passport.use(jwtLogin)
passport.use(localLogin)
