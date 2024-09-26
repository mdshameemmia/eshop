import MenuItem from "@/Components/frontend/MenuItem";
import NewsItem from "@/Components/frontend/NewsItem";
import Slider from "@/Components/frontend/Slider";
import React from "react";

const MainMenu = () => {
    return (
        <div className="header">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                       <MenuItem />
                    </div>
                    <div className="col-md-6">
                       <Slider />
                    </div>
                    <div className="col-md-3">
                      <NewsItem />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainMenu;
