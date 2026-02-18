const Garrafa = require(`./objeto`)

let garrafa = new Garrafa('medio', 2, 2, 'azul', 'azul')

let area = garrafa.calcularAreaBase()
console.log(`A área da garrafa é ${area.toFixed(3)} m²`)

let volume = garrafa.calcularVolume()
console.log(`O volume da garrafa é ${volume.toFixed(3)}`)