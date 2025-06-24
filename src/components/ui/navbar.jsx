"use client";
import { cn } from "../../lib/utils";
import { useRouter } from "next/navigation";
export  const NavItem = ({className,item,children,...props})=>{
    const router = useRouter();
    const navigation = ()=>{
        router.push(`${item.link}`);
    }
    return (
        <div {...props} onClick={navigation} className={cn("text-lg font-medium  text-gray-800",className)}>
            {
                children?
                children:
                <p className="px-5 py-[6px] text-[15px] text-text-primary font-semibold hover:cursor-pointer hover:bg-secondary-background rounded-full">
                {item.name}
                </p>
            }
        </div>
    );
}

export const BrandSection  = ({...props})=>{
    return (
        <div {...props}  className={cn("flex flex-row justify-center items-center gap-4 ")}>
            <p className="text-2xl font-semibold text-brand">Event</p>
        </div>
    )
}