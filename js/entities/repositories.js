class Repositories {
    constructor(repoObj) {
        this.name = repoObj.name;
        this.description = repoObj.description;
        this.language = repoObj.language;
        this.url = repoObj.html_url;
        this.id = repoObj.id;
    }
}

export {
    Repositories
}