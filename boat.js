let gamma;

function setup(){
    canvas = createCanvas(innerWidth, innerHeight)
    gamma = 0;
}

function handleOrientation(event) {
    var alpha    = event.alpha;
    var beta     = event.beta;
    gamma    = event.gamma;
}

function draw(){
    skib.position = gamma;
    
    if (collision(skib, innerWidth)){
        skib.position.x = 0
    }
}

//denne function skal oprette en function for collision som returnerer skibets længde
function collision(skib){
    return(
        skib.position.x + skib.width 
    )

}
//denne collision skal gøre så at hvis at innerwidth og skib kolliderer, så skal den stoppe

function onBodyLoaded() {
    var number = gamma;
    document.getElementById("myText").innerHTML = number;
}

