'use client'

import { useCart } from "../../../hooks/useCart";
import Link from "next/link";
import Heading from "@/components/Heading";
import Button from "@/components/Button";
import ItemContent from "./ItemContent";
import { formatPrice } from "../../../utils/formatPrice";
import { SafeUser } from "../../../types";
import { useRouter } from "next/navigation";

interface CartClientProps {
    currentUser: SafeUser | null;
}

const CartClient: React.FC<CartClientProps> = ({ currentUser }) => {
    const { cartProducts, handleClearCart, cartTotalAmount } = useCart();
    const router = useRouter();

    if (!cartProducts || cartProducts.length === 0) {
        return (
            <div className="flex flex-col items-center bg-slate-200 p-2 rounded-xl">
                <div className="text-2xl"><a href="/" className="text-green-500 flex items-center gap-1 mt-2">Não tem nada aqui... Compre algo</a></div>
            </div>
        )
    }

    return (
        <>
            <div className="bg-slate-200 p-4 rounded-lg  border-2 border-black">
                {currentUser ?
                    <>
                        <Heading title={`Bem vindo ${currentUser.name}`} center />
                        <Heading title={`Este são seus items adicionados no carrinho atualmente...`} center />
                    </>
                    : <>
                        <Heading title={`Este são seus items adicionados no carrinho atualmente`} center />
                        <Heading title={`Faça login para continuar a compra...`} center />
                    </>
                }
                <div className="grid grid-cols-5 text-[25px] gap-4 pb-2 items-center mt-8 border-2 border-black p-2 rounded-xl mb-4">
                    <div className="col-span-2 justify-self-start border-r-2 border-black pr-[18vw]">Produto</div>
                    <div className="justify-self-center border-r-2 border-black px-[18vw]">Preço</div>
                    <div className="justify-self-center"></div>
                    <div className="justify-self-end">Total</div>
                </div>
                <div>
                    {cartProducts && cartProducts.map((item) => {
                        return <ItemContent key={item.id} item={item} />
                    })}
                </div>
                <div className="border-t-[1.5px] border-slate-200 py-4 flex justify-between gap-4">
                    <div className="text-sm flex flex-col gap-1 items-start bg-slate-400 p-4 rounded-xl">
                        <Button label={currentUser ? "Comprar" : "Entre para comprar"} outline={currentUser ? false : true} onClick={() => {
                            currentUser ? router.push('/checkout') : router.push('/login')
                        }} />
                        <div className="flex font-semibold w-[15dvw] text-2xl">
                            <span>Total:</span>
                            <span className="text-teal-400">{formatPrice(cartTotalAmount)}</span>
                        </div>
                    </div>
                    <div className="w-[180px]">
                        <Button label="Remover todos os items do carrinho" onClick={() => { handleClearCart() }} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartClient;