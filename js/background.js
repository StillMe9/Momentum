const images = [
    "0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg"
];

let chosenImage = images[[Math.floor(Math.random() * images.length)]];

//const bgImage = document.createElement("img");
//const bgContainer = document.createElement("div");

document.body.style.backgroundImage = `url('img/${chosenImage}')`;
document.body.style.backgroundSize = `cover`;
document.body.style.backgroundRepeat = `no-repeat`;


//bgImage.src = `img/${chosenImage}`;
//bgImage.classList.add("bg-image");

//bgContainer.appendChild(bgImage);
