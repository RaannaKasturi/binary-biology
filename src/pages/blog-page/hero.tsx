import Image from "next/image";

export default function BlogHero({ imageUrl, title }: { imageUrl: string; title: string; }) {
    return (
        <section id="bloghero" className="w-full relative">
            <div className="aspect-[18/9] w-full relative overflow-hidden rounded-xl group">
                <Image
                    fill={true}
                    sizes="100vw"
                    src={imageUrl || "/placeholder.svg"}
                    alt={title}
                    className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 m-2 pt-1 rounded-xl pb-2 bg-black/60 backdrop-blur-md">
                    <h1 className="text-3xl md:text-5xl font-bold text-white text-center">{title}</h1>
                </div>
            </div>
        </section>
    )
}