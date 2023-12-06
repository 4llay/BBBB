import Container from "@/components/Container"
import { Payment, columns } from "./colums"
import { DataTable } from "./data-table"
import Menuzinho from "@/components/menu"
import { useCart } from "../../../hooks/useCart";
import { getCurrentUser } from "../../../actions/getCurrentUser";

async function getData(): Promise<Payment[]> {

    const currentUser = await getCurrentUser()
    return [
        {
            id: "a",
            amount: 2,
            status: "Pendente",
            email: "Pastel de carne",
        },
    ]
}

export default async function DemoPage() {
    const data = await getData()

    return (
        <div className="w-full h-full bg-stylish bg-brickwall">
            <div className="pt-8">
                <div className='flex justify-center items-center translate-[50%] text-[4rem] w-[100%]'>
                    <div className='relative left-[40dvw] text-white'>
                        <Menuzinho />
                    </div>
                </div>
                <Container>
                    {/*@ts-ignore*/}
                    <div className="container mx-auto py-10">
                        <DataTable columns={columns} data={data} />
                    </div>
                </Container>
            </div>
        </div>
    )
}