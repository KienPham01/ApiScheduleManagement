// // require mongoose
const mongoose = require('mongoose');
const express = require('express');
const app = express();
app.use(express.json());
debugger;
mongoose.connect('mongodb://localhost/mydb', { useNewUrlParser: true })
// crete schema

const userSchema = mongoose.Schema({
  _id: new mongoose.Types.ObjectId(),
  name:String,
  password:String

});

 // crete model
const  user = mongoose.model('user', userSchema);
// 5
app.get('/api')
user.create([{name:"Peter", age:22},{name:"Venom" , age:21}])
user.find({}, (err, user) => {
  if (!err) {
    console.log(user);
  } else {
    console.log(error);

  }
});
  user.update({name: "kevin"}, {name:"kevinpham"}).exec((error,result)=>{

    console.log(result);
  })
  var dbo = db.db("mydb");
  var myquery = {name:"Peter"};

  dbo.collection("users").deleteOne(myquery,function (err,user) {

    if (err) {
      throw err;
      console.log("1 document is deleted");

    }
    else {


    }


  })

  /*
  var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myquery = { address: 'Mountain 21' };
  dbo.collection("customers").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    db.close();
  });
});*/


// user.remove({name:"Peter"}, (err) => {
//   if (err) {
//     console.log(err);
//   }
//   res.send('Success');
// });

// var myquery = {name:"Peter"}
