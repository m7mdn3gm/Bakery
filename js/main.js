// ====== Show And Hide Nav-Bar ======
const iconOpen = document.querySelector('.fa-bars-staggered');
iconOpen.addEventListener('click' , ()=>{
document.querySelector('.nav').classList.toggle('show');
});

// ====== Show Sites Demo ======
const openSites = document.getElementById("openSites");
const settingSites = document.querySelector(".setting");
openSites.addEventListener("click" , ()=>{
    settingSites.classList.toggle("show");
});

// ====== Navbar change and Scroll ======
var header = document.querySelector('.main nav');
var headerLogo = document.querySelector('.main nav .image img');
window.addEventListener("scroll" , ()=>{
    if (header != null) {
        if (scrollY >= 55){
            header.classList.add('light-animation');
            headerLogo.src = 'images/bakery-color.png';
        }else {
            header.classList.remove('light-animation');
            headerLogo.src = 'images/bakery-light-1.png';
        }
    }
});

// ====== Back top top ======
var backUp = document.getElementById("backTop");
backUp.addEventListener("click" , ()=>{
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});
window.addEventListener("scroll" , ()=>{
    if (scrollY >= 200){
        backUp.style.display = "flex";
    }else {
        backUp.style.display = "none";
    }
});

// ====== Counter Number Increase ======
const allBoxs = document.querySelectorAll('.counter .boxs .box h2');
allBoxs.forEach((item)=>{
    let startValue = 0;
    let endValue = item.dataset.counter;
    const counter = setInterval(() => {
        startValue++;
        item.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter);
        }
    },(1000 / endValue));
});

// ====== Change Color In Root ======
const colors = document.querySelectorAll('.setting .main .colors .color ');
const root = document.querySelector(":root");

if (localStorage.getItem("colors")) {
    root.style.setProperty("--maincolor" , localStorage.getItem("colors"));
}

colors.forEach((item)=>{
    item.addEventListener("click" , (e)=>{
        localStorage.setItem("colors" , e.target.dataset.color);
        root.style.setProperty("--maincolor" , localStorage.getItem("colors"));
    })
});

// ====== Open Image In Gallery ======
const image = Array.from(document.querySelectorAll(".gallery-main .mains .image"));
const model = document.querySelector(".model");
const imageChange = document.querySelector(".model .image-change ");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const close = document.querySelector("#closee");
let currentIndex;

image.forEach((item , index)=>{
    item.addEventListener("click" , (e)=>{
        model.style.display = "flex";
        let imagePath = e.target.parentElement.querySelector("img").getAttribute('src');
        imageChange.style.backgroundImage = `url(${imagePath})`;
        currentIndex = index;
    });
});

next.addEventListener("click" , nextImage);
function nextImage() {
    currentIndex++
    if (currentIndex == image.length) {
        currentIndex = 0;
    }
    let imagePath = image[currentIndex].querySelector("img").getAttribute('src');
    imageChange.style.backgroundImage = `url(${imagePath})`;
};

prev.addEventListener("click" , prevImage);
function prevImage() {
    currentIndex--
    if (currentIndex == -1 ) {
        currentIndex = image.length - 1;
    }
    let imagePath = image[currentIndex].querySelector("img").getAttribute('src');
    imageChange.style.backgroundImage = `url(${imagePath})`;

}

close.addEventListener("click" , closeImage);
function closeImage() {
    model.style.display = "none";
}

document.addEventListener("keyup" , (e)=>{
    if (e.code == "ArrowLeft") {
        prevImage();
    } else if (e.code == "ArrowRight") {
        nextImage();
    }else if (e.code == "Escape") {
        closeImage();
    }
});

model.addEventListener("click" , (e)=>{
    if (e.target.getAttribute("id") == "model") {
        closeImage();
    }
});