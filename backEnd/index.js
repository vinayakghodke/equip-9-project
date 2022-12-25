
const express = require('express');   // includes all express libraries
const app = express();                  // ready to use all express related functions
const cors = require('cors');           // cross origin resource sharing to get data from front end
const bodyParser = require('body-parser');    // to parse the data into JSON format
const { genSaltSync, hashSync } = require("bcryptjs");   // to encrypt the password
require("dotenv").config();                           // to configure .env file to hide server port and connection details
const crypt = require('bcryptjs');
const userRoute = require('./routes/user');             // to route incoming API request
const jwt = require('jsonwebtoken');
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

app.post('/api/signin', (req, res) => {
 
  const mobNum = req.body.mobNum;
  const pass = req.body.pass;
  
  if(!mobNum || !pass){
    return res.status(400).json({error:"Please fill data"});
  }
  
  //const query = "select * from user_details where mobile_num = ? and password = ? ";
  const query = "select * from user_details where mobile_num = ? ";
  db.query(query, [mobNum],(error, result)=>{
    if(error){
      res.status(500).json({message:"Error occured.."});
    }
    else{
      // const b = crypt.compare(pass, result.password);
      if(true){
  
      console.log("Success..");
      console.log(result);

      console.log(result.entries);
      res.status(200).json({result});
      }
      else{
        console.log("wrong password");
        res.status(500).json({message:"Invalid password"});
      }
    }
  });
});

// now express server will run at given port no 

app.listen(process.env.APP_PORT, () => {                   

  console.log('Server is Up & running ');

});
module.exports = app;