var dialogStyle = '\
.clvpf-fb-dialog *{transition:all .3s;}\
\
.clvpf-fb_cover{position:fixed; left:0; right:0; top:0; bottom:0; background:rgba(255,255,255,0.1); z-index:19950123; transition:all .3s;}\
.clvpf-fb-dialog{position:fixed; left:50%; top:50%; transform:translate(-50%,-50%); width:400px; background-color:white; border-radius:4px; padding:20px; box-shadow:0 0 10px rgba(0,0,0,0.1); transition:all .3s;}\
\
.fb-dialog_title{font-size:18px; margin:0 0 1em 0;}\
.fb-dialog_close{display:inline-block; float:right; width:1em; height:1em; cursor:pointer; position:relative;}\
.fb-dialog_close::before, .fb-dialog_close::after{content:" "; position:absolute; width:100%; height:1px; background:#ddd; left:50%; top:50%;}\
.fb-dialog_close::before{transform:translate(-50%,-50%) rotate(-45deg);}\
.fb-dialog_close::after{transform:translate(-50%,-50%) rotate(45deg);}\
.fb-dialog_close:hover::before, .fb-dialog_close:hover::after{background-color:red;}\
\
.fb-dialog_body{}\
.fb-dialog_item{margin-bottom:20px;}\
.fb-dialog_item label{font-size:14px; width:80px; display:inline-block; float:left;}\
.fb-dialog_item .dialog_item_content{margin-left:80px;}\
.clvpf-fb-dialog .btn{background-color:white; border:1px solid #eee; padding:.5em 1em; border-radius:4px; cursor:pointer; transition:all .3s;}\
.btn.btn-submit:hover{background:#D9ECFF; color:#409EFF; border-color:#409EFF;}\
\
.btn-upload_input{display:none;}\
.form-textarea{width:100%; height:6em; resize:none; border-radius:4px; border-color:#eee;}\
.fb-dialog_item.error label{color:red;}\
.fb-dialog_item.error .dialog_item_content>*{border-color:red;}\
\
.fb-dialog_footer{text-align:center;}\
\
.preview-con{margin-top: 5px; max-width:100%; border: 1px dashed #eee; display:none;}\
.preview-con img{width:100%;}\
'

module.exports = dialogStyle
