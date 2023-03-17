var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("facultyreviewsystem");
  let review = {username:'admin',password:'admin'}
  dbo.collection('admin').insertOne(review,(err,res)=>{
    if (err){
        throw err 
    }else{
        console.log('data inserted')
    }
    
  })
  });