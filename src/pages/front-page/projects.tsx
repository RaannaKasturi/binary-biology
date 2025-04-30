"use client";

import { Gallery4, Gallery4Props } from "@/components/gallery4";
import { BlurFade } from "@/components/ui/blur-fade";

const projectData: Gallery4Props = {
    title: "Projects",
    description:
        "Discover how we’ve helped businesses and researchers like yours, to achieve their goals through stunning web designs and effective digital solutions. Our portfolio showcases a variety of projects, includion a few of ours, demonstrating our commitment to quality and innovation.",
    items: [
        {
            id: "protein-research-toolkit",
            title: "Protein Research Toolkit",
            label: "App Development",
            description: "All-in-One Protein Research Software",
            href: "https://github.com/RaannaKasturi/ProteinResearchToolkit/releases/tag/v1.0-FINAL",
            image:
                "/backgrounds/protein-research-toolkit.jpg",
        },
        {
            id: "project-gatekeeper",
            title: "Project Gatekeeper",
            label: "Web Development",
            description: "All-in-One SSL Toolkit",
            href: "https://gatekeeper.binarybiology.top/",
            image:
                "/backgrounds/project-gatekeeper.jpg",
        },
        {
            id: "scientry-app",
            title: "Scientry (Android App)",
            label: "Android Development",
            description: "Science Simplified, Knowledge Amplified.",
            href: "https://scientry.binarybiology.top",
            image:
                "/backgrounds/scientry-android.jpg",
        },
        {
            id: "scientry-web",
            title: "Scientry (Web)",
            label: "Web Development",
            description: "Science Simplified, Knowledge Amplified.",
            href: "https://scientry.binarybiology.top",
            image:
                "/backgrounds/scientry-web.jpg",
        },
    ],
};

export default function Projects() {
    return (
        <section id="projects" className="items-center justify-center p-5 w-full select-none">
            <BlurFade delay={0.25} inView className="py-20">
                <Gallery4 {...projectData} />
            </BlurFade>
        </section>
    )
}