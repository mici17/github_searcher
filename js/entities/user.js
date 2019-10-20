class User {
    constructor(UserObj) {
        this.login = UserObj.login;
        this.photo = UserObj.avatar_url;
        this.id = UserObj.id;

    }
}

export {
    User
}