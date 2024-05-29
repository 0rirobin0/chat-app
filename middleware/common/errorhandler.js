const http_error =require('http-errors');

// 404  not found error handler

function notFoundhandler(req,res,next)
    {
        next(http_error);

    }
    

//  default error handler
 
function errorhandler(err,req,res,next) {

   res.locals.error=
   process.env.NODE_ENV === 'Development' ? err :{ message :err.message};

   res.status(err.status || 500);
   if(!res.locals.html)
    {
        res.render("error",{
            title:"Error page",
        })
    }
    else res.json(res.locals.error);
    
}

module.exports={
    errorhandler,
    notFoundhandler
}