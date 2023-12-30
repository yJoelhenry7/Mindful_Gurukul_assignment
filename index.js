const express = require('express');  
const app = express();  
const PORT = process.env.PORT || 3000

// ---------------------MiddleWares----------------------------------------------------
// parse requests of content-type - application/json
app.use(express.json())
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

// ---------------------Routes-------------------------------------------------
const Router = require('./routes/Router')
app.use('/',Router)

app.listen(PORT, function () {  
    console.log('Node server is running..');  
});  