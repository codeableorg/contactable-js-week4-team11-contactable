export default function Signup(parentElement){
  return {
    parent: document.querySelector(parentElement),
    render: function () {
      const html = `
      <header>
        <h2 class="title">Signup</h2>
      </header>
      <section class="inputs">
        <form>
          <input type="email" name="email" placeholder="email"/>         
          <input type="password" name="password" placeholder="password"/> 
        </form>
      </section>       
      <footer class="options">
        <div>
          <a href="">Login</a>
          <a href="">Create Account</a>
        </div>
      </footer>
      `;
      this.parent.innerHTML = html;
    },
  };
}