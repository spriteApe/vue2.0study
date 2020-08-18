
// 1. 设置scale=1/dpr和font-size
;
(function(window){
	var doc=window.document;
	var docEl=doc.documentElement;
	//获取设备像素比
	var devicePixeRatio=window.devicePixelRatio;
	var metaEl=doc.querySelector('meta[name="viewport"]');
	//获取缩放比例
	var scale=1 / devicePixeRatio;
	//根据不同的dpr设置不同的缩放比例
	metaEl.setAttribute('content','initial-scale='+scale+',maximum-scale='+scale+
	',minimum-scale='+scale);
	var width=docEl.getBoundingClientRect().width;
    var rem=width/ 10; 
    console.log(width)
	docEl.style.fontSize=rem+'px';
})(window);
 
