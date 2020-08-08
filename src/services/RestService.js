import axios from 'axios';
import RestReponse from './RestResponse'
import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import Storage from 'components/utils/Storage.js'

class RestService {

    static instance = null;
    api = null;

    static getInstance() {
        if (RestService.instance == null) {
            RestService.instance = new RestService();
        }
        return RestService.instance;
    }

    constructor() {
        this.api = axios.create({
            baseURL: 'http://student-man/api'
        });
        this.api.interceptors.response.use((response) => new RestReponse(response.data), (error) => {
            throw error;
        });
        this.api.interceptors.request.use(config => {
            // perform a task before the request is sent
            if (Storage.getJWT()){
                config.headers.Authorization = 'Bearer ' + Storage.getJWT();
            }
            return config;
        }, error => {
            // handle the error
            return Promise.reject(error);
        });
    }

    get(uri, data) {
    }

    post(uri, data) {
        return this.api.post(uri, data);
    }

}

export default RestService;