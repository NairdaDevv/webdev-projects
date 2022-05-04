const btn = document.getElementById("flip-button");
// const kolorek = document.getElementsByClassName("Aktualny")

btn.addEventListener("click", function getRandomColor(){
    var kolor = "#";
    var characters = "0123456789ABCDEF";
    for (i = 0; i<6; i++) {
    kolor += characters[Math.floor(Math.random()*characters.length)]
    }
    document.body.style.backgroundColor = kolor;
    document.querySelector('.Aktualny').textContent = kolor;
    });



