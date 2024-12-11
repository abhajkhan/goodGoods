import { ServicesBase } from "./services-base";

export class ServicesProducts extends ServicesBase {

    static getProducts = async () => {
        const url = this.getUrl('/products');

        const productResponse = await fetch(url);
        const products = await productResponse.json();
        return products
    }

    static getProductDetail = async (product_id:number) => {
        const url = this.getUrl(`/products/${product_id}`);

        const Response = await fetch(url);
        const product = await Response.json();
        return product
    }

    static getLimitedProducts = async (limit?:number,sort?:string) => {
        const url = this.getUrl(`/products?limit=${limit}&sort=${sort}`);

        const Response = await fetch(url);
        const products = await Response.json();
        return products
    }
}
