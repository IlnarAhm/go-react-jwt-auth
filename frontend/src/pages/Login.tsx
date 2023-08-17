import React, { SyntheticEvent, useEffect, useState } from "react";
import { redirect } from "react-router-dom";

const Login = (props: { setName: (name: string) => void }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        if (loggedIn){
            window.location.href = "/";
        }
    },[loggedIn]);

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();
        setLoading(true);

        const response = await fetch("http://localhost:8000/api/login", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            credentials: "include",
            body: JSON.stringify({
                email, 
                password
            })
        })

        const content = await response.json();

        setLoading(false);

        if (response.status !== 200) {
            setError(content.message);
        } else {
            props.setName(content.name);
            setError("");
            setLoggedIn(true);
        }
    };

    return (
		<div className="h-100 d-flex align-items-center">
			<main className="form-signin w-100 m-auto">
                <form onSubmit={submit}>
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                    { error && (
                        <div className="alert alert-danger">{ error }</div>
                    ) }

                    <div className="form-floating">
                        <input 
                            type="email" 
                            className="form-control" 
                            id="floatingInput" 
                            placeholder="name@example.com" 
                            onChange={e => setEmail(e.target.value)}
                        />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>

                    <div className="form-floating">
                        <input 
                            type="password" 
                            className="form-control" 
                            id="floatingPassword" 
                            placeholder="Password" 
                            onChange={e => setPassword(e.target.value)}
                        />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>

                    {/* <div className="form-check text-start my-3">
                        <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
                        <label className="form-check-label" htmlFor="flexCheckDefault">Remember me</label>
                    </div> */}
                    {
                        loading ? 
                        (
                            <button className="btn btn-primary w-100 py-2" disabled type="submit">
                                <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
                            </button>
                        )
                        :
                        (
                            <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
                        )
                    }
                    <p className="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
                </form>
            </main>
        </div>
    )
};

export default Login;
