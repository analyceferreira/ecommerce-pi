function auth(req, res, next){
    if (typeof(req.session.userExists) != "undefined"){
        return next()
    }else{
        return res.send("usuário não está logado!")
    }
}
module.exports = auth;