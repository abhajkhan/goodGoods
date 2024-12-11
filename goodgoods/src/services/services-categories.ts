import { ServicesBase } from "./services-base";

export class ServicesCategories extends ServicesBase {
    static async getCategories(){
        const url = this.getUrl('/products/categories');

        const Response = await fetch(url);
        const categories = await Response.json();
        return categories
    }
}