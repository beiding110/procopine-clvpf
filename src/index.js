var Clvpf = require('./Clvpf')
var Dialog = require('./Dialog')



var _tag = document.querySelector('[ref=clvps]');
var $init_url = _tag.getAttribute('init'),
    $submit_url = _tag.getAttribute('submit');

var _dialog = new Dialog({
    url: $submit_url
});

module.exports = Clvpf
