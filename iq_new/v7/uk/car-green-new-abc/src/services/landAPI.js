import axios from 'axios';

//добавилось для трекеров
const url = location.origin + location.pathname;
const domain = prettyURL(url);
//добавилось для трекеров

const baseURL = {
  clickID: 'modules/postSubs.php',
  click: 'modules/cta.php',
};

export function postSubs(data, key) {
  return axios({
    method: "POST",
    url: domain + baseURL.clickID,
    data: [data, key],
  });
}


export function sendCLick(click_id, key) {
  return axios({
    method: "POST",
    url: domain + baseURL.click,
    headers: { "Content-Type": "application/json" },
    mode: "no-cors",
    data: {
      click_id,
      key,
    },
  });
}

//добавилось для трекеров
function prettyURL(url) {
  const base = document.getElementsByTagName('base');
  let changedURL = replaceURLFileName(url);
  if ( base.length ) {
    changedURL = replaceURLFileName(base[0].href);
  }

  return changedURL;

}

function replaceURLFileName(url) {
  let newURL = url;

  return newURL.split("/").slice(0, -1).join("/") + '/'
}
//добавилось для трекеров