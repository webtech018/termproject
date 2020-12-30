function checksessionauth (req,res,next){
    //set variable for pug files
    if(req.session.user)
    next();
    else return res.redirect("/login");
}
module.exports = checksessionauth;