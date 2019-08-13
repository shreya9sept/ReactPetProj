var express    = require("express");
var bodyParser = require('body-parser');var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/login', function(req, res) {

    var email= req.body.email;
    var password = req.body.password;
    console.log(email +'--'+ password);
      if(email=='shreya@gmail.com'){
        if(password == 'shreya'){
          res.send({
            "code":200,
            "success":"login sucessfull"
              });
        }
        else{
          res.send({
            "code":204,
            "success":"Email and password does not match"
              });
        }
      }
      else{
        res.send({
          "code":204,
          "success":"Email does not exits"
            });
      } 
    
});

app.listen(5000);