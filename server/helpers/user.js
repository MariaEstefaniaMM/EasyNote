const db = require('./db');
const bcrypt = require('bcryptjs');
const userQueries = require('./../helpers/queries').user;

module.exports.login = (username)=>{
    return new Promise((res,rej)=>{
        db.connect().then((obj)=>{
            obj.one(userQueries.getUser,[username]).then((data)=>{
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

module.exports.comparePassword = (candidatePassword, hash)=>{
    console.log('Aqui'+candidatePassword+ hash)
    return new Promise((res,rej) => {
        let hashedPass = bcrypt.hashSync(hash, 10);
        bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
            if (err) throw rej(err);
            res(isMatch);
        });
    });
};

module.exports.signup = (name, lastname, username, email, password)=>{
    console.log(name+lastname+email+password+userQueries.addUser)
        return new Promise((res,rej)=>{
            let hashedPass = bcrypt.hashSync(password, 10);
              db.connect().then((obj)=>{
                  obj.one(userQueries.addUser,
                    [name, lastname, username, email, hashedPass]).then((data)=>{
                    console.log(data)
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

module.exports.checkUser = (username, email)=>{
    return new Promise((res,rej)=>{ 
        db.connect().then((obj)=>{
            obj.one(userQueries.checkUser,[username, email]).then((data)=>{
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