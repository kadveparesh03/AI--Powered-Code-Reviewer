// require('dotenv').config()
// const app = require('./src/app')

// app.listen(3000,()=>{ 
//     console.log('servers is running on port https://localhost:3000')
// })


const express = require("express");
const app = express();
const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT || 3000;

require("./src/app")(app);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
