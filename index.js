function calcularFuncion(x) {
    return 3 * Math.pow(x, 2) + 2 * x;
}

const Menor = 2;
const Mayor = 3;

function calcularIntegralMatematica() {
    const resultadoSuperior = Math.pow(Mayor, 3) + Math.pow(Mayor, 2);
    const resultadoInferior = Math.pow(Menor, 3) + Math.pow(Menor, 2);
    return resultadoSuperior - resultadoInferior;
}

function calcularError(valorAproximado) {
    const valorReal = calcularIntegralMatematica();
    return Math.abs(valorReal - valorAproximado) / valorReal * 100;
}

const entradaCantidad = prompt("Ingrese la cantidad de veces que se ejecutará la simulación: ");
const Simulaciones = entradaCantidad !== null ? parseInt(entradaCantidad) || 0 : 0;

let sumaResultados = 0;
let maximoResultado = Number.MIN_SAFE_INTEGER;
let minimoResultado = Number.MAX_SAFE_INTEGER;

for (let i = 0; i < Simulaciones; i++) {
    const Random = Math.random() * (Mayor - Menor) + Menor;
    const resultadoFuncion = calcularFuncion(Random);
    sumaResultados += resultadoFuncion;
    maximoResultado = Math.max(maximoResultado, resultadoFuncion);
    minimoResultado = Math.min(minimoResultado, resultadoFuncion);
}

const valorAproximado = sumaResultados * (Mayor - Menor) / Simulaciones;

console.log(`Resultado Matemático: ${calcularIntegralMatematica()}`);
console.log(`Resultado Aproximado de la Integral (Monte Carlo): ${valorAproximado}`);
console.log(`Porcentaje de Error: ${calcularError(valorAproximado)}%`);
console.log(`Valor Máximo: ${Mayor}`);
console.log(`Valor Mínimo: ${Menor}`);