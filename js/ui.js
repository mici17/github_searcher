var inputData = $("#input");
var $main = $(".main");

function getSearchInput() {
    return inputData.val();
}



function displayUsers(users) {
    $(".main").html("")

    users.forEach(function (user) {
        $main.append($('<div class="userinfo-container col-md-4"></div>')
            .html(`
           <a href = "#">
            <div class="inner-info">
               <img src="${user.photo}">
               <p class="user-login">${user.login}</p>
            </div>
           </a>`

            )
        );

    });

    inputData.val("");

}


function showRepos(repos) {
    $(".main").html("")

    repos.forEach(function (repo) {

        $main.append($('<div class="repoinfo-container col-md-4"></div>')
            .html(`
           <a href = "${repo.url}" target="_blank">
            <div class="inner-info">
               <img src="https://tinyurl.com/y2ar8b4b">
               <p class="repo-name">Repository name: ${repo.name}</p>
               <p class="repo-description">Description: ${repo.description}</p>
               <p>Language: ${repo.language}</p>

            </div>
           </a>`

            )
        );

    });

}


export {
    getSearchInput,
    displayUsers,
    showRepos,
}