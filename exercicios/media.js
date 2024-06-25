/**
 * Calculo da média de duas notas
 * @author Arthur Garcia Volpini
 */

//importar o pacote readline-sync (input no console)
const input = require('readline-sync')

//variáveis
let nota1, nota2, media

console.clear()
console.log("cálculo da média")
//captura da nota pelo pacote readline-sync
//entrada
nota1 = Number(input.question("Digite a nota 1: "))
nota2 = Number(input.question("Digite a nota 2: "))
//processamento
media = (nota1 +nota2) /2
//saida
console.log(`Média: ${media.toFixed(1)}`)





