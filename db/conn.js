const mongoose = require('mongoose')

const url = `mongodb+srv://new-user_31:<pvI6pToIv7vLmS2Z>@cluster0.mongodb.net/newmanagement?retryWrites=true&w=majority`;

const connectionParams={
    useNewUrlParser: true,
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })
