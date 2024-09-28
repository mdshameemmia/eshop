import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage, router } from "@inertiajs/react";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
    slider_information: Yup.string().required("Required"),
    status: Yup.string().required("Required"),
});

const Create = () => {
    const { csrfToken, slider } = usePage().props;

    const initialValues = {
        slider_information: slider.slider_information,
        img: null,
        status: slider.status == "Active" ? 1 : 0,
    };

    

    const onSubmit = async (values, { setSubmitting }) => {
        values._token = csrfToken;
        values.id = slider.id;
        
        try {
            router.post(`/sliders/${slider.id}/update`, values);
           
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
                            <Form encType="multipart/form-data">
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
                                                onChange={(event) =>  {
                                                    formik.values.img = event.target.files[0]
                                                }}
                                            />
                                        )}
                                    </Field>
                                  
                                    <ErrorMessage name="img" component="div" />
                                    <img
                                        src={
                                            window.APP_URL +
                                            "/storage/" +
                                            slider.img
                                        }
                                        alt=""
                                        height={80}
                                        width={120}
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
                                        checked={formik.values.status == "1"}
                                        onChange={formik.handleChange}
                                    />
                                    Active
                                    <Field
                                        type="radio"
                                        name="status"
                                        value="0"
                                        checked={formik.values.status =="0"}
                                        onChange={formik.handleChange}

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
