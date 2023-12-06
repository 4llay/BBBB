"use client"

import Button from "@/components/Button";
import SetQuantity from "@/components/products/SetQuantity";
import { useCart } from "../../../../hooks/useCart";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import ProductImage from "@/components/products/ProductImage";
import { toast } from "@/components/ui/use-toast";

interface ProductDetailsProps {
    product: any
}

export type CartProductType = {
    id: string,
    name: string,
    description: string,
    image: string,
    quantity: number,
    price: number
}

const Horizontal = () => {
    return <hr className="w-[30%] my-2" />
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
    const { handleAddProductToCart, cartProducts } = useCart();
    const [isProductInCart, setIsProductInCart] = useState(false);

    useEffect(() => {
        setIsProductInCart(false)

        if (cartProducts) {
            const existingIndex = cartProducts.findIndex((item) => item.id === product.id)
            if (existingIndex > -1) {
                setIsProductInCart(true);
            }
        }
    }, [cartProducts])

    const [CartProduct, setCartProduct] = useState<CartProductType>(
        {
            id: product.id,
            name: product.name,
            description: product.description,
            image: product.image,
            quantity: 1,
            price: product.price
        })
    const router = useRouter();

    const handleQtyIncrease = useCallback(() => { if(CartProduct.quantity === 99){return toast({title: "Ooooops!", description: "Maximo de produtos adicionados!", variant: "destructive",})} setCartProduct((prev) => { return { ...prev, quantity: prev.quantity + 1 } }); }, [CartProduct]);
    const handleQtyDecrease = useCallback(() => { if(CartProduct.quantity === 1){return toast({title: "Ooooops!", description: "Minimo de produtos no carrinho!", variant: "destructive",})} setCartProduct((prev) => { return { ...prev, quantity: prev.quantity - 1 } }); }, [CartProduct]);

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-gradient-to-t from-cianinho to-rosinha my-[50px] p-[10px] py-[50px] rounded-2xl border-4 border-black dark:from-DarkMenuColor dark:to-DarkMenuColor">
                <ProductImage cartProduct={CartProduct} product={product} />
                <div className="flex flex-col gap-[25px] text-black-300 text-lg drop-shadow-[0px_5px_5px_rgba(0,0,0,0.3)]">
                    <h2 className="text-5xl font-bold text-black-300">{product.name}</h2>
                    <div className="flex items-center gap-2"></div>
                    <Horizontal />
                    <div className="text-justify text-[25px]">{product.description}</div>
                    <div className={`${product.inStock ? 'text-green-500' : "text-rose-400"} underline-offset-2 underline`}>{product.inStock ? "Em estoque!" : "Fora de estoque!"}</div>
                    {isProductInCart ? <>
                        <Horizontal />
                        <p className="mb-2 flex items-center gap-1">
                            <span>Produto adicionado ao carrinho!</span>
                        </p>
                        <div className="max-w-[300px]">
                            <Button label="Ver seu Carrinho" outline onClick={() => { router.push("/cart") }} />
                        </div>
                    </> : <>
                        <Horizontal />
                        <SetQuantity cartProduct={CartProduct} handleQtyIncrease={handleQtyIncrease} handleQtyDecrease={handleQtyDecrease} />
                        <Horizontal />
                        <div className="max-w-[300px]">
                            <Button label="Adicionar ao carrinho" onClick={() => handleAddProductToCart(CartProduct)} />
                        </div>
                    </>}
                </div>
            </div>
        </>
    )
}

export default ProductDetails;