"use client";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { useUser } from "../../context/UserContext";
import { getTodayDate } from "@/lib/utils";

export default function ArtistCard({ artist,askforquot,...props }) {
  const { name, category, location, priceRange, languages, imageUrl} = artist;
  const {requests,setRequests,role} = useUser();
  const todayDate = getTodayDate()
  const handelClick  = (e) =>{
      setRequests((pre)=>[...pre,{id: pre.length, artistName: name, eventDate: todayDate, planner: "EventX", status: "Pending" }]);
      alert("request send successfully");
  }

  return (
    <Card {...props} className="hover:shadow-lg hover:scale-105 focus:scale-[1.02] cursor-pointer p-0 overflow-hidden focus:ring-brand  focus:ring-[3px] focus:ring-offset-[2px] focus:outline-none transition-all duration-200 ease-in-out">
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
        {role=="planner" && <button onClick={handelClick} className="w-full h-auto rounded-lg mt-2 text-base text-white text-center bg-brand py-[6px]">Ask For Quote</button>}
      </CardContent>
    </Card>
  );
}
