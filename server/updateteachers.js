var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("facultyreviewsystem");
  let myquery = {name:'vipin sir'}
  let newvalue={$set:{name:'vipin gourkhede',designation:'professor'}}
  dbo.collection('teachers').updateOne(myquery,newvalue,(err,res)=>{
    if (err){
        throw err 
    }else{
        console.log('data inserted')
    }
    
  })
  });