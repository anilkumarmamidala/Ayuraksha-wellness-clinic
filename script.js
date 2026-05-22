// ======================
// MOBILE MENU
// ======================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {

  menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

  });

  // Close menu when clicking links

  document.querySelectorAll(".nav-links a").forEach((link) => {

    link.addEventListener("click", () => {

      navLinks.classList.remove("active");

    });

  });

}


// ======================
// HERO SLIDER
// ======================

const slides = document.querySelectorAll(".hero-slide");

const heroText = document.getElementById("heroText");

const heroSub = document.getElementById("heroSub");

const heroData = [

  {
    title: "Natural Healing for a Healthy Life",

    sub:
      "Experience holistic wellness through Acupuncture, Sujok Therapy, Auricular Therapy, and Naturopathy."
  },

  {
    title: "Restore Balance Naturally",

    sub:
      "Personalized treatments focused on pain relief, stress management, and complete body wellness."
  },

  {
    title: "Holistic Wellness Starts Here",

    sub:
      "Improve your lifestyle with natural healing methods guided by experienced therapists."
  }

];

let current = 0;

// Run only if slides exist

if (slides.length > 0) {

  // Initial content

  if (heroText) {
    heroText.innerText = heroData[0].title;
  }

  if (heroSub) {
    heroSub.innerText = heroData[0].sub;
  }

  function updateHero() {

    // Remove active class

    slides.forEach((slide) => {

      slide.classList.remove("active");

    });

    // Next slide

    current++;

    if (current >= slides.length) {

      current = 0;

    }

    // Add active class

    slides[current].classList.add("active");

    // Update text

    if (heroText) {

      heroText.style.opacity = 0;

      setTimeout(() => {

        heroText.innerText = heroData[current].title;

        heroText.style.opacity = 1;

      }, 300);

    }

    if (heroSub) {

      heroSub.style.opacity = 0;

      setTimeout(() => {

        heroSub.innerText = heroData[current].sub;

        heroSub.style.opacity = 1;

      }, 300);

    }

  }

  // Auto Slide

  setInterval(updateHero, 5000);

}


// ======================
// FOOTER LOAD
// ======================

fetch("./footer.html")

  .then((response) => {

    if (!response.ok) {

      throw new Error("Footer not found");

    }

    return response.text();

  })

  .then((data) => {

    const footer = document.getElementById("footer");

    if (footer) {

      footer.innerHTML = data;

    }

  })

  .catch((error) => {

    console.log("Footer Error:", error);

  });

  // ======================
// header LOAD
// ======================

fetch("./header.html")

  .then((response) => {

    if (!response.ok) {

      throw new Error("header not found");

    }

    return response.text();

  })

  .then((data) => {

    const header = document.getElementById("header");

    if (header) {

      header.innerHTML = data;

    }

  })

  .catch((error) => {

    console.log("header Error:", error);

  });


// ======================
// EMAILJS INIT
// ======================

if (typeof emailjs !== "undefined") {

  emailjs.init("86oxutkeoWpA4yYZN");

}


// ======================
// CONTACT FORM
// ======================

const leadForm = document.getElementById("leadForm");

if (leadForm) {

  leadForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const params = {

      name:
        document.getElementById("name")?.value || "",

      phone:
        document.getElementById("phone")?.value || "",

      email:
        document.getElementById("email")?.value || "",

      message:
        document.getElementById("msg")?.value || ""

    };

    emailjs.send(

      "service_5sawhwh",
      "template_ch1ahob",
      params

    )

    .then(() => {

      alert("Message sent successfully!");

      leadForm.reset();

    })

    .catch((error) => {

      alert("Failed to send message");

      console.log(error);

    });

  });

}