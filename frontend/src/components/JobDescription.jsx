import React from "react";
import { Badge, Calendar, Briefcase, DollarSign, Users } from "lucide-react"; // Importing icons
import { Button } from "./ui/button";

export const JobDescription = () => {
  const isApplied = false; // Change to true if you want to simulate "Already Applied"

  return (
    <div className="max-w-4xl mx-auto my-10 p-8 bg-white border border-gray-200 rounded-xl shadow-lg">
      {/* Job Title and Application Button */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex-1">
          <h1 className="font-bold text-3xl text-gray-900 mb-2">Software Engineer</h1>
          <div className="flex flex-wrap gap-3 mt-2">
          <div className="flex flex-wrap gap-3 mt-2">
  <div className="bg-blue-100 text-blue-700 font-semibold text-sm px-4 py-2 rounded-full">
    12 Positions
  </div>
  <div className="bg-red-100 text-red-600 font-semibold text-sm px-4 py-2 rounded-full">
    Part Time
  </div>
  <div className="bg-purple-100 text-purple-700 font-semibold text-sm px-4 py-2 rounded-full">
    12 LPA
  </div>
</div>

          </div>
        </div>
        <div className="mt-4 md:mt-0 md:self-end">
          <Button
            disabled={isApplied}
            className={`px-8 py-3 text-lg font-semibold rounded-lg shadow-md transition-colors duration-300 ${
              isApplied
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700"
            }`}
          >
            {isApplied ? "Already Applied" : "Apply Now"}
          </Button>
        </div>
      </div>

      {/* Job Details Section */}
      <div className="mt-8">
        <h2 className="font-semibold text-2xl text-gray-700 mb-4">Job Description</h2>
        <p className="text-gray-600 leading-relaxed">
          We are looking for a Software Engineer to join our dynamic team. You will be responsible for designing,
          implementing, and maintaining software solutions that improve user experience and functionality.
        </p>

        {/* Detailed Job Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          <div className="flex items-center gap-3">
            <Briefcase className="text-indigo-600" size={24} />
            <div>
              <h3 className="text-gray-700 font-semibold">Role</h3>
              <p className="text-gray-600">Front-end Developer</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Users className="text-indigo-600" size={24} />
            <div>
              <h3 className="text-gray-700 font-semibold">Experience</h3>
              <p className="text-gray-600">2-4 Years</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <DollarSign className="text-indigo-600" size={24} />
            <div>
              <h3 className="text-gray-700 font-semibold">Salary</h3>
              <p className="text-gray-600">12 LPA</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Users className="text-indigo-600" size={24} />
            <div>
              <h3 className="text-gray-700 font-semibold">Total Applicants</h3>
              <p className="text-gray-600">150</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Calendar className="text-indigo-600" size={24} />
            <div>
              <h3 className="text-gray-700 font-semibold">Posted Date</h3>
              <p className="text-gray-600">14/11/2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
