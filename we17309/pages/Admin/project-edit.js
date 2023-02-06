// import { projects } from "../../data/data";
import { router, useEffect } from "../../lib";

const ProjectEdit = (id) => {
  // lấy trong localStorage
  const projects = JSON.parse(localStorage.getItem("projects")) || [];
  // tìm kiếm
  const currentProject = projects.find((p) => p.id == id);
  useEffect(() => {
    const form = document.getElementById("form-add");
    const projectName = document.getElementById("project-name");
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const newData = {
        id: currentProject.id,
        name: projectName.value,
      };
      const newProject = projects.map((project) =>
        project.id == newData.id ? newData : project
      );
      // lưu lại localStorage
      localStorage.setItem("projects", JSON.stringify(newProject));
      router.navigate("admin/projects");
    });
  });
  return /*html*/ `<div class="container">
  <h1>Sửa  sản phẩm</h1>
      <form action="" id="form-add">
          <div class="form-group">
              <label for="" class="form-label">Tên dự án</label>
              <input type="text" class="form-control" id="project-name"  value = "${currentProject.name}"/>
          </div>
          <button class="btn btn-primary">Sửa</button>
      </form>
</div>`;
};

export default ProjectEdit;
