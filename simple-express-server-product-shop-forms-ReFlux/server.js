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

let subscribers = [
  {
    "id": "234kjw",
    "email": "joe.schmoe@email.com",
    "firstName": "Joe"
  }
];

app.get('/subscribers', function(req, res){
  res.send(subscribers);
});

app.post('/subscribers', function(req, res){
  let subscriber = req.body;
  subscriber.id = Math.floor(Date.now() / 1000) + req.body.email;
  console.log(req.body);
  subscribers.push(subscriber);
  res.status(200).send("Successfully posted subscriber");
});

let port = process.env.PORT || '3000';

app.listen(port, function(){
  console.log("Server Listening on Port#: " + port);
});
