"use client"

import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import React from "react"
import Link from "next/link"

export default function Post({
    title, image, category, slug
}: {
    title: string
    image: string
    category: string
    slug: string
}) {
    return (
        < Link href={slug} >
            <div
                className="group flex flex-row w-full hover:bg-primary/20 p-3 rounded-lg relative space-x-3"
                onClick={() => {
                    window.open(slug)
                }}
            >
                <div className="relative h-24 w-24 aspect-square rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                        src={image || "/placeholder.svg"}
                        alt={React.Children.toArray(title).join("")}
                        style={{ objectPosition: "center center", objectFit: "cover" }}
                        fill={true}
                        sizes="100vw"
                        className="group-hover:scale-110 transition-transform duration-300"
                    />
                </div>
                <div className="flex flex-col flex-grow text-start space-y-2">
                    <Badge
                        variant={"default"}
                        className="w-fit"
                    >
                        {category}
                    </Badge>
                    <div className="text-xl line-clamp-2 break-words">{title}</div>
                </div>
            </div>
        </Link>
    )
}
