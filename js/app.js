var estudiantes = [];

function obtenerListaEstudiantes() {
    // TO DO: Retornar la lista de estudiantes
    return estudiantes;
}

function agregarEstudiante() {
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    // TO DO: Retornar el estudiante recientemente creado

    var nombre =  prompt('Dame nombre: ');
    var pTecnicos = prompt("Dame puntos tecnicos: ");
    var pHse = prompt("Dame puntos HSE: ");
    var estudiante = {
        nombre : nombre,
        pTecnicos : pTecnicos,
        pHse : pHse
    };

    estudiantes.push(estudiante);
    return estudiante;
    
}

function mostrar(estudiante) {
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante 
    var resultado = "";
    resultado += "<div class='row'>";
    resultado += "<div class='col m12'>";
    resultado += "<div class='card blue-grey darken-1'>";
    resultado += "<div class='card-content white-text'>";
    resultado += "<p><strong>Nombre:</strong> " + estudiante.nombre + "</p>";
    resultado += "<p><strong>Puntos Técnicos:</strong> " + estudiante.pTecnicos + "</p>";
    resultado += "<p><strong>Puntos HSE:</strong> " + estudiante.pHse + "</p>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    return resultado;   
}

function mostrarLista(estudiantes) {
    // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
    // Retornar el template de todos los estudiantes
    var res = "";

    estudiantes.forEach(function (estudiante){
     res = res + mostrar(estudiante);
    })
    return res;
    
}

function buscar(nombre, estudiantes) {
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    // Retornar el objeto del estudiante buscado
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS
    var estudiantePerdido = estudiantes.filter(function (estudiante){
        return estudiante.nombre === nombre;
    });
    return estudiantePerdido;
}

function topTecnico(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor
    /*
        var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b-a});
    */
    return estudiantes.sort(function (estudiante){
            return b.pTecnicos - a.pTecnicos;

    })
    
}

function topHSE(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor
    
}