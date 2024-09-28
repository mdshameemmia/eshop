import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage, router } from "@inertiajs/react";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
    slider_information: Yup.string().required("Required"),
    img: Yup.mixed().required("A file is required"),
    status: Yup.string().required("Required"),
});

const Create = () => {
    const { csrfToken } = usePage().props;

    const initialValues = {
        slider_information: "",
        img: "",
        status: "",
    };

    const onSubmit = async (values, { setSubmitting }) => {
        values._token = csrfToken;

        try {
          router.post("/sliders", values);
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
                        Slider
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
                                        Slider Information
                                    </label>
                                    <Field
                                        name="slider_information"
                                        className="form-control"
                                    />
                                    <ErrorMessage
                                        name="slider_information"
                                        component="div"
                                    />
                                </div>
                                <div className="my-2">
                                    <label htmlFor="" className="form-label">
                                        Upload Slider
                                    </label>
                                    <Field name="img">
                                        {({ field, form }) => (
                                            <input
                                                type="file"
                                                className="form-control"
                                                id="img"
                                                onChange={(event) => {
                                                    form.setFieldValue(
                                                        "img",
                                                        event.currentTarget
                                                            .files[0]
                                                    );
                                                }}
                                            />
                                        )}
                                    </Field>
                                    <ErrorMessage
                                        name="img"
                                        component="div"
                                    />
                                </div>
                                <div className="my-2">
                                    <label htmlFor="" className="form-label">
                                        Status{" "}
                                    </label>{" "}
                                    <br />
                                    <Field
                                        type="radio"
                                        name="status"
                                        value="1"
                                    />
                                    Active
                                    <Field
                                        type="radio"
                                        name="status"
                                        value="0"
                                    />
                                    Inactive
                                    <ErrorMessage
                                        name="status"
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
