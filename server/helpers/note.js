const db = require('./db');
const noteQueries = require('./../helpers/queries').note;

module.exports.createNote = (note_title, note_content, note_image_url, user_id)=>{
    return new Promise((res,rej)=>{
          db.connect().then((obj)=>{
              obj.none(noteQueries.createNote,[note_title, note_content, note_image_url, user_id]).then((data)=>{
                  res(data);
                  obj.done();
              }).catch((error)=>{
                  console.log(error);
                  rej(error);
                  obj.done();
              })
          }).catch((error)=>{
              console.log(error);
              rej(error);
        });
    });
}

module.exports.getNotes = (user_id)=>{
    return new Promise((res,rej)=>{
          db.connect().then((obj)=>{
              obj.any(noteQueries.getNotes,[user_id]).then((data)=>{
                  res(data);
                  obj.done();
              }).catch((error)=>{
                  console.log(error);
                  rej(error);
                  obj.done();
              });
          }).catch((error)=>{
              console.log(error);
              rej(error);
        });
    });
}

module.exports.deleteNote = (note_id)=>{
	return new Promise((res,rej)=>{
		db.connect().then((obj)=>{
			obj.none(noteQueries.deleteNote, [note_id]).then((data)=>{
				res(data);
				obj.done();
			}).catch((error)=>{
				console.log(error);
				rej(error);
				obj.done();
			});
		}).catch((error)=>{
			rej(error);
		});
	});
}

module.exports.updateNote = (note_id)=>{
	return new Promise((res,rej)=>{
		db.connect().then((obj)=>{
			obj.none(noteQueries.updateNote, [note_id, note_title, note_content, note_image_url, user_id]).then((data)=>{
				res(data);
				obj.done();
			}).catch((error)=>{
				console.log(error);
				rej(error);
				obj.done();
			});
		}).catch((error)=>{
			rej(error);
		});
	});
}