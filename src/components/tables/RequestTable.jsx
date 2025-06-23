"use client";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
export const RequestTable = ({filteredRequests,handleAction,headerList,TableRow})=>{
    
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left">
              <thead className="bg-gray-100 text-gray-700 uppercase">
                <tr>
                  {
                    
                    headerList?.map((item,id)=>(
                        <th key={id} className="px-4 py-2">{item}</th>
                    ))
                  }
                </tr>
              </thead>
              <tbody>
                {filteredRequests.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="px-4 py-4 text-center text-gray-500">
                      No requests found.
                    </td>
                  </tr>
                ) : (
                  filteredRequests.map((req) => (
                    
                    <TableRow key={req.id} req={req} handleAction={handleAction}/>
                  ))
                )}
              </tbody>
            </table>
          </div>
    );
}

export const  TableRowManager = ({ req, handleAction })=>{
    return (
        <tr  className="border-b">
            <td className="px-4 py-2 text-sm md:text-base">{req.artistName}</td>
            <td className="px-4 py-2 text-sm md:text-base">{req.eventDate}</td>
            <td className="px-4 py-2 text-sm md:text-base">{req.planner}</td>
            <td className="px-4 py-2 text-sm md:text-base">
                <Badge variant={
                  req.status === "Approved" 
                  ? "default" 
                  : req.status === "Rejected" 
                  ? "destructive" 
                  : "secondary"
                }>
                  {req.status}
                </Badge>
              </td>
              <td className="px-4 py-2 flex flex-col md:flex-row justify-start text-right gap-2">
                {req.status === "Pending" && (
                   <>
                    <Button size="sm" onClick={() => handleAction(req.id, "Approved")}>
                      Approve
                    </Button>
                    <Button size="sm" variant="destructive" onClick={() => handleAction(req.id, "Rejected")}>
                      Reject
                    </Button>
                  </>
                )}
              </td>
            </tr>
    )
}
export const  TableRowPlanner = ({ req, handleAction })=>{
    return (
        <tr  className="border-b">
            <td className="px-4 py-2 text-sm md:text-base">{req.artistName}</td>
            <td className="px-4 py-2 text-sm md:text-base">{req.eventDate}</td>
            <td className="px-4 py-2 text-sm md:text-base">{req.manager}</td>
            <td className="px-4 py-2 text-sm md:text-base">
                <Badge variant={
                  req.status === "Approved" 
                  ? "default" 
                  : req.status === "Rejected" 
                  ? "destructive" 
                  : "secondary"
                }>
                  {req.status}
                </Badge>
              </td>
              
            </tr>
    )
}