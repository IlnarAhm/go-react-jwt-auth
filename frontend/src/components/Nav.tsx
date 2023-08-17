import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container">
				<Link className="navbar-brand" to="/">Home</Link>
				
				<div>
					<ul className="navbar-nav me-auto mb-2 mb-md-0">
						<li className="nav-item">
							<Link className="nav-link active" to="/login">Login</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link active" to="/register">Register</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
    )
};

export default Nav;