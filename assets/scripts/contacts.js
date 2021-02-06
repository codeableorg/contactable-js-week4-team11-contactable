import NewContact from "./new_contact.js";
import STORE from "./store.js";
import { listContacts } from "./services/contacts_services.js"

export default async function Contacts() {
  STORE.contacts = await listContacts();
  const sortContacts = STORE.contacts;
  const contactsList = sortContacts.map(contact => `
        <div id="idContact" data-id="${contact.id}"class="contacts__box">
          <div class="contact">
            <div class="contact__info">
              <img src="./assets/img/default.png" alt="">
              <p class="contact__name">${contact.name}</p>
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
          <a class="js-new-contact" href="#create-contact">Create Contact</a>
          <h4>CONTACTS(${sortContacts.length})</h4>
        </header>
        <section>
           ${contactsList.join("")}
          <a class="js-logout" href="#logout">Logout</a>
        </section>`;
}
