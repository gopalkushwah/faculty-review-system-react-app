var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("facultyreviewsystem");
  dbo.createCollection("reviews", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
  });
  dbo.createCollection("students", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
  });
  dbo.createCollection("teachers", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
  });
  dbo.createCollection("admin", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});