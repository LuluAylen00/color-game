var jsNewEditor = CodeMirror.fromTextArea(document.getElementById("editor"), {
    lineNumbers: true,
    theme: "material",
    styleActiveLine: true,
    matchBrackets: true,
    mode: "javascript",
    autocomplete: true,
    extraKeys: {
        "Ctrl-Space": "autocomplete"
    },
    autoCloseBrackets: true,
    fontSize: "30px",
    // viewportMargin: Infinity,
    indentUnit: 4,
    indentWithTabs: true,
    placeholder: "Ingresa tu código JS aquí",
    tabSize: 4,
    lineWrapping: true,
    // maxHeight: "200px",
    // gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
    fixedGutter: true
});

var customHint = function (cm) {
    var cursor = cm.getCursor ();
    var token = cm.getTokenAt (cursor);
    var start = token.start;
    var end = cursor.ch;
    var line = cursor.line;
    var currentWord = token.string;
  
    var variables = ["pokemon", "chooseInitial"];
    var properties = ["moveUp","moveDown","moveLeft","moveRight","attack"];
  var initials = ["Bulbasaur", "Charmander", "Squirtle", "Pikachu", "Eevee", "Chikorita", "Cyndaquil", "Totodile", "Treecko", "Torchic", "Mudkip", "Turtwig", "Chimchar", "Piplup"]

  // console.log(token.type, currentWord);
  var list = [];
    var word;
  if ((token.type == null || token.type == "variable") && currentWord != "." && currentWord != "(") {
    for (var i = 0; i < variables.length; i++) {
        word = variables[i];
        list.push ({
          text: word, // el nombre de la opción
          type: "object", // el tipo de la opción
          apply: word, // el texto que se agrega al seleccionar la opción
          detail: "macro" // el detalle de la opción
        });
      }
  } else if (token.type == "property" || currentWord == ".") {
    for (var i = 0; i < properties.length; i++) {
        word = properties[i];
        list.push ({
            text: currentWord == "." ? "."+word+"()" : word+"()", // el nombre de la opción
            label: word,
            type: "object", // el tipo de la opción
              apply: function (cm, data) { // la función que se ejecuta al seleccionar la opción
                cm.replaceRange(data.text == "." ? "."+word+"()" : word+"()", data.from, data.to)
              }, // el texto que se agrega al seleccionar la opción
            // apply: currentWord == "." ? "."+word+"()" : word+"()",
            detail: "macro" // el detalle de la opción
          });
        // if (word.indexOf (currentWord) == 0) {
        //   list.push (word);
        // }
      }
  } else if (currentWord == "(" && jsNewEditor.getLine(line).trim().toLowerCase().includes("chooseInitial(".toLowerCase())){
for (var i = 0; i < initials.length; i++) {
        word = initials[i];
        list.push ({
            text: currentWord == "(" ? "("+word+")" : word+")", // el nombre de la opción
            label: word,
            type: "object", // el tipo de la opción
              apply: function (cm, data) { // la función que se ejecuta al seleccionar la opción
                cm.replaceRange(word+")", data.from, data.to)
              }, // el texto que se agrega al seleccionar la opción
            // apply: currentWord == "." ? "."+word+"()" : word+"()",
            detail: "macro" // el detalle de la opción
          });
        // if (word.indexOf (currentWord) == 0) {
        //   list.push (word);
        // }
      }
  }
  
    return {
      list: list,
      from: CodeMirror.Pos (line, start),
      to: CodeMirror.Pos (line, end)
    };
  };

  jsNewEditor.setOption("fontSize", "30px")

jsNewEditor.setOption("hintOptions", {
    hint: customHint, // tu función personalizada para generar sugerencias
    completeSingle: false, // evita completar automáticamente con una sola opción
    showHint: true, // muestra las sugerencias automáticamente
    hintDelay: 0 // espera medio segundo después de escribir para mostrar las sugerencias
  });

