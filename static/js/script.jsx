const robot = document.getElementById("robot");

let frame = 1;
const totalFrames = 9;
const fps = 80; // velocidad de animación

function animateRobot() {
    robot.style.backgroundImage = `url('/static/sprites/Bot${frame}.png')`;
    frame++;
    if (frame > totalFrames) {
        frame = 1;
    }
}

setInterval(animateRobot, 1000 / fps);
