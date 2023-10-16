import {
  defineComponent,
  h,
  onMounted,
  ref
} from "./chunk-FFSASCTW.js";
import "./chunk-UXIASGQL.js";

// node_modules/@duskmoon/vue3-typed-js/dist/vue3-typed-js.mjs
var L = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function D(m) {
  return m && m.__esModule && Object.prototype.hasOwnProperty.call(m, "default") ? m.default : m;
}
var T = {};
var M = {
  get exports() {
    return T;
  },
  set exports(m) {
    T = m;
  }
};
(function(m, w) {
  (function(l, h2) {
    m.exports = h2();
  })(L, function() {
    return (
      /******/
      function(d) {
        var l = {};
        function h2(p) {
          if (l[p])
            return l[p].exports;
          var r = l[p] = {
            /******/
            exports: {},
            /******/
            id: p,
            /******/
            loaded: false
            /******/
          };
          return d[p].call(r.exports, r, r.exports, h2), r.loaded = true, r.exports;
        }
        return h2.m = d, h2.c = l, h2.p = "", h2(0);
      }([
        /* 0 */
        /***/
        function(d, l, h2) {
          Object.defineProperty(l, "__esModule", {
            value: true
          });
          var p = function() {
            function o(s, e) {
              for (var i = 0; i < e.length; i++) {
                var n = e[i];
                n.enumerable = n.enumerable || false, n.configurable = true, "value" in n && (n.writable = true), Object.defineProperty(s, n.key, n);
              }
            }
            return function(s, e, i) {
              return e && o(s.prototype, e), i && o(s, i), s;
            };
          }();
          function r(o, s) {
            if (!(o instanceof s))
              throw new TypeError("Cannot call a class as a function");
          }
          var g = h2(1), c = h2(3), y = function() {
            function o(s, e) {
              r(this, o), g.initializer.load(this, e, s), this.begin();
            }
            return p(o, [{
              key: "toggle",
              value: function() {
                this.pause.status ? this.start() : this.stop();
              }
              /**
               * Stop typing / backspacing and enable cursor blinking
               * @public
               */
            }, {
              key: "stop",
              value: function() {
                this.typingComplete || this.pause.status || (this.toggleBlinking(true), this.pause.status = true, this.options.onStop(this.arrayPos, this));
              }
              /**
               * Start typing / backspacing after being stopped
               * @public
               */
            }, {
              key: "start",
              value: function() {
                this.typingComplete || this.pause.status && (this.pause.status = false, this.pause.typewrite ? this.typewrite(this.pause.curString, this.pause.curStrPos) : this.backspace(this.pause.curString, this.pause.curStrPos), this.options.onStart(this.arrayPos, this));
              }
              /**
               * Destroy this instance of Typed
               * @public
               */
            }, {
              key: "destroy",
              value: function() {
                this.reset(false), this.options.onDestroy(this);
              }
              /**
               * Reset Typed and optionally restarts
               * @param {boolean} restart
               * @public
               */
            }, {
              key: "reset",
              value: function() {
                var e = arguments.length <= 0 || arguments[0] === void 0 ? true : arguments[0];
                clearInterval(this.timeout), this.replaceText(""), this.cursor && this.cursor.parentNode && (this.cursor.parentNode.removeChild(this.cursor), this.cursor = null), this.strPos = 0, this.arrayPos = 0, this.curLoop = 0, e && (this.insertCursor(), this.options.onReset(this), this.begin());
              }
              /**
               * Begins the typing animation
               * @private
               */
            }, {
              key: "begin",
              value: function() {
                var e = this;
                this.options.onBegin(this), this.typingComplete = false, this.shuffleStringsIfNeeded(this), this.insertCursor(), this.bindInputFocusEvents && this.bindFocusEvents(), this.timeout = setTimeout(function() {
                  !e.currentElContent || e.currentElContent.length === 0 ? e.typewrite(e.strings[e.sequence[e.arrayPos]], e.strPos) : e.backspace(e.currentElContent, e.currentElContent.length);
                }, this.startDelay);
              }
              /**
               * Called for each character typed
               * @param {string} curString the current string in the strings array
               * @param {number} curStrPos the current position in the curString
               * @private
               */
            }, {
              key: "typewrite",
              value: function(e, i) {
                var n = this;
                this.fadeOut && this.el.classList.contains(this.fadeOutClass) && (this.el.classList.remove(this.fadeOutClass), this.cursor && this.cursor.classList.remove(this.fadeOutClass));
                var t = this.humanizer(this.typeSpeed), a = 1;
                if (this.pause.status === true) {
                  this.setPauseStatus(e, i, true);
                  return;
                }
                this.timeout = setTimeout(function() {
                  i = c.htmlParser.typeHtmlChars(e, i, n);
                  var u = 0, f = e.substr(i);
                  if (f.charAt(0) === "^" && /^\^\d+/.test(f)) {
                    var b = 1;
                    f = /\d+/.exec(f)[0], b += f.length, u = parseInt(f), n.temporaryPause = true, n.options.onTypingPaused(n.arrayPos, n), e = e.substring(0, i) + e.substring(i + b), n.toggleBlinking(true);
                  }
                  if (f.charAt(0) === "`") {
                    for (; e.substr(i + a).charAt(0) !== "`" && (a++, !(i + a > e.length)); )
                      ;
                    var v = e.substring(0, i), k = e.substring(v.length + 1, i + a), C = e.substring(i + a + 1);
                    e = v + k + C, a--;
                  }
                  n.timeout = setTimeout(function() {
                    n.toggleBlinking(false), i >= e.length ? n.doneTyping(e, i) : n.keepTyping(e, i, a), n.temporaryPause && (n.temporaryPause = false, n.options.onTypingResumed(n.arrayPos, n));
                  }, u);
                }, t);
              }
              /**
               * Continue to the next string & begin typing
               * @param {string} curString the current string in the strings array
               * @param {number} curStrPos the current position in the curString
               * @private
               */
            }, {
              key: "keepTyping",
              value: function(e, i, n) {
                i === 0 && (this.toggleBlinking(false), this.options.preStringTyped(this.arrayPos, this)), i += n;
                var t = e.substr(0, i);
                this.replaceText(t), this.typewrite(e, i);
              }
              /**
               * We're done typing the current string
               * @param {string} curString the current string in the strings array
               * @param {number} curStrPos the current position in the curString
               * @private
               */
            }, {
              key: "doneTyping",
              value: function(e, i) {
                var n = this;
                this.options.onStringTyped(this.arrayPos, this), this.toggleBlinking(true), !(this.arrayPos === this.strings.length - 1 && (this.complete(), this.loop === false || this.curLoop === this.loopCount)) && (this.timeout = setTimeout(function() {
                  n.backspace(e, i);
                }, this.backDelay));
              }
              /**
               * Backspaces 1 character at a time
               * @param {string} curString the current string in the strings array
               * @param {number} curStrPos the current position in the curString
               * @private
               */
            }, {
              key: "backspace",
              value: function(e, i) {
                var n = this;
                if (this.pause.status === true) {
                  this.setPauseStatus(e, i, false);
                  return;
                }
                if (this.fadeOut)
                  return this.initFadeOut();
                this.toggleBlinking(false);
                var t = this.humanizer(this.backSpeed);
                this.timeout = setTimeout(function() {
                  i = c.htmlParser.backSpaceHtmlChars(e, i, n);
                  var a = e.substr(0, i);
                  if (n.replaceText(a), n.smartBackspace) {
                    var u = n.strings[n.arrayPos + 1];
                    u && a === u.substr(0, i) ? n.stopNum = i : n.stopNum = 0;
                  }
                  i > n.stopNum ? (i--, n.backspace(e, i)) : i <= n.stopNum && (n.arrayPos++, n.arrayPos === n.strings.length ? (n.arrayPos = 0, n.options.onLastStringBackspaced(), n.shuffleStringsIfNeeded(), n.begin()) : n.typewrite(n.strings[n.sequence[n.arrayPos]], i));
                }, t);
              }
              /**
               * Full animation is complete
               * @private
               */
            }, {
              key: "complete",
              value: function() {
                this.options.onComplete(this), this.loop ? this.curLoop++ : this.typingComplete = true;
              }
              /**
               * Has the typing been stopped
               * @param {string} curString the current string in the strings array
               * @param {number} curStrPos the current position in the curString
               * @param {boolean} isTyping
               * @private
               */
            }, {
              key: "setPauseStatus",
              value: function(e, i, n) {
                this.pause.typewrite = n, this.pause.curString = e, this.pause.curStrPos = i;
              }
              /**
               * Toggle the blinking cursor
               * @param {boolean} isBlinking
               * @private
               */
            }, {
              key: "toggleBlinking",
              value: function(e) {
                this.cursor && (this.pause.status || this.cursorBlinking !== e && (this.cursorBlinking = e, e ? this.cursor.classList.add("typed-cursor--blink") : this.cursor.classList.remove("typed-cursor--blink")));
              }
              /**
               * Speed in MS to type
               * @param {number} speed
               * @private
               */
            }, {
              key: "humanizer",
              value: function(e) {
                return Math.round(Math.random() * e / 2) + e;
              }
              /**
               * Shuffle the sequence of the strings array
               * @private
               */
            }, {
              key: "shuffleStringsIfNeeded",
              value: function() {
                this.shuffle && (this.sequence = this.sequence.sort(function() {
                  return Math.random() - 0.5;
                }));
              }
              /**
               * Adds a CSS class to fade out current string
               * @private
               */
            }, {
              key: "initFadeOut",
              value: function() {
                var e = this;
                return this.el.className += " " + this.fadeOutClass, this.cursor && (this.cursor.className += " " + this.fadeOutClass), setTimeout(function() {
                  e.arrayPos++, e.replaceText(""), e.strings.length > e.arrayPos ? e.typewrite(e.strings[e.sequence[e.arrayPos]], 0) : (e.typewrite(e.strings[0], 0), e.arrayPos = 0);
                }, this.fadeOutDelay);
              }
              /**
               * Replaces current text in the HTML element
               * depending on element type
               * @param {string} str
               * @private
               */
            }, {
              key: "replaceText",
              value: function(e) {
                this.attr ? this.el.setAttribute(this.attr, e) : this.isInput ? this.el.value = e : this.contentType === "html" ? this.el.innerHTML = e : this.el.textContent = e;
              }
              /**
               * If using input elements, bind focus in order to
               * start and stop the animation
               * @private
               */
            }, {
              key: "bindFocusEvents",
              value: function() {
                var e = this;
                this.isInput && (this.el.addEventListener("focus", function(i) {
                  e.stop();
                }), this.el.addEventListener("blur", function(i) {
                  e.el.value && e.el.value.length !== 0 || e.start();
                }));
              }
              /**
               * On init, insert the cursor element
               * @private
               */
            }, {
              key: "insertCursor",
              value: function() {
                this.showCursor && (this.cursor || (this.cursor = document.createElement("span"), this.cursor.className = "typed-cursor", this.cursor.setAttribute("aria-hidden", true), this.cursor.innerHTML = this.cursorChar, this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling)));
              }
            }]), o;
          }();
          l.default = y, d.exports = l.default;
        },
        /* 1 */
        /***/
        function(d, l, h2) {
          Object.defineProperty(l, "__esModule", {
            value: true
          });
          var p = Object.assign || function(i) {
            for (var n = 1; n < arguments.length; n++) {
              var t = arguments[n];
              for (var a in t)
                Object.prototype.hasOwnProperty.call(t, a) && (i[a] = t[a]);
            }
            return i;
          }, r = function() {
            function i(n, t) {
              for (var a = 0; a < t.length; a++) {
                var u = t[a];
                u.enumerable = u.enumerable || false, u.configurable = true, "value" in u && (u.writable = true), Object.defineProperty(n, u.key, u);
              }
            }
            return function(n, t, a) {
              return t && i(n.prototype, t), a && i(n, a), n;
            };
          }();
          function g(i) {
            return i && i.__esModule ? i : { default: i };
          }
          function c(i, n) {
            if (!(i instanceof n))
              throw new TypeError("Cannot call a class as a function");
          }
          var y = h2(2), o = g(y), s = function() {
            function i() {
              c(this, i);
            }
            return r(i, [{
              key: "load",
              /**
               * Load up defaults & options on the Typed instance
               * @param {Typed} self instance of Typed
               * @param {object} options options object
               * @param {string} elementId HTML element ID _OR_ instance of HTML element
               * @private
               */
              value: function(t, a, u) {
                if (typeof u == "string" ? t.el = document.querySelector(u) : t.el = u, t.options = p({}, o.default, a), t.isInput = t.el.tagName.toLowerCase() === "input", t.attr = t.options.attr, t.bindInputFocusEvents = t.options.bindInputFocusEvents, t.showCursor = t.isInput ? false : t.options.showCursor, t.cursorChar = t.options.cursorChar, t.cursorBlinking = true, t.elContent = t.attr ? t.el.getAttribute(t.attr) : t.el.textContent, t.contentType = t.options.contentType, t.typeSpeed = t.options.typeSpeed, t.startDelay = t.options.startDelay, t.backSpeed = t.options.backSpeed, t.smartBackspace = t.options.smartBackspace, t.backDelay = t.options.backDelay, t.fadeOut = t.options.fadeOut, t.fadeOutClass = t.options.fadeOutClass, t.fadeOutDelay = t.options.fadeOutDelay, t.isPaused = false, t.strings = t.options.strings.map(function(C) {
                  return C.trim();
                }), typeof t.options.stringsElement == "string" ? t.stringsElement = document.querySelector(t.options.stringsElement) : t.stringsElement = t.options.stringsElement, t.stringsElement) {
                  t.strings = [], t.stringsElement.style.display = "none";
                  var f = Array.prototype.slice.apply(t.stringsElement.children), b = f.length;
                  if (b)
                    for (var v = 0; v < b; v += 1) {
                      var k = f[v];
                      t.strings.push(k.innerHTML.trim());
                    }
                }
                t.strPos = 0, t.arrayPos = 0, t.stopNum = 0, t.loop = t.options.loop, t.loopCount = t.options.loopCount, t.curLoop = 0, t.shuffle = t.options.shuffle, t.sequence = [], t.pause = {
                  status: false,
                  typewrite: true,
                  curString: "",
                  curStrPos: 0
                }, t.typingComplete = false;
                for (var v in t.strings)
                  t.sequence[v] = v;
                t.currentElContent = this.getCurrentElContent(t), t.autoInsertCss = t.options.autoInsertCss, this.appendAnimationCss(t);
              }
            }, {
              key: "getCurrentElContent",
              value: function(t) {
                var a = "";
                return t.attr ? a = t.el.getAttribute(t.attr) : t.isInput ? a = t.el.value : t.contentType === "html" ? a = t.el.innerHTML : a = t.el.textContent, a;
              }
            }, {
              key: "appendAnimationCss",
              value: function(t) {
                var a = "data-typed-js-css";
                if (t.autoInsertCss && !(!t.showCursor && !t.fadeOut) && !document.querySelector("[" + a + "]")) {
                  var u = document.createElement("style");
                  u.type = "text/css", u.setAttribute(a, true);
                  var f = "";
                  t.showCursor && (f += `
        .typed-cursor{
          opacity: 1;
        }
        .typed-cursor.typed-cursor--blink{
          animation: typedjsBlink 0.7s infinite;
          -webkit-animation: typedjsBlink 0.7s infinite;
                  animation: typedjsBlink 0.7s infinite;
        }
        @keyframes typedjsBlink{
          50% { opacity: 0.0; }
        }
        @-webkit-keyframes typedjsBlink{
          0% { opacity: 1; }
          50% { opacity: 0.0; }
          100% { opacity: 1; }
        }
      `), t.fadeOut && (f += `
        .typed-fade-out{
          opacity: 0;
          transition: opacity .25s;
        }
        .typed-cursor.typed-cursor--blink.typed-fade-out{
          -webkit-animation: 0;
          animation: 0;
        }
      `), u.length !== 0 && (u.innerHTML = f, document.body.appendChild(u));
                }
              }
            }]), i;
          }();
          l.default = s;
          var e = new s();
          l.initializer = e;
        },
        /* 2 */
        /***/
        function(d, l) {
          Object.defineProperty(l, "__esModule", {
            value: true
          });
          var h2 = {
            /**
             * @property {array} strings strings to be typed
             * @property {string} stringsElement ID of element containing string children
             */
            strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
            stringsElement: null,
            /**
             * @property {number} typeSpeed type speed in milliseconds
             */
            typeSpeed: 0,
            /**
             * @property {number} startDelay time before typing starts in milliseconds
             */
            startDelay: 0,
            /**
             * @property {number} backSpeed backspacing speed in milliseconds
             */
            backSpeed: 0,
            /**
             * @property {boolean} smartBackspace only backspace what doesn't match the previous string
             */
            smartBackspace: true,
            /**
             * @property {boolean} shuffle shuffle the strings
             */
            shuffle: false,
            /**
             * @property {number} backDelay time before backspacing in milliseconds
             */
            backDelay: 700,
            /**
             * @property {boolean} fadeOut Fade out instead of backspace
             * @property {string} fadeOutClass css class for fade animation
             * @property {boolean} fadeOutDelay Fade out delay in milliseconds
             */
            fadeOut: false,
            fadeOutClass: "typed-fade-out",
            fadeOutDelay: 500,
            /**
             * @property {boolean} loop loop strings
             * @property {number} loopCount amount of loops
             */
            loop: false,
            loopCount: 1 / 0,
            /**
             * @property {boolean} showCursor show cursor
             * @property {string} cursorChar character for cursor
             * @property {boolean} autoInsertCss insert CSS for cursor and fadeOut into HTML <head>
             */
            showCursor: true,
            cursorChar: "|",
            autoInsertCss: true,
            /**
             * @property {string} attr attribute for typing
             * Ex: input placeholder, value, or just HTML text
             */
            attr: null,
            /**
             * @property {boolean} bindInputFocusEvents bind to focus and blur if el is text input
             */
            bindInputFocusEvents: false,
            /**
             * @property {string} contentType 'html' or 'null' for plaintext
             */
            contentType: "html",
            /**
             * Before it begins typing
             * @param {Typed} self
             */
            onBegin: function(r) {
            },
            /**
             * All typing is complete
             * @param {Typed} self
             */
            onComplete: function(r) {
            },
            /**
             * Before each string is typed
             * @param {number} arrayPos
             * @param {Typed} self
             */
            preStringTyped: function(r, g) {
            },
            /**
             * After each string is typed
             * @param {number} arrayPos
             * @param {Typed} self
             */
            onStringTyped: function(r, g) {
            },
            /**
             * During looping, after last string is typed
             * @param {Typed} self
             */
            onLastStringBackspaced: function(r) {
            },
            /**
             * Typing has been stopped
             * @param {number} arrayPos
             * @param {Typed} self
             */
            onTypingPaused: function(r, g) {
            },
            /**
             * Typing has been started after being stopped
             * @param {number} arrayPos
             * @param {Typed} self
             */
            onTypingResumed: function(r, g) {
            },
            /**
             * After reset
             * @param {Typed} self
             */
            onReset: function(r) {
            },
            /**
             * After stop
             * @param {number} arrayPos
             * @param {Typed} self
             */
            onStop: function(r, g) {
            },
            /**
             * After start
             * @param {number} arrayPos
             * @param {Typed} self
             */
            onStart: function(r, g) {
            },
            /**
             * After destroy
             * @param {Typed} self
             */
            onDestroy: function(r) {
            }
          };
          l.default = h2, d.exports = l.default;
        },
        /* 3 */
        /***/
        function(d, l) {
          Object.defineProperty(l, "__esModule", {
            value: true
          });
          var h2 = function() {
            function c(y, o) {
              for (var s = 0; s < o.length; s++) {
                var e = o[s];
                e.enumerable = e.enumerable || false, e.configurable = true, "value" in e && (e.writable = true), Object.defineProperty(y, e.key, e);
              }
            }
            return function(y, o, s) {
              return o && c(y.prototype, o), s && c(y, s), y;
            };
          }();
          function p(c, y) {
            if (!(c instanceof y))
              throw new TypeError("Cannot call a class as a function");
          }
          var r = function() {
            function c() {
              p(this, c);
            }
            return h2(c, [{
              key: "typeHtmlChars",
              /**
               * Type HTML tags & HTML Characters
               * @param {string} curString Current string
               * @param {number} curStrPos Position in current string
               * @param {Typed} self instance of Typed
               * @returns {number} a new string position
               * @private
               */
              value: function(o, s, e) {
                if (e.contentType !== "html")
                  return s;
                var i = o.substr(s).charAt(0);
                if (i === "<" || i === "&") {
                  var n = "";
                  for (i === "<" ? n = ">" : n = ";"; o.substr(s + 1).charAt(0) !== n && (s++, !(s + 1 > o.length)); )
                    ;
                  s++;
                }
                return s;
              }
              /**
               * Backspace HTML tags and HTML Characters
               * @param {string} curString Current string
               * @param {number} curStrPos Position in current string
               * @param {Typed} self instance of Typed
               * @returns {number} a new string position
               * @private
               */
            }, {
              key: "backSpaceHtmlChars",
              value: function(o, s, e) {
                if (e.contentType !== "html")
                  return s;
                var i = o.substr(s).charAt(0);
                if (i === ">" || i === ";") {
                  var n = "";
                  for (i === ">" ? n = "<" : n = "&"; o.substr(s - 1).charAt(0) !== n && (s--, !(s < 0)); )
                    ;
                  s--;
                }
                return s;
              }
            }]), c;
          }();
          l.default = r;
          var g = new r();
          l.htmlParser = g;
        }
        /******/
      ])
    );
  });
})(M);
var P = D(T);
var A = defineComponent({
  name: "Typed",
  props: {
    options: {
      type: Object,
      required: true
    }
  },
  setup(m, w) {
    const d = ref();
    return onMounted(() => new P(
      d.value.querySelector(".typing"),
      m.options
    )), () => h(
      "div",
      {
        ref: d,
        class: "typed-element"
      },
      w.slots.default()
    );
  }
});
export {
  A as Typed
};
/*! Bundled license information:

@duskmoon/vue3-typed-js/dist/vue3-typed-js.mjs:
  (*!
   * 
   *   typed.js - A JavaScript Typing Animation Library
   *   Author: Matt Boldt <me@mattboldt.com>
   *   Version: v2.0.12
   *   Url: https://github.com/mattboldt/typed.js
   *   License(s): MIT
   * 
   *)
*/
//# sourceMappingURL=@duskmoon_vue3-typed-js.js.map
