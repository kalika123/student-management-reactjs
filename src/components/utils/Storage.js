class Storage {

    static getJWT(){
        return localStorage.getItem('access_token') || null;
    }

    static setJWT(jwt){
        localStorage.setItem('access_token', jwt);
    }
}

export default Storage;