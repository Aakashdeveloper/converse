import fs from 'fs';
import express from 'express';
const app = express();
const port = '6789';

app.get('/', (req,res) => {
    res.send({"response":'please send query'})
})

app.get('/converse/hi', (req,res) => {
    res.send({"response":'hello welcome to fin bot'})
    
})
app.get('/converse/need%20access', (req,res) => {
    fs.readFile('response1.txt',(err,data)=> {
        res.send(data)
    })
})
app.get('/converse/needaccess', (req,res) => {
    fs.readFile('response1.txt',(err,data)=> {
        if(err) throw err;
        res.send(JSON.parse(data));
    })
})

app.listen(port,(err)=>{
    if(err) throw err;
    console.log(`Server is running on port ${port}`);
})
