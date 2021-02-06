import React, { useState } from "react";
import Information from "./information";
const Navbar = () => {
    const [menu, setMenu] = useState('Welcome');
    return (

        <div className="container-fluid row">
            <div className="col-3">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <div className="logo-container">
                            <img
                                src="https://avatars.githubusercontent.com/u/16607406?s=280&v=4"
                                className="logo"
                            />
                        </div>
                    </li>
                    <li className="nav-item">
                        <a onClick={() => {
                            setMenu("About");
                        }} className="nav-link" href="#">
                            About
					</a>
                    </li>
                    <li className="nav-item">
                        <a onClick={() => {
                            setMenu("About");
                        }} className="nav-link" href="#">
                            Skills
					</a>
                    </li>
                </ul>
            </div>
            <div className="col-9"><Information title={menu} /></div>
        </div>
    );
};

export default Navbar;
