webpackJsonp([0],[,,,,,,,,,,function(e,n,r){"use strict";function o(e,n){return e*n}r(11);console.log(null[0]),o()},function(e,n,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=r(12),t=o(i);new t.default({remoteLogging:!0,remoteSettings:{url:"http://39.108.124.75:3333/sendErrInfo"}})},function(e,n,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=function(){function e(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,r,o){return r&&e(n.prototype,r),o&&e(n,o),n}}();r(13);var d=r(14),c=o(d),l=r(3),u=o(l),f=function(){function e(n){var r=this;i(this,e),this.errListener=function(e){r.options.detailedErrors&&r.detailedErrors(e),r.options.remoteLogging&&r.remoteLogging(e,r.options.remoteSettings)},n||(n={});var o={detailedErrors:!0,remoteLogging:!1,remoteSettings:{url:null,additionalParams:null,successCallback:null,errorCallback:null}};this.browserInfo=new c.default,this.options=Object.assign(o,n),window.removeEventListener("error",this.errListener),window.addEventListener("error",this.errListener)}return a(e,[{key:"detailedErrors",value:function(e){var n=this.errorData(e),r=encodeURI("https://stackoverflow.com/search?q="+n.error.split(" ").join("+")),o=["%cType: %c"+n.type,"%cError: %c"+n.error,"%cStackTrace: %c"+n.stackTrace,"%cFile Name: %c"+n.filename,"%cPath: %c"+n.path,"%cLine: %c"+n.line,"%cColumn: %c"+n.column,"%cDate: %c"+n.datetime,"%cDebug : %c"+n.path+":"+n.line,"%cGet Help: %c"+r].join("\n");"Chrome"===this.browserInfo.browser?console.log(o,"font-weight: bold;","color: #e74c3c;","font-weight: bold;","font-weight: normal; color: #e74c3c;","font-weight: bold;","font-weight: normal; color: #e74c3c;","font-weight: bold;","font-weight: normal;","font-weight: bold;","font-weight: normal;","font-weight: bold;","font-weight: normal;","font-weight: bold;","font-weight: normal;","font-weight: bold;","font-weight: normal;","font-weight: bold;","font-weight: normal;","font-weight: bold;","font-weight: normal; color: #3498db;"):console.log(o.replace(/%c/gi,""))}},{key:"remoteLogging",value:function(e,n){if(!n.url)throw new Error("Provide remote URL to log errors remotely");if(n.additionalParams&&"object"!==t(n.additionalParams))throw new Error("Invalid data type, additionalParams should be a valid object");var r=(new XMLHttpRequest,n.url),o=this.errorData(e),i=Object.assign(o,n.additionalParams);this.serializeData(i);u.default.post(r,i).then(function(e){console.log(e.data)})}},{key:"errorData",value:function(e){var n=e.filename.lastIndexOf("/"),r=(new Date).toString();return{type:e.type,path:e.filename,filename:e.filename.substring(++n),line:e.lineno,column:e.colno,error:e.message,stackTrace:e.error?e.error.stack.toString().replace(/(\r\n|\n|\r)/gm,""):"",datetime:r,userAgent:navigator.userAgent||window.navigator.userAgent}}},{key:"serializeData",value:function(e){return Object.keys(e).map(function(n){return encodeURIComponent(n)+"="+encodeURIComponent(e[n])}).join("&")}}]),e}();n.default=f},function(e,n,r){"use strict";Object.assign=r(2)},function(e,n,r){"use strict";function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var i=function e(n){o(this,e);var r=window||{},i=navigator||{},t=n||i.userAgent,a=this,d={Trident:t.indexOf("Trident")>-1||t.indexOf("NET CLR")>-1,Presto:t.indexOf("Presto")>-1,WebKit:t.indexOf("AppleWebKit")>-1,Gecko:t.indexOf("Gecko/")>-1,Safari:t.indexOf("Safari")>-1,Chrome:t.indexOf("Chrome")>-1||t.indexOf("CriOS")>-1,IE:t.indexOf("MSIE")>-1||t.indexOf("Trident")>-1,Edge:t.indexOf("Edge")>-1,Firefox:t.indexOf("Firefox")>-1||t.indexOf("FxiOS")>-1,"Firefox Focus":t.indexOf("Focus")>-1,Chromium:t.indexOf("Chromium")>-1,Opera:t.indexOf("Opera")>-1||t.indexOf("OPR")>-1,Vivaldi:t.indexOf("Vivaldi")>-1,Yandex:t.indexOf("YaBrowser")>-1,Kindle:t.indexOf("Kindle")>-1||t.indexOf("Silk/")>-1,360:t.indexOf("360EE")>-1||t.indexOf("360SE")>-1,UC:t.indexOf("UC")>-1||t.indexOf(" UBrowser")>-1,QQBrowser:t.indexOf("QQBrowser")>-1,QQ:t.indexOf("QQ/")>-1,Baidu:t.indexOf("Baidu")>-1||t.indexOf("BIDUBrowser")>-1,Maxthon:t.indexOf("Maxthon")>-1,Sogou:t.indexOf("MetaSr")>-1||t.indexOf("Sogou")>-1,LBBROWSER:t.indexOf("LBBROWSER")>-1,"2345Explorer":t.indexOf("2345Explorer")>-1,TheWorld:t.indexOf("TheWorld")>-1,XiaoMi:t.indexOf("MiuiBrowser")>-1,Quark:t.indexOf("Quark")>-1,Qiyu:t.indexOf("Qiyu")>-1,Wechat:t.indexOf("MicroMessenger")>-1,Taobao:t.indexOf("AliApp(TB")>-1,Alipay:t.indexOf("AliApp(AP")>-1,Weibo:t.indexOf("Weibo")>-1,Douban:t.indexOf("com.douban.frodo")>-1,Suning:t.indexOf("SNEBUY-APP")>-1,iQiYi:t.indexOf("IqiyiApp")>-1,Windows:t.indexOf("Windows")>-1,Linux:t.indexOf("Linux")>-1||t.indexOf("X11")>-1,"Mac OS":t.indexOf("Macintosh")>-1,Android:t.indexOf("Android")>-1||t.indexOf("Adr")>-1,Ubuntu:t.indexOf("Ubuntu")>-1,FreeBSD:t.indexOf("FreeBSD")>-1,Debian:t.indexOf("Debian")>-1,"Windows Phone":t.indexOf("IEMobile")>-1||t.indexOf("Windows Phone")>-1,BlackBerry:t.indexOf("BlackBerry")>-1||t.indexOf("RIM")>-1,MeeGo:t.indexOf("MeeGo")>-1,Symbian:t.indexOf("Symbian")>-1,iOS:t.indexOf("like Mac OS X")>-1,"Chrome OS":t.indexOf("CrOS")>-1,WebOS:t.indexOf("hpwOS")>-1,Mobile:t.indexOf("Mobi")>-1||t.indexOf("iPh")>-1||t.indexOf("480")>-1,Tablet:t.indexOf("Tablet")>-1||t.indexOf("Pad")>-1||t.indexOf("Nexus 7")>-1};d.Mobile?d.Mobile=!(t.indexOf("iPad")>-1):r.showModalDialog&&r.chrome&&(d[360]=!0);var c={engine:["WebKit","Trident","Gecko","Presto"],browser:["Safari","Chrome","Edge","IE","Firefox","Firefox Focus","Chromium","Opera","Vivaldi","Yandex","Kindle","360","UC","QQBrowser","QQ","Baidu","Maxthon","Sogou","LBBROWSER","2345Explorer","TheWorld","XiaoMi","Quark","Qiyu","Wechat","Taobao","Alipay","Weibo","Douban","Suning","iQiYi"],os:["Windows","Linux","Mac OS","Android","Ubuntu","FreeBSD","Debian","iOS","Windows Phone","BlackBerry","MeeGo","Symbian","Chrome OS","WebOS"],device:["Mobile","Tablet"]};a.device="PC",a.language=function(){var e=i.browserLanguage||i.language,n=e.split("-");return n[1]&&(n[1]=n[1].toUpperCase()),n.join("_")}();for(var l in c)for(var u=0;u<c[l].length;u++){var f=c[l][u];d[f]&&(a[l]=f)}var s={Windows:function(){var e=t.replace(/^.*Windows NT ([\d.]+);.*$/,"$1");return{6.4:"10",6.3:"8.1",6.2:"8",6.1:"7","6.0":"Vista",5.2:"XP",5.1:"XP","5.0":"2000"}[e]||e},Android:function(){return t.replace(/^.*Android ([\d.]+);.*$/,"$1")},iOS:function(){return t.replace(/^.*OS ([\d_]+) like.*$/,"$1").replace(/_/g,".")},Debian:function(){return t.replace(/^.*Debian\/([\d.]+).*$/,"$1")},"Windows Phone":function(){return t.replace(/^.*Windows Phone( OS)? ([\d.]+);.*$/,"$2")},"Mac OS":function(){return t.replace(/^.*Mac OS X ([\d_]+).*$/,"$1").replace(/_/g,".")},WebOS:function(){return t.replace(/^.*hpwOS\/([\d.]+);.*$/,"$1")}};a.osVersion="",s[a.os]&&(a.osVersion=s[a.os](),a.osVersion==t&&(a.osVersion=""));var p={Safari:function(){return t.replace(/^.*Version\/([\d.]+).*$/,"$1")},Chrome:function(){return t.replace(/^.*Chrome\/([\d.]+).*$/,"$1").replace(/^.*CriOS\/([\d.]+).*$/,"$1")},IE:function(){return t.replace(/^.*MSIE ([\d.]+).*$/,"$1").replace(/^.*rv:([\d.]+).*$/,"$1")},Edge:function(){return t.replace(/^.*Edge\/([\d.]+).*$/,"$1")},Firefox:function(){return t.replace(/^.*Firefox\/([\d.]+).*$/,"$1").replace(/^.*FxiOS\/([\d.]+).*$/,"$1")},"Firefox Focus":function(){return t.replace(/^.*Focus\/([\d.]+).*$/,"$1")},Chromium:function(){return t.replace(/^.*Chromium\/([\d.]+).*$/,"$1")},Opera:function(){return t.replace(/^.*Opera\/([\d.]+).*$/,"$1").replace(/^.*OPR\/([\d.]+).*$/,"$1")},Vivaldi:function(){return t.replace(/^.*Vivaldi\/([\d.]+).*$/,"$1")},Yandex:function(){return t.replace(/^.*YaBrowser\/([\d.]+).*$/,"$1")},Kindle:function(){return t.replace(/^.*Version\/([\d.]+).*$/,"$1")},Maxthon:function(){return t.replace(/^.*Maxthon\/([\d.]+).*$/,"$1")},QQBrowser:function(){return t.replace(/^.*QQBrowser\/([\d.]+).*$/,"$1")},QQ:function(){return t.replace(/^.*QQ\/([\d.]+).*$/,"$1")},Baidu:function(){return t.replace(/^.*BIDUBrowser[\s\/]([\d.]+).*$/,"$1")},UC:function(){return t.replace(/^.*UC?Browser\/([\d.]+).*$/,"$1")},Sogou:function(){return t.replace(/^.*SE ([\d.X]+).*$/,"$1").replace(/^.*SogouMobileBrowser\/([\d.]+).*$/,"$1")},"2345Explorer":function(){return t.replace(/^.*2345Explorer\/([\d.]+).*$/,"$1")},TheWorld:function(){return t.replace(/^.*TheWorld ([\d.]+).*$/,"$1")},XiaoMi:function(){return t.replace(/^.*MiuiBrowser\/([\d.]+).*$/,"$1")},Quark:function(){return t.replace(/^.*Quark\/([\d.]+).*$/,"$1")},Qiyu:function(){return t.replace(/^.*Qiyu\/([\d.]+).*$/,"$1")},Wechat:function(){return t.replace(/^.*MicroMessenger\/([\d.]+).*$/,"$1")},Taobao:function(){return t.replace(/^.*AliApp\(TB\/([\d.]+).*$/,"$1")},Alipay:function(){return t.replace(/^.*AliApp\(AP\/([\d.]+).*$/,"$1")},Weibo:function(){return t.replace(/^.*weibo__([\d.]+).*$/,"$1")},Douban:function(){return t.replace(/^.*com.douban.frodo\/([\d.]+).*$/,"$1")},Suning:function(){return t.replace(/^.*SNEBUY-APP([\d.]+).*$/,"$1")},iQiYi:function(){return t.replace(/^.*IqiyiVersion\/([\d.]+).*$/,"$1")}};a.version="",p[a.browser]&&(a.version=p[a.browser](),a.version==t&&(a.version="")),"Edge"==a.browser?a.engine="EdgeHTML":"Chrome"==a.browser&&parseInt(a.version)>27?a.engine="Blink":"Opera"==a.browser&&parseInt(a.version)>12?a.engine="Blink":"Yandex"==a.browser&&(a.engine="Blink")};n.default=i}],[10]);
//# sourceMappingURL=errlogger.js.map