import Container from "@/components/Container";
import CartClient from "./CartClient";
import Menuzinho from "@/components/menu";
import { getCurrentUser } from "../../../actions/getCurrentUser";

const Cart = async() => {

    const currentUser = await getCurrentUser()
    
    return(
        <div className="w-full h-full bg-stylish bg-brickwall">
            <div className="pt-8">
                <div className='flex justify-center items-center translate-[50%] text-[4rem] w-[100%]'>
                    <div className='relative left-[40dvw] text-white'>
                        {/*@ts-ignore*/}
                        <Menuzinho />
                    </div>
                </div>
                <Container>
                    {/*@ts-ignore*/}
                    <CartClient currentUser={currentUser} />
                </Container>
            </div>
        </div>
    )
}

export default Cart;