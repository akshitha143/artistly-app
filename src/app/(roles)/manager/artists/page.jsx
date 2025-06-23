"use client";
import { useState, useMemo } from "react";
import ArtistCard from "@/components/manager/ArtistCard";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import allArtists from "@/data/artists";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
const ITEMS_PER_PAGE = 10;

const ArtistsPage = () => {
   const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  
  const filteredArtists = useMemo(() => {
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
  }, [searchQuery, categoryFilter, locationFilter]);

  
  const totalPages = Math.ceil(filteredArtists.length / ITEMS_PER_PAGE);
  const paginatedArtists = filteredArtists.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="relative w-full grow flex flex-col gap-6 px-4 md:px-16 py-6">
        <div onClick={()=>{
            router.push("/manager/onboarding");
        }} className="fixed bottom-6 hover:cursor-pointer right-4 w-12 h-12 rounded-full flex flex-col justify-center items-center bg-brand">
            <Plus className="w-8 h-8 text-secondary"/>
        </div>
      {/* Filters */}
      <div className="w-full  flex flex-col justify-center items-center md:flex-row gap-4 ">
        <Input
          placeholder="Search artists..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setCurrentPage(1);
          }}
          className="w-full md:w-1/3"
        />

        <Select
          onValueChange={(value) => {
            setCategoryFilter(value === "all" ? "" : value);
            setCurrentPage(1);
          }}
        >
          <SelectTrigger className="w-full md:w-1/4">
            <SelectValue placeholder="Filter by category" />
          </SelectTrigger>
          <SelectContent>
            {
                ["all","Singer","Band","Dancer","DJ","Comedian","Magician"].map((item,id)=>{
                    return <SelectItem key={id} value={item}>{item}</SelectItem>; 
                })
            }
            
          </SelectContent>
        </Select>

        <Select
          onValueChange={(value) => {
            setLocationFilter(value === "all" ? "" : value);
            setCurrentPage(1);
          }}
        >
          <SelectTrigger className="w-full md:w-1/4">
            <SelectValue placeholder="Filter by location" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            {[...new Set(allArtists.map(a => a.location))].map(loc => (
              <SelectItem key={loc} value={loc}>{loc}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select
            onValueChange={(value) => {
                setPriceFilter(value === "all" ? "" : value);
                setCurrentPage(1);
            }}
        >
        <SelectTrigger className="w-full md:w-1/4">
            <SelectValue placeholder="Filter by price range" />
        </SelectTrigger>
        <SelectContent>
            {
                ["all","₹10,000 - ₹20,000","₹20,000 - ₹40,000","₹40,000 - ₹60,000","₹60,000 - ₹1,00,000"].map((item,id)=>{
                    return <SelectItem key={id} value={item}>{item}</SelectItem>;
                })
            }
        </SelectContent>
        </Select>

      </div>

      {/* Artists grid */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-4">
        {paginatedArtists.map(artist => (
          <ArtistCard  key={artist.id} artist={artist} askforquot={false} />
        ))}
      </div>

      {/* Pagination controls */}
      {totalPages > 1 && (
        <div className="w-full  flex flex-row  justify-end items-center gap-6 my-2">
          <Button
            variant="outline"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(prev => prev - 1)}
          >
            Previous
          </Button>
          <span className="text-sm text-gray-600">
            Page {currentPage} of {totalPages}
          </span>
          <Button
            variant="outline"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(prev => prev + 1)}
          >
            Next
          </Button>
        </div>
      )}

      {filteredArtists.length === 0 && (
        <p className="text-center text-gray-500">No artists found matching your criteria.</p>
      )}
    </div>
  );
};

export default ArtistsPage;
