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
        res.send({"response":"Please select the app <button value='tm1' name='tm1'>Tm1</button>  <button value='axp_im' name='axp_im'>Axp_im</button>"});        
});

app.use('/converse', commanRouter);

app.get('/',function(req,res){
    res.send({"response":'please send query'});
});


app.listen(port, function(){
    console.log("running");
});