import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, {useState} from 'react';

function App() {
  const [loginUser, setLoginUser] = useState();

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={loginUser && loginUser._id ? <Home setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser} />} />
          <Route exact path="/login" element={<Login setLoginUser={setLoginUser} />} />
          <Route exact path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
