import mongoose from 'mongoose';

const appliedSchema = new mongoose.Schema({
    userId:String,
    name:String,
    applies:[{
             types:String,
             from:String,
             to:String,
             days:Number,
             daytype:String,
             remarks:String,
             recomemdedby:String,
             approvedby:String,
             approved:Boolean,
             declined:Boolean,
             datecreated:String
         }]
});

var Getapplied = mongoose.model('appliedleaves', appliedSchema);

export default Getapplied;

// {
//     userId:String,
//     type:String,
//     from:String,
//     to:String,
//     days:Number,
//     daytype:String,
//     remarks:String
// }