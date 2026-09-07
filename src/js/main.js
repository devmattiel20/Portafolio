/* =====================================================
   MAIN.JS
   Lógica principal del portfolio
   ===================================================== */


// Importamos la información de nuestros proyectos
import projects from "./projects.js";


// Buscamos el contenedor donde aparecerán
// nuestras tarjetas
const projectsList = document.querySelector(".projects-list");


// Verificamos que el contenedor exista
if (projectsList) {

    // Recorremos todos los proyectos
    projects.forEach((project) => {

        // Creamos el elemento <a>
        // que funcionará como tarjeta
        const projectCard = document.createElement("a");


        // Le asignamos las clases CSS
        projectCard.classList.add("project-item");


        // Le indicamos a dónde debe llevarnos
        // cuando hagamos clic
        projectCard.href =
            `/projects/project-${project.id}/`;


        // Creamos el contenido HTML
        // utilizando la información del proyecto
        projectCard.innerHTML = `

            <div class="project-item__image">

                <img
                    src="${project.image}"
                    alt="Vista previa de ${project.title}"
                >

            </div>


            <div class="project-item__content">

                <span class="project-item__number">
                    ${String(project.id).padStart(2, "0")}
                </span>


                <h2 class="project-item__title">
                    ${project.title}
                </h2>


                <span class="project-item__link">
                    Ver proyecto →
                </span>

            </div>

        `;


        // Añadimos la tarjeta al contenedor
        projectsList.appendChild(projectCard);

    });

}