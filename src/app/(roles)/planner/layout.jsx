import AppFooter from "@/components/footers/AppFooter";
import { AppNavbar } from "../../../components/Navbars/index";

const  ManagerLayout  = ({children})=>{
    const navmenu = [
    {
        name: "Dashboard",
        link: "/planner/"
    },
    {
        name: "Browse Artists",
        link: "/planner/artists"
    },
    {
        name: "My Requests",
        link: "/planner/requests"
    }
    ];

    return (
        <div className="w-full min-h-screen flex flex-col justify-start items-center">
            <AppNavbar navmenu={navmenu} />
            <main className="w-full grow flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
              {children}
            </main>
            <AppFooter/>
        </div>
    );
}

export default ManagerLayout;