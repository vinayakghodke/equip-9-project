import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {

  const submitData = () =>{

  }
  return (
    <>
      <h1 className='text-center'> Please Login </h1>
      <div className='container'>
        <div className='row justify-content-center col-6'>
          
            <form>
              <div className='mt-4 text-center'>
               <label> Enter Mobile: </label> <input type="number" placeholder="Enter your Mobile Number"  className='form-control' required />
              </div>

              <div className='mt-4 text-center'>
              <label> Enter Password: </label> <input type="password" placeholder="Enter your password"  className='form-control' required />
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
