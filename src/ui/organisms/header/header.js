document.addEventListener('DOMContentLoaded', () => {
  var menu = document.querySelector('.menu')
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 150) {
      menu.classList.add('fixed')
    } else {
      menu.classList.remove('fixed')
    }
  })
})
