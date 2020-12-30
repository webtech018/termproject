var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/contactus', function(req, res, next) {
  res.render('other/contactus', { title: 'Express' });
});


router.get('/aboutus', function(req, res, next) {
  res.render('other/aboutus', { title: 'Express' });
});


module.exports = router;
