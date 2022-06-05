// template_umexvj9
// service_q7kgmep
// 4iT490rib3xDkF16j

function contact(event) {
event.preventDefault();
const loading = document.querySelector('.modal__overlay--loading')
const success = document.querySelector('.modal__overlay--success')
loading.classList += " modal__overlay--visible"
 emailjs
  .sendForm(
      'service_q7kgmep',
      'template_umexvj9',
      event.target,
      '4iT490rib3xDkF16j'
  ).then(() => {
    loading.classList.remove("modal__overlay--visible")
    success.classList += " modal__overlay--visible"
  }).catch(() => {
    loading.classList.remove("modal__overlay--visible")
    alert (
        "The email service is temporarily unavailable. Please contact me directly at haaris.malik416@gmail.com"  
    )
  })
}

let isModalOpen = false
function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = true
    document.body.classList += " modal--open"
}