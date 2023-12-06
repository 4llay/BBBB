import Container from "@/components/Container";
import FormWrap from "@/components/inputs/FormWrap";
import CheckoutClient from "./CheckoutClient";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Menuzinho from "@/components/menu";

const Checkout = () => {
    return (
        <div className="p-8 w-full h-full bg-brickwall bg-stylish">
            <div className='left-[90dvw] top-[7dvh] text-white text-[4rem] absolute'>
                <Menuzinho />
            </div>
            <Container>
                <FormWrap>
                    <CheckoutClient />
                </FormWrap>
            </Container>
        </div>
    );
}

export default Checkout;