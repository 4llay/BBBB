'use client'
import { formatPrice } from "../../../utils/formatPrice";
import { CartProductType } from "../product/[productId]/ProductDetails";
import Link from "next/link";
import { truncateText } from "../../../utils/truncateText";
import Image from "next/image";
import SetQuantity from "@/components/products/SetQuantity";
import { useCart } from "../../../hooks/useCart";

interface ItemContentProps {
    item: CartProductType
}

const ItemContent: React.FC<ItemContentProps> = ({ item }) => {
    const { handleRemoveProductFromCart, handleCartQtyIncrease, handleCartQtyDecrease } = useCart();

    

    return (
        <div className="grid grid-cols-5 text-xs md:text-sm gap-4 border-t-[1.5px] py-4 items-center bg-slate-300 p-4 rounded-xl">
            <div className="col-span-2 justify-start flex gap-2 md:gap-4">
                <Link href={`/product/${item.id}`}>
                    <div className="relative w-[70px] aspect-square">
                        <Image src={item.image} alt={item.name} fill className="object-contain rounded-xl" />
                    </div>
                </Link>
                <div className="flex items-center justify-center text-center">
                    <Link className="text-[20px]" href={`/product/${item.id}`}>{truncateText(item.name)}</Link>
                    <div className="w-[70px]"><button className="text-red-500 font-semibold underline" onClick={() => { handleRemoveProductFromCart(item) }}><i className="fa-solid fa-trash-can fa-2xl"></i></button></div>
                </div>
            </div>
            <div className="flex flex-col h-[100px] justify-self-center text-center">
                <div className="text-[20px]">{formatPrice(item.price)}</div>
                <SetQuantity cartCounter={true} cartProduct={item} handleQtyIncrease={() => { handleCartQtyIncrease(item) }} handleQtyDecrease={() => { handleCartQtyDecrease(item) }} />
            </div>
            <div className="justify-self-center">
            </div>
            <div className="justify-self-end font-semibold text-[20px]">{formatPrice(item.price * item.quantity)}</div>
        </div>
    )
}

export default ItemContent;