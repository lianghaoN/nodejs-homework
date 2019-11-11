var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');
});

router.post('/list',(req,res,next)=>{
  var dataJson = fs.readFileSync('data.json','utf-8');
  // console.log(dataJson);
  // console.log(req);
  var userInfo = JSON.parse(dataJson);
  var username = req.body.username;
  var userpwd = req.body.pwd;
  console.log(userpwd,username);
  for(let i=0;i<userInfo.users.length;i++){
    console.log(userInfo.users[i].username);
    console.log(userInfo.users[i].password);
    if (userInfo.users[i].username == username && userInfo.users[i].password == userpwd){
      res.render('list',{list : JSON.parse(dataJson).chapterList});
      break;
    }else{
      console.log('用户名或密码错误！');
    }
  }
})

module.exports = router;
