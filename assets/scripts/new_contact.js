import { createContact } from "./services/contacts_services.js"
import Main from "./main.js"

export default function NewContact(parentNode){
  return {
    parent: parentNode,
    render: function() {
      let html = `<header>
                    <h2>Create new Contact</h2>
                  </header>
                  <section class="inputs">
                    <form class="js-new-contact-form">
                      <input type="text" name="name" placeholder="Name"/>
                      <input type="number" name="number" placeholder="Number"/>
                      <input type="email" name="email" placeholder="Email"/>
                      <select name="relation">
                        <option value="Friends" selected>Friends</option>
                        <option value="Family">Family</option>
                        <option value="Work">Work</option>
                        <option value="Acquaintance">Acquaintance</option>
                      </select>
                      <input type="submit" hidden>
                    </form>
                  </section>
                  <footer>
                    <div  class="options">
                      <a href="">Cancel</a>
                      <a href="" id="js-create-contact">Save</a>
                    </div>
                  </footer>`;
      this.parent.innerHTML = html;
      this.contactFormSubmitListener();
    },
    contactFormSubmitListener: function () {
      const form = this.parent.querySelector(".js-new-contact-form");
      form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const { name, number, email, relation } = form;
        try {
          const newContact = await createContact({
            name: name.value,
            number: number.value,
            email: email.value,
            relation: relation.value
          });
          Main('.js-content').render();
        } catch (e) {
          alert(e);
          this.render();
        }
      });
    },
  }
}
