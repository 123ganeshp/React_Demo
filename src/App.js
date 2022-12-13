import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CreateAccount from './component/CreateAccount';
import Login from './component/Login';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './component/Home';
import Transfer from './component/Transfer';

function App() {

  return <div className="container">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/transfer" element={<Transfer />} />


      </Routes>
    </BrowserRouter>

    
    <ToastContainer/>



  </div>

}

export default App;
