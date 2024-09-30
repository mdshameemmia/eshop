import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage, router } from "@inertiajs/react";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ContactForm from "./ContactForm";
import initialValues from "./initialValues";
import SubmitButton from "@/Components/SubmitButton";
import validationSchema from "./validationSchema";



const Edit = () => {
    const { csrfToken, contactUs } = usePage().props;

    const onSubmit = async (values, { setSubmitting }) => {
        values._token = csrfToken;
        try {
            router.put(`/contact-us/${contactUs.id}`, values);
        } catch (error) {
            console.error("Error during submission:", error);
        } finally {
            setSubmitting(false); // Reset submitting state
        }
    };

    return (
        <AuthenticatedLayout>
            <Head title="Attribute Edit" />
            <div className="container">
                <div className="card p-2">
                    <h2 className="text-center fw-bold card-header py-2 m-0">
                        Contact Us
                    </h2>
                    <Formik
                        initialValues={initialValues(contactUs)}
                        onSubmit={onSubmit}
                        validationSchema={validationSchema(Yup)}
                    >
                        {(formik) => (
                            <Form>
                               <ContactForm />
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
