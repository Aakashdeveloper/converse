var express = require('express');
var app = express();

var port = process.env.PORT||3000; 
var commanRouter = express.Router();

commanRouter.route('/hi')
    .get(function(req,res){
        res.send({"response":'hello welcome to fin bot'});    
});
commanRouter.route('/needaccess')
    .get(function(req,res){
        res.send({"response":'Please select the app'});        
});

app.use('/converse', commanRouter);

app.get('/',function(req,res){
    res.send({"response":'please send query'});
});


app.listen(port, function(){
    console.log("running");
});