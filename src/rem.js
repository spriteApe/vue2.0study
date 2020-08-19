
// 1. 设置scale=1/dpr和font-size
;
(function () {
	change()
	window.addEventListener('resize', shakeProof(change, 500))
})();
// 根据设备尺寸和dpr改变viewport和html的fontsize
function change() {
	var html = document.documentElement;
	//获取设备像素比
	var devicePixeRatio = window.devicePixelRatio;
	var metaEl = document.querySelector('meta[name="viewport"]');
	//获取缩放比例
	var scale = 1 / devicePixeRatio;
	//根据不同的dpr设置不同的缩放比例
	metaEl.setAttribute('content', 'initial-scale=' + scale + ',maximum-scale=' + scale +
		',minimum-scale=' + scale);
	var width = html.getBoundingClientRect().width;
	var rem = width / 10;
	html.style.fontSize = rem + 'px';
}
// 防抖
function shakeProof(func, wait) {
	let time
	return function () {
		if (time) clearTimeout(time)
		time = setTimeout(func, wait);
	}
}

