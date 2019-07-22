const mongoose = require('mongoose');
const User = mongoose.model('User');
const jwt = require('jwt-simple');
const keys = require('./../config/keys')

const tokenForUser =(user) => jwt.encode({sub: user.id, iat: new Date().getTime()}, keys.secret)
exports.signUp = async function (req, res, next) {

  try {
    const { body: {email, password}} = req;
    if(!email || !password) {
      return res.status(422).send({error: 'You must provide email and password'})
    }
    const existingUser = await User.findOne({email})
    if(existingUser) {
      return res.status(422).send({error: 'Email is in use'})
    }
    const user = new User({email, password})
    await user.save()
    res.json({token: tokenForUser(user)})
  } catch(e) {
    next(e)
  }

}

exports.signIn = (req, res, next) =>{
  res.send({token: tokenForUser(req.user)})
}
