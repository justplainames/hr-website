import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role:String,
    team:[{
        id:String,
        name:String,
        email:String,
        role:String
    }],
    supervisor:[{
        id:String,
        name:String,
        email:String,
        role:String
    }],

});

var GetUser = mongoose.model('profiles', userSchema);

export default GetUser;
