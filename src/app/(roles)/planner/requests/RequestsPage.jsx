"use client";
import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { RequestTable,TableRowPlanner } from "@/components/tables/RequestTable";
import { useUser } from "@/context/UserContext";

// Mock data
const mockRequests = [
  { id: 1, artistName: "Aarav Kapoor", eventDate: "2025-07-15", manager: "EventX", status: "Pending" },
  { id: 2, artistName: "Soul Beats Band", eventDate: "2025-07-20", manager: "PartyPro", status: "Pending" },
  { id: 3, artistName: "DJ Rockstar", eventDate: "2025-07-25", manager: "ClubLife", status: "Approved" },
  { id: 4, artistName: "Nisha Sharma", eventDate: "2025-07-30", manager: "EventHub", status: "Rejected" }
];

export default function RequestsPage() {
  // const [requests, setRequests] = useState(mockRequests);
  const {requests,setRequests} = useUser();
  const [statusFilter, setStatusFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const handleAction = (id, action) => {
    setRequests(prev => prev.map(req => req.id === id ? { ...req, status: action } : req));
  };

  const filteredRequests = useMemo(() => {
    return requests
      .filter(req => 
        statusFilter === "all" ? true : req.status === statusFilter
      )
      .filter(req => 
        req.artistName.toLowerCase().includes(searchQuery.toLowerCase())
      );
  }, [requests, statusFilter, searchQuery]);

  return (
    <div className="w-full grow  bg-gray-50 flex justify-center gap-8 px-4 md:px-12 lg:px-16 py-6">
      <Card className="w-full ">
        <CardHeader className="px-4 md:px-6">
          <CardTitle className="text-2xl">Booking Requests</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 px-4 md:px-6">
          {/* Filters */}
          <div className="w-full flex flex-col md:flex-row items-center gap-4">
            <Input 
              placeholder="Search by artist name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full md:w-1/2"
            />
            <Select
              onValueChange={(value) => setStatusFilter(value)}
              defaultValue="all"
            >
              <SelectTrigger className="w-full md:w-1/4">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="Pending">Pending</SelectItem>
                <SelectItem value="Approved">Approved</SelectItem>
                <SelectItem value="Rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
          </div>

            <RequestTable TableRow={TableRowPlanner} headerList={["Artist","Event Date","Manager","Status"]} filteredRequests={filteredRequests} handleAction={handleAction}/>
          
        </CardContent>
      </Card>
    </div>
  );
}
