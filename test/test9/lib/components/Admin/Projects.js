import { projects } from "../../../data/data";
import { useState, useEffect } from "../../../lib";

const Projects = () => {
  const [data, setData] = useState(projects);
  useEffect(() => {
    const btns = document.querySelectorAll(".btn-remove");
    btns.forEach((btn) => {
      const id = btn.dataset.id;
      btn.addEventListener("click", () => {
        const newData = data.filter((project) => project.id != id);
        setData(newData);
      });
    });
  });
  return /*html*/ `
    <table class="table table-bordered">
        <thead >
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Active</th>
            </tr>
        </thead>
        <tbody>
            ${data
              .map(
                (project, index) => /*html*/ `
                <tr>
                     <td>${index + 1}</td>
                     <td>${project.name}</td>
                     <td width="150"><button class="btn btn-remove btn-danger" data-id="${
                       project.id
                     }">Remove</button></td>
                </tr>
            `
              )
              .join("")}
        </tbody>
    </table>
  `;
};

export default Projects;
