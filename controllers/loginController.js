const mongojs = require('mongojs');
const db = mongojs('base', ['users']);

const loginController = (req, res) => {
  let name = req.body.name;
  let pass = req.body.pass;
  console.log(name, pass);

  db.users.find({ name: name, pass: pass }, (err, docs) => {
    if (err) {
      //error
    } else {
      if (docs.length === 1) {
        let user = docs[0];
        if (user.role == 'admin') {
          res.redirect('/admin');
        } else {
          res.redirect('/');
        }
      } else {
        res.redirect('/');
      }
    }
  });
};

module.exports = loginController;
