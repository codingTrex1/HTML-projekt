let gamma;

function setup(){
canvas.width = innerWidth
canvas.height = innerHeight
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
gamma = 0;
}

function handleOrientation(event) {
    var alpha    = event.alpha;
    var beta     = event.beta;
    gamma    = event.gamma;
}

function draw(){
    skib.position = gamma;
}



//denne function skal oprette en function for collision som returnerer skibets længde
function collision(skib){
    return(
        skib.position.x + skib.width 
    )
}

//denne collision skal gøre så at hvis at innerwidth og skib kolliderer, så skal den stoppe
if (collision(skib, innerWidth)){
    skib.position.x = 0
}

