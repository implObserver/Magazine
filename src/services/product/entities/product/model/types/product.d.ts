interface ProductContextType {
    id: number;
    isFavourite: IsFavourite;
    price: Price;
    description: Description;
    categories: string[];
    tags: string[];
    preview: Preview;
}

interface Price {
    discount: boolean,
    highDiscount: boolean,
    price: string,
    discountPrice: string,
    currency: string,
}

interface Description {
    description: string
}

interface Preview {
    urls: Array<PreviewUrls>,
}

interface ProductFeatures {
    like: React.ReactElement
}

interface IsFavourite {
    val: boolean;
    writable: boolean;
}

interface Examples {
    [key: string]: Product;
}