import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Register';
import Dash from './Dash';
import Tablepage from './Tablepage.jsx'
import Sso from './Sso.jsx';
import Forgot from './Forgot.jsx';
import Homepage from './Homepage.jsx';
import Company from './Company.jsx';
import Contact from './Contact.jsx';
import './App.css'

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/Sso" element={<Sso />} />
      <Route path="/Forgot" element={<Forgot />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/form/:id" element={<Register/>} ></Route>
        <Route path="/dashboard" element={<Dash />}>
        <Route path="table" element={<Tablepage />}/> {/* Nested route example */}
        <Route path="company" element={<Company />}/> 
        <Route path="contact" element={<Contact />}/> 
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
