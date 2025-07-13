<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Definiendo conceptos claves y características de los RED     '")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/1.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") Para establecer una comprensión común, es fundamental definir qué se entiende por Recursos Educativos Digitales. Según el Ministerio de Educación Nacional (MEN) de Colombia, en su definición del 2012, los RED son “todo tipo de material que tiene una intencionalidad y finalidad enmarcada en una acción educativa, cuya información es digital” (Universidad Nacional Abierta y a Distancia UNAD de Colombia, s.f.). 
    
        .bg-color-2.p-4.mb-5(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Esta definición subraya dos aspectos esenciales: la intención pedagógica y el formato digital. No cualquier contenido digital constituye un RED; debe estar específicamente diseñado y utilizado con un propósito educativo claro. Esta perspectiva implica que la creación de RED requiere una reflexión pedagógica sobre los objetivos de aprendizaje y cómo el recurso contribuirá a alcanzarlos.
        p En el ámbito de los recursos educativos digitales, existen varios términos relacionados que frecuentemente se utilizan de manera intercambiable, aunque presentan matices importantes. Entre ellos se encuentran los Recursos Educativos Abiertos (REA), los Open Educational Resources (OER) y los Recursos Educativos Digitales Abiertos (REDA).
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/3.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-3.p-4.mb-5(data-aos="fade-left")
          p.mb-0 La UNESCO, en el 2019, define los OER como “materiales de enseñanza, aprendizaje e investigación en cualquier medio, digital o de otro tipo, que residen en el dominio público o que se han publicado con una licencia abierta que permite el acceso, uso, adaptación y redistribución gratuitos por otros” (Villegas Dianta, 2024).
        p(data-aos="fade-left") La interconexión de estos términos refleja un movimiento global hacia la promoción de materiales educativos accesibles y reutilizables. Esta filosofía tiene implicaciones significativas para la disponibilidad y el potencial de colaboración en la creación y uso de RED, dado que fomenta el intercambio de conocimientos y la adaptación de recursos a diferentes contextos educativos.

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Características de los RED
    
    p.mb-5 Los Recursos Educativos Digitales se distinguen de los materiales educativos tradicionales, por una serie de características inherentes a su formato digital. Algunas de estas, son: 

    .row.align-items-start.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/4.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
        AcordionA(tipo="b")
          .div(titulo="Multimedia")
            p Los RED, normalmente integran diversos formatos como texto, imágenes, audio, video y animaciones para enriquecer la experiencia de aprendizaje. Este enfoque multisensorial puede atender a diferentes estilos de aprendizaje y hacer que la información sea más atractiva y comprensible (Posada Prieto, 2012) . Al presentar la información a través de múltiples canales sensoriales, los RED pueden activar diferentes áreas del cerebro, lo que potencialmente conduce a una mejor codificación y recuperación de la información. Por ejemplo, un concepto explicado mediante texto y una animación visual, puede ser más fácilmente comprendido y recordado que solo el texto.
    
          .div(titulo="Interactividad")
            p Muchos RED están diseñados para ser interactivos, permitiendo a los estudiantes participar activamente con el contenido a través de simulaciones, cuestionarios y otras actividades. Esta participación activa puede fomentar un aprendizaje más profundo. Cuando los estudiantes interactúan activamente con un recurso, no solo reciben información de manera pasiva. Este compromiso puede llevar a una comprensión más profunda, a medida que aplican conceptos, prueban sus conocimientos y reciben retroalimentación inmediata que les ayuda a corregir errores y reforzar el aprendizaje.
    
          .div(titulo="Accesibilidad")
            p Estos recursos consideran las necesidades de todos los estudiantes, incluyendo aquellos con discapacidades, y a menudo se adhieren a pautas como las Directrices de Accesibilidad para el Contenido Web (WCAG) (<em>Web Content Accessibility Guidelines</em>). El enfoque en la accesibilidad subraya la importancia de la inclusión en la educación virtual. Esto implica que los creadores deben conocer los estándares y las mejores prácticas de accesibilidad para garantizar que sus recursos sean utilizables por personas con una amplia gama de habilidades y discapacidades. Esto podría implicar proporcionar texto alternativo para las imágenes, subtítulos para los videos y garantizar la navegación mediante teclado, lo que no solo beneficia a los usuarios con discapacidades, sino que también puede mejorar la usabilidad para todos.
    
          .div(titulo="Flexibilidad")
            p Pueden utilizarse en diversas situaciones de aprendizaje, adaptándose a diferentes enfoques pedagógicos y necesidades de los estudiantes. Pueden apoyar tanto el aprendizaje sincrónico como el asincrónico. Debido a que los RED pueden accederse en cualquier momento y lugar, ofrecen a los estudiantes la flexibilidad de estudiar a su propio ritmo y revisar los materiales, según sea necesario.

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/5.png", alt="").mb-4.mb-lg-0
      .col-lg-8
        AcordionA(tipo="b")
          .div(titulo="Flexibilidad")
            p Pueden utilizarse en diversas situaciones de aprendizaje, adaptándose a diferentes enfoques pedagógicos y necesidades de los estudiantes. Pueden apoyar tanto el aprendizaje sincrónico como el asincrónico. Debido a que los RED pueden accederse en cualquier momento y lugar, ofrecen a los estudiantes la flexibilidad de estudiar a su propio ritmo y revisar los materiales, según sea necesario.
          .div(titulo="Modularidad")
            p Muchos RED se diseñan de manera modular, lo que permite la separación y la reutilización de componentes individuales en diferentes contextos de aprendizaje; la modularidad promueve la eficiencia y reduce la redundancia en la creación de contenido. Esto implica que diseñar RED con componentes reutilizables, puede ahorrar tiempo y esfuerzo. Cuando los RED se dividen en módulos más pequeños y autónomos, estos módulos pueden combinarse y reorganizarse fácilmente para crear diferentes experiencias de aprendizaje. Esta reutilización permite a los educadores adaptar el contenido a objetivos de aprendizaje específicos y evitar la creación del mismo material, varias veces.
          .div(titulo="Adaptabilidad y reutilización")
            p Estos recursos suelen permitir a los educadores su uso en diferentes contextos, e incluso, en muchos casos, la modificación del contenido. Cuando cuentan con licencias abiertas, como sucede con los Recursos Educativos Abiertos (REA), esta flexibilidad se garantiza de manera explícita. Esta posibilidad de adaptar y personalizar los materiales, según las necesidades de los estudiantes y los estilos de enseñanza, favorece un enfoque más colaborativo que, a su vez, impulsa la mejora continua de los recursos y el intercambio de buenas prácticas entre instituciones educativas.
          .div(titulo="Interoperabilidad")
            p La interoperabilidad garantiza que los RED puedan integrarse fácilmente en diversos entornos virtuales de aprendizaje. Esto implica la importancia de adherirse a los estándares técnicos en el desarrollo de RED. Si los RED son interoperables, pueden utilizarse sin problemas en diferentes plataformas educativas, lo que los hace más versátiles y accesibles a una audiencia más amplia de educadores y estudiantes. Esto reduce las barreras técnicas para la adopción y el uso de recursos digitales.
          .div(titulo="Portabilidad")
            p Los RED deben ser accesibles a través de diferentes dispositivos y sistemas operativos, lo que asegura que los estudiantes puedan utilizar los RED sin importar el dispositivo que emplee. Esto pone de relieve la importancia de un diseño responsivo y la compatibilidad multiplataforma. En el actual panorama tecnológico, los estudiantes emplean diversos dispositivos para acceder a contenido en línea. Los RED portátiles aseguran que los materiales de aprendizaje sean accesibles en computadoras de escritorio, portátiles, tabletas y teléfonos inteligentes, ofreciendo una experiencia de aprendizaje coherente y conveniente.
    
    p.mb-5 La siguiente tabla resume las características claves de los Recursos Educativos Digitales:

    .titulo-figura.mb-4
      h5 Tabla 1.
      span Características claves de los RED
    .tabla-a.color-acento-botones.mb-5
      table
        thead
          tr
            th.bg-color-4.text-center.text-white Característica
            th.bg-color-4.text-center.text-white Descripción
            th.bg-color-4.text-center.text-white Implicaciones pedagógicas
        tbody.bg-color-6
          tr
            th Multimedia.
            td Integración de texto, imágenes, audio, video y animaciones.
            td Atiende a diversos estilos de aprendizaje, aumenta el atractivo y la comprensión.
          tr
            th Interactividad.
            td Permite la participación activa del estudiante a través de simulaciones, cuestionarios, etc.
            td Fomenta un aprendizaje más profundo y la aplicación activa del conocimiento.
          tr
            th Accesibilidad.
            td Considera las necesidades de todos los estudiantes, incluyendo aquellos con discapacidades.
            td Promueve la inclusión y garantiza la igualdad de oportunidades de aprendizaje.
          tr
            th Flexibilidad.
            td Puede utilizarse en múltiples situaciones de aprendizaje y adaptarse a diferentes enfoques pedagógicos.
            td Facilita el aprendizaje sincrónico y asincrónico, y se ajusta a las necesidades individuales.
          tr
            th Modularidad.
            td Diseño que permite la separación y reutilización de componentes individuales.
            td Mejora la eficiencia en la creación de contenido y facilita la adaptación a diferentes contextos.
          tr
            th Adaptabilidad y reutilización.
            td Posibilidad de ser modificado y utilizado en diversos contextos, por los educadores.
            td Permite la personalización de los recursos y el intercambio de mejores prácticas.
          tr
            th Interoperabilidad.
            td Capacidad de funcionar con diferentes plataformas y LMS.
            td Asegura la integración fácil en diversos entornos virtuales de aprendizaje.
          tr
            th Portabilidad.
            td Accesible a través de diferentes dispositivos y sistemas operativos.
            td Garantiza el acceso al contenido independientemente del dispositivo utilizado.



    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.redalyc.org/pdf/4985/498573055005.pdf " target="_blank" rel="noopener noreferrer") Haak, L. S. (2005). Recursos educativos digitales Procesos de mediación y mediatización en la comunicación pedagógica. Revista Digital de Investigación en Docencia Universitaria, 1(1), 1-19.
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://dialnet.unirioja.es/servlet/articulo?codigo=7470457" target="_blank" rel="noopener noreferrer") Losada, B. M., Cárdenas, M. I. Z., & Vásquez, S. I. A. (2020). Entorno virtual para cocrear recursos educativos digitales en la educación superior. Campus Virtuales, 9(1), 101-112.

            

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/live/l-KdU2FeIMM?si=1pWGK6DIGFMvH97-" target="_blank" rel="noopener noreferrer") INTEF. (2025, 19 de mayo) Calidad de los recursos educativos digitales: aspectos técnicos (4ª Edición) [video] YouTube. 



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
