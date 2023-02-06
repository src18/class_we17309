import { projects } from "../../data/data";
const ProjectList = () => {
  return /*html*/ `
  <h1>Project List</h1>
    <nav>
        ${projects
          .map(
            (project) => `<a href="/project/${project.id}">${project.name}</a>`
          )
          .join("")}
    </nav>
  `;
};

export default ProjectList;
