import React from "react";

export type FooterItem = {
  title: string;
  type: "simple" | "websitedesc" | "socialmedia";
  list?: string[];
  description?: string;
  icons?: { name: string; url: string; icon: React.ReactNode }[];
};

export interface FooterListProps {
  items: FooterItem[];
}

export default function FooterList({ items }: FooterListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {items.map((item, index) => (
        <div key={index}>
          <h3 className="font-bold text-lg mb-3">{item.title}</h3>
          {item.type === "simple" && (
            <ul className="space-y-2">
              {item.list?.map((listItem, i) => (
                <li
                  key={i}
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  {listItem}
                </li>
              ))}
            </ul>
          )}
          {item.type === "websitedesc" && (
            <p className="text-gray-400">{item.description}</p>
          )}
          {item.type === "socialmedia" && (
            <div className="flex space-x-4 mt-2">
              {item.icons?.map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  className="text-gray-400 hover:text-white"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}