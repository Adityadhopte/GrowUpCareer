import React, { useState } from "react";
import Navbar from "./shared/Navbar";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import Footer from "./shared/Footer";
import { Button } from "./ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Label } from "@radix-ui/react-label";
import { AppliedJobTable } from "./AppliedJobTable";
import { UpdateProfileDialog } from "./UpdateProfileDialog";

export const Profile = () => {
  const skills = ["Android", "Flutter", "React Native", "MERN Stack"];
  const [open, setOpen]= useState(false)
  const isResume = true;
  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage
                src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg"
                alt="profile"
              />
            </Avatar>
            <div>
              <h1 className="font-medium text-xl">Full Name</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Recusandae quas consequuntur perspiciatis doloremque neque. Nam
                vero deleniti minus reiciendis iste, commodi doloribus? Velit,
                dolorum quod.
              </p>
            </div>
          </div>
          <Button onClick={() => setOpen(true)} className="text-right" variant="outline">
            <Pen />
          </Button>
        </div>
        <div className="my-5">
          <div className="flex items-center gap-3 my-2">
            <Mail />
            <span>lucky12@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 my-2">
            <Contact />
            <span>9888111980</span>
          </div>
        </div>
        <div className="my-5">
          <h1 className="text-lg font-semibold">Skills</h1>
          <div className="flex flex-wrap gap-3 my-2">
            {skills.length !== 0 ? (
              skills.map((item, index) => (
                <span
                  key={index}
                  className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  {item}
                </span>
              ))
            ) : (
              <span>NA</span>
            )}
          </div>
        </div>
        <div className="grid w-fll max-w-sm items-center gap-1.5">
          <Label className="text-md font-bold">Resume </Label>
          {isResume ? (
            <a
              target="blank"
              href="https://www.linkedin.com/in/aditya-dhopte-aa5338215/"
              className="text-blue-500 w-full hover:underline cursor-pointer"
            >
              Aditya Dhopte Software Developer
            </a>
          ) : (
            <span>NA</span>
          )}
        </div>
      </div>
      <div className="max-w-4xl mx-auto bg-white rounded-2xl">
        <h1 className='font-bold text-lg my-5'>Applied Jobs</h1>
        {/* Applied Jobs Table */}
        <AppliedJobTable />
      </div>
      <UpdateProfileDialog open={open} setOpen={setOpen}/>
      <Footer />
    </div>
  );
};
