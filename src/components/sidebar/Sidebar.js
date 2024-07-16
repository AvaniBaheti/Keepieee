import React from 'react';
import './sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = ({ open, setTitleHeader }) => {
    return (
        <header className={`sidebar ${open ? "sidebaropen" : "sidebarclose"}`}>
            <nav className="sidebarnav">
                <div className="links">
                    <div className="link">
                        <Link to="/" className="sidebar-link" onClick={() => setTitleHeader("Home")}>
                            <i className="material-icons">home</i>
                            Home
                        </Link>
                    </div>
                    <div className="link">
                        <Link to="/archived" className="sidebar-link" onClick={() => setTitleHeader("Archive")}>
                            <i className="material-icons">archive</i>
                            Archive
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Sidebar;
