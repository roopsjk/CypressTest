const express = require ('express');
const app = express();

 //ROUTES
 
app.get('/', (req,res) => {
 res.send('we are home');
});

//second page
app.get('/posts', (req,res) => {
  res.send('we are on posts ');
 });
 
 //Connect to DB 
//How to we start listening to the server

app.listen(3000);

