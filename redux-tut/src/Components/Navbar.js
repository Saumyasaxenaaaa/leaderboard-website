import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar">
                <img src="https://tse2.mm.bing.net/th?id=OIP.92ovC7dHc32nqSOZzTYlNQHaHa&pid=Api&P=0&h=180" alt="Logo" /> {/* Logo ko yahan add karo */}
                <ul>
                    <li><Link to="/"></Link></li>
                    <li><Link to="/dashboard" className="link">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/score">Score</Link></li>
                    <li><Link to="/popular">Popular player</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar