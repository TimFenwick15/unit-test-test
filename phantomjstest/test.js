const rewire = require('rewire')
const assert = require('chai').assert
const script = rewire('../src/script.js')
const hi = script.__get__('hi')

describe('hi()', function() {
  it('it should say hi', function() {
    assert.equal(hi(), 'hi')
  })
})
