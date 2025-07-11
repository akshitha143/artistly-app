"use client";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";


export default function StatCard({className, title, value, link,...props }) {
  const router = useRouter();
  
  const handleClick = () => {
    if (link) {
      router.push(link);
    }
  };

  return (
    <Card
      {...props}
      tabIndex={0}
      role="button"
      aria-pressed="false"
      aria-label={title}
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleClick();
        }
      }}
      className={cn(
        "w-full cursor-pointer hover:shadow-xl border-dividers transition-all duration-200 ease-in-out  focus:border-brand focus:scale-105 focus:ring-2 focus:ring-brand hover:scale-105 focus:outline-none",
        className
      )}
    >
      <CardContent className="relative w-full h-[160px] flex flex-col items-center justify-center py-4">
        <h2 className="absolute left-8 top-0 w-full text-lg font-medium ">{title} </h2>
        <p className="w-full h-auto text-center text-5xl font-semibold text-text-primary">{value}</p>
      </CardContent>
    </Card>
  );
}
