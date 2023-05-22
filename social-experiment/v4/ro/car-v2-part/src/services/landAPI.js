import axios from 'axios';

const domain = location.origin + location.pathname;

const baseURL = {
    clickID: 'modules/getID.php',
    SHA: 'modules/getSHA.php',
    generateSHA: 'modules/generateSHA.php'
}

export default {
    getID (data, key){
        return axios({
            method: 'POST',
            url: domain + baseURL.clickID,
            data: [
                data,
                key
            ]
        });
    },

    getSHA (MSISDN, click_id, key) {
        return axios({
            method: 'POST',
            url: domain + baseURL.SHA,
            data: {
                msisdn: MSISDN,
                click_id: click_id,
                key: key
            }
        });
    },
    getNumber (click_id, key) {
        return axios({
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            mode: 'no-cors',
            url: domain + baseURL.generateSHA,
            data: {
                click_id: click_id,
                key: key
            }
        });
    }
}