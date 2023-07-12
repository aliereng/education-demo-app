const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');

const User = require('../models/User');
const CustomError = require('../helpers/errorHelper');

const createNewUser = asyncHandler(async (req, res) => {
  await User.create(req.body)
  res.status(201).redirect("/login")
});

const loginUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) return next(new CustomError('kullanıcı bulunamadı', 401));

  if(bcrypt.compareSync(password, user.password)){
    req.session.userID = user._id;
    req.session.role = user.role;
    req.session.cookie.expires = new Date(Date.now() + 3600000);
      res.status(200).redirect('/');
  }else{
    return next(new CustomError('hatalı parola', 401));
  }
  
});
const logout = (req, res)=> {
  req.session.destroy(()=> {
    res.redirect('/')
  })
}

module.exports = {
  createNewUser,
  loginUser,
  logout
};
