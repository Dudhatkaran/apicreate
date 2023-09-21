const mongooes = require('mongoose');

mongooes.set('strictQuery', false);

mongooes.connect("mongodb+srv://karanvd2002:node1234@cluster2002.bssktwl.mongodb.net/nodestart", {
    useNewUrlParser: true,
}).then(() => {
    console.log('DB connection Done');
}).catch((error) => {
    console.log(error);
})