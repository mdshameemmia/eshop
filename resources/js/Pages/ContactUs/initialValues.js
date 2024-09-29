export default function initialValues(data=null){
    return {
        name: data?.name,
        email:data?.email,
        subject: data?.subject,
        message: data?.message,
    }
}