import axios from "axios";

const url = location.origin + location.pathname;
const domain = prettyURL(url);

const baseURL = {
  city: "modules/getCity.php",
};

export function getCity() {
  return axios({
    method: "POST",
    url: domain + baseURL.city,
    headers: { "Content-Type": "application/json" },
    mode: "no-cors",
  });
}

//добавилось для трекеров
function prettyURL(url) {
  const base = document.getElementsByTagName("base");
  let changedURL = replaceURLFileName(url);
  if (base.length) {
    changedURL = replaceURLFileName(base[0].href);
  }

  return changedURL;
}

function replaceURLFileName(url) {
  let newURL = url;

  return newURL.split("/").slice(0, -1).join("/") + "/";
}
