import type { LegalMessages } from "./en";

const messages: LegalMessages = {
  privacy: {
    metaTitle: "Política de privacidad",
    metaDescription:
      "Cómo {site} trata tus datos: sin cuentas, los gráficos se quedan en tu navegador y estadísticas de uso anónimas con Google Analytics.",
    h1: "Política de privacidad",
    intro:
      "{site} es una herramienta gratuita de comparación de alturas. Recopilamos la menor cantidad de datos posible. Esta política explica qué se procesa cuando usas el sitio y qué opciones tienes.",
    sections: [
      {
        h: "Datos que ingresas",
        p: [
          "Los nombres y las alturas que escribes en las herramientas se procesan en tu navegador. No los almacenamos en nuestros servidores.",
          "Cuando usas Compartir, el gráfico se codifica en el propio enlace. Cualquier persona que tenga el enlace puede ver ese gráfico, así que evita poner información privada en los nombres.",
          "Las imágenes que cargas son leídas localmente por tu navegador y nunca se suben ni se incluyen en los enlaces para compartir.",
        ],
      },
      {
        h: "Cookies y almacenamiento local",
        p: [
          "Guardamos algunas preferencias técnicas en el almacenamiento local de tu navegador. Son necesarias para que el sitio funcione como esperas.",
          "Usamos Google Analytics para medir el uso anónimo, como las páginas visitadas, el país y el tipo de dispositivo. Google Analytics instala cookies con este fin. Puedes bloquear o eliminar las cookies en la configuración de tu navegador, o instalar el complemento de inhabilitación para navegadores de Google (tools.google.com/dlpage/gaoptout).",
          "Si en el futuro mostramos publicidad, solo se usarán cookies de publicidad personalizada con tu consentimiento, y antes se actualizará esta política.",
        ],
      },
      {
        h: "Registros del servidor",
        p: [
          "Nuestro proveedor de alojamiento procesa automáticamente datos técnicos, como la dirección IP, el tipo de navegador y las páginas solicitadas, para ofrecer el sitio y protegerlo contra abusos. Estos registros se conservan durante un tiempo limitado y no se usan para identificarte.",
        ],
      },
      {
        h: "Tus derechos",
        p: [
          "Según dónde vivas (por ejemplo, en virtud del RGPD en la UE o de la CCPA en California), es posible que tengas derecho a acceder a los datos personales, rectificarlos o eliminarlos, y a oponerte a su tratamiento. Como no mantenemos cuentas ni datos de gráficos, la mayoría de las solicitudes pueden resolverse borrando el almacenamiento de tu navegador. Para cualquier otra cuestión, contáctanos en {email}.",
        ],
      },
      {
        h: "Niños",
        p: ["El sitio es apto para todo público y no recopila a sabiendas datos personales de niños."],
      },
      {
        h: "Cambios",
        p: ["Podemos actualizar esta política. La fecha que aparece en la parte superior de la página indica la versión más reciente."],
      },
    ],
  },
  terms: {
    metaTitle: "Términos de servicio",
    metaDescription:
      "Los términos para usar {site}, una herramienta visual y gratuita de comparación de alturas, incluidos el uso aceptable y los descargos de responsabilidad.",
    h1: "Términos de servicio",
    intro: "Al usar {site}, aceptas estos términos. Si no estás de acuerdo, por favor no uses el sitio.",
    sections: [
      {
        h: "Uso de las herramientas",
        p: [
          "Las herramientas son gratuitas para uso personal, educativo y comercial. Puedes compartir y publicar los gráficos que crees, incluidas las imágenes descargadas.",
          "No hagas un uso indebido del sitio; por ejemplo, intentando interrumpir su funcionamiento, extrayendo datos de él (scraping) en un volumen que afecte a otros usuarios o usándolo para crear contenido ilegal o de acoso.",
        ],
      },
      {
        h: "Exactitud",
        p: [
          "Las alturas de figuras públicas, personajes, animales y objetos son valores reportados habitualmente y pueden diferir de otras fuentes. Las estadísticas provienen de los conjuntos de datos de investigación citados. Las proporciones corporales de los dibujos y modelos 3D son aproximaciones.",
          "El sitio tiene fines informativos y de entretenimiento. No constituye asesoramiento médico; consulta a un profesional si tienes preguntas sobre crecimiento o salud.",
        ],
      },
      {
        h: "Propiedad intelectual",
        p: [
          "El diseño, el código y las ilustraciones del sitio pertenecen a {site}. Los nombres de personas, personajes y lugares emblemáticos pertenecen a sus respectivos propietarios y se usan solo con fines de identificación.",
          "Los datos de altura promedio son © NCD Risk Factor Collaboration y se usan bajo la licencia CC BY 4.0.",
        ],
      },
      {
        h: "Responsabilidad",
        p: [
          "El sitio se ofrece “tal cual”, sin garantías. En la medida en que lo permita la ley, no somos responsables de las pérdidas derivadas de su uso.",
        ],
      },
      {
        h: "Contacto",
        p: ["Preguntas sobre estos términos: {email}."],
      },
    ],
  },
};

export default messages;
