import {BrowserRouter ,Routes, Route,Link} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import Navbar from './components/Navbar';
import Auth from './pages/Auth';
import Home from './pages/Home';
import 'react-toastify/dist/ReactToastify.css';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { useEffect, useState } from 'react';
import Quiz from './pages/Quiz';
import Confetti from 'react-confetti'

function App() {
  const [users, setUsers] = useState(null)

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        
        const uid = user.uid;
        setUsers(user)
        
      } else {
        
      }
    });

  },[])
  return (
    <div >
      <BrowserRouter>
      {users?.accessToken &&<Navbar/>}
    
      <Routes>
      
      <Route path="/"element={<Auth/>}/>
      <Route path="dashboard"element={<Home users={users}/>}/>
      <Route path='/pages/:Quiz/'element={<Quiz/>}/>
    
      </Routes>

      
      
      
      </BrowserRouter>
      
      <ToastContainer
      position="top-right"
      autoClose={5000}
      theme="light"



     />
    
      
    </div>
  );
}

export default App;
