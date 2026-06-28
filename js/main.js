/* =========================
   KEERTI.AI PROFESSIONAL
========================= */

/* LOADER */

const loadingMessages = [
  "Initializing Portfolio...",
  "Loading Projects...",
  "Loading Experience...",
  "Preparing Interface...",
  "Welcome to KEERTI's PORT",
];

let loadingIndex = 0;

const loadingText = document.getElementById("loadingText");

const loadingInterval = setInterval(() => {
  if (loadingText) {
    loadingText.textContent = loadingMessages[loadingIndex];

    loadingIndex = (loadingIndex + 1) % loadingMessages.length;
  }
}, 800);

window.addEventListener("load", () => {
  setTimeout(() => {
    const loader = document.getElementById("loader");

    if (loader) {
      loader.style.opacity = "0";

      setTimeout(() => {
        loader.style.display = "none";
      }, 1000);
    }

    clearInterval(loadingInterval);
  }, 1800);
});

/* =========================
   DARK MODE
========================= */

const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      themeToggle.innerHTML = "☀️";
    } else {
      themeToggle.innerHTML = "🌙";
    }
  });
}

/* =========================
   AI ASSISTANT
========================= */

const aiPet = document.getElementById("aiPet");

const aiMessage = document.getElementById("aiMessage");

const aiReplies = [
  "Welcome to my portfolio 👋",

  "Explore my projects section 🚀",

  "Full Stack + AI is my focus 💻",

  "Don't forget to view my resume 📄",

  "Check my GitHub profile 🐙",

  "Let's connect on LinkedIn 💼",

  "Thanks for visiting ✨",
];

if (aiPet) {
  aiPet.addEventListener("click", () => {
    const randomReply = aiReplies[Math.floor(Math.random() * aiReplies.length)];

    aiMessage.innerHTML = randomReply;

    aiMessage.classList.add("show");

    setTimeout(() => {
      aiMessage.classList.remove("show");
    }, 3000);
  });
}

/* =========================
   SCROLL TO TOP
========================= */

const scrollBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

if (scrollBtn) {
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

/* =========================
   FADE IN ANIMATION
========================= */

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";

        entry.target.style.transform = "translateY(0)";
      }
    });
  },

  {
    threshold: 0.15,
  },
);

const animatedElements = document.querySelectorAll(
  ".glass-card, .skill-card, .project-card, .timeline-item",
);

animatedElements.forEach((item) => {
  item.style.opacity = "0";

  item.style.transform = "translateY(40px)";

  item.style.transition = "all .8s ease";

  observer.observe(item);
});

/* =========================
   ACTIVE NAV LINK
========================= */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;

    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

/* =========================
   HERO TYPING EFFECT
========================= */

const roleText = document.querySelector(".hero-role");

if (roleText) {
  const roles = ["MERN Stack Developer", "AI Engineer", "Problem Solver"];

  let roleIndex = 0;

  setInterval(() => {
    roleText.innerHTML = roles[roleIndex] + " <span>|</span> Web Developer";

    roleIndex = (roleIndex + 1) % roles.length;
  }, 2500);
}

/* =========================
   BUTTON MICRO ANIMATION
========================= */

const buttons = document.querySelectorAll(".btn-primary, .btn-secondary");

buttons.forEach((btn) => {
  btn.addEventListener("mouseenter", () => {
    btn.style.transform = "translateY(-4px) scale(1.03)";
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "translateY(0) scale(1)";
  });
});

/* =========================
   CONSOLE MESSAGE
========================= */

console.log(`

╔══════════════════════════╗
║      KEERTI.AI           ║
║ MERN Stack Developer     ║
║             ║
╚══════════════════════════╝

Thanks for visiting 🚀

`);
/* =========================
LOGO CLICK SCROLL
========================= */

const logo = document.querySelector(".logo");
const heroSection = document.getElementById("home");

if (logo && heroSection) {
    logo.style.cursor = "pointer";

    logo.addEventListener("click", () => {
        heroSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
}