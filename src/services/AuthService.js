import React from 'react';
import RestService from './RestService'
import Storage from 'components/utils/Storage.js'

class AuthService {

    static instance = null;
    restService = null;

    static getInstance() {
        if (AuthService.instance == null){
            AuthService.instance = new AuthService();
        }
        return AuthService.instance;
    }

    constructor(){
        this.restService = RestService.getInstance();
    }

    login(credentials){
        return this.restService.post('/auth/login', credentials).then((resp) => {
            Storage.setJWT(resp.getFirstData().access_token);
        });
    }

    isAuthenticated(){
        return !!Storage.getJWT();
    }

}

export default AuthService;
