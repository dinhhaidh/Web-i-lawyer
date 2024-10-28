$(document).ready(function() {
    $('#nav-toggle').click(function(){
        $("#nav-menu").addClass("show-menu");
    })
    $('#nav-toggle').click(function(){
        $("#filter-container").addClass("show-menu");
    })
    $('#nav-close').click(function(){
        $("#nav-menu").removeClass("show-menu");
    })
    $('#filter-close').click(function(){
        $("#filter-container").removeClass("show-menu");
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
        if (sectionsClass !== null) {
            if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
                sectionsClass.classList.add('active-link')
            }else{
                sectionsClass.classList.remove('active-link')
            }      
        }
                                                     
    })
}
window.addEventListener('scroll', scrollActive)

let swiperBlog = new Swiper('.blog__swiper', {
    loop: true,
    spaceBetween: 22,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: false,
    // },

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
let swiperNewsletter = new Swiper('.newsletter__swiper', {
    loop: true,
    spaceBetween: 16,

    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: false,
    // },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        
        clickable: true,
    },
    breakpoints: {
        575: {
            slidesPerView: 2,
            spaceBetween: 16,
        }
    }
});

let swiperFaith = new Swiper('.faith__swiper', {
    loop: true,
    spaceBetween: 16,

    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: false,
    // },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        
        clickable: true,
    },
    breakpoints: {
        575: {
            slidesPerView: 2,
            spaceBetween: 16,
        }
    }
});


function toggleDropdown(dropdownId, header) {
    const dropdown = document.getElementById(dropdownId);
    const icon = header.querySelector('i');

    if (dropdown.style.display === "block") {
        dropdown.style.display = "none"; 
        icon.classList.remove('fa-chevron-up'); 
        icon.classList.add('fa-chevron-down');
    } else {
        dropdown.style.display = "block";
        icon.classList.remove('fa-chevron-down'); 
        icon.classList.add('fa-chevron-up');
    }
}

function toggleCities(checkbox) {
    const nestedCities = checkbox.closest('.dropdown-content').querySelector('.nested-cities');

    if (checkbox.checked) {
        nestedCities.style.display = "block"; 
        const noCheckBoxes = nestedCities.querySelectorAll('.no-check');
        noCheckBoxes.forEach(cb => {
            cb.checked = false; 
        });

        const checkedBoxes = nestedCities.querySelectorAll('.checked');
        checkedBoxes.forEach(cb => {
            cb.checked = true; 
        });
    } else {
        nestedCities.style.display = "none"; 
    }
}