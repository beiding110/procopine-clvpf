var styleString = '\
.clvpf-dialog{display:inline-block; max-width:200px; cursor:default; position:absolute;}\
.clvpf-dialog .clvpf-dialog_body{display:inline-block; background:black; color:white; padding:.3em .5em; border-radius:3px; position:relative; min-width:4em; text-align:center;}\
.clvpf-dialog .clvpf-dialog_body::before{content:" "; position: absolute; width:0; height:0; transform:translate(-50%,-50%); border:8px solid;}\
.clvpf-dialog.clvpf-dialog_top .clvpf-dialog_body::before{border-color:black rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0); bottom:-24px; left:50%;}\
.clvpf-dialog.clvpf-dialog_bottom .clvpf-dialog_body::before{border-color:rgba(0,0,0,0) rgba(0,0,0,0) black rgba(0,0,0,0); top:-8px; left:50%;}\
.clvpf-dialog.clvpf-dialog_left .clvpf-dialog_body::before{border-color:rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0) black; top: 50%; right:-24px;}\
.clvpf-dialog.clvpf-dialog_right .clvpf-dialog_body::before{border-color:rgba(0,0,0,0) black rgba(0,0,0,0) rgba(0,0,0,0); top:50%; left:-8px;}\
.clvpf-dialog .clvpf-dialog_footer{font-size:10px; overflow:hidden;}\
.clvpf-dialog .clvpf-dialog_footer span[class^=clvpf-btn_]{cursor:pointer;}\
.clvpf-dialog .clvpf-dialog_footer .clvpf-btn_close{float:left; }\
.clvpf-dialog .clvpf-dialog_footer .clvpf-btn_next{float:right;}\
'

var dialogStyle = '\
.clvpf-fb_cover{position:fixed; left:0; right:0; top:0; bottom:0; background:rgba(255,255,255,0.1); z-index:19950123; transition:all .3s;}\
.clvpf-fb-dialog{position:fixed; left:50%; top:50%; transform:translate(-50%,-50%); width:400px; background-color:white; border-radius:4px; padding:20px; box-shadow:0 0 10px rgba(0,0,0,0.1); transition:all .3s;}\
\
.fb-dialog_title{font-size:18px; margin:0 0 1em 0;}\
.fb-dialog_body{}\
.fb-dialog_item{margin-bottom:20px;}\
.fb-dialog_item label{font-size:14px; width:80px; display:inline-block; float:left;}\
.fb-dialog_item .dialog_item_content{margin-left:80px;}\
.clvpf-fb-dialog .btn{background-color:white; border:1px solid #eee; padding:.5em 1em; border-radius:4px; cursor:pointer; transition:all .3s;}\
\
.btn-upload_input{display:none;}\
.form-textarea{width:100%; height:6em; resize:none; border-radius:4px; border-color:#eee;}\
\
.fb-dialog_footer{text-align:center;}\
\
.preview-con{margin-top: 5px; max-width:100%; border: 1px dashed #eee; display:none;}\
.preview-con img{width:100%;}\
'

module.exports = (styleString + dialogStyle)
