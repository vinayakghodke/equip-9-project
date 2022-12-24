
const express = require('express');   // includes all express libraries
const app = express();                  // ready to use all express related functions
const cors = require('cors');           // cross origin resource sharing to get data from front end
const bodyParser = require('body-parser');    // to parse the data into JSON format
const { genSaltSync, hashSync } = require("bcryptjs");   // to encrypt the password
require("dotenv").config();                           // to configure .env file to hide server port and connection details

const userRoute = require('./routes/user');             // to route incoming API request

app.use(express.json());
app.use('/user', userRoute);
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

// to get data from form and stored it into db
const db = require("./db/connection");
app.post('/api/insertData', (req, res) => {
  const fName = req.body.fName;
  const lName = req.body.lName;
  const mobNum = req.body.mobNum;
  const pass = req.body.pass;
  const salt = genSaltSync(10);
  password = hashSync(pass, salt);

  const query = "insert into user_details (first_name,last_name,mobile_num, password) values (?,?,?,?)";
  db.query(query, [fName, lName, mobNum, password], (error, result) => {
    result = "successfully inserted data";
    
    // you can vaidate user here whether it is present already or not(later) 

    if (error != null) {
      res.status(500).json({message:"Not added"});
      console.log("not added", error);
    }
    else {
      console.log("result", result);
      res.status(200).json({ message: "Succesfully added user.." });
    
    }

  });
});

// now express server will run at given port no 

app.listen(process.env.APP_PORT, () => {                   

  console.log('Server is Up & running ');

})
module.exports = app;