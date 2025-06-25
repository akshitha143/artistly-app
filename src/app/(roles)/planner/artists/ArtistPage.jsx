"use client";
import { useState, useMemo } from "react";
import ArtistCard from "@/components/manager/ArtistCard";
import { Input } from "@/components/ui/input";
import allArtists from "@/data/artists";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import Pagenation from "@/components/common/Pagenation";
import Dropdown from "@/components/common/Dropdown";

const ITEMS_PER_PAGE = 10;
const ArtistsPage = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);


  const filteredArtists = useMemo(() => {
    //for filtering based on the search query, category, location and price range
    return allArtists
      .filter((artist) =>
        artist.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .filter((artist) =>
        categoryFilter ? artist.category === categoryFilter : true
      )
      .filter((artist) =>
        locationFilter ? artist.location === locationFilter : true
      )
      .filter(artist =>
      priceFilter ? artist.priceRange === priceFilter : true
    );
  }, [searchQuery, categoryFilter, locationFilter,priceFilter]);

  
  // Calculate pagination
  const totalPages = Math.ceil(filteredArtists.length / ITEMS_PER_PAGE);
  const paginatedArtists = filteredArtists.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  //  Function to handle location filter change
  const onChangeLocation = (value) => {
        setLocationFilter(value === "all" ? "" : value);
        setCurrentPage(1);
  }
  // Function to handle price filter change
  const onChangePrice = (value) => {
        setPriceFilter(value === "all" ? "" : value);
        setCurrentPage(1);
  }
  // Function to handle category filter change
  const onChangeCategory  = (value) => {
        setCategoryFilter(value === "all" ? "" : value);
        setCurrentPage(1);
  }


  return (
    <div
      className="relative w-full grow flex flex-col gap-6 px-4 md:px-16 py-6"
      role="main"
      aria-label="Artists management"
    >
      {/* Floating Add Artist Button */}
      <button
        onClick={() => { router.push("/manager/onboarding"); }}
        className="fixed bottom-6 right-4 w-12 h-12 rounded-full flex flex-col justify-center items-center bg-brand hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2"
        aria-label="Add new artist"
        tabIndex={0}
        
      >
        <Plus className="w-8 h-8 text-secondary" aria-hidden="true" />
      </button>
      
      <div className="w-full flex flex-col justify-center items-center md:flex-row gap-4">
        {/* Search input and filters */}
        <Input
          placeholder="Search artists..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setCurrentPage(1);
          }}
          className="w-full md:w-1/3"
          aria-label="Search artists"
          autoFocus
        />
        {/* Dropdowns for filters */}
        <Dropdown
          options={["all", "Singer", "Band", "Dancer", "DJ", "Comedian", "Magician"]}
          onValueChange={onChangeCategory}
          placeholder="Filter by category"
          aria-label="Filter by category"
        />
        <Dropdown
          options={["all", ...new Set(allArtists.map(a => a.location))]}
          onValueChange={onChangeLocation}
          placeholder="Filter by location"
          aria-label="Filter by location"
        />
        <Dropdown
          options={["all", "₹10,000 - ₹20,000", "₹20,000 - ₹40,000", "₹40,000 - ₹60,000", "₹60,000 - ₹1,00,000"]}
          onValueChange={onChangePrice}
          placeholder="Filter by price range"
          aria-label="Filter by price range"
        />
      </div>

      {/* Artists grid */}
      <div
        className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-4"
        role="list"
        aria-label="Artists list"
      >
        {paginatedArtists.map((artist, idx) => (
          <ArtistCard
            key={artist.id}
            artist={artist}
            askforquot={false}
            tabIndex={0}
            aria-label={`Artist card for ${artist.name}`}
          />
        ))}
      </div>

      {/* Pagination controls */}
      {totalPages > 1 && (
        <Pagenation
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
          aria-label="Pagination"
        />
      )}
      {/* No artists found message */}
      {filteredArtists.length === 0 && (
        <h1 className="text-center text-text-primary" tabIndex={0} aria-live="polite">
          No artists found matching your criteria.
        </h1>
      )}
    </div>
  );
};

export default ArtistsPage;
