

const express= require('express');

const router=express.Router();


router.route('/')

.all((req,res,next)=>{

    res.statusCode=200;
    res.setHeader('Content-type','application/json');
    next();

})




.get((req,res,next)=>{
    res.end("will get promotion");
})


.post((req,res,next)=>{
    res.end(" Create a promotion");
})


.put((req,res,next)=>{
    res.end('Not supported on ' + ' /promotions');
})

.delete((req,res,next)=>{
    res.end("Delete all the promotions on the server");
});


// second section dishid

router.route('/:promoId') 

.all((req,res,next)=>{

    res.statusCode=200;
    res.setHeader('Content-type','application/json');
    next();

})


.get((req,res,next)=>{
    res.end("Will get promo with id"+req.params.promoId);
})


.post((req,res,next)=>{
    res.end("Post not supported on /promotions/:promoid");
})


.put((req,res,next)=>{
    res.end("updating the promotion with  id " + req.params.promoId);
})

.delete((req,res,next)=>{
    res.end("deleting the promotion with  id " + req.params.promoId);
})


module.exports=router;















