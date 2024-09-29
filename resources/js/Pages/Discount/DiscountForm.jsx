import { ErrorMessage, Field } from "formik";

const DiscountForm = () => {
    return (
        <>
            <div className="my-2">
                <label htmlFor="" className="form-label p-0 m-0">
                    Code
                </label>
                <Field name="code" className="form-control" />
                <ErrorMessage name="code" component="div" />
            </div>
            <div className="my-2">
                <label htmlFor="" className="form-label p-0 m-0">
                Description
                </label>
                <Field name="description" className="form-control" />
                <ErrorMessage name="description" component="div" />
            </div>
            <div className="my-2">
                <label htmlFor="" className="form-label p-0 m-0">
                    Discount Type(percentage)
                </label>
                <Field name="discount_type" className="form-control" />
                <ErrorMessage name="discount_type" component="div" />
            </div>
            <div className="my-2">
                <label htmlFor="" className="form-label p-0 m-0">
                    Value
                </label>
                <Field name="value" className="form-control" as="textarea" />
                <ErrorMessage name="value" component="div" />
            </div>
            <div className="my-2">
                <label htmlFor="" className="form-label p-0 m-0">
                    Expired At
                </label>
                <Field name="expires_at" className="form-control" as="textarea" />
                <ErrorMessage name="expires_at" component="div" />
            </div>
        </>
    );
};

export default DiscountForm;
