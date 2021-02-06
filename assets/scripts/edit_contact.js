export default function EditContact(){
  return `
          <header>
          <h2>Edit Contact</h2>
        </header>
        <section class="inputs">
          <form class="js-editContact">
            <input type="text" name="name" placeholder="Name"/>         
            <input type="number" name="email" placeholder="Number"/>         
            <input type="email" name="email" placeholder="Email"/>         
            <select name="relation" form=".newContact-js">
              <option disabled selected>Relation</option>
              <option value="family">Family</option>
              <option value="friends">Friends</option>
              <option value="work">Work</option>
              <option value="acquaintance">Acquaintance</option>
            </select>
          </form>
        </section>       
        <footer>
          <div  class="options">
            <a href="">Cancel</a>
            <a id="js-update-contact" href="">Save</a>
          </div>
        </footer>`;
}



