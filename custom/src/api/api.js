var axios = require("axios");
var ES6Promise = require("es6-promise");
ES6Promise.polyfill();
const ApiService = {
    get(apiurl) {
        return axios
            .get(apiurl)
            .then(response => {
                return response.data;
            })
            .catch(err => console.log(err));
    },

    post(apiurl, bodyFormData) {
        return axios
            .post(apiurl, bodyFormData)
            .then(response => {
                return response.data;
            })
            .catch(err => console.log(err));
    },

    put(apiurl, bodyFormData) {
        return axios
            .put(apiurl, bodyFormData)
            .then(response => {
                return response.data;
            })
            .catch(err => console.log(err));
    },
    delete(apiurl, bodyFormData) {
        return axios
            .delete(apiurl)
            .then(response => {
                return response.data;
            })
            .catch(err => console.log(err));
    }
};
export default ApiService;

export const User = {
    signup(data) {
        return ApiService.post("http://localhost/app/phpreact/api/v1/registration/", data);
    },
    login(user) {
        return ApiService.get("http://localhost/app/phpreact/api/v1/registration/");
    },

};


