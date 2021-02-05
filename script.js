import Login from "./assets/scripts/login.js";

function init() {
  const login = Login(".js-content");
  login.render();
  login.addFormSubmitListener(".js-content");
}

init();