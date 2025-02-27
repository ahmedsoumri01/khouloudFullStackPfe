import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Image from "next/image";
import WorkrsImg from "@/public/workrs.png";
type Props = {};

export default function HeroSection({}: Props) {
  return (
    <div className="bg-[#eff4ff] py-4 sm:p-4">
      <div className="px-4 sm:flex justify-around items-center gap-4">
        <div>
          <div className="my-12" data-aos="fade-right">
            <p className="text-4xl sm:text-center font-bold sm:text-5xl lg:text-start">
              Find Skilled Workers for Your Home Services
            </p>
          </div>
          <div className="my-4"  data-aos="fade-left">
            <p className="text-lg sm:text-center text-[#4b5563] font-semibold sm:text-xl lg:text-start">
              Connect with verified professionals for plumbing, electrical work,
              painting, and more.
            </p>
          </div>
          <div data-aos="fade-right" className="shadow-lg p-2 py-4 bg-white rounded-lg">
            <div className="flex items-center">
              {" "}
              <Input type="text" placeholder="search for a workers ...." className="min-h-12 mx-2" />
              <Button variant={"searchBtnStyleOne"}>Search</Button>
            </div>
          </div>
          <div  data-aos="fade-up" className="sm:flex items-center py-8 justify-around">
            <Button
              variant={"findWorkerBtn"}
              className="w-full my-2 duration-300 ease-in-out"
            >
              Find a Worker
            </Button>
            <Button variant={"outlinedBtn"} className="w-full my-2">Become a Professional</Button>
          </div>
        </div>
        <div className="hidden lg:block">
          <Image
            alt="workers"
            src={WorkrsImg}
            width={600}
            height={600}
            className="rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
