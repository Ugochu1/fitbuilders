import classes from "./Logo.module.css";

function Logo() {
  return (
    <div className={classes.logo}>
      <p className={classes.fit}>FIT</p>
      <p className={classes.builders}>BUILDERS</p>
    </div>
  );
}

export default Logo;
