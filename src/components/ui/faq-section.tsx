import { PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function FAQ() {
  return (
    <div className="w-full md:px-16 px-5">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="flex gap-10 flex-col">
            <div className="flex gap-4 flex-col">
              <div>
                <Badge variant="outline">FAQ</Badge>
              </div>
              <div className="flex gap-2 flex-col">
                <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-left font-regular">
                  Everything You Need to Know About Our Services
                </h4>
                <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground  text-left">
                  We understand that choosing the right solution can be a big decision. That&apos;s why we&apos;ve compiled a list of frequently asked questions to help clarify our services, processes, and pricing.
                </p>
              </div>
              <div >
                < Link href={'#contact'} target="_blank" rel="nofollow noreferrer">
                  <Button className="gap-4" variant="outline">
                    Any questions? Reach out <PhoneCall className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem key={1} value={"index-" + 1}>
              <AccordionTrigger className="text-start underline-offset-2">
                What types of websites do you specialize in?
              </AccordionTrigger>
              <AccordionContent>
                We specialize in creating custom websites tailored to individual business needs, including portfolios, e-commerce platforms, and service-based websites.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem key={2} value={"index-" + 2}>
              <AccordionTrigger className="text-start underline-offset-2">
                How long does it take to complete a website?
              </AccordionTrigger>
              <AccordionContent>
                The timeline varies based on the chosen plan and complexity of the project. Generally, it takes 2-3 months, while more complex projects may take several weeks to complete.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem key={3} value={"index-" + 3} >
              <AccordionTrigger className="text-start underline-offset-2">
                Do you provide support after the website launch?
              </AccordionTrigger>
              <AccordionContent>
                Yes, We offer support packages to help you maintain and update your website as needed, ensuring it remains functional and up-to-date.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem key={4} value={"index-" + 4} >
              <AccordionTrigger className="text-start underline-offset-2">
                Can I make changes to my website after it&apos;s been completed?
              </AccordionTrigger>
              <AccordionContent>
                Absolutely! All websites are built with user-friendly content management systems, allowing you to easily update text, images, and other content without needing technical skills.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem key={5} value={"index-" + 5} >
              <AccordionTrigger className="text-start underline-offset-2">
                What type of bioinformatical work you do?
              </AccordionTrigger>
              <AccordionContent>
                We specialize in performing Bioinformatical analysis, including sequence alignment, phylogenetic analysis, docking, simulations, and more.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export { FAQ };
