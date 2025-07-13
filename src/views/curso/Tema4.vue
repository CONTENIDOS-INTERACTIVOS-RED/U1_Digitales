<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'4. Accesibilidad y usabilidad en los recursos digitales'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/1.png", data-aos="zoom-in")
      .col-lg-8
        p.mb-5(data-aos="fade-left") La accesibilidad y la usabilidad, son dos aspectos cruciales a considerar en la producción de Recursos Educativos Digitales (RED) para garantizar que sean inclusivos y efectivos para todos los estudiantes, incluyendo aquellos con discapacidades.
    
        .bg-color-3.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La accesibilidad se refiere al grado en que los RED pueden ser utilizados por la mayor cantidad posible de personas, independientemente de sus capacidades físicas, sensoriales o cognitivas. Un RED accesible está diseñado de manera que pueda ser percibido, operado y comprendido por todos los usuarios. Esto implica seguir pautas y estándares de accesibilidad web, como las Web Content Accessibility Guidelines (WCAG).

    #t_4_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.1] La Importancia de la accesibilidad para diversos estudiantes
    
    p.mb-5 La accesibilidad aborda las necesidades específicas de los estudiantes con diversas discapacidades:
    
    .bg-full-width.bg-color-7
      .p-4.p-md-5
        div.row.justify-content-center.align-items-stretch.mb-3
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/3.svg" alt="" style="width: 90px")
              h5.text-center Discapacidad visual
              p.mb-0.text-center Para aquellos con discapacidad visual, se utilizan lectores de pantalla que convierten el texto en voz o Braille, y se proporcionan textos alternativos para las imágenes.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/4.svg" alt="" style="width: 90px")
              h5.text-center Discapacidad auditiva
              p.mb-0.text-center Los estudiantes con discapacidad auditiva se benefician de subtítulos y transcripciones para el contenido de audio y video.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/5.svg" alt="" style="width: 90px")
              h5.text-center Discapacidad motriz
              p.mb-0.text-center La navegación por teclado permite, a los estudiantes con discapacidad motriz, interactuar con los recursos sin necesidad de un ratón.
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/6.svg" alt="" style="width: 90px")
              h5.text-center Discapacidad cognitiva
              p.mb-0.text-center Para los estudiantes con discapacidad cognitiva, se recomienda el uso de lenguaje claro y una navegación consistente.
        
        .row.mb-5
          .col-lg-4.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema2/7.png", data-aos="zoom-in")
          .col-lg-8.order-lg-1
            .bg-color-1.p-4.mb-3(data-aos="fade-left")
              p.mb-0 Es importante destacar que un diseño accesible no solo beneficia a los estudiantes con discapacidades identificadas, sino que también mejora la usabilidad para todos los estudiantes. Por ejemplo, las transcripciones claras pueden ayudar a todos los estudiantes a revisar el material, y un contenido bien estructurado mejora la comprensión general.  
            p(data-aos="fade-left") La accesibilidad fomenta la diversidad y la inclusión en el aula virtual al eliminar barreras que podrían impedir la participación de ciertos estudiantes. En última instancia, la accesibilidad se considera un requisito fundamental para la inclusión social y la igualdad de acceso a la información, la educación y el empleo en una sociedad cada vez más digitalizada.
    
    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/8.png", alt="").mb-4.mb-lg-0
      .col-lg-8
        p A continuación, conozcamos la aplicación práctica de los principios de accesibilidad en los RED:
        AcordionA(tipo="b")
          .div(titulo="Haciendo el texto accesible")
            p Formato, texto alternativo y legibilidad. El uso de un formato claro y coherente, como encabezados, listas y párrafos, mejora la legibilidad y la navegación para todos los usuarios, especialmente para aquellos que utilizan lectores de pantalla. 
            p Es fundamental proporcionar texto alternativo (alt text) para las imágenes y otro contenido no textual, con el fin de transmitir su significado a los usuarios que no pueden verlos. El texto alternativo debe ser conciso, descriptivo y contextual. Se recomienda utilizar formatos de fuente accesibles, como las fuentes sans-serif (Arial, Calibri, Verdana), y tamaños de fuente apropiados (al menos 12 puntos). 
            p Es crucial asegurar un contraste de color suficiente entre el texto y el fondo, para los usuarios con baja visión o daltonismo, y se aconseja utilizar herramientas de verificación de contraste. No se debe utilizar el color como único medio para transmitir información. Finalmente, se sugiere utilizar un lenguaje claro y sencillo, evitando la jerga y las oraciones complejas.

          .div(titulo="Asegurando la accesibilidad de las imágenes")
            p Texto alternativo, contexto y mejores prácticas. Se reitera la importancia del texto alternativo y se proporciona más orientación sobre la redacción de descripciones efectivas, incluyendo la necesidad de ser preciso, conciso y contextual. Se explica cuándo utilizar descripciones largas para imágenes complejas como gráficos y diagramas. Se aconseja evitar el texto dentro de las imágenes siempre que sea posible y, si es necesario, asegurar un tamaño y un contraste suficientes. Se destaca la importancia de proporcionar contexto para las imágenes dentro del texto circundante. Se explica cómo manejar las imágenes decorativas (utilizando texto alternativo nulo).
          .div(titulo="Creando audio accesible")
            p Transcripciones, descripciones y controles del reproductor. Se subraya la necesidad de proporcionar transcripciones para todo el contenido de audio, incluyendo podcasts y audio incrustado en videos. Se recomienda proporcionar descripciones de audio para la información visual en videos que no se transmite a través del audio. Se aconseja utilizar reproductores de audio accesibles con funciones como control de volumen, ajuste de la velocidad de reproducción y navegación por teclado. Se destaca la importancia de grabaciones de audio de alta calidad con un mínimo de ruido de fondo. Se menciona el uso de subtitulado en tiempo real para eventos de audio o video en vivo.
    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema2/9.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
        AcordionA(tipo="b")
          .div(titulo="Desarrollando video accesible")
            p Subtítulos, descripciones de audio y controles de usuario. Se reitera la necesidad de subtítulos precisos y sincronizados para todo el contenido de video. Se enfatiza la importancia de las descripciones de audio para transmitir información visual. Se recomienda utilizar reproductores de vídeo accesibles que admitan la navegación por teclado y permitan a los usuarios controlar los subtítulos y las descripciones de audio. Se aconseja proporcionar transcripciones como alternativa tanto al audio como al video. Se sugiere asegurar un contraste de color y un brillo suficientes en los elementos visuales. Se menciona la necesidad de evitar contenido parpadeante que podría desencadenar convulsiones.
          .div(titulo="Diseñando elementos interactivos accesibles")
            p Navegación por teclado e instrucciones claras. Se explica la importancia de asegurar que todos los elementos interactivos (botones, enlaces, formularios, cuestionarios) sean navegables utilizando únicamente el teclado para los usuarios que no pueden usar un ratón. Se recomienda proporcionar instrucciones claras y concisas para interactuar con los RED. Se aconseja utilizar texto de enlace descriptivo que indique claramente el destino del enlace, evitando texto genérico como "haga clic aquí". Se destaca la necesidad de un etiquetado claro de los campos de formulario y de proporcionar retroalimentación sobre los errores.

    #t_4_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.2] La usabilidad 
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/10.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Se centra en la facilidad con la que los usuarios pueden interactuar con los RED para lograr sus objetivos de aprendizaje. Un RED usable es fácil de aprender, eficiente de usar, fácil de recordar, libre de errores y satisfactorio para los usuarios.
        p.mb-5 Algunas consideraciones claves para la usabilidad, incluyen un diseño intuitivo y consistente, una navegación clara y sencilla, un lenguaje claro y conciso, y la provisión de ayuda y documentación cuando sea necesario.
    
        .bg-color-2.p-4(data-aos="fade-left")
          p.mb-0 La accesibilidad y la usabilidad están estrechamente relacionadas. Un RED que no es accesible puede ser difícil o imposible de usar para algunas personas, mientras que un RED que no es usable puede frustrar a los usuarios y dificultar su aprendizaje. Por lo tanto, es importante considerar ambos aspectos al producir RED para entornos virtuales de aprendizaje.
    
    h2.mb-5(data-aos="fade-left") El impacto de la usabilidad en el compromiso del estudiante y los resultados del aprendizaje

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/11.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-3.p-4.mb-5(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Una buena usabilidad puede aumentar la motivación, el compromiso y la satisfacción de los estudiantes. Cuando los RED son fáciles de usar y navegar, es más probable que los estudiantes interactúen con el contenido de aprendizaje. 
        p(data-aos="fade-left") Se explica que un alto nivel de usabilidad puede mejorar las capacidades didácticas de los RED. Los recursos usables pueden facilitar mejor el proceso de aprendizaje. Se destaca que una usabilidad deficiente puede generar frustración y potencialmente el abandono del estudio. Si los estudiantes encuentran que los RED son difíciles o frustrantes de usar, pueden desanimarse y desconectarse del proceso de aprendizaje. Una experiencia de usuario positiva puede mejorar los resultados del aprendizaje.
    
    h2(data-aos="fade-left") Principios claves de usabilidad para recursos educativos digitales
    p.mb-5 En relación a la usabilidad es importante tener presente las 10 heurísticas de usabilidad de Nielsen, estas, son un conjunto fundamental de principios para el diseño de interfaces de usuario. En el siguiente gráfico interactivo se detalla cada uno.

    h5.mb-5 Las 10 heurísticas de usabilidad de Nielsen, son:

    .bg-full-width.bg-color-8
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5
          .col-lg-8.mb-3.mb-lg-0.order-lg-2
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.h-100.shadow-app
                img(src='@/assets/curso/tema2/13.svg' alt='AvatarTop' , style="max-width: 350px").mx-auto.mb-3
                p.text-center.p-4 Visibilidad del estado del sistema.
              .bg-color-white.h-100.shadow-app
                img(src='@/assets/curso/tema2/14.svg' alt='AvatarTop' , style="max-width: 350px").mx-auto.mb-3
                p.text-center.p-4 Coincidencia entre el sistema y el mundo real.
              .bg-color-white.h-100.shadow-app
                img(src='@/assets/curso/tema2/15.svg' alt='AvatarTop' , style="max-width: 350px").mx-auto.mb-3
                p.text-center.p-4 Control y libertad del usuario.
              .bg-color-white.h-100.shadow-app
                img(src='@/assets/curso/tema2/16.svg' alt='AvatarTop' , style="max-width: 350px").mx-auto.mb-3
                p.text-center.p-4 Consistencia y estándares.
              .bg-color-white.h-100.shadow-app
                img(src='@/assets/curso/tema2/17.svg' alt='AvatarTop' , style="max-width: 350px").mx-auto.mb-3
                p.text-center.p-4 Prevención de errores.
              .bg-color-white.h-100.shadow-app
                img(src='@/assets/curso/tema2/18.svg' alt='AvatarTop' , style="max-width: 350px").mx-auto.mb-3
                p.text-center.p-4 Reconocimiento en lugar de recuerdo.
              .bg-color-white.h-100.shadow-app
                img(src='@/assets/curso/tema2/19.svg' alt='AvatarTop' , style="max-width: 350px").mx-auto.mb-3
                p.text-center.p-4 Flexibilidad y eficiencia de uso.
              .bg-color-white.h-100.shadow-app
                img(src='@/assets/curso/tema2/20.svg' alt='AvatarTop' , style="max-width: 350px").mx-auto.mb-3
                p.text-center.p-4 Diseño estético y minimalista.
              .bg-color-white.h-100.shadow-app
                img(src='@/assets/curso/tema2/21.svg' alt='AvatarTop' , style="max-width: 350px").mx-auto.mb-3
                p.text-center.p-4 Ayuda a los usuarios a reconocer, diagnosticar y recuperarse de los errores.
              .bg-color-white.h-100.shadow-app
                img(src='@/assets/curso/tema2/22.svg' alt='AvatarTop' , style="max-width: 350px").mx-auto.mb-3
                p.text-center.p-4 Ayuda y documentación.
    
          .col-lg-4.order-lg-1
            figure
              img(src='@/assets/curso/tema2/12.png', alt='')
        
        p.mb-5 Estos principios pueden adaptarse al diseño de los Recursos Educativos Digitales (RED) para mejorar su usabilidad. Aplicarlos nos permite evaluar y optimizar la experiencia de los usuarios, asegurando que sea intuitiva, eficiente y agradable.

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema2/23.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") Estas heurísticas proporcionan un marco valioso para evaluar y mejorar la experiencia del usuario de los recursos educativos. 
        h5.mb-3 Además de las heurísticas, es importante considerar otros aspectos claves de usabilidad, como: 
    
        .bg-color-2.mb-3(data-aos="fade-left")
          .row.align-items-center
            .col-lg-auto.order-lg-2
              img(src="@/assets/curso/tema2/24.svg", style="max-width: 295px").mx-auto
            .col-lg.order-lg-1
              ul.lista-ul--color.px-4
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Facilidad de aprendizaje.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Eficiencia.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Memorabilidad.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Capacidad para el manejo de errores.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Satisfacción del usuario.
        p Estos factores contribuyen para que la experiencia de uso de los RED sea positiva y significativa (Barros, 2024, pág. 65). En la siguiente tabla, se analizan las 10 Heurísticas de Usabilidad de Nielsen y su Aplicación a los RED.

    .titulo-figura.mb-4
      h5 Tabla 3.
      span Las 10 heurísticas de usabilidad de Nielsen y su aplicación a los RED
    .tabla-a.color-acento-botones.mb-5
      table
        thead
          tr
            th.bg-color-4.text-center.text-white Heurística
            th.bg-color-4.text-center.text-white Explicación
            th.bg-color-4.text-center.text-white Aplicación a los RED
        tbody.bg-color-6
          tr
            th Visibilidad del estado del sistema.
            td El sistema debe mantener informado al usuario sobre lo que está sucediendo, mediante una retroalimentación adecuada dentro de un tiempo razonable.
            td Mostrar una barra de progreso durante la carga de un archivo o al completar un cuestionario.
          tr
            th Coincidencia entre el sistema y el mundo real.
            td El sistema debe hablar el idioma del usuario, con palabras, frases y conceptos familiares para el usuario.
            td Utilizar terminología educativa común y evitar la jerga técnica innecesaria.
          tr
            th Control y libertad del usuario.
            td Los usuarios, por lo general, eligen funciones del sistema por error y necesitarán una "salida de emergencia" claramente marcada para abandonar el estado no deseado.
            td Permitir a los estudiantes deshacer o rehacer acciones dentro de un módulo o actividad.
          tr
            th Consistencia y estándares.
            td Los usuarios no deberían tener que preguntarse si diferentes palabras, situaciones o acciones significan lo mismo.
            td Mantener un diseño visual y una navegación coherentes en todos los módulos y recursos.
          tr
            th Prevención de errores.
            td Es mejor prevenir los errores que tener buenos mensajes de error.
            td Proporcionar instrucciones claras y validación de entrada en formularios y cuestionarios.
          tr
            th Reconocimiento en lugar de recuerdo.
            td Minimizar la carga de memoria del usuario haciendo visibles los objetos, las acciones y las opciones.
            td Mostrar claramente las opciones de navegación y las instrucciones en cada página.
          tr
            th Flexibilidad y eficiencia de uso.
            td Los aceleradores pueden acelerar la interacción para el usuario experto, de modo que el sistema pueda atender tanto a usuarios inexpertos como experimentados.
            td Ofrecer atajos de teclado para la navegación o funciones comunes.
          tr
            th Diseño estético y minimalista.
            td Los diálogos no deben contener información irrelevante o rara vez necesaria.
            td Presentar el contenido de manera clara y organizada, evitando el desorden visual.
          tr
            th Ayuda a los usuarios a reconocer, diagnosticar y recuperarse de los errores.
            td Los mensajes de error deben expresarse en lenguaje sencillo, indicar precisamente el problema y sugerir una solución.
            td Proporcionar mensajes de error claros y específicos con sugerencias para la resolución.
          tr
            th Ayuda y documentación.
            td Aunque es mejor si el sistema se puede utilizar sin documentación, puede ser necesario proporcionar ayuda y documentación.
            td Ofrecer una sección de ayuda o preguntas frecuentes fácilmente accesible.




    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.redalyc.org/pdf/368/36815128007.pdf" target="_blank" rel="noopener noreferrer") Pérez, M. G., & Sánchez, I. O. (2010). Atención a la e-accesibilidad y usabilidad universal en el diseño formativo. Pixel-Bit. Revista de Medios y Educación, (36), 89-99. 

            

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/PRZfExDtVOU?si=ghNWTgW_TjaDNMMg" target="_blank" rel="noopener noreferrer") Giménez A. (2020, 25 de marzo) Video 1 - Orientaciones sobre recursos digitales accesibles [video] YouTube. 



          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema4',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál de las siguientes opciones define mejor un Recurso Educativo Digital (RED)?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Un material didáctico impreso y digitalizado para su uso en línea.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Cualquier tipo de información que se encuentra en formato digital.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Todo material en formato digital diseñado con una intención y finalidad educativa.',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto:
                  'Un software específico para la gestión de aulas virtuales. ',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Qué característica distingue principalmente a un RED interactivo?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'La inclusión de múltiples formatos de medios como video y audio.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'La capacidad de ser utilizado en diversos dispositivos electrónicos.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'La exigencia de la participación activa del estudiante a través de actividades o retroalimentación. ',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto:
                  'Su disponibilidad gratuita y sin restricciones de uso. ',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              '¿Cuál de las siguientes herramientas se utiliza principalmente para crear contenido interactivo en Recursos Educativos Digitales?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Un editor de texto plano.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Una plataforma de videoconferencias.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Una herramienta de autoría multimedia como H5P o Genially. ',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Un sistema operativo para computadoras.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              '¿Qué aspecto es fundamental para asegurar la accesibilidad de un Recurso Educativo Digital (RED)?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Utilizar animaciones complejas para ilustrar conceptos.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Garantizar que el contenido pueda ser percibido, operado y comprendido por todos los usuarios, incluyendo aquellos con discapacidades. ',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto:
                  'Incorporar la mayor cantidad de colores llamativos en el diseño.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'Limitar el uso de texto para favorecer elementos visuales.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Cuál es el método más directo para evaluar la efectividad pedagógica de un Recurso Educativo Digital (RED)?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Contar el número de descargas del recurso.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Solicitar la opinión del creador del recurso.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Analizar el impacto del recurso en el logro de los objetivos de aprendizaje de los estudiantes. ',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto:
                  'Medir el tiempo que los estudiantes pasan utilizando el recurso. ',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
