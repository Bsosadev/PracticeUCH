const compras = [
    {   
        "id": "12",
        "uuid": "15414",
        "nombre": "Desarrollo Web",
        "curso": [
            {
                "cod": "14815",
                "descripcion": "jalemos todos :'v",
                "tema": "Javascrip",
            },
            {
                "cod": "14815",
                "descripcion": "jalemos todos :'v",
                "tema": "REACT JS",
            },
            {
                "cod": "14815",
                "descripcion": "jalemos todos :'v",
                "tema": "NODE JS",
            }
        ]
    },
    {
        "id": "16",
        "uuid": "1541458",
        "nombre": "Base de datos",
        "curso": [
            {
                "cod": "16815",
                "descripcion": "jalemos todos :'v",
                "tema": "MYSQL",
            },
            {
                "cod": "17815",
                "descripcion": "jalemos todos :'v",
                "tema": "SQL SERVER",
            },
            {
                "cod": "18815",
                "descripcion": "jalemos todos :'v",
                "tema": "SQL LITE",
            }
        ]
    },
    {
        "id": "18",
        "uuid": "15666",
        "nombre": "Ingenieria de software",
        "curso": [
            {
                "cod": "18815",
                "descripcion": "jalemos todos :'v",
                "tema": "Propiedades de sistema",
            },
            {
                "cod": "19815",
                "descripcion": "jalemos todos :'v",
                "tema": "Modelos de negocio",
            },
        ]
    }
];
//Imprimir esa lista de compras
const $misProductos = $("#misProductos");
compras.forEach((compra) => {
    //2. Crear una NUEVA URL donde usemos de parametro el ID
    const link = "cursos.html?idcompra="+compra.id;
    const template = `
        <article class="max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" data-id="${compra.id}" data-uuid="${compra.uuid}">
            <i class="fa-solid fa-cart-shopping-fast text-2xl text-white"></i>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${compra.nombre}</h5>
            <a href="${link}" class="inline-flex items-center px-5 py-2 text-xs font-medium text-center text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br rounded-lg">
                Ver Curso
                <i class="fa-sharp fa-solid fa-tags ml-1"></i>
            </a>
        </article>
    `;
    $misProductos.append(template);
});

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const idcompra = params.get("idcompra");
let misproductos = [];
if (idcompra) {
    compras.forEach((compra) => {
        if (compra.id == idcompra) {
            const mytitle = "Temas " + compra.nombre;
            $("#myTitle").html(mytitle);
            misproductos = compra.curso;           
        }
    });
    if (misproductos.length > 0) {
        misproductos.forEach((producto)=> {
            const template = `
                <article class="flex flex-col h-full bg-white border border-slate-400 rounded-xl">
                    <div class="p-4 md:p-6">
                        <span class="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500">
                            Codigo Curso: ${producto.cod}
                        </span>
                        <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
                            Descripcion: ${producto.descripcion}
                        </h3>
                        <p class="mt-3 inline-flex bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-2 rounded-lg dark:bg-green-900 dark:text-green-300">
                           Tema: ${producto.tema}
                        </p>
                    </div>
                </article>
            `;
            $("#myProducts").append(template);
        });
    }
}

// Verificar si el usuario está autenticado
$(document).ready(function(){
    const usuarioAutenticado = localStorage.getItem("usuarioAutenticado");
    if(!usuarioAutenticado) {
        location.href = "index.html";
    }
});

// Boton de cerrar sesion
$("#cerrarSes").on("click", function(){
    localStorage.removeItem("usuarioAutenticado");
});     