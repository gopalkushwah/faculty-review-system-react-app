var express= require('express');
var cors= require('cors');
var app=express();
app.use(express.json());
app.use(cors());

var MongoClient=require('mongodb').MongoClient;
var url="mongodb://localhost:27017";
var reviews= []
var students = []
var teachers= []
var dbo= null

MongoClient.connect(url,function(err,db){
    if(err) throw err;
    dbo=db.db("facultyreviewsystem");
})

app.post('/student/create',(req,res)=>{
    var error=false;
    dbo.collection("students").insertOne(req.body,function(err,data){
        if (err){
            error=true;
        }else{
            error=false;
        }
    })
    if (error){
        res.json({error:true, message:"error"})
    }else{
        res.json({error:false, message:"added successfully"})
    }
});

app.post('/review/create',(req,res)=>{
    var error=false;
    dbo.collection("reviews").insertOne(req.body,function(err,data){
        if (err){
            error=true;
        }else{
            error=false;
        }
    })
    if (error){
        res.json({error:true, message:"error"})
    }else{
        res.json({error:false, message:"added successfully"})
    }
});

app.post('/teacher/add',(req,res)=>{
    var error=false;
    dbo.collection("teachers").insertOne(req.body,function(err,data){
        if (err){
            error=true;
        }else{
            error=false;
        }
    })
    if (error){
        res.json({error:true, message:"error"})
    }else{
        res.json({error:false, message:"added successfully"})
    }
});

app.get('/students',(req,res)=>{
    dbo.collection("students").find({}).toArray((err,result)=>{
        if (err) throw err;
        students=result;
    })
    res.json(students);
})

app.get('/teachers',(req,res)=>{
    dbo.collection("teachers").find({}).toArray((err,result)=>{
        if (err) throw err;
        teachers=result;
    })
    res.json(teachers);
})

app.get('/reviews',(req,res)=>{
    dbo.collection("reviews").find({}).toArray((err,result)=>{
        if (err) throw err;
        reviews=result;
    })
    res.json(reviews);
})

app.listen(9000);