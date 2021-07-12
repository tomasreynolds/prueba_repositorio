const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req,res) =>{
  res.sendFile(path.resolve(__dirname, "'./views/index.html'"));
});

app.use(express.static(path.resolve(dirname, './public')));


app.listen(3000, function() {
  console.log("Corriendo servidor en el puerto 3000");
});