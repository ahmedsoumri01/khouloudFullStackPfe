import React from "react";
import HowItWorkCard from "./how-it-work-card";
import { UserPlus, Search , CircleCheck  } from "lucide-react";

type Props = {};

const steps = [
  {
    icon: <UserPlus size={40} />,  
    title: "Sign Up",
    description: "Create your account in minutes",
  },
  {
    icon: <Search  size={40} />,  
    title: "Find a Worker",
    description: "Browse verified professionals",
  },
  {
    icon: <CircleCheck  size={40} />, 
    title: "Get the Job Done",
    description: "Complete your project successfully",
  },
];

export default function HowItWorks({}: Props) {
  return (
    <div className="p-12 container mx-auto">
      <div className="py-2">
        <p className="font-bold text-3xl text-center">How It Works</p>
      </div>
      <div className="grid grid-cols-1 gap-4 py-8 sm:grid-cols-3">
        {steps.map((step, index) => (
          <HowItWorkCard
            key={index}
            icon={step.icon}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>
    </div>
  );
}