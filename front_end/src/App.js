import {Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Registration from './components/Registration';
import Login from './components/Login';
import NoMatch from './components/NoMatch';

function App() {
  return (
    <>
   
       <Routes>
        <Route path='/' element={<Registration/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/*' element={<NoMatch/>}/>
     </Routes>   
    
    </>
  );
}

export default App;
