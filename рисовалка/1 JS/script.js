let colors = ["white", "black", "red", "yellow", "blue", "green"];

let div = document.createElement("div");
div.id = "pallete";
div.style.display = "flex";
document.body.appendChild(div);
pallete.style.marginLeft = (window.innerWidth / 2) - ((colors.length * 50) / 2) + "px";




for (i = 0; i < colors.length; i++) {
    let divr = document.createElement("div");
    divr.id = colors[i];
    divr.style.height = "50px";
    divr.style.width = "50px";
    divr.style.border = "1px solid black"
    divr.style.borderRadius = "100%";
    divr.style.backgroundColor = colors[i];

    pallete.appendChild(divr);
}

let canvas = document.createElement("canvas");
canvas.id = "field";
canvas.style.border = "2px solid black";
canvas.width = window.innerWidth / 2;
canvas.length = window.innerHeight * 0.8;
canvas.style.marginLeft = (window.innerWidth / 2) - (canvas.width / 2) + "px";


document.body.appendChild(canvas);

let color = "black";
let brushSize = 2;

let prevX = prevY = 0;
let currX = currY = 0;

let isDraw = false;

for (i = 0; i < colors.length; i++) {
    document.getElementById(colors[i]).addEventListener("click", function (event) {
        color = event.target.id;
        console.log(color);
        for (i = 0; i < colors.length; i++) {
            document.getElementById(colors[i]).style.width = "50px"
            document.getElementById(colors[i]).style.height = "50px"
        }
        event.target.style.width = "75px";
        event.target.style.height = "75px";
    })

}

document.addEventListener("mouseup", function (event) {
    isDraw = false;
});
canvas.addEventListener("mousedown", function (event) {
    isDraw = true;
    prevX = event.offsetX;
    prevY = event.offsetY;
    currX = event.offsetX;
    currY = event.offsetY;
});
canvas.addEventListener("mouseout", function (event) {
    if (isDraw == true) {
        prevX = currX;
        prevY = currY;
        currX = event.offsetX;
        currY = event.offsetY;
    }


});
canvas.addEventListener("mousemove", function (event) {
    if (isDraw == true) {
        prevX = currX;
        prevY = currY;
        currX = event.offsetX;
        currY = event.offsetY;
        draw();
    }

});

function draw() {
    let context = canvas.getContext("2d");
    context.beginPath();
    context.moveTo(prevX, prevY);
    context.lineTo(currX, currY);
    context.strokeStyle = color;
    context.lineWidth = brushSize;
    context.stroke();
    context.closePath();
}