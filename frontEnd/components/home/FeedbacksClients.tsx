import React from "react";
import FeedbackCard from "@/components/home/FeedbackCard";

type Props = {};

const steps = [
  {
    firstName: "Sarah",
    lastName: "Johnson",
    description:
      "Amazing service! Found a great plumber within minutes. Very professional and efficient.",
    score: 2,
  },
  {
    firstName: "Mike",
    lastName: "Thompson",
    description:
      "The electrician I hired was knowledgeable and fixed my issues quickly. Great platform!",
    score: 3,
  },
  {
    firstName: "Emily",
    lastName: "Davis",
    description:
      "Excellent painters! They transformed my house completely. Highly recommended!",
    score: 4,
  },
  {
    firstName: "Emily",
    lastName: "Davis",
    description:
      "Excellent painters! They transformed my house completely. Highly recommended!",
    score: 5,
  },
];

export default function FeedbacksClients({}: Props) {
  return (
    <div className="p-12 bg-white container mx-auto" data-aos="zoom-out">
      <div className="py-2">
        <p className="font-bold text-3xl text-center">What Our Clients Say</p>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 py-8 justify-center items-center">
          {steps.map((step, index) => (
            <FeedbackCard
              key={index}
              firstName={step.firstName}
              lastName={step.lastName}
              description={step.description}
              score={step.score}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
