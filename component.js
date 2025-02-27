let slides = [
    {   title: "IT & Support",
        bullets: ["Recruitment Pipeline", "Engagement Survey", "HR Requests", "Onboarding & Offboarding"],
        imgSrc: "images/wm-outline.webp",
        color: "#FF596D"
    },
    {   title: "Operations",
        bullets: ["Recruitment Pipeline", "Engagement Survey", "HR Requests", "Onboarding & Offboarding"],
        imgSrc: "images/wm-outline.webp",
        color: "#1F0F83"
    },
    {   title: "Creative & Design",
        bullets: ["Recruitment Pipeline", "Engagement Survey", "HR Requests", "Onboarding & Offboarding"],
        imgSrc: "images/wm-outline.webp",
        color: "#879AFF"
    },
    {   title: "Product & Software",
        bullets: ["Recruitment Pipeline", "Engagement Survey", "HR Requests", "Onboarding & Offboarding"],
        imgSrc: "images/wm-outline.webp",
        color: "#00CA72"
    },
    {   title: "HR & Recruiting",
        bullets: ["Recruitment Pipeline", "Engagement Survey", "HR Requests", "Onboarding & Offboarding"],
        imgSrc: "images/wm-outline.webp",
        color: "#673971"
    },
    {   title: "Marketing",
        bullets: ["Recruitment Pipeline", "Engagement Survey", "HR Requests", "Onboarding & Offboarding"],
        imgSrc: "images/wm-outline.webp",
        color: "#879AFF"
    },
    {   title: "Projects & Tasks",
        bullets: ["Recruitment Pipeline", "Engagement Survey", "HR Requests", "Onboarding & Offboarding"],
        imgSrc: "images/wm-outline.webp",
        color: "#6161FF"
    },
    {   title: "CRM & Sales",
        bullets: ["Recruitment Pipeline", "Engagement Survey", "HR Requests", "Onboarding & Offboarding"],
        imgSrc: "images/wm-outline.webp",
        color: "#24C4E6"
    },
  ]
document.addEventListener('DOMContentLoaded', function() {
    slideInitialGenerator()
  });
const slideInitialGenerator = () => {
    let array = document.getElementById("slide-container")
    let multiplier = 0
    for (let index = 0; index < slides.length; index++) {
        const element = slideGenerator(slides[index], multiplier);
        array.appendChild(element)
        multiplier++
    }

}
//left: ${(300*multi)+(12*multi)}px
const slideGenerator = (object, multi) => {
    let newSlide = document.createElement('div')
    newSlide.style = `background-color: ${object.color};`
    newSlide.className= "slide"
    let topSlide = document.createElement('div')
    topSlide.className= "top-slide"
    let bottomSlide = document.createElement('div')
    bottomSlide.className= "bottom-slide"
    newSlide.appendChild(topSlide)
    newSlide.appendChild(bottomSlide)
    //without hover
    //title
    let slideTitle = document.createElement('p')
    slideTitle.className = "slide-title"
    slideTitle.textContent = object.title
    topSlide.appendChild(slideTitle)
    //image
    let slideImage = document.createElement('img')
    slideImage.className = "slide-image"
    slideImage.src = object.imgSrc
    topSlide.appendChild(slideImage)
    //with hover
    //secondary title
    let recTitle = document.createElement('p')
    recTitle.className = "slide-title-underneath"
    recTitle.textContent = "Recommended Product"
    bottomSlide.appendChild(recTitle)
    //secondary image
    let slideImageUnderneath = document.createElement('img')
    slideImageUnderneath.className = "slide-image-underneath"
    slideImageUnderneath.src = object.imgSrc
    bottomSlide.appendChild(slideImageUnderneath)
    //bullet points
    let bulletContainer = document.createElement('div')
    bulletContainer.className = "slide-bullet-container"
    for (let index = 0; index < object.bullets.length; index++) {
        const element = document.createElement('p') 
        const checkbox = document.createElement('svg')
        checkbox.width = "12"
        checkbox.height = "12"
        checkbox.fill = "none"
        checkbox.viewBox = "0 0 14 14"
        const img = document.createElement('path')
        img.d = "M6.55491 13.1098C10.1751 13.1098 13.1098 10.1751 13.1098 6.55491C13.1098 2.93474 10.1751 0 6.55491 0C2.93474 0 0 2.93474 0 6.55491C0 10.1751 2.93474 13.1098 6.55491 13.1098ZM9.86117 5.0764C10.0949 4.76985 10.0358 4.33187 9.72927 4.09817C9.42271 3.86446 8.98474 3.92352 8.75103 4.23008L6.16635 7.62044L4.90602 6.10805C4.65924 5.81192 4.21912 5.7719 3.92299 6.01868C3.62685 6.26546 3.58684 6.70558 3.83362 7.00172L6.21491 9.85927L9.86117 5.0764Z"
        img.fill ="currentColor"
        checkbox.appendChild(img)
        element.appendChild(checkbox)
        element.textContent = `${object.bullets[index]}`
        element.className = "slide-bullets-underneath"
        bulletContainer.appendChild(element)
    }
    bottomSlide.appendChild(bulletContainer)
    // button
    let button = document.createElement('button')
    button.className = "slide-button-underneath"
    button.textContent = "Get Started"
    bottomSlide.appendChild(button)
    return newSlide
}
const carouselRight = () => {
    let array = document.getElementById("slide-container");
    let slides = array.children;
    for (let index = 0; index < slides.length; index++) {
        slides[index].style.transition = "transform 0.5s ease";
        slides[index].style.transform = "translateX(calc(200% + 17.5px))";
    }
    setTimeout(() => {
        array.prepend(array.removeChild(array.lastElementChild));
        array.prepend(array.removeChild(array.lastElementChild));
        for (let index = 0; index < slides.length; index++) {
            slides[index].style.transition = "none";
            slides[index].style.transform = "translateX(0)";  
        }
        setTimeout(() => {
            for (let index = 0; index < slides.length; index++) {
                slides[index].style.transition = "transform 0.5s ease";
            }
        }, 50);
    }, 500);
};

const carouselLeft = () => {
    let array = document.getElementById("slide-container");
    let slides = array.children;
    for (let index = 0; index < slides.length; index++) {
        slides[index].style.transition = "transform 0.5s ease";
        slides[index].style.transform = "translateX(calc(-200% - 17.5px))";
    }
    setTimeout(() => {
        array.appendChild(array.removeChild(array.firstElementChild));
        array.appendChild(array.removeChild(array.firstElementChild));
        for (let index = 0; index < slides.length; index++) {
            slides[index].style.transition = "none";
            slides[index].style.transform = "translateX(0)";  
        }
        setTimeout(() => {
            for (let index = 0; index < slides.length; index++) {
                slides[index].style.transition = "transform 0.5s ease";
            }
        }, 50);
    }, 500);
};




document.getElementById("carousel-right").addEventListener("click", carouselRight);
document.getElementById("carousel-left").addEventListener("click", carouselLeft);