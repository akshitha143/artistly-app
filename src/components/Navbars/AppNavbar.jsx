"use client";
import Image from "next/image";
import { useUser } from "../../context/UserContext";
import { BrandSection, NavItem } from "../ui/navbar";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AppNavbar({navmenu}) {
    const router = useRouter();
    const [open ,setOpen] =useState(false);
    const { role, username,logout,loading } = useUser();
    useEffect(()=>{
        if(!loading && !role){
            router.push("/signin");
        }
    },[role, username,loading]);

  return (
    <nav id="app-navbar" className="bg-background sticky top-0 w-full h-auto flex flex-col md:flex-row  justify-center items-center px-4 md:px-6 lg:px-16 py-3 gap-0 md:gap-6 border-b border-dividers z-50">
        <div className="w-full flex flex-row justify-between items-center px-4 md:px-0 md:w-auto order-1">
            <BrandSection/>
            <Menu onClick={()=>{setOpen(!open)}} className="md:hidden w-8 h-8 text-text-primary"/>
        </div>
        <div className="hidden grow md:flex  bg-background flex-row justify-end items-center gap-6 pr-4 order-2">
            {
                navmenu.map((item ,index)=>{
                    return (
                        <NavItem key={index} item={item}/>
                    );
                })
            }
        </div>
        <div className={`absolute top-[57px] w-full ${open?"flex":"hidden"} md:hidden bg-background flex-col justify-end items-start gap-3 px-4 py-4 order-2`}>
            {
                navmenu.map((item ,index)=>{
                    return (
                        <NavItem key={index} item={item}/>
                    );
                })
            }
            <div className="w-full h-auto flex felx-row justify-start items-center py-2">
                <button onClick={logout} className="w-auto h-auto text-base text-text-primary px-4 py-1 border rounded-sm hover:cursor-pointer  ">logout</button>
            </div>
        </div>
        {
            role ?
                <div className="hidden md:flex flex-row justify-center items-center gap-4 order-3">
                    <Image width={100} height={100}  src="/images/profile.jpeg" alt="profile-image" className="w-9 h-9 object-cover object-center rounded-2xl"/>
                    <p className="w-16 text-sm font-medium truncate text-text-secondary">{username}</p>
                    <button onClick={logout} className="w-auto h-auto text-base text-text-primary px-4 py-1 border rounded-sm hover:cursor-pointer  ">logout</button>
                </div>
            :
            <NavItem className={"hidden md:block order-3"} item={{name:"Login",link:"/signin"}}/>

        }
    </nav>
  );
}
