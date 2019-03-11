var Clvpf = require('./Clvpf')
var Dialog = require('./Dialog')



var _tag = document.querySelector('[ref=clvps]');
var $init_url = _tag.getAttribute('init'),
    $submit_url = _tag.getAttribute('submit');

window.$clvpf = new Clvpf({
    el: 'body',
    target: [
        {
            el: '#tip1',
            text: '点击“立即创建”按钮\n创建信息',
            pos: 'right'
        },
        {
            el: '#tip2',
            text: '填写活动名称',
            ani: 'shadow'
        },
        {
            el: '#tip3',
            text: '点击取消则会取消提交表单',
            pos: 'left',
            ani: 'shadow'
        },
        {
            el: '#tip4',
            text: '活动形式为非必填内容',
            pos: 'top',
            ani: 'shadow'
        },
    ]
});
var _dialog = new Dialog({
    url: $submit_url
});
window.$clvpf._dialog = _dialog;
window.$clvpf.dialogShow = _dialog.show.bind(_dialog);
window.$clvpf.dialogHide = _dialog.show.bind(_dialog);

module.exports = Clvpf
