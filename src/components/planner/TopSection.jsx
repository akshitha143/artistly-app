"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useRouter } from "next/navigation";
const TopSection = ()=>{
    const router = useRouter();
    return (
        <div className="group w-full h-[400px] rounded-4xl border">
        <Carousel>
            <CarouselContent>
                <CarouselItem>
                    <div className="w-full h-[400px] flex flex-col md:flex-row justify-end md:justify-start  items-end md:px-6 rounded-3xl md:rounded-4xl bg-cover bg-right-top bg-[url(/images/artist.jpg)]">
                        <div className="w-full md:w-[45%]  h-auto flex flex-col justify-end md:justify-center items-start p-4 md:p-8 text-white ">
                            <h1 className="text-center text-lg md:text-2xl font-bold mb-4">Discover Talented Artists for Every Occasion</h1>
                            <p className="text-xs md:text-lg text-gray-200">
                                At Artistly, we connect you with skilled singers, dancers, DJs, comedians, and performers from across India — ready to make your event truly special                            </p>
                            <button tabIndex={0}  onClick={()=>{router.push("/planner/artists")}} className="bg-brand mt-6 px-4 py-2 text-sm md:text-base text-white rounded-full font-medium">Brows Artists</button>
                        </div>
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div className="w-full h-[400px] flex flex-col md:flex-row justify-end md:justify-start  items-end  rounded-3xl md:rounded-4xl bg-cover bg-right-top bg-[url(/images/event.jpg)]">
                        <div className="w-full h-full flex flex-col justify-end md:justify-center items-start bg-linear-to-t md:bg-linear-to-r from-[#454444] from-30% to-[#ffffff00] to-60% md:px-2 rounded-3xl md:rounded-4xl">
                            <div className="w-full md:w-[40%]  h-auto flex flex-col justify-end md:justify-center items-start p-4 md:p-8 text-white ">
                            <h1 className="text-center text-xl md:text-2xl font-bold text-gray-200 mb-4">On Going Event</h1>
                            <p className="text-sm md:text-lg text-gray-200">
                                The event featured a grand musical night, energetic dance performances, and an electrifying DJ session. All artists performed as planned, delighting the guests and making the celebration memorable.
                            </p>                            
                        </div>
                        </div>
                    </div>
                </CarouselItem>
                
            </CarouselContent>
            <CarouselPrevious tabIndex={0} className={"hidden group-hover:flex"} />
            <CarouselNext tabIndex={0}  className={"hidden group-hover:flex"}/>
        </Carousel>
        </div>
    );
}

export default TopSection;