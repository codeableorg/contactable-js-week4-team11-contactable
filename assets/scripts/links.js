import Signup from "./signup.js";
import Login from "./login.js";

const addClickEventsToLinks = function(){
  const signup = Signup(".js-content");
  const login = Login(".js-content");

  const signupLink = document.querySelector('#js-signup-link');
  const loginLink = document.querySelector('#js-login-link');

  signupLink.addEventListener('click', (e) => {
    console.log("signup-page loaded")
    signup.render();
  });

  loginLink.addEventListener('click', (e) => {
    console.log("login-page loaded")
    login.render()
  });
}

export { addClickEventsToLinks }
