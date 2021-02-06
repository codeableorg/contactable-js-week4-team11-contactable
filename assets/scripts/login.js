import { login } from "./sessions_service.js";
import STORE from "./store.js";
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
          <a href="javascript:void(0)" id="js-login-link">Login</a>
          <a href="javascript:void(0)" id="js-signup-link">Create Account</a>
        </div>
      </footer>
      `;
      this.parent.innerHTML = html;
      this.addFormSubmitListener();
      addClickEventsToLinks();
    },
    addFormSubmitListener: function()
    {
      const form = document.querySelector('#js-login-form');
      form.addEventListener('submit', async (e) =>
      {
        if ( form === e.target )
        {
          e.preventDefault();
          const { email, password } = form;
          try
          {
            const data = await login(email.value, password.value);
            console.log("Logged in")
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
