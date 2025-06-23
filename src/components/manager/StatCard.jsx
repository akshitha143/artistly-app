"use client";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

export default function StatCard({className, title, value, link }) {
  const router = useRouter();

  const handleClick = () => {
    if (link) {
      router.push(link);
    }
  };

  return (
    <Card 
      onClick={handleClick}
      className={cn("w-full cursor-pointer hover:shadow-lg transition-shadow border-dividers",className)}
    >
      <CardContent className="relative w-full h-[160px] flex flex-col items-center justify-center py-4">
        <h2 className="absolute left-8 top-0 w-full">{title}</h2>
        <p className="w-full h-auto text-center text-5xl font-semibold text-text-primary">{value}</p>
      </CardContent>
    </Card>
  );
}
