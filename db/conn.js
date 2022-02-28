const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017@192.168.55.24/newmanagement",{
   
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connection is successful");
}).catch((err)=>{
    console.log(err);
});
