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
                <h2 className="col-1">Discount </h2>
                <div className="col-10"></div>
                <Link href={route("discounts.create")}>
                    <button className=" btn btn-sm btn-rounded btn-primary p-2">
                        Add New{" "}
                    </button>
                </Link>
            </div>
            <div className="card-body">
                <CustomDataTables
                    data={props.discounts}
                    columns={props.columns}
                    editAction="discounts.edit"
                    destroyAction="discounts"
                />
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
