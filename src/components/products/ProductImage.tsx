import { CartProductType, } from "@/app/product/[productId]/ProductDetails";
import Image from 'next/image'

interface ProductImageProps{
    cartProduct: CartProductType,
    product: any,
}

const ProductImage: React.FC<ProductImageProps> = ({product}) => {
    return(
        <div className="w-full flex justify-center">
            <img src={product.image} alt={product.name} className="w-[500px] 2xl:shadow-[15px_15px_5px_rgba(0,0,0,0.3)] object-fill rounded-2xl shadow-transparent" />
        </div>

    )
}

export default ProductImage;