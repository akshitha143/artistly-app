import TopSection from "@/components/planner/TopSection";
import ArtistCategoryCards from "@/components/planner/ArtistCategoryCards";
export default function DashboardPage() {
  return (
      <div className="w-full h-auto flex flex-col gap-8 px-4 md:px-12 lg:px-16 py-6">
          <TopSection/>
          <ArtistCategoryCards/>
      </div>
  );
}