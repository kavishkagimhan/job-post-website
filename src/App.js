import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import Login from './Admin/Login';
import { ToastContainer } from 'react-toastify';
import Home from './Admin/Home';
import Addjob from './Admin/Addjob';
import Alljobs from './Admin/Alljobs';
import Signup from './Admin/Signup';
import { Editjob } from './Admin/Editjob';
import Asboutus from './pages/Asboutus';
import Contactus from './pages/Contactus';
import Applyjob from './components/Applyjob';

function App() {
  return (
    <div className='max-w-[1800px] mx-auto' >
      <Router>
        <Navbar />
        <ToastContainer/>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/admin" element={<Home/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin/addjob" element={<Addjob />} />
          <Route path="/admin/alljobs" element={<Alljobs />} />
          <Route path="/admin/editjob/:id" element={<Editjob />} />
          <Route path="/admin/viewjob/:id" element={<Editjob />} />
          <Route path="/aboutus" element={<Asboutus />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="/apply/:id/:company/:title/:possition" element={<Applyjob />} />
        </Routes>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
