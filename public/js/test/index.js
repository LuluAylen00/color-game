let cfg = {
    time: 0,
    mapSize: [3,4],
    busyTiles: [
    ],
    units: []
};


function render() {
    let cont = document.querySelector("#cont");
    cont.innerHTML = "";
    for (let i = 0; i < cfg.mapSize[1]; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        row.style.width = `${100 / cfg.mapSize[0]}%`
        for (let x = 0; x < cfg.mapSize[0]; x++) {
            let cell = document.createElement("div");
            cell.classList.add("col");
            cell.classList.add(`x${i}y${x}`);
            cell.style.height = `${100 / cfg.mapSize[1]}%`
            row.appendChild(cell);
        }
        cont.appendChild(row);
    }
}

render();

let inputs = document.querySelectorAll("#creator input");

inputs.forEach(input => {
    input.addEventListener("input", () =>{
        cfg.mapSize = [Number(document.querySelector("#H-length").value), Number(document.querySelector("#W-length").value)];
        resetButton.style.display = "none";
        startButton.style.display = "flex";
        render();
    })
})
/* 
let resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", () =>{
    render();
}) */