const express  = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser =  require('body-parser');


const app = express();

const hostname ='localhost';
const port = 3000;

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());

app.all('/dishes' ,(req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-type','text/plain');
    next();
});

app.get('/dishes' , (req,res,next)=>{
    res.end("Dishes info will be shared with you");
});

app.post('/dishes' , (req,res,next)=>{
    res.end("Will add the dishes" + req.body.name + "with detail "+ req.body.description );
});

app.put('/dishes' , (req,res,next)=>{
    res.statusCode =403;
    res.end("Put req is not for dishes");
});

app.delete('/dishes' , (req,res,next)=>{
    res.end("Will delete you requested dish");
});

app.get('/dishes/:dishid' , (req,res,next)=>{
    res.end("Dish is " + req.params.dishid );
});

app.post('/dishes/:dishid' , (req,res,next)=>{
    res.statusCode =403;
    res.end("Post method is not applicable for this " + req.params.dishid );
});

app.put('/dishes/:dishid' , (req,res,next)=>{
    res.write("Update the dish " + req.params.dishid);
    res.end("Will update the dish  with " + req.body.name + "with discription " + req.body.description );
});

app.delete('/dishes/:dishid' , (req,res,next)=>{
    res.end("Deleting dish " + req.params.dishid);
});



app.use((req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-type','text/html');
    res.end('<html><body><h1>This is express server</h1></body></html>');
})

const server = http.createServer(app);

server.listen(port ,hostname, ()=>{
    console.log(`Server is running at http://${hostname}:${port}`);
})