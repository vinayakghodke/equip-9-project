
const express = require('express');
const{genSaltSync, hashSync} = require('bcryptjs');

const connection = require('../db/connection');    // to connect with my-sql db
const router = express.Router();                    // to use router


// handling POST request for data insertion
router.post('/create', (req,res,next)=>{
    const user = req.body;
    const salt = genSaltSync(10);
    user.pass = hashSync(user.pass, salt);

   let query="insert into user_details (first_name, last_name, mobile_num, password) values (?,?,?,?)";
    connection.query(query,[user.fName, user.lName, user.mobile, user.pass], (err, result)=>{
        if(!err){
            return res.status(200).json({message:"User added successfully"});
        }
        else{
        return res.status(500).json(err);
        }
    });
});

// handling get request for getting all records
router.get('/read',(req,res,next)=>{
    let query = "select * from user_details";
    connection.query(query,(err,result)=>{
        if(!err){
            return res.status(200).json(result);
        }
        else{
            return res.status(500).json(err);
        }
    });
});

// handling patch request for updating a record 
router.patch('/update/:id', (req, res, next)=>{
    const id = req.params.id;
    let user = req.body;
    let query = "update user_details set first_name=?, last_name=?, mobile_num=? where user_id=?";
    connection.query(query,[user.first_name, user.last_name, user.mobile_num, id], (err, result)=>{
        if(!err){
            if(result.affectedRows == 0){
                return res.status(404).json({message:"Product id does not found"});
            }
            res.status(200).json({message:"Product Updated succcessfully"});
            
        }
        else
            return res.status(500).json(err);
    });
});

// handling delete request for deleting a record
router.delete('/delete/:id', (req,res,next)=>{
    const id = req.params.id;
    let query = "delete from user_details where user_id=?";
    connection.query(query,[id], (err, result)=>{
        if(!err){
            if(result.affectedRows == 0){
                return res.status(404).json({message:"Product id does not exit"});
            }
            return res.status(200).json({message:"User deleted Successfully"});
        }
        else
        return res.status(500).json(err);
    });
});

module.exports = router;