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
          this.parent.innerHTML = NewContact();
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
    // contactFormSubmitListener: function () {
    //   const form = this.parent.querySelector(".js-NewContact");
    //   if (form) {
    //     form.addEventListener("submit", async (e) => {
    //       e.preventDefault();
    //       const { name, number, email, relation } = form;
    //       try {
    //         if (!name.value || number.length < 9) {
    //           throw new Error("El campo Note no test´ña llenado correctamente");
    //         }
    //         const newContact = await createContanewContact(
    //           name.value,
    //           number.value,
    //           email.value,
    //           relation.value
    //         );
    //         const contact = STORE.contacts;
    //         STORE[this.selectedOption] = categories.map((_category) => {
    //           if (_category.id === categoryId) {
    //             return {
    //               ..._category,
    //               transactions: [..._category.transactions, newTransaction],
    //             };
    //           }
    //           return _category;
    //         });
    //         this.selectedCategory = categoryId;
    //         this.render();
    //       } catch (e) {
    //         console.log(e);
    //         alert(e);
    //       }
    //     });
    //   }
    // },
  }
}
