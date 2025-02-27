import React from "react";
type Props = {
  icon: React.ReactElement;
  title: string;
  description: string;
};
export default function PopularServiceCard({
  icon,
  title,
  description,
}: Props) {
  return (
    <div className="p-3 bg-white rounded-lg ease-in-out duration-300   hover:shadow-lg hover:shadow-gray-300/40">
      <div>
        <span className="text-[#2563eb]">{icon}</span>
      </div>
      <div>
        <p className="font-bold text-xl py-1">{title}</p>
      </div>
      <div>
        <p className="text-[#58616e] text-lg font-semibold">{description}</p>
      </div>
    </div>
  );
}
