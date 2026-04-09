document.addEventListener("DOMContentLoaded", () => {
    const catalog = document.getElementById("catalog");
    const counter = document.getElementById("counter");
    
    // Build cards
    cars.forEach((car) => {
        const slide = document.createElement("div");
        slide.className = "swiper-slide";

        const statusLabel = "Disponible";

        const equipmentHTML = car.equipment
            ? car.equipment.map(e => `<li>${e}</li>`).join("")
            : "";

        slide.innerHTML = `
            <div class="car-card">
                <div class="car-image-wrapper">
                    <img src="${car.image}" alt="${car.name}" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22260%22><rect fill=%22%23222%22 width=%22400%22 height=%22260%22/><text fill=%22%23555%22 x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-size=%2218%22>No Image</text></svg>'">
                    <span class="badge available">${statusLabel}</span>
                    <span class="tag-badge">${car.tag}</span>
                </div>
                <div class="car-info">
                    <div class="car-name">${car.name}</div>
                    <div class="car-category">${car.category}</div>
                    <div class="car-details">
                        <span class="detail"><span class="detail-icon">&#9889;</span> ${car.fuel}</span>
                        <span class="detail"><span class="detail-icon">&#9881;</span> ${car.transmission}</span>
                        <span class="detail"><span class="detail-icon">&#128663;</span> ${car.consumption}</span>
                        <span class="detail"><span class="detail-icon">&#128186;</span> ${car.seats} places</span>
                    </div>
                    <div class="car-price">${car.price}</div>
                    <ul class="car-equipment">${equipmentHTML}</ul>
                    <p class="car-description">${car.description}</p>
                    <button type="button" class="contact-btn" data-car="${car.name}">Je suis intéressé</button>
                </div>
            </div>
        `;

        catalog.appendChild(slide);
    });

    // ============================================
    // Contact form modal
    // ============================================
    const overlay = document.getElementById("modal-overlay");
    const closeBtn = document.getElementById("modal-close");
    const vehiculeField = document.getElementById("vehicule-field");
    const contactForm = document.getElementById("contact-form");
    const successMsg = document.getElementById("form-success");

    function openModal(carName) {
        vehiculeField.value = carName || "";
        overlay.classList.add("active");
        contactForm.style.display = "";
        successMsg.style.display = "none";
        contactForm.reset();
        vehiculeField.value = carName || "";
    }

    function closeModal() {
        overlay.classList.remove("active");
    }

    // Open modal on contact button click
    catalog.addEventListener("click", (e) => {
        const btn = e.target.closest(".contact-btn");
        if (btn) {
            e.stopPropagation();
            openModal(btn.dataset.car);
        }
    });

    closeBtn.addEventListener("click", closeModal);
    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) closeModal();
    });
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeModal();
    });

    // ============================================
    // Google Forms submission via hidden iframe
    // The form posts directly via the browser to a hidden iframe,
    // which avoids CORS issues and works exactly like a standard form post.
    // ============================================
    let isSubmitting = false;
    const submitBtn = contactForm.querySelector(".form-submit");

    contactForm.addEventListener("submit", () => {
        // Let the native form submission happen via the iframe target.
        // We just update the UI here.
        isSubmitting = true;
        submitBtn.disabled = true;
        submitBtn.textContent = "Envoi…";
    });

    // Called when the hidden iframe finishes loading after the POST.
    // Google's response is opaque to us, but iframe load = submission completed.
    window.googleFormSubmitted = function () {
        if (!isSubmitting) return; // ignore initial blank load
        isSubmitting = false;
        contactForm.style.display = "none";
        successMsg.style.display = "block";
        submitBtn.disabled = false;
        submitBtn.textContent = "Envoyer";
        setTimeout(closeModal, 2500);
    };

    // Init Swiper
    const swiper = new Swiper(".swiper", {
        effect: "cards",
        grabCursor: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        on: {
            slideChange: updateCounter,
        },
    });

    function updateCounter() {
        counter.textContent = `${swiper.activeIndex + 1} / ${cars.length}`;
    }

    updateCounter();
});
