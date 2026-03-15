export function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;

    category: string;
    image: string;
    rating: {
        rate: number;
        count: number
    }

}