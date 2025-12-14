const https = require('https')
const fs = require('fs')
const path = require('path')

const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()

// const isProd = (process.env.NODE_ENV === 'production')

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

    // Give nuxt middleware to express
    app.use(nuxt.render)

    // Prefer HTTPS if cert files are provided, otherwise fall back to HTTP in dev
    const keyPath = path.join(__dirname, 'server.key')
    const certPath = path.join(__dirname, 'server.crt')

    if (fs.existsSync(keyPath) && fs.existsSync(certPath)) {
      try {
        const options = {
          key: fs.readFileSync(keyPath),
          cert: fs.readFileSync(certPath)
        }
        https.createServer(options, app).listen(port, host)
        consola.ready({
          message: `HTTPS Server listening on https://${host}:${port}`,
          badge: true
        })
        return
      } catch (err) {
        consola.warn('Failed to start HTTPS server, falling back to HTTP:', err.message)
      }
    }

    // Fallback to plain HTTP
    app.listen(port, host)
    consola.ready({
      message: `Server listening on http://${host}:${port}`,
      badge: true
    })

  // (server started above)
}
start()
