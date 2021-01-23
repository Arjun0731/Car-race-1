canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
car1_width = 120;
car1_height = 70;
car1_x = 10;
car1_y = 10;
car2_width = 120;
car2_height = 70;
car2_x = 10;
car2_y = 10;
car1_image = "https://i.postimg.cc/YqdnnNX1/car1.png"
car2_image = "https://cdn.pixabay.com/photo/2012/04/12/23/48/car-30990__340.png"
background_image = "https://i.postimg.cc/bv5d35nK/racing.jpg"
function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;
    car1_imgTag = new Image();
    car1_imgTag.onload = uploadcar1;
    car1_imgTag.src = car1_image;
}
function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);   
}
function uploadcar1() {
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height)
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=='38') {
        console.log("up");
        car_1up();
    }
    if(keyPressed=='40') {
        console.log("down");
        car1_down();
    }
    if(keyPressed=='37') {
        console.log("left");
        car1_left();
    }
    if(keyPressed=='39') {
        console.log("right");
        car1_right();
    }
    if(keyPressed== '87') {
        car2_up();
        console.log("w")
    }
    if(keyPressed== '83') {
        car2_down();
        console.log("s")
    }
    if(keyPressed== '65') {
        car2_left();
        console.log("a")
    }
    if(keyPressed== '68') {
        car2_right();
        console.log("d")
    }
}