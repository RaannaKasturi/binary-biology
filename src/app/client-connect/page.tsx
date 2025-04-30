"use client";

import { Separator } from "@/components/ui/separator";
import CCForm from "@/pages/client-connect/ccform";
import CCHero from "@/pages/client-connect/cchero";

export default function ClientConnect() {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full ">
            < CCHero />
            < CCForm />
            < Separator className="my-10 w-full" />
        </div>
    );
}
