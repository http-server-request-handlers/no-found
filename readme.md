# http-server-request-handlers-not-found
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![NSP Status][nsp-image]][nsp-url]

an http.Server request handler that handles a situation where no request handler processed the IncomingMessage

## table of contents
* [notes](#notes)
* [installation](#installation)
* [api](#api)
* [usage](#usage)
    * [basic](#basic)
* [license](#license)

## notes
* expects `next()` to be a callable function that accepts an Error as its first parameter

## installation
```javascript
npm install http-server-request-handlers-not-found
```

## api
```javascript
/**
 * @param {IncomingMessage} req
 * @param {ServerResponse} res
 * @param {Function} next
 *
 * @returns {undefined}
 */
function notFoundRequestHandler( req, res, next )
```

## usage
### basic
```javascript
var express = require( 'express' )
var app = express()

// add as the next to last middelware handler, just before completing the IncomingRequest
// e.g., just before http-server/request-handlers-error-logger
app.use( require( 'not-found' ) )
```

## license
[MIT License][mit-license]

[coveralls-image]: https://coveralls.io/repos/github/http-server-request-handlers/not-found/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/http-server-request-handlers/not-found?branch=master
[mit-license]: https://raw.githubusercontent.com/http-server-request-handlers/not-found/master/license.txt
[npm-image]: https://img.shields.io/npm/v/http-server-request-handlers-not-found.svg
[npm-url]: https://www.npmjs.com/package/http-server-request-handlers-not-found
[nsp-image]: https://nodesecurity.io/orgs/http-server-request-handlers/projects/5cd04120-2f5a-4a23-847d-2c260ad81272/badge
[nsp-url]: https://nodesecurity.io/orgs/http-server-request-handlers/projects/5cd04120-2f5a-4a23-847d-2c260ad81272
[travis-image]: https://travis-ci.org/http-server-request-handlers/not-found.svg?branch=master
[travis-url]: https://travis-ci.org/http-server-request-handlers/not-found
