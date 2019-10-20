import {
  User
} from "./entities/user.js"
import {
  Repositories
} from "./entities/repositories.js"

function getUsers(userName) {
  var requestURL = `https://api.github.com/search/users?q=${userName}`;

  return fetch(requestURL)
    .then((response => response.json()))
    // .then(data => console.log(data)); // ako hocu da vidim sta je stiglo od podataka
    .then((userarray) => {
      const users = userarray.items.map(userObj => new User(userObj));
      return users;
    });

}



function getRepos(userName) {
  var requestRepo = `https://api.github.com/users/${userName}/repos`;
  // console.log(requestRepo);

  return fetch(requestRepo)
    .then(response => response.json())
    .then((reposarray) => {
      let repo = reposarray.map(repoObj => new Repositories(repoObj));
      return repo;
    })
}



export {
  getUsers,
  getRepos,
}