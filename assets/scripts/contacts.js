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
          <div style="display: flex; justify-content: space-between; align-items: center">
            <h3> Contactable</h3>
            <a class="js-logout" href="#logout">Logout</a>
          </div>
          <h4>CONTACTS(${sortContacts.length})</h4>
        </header>
        <section style="position: relative;">
          ${contactsList.join("")}
           <a class="js-new-contact" style="position: absolute; bottom: 20px; right: 20px;"
              href="#create-contact">Create Contact</a>
        </section>`;
}
