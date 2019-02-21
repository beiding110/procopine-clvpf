function ajax(obj) {
    // var args = [];
    // args.push.apply(args, arguments);
    //
    // console.log()

    !obj.url && console.error('必须设置url属性');

    var xhr = new XMLHttpRequest();
    xhr.open(obj.type || 'get', obj.url);
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");

    xhr.send(obj.data);

    xhr.onreadystatechange = function () {
        if (xhr.readyState==4&&xhr.status==200) {
            obj.success && obj.success(xhr.responseText);
        } else {
            obj.error && obj.error();
        }
    }
}

module.exports = ajax
