import { usePriceContext } from "../../../lib/context/Context";

export const Number = () => {
    const context = usePriceContext();
    return (
        <span>{context.price}</span>
    )
}