import { abouts } from "../../data/data";
import Header from "./Header";
import Footer from "./Footer";
const AboutComponent = () => {
  return `
  ${Header()}
  ${abouts.map((about) => `<p>${about.content}</p>`).join("")}
  ${Footer()}
  `;
};

export default AboutComponent;
