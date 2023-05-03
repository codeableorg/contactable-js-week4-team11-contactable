import Contacts from "./contacts.js";
import { logout } from "./services/sessions_service.js";
import Login from "./login.js";
import STORE from "./store.js";
import NewContact from "./new_contact.js";
import { showContact } from "./services/contacts_services.js";
import ContactDetail from "./contact_detail.js";

export default function Main(parentElement){
  return{
    parent: document.querySelector(parentElement),
    render: async function(){
      let html = await Contacts();
      this.parent.innerHTML = html;
      this.logoutClickListener();
      this.newContactClickListener();
      this.showContactClickListener();
    },
    newContactClickListener: function () {
      const newContact = this.parent.querySelector(".js-new-contact");
      if (newContact) {
        newContact.addEventListener("click", (e) => {
          let newContactForm = NewContact(this.parent);
          newContactForm.render();
        });
      }
    },
    showContactClickListener: function () {
      const detailContact = this.parent.querySelectorAll("#AllContacts");
      detailContact.forEach((c) => {
        const contactId = c.querySelector("#idContact").dataset.id
        c.addEventListener("click", (e) => {
          STORE.contact = showContact(contactId);
          this.parent.innerHTML = ContactDetail(contactId)
        });
      });
    },
    logoutClickListener: function () {
      const logoutBtn = this.parent.querySelector(".js-logout");
      if (logoutBtn) {
        logoutBtn.addEventListener("click", async () => {
          await logout();
          sessionStorage.removeItem("token");
          const login = Login(parentElement);
          login.render();
        });
      }
    },
  }
}
