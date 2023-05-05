import React from 'react';
import { NavLink } from 'react-router-dom';
import "./ActiveLink.css";


const ActiveLink = ({ to, children }) => {
    return (
        <div>
            <NavLink
				to={to}
				className={({ isActive }) =>
					isActive ? "active" :  ""
				}>
				{children}
				{/* other code */}
			</NavLink>
        </div>
    );
};

export default ActiveLink;