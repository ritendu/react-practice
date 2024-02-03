
import './App.css';
import { useState,useMemo } from 'react';
import { Routes,Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import RouteIdentifier from './routing/RouteIdentifier';
function App() {

  return (
<>
<RouteIdentifier/>
</>



  );
}

export default App;
