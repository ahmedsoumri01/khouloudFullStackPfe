import React from "react";
import { contactData } from "@/constants/contactUsData";
import ContactPage from "@/components/contact-us/contact-us";
type Props = {};

export default function page({}: Props) {
  return (
    <div>
      <ContactPage {...contactData} />{" "}
    </div>
  );
}
