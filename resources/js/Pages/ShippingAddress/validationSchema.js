export default function validationSchema(Yup){
    return Yup.object({
        address: Yup.string().required("Required"),
        mobile: Yup.string().required("Required"),
        upazilla: Yup.string().required("Required"),
        district: Yup.string().required("Required"),

    })
}