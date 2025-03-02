"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { Button } from "../ui/button";
import { MenuIcon, MoonIcon, MoonStarIcon, PhoneCallIcon, SunIcon } from 'lucide-react';
import Link from "next/link";
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Separator } from "../ui/separator";

export default function Header() {
    const { theme, setTheme } = useTheme();
    const logo = theme === "dark" ? "/brand/logo-dark.png" : "/brand/logo-light.png";
    const logoAlt = theme === "dark" ? "BB Logo Dark" : "BB Logo Light";
    const ThemeIcon = theme === "dark" ? MoonIcon : SunIcon;

    function changeTheme() {
        if (theme === "dark") {
            setTheme("light");
        } else {
            setTheme("dark");
        }
    }

    return (
        <header className="fixed flex items-center bg-background z-40 flex-row top-0 w-full border-b-2 p-3 justify-between">
            <Link href={"/"} className="cursor-pointer" >
                <div className="flex flex-row items-center space-x-3">
                    <Image src={logo} alt={logoAlt} width={50} height={50} className="object-contain" />
                    <span className="font-bold text-xl">{"Binary Biology"}</span>
                </div>
            </Link>
            <div className="items-center space-x-1 flex md:hidden">
                <Button variant={'outline'} size={'icon'} > <PhoneCallIcon /> </Button>
                <Button variant={'outline'} size={'icon'} onClick={changeTheme}> <ThemeIcon /> </Button>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant={'outline'} size={'icon'}> < MenuIcon /> </Button>
                    </SheetTrigger>
                    < SheetContent className="flex flex-col justify-between w-2/3" >
                        < SheetHeader className="text-start space-y-0" >
                            < SheetTitle className="text-2xl">Binary Biology</SheetTitle>
                            < SheetDescription className="pb-3">Biology & Technology</SheetDescription>
                            <Separator orientation={'horizontal'} />
                            <ul className="navbar-nav navbar flex flex-col justify-between items-start pt-5">
                                <Link href="#" className="navbar nav-link cursor-pointer hover:underline underline-offset-2 w-full hover:scale-110 hover:bg-secondary hover:text-primary text-end pr-5 p-2 rounded" >
                                    <li>Home</li>
                                </Link>
                                <Link href="#services" className="navbar nav-link cursor-pointer hover:underline underline-offset-2 w-full hover:scale-110 hover:bg-secondary hover:text-primary text-end pr-5 p-2 rounded" >
                                    <li>Services</li>
                                </Link>
                                <Link href="#projects" className="navbar nav-link cursor-pointer hover:underline underline-offset-2 w-full hover:scale-110 hover:bg-secondary hover:text-primary text-end pr-5 p-2 rounded" >
                                    <li>Projects</li>
                                </Link>
                                <Link href="#faq" className="navbar nav-link cursor-pointer hover:underline underline-offset-2 w-full hover:scale-110 hover:bg-secondary hover:text-primary text-end pr-5 p-2 rounded" >
                                    <li>F.A.Q.s</li>
                                </Link>
                                <Link href="#contact" className="navbar nav-link cursor-pointer hover:underline underline-offset-2 w-full hover:scale-110 hover:bg-secondary hover:text-primary text-end pr-5 p-2 rounded" >
                                    <li>Contact</li>
                                </Link>

                            </ul>
                        </SheetHeader>
                        < SheetFooter className="flex flex-col justify-between items-center -space-y-1">
                            <Separator orientation={'horizontal'} className="mb-3" />
                            <p className="text-center">Designed and Developed by <a className="text-primary cursor-pointer hover:underline underline-offset-2" href="http://nayankasturi.eu.org" target="_blank" rel="noopener noreferrer">
                                Nayan Kasturi
                            </a></p>
                        </SheetFooter>
                    </SheetContent>
                </Sheet>
            </div>
            <nav className="hidden md:flex flex-row lg:space-x-5 space-x-4">
                <Link href="#" className="text-lg md:text-xl hover:underline hover:text-primary decoration-wavy underline-offset-2">Home</Link>
                <Link href="#services" className="text-lg md:text-xl hover:underline hover:text-primary decoration-wavy underline-offset-2">Services</Link>
                <Link href="#projects" className="text-lg md:text-xl hover:underline hover:text-primary decoration-wavy underline-offset-2">Projects</Link>
                <Link href="#faq" className="text-lg md:text-xl hover:underline hover:text-primary decoration-wavy underline-offset-2">F.A.Q.s</Link>
                <Link href="#contact" className="text-lg md:text-xl hover:underline hover:text-primary decoration-wavy underline-offset-2">Contact</Link>
            </nav>
            <div className="items-center md:flex hidden flex-row justify-between space-x-4">
                <Button variant={'outline'} size={'icon'} onClick={changeTheme}> <ThemeIcon /> </Button>
                <Button variant={'outline'} size={'default'} > <PhoneCallIcon /> Contact Us </Button>
            </div>
        </header>
    )
}