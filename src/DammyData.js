import { ReactComponent as EmailIcon } from "./assets/icons/EmailIcon.svg";
import { ReactComponent as LinkedinIcon } from "./assets/icons/linkedinIcon.svg";
// import { ReactComponent as Instagram } from "./assets/icons/instagram.png";
export const Header = [{ title: "Igor Ikonic" }];
export const Menue = [
  { name: "about", path: "/" },
  { name: "work & projects", path: "projectScreen" },
];
export const TitleAboutMe = [
  { title: "Hello, I'm Igor!", description: "Junior Front-end developer" },
];
export const contactInfo = [
  { icon: <EmailIcon />, text: "ikonici99@hotmail.com" },
  { icon: <LinkedinIcon />, text: "Igor Ikonić" },
  // { icon: <Instagram />, text: "Ikonic99" },
];
export const projects = [
  { name: "DOO MOZIS", path: "DOO MOZIS" },
  { name: "SM WEB", path: "SM WEB" },
];
