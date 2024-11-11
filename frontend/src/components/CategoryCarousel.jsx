import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Button } from "./ui/button";

export const CategoryCarousel = () => {
  const Category = [
    "Android Developer",
    "iOS Developer",
    "Full Stack Developer",
    "Front-End Developer",
    "Back-End Developer",
    "DevOps Engineer",
    "Data Scientist",
    "Machine Learning Engineer",
    "AI Engineer",
    "Cloud Architect",
    "Cybersecurity Specialist",
    "Blockchain Developer",
    "Game Developer",
    "Embedded Systems Developer",
    "Mobile App Developer",
    "Software Tester",
    "UI/UX Designer",
    "Database Administrator",
    "Business Analyst",
    "System Architect",
    "Network Engineer",
    "Project Manager",
    "QA Engineer",
    "Scrum Master",
    "IT Support Specialist",
  ];

  return (
    <div>
      <Carousel className="w-full max-w-xl mx-auto my-20">
        <CarouselContent>
          {Category.map((cat, index) => (
            <CarouselItem className="md:basis-1/2 lg-basis-1/3">
              <Button variant="outline" className="rounded-full">
                {cat}
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
export default CategoryCarousel;
