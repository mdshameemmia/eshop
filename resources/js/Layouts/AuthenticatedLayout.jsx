import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";

import "../../css/backend/style.min.css";
import "../../css/backend/styles.css";

import "../../js/lib/backend/all.js";
import "../../js/lib/backend/bootstrap.bundle.min.js";
import "../../js/lib/backend/scripts.js";
// import "../../js/lib/backend/Chart.min.js";
// import "../../js/lib/backend/chart-area-demo";
// import "../../js/lib/backend/chart-bar-demo";
import "../../js/lib/backend/simple-datatables.min.js";
import "../../js/lib/backend/datatables-simple-demo.js";
import Footer from "./backend/Footer";
import MenuTopbar from "./backend/MenuTopbar";
import Topbar from "./backend/Topbar";
import Sidebar from "./backend/Sidebar";

export default function AuthenticatedLayout({ header, children }) {
    const user = usePage().props.auth.user;

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <>
            <MenuTopbar />
            <Topbar />
            <div id="layoutSidenav">
                <Sidebar />
                <div id="layoutSidenav_content">
                    <main className="container">{children}</main>
                    <Footer />
                </div>
            </div>
        </>
    );
}
