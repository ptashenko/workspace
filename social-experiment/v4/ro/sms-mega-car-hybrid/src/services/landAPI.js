import axios from 'axios';

const domain = location.origin + location.pathname;

const baseURL = {
    clickID: 'modules/postSubs.php',
    sendPhone: 'modules/sendPhone.php',
    getSHA: 'modules/generateSHA.php',
    checkNumber: 'modules/isValid.php',
    click: 'modules/cta.php'

}

export default {
    postSubs (data, key){
        return axios({
            method: 'POST',
            url: domain + baseURL.clickID,
            data: [
                data,
                key
            ]
        });
    },

    sendPhone (MSISDN, click_id, key) {
        return axios({
            method: 'POST',
            url: domain + baseURL.sendPhone,
            data: {
                msisdn: MSISDN,
                click_id: click_id,
                key: key
            }
        });
    },
    getSHA(click_id, key){
        return axios({
            method: 'POST',
            url: domain + baseURL.getSHA,
            data: {
                click_id: click_id,
                key: key
            }
        })
    },
    isValidNumber: function(MSISDN) {
        return axios({
            method: 'POST',
            url: domain + baseURL.checkNumber,
            data: {
                msisdn: MSISDN
            }
        });
    },
    sendCLick (click_id, key) {
        return axios({
            method: 'POST',
            url: domain + baseURL.click,
            headers: {'Content-Type':'application/json'},
            mode: 'no-cors',
            data: {
                click_id: click_id,
                key: key
            }
        });
    }
}