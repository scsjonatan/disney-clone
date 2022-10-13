import React, { useState, useMemo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './views/Login';
import Home from './views/Home';
import Detail from './views/Detail';
import { UserContext, initialUser } from './contexts/user';

function App() {
  const [user, setUser] = useState(initialUser);

  const value = useMemo(() => ({ user, setUser }), [user]);

  return (
    <UserContext.Provider value={value}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/detail/:type/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
