interface PriceContextType {
    price: string,
    currency: string,
}

interface DescriptionContextType {
    description: string,
}

interface SegmentContextType {
    setPreview: React.Dispatch<React.SetStateAction<PreviewUrls>>,
    urls: PreviewUrls,
}

interface PreviewUrls {
    url: string,
    srcSet: Array<string>
}

interface ImageContextType {
    urls: PreviewUrls,
}

interface ImageShowcaseContextType {
    setPreview: React.Dispatch<React.SetStateAction<PreviewUrls>>,
    urls: Array<PreviewUrls>,
}

interface LogoContextType {
    logo: string
}

interface SearchPanelContextType {
    trigger: boolean,
    state: StateHandler<string>,
}

interface ResultsContainerContextType {
    keywords: string[],
    state: StateHandler<string>,
}

interface KeywordContainerContextType {
    state: StateHandler<string>,
}

interface ProductContextType {
    id: number,
    price: Price,
    description: Description,
    preview: Preview,
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