/*var http=require('http');
function handleRequest(req,resp){
    resp.end("hello vijay");
}

var server=http.createServer(handleRequest);
server.listen(8080,function(){
    console.log("server started at 8080");
}); */
var express=require('express');
var expressLayouts=require('express-ejs-layouts');
var app=express();
var port=8080;
app.set('view engine','ejs');
app.use(expressLayouts);   
var router=require('./app/routes');
app.use("/",router);     
//set static files such as css,imges etc..
app.use(express.static(__dirname+ '/public'));
app.listen(port,function(){
    console.log("app started");
});

