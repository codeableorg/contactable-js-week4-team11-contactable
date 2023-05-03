import { login } from "./services/sessions_service.js";
import STORE from "./store.js";
import Main from "./main.js"
import { addClickEventsToSignup } from "./links.js";

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
          <a href="javascript:void(0)" id="js-login-submit">Login</a>
          <a href="javascript:void(0)" id="js-signup-link">Create Account</a>
        </div>
      </footer>
      `;
      this.parent.innerHTML = html;
      this.addFormSubmitListener();
      addClickEventsToSignup();
    },
    addFormSubmitListener: function(){
      const form = document.querySelector("#js-login-form");
      const loginSubmit = document.querySelector("#js-login-submit")
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const { email, password } = form;
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
      });
      // an addiotional event listener, clickin on 'login' will trigger the form submit event
      let submitEvent = new Event('submit', {
                        'bubbles'    : true,
                        'cancelable' : true
                        });
      loginSubmit.addEventListener('click', (e) => {
        form.dispatchEvent(submitEvent);
      });
    },
  };
}
