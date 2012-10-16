var cons = require('consolidate');

var Stencil = exports.Stencil = function(opts) {
  this.options = opts || {}
}

Stencil.prototype.render = function(eng, path, locals, cb) {
  cons[eng](path, locals, cb);  
}
