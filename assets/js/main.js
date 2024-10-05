$(document).ready(function() {
    $('#nav-toggle').click(function(){
        $("#nav-menu").addClass("show-menu");
    })
    $('#nav-close').click(function(){
        $("#nav-menu").removeClass("show-menu");
    })
    $('.nav__link').click(function(){
        $("#nav-menu").removeClass("show-menu");
    })

    $(window).scroll(function(){
        $("#header").toggleClass("shadow-header", $(this).scrollTop() >= 50);
        $("#scroll-up").toggleClass("show-scroll", $(this).scrollTop() >= 350);
    })

    
})

const sections = document.querySelectorAll('section[id]')
    
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
window.addEventListener('scroll', scrollActive)

let swiperNew = new Swiper('.blog__swiper', {
    loop: true,
    spaceBetween: 16,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        
        clickable: true,
    },
    breakpoints: {


        1150: {
            slidesPerView: 3,
        }
    }
});