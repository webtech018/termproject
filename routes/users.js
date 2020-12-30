var express = require('express');
var router = express.Router();
var User = require("../models/user");


router.get('/register', function(req, res, next) {
  res.render('users/register', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('users/login', { title: 'Express' });
});

router.post('/register', async function(req, res, next) {
  let user = new User(req.body);
  await user.save();
  res.redirect("/");
});

router.post('/login', async function(req, res, next) {
  let user = await User.findOne({
    email:req.body.email,
    password:req.body.password});
    if(!user) return res.redirect("/login");
    req.session.user = user;
    return res.redirect("/products");
});

router.get("/logout",function (req,res,next){
  req.session.user = null;
  res.redirect("/");
});

module.exports = router;
