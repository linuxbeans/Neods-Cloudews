const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    
    company_name: {
        type: String,
        required: true
    },
    abv: {
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
    resp_spec: { type: String },
    registration_no: { type: String },
    small_entity: { type: String },
    vat_Exempt: { type: String },
    accounting: { type: String},
    paralegal: { type: String},
    primary_firm: { type: String},
    title: { type: String },
    name: { type: String },
    role: { type: String },
    primary_phone: { type: Number },
    email: { type: String ,
        unique:[true,"Email is already present"],},
    second_phone: { type: Number },
    email_second: { type: String ,
        unique:[true,"Email is already present"],},
    fax: { type: String},
})
// now we need to create schema 
const Clients = new mongoose.model("Client", clientSchema);
module.exports = Clients;

//read the data of registered Students

