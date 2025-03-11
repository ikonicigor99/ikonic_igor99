import { ReactComponent as EmailIcon } from "./assets/icons/EmailIcon.svg";
import { ReactComponent as LinkedinIcon } from "./assets/icons/linkedinIcon.svg";
// import { ReactComponent as Instagram } from "./assets/icons/instagram.png";
import NS from "./assets/Screenshot_2.png";
export const Header = [{ title: "Igor Ikonic" }];
export const MenuOption = [
  { option: "About", href: "#aboutPage" },
  { option: "Experience", href: "#skillsPage" },
  { option: "Projects", href: "#projectPage" },
  { option: "Contact", href: "#contactPage" },
];
export const TitleAboutMe = [
  {
    title: "Hello, I'm",
    name: "Igor Ikonić",
    description: "Front-end developer",
  },
];
export const contactInfo = [
  { icon: <EmailIcon />, text: "ikonici99@hotmail.com" },
  { icon: <LinkedinIcon />, text: "Igor Ikonić" },
  // { icon: <Instagram />, text: "Ikonic99" },
];
export const projects = [
  {
    name: "LA COLLECTION",
    path: "LA COLLECTION",
    image: "Screenshot_2.png",
    url: "https://emart-project.vercel.app/",
  },
  {
    name: "SM WEB",
    path: "SM WEB",
    image: "Screenshot_4.png",
    url: "https://smweb.vercel.app/",
  },
  {
    name: "WEATHER ",
    path: "WEATHER",
    image: "Screenshot_1.png",
    url: "https://weather-project-theta-beryl.vercel.app/",
  },
  {
    name: "Mozis | PILANA",
    path: "Mozis | PILANA",
    image: "Mozis.PNG",
    url: "https://mozis.vercel.app/"
  }
];
export const skillsOne = [
  { name: "HTML", img: "checkmark.png", experience: "Experienced" },
  { name: "CSS", img: "checkmark.png", experience: "Experienced" },
  { name: "JavaScript", img: "checkmark.png", experience: "Intermediate" },
  { name: "REACT", img: "checkmark.png", experience: "Intermediate" },
  { name: "NEXTJS", img: "checkmark.png", experience: "Intermediate" },
  { name: "MySQL", img: "checkmark.png", experience: "Basic" },
  { name: "MONGODB", img: "checkmark.png", experience: "Basic" },

  { name: "Graphql", img: "checkmark.png", experience: "Basic" },
  { name: "SASS", img: "checkmark.png", experience: "Intermediate" },
];
export const skillsTwo = [
  { name: "Git", img: "checkmark.png", experience: "Experienced" },
  { name: "GitHub", img: "checkmark.png", experience: "Experienced" },
  { name: "SourceTree", img: "checkmark.png", experience: "Experienced" },
  { name: "Figma", img: "checkmark.png", experience: "Experienced" },
  { name: "AdobeXD", img: "checkmark.png", experience: "Experienced" },
];
