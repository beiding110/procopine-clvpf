const strStyle = require('./lib/popbtn-style.js'),
    creatStyle = require('./lib/creat-style.js'),
    iconHelp = require('./lib/icon-help.js');


function PopBtn(obj) {
	this.init(obj);
};

PopBtn.prototype = {
	init: function(obj) {
        creatStyle(strStyle);

		this.$settings = obj;
		this.$mainBtn = null;
		this.$subBtn = [];
		this.$activePos = [];

		this.showState = false;

		var that = this;

		document.body.appendChild(this.creatDom(obj));
		this.calcActivePos();

		this.$mainBtn.addEventListener('click', function(e) {
			if (that.showState) {
				that.hide();
				that.showState = false;
			} else {
				that.show();
				that.showState = true;
			}
		});
	},
	creatDom: function(obj) {
		var that = this;
		var group = document.createElement('div');
		group.classList.add('clv-btn_group');

		var mainBtn = document.createElement('div');
		mainBtn.classList.add('clv-ben', 'clv-ben_main');
		this.$mainBtn = mainBtn;

        var icon = document.createElement('img');
        icon.setAttribute('src', iconHelp);
        mainBtn.appendChild(icon);

		if(Array.isArray(obj.btn) && obj.btn.length > 0) {
			obj.btn.forEach(function(item) {
				var btn = document.createElement('div');
				btn.classList.add('clv-ben', 'clv-ben_sub', item.name);
				btn.innerHTML = item.html;

				Object.keys(item.on).forEach(function(eName) {
					var cb = item.on[eName];
					btn.addEventListener(eName, cb);
				});

				that.$subBtn.push(btn);
				group.appendChild(btn);
			})
		};

		group.appendChild(mainBtn);

		return group;
	},
	calcActivePos: function() {
		var subs = this.$subBtn,
			sub_l = subs.length,
			that = this;

		var delta = Math.PI * .75 / (sub_l + 1);

		subs.forEach(function(item, index) {
			var width = item.clientWidth,
				obj = {};

			obj.left =  ((2 * width) * Math.sin(delta * (index + 1) + Math.PI));
			obj.top =  ((2 * width) * Math.cos(delta * (index + 1) + Math.PI));

			that.$activePos.push(obj);
		})
	},
	show: function() {
		var that = this;
		this.$subBtn.forEach(function(item, index) {
			item.style.top = that.$activePos[index].top + 'px';
			item.style.left = that.$activePos[index].left + 'px';
		})
	},
	hide: function() {
		this.$subBtn.forEach(function(item, index) {
			item.style.top = 0 + 'px';
			item.style.left = 0 + 'px';
		})
	}
}

module.exports = PopBtn;
