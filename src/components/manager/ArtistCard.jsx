"use client";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ArtistCard({ artist,askforquot }) {
  const { name, category, location, priceRange, languages, imageUrl } = artist;

  return (
    <Card className="hover:shadow-lg transition-shadow cursor-pointer p-0 overflow-hidden">
      <Image 
        src={ "/images/singer.jpeg"} 
        alt={name} 
        width={200}
        height={200}
        className="w-full h-44 object-cover rounded-t"
      />
      <CardContent className="relative pt-4 pb-4 space-y-3">
        <span className="max-w-2xl truncate absolute -top-4 bg-brand text-xs text-background font-medium rounded-full px-4 py-1">{category}</span>
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-sm text-gray-500">{category} | {location}</p>
        <p className="text-sm text-gray-500">Fee: {priceRange}</p>
        <p className="text-xs text-gray-500">Languages: {languages.join(", ")}</p>
        {askforquot && <button className="w-full h-auto rounded-lg mt-2 text-base text-white text-center bg-brand py-[6px]">Ask For Quote</button>}
      </CardContent>
    </Card>
  );
}
