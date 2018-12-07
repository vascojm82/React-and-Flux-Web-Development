let express = require('express');
let app = express();
let helmet = require('helmet');

app.use(helmet());

//This is to allow CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
/*******/

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let animals = [
  "Dog",
  "Wolf",
  "Lion",
  "Tiger"
];

let todoItems = [
  {
    id: "1234",
    title: "First Title"
  },
  {
    id: "5678",
    title: "Second Title"
  },
  {
    id: "9101112",
    title: "Third Title"
  }
];

let ingredients = [{"id":1, "text":"ham"},{"id":2, "text":"cheese"},{"id":3, "text":"bread"}];

app.get('/animals', function(req, res){
  res.send(animals);
});

app.get('/todo', function(req, res){
  res.send(todoItems);
});

app.get('/ingredients', function(req, res){
  res.send(ingredients);
});

app.listen(3000, function(){
  console.log("Server Listening on Port#: 3000");
})
