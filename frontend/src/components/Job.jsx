import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

export const Job = () => {
  const navigate = useNavigate();
  const jobID = "sbcsdcbsjc"
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100 max-w-md mx-auto">
      {/* Header section with date and bookmark button */}
      <div className="flex items-center justify-between mb-4">
        <p className="text-gray-600 text-sm">2 Days Ago</p>
        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark />
        </Button>
      </div>

      {/* Company and Job Title Section */}
      <div className="flex items-start gap-4">
        <Avatar>
          <AvatarImage src="/icons/linkedin.png" alt="LinkedIn Icon" />
        </Avatar>

        <div className="flex flex-col">
          <h1 className="font-semibold text-lg">Company Name</h1>
          <p className="text-gray-500">SoulSoft Innovations</p>
        </div>
      </div>

      {/* Job Title and Description Section */}
      <div className="mt-4">
        <h2 className="font-semibold text-md">Job Title</h2>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
          itaque.
        </p>
      </div>

      {/* Badges Section for Job Details */}
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

      {/* Buttons Section with Color Animation and Padding */}
      <div className="mt-4 grid grid-cols-3 gap-2">
        <Button onClick={()=> navigate(`/description/${jobID}`)}
          className="py-2 px-4 transition duration-300 ease-in-out hover:bg-blue-600 hover:text-white"
          variant="primary"
        >
          Apply Now
        </Button>
        <Button
          className="py-2 px-4 transition duration-300 ease-in-out hover:bg-gray-200 hover:text-blue-700"
          variant="outline"
        >
          Save for Later
        </Button>
        <Button
          className="py-2 px-4 transition duration-300 ease-in-out hover:bg-gray-200 hover:text-blue-700"
          variant="outline"
        >
          Details
        </Button>
      </div>
    </div>
  );
};

export default Job;
