"use client"

import { CartProductType } from "@/app/product/[productId]/ProductDetails";

interface SetQtyProps{
    cartCounter?: boolean;
    cartProduct: CartProductType;
    handleQtyIncrease: () => void;
    handleQtyDecrease: () => void;
}

const btnStyles = 'border-[1.5px] border-black text-black dark:border-white dark:text-white px-2 rounded-full bg-brickwall text-white bg-gradient-to-t from-cianinho to-rosinha my-[50px] dark:from-DarkMenuColor dark:to-DarkMenuColor';

const SetQuantity: React.FC<SetQtyProps> = ({cartCounter, cartProduct, handleQtyIncrease, handleQtyDecrease}) => {
    return(
        <div className="flex gap-8 items-center">
            {cartCounter ? null : <div className="font-bold">QUANTIDADE</div>}
            <div className="flex gap-4 items-center text-base">
                <button onClick={handleQtyDecrease} className={btnStyles}>-</button>
                <div>{cartProduct.quantity}</div>
                <button onClick={handleQtyIncrease} className={btnStyles}>+</button>
            </div>
        </div>
    )
}

export default SetQuantity;