// Función para calcular la ecuación de la recta
export function calcularRecta(x1, y1, x2, y2) {
    // Paso 1: Calcular la pendiente (m)
    let pendiente = (y2 - y1) / (x2 - x1);
    let paso1 = "Paso 1: Calcular la pendiente (m):\n";
    paso1 += "m = (y2 - y1) / (x2 - x1) = (" + y2 + " - " + y1 + ") / (" + x2 + " - " + x1 + ") = " + pendiente + "\n\n";
    
    // Paso 2: Calcular la ordenada al origen (b) usando uno de los puntos
    let ordenadaAlOrigen = y1 - pendiente * x1;
    let paso2 = "Paso 2: Calcular la ordenada al origen (b) usando uno de los puntos:\n";
    paso2 += "b = y1 - mx1 = " + y1 + " - " + pendiente + " * " + x1 + " = " + ordenadaAlOrigen + "\n\n";
    
    // Paso 3: Formar la ecuación de la recta
    let ecuacion = "La ecuación de la recta es: y = " + pendiente + "x + " + ordenadaAlOrigen;
    let paso3 = "Paso 3: Formar la ecuación de la recta:\n";
    paso3 += ecuacion + "\n";
    
    // Combinar todos los pasos en un solo texto
    let pasos = paso1 + paso2 + paso3;
    
    // Retorna los pasos matemáticos y la ecuación de la recta
    return pasos;
}