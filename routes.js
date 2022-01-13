const express = require('express');
const app = express();

const data = ['code','sleep','eat','hello','used'];

module.exports = (app)=>{

    app.get('/',(req,res)=>{
        // res.sendFile(__dirname + 'index.html');
         //res.sendfile('./index.html');
         res.render('home',{data:data});
     })
    
    app.get('/about',(req,res)=>{
        res.send("This is a about us page");
    })

    app.get('/profile/:id',(req,res)=>{
        data = {
            name:req.params.id
        }
        res.render('home',{data:data})
    })
}

