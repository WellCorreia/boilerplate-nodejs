const app = require('./app')
const env = require('./config/env')

const portServer = env.portServer || 5000

app.listen(portServer, () => {
  console.info('\u001b[34;1m' + 'Listening on port ' + portServer)
})
