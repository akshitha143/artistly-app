import LazyArtistComp from "./LazyArtistComp";

export const metadata = {
  title: "Artists Management | Planner",
  description: "Manage artists, view their profiles, and filter by category, location, and price range.",
  keywords: "artists, management, category, location, price range, booking",
};

export default function ArtistServerPage() {
  return <LazyArtistComp />;
}