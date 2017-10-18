'use strict'

var listeningEvent = require( '../src' )
var sinon = require( 'sinon' )
var spy_next = sinon.spy()
var spy_req = sinon.spy()
var spy_res = sinon.spy()
var tap = require( 'tap' )

tap.test( 'not found called',
  function ( t ) {
    var err = new Error( 'Not Found' )

    spy_next.resetHistory()
    listeningEvent( spy_req, spy_res, spy_next )

    t.true( spy_next.called, '`next()` called' )

    t.same(
      spy_next.getCall( 0 ).args[ 0 ].message,
      err.message,
      '`next()` called with the Error message `Not Found`'
    )

    t.same(
      spy_next.getCall( 0 ).args[ 0 ].statusCode,
      404,
      '`next()` called with the Error statusCode `404`'
    )

    t.end()
  }
)
