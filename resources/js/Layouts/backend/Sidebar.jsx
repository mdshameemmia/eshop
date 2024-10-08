import { Link } from "@inertiajs/react";
import React from "react";

const Sidebar = () => {
    return (
        <div id="layoutSidenav_nav">
            <nav
                className="sb-sidenav accordion bg-pink text-white  font-weight-bold"
                id="sidenavAccordion"
            >
                <div className="sb-sidenav-menu">
                    <div className="nav ">
                        <Link className="nav-link fw-bold" href="/dashboard">
                            <div className="sb-nav-link-icon">
                                <i className="fas fa-tachometer-alt"></i>
                            </div>
                            Dashboard
                        </Link>

                        <Link
                            className="nav-link fw-bold"
                            href={route("sliders.index")}
                        >
                            <div className="sb-nav-link-icon">
                                <i className="fas fa-tachometer-alt"></i>
                            </div>
                            Slider
                        </Link>
                        <Link
                            className="nav-link fw-bold"
                            href={route("categories.index")}
                        >
                            <div className="sb-nav-link-icon">
                                <i className="fas fa-tachometer-alt"></i>
                            </div>
                            Categories
                        </Link>
                        <Link
                            className="nav-link fw-bold"
                            href={route("attributes.index")}
                        >
                            <div className="sb-nav-link-icon">
                                <i className="fas fa-tachometer-alt"></i>
                            </div>
                            Attributes
                        </Link>
                        <Link
                            className="nav-link fw-bold"
                            href={route("attribute-options.index")}
                        >
                            <div className="sb-nav-link-icon">
                                <i className="fas fa-tachometer-alt"></i>
                            </div>
                            Attribute Options
                        </Link>

                        <Link
                            className="nav-link fw-bold"
                            href={route("products.index")}
                        >
                            <div className="sb-nav-link-icon">
                                <i className="fas fa-tachometer-alt"></i>
                            </div>
                            Products
                        </Link>

                        <Link
                            className="nav-link fw-bold"
                            href={route("contact-us.index")}
                        >
                            <div className="sb-nav-link-icon">
                                <i className="fas fa-tachometer-alt"></i>
                            </div>
                            Contact us
                        </Link>
                       
                        <Link
                            className="nav-link fw-bold"
                            href={route("discounts.index")}
                        >
                            <div className="sb-nav-link-icon">
                                <i className="fas fa-tachometer-alt"></i>
                            </div>
                            Discount 
                        </Link>
                        <Link
                            className="nav-link fw-bold"
                            href={route("shipping-addresses.index")}
                        >
                            <div className="sb-nav-link-icon">
                                <i className="fas fa-tachometer-alt"></i>
                            </div>
                            Shipping Address 
                        </Link>

                        <Link
                            className="nav-link collapsed fw-bold"
                            href="#"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapsePages"
                            aria-expanded="false"
                            aria-controls="collapsePages"
                        >
                            <div className="sb-nav-link-icon">
                                <i className="fas fa-book-open"></i>
                            </div>
                            Pages
                            <div className="sb-sidenav-collapse-arrow">
                                <i className="fas fa-angle-down"></i>
                            </div>
                        </Link>
                        <div
                            className="collapse"
                            id="collapsePages"
                            aria-labelledby="headingTwo"
                            data-bs-parent="#sidenavAccordion"
                        >
                            <nav
                                className="sb-sidenav-menu-nested nav accordion"
                                id="sidenavAccordionPages"
                            >
                                <Link
                                    className="nav-link collapsed"
                                    href="#"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#pagesCollapseAuth"
                                    aria-expanded="false"
                                    aria-controls="pagesCollapseAuth"
                                >
                                    Authentication
                                    <div className="sb-sidenav-collapse-arrow">
                                        <i className="fas fa-angle-down"></i>
                                    </div>
                                </Link>
                                <div
                                    className="collapse"
                                    id="pagesCollapseAuth"
                                    aria-labelledby="headingOne"
                                    data-bs-parent="#sidenavAccordionPages"
                                >
                                    <nav className="sb-sidenav-menu-nested nav">
                                        <Link
                                            className="nav-link"
                                            href="login.html"
                                        >
                                            Login
                                        </Link>
                                        <Link
                                            className="nav-link"
                                            href="register.html"
                                        >
                                            Register
                                        </Link>
                                        <Link
                                            className="nav-link"
                                            href="password.html"
                                        >
                                            Forgot Password
                                        </Link>
                                    </nav>
                                </div>
                                <Link
                                    className="nav-link collapsed"
                                    href="#"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#pagesCollapseError"
                                    aria-expanded="false"
                                    aria-controls="pagesCollapseError"
                                >
                                    Error
                                    <div className="sb-sidenav-collapse-arrow">
                                        <i className="fas fa-angle-down"></i>
                                    </div>
                                </Link>
                                <div
                                    className="collapse"
                                    id="pagesCollapseError"
                                    aria-labelledby="headingOne"
                                    data-bs-parent="#sidenavAccordionPages"
                                >
                                    <nav className="sb-sidenav-menu-nested nav">
                                        <Link
                                            className="nav-link"
                                            href="401.html"
                                        >
                                            401 Page
                                        </Link>
                                        <Link
                                            className="nav-link"
                                            href="404.html"
                                        >
                                            404 Page
                                        </Link>
                                        <Link
                                            className="nav-link"
                                            href="500.html"
                                        >
                                            500 Page
                                        </Link>
                                    </nav>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Sidebar;
