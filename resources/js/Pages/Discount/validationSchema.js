export default function validationSchema(Yup){
    return Yup.object({
        code: Yup.string().required("Required"),
        description: Yup.string().required("Required"),
        discount_type: Yup.string().required("Required"),
        value: Yup.string().required("Required"),
        expires_at: Yup.string().required("Required"),

    })
}