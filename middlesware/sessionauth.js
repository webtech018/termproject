function sessionauth(req,res,next){
    //set variable for pug files
    res.locals.user = req.session.user;
    next();
}
module.exports = sessionauth;