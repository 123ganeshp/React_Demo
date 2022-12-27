import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CreateAccount from './component/CreateAccount';
import Login from './component/Login';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './component/Home';
import Transfer from './component/Transfer';
import Transaction from './component/Transaction';
import Successful from './component/Successful';
import Deposit from './component/Deposit';
import Withdraw from './component/Withdraw';
import SideNav from './component/SideNav';

function App() {

  return <div className="container">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/transfer" element={<Transfer />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/successful" element={<Successful />} />
        <Route path="/deposit" element={<Deposit />} />
        <Route path="/withdraw" element={<Withdraw />} />


      </Routes>
    </BrowserRouter>
   {/* <SideNav /> */}
    
    <ToastContainer/>



  </div>

}

export default App;
