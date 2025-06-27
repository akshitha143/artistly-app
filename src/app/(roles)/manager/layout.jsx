import AppFooter from "@/components/footers/AppFooter";
import { AppNavbar } from "../../../components/Navbars/index";
import RoleGuard from "@/components/RoleGuade";
export const metadata = {
  icons: "/images/logo.png",
  viewport: {
    width: "device-width",
    initialScale: 1,  
  },
};
const  ManagerLayout  = ({children})=>{
    const navmenu = [
        {
            "name": "Dashboard",
            "link": "/manager/"
        },
        {
            "name": "Artists",
            "link": "/manager/artists"
        },
        {
            "name": "Onboard Artist",
            "link": "/manager/onboarding"
        },
        {
            "name": "Booking Requests",
            "link": "/manager/requests"
        },
        
    ]

    return (
        <div className="w-full min-h-screen flex flex-col justify-start items-center">
            <AppNavbar navmenu={navmenu} />
            <main className="w-full grow flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
              <RoleGuard allowedRoles={["manager"]}>
                {children}
              </RoleGuard>
            </main>
            <AppFooter/>
        </div>
        
    );
}

export default ManagerLayout;