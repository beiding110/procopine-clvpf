var styleString = '\
.clvpf-dialog{display:inline-block; max-width:200px; cursor:default; position:absolute; background-color:black; border-radius:4px; color:white;}\
.clvpf-dialog *{transition:all .3s;}\
\
.clvpf-dialog .clvpf-dialog_body{display:inline-block; background:black; position:relative; min-width:4em; text-align:left; padding:.5em; border-radius:4px;}\
.clvpf-dialog .clvpf-dialog_body::before{content:" "; position: absolute; width:0; height:0; transform:translate(-50%,-50%); border:8px solid;}\
\
.clvpf-dialog.clvpf-dialog_top .clvpf-dialog_body::before{border-color:black rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0); bottom:-58px; left:50%;}\
.clvpf-dialog.clvpf-dialog_bottom .clvpf-dialog_body::before{border-color:rgba(0,0,0,0) rgba(0,0,0,0) black rgba(0,0,0,0); top:-10px; left:50%;}\
.clvpf-dialog.clvpf-dialog_left .clvpf-dialog_body::before{border-color:rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0) black; top: 50%; right:-26px;}\
.clvpf-dialog.clvpf-dialog_right .clvpf-dialog_body::before{border-color:rgba(0,0,0,0) black rgba(0,0,0,0) rgba(0,0,0,0); top:50%; left:-10px;}\
\
.clvpf-dialog .clvpf-dialog_footer{font-size:10px; overflow:hidden; margin-top:.3em; padding:.5em; padding-top:0;}\
\
.clvpf-footer_btn-con{float:right; border-radius:4px; border:1px solid white; padding:0;}\
.clvpf-dialog .clvpf-dialog_footer span[class^=clvpf-btn_]{cursor:pointer; padding:.2em .5em; display:inline-block;}\
.clvpf-dialog .clvpf-dialog_footer span[class^=clvpf-btn_]:hover{background-color:#606266;}\
\
.clvpf-dialog .clvpf-dialog_footer span.clvpf-btn_close{}\
.clvpf-dialog .clvpf-dialog_footer span.clvpf-btn_next{border-left:1px solid white;}\
'

module.exports = styleString
