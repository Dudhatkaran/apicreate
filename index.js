// -----add express------------
const express = require("express");
const app = express();


// ---------add json-------------
const { json } = require('express');
app.use(json());


// ------add cors-----------
const cors = require('cors');
app.use(cors());

require('./DB/Connection');

app.listen(1111, () => {
    console.log("Sever Start..............");
});

// app.use('/', (req, res) => {
//     return res.send("backend start")
// })

app.use('/api', require('./API/Crudapi'));