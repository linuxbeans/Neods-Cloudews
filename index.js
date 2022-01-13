// const express = require("express");
// const path = require("path");
// const app = express();
// const port = 8000;

// console.log(path.join(__dirname, ''));
// app.use(express.static(path));

// app.get("/",(req,res)=>{
//     res.send("hello for the express server");
// });

// app.listen(port,()=>{
//   console.log(`listening to the port ${port}`);
// });


const express = require('express');
//const bodyParser = require('body-parser');
//const path = require('path')

const server = express()

server.set('view engine','ejs')
//server.use(bodyParser.urlencoded())

server.use(express.static(__dirname+'/assets'))


server.get('/',(req,res)=>
{
    res.render('index')
})


server.get("/gallery",(req,res)=>
{
    res.render('gallery')
})

server.get("/contact",(req,res)=>
{
    res.render('contact')
})

server.get("/userlist",(req,res)=>
{
    res.render('userlist')
})

server.get("/customerlist",(req,res)=>
{
    res.render('customerlist')
})

server.get("/Client",(req,res)=>
{
    res.render('Client')
})

server.get("/list_all_client",(req,res)=>
{
    res.render('list_all_client')
})

server.get("/list_all_associates",(req,res)=>
{
    res.render('list_all_associates')
})

server.get("/list_all_document",(req,res)=>
{
    res.render('list_all_document')
})

server.get("/list_all_matters",(req,res)=>
{
    res.render('list_all_matters')
})

server.get("/list_all_finance",(req,res)=>
{
    res.render('list_all_finance')
})

server.get("/list_contact",(req,res)=>
{
    res.render('list_contact')
})

server.get("/list_contact_view",(req,res)=>
{
    res.render('list_contact_view')
})

server.get("/list_all_administrative",(req,res)=>
{
    res.render('list_all_administrative')
})

server.get("/administrative_user_add",(req,res)=>
{
    res.render('administrative_user_add')
})

server.get("/administrative_user_roles",(req,res)=>
{
    res.render('administrative_user_roles')
})
server.listen(8000,function()
{
    console.log('http://localhost:8000')
})

