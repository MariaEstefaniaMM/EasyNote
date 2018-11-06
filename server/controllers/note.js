const express = require('express');
const note = require('../helpers/note');
const isAuth = require('../middlewares/isAuth').isAuth;
let router = express.Router();

router.get('/getUserNotes',isAuth, (req,res)=>{
      console.log('/getUserNotes');
      note.getUserNotes(req.user.user_id).then((data) => {
          res.send({status:200, notes:data});
        }).catch((err) => {
          console.log(err);
          res.send({
            status:403,
            message:'Could not get notes'
          })
        }) 
});

router.post('/createNote',isAuth,(req,res)=>{
      console.log(req);
      console.log("createNote", req.body.note_title+ req.body.note_content+ req.user.user_id);
      note.createNote(req.body.note_title, req.body.note_content,req.body.note_image_url, req.user.user_id).then((data) => {
        res.send({
          data:data,
          status:200});
      }).catch((err) => {
        console.log(err)
        res.send({
          status:403,
          message:'Note creation Failed'
        });
      })
});

router.put('/updateNote',isAuth, (req,res)=>{
    console.log(req)
    console.log(req.body.note_title+ req.body.note_content+ req.user.user_id+req.body.note_image_url)
    note.updateNote(req.body.note_id, req.body.note_title, req.body.note_content,req.body.note_image_url).then((data) => {
      res.send({
        data:data,
        status:200});
    }).catch((err) => {
      console.log(err)
      res.send({status:403, message:'Could not get notes'});
    })
});

router.post('/deleteNote',isAuth, (req, res) => {
  console.log(req.body.note_id)
    note.deleteNote(req.body.note_id).then((data) => {
        console.log(data);
        res.send({status:200});
      }).catch((err) => {
        console.log(err);
        res.send({status:403, message:'Delete note failed'})
      })
});

module.exports = router;