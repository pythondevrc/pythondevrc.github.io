const fs = require('fs');

// Leer el archivo JSON con información sobre las islas y sus industrias
const data = fs.readFileSync('./pixelstools/src/assets/data/landsdata.json');
const islas = JSON.parse(data);

// Definir el grafo de islas y sus conexiones
const numNodos = 5000;
const grafo = {};
// Crear conexiones circulares
for (let i = 1; i <= numNodos; i++) {
  grafo[i] = [];
  grafo[i].push((i % numNodos) + 1); // Conexión con el siguiente nodo
  grafo[i].push(i === 1 ? numNodos : i - 1); // Conexión con el nodo anterior
}

// Función para obtener las industrias de una isla
function obtenerIndustrias(isla) {
  return islas[isla].industrias || [];
}

// Función para calcular el número de industrias visitadas en un camino
function contarIndustriasVisitadas(camino) {
  const industriasVisitadas = new Set();
  camino.forEach(isla => {
      obtenerIndustrias(isla).forEach(industria => {
          industriasVisitadas.add(industria);
      });
  });
  return industriasVisitadas.size;
}

// Algoritmo de Dijkstra para encontrar el camino óptimo
function encontrarCaminoOptimo(inicio, fin) {
  const visitado = new Set();
  const distancia = {};
  const caminoOptimo = {};
  Object.keys(islas).forEach(isla => {
      distancia[isla] = Infinity;
  });
  distancia[inicio] = 0;
  while (visitado.size < Object.keys(islas).length) {
      const islaActual = Object.keys(islas).reduce((a, b) => distancia[a] < distancia[b] && !visitado.has(a) ? a : b);
      visitado.add(islaActual);
      if (islaActual === fin) {
          break;
      }
      for (const vecino of grafo[islaActual]) {
          const costo = obtenerIndustrias(islaActual).length > 0 ? 1 : 0.5;
          const nuevaDistancia = distancia[islaActual] + costo;
          if (nuevaDistancia > 1.5 && obtenerIndustrias(vecino).length === 0) {
              // Si el costo acumulado supera 1.5 y la isla vecina no tiene industrias
              const nuevoDistancia = nuevaDistancia + 1;
              if (nuevoDistancia < distancia[vecino]) {
                  distancia[vecino] = nuevoDistancia;
                  caminoOptimo[vecino] = islaActual;
              }
          } else if (nuevaDistancia < distancia[vecino]) {
              distancia[vecino] = nuevaDistancia;
              caminoOptimo[vecino] = islaActual;
          }
      }
  }
  const camino = [fin];
  let isla = fin;
  while (isla !== inicio) {
      isla = caminoOptimo[isla];
      camino.unshift(isla);
  }
  return camino;
}

// Función para encontrar el mejor camino
function encontrarMejorCamino() {
    let mejorInicio;
    let mejorFinal;
    let mejorCosto = Infinity; // Inicializar con un valor alto para encontrar el mínimo
    let mejorIndustrias = 0; // Inicializar para maximizar las industrias visitadas

    for (let inicio = 1; inicio <= numNodos; inicio++) {
        for (let final = 1; final <= numNodos; final++) {
            if (inicio !== final) {
                const camino = encontrarCaminoOptimo(inicio, final);
                const costo = camino.length * 0.5;
                const industrias = contarIndustriasVisitadas(camino);

                // Evaluar si este camino es mejor que el mejor encontrado hasta ahora
                if (costo < mejorCosto || (costo === mejorCosto && industrias > mejorIndustrias)) {
                    mejorInicio = inicio;
                    mejorFinal = final;
                    mejorCosto = costo;
                    mejorIndustrias = industrias;
                }
            }
        }
    }

    return {
        mejorInicio,
        mejorFinal,
        mejorCosto,
        mejorIndustrias
    };
}

// Ejemplo de uso:
const mejorCamino = encontrarMejorCamino();
console.log("Mejor inicio:", mejorCamino.mejorInicio);
console.log("Mejor final:", mejorCamino.mejorFinal);
console.log("Costo del mejor camino:", mejorCamino.mejorCosto);
console.log("Número de industrias visitadas en el mejor camino:", mejorCamino.mejorIndustrias);
