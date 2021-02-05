export default function Signup(parentElement){
  return {
    parent: document.querySelector(parentElement),
    render: function () {
      const html = `
      <header>
        <h2>Signup</h2>
      </header>
      <section class="inputs">
        <form>
          <input type="email" name="email" placeholder="email"/>         
          <input type="password" name="password" placeholder="password"/> 
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
    },
  };
}