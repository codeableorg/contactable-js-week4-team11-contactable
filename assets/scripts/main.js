export default function Main(parentElement){
  return{
    parent: document.querySelector(parentElement),
    render: function(){
      // let html = `
      // <header>
      //   <h3> Contactable</h3>
      //   <h4>CONTACTS(10)</h4>
      // </header>
      // <section>
      //   <div class="contacts__box">
      //     <div class="contact">
      //       <div class="contact__info">
      //         <img src="./assets/img/default.png" alt="">
      //         <p class="contact__name">Contacto1</p>
      //       </div>
      //       <div class="contact__star">
      //         <i class="material-icons">star_border</i>
      //       </div>
      //     </div>
      //   </div>
      // </section>
      // `;
    this.parent.innerHTML = html;
    }
  }
}