import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage, router } from "@inertiajs/react";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
});

const Edit = () => {
    const { csrfToken, category } = usePage().props;

    const initialValues = {
        name: category.name,
        description: category.description,
    };

    const onSubmit = async (values, { setSubmitting }) => {
        values._token = csrfToken;
        try {
            router.put(`/categories/${category.id}`, values);
        } catch (error) {
            console.error("Error during submission:", error);
        } finally {
            setSubmitting(false); // Reset submitting state
        }
    };

    return (
        <AuthenticatedLayout>
            <Head title="Slider Create" />
            <div className="container">
                <div className="card p-2">
                    <h2 className="text-center fw-bold card-header py-2 m-0">
                        Category
                    </h2>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={onSubmit}
                        validationSchema={validationSchema}
                    >
                        {(formik) => (
                            <Form>
                                <div className="my-2">
                                    <label
                                        htmlFor=""
                                        className="form-label p-0 m-0"
                                    >
                                        Name
                                    </label>
                                    <Field
                                        name="name"
                                        className="form-control"
                                    />
                                    <ErrorMessage
                                        name="name"
                                        component="div"
                                    />
                                </div>
                                <div className="my-2">
                                    <label
                                        htmlFor=""
                                        className="form-label p-0 m-0"
                                    >
                                        Description
                                    </label>
                                    <Field
                                        name="description"
                                        className="form-control"
                                    />
                                    <ErrorMessage
                                        name="description"
                                        component="div"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={formik.isSubmitting}
                                    className="btn btn-primary"
                                >
                                    {formik.isSubmitting
                                        ? "Submitting..."
                                        : "Submit"}
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Edit;
