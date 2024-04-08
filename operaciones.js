const fs = require("fs")
const readCitas = () => {

    try {
        const read = JSON.parse(fs.readFileSync("citas.json", "utf-8"))
        console.log(read)

    } catch (error) {
        console.log(error)
    }
}

const createCitas = (nombre, edad, tipo, color, enfermedad) => {

    try {
        const citas = JSON.parse(fs.readFileSync("citas.json", "utf-8"))
        citas.push({nombre, edad, tipo, color, enfermedad})
        fs.writeFileSync("citas.json", JSON.stringify(citas))
        console.log("Cita agendada correctamente")
    } catch (error) {
        console.log(error)
    }

}


module.exports = {readCitas, createCitas}