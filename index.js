const express = require('express');  
const app = express();  
const PORT = process.env.PORT || 3000

app.get('/', function (req, res) {  
  res.send("response sended")
});  


app.listen(PORT, function () {  
    console.log('Node server is running..');  
});  