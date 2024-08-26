import {
  faTextHeight,
  faListNumeric,
  faStar,
  faSmileBeam,
  faListCheck,
  faRectangleList,
  faPen,
  faPlus,
  faThumbsUp,
  faLessThan,
  faFrown,
  faGrimace,
  faMeh,
  faSmile,
  faGrinStars,
} from "@fortawesome/free-solid-svg-icons";
import { faTextWidth } from "@fortawesome/free-solid-svg-icons/faTextWidth";

const skills = [
  {
    technology: "HTML",
    percentage: 90,
    last_week: 80,
    last_month: 85,
  },
  {
    technology: "CSS",
    percentage: 66,
    last_week: 45,
    last_month: 75,
  },
  {
    technology: "Tailwind CSS",
    percentage: 96,
    last_week: 95,
    last_month: 95,
  },
  {
    technology: "JavaScript",
    percentage: 85,
    last_week: 60,
    last_month: 70,
  },
  {
    technology: "JSON",
    percentage: 85,
    last_week: 90,
    last_month: 95,
  },
  {
    technology: "TypeScript",
    percentage: 65,
    last_week: 80,
    last_month: 90,
  },
  {
    technology: "React",
    percentage: 80,
    last_week: 70,
    last_month: 75,
  },
  {
    technology: "Kendo UI",
    percentage: 75,
    last_week: 50,
    last_month: 65,
  },
  {
    technology: "Figma",
    percentage: 88,
    last_week: 82,
    last_month: 90,
  },
];

export const feedbackIcons = [
  { icon: "faTextHeight", text: "Textarea", component: "TextArea" },
  {
    icon: "faListNumeric",
    text: "Numeric rating",
    component: "NumbericRating",
  },
  { icon: "faStar", text: "Star rating", component: "StarRating" },
  { icon: "faSmileBeam", text: "Smiley rating", component: "EmojiRating" },
  { icon: "faTextWidth", text: "Single line input", component: "InputText" },
  { icon: "faListCheck", text: "Radio button", component: "RadioButton" },
  { icon: "faRectangleList", text: "Categories", component: "CategoryRating" },
];

export const iconMapping = {
  faTextHeight: faTextHeight,
  faListNumeric: faListNumeric,
  faStar: faStar,
  faSmileBeam: faSmileBeam,
  faTextWidth: faTextWidth,
  faListCheck: faListCheck,
  faRectangleList: faRectangleList,
};

export const data = [
  {
    src: "https://res.cloudinary.com/dcfejifrx/image/upload/v1724485795/feedback/rdh41thhzwubnwajpaoc.jpg",
    label: "USER INTERFACE",
  },
  {
    src: "https://res.cloudinary.com/dcfejifrx/image/upload/v1724485796/feedback/jyfa1zlnp0d6wbdlx8us.jpg",
    label: "USER EXPERIENCE",
  },
  {
    src: "https://res.cloudinary.com/dcfejifrx/image/upload/v1724485798/feedback/wb2ah8urdfkdtcehgil3.jpg",
    label: "WEB DEVELOPMENT",
  },
  {
    src: "https://res.cloudinary.com/dcfejifrx/image/upload/v1724485796/feedback/stdaiovehrav3ipirixv.jpg",
    label: "MOBILE APPLICATION",
  },
  {
    src: "https://res.cloudinary.com/dcfejifrx/image/upload/v1724485798/feedback/hum1kulcl2yii3qhkylw.jpg",
    label: "INTERNET OF THINGS",
  },
  {
    src: "https://res.cloudinary.com/dcfejifrx/image/upload/v1724485799/feedback/md5rxrafd9gvczrueyvh.jpg",
    label: "FULL STACK",
  },
];

export const projectData = [
  {
    text: "FULL STACK DEVELOPMENT",
    icon: "faProjectDiagram",
    description:
      "A complete management of Front end which connected by middleware and also store in the Database",
    link: "https://github.com/fayazahamedd/Full-Stack",
  },
  {
    text: "MOBILE APPLICATION",
    icon: "",
    description:
      "The app is composed of two screens. The first screen displays a list of books, including the publisher",
    link: "https://github.com/fayazahamedd/Mobile-Application",
  },
  {
    text: "INTERNET OF THINGS",
    icon: "faInternetExplorer",
    description:
      "Short and easy to manage multiple actions which help farmers on modern days and process all in ready",
    link: "https://github.com/fayazahamedd/fertigation-IoT",
  },
  {
    text: "ETHICAL HACKING",
    icon: "faHackerrank",
    description:
      "Basic Ethical Hacking which helps to protect the data and plays a major role in the development",
  },
  {
    text: "WEB APPLICATION DEVELOPMENT",
    icon: "faWeebly",
    description:
      "Managing the information and current We build websites mainly in UI/UX design which happens completely online",
    link: "https://github.com/fayazahamedd/Ethical-Hacking",
  },
  {
    text: "CHATBOTS FOR ANDROID USING DIALOGFLOW IN ANDROID STUDIO",
    icon: "faAndroid",
    description:
      "A simple my assistant using Google Dialogflow which is used for personal usages",
    link: "https://github.com/fayazahamedd/-Build-chatbots-for-Android-using-Dialogflow-Android-studio-.",
  },
  {
    text: "EMPLOYEE MANAGEMENT SYSTEM IN JAVA CONSOLE BASED",
    icon: "faEmpire",
    description:
      "Create, Update, Delete & Display Of individual Employee Details in Java Console Based",
    link: "https://github.com/fayazahamedd/Employee-Management-System-in-Java-Programming",
  },
  {
    text: "TEXT RECOGNIZER & FACE SMILE DETECTOR IN MOBILE APPLICATION",
    icon: "faSmileBeam",
    description:
      "Extract text from image & Detect the smile of a face using ML Technologies on Android Studio",
    link: "https://github.com/fayazahamedd/Text-Recognizer",
  },
  {
    text: "CAR CRASH",
    icon: "faCar",
    description:
      "Moving of Cars from Left, Right, Top, Bottom Playing of Car Crash using JQuery",
    link: "https://github.com/fayazahamedd/Car-Crash",
  },
];

export default skills;

export const emojis = [
  { icon: faFrown, color: "text-red-500" }, // 1-star rating
  { icon: faGrimace, color: "text-orange-500" }, // 2-star rating
  { icon: faMeh, color: "text-yellow-500" }, // 3-star rating
  { icon: faSmile, color: "text-green-500" }, // 4-star rating
  { icon: faGrinStars, color: "text-blue-500" }, // 5-star rating
];
