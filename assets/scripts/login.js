import { login } from "./services/sessions_service.js";
import STORE from "./store.js";
import Main from "./main.js"
import { addClickEventsToLinks } from "./links.js";

export default function Login(parentElement)
{
  // returns login object, method render()
  return {
    parent: document.querySelector(parentElement),
    render: function()
    {
      const html = `
      <header>
        <h2>Login</h2>
      </header>
      <section class="inputs">
        <form id="js-login-form">
          <input type="email" name="email" placeholder="email"/>
          <input type="password" name="password" placeholder="password"/>
          <input type="submit" hidden>
          </form>
          </section>
          <footer>
          <div class="options">
          <a href="" id="js-login-submit">Login</a>
          <a href="javascript:void(0)" id="js-signup-link">Create Account</a>
        </div>
      </footer>
      `;
      this.parent.innerHTML = html;
      this.addFormSubmitListener();
      addClickEventsToLinks();
    },
    addFormSubmitListener: function(){
      const content = document.querySelector(".js-content");
      content.addEventListener('click', async (e) => {
        let loginLink = content.querySelector("#js-login-submit")
        let form = document.querySelector("#js-login-form")
        if ( loginLink === e.target ) {
          e.preventDefault();
          const { email, password } = form;
          console.log({email, password})
          try
          {
            const data = await login(email.value, password.value);
            STORE.user = data;
            sessionStorage.setItem("token", data.token)
            if (data.token){
              let main = Main(".js-content");
              main.render()
            }
          }
          catch (e)
          {
            alert(e.message);
          }
        }
      });
    },
  };
}

