const startBtn = document.getElementById("startBtn");

if (startBtn) {
    startBtn.onclick = () => {
        window.location.assign("./dashboard.html");
    };
}

const citySearch = document.getElementById("citySearch");

if (citySearch) {

    citySearch.addEventListener("keydown", (e) => {

        if (e.key === "Enter") {

            alert("Szukamy miasta: " + citySearch.value);

        }

    });

}

document.querySelectorAll(".city-btn").forEach(btn=>{

    btn.onclick=()=>{

        alert("Wybrano: "+btn.textContent);

    }

});