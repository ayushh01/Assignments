const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')
.all((req,res,next)=>{
    res.statusCode =200;
    res.setHeader('Content-type','text/plain');
    next();
})

.get((req,res,next)=>{
    res.end("Will send the info of all dishes");
})

.post((req,res,next)=>{
    res.end("Post the dish with name: " + req.body.name + " with description: "+ req.body.description );
})

.put((req,res,next)=>{
    res.statusCode = 403;
    res.end("Put is not for /dishes");
})

.delete((req,res,next)=>{
    res.end("Delete all of your dishes");
})

dishRouter.route('/:dishId')
.all((req,res,next)=>{
    res.statusCode =200;
    res.setHeader('Content-type','text/plain');
    next();
})

.get((req,res,next)=>{
    res.end("Will send the info of  dishes: " + req.params.dishId   );
})

.post((req,res,next)=>{
    res.statusCode = 403;
    res.end("Post is not for : "+ req.params.dishId );
})

.put((req,res,next)=>{
    res.write("Updating the dish: " + req.params.dishId );
    res.end(" Post the dish with name: " + req.body.name + " with description: "+ req.body.description );
})

.delete((req,res,next)=>{
    res.end("Delete your dish: " + req.params.dishId );
})

module.exports = dishRouter;