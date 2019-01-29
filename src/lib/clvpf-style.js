var styleString = '\
.clvpf-dialog{display:inline-block; max-width:200px; cursor:default;}\
.clvpf-dialog .clvpf-dialog_body{display:inline-block; background:black; color:white; padding:.3em .5em; border-radius:3px; position:relative; min-width:4em; text-align:center;}\
.clvpf-dialog .clvpf-dialog_body::before{content:" "; position: absolute; width:0; height:0; transform:translate(-50%,-50%); border:8px solid;}\
.clvpf-dialog.clvpf-dialog_top .clvpf-dialog_body::before{border-color:black rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0); bottom:-8px; left:50%;}\
.clvpf-dialog.clvpf-dialog_bottom .clvpf-dialog_body::before{border-color:rgba(0,0,0,0) rgba(0,0,0,0) black rgba(0,0,0,0); top:-8px; left:50%;}\
.clvpf-dialog.clvpf-dialog_left .clvpf-dialog_body::before{border-color:rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0) black; top: 50%; right:-8px;}\
.clvpf-dialog.clvpf-dialog_right .clvpf-dialog_body::before{border-color:rgba(0,0,0,0) black rgba(0,0,0,0) rgba(0,0,0,0); top:50%; left:-8px;}\
.clvpf-dialog .clvpf-dialog_footer{font-size:10px; overflow:hidden;}\
.clvpf-dialog .clvpf-dialog_footer span[class^=clvpf-btn_]{cursor:pointer;}\
.clvpf-dialog .clvpf-dialog_footer .clvpf-btn_close{float:left; }\
.clvpf-dialog .clvpf-dialog_footer .clvpf-btn_next{float:right;}\
'

module.exports = styleString
