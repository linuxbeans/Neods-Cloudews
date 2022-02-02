const mongoose = require('mongoose');

const assoicateSchema = new mongoose.Schema({
    companyname: {
        type: String,
        required: true
    },
    abv_name:{
        type: String,
    },
    street_address_first: { type: String},
    street_address_second: { type: String},
    city: { type: String},
    postel_code: { type: String },
    state: { type: String },
    country: { type: String},
    main_phone: { type: Number },
    main_fax: { type: String},
    main_email: {
         type: String,
         unique:[true,"Email is already present"],
    },
    Client_Firm: { type: String },
})
// now we need to create schema 
const assoicate = new mongoose.model("Assoicate", assoicateSchema);
module.exports = assoicate;