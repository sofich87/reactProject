// Función para generar una fecha aleatoria
export function generateRandomDate(start, end) {
    const startTime = start.getTime();
    const endTime = end.getTime();
    const randomTime = startTime + Math.random() * (endTime - startTime);
    return new Date(randomTime);
  }
  
  // Función para generar una fecha y hora aleatoria
  export function generateRandomDateTime(start, end) {
    const randomDate = generateRandomDate(start, end);
    const randomTime = Math.floor(Math.random() * 24) + ':' + Math.floor(Math.random() * 60);
    return `${randomDate.toLocaleDateString()} ${randomTime}`;
  }
  
