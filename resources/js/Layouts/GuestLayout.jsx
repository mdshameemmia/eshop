import { Link } from '@inertiajs/react';
import "../../css/frontend/bootstrap.css";
import 'font-awesome/css/font-awesome.min.css';
import "../../css/frontend/fonts.css";
import "../../css/frontend/style.css";
import "../../css/frontend/slick.css";
import "../../css/frontend/slick-theme.css";
import "../../css/frontend/css.css";

import "../../js/lib/frontend/jquery.min.js";
import "../../js/lib/frontend/bootstrap.bundle.min.js";
import "../../js/lib/frontend/easing.js";
import "../../js/lib/frontend/easing.min.js";
import "../../js/lib/frontend/slick.js";
import "../../js/lib/frontend/slick.min.js";
import "../../js/lib/frontend/main";

import ContactTopbar from './frontend/ContactTopbar';
import MenuTopbar from './frontend/MenuTopbar';
import Topbar from './frontend/Topbar';

export default function GuestLayout({ children }) {
    return (
        <>
        <ContactTopbar />
        <MenuTopbar />
        <Topbar />
        <div>{children}</div>
        </>
    );
}
