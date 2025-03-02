import { BlurFade } from "@/components/ui/blur-fade";
import { FAQ } from "@/components/ui/faq-section";

export default function FAQs() {
    return (
        <section id="faq" className="bg-foreground/5 w-full select-none p-5">
            <BlurFade delay={0.25} inView className="pt-20">
                <FAQ />
            </BlurFade>
        </section>
    )
}