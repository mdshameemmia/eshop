export default function validationSchema(Yup){
    return Yup.object({
        name: Yup.string().required("Required"),
        email: Yup.string().required("Required"),
        subject: Yup.string().required("Required"),
        message: Yup.string().required("Required"),
    })
}