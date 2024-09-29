const SubmitButton = ({ formik }) => {
    return (
        <button
            type="submit"
            disabled={formik.isSubmitting}
            className="btn btn-primary"
        >
            {formik.isSubmitting ? "Submitting..." : "Submit"}
        </button>
    );
};

export default SubmitButton;
