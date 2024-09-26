import React from "react";

const FooterBottom = () => {
    return (
        <div className="footer-bottom">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 copyright">
                        <p>
                            Copyright &copy;
                            <a href="https://painless-coding.com">Painless Coding</a>. All
                            Rights Reserved
                        </p>
                    </div>

                    <div className="col-md-6 template-by">
                        <p>
                            Developed By{" "}
                            <a href="https://painless-coding.com">Painless Coding</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterBottom;
