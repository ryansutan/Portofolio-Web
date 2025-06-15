// ------------------------------
// Banner Slide 
// ------------------------------
let indexBanner = 0;

function nextBanner() {
    indexBanner += 1;
    showBanner();
}

function showBanner() {
    const listImage = document.getElementsByClassName("banner-img");

    if (indexBanner > listImage.length - 1) {
        indexBanner = 0;
    }

    for (let i = 0; i < listImage.length; i++) {
        listImage[i].style.display = "none";
    }

    listImage[indexBanner].style.display = "block";
}

setInterval(nextBanner, 3000);



// Icon Nav
function toggleMenu() {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("show");
}
