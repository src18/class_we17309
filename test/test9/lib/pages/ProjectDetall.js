import { projects } from "../../data/data";
import { router } from "../index";
import ProjectInfo from "../components/ProjectInfo";
const ProjectDetall = ({ data: { id } }) => {
  const curentProject = projects.find((item) => item.id == id);
  return !curentProject
    ? router.navigate("/projects")
    : ` ${ProjectInfo(curentProject)}`;
};

export default ProjectDetall;
