import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage, router } from "@inertiajs/react";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
    attribute_id: Yup.string().required("Required"),
    value: Yup.string().required("Required"),
});

const Create = () => {
    const { csrfToken, attributes } = usePage().props;

    const initialValues = {
        attribute_id: "",
        value: "",
    };

    const onSubmit = async (values, { setSubmitting }) => {
        values._token = csrfToken;
        try {
            router.post("/attribute-options", values);
        } catch (error) {
            console.error("Error during submission:", error);
        } finally {
            setSubmitting(false); // Reset submitting state
        }
    };

    return (
        <AuthenticatedLayout>
            <Head title="Attribute Option Create" />
            <div className="container">
                <div className="card p-2">
                    <h2 className="text-center fw-bold card-header py-2 m-0">
                        Attribute Option
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
                                        Attribute Name
                                    </label>
                                    <Field
                                        name="attribute_id"
                                        className="form-control"
                                        as="select"
                                    >
                                        <option value="">Select One</option>
                                        {
                                            attributes.map(attribute => {
                                                return <option key={attribute.id} value={attribute.id}>{attribute.name}</option>
                                            })
                                        }
                                        </Field>
                                    <ErrorMessage
                                        name="attribute_id"
                                        component="div"
                                    />
                                </div>
                                <div className="my-2">
                                    <label
                                        htmlFor=""
                                        className="form-label p-0 m-0"
                                    >
                                        Value
                                    </label>
                                    <Field
                                        name="value"
                                        className="form-control"
                                    />
                                    <ErrorMessage
                                        name="value"
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

export default Create;
