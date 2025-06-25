"use client";
import { Button } from "@/components/ui/button";

const Pagenation=({ currentPage, totalPages, setCurrentPage }) => {
    return (
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
    );
}

export default Pagenation;