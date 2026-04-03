/** @type {import('svgo').Config} */
module.exports = {
  multipass: true,
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          // No eliminar viewBox (necesario para escalado responsive)
          removeViewBox: false,
          // No eliminar xmlns (necesario para SVG standalone)
          removeXMLNS: false,
        },
      },
    },
    // Eliminar atributos innecesarios del editor (Illustrator, Figma, etc.)
    "removeEditorsNSData",
    // Eliminar comentarios
    "removeComments",
    // Eliminar metadatos
    "removeMetadata",
    // Eliminar título (los iconos no necesitan <title>)
    "removeTitle",
    // Eliminar descripción
    "removeDesc",
    // Ordenar atributos para consistencia
    "sortAttrs",
    // Eliminar estilos vacíos
    "removeEmptyContainers",
    // Convertir colores a forma corta (#fff en vez de #ffffff)
    "convertColors",
    // Eliminar atributos no usados
    "removeUselessDefs",
    // Redondear valores numéricos para reducir tamaño
    {
      name: "cleanupNumericValues",
      params: {
        floatPrecision: 2,
      },
    },
    // Eliminar el atributo fill="none" del SVG raíz (para poder colorear desde props)
    {
      name: "removeAttrs",
      params: {
        attrs: ["data-name", "class"],
      },
    },
  ],
};
