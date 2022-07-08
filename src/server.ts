import Hapi from '@hapi/hapi'
import Vision from '@hapi/vision'
import path from 'path'
import Pug from 'pug'

export default async function init() {
  const server = Hapi.server({
    port: process.env.PORT || 4000,
    host: '0.0.0.0',
  })

  await server.register(Vision)

  server.views({
    engines: { pug: Pug },
    relativeTo: __dirname,
    path: 'views',
    compileOptions: {
      // By default Pug uses relative paths (e.g. ../root.pug), when using absolute paths (e.g. include /root.pug), basedir is prepended.
      // https://pugjs.org/language/includes.html
      basedir: path.join(__dirname, 'views'),
    },
  })

  server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) =>
      h.view('index', {
        title: `Hapi - ${request.server.version}`,
        message: 'Hello Pug!',
      }),
  })

  server.start()
  console.log(`Listening on ${server.settings.host}:${server.settings.port}`)
}

process.on('unhandledRejection', (err) => {
  console.error('unhandledRejection')
  console.error(err)
  process.exit(1)
})
