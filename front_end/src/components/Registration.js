import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
import {useNavigate} from 'react-router-dom';
const Registration = () => {
   
    const navigate = useNavigate();
    
   const[fName , setFname] = useState('');
   const[lName , setLname] = useState('');
   const[mobNum , setMobNum] = useState('');
   const[pass , setPass] = useState('');

   const getFname=(event) =>{
    setFname(event.target.value);
   }

   const getLname = (event) =>{
    setLname(event.target.value);
   }

   const getMob = (event) =>{
    setMobNum(event.target.value);
   }

   const getPass = (event) =>{
    setPass(event.target.value);
   }
   
   const submitData = ()=>{    
    if(fName && lName && mobNum && pass){
    Axios.post('http://localhost:3001/api/insertData', 
    {
        fName:fName,
        lName:lName,
        mobNum:mobNum,
        pass:pass
    }).then((res)=>{
        console.log(res);
        console.log("successfull");
        window.alert("User Successfully added");   
        navigate('login');
    });
}

else
window.alert("Invalid Input");


    setFname('');
    setLname('');
    setMobNum('');
    setPass('');
    
   }; 
   
    return (
        <>
            <h1 className='text-center'> User Registration Page</h1>
            <div className='container mt-4'>
                <div className='row justif-content-center'>
                    <div className='col-6'>
                        <form action='#' className='mt-5'>
                            <div className='form-group'>
                                <div class="input-group mt-3">
                                    <span class="input-group-text">First name</span>
                                    <input type="text" aria-label="First name" className="form-control" onChange={getFname} value={fName}   required />
                                </div>

                                <div class="input-group mt-3">
                                    <span class="input-group-text">Last name</span>
                                    <input type="text" aria-label="Last name" className="form-control" onChange={getLname} value={lName}  required />
                                </div>
                                <div class="input-group mt-3">
                                    <span class="input-group-text">Mobile No</span>
                                    <input type="number" aria-label="Mobile Number" className="form-control" onChange={getMob} value={mobNum}  required />
                                </div>
                                <div class="input-group mt-3">
                                    <span class="input-group-text">Password</span>
                                    <input type="password" aria-label="Password" className="form-control" onChange={getPass} value={pass}  required />
                                </div>
                                <div class="text-center mt-3">
                                    <input type="button" value="Register" className="btn btn-success" onClick={submitData} />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>


                <div>
                    <h3 className='text-center'> Try Login using following:</h3>
            
                </div>
            </div>
        </>
    );
}

export default Registration;
