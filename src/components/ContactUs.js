import classes from "./ContactUs.module.css";
import { AiOutlineWhatsApp, AiOutlineMail, AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { MdLocationOn, MdCall } from "react-icons/md";

function ContactUs() {
  return (
    <div className={classes.cover + " px-5 py-10 md:p-20"}>
      <h1 className={classes.header + " md:text-2xl text-xl"}>Contact Us</h1>
      <p className={classes.send}>Send us a message</p>
      <div className="md:flex mt-5 md:mt-7">
        <div className={"w-full md:w-2/3 md:flex"}>
          <div className="w-full md:w-1/2 md:pr-2">
            <div className="mb-3 md:mb-5">
              <p className={classes.label}>Name</p>
              <input type="text" className={classes.input} />
            </div>
            <div className="mb-3 md:mb-5">
              <p className={classes.label}>Email</p>
              <input type="text" className={classes.input} />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <p className={classes.label}>Your Message</p>
            <textarea rows="6" className={classes.textarea}></textarea>
            <button className={classes.sendbutton}>Send Message</button>
          </div>
        </div>
        <div className={"w-full md:w-1/3 p-2 flex justify-end"}>
          <div className="text-white">
            <p className={classes.send}>You can contact us on:</p>
            <div className="flex items-start">
              <div className="mr-1">
                <MdLocationOn />
              </div>
              <p className={classes.send}>Location</p>
            </div>
            <div className="flex items-start">
              <div className="mr-1">
                <MdCall />
              </div>
              <p className={classes.send}>Call</p>
            </div>
            <div className="flex items-start">
              <div className="mr-1">
                <AiOutlineMail />
              </div>
              <p className={classes.send}>Email</p>
            </div>
            <div className="flex items-start">
              <div className="mr-1">
                <AiOutlineInstagram />
              </div>
              <p className={classes.send}>Instagram</p>
            </div>
            <div className="flex items-start">
              <div className="mr-1">
                <AiOutlineTwitter />
              </div>
              <p className={classes.send}>Twitter</p>
            </div>
            <div className="flex items-start">
              <div className="mr-1">
                <AiOutlineWhatsApp />
              </div>
              <p className={classes.send}>WhatsApp</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
