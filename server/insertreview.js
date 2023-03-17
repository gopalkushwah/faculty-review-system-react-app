var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("facultyreviewsystem");
  let review = {teacherid:'urmila mahor',reviewby:'33',description:'amazing teacher',reviewdate:'2022/11/17'}
  dbo.collection('reviews').insertOne(review,(err,res)=>{
    if (err){
        throw err 
    }else{
        console.log('data inserted')
    }
    
  })
  });