 //---------------------设计分享的基本信息 start
 // share infomation object
 var setMes = {
 	//分享标题 --- （如果分享的网站有标题选项的话 如果不写 默认为网站的标题）
 	SiteTitle: "" || document.title,
 	//分享到 --- ( 内容 开心网限制140个字 腾讯微博限制128个字 如果下面内容不写为空，则为页面的标题 )
 	SiteContents: 'post contents' || document.title,
 	//分享的网站地址  --- （ 如果不写的话，就为网站的当前URL ）
 	Siteurl: 'http://www.microsoft.com/zh-cn/server-cloud/' || location.href,
 	//分享的图片地址  --- （ 下面前面是百度的LOGO，我自定义的图片，可以替换你要的图片，不同分享平台可能可以分享图片，也可能不分享图片，这个不可控，分享的张数为1张，特殊情况需要不抓取图片情况，需要设置中转页面，主要是鉴于某些分享平台会随机抓取页面图片 ）
 	SitePic: '' || '',
 	//APPkey --- ( 来自于哪里？ 腾讯微博的APPKAY 不写则为默认什么都没有 )
 	SiteAppKey: '' || 'nokey'
 }

 //newwindow size configuration 
 var newWindow = {
 	width: 600, //新窗口的宽度
 	height: 600, //新窗口的高度
 	top: 75, //新窗口的left
 	left: 20, //新窗口的top
 	status: 'no', //窗口的信息
 	scrollbars: 'no', //新窗口内是否允许出现滚动条
 	resizable: 'yes' //新窗口是否可以调整大小
 }



 var _t = encodeURIComponent(setMes.SiteTitle);
 var _appkey = encodeURI(setMes.SiteAppKey);
 var _url = encodeURIComponent(setMes.Siteurl);
 var _site = encodeURIComponent(setMes.SiteContents);
 var _pic = encodeURI(setMes.SitePic);

 /*weibo share function*/
 function shareTSina() {

 	var wordLink = 'http://service.weibo.com/share/share.php?title=' + _site + '&url=' + _url + '&pic=' + _pic + '&appkey=' + _appkey + '&rcontent=' + _t;
 	window.open(wordLink, '_blank', 'scrollbars=' + newWindow.scrollbars + ',width=' + newWindow.width + ',height=' + newWindow.height + ',left=' + newWindow.left + ',top=' + newWindow.top + ',status=' + newWindow.status + ',resizable=' + newWindow.resizable);

 }

 window.onload = function() {
 	var sinaShareBtn = document.getElementById('share-sina');
 	sinaShareBtn.onclick = shareTSina
 }