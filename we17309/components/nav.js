import { menus } from "../data";

const Nav = () => {
  return /*html*/ `
        <nav>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/projects">Projects</a>
            <a href="/posts">Posts</a>
            <a href="/contact">Contact</a>
            ${menus
              .map((menu) => `<a href="${menu.path}">${menu.name}</a>`)
              .join("")}
        </nav>
    `;
};
