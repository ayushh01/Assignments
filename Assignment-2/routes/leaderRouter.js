const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.all((req,res,next)=>{
    res.statusCode =200;
    res.setHeader('Content-type','text/plain');
    next();
})

.get((req,res,next)=>{
    res.end("Will send the info of all Leaders!");
})

.post((req,res,next)=>{
    res.end("Post the Leader with name: " + req.body.name + " with description: "+ req.body.description );
})

.put((req,res,next)=>{
    res.statusCode = 403;
    res.end("Put is not for /leaders");
})

.delete((req,res,next)=>{
    res.end("Delete all of your leaders");
})

leaderRouter.route('/:leaderId')
.all((req,res,next)=>{
    res.statusCode =200;
    res.setHeader('Content-type','text/plain');
    next();
})

.get((req,res,next)=>{
    res.end("Will send the info of  Leader : " + req.params.leaderId   );
})

.post((req,res,next)=>{
    res.statusCode = 403;
    res.end("Post is not for : "+ req.params.leaderId );
})

.put((req,res,next)=>{
    res.write("Updating the Leaders: " + req.params.leaderId );
    res.end(" Post the Leaders with name: " + req.body.name + " with description: "+ req.body.description );
})

.delete((req,res,next)=>{
    res.end("Delete your leader: " + req.params.leaderId );
})

module.exports = leaderRouter;