const nav_links = document.querySelectorAll('#menu ul a.link')
const button = document.getElementById('theme-button')
const body = document.body

const saved_theme = localStorage.getItem('theme')
dark_theme(saved_theme === 'dark')

function dark_theme(type) {
  if (type == true) {
    body.classList.add('dark')
    button.innerHTML = '<i class="fa-solid fa-sun"></i>'
  } else {
    body.classList.remove('dark')
    button.innerHTML = '<i class="fa-solid fa-moon"></i>'
  }
}


button.addEventListener('click', () => {
  const is_dark = body.classList.toggle('dark')
  dark_theme(is_dark)
  localStorage.setItem('theme', is_dark ? 'dark' : 'white')
})


nav_links.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault()
    
    const target = document.querySelector(this.getAttribute('href'))
    
    if (target) {
      const header_height = document.querySelector('header').offsetHeight
      const target_position = target.offsetTop - header_height - 20
      
      window.scrollTo({
        top: target_position,
        behavior: 'smooth'
      })
    }
  })
})