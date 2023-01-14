import Header from "../components/header";
import Footer from "../components/footer";
// import { projects } from "../data/data";
import getProject from "../components/ProjectList";
const projectHome = () => {
  return /*html*/ `
  ${Header()}
  <h1>Project Home</h1>
  <div class="project">
   ${getProject()}
  </div>
  ${Footer()} 
  `;
};
export default projectHome;
