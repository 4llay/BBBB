import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import Menuzinho from "@/components/menu";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function Sobre() {
    return (
        <div className="w-screen h-screen bg-brickwall bg-stylish">
            <div className='left-[90dvw] top-[7dvh] text-white text-[4rem] absolute'>
                {/*@ts-ignore*/}
                <Menuzinho />
            </div>
            <div className="w-screen h-full flex flex-col items-center">
                <div className="bg-slate-200 absolute left-[52%] top-[50%] text-center -translate-y-[60%] -translate-x-[60%] md:w-[1200px] md:mx-[85px] mt-[30px] p-[50px] py-[50px] mb-[130px] bg-gradient-aah border-white border-4 rounded-3xl dark:bg-none">
                    <h1 className="text-2xl font-bold sm:font-medium sm:text-5xl pb-8">Oque é esse site...</h1>
                    <p className="text-md sm:text-xl font-semibold md:text-justify">
                        Introdução:
                        No universo gastronômico, os pastéis ocupam um lugar especial, oferecendo uma explosão de sabores e texturas que conquistam paladares ao redor do mundo. Inspirados por essa paixão, propomos o projeto de TCC intitulado "Sabor Online", um website dedicado à venda de pastéis de forma inovadora e acessível.
                        <br/>
                        <br/>
                        Objetivo:
                        O objetivo principal do projeto é criar uma plataforma online que conecte amantes de pastéis a uma variedade irresistível dessas delícias, proporcionando uma experiência de compra conveniente e saborosa. A proposta visa explorar as possibilidades que a internet oferece para a comercialização de produtos alimentícios, destacando a versatilidade e a praticidade dos pastéis.
                        <br/>
                        <br/>
                        Justificativa:
                        Com a rápida expansão do comércio eletrônico, é essencial explorar novas oportunidades para negócios alimentícios. O Sabor Online visa atender a crescente demanda por opções de comida rápida de qualidade, permitindo que os usuários escolham entre uma ampla gama de sabores, desde os tradicionais até combinações inovadoras.
                    </p>
                </div>
            </div>
        </div>
    )
}