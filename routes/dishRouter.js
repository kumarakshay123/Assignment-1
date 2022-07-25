

const express= require('express');

const router=express.Router();


router.route('/')

.all((req,res,next)=>{

    res.statusCode=200;
    res.setHeader('Content-type','application/json');
    next();

})





.get((req,res,next)=>{
    res.end("Sending all  the dishes to you");
})


.post((req,res,next)=>{
    res.end("Creating  a dish for you");
})

.put((req,res,next)=>{
    res.end('Not supported on ' + ' /dishes');
})

.delete((req,res,next)=>{
    res.end("Delete all the dishes on the server");
});


// second section dishid

router.route('/:dishid') 

.all((req,res,next)=>{

    res.statusCode=200;
    res.setHeader('Content-type','application/json');
    next();

})


.get((req,res,next)=>{
    res.end("Will get dish with id"+req.params.dishid);
})


.post((req,res,next)=>{
    res.end("Post not supported on /dishes/:dishid");
})


.put((req,res,next)=>{
    res.end("updating the dish with  id " + req.params.dishid);
})

.delete((req,res,next)=>{
    res.end("deleting the dish with  id " + req.params.dishid);
})


module.exports=router;