jsNewEditor.on("beforeChange", function(instance, change) {
    // var maxLines = 30; // Límite máximo de líneas permitidas
    // var currentLines = instance.lineCount(); // Obtener el número actual de líneas
    // if (change.origin === "+input" && currentLines >= maxLines) {
    // change.cancel(); // Cancelar la inserción de texto
    // }
})

// Make the DIV element draggable:
dragElement(document.getElementById("editor-div"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "-header")) {
    // if present, the header is where you move the DIV from:
    // document.getElementById(elmnt.id + "-header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    // elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    elmnt.style.cursor = "move";
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    
        let width = elmnt.offsetWidth;

    if (
        elmnt.offsetTop - pos2 >= 0 /*Arriba mayor a 0*/&& elmnt.offsetLeft - pos1 >= 0 /*Izquierda mayor a 0*/
        // elmnt.offsetTop+elmnt.offsetHeight < window.innerHeight && (elmnt.offsetLeft+elmnt.offsetWidth < window.innerWidth || (elmnt.offsetLeft+elmnt.offsetWidth < window.innerWidth && pos1 != -1))
    ) {
        // let top = 
        elmnt.style.top = ((elmnt.offsetTop + elmnt.offsetHeight) < window.innerHeight -3 ? (elmnt.offsetTop - pos2) : (window.innerHeight-elmnt.offsetHeight-5)) + "px";
        elmnt.style.left = ((elmnt.offsetLeft + elmnt.offsetWidth) < window.innerWidth -3?(elmnt.offsetLeft - pos1):(window.innerWidth-elmnt.offsetWidth-5)) + "px";
    }
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    elmnt.style.cursor = "default";
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function sleep() {
  var delay = 50;
    return new Promise(resolve => setTimeout(resolve, delay));
 }

 function createColor(container, variable, name, coords, linea) {
  let color = new Color(name,coords);
  if (!color.message) {
    // console.log(coords);
    // Para validar si está ocupada la casilla, pregunto si existen las coords y 
    // valido individualmente si existe alguna en la que ambas coordenadas coincidan
    let isRepeated = coords && Object.values(container).find(c => c.ubicacion[0] == coords[0] && c.ubicacion[1] == coords[1]);
    // console.log(color);
    if (color.ubicacion[0] == -1 && Object.values(container).find(c => c.ubicacion[0] == -1)) {
      lineFinder(linea-1);
      alert(`Error en la línea ${linea}: La casilla por defecto (-1, -1) se encuentra ocupada`);
    } else if(isRepeated){
      lineFinder(linea-1);
      alert(`Error en la línea ${linea}: La casilla X:${color.ubicacion[0]} Y:${color.ubicacion[1]} se encuentra ocupada`);
    } else {
      let casillaCorrespondiente = document.querySelector(`.x${color.ubicacion[0]-1}y${color.ubicacion[1]-1}`) || document.querySelector(`#temp-color`);
      casillaCorrespondiente.style.backgroundColor = color.codigo;
      container[variable] = color;
    }
  } else {
    lineFinder(linea-1);
    alert(`Error en la línea ${linea}: ${color.message}`);
  }
  return container;
 }

 function lineReset() {
  let lineasN = document.querySelectorAll("div.CodeMirror-linenumber");
  let lineasC = document.querySelectorAll("pre.CodeMirror-line");
  [...lineasN, ...lineasC].forEach((linea) => {
    linea.classList.remove("error");
  })
 }

 function lineFinder(linea) {
  let lineasN = document.querySelectorAll('div.CodeMirror-linenumber');
  // lineasN = lineasN.filter(linea => linea.innerHTML != "<div>");
  let lineasC = document.querySelectorAll("pre.CodeMirror-line");
  let nuevasLineasN = [];
  for (let i = 0; i < lineasN.length; i++) {
    if (!lineasN[i].innerHTML.includes("<div>")) {
      nuevasLineasN.push(lineasN[i]);
    }
    
  }
  lineasN = nuevasLineasN;

    let selectedN = lineasN[linea];
    selectedN.classList.add("error");

    let selectedC = lineasC[linea];
    selectedC.classList.add("error");
 }

 async function executeMovements(movements) {
  
  lineReset();
  // console.log([...lineasN, ...lineasC]);
    let blocks = {}
    // movements = movements.filter(move => {
    //   console.log(move, move.trim().length > 0);
    //   return move.trim().length > 0
    // })
    // console.log(movements);
    for (var i = 0; i < movements.length; i++) {
       // Perform some task with the current item
       let command = movements[i];
       // Si empieza por "let " es porque está creando una variable
       if (command.includes("let ") && command.includes("=")) {

        // Guardo el nombre de la variable que quiere crear
        let variableName = command.split("let ")[1].split("=")[0].trim();

        // Si no existe ya una variable llamada así
        if (!Object.keys(blocks).includes(variableName)) {
          // Debo corroborar que esté intentando usar la función de crearColor
          if (command.includes("crearColor(")) {
            // Guardo los parámetros del crearColor()
            let colorACrear = command.split("crearColor(")[1].split(")")[0];

            // Si crearColor no obtuvo argumentos...
            if (colorACrear.trim() == "") {
              // Creo uno blanco
              blocks = createColor(blocks, variableName, "blanco", undefined, (i+1));
            // Si tuvo una coma significa que al menos dos argumentos se le pasaron y entonces...
            } else if (colorACrear.includes(",")) {
              // Obtengo el nombre del color
              let colorName = colorACrear.split(",")[0].replaceAll('"',"").replaceAll("'","").replaceAll('`',"");
              // Creo uno con ese color
              
              // console.log(command,colorACrear.split(",")[0]);
              if (command.split(",")[2]) {
                let coordW = Number(command.split(",")[1].replaceAll(";","").replaceAll("(","").replaceAll(")","").replaceAll("[","").replaceAll("]","").trim());
                let coordH = Number(command.split(",")[2].replaceAll(";","").replaceAll("(","").replaceAll(")","").replaceAll("[","").replaceAll("]","").trim());
                if (coordW > cfg.mapSize[1]) {
                  lineFinder(i);
                  alert(`Error en la línea ${i+1}: La primera coordenada (${command.split(",")[1].replaceAll(";","").replaceAll("(","").replaceAll(")","").replaceAll("[","").replaceAll("]","").trim()}) sale del límite`);
                } else if (coordH > cfg.mapSize[0]) {
                  lineFinder(i);
                  alert(`Error en la línea ${i+1}: La segunda coordenada (${command.split(",")[2].replaceAll(";","").replaceAll("(","").replaceAll(")","").replaceAll("[","").replaceAll("]","").trim()}) sale del límite`);
                } else if (!coordW) {
                  lineFinder(i);
                  alert(`Error en la línea ${i+1}: La primera coordenada (${command.split(",")[1].replaceAll(";","").replaceAll("(","").replaceAll(")","").replaceAll("[","").replaceAll("]","").trim()}) no es un número válido`);
                } else if (!coordH) {
                  lineFinder(i);
                  alert(`Error en la línea ${i+1}: La segunda coordenada (${command.split(",")[2].replaceAll(";","").replaceAll("(","").replaceAll(")","").replaceAll("[","").replaceAll("]","").trim()}) no es un número válido`);
                } else {
                  blocks = createColor(blocks, variableName, colorName, [coordW, coordH], (i+1));
                }
                // console.log(`${coordW},${coordH}`);
              } else {
                lineFinder(i);
                alert(`Error en la línea ${i+1}: Necesitan pasarse al menos dos parámetros numéricos (después del nombre del color) que indiquen las coordenadas, por ejemplo ("azul", 2, 2).`)
              }
              // Si no, significa que solo se le pasó un parámetro, es decir, el nombre del color nada mas...
            } else {
              // Obtengo su nombre
              let colorName = colorACrear.replaceAll('"',"").replaceAll("'","").replaceAll('`',"");
              // Y lo creo
              blocks = createColor(blocks, variableName, colorName, undefined, (i+1));
              // console.log(command, colorACrear);
            }
          }
        } else {
          lineFinder(i);
          alert(`Error en la línea ${i+1}: Ya existe una variable llamada ${variableName}`);
        }
        // blocks[variableName.trim()] 
       } else if (command.includes(".mezclar(")){
        let name = command.split(".mezclar(")[0].trim();
        let colorSelected = blocks[name];
        // Si encontró la variable a la que hace referencia
        if (colorSelected) {
          let colorToShuffle = command.split(".mezclar(")[1].replaceAll(";","").replaceAll(")","").replaceAll('"',"").replaceAll("'","").trim();
          console.log(colorToShuffle, isAColor(colorToShuffle));
          // console.log();
          if (isAColor(colorToShuffle)) {
            colorSelected.mezclar(colorToShuffle);
            console.log(colorSelected);
          } else {
            lineFinder(i);
          }
        } else {
          lineFinder(i);
        }
      } else if (command.includes(".aclarar(")){
        let name = command.split(".aclarar(")[0].trim();
        let colorSelected = blocks[name];
        // Si encontró la variable a la que hace referencia
        if (colorSelected) {
            let aclarado = colorSelected.aclarar();
            // console.log(aclarado);
          } else {
            lineFinder(i);
          }
      } else if (command.includes(".oscurecer(")){
        let name = command.split(".oscurecer(")[0].trim();
        let colorSelected = blocks[name];
        // Si encontró la variable a la que hace referencia
        console.log(colorSelected);

        if (colorSelected) {
            let oscurecido = colorSelected.oscurecer();
            // console.log(oscurecido);
          } else {
            lineFinder(i);
          }
      }
        if (command.includes("pokemon.")) {
            if (command.includes("(") && command.includes(")")) {
                let splitCommand = command.trim().split(".")[1].split("(")[0];
                let quantity = parseInt(command.trim().split("(")[1].split(")")[0]) || 1;
                // console.log(quantity);
                for (let z = 1; z <= quantity; z++) {
                  switch (splitCommand) {
                    case "moveUp": 
                    console.log(cfg.user);
                        move.up(cfg.user);
                        await sleep();
                        break;
                    case "moveDown": 
                        move.down(cfg.user);
                        await sleep();
                        break;
                    case "moveLeft": 
                        move.left(cfg.user);
                        await sleep();
                        break;
                    case "moveRight": 
                        move.right(cfg.user);
                        await sleep();
                        break;
                    case "attack":
                        move.attack(cfg.user);
                        await sleep();
                        break;
                    default:
                        alert(command+ " no es un comando válido")
                  }
                }
            }
        } else if (command.includes("chooseInitial")){
          if (command.includes("(") && command.includes(")")) {
            let splitCommand = command.trim().split("(")[1].split(")")[0];
            console.log(splitCommand);
            let pokemon = await getPokemon(splitCommand);
            console.log(pokemon);
            if (pokemon) {
              choose(splitCommand)
              resetButton.style.display = "none";
              startButton.style.display = "flex";
            } else {
              alert("No se ha encontrado el pokemon "+splitCommand)
            }
          } else {
            alert("El comando "+command+" está mal cerrado")
          }
        }
        // defaultTurn()
        await sleep();
        // if (i % 2 == 1) {
        // }
    }
    console.log(blocks);
 }

 let resetButton = document.getElementById("reset");
 resetButton.style.display = "none";
 let startButton = document.getElementById("run");

 resetButton.addEventListener("click", async (e)=> {
  render();
  //  resetLevel();
  //  render(cfg.user);
    resetButton.style.display = "none";
    startButton.style.display = "flex";
 })
startButton.addEventListener("click", async (e)=> {
  // resetLevel()
  render();
  // console.log(jsNewEditor.getValue().split("\n"));
    let commands = jsNewEditor.getValue().split("\n");
    
    executeMovements(commands)
    startButton.style.display = "none";
    resetButton.style.display = "flex";
})