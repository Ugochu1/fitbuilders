import { Link } from "react-router-dom";
import classes from "./SlideOptions.module.css";
import { MdOutlineCancel } from "react-icons/md";
import { AiFillHome, AiFillInfoCircle, AiFillFolder } from "react-icons/ai";

function SlideOptions({ options, active, slider, setOptionsActive }) {
  return (
    <div className={classes.slider + " bg-gray-700"} ref={slider}>
      <div className={classes.header}>
        <div className={classes.cancelbtn} onClick={() => setOptionsActive(false)}>
          <MdOutlineCancel size={20} />
        </div>
      </div>
      <div className={classes.linkbody}>
        {options.map((el, idx) => {
          return (
            <Link
              key={idx}
              to={el.path}
              className={
                classes.links + ` ${active === el.label && classes.activeLink}`
              }
            >
              <div
                className={
                  "w-2/3 flex justify-end px-2 items-center text-gray-400" +
                  ` ${active === el.label && classes.activeLink}`
                }
              >
                {el.label === "Home" ? (
                  <AiFillHome />
                ) : el.label === "Projects" ? (
                  <AiFillFolder />
                ) : (
                  <AiFillInfoCircle />
                )}
              </div>
              <div className={"w-1/3 flex items-center"}>{el.label}</div>
            </Link>
          );
        })}
        <button className={classes.contactusbtn}>Contact Us</button>
      </div>
    </div>
  );
}

export default SlideOptions;
