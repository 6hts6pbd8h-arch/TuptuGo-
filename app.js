// ======================
// TUPTUGO MVP
// ======================

const startBtn = document.getElementById("startBtn");

if (startBtn) {
    startBtn.onclick = () => location.href = "dashboard.html";
}

// ----------------------
// DASHBOARD
// ----------------------

const citySearch = document.getElementById("citySearch");

async function openCity(city) {

    if (!city) return;

    localStorage.setItem("selectedCity", city);

    try {

        const response = await fetch(
            "https://nominatim.openstreetmap.org/search?format=json&q=" +
            encodeURIComponent(city)
        );

        const data = await response.json();

        if (data.length > 0) {

            localStorage.setItem("lat", data[0].lat);
            localStorage.setItem("lon", data[0].lon);

        }

    } catch (e) {
        console.log(e);
    }

    location.href = "city.html";

}

if (citySearch) {

    citySearch.addEventListener("keydown", e => {

        if (e.key === "Enter") {

            openCity(citySearch.value.trim());

        }

    });

}

document.querySelectorAll(".city-btn").forEach(btn => {

    btn.onclick = () => {

        openCity(btn.textContent.trim());

    };

});

// ----------------------
// CITY
// ----------------------

window.onload = async () => {

    const cityTitle = document.getElementById("cityTitle");

    if (!cityTitle) return;

    const city = localStorage.getItem("selectedCity") || "Warszawa";

    cityTitle.textContent = city;

    const lat = localStorage.getItem("lat");
    const lon = localStorage.getItem("lon");

    if (!lat || !lon) return;

    try {

        const response = await fetch(

            `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m`

        );

        const weather = await response.json();

        const weatherBox = document.getElementById("weather");

        if (weatherBox) {

            weatherBox.textContent =
                weather.current.temperature_2m + "°C";

        }

    } catch (e) {

        console.log(e);

    }

};