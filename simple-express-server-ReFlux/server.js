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

let ingredients = [
  {
    "id": "234kjw",
    "text": "Eggs"
  },
  {
    "id": "as82w",
    "text": "Milk"
  },
  {
    "id": "234sk1",
    "text": "Bacon"
  },
  {
    "id": "ppo3j3",
    "text": "Bread"
  }
];

app.get('/ingredients', function(req, res){
  res.send(ingredients);
});

app.post('/ingredients', function(req, res){
  let ingredient = req.body;
  console.log(req.body);
  ingredients.push(ingredient);
  res.status(200).send("Successfully posted ingredient");
});

app.listen(3000, function(){
  console.log("Server Listening on Port#: 3000");
});
