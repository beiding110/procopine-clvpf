const ajax = require('./lib/ajax.js')

function Doalog(obj) {
    this.init(obj);
}

Doalog.prototype = {
    init(obj) {
        this.$dialog = null;
        this.$textarea = null;
        this.$file_btn = null;
        this.$file = null;
        this.$submit = null;

        this.$url = obj.url;

        document.body.appendChild(creatDom.call(this))
    },
    submit() {
        // var json = {
        //     text: this.$textarea.value
        // };
        //
        // console.log(json);

        var formdata=new FormData();
        formdata.append("text", this.$textarea.value);
        formdata.append("file", this.$file.files[0]);
        console.log(formdata.get("file"))

        ajax({
            type: 'post',
            url: this.$url,
            data: formdata,
            success(res) {

            },
            error() {

            }
        })

        this.close();
    },
    show() {
        this.$dialog.style.display = 'block';
    },
    close() {
        this.clear();
        this.$dialog.style.display = 'none';
    },
    clear() {
        this.$textarea.value = '';
        this.$file.value = '';
        this.$preview.parentNode.style.display = 'none';
        this.$preview.src = '';
    },
    updatePreview() {
        var src = getObjectURL(this.$file.files[0]);
        this.$preview.src = src;
        !!src && (this.$preview.parentNode.style.display = 'inline-block');
    }
};

function creatDom() {
    var cover = document.createElement('div');
    cover.classList.add('clvpf-fb_cover');

    var dialog = document.createElement('div');
    dialog.classList.add('clvpf-fb-dialog');

// title
    var title = document.createElement('h3');
    title.classList.add('fb-dialog_title');
    title.innerText = '反馈意见';

// body
    var body = document.createElement('div');
    body.classList.add('fb-dialog_body');
    //意见
    var item_text = document.createElement('div');
    item_text.classList.add('fb-dialog_item');

    var label_text = document.createElement('label');
    label_text.innerText = '意见';

    var itemContent_text = document.createElement('div');
    itemContent_text.classList.add('dialog_item_content');

    var textarea = document.createElement('textarea');
    textarea.classList.add('form-textarea');
    this.$textarea = textarea;

    itemContent_text.appendChild(textarea);
    item_text.appendChild(label_text);
    item_text.appendChild(itemContent_text);

    //上传
    var item_upoload = document.createElement('div');
    item_upoload.classList.add('fb-dialog_item');

    var label_upoload = document.createElement('label');
    label_upoload.innerText = '图片附件';

    var itemContent_upoload = document.createElement('div');
    itemContent_upoload.classList.add('dialog_item_content');

    var file_btn_con = document.createElement('div');

    var btn_upoload = document.createElement('button');
    btn_upoload.classList.add('btn', 'btn-submit');
    btn_upoload.innerText = '点击上传';
    this.$file_btn = btn_upoload;

    var input_file = document.createElement('input');
    input_file.classList.add('btn', 'btn-upload_input');
    input_file.type = 'file';
    input_file.accept = 'image/*';
    input_file.addEventListener('change', () => {
        this.updatePreview();
    })
    this.$file = input_file;

    btn_upoload.addEventListener('click', () => {
        input_file.click()
    });

    var preivew_con = document.createElement('div');
    preivew_con.classList.add('preview-con');
    var img = document.createElement('img');
    this.$preview = img;
    preivew_con.appendChild(img);

    file_btn_con.appendChild(btn_upoload);
    file_btn_con.appendChild(input_file);
    itemContent_upoload.appendChild(file_btn_con);
    itemContent_upoload.appendChild(preivew_con);
    item_upoload.appendChild(label_upoload);
    item_upoload.appendChild(itemContent_upoload);

    body.appendChild(item_text);
    body.appendChild(item_upoload);

// footer
    var footer = document.createElement('div');
    footer.classList.add('fb-dialog_footer');

    var btn_submit = document.createElement('button');
    btn_submit.classList.add('btn', 'btn-submit');
    btn_submit.innerText = '提交';
    this.$submit = btn_submit;

    btn_submit.addEventListener('click', () => {
        this.submit();
    })

    footer.appendChild(btn_submit)

    dialog.appendChild(title);
    dialog.appendChild(body);
    dialog.appendChild(footer);

    cover.appendChild(dialog);
    cover.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();

        (e.target === cover) && this.close();
    });
    this.$dialog = cover;

    return cover;
}

function getObjectURL(file) {
    var url = null;
    if (window.createObjectURL != undefined) { // basic
        url = window.createObjectURL(file);
    } else if (window.URL != undefined) { // mozilla(firefox)
        url = window.URL.createObjectURL(file);
    } else if (window.webkitURL != undefined) { // webkit or chrome
        url = window.webkitURL.createObjectURL(file);
    }
    return url;
}

module.exports = Doalog;
