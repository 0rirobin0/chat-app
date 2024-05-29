const http_error =require('http-errors');

// 404  not found error handler

function notFoundhandler(req,res,next)
    {
        next(http_error);

    }
    

//  default error handler
 
function errorhandler(err,req,res,next) {

    res.render('error');
    
}

module.exports={
    errorhandler,
    notFoundhandler
}