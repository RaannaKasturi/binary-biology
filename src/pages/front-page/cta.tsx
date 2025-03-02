import { BlurFade } from "@/components/ui/blur-fade";
import { CTA } from "@/components/ui/call-to-action";

export default function Contact() {
    return (
        <section id="contact" className="bg-foreground/5 w-full select-none p-5 pb-20">
            <BlurFade delay={0.25} inView>
                < CTA />
            </BlurFade>
        </section>
    )
}