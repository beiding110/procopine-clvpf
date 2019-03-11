module.exports = function creatStyle(styleStr) {
    //创建一个包含参数内容的style标签；
    var styleNode = document.createElement('style');
    styleNode.innerHTML = styleStr;

    document.head.appendChild(styleNode);
}
