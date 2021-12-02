import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Card from './Card';
import Dashboard from './Dashboard';

function NavLink(props) {
  return (
    <div style={{ marginRight: '20px' }}>
      <Link to={props.to}>{props.text}</Link>
    </div>
  );
}

function NavBar() {
  return (
    <div style={{ display: 'flex', justifyContent: 'start' }}>
      <NavLink to="/home" text="Home" />
      <NavLink to="/login" text="Login" />
      <NavLink to="/register" text="Register" />
      <NavLink to="/dashboard" text="Dashboard" />
    </div>
  );
}

export default function Main() {
  return (
    <BrowserRouter>
      <NavBar />
      <h1>Main Page</h1>

      <Routes>
        <Route path="/login" element={<Card title="Login" count={2}/>} />
        <Route path="/home" element={<Card title="Home" count={3}/>} />
        <Route path="/register" element={<Card title="Register" count={1}/>} />
        <Route path="/dashboard"  element={<Dashboard />} > 
            <Route path="add-users" element={<Card title="Add Users" />} />
            <Route path="add-admins" element={<Card title="Add Admins" />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}
