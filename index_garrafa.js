const Garrafa = require(`./objeto`)

let garrafa = new Garrafa('medio', 2, 2, 'azul', 'azul')
let garrafa2 = new Garrafa('grande', 3, 3, 'vermelho', 'vermelho')

let area = garrafa.calcularAreaBase()
console.log(`A área da garrafa é ${area.toFixed(3)} m²`)

let volume = garrafa.calcularVolume()
console.log(`O volume da garrafa é ${volume.toFixed(3)}`)

garrafa.imprimir(volume)

let area2 = garrafa2.calcularAreaBase()
console.log(`A área da garrafa2 é ${area2.toFixed(3)} m²`)

let volume2 = garrafa2.calcularVolume()
console.log(`O volume da garrafa2 é ${volume2.toFixed(3)}`)

garrafa.imprimir(volume2)