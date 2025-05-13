// Tüm resimleri seç
const images = document.querySelectorAll(".photo img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

// Resme tıklanınca büyük aç
images.forEach((img) => {
  img.addEventListener("click", () => {
    lightbox.classList.remove("hidden");
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
  });
});

// Kapatma butonu
closeBtn.addEventListener("click", () => {
  lightbox.classList.add("hidden");
});

// Dışarı tıklayınca kapansın
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.classList.add("hidden");
  }
});

const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const msg = document.getElementById("message").value.trim();

  if (name === "" || email === "" || msg === "") {
    message.style.color = "red";
    message.textContent = "Lütfen tüm alanları doldurun.";
  } else {
    // Gerçek projelerde burada verileri bir sunucuya gönderirsin.
    message.style.color = "green";
    message.textContent = "Mesajınız başarıyla gönderildi!";

    // Alanları temizle
    form.reset();
  }
});
