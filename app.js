const startBtn = document.getElementById("startBtn");

if(startBtn){

    startBtn.onclick=()=>{

        location.href="dashboard.html";

    }

}

document.querySelectorAll(".city-btn").forEach(btn=>{

    btn.onclick=()=>{

        location.href="city.html";

    }

});

const citySearch=document.getElementById("citySearch");

if(citySearch){

citySearch.addEventListener("keydown",e=>{

if(e.key==="Enter"){

location.href="city.html";

}

});

}