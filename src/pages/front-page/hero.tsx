import { HeroGeometric } from "@/components/ui/shape-landing-hero";

export default function Hero() {
    return (
        <section id="hero" className="relative flex flex-col items-center justify-center w-full min-h-screen">
            <HeroGeometric badge="Scientry Launched on Google Play Store"
                title0="Revolutionize Your"
                title1="Research & Business with"
                title2="Binary Biology" />
        </section>
    )
}