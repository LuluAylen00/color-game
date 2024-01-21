let colors = [
    {
        id: 1,
        name: "Rojo-Oscuro",
        type: "Primario",
        shuffle: {
            3: 2,
            5: 3,
            9: 11,
            11: 12,
        },
        hex: "#982632"
    },{
        id: 2,
        name: "Rojo-Naranja-Oscuro",
        type: "Terciario",
        shuffle: {
        },
        hex: "#b24a28"
    },{
        id: 3,
        name: "Naranja-Oscuro",
        type: "Secundario",
        shuffle: {
            1: 2,
            5: 4,
        },
        hex: "#c0731f"
    },{
        id: 4,
        name: "Amarillo-Naranja-Oscuro",
        type: "Terciario",
        shuffle: {
        },
        hex: "#cb9d0a"
    },{
        id: 5,
        name: "Amarillo-Oscuro",
        type: "Primario",
        shuffle: {
            1: 3,
            3: 4,
            7: 6,
            9: 7
        },
        hex: "#d2c300"
    },{
        id: 6,
        name: "Amarillo-Verde-Oscuro",
        type: "Terciario",
        shuffle: {
        },
        hex: "#7e8130"
    },{
        id: 7,
        name: "Verde-Oscuro",
        type: "Secundario",
        shuffle: {
            5: 6,
            9: 8
        },
        hex: "#32573c"
    },{
        id: 8,
        name: "Azul-Verde-Oscuro",
        type: "Terciario",
        shuffle: {
        },
        hex: "#175864"
    },{
        id: 9,
        name: "Azul-Oscuro",
        type: "Primario",
        shuffle: {
            5: 7,
            7: 8,
            11: 10,
            1: 11
        },
        hex: "#005e9a"
    },{
        id: 10,
        name: "Azul-Purpura-Oscuro",
        type: "Terciario",
        shuffle: {
        },
        hex: "#313757"
    },{
        id: 11,
        name: "Purpura-Oscuro",
        type: "Secundario",
        shuffle: {
            9: 10,
            1: 12
        },
        hex: "#401c2e"
    },{
        id: 12,
        name: "Rojo-Purpura-Oscuro",
        type: "Terciario",
        shuffle: {
        },
        hex: "#692e38"
    },{
        id: 101,
        name: "Rojo",
        type: "Primario",
        shuffle: {
            103: 102,
            105: 103,
            109: 111,
            111: 112,
        },
        hex: "#e41d32"
    },{
        id: 102,
        name: "Rojo-Naranja",
        type: "Terciario",
        shuffle: {
        },
        hex: "#eb5f32"
    },{
        id: 103,
        name: "Naranja",
        type: "Secundario",
        shuffle: {
            101: 102,
            105: 104,
        },
        hex: "#f39329"
    },{
        id: 104,
        name: "Amarillo-Naranja",
        type: "Terciario",
        shuffle: {
        },
        hex: "#fcc30d"
    },{
        id: 105,
        name: "Amarillo",
        type: "Primario",
        shuffle: {
            101: 103,
            103: 104,
            107: 106,
            109: 107
        },
        hex: "#ffed00"
    },{
        id: 106,
        name: "Amarillo-Verde",
        type: "Terciario",
        shuffle: {
        },
        hex: "#b2b745"
    },{
        id: 107,
        name: "Verde",
        type: "Secundario",
        shuffle: {
            105: 106,
            109: 108
        },
        hex: "#528a61"
    },{
        id: 108,
        name: "Azul-Verde",
        type: "Terciario",
        shuffle: {
        },
        hex: "#137e93"
    },{
        id: 109,
        name: "Azul",
        type: "Primario",
        shuffle: {
            105: 107,
            107: 108,
            111: 110,
            101: 111
        },
        hex: "#0072ba"
    },{
        id: 110,
        name: "Azul-Purpura",
        type: "Terciario",
        shuffle: {
        },
        hex: "#4c5684"
    },{
        id: 111,
        name: "Purpura",
        type: "Secundario",
        shuffle: {
            109: 110,
            101: 112
        },
        hex: "#763455"
    },{
        id: 112,
        name: "Rojo-Purpura",
        type: "Terciario",
        shuffle: {
        },
        hex: "#b12d44"
    },{
        id: 201,
        name: "Rojo-Claro",
        type: "Primario",
        shuffle: {
            203: 202,
            205: 203,
            209: 211,
            211: 212,
        },
        hex: "#e35b69"
    },{
        id: 202,
        name: "Rojo-Naranja-Claro",
        type: "Terciario",
        shuffle: {
        },
        hex: "#ec8462"
    },{
        id: 203,
        name: "Naranja-Claro",
        type: "Secundario",
        shuffle: {
            201: 202,
            205: 204,
        },
        hex: "#f5ae5f"
    },{
        id: 204,
        name: "Amarillo-Naranja-Claro",
        type: "Terciario",
        shuffle: {
        },
        hex: "#ffd756"
    },{
        id: 205,
        name: "Amarillo-Claro",
        type: "Primario",
        shuffle: {
            201: 203,
            203: 204,
            207: 206,
            209: 207
        },
        hex: "#fef366"
    },{
        id: 206,
        name: "Amarillo-Verde-Claro",
        type: "Terciario",
        shuffle: {
        },
        hex: "#b1b569"
    },{
        id: 207,
        name: "Verde-Claro",
        type: "Secundario",
        shuffle: {
            205: 206,
            209: 208
        },
        hex: "#6a8a72"
    },{
        id: 208,
        name: "Azul-Verde-Claro",
        type: "Terciario",
        shuffle: {
        },
        hex: "#348595"
    },{
        id: 209,
        name: "Azul-Claro",
        type: "Primario",
        shuffle: {
            205: 207,
            207: 208,
            211: 210,
            201: 211
        },
        hex: "#2c7cae"
    },{
        id: 210,
        name: "Azul-Purpura-Claro",
        type: "Terciario",
        shuffle: {
        },
        hex: "#6c7393"
    },{
        id: 211,
        name: "Purpura-Claro",
        type: "Secundario",
        shuffle: {
            209: 210,
            201: 212
        },
        hex: "#784760"
    },{
        id: 212,
        name: "Rojo-Purpura-Claro",
        type: "Terciario",
        shuffle: {
        },
        hex: "#b24f60"
    },{
        id: 1001,
        name: "Blanco",
        type: "Neutro-Primario",
        shuffle: {
            1003: 1002,
            1005: 1003,
        },
        hex: "#ffffff"
    },{
        id: 1002,
        name: "Gris-Claro",
        type: "Neutro-Terciario",
        shuffle: {
        },
        hex: "#c0c0c0"
    },{
        id: 1003,
        name: "Gris",
        type: "Neutro-Secundario",
        shuffle: {
            1001: 1002,
            1005: 1004,
        },
        hex: "#838383"
    },{
        id: 1004,
        name: "Gris-Oscuro",
        type: "Neutro-Terciario",
        shuffle: {
        },
        hex: "#595959"
    },{
        id: 1005,
        name: "Negro",
        type: "Neutro-Primario",
        shuffle: {
            1001: 1003,
            1003: 1004,
        },
        hex: "#000000"
    },
]

