export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad: 'Fundamentos de los Recursos Educativos Digitales',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Definiendo conceptos claves y características de los RED',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Características de los RED',
            hash: 't_1_1',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          'Tipos de recursos digitales: interactivos, multimedia, gamificados',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Principios de diseño instruccional aplicados a la producción de materiales digitales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Accesibilidad y usabilidad en los recursos digitales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo:
              'La Importancia de la accesibilidad para diversos estudiantes',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'La usabilidad ',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Vidal Ledo, M. J., Alfonso Sánchez, I., Zacca González, G., & Martínez Hernández, G. (2013). Recursos educativos abiertos. Educación Médica Superior, 27(3), 307-320. ',
      link:
        'http://scielo.sld.cu/scielo.php?pid=S0864-21412013000300016&script=sci_arttext&tlng=en',
    },
    {
      referencia:
        'Universidad Nacional Abierta y a Distancia UNAD de Colombia. (s.f.). Definición - Recursos Educativos Digitales. Obtenido de Recursos Educativos: ',
      link:
        'https://vimep.unad.edu.co/index.php/recursos-educativos#:~:text=Se%20puede%20considerar%20como%20recursos,%22%20(p%2C50)',
    },
    {
      referencia:
        'Posada Prieto, F. (27 de marzo de 2012). Características de los recursos digitales educativos. Obtenido de canalTIC.com: ',
      link: 'https://canaltic.com/blog/?p=889',
    },
    {
      referencia:
        'Ortiz-Colón, A. M. (2018). Gamificación en educación: una panorámica sobre el estado de la cuestión. Educação e pesquisa. Obtenido de ',
      link: 'https://www.scielo.br/j/ep/a/5JC89F5LfbgvtH5DJQQ9HZS',
    },
    {
      referencia:
        'Domínguez Pérez, C. O. (2018). Diseño instruccional para el desarrollo de contenidos educativos digitales para teléfonos inteligentes. Apertura, 80-93. Obtenido de ',
      link:
        'https://www.scielo.org.mx/scielo.php?script=sci_arttext&pid=S1665-61802018000200080',
    },
    {
      referencia:
        'Pérez Serrano, V. (30 de julio de 2020). El diseño de recursos didácticos digitales: criterios teóricos para su desarrollo e implementación. Diálogos sobre educación. Temas actuales en investigación educativa , 12(22). Obtenido de ',
      link: 'https://www.redalyc.org/journal/5534/553471896015/html/',
    },
    {
      referencia:
        'Barros, I. S. (2024). Heurísticas en la evaluación de la usabilidad de aplicaciones móviles: conceptos y aplicación. Actas Del Congreso Internacional De Ingeniería De Sistemas, 59-67. doi: ',
      link: 'https://revistas.ulima.edu.pe/index.php/CIIS/article/view/7080',
    },
  ],
  glosario: [
    {
      termino: 'Accesibilidad',
      significado:
        'Adaptación de recursos para incluir a todos los estudiantes, considerando discapacidades.',
    },
    {
      termino: 'Adaptabilidad',
      significado:
        'Técnica utilizada para mapear procesos, identificando proveedores, insumos, actividades, resultados y clientes involucrados.',
    },
    {
      termino: 'Diseño Instruccional',
      significado:
        'Integración de los RED en distintos sistemas de gestión del aprendizaje (LMS).',
    },
    {
      termino: 'EDUTEKA',
      significado: 'Plataforma para crear contenidos interactivos educativos.',
    },
    {
      termino: 'Entornos Virtuales de Aprendizaje',
      significado: 'Plataformas digitales que facilitan la educación en línea.',
    },
    {
      termino: 'Especialización en Innovación Educativa',
      significado: 'Pautas para hacer accesibles los contenidos web.',
    },
    {
      termino: 'Flexibilidad',
      significado:
        'Capacidad de los RED de adaptarse a distintos métodos y ritmos de aprendizaje.',
    },
    {
      termino: 'Gamificación',
      significado:
        'Uso de mecánicas de juego para motivar y fortalecer el aprendizaje.',
    },
    {
      termino: 'Genially',
      significado:
        'Plataforma para crear recursos interactivos que reproducen situaciones reales para el aprendizaje.',
    },
    {
      termino: 'H5P',
      significado:
        'Recursos interactivos que reproducen situaciones reales para el aprendizaje.',
    },
    {
      termino: 'Interactividad',
      significado:
        'Participación activa del estudiante con el contenido digital.',
    },
    {
      termino: 'Interoperabilidad',
      significado:
        'Herramienta de gestión estratégica que permite monitorear el desempeño de una organización mediante indicadores clave en diferentes perspectivas (financiera, clientes, procesos internos y aprendizaje).',
    },
    {
      termino: 'Modularidad',
      significado:
        'Herramienta visual que muestra la estructura y secuencia de los procesos dentro de una organización, facilitando su análisis y mejora.',
    },
    {
      termino: 'Multimedia',
      significado:
        'Integración de texto, audio, imágenes, video y animaciones en un recurso.',
    },
    {
      termino: 'Portabilidad',
      significado:
        'Diseño de RED en componentes reutilizables e independientes.',
    },
    {
      termino: 'REA/REDA/OER',
      significado:
        'Posibilidad de modificar y personalizar los RED según contextos educativos.',
    },
    {
      termino: 'RED',
      significado:
        'Recursos Educativos Digitales diseñados con intencionalidad pedagógica en formato digital.',
    },
    {
      termino: 'Simulaciones',
      significado:
        'Recursos educativos abiertos, disponibles para libre uso, adaptación y distribución.',
    },
    {
      termino: 'Usabilidad',
      significado: 'Facilidad de uso e interacción amigable con los RED.',
    },
    {
      termino: 'WCAG',
      significado: 'Pautas para hacer accesibles los contenidos web.',
    },
  ],
}
