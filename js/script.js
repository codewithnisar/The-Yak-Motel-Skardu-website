/**
 * The Yak Motel Skardu & The Grind Cafe — Main Script
 */

const cafeMenuData = [
  {
    id: "coffee",
    num: "01",
    title: "Coffee & Tea",
    desc: "Artisan roasted coffee and traditional local mountain teas.",
    items: [
      { name: "Espresso (Single / Double)", price: "PKR 450" },
      { name: "Americano (Hot / Iced)", price: "PKR 550" },
      { name: "Cappuccino / Latte", price: "PKR 650" },
      { name: "Caramel Macchiato", price: "PKR 750" },
      { name: "Traditional Skardu Salt Tea (Chai)", price: "PKR 350" }
    ]
  },
  {
    id: "breakfast",
    num: "02",
    title: "Breakfast",
    desc: "Hearty breakfasts to power your mountain adventures.",
    items: [
      { name: "Desi Pakistani Breakfast (Paratha, Eggs, Karak Chai)", price: "PKR 950" },
      { name: "Continental Breakfast (Toast, Eggs, Jam, Coffee)", price: "PKR 1,100" },
      { name: "Pancake Stack with Maple Syrup", price: "PKR 850" }
    ]
  },
  {
    id: "mains",
    num: "03",
    title: "Main Course",
    desc: "Fresh Karahis, steaks, and comforting warm dishes.",
    items: [
      { name: "Skardu Special Yak Karahi", price: "PKR 2,400" },
      { name: "Chicken Handi / Karahi (with Naan)", price: "PKR 1,800" },
      { name: "Grilled Chicken Steak with Fries", price: "PKR 1,650" },
      { name: "Club Sandwich with Fries", price: "PKR 950" }
    ]
  },
  {
    id: "desserts",
    num: "04",
    title: "Desserts & Drinks",
    desc: "Sweet mountain moments and cold refreshments.",
    items: [
      { name: "Warm Skardu Apple Pie with Ice Cream", price: "PKR 650" },
      { name: "Sizzling Chocolate Brownie", price: "PKR 750" },
      { name: "Fresh Mint Lemonade", price: "PKR 450" }
    ]
  }
];

// Cafe Menu Renderer
const tabs = document.querySelector("#cafeTabs");
const content = document.querySelector("#cafeContent");

function renderCafeMenu(active = "coffee") {
  if (!tabs || !content) return;

  tabs.innerHTML = cafeMenuData
    .map(
      (x) =>
        `<button class="menu-tab ${x.id === active ? "active" : ""}" data-id="${x.id}">
          <small>${x.num}</small>${x.title}
        </button>`
    )
    .join("");

  const x = cafeMenuData.find((i) => i.id === active);

  content.innerHTML = `
    <div class="menu-title">
      <div>
        <div class="eyebrow gold">${x.num}</div>
        <h3>${x.title}</h3>
      </div>
      <p class="menu-description">${x.desc}</p>
    </div>
    ${x.items
      .map(
        (i) =>
          `<div class="menu-item">
            <span>${i.name}</span>
            <span style="color: #B68A57; font-weight: 600;">${i.price}</span>
          </div>`
      )
      .join("")}`;

  tabs.querySelectorAll("button").forEach((b) => {
    b.onclick = () => renderCafeMenu(b.dataset.id);
  });
}

renderCafeMenu();

// Mobile Navigation Toggle
const toggleBtn = document.querySelector("#menuToggleBtn");
const mobileMenu = document.querySelector("#mobileMenuDrawer");
const mobileCloseBtn = document.querySelector("#mobileCloseBtn");

function closeMobileMenu() {
  if (mobileMenu) {
    mobileMenu.classList.remove("open");
    mobileMenu.setAttribute("aria-hidden", "true");
  }
  if (toggleBtn) {
    toggleBtn.classList.remove("active");
    toggleBtn.setAttribute("aria-expanded", "false");
  }
}

if (toggleBtn && mobileMenu) {
  toggleBtn.onclick = () => {
    const isOpen = mobileMenu.classList.toggle("open");
    toggleBtn.classList.toggle("active", isOpen);
    toggleBtn.setAttribute("aria-expanded", isOpen);
    mobileMenu.setAttribute("aria-hidden", !isOpen);
  };
}

if (mobileCloseBtn) {
  mobileCloseBtn.onclick = closeMobileMenu;
}

document.querySelectorAll(".mobile-links a, #mobileMenuDrawer .btn").forEach((a) => {
  a.onclick = closeMobileMenu;
});

// Scroll Reveal
const observer = new IntersectionObserver(
  (entries) =>
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("visible");
    }),
  { threshold: 0.1 }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// Modal Booking Popup
const modal = document.querySelector("#bookingModal");
const closeBtn = document.querySelector("#modalCloseBtn");
const resRoomSelect = document.querySelector("#resRoom");
const form = document.querySelector("#reservationForm");

document.querySelectorAll(".open-modal-btn").forEach((btn) => {
  btn.onclick = (e) => {
    e.preventDefault();
    closeMobileMenu();
    const room = btn.getAttribute("data-room");
    if (resRoomSelect && room) {
      resRoomSelect.value = room;
    }
    if (modal) modal.classList.add("open");
  };
});

if (closeBtn && modal) {
  closeBtn.onclick = () => modal.classList.remove("open");
  modal.onclick = (e) => {
    if (e.target === modal) modal.classList.remove("open");
  };
}

if (form) {
  form.onsubmit = (e) => {
    e.preventDefault();
    const name = document.querySelector("#resName").value;
    const phone = document.querySelector("#resPhone").value;
    const room = document.querySelector("#resRoom").value;
    const date = document.querySelector("#resDate").value;

    const msg = `Hello The Yak Motel Skardu! I would like to book a stay:\n- Name: ${name}\n- Phone: ${phone}\n- Room: ${room}\n- Date: ${date}`;
    window.open(`https://wa.me/923554244965?text=${encodeURIComponent(msg)}`, "_blank");
    modal.classList.remove("open");
  };
}

// Copyright Year
const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();
