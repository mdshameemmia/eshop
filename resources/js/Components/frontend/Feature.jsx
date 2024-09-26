import React from "react";

const Feature = () => {
    return (
        <div className="feature">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-3 col-md-6 feature-col">
                        <div className="feature-content">
                            <i className="fa fa-credit-card"></i>
                            <h2>Secure Payment</h2>
                            <p>Lorem ipsum dolor sit amet consectetur elit</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 feature-col">
                        <div className="feature-content">
                            <i className="fa fa-truck"></i>
                            <h2>Worldwide Delivery</h2>
                            <p>Lorem ipsum dolor sit amet consectetur elit</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 feature-col">
                        <div className="feature-content">
                            <i className="fa fa-arrow-circle-left"></i>
                            <h2>90 Days Return</h2>
                            <p>Lorem ipsum dolor sit amet consectetur elit</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 feature-col">
                        <div className="feature-content">
                            <i className="fa fa-comments"></i>
                            <h2>24/7 Support</h2>
                            <p>Lorem ipsum dolor sit amet consectetur elit</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feature;
