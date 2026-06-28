
console.log("TuptuGo uruchomione");

// START

const startBtn = document.getElementById("startBtn");

if (startBtn) {
    startBtn.onclick = () => {
        location.href = "dashboard.html";
    };
}

// DASHBOARD

const citySearch = document.getElementById("citySearch");

if (citySearch) {

    citySearch.addEventListener("keypress", function (e) {

        if (e.key === "Enter") {

            const city = citySearch.value.trim();

            console.log("Wybrane:", city);

            if (city !== "") {

                localStorage.setItem("selectedCity", city);

                location.href = "city.html";

            }

        }

    });

}

document.querySelectorAll(".city-btn").forEach(btn => {

    btn.onclick = function () {

        const city = btn.textContent.trim();

        localStorage.setItem("selectedCity", city);

        location.href = "city.html";

    };

});

// CITY

window.addEventListener("load", function () {

    const title = document.getElementById("cityTitle");

    if (title) {

        const city = localStorage.getItem("selectedCity");

        console.log("Miasto z pamięci:", city);

        if (city) {

            title.textContent = city;

        }

    }

});