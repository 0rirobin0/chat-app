function getlogin(req,res,next) {

    res.render('index',{
        title: 'login Chat application'
    })
    
}

module.exports = 
{
    getlogin,
};