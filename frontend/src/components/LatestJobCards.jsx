import { Badge } from "./ui/badge";
import React from "react";

export const LatestJobCards = () => {
  return (
    <div className="p-5 rounded-md shadow-lg bg-white border border-gray-200 cursor-pointer transition-transform transform hover:scale-105">
      {/* Company Information */}
      <div>
        <h1 className="font-medium text-lg">Company Name</h1>
        <p className="text-sm text-gray-500">India</p>
      </div>

      {/* Job Title and Description */}
      <div className="mt-2">
        <h2 className="font-bold text-lg">Job Title</h2>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, porro.
        </p>
      </div>

      {/* Badges Section */}
      <div className="flex items-center gap-2 mt-4">
        <Badge className="text-blue-700 font-bold" variant="ghost">
          12 Positions
        </Badge>
        <Badge className="text-[#F83002] font-bold" variant="ghost">
          Part Time
        </Badge>
        <Badge className="text-[#7209b7] font-bold" variant="ghost">
          12 LPA
        </Badge>
      </div>
    </div>
  );
};

export default LatestJobCards;
