interface EmulateResponse {
    id: string,
    message: string,
    isError: boolean,
    data: ResponseData,
}

interface ResponseData {
    status: number,
    message: Pair | string,
}