export default function html(options) {
  const {
    app = 'main',
    title = 'react-app-boilerplate',
    stylesheet = '/static/css/styles.css',
    markup
  } = options

  return `
    <!DOCTYPE html>
    <html lang="es">
      <head>
        <meta charset="UTF-8">
        <title>${title}</title>
        <meta http-equiv="Content-Type" content="text/html" />
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="">
        <link rel="manifest" href="manifest.json">
        <link rel="stylesheet" href="${stylesheet}">
      </head>
      <body>
        <div id="root">${markup}</div>
        <script src="/static/js/${app}.bundle.js"></script>
      </body>
    </html>
  `
}
