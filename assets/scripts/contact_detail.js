import EditContact from "./edit_contact.js";
import { updateContact } from "./services/contacts_services.js";

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
          <a href="">Back</a>updateUser
          <a href="">Delete</a>
          <a id="js-edit-form" href="">Edit</a>
        </div>
      </footer>
      `;
      this.parent.innerHTML = html;
      this.editContactClickListener();
    },
    editContactClickListener: function () {
      const editContact = this.parent.querySelector(".js-edit-form");
      if (editContact) {
        editContact.addEventListener("click", (e) => {
          this.parent.innerHTML = EditContact();
        });
      }
    },
    updateFormSubmitListener: function () {
      const content = this.parent.querySelector(".js-content");
      content.addEventListener("click", async (e) => {
        const submit = content.querySelector("#js-update-contact");
        const form = content.querySelector(".js-editContact")
        if (submit === e.target) {
          e.preventDefault();
          const contactID= content.closest("#idContact").dataset.id;
          const { name, phone, email, relation } = form;
          try {
            const updatedContact = await editContact(
              contactID,
              name.value,
              phone.value,
              email.value,
              relation.value
            );
            STORE.contacts = STORE.contacts.map((contact)=>{
              if (contact.id === updatedContact.id){
                return updatedNote;
              }
            });
            this.render();
          } catch (e) {
            alert(e.message);
          }
        }
      });
    },
  };
}