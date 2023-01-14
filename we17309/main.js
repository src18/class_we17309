import Homepage from "./pages/home";
import { render, router } from "./lib";
import projectHome from "./pages/project";
import contact from "./pages/contact";
import NotFoundPage from "./pages/not-found";
import ProjectDetail from "./pages/projectDetail";

const app = document.querySelector("#app");
router.on("/", () => render(Homepage, app));
router.on("/projectHome", () => render(projectHome, app));
router.on("/contact", () => render(contact, app));
router.on("/project/:id", (param) => render(() => ProjectDetail(param), app));
router.notFound(() => render(NotFoundPage, app));
router.resolve();
