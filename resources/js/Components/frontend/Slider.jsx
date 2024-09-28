import React from "react";

const Slider = ({ sliders }) => {
    console.log(sliders, "testing");
    return (
        <div
            id="carouselExampleControls"
            className="carousel slide"
            data-ride="carousel"
        >
            <ol className="carousel-indicators">
                {sliders.map((slider, index) => {
                    return (
                        <li
                            data-target="#carouselExampleIndicators"
                            data-slide-to={index}
                            className={
                                sliders[0].id == slider.id ? "active" : ""
                            }
                        ></li>
                    );
                })}
                {/* <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="1"
                ></li>
                <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="2"
                ></li> */}
            </ol>
            <div className="carousel-inner header-slider normal-slider">
                {sliders.map((slider, index) => {
                    return (
                        <div key={index} className={`carousel-item header-slider-item  ${sliders[0].id == slider.id? 'active':''}`}>
                            <img
                                className="d-block w-100"
                                src={window.APP_URL+ "/storage/" +`${slider.img}`}
                                alt="First slide"
                                height="400"
                            />
                            <div className="header-slider-caption">
                                <p>
                                    {slider.slider_information}
                                </p>
                                <a className="btn" href="">
                                    <i className="fa fa-shopping-cart"></i>
                                    Shop Now
                                </a>
                            </div>
                        </div>
                    );
                })}
            </div>
            <a
                className="carousel-control-prev"
                href="#carouselExampleControls"
                role="button"
                data-slide="prev"
            >
                <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
            </a>
            <a
                className="carousel-control-next"
                href="#carouselExampleControls"
                role="button"
                data-slide="next"
            >
                <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
};

export default Slider;
