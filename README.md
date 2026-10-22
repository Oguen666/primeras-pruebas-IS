# primeras-pruebas-IS

Práctica previa al ToDo Refactor Lab: de ejecutar una función a comprobarla automáticamente. Cálculo de descuentos con JavaScript + Node.js, antes de llegar a Jest.

## Checkpoint antes de Jest y del ToDo

**1. ¿Por qué porcentaje.js y probarPorcentaje.js están separados?**
Para separar el código que hace el cálculo del código que lo comprueba. Así la función queda en un solo archivo, no se duplica, y el archivo de pruebas solo se encarga de importarla, ejecutarla y verificarla.

**2. ¿Qué hace module.exports?**
Hace que calcularDescuento esté disponible para que otro archivo del proyecto pueda usarla. La función sigue viva en porcentaje.js, no la copiamos; con exportarla basta para que se pueda importar desde otro lado.

**3. ¿Qué hace require("./porcentaje")?**
Trae al archivo actual lo que porcentaje.js exportó. El ./ significa "en esta misma carpeta" y Node lo encuentra aunque no escribamos la extensión .js.

**4. ¿Cuál es la diferencia entre ejecutar la función y comprobarla?**
Ejecutar es llamarla y ver qué número sale, pero el que decide si está bien o mal soy yo, mirando el resultado a mano. Comprobar es saber de antemano qué debería salir, dejar que el programa ejecute la función y que él solo diga PASS o FAIL comparando el obtenido con el esperado.

**5. ¿Por qué /10 fue un error lógico que Node no reportó?**
Porque era sintácticamente correcto y Node solo detecta errores de sintaxis o excepciones. Como era un problema lógico, entonces sí teníamos que hacer la comprobación nosotros mismos contra el resultado esperado.

**6. ¿Qué trabajo realizará Jest que hoy realiza comprobar()?**
Básicamente el mismo: ejecutar los casos, comparar el obtenido con el esperado y reportar si pasó o falló. La diferencia es que Jest trae todo eso ya hecho, con reportes más detallados, agrupación de casos y organización, en vez de tener que programarlo a mano como lo hicimos con comprobar().
