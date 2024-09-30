export default function initialValues(data=null){
    return {
        address: data?.address,
        mobile:data?.mobile,
        upazilla: data?.upazilla,
        district: data?.district,
    }
}