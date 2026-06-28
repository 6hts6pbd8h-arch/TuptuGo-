// ==========================
// TUPTUGO MVP
// ==========================

console.log("TuptuGo uruchomione");

// --------------------------
// START
// --------------------------

const startBtn = document.getElementById("startBtn");

if (startBtn) {
    startBtn.onclick = () => {
        location.href = "dashboard.html";
    };
}

// --------------------------
// OTWIERANIE MIASTA
// --------------------------

async function openCity(city) {

    if (!city || city.trim() === "") return;

    city = city.trim();

    localStorage.setItem("selectedCity", city);

    try {

        const response = await fetch(
            `https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${encodeURIComponent(city)}`
        );

        const data = await response.json();

        if (data.length > 0) {

            localStorage.setItem("lat", data[0].lat);
            localStorage.setItem("lon", data[0].lon);
            localStorage.setItem("country", data[0].display_name);

        }

    } catch (error) {

        console.error(error);

    }

    location.href = "city.html";

}

// --------------------------
// DASHBOARD
// --------------------------

const citySearch = document.getElementById("citySearch");

if (citySearch) {

    citySearch.addEventListener("keydown", e => {

        if (e.key === "Enter") {

            openCity(citySearch.value);

        }

    });

}

document.querySelectorAll(".city-btn").forEach(btn => {

    btn.addEventListener("click", () => {

        openCity(btn.textContent);

    });

});

// --------------------------
// CITY PAGE
// --------------------------

window.addEventListener("load", async () => {

    const cityTitle = document.getElementById("cityTitle");

    if (!cityTitle) return;

    const city = localStorage.getItem("selectedCity") || "Warszawa";

    cityTitle.textContent = city;

    const weatherBox = document.getElementById("weather");
    const locationInfo = document.getElementById("locationInfo");

    const lat = localStorage.getItem("lat");
    const lon = localStorage.getItem("lon");
    const country = localStorage.getItem("country");

    if (locationInfo) {

        locationInfo.innerHTML = `
            ${country || ""}
            <br><br>
            🌍 ${lat || "-"}, ${lon || "-"}
        `;

    }

    if (!lat || !lon || !weatherBox) return;

    try {

        const response = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code`
        );

        const weather = await response.json();

        weatherBox.textContent =
            `${weather.current.temperature_2m}°C`;

    } catch (error) {

        weatherBox.textContent = "Nie udało się pobrać pogody.";

        console.error(error);

    }

});

// --------------------------
// AI
// --------------------------

const sendPrompt = document.getElementById("sendPrompt");

if (sendPrompt) {

    sendPrompt.onclick = () => {

        const prompt = document.getElementById("prompt").value;

        if (!prompt) return;

        alert("AI MVP\n\n" + prompt);

    };

}
// --------------------------
// ENTER W AI
// --------------------------

const promptInput = document.getElementById("prompt");

if (promptInput) {

    promptInput.addEventListener("keydown", e => {

        if (e.key === "Enter") {

            sendPrompt.click();

        }

    });

}
// --------------------------
// AI BUTTON
// --------------------------

const aiButton = document.querySelector(".ai-button");

if (aiButton) {

    aiButton.addEventListener("click", () => {

        location.href = "ai.html";

    });

}