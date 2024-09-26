import React from "react";

const Slider = () => {
    return (
        <div
            id="carouselExampleControls"
            className="carousel slide"
            data-ride="carousel"
        >
            <ol className="carousel-indicators">
                <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="0"
                    className="active"
                ></li>
                <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="1"
                ></li>
                <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="2"
                ></li>
            </ol>
            <div className="carousel-inner header-slider normal-slider">
                <div className="carousel-item header-slider-item  active">
                    <img
                        className="d-block w-100"
                        src="img/slider-1.jpg"
                        alt="First slide"
                        height="400"
                    />
                    <div className="header-slider-caption">
                        <p>Some text goes here that describes the image</p>
                        <a className="btn" href="">
                            <i className="fa fa-shopping-cart"></i>
                            Shop Now
                        </a>
                    </div>
                </div>
                <div className="carousel-item header-slider-item ">
                    <img
                        className="d-block w-100"
                        src="img/slider-2.jpg"
                        alt="Second slide"
                        height="400"
                    />
                    <div className="header-slider-caption">
                        <p>Some text goes here that describes the image</p>
                        <a className="btn" href="">
                            <i className="fa fa-shopping-cart"></i>
                            Shop Now
                        </a>
                    </div>
                </div>
                <div className="carousel-item header-slider-item ">
                    <img
                        className="d-block w-100"
                        src="img/slider-3.jpg"
                        alt="Third slide"
                        height="400"
                    />
                    <div className="header-slider-caption">
                        <p>Some text goes here that describes the image</p>
                        <a className="btn" href="">
                            <i className="fa fa-shopping-cart"></i>
                            Shop Now
                        </a>
                    </div>
                </div>
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
