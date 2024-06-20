let questions = [
  {
  numb: 1,
  question: "¿Cuál es el lenguaje estándar específico para aplicar estilos de presentación a nuestras páginas web?",
  answer: "CSS",
  options: [
    "Javascript",
    "CSS",
    "PHP",
    "Flash"
  ]
},
  {
  numb: 2,
  question: ". ¿Qué significa la sigla HTML?",
  answer: "Hypertext Markup Language",
  options: [
    "Hypertext Manual Language",
    "Hypertext Markup Language",
    "Hypertext Match Language",
    "Sign Language HTML"
  ]
},
  {
  numb: 3,
  question: "¿Qué atributo de HTML se emplea en un formulario para especificar la página ala que se van a enviar los datos del mismo?",
  answer: "action",
  options: [
    "file",
    "method",
    "name",
    "action"
  ]
},
  {
  numb: 4,
  question: "¿Qué significa CSS?",
  answer: "Cascading Style Sheets",
  options: [
    "Color Style Sheets",
    "Cascading Style Sheets",
    "Creative Style Sheets",
    " Computer Style Sheets"
  ]
},
  {
  numb: 5,
  question: "¿Qué significa XML?",
  answer: "eXtensible Markup Language",
  options: [
    "eXtensible Markup Language",
    "eXecutable Multiple Language",
    "eXTra Multi-Program Language",
    "eXamine Multiple Language"
  ]
    },
  {
  numb: 6,
  question: "¿Qué es el DOM (Document Object Model) en JavaScript?",
  answer: "Una estructura que representa el contenido de un documento HTML o XML como un árbol de nodos.",
  options: [
    "Una estructura que representa el contenido de un documento HTML o XML como un árbol de nodos.",
    "Un lenguaje de programación para la web.",
    "Una biblioteca de JavaScript para manipular datos.",
    "Una herramienta de depuración en el navegador."
  ]
    },
  {
  numb: 7,
  question: "¿Cuál es la diferencia principal entre let y var en JavaScript?",
  answer: "let tiene un alcance de bloque, mientras que var tiene un alcance de función.",
  options: [
    "let tiene un alcance de función, mientras que var tiene un alcance de bloque.",
    "let tiene un alcance de bloque, mientras que var tiene un alcance de función.",
    " let es una constante, mientras que var es una variable.",
    "No hay diferencia entre let y var."
  ]
  },
  {
  numb: 8,
  question: "¿Qué selector de CSS es más específico?",
  answer: "#id",
  options: [
    ".clase",
    "#id",
    "elemento",
    "*"
  ]
  },
  {
  numb: 9,
  question: "¿Qué propiedad de CSS se utiliza para cambiar el color de fondo de un elemento?",
  answer: "background-color",
  options: [
    "color",
    "background-color",
    "font-color",
    "background-image"
  ]
  },
  {
  numb: 10,
  question: "¿Cuál es la principal ventaja de usar const sobre let y var en JavaScript?",
  answer: "const asegura que la variable no pueda ser reasignada.",
  options: [
    "const permite que la variable sea reasignada.",
    "const crea una variable global.",
    "const asegura que la variable no pueda ser reasignada.",
    "const permite el hoisting."
  ]
  },
  {
  numb: 11,
  question: "¿Qué es Flexbox en CSS?",
  answer: "Un módulo de diseño de CSS que permite distribuir espacio y alinear elementos en un contenedor.",
  options: [
    "Un método para crear diseños bidimensionales.",
    "Una técnica para diseñar sitios web responsivos usando porcentajes.",
    "Un módulo de diseño de CSS que permite distribuir espacio y alinear elementos en un contenedor.",
    "Una herramienta de depuración para CSS."
  ]
  },
  {
  numb: 12,
  question: "¿Cuál es la manera correcta de crear una promesa en JavaScript?",
  answer: "let promesa = new Promise(function(resolve, reject) { /* código */ });",
  options: [
    "let promesa = new Promise(funcion(resolver, reject) { /* código */ });",
    "let promesa = Promise();",
    "let promesa = new Promise(function(resolve, reject) { /* código */ });",
    "let promesa = new Promise(resolve, reject);"
  ]
  },
  {
  numb: 13,
  question: "¿Qué es el modelo de caja (box model) en CSS?",
  answer: "Un modelo que describe el diseño y el espaciado de los elementos, incluyendo márgenes, bordes, padding y contenido.",
  options: [
    "Un concepto que describe cómo se alinean los elementos en una página web",
    "Un sistema de diseño para crear grid layouts.",
    "Un modelo que describe el diseño y el espaciado de los elementos, incluyendo márgenes, bordes, padding y contenido.",
    "Un plugin de CSS para crear animaciones."
  ]
  },
  {
  numb: 14,
  question: "¿Cuál es el propósito de la propiedad z-index en CSS?",
  answer: "Controlar el orden de apilamiento de elementos superpuestos.",
  options: [
    "Controlar la opacidad de un elemento.",
    "Cambiar el color de fondo de un elemento.",
    "Controlar el orden de apilamiento de elementos superpuestos.",
    "Definir el tamaño de la fuente de un elemento."
  ]
  },
  {
  numb: 15,
  question: "¿Qué es la Máquina Virtual de Java (JVM)?",
  answer: "Un entorno de ejecución que interpreta el bytecode de Java y lo convierte en código máquina específico del sistema operativo.",
  options: [
    "Una máquina física donde se ejecutan los programas de Java.",
    "Un compilador que convierte el código Java en código máquina.",
    "Un entorno de ejecución que interpreta el bytecode de Java y lo convierte en código máquina específico del sistema operativo.",
    "Una biblioteca que contiene las clases estándar de Java."
  ]
  },
  {
  numb: 16,
  question: "¿Qué es una expresión lambda en Java?",
  answer: "Una función anónima que proporciona una forma clara y concisa de representar una interfaz funcional.",
  options: [
    "Una clase anónima.",
    "Una función anónima que proporciona una forma clara y concisa de representar una interfaz funcional.",
    "Un método estático.",
    "Una interfaz que permite la herencia múltiple."
  ]
  },
  {
  numb: 17,
  question: "¿Qué es el Garbage Collector en Java?",
  answer: "Un proceso automático que gestiona la memoria, eliminando objetos que ya no están en uso.",
  options: [
    "Un proceso manual para eliminar objetos no utilizados.",
    "Una herramienta para depurar código.",
    "Un proceso automático que gestiona la memoria, eliminando objetos que ya no están en uso.",
    "Un patrón de diseño para gestionar recursos."
  ]
  },
  {
  numb: 18,
  question: "¿Qué es una interface en Java?",
  answer: "Define un conjunto de métodos que una clase debe implementar.",
  options: [
    "Una clase abstracta que puede contener métodos con implementación.",
    "Un tipo de clase que solo puede ser utilizada como clase base.",
    "Define un conjunto de métodos que una clase debe implementar.",
    "Un tipo especial de clase que puede tener múltiples instancias."
  ]
  },
  {
  numb: 19,
  question: "¿Qué es un paquete (package) en Java?",
  answer: "Un mecanismo para organizar las clases de manera jerárquica y evitar conflictos de nombres.",
  options: [
    "Un conjunto de clases y métodos que se compilan juntos.",
    "Una colección de archivos jar.",
    "Un mecanismo para organizar las clases de manera jerárquica y evitar conflictos de nombres.",
    "Una clase especial que contiene métodos estáticos."
  ]
  },
  {
  numb: 20,
  question: "¿Qué significa que un método sea static en Java?",
  answer: "Que el método pertenece a la clase y no a las instancias de la clase.",
  options: [
    "Que el método no puede ser llamado desde otras clases.",
    "Que el método pertenece a la clase y no a las instancias de la clase.",
    "Que el método puede ser sobreescrito por subclases.",
    "Que el método es abstracto y debe ser implementado por subclases."
  ]
},
];