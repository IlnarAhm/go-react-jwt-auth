import React from 'react';
import './App.css';
import Login from './pages/Login';
import Nav from './components/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';

function App() {
  return (
	<>
		<BrowserRouter>
			<Nav />
			<Routes>
				<Route path="/" Component={Home} />
				<Route path="/login" Component={Login} />
				<Route path="/register" Component={Register} />
			</Routes>
		</BrowserRouter>
	</>

  );
}

export default App;
