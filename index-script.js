const slides = document.querySelectorAll(".hero-main")
var counter = 0;

slides.forEach(
    (slide, index) => {
        slide.style.left = `${index * 100}%`
    }
)

const goPrev = () => {
    if (counter == 0) {
        counter = 5
        slideImage()
    }
    if (counter != 0) {
        counter--
        console.log(counter)
        slideImage()
    }
}

const goNext = () => {
    if (counter == 4    ) {
        counter = 0
        slideImage()
    }
    if (counter < slides.length - 1) {
        counter++
        console.log(counter)
        slideImage()
    }
}

const slide1 = () => {
    counter = 0;
    slideImage()
}

const slide2 = () => {
    counter = 1;
    slideImage()
}

const slide3 = () => {
    counter = 2;
    slideImage()
}

const slide4 = () => {
    counter = 3;
    slideImage()
}

const slide5 = () => {
    counter = 4;
    slideImage()
}

const slideImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`
        }
    )
}

const arrivals = document.querySelectorAll(".arrival-product")
var counter2 = 0;

const nextSlide = () => {
    if (counter2 < 4) {
        counter2++
        arrivals.forEach(
            (slide) => {
                slide.style.transform = `translateX(-${counter2 * 101}%)`
            }
        )
    }
}

const prevSlide = () => {
    if (counter2 > 0 ) {
        counter2--
        arrivals.forEach(
            (slide) => {
                slide.style.transform = `translateX(-${counter2 * 101}%)`
            }
        )
    }
}

function showCategories() {
    document.getElementById("category").classList.add("selected")
    document.getElementById("brand").classList.remove("selected")
    document.querySelector(".brands").style.display = 'none'
    document.querySelector(".category").style.display = 'flex'
}

function showBrands() {
    document.getElementById("brand").classList.add("selected")
    document.getElementById("category").classList.remove("selected")
    document.querySelector(".brands").style.display = 'flex'
    document.querySelector(".category").style.display = 'none'
}