let divCont = document.getElementById("cont")

function render(state) {
    if (state == "free") {
        return "<img src='/img/maptile0-big.png' />"
    } else if (state == "bush") {
        return "<img src='/img/maptile1-big.png' />"
    } else if ( state == true){
        return "";
    } else {
        state.element.style.backgroundImage = `url('/img/overworld/${state.face}/${state.type}.png')`;
        state.element.style.left = `${state.coords[0] * 64}px`
        state.element.style.top = `${state.coords[1] * 64}px`
        divCont.appendChild(state.element)
        return "<img src='/img/maptile0-big.png' />"
    }
}



function setImage(orientation,unit) {
    // console.log(unit);
    unit.image = `/img/overworld/${orientation}/${unit.type}.png`;
    if (unit.element) {
        unit.element.style.backgroundImage = `url(${unit.image})`;
    }
}

let ul = document.getElementById("poke-list");
let initials = [1,4,7,25,133,152,155,158,252,255,258,387,390,393]
for (let i = 0; i < initials.length; i++) {
    const poke = initials[i];
    let li = document.createElement("li");
    let img = document.createElement("img");
    img.setAttribute("src", `/img/overworld/down/${poke}.png`)
    li.appendChild(img);
    ul.appendChild(li);

    li.addEventListener("click", (e)=> {
        choose(poke, cfg.user.coords)
    })
}



function isBusy(coords) {
    for (let i = 0; i < cfg.busyTiles.length; i++) {
        const tile = cfg.busyTiles[i];
        if (coords[0] == tile[0] && coords[1] == tile[1]) {
            // console.log("Ocupado en x:"+coords[0]+" y:"+coords[1]);
            return "bush";
        };
    };
    for (let i = 0; i < cfg.units.length; i++) {
        const unit = cfg.units[i];
        // console.log(`Comparo ${tile}, con ${coords}`);
        if (coords[0] == unit.coords[0] && coords[1] == unit.coords[1]) {
            return unit;
        };
    };
    if (coords[0] == cfg.user.coords[0] && coords[1] == cfg.user.coords[1]) {
        return "free";
    }
    return false;
}

function renderTerrain() {
    let terrain2 = document.getElementById("terrain2");
    let div = "<div id='table'>"
    for (let i = 0; i < cfg.mapSize[1]; i++) {
        div+= '<div class="row">';
        for (let j = 0; j < cfg.mapSize[0]; j++) {
            let busyElement = isBusy([j,i]);
            if (busyElement) {
                div += render(busyElement);
            } else {
                div += render("free");
            };
        };
        div+="</div>";
    };
    div+="</table>";
    terrain2.innerHTML = div;
}


renderTerrain()
choose(cfg.user.type)
//setImage("down",cfg.user)
// cfg.user.coords = [cfg.user.coords[0], cfg.user.coords[1]]

function checkPosition(unit) { // Verificar si la casilla está dentro del límite y no está ocupada
    // console.log(coords);
    setImage(unit.face,unit)
    // console.log(coords);
    let result = false;
    // console.log(side)
    // console.log(unit.coords);
    switch (unit.face) {
        case "up":
            if ((unit.coords[1]-1) >= 0  && !isBusy([unit.coords[0], unit.coords[1]-1])) {
                result = true;
            };
            break;
        case "down":
            // console.log((unit.coords[1]-1) >= 0);
            // console.log(!isBusy([unit.coords[0], unit.coords[1]+1]));
            // console.log(unit.coords[1]+1);
            if ((unit.coords[1]+1)  < cfg.mapSize[1] && !isBusy([unit.coords[0], unit.coords[1]+1])) {
                result = true;
            };
            break;
        case "left":
            if ((unit.coords[0]-1) >= 0 && !isBusy([unit.coords[0]-1, unit.coords[1]])) {
                result = true;
            };
            break;
        case "right":
            if ((unit.coords[0]+1) < cfg.mapSize[0] && !isBusy([unit.coords[0]+1, unit.coords[1]])) {
                result = true;
            };
            break;
        default:
            break;
    }
    return result;
}

function reset(unit,element) {
    // console.log(unit);
    if (unit.element) {
        
        let newElement = unit.element.cloneNode(false);
        // console.log(divCont);
        // console.log(unit.element);
        element.parentNode.removeChild(element);
        unit.element = newElement;
        divCont.appendChild(newElement);
    }
}

function contraryFace(face) {
    let toReturn = ""
    switch (face) {
        case "up":
            toReturn = "down";
            break;
        case "down":
            toReturn = "up";
            break;
        case "left":
            toReturn = "right";
            break;
        case "right":
            toReturn = "left";
            break;
        default:
            break;
    }
    return toReturn;
}

let move = {
    up: (unit)=>{
        unit.face = "up";
        if (unit.move == true) {
            if (checkPosition(unit)) {
                unit.coords[1] --
            }
            runMove(unit);
        } else {
            unit.move = true
        }
    },
    down: (unit)=>{
        // console.log("down");
        // console.log(unit.posY < (cfg.mapSize-1));
        // console.log(cfg.unit);
        unit.face = "down";
        // if (unit.move == true) {
            if (checkPosition(unit)) {
                unit.coords[1] ++
            }
            runMove(unit);
        // } else {
        //     unit.move = true
        // }
    },
    left: (unit)=>{
        unit.face = "left";
        if (unit.move == true) {
            if (checkPosition(unit)) {
                unit.coords[0] --
            }
            runMove(unit);
        } else {
            unit.move = true
        }
    },
    right: (unit)=>{
        unit.face = "right";
        if (unit.move == true) {
            if (checkPosition(unit)) {
                unit.coords[0] ++
            }
            // setTimeout(()=> {
                runMove(unit);
            // } , 1000)
        } else {
            unit.move = true
        }
    },
    attack: (unit)=>{
        runAttack(unit);
    },
}
