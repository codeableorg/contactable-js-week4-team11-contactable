export default function ContactDetail(parentElement) {
  return {
    parent: document.querySelector(parentElement),
    render: function()
    {
      const html = `
      <header>
        <h2>Contact Detail</h2>
        <a>Logout</a>
      </header>
      <section class="inputs">
        <img src="./assets/img/default.png" alt="image-contact">
        <p class="contact__name">${contact.name}</p>
        <p>Friends</p>
        <div contact__detail>
        <label>Number</label>
          <p class="contact__number">${contact.number}</p>
        <label>Email</label>
          <p class="contact__email">${contact.email}</p>
        </div>
      </section>
      <footer>
        <div class="options">
          <a href="">Back</a>
          <a href="">Delete</a>
          <a href="">Edit</a>
        </div>
      </footer>
      `;
      this.parent.innerHTML = html;
    },
  };
}