const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://new-user_31:<pvI6pToIv7vLmS2Z>@cluster0.fnjb9.mongodb.net/Cluster0",{
   
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connection is successful");
}).catch((err)=>{
    console.log(err);
})