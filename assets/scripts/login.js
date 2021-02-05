export default function Login(){
  return {
    render: function(){
      return `
      <header>
      <h2>Login</h2>
      </header>
      <section>
        <form>
          <input type="password" name="email">
          <input type="password" name="password">
        </form>
      </section>
      <footer>
      <a href="signup">Sign Up</a>
      <a href="login">Login</a>
      </footer>
      `
    }
  }
}