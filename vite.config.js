// Importamos la función que nos permite configurar Vite
import { defineConfig } from 'vite'

// Importamos herramientas para trabajar con rutas
import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'


// Obtenemos la ubicación de la carpeta raíz del proyecto
const __dirname = dirname(
    fileURLToPath(import.meta.url)
)


// Exportamos la configuración de Vite
export default defineConfig({

    build: {

        // Configuración del proceso de construcción
        rollupOptions: {

            // Definimos todas las páginas HTML
            // que forman parte de nuestro sitio
            input: {

                // Página principal
                main: resolve(__dirname, 'index.html'),

                // Página About Me
                aboutme: resolve(
                    __dirname,
                    'aboutme/index.html'
                ),

                // Página de proyectos
                projects: resolve(
                    __dirname,
                    'projects/index.html'
                ),

                // Proyecto 1
                project1: resolve(
                    __dirname,
                    'projects/project-1/index.html'
                ),

                // Proyecto 2
                project2: resolve(
                    __dirname,
                    'projects/project-2/index.html'
                ),

                // Proyecto 3
                project3: resolve(
                    __dirname,
                    'projects/project-3/index.html'
                ),

                // Proyecto 4
                project4: resolve(
                    __dirname,
                    'projects/project-4/index.html'
                )

            }

        }

    }

})