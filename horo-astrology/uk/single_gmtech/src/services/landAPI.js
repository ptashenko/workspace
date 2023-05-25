import axios from 'axios';

const domain = location.origin + location.pathname;

const baseURL = {
  clickID: 'modules/postSubs.php',
  click: 'modules/cta.php',
};

export function postSubs(data, key) {
  return axios({
    method: 'POST',
    url: domain + baseURL.clickID,
    data: [data, key],
  });
}

export function sendCLick(click_id, key) {
  return axios({
    method: 'POST',
    url: domain + baseURL.click,
    headers: { 'Content-Type': 'application/json' },
    mode: 'no-cors',
    data: {
      click_id: click_id,
      key: key,
    },
  });
}
