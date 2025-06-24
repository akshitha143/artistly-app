"use client";
import Image from "next/image";
import { useUser } from "../../context/UserContext";
import { BrandSection, NavItem } from "../ui/navbar";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "motion/react"


export default function AppNavbar({navmenu}) {
    const router = useRouter();
    const [open ,setOpen] =useState(false);
    const { role, username,logout,loading } = useUser();
    const mobileMenuVariant = {
    opened: {
      y: "0%",
      transition: {
        delay: 0.15,
        duration: 1.1,
        ease: [0.74, 0, 0.19, 1.02]
      }
    },
    closed: {
      y: "-100%",
      transition: {
        delay: 0.35,
        duration: 0.63,
        ease: [0.74, 0, 0.19, 1.02]
      }
    }
  }
  const ulVariant = {
    opened: {
      transition: {
        delayChildren: 1,
        staggerChildren: 0.18
      }
    },
    closed: {
      transition: {
        staggerChildren: 0.06,
        staggerDirection: -1
      }
    }
  }
  const liVariant = {
    opened: {
      opacity: 1,
      y: "0%",
      transition: {
        duration: 0.65,
        ease: "easeOut"
      }
    },
    closed: {
      opacity: 0,
      y: "100%",
      transition: {
        duration: 0.25,
        ease: "easeInOut"
      }
    }
  }
    useEffect(()=>{
        if(!loading && !role){
            router.push("/signin");
        }
    },[role, username,loading]);


  return (
    <>
    <motion.nav  id="app-navbar" className="bg-background sticky top-0 w-full h-auto flex flex-col md:flex-row  justify-center items-center  md:px-6 lg:px-16 md:py-3 gap-0 md:gap-6 border-b border-dividers z-50">
        <div className="w-full h-full flex flex-col md:flex-row  justify-center items-center  bg-background z-50 px-4 py-3 md:px-0 md:py-0">
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
        </div>
        <motion.div className="w-full absolute bottom-0 z-40" initial="closed" animate={open?"opened":"closed"}>
        <motion.div  variants={mobileMenuVariant}
             
            className={`absolute top-0 w-full flex md:hidden bg-background  flex-col justify-end items-start px-4 pt-2 pb-4 gap-[10px] order-2`}>
            <motion.div variants={ulVariant} className="w-full flex flex-col justify-end items-start gap-[10px]">
            {
                navmenu.map((item ,index)=>{
                    return (
                        <NavItem key={index} item={item}>
                            <motion.p variants={liVariant} className="px-5 py-[6px] text-[15px] text-text-primary font-semibold hover:cursor-pointer hover:bg-secondary-background rounded-full">
                                {item.name}
                            </motion.p>
                        </NavItem>
                    );
                })
            }
            </motion.div>
            <div className="w-full h-auto flex felx-row justify-start items-center px-4 py-2">
                <button onClick={logout} className="w-auto h-auto text-base text-text-primary px-4 py-1 border rounded-sm hover:cursor-pointer  ">logout</button>
            </div>
        </motion.div>
        </motion.div>
    </motion.nav>
    
</>
  );
}
