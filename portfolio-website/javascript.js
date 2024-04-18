// Selectors

// Contact
const contactBtn = document.querySelector('.contact-btn')
const contactModal = document.querySelector('.contact-me-modal')

// See my projects
const seeMyProjectsBtn = document.querySelector('.see-projects-btn')
const seeMyProjectsModal = document.querySelector('.see-my-projects-modal')

const closeContactModalBtn = document.querySelector('.close-contact-modal')
const closeMyProjectsModalBtn = document.querySelector('.close-my-projects-modal')


// Event Listeners

contactBtn.addEventListener('click', function(){

    contactModal.style.display = 'block'

})

seeMyProjectsBtn.addEventListener('click', function(){

    seeMyProjectsModal.style.display = 'block'

})

closeContactModalBtn.addEventListener('click', function(){

    contactModal.style.display = 'none'
})

closeMyProjectsModalBtn.addEventListener('click', function(){

    seeMyProjectsModal.style.display = 'none'

})