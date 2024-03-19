import axios from "axios";

const API_URL_Product = 'http://localhost:8060/shopservice/ecommerce/api/v1/product';
const API_URL_Category = 'http://localhost:8060/shopservice/ecommerce/api/v1/category';

//product URL

//add product
export function addProd(data){
    return axios.post(API_URL_Product+'/add-product',data);
}

//List product
export function listProd(){
    return axios.get(API_URL_Product+'/all-product')
}

//get prod by id
export function getProdById(id,data){
    return axios.get(API_URL_Product+`/get-product?id=${id}`,data)
}

//get prod by name
export function getProdByName(name,data){
    return axios.get(API_URL_Product+`/get-product-name?name=${name}`,data)
}

//update prod by id

export function updateProdById(data){
    return axios.post(API_URL_Product +'/update-by-id',data);
}

//update prod by name

export function updateProdByName(data){
    return axios.post(API_URL_Product+'/update-by-name',data);
}

//delete product
export function deleteProd(id,data){
    return axios.get(API_URL_Product+`/delete-product?id=${id}`,data);
}

//***category urls

//add category
export function addCategory(data){
    return axios.post(API_URL_Category+'/add-category',data);
}

//list all category
export function listCategory(){
    return axios.get(API_URL_Category+'/all-category');
}

//get category by id
export function getCategoryById(id){
    return axios.get(API_URL_Category+`/get-category?id=${id}`);
}

//get category by name
export function getCategoryByName(name){
    return axios.get(API_URL_Category+`/get-category-name?name=${name}`);
}

//update by id
export function updateCategoryById(data){
    return axios.post(API_URL_Category+'/update-category-by-id',data);
}

//update by name
export function updatecategoryByName(data){
    return axios.post(API_URL_Category+'/update-category-by-name',data);
}

//delete category
export function deleteCategory(id,data){
    return axios.get(API_URL_Category+`/delete-category?id=${id}`,data);
}