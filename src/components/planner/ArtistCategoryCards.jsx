"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ArtistCategoryCards() {
    const router = useRouter();
  const categories = [
    {
      name: "Singers",
      link: "/planner/artists",
      img: "/images/singer.jpeg"
    },
    {
      name: "Dancers",
      link: "/planner/artists",
      img: "/images/dancing.webp"
    },
    {
      name: "Speakers",
      link: "/planner/artists",
      img: "/images/speaking.jpeg"
    },
    {
      name: "DJs",
      link: "/planner/artists",
      img: "/images/dj.webp"
    }
  ];

  return (
    <div  className=" w-full h-auto flex flex-col justify-center items-center gap-6 mb-4 " >
        <h1 className="w-full h-auto text-start font-semibold text-4xl text-text-primary" >categories</h1>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

        {categories.map((cat,id) => (
            
            <div 
              onClick={()=>{
                  router.push(cat.link);
              }} 
              onKeyDown={(e)=>{
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  router.push(cat.link);
                }
              }}
              key={id} tabIndex={0} className="group relative w-full rounded-xl overflow-hidden shadow hover:shadow-lg cursor-pointer transition  focus:ring-[3px] focus:ring-offset-[2px] focus:ring-brand focus:outline-none">
                <Image width={100} height={100} src={cat.img} alt={cat.name} className="w-full h-44 object-cover" />
                <div className="absolute bottom-0 w-full h-12 bg-secondary flex flex-col justify-center items-center py-2 transition-transform ease-in duration-300 translate-y-12 group-focus:translate-y-0 group-hover:translate-y-0">
                    <p className="text-xl font-semibold text-brand">{cat.name}</p>
                </div>
            </div>
        ))}
        </div>
    </div>
  );
}
