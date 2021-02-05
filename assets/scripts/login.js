export default function Login(parentElement){
  return {
    parent: document.querySelector(parentElement),
    render: function () {
      const html = `
      <header>
        <h2>Login</h2>
      </header>
      <section class="inputs">
        <form>
          <input type="email" name="email" placeholder="email"/>         
          <input type="password" name="password" placeholder="password"/> 
        </form>
      </section>       
      <footer class="options">
        <div>
          <a href="">Sign Up</a>
          <a href="">Login</a>
        </div>
      </footer>
      `;
      this.parent.innerHTML = html;
    },
    // addFormSubmitListener: function () {
    //   this.parent.addEventListener("submit", (e) => {
    //     const form = this.parent.querySelector(".js-login-form");
    //     if (form === e.target) {
    //       e.preventDefault();
    //       const { email, password } = form;
    //       console.log(email.value, password.value);
    //     }
    //   });
    // },
  };
}