/* eslint-disable react/prop-types */
// pages/Work.jsx
import {
  faFacebook,
  faInstagram,
  faInternetExplorer,
  faLinkedinIn,
  faTwitter,
  faWhatsappSquare,
} from "@fortawesome/free-brands-svg-icons";
import {
  faLocationPinLock,
  faMailBulk,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";

const Contact = ({ setActive }) => {
  useEffect(() => {
    setActive("contact");
  }, [setActive]);

  return (
    <div className="flex flex-row w-full h-full mb-6 ml-11 mr-12 justify-between">
      <div className="flex flex-col w-[1/2] ">
        <form role="form" className="bg-white shadow-xl rounded-md h-full ">
          <h1 className="text-center font-extrabold text-[19px] m-4 ">
            Send Message
          </h1>
          <div id="errormessage"></div>
          <div className="grid grid-cols-2 gap-4">
            <div className="m-3">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  className="form-control h-10 rounded-lg border border-blue text-left p-2"
                  id="name"
                  placeholder="Your Name"
                  data-rule="minlen:4"
                  data-msg="Please enter at least 4 chars"
                />
              </div>
            </div>

            <div className="m-3">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control h-10 rounded-lg border border-blue text-left p-2"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  data-rule="minlen:4"
                  data-msg="Please enter at least 8 chars of subject"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1">
            <div className="m-3">
              <div className="form-group">
                <input
                  type="email"
                  className="form-control w-[100%] h-10 rounded-lg border border-blue text-left p-2"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  data-rule="email"
                  data-msg="Please enter a valid email"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1">
            <div className="m-3">
              <div className="form-group">
                <textarea
                  className="form-control border-blue w-[100%] rounded-lg border text-justify pt-2 pl-2"
                  name="message"
                  rows="5"
                  data-rule="required"
                  data-msg="Please write something for us"
                  placeholder="Message"
                ></textarea>
              </div>
            </div>
          </div>

          <div className="col-span-2 ">
            <button
              type="submit"
              className="button button-a button-big button-rouded bg-blue w-36 h-10 font-bold rounded-md mb-4"
            >
              <a href="mailto:connectwithfayazahamed@gmail.com">Send Message</a>
            </button>
          </div>
        </form>
      </div>

      <div className="flex flex-col ml-5 w-1/2 bg-white shadow-xl rounded-md">
        <h1 className="text-center font-extrabold text-[19px] m-4 ">
          Get in Touch
        </h1>
        <li className="flex flex-row p-2 rounded-full border-blue w-10 ml-10 list-none">
          <FontAwesomeIcon className="w-6 h-7" icon={faLocationPinLock} />
          <span className="ml-8 font-mediums hover:text-blue">Bangalore</span>
        </li>
        <li className="flex flex-row p-2 rounded-full border-blue w-10 ml-10 list-none">
          <FontAwesomeIcon className="w-6 h-7" icon={faPhone} />
          <p className="ml-8 font-mediums h-[25px] hover:text-blue">
            +91&nbsp;97875&nbsp;55277
          </p>
        </li>
        <li className="flex flex-row p-2 rounded-full border-blue w-10 ml-10 list-none">
          <FontAwesomeIcon className="w-6 h-7" icon={faMailBulk} />
          <p className="ml-8 font-mediums h-[25px] hover:text-blue">
            connectwithfayazahamed@gmail.com
          </p>
        </li>
        <li className="flex flex-row p-2 rounded-full border-blue w-10 ml-10 list-none">
          <FontAwesomeIcon className="w-6 h-7" icon={faInternetExplorer} />
          <p className="ml-8 font-mediums h-[25px] hover:text-blue">
            {" "}
            <a href="https://fayazahamedd.github.io/">fayazahamedd.github.io</a>
          </p>
        </li>

        <div className="flex  flex-row mt-6">
          <li className="border border-r-8 p-2 list-none rounded-full border-blue w-12 h-12 ml-11 mt-4 hover:border-true-black">
            <a href="https://www.linkedin.com/in/fayaz-ahamed-d/">
              <FontAwesomeIcon className="w-6 h-7" icon={faLinkedinIn} />
            </a>
          </li>

          <li className="border border-r-8 p-2 list-none rounded-full border-blue w-12 h-12 ml-5 mt-4 hover:border-true-black">
            <a
              href="whatsapp://send?text=Hi I am here!&phone=9787555277"
              data-action="share/whatsapp/share"
            >
              <FontAwesomeIcon className="w-6 h-7" icon={faWhatsappSquare} />
            </a>
          </li>

          <li className="border border-r-8 p-2 list-none rounded-full border-blue w-12 h-12 ml-5 mt-4 hover:border-true-black">
            <a href="https://www.instagram.com/fayaz__ahamed/">
              <FontAwesomeIcon className="w-6 h-7" icon={faInstagram} />
            </a>
          </li>

          <li className="border border-r-8 p-2 list-none rounded-full border-blue w-12 h-12 ml-5 mt-4 hover:border-true-black">
            <a href="https://www.facebook.com/fayaz.ahamed.12139">
              <FontAwesomeIcon className="w-6 h-7" icon={faFacebook} />
            </a>
          </li>

          <li className="border border-r-8 p-2 list-none rounded-full border-blue w-12 h-12 ml-5 mt-4 hover:border-true-black">
            <a href="https://twitter.com/FayazAh88376575">
              <FontAwesomeIcon className="w-6 h-7" icon={faTwitter} />
            </a>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Contact;
