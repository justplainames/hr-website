import mongoose from 'mongoose';

const personalSchema = new mongoose.Schema({
    userId: String,
    type: String,
    from: String,
    to: String,
    days: Number,
    daytype: String,
    remarks: String
});

var Getpersonal = mongoose.model('personals', personalSchema);

export default Getpersonal;
