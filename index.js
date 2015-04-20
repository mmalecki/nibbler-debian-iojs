var fs = require('fs')
var path = require('path')
var exec = require('nibbler-exec')
var apt = require('nibbler-apt')

module.exports = function(options, cb) {
  if (typeof options === 'function') {
    cb = options
    options = null
  }

  exec(fs.readFileSync(path.join(__dirname, 'setup.bash'), 'utf8'), options, function(err) {
    if (err) return cb(err)

    apt({
      pkg: 'iojs',
      state: 'present'
    }, options, cb)
  })
}
