import Hero from "@/pages/front-page/hero";
import Projects from "@/pages/front-page/projects";
import Services from "@/pages/front-page/services";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <Hero />
      <Projects />
      < Services />
    </div>
  );
}
