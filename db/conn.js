const mongoose = require("mongoose");
mongoose.connect("mongodb://business-solutions:27017/newmanagement",{
   
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connection is successful");
}).catch((err)=>{
    console.log(err);
})
