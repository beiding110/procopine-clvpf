function ajax(obj) {
    // var args = [];
    // args.push.apply(args, arguments);
    //
    // console.log()

    !obj.url && console.error('必须设置url属性');

    var xhr = new XMLHttpRequest();
    xhr.timeout = obj.timeout || 30000;
    xhr.open(obj.type || 'get', obj.url);
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded;charset=utf-8'");

    xhr.send(obj.data);

    xhr.onreadystatechange = function () {
        if (xhr.readyState==4) {
            if(xhr.status==200) {
                var res = xhr.responseText;
                res = (typeof(res) === 'string' && /{|}/.test(res)) ? JSON.parse(res) : res;
                obj.success && obj.success(res);
            } else {
                obj.error && obj.error(xhr);
            }
            obj.complete && obj.complete(xhr);
        } else {

        }
    }
}

module.exports = ajax
