<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Tipos de recursos digitales: interactivos, multimedia, gamificados'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden


    p.mb-5 La diversidad de los Recursos Educativos Digitales (RED), permite a los educadores seleccionar y adaptar aquellos que mejor se ajustan a sus objetivos pedagógicos y a las necesidades de sus estudiantes. Los RED pueden clasificarse en función de su formato, su nivel de interactividad y su enfoque pedagógico. En esta sección, exploramos tres categorías principales: 

    .row.align-items-start.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/6.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
        AcordionA(tipo="b")
          .div(titulo="Los recursos interactivos")
            p Son aquellos que requieren la participación activa del estudiante para acceder al contenido o para completar una tarea. Estos recursos fomentan un aprendizaje más profundo al involucrar cognitivamente al estudiante, en el proceso de construcción del conocimiento. 
            p Ejemplos de recursos interactivos incluyen simulaciones virtuales que permiten a los estudiantes experimentar con conceptos abstractos en un entorno seguro, cuestionarios en línea con retroalimentación inmediata que ayudan a los estudiantes a autoevaluar su comprensión, y actividades de arrastrar y soltar que requieren la manipulación de elementos para demostrar el aprendizaje. Plataformas como H5P y Genially, ofrecen una amplia gama de herramientas para crear recursos interactivos sin necesidad de conocimientos avanzados de programación.

    
          .div(titulo="Los recursos multimedia")
            p Integran diferentes formatos de contenido como texto, imágenes, audio, video y animaciones, para presentar la información de una manera más atractiva y accesible. La combinación de estos formatos puede ayudar a los estudiantes con diferentes estilos de aprendizaje, a comprender mejor los conceptos y a retener la información, de manera más efectiva. 
            p Ejemplos de recursos multimedia incluyen videos explicativos que combinan imágenes y narración para ilustrar un tema, presentaciones interactivas que incorporan elementos visuales y auditivos, y pódcasts educativos que permiten a los estudiantes aprender mientras realizan otras actividades. YouTube 43 y Vimeo, son plataformas populares para encontrar y compartir recursos multimedia educativos.

    
          .div(titulo="Los recursos gamificados")
            p Aplican elementos y principios del diseño de juegos en contextos educativos, para aumentar la motivación y el compromiso de los estudiantes. Estos recursos buscan transformar la experiencia de aprendizaje haciéndola más divertida y desafiante a través de la incorporación de elementos como puntos, insignias, tablas de clasificación, desafíos y recompensas. La gamificación puede fomentar la participación activa, la resolución de problemas y el aprendizaje colaborativo en este sentido. Ortiz-Colón (2018), menciona que, la gamificación es una herramienta que puede convertir el aprendizaje en una actividad inmersiva. Perrotta y otros autores (2013), señalan que el hecho de aprender mediante disfrute y diversión puede ser un medio para introducir a los alumnos en un estado de flow. Este estado, traducido al español como flujo, se refiere a la sensación de inmersión completa en una tarea. 
            p Ejemplos de recursos gamificados incluyen juegos educativos en línea, plataformas de aprendizaje que utilizan mecánicas de juego para motivar a los estudiantes, y actividades de clase que incorporan elementos de juego como concursos y desafíos. Kahoot! y Quizizz, son herramientas populares para crear cuestionarios gamificados, mientras que Classcraft y ClassDojo, ofrecen plataformas completas para gamificar la experiencia del aula virtual.

    p.mb-5 La siguiente tabla presenta algunos ejemplos de tipos de recursos digitales y sus características:

    .titulo-figura.mb-4
      h5 Tabla 2.
      span Recursos educativos digitales
    .tabla-a.color-acento-botones.mb-5
      table
        thead
          tr
            th.bg-color-4.text-center.text-white  Tipo de recurso digital
            th.bg-color-4.text-center.text-white  Características
            th.bg-color-4.text-center.text-white  Ejemplos
        tbody.bg-color-6
          tr
            td Interactivos.
            td Requieren la participación activa del estudiante; fomentan la exploración y la práctica.
            td Simulaciones, cuestionarios en línea, actividades de arrastrar y soltar, mapas interactivos.
          tr
            td Multimedia.
            td Integran texto, imágenes, audio, video y animaciones.
            td Videos explicativos, presentaciones interactivas, pódcasts educativos, infografías animadas.
          tr
            td Gamificados.
            td Incorporan elementos de diseño de juegos como puntos, insignias, desafíos y recompensas.
            td Juegos educativos en línea, cuestionarios gamificados, plataformas de aprendizaje con mecánicas de juego.



    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.academia.edu/download/37743597/GracielaRabajoli_Webinar2012.pdf" target="_blank" rel="noopener noreferrer") Rabajoli, G., & Ibarra, M. (2012). Recursos digitales para el aprendizaje. 


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/vedJmCOYLuo?si=SSmqe15rrpCnMyAA" target="_blank" rel="noopener noreferrer") Ministerio TIC Colombia.  (2013, 4 de octubre) Recursos digitales para el aprendizaje. [video] YouTube. 



          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
