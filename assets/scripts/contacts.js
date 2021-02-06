import NewContact from "./new_contact.js";
import STORE from "./store.js";

export default function Contacts() {
  const sortContacts = STORE.contacts;
  const contactsList = sortContacts.map(contact => `
        <div data-id="${contact.id}"class="contacts__box">
          <div class="contact">
            <div class="contact__info">
              <img src="./assets/img/default.png" alt="">
              <p class="contact__name">${contac.name}</p>
            </div>
            <div class="contact__star">
              <i class="material-icons">star_border</i>
            </div>
          </div>
        </div>
      `);
  return  `
        <header>
          <h3> Contactable</h3>
          <h4>CONTACTS(${sortContacts.length})</h4>
        </header>
        <section>
           ${contactsList.join("")}
        </section>`;
}
