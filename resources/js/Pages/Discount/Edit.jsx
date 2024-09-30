import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage, router } from "@inertiajs/react";
import React from "react";
import { Formik, Form} from "formik";
import * as Yup from "yup";
import initialValues from "./initialValues";
import SubmitButton from "@/Components/SubmitButton";
import validationSchema from "./validationSchema";
import DiscountForm from "./DiscountForm";



const Edit = () => {
    const { csrfToken, discount } = usePage().props;

    const onSubmit = async (values, { setSubmitting }) => {
        values._token = csrfToken;
        try {
            router.put(`/discounts/${discount.id}`, values);
        } catch (error) {
            console.error("Error during submission:", error);
        } finally {
            setSubmitting(false); // Reset submitting state
        }
    };

    return (
        <AuthenticatedLayout>
            <Head title="Discount Edit" />
            <div className="container">
                <div className="card p-2">
                    <h2 className="text-center fw-bold card-header py-2 m-0">
                        Discount
                    </h2>
                    <Formik
                        initialValues={initialValues(discount)}
                        onSubmit={onSubmit}
                        validationSchema={validationSchema(Yup)}
                    >
                        {(formik) => (
                            <Form>
                               <DiscountForm />
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
