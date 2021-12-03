import mongoose from 'mongoose';

const leavesSchema = new mongoose.Schema({
    userId: String,
    birthday: Number,
    ns: Number,
    infantcare: Number,
    sharedparental: Number,
    annual: Number,
    hospitalize: Number,
    maternity: Number,
    compassionate: Number,
    unpaid: Number,
    timeoff: Number,
    left: Object,
    applied:Object,
    carryforward:Object
});

var Getleaves = mongoose.model('leaves', leavesSchema);

export default Getleaves;
