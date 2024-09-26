import React from "react";

const NewsItem = () => {
    return (
        <div className="header-img">
            <div className="img-item">
                <img src="img/category-1.jpg" />
                <a className="img-text" href="">
                    <p>Some text goes here that describes the image</p>
                </a>
            </div>
            <div className="img-item">
                <img src="img/category-2.jpg" />
                <a className="img-text" href="">
                    <p>Some text goes here that describes the image</p>
                </a>
            </div>
        </div>
    );
};

export default NewsItem;
