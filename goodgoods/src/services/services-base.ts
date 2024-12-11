export abstract class ServicesBase {
    static API_URL = "https://fakestoreapi.com";

    static getUrl (path:string) {
        return `${this.API_URL}${path}`
    }
}