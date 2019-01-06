const mongoose = require('mongoose');
// const calendarSchema = mongoose.Schema;

const calendarSchema = mongoose.Schema({

    // userId:mongoose.Schema.Types.ObjectId,
    _id: mongoose.Schema.Types.ObjectId,
    name:String,
    userProfileURL:String,

    content: String,
    date: { type: Date, default: Date.now },

});
// crete model

  // const  = mongoose.model('calendar',calendarSchema);

module.exports = mongoose.model('calendar',calendarSchema) ;
