var Clvpf = require('./Clvpf');
var Dialog = require('./Dialog');
var PopBtn = require('./PopBtn');
var ajax = require('./lib/ajax.js')

var _tag,
    _tag_maybe

//获取类标签；
if(_tag_maybe = document.querySelector('[ref=clvps]')) {
    _tag = _tag_maybe;
} else {
    var scripts = document.querySelectorAll('script');
    scripts.forEach(function(item) {
        var src = item.getAttribute('src');
        if(/clvpf.js|clvpf.min.js/.test(src)) {
            _tag = item;
        }
    })
};

//判断是否成功获取到类标签
if(!_tag) {
    console.error('未获取到clvpf的script标签');
};

var $init_url = _tag.getAttribute('init'),
    $submit_url = _tag.getAttribute('submit'),
    $window_location = {};
Object.keys(window.location).forEach((key) => {
    if(typeof(window.location[key]) === 'string') {
        $window_location[key] = window.location[key];
    }
});

//创建主实例
window.$clvpf = new Clvpf();

ajax({
    type: 'get',
    url: $init_url,
    data: $window_location,
    success: (res) => {
        $clvpf.mount(res)
    },
    error: (xhr) => {
        console.error('初始化提示功能失败，请检查接口是否可用', xhr);
    },
    complete: (xhr) => {

    }
});

//创建submit实例
var _dialog = new Dialog({
    url: $submit_url
});
window.$clvpf._dialog = _dialog;
window.$clvpf.dialogShow = _dialog.show.bind(_dialog);
window.$clvpf.dialogHide = _dialog.show.bind(_dialog);

//创建悬浮按钮实例
new PopBtn({
	btn: [
		{
			name: 'tip',
			html: '提示',
			on: {
				click: function(e) {
					e.stopPropagation();
					e.preventDefault();
					$clvpf.show();
				}
			}
		}, {
			name: 'reward',
			html: '反馈',
			on: {
				click: function() {
                    _dialog.show();
				}
			}
		}
	]
})

module.exports = Clvpf
