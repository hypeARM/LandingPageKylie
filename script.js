const menuBtn = document.getElementById('menu-btn')
const menuMobile = document.getElementById('menu-mobile')

let menuOpen = false

menuBtn.addEventListener('click', () => {
  menuOpen = !menuOpen

  if (menuOpen) {
    menuBtn.classList.add('active')
    menuMobile.classList.remove('max-h-0', 'opacity-0', 'invisible')
    menuMobile.classList.add('max-h-screen', 'opacity-100', 'visible')
  } else {
    menuBtn.classList.remove('active')
    menuMobile.classList.remove('max-h-screen', 'opacity-100', 'visible')
    menuMobile.classList.add('max-h-0', 'opacity-0', 'invisible')
  }
})

const topBtn = document.getElementById('js-top')

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    topBtn.classList.remove('hidden')
  } else {
    topBtn.classList.add('hidden')
  }
})

topBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
})
