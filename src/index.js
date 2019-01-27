var animateStr = require('./lib/animateStr')
var clvpfStyle = require('./lib/clvpf-style')

function Clvpf(obj) {
    this.init(obj);
};

Clvpf.prototype = {
    init(obj) {
        this.$options = obj;
        this.$el = document.querySelector(obj.el);
        this.$activeIndex = 0;

        creatStyle(animateStr);
        creatStyle(clvpfStyle);
    },
    show(index) {
        //打开提示

        this.$activeIndex = index || 0;
        let doms = this.$options.target,
            _dom = []

        doms.forEach((item) => {
            let dom = document.querySelector(item.el),
                animate = item.animate || 'shake',
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
                    text: item.text
                });
            }
        });

        this.$dom = _dom;
        this.$dom.position = 'relative';

        this.next();
        console.log(_dom)
    },
    next() {
        //进入下一个提示
        (this.$activeIndex > 0) && this.close();

        var current = this.$dom[this.$activeIndex];

        if(current) {
            current.dom.classList.add(current.class);

            var dialog = creatDialog.call(this, current.text);
            dialog.style.position = 'absolute';
            dialog.style.left = current.left + (current.width / 2) + 'px';
            dialog.style.top = current.top + current.height + 'px';
            this.$el.appendChild(dialog);
            this.$dialog = dialog;

            this.$activeIndex ++;
        }
        return;
    },
    close() {
        //关闭提示
        this.$el.removeChild(this.$dialog)
        var last = this.$dom[this.$activeIndex - 1];
        last && last.dom.classList.remove(last.class);
    }
};

function creatStyle(styleStr) {
    var styleNode = document.createElement('style');
    styleNode.innerHTML = styleStr;

    document.head.appendChild(styleNode);
}

function getOffset(node) {
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

function creatDialog(text) {
    var dialog = document.createElement('div');
    dialog.classList.add('clvpf-dialog');

    var dialogBody = document.createElement('div');
    dialogBody.classList.add('clvpf-dialog_body');
    dialogBody.innerText = text;

    var dialogFooter = document.createElement('div');
    dialogFooter.classList.add('clvpf-dialog_footer');

    var btnClose = document.createElement('span');
    btnClose.classList.add('clvpf-btn_close');
    btnClose.innerText = '关闭';

    var btnNext = document.createElement('span');
    btnNext.classList.add('clvpf-btn_next');
    btnNext.innerText = '下一个';

    btnClose.addEventListener('click', () => {
        this.close();
    });

    btnNext.addEventListener('click', () => {
        this.next();
    });

    dialog.appendChild(dialogBody);
    dialogFooter.appendChild(btnClose);
    dialogFooter.appendChild(btnNext);
    dialog.appendChild(dialogFooter);

    return dialog;
}

module.exports = Clvpf
