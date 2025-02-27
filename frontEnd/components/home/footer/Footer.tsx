import React from "react";
import FooterList from "./FooterList";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import CopyRight from "@/components/home/footer/CopyRight";
const footerData = [
  {
    title: "Our Website",
    type: "websitedesc",
    description:
      "We provide the best platform to connect service providers with customers. Trusted by thousands!",
  },
  {
    title: "Company",
    type: "simple",
    list: ["About Us", "Careers", "Press", "Blog"],
  },
  {
    title: "Support",
    type: "simple",
    list: ["Help Center", "Safety Center", "Community Guidelines"],
  },

  {
    title: "Follow Us",
    type: "socialmedia",
    icons: [
      { name: "Facebook", url: "#", icon: <Facebook className="w-6 h-6" /> },
      { name: "Twitter", url: "#", icon: <Twitter className="w-6 h-6" /> },
      { name: "Instagram", url: "#", icon: <Instagram className="w-6 h-6" /> },
      { name: "LinkedIn", url: "#", icon: <Linkedin className="w-6 h-6" /> },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-8">
      <div className="container mx-auto p-2" data-aos="fade-up">
        <FooterList items={footerData} />
      </div>
      <CopyRight />
    </footer>
  );
}
