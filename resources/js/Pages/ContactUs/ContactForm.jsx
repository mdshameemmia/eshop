import { ErrorMessage, Field } from "formik";

const ContactForm = () => {
    return (
        <>
            <div className="my-2">
                <label htmlFor="" className="form-label p-0 m-0">
                    Name
                </label>
                <Field name="name" className="form-control" />
                <ErrorMessage name="name" component="div" />
            </div>
            <div className="my-2">
                <label htmlFor="" className="form-label p-0 m-0">
                    Email
                </label>
                <Field name="email" className="form-control" />
                <ErrorMessage name="email" component="div" />
            </div>
            <div className="my-2">
                <label htmlFor="" className="form-label p-0 m-0">
                    Subject
                </label>
                <Field name="subject" className="form-control" />
                <ErrorMessage name="subject" component="div" />
            </div>
            <div className="my-2">
                <label htmlFor="" className="form-label p-0 m-0">
                    Message
                </label>
                <Field name="message" className="form-control" as="textarea" />
                <ErrorMessage name="message" component="div" />
            </div>
        </>
    );
};

export default ContactForm;
