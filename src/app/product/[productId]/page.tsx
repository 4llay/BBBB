import Container from "@/components/Container"
import ProductDetails from "./ProductDetails"
import { products } from "../../../../utils/products"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

interface IPrams {
    productId?: string
}

const Product = ({ params }: { params: IPrams }) => {
    
    const product = products.find((item)=> item.id === params.productId)

    console.log(product)

    return (
        <div className="p-8">
            <Header />
            <Container>
                <ProductDetails product={product} />
            </Container>
            <Footer />
        </div>
    )
}

export default Product;