import Footer from "../components/footer";
import Header from "../components/header";
import { projects } from "../data/data";
import { router } from "../lib";
import ProjectInfo from "../components/projectinfo";
const ProjectDetail = ({ data: { id } }) => {
  const currentProject = projects.find((item) => item.id == id);
  console.log(currentProject);
  return /*html*/ `
    ${Header()}
    <div class="projectInfo">
    ${ProjectInfo(currentProject)}
    </div>
    ${Footer()}
  `;
};
export default ProjectDetail;
