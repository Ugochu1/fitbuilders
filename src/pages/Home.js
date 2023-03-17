import classes from "./Home.module.css";
// import Bedroom from "../icons/bedroom-1940169_1920.jpg";
import Card from "../components/Card";
import Construction from "../icons/undraw_under_construction_-46-pa.svg";
import Building from "../icons/undraw_building_re_xfcm.svg";
import Project from "../icons/undraw_growth_analytics_re_pyxf.svg";
import Rwanda from "../icons/rwanda.jpg";
import Model from "../icons/undraw_scrum_board_re_wk7v.svg";
import ContactUs from "../components/ContactUs";
import { useInView } from "react-intersection-observer";

function Home() {
  const [reffc, inViewfc] = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const [refsc, inViewsc] = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const [reftc, inViewtc] = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const [reffoc, inViewfoc] = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const [reffic, inViewfic] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <div>
      <div className="relative">
        <div className={classes.landing}></div>
        <div className={classes.text + " px-5 md:px-10"}>
          <div className="w-full md:w-1/2">
            <h1
              className={
                classes.h1 +
                " text-4xl md:text-5xl uppercase"
              }
            >
              Welcome To FitBuilders Rwanda
            </h1>
            <p className={classes.article}>
              {"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.".substring(
                0,
                155
              ) + "..."}
            </p>
            <button className={classes.readmorebtn}>Read More</button>
          </div>
        </div>
      </div>
      <Card
        info={{
          icon: Model,
          header: "Blueprint",
          writeup: "",
          direction: "left",
        }}
        myref={reffc}
        inView={inViewfc}
      />
      <Card
        info={{
          icon: Construction,
          header: "Construction",
          writeup: "",
          direction: "left",
        }}
        myref={refsc}
        inView={inViewsc}
      />
      <Card
        info={{
          icon: Building,
          header: "Model",
          writeup: "",
          direction: "right",
        }}
        myref={reftc}
        inView={inViewtc}
      />
      <Card
        info={{
          icon: Project,
          header: "Project Updates",
          writeup: "",
          direction: "right",
        }}
        myref={reffoc}
        inView={inViewfoc}
      />
      <Card
        info={{
          icon: Rwanda,
          header: "About Rwanda",
          writeup: "",
          direction: "left",
        }}
        myref={reffic}
        inView={inViewfic}
      />
      <ContactUs />
    </div>
  );
}

export default Home;
