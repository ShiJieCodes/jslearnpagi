import get from "./getElement.js";
const container = get(".container");

const display = (followers) => {
  const newFollowers = followers
    .map((person) => {
      // avartaur;/html url/login
      const { avatar_url: avatar, html_url: link, login: name } = person;
      return `<article class='card'>
    <img src="${avatar}" alt="${name}" />
    <h4>${name}</h4>
    <a href="${link}}" class='btn'>view profile</a>
    </article>`;
    })
    .join("");
  container.innerHTML = newFollowers;
};

export default display;
