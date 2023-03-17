var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("facultyreviewsystem");
  let review = {name:'vipin sir',branch:'computer science',designation:'faculty'}
  dbo.collection('teachers').insertOne(review,(err,res)=>{
    if (err){
        throw err 
    }else{
        console.log('data inserted')
    }
    
  })
  });