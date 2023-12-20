module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  // Configuración para servir archivos estáticos
  // Asegúrate de ajustar la ruta '/uploads' según tu estructura de carpetas
  static: {
    path: env('STATIC_PATH', './public/uploads'), // Ruta a la carpeta donde se almacenan las imágenes
    route: env('STATIC_ROUTE', '/uploads'), // Ruta que se utiliza para acceder a las imágenes
  },
});
