<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Principios de diseño instruccional aplicados a la producción de materiales digitales'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/7.png", data-aos="zoom-in")
      .col-lg-8
        p.mb-5(data-aos="fade-left") El diseño instruccional es un proceso sistemático para crear experiencias de aprendizaje efectivas y eficientes. Aplica teorías y modelos de aprendizaje para guiar la planificación, el desarrollo, la implementación y la evaluación de materiales y programas educativos. 
    
        .bg-color-2.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 En el contexto de la producción de Recursos Educativos Digitales (RED), la aplicación de principios de diseño instruccional es fundamental para garantizar que los materiales sean pedagógicamente sólidos, atractivos y que faciliten el logro de los objetivos de aprendizaje. En este diseño se deberá considerar el formato en el que se va a proponer, Pérez Serrano (2020), sugiere, “diseñe los [recursos] en múltiples formatos para que puedan ser leídos y utilizados en múltiples pantallas, considerando la accesibilidad de cada medio digital (pc, tabletas digitales o teléfonos inteligentes)”.

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema1/8.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-1.p-4.mb-3(data-aos="fade-left")
          p.mb-0 Por ejemplo, para el diseño de recursos educativos para teléfonos inteligentes, Domínguez Pérez (2018), dice: se requieren especificaciones pedagógicas, tecnológicas, y de diseño, debidamente planteadas y estructuradas. Si bien los estudiantes valoran el diseño atractivo de este tipo de recursos, es necesario cuidar su utilidad pedagógica, analizar y adecuar la información para poder transmitirla en períodos cortos. 
        p(data-aos="fade-left") Además, procurar que los textos mostrados recuperen la información más relevante a fin de evitar saturar la pantalla con textos muy largos o difíciles de leer, así como utilizar gráficos que apoyen lo expuesto por el instructor en el audio del video, cuidando el tamaño, color y tipo de letra.
    
    p.mb-5 Observe, a continuación, los principios de diseño instruccional, aplicados a la producción de materiales digitales:

    .bg-full-width.bg-fondo-1.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-10
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema1/9.svg', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="7.4%" y="66.5%" numero="+")
                h5 Fomenta la interactividad
                p Diseña actividades donde el estudiante aplique, interactúe y reflexione.
    
              .bg-color-white.box-shadow.p-3(x="2.7%" y="51%" numero="+")
                h5 Retroalimentación efectiva
                p Ofrece feedback oportuno, automatizado o personalizado.
    
              .bg-color-white.box-shadow.p-3(x="4.8%" y="6.5%" numero="+")
                h5 Evalúa el aprendizaje
                p Crea evaluaciones alineadas con los objetivos y mide el progreso.
    
              .bg-color-white.box-shadow.p-3(x="97.2%" y="21%" numero="+")
                h5 Definición de objetivos de aprendizaje
                p Defina lo que el estudiante logrará. Utilice la estrategia SMART.
    
              .bg-color-white.box-shadow.p-3(x="91.6%" y="44%" numero="+")
                h5 Conozca a los estudiantes
                p Analice conocimientos previos, habilidades, motivaciones y estilos de aprendizaje.

              .bg-color-white.box-shadow.p-3(x="89.7%" y="68%" numero="+")
                h5 Organización clara del contenido
                p Secuencia lógica, agrupa temas relacionados y utiliza elementos visuales.

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/10.png", alt="").mb-4.mb-lg-0
      .col-lg-8
        p Ampliemos la información sobre estos principios:
        AcordionA(tipo="b")
          .div(titulo="Definición clara de los objetivos de aprendizaje")
            p Uno de los principios claves del diseño instruccional. Antes de crear cualquier RED, es esencial identificar qué se espera que los estudiantes aprendan o sean capaces de hacer al finalizar la interacción con el recurso. Estos objetivos deben ser específicos, medibles, alcanzables, relevantes y con plazos definidos (SMART).
          .div(titulo="Análisis de las características de los estudiantes ")
            p Principio importante para comprender los conocimientos previos, las habilidades, los estilos de aprendizaje, las motivaciones y las necesidades de los estudiantes es crucial para diseñar RED que sean relevantes y efectivos para ellos.
          .div(titulo="Organización y estructuración lógica del contenido")
            p El diseño instruccional también enfatiza su importancia. El material debe presentarse de manera clara y coherente, utilizando estrategias como la secuenciación lógica, la agrupación de información relacionada y el uso de elementos visuales para facilitar la comprensión.
    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema1/11.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
        AcordionA(tipo="b")
          .div(titulo="Interactividad y la participación activa del estudiante")
            p Estos son principios fundamentales en el diseño instruccional para RED. Incorporar actividades que requieran que los estudiantes interactúen con el material, apliquen sus conocimientos y reflexionen sobre lo que están aprendiendo, puede mejorar significativamente la retención y la comprensión.
          .div(titulo="Retroalimentación oportuna y significativa")
            p Otro principio esencial para proporcionar a los estudiantes información sobre su progreso y desempeño, les ayuda a identificar áreas de mejora y a consolidar su aprendizaje. La retroalimentación puede ser automatizada en el caso de cuestionarios en línea, o proporcionada por el instructor en actividades más complejas.
          .div(titulo="Evaluación del aprendizaje")
            p El diseño instruccional también lo considera, porque es importante diseñar estrategias de evaluación que estén alineadas con los objetivos de aprendizaje y que permitan medir el progreso de los estudiantes y la efectividad de los RED.
    
    .bg-full-width.bg-color-2.mb-0
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/12.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Además de estos principios generales, existen varios modelos de diseño instruccional que pueden guiar la producción de RED, como el modelo ADDIE (Análisis, Diseño, Desarrollo, Implementación y Evaluación), el modelo de Gagné  y el modelo ASSURE. Cada modelo ofrece un marco estructurado para abordar el proceso de diseño instruccional de manera sistemática.





    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.scielo.org.mx/scielo.php?pid=S1665-61802020000100022&script=sci_arttext" target="_blank" rel="noopener noreferrer") López Gil, K. S., & Chacón Peña, S. (2020). Escribir para convencer: experiencia de diseño instruccional en contextos digitales de autoaprendizaje. Apertura (Guadalajara, Jal.), 12(1), 22-38. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.academia.edu/download/31764582/14.pdf" target="_blank" rel="noopener noreferrer") Agudelo, M. (2009). Importancia del diseño instruccional en ambientes virtuales de aprendizaje. Nuevas ideas en informática educativa, 5(2), 118-127.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=kSmU____uiU&ab_channel=INTEF" target="_blank" rel="noopener noreferrer") INTEF.(2020, 22 de julio). Diseño Instruccional [Video] YouTube

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')


</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
