import { signup } from "./sessions_service.js";
import STORE from "./store.js";

export default function Signup(parentElement)
{
  // returns singup object, methods render() and addFormSubmitListener()
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
          <a href="">Login</a>
          <a href="">Create Account</a>
        </div>
      </footer>
      `;
      this.parent.innerHTML = html;
      this.addFormSubmitListener();
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
