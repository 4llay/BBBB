
import React, { useEffect } from 'react';
import { Courgette } from 'next/font/google'
import { ThemeButton } from '@/components/theme-button';
import dynamic from 'next/dynamic';
import { getCurrentUser } from '../../actions/getCurrentUser';

const courgette = Courgette({
    subsets: ['latin'],
    weight: '400'
})

const Menu = dynamic(() => import('@/components/menu'), {
    ssr: false, // Impede o pré-carregamento do componente no servidor
});

export async function Header() {

    const currentUser = await getCurrentUser()

    return (
        <div className='justify-center select-none'>
            <div className={courgette.className}>
                <header className="w-full m-auto flex justify-around items-center py-[1rem]select-none">
                    <div className='flex items-center gap-[10.7px]'>
                        {/* Logo */}
                        <img className="hidden md:flex w-[70px] pr-[-15px]" src="/logo pro.png" />
                        {/* Titulo */}
                        <a href='/'><h1 className='text-[1.6em] xs:text-[2em] sm:text-[3em] md:text-[2em] lg:text-[3em] xl:text-[4rem] dark:text-DarkTextColor'>Cones Trufadassos</h1></a>
                    </div>

                    {<nav>
                        <ul className="flex items-center gap-[1em] lg:gap-[1.7em] xl:gap-[2em]">
                            {/* sobre nosso projeto */}
                            <li>
                                <a className="hidden md:flex text-[1.5em] lg:text-[1.7em] xl:text-[2rem] text-slate-500 hover:text-red-500 cursor-pointer dark:text-DarkTextColor" href='/about'>Sobre</a>
                            </li>

                            {/* Nossos contatos */}
                            <li>
                                <a className="hidden md:flex text-[1.5em] lg:text-[1.7em] xl:text-[2rem] text-slate-500 hover:text-red-500 cursor-pointer dark:text-DarkTextColor" target="_blank" href="https://instagram.com/lg_trufadasso"> contato</a>
                            </li>

                            {/* linha de separação */}
                            <li className="hidden md:flex border-[1px] pt-[2.5em] border-slate-500 cursor-pointer"></li>

                            {/* icone de carrinho */}
                            <li className="hidden md:flex text-black text-[2.5rem] hover:text-red-500 cursor-pointer dark:text-DarkTextColor">
                                <a href="/cart"><i className="fa-solid fa-cart-shopping"></i></a>
                            </li>

                            {/* mudar tema do site */}
                            <li className="hidden md:flex text-black text-[2.5rem] hover:text-red-500 cursor-pointer">
                                <ThemeButton />
                            </li>

                            {/* Menu */}
                            <li>
                                {/*@ts-ignore*/}
                                <Menu currentUser={currentUser} />
                            </li>
                        </ul>
                    </nav>}
                </header>
                {/* Linha de Separação horizontal */}
                <span className="border-[1px] border-slate-500 absolute flex left-[50%] pr-[90%] translate-x-[-50%]"></span>
            </div></div>
    )
}