const mysql = require('mysql2');

var connection = mysql.createConnection({

    port:3306,
    host:"localhost",
    user:"root",
    password:"2212",
    database:"fullstack"
});

connection.connect((error)=>{
    if(!error){
        console.log("Connected");
    }
    else{
        console.log("Connected Successfully");
    }
});