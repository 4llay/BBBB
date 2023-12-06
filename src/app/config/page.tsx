'use client'

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { useTheme } from "next-themes"

export default function Config() {
    const { setTheme } = useTheme()
    return (
        <>
        <main className="w-full h-full flex justify-center pt-[50px]">
            <div className="relative w-[90dvw] lg:w-[50dvw] bg-gradient-to-t from-cianinho to-rosinha border-4 dark:from-DarkMenuColor dark:to-DarkMenuColor p-[30px] rounded-md flex flex-col items-center">
                <a className="absolute left-4 top-4" href="/"><i className="fa-solid fa-house text-[35px]"></i></a>
                    <h1 className="text-[40px]">Tema</h1>
                <div className="flex flex-col justify-center gap-[20px] sm:flex-row sm:gap-[50px] sm:text-[30px] bg-slate-200 dark:bg-slate-800 p-2 sm:pr-8 rounded-md">
                    <button onClick={() => setTheme("light")} className="w-[105px] border-4 border-cianinho dark:border-transparent rounded-sm">
                        <i className="fa-solid fa-sun"></i>
                        <h1>Claro</h1>
                    </button>
                    <button onClick={() => setTheme("dark")} className="w-[105px] border-4 border-transparent dark:border-red-800  rounded-sm">
                        <i className="fa-solid fa-moon"></i>
                        <h1>Escuro</h1>
                    </button>
                    <button onClick={() => setTheme("system")} className="w-[105px]">
                        <i className="fa-solid fa-desktop"></i>
                        <h1>Sistema</h1>
                    </button>
                </div>
            </div>
        </main>
        <Footer />
        </>
    )
}