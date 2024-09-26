import React from "react";

const MenuItem = () => {
    return (
        <nav className="navbar bg-light">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <i className="fa fa-home"></i>Home
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <i className="fa fa-shopping-bag"></i>
                        Best Selling
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <i className="fa fa-plus-square"></i>New Arrivals
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <i className="fa fa-female"></i>Fashion & Beauty
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <i className="fa fa-child"></i>Kids & Babies Clothes
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        <i className="fa fa-male"></i>Men & Women Clothes
                    </a>
                </li>
               
            </ul>
        </nav>
    );
};

export default MenuItem;
