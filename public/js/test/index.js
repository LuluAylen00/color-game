let cfg = {
    time: 0,
    mapSize: [2,2],
    busyTiles: [
    ],
    units: []
};


function render() {
    // let temp = document.querySelector("#temp-color");
    // temp.style.backgroundColor = "unset";
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

document.addEventListener('keydown', e => {
    if (e.ctrlKey && e.key === 's') {
      e.preventDefault();
    }

    if (e.ctrlKey && e.shiftKey && e.key === 'Enter') {
        render();

        let commands = jsNewEditor.getValue().split("\n");
        executeMovements(commands);
        startButton.style.display = "none";
        resetButton.style.display = "flex";
    }
    let actualLine = jsNewEditor.getCursor().line;
    // console.log();
    let commands = jsNewEditor.getValue().split("\n");
    jsNewEditor.on('cursorActivity',async function(e){
        let line = e.doc.getCursor().line;
        let ch = e.doc.getCursor().ch;

        // doc.replaceRange(); // adds a new line
        function deleteRest(){
            e.doc.replaceRange ('', {
                ch:ch,
                line
            },
            {
                ch:line.length,
                line
            });
        }
        let cursor = e.doc.getCursor()
        // console.log(line, ch);
        // console.log();
        // console.log(e.doc.getLine(line));
        // console.log(e.doc.getLine(line).slice(0,ch), e.doc.getLine(line).slice(ch));
        // console.log(e.doc);
        let blocks = await readBlocks(commands);
        // console.log(blocks);
        let textBefore = e.doc.getLine(line).slice(0,ch);
        let suggestions = document.querySelector("div#suggestions");
        suggestions.innerHTML = "";
        if (textBefore[textBefore.length - 1] == "." || (textBefore.includes(".") && blocks.includes(textBefore.split(".")[0].trim()))) {
            // console.log("Método"); // Mezclar, oscurecer, aclarar
            // console.log(textBefore.split(".")[1],"aclarar".indexOf(textBefore.split(".")[1]));
            if ("mezclar".indexOf(textBefore.split(".")[1]) == 0) {
                let row1 = document.createElement("span");
                row1.classList.add("row");
                row1.innerHTML += `<span class="cm-variable">${textBefore.split(".")[0].trim()}</span>`;
                row1.innerHTML += `.`;
                row1.innerHTML += `<span class="cm-property">mezclar</span>`;
                row1.innerHTML += `(`;
                row1.innerHTML += `<span class="cm-variable">color</span>`;
                row1.innerHTML += `)`;
                row1.addEventListener("click", () => {
                    deleteRest();
                    e.doc.replaceRange('mezclar("color")'.split(textBefore.split(".")[1])[1], cursor)
                })

                suggestions.appendChild(row1);
            }

            if ("oscurecer".indexOf(textBefore.split(".")[1]) == 0) {
                let row2 = document.createElement("span");
                row2.classList.add("row");
                row2.innerHTML += `<span class="cm-variable">${textBefore.split(".")[0].trim()}</span>`;
                row2.innerHTML += `.`;
                row2.innerHTML += `<span class="cm-property">oscurecer</span>`;
                row2.innerHTML += `(`;
                row2.innerHTML += `)`;

                row2.addEventListener("click", () => {
                    deleteRest();
                    e.doc.replaceRange('oscurecer()'.split(textBefore.split(".")[1])[1], cursor);
                })

                suggestions.appendChild(row2);
            }

            if ("aclarar".indexOf(textBefore.split(".")[1]) == 0) {
                let row3 = document.createElement("span");
                row3.classList.add("row");
                row3.innerHTML += `<span class="cm-variable">${textBefore.split(".")[0].trim()}</span>`;
                row3.innerHTML += `.`;
                row3.innerHTML += `<span class="cm-property">aclarar</span>`;
                row3.innerHTML += `(`;
                row3.innerHTML += `)`;

                row3.addEventListener("click", () => {
                    deleteRest();
                    e.doc.replaceRange('aclarar()'.split(textBefore.split(".")[1])[1], cursor);
                })

                suggestions.appendChild(row3);
            }
            
        } else if((textBefore.trim()[textBefore.trim().length - 1] == "=" || (textBefore.includes("=") && "crearColor(".indexOf(textBefore.replace("= ","=").split("=")[1]) == 0)) && textBefore.trim().indexOf("let ") == 0){
            // console.log("Nuevo"); // crearColor
            let row4 = document.createElement("span");
            row4.classList.add("row");
            row4.innerHTML += `<span class="cm-keyword">let </span>`;
            row4.innerHTML += `<span class="cm-def">${textBefore.trim().split("let ")[1].trim().split("=")[0].trim()}</span>`;
            row4.innerHTML += `<span class="cm-operator"> = </span>`;
            row4.innerHTML += `<span class="cm-variable">crearColor</span>`;
            row4.innerHTML += `(`;
            row4.innerHTML += `<span class="cm-variable">color</span>`;
            row4.innerHTML += `,`;
            row4.innerHTML += `<span class="cm-number">X</span>`;
            row4.innerHTML += `,`;
            row4.innerHTML += `<span class="cm-number">Y</span>`;
            row4.innerHTML += `)`;

            row4.addEventListener("click", () => {
                deleteRest();
                e.doc.replaceRange('crearColor("color",X,Y)'.split(textBefore.replace("= ","=").split("=")[1])[1], cursor);
            })

            suggestions.appendChild(row4);
        }
      });
  });
/* 
let resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", () =>{
    render();
}) */