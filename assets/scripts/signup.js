import { signup } from "./sessions_service.js";
import STORE from "./store.js";
import { addClickEventsToLinks } from "./links.js"

export default function Signup(parentElement)
{
  // returns singup object, method render()
  return {
    parent: document.querySelector(parentElement),
    render: function()
    {
      const html = `
      <header>
        <h2>Signup</h2>
      </header>
      <section class="inputs">
        <form id="js-signup-form">
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
      const form = document.querySelector('#js-signup-form');
      form.addEventListener('submit', async (e) =>
      {
        if ( form === e.target )
        {
          e.preventDefault();
          const { email, password } = form;
          try
          {
            const data = await signup(email.value, password.value);
            STORE.user = data
            // sessionStorage.setItem("token", data.token)
          }
          catch (e)
          {
            alert(e.message);
          }
        }
      });
    }
  };
}
