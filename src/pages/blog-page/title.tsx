import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function BlogTitle({ title, category }: { title: string; category: string; }) {
    return (
        <section id="title" className="pt-10 pb-5 flex flex-col items-center justify-center">
            <Badge>{category}</Badge>
            <h1 className="text-3xl md:text-5xl pt-2 pb-3 font-bold text-start">{title}</h1>
            <Separator />
        </section>
    )
}