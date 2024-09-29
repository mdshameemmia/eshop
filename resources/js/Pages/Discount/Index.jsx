import CustomDataTables from "@/Components/Table/CustomDataTables";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, usePage } from "@inertiajs/react";
import React from "react";
import { toast } from "react-toastify";

const Index = () => {
    const { props } = usePage();

    if (props.message) {
        toast(`${props.message}`);
        props.message = null;
    }

    return (
        <AuthenticatedLayout>
            <div className="container col-12 d-flex justify-around mt-3">
                <h2 className="text-center col-2">Contact US</h2>
                <div className="col-9"></div>
                <Link href={route("contact-us.create")}>
                    <button className=" btn btn-sm btn-rounded btn-primary p-2">
                        Add New{" "}
                    </button>
                </Link>
            </div>
            <div className="card-body">
                <CustomDataTables
                    data={props.contactUs}
                    columns={props.columns}
                    editAction="contact-us.edit"
                    destroyAction="contact-us"
                />
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
