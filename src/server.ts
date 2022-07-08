import Hapi from '@hapi/hapi'

export default function init() {
  const server = Hapi.server({
    port: process.env.PORT || 4000,
    host: '0.0.0.0',
  })

  server.route({
    method: 'GET',
    path: '/',
    handler: () => 'Hello World!',
  })

  server.start()
  console.log(`Listening on ${server.settings.host}:${server.settings.port}`)
}

process.on('unhandledRejection', (err) => {
  console.error('unhandledRejection')
  console.error(err)
  process.exit(1)
})
