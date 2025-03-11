import React from "react";
import "./Nav.css";
import ButtonRed from "../Button/ButtonRed/ButtonRed";
import ButtonWhite from "../Button/ButtonWhite/ButtonWhite";


const Nav = () => {
    return (
        <>
            <nav className="nav-container">
                <div className="logo-container hover">
                    <div className="logo ">
                        <img height='40px' width='80px' src="/image/brand_logo.png" alt="logo" />
                    </div>
                           </div>

                <div className="nav-links-container">
                    <ul className="nav-links-container-ul">
                        <li className="navlink">
                            <a className="navlink-a hover" href="#Menu">Menu</a>
                        </li>
                        <li className="navlink">
                            <a className="navlink-a hover" href="#home">Location</a>
                        </li>
                        <li className="navlink">
                            <a className="navlink-a hover" href="#home">About</a>
                        </li>
                        <li className="navlink">
                            <a className="navlink-a hover" href="#home">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="nav-log-reg-btn-container">
                <ButtonRed name={"Login"}  className={"hover"}/>
    
                <ButtonWhite name={"Register"}  className={"hover"}/>

                </div>
                    
            </nav>
        </>
    );
};

export default Nav;
