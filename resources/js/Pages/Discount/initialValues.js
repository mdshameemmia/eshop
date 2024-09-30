export default function initialValues(data=null){
    return {
        code: data?.code,
        description:data?.description,
        discount_type: data?.discount_type,
        value: data?.value,
        expires_at: data?.expires_at,
    }
}