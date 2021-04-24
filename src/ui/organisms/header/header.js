document.addEventListener(
  'DOMContentLoaded',
  () => {
    const menu = document.querySelector('.menu')
    window.addEventListener('scroll', function () {
      if (window.pageYOffset > 100) {
        // console.log(`object`, window.pageYOffset)
        menu.style.position = 'fixed'
        menu.style.zIndex = 1
        // menu.classList.add('menunho')
        //logo.classList.add("maulogo");
      } else {
        menu.style.position = ''

        // menu.classList.remove('menunho')
      }
    })
  },
  false
)
