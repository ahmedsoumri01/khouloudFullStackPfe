import React from "react";
import { Button } from "../ui/button";
type Props = {};

export default function ReadySection({}: Props) {
  return (
    <div className="bg-[#2563eb] text-center p-8" data-aos="fade-right">
      <p className="font-bold text-5xl py-8 pb-4 text-white">Ready to Get Started?</p>
      <p className="text-[#dbeafe] text-xl py-8">Find the perfect professional for your home service needs today.</p>
      <div className="flex items-center justify-center">
        <Button
        className="bg-white text-[#2563eb] text-xl rounded-full w-[300px] h-[60px] p-4 cursor-pointer ease-in-out duration-500 border-2 hover:text-white hover:bg-transparent hover:border-white"
        >Book a Service Now</Button>
      </div>
    </div>
  );
}
