const express = require('express');
const multer = require('multer');
const note = require('../helpers/note');
const isAuth = require('../middlewares/isAuth').isAuth;


let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/uploads');
    },
    filename: function (req, file, cb) {
      cb(null, `${file.originalname}`)
       }
    })

let upload = multer({storage:storage});
let router = express.Router();

router.get('/getUserNotes',isAuth, (req,res)=>{
      console.log('/getUserNotes');
      note.getUserNotes(req.user.user_id).then((data) => {
        if(data.length == 0){
          res.send({status:403});
        } else {
          console.log(data);
          res.status(200).send({status:200, notes:data});
        }
        }).catch((err) => {
          console.log(err);
          res.send({status:403})
        }) 
});
/*
router.get('/getNote',isAuth, (req,res)=>{ 
    product.getNote(req.param.note_id).then((data) => {
      if(data.length == 0){
        res.send({status:403});
      } else {
        res.status(200).send({status:200, notes:data});
      }
      }).catch((err) => {
        console.log(err);
        res.send({status:403})
      })
});*/

router.post('/createNote',isAuth,upload.single('file'),(req,res)=>{
    //if (req.user !== undefined) {
      console.log(req.file.path)
      //console.log(req)
      console.log(req.body.note_title+ req.body.note_content+req.file.path+ req.user.user_id)
      note.createNote(req.body.note_title+ req.body.note_content+req.file.path+ req.user.user_id).then((data) => {
        res.send({
          data:data,
          status:200});
      }).catch((err) => {
        console.log(err)
        res.send({status:403});
      })
    //} else {
      //res.send({status:500});
    //}
});

router.put('/updateNote',isAuth, upload.single('file'),(req,res)=>{
  //if (req.user !== undefined) {
    console.log(req.file.path);
    //console.log(req)
    console.log(req.body.note_title+ req.body.note_content+req.file.path+ req.user.user_id)
    note.updateNote(req.body.note_title+ req.body.note_content+req.file.path+ req.user.user_id).then((data) => {
      res.send({
        data:data,
        status:200});
    }).catch((err) => {
      console.log(err)
      res.send({status:403});
    })
  //} else {
    //res.send({status:500});
  //}
});

router.delete('/deleteNote',isAuth, (req, res) => {
  console.log(req.body.note_id)
  //console.log(req)
  //if (req.user !== undefined) {
    note.deleteNote(req.body.note_id).then((data) => {
        console.log(data);
        res.send({status:200});
      }).catch((err) => {
        console.log(err);
        res.send({status:403})
      })
  //} else {
    //res.send({status:500})
  //}
});

module.exports = router;