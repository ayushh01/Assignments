const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((req,res,next)=>{
    res.statusCode =200;
    res.setHeader('Content-type','text/plain');
    next();
})

.get((req,res,next)=>{
    res.end("Will send the info of all Promotions");
})

.post((req,res,next)=>{
    res.end("Post the Promotions with name: " + req.body.name + " with description: "+ req.body.description );
})

.put((req,res,next)=>{
    res.statusCode = 403;
    res.end("Put is not for /promotions");
})

.delete((req,res,next)=>{
    res.end("Delete all of your promotions");
})

promoRouter.route('/:promoId')
.all((req,res,next)=>{
    res.statusCode =200;
    res.setHeader('Content-type','text/plain');
    next();
})

.get((req,res,next)=>{
    res.end("Will send the info of  Promotions: " + req.params.promoId   );
})

.post((req,res,next)=>{
    res.statusCode = 403;
    res.end("Post is not for : "+ req.params.promoId );
})

.put((req,res,next)=>{
    res.write("Updating the Promotions: " + req.params.promoId );
    res.end(" Post the Promotions with name: " + req.body.name + " with description: "+ req.body.description );
})

.delete((req,res,next)=>{
    res.end("Delete your promotions: " + req.params.promoId );
})

module.exports = promoRouter;