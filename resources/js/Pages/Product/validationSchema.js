export default function validationSchema(Yup){
    return Yup.object({
        name: Yup.string().required("Required"),
        img: Yup.string().required("Required"),
        description: Yup.string().required("Required"),
        price: Yup.string().required("Required"),
        stock: Yup.string().required("Required"),
        category_id: Yup.string().required("Required"),
        is_new: Yup.string().required("Required"),
        is_featured: Yup.string().required("Required"),
        gender: Yup.string().required("Required"),
        is_kids: Yup.string().required("Required"),

    })
}