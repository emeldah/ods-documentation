require=function(){return function n(e,t,i){function o(a,s){if(!t[a]){if(!e[a]){var l="function"==typeof require&&require;if(!s&&l)return l(a,!0);if(r)return r(a,!0);var c=new Error("Cannot find module '"+a+"'");throw c.code="MODULE_NOT_FOUND",c}var u=t[a]={exports:{}};e[a][0].call(u.exports,function(n){var t=e[a][1][n];return o(t||n)},u,u.exports,n,e,t,i)}return t[a].exports}for(var r="function"==typeof require&&require,a=0;a<i.length;a++)o(i[a]);return o}}()({"ods-theme":[function(n,e,t){var jQuery="undefined"!=typeof window?window.jQuery:n("jquery");function i(){$("[data-toggle='wy-nav-shift']").toggleClass("shift"),$("[data-toggle='rst-versions']").toggleClass("shift"),$("#nav-button").toggleClass("ods__documentation-header-btn-active")}function o(){$(".ods__documentation-help-hub-sidebar").toggleClass("ods__documentation-help-hub-sidebar-active"),$("#help-hub-button").toggleClass("ods__documentation-header-btn-active")}e.exports.ThemeNav={navBar:null,win:null,winScroll:!1,winResize:!1,linkScroll:!1,winPosition:0,winHeight:null,docHeight:null,isRunning:!1,enable:function(n){var e=this;e.isRunning||(e.isRunning=!0,jQuery(function(t){e.init(t),e.reset(),e.win.on("hashchange",e.reset),n&&e.win.on("scroll",function(){e.linkScroll||e.winScroll||(e.winScroll=!0,requestAnimationFrame(function(){e.onScroll()}))}),e.win.on("resize",function(){e.winResize||(e.winResize=!0,requestAnimationFrame(function(){e.onResize()}))}),e.onResize()}))},enableSticky:function(){this.enable(!0)},init:function(n){n(document);var e=this;this.navBar=n("div.wy-side-scroll:first"),this.win=n(window),n(document).on("click","[data-toggle='wy-nav-top']",function(){n(".ods__documentation-help-hub-sidebar").hasClass("ods__documentation-help-hub-sidebar-active")?(o(),i()):i()}).on("click",".wy-menu-vertical .current ul li a",function(){var t=n(this);i(),e.toggleCurrent(t),e.hashChange()}).on("click","[data-toggle='rst-current-version']",function(){n("[data-toggle='rst-versions']").toggleClass("shift-up")}),n("table.docutils:not(.field-list,.footnote,.citation)").wrap("<div class='wy-table-responsive'></div>"),n("table.docutils.footnote").wrap("<div class='wy-table-responsive footnote'></div>"),n("table.docutils.citation").wrap("<div class='wy-table-responsive citation'></div>"),n(".wy-menu-vertical ul").not(".simple").siblings("a").each(function(){var t=n(this);expand=n('<span class="toctree-expand"></span>'),expand.on("click",function(n){return e.toggleCurrent(t),n.stopPropagation(),!1}),t.prepend(expand)})},reset:function(){var n=encodeURI(window.location.hash)||"#";try{var e=$(".wy-menu-vertical").find('[href="'+n+'"]');if(0===e.length){var t=$('.document a[href="'+n+'"]').closest("div.section");e=$(".wy-menu-vertical").find('[href="#'+t.attr("id")+'"]')}e.length>0&&($(".wy-menu-vertical .current").removeClass("current"),e.parent().addClass("current current-active"),e.closest("li.toctree-l1").addClass("current current"),e.closest("li.toctree-l1").parent().addClass("current"),e.closest("li.toctree-l1").addClass("current"),e.closest("li.toctree-l2").addClass("current"),e.closest("li.toctree-l3").addClass("current"),e.closest("li.toctree-l4").addClass("current"))}catch(i){console.log("Error expanding nav for anchor",i)}},onScroll:function(){this.winScroll=!1;var n=this.win.scrollTop(),e=n+this.winHeight,t=this.navBar.scrollTop()+(n-this.winPosition);n<0||e>this.docHeight||(this.navBar.scrollTop(t+200),this.winPosition=n)},onResize:function(){this.winResize=!1,this.winHeight=this.win.height(),this.docHeight=$(document).height()},hashChange:function(){this.linkScroll=!0,this.win.one("hashchange",function(){this.linkScroll=!1})},toggleCurrent:function(n){var e=n.closest("li");e.parent().parent().removeClass("current-active"),e.siblings("li.current").removeClass("current current-active"),e.siblings().find("li.current").removeClass("current current-active"),e.find("> ul li.current").removeClass("current current-active"),e.toggleClass("current current-active")}},"undefined"!=typeof window&&(window.OdsTheme={Navigation:e.exports.ThemeNav}),$("#help-hub-button").click(function(){$("[data-toggle='wy-nav-shift']").hasClass("shift")?(i(),o()):o()}),$(".internal").on("click",function(n){var e=$(this)[0].attributes.href.nodeValue;if(-1===e.indexOf("#"))return null;n.preventDefault(),"#"==e?window.location.hash="":(hash_url=e.split("#"),window.location.hash="#"+hash_url[1],res_target=$("#"+e.split("#")[1]).offset().top,setTimeout(function(){$("html").animate({scrollTop:res_target-110},0)},0))}),function(){for(var n=0,e=["ms","moz","webkit","o"],t=0;t<e.length&&!window.requestAnimationFrame;++t)window.requestAnimationFrame=window[e[t]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e[t]+"CancelAnimationFrame"]||window[e[t]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,t){var i=(new Date).getTime(),o=Math.max(0,16-(i-n)),r=window.setTimeout(function(){e(i+o)},o);return n=i+o,r}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(n){clearTimeout(n)})}()},{jquery:"jquery"}]},{},["ods-theme"]);