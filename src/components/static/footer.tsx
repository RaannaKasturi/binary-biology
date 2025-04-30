"use client"

import Image from "next/image";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function Footer() {
    const { theme } = useTheme();
    const logoFile = theme === "dark" ? "/brand/logo-dark.png" : "/brand/logo-light.png";
    const logo = <Image src={logoFile} alt={"logoAlt"} width={50} height={50} className="object-contain" />;
    const mainLinks = [
        { label: "Home", href: "#" },
        { label: "Services", href: "#services" },
        { label: "Projects", href: "#projects" },
        { label: "F.A.Q.s", href: "#faqs" },
        { label: "Contact", href: "#contact" },
    ];
    // const legalLinks = [
    //     { label: "Privacy Policy", href: "/privacy" },
    //     { label: "Terms of Service", href: "/terms" },
    // ];
    const copyright = {
        text: "© 2025 Binary Biology",
        license: "All Rights Reserved.",
    };
    return (
        <footer className="py-10 w-full md:w-9/12">
            <div className="px-4 lg:px-8">
                <div className="flex items-start justify-center md:justify-between">
                    <Link
                        href={"/"}
                        className="flex items-center gap-x-2"
                        aria-label={"Binary Biology"}
                    >
                        {logo}
                        <span className="font-bold text-xl">Binary Biology</span>
                    </Link>
                    <ul className="flex list-none mt-6 md:mt-0 space-x-3">
                        {/* {socialLinks.map((link, i) => (
                            <li key={i}>
                                <Button
                                    variant="secondary"
                                    size="icon"
                                    className="h-10 w-10 rounded-full"
                                    asChild
                                >
                                    <a href={link.href} target="_blank" aria-label={link.label}>
                                        {link.icon}
                                    </a>
                                </Button>
                            </li>
                        ))} */}
                    </ul>
                </div>
                <div className=" border-t mt-6 pt-6 md:mt-4 md:pt-8 lg:grid lg:grid-cols-10">
                    <nav className="lg:mt-0 lg:col-[4/11] flex items-start justify-center md:justify-end">
                        <ul className="list-none flex flex-wrap -my-1 -mx-2 lg:justify-end justify-center">
                            {mainLinks.map((link, i) => (
                                <li key={i} className="my-1 mx-2 shrink-0">
                                    <Link
                                        href={link.href}
                                        className="text-sm text-primary underline-offset-4 hover:underline"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="mt-6 lg:mt-0 lg:col-[4/11]">
                        <ul className="list-none flex flex-wrap -my-1 -mx-3 lg:justify-end">
                            {/* {legalLinks.map((link, i) => (
                                <li key={i} className="my-1 mx-3 shrink-0">
                                    <a
                                        href={link.href}
                                        className="text-sm text-muted-foreground underline-offset-4 hover:underline"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))} */}
                        </ul>
                    </div>
                    <div className="mt-6 text-sm leading-6 text-center md:text-start text-muted-foreground whitespace-nowrap lg:mt-0 lg:row-[1/3] lg:col-[1/4]">
                        <div>{copyright.text}</div>
                        <div>{copyright.license}</div>
                    </div>
                </div>
            </div>
        </footer>
    )
}