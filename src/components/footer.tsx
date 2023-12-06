import { Courgette } from 'next/font/google'

const courgette = Courgette({
    subsets: ['latin'],
    weight: '400'
})

export function Footer(){
    return (
    <div className={courgette.className}>
        <footer className="flex flex-col justify-center w-full bottom-[1vh] p-[10px] text-center select-none" data-visible="false">  
        <p className="text-white text-[1.2em] xs:text-[1.4em] sm:text-[1.7em] md:text-[1.9em] lg:text-[1.8em] xl:text-[2.3rem]" id="nomes">Autores:
        <a className='hover:text-indigo-600 cursor-pointer' href='https://ordemparanormal.fandom.com/wiki/O_Anfitri%C3%A3o'>Caca</a>, 
        <a className='hover:text-red-400 cursor-pointer'>Feh</a>, 
        <a className='hover:text-purple-500 cursor-pointer' href="https://github.com/4llay">Jp</a>, 
        <a className='hover:text-red-400 cursor-pointer'>Gaga</a>, 
        <a className='hover:text-red-400 cursor-pointer'>Leleh</a> e
        <a className='hover:text-red-400 cursor-pointer' href="https://github.com/lucsKF"> Lucas</a>
        <br/>Copyright &#169; 2023</p>
        </footer>
    </div>
    )
}