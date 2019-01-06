var mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');


  const UserSchema = mongoose.Schema({

    _id: mongoose.Schema.Types.ObjectId,

    email:{
      type: String,
      require: true,
      unique: true,
      match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/


    },

    password:{type:String,require:true}
});

const User = mongoose.model('Users', UserSchema );


module.exports = User;
