import React from 'react';

export const FilterCard = () => {

  const filterData = [
    {
        filterType: "Location",
        array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai", "Chennai", "Kolkata", "Remote"]
    },
    {
        filterType: "Industry",
        array: ["Frontend Developer", "Backend Developer", "FullStack Developer", "Data Science", "Machine Learning", "Product Management"]
    },
    {
        filterType: "Salary",
        array: ["0-40k", "42-1lakh", "1lakh to 5lakh", "5lakh to 10lakh", "10lakh+"]
    },
    {
        filterType: "Job Type",
        array: ["Full-time", "Part-time", "Contract", "Internship", "Freelance"]
    },
    {
        filterType: "Experience Level",
        array: ["Entry Level", "Mid Level", "Senior Level", "Manager", "Executive"]
    }
  ];

  return (
    <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">Filter Options</h1>
      <hr className="border-gray-300 mb-6" />
      
      {filterData.map((data, index) => (
        <div key={index} className="mb-6">
          <h2 className="font-bold text-lg text-gray-700 mb-3">{data.filterType}</h2>
          <div className="space-y-2">
            {data.array.map((item, subIndex) => (
              <div key={subIndex} className="flex items-center space-x-3"> 
                <input 
                  type="radio" 
                  value={item} 
                  id={`${data.filterType}-${item}`} 
                  name={data.filterType} 
                  className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500 rounded-full"
                />
                <label 
                  htmlFor={`${data.filterType}-${item}`} 
                  className="text-gray-600 cursor-pointer hover:text-indigo-700"
                >
                  {item}
                </label> 
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
