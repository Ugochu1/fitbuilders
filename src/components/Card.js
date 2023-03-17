import classes from "./Card.module.css";

function Card({ info, myref, inView }) {
  return (
    <div
      className={classes.card + " py-10 md:py-20 md:px-10 flex justify-center"}
    >
      <div className="w-full md:w-5/6">
        <h1
          className={
            classes.header + " text-xl md:text-2xl flex justify-center"
          }
        >
          {info.header}
        </h1>
        {info.direction === "left" ? (
          <div className="mt-5 md:mt-10 md:flex">
            {info.icon && (
              <div className="w-full md:w-1/2 flex justify-center md:justify-end items-center">
                <img
                  src={info.icon}
                  alt="dl"
                  className={
                    classes.img +
                    ` ${inView ? classes.opacity1 : classes.opacity0}`
                  }
                />
              </div>
            )}
            <div className={"w-full md:w-1/2 p-2 mt-5 px-5 " + classes.writeup}>
              <div
                ref={myref}
                className={inView ? classes.slideUpON : classes.slideUpOFF}
              >
                {
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                }
              </div>
              <div className="flex justify-center items-center">
                <button
                  className={
                    "mt-5 " +
                    classes.readmorebtn +
                    ` ${inView ? classes.slideUpON : classes.slideUpOFF}`
                  }
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-5 md:mt-10 md:flex">
            {info.icon && (
              <div className="md:hidden w-full md:w-1/2 flex justify-center md:justify-start items-center">
                <img
                  src={info.icon}
                  alt="dlfjd"
                  className={
                    classes.img +
                    ` ${inView ? classes.opacity1 : classes.opacity0}`
                  }
                />
              </div>
            )}
            <div className={"w-full md:w-1/2 p-2 mt-5 px-5 " + classes.writeup}>
              <div
                ref={myref}
                className={inView ? classes.slideUpON : classes.slideUpOFF}
              >
                {
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                }
              </div>
              <div className="flex justify-center items-center">
                <button
                  className={
                    "mt-5 " +
                    classes.readmorebtn +
                    ` ${inView ? classes.slideUpON : classes.slideUpOFF}`
                  }
                >
                  Read More
                </button>
              </div>
            </div>
            {info.icon && (
              <div className="w-full md:w-1/2 hidden md:flex justify-center md:justify-start items-center">
                <img
                  src={info.icon}
                  alt="dlfjd"
                  className={
                    classes.img +
                    ` ${inView ? classes.opacity1 : classes.opacity0}`
                  }
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
