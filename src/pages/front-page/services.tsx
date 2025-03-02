import { FeaturesSectionWithHoverEffects } from "@/components/feature-section-with-hover-effects";
import { BlurFade } from "@/components/ui/blur-fade";

export default function Services() {
    return (
        <section id="services" className=" flex items-center justify-center p-5 w-full select-none bg-foreground/5">
            <BlurFade delay={0.25} inView className="py-20">
                <div className="min-h-screen w-full">
                    <div className="flex flex-col gap-4 w-10/12 mx-auto">
                        <h2 className="text-3xl font-medium md:text-4xl lg:text-5xl">
                            Services
                        </h2>
                        <p className="max-w-lg text-muted-foreground">Tailored Solutions for You and Your Businesses</p>
                    </div>
                    <FeaturesSectionWithHoverEffects />
                </div>
            </BlurFade>
        </section>
    );
}