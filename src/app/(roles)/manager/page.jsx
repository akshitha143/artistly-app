import { TopSection } from "@/components/manager";
import RoleGuard from "../../../components/RoleGuade";
import StatCard from "@/components/manager/StatCard";
import { ChartLineDots, description } from "@/components/charts/LineChart";
const requests = [
  { eventDate: "2025-01-15" },
  { eventDate: "2025-01-20" },
  { eventDate: "2025-02-10" },
  { eventDate: "2025-02-22" },
  { eventDate: "2025-03-05" },
  { eventDate: "2025-03-15" },
  { eventDate: "2025-03-25" },
];

export default function DashboardPage() {
  return (
    <RoleGuard allowedRoles={["manager"]}>
      <div className="w-full h-auto flex flex-col gap-8 px-4 md:px-12 lg:px-16 py-6">
          <TopSection/>
          <div className="w-full h-auto flex flex-col justify-center items-center gap-6">
            <h1 className="w-full text-3xl font-semibold text-text-primary">Quick Stats</h1>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
              <StatCard className={"bg-linear-to-br from-[#FCF3F2] to-[#F3FCED]"} title="Artists" value="12"  link="/manager/artists" />
              <StatCard className={"bg-linear-to-br from-[#FDF2FD] to-[#EEFFFF]"} title="New Bookings" value="8"  link="/manager/requests" />
              <StatCard className={"bg-linear-to-br from-[#FDF2FD] to-[#FDEDEE]"} title="Pending approvals" value="3" link="/manager/requests" />
            </div>
          </div>
          <div className="w-full grid grid-cols-1  gap-6">

            <ChartLineDots
              info={{ title: "Booking Requests Trend", description: "Number of requests per month" }}
              requests={requests}
            />          
          </div>
      </div>
    </RoleGuard>
  );
}
