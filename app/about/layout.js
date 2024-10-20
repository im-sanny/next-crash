import Link from "next/link";
import React from "react";

export const metadata = {
  title: "About Us",
  description: "This is a about us blog page",
};

const AboutLayout = ({ children }) => {
  return (
    <div>
      <nav>
        <ul className="flex gap-5 my-6">
          <li>
            <Link href={"/about/mission"}>Mission</Link>
          </li>
          <li>
            <Link href={"/about/vision"}>Vision</Link>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
};

export default AboutLayout;
