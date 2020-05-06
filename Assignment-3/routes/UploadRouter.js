const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const authenticate = require('../authenticate');
const UploadRouter = express.Router();

UploadRouter.use(bodyParser.json());

var storage = multer.diskStorage({
    destination: (req,file ,cb) =>{
        cb(null , 'public/images');
    },
    filename: (req,file,cb) =>{
        cb(null , file.originalname );
    }

});

const imageFilter = (req,file,cb) =>{
    if(!file.originalname.match(/\.(jpg|jpeg|png|gif)$/))
    {
        return cb(new Error('you can upload image file only'));
    }
    cb(null,true);
};

const upload = multer({storage:storage , fileFilter:imageFilter})
UploadRouter.route('/')
.get(authenticate.verifyUser,authenticate.verifyAdmin , (req, res, next) => {
    res.statusCode = 403;
    res.end('get operation is not supported on /uploadimages');
})

.post(authenticate.verifyUser,authenticate.verifyAdmin ,upload.single('imageFile'), (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','application.json');
    res.json(req.file);
})

.put(authenticate.verifyUser,authenticate.verifyAdmin , (req, res, next) => {
    res.statusCode = 403;
    res.end('Put operation is not supported on /uploadimages');
})

.delete(authenticate.verifyUser,authenticate.verifyAdmin , (req, res, next) => {
    res.statusCode = 403;
    res.end('delete operation is not supported on /uploadimages');
})


module.exports = UploadRouter;