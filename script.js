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

                </div>
            </div>
        `;

        catalog.appendChild(slide);
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
