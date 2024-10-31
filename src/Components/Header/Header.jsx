import React, {useEffect, useState} from "react";
import "./Header.css";

const Header = () => {
    return (
        <nav className="navbar flex">
            <ul className="nav-items flex">
                <li className="nav-links">
                    Home
                </li>
                <li className="nav-links">
                    Story
                </li>
                <li className="nav-links">
                    Boys
                </li>
                <li className="nav-links">
                    Girls
                </li>
                <li className="nav-links">
                    Explore
                </li>
                <li className="nav-links">
                    Gallery
                </li>
            </ul>
        </nav>
    );
}

export default Header;