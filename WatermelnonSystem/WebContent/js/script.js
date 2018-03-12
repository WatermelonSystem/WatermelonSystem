var _mare_params=_mare_params||{},_mare_isFirstLoad=function(a){var b="undefined"==typeof a.firstLoad;return a.firstLoad=b,b||console.log("Error: MARE.io script has been called twice. Please remove one instance of the MARE code."),b};_mare_isFirstLoad(_mare_params)&&(!function(a){function o(a,b){if("js"==b){var c=document.createElement("script");c.setAttribute("type","text/javascript"),c.setAttribute("src",a)}else if("css"==b){var c=document.createElement("link");c.setAttribute("rel","stylesheet"),c.setAttribute("type","text/css"),c.setAttribute("href",a)}"undefined"!=typeof c&&document.getElementsByTagName("head")[0].appendChild(c)}function q(){return Math.max(document.body.scrollHeight||0,document.documentElement.scrollHeight||0,document.body.offsetHeight||0,document.documentElement.offsetHeight||0,document.body.clientHeight||0,document.documentElement.clientHeight||0)}function r(){return window.innerHeight||document.documentElement.clientHeight||0}function s(){return window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth||0}function u(a,b,c){if(c){var d=new Date;d.setTime(d.getTime()+c);var e="; expires="+d.toGMTString()}else var e="";document.cookie=a+"="+b+e+"; path=/"}function v(a){for(var b=a+"=",c=document.cookie.split(";"),d=0;d<c.length;d++){for(var e=c[d];" "==e.charAt(0);)e=e.substring(1,e.length);if(0==e.indexOf(b))return e.substring(b.length,e.length)}return null}_mare_params.mareHost="www",_mare_params.embedHost="surveys";var b={},c=[],d="https:"==document.location.protocol?"https://":"http://",e="undefined"!=typeof _mare_prefix?_mare_prefix:"mareiobx-",f=function(){for(var a,b=3,c=document.createElement("div"),d=c.getElementsByTagName("i");c.innerHTML="<!--[if gt IE "+ ++b+"]><i></i><![endif]-->",d[0];);return b>4?b:a}();window.addEventListener("message",function(a){a.origin==d+_mare_params.embedHost+".mare.io"&&(document.querySelector("#"+a.data.embedid+" iframe").style.height=a.data.height+14+"px")}),b.prefix=e,"undefined"!=typeof _mare_override&&(b.override=_mare_override),"undefined"!=typeof _mare_container&&(b.container=_mare_container),b.pk=_mare_pk,"undefined"!=typeof _mare_wp_sc?"undefined"!=typeof _mare_sc?b.sc=""!=_mare_wp_sc?_mare_wp_sc:_mare_sc:b.sc=_mare_wp_sc:b.sc=_mare_sc,b.href=document.location.href,b.referrer=document.referrer,b.title=document.title,b.windowHeight=r(),b.windowWidth=s(),b.pageHeight=q(),b.language=window.navigator.userLanguage||window.navigator.language,b.userAgent=navigator.userAgent;var g=document.querySelectorAll('[data="mare-survey"]');for(i=0;i<g.length;i++)g[i].onclick=function(c){c.preventDefault();var e,d=document.querySelectorAll(".mareiobx-survey-iframe");for(j=0;j<d.length;j++)e=d[j].parentNode,document.body.removeChild(e);var f=this.getAttribute("data-survey");return b.override=f,b.rec=!0,a.ajax_call(),!1};if(a.update_param=function(a,c){"override"==a&&(b.override=c)},a.get_param=function(){var a=b.responsedata;return a.prefix=b.prefix,b.override&&(a.override=b.override),b.container&&(a.container=b.container),b.rec&&(a.rec=b.rec),a},window.XDomainRequest&&!JSON){var l=document.createElement("script");l.type="text/javascript",l.async=!0,l.src=d+"mare.io/API/json2.js";var m=document.getElementsByTagName("script")[0];m.parentNode.insertBefore(l,m)}var n=function(a){var b=[];for(var c in a)a.hasOwnProperty(c)&&b.push(encodeURIComponent(c)+"="+encodeURIComponent(a[c]));return b.join("&")},x=function(a,b,c){var f=a.getAttribute("data-mareid");a.style.width=a.getAttribute("data-marewidth")||"auto",a.style.height="auto",a.style.display="block",a.style.opacity=1,a.style.lineHeight="1",a.style.position="relative",a.style.padding="0",a.style.margin="0",a.style.visibility="visible",a.style.top="auto",a.style.bottom="auto",a.style.left="auto",a.style.right="auto",a.style.border="none",a.style.background="transparent";var g=document.createElement("iframe");g.setAttribute("class",e+"survey-embed"),g.setAttribute("src",d+_mare_params.embedHost+".mare.io/embed/"+f),g.setAttribute("scrolling","no"),g.style.border="none",g.style.top="0px",g.style.left="0px",g.style.right="0px",g.style.bottom="0px",g.style.background="transparent",g.style.width="100%",g.style.margin="0",g.style.padding="0",g.style.verticalAlign="top",g.style.display="block",g.style.visibility="visible",g.style.opacity=1,g.style.lineHeight="1",g.style.position="relative",a.appendChild(g),g.onload=function(){b[c].embedid&&g.contentWindow.postMessage(b[c],d+_mare_params.embedHost+".mare.io")}},y=function(a){u("_mare_uvt",a.vt,31536e6),null==v("_mare_s")?u("_mare_s",a.responseId,12e5):u("_mare_s",v("_mare_s"),12e5);var c=document.querySelectorAll("."+e+"survey-iframe");if(c.length>0)for(i=0;i<c.length;i++)c[i].parentNode.removeChild(c[i]);var d=document.getElementById(e+"modal");d&&d.parentElement.removeChild(d);var f=document.createElement("div");f.setAttribute("id",e+"survey-container-"+a.id),f.style.overflowY="auto",f.style.webkitOverflowScrolling="touch";var g=document.createElement("iframe"),h=!1;g.setAttribute("id",e+"survey-"+a.id),g.setAttribute("class",e+"survey-iframe"),g.setAttribute("data-display",e+a.survey[0]["display-as"]),g.setAttribute("src","about:blank"),g.setAttribute("scrolling","yes"),g.style.border="none",g.style.top="0px",g.style.left="0px",g.style.right="0px",g.style.bottom="0px",g.style.background="transparent!important",g.style.height="100%",g.style.width="100%",g.style.margin="0",g.style.padding="0",g.style.verticalAlign="baseline",g.style.display="block",g.style.visibility="visible",g.style.opacity=1,g.style.lineHeight="1",g.style.position="absolute",f.style.border="none",f.style.top="auto",f.style.background="transparent!important",f.style.height="0px",f.style.maxHeight=b.windowHeight+"px",f.style.margin="0",f.style.padding="0",f.style.verticalAlign="baseline",f.style.display="block",f.style.visibility="visible",f.style.opacity=1,f.style.lineHeight="1",f.style.position=a.position.position,b.windowWidth<550?(f.style.width="100%",f.style.top=a.position.top,f.style.left=0,f.style.right=0):(f.style.width=a.dims.width,f.style.top=a.position.top,f.style.left="undefined"!=typeof _mare_override_position_left?_mare_override_position_left:a.position.left,f.style.right="undefined"!=typeof _mare_override_position_right?_mare_override_position_right:a.position.right),"exit"!=a.survey[0]["display-as"]&&"over"!=a.survey[0]["display-as"]||(f.style.width="700px",f.style.maxWidth="100%",f.style.top=b.windowHeight<737?"1%":"10%",f.style.left=b.windowWidth<550?"0":"50%",f.style.maxHeight=b.windowHeight<737?"98%":"80%",f.style.right="auto",f.style.margin=b.windowWidth<550?"0 auto":"0 0 0 -350px",h=document.createElement("div"),h.setAttribute("id",e+"modal"),h.style.display="none",h.style.position="fixed",h.style.top="0px",h.style.left="0px",h.style.right="0px",h.style.bottom="0px",h.style.backgroundColor="rgba(0,0,0,0.8)",h.style.zIndex="9999998",h.style.overflow="hidden",h.style.margin="0",h.style.padding="0",h.style.verticalAlign="baseline",h.style.width="100%",h.style.height="100%",h.style.border="none",h.style.lineHeight="1"),f.style.zIndex="9999999",f.style.overflow="auto",f.style.bottom="-99999px",b.container?(f.style.position="absolute",f.style.zIndex="999",h&&(h.style.position="absolute",h.style.zIndex="998"),f.appendChild(g),document.getElementById(b.container).appendChild(f),h&&document.getElementById(b.container).appendChild(h)):(f.appendChild(g),document.body.appendChild(f),h&&(document.body.appendChild(h),a.survey[0]["allow-close"]&&"yes"==a.survey[0]["allow-close"]&&(h.onclick=function(){h.style.display="none",h.style.bottom="-999999px",f.style.display="none"}))),g.contentWindow.document.open(),g.contentWindow.document.write(a.markup),g.contentWindow.document.close()};a.ajax_call=function(){var a=document.querySelectorAll("._mare_embed")||!1;if(f<9)var e=window.XDomainRequest;else var e=window.XMLHttpRequest;if(!e)return!1;var e=new e;f<9?(e.open("POST",d+_mare_params.mareHost+".mare.io/API/api"),e.onload=function(){var a=JSON.parse(e.responseText);b.responsedata=a,y(a)}):(e.open("POST",d+_mare_params.mareHost+".mare.io/API/api",!0),e.onreadystatechange=function(){if(4==e.readyState){var f=JSON.parse(e.responseText);if(a)for(i=0;i<a.length;i++)a[i].setAttribute("id","_mare_embed_"+i),c[i]={embedid:"_mare_embed_"+i,token:f.token,msgHost:d+document.location.host},x(a[i],c,i);if(_mare_params.params.token=f.token,_mare_params.params.vt=f.vt,f.loadJS)for(i=0;i<f.loadJS.length;i++)o(f.loadJS[i].file,f.loadJS[i].type);1==f.display&&document.querySelectorAll?(b.responsedata=f,y(f)):u("_mare_uvt",f.vt,31536e6)}},e.setRequestHeader("Content-type","application/x-www-form-urlencoded"),e.withCredentials=!0),b.call=1,b.vt=v("_mare_uvt"),b.topofpage=(window.pageYOffset||e.scrollTop)-(e.clientTop||0),b.topofpage=isNaN(b.topofpage)?0:b.topofpage,null!=v("_mare_s")&&(b.session_start=v("_mare_s")),"undefined"!=typeof _mare_v&&(b.cv=n(_mare_v)),_mare_params.params=b,e.send(n(b))}}(window._mare_object=window._mare_object||{}),"undefined"==typeof _mare_delay?_mare_object.ajax_call():_mare_object.ajax_call());