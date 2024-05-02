import React from 'react'
import './Resolucion.css'


const Resolucion = ({x1, x2, y1, y2}) => {


    // --------------------------------------------------------------------------------------------------------------------

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

    //---------------------------------------------------------------------------------------------------------------------

/*     let deciamalAFraccion = (decimal) => {
        let multiplicador = 1
        
        while(decimal * multiplicador % 1 !== 0) {
            multiplicador *= 10
        }

        let numerador = decimal * multiplicador

        let denominador = multiplicador

        let mcd = function (a,b) {
            return b ? mcd (b,a%b) :a
        }

        let divisorComun = mcd(numerador, denominador)

        let numeradorSimplificado = numerador/divisorComun
        let denominadorSimplificado = denominador/divisorComun
        
        let data = {
            a: numeradorSimplificado,
            b: denominadorSimplificado,
            text: `${numeradorSimplificado}/${denominadorSimplificado}`
        }

        return data
    } */

    function decimalAFraccion(decimal) {
        const precision = 1e9; // precisión para evitar problemas de redondeo
        let numerador = decimal * precision;
        let denominador = precision;
        const gcd = function gcd(a, b) {
            return b ? gcd(b, a % b) : a;
        };
        const divisorComun = gcd(numerador, denominador);
        numerador /= divisorComun;
        denominador /= divisorComun;
        return numerador + "/" + denominador;
    }

    return (
        <>
            <div className='padre-desarrollo'>
                <div className='sejmento'>
                    <p className='text'>Paso 1: Calcular la pendiente (m) </p>
                    <p>m = (y2 - y1) / (x2 - x1)</p>
                    <p>{`( ${y2} - ${y1} ) ( ${x2} - ${x1})`}</p>
                    <p>{decimalAFraccion(pendiente)}</p>
                </div>
                <div className='lineas'></div>
                <div className='sejmento'>
                    <p>Paso 2: Calcular la ordenada al origen (b) usando uno de los puntos</p>
                    <p>b = y1 -m * x1</p>
                    <p>{`${y1} - ${pendiente} * ${x1}`}</p>
                    <p>{decimalAFraccion(ordenadaAlOrigen)}</p>
                </div>
                <div className='lineas'></div>
                <div className='sejmento'>
                    <p>Paso 3: Formar la ecuacion de la recta</p>
                    <p>La ecuacion de la recta es</p>
                    <div className='resultados-justos'>
                        <p className='resultado'>{`Y = ${decimalAFraccion(pendiente)}`}</p>
                        <p className='resultado'>{`X = ${decimalAFraccion(ordenadaAlOrigen)}`}</p>
                    </div>
                </div>
            </div>
        </>

    )

}

export default Resolucion