const fs = require('fs');
const express = require('express');
const app = express();
const port = '3000';

app.get('/', function(req,res){
    res.send({"response":'please send query'});
})

app.get('/converse/hi', function(req,res){
    res.send({"response":'hello welcome to fin bot'});
    
})
app.get('/converse/need%20access', function(req,res) {
    fs.readFile('response1.txt',function(err,data){
        if(err) throw err;
        res.send(data)
    })
})
app.get('/converse/needaccess', function(req,res){
    fs.readFile('response1.txt',function(err,data){
        if(err) throw err;
        res.send(JSON.parse(data));
    })
})

app.listen(port,function(err){
    if(err) throw err;
    console.log("Server is running on port "+ port );
})
