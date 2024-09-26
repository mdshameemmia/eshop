const Footer = () => {
    return (
        <div className="footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-widget">
                            <h2>Get in Touch</h2>
                            <div className="contact-info">
                                <p>
                                    <i className="fa fa-map-marker"></i>123 E Store,
                                    Los Angeles, USA
                                </p>
                                <p>
                                    <i className="fa fa-envelope"></i>
                                    email@example.com
                                </p>
                                <p>
                                    <i className="fa fa-phone"></i>+123-456-7890
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="footer-widget">
                            <h2>Follow Us</h2>
                            <div className="contact-info">
                                <div className="social">
                                    <a href="">
                                        <i className="fa fa-twitter"></i>
                                    </a>
                                    <a href="">
                                        <i className="fa fa-facebook-f"></i>
                                    </a>
                                    <a href="">
                                        <i className="fa fa-linkedin"></i>
                                    </a>
                                    <a href="">
                                        <i className="fa fa-instagram"></i>
                                    </a>
                                    <a href="">
                                        <i className="fa fa-youtube"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="footer-widget">
                            <h2>Company Info</h2>
                            <ul>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-angle-double-left"></i> About Us</a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-angle-double-left"></i> Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-angle-double-left"></i> Terms & Condition</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="footer-widget">
                            <h2>Purchase Info</h2>
                            <ul>
                                <li>
                                    <a href="#"><i className="fa fa-angle-double-left"></i> Pyament Policy</a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-angle-double-left"></i> Shipping Policy</a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-angle-double-left"></i> Return Policy</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;
