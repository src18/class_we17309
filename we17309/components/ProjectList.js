import { projects } from "../data/data";
function getProject() {
  return `
  ${projects
    .map(
      (item) => /*html*/ `<div>
        <a href="/project/${item.id}">${item.name}</a>
      </div>`
    )
    .join("")}`;
}
export default getProject;
