const HTTP = require('./http')

module.exports = {
  notFound: {
    type: 'NotFound',
    status: HTTP.BAD_REQUEST,
    describe: 'Register not found'
  },

  created: {
    type: 'created',
    status: HTTP.CREATED,
    describe: 'Registered with success'
  },

  found: {
    type: 'found',
    status: HTTP.BAD_REQUEST,
    describe: 'Register exist'
  },

  ok: {
    type: 'ok',
    status: HTTP.OK,
    describe: 'Register updated with success'
  },

  deleted: {
    type: 'deleted',
    status: HTTP.OK,
    describe: 'Register deleted with success'
  }
}
