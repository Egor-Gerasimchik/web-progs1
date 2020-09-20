function car(event) {
    if (event.keycode == 50) {
        let imgC = document.createElement("img");
        imgC.src = "https://www.dsf.my/wp-content/uploads/2017/04/volvo-244.jpg";
        imgC.style.width = "400px";
        imgC.style.height = "300px";
        imgC.style.borderRadius = "30%";
        document.body.appendChild(imgC);
        imgC.addEventListener("keyup", car);
        imgC.style.border = "2px solid red";
        let textC = document.createElement("div");
        textC.innerHTML = "Я врум-врум Машина";
    }
}

function locomotive(event) {
    if (event.keycode == 97) {
        let imgP = document.createElement("img");
        imgP.src = "https://avatars.mds.yandex.net/get-zen_doc/1945957/pub_5cd139da9f819900af73eb55_5cf3a0f76d7d5700afcba314/scale_1200";
        imgP.style.width = "400px";
        imgP.style.height = "300px";
        imgP.style.border = "2px solid red";
        imgP.style.borderRadius = "30%";
        document.addEventListener("keydown", locomotive);
        document.body.appendChild(imgP);
        let textC = document.body.createElement("div");
        textC.innerHTML = "Я ту-ту Поезд";
    }
}