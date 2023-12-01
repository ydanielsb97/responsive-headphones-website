/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== HANDLE SCROLL ===============*/
const header = document.getElementById('header')
const scrollUpBtn = document.getElementById('scroll-up')
const sections = document.querySelectorAll('section[id]')

const scrollUp = () =>{
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUpBtn.classList.add('show-scroll')
						: scrollUpBtn.classList.remove('show-scroll')
}

const blurHeader = () =>{
    this.scrollY >= 50 ? header.classList.add('blur-header') 
                       : header.classList.remove('blur-header')
}
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
const handlerScroll = () => {
    blurHeader()
    scrollUp()
    scrollActive()
}
window.addEventListener('scroll', handlerScroll)


/*=============== SWIPER FAVORITES ===============*/ 
let swiperFavorite = new Swiper('.favorite__swiper', {
    loop: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',
    grabCursor: true,

    breakpoints: {
        768: {
            slidesPerView: 3
        }
    }
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal('.home__social, .favorite__container, .sponsor__container, .footer')
sr.reveal('.home__title span:nth-child(1)', { origin: 'left', opacity: 1})
sr.reveal('.home__title span:nth-child(3)', { origin: 'right', opacity: 1})
sr.reveal('.home__tooltip, .home__button, .model__button', {origin: 'bottom'})
sr.reveal('.about__data', {origin: 'left'})
sr.reveal('.about__img, .model__tooltip', {origin: 'right'})