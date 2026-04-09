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
    // Google Forms submission
    // ============================================
    const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSe-K-F2vcDSnGV5sG3miH2qeJ48csBOTnnxpjSBMxJYLtF15w/formResponse";
    const GOOGLE_FIELDS = {
        prenom:    "entry.349062347",
        nom:       "entry.299678161",
        telephone: "entry.1030378852",
        vehicule:  "entry.1385620102",
        moment:    "entry.1688362165",
    };

    contactForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const submitBtn = contactForm.querySelector(".form-submit");
        submitBtn.disabled = true;
        submitBtn.textContent = "Envoi…";

        // Map our field names to Google Form entry IDs
        const params = new URLSearchParams();
        const data = new FormData(contactForm);
        for (const [name, entryId] of Object.entries(GOOGLE_FIELDS)) {
            params.append(entryId, data.get(name) || "");
        }

        try {
            // Google Forms blocks CORS responses, but the submission still goes through.
            // Using mode: "no-cors" so the fetch resolves successfully.
            await fetch(GOOGLE_FORM_URL, {
                method: "POST",
                mode: "no-cors",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: params.toString(),
            });
            contactForm.style.display = "none";
            successMsg.style.display = "block";
            setTimeout(closeModal, 2500);
        } catch (err) {
            alert("Erreur lors de l'envoi. Réessayez.");
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = "Envoyer";
        }
    });

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
