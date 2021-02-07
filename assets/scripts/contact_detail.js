import { showContact } from "./services/contacts_services.js";
import STORE from "./store.js";

export default function ContactDetail(contactId) {
  let acontact = STORE.contacts[contactId-1]
  return `<header>
        <h2>Contact Detail</h2>
        <a>Logout</a>
      </header>
      <section class="inputs">
        <img src="./assets/img/default.png" alt="image-contact">
        <p class="contact__name">${acontact.name}</p>
        <p>Friends</p>
        <div contact__detail>
        <label>Number</label>
          <p class="contact__number">${acontact.number}</p>
        <label>Email</label>
          <p class="contact__email">${acontact.email}</p>
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
  }
