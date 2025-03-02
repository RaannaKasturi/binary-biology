import Footer from "@/components/static/footer";
import { Separator } from "@/components/ui/separator";
import Contact from "@/pages/front-page/cta";
import FAQs from "@/pages/front-page/faq";
import Hero from "@/pages/front-page/hero";
import Projects from "@/pages/front-page/projects";
import Services from "@/pages/front-page/services";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      < Hero />
      < Services />
      < Projects />
      < Separator />
      < FAQs />
      < Contact />
      < Footer />
    </div>
  );
}
