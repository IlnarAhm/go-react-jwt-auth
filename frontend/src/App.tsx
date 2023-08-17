import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './pages/Login';
import Nav from './components/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';

function App() {
	const [name, setName] = useState('');

    useEffect(() => {
        (
            async () => {
                const response = await fetch("http://localhost:8000/api/user", {
                    credentials: "include",
                    headers: {'Content-Type': 'application/json'}
                });

                const content = await response.json();

                setName(content.name);
            }
        )();
    });

	return (
		<>
			<BrowserRouter>
				<Nav name={name} setName={setName} />
				<Routes>
					<Route path="/" Component={() => <Home name={name} />} />
					<Route path="/login" Component={() => <Login setName={setName}/>} />
					<Route path="/register" Component={Register} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
