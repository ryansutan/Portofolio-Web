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

// ------------------------------
// Validasi Form (tunggu DOM siap)
// ------------------------------
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contactForm").addEventListener("submit", function (e) {
        e.preventDefault();
        let valid = true;

        const nameField = document.getElementById("name");
        const emailField = document.getElementById("email");
        const phoneField = document.getElementById("phone");
        const messageField = document.getElementById("message");

        const name = nameField.value.trim();
        const email = emailField.value.trim();
        const phone = phoneField.value.trim();
        const message = messageField.value.trim();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^\d{10,13}$/;

        // Reset error messages
        const errorMessages = document.querySelectorAll(".error-message");
        errorMessages.forEach(el => el.textContent = "");

        // Nama
        if (name === "") {
            nameField.nextElementSibling.textContent = "Harap diisi.";
            valid = false;
        }

        // Email
        if (email === "") {
            emailField.nextElementSibling.textContent = "Harap diisi.";
            valid = false;
        } else if (!emailRegex.test(email)) {
            emailField.nextElementSibling.textContent = "Format email tidak valid.";
            valid = false;
        }

        // Telepon
        if (phone === "") {
            phoneField.nextElementSibling.textContent = "Harap diisi.";
            valid = false;
        } else if (!phoneRegex.test(phone)) {
            phoneField.nextElementSibling.textContent = "Nomor telepon tidak valid.";
            valid = false;
        }

        // Pesan
        if (message === "") {
            messageField.nextElementSibling.textContent = "Harap diisi.";
            valid = false;
        } else if (message.length < 10) {
            messageField.nextElementSibling.textContent = "Pesan minimal 10 karakter.";
            valid = false;
        }

        if (valid) {
            document.getElementById("out-name").textContent = name;
            document.getElementById("out-email").textContent = email;
            document.getElementById("out-phone").textContent = phone;
            document.getElementById("out-message").textContent = message;
        }
    });
});

// Icon Nav
function toggleMenu() {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("show");
}
