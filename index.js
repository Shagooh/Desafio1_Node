const {readCitas, createCitas} = require("./operaciones.js")

const [op, nombre, edad, tipo, color, enfermedad] = process.argv.slice(2)


if(op === "leer"){
    readCitas()
} 

else if (op === "registrar") {

    createCitas(nombre, edad, tipo, color, enfermedad)

} else {
    console.log("Error, el primer argumento debe ser registrar")
}