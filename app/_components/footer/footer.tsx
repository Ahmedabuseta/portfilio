"use client";
import "./footer.css";
import React from "react";
import logo from "@/public/logo-1.png";
import {
  faFacebookF,
  faGithub,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { NavIcon } from "../ui/navIcon";
import LeaveYourEmail from "../ui/footerEmail";
import Image from "next/image";

function Footer() {
  const date = new Date();
  return (
    <div id="footer bg-black ">
      <div className="container-md d-flex flex-column  ">
        <LeaveYourEmail />
        <div className=" d-flex flex-row justify-content-between align-items-center gap-4">
          <Image src={logo} alt="logo" />
          <div className="social d-flex flex-column flex-wrap ">
            <ul id="social-links" className="  d-flex gap-2 flex-wrap  ">
              <NavIcon
                path={"https://www.linkedin.com/in/ahmed-abu-seta-67436a21b/"}
                icon={faLinkedinIn}
              />
              <NavIcon path={"https://x.com/amd_ab6"} icon={faXTwitter} />
              <NavIcon
                path={"https://github.com/Ahmedabuseta"}
                icon={faGithub}
              />
            </ul>
            <p className="text-capitalize">
              {date.getFullYear()} &copy; all rights reserved by ahmed ahmed
              abuseta
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
