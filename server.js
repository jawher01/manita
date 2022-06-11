const express = require('express')
const app = express()
var cors = require('cors')
const bodyParser = require("body-parser");
const  database=require("./baseDonnées/db_connect")
const routeuser=require("./Routes/route")
database()
app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );
  app.use(bodyParser.json());
  app.use('/uploads',express.static('uploads'))
app.use("/user",routeuser)
app.use(cors({origin: true, credentials: true}));
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authortization');
  res.setHeader('Acces-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  
  next();   
  
});
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.error = err;
  const status = err.status || 400;
  res.status(status);
  res.render('error');
});

port =5000
app.listen(port,(err) =>
  err ? console.log(err) : console.log(`server is running on ${port}`)
);

