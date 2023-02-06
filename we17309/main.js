import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./pages/home";
import { render, router } from "./lib";
import projectHome from "./pages/project";
import contact from "./pages/contact";
import NotFoundPage from "./pages/not-found";
import ProjectDetail from "./pages/projectDetail";
import ProjectsListPage from "./pages/Admin/projects";
import ProjectEdit from "./pages/Admin/project-edit";
import ProjectAdd from "./pages/Admin/project-add";
const app = document.querySelector("#app");
router.on("/", () => render(Homepage, app));
router.on("/projectHome", () => render(projectHome, app));
router.on("/contact", () => render(contact, app));
router.on("/admin/projects", () => render(ProjectsListPage, app));
router.on("/admin/projects/add", () => render(ProjectAdd, app));
router.on("/admin/projects/:id/edit", ({ data: { id } }) =>
  render(() => ProjectEdit(id), app)
);
router.on("/project/:id", (param) => render(() => ProjectDetail(param), app));

router.notFound(() => render(NotFoundPage, app));
router.resolve();
