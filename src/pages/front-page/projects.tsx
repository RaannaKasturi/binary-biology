"use client";

import { Gallery4, Gallery4Props } from "@/components/gallery4";
import { BlurFade } from "@/components/ui/blur-fade";

const demoData: Gallery4Props = {
    title: "Projects",
    description:
        "Discover how we’ve helped businesses and researchers like yours, to achieve their goals through stunning web designs and effective digital solutions. Our portfolio showcases a variety of projects, includion a few of ours, demonstrating our commitment to quality and innovation.",
    items: [
        {
            id: "project-gatekeeper",
            title: "Project Gatekeeper",
            label: "Web Development",
            description: "All-in-One SSL Toolkit",
            href: "https://projectgatekeeper.vercel.app",
            image:
                "https://images.unsplash.com/photo-1551250928-243dc937c49d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjN8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080",
        },
        {
            id: "scientry-app",
            title: "Scientry (Android App)",
            label: "Android Development",
            description: "Science Simplified, Knowledge Amplified.",
            href: "https://scientry.binarybiology.top",
            image:
                "https://images.unsplash.com/photo-1551250928-e4a05afaed1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjR8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080",
        },
        {
            id: "scientry-web",
            title: "Scientry (Web)",
            label: "Web Development",
            description: "Science Simplified, Knowledge Amplified.",
            href: "https://scientry.binarybiology.top",
            image:
                "https://images.unsplash.com/photo-1551250928-e4a05afaed1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjR8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080",
        },
    ],
};

export default function Projects() {
    return (
        <section id="projects" className="items-center justify-center p-4 -my-16 w-full select-none">
            <BlurFade delay={0.25} inView>
                <Gallery4 {...demoData} />
            </BlurFade>
        </section>
    )
}