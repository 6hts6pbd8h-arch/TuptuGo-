// START

const startBtn = document.getElementById("startBtn");

if (startBtn) {
    startBtn.onclick = () => {
        window.location.href = "dashboard.html";
    };
}

// WYBÓR MIASTA

document.querySelectorAll(".city-btn").forEach(btn => {

    btn.onclick = () => {

        const city = btn.textContent.trim();

        localStorage.setItem("selectedCity", city);

        window.location.href = "city.html";

    };

});

// WYSZUKIWARKA

const citySearch = document.getElementById("citySearch");

if (citySearch) {

    citySearch.addEventListener("keydown", e => {

        if (e.key === "Enter") {

            const city = citySearch.value.trim();

            if(city.length>0){

                localStorage.setItem("selectedCity", city);

                window.location.href = "city.html";

            }

        }

    });

}

// CITY PAGE

const cityTitle = document.getElementById("cityTitle");

if(cityTitle){

    const city = localStorage.getItem("selectedCity") || "Warszawa";

    cityTitle.textContent = city;

}