import React from 'react';
import { Routes, Route, Router } from 'react-router-dom';
import Header from './Header';
import HomePage from './Homepage';
import Signin from './Signin';
import RegistrationForm from './Registerpage';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/Registerpage" element={<RegistrationForm />} />
        {/* other routes... */}
        {/* other routes... */}
      </Routes>
    </div>
  );
}

export default App;