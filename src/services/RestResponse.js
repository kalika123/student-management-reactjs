
import Helper from 'components/utils/Helper.js'

class RestReponse {

    constructor(rawData){
        this.status = rawData.status;
        this.errorCode = rawData.error_code;
        this.errorMessage = rawData.error_message;
        this.data = rawData.data;
    }

    getData() {
        return this.data;
    }

    getFirstData() {
        return this.data && this.data[0] || this.data;
    }

    isEmpty() {
        return Helper.isNullOrUndefined(this._data) || this._data.length === 0;
    }

    isNotEmpty() {
        return !this.isEmpty();
    }

}

export default RestReponse;