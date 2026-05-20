const buttons = document.querySelectorAll(".filters button");
const cards = document.querySelectorAll(".card");
buttons.forEach(button =>{
    button.addEventListener("click", () => {

        buttons.forEach(btn => btn.classList.remove("active")
    );

    button.classList.add("active");

    const filter = button.getAttribute("data-filter");
    cards.forEach(card => {
        if(filter == "all"){
            card.style.display = "block"; 
        }
        else{
            if(card.classList.contains(filter)){
                card.style.display = "block";
            }
            else{
                card.style.display = "none";
            }
        }
    });
    });
});

const galleryImages = document.querySelectorAll(".card img");

const lightbox = document.querySelector(".lightbox");

const lightboxImg = document.querySelector(".lightbox-img");

const closeBtn = document.querySelector(".close-btn");

const nextBtn = document.querySelector(".next-btn");

const prevBtn = document.querySelector(".prev-btn");

let visibleImages = [];
let currentImage = 0;

function updateVisibleImages() {

    visibleImages = [];

    cards.forEach(card => {

        if (card.style.display !== "none") {

            const img = card.querySelector("img");

            visibleImages.push(img);
        }
    });
}


galleryImages.forEach((img) => {
    img.addEventListener("click", () => {
        updateVisibleImages();
        currentImage = visibleImages.indexOf(img);
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
    });

});

closeBtn.addEventListener("click", ()=>{
    lightbox.style.display = "none"
});

nextBtn.addEventListener("click", () => {
    currentImage++;
    if(currentImage >= visibleImages.length){
        currentImage = 0;
    }
    lightboxImg.src = visibleImages[currentImage].src;
});

prevBtn.addEventListener("click", () => {
    currentImage--;
    if (currentImage < 0){
        currentImage = visibleImages.length - 1;
    }
    lightboxImg.src = visibleImages[currentImage].src;
});

lightbox.addEventListener("click",(e) => {
    if(
        e.target === lightbox
    ){
        lightbox.style.display = "none";    
    }
});

