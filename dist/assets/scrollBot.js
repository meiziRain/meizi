Scrollbot = function (t, i) {
    this.orgPar = document.querySelector(t), (!this.isIE() || this.isIE() && this.isIE() > 9) && this.init(t, i)
}, Scrollbot.prototype.init = function (t, i) {
    var s = this;
    this.sbw = void 0 == i ? 5 : i, this.scrollSpeed = 200, this.parContent = this.orgPar.innerHTML, this.orgPar.innerHTML = "", this.newPar = document.createElement("div"), this.sbContainer = document.createElement("div"), this.scrollBarHolder = document.createElement("div"), this.scrollBar = document.createElement("div"), this.inP = document.createElement("div"), this.newPar.className = "scrollbot-outer-parent", this.scrollBarHolder.className = "scrollbot-scrollbar-holder", this.scrollBar.className = "scrollbot-scrollbar", this.inP.className = "scrollbot-inner-parent", this.newPar.style.position = "relative", this.newPar.style.paddingRight = this.sbw + "px", this.newPar.style.zIndex = "9999999", this.newPar.style.height = "100%", this.newPar.style.overflow = "hidden", this.inPWidth = this.orgPar.clientWidth - this.sbw + "px", this.inP.style.cssText = "height:100%;overflow-y:auto;overflow-x:hidden;padding-right:" + (this.sbw + 20) + "px;width:100%;box-sizing:content-box;", this.inP.innerHTML = this.parContent, this.inP.style.height = "100%", this.newPar.appendChild(this.inP), this.scrollBarHolder.appendChild(this.scrollBar), this.newPar.appendChild(this.scrollBarHolder), this.orgPar.appendChild(this.newPar), this.sbHeight = 100 * this.inP.clientHeight / this.inP.scrollHeight, this.mdown = !1, this.customHeight = !1, this.scrollElement = this.inP, this.prevHeight = this.inP.scrollHeight, this.onScroll = function (t) {
        s.onScrollF = t
    }, this.sB = {
        width: s.sbw + "px",
        height: s.sbHeight + "%",
        position: "absolute",
        right: 0,
        top: 0,
        backgroundColor: "#444444",
        borderRadius: "15px"
    }, this.sBH = {
        width: s.sbw + "px",
        height: "100%",
        position: "absolute",
        right: 0,
        top: 0,
        backgroundColor: "#ADADAD",
        borderRadius: "15px"
    };
    for (var e in this.sB) this.scrollBar.style[e] = this.sB[e];
    for (var e in this.sBH) this.scrollBarHolder.style[e] = this.sBH[e];
    this.inP.addEventListener("scroll", function () {
        s.scrollBar.style.top = 100 * s.inP.scrollTop / s.inP.scrollHeight + (s.sbHeight - parseFloat(s.sB.height)) * s.inP.scrollTop / (s.inP.scrollHeight - s.inP.clientHeight) + "%", "onScrollF" in s && s.onScrollF()
    }), this.scrollBarHolder.onmousedown = function (t) {
        if (t.target == this) {
            var i = 100 * (t.pageY - s.scrollBarHolder.getBoundingClientRect().top) / s.scrollBarHolder.clientHeight;
            console.log(i), s.setScroll(s.inP.scrollHeight * i / 100, s.scrollSpeed)
        }
    }, this.scrollBar.onmousedown = function (t) {
        return s.mdown = !0, s.posCorrection = t.pageY - s.scrollBar.getBoundingClientRect().top, s.btmCorrection = 100 * s.scrollBar.clientHeight / s.newPar.clientHeight, !1
    }, this.orgPar.onmouseup = function () {
        s.mdown = !1
    }, this.orgPar.onmousemove = function (t) {
        if (!s.mdown) return !1;
        document.selection ? document.selection.empty() : window.getSelection().removeAllRanges(), s.relY = t.pageY - s.newPar.getBoundingClientRect().top, s.pC = 100 * (s.relY - s.posCorrection) / s.newPar.clientHeight, s.pC >= 0 && s.pC + s.btmCorrection <= 100 ? (s.scrollBar.style.top = s.pC + "%", s.inP.scrollTop = (parseFloat(s.scrollBar.style.top) - (s.sbHeight - parseFloat(s.sB.height)) * s.inP.scrollTop / (s.inP.scrollHeight - s.inP.clientHeight)) * s.inP.scrollHeight / 100) : s.pC < 0 && parseFloat(s.scrollBar.style.top) > 0 && (s.scrollBar.style.top = "0%", s.inP.scrollTop = 0), "onScrollF" in s && s.onScrollF()
    }, setInterval(function () {
        s.inP.scrollHeight != s.prevHeight && s.refresh()
    }, 400)
}, Scrollbot.prototype.destroy = function () {
    this.orgPar.innerHTML = this.parContent, this.orgPar.style.overflow = "auto", this.init = null
}, Scrollbot.prototype.isIE = function () {
    var t = navigator.userAgent.toLowerCase();
    return -1 != t.indexOf("msie") && parseInt(t.split("msie")[1])
}, Scrollbot.prototype.setStyle = function (t, i) {
    if (void 0 != t) {
        t.width = this.sbw, "height" in t && (this.customHeight = !0, t.height = 100 * parseFloat(t.height) / this.newPar.clientHeight + "%");
        for (var s in t) this.sB[s] = t[s], this.scrollBar.style[s] = t[s]
    }
    if (void 0 != i) {
        i.width = this.sbw;
        for (var s in i) this.sBH[s] = i[s], this.scrollBarHolder.style[s] = i[s]
    }
    return this
}, Scrollbot.prototype.refresh = function () {
    this.sbHeight = 100 * this.inP.clientHeight / this.inP.scrollHeight, this.sbHeight >= 100 ? this.scrollBarHolder.style.display = "none" : this.scrollBarHolder.style.display = "block", this.sbHeight = 100 * this.inP.clientHeight / this.inP.scrollHeight, this.sB.height = this.customHeight ? this.sB.height : this.sbHeight + "%", this.inP.scrollHeight > this.inP.clientHeight && (this.scrollBar.style.height = this.sB.height)
}, Scrollbot.prototype.setScroll = function (t, i) {
    var s = this;
    (void 0 == i || i <= 0) && (i = 500), t >= this.inP.scrollHeight - this.inP.clientHeight && (t = this.inP.scrollHeight - this.inP.clientHeight);
    var e = (t - this.inP.scrollTop) / i * 10;
    setTimeout(function () {
        s.inP.scrollTop += e, Math.abs(t - s.inP.scrollTop) < 5 || s.setScroll(t, i - 10)
    }, 10)
};