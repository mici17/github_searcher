import * as ui from "./ui.js"
import * as data from "./data.js"

function setUpEventListener() {
    $("#input").keypress(function (event) {
        if (event.keyCode !== 13) {
            return
        };
        var getUserData = ui.getSearchInput();


        data.getUsers(getUserData)
            .then(function (data) {
                ui.displayUsers(data);
            })

    });

}



function clickEventListener() {
    $('.main').on("click", ".userinfo-container", function (e) {

        let username = $(this).find("p").text();

        data.getRepos(username)
            .then(function (data) {
                ui.showRepos(data);
            })

    })
}




function init() {
    setUpEventListener();
    clickEventListener();
}

export {
    init
}