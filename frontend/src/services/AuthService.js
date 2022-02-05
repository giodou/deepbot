export function doLogin(email, pass) {
    return new Promise((response, reject) => {
        if (email == "giovane.negocios@gmail.com"
            && pass === "123456")
            response(true);

            reject(`Invalid user or password!`);
    })


}

export function doLogout() {

}