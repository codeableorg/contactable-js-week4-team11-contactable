import Login from "./assets/scripts/login.js";
import Main from "./assets/scripts/main.js";
import STORE from "./assets/scripts/store.js";
import Signup from "./assets/scripts/signup.js";


async function init() {
  const login = Login(".js-content");
  const main = Main(".js-content");
  const signup = Signup(".js-content")

  if (sessionStorage.getItem("token")) {
    STORE.contacts
    await main.render(); // render() is async due to contacts loading
  } else {
    login.render();
  }
}


init();
