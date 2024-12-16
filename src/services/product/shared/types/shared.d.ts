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
    setValue: React.Dispatch<React.SetStateAction<string>>,
    value: string,
}

interface ResultsContainerContextType {
    keywords: string[],
    setValue: React.Dispatch<React.SetStateAction<string>>,
}

interface KeywordContainerContextType {
    setValue: React.Dispatch<React.SetStateAction<string>>,
}