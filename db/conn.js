const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://new-user_31:<pvI6pToIv7vLmS2Z>@cluster0.fnjb9.mongodb.net/newmanagement?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
const collection = client.db("test").collection("devices");
// perform actions on the collection object
client.close();
});
