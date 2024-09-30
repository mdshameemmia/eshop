import { ErrorMessage, Field } from "formik";

const ProductForm = () => {
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
                    Image
                </label>
                <Field name="img" className="form-control" />
                <ErrorMessage name="img" component="div" />
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
                    Price
                </label>
                <Field name="price" className="form-control" />
                <ErrorMessage name="price" component="div" />
            </div>
            <div className="my-2">
                <label htmlFor="" className="form-label p-0 m-0">
                    Stock
                </label>
                <Field name="stock" className="form-control" />
                <ErrorMessage name="stock" component="div" />
            </div>
            <div className="my-2">
                <label htmlFor="" className="form-label p-0 m-0">
                    Category
                </label>
                <Field name="category_id" className="form-control" />
                <ErrorMessage name="category_id" component="div" />
            </div>
            <div className="my-2">
                <label htmlFor="" className="form-label">
                    Is New
                </label>
                <br />
                <Field type="radio" name="is_new" value="1" />
                Yes
                <Field type="radio" name="is_new" value="0" />
                No
                <ErrorMessage name="is_new" component="div" />
            </div>
            <div className="my-2">
                <label htmlFor="" className="form-label">
                    Is Feature
                </label>
                <br />
                <Field type="radio" name="is_featured" value="1" />
                Yes
                <Field type="radio" name="is_featured" value="0" />
                No
                <ErrorMessage name="is_featured" component="div" />
            </div>
            <div className="my-2">
                <label htmlFor="" className="form-label">
                    Gender
                </label>
                <br />
                <Field type="radio" name="gender" value="Male" />
                Male
                <Field type="radio" name="gender" value="Female" />
                Female
                <ErrorMessage name="gender" component="div" />
            </div>
            <div className="my-2">
                <label htmlFor="" className="form-label">
                    Is Kids
                </label>
                <br />
                <Field type="radio" name="is_kids" value="1" />
                Yes
                <Field type="radio" name="is_kids" value="0" />
                No
                <ErrorMessage name="is_kids" component="div" />
            </div>
        </>
    );
};

export default ProductForm;
