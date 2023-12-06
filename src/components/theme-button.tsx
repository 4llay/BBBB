"use client"

import { useTheme } from "next-themes"

export function ThemeButton() {

    const { setTheme } = useTheme()

    return (
        <>
            <button onClick={() => setTheme("dark")} className='dark:text-[0]'>
                <i className="fa-solid fa-sun"></i>
            </button>
            <button onClick={() => setTheme("light")} className='text-[0px] dark:text-[45px] dark:flex'>
                <i className="fa-solid fa-moon text-DarkTextColor"></i>
            </button>
        </>
    )
}