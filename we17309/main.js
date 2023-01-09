import { homePage, a } from "./pages/home";
import { render, router } from "./lib";
import projectHome from "./pages/project";
import contact from "./pages/contact";
const app = document.querySelector("#app");
router.on("/", () => render(homePage, app));
router.on("/projectHome", () => render(projectHome, app));
router.resolve();
