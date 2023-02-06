// import { projects } from "../../data/data";
import { useState, useEffect } from "../../lib";
const ProjectsListPage = () => {
  const [data, setData] = useState([]);
  const projects = JSON.parse(localStorage.getItem("projects")) || [];
  useEffect(() => {
    //lấy mảng project lưu trong localstorage
    console.log(projects);
    setData(projects);
  }, []);
  useEffect(() => {
    const btns = document.querySelectorAll(".btn-remove");

    btns.forEach((btn) => {
      const id = btn.dataset.id;
      btn.addEventListener("click", () => {
        const newData = data.filter((project) => project.id != id);
        localStorage.setItem("projects", JSON.stringify(newData));
        setData(newData);
      });
    });
  });
  return /*html*/ `
  
  <div class="container">
  <h1>Danh  sánh </h1>
    <table class="table table-bordered">
        <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Active</th>
            </tr>
        </thead>
        <tbody> 
            ${data
              .map((project, index) => {
                return /*html*/ `
                    <tr>
                        <td>${index + 1}</td>
                        <td>${project.name}</td>
                        <td width="150"><button class="btn btn-remove btn-danger" data-id="${
                          project.id
                        }">Remove</button>
                        <a href="/admin/projects/${project.id}/edit">Sửa</a>
                        </td>
                    </tr>
                `;
              })
              .join("")}
        </tbody>
    </table>
</div>`;
};

export default ProjectsListPage;
