import Login from "./assets/scripts/login.js";
import Main from "./assets/scripts/main.js";
import STORE from "./assets/scripts/store.js";


async function init() {
  const login = Login(".js-content");
  const main = Main(".js-content");

  if (sessionStorage.getItem("token")) {
    STORE.user = await showUser();
    STORE.contacts
    main.render();
  } else {
    login.render();
  }
}


init();
