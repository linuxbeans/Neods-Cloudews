const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://new-user_31:<password>@cluster0.fnjb9.mongodb.net/test/Cluster0",{
   
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connection is successful");
}).catch((err)=>{
    console.log(err);
})