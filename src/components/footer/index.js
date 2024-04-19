import React from "react";
import "./index.css";

const Footer = () => {
  return (
    <div className="footer">
      <p>@{new Date().getFullYear()} Airbnb clone! No right reserved</p>
      <p>Privacy . Terms . Sitemap . Company Details</p>
    </div>
  );
};

export default Footer;
