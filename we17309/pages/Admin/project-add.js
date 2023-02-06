// import { projects } from "../../data/data";
import { router, useEffect } from "../../lib";

const ProjectAdd = () => {
  //lấy mảng project lưu trong localstorage
  const projects = JSON.parse(localStorage.getItem("projects")) || [];

  useEffect(() => {
    const form = document.getElementById("form-add");
    const projectName = document.getElementById("project-name");
    form.addEventListener("submit", (event) => {
      projects.push({
        id: projects.length + 1,
        name: projectName.value,
      });
      event.preventDefault();
      localStorage.setItem("projects", JSON.stringify(projects));
      router.navigate("/admin/projects");
    });
  });
  return /*html*/ `<div class="container">
  <h1>Thêm sản phẩm</h1>
      <form action="" id="form-add">
          <div class="form-group">
              <label for="" class="form-label">Tên dự án</label>
              <input type="text" class="form-control" id="project-name" />
          </div>
          <button class="btn btn-primary">Thêm</button>
      </form>
</div>`;
};

export default ProjectAdd;
