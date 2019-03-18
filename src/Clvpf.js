var animateStr = require('./lib/animateStr')
var clvpfStyle = require('./lib/clvpf-style')
const creatStyle = require('./lib/creat-style.js')

function Clvpf(obj) {
    this.init(obj);
};

Clvpf.prototype = {
    init(obj) {
        if(obj) {
            this.mount(obj)
        };
        this.$activeIndex = 0;

        creatStyle(animateStr);
        creatStyle(clvpfStyle);
    },
    mount(obj) {
        this.$options = obj;
        this.$el = getEl.call(this, obj.el);
        this.$el.style.position = 'relative';
    },
    show(index) {
        //打开提示
        this.close();

        this.$activeIndex = index || 0;
        let doms = this.$options.target,
            _dom = []

        doms.forEach((item) => {
            let dom = document.querySelector(item.el),
                animate = item.ani || 'shake',
                domOffset = getOffset.call(this, dom);

            var left = domOffset.left,
                top = domOffset.top;

            if(dom) {
                _dom.push({
                    dom,
                    animate,
                    class: 'clvpf-animate_' + animate,
                    left,
                    top,
                    width: dom.offsetWidth,
                    height: dom.offsetHeight,
                    text: item.text,
                    pos: item.pos || 'bottom'
                });
            }
        });

        this.$dom = _dom;

        this.next();
    },
    next() {
        //进入下一个提示
        (this.$activeIndex > 0) && this.close();

        var current = this.$dom[this.$activeIndex];

        if(current) {
            current.dom.classList.add(current.class);

            var dialog = creatDialog.call(this, current, (this.$dom.length === ( this.$activeIndex + 1 )) );
            this.$el.appendChild(dialog);
            this.$dialog = dialog;

            const DIALOG_HALF_WIDTH = dialog.offsetWidth/2,//弹框半宽度
                DIALOG_HALF_HEIGHT = dialog.offsetHeight/2,//弹框半高度
                VIEW_WIDTH = document.body.offsetWidth;

            const CURRENT_WIDTH_LEFT_RATIO = {
                left: 0,
                right: 1,
                top: 0.5,
                bottom: 0.5
            }, DIALOG_HALF_WIDTH_LEFT_RATIO = {
                left: -2,
                right: 0,
                top: -1,
                bottom: -1
            };
            const EL_POS_LEFT = (current.width * (CURRENT_WIDTH_LEFT_RATIO[current.pos]));
            dialog.style.left = current.left
                + EL_POS_LEFT
                + (DIALOG_HALF_WIDTH * DIALOG_HALF_WIDTH_LEFT_RATIO[current.pos])
                + 'px';

            const CURRENT_HEIGHT_TOP_RATIO = {
                left: 0.5,
                right: 0.5,
                top: 0,
                bottom: 1
            }, DIALOG_HALF_HEIGHT_TOP_RATIO = {
                left: -1,
                right: -1,
                top: -2,
                bottom: 0
            }
            dialog.style.top = current.top
                + (current.height * CURRENT_HEIGHT_TOP_RATIO[current.pos])
                + (DIALOG_HALF_HEIGHT * DIALOG_HALF_HEIGHT_TOP_RATIO[current.pos])
                + 8
                + 'px';

            //位置控制
            // if(DIALOG_HALF_WIDTH > EL_POS_LEFT) {
            //     dialog.style.left = DIALOG_HALF_WIDTH + 'px';
            // } else if (VIEW_WIDTH - DIALOG_HALF_WIDTH < EL_POS_LEFT) {
            //     dialog.style.left = 'auto';
            //     dialog.style.right = -DIALOG_HALF_WIDTH + 'px';
            // }

            this.$activeIndex ++;
        }
        return;
    },
    close() {
        //关闭提示
        if(this.$dialog) {
            //清除上一次的弹框
            this.$el.removeChild(this.$dialog);
            this.$dialog = null;

            //移除上一个重点组件的激活状态
            var last = this.$dom[this.$activeIndex - 1];
            last && last.dom.classList.remove(last.class);
        };
    }
};

function getOffset(node) {
    //获取元素相对于$el的左边距、上边距
    var left = node.offsetLeft,
        top = node.offsetTop,
        pOffset = {
            left: 0,
            top: 0
        }
    if(node.offsetParent && node.offsetParent !== this.$el) {
        pOffset = getOffset.call(this, node.offsetParent);
    }

    return {
        left: left + pOffset.left,
        top: top + pOffset.top
    }
}

function creatDialog(node, noNext) {
    //创建一个包含指定内容的dialog；
    var dialog = document.createElement('div');
    dialog.classList.add('clvpf-dialog');
    dialog.classList.add('clvpf-dialog_' + node.pos);

    var dialogBody = document.createElement('div');
    dialogBody.classList.add('clvpf-dialog_body');
    dialogBody.innerText = node.text;

    var dialogFooter = document.createElement('div');
    dialogFooter.classList.add('clvpf-dialog_footer');

    var btnClose = document.createElement('span');
    btnClose.classList.add('clvpf-btn_close');
    btnClose.innerText = '关闭';

    btnClose.addEventListener('click', () => {
        this.close();
    });

    dialog.appendChild(dialogBody);
    dialogFooter.appendChild(btnClose);
    dialog.appendChild(dialogFooter);

    if(!noNext) {
        var btnNext = document.createElement('span');
        btnNext.classList.add('clvpf-btn_next');
        btnNext.innerText = '下一个';

        btnNext.addEventListener('click', () => {
            this.next();
        });

        dialogFooter.appendChild(btnNext);
    }

    return dialog;
}

function getEl(selector) {
    return document.querySelector(selector);
    // if(/#/.test(selector))
    //     return document.getElementById(selector.replace(/#/g, ''));
    // else if(/./.test(selector))
    //     return document.getElementsByClassName(selector.replace(/./g, ''));
    // else
    //     return document.getElementsByTagName(selector);
}

module.exports = Clvpf
