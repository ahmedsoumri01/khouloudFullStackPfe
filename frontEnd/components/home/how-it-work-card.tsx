import React from "react";
type Props = {
  icon: React.ReactElement;
  title: string;
  description: string;
};

export default function HowItWorkCard({ icon, title, description }: Props) {
  return (
    <div className="text-center"  data-aos="fade-right">
      <div className=" flex items-center justify-center">
        <div className="bg-[#dbeafe] rounded-full">
          <p className="text-[#2563eb] p-4 rounded-full text-4xl">{icon}</p>
        </div>
      </div>
      <p className="font-bold text-xl py-3">{title}</p>
      <p className="text-[#58616e] text-lg font-semibold">{description}</p>
    </div>
  );
}
