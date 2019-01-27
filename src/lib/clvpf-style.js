var styleString = '\
.clvpf-dialog{display:inline-block;}\
.clvpf-dialog .clvpf-dialog_body{display:inline-block; background:black; color:white; padding:.3em .5em; border-radius:3px; position:relative; min-width:4em; text-align:center;}\
.clvpf-dialog .clvpf-dialog_body::before{content:" "; position: absolute; width:10px; height:10px; top:0px; left:50%; transform:translate(-50%,-50%) rotate(45deg); background:black;}\
.clvpf-dialog .clvpf-dialog_footer{font-size:10px; overflow:hidden;}\
.clvpf-dialog .clvpf-dialog_footer span[class^=clvpf-btn_]{cursor:pointer;}\
.clvpf-dialog .clvpf-dialog_footer .clvpf-btn_close{float:left; }\
.clvpf-dialog .clvpf-dialog_footer .clvpf-btn_next{float:right;}\
'

module.exports = styleString
