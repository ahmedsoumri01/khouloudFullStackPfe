import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

type Props = {
  description: string;
  firstName: string;
  lastName: string;
  score: number;
};

export default function FeedbackCard({
  description,
  firstName,
  lastName,
  score,
}: Props) {
  return (
    <div className="bg-white border border-gray max-w-[300px] p-5 rounded-lg shadow-lg h-full">
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarImage
            width={100}
            height={100}
            alt="avatar"
            src="https://github.com/shadcn.png"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-bold">
            {firstName} {lastName}
          </p>
          <div className="flex">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                className={`w-5 h-5 ${index < score ? "fill-yellow-400" : "stroke-gray-400"}`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="mt-3 w-full">
        <p className="text-lg italic">"{description}"</p>
      </div>
    </div>
  );
}
