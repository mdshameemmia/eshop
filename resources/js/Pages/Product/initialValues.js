export default function initialValues(data=null){
    return {
        name: data?.name,
        img:data?.img,
        description: data?.description,
        price: data?.price,
        stock: data?.stock,
        category_id: data?.category_id,
        is_new: data?.is_new,
        is_featured: data?.is_featured,
        gender: data?.gender,
        is_kids: data?.is_kids,
    }
}