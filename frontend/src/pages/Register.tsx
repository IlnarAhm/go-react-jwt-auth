import React, { SyntheticEvent, useState } from 'react'
import { redirect } from 'react-router-dom';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        const response = await fetch("http://localhost:8000/api/register", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name,
                email, 
                password
            })
        })

        const content = await response.json()

        if (content.id) {
            redirect("/login");
        }
    };
    

    return (
        <div className="h-100 d-flex align-items-center">
            <main className="form-signin w-100 m-auto">
                <form onSubmit={submit}>
                    <h1 className="h3 mb-3 fw-normal">Please register</h1>

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
                            type="text" 
                            className="form-control" 
                            id="floatingName" 
                            placeholder="name@example.com" 
                            onChange={e => setName(e.target.value)}
                        />
                        <label htmlFor="floatingName">Name</label>
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
                    <button className="btn btn-primary w-100 py-2" type="submit">Submit</button>
                    <p className="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
                </form>
            </main>
        </div>
    )
}

export default Register