import { Link } from "@inertiajs/react";

const Footer = () => {
    return (
        <footer className="py-4 bg-light mt-auto">
            <div className="container-fluid px-4">
                <div className="d-flex align-items-center justify-content-between small">
                    <div className="text-muted">
                        Copyright &copy; Painless Coding
                    </div>
                    <div>
                        <Link href="#"> Developed by: </Link>
                        <Link href="painless-coding.com"> Painless Coding</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
