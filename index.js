const express = require('express');
require("./db/conn");
const server = express();

const Client = require("./models/clients");

const Associates = require("./models/Associates.js");

server.set('view engine', 'ejs')

server.use(express.static(__dirname + '/assets'))

server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.get('/', (req, res) => {
    res.render('index')
})


server.get("/list_all_client", (req, res) => {
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

//create a new client in our databases

server.post("/clients", async (req, res) => {
    try {
        console.log(req.body.company_name);
        const register_client = new Client({
            company_name: req.body.company_name,
            abv: req.body.abv,
            street_address_first: req.body.street_address_first,
            street_address_second: req.body.street_address_second,
            city: req.body.city,
            postel_code: req.body.postel_code,
            state: req.body.state,
            country: req.body.country,
            main_phone: req.body.main_phone,
            main_fax: req.body.main_fax,
            main_email: req.body.main_email,
            resp_spec: req.body.resp_spec,
            registration_no: req.body.registration_no,
            accounting: req.body.accounting,
            paralegal: req.body.paralegal,
            primary_firm: req.body.primary_firm,
            small_entity: req.body.small_entity,
            vat_Exempt: req.body.vat_Exempt,
            title: req.body.title,
            name : req.body.name,
            role : req.body.role,
            primary_phone: req.body.primary_phone,
            email: req.body.email,
            second_phone : req.body.second_phone,
            email_second : req.body.email_second,
            fax:req.body.fax ,
            
        })
        const registered = await register_client.save();
        res.status(201).render('list_all_client');
    } catch (error) {
        res.status(400).send(error);
    }
})



server.post("/associate", async (req, res) => {
    try {
       // console.log(req.body.companyname);
       // console.log(req.body.abv_name);
        const register_assoicates = new Associates({
            companyname: req.body.companyname,
            abv_name: req.body.abv_name,
            street_address_first: req.body.street_address_first,
            street_address_second: req.body.street_address_second,
            city: req.body.city,
            postel_code: req.body.postel_code,
            state: req.body.state,
            country: req.body.country,
            main_phone: req.body.main_phone,
            main_fax: req.body.main_fax,
            main_email: req.body.main_email,
            small_entity: req.body.small_entity,
            
        })
        const registered = await register_assoicates.save();
        res.status(201).render('list_all_associates');
    } catch (error) {
        res.status(400).send(error);
    }
})

// server.get("/Clientsget",async(req,res)=>{
//     try{
//          const ClientData = await Client.find();
//          res.send(ClientData);
//     }catch(e){
//          res.send(e);
//     }
// })

server.get("/associates_data",async(req,res)=>{
    try{
        const associates_data = await Associates.find();
        res.send(associates_data); 
    }catch(e){
        res.send(e);   
    }
})


server.get("/Client_data",async(req,res)=>{
    try{
        const client_data = await Client.find();
        res.send(client_data); 
    }catch(e){
        res.send(e);   
    }
})


// server.get("/Client",async(req,res)=>{
//     try{
//      const client_data = await Client.find();   
//      res.send(client_data);
//     }catch(e){
//       res.send(e); 
//     }
// })

// server.get('/',(req,res)=>{
//     var users=[];
//     for(var i=0;i<10;i++){
//         //we generate fake data to insert into db collection
//         users.push({'company_name':faker.company_name.firstName()});
//     }
//     Client.insertMany(users,(err,autoData)=>{
//          if(err){
//              console.log(err);
//          }else{
//              res.render('demo');
//          }
//     });
// });

server.post('/auto',(req,res)=>{
    Client.find({company_name:{'$regex':req.body.auto}},(err,autoData)=>{
         if(err){
             console.log(err);
         }else{
             res.json({data:autoData});
         }
});
});

// autocomplete=require('./models/autocomplete');
// server.get('/autocomplete/:search',autocomplete.find);



// server.get('/findfirst', function(req, res) {
//     Client.findOne({ClientId:{$gt:1}}, 
//     function(err, data) {
//         if(err){
//             console.log(err);
//         }
//         else{
//             res.send(data);
//         }
//     });  
// });


//create a new Associates in our databases

server.post("/associate",async (req,res)=>{
    try{

       res.send(req.body.companyname);
       res.send(req.body.abv_name); 
       
      }catch(error){
       res.status(400).send(error); 
    }
})


server.listen(7000, function () {
    console.log('http://localhost:7000')
})



