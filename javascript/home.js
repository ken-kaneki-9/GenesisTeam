document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".side-bar").style.left = "0"
}
)
document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".side-bar").style.animation = "unfold 1s 1";
}
)
document.querySelector(".close-img").addEventListener("click", () => {
    document.querySelector(".side-bar").style.left = "-500px";
}
)


const slide1 = new Swiper('.coverfloweffect', {
    // Optional parameters
    effect: 'coverflow',
    centeredSlides: true,
    coverflowEffect: {
        rotate: 0,
        initialSlides: 2,
        speed: 200,
        slideShadows: false,
        modifier: 1,
        depth: 350,
        preventClicks: false,
    },

    loop: true,
    spaceBetween: 24,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
    },
    on: {
        click(event) {
            slide1.slideTo(this.clickedIndex);
        },
    },
    autoplay: {
        delay: 5000,
    },

});

var lastscrolltop = 0; {
    navbar = document.querySelector(".header");
    window.addEventListener("scroll", () => {
        var scrolltop = window.pageYOffset|| document.documentElement.scrolltop;
        if (scrolltop > lastscrolltop) {
            navbar.style.top = "-90px";
        }
        else {
            navbar.style.top = "0";
        }
        lastscrolltop = scrolltop
    })
}




//top destination

let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function () {
    let items = document.querySelectorAll('.monument-items')
    document.querySelector('.monument-slide').appendChild(items[0])
})

prev.addEventListener('click', function () {
    let items = document.querySelectorAll('.monument-items')
    document.querySelector('.monument-slide').prepend(items[items.length - 1]) // here the length of items = 6
})



// Where to travel

var btnLeft = document.getElementById('prev_btn');
var btnRight = document.getElementById('next_btn');

var slider = document.querySelector('.travel-container .slider');

btnRight.addEventListener('click', nextSlide);
function nextSlide() {
    slider.appendChild(slider.firstElementChild);
}

btnLeft.addEventListener('click', prevSlide);
function prevSlide() {
    slider.prepend(slider.lastElementChild);
}

function autoSlide() {
    deleteInterval = setInterval(timer, 4000);
    function timer() {
        nextSlide();
    }
}
autoSlide();

// Stop Auto Sliding When Mouse is Over
slider.addEventListener('mouseover', deleteAutoSliding);
btnRight.addEventListener('mouseover', deleteAutoSliding);
btnLeft.addEventListener('mouseover', deleteAutoSliding);

function deleteAutoSliding() {
    clearInterval(deleteInterval);
}

// Resume Auto Sliding When Mouse is Out
slider.addEventListener('mouseout', autoSlide);
btnRight.addEventListener('mouseout', autoSlide);
btnLeft.addEventListener('mouseout', autoSlide);