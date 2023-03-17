import Logo from "./Logo";
import classes from "./Navbar.module.css";
import { Link, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import SlideOptions from "./SlideOptions";

function Navbar() {
  const location = useLocation();

  const [links] = useState([
    {
      path: "/",
      label: "Home",
    },
    {
      path: "/projects",
      label: "Projects",
    },
    { path: "/about-us", label: "About Us" },
  ]);
  const [active, setActive] = useState("Home");
  const [optionsActive, setOptionsActive] = useState(false);

  const slider = useRef();

  useEffect(() => {
    if (optionsActive === true) {
      slider.current.style.left = "30%";
      slider.current.style.right = "0";
    } else {
      slider.current.style.left = "120%";
      slider.current.style.right = "-120%";
    }
  }, [optionsActive]);

  useEffect(() => {
    // if location changes, get new path
    const path = window.location.pathname
    if (path === "/") {
      setActive("Home")
    } else if (path === "/projects") {
      setActive("Projects")
    } else if (path === "/about-us") {
      setActive("About Us")
    }
  }, [location])

  return (
    <div className={classes.navbar + " py-3 md:px-10 px-5 md:py-2 bg-white"}>
      <div className={classes.logo + " w-2/3 md:w-1/2"}>
        <Logo />
      </div>

      <div className="hidden md:flex md:w-1/2 justify-between items-center">
        <div className="">
          {links.map((el, idx) => {
            return (
              <Link
                to={el.path}
                className={
                  classes.link + ` ${active === el.label && classes.activeLink}`
                }
                onClick={() => setActive(el.label)}
                key={idx}
              >
                {el.label}
              </Link>
            );
          })}
        </div>
        <div className="">
          <button className={classes.contactusbtn}>Contact Us</button>
        </div>
      </div>
      <div
        className={" md:hidden block"}
        onClick={() => setOptionsActive(true)}
      >
        <div className={classes.line}></div>
        <div className={classes.line}></div>
        <div className={classes.line}></div>
      </div>
      <SlideOptions
        options={links}
        active={active}
        slider={slider}
        setOptionsActive={setOptionsActive}
      />
    </div>
  );
}

export default Navbar;
