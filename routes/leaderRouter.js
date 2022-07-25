

const express= require('express');

const router=express.Router();


router.route('/')

.all((req,res,next)=>{

    res.statusCode=200;
    res.setHeader('Content-type','application/json');
    next();

})



.get((req,res,next)=>{
    res.end("get  the leaders to you");
})

.post((req,res,next)=>{
    res.end("Creating  a leader for you");
})


.put((req,res,next)=>{
    res.end('Not supported on ' + ' /leaders');
})

.delete((req,res,next)=>{
    res.end("Delete all the leaders on the server");
});


// second section dishid

router.route('/:leaderId') 

.all((req,res,next)=>{

    res.statusCode=200;
    res.setHeader('Content-type','application/json');
    next();

})

.get((req,res,next)=>{
    res.end("get leader  with id"+req.params.leaderId);
})


.post((req,res,next)=>{
    res.end("Post not supported on /dishes/:dishid");
})


.put((req,res,next)=>{
    res.end("updating the leader with  id " + req.params.leaderId);
})

.delete((req,res,next)=>{
    res.end("deleting the leader with  id " + req.params.leaderId);
})


module.exports=router;









