const ProjectInfo = ({ name, teams }) => {
  return /*html*/ `
        <h1>${name}</h1>
        ${
          teams
            ? `${teams.map((team) => `<h3>${team.name}</h3>`).join("\n")}`
            : ``
        }
  `;
};

export default ProjectInfo;
