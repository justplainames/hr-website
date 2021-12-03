import mongoose from 'mongoose';

const notificationSchema = mongoose.Schema({
    approved: Boolean,
    read: Boolean,
    accepted:String,
    userId:String,
    notifications:[{
        userId:String,
        types:String,
        from:String,
        to:String,
        requester:Object,
        days:Number,
        daytype:String,
        remarks:String,
        requestedon:String,
        recomemdedby:String,
        approvedby:String,
        status:Object,
        datecreated:String
    }]
})

var GetNotification = mongoose.model('notifications', notificationSchema);

export default GetNotification;