var context = require.context('./test', true, /.*.js$/);

require('core-js/es5');

context.keys().forEach(context);
module.exports = context;
