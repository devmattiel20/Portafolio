/* =====================================================
   DATOS DE LOS PROYECTOS
   Información que utilizaremos en nuestro portfolio
   ===================================================== */


// Creamos un array que contiene todos nuestros proyectos
const projects = [

    // ---------- Proyecto 1 ----------

    {
        id: 1,

        title: "MattSports",

        image:
            "/images/MattSports.png",

        gallery: [
            "/images/MattSportst.png",
            "/images/mattSportsi.png"
        ],

        technologies: [
            "HTML",
            "CSS",
            "JavaScript"
        ],

        github:
            "https://github.com/devmattiel20/MattSports",

        demo:
            "https://mattsports.vercel.app/"
    },


    // ---------- Proyecto 2 ----------

    {
        id: 2,

        title: "Luvee",

        image:
            "/images/Luveeu.png",

        gallery: [
            "/images/Luveep.png",
            "/images/Luvee.png"
        ],

        technologies: [
            "React",
            "Tailwind",
            "CSS",
            "JavaScript",
            
        ],

        github:
            "https://github.com/devmattiel20/Luvee",

        demo:
            "#"
    },


    // ---------- Proyecto 3 ----------

    {
        id: 3,

        title: "Crediby",

        image:
            "/images/Crediby.png",

        gallery: [
            "/images/Experiencia.png",
            "/images/Hero.jpg"
        ],

        technologies: [
            "React",
            "CSS",
            "JavaScript"
        ],

        github:
            "#",

        demo:
            "#"
    },


    // ---------- Proyecto 4 ----------

    {
        id: 4,

        title: "Wematt",

        image:
            "/images/Wematt.png",

        gallery: [
            "/images/Heroo.jpg",
            "/images/tecnologias.png"
        ],

        technologies: [
            "React",
            "CSS",
            "JavaScript"
        ],

        github:
            "#",

        demo:
            "#"
    }

];


// Exportamos los proyectos para poder utilizarlos
// desde otros archivos JavaScript
export default projects;