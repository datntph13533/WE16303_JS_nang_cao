import instance from "./config";

export const getAll = () => {
    const url = "/products";
    return instance.get(url);
};
export const get = (id) => {
    const url = `/products/${id}`;
    return instance.get(url);
};
export const remove = (id) => {
    const url = `/products/${id}`;
    return instance.delete(url);
};
export const add = (post) => {
    const url = `/products`;
    return instance.post(url, post);
};
export const edit = (post) => {
    const url = `/products/${post.id}`;
    return instance.put(url, post);
};

export const getAllProductsHavingBrandsCate = async () => {
    const { data } = await instance.get("/products?_expand=catePro");
    return data;
};

export const getProductsByIDHavingBrandsCate = async (id) => {
    const { data } = await instance.get("/products?expand=catePro");
    return data.find((item) => item.id === id);
};