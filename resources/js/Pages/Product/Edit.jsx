import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage, router } from "@inertiajs/react";
import React from "react";
import { Formik, Form} from "formik";
import * as Yup from "yup";
import initialValues from "./initialValues";
import SubmitButton from "@/Components/SubmitButton";
import validationSchema from "./validationSchema";
import ShippingAddressForm from "./ProductForm";



const Edit = () => {
    const { csrfToken, shippingAddress } = usePage().props;

    const onSubmit = async (values, { setSubmitting }) => {
        values._token = csrfToken;
        try {
            router.put(`/shipping-addresses/${shippingAddress.id}`, values);
        } catch (error) {
            console.error("Error during submission:", error);
        } finally {
            setSubmitting(false); // Reset submitting state
        }
    };

    return (
        <AuthenticatedLayout>
            <Head title="Shipping Address Edit" />
            <div className="container">
                <div className="card p-2">
                    <h2 className="text-center fw-bold card-header py-2 m-0">
                        Shipping Address
                    </h2>
                    <Formik
                        initialValues={initialValues(shippingAddress)}
                        onSubmit={onSubmit}
                        validationSchema={validationSchema(Yup)}
                    >
                        {(formik) => (
                            <Form>
                               <ShippingAddressForm />
                                <SubmitButton formik={formik} />
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Edit;
