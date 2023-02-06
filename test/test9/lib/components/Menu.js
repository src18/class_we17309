import { menus } from "../../data/data";
const Menu = () => {
  return /*html*/ `
  <nav>
    ${menus.map((item) => `<a href="${item.path}">${item.name}</a>`).join("")}
  </nav>
  `;
};

export default Menu;
