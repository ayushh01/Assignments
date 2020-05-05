const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var PassportLocalMongoose = require('passport-local-mongoose');

var UserSchema = new Schema({
    firstname:{
        type:String,
        default:''
    },
    lastname:{
        type:String,
        default:''
    },
    admin:{
        type:Boolean,
        default:false
    }
});

UserSchema.plugin(PassportLocalMongoose);

var User = mongoose.model('User' , UserSchema);

module.exports = User;