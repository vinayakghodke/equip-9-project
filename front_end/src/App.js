import {Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Registration from './components/Registration';
import Login from './components/Login';
import NoMatch from './components/NoMatch';
import Home from './components/Home';

function App() {
  return (
    <>
   
       <Routes>
        <Route path='/' element={<Registration/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/*' element={<NoMatch/>}/>
     </Routes>   
    
    </>
  );
}

export default App;