function isAColor(name) {
    return colors.find(c => c.name.toLowerCase().trim() == name.toLowerCase().trim());
}

function findColorById(id) {
    return colors.find(c => c.id == id);
}

class Color {
    constructor(colorName = 'blanco', coords = [-1, -1]){
        let colorEnDb = colors.find(c => c.name.trim().toLowerCase().replaceAll("-","") == colorName.trim().toLowerCase().replaceAll(" ",""))
        if (colorEnDb) {
            if (colorEnDb.type.includes("Primario")) {
                this.color = colorEnDb.name;
                this.ubicacion = coords;
                this.codigo = colorEnDb.hex;
                this.mezclas = colorEnDb.shuffle;
                this.tipo = colorEnDb.type;
                this.mezclar = function(otroColor){
                    let nombreDelColor = otroColor;
                    if (this.color.includes("-Claro")) {
                        nombreDelColor += "-Claro";
                    } else if (this.color.includes("-Oscuro")){
                        nombreDelColor += "-Oscuro";
                    };
                    let result = colors.find(color => {
                        return color.name.toLowerCase().replaceAll("-","").trim() == nombreDelColor.toLowerCase().replaceAll("-","").trim();
                    }) 
                    // console.log(result);
                    // Si el color era válido
                    if (result) { 
                        console.log("Encontró, mezclando...");
                        // Si el color se puede mezclar
                        if (this.mezclas[result.id]) {
                            let newColor = findColorById(this.mezclas[result.id]);
                            // console.log("Mezclando en...");
                            // console.log(newColor);
                            let casillaCorrespondiente = document.querySelector(`.x${this.ubicacion[0]-1}y${this.ubicacion[1]-1}`) || document.querySelector(`#temp-color`);
                            this.color = newColor.name;
                            // console.log(this.codigo);
                            this.codigo = newColor.hex;
                            // console.log(newColor.hex);
                            casillaCorrespondiente.style.backgroundColor = "unset";
                            casillaCorrespondiente.style.backgroundColor = newColor.hex;
                            console.log(casillaCorrespondiente);
                            this.tipo = newColor.type;
                            this.mezclas = newColor.shuffle;
                            return true;
                        }
                    }
                    return false;
                };
                this.aclarar = function(){
                    if (!this.color.includes("Claro")) {
                        let thisColor = colors.find(color => {
                            return this.color == color.name
                            // return color.id  otroColor.toLowerCase().replaceAll(" ","").trim();
                        })
                        let result = colors.find(color => {
                            return color.id == thisColor.id + 100
                        });
                        if (result) {
                            let newColor = result;
                            let casillaCorrespondiente = document.querySelector(`.x${this.ubicacion[0]-1}y${this.ubicacion[1]-1}`) || document.querySelector(`#temp-color`);
                            this.color = newColor.name;
                            this.codigo = newColor.hex;
                            casillaCorrespondiente.style.backgroundColor = "unset";
                            casillaCorrespondiente.style.backgroundColor = newColor.hex;
                            this.tipo = newColor.type;
                            this.mezclas = newColor.shuffle;
                            return result;
                        } else {
                            alert("No se encontró una versión clara de: "+thisColor.name)
                            return false;
                        }
                    } else {
                        alert("Este color ya es claro");
                        return false;
                    }
                };
                this.oscurecer = function(){
                    if (!this.color.includes("Oscuro")) {
                        let thisColor = colors.find(color => {
                            return this.color == color.name
                            // return color.id  otroColor.toLowerCase().replaceAll(" ","").trim();
                        })
                        let result = colors.find(color => {
                            return color.id == thisColor.id - 100
                        });
                        if (result) {
                            let newColor = result;
                            let casillaCorrespondiente = document.querySelector(`.x${this.ubicacion[0]-1}y${this.ubicacion[1]-1}`) || document.querySelector(`#temp-color`);
                            this.color = newColor.name;
                            this.codigo = newColor.hex;
                            casillaCorrespondiente.style.backgroundColor = "unset";
                            casillaCorrespondiente.style.backgroundColor = newColor.hex;
                            this.tipo = newColor.type;
                            this.mezclas = newColor.shuffle;
                            return result;
                        } else {
                            alert("No se encontró una versión oscura de: "+thisColor.name)
                            return false;
                        }
                    } else {
                        alert("Este color ya es oscuro");
                        return false;
                    }
                };
            } else {
                // alert("Solo se pueden crear colores primarios!")
                return new Error ("Solo se pueden crear colores primarios");
            }
            // this.aclarar = function(){};
        } else {
            // alert("No existe el color "+colorName+" en este juego");
            return new Error ("No existe el color "+colorName+" en este juego");
        }

    }
}