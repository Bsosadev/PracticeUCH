const perfilesAlumnos = [
    {
        nombre: "Brayam",
        edad: 20,
        curso: "Ingeniería Sistemas",
        promedio: 15
    },
]

function mostrarPerfiles() {
    const $contenedor = $("#perfiles-container");
    
    // Vaciar el contenedor antes de agregar nuevos elementos
    $contenedor.empty();
    
    // Recorrer el array de perfiles de alumnos
    perfilesAlumnos.forEach(perfil => {
        // Crear un nuevo elemento <div> para cada perfil de alumno
        const $perfilDiv = $("<div class='perfil-alumno'></div>");
        
        // Agregar los datos del perfil de alumno al elemento <div>
        $perfilDiv.append(`<p><strong>Nombre:</strong> ${perfil.nombre}</p>`);
        $perfilDiv.append(`<p><strong>Edad:</strong> ${perfil.edad}</p>`);
        $perfilDiv.append(`<p><strong>Curso:</strong> ${perfil.curso}</p>`);
        $perfilDiv.append(`<p><strong>Promedio:</strong> ${perfil.promedio}</p>`);
        
        // Agregar el elemento <div> al contenedor
        $contenedor.append($perfilDiv);
    });
}

// Llamar a la función para mostrar los perfiles de alumnos al cargar la página
$(document).ready(function() {
    mostrarPerfiles();
});