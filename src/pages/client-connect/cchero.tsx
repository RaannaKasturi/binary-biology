"use client";

export default function CCHero() {
    return (
        <section id="cchero" className="relative flex flex-col items-center justify-center w-full bg-gradient-to-b from-foreground/5 to-background/5 py-10">
            <div className="flex flex-col items-center justify-center w-full">
                <div className="flex flex-col items-center justify-center w-full h-full p-5 text-center">
                    <h1 className="text-4xl font-bold text-foreground">Client Connect</h1>
                    <p className="mt-4 text-lg text-muted-foreground">Send us your Requirements and Budget.</p>
                    <p className="mt-2 text-sm text-muted-foreground">Special offers for MSME Businesses & Small Businesses</p>
                </div>
            </div>
        </section>
    )
}