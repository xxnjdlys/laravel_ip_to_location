(function () {
    "use strict";
    var root = this, WASHAREBTN = function () {
        this.buttons = [], this.isIos === !0 && this.cntLdd(window, this.crBtn)
    };
    WASHAREBTN.prototype.isIos = navigator.userAgent.match(/Android|iPhone/i) && !navigator.userAgent.match(/iPod|iPad/i) ? !0 : !1, WASHAREBTN.prototype.cntLdd = function (win, fn) {
        var done = !1, top = !0, doc = win.document, root = doc.documentElement, add = doc.addEventListener ? "addEventListener" : "attachEvent", rem = doc.addEventListener ? "removeEventListener" : "detachEvent", pre = doc.addEventListener ? "" : "on", init = function (e) {
            ("readystatechange" !== e.type || "complete" === doc.readyState) && (("load" === e.type ? win : doc)[rem](pre + e.type, init, !1), !done && (done = !0) && fn.call(win, e.type || e))
        }, poll = function () {
            try {
                root.doScroll("left")
            } catch (e) {
                return void setTimeout(poll, 50)
            }
            init("poll")
        };
        if ("complete" === doc.readyState)fn.call(win, "lazy"); else {
            if (doc.createEventObject && root.doScroll) {
                try {
                    top = !win.frameElement
                } catch (e) {
                }
                top && poll()
            }
            doc[add](pre + "DOMContentLoaded", init, !1), doc[add](pre + "readystatechange", init, !1), win[add](pre + "load", init, !1)
        }
    }, WASHAREBTN.prototype.addStyling = function () {
        var s = document.createElement("style"), c = "body,html{padding:0;margin:0;height:100%;width:100%}.wa_btn{height:0px;width:0px}"
        return s.type = "text/css", s.styleSheet ? s.styleSheet.cssText = c : s.appendChild(document.createTextNode(c)), s
    }, WASHAREBTN.prototype.setButtonAttributes = function (b) {
        b.setAttribute('data-href',"https://" + window.location.host + "/sharepage?uid="+$('#uid').val() + "&c_token=" + $('#ctoken').val());
        var url = b.getAttribute("data-href"), text = "?text=" + encodeURIComponent(b.getAttribute("data-text")) + (b.getAttribute("data-text") ? "%20" : "");
        return text += encodeURIComponent(url ? url : document.URL), b.setAttribute("target", "_top"), b.setAttribute("href", b.getAttribute("href") + text), b.setAttribute("onclick", "window.parent." + b.getAttribute("onclick")), b
    }, WASHAREBTN.prototype.setIframeAttributes = function (b) {
        var i = document.createElement("iframe");
        return i.width = 1, i.height = 1, i.button = b, i.style.border = 0, i.style.overflow = "hidden", i.border = 0,i.id="iframes", i.setAttribute("scrolling", "no"), i.addEventListener("load", root.WASHAREBTN.iFrameOnload()), i
    }, WASHAREBTN.prototype.iFrameOnload = function () {
        return function () {
            this.contentDocument.body.appendChild(this.button), this.contentDocument.getElementsByTagName("head")[0].appendChild(root.WASHAREBTN.addStyling());
            var meta = document.createElement("meta");
            meta.setAttribute("charset", "utf-8"), this.contentDocument.getElementsByTagName("head")[0].appendChild(meta), this.width = Math.ceil(this.contentDocument.getElementsByTagName("a")[0].getBoundingClientRect().width), this.height = Math.ceil(this.contentDocument.getElementsByTagName("a")[0].getBoundingClientRect().height)
        }
    }, WASHAREBTN.prototype.crBtn = function () {
        for (var b = [].slice.call(document.querySelectorAll(".wa_btn")), iframes = [], i = 0; i < b.length; i++)root.WASHAREBTN.buttons.push(b[i]), b[i] = root.WASHAREBTN.setButtonAttributes(b[i]), iframes[i] = root.WASHAREBTN.setIframeAttributes(b[i]), b[i].parentNode.insertBefore(iframes[i], b[i])
    }, root.WASHAREBTN = new WASHAREBTN
}).call(this);