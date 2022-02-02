// Requiring module
require("../db/conn");
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        min: 10,
        required: true,
    },
    address: {
        type: String,
        required: true
    }

})

// collection creation
const Student = new mongoose.model('Student', studentSchema);

const createDocument = async () => {
    try {
        const nodeStudent = new Student({
            name: "erds",
            email: "rewqa@gmail.com",
            phone: 4348888245,
            address: "bhopal"
        })

        const monStudent = new Student({
            name: " mongerds",
            email: "mong@gmail.com",
            phone: 4343332245,
            address: "bhopal_es"
        })

        const mongStudent = new Student({
            name: " monggerds",
            email: "mongg@gmail.com",
            phone: 4343367777,
            address: "bh"
        })

        const mooongStudent = new Student({
            name: " mooonggerds",
            email: "mooogg@gmail.com",
            phone: 4345674895,
            address: "pal"
        })

        const moexpreStudent = new Student({
            name: "moexpreStudent",
            email: "moexpr@gmail.com",
            phone: 4345433225,
            address: "pal"
        })
        // const result = await nodeStudent.save();
        const result = await
            Student.insertMany(
                [mongStudent, monStudent, mooongStudent, nodeStudent, moexpreStudent])
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

//createDocument();


//module.exports = Student;

const getDocument = async () => {
    const result = await Student.find({ address: "pal" })
        .select({ name: 2 })
        .limit(1);
    console.log(result);
}

getDocument();