"use client";
import React, { useEffect, useState } from "react";
import logo from "@/public/logo-1.png";
import { NavIcon, NavText } from "../ui/navIcon";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "bootstrap/dist/css/bootstrap.css";
import "./header.css";

const Header = () => {
  const [activLink, setActiveLink] = useState<string>("home");
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [toggle, setToggle] = useState<boolean>(true);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const activNav = (value: string) => {
    setActiveLink(value);
    setToggle(false)
  };

  return (
    <nav
      className={` navbar navbar-expand-lg fixed-top ${
        (scrolled || toggle) ? "p-1 backdrop-blur-lg" : "p-4"
      } fs-5 d-flex`}
      id="navBar"
    >
      <div className="container">
        <a className="navbar-brand" href="#">
          <Image
            src={logo}
            alt="logo"
            height={30}
            className="d-inline-block align-text-top"
          />
        </a>
        <button
          className="lg:hidden ms-auto "
          onClick={() => setToggle(!toggle)}
          style={{ color: "white" }}
          type="button"
        >
          <MenuIcon />
        </button>
        <div
          className={`${toggle ? "visable block w-full " : " hidden lg:block w-full"}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 flex  justify-end gap-3 align-items-center">
            <NavText
              path="#"
              activLink={activLink}
              activNav={activNav}
              text={"Home"}
            />
            <NavText
              path="#skills"
              activLink={activLink}
              activNav={activNav}
              text={"skills"}
            />
            <NavText
              path="#projects"
              activLink={activLink}
              activNav={activNav}
              text={"projects"}
            />
            <ul
              id="social-links"
              className="d-flex gap-2 flex-wrap mb-2 mb-lg-0"
            >
              <NavIcon
                path={"https://www.linkedin.com/in/ahmed-abu-seta-67436a21b/"}
                icon={faLinkedin}
              />
              <NavIcon path={"https://x.com/amd_ab6"} icon={faXTwitter} />
              <NavIcon path={"https://github.com/Ahmedabuseta"} icon={faGithub} />
              <button
                id="connect-btn"
                className={`position-relative border border-light p-4 pt-3 pb-3 fw-bold ${
                  scrolled ? "fs-6" : "fs-5"
                } text-light`}
              >
                let&apos;s connect
              </button>
            </ul>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
