import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";

type Props = {};

export default function Header({}: Props) {
  return (
    <div className="bg-white shadow-lg min-h-16 flex items-center">
       <div className="px-4 flex items-center justify-between  container mx-auto">
   
        <div className="font-bold text-2xl text-blue-600">WorkerConnect</div>
        <div className="hidden lg:flex lg:justify-between lg:items-center">
          <Link
            href={"/"}
            className="p-2 font-semibold hover:text-blue-600 ease-in-out duration-300"
          >
            Find Workers
          </Link>
          <Link
            href={"/"}
            className="p-2 font-semibold hover:text-blue-600 ease-in-out duration-300"
          >
            {" "}
            Post a Job
          </Link>
          <Link
            href={"/"}
            className="p-2 font-semibold hover:text-blue-600 ease-in-out duration-300"
          >
            How it Works
          </Link>
          <Link
            href={"/"}
            className="p-2 font-semibold hover:text-blue-600 ease-in-out duration-300"
          >
            contact us
          </Link>
          <Link href={"/"} className="px-2">
            <Button variant={"signInButton"}> sign in</Button>
          </Link>
          <Link href={"/"} className="px-2">
            <Button variant={"signUpButton"}>sign up</Button>
          </Link>
        </div>
        <div className="lg:hidden">
          <Menu size={35} className="cursor-pointer" />
        </div>
     
    </div>
    </div>
   
  );
}
