import { ErrorMessage, Field } from "formik";

const ShippingAddressForm = () => {
    return (
        <>
            <div className="my-2">
                <label htmlFor="" className="form-label p-0 m-0">
                    Address
                </label>
                <Field name="address" className="form-control" />
                <ErrorMessage name="address" component="div" />
            </div>
            <div className="my-2">
                <label htmlFor="" className="form-label p-0 m-0">
                    Mobile
                </label>
                <Field name="mobile" className="form-control" />
                <ErrorMessage name="mobile" component="div" />
            </div>
            <div className="my-2">
                <label htmlFor="" className="form-label p-0 m-0">
                    Upazilla
                </label>
                <Field name="upazilla" className="form-control" />
                <ErrorMessage name="upazilla" component="div" />
            </div>
            <div className="my-2">
                <label htmlFor="" className="form-label p-0 m-0">
                    District
                </label>
                <Field name="district" className="form-control" />
                <ErrorMessage name="district" component="div" />
            </div>
        </>
    );
};

export default ShippingAddressForm;
