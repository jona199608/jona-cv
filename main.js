document.querySelector(".menu-btn").addEventListener("click", () => {
    document.querySelector(".menu").classList.toggle("show");
  });
  
const $form = document.querySelector('#form')
const $buttonMailito = document.querySelector('#mensajeria')

$form.addEventListener('submit',handLeSubmit)

function handLeSubmit(event){
  event.preventDefault()
  const form = new FormData(this)
  $buttonMailito.setAttribute('href',`mailto:subjona@gmail.com?subject= email ${form.get('email')} asunto ${form.get('text')}&body=  ${form.get('enviar')}`)
  $buttonMailito.click()
}


  // ScrollReveal().reveal('.showcase');
  // ScrollReveal().reveal('.news-cards', { delay: 500 });
  // ScrollReveal().reveal('.cards-banner-one', { delay: 500 });
  // ScrollReveal().reveal('.cards-banner-two', { delay: 500 });
  