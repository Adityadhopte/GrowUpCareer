import React from "react";
import Navbar from "./shared/Navbar";
import { FilterCard } from "./FilterCard";
import Job from './Job';
import Footer from "./shared/Footer";


export const Jobs = () => {
  const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8,9,10, 11,12,13,24,15,16,100];
  return (
    <div>
      <Navbar />

      <div className="max-w-7xl mx-auto mt-5">
        <div className="flex  gap-5">
          <div className="w-20%">
            <FilterCard />
          </div>
          {jobsArray.lenth <= 0 ? (
            <span>Job not found</span>
          ) : (
            <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
              <div className="grid grid-cols-3 gap-4">
                {jobsArray.map((items, index) => (
                  <div>
                    <Job />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

     <Footer/>
    </div>
  );
};
