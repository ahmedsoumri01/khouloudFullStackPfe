import React from "react";
import PopularServiceCard from "./popilar-service-card";
import { UserPlus, CircleCheck,PaintRoller  } from "lucide-react";
import { Zap } from 'lucide-react';
type Props = {};

const steps = [
  {
    icon: <UserPlus size={40} />,
    title: "Plumbing",
    description: "From repairs to installations",
  },
  {
    icon: <Zap size={40} />,
    title: "Electrical",
    description: "Professional electrical services",
  },
  {
    icon: <PaintRoller size={40} />,
    title: "Painting",
    description: "Interior and exterior painting",
  },
  {
    icon: <CircleCheck size={40} />,
    title: "Handyman",
    description: "General maintenance & repairs",
  },
];
export default function PopularServices({}: Props) {
  return (
    <div className="bg-[#f9fafb] ">
    <div className="p-8 container mx-auto">
      <div className="py-2">
        <p className="font-bold text-3xl text-center">Popular Services</p>
      </div>
      <div className="grid grid-cols-1 gap-12 py-8 sm:grid-cols-2" data-aos="zoom-in">
        {steps.map((step, index) => (
          <PopularServiceCard
            key={index}
            icon={step.icon}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>
    </div>
    </div>
  );
}
