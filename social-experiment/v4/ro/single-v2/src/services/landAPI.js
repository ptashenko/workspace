import axios from 'axios';

const domain = location.origin + location.pathname;

const baseURL = {
    clickID: 'modules/getID.php',
    SHA: 'modules/getSHA.php'
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
    }
}