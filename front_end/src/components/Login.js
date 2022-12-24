import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();
  const[mobNum , setMobNum] = useState('');
   const[pass , setPass] = useState('');

   const getMob = (event) =>{
    setMobNum(event.target.value);
   }

   const getPass = (event) =>{
    setPass(event.target.value);
   }

  const submitData = async (e) =>{
    e.preventDefault();

    if(mobNum && pass){
    Axios.post('http://localhost:3001/api/signin', 
    {
        mobNum:mobNum,
        pass:pass

    }).then((res)=>{
        window.alert("User Successfully added");   
        navigate('/');
    });
}

else{
window.alert("Invalid Input");
}
    setMobNum('');
    setPass('');
    
 
  }
  return (
    <>
      <h1 className='text-center'> Please Login </h1>
      <div className='container'>
        <div className='row justify-content-center col-6'>
          
            <form method='post'>
              <div className='mt-4 text-center'>
               <label> Enter Mobile: </label> <input type="number" placeholder="Enter your Mobile Number" value={mobNum} onChange={getMob} className='form-control' required />
              </div>

              <div className='mt-4 text-center'>
              <label> Enter Password: </label> <input type="password" placeholder="Enter your password" value={pass} onChange={getPass} className='form-control' required />
              </div>
              <div className='mt-4 text-center'>
              <input type="button" className='btn btn-success' value="Login" onClick={submitData} />
              </div>
            </form>

          </div>
        

      </div>
    </>
  );
}

export default Login;
