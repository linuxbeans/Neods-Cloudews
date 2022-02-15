const mongoose = require('mongoose')

const url = `mongodb://new-user_31:pvI6pToIv7vLmS2Z@cluster0-shard-00-00.fnjb9.mongodb.net:27017,cluster0-shard-00-01.fnjb9.mongodb.net:27017,cluster0-shard-00-02.fnjb9.mongodb.net:27017/newmanagement?ssl=true&replicaSet=atlas-w2dcki-shard-0&authSource=admin&retryWrites=true&w=majority`;

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
