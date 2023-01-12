import Header from "../components/header";
import Footer from "../components/footer";
import { projects } from "../data/data";
const projectHome = () => {
  return /*html*/ `
  ${Header()}
  <h1>Project Home</h1>
  <div class="project">
    ${projects
      .map(
        (item) => /*html*/ `<div>
      <a href="/project/${item.id}">${item.name}</a>
    </div>`
      )
      .join("")}
  </div>
  ${Footer()}
  `;
};
export default projectHome;
