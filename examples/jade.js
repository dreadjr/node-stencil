var stencils = require('../lib/stencil');
var stencil = new stencils.Stencil();

// try read from extension?
stencil.render('jade', 'jade.jade', {name: "you!"}, function(err, html) {
  if (err) throw err;
  console.log(html);
});

stencil.render('jade', 'jade.jade', {name: "other person!"}, function(err, html) {
  if (err) throw err;
  console.log(html);
});
