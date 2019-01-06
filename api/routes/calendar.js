const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Calendar = require("../models/modelcalendar");
// const Product = require("../models/product");
const checkAuth = require('../middleware/check-auth.js');

router.post("/",checkAuth (req, res, next) => {
  const calendar = new Calendar({

      _id:new mongoose.Types.ObjectId(),
      name:req.body.name,
      content:req.body.content,


  });

  calendar
    .save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: "Handling POST requests to /products",
        createdProduct: result
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});
// router.post('/', (req, res, next) => {
//   const calendar =  new Calendar({
//       userId:new mongoose.Types.ObjectId(),
//       name:req.body.name,
//       day:[{content:req.body.content,date:req.body.date}]
//     });
//     calendar.save().then(result =>{
//
//       console.log("err"+result);
//
//     }).catch(err => console.log(err));
//         res.status(200).json({
//         message:'Handling Get request'
//
//     });
//
// });
// router.get('/:userId',(req,res,next)



router.get("/", (req, res, next) => {
  Calendar.find()
    .exec()
    .then(docs => {
      console.log(docs);
      res.status(200).json(docs);

    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

router.get("/:userId", (req, res, next) => {
  const id = req.params.userId;
  Calendar.findById(id)
    .exec()
    .then(doc => {
      console.log("From database", doc);
      if (doc) {
        res.status(200).json(doc);
      } else {
        res
          .status(404)
          .json({ message: "No valid entry found for provided ID" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

/*Delete Data*/

router.delete("/:userId", (req, res, next) => {
  const id = req.params.userId;
  Calendar.remove({ _id: id })
    .exec()
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

/*update data*/

// router.patch("/userId" ,(req, res,next) => {
//
//   const id = req.params.userId;
//   const updateOps  = {};
//   for (const ops of req.body) {
//     updateOps[ops.propName] = ops.value;
//   }
//   Calendar.update({_id:id},{$set:updateOps})
//     .exec().
//     then(result =>{
//       console.log(result);
//       res.status(200).json(result);
//     })
//     .cath(err =>{
//       console.log(err);
//       res.status(500).json({
//         error:err
//       });
//     });
// });

router.patch("/:userId", (req, res, next) => {
  const id = req.params.productId;
  const updateOps = {};
  for (const ops of req.body) {

    updateOps[ops.propName] = ops.value;
  }
  Calendar.update({ _id: id }, { $set: updateOps })
    .exec()
    .then(result => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});





module.exports  = router;
