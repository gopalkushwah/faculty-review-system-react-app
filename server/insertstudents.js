var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("facultyreviewsystem");
  let review = {name:'Girraj',branch:'computer science',email:'abcd@gmail.com',password:'1234',rollno:'33',classin:'12',phone:'9876543210'}
  dbo.collection('students').insertOne(review,(err,res)=>{
    if (err){
        throw err 
    }else{
        console.log('data inserted')
    }
    
  })
  });