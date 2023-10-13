let cx, cy;
let permissionGranted = false;

function setup(){
    canvas = createCanvas(windowWidth, WindowHeight)
    
    cx = width/2;
    cy = height/2;

if (typeof(DeviceOrientationEvent) !== 'undefined' && typeof(DeviceOrientationEvent.requestPermission) === 'function') {

    DeviceOrientationEvent.requestPermission()
    .catch(() =>{
        let button = createButton('start');
        button.style("font-size", "30px");
        button.center();
        button.mousePressed (requestAccess);
        throw error;
    })
    .then(() =>{
        permissionGranted = true;
    })
} else {
    textSize(30);
    text("det virker ikke på iphone 12 pro", 100, 100);
    }
}

function requestAccess(){
DeviceOrientationEvent.requestPermission()
.then (response => {
    if (response == 'granted') {
        permissionGranted == true;
    } else {
        permissionGranted == false;
    }
    })
    .catch(console.error);

    this.remove();
}

function draw(){
if (!permissionGranted) return;

background(255);

const dx = constrain(rotationX, -3, 3);
const dy = constrain(rotationY, -3, 3);
cx += dx;
cy += dy;
cx = constrain(cx, 0, width);
cy = constrain(cy, 0, height);

skib(cx, cy);

}