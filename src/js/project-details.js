/* =====================================================
   PROJECT-DETAIL.JS
   Lógica de las páginas individuales de proyectos
   ===================================================== */


// Importamos la información de todos nuestros proyectos
import projects from "./projects.js";


// -----------------------------------------------------
// 1. OBTENER LA URL ACTUAL
// -----------------------------------------------------

// window.location.pathname contiene la ruta actual.
//
// Por ejemplo:
//
// /projects/project-1/
//
// /projects/project-2/
//
// /projects/project-3/
const currentPath = window.location.pathname;


// -----------------------------------------------------
// 2. BUSCAR EL ID DEL PROYECTO
// -----------------------------------------------------

// Utilizamos una expresión regular para buscar
// "project-" seguido de uno o más números.
//
// Por ejemplo:
//
// project-1 → 1
// project-2 → 2
// project-10 → 10

const match = currentPath.match(/project-(\d+)/);


// -----------------------------------------------------
// 3. CONVERTIR EL RESULTADO EN UN NÚMERO
// -----------------------------------------------------

// Si encontramos un resultado, convertimos el número
// obtenido de texto a Number.
//
// Si no encontramos nada, usamos null.

const projectId = match
    ? Number(match[1])
    : null;


// -----------------------------------------------------
// 4. BUSCAR EL PROYECTO
// -----------------------------------------------------

// Buscamos dentro del array el proyecto cuyo ID
// coincida con el ID encontrado en la URL.

const project = projects.find(
    (project) => project.id === projectId
);


// -----------------------------------------------------
// 5. COMPROBAR QUE EL PROYECTO EXISTE
// -----------------------------------------------------

if (project) {

    // -------------------------------------------------
    // TÍTULO
    // -------------------------------------------------

    // Buscamos el elemento HTML donde aparecerá
    // el título del proyecto.
    const title = document.querySelector("#project-title");

    // Le asignamos el título que tenemos en nuestro objeto.
    title.textContent = project.title;


    // -------------------------------------------------
    // DESCRIPCIÓN
    // -------------------------------------------------

    const intro = document.querySelector("#project-intro");

    intro.textContent = project.description;


    // -------------------------------------------------
    // IMAGEN
    // -------------------------------------------------

    const image = document.querySelector("#project-image");

    // Cambiamos la ruta de la imagen.
    image.src = project.image;

    // También actualizamos el texto alternativo.
    image.alt = `Vista principal de ${project.title}`;

    const gallery = document.querySelector("#project-gallery");

    if (gallery && project.gallery) {
        project.gallery.forEach((galleryImage, index) => {
            const galleryItem = document.createElement("figure");
            galleryItem.className = "project-detail__gallery-item";
            galleryItem.innerHTML = `
                <img src="${galleryImage}" alt="${project.title}, vista descriptiva ${index + 1}">
            `;
            gallery.appendChild(galleryItem);
        });
    }


    // -------------------------------------------------
    // TECNOLOGÍAS
    // -------------------------------------------------

    const technologies =
        document.querySelector("#project-technologies");


    // Recorremos el array de tecnologías.
    project.technologies.forEach((technology) => {

        const technologyElement = document.createElement("article");
        technologyElement.className = "project-detail__technology";
        technologyElement.innerHTML = `
            <span class="project-detail__technology-mark" aria-hidden="true">
                ${technology.slice(0, 2).toUpperCase()}
            </span>
            <span class="project-detail__technology-name"></span>
        `;

        technologyElement.querySelector(
            ".project-detail__technology-name"
        ).textContent = technology;


        // Añadimos el elemento al contenedor.
        technologies.appendChild(
            technologyElement
        );

    });


    // -------------------------------------------------
    // BOTÓN DEMO
    // -------------------------------------------------

    const demo =
        document.querySelector("#project-demo");

    demo.href = project.demo;


    // -------------------------------------------------
    // BOTÓN GITHUB
    // -------------------------------------------------

    const github =
        document.querySelector("#project-github");

    github.href = project.github;

    console.log("Proyecto encontrado:", project);

} else {

    // Si no encontramos el proyecto, mostramos
    // un mensaje de error.

    console.error("No se encontró el proyecto.");

}