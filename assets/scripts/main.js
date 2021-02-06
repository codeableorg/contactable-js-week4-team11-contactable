import Contacts from "./contacts.js";
import { logout } from "./services/sessions_service.js";
import Login from "./login.js";
import STORE from "./store.js";
import NewContact from "./new_contact.js";


export default function Main(parentElement){
  return{
    parent: document.querySelector(parentElement),
    render: async function(){
      let html = await Contacts();
      this.parent.innerHTML = html;
      this.logoutClickListener();
      this.newContactClickListener();
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
