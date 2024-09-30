import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage, router } from "@inertiajs/react";
import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import SubmitButton from "@/Components/SubmitButton";
import initialValues from "./initialValues";
import validationSchema from "./validationSchema";
import ProductForm from "./ProductForm";

const Create = () => {
    const { csrfToken } = usePage().props;

    const onSubmit = async (values, { setSubmitting }) => {
        values._token = csrfToken;
        try {
            router.post("/products", values);
        } catch (error) {
            console.error("Error during submission:", error);
        } finally {
            setSubmitting(false); // Reset submitting state
        }
    };

    return (
        <AuthenticatedLayout>
            <Head title="Product Create" />
            <div className="container">
                <div className="card p-2">
                    <h2 className="text-center fw-bold card-header py-2 m-0">
                        Product
                    </h2>
                    <Formik
                        initialValues={initialValues()}
                        onSubmit={onSubmit}
                        validationSchema={validationSchema(Yup)}
                    >
                        {(formik) => (
                            <Form>
                                <ProductForm />
                                <SubmitButton formik={formik} />
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Create;
