'use strict'

/**
 * @param {IncomingMessage} req
 * @param {ServerResponse} res
 * @param {Function} next
 *
 * @returns {undefined}
 */
function notFoundRequestHandler( req, res, next ) {
  var err = new Error( 'Not Found' )

  err.statusCode = 404
  next( err )
}

module.exports = notFoundRequestHandler;
