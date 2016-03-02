(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

require('jquery.japan-map');

require('jquery.tubeplayer');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var YNewsCM = function () {
  _createClass(YNewsCM, [{
    key: 'areas',


    /* accessors */
    get: function get() {
      return this.constructor.AREAS;
    }
  }, {
    key: 'videos',
    get: function get() {
      return this.constructor.VIDEOS;
    }

    /* initialize */

  }], [{
    key: 'AREAS',

    /* class variables */
    get: function get() {
      return [{ code: 1, name: "北海道地方", color: "#7f7eda", hoverColor: "#b3b2ee", prefectures: [1] }, { code: 2, name: "東北地方", color: "#759ef4", hoverColor: "#98b9ff", prefectures: [2, 3, 4, 5, 6, 7] }, { code: 3, name: "関東地方", color: "#7ecfea", hoverColor: "#b7e5f4", prefectures: [8, 9, 10, 11, 12, 13, 14] }, { code: 4, name: "中部地方", color: "#7cdc92", hoverColor: "#aceebb", prefectures: [15, 16, 17, 18, 19, 20, 21, 22, 23] }, { code: 5, name: "近畿地方", color: "#ffe966", hoverColor: "#fff19c", prefectures: [24, 25, 26, 27, 28, 29, 30] }, { code: 6, name: "中国地方", color: "#ffcc66", hoverColor: "#ffe0a3", prefectures: [31, 32, 33, 34, 35] }, { code: 7, name: "四国地方", color: "#fb9466", hoverColor: "#ffbb9c", prefectures: [36, 37, 38, 39] }, { code: 2, name: "九州地方", color: "#ff9999", hoverColor: "#ffbdbd", prefectures: [40, 41, 42, 43, 44, 45, 46] }, { code: 9, name: "沖縄地方", color: "#eb98ff", hoverColor: "#f5c9ff", prefectures: [47] }];
    }
  }, {
    key: 'VIDEOS',
    get: function get() {
      return [{ "title": "「地元を忘れた僕」篇_Yahoo!ニュースアプリCM", "id": "utbJ5gCH0no" }, // 関東一都六県
      { "title": "【北海道篇】Yahoo!ニュースアプリCM", "id": "YIxgrxI0t-o" }, { "title": "【青森篇】Yahoo!ニュースアプリCM", "id": "-WurasGbPfE" }, { "title": "【岩手篇】Yahoo!ニュースアプリCM", "id": "apZA6DthyYY" }, { "title": "【宮城篇】Yahoo!ニュースアプリCM", "id": "c5DsFeEGyP0" }, { "title": "【秋田篇】Yahoo!ニュースアプリCM", "id": "wcgiEH-VL4g" }, { "title": "【山形篇】Yahoo!ニュースアプリCM", "id": "ZVqZCHf8AFk" }, { "title": "【福島篇】Yahoo!ニュースアプリCM", "id": "bEfbxTeb5Z0" },,,,,,,,
      /* 茨城 */ /* 栃木 */ /* 群馬 */ /* 埼玉 */
      /* 千葉 */ /* 東京 */ /* 神奈川 */
      { "title": "【新潟篇】Yahoo!ニュースアプリCM", "id": "kTiYhNYsyt0" }, { "title": "【富山篇】Yahoo!ニュースアプリCM", "id": "LMjRjFrgxqw" }, { "title": "【石川篇】Yahoo!ニュースアプリCM", "id": "S8rAvUljh-U" }, { "title": "【福井篇】Yahoo!ニュースアプリCM", "id": "AjApBmLNIRE" }, { "title": "【山梨篇】Yahoo!ニュースアプリCM", "id": "C64o4iohBEA" }, { "title": "【長野篇】Yahoo!ニュースアプリCM", "id": "EJWmMCXb2Bc" }, { "title": "【岐阜篇】Yahoo!ニュースアプリCM", "id": "HdE0PTeEf44" }, { "title": "【静岡篇】Yahoo!ニュースアプリCM", "id": "wCvRKMVimWA" }, { "title": "【愛知篇】Yahoo!ニュースアプリCM", "id": "y9BY-RAPOo8" }, { "title": "【三重篇】Yahoo!ニュースアプリCM", "id": "V1UZzl1QMHk" }, { "title": "【滋賀篇】Yahoo!ニュースアプリCM", "id": "pZZJ5JB_HvI" }, { "title": "【京都篇】Yahoo!ニュースアプリCM", "id": "DlGPD5E_zVI" }, { "title": "【大阪篇】Yahoo!ニュースアプリCM", "id": "w-oZcJ00sRw" }, { "title": "【兵庫篇】Yahoo!ニュースアプリCM", "id": "lBSjzAbFOGo" }, { "title": "【奈良篇】Yahoo!ニュースアプリCM", "id": "Qc-ntyaRLxg" }, { "title": "【和歌山篇】Yahoo!ニュースアプリCM", "id": "bwBpNxYkr4Y" }, { "title": "【鳥取篇】Yahoo!ニュースアプリCM", "id": "OWeyqXBy42Y" }, { "title": "【島根篇】Yahoo!ニュースアプリCM", "id": "nNCpdyP2UyA" }, { "title": "【岡山篇】Yahoo!ニュースアプリCM", "id": "ZGVhHORc8nw" }, { "title": "【広島篇】Yahoo!ニュースアプリCM", "id": "q4R613279l8" }, { "title": "【山口篇】Yahoo!ニュースアプリCM", "id": "ZP_11RwPULo" }, { "title": "【徳島篇】Yahoo!ニュースアプリCM", "id": "vdIqQ1gcUWQ" }, { "title": "【香川篇】Yahoo!ニュースアプリCM", "id": "DMzCA7hYvOA" }, { "title": "【愛媛篇】Yahoo!ニュースアプリCM", "id": "LtcJ9TtTxvM" }, { "title": "【高知篇】Yahoo!ニュースアプリCM", "id": "hpyI1_sBCYY" }, { "title": "【福岡篇】Yahoo!ニュースアプリCM", "id": "1b66cSoO-sU" }, { "title": "【佐賀篇】Yahoo!ニュースアプリCM", "id": "OGp3eXmR8Sg" }, { "title": "【長崎篇】Yahoo!ニュースアプリCM", "id": "AkuJfKarmy8" }, { "title": "【熊本篇】Yahoo!ニュースアプリCM", "id": "NlKn6qhilSE" }, { "title": "【大分篇】Yahoo!ニュースアプリCM", "id": "66giPpoolN4" }, { "title": "【宮崎篇】Yahoo!ニュースアプリCM", "id": "bwqLmz-7x3o" }, { "title": "【鹿児島篇】Yahoo!ニュースアプリCM", "id": "ya84gurSkRE" }, { "title": "【沖縄篇】Yahoo!ニュースアプリCM", "id": "THisa6ZVcqA" }];
    }
  }]);

  function YNewsCM() {
    _classCallCheck(this, YNewsCM);
  }

  /* prototype methods */


  _createClass(YNewsCM, [{
    key: 'init',
    value: function init() {
      return {
        areas: this.areas,
        selection: "prefecture",
        borderLineWidth: 0.25,
        drawsBoxLine: false,
        movesIslands: true,
        showsPrefectureName: true,
        prefectureNameType: "short",
        width: 800,
        font: "Noto Sans Japanese",
        fontSize: 12,
        fontColor: "areaColor",
        fontShadowColor: "black",
        protocol: window.location.protocol == "https:" ? "https" : "http",
        onSelect: this.select_handler.bind(this)
      };
    }
  }, {
    key: 'select_handler',
    value: function select_handler(data) {
      var index = data.area.code === 3 ? 0 : data.code;
      var video = this.videos[index];
      var player = (0, _jquery2.default)('#player');
      (0, _jquery2.default)('#title').text(video.title);
      player.tubeplayer("destroy");
      player.tubeplayer({
        initialVideo: video.id,
        width: 560,
        height: 315,
        color: "white",
        theme: "light",
        autoPlay: true,
        modestbranding: false
      });
    }
  }]);

  return YNewsCM;
}();

(0, _jquery2.default)(function ($) {
  var ynewscm = new YNewsCM();
  $('#map').japanMap(ynewscm.init());
});

},{"jquery":3,"jquery.japan-map":4,"jquery.tubeplayer":2}],2:[function(require,module,exports){
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

/*! jQuery TubePlayer - v1.1.7 - 2013-09-24
* https://github.com/nirvanatikku/jQuery-TubePlayer-Plugin
* Copyright (c) 2013 Nirvana Tikku; Licensed MIT */
!function (a) {
  "use strict";
  function b() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (a) {
      var b = 0 | 16 * Math.random(),
          c = "x" == a ? b : 8 | 3 & b;return c.toString(16);
    });
  }var c = ".tubeplayer",
      d = "jquery-youtube-tubeplayer",
      e = "opts" + c,
      f = { inited: !1, ytplayers: {}, inits: [], iframeScriptInited: !1, State: { UNSTARTED: -1, ENDED: 0, PLAYING: 1, PAUSED: 2, BUFFERING: 3, CUED: 5 }, Error: { BAD_INIT: 0, INVALID_PARAM: 2, NOT_FOUND: 100, NOT_EMBEDDABLE: 101, CANT_PLAY: 150 } };a.tubeplayer = { events: {}, TubePlayer: f }, a.tubeplayer.defaults = { afterReady: function afterReady() {}, stateChange: function stateChange(b) {
      var c = this.onPlayer;return function (d) {
        var e = a("#" + b).parent();switch ("object" == (typeof d === "undefined" ? "undefined" : _typeof(d)) && (d = d.data), d) {case f.State.UNSTARTED:
            return c.unstarted[b].call(e);case f.State.ENDED:
            return c.ended[b].call(e);case f.State.PLAYING:
            return c.playing[b].call(e);case f.State.PAUSED:
            return c.paused[b].call(e);case f.State.BUFFERING:
            return c.buffering[b].call(e);case f.State.CUED:
            return c.cued[b].call(e);default:
            return null;}
      };
    }, onError: function onError(b) {
      var c = this.onErr;return function (d) {
        var e = a("#" + b).parent();switch ("object" == (typeof d === "undefined" ? "undefined" : _typeof(d)) && (d = d.data), d) {case f.Error.BAD_INIT:case f.Error.INVALID_PARAM:
            return c.invalidParameter[b].call(e);case f.Error.NOT_FOUND:
            return c.notFound[b].call(e);case f.Error.NOT_EMBEDDABLE:case f.Error.CANT_PLAY:
            return c.notEmbeddable[b].call(e);default:
            return c.defaultError[b].call(e);}
      };
    }, qualityChange: function qualityChange(b) {
      var c = this;return function (d) {
        var e = a("#" + b).parent();return "object" == (typeof d === "undefined" ? "undefined" : _typeof(d)) && (d = d.data), c.onQualityChange[b].call(e, d);
      };
    }, onQualityChange: {}, onPlayer: { unstarted: {}, ended: {}, playing: {}, paused: {}, buffering: {}, cued: {} }, onErr: { defaultError: {}, notFound: {}, notEmbeddable: {}, invalidParameter: {} } };var g = { width: 425, height: 355, allowFullScreen: "true", initialVideo: "DkoeNLuMbcI", start: 0, preferredQuality: "auto", showControls: !0, showRelated: !1, playsinline: !1, annotations: !0, autoPlay: !1, autoHide: !0, loop: 0, theme: "dark", color: "red", showinfo: !1, modestbranding: !0, protocol: "http", wmode: "transparent", swfobjectURL: "ajax.googleapis.com/ajax/libs/swfobject/2.2/swfobject.js", loadSWFObject: !1, allowScriptAccess: "always", playerID: "tubeplayer-player-container", iframed: !0, onPlay: function onPlay() {}, onPause: function onPause() {}, onStop: function onStop() {}, onSeek: function onSeek() {}, onMute: function onMute() {}, onUnMute: function onUnMute() {}, onPlayerUnstarted: function onPlayerUnstarted() {}, onPlayerEnded: function onPlayerEnded() {}, onPlayerPlaying: function onPlayerPlaying() {}, onPlayerPaused: function onPlayerPaused() {}, onPlayerBuffering: function onPlayerBuffering() {}, onPlayerCued: function onPlayerCued() {}, onQualityChange: function onQualityChange() {}, onError: function onError() {}, onErrorNotFound: function onErrorNotFound() {}, onErrorNotEmbeddable: function onErrorNotEmbeddable() {}, onErrorInvalidParameter: function onErrorInvalidParameter() {} };a.fn.tubeplayer = function (b, d) {
    var e = a(this),
        g = typeof b === "undefined" ? "undefined" : _typeof(b);return 0 === arguments.length || "object" === g ? e.each(function () {
      f.init(a(this), b);
    }) : "string" === g ? e.triggerHandler(b + c, "undefined" != typeof d ? d : null) : void 0;
  };var h = function h(a) {
    return function (b, c) {
      var d = f.getPkg(b);if (d.ytplayer) {
        var e = a(b, c, d);return "undefined" == typeof e && (e = d.$player), e;
      }return d.$player;
    };
  };a.tubeplayer.getPlayers = function () {
    return f.ytplayers;
  }, f.init = function (h, j) {
    if (h.hasClass(d)) return h;var k = a.extend({}, g, j);k.playerID += "-" + b(), h.addClass(d).data(e, k);for (var l in i) {
      h.bind(l + c, h, i[l]);
    }return f.initDefaults(a.tubeplayer.defaults, k), a("<div></div>").attr("id", k.playerID).appendTo(h), f.initPlayer(h, k), h;
  }, f.getPkg = function (a) {
    var b = a.data,
        c = b.data(e),
        d = f.ytplayers[c.playerID];return { $player: b, opts: c, ytplayer: d };
  }, f.iframeReady = function (b) {
    return f.inits.push(function () {
      new YT.Player(b.playerID, { videoId: b.initialVideo, width: b.width, height: b.height, playerVars: { autoplay: b.autoPlay ? 1 : 0, autohide: b.autoHide ? 1 : 0, controls: b.showControls ? 1 : 0, loop: b.loop ? 1 : 0, playlist: b.loop ? b.initialVideo : "", rel: b.showRelated ? 1 : 0, fs: b.allowFullScreen ? 1 : 0, wmode: b.wmode, showinfo: b.showinfo ? 1 : 0, modestbranding: b.modestbranding ? 1 : 0, iv_load_policy: b.annotations ? 1 : 3, start: b.start, theme: b.theme, color: b.color, playsinline: b.playsinline }, events: { onReady: function onReady(c) {
            f.ytplayers[b.playerID] = c.target;var e = a(c.target.getIframe()).parents("." + d);a.tubeplayer.defaults.afterReady(e);
          }, onPlaybackQualityChange: a.tubeplayer.defaults.qualityChange(b.playerID), onStateChange: a.tubeplayer.defaults.stateChange(b.playerID), onError: a.tubeplayer.defaults.onError(b.playerID) } });
    }), f.inits.length >= 1 && !f.inited ? function () {
      for (var a = 0; a < f.inits.length; a++) {
        f.inits[a]();
      }f.inited = !0;
    } : (f.inited && f.inits.pop()(), window.onYouTubePlayerAPIReady);
  }, f.initDefaults = function (a, b) {
    var c = b.playerID,
        d = a.onPlayer;d.unstarted[c] = b.onPlayerUnstarted, d.ended[c] = b.onPlayerEnded, d.playing[c] = b.onPlayerPlaying, d.paused[c] = b.onPlayerPaused, d.buffering[c] = b.onPlayerBuffering, d.cued[c] = b.onPlayerCued, a.onQualityChange[c] = b.onQualityChange;var e = a.onErr;e.defaultError[c] = b.onError, e.notFound[c] = b.onErrorNotFound, e.notEmbeddable[c] = b.onErrorNotEmbeddable, e.invalidParameter[c] = b.onErrorInvalidParameter;
  }, f.initPlayer = function (a, b) {
    b.iframed ? f.initIframePlayer(a, b) : f.initFlashPlayer(a, b);
  }, f.initIframePlayer = function (a, b) {
    if (!f.iframeScriptInited) {
      var c = document.createElement("script");c.src = b.protocol + "://www.youtube.com/iframe_api";var d = document.getElementsByTagName("script")[0];d.parentNode.insertBefore(c, d), f.iframeScriptInited = !0;
    }window.onYouTubePlayerAPIReady = f.iframeReady(b);
  }, f.initFlashPlayer = function (b, c) {
    c.loadSWFObject ? (c.swfobjectURL = c.swfobjectURL.replace("http://", ""), c.swfobjectURL = c.swfobjectURL.replace("https://", ""), c.swfobjectURL = c.protocol + "://" + c.swfobjectURL, a.getScript(c.swfobjectURL, f.init_flash_player(c))) : f.init_flash_player(c)();
  }, f.init_flash_player = function (b) {
    return function () {
      if (!window.swfobject) return alert("YouTube Player couldn't be initialized. Please include swfobject."), void 0;var c = ["//www.youtube.com/v/"];c.push(b.initialVideo), c.push("?&enablejsapi=1&version=3"), c.push("&playerapiid=" + b.playerID), c.push("&rel=" + (b.showRelated ? 1 : 0)), c.push("&autoplay=" + (b.autoPlay ? 1 : 0)), c.push("&autohide=" + (b.autoHide ? 1 : 0)), c.push("&loop=" + (b.loop ? 1 : 0)), c.push("&playlist=" + (b.loop ? b.initialVideo : "")), c.push("&controls=" + (b.showControls ? 1 : 0)), c.push("&showinfo=" + (b.showinfo ? 1 : 0)), c.push("&modestbranding=" + (b.modestbranding ? 1 : 0)), c.push("&iv_load_policy=" + (b.annotations ? 1 : 3)), c.push("&start=" + b.start), c.push("&theme=" + b.theme), c.push("&color=" + b.color), c.push("&playsinline=" + b.playsinline), c.push("&fs=" + (b.allowFullScreen ? 1 : 0)), window.swfobject.embedSWF(c.join(""), b.playerID, b.width, b.height, "8", null, null, { allowScriptAccess: b.allowScriptAccess, wmode: b.wmode, allowFullScreen: b.allowFullScreen }, { id: b.playerID }), window.onYouTubePlayerReady = function (b) {
        var c = document.getElementById(b),
            e = b.replace(/-/g, ""),
            g = a.tubeplayer.defaults;a.tubeplayer.events[e] = { stateChange: g.stateChange(b), error: g.onError(b), qualityChange: g.qualityChange(b) }, c.addEventListener("onStateChange", "$.tubeplayer.events." + e + ".stateChange"), c.addEventListener("onError", "$.tubeplayer.events." + e + ".error"), c.addEventListener("onPlaybackQualityChange", "$.tubeplayer.events." + e + ".qualityChange"), f.ytplayers[b] = c;var h = a(c).parents("." + d);a.tubeplayer.defaults.afterReady(h);
      };
    };
  }, f.getVideoIDFromURL = function (a) {
    a = a || "";var b = a.indexOf("?"),
        c = a.substring(b, a.length),
        d = c.indexOf("v=");if (d > -1) {
      var e = c.indexOf("&", d);return -1 === e && (e = c.length), c.substring(d + "v=".length, e);
    }return "";
  };var i = { opts: h(function (a, b, c) {
      return c.opts;
    }), cue: h(function (a, b, c) {
      c.ytplayer.cueVideoById(b, 0, c.opts.preferredQuality);
    }), play: h(function (a, b, c) {
      "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) ? c.ytplayer.loadVideoById({ videoId: b.id, startSeconds: b.time, suggestedQuality: c.opts.preferredQuality }) : "undefined" != typeof b ? c.ytplayer.loadVideoById({ videoId: b, startSeconds: 0, suggestedQuality: c.opts.preferredQuality }) : c.ytplayer.playVideo(), c.opts.onPlay(b);
    }), pause: h(function (a, b, c) {
      c.ytplayer.pauseVideo(), c.opts.onPause(c);
    }), stop: h(function (a, b, c) {
      c.ytplayer.stopVideo(), c.opts.onStop(c);
    }), seek: h(function (a, b, c) {
      if (/:/.test(b)) {
        var d = b.split(":").reverse();b = 0;for (var e = 0; e < d.length; e++) {
          b += Math.pow(60, e) * (0 | d[e]);
        }
      }c.ytplayer.seekTo(b, !0), c.opts.onSeek(b);
    }), mute: h(function (a, b, c) {
      c.$player.attr("data-prev-mute-volume", c.ytplayer.getVolume()), c.ytplayer.mute(), c.opts.onMute(c);
    }), unmute: h(function (a, b, c) {
      c.ytplayer.unMute(), c.ytplayer.setVolume(c.$player.attr("data-prev-mute-volume") || 50), c.opts.onUnMute();
    }), isMuted: h(function (a, b, c) {
      return c.ytplayer.isMuted();
    }), volume: h(function (a, b, c) {
      return "undefined" == typeof b ? c.ytplayer.getVolume() || 0 : (c.ytplayer.setVolume(b), c.$player.attr("data-prev-mute-volume", c.ytplayer.getVolume()), void 0);
    }), quality: h(function (a, b, c) {
      return "undefined" == typeof b ? c.ytplayer.getPlaybackQuality() : (c.ytplayer.setPlaybackQuality(b), void 0);
    }), playbackRate: h(function (a, b, c) {
      return "undefined" == typeof b ? c.ytplayer.getPlaybackRate() : (c.ytplayer.setPlaybackRate(b), void 0);
    }), data: h(function (a, b, c) {
      var d = {},
          e = c.ytplayer;return d.videoLoadedFraction = e.getVideoLoadedFraction(), d.bytesLoaded = e.getVideoBytesLoaded(), d.bytesTotal = e.getVideoBytesTotal(), d.startBytes = e.getVideoStartBytes(), d.state = e.getPlayerState(), d.currentTime = e.getCurrentTime(), d.duration = e.getDuration(), d.videoURL = e.getVideoUrl(), d.videoEmbedCode = e.getVideoEmbedCode(), d.videoID = f.getVideoIDFromURL(d.videoURL), d.availableQualityLevels = e.getAvailableQualityLevels(), d.availablePlaybackRates = e.getAvailablePlaybackRates(), d;
    }), videoId: h(function (a, b, c) {
      return f.getVideoIDFromURL(c.ytplayer.getVideoUrl());
    }), size: h(function (b, c, d) {
      "undefined" != typeof c && c.width && c.height && (d.ytplayer.setSize(c.width, c.height), a(d.ytplayer).css(c));
    }), destroy: h(function (b, g, h) {
      h.$player.removeClass(d).data(e, null).unbind(c).html(""), delete f.ytplayers[h.opts.playerID];var i = a.tubeplayer.defaults,
          j = ["unstarted", "ended", "playing", "paused", "buffering", "cued"];return a.each(j, function (a, b) {
        delete i.onPlayer[b][h.opts.playerID];
      }), j = ["defaultError", "notFound", "notEmbeddable", "invalidParameter"], a.each(j, function (a, b) {
        delete i.onErr[b][h.opts.playerID];
      }), delete i.onQualityChange[h.opts.playerID], delete a.tubeplayer.events[h.opts.playerID], "destroy" in h.ytplayer && h.ytplayer.destroy(), a(h.ytplayer).remove(), null;
    }), player: h(function (a, b, c) {
      return c.ytplayer;
    }) };
}(jQuery);

},{}],3:[function(require,module,exports){
(function (global){
; var __browserify_shim_require__=require;(function browserifyShim(module, exports, require, define, browserify_shim__define__module__export__) {
"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

/*! jQuery v2.2.1 | (c) jQuery Foundation | jquery.org/license */
!function (a, b) {
  "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = a.document ? b(a, !0) : function (a) {
    if (!a.document) throw new Error("jQuery requires a window with a document");return b(a);
  } : b(a);
}("undefined" != typeof window ? window : undefined, function (a, b) {
  var c = [],
      d = a.document,
      e = c.slice,
      f = c.concat,
      g = c.push,
      h = c.indexOf,
      i = {},
      j = i.toString,
      k = i.hasOwnProperty,
      l = {},
      m = "2.2.1",
      n = function n(a, b) {
    return new n.fn.init(a, b);
  },
      o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      p = /^-ms-/,
      q = /-([\da-z])/gi,
      r = function r(a, b) {
    return b.toUpperCase();
  };n.fn = n.prototype = { jquery: m, constructor: n, selector: "", length: 0, toArray: function toArray() {
      return e.call(this);
    }, get: function get(a) {
      return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this);
    }, pushStack: function pushStack(a) {
      var b = n.merge(this.constructor(), a);return b.prevObject = this, b.context = this.context, b;
    }, each: function each(a) {
      return n.each(this, a);
    }, map: function map(a) {
      return this.pushStack(n.map(this, function (b, c) {
        return a.call(b, c, b);
      }));
    }, slice: function slice() {
      return this.pushStack(e.apply(this, arguments));
    }, first: function first() {
      return this.eq(0);
    }, last: function last() {
      return this.eq(-1);
    }, eq: function eq(a) {
      var b = this.length,
          c = +a + (0 > a ? b : 0);return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
    }, end: function end() {
      return this.prevObject || this.constructor();
    }, push: g, sort: c.sort, splice: c.splice }, n.extend = n.fn.extend = function () {
    var a,
        b,
        c,
        d,
        e,
        f,
        g = arguments[0] || {},
        h = 1,
        i = arguments.length,
        j = !1;for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == (typeof g === "undefined" ? "undefined" : _typeof(g)) || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++) {
      if (null != (a = arguments[h])) for (b in a) {
        c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
      }
    }return g;
  }, n.extend({ expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(a) {
      throw new Error(a);
    }, noop: function noop() {}, isFunction: function isFunction(a) {
      return "function" === n.type(a);
    }, isArray: Array.isArray, isWindow: function isWindow(a) {
      return null != a && a === a.window;
    }, isNumeric: function isNumeric(a) {
      var b = a && a.toString();return !n.isArray(a) && b - parseFloat(b) + 1 >= 0;
    }, isPlainObject: function isPlainObject(a) {
      return "object" !== n.type(a) || a.nodeType || n.isWindow(a) ? !1 : a.constructor && !k.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0;
    }, isEmptyObject: function isEmptyObject(a) {
      var b;for (b in a) {
        return !1;
      }return !0;
    }, type: function type(a) {
      return null == a ? a + "" : "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) || "function" == typeof a ? i[j.call(a)] || "object" : typeof a === "undefined" ? "undefined" : _typeof(a);
    }, globalEval: function globalEval(a) {
      var b,
          c = eval;a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = d.createElement("script"), b.text = a, d.head.appendChild(b).parentNode.removeChild(b)) : c(a));
    }, camelCase: function camelCase(a) {
      return a.replace(p, "ms-").replace(q, r);
    }, nodeName: function nodeName(a, b) {
      return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
    }, each: function each(a, b) {
      var c,
          d = 0;if (s(a)) {
        for (c = a.length; c > d; d++) {
          if (b.call(a[d], d, a[d]) === !1) break;
        }
      } else for (d in a) {
        if (b.call(a[d], d, a[d]) === !1) break;
      }return a;
    }, trim: function trim(a) {
      return null == a ? "" : (a + "").replace(o, "");
    }, makeArray: function makeArray(a, b) {
      var c = b || [];return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)), c;
    }, inArray: function inArray(a, b, c) {
      return null == b ? -1 : h.call(b, a, c);
    }, merge: function merge(a, b) {
      for (var c = +b.length, d = 0, e = a.length; c > d; d++) {
        a[e++] = b[d];
      }return a.length = e, a;
    }, grep: function grep(a, b, c) {
      for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) {
        d = !b(a[f], f), d !== h && e.push(a[f]);
      }return e;
    }, map: function map(a, b, c) {
      var d,
          e,
          g = 0,
          h = [];if (s(a)) for (d = a.length; d > g; g++) {
        e = b(a[g], g, c), null != e && h.push(e);
      } else for (g in a) {
        e = b(a[g], g, c), null != e && h.push(e);
      }return f.apply([], h);
    }, guid: 1, proxy: function proxy(a, b) {
      var c, d, f;return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (d = e.call(arguments, 2), f = function f() {
        return a.apply(b || this, d.concat(e.call(arguments)));
      }, f.guid = a.guid = a.guid || n.guid++, f) : void 0;
    }, now: Date.now, support: l }), "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]), n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) {
    i["[object " + b + "]"] = b.toLowerCase();
  });function s(a) {
    var b = !!a && "length" in a && a.length,
        c = n.type(a);return "function" === c || n.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a;
  }var t = function (a) {
    var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s,
        t,
        u = "sizzle" + 1 * new Date(),
        v = a.document,
        w = 0,
        x = 0,
        y = ga(),
        z = ga(),
        A = ga(),
        B = function B(a, b) {
      return a === b && (l = !0), 0;
    },
        C = 1 << 31,
        D = {}.hasOwnProperty,
        E = [],
        F = E.pop,
        G = E.push,
        H = E.push,
        I = E.slice,
        J = function J(a, b) {
      for (var c = 0, d = a.length; d > c; c++) {
        if (a[c] === b) return c;
      }return -1;
    },
        K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        L = "[\\x20\\t\\r\\n\\f]",
        M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]",
        O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)",
        P = new RegExp(L + "+", "g"),
        Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
        R = new RegExp("^" + L + "*," + L + "*"),
        S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
        T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
        U = new RegExp(O),
        V = new RegExp("^" + M + "$"),
        W = { ID: new RegExp("^#(" + M + ")"), CLASS: new RegExp("^\\.(" + M + ")"), TAG: new RegExp("^(" + M + "|[*])"), ATTR: new RegExp("^" + N), PSEUDO: new RegExp("^" + O), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"), bool: new RegExp("^(?:" + K + ")$", "i"), needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i") },
        X = /^(?:input|select|textarea|button)$/i,
        Y = /^h\d$/i,
        Z = /^[^{]+\{\s*\[native \w/,
        $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        _ = /[+~]/,
        aa = /'|\\/g,
        ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
        ca = function ca(a, b, c) {
      var d = "0x" + b - 65536;return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
    },
        da = function da() {
      m();
    };try {
      H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType;
    } catch (ea) {
      H = { apply: E.length ? function (a, b) {
          G.apply(a, I.call(b));
        } : function (a, b) {
          var c = a.length,
              d = 0;while (a[c++] = b[d++]) {}a.length = c - 1;
        } };
    }function fa(a, b, d, e) {
      var f,
          h,
          j,
          k,
          l,
          o,
          r,
          s,
          w = b && b.ownerDocument,
          x = b ? b.nodeType : 9;if (d = d || [], "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x) return d;if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
        if (11 !== x && (o = $.exec(a))) if (f = o[1]) {
          if (9 === x) {
            if (!(j = b.getElementById(f))) return d;if (j.id === f) return d.push(j), d;
          } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d;
        } else {
          if (o[2]) return H.apply(d, b.getElementsByTagName(a)), d;if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName) return H.apply(d, b.getElementsByClassName(f)), d;
        }if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
          if (1 !== x) w = b, s = a;else if ("object" !== b.nodeName.toLowerCase()) {
            (k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&") : b.setAttribute("id", k = u), r = g(a), h = r.length, l = V.test(k) ? "#" + k : "[id='" + k + "']";while (h--) {
              r[h] = l + " " + qa(r[h]);
            }s = r.join(","), w = _.test(a) && oa(b.parentNode) || b;
          }if (s) try {
            return H.apply(d, w.querySelectorAll(s)), d;
          } catch (y) {} finally {
            k === u && b.removeAttribute("id");
          }
        }
      }return i(a.replace(Q, "$1"), b, d, e);
    }function ga() {
      var a = [];function b(c, e) {
        return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e;
      }return b;
    }function ha(a) {
      return a[u] = !0, a;
    }function ia(a) {
      var b = n.createElement("div");try {
        return !!a(b);
      } catch (c) {
        return !1;
      } finally {
        b.parentNode && b.parentNode.removeChild(b), b = null;
      }
    }function ja(a, b) {
      var c = a.split("|"),
          e = c.length;while (e--) {
        d.attrHandle[c[e]] = b;
      }
    }function ka(a, b) {
      var c = b && a,
          d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);if (d) return d;if (c) while (c = c.nextSibling) {
        if (c === b) return -1;
      }return a ? 1 : -1;
    }function la(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();return "input" === c && b.type === a;
      };
    }function ma(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();return ("input" === c || "button" === c) && b.type === a;
      };
    }function na(a) {
      return ha(function (b) {
        return b = +b, ha(function (c, d) {
          var e,
              f = a([], c.length, b),
              g = f.length;while (g--) {
            c[e = f[g]] && (c[e] = !(d[e] = c[e]));
          }
        });
      });
    }function oa(a) {
      return a && "undefined" != typeof a.getElementsByTagName && a;
    }c = fa.support = {}, f = fa.isXML = function (a) {
      var b = a && (a.ownerDocument || a).documentElement;return b ? "HTML" !== b.nodeName : !1;
    }, m = fa.setDocument = function (a) {
      var b,
          e,
          g = a ? a.ownerDocument || a : v;return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ia(function (a) {
        return a.className = "i", !a.getAttribute("className");
      }), c.getElementsByTagName = ia(function (a) {
        return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length;
      }), c.getElementsByClassName = Z.test(n.getElementsByClassName), c.getById = ia(function (a) {
        return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length;
      }), c.getById ? (d.find.ID = function (a, b) {
        if ("undefined" != typeof b.getElementById && p) {
          var c = b.getElementById(a);return c ? [c] : [];
        }
      }, d.filter.ID = function (a) {
        var b = a.replace(ba, ca);return function (a) {
          return a.getAttribute("id") === b;
        };
      }) : (delete d.find.ID, d.filter.ID = function (a) {
        var b = a.replace(ba, ca);return function (a) {
          var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");return c && c.value === b;
        };
      }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
        return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;
      } : function (a, b) {
        var c,
            d = [],
            e = 0,
            f = b.getElementsByTagName(a);if ("*" === a) {
          while (c = f[e++]) {
            1 === c.nodeType && d.push(c);
          }return d;
        }return f;
      }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
        return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0;
      }, r = [], q = [], (c.qsa = Z.test(n.querySelectorAll)) && (ia(function (a) {
        o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]");
      }), ia(function (a) {
        var b = n.createElement("input");b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:");
      })), (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ia(function (a) {
        c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", O);
      }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Z.test(o.compareDocumentPosition), t = b || Z.test(o.contains) ? function (a, b) {
        var c = 9 === a.nodeType ? a.documentElement : a,
            d = b && b.parentNode;return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
      } : function (a, b) {
        if (b) while (b = b.parentNode) {
          if (b === a) return !0;
        }return !1;
      }, B = b ? function (a, b) {
        if (a === b) return l = !0, 0;var d = !a.compareDocumentPosition - !b.compareDocumentPosition;return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1);
      } : function (a, b) {
        if (a === b) return l = !0, 0;var c,
            d = 0,
            e = a.parentNode,
            f = b.parentNode,
            g = [a],
            h = [b];if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;if (e === f) return ka(a, b);c = a;while (c = c.parentNode) {
          g.unshift(c);
        }c = b;while (c = c.parentNode) {
          h.unshift(c);
        }while (g[d] === h[d]) {
          d++;
        }return d ? ka(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0;
      }, n) : n;
    }, fa.matches = function (a, b) {
      return fa(a, null, null, b);
    }, fa.matchesSelector = function (a, b) {
      if ((a.ownerDocument || a) !== n && m(a), b = b.replace(T, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
        var d = s.call(a, b);if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
      } catch (e) {}return fa(b, n, null, [a]).length > 0;
    }, fa.contains = function (a, b) {
      return (a.ownerDocument || a) !== n && m(a), t(a, b);
    }, fa.attr = function (a, b) {
      (a.ownerDocument || a) !== n && m(a);var e = d.attrHandle[b.toLowerCase()],
          f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
    }, fa.error = function (a) {
      throw new Error("Syntax error, unrecognized expression: " + a);
    }, fa.uniqueSort = function (a) {
      var b,
          d = [],
          e = 0,
          f = 0;if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
        while (b = a[f++]) {
          b === a[f] && (e = d.push(f));
        }while (e--) {
          a.splice(d[e], 1);
        }
      }return k = null, a;
    }, e = fa.getText = function (a) {
      var b,
          c = "",
          d = 0,
          f = a.nodeType;if (f) {
        if (1 === f || 9 === f || 11 === f) {
          if ("string" == typeof a.textContent) return a.textContent;for (a = a.firstChild; a; a = a.nextSibling) {
            c += e(a);
          }
        } else if (3 === f || 4 === f) return a.nodeValue;
      } else while (b = a[d++]) {
        c += e(b);
      }return c;
    }, d = fa.selectors = { cacheLength: 50, createPseudo: ha, match: W, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(a) {
          return a[1] = a[1].replace(ba, ca), a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
        }, CHILD: function CHILD(a) {
          return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fa.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fa.error(a[0]), a;
        }, PSEUDO: function PSEUDO(a) {
          var b,
              c = !a[6] && a[2];return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3));
        } }, filter: { TAG: function TAG(a) {
          var b = a.replace(ba, ca).toLowerCase();return "*" === a ? function () {
            return !0;
          } : function (a) {
            return a.nodeName && a.nodeName.toLowerCase() === b;
          };
        }, CLASS: function CLASS(a) {
          var b = y[a + " "];return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function (a) {
            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
          });
        }, ATTR: function ATTR(a, b, c) {
          return function (d) {
            var e = fa.attr(d, a);return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0;
          };
        }, CHILD: function CHILD(a, b, c, d, e) {
          var f = "nth" !== a.slice(0, 3),
              g = "last" !== a.slice(-4),
              h = "of-type" === b;return 1 === d && 0 === e ? function (a) {
            return !!a.parentNode;
          } : function (b, c, i) {
            var j,
                k,
                l,
                m,
                n,
                o,
                p = f !== g ? "nextSibling" : "previousSibling",
                q = b.parentNode,
                r = h && b.nodeName.toLowerCase(),
                s = !i && !h,
                t = !1;if (q) {
              if (f) {
                while (p) {
                  m = b;while (m = m[p]) {
                    if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                  }o = p = "only" === a && !o && "nextSibling";
                }return !0;
              }if (o = [g ? q.firstChild : q.lastChild], g && s) {
                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
                  if (1 === m.nodeType && ++t && m === b) {
                    k[a] = [w, n, t];break;
                  }
                }
              } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1) while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
                if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
              }return t -= e, t === d || t % d === 0 && t / d >= 0;
            }
          };
        }, PSEUDO: function PSEUDO(a, b) {
          var c,
              e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fa.error("unsupported pseudo: " + a);return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ha(function (a, c) {
            var d,
                f = e(a, b),
                g = f.length;while (g--) {
              d = J(a, f[g]), a[d] = !(c[d] = f[g]);
            }
          }) : function (a) {
            return e(a, 0, c);
          }) : e;
        } }, pseudos: { not: ha(function (a) {
          var b = [],
              c = [],
              d = h(a.replace(Q, "$1"));return d[u] ? ha(function (a, b, c, e) {
            var f,
                g = d(a, null, e, []),
                h = a.length;while (h--) {
              (f = g[h]) && (a[h] = !(b[h] = f));
            }
          }) : function (a, e, f) {
            return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop();
          };
        }), has: ha(function (a) {
          return function (b) {
            return fa(a, b).length > 0;
          };
        }), contains: ha(function (a) {
          return a = a.replace(ba, ca), function (b) {
            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
          };
        }), lang: ha(function (a) {
          return V.test(a || "") || fa.error("unsupported lang: " + a), a = a.replace(ba, ca).toLowerCase(), function (b) {
            var c;do {
              if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
            } while ((b = b.parentNode) && 1 === b.nodeType);return !1;
          };
        }), target: function target(b) {
          var c = a.location && a.location.hash;return c && c.slice(1) === b.id;
        }, root: function root(a) {
          return a === o;
        }, focus: function focus(a) {
          return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
        }, enabled: function enabled(a) {
          return a.disabled === !1;
        }, disabled: function disabled(a) {
          return a.disabled === !0;
        }, checked: function checked(a) {
          var b = a.nodeName.toLowerCase();return "input" === b && !!a.checked || "option" === b && !!a.selected;
        }, selected: function selected(a) {
          return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
        }, empty: function empty(a) {
          for (a = a.firstChild; a; a = a.nextSibling) {
            if (a.nodeType < 6) return !1;
          }return !0;
        }, parent: function parent(a) {
          return !d.pseudos.empty(a);
        }, header: function header(a) {
          return Y.test(a.nodeName);
        }, input: function input(a) {
          return X.test(a.nodeName);
        }, button: function button(a) {
          var b = a.nodeName.toLowerCase();return "input" === b && "button" === a.type || "button" === b;
        }, text: function text(a) {
          var b;return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
        }, first: na(function () {
          return [0];
        }), last: na(function (a, b) {
          return [b - 1];
        }), eq: na(function (a, b, c) {
          return [0 > c ? c + b : c];
        }), even: na(function (a, b) {
          for (var c = 0; b > c; c += 2) {
            a.push(c);
          }return a;
        }), odd: na(function (a, b) {
          for (var c = 1; b > c; c += 2) {
            a.push(c);
          }return a;
        }), lt: na(function (a, b, c) {
          for (var d = 0 > c ? c + b : c; --d >= 0;) {
            a.push(d);
          }return a;
        }), gt: na(function (a, b, c) {
          for (var d = 0 > c ? c + b : c; ++d < b;) {
            a.push(d);
          }return a;
        }) } }, d.pseudos.nth = d.pseudos.eq;for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
      d.pseudos[b] = la(b);
    }for (b in { submit: !0, reset: !0 }) {
      d.pseudos[b] = ma(b);
    }function pa() {}pa.prototype = d.filters = d.pseudos, d.setFilters = new pa(), g = fa.tokenize = function (a, b) {
      var c,
          e,
          f,
          g,
          h,
          i,
          j,
          k = z[a + " "];if (k) return b ? 0 : k.slice(0);h = a, i = [], j = d.preFilter;while (h) {
        (!c || (e = R.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = S.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(Q, " ") }), h = h.slice(c.length));for (g in d.filter) {
          !(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length));
        }if (!c) break;
      }return b ? h.length : h ? fa.error(a) : z(a, i).slice(0);
    };function qa(a) {
      for (var b = 0, c = a.length, d = ""; c > b; b++) {
        d += a[b].value;
      }return d;
    }function ra(a, b, c) {
      var d = b.dir,
          e = c && "parentNode" === d,
          f = x++;return b.first ? function (b, c, f) {
        while (b = b[d]) {
          if (1 === b.nodeType || e) return a(b, c, f);
        }
      } : function (b, c, g) {
        var h,
            i,
            j,
            k = [w, f];if (g) {
          while (b = b[d]) {
            if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
          }
        } else while (b = b[d]) {
          if (1 === b.nodeType || e) {
            if (j = b[u] || (b[u] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === w && h[1] === f) return k[2] = h[2];if (i[d] = k, k[2] = a(b, c, g)) return !0;
          }
        }
      };
    }function sa(a) {
      return a.length > 1 ? function (b, c, d) {
        var e = a.length;while (e--) {
          if (!a[e](b, c, d)) return !1;
        }return !0;
      } : a[0];
    }function ta(a, b, c) {
      for (var d = 0, e = b.length; e > d; d++) {
        fa(a, b[d], c);
      }return c;
    }function ua(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) {
        (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
      }return g;
    }function va(a, b, c, d, e, f) {
      return d && !d[u] && (d = va(d)), e && !e[u] && (e = va(e, f)), ha(function (f, g, h, i) {
        var j,
            k,
            l,
            m = [],
            n = [],
            o = g.length,
            p = f || ta(b || "*", h.nodeType ? [h] : h, []),
            q = !a || !f && b ? p : ua(p, m, a, h, i),
            r = c ? e || (f ? a : o || d) ? [] : g : q;if (c && c(q, r, h, i), d) {
          j = ua(r, n), d(j, [], h, i), k = j.length;while (k--) {
            (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
          }
        }if (f) {
          if (e || a) {
            if (e) {
              j = [], k = r.length;while (k--) {
                (l = r[k]) && j.push(q[k] = l);
              }e(null, r = [], j, i);
            }k = r.length;while (k--) {
              (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
            }
          }
        } else r = ua(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r);
      });
    }function wa(a) {
      for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ra(function (a) {
        return a === b;
      }, h, !0), l = ra(function (a) {
        return J(b, a) > -1;
      }, h, !0), m = [function (a, c, d) {
        var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));return b = null, e;
      }]; f > i; i++) {
        if (c = d.relative[a[i].type]) m = [ra(sa(m), c)];else {
          if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
            for (e = ++i; f > e; e++) {
              if (d.relative[a[e].type]) break;
            }return va(i > 1 && sa(m), i > 1 && qa(a.slice(0, i - 1).concat({ value: " " === a[i - 2].type ? "*" : "" })).replace(Q, "$1"), c, e > i && wa(a.slice(i, e)), f > e && wa(a = a.slice(e)), f > e && qa(a));
          }m.push(c);
        }
      }return sa(m);
    }function xa(a, b) {
      var c = b.length > 0,
          e = a.length > 0,
          f = function f(_f, g, h, i, k) {
        var l,
            o,
            q,
            r = 0,
            s = "0",
            t = _f && [],
            u = [],
            v = j,
            x = _f || e && d.find.TAG("*", k),
            y = w += null == v ? 1 : Math.random() || .1,
            z = x.length;for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
          if (e && l) {
            o = 0, g || l.ownerDocument === n || (m(l), h = !p);while (q = a[o++]) {
              if (q(l, g || n, h)) {
                i.push(l);break;
              }
            }k && (w = y);
          }c && ((l = !q && l) && r--, _f && t.push(l));
        }if (r += s, c && s !== r) {
          o = 0;while (q = b[o++]) {
            q(t, u, g, h);
          }if (_f) {
            if (r > 0) while (s--) {
              t[s] || u[s] || (u[s] = F.call(i));
            }u = ua(u);
          }H.apply(i, u), k && !_f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i);
        }return k && (w = y, j = v), t;
      };return c ? ha(f) : f;
    }return h = fa.compile = function (a, b) {
      var c,
          d = [],
          e = [],
          f = A[a + " "];if (!f) {
        b || (b = g(a)), c = b.length;while (c--) {
          f = wa(b[c]), f[u] ? d.push(f) : e.push(f);
        }f = A(a, xa(e, d)), f.selector = a;
      }return f;
    }, i = fa.select = function (a, b, e, f) {
      var i,
          j,
          k,
          l,
          m,
          n = "function" == typeof a && a,
          o = !f && g(a = n.selector || a);if (e = e || [], 1 === o.length) {
        if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
          if (b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0], !b) return e;n && (b = b.parentNode), a = a.slice(j.shift().value.length);
        }i = W.needsContext.test(a) ? 0 : j.length;while (i--) {
          if (k = j[i], d.relative[l = k.type]) break;if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && oa(b.parentNode) || b))) {
            if (j.splice(i, 1), a = f.length && qa(j), !a) return H.apply(e, f), e;break;
          }
        }
      }return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && oa(b.parentNode) || b), e;
    }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ia(function (a) {
      return 1 & a.compareDocumentPosition(n.createElement("div"));
    }), ia(function (a) {
      return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
    }) || ja("type|href|height|width", function (a, b, c) {
      return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
    }), c.attributes && ia(function (a) {
      return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
    }) || ja("value", function (a, b, c) {
      return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
    }), ia(function (a) {
      return null == a.getAttribute("disabled");
    }) || ja(K, function (a, b, c) {
      var d;return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
    }), fa;
  }(a);n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.uniqueSort = n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;var u = function u(a, b, c) {
    var d = [],
        e = void 0 !== c;while ((a = a[b]) && 9 !== a.nodeType) {
      if (1 === a.nodeType) {
        if (e && n(a).is(c)) break;d.push(a);
      }
    }return d;
  },
      v = function v(a, b) {
    for (var c = []; a; a = a.nextSibling) {
      1 === a.nodeType && a !== b && c.push(a);
    }return c;
  },
      w = n.expr.match.needsContext,
      x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
      y = /^.[^:#\[\.,]*$/;function z(a, b, c) {
    if (n.isFunction(b)) return n.grep(a, function (a, d) {
      return !!b.call(a, d, a) !== c;
    });if (b.nodeType) return n.grep(a, function (a) {
      return a === b !== c;
    });if ("string" == typeof b) {
      if (y.test(b)) return n.filter(b, a, c);b = n.filter(b, a);
    }return n.grep(a, function (a) {
      return h.call(b, a) > -1 !== c;
    });
  }n.filter = function (a, b, c) {
    var d = b[0];return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function (a) {
      return 1 === a.nodeType;
    }));
  }, n.fn.extend({ find: function find(a) {
      var b,
          c = this.length,
          d = [],
          e = this;if ("string" != typeof a) return this.pushStack(n(a).filter(function () {
        for (b = 0; c > b; b++) {
          if (n.contains(e[b], this)) return !0;
        }
      }));for (b = 0; c > b; b++) {
        n.find(a, e[b], d);
      }return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d;
    }, filter: function filter(a) {
      return this.pushStack(z(this, a || [], !1));
    }, not: function not(a) {
      return this.pushStack(z(this, a || [], !0));
    }, is: function is(a) {
      return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length;
    } });var A,
      B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
      C = n.fn.init = function (a, b, c) {
    var e, f;if (!a) return this;if (c = c || A, "string" == typeof a) {
      if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : B.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);if (e[1]) {
        if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), x.test(e[1]) && n.isPlainObject(b)) for (e in b) {
          n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
        }return this;
      }return f = d.getElementById(e[2]), f && f.parentNode && (this.length = 1, this[0] = f), this.context = d, this.selector = a, this;
    }return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this));
  };C.prototype = n.fn, A = n(d);var D = /^(?:parents|prev(?:Until|All))/,
      E = { children: !0, contents: !0, next: !0, prev: !0 };n.fn.extend({ has: function has(a) {
      var b = n(a, this),
          c = b.length;return this.filter(function () {
        for (var a = 0; c > a; a++) {
          if (n.contains(this, b[a])) return !0;
        }
      });
    }, closest: function closest(a, b) {
      for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++) {
        for (c = this[d]; c && c !== b; c = c.parentNode) {
          if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
            f.push(c);break;
          }
        }
      }return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f);
    }, index: function index(a) {
      return a ? "string" == typeof a ? h.call(n(a), this[0]) : h.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    }, add: function add(a, b) {
      return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))));
    }, addBack: function addBack(a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
    } });function F(a, b) {
    while ((a = a[b]) && 1 !== a.nodeType) {}return a;
  }n.each({ parent: function parent(a) {
      var b = a.parentNode;return b && 11 !== b.nodeType ? b : null;
    }, parents: function parents(a) {
      return u(a, "parentNode");
    }, parentsUntil: function parentsUntil(a, b, c) {
      return u(a, "parentNode", c);
    }, next: function next(a) {
      return F(a, "nextSibling");
    }, prev: function prev(a) {
      return F(a, "previousSibling");
    }, nextAll: function nextAll(a) {
      return u(a, "nextSibling");
    }, prevAll: function prevAll(a) {
      return u(a, "previousSibling");
    }, nextUntil: function nextUntil(a, b, c) {
      return u(a, "nextSibling", c);
    }, prevUntil: function prevUntil(a, b, c) {
      return u(a, "previousSibling", c);
    }, siblings: function siblings(a) {
      return v((a.parentNode || {}).firstChild, a);
    }, children: function children(a) {
      return v(a.firstChild);
    }, contents: function contents(a) {
      return a.contentDocument || n.merge([], a.childNodes);
    } }, function (a, b) {
    n.fn[a] = function (c, d) {
      var e = n.map(this, b, c);return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (E[a] || n.uniqueSort(e), D.test(a) && e.reverse()), this.pushStack(e);
    };
  });var G = /\S+/g;function H(a) {
    var b = {};return n.each(a.match(G) || [], function (a, c) {
      b[c] = !0;
    }), b;
  }n.Callbacks = function (a) {
    a = "string" == typeof a ? H(a) : n.extend({}, a);var b,
        c,
        d,
        e,
        f = [],
        g = [],
        h = -1,
        i = function i() {
      for (e = a.once, d = b = !0; g.length; h = -1) {
        c = g.shift();while (++h < f.length) {
          f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1);
        }
      }a.memory || (c = !1), b = !1, e && (f = c ? [] : "");
    },
        j = { add: function add() {
        return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
          n.each(b, function (b, c) {
            n.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== n.type(c) && d(c);
          });
        }(arguments), c && !b && i()), this;
      }, remove: function remove() {
        return n.each(arguments, function (a, b) {
          var c;while ((c = n.inArray(b, f, c)) > -1) {
            f.splice(c, 1), h >= c && h--;
          }
        }), this;
      }, has: function has(a) {
        return a ? n.inArray(a, f) > -1 : f.length > 0;
      }, empty: function empty() {
        return f && (f = []), this;
      }, disable: function disable() {
        return e = g = [], f = c = "", this;
      }, disabled: function disabled() {
        return !f;
      }, lock: function lock() {
        return e = g = [], c || (f = c = ""), this;
      }, locked: function locked() {
        return !!e;
      }, fireWith: function fireWith(a, c) {
        return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this;
      }, fire: function fire() {
        return j.fireWith(this, arguments), this;
      }, fired: function fired() {
        return !!d;
      } };return j;
  }, n.extend({ Deferred: function Deferred(a) {
      var b = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]],
          c = "pending",
          d = { state: function state() {
          return c;
        }, always: function always() {
          return e.done(arguments).fail(arguments), this;
        }, then: function then() {
          var a = arguments;return n.Deferred(function (c) {
            n.each(b, function (b, f) {
              var g = n.isFunction(a[b]) && a[b];e[f[1]](function () {
                var a = g && g.apply(this, arguments);a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments);
              });
            }), a = null;
          }).promise();
        }, promise: function promise(a) {
          return null != a ? n.extend(a, d) : d;
        } },
          e = {};return d.pipe = d.then, n.each(b, function (a, f) {
        var g = f[2],
            h = f[3];d[f[1]] = g.add, h && g.add(function () {
          c = h;
        }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
          return e[f[0] + "With"](this === e ? d : this, arguments), this;
        }, e[f[0] + "With"] = g.fireWith;
      }), d.promise(e), a && a.call(e, e), e;
    }, when: function when(a) {
      var b = 0,
          c = e.call(arguments),
          d = c.length,
          f = 1 !== d || a && n.isFunction(a.promise) ? d : 0,
          g = 1 === f ? a : n.Deferred(),
          h = function h(a, b, c) {
        return function (d) {
          b[a] = this, c[a] = arguments.length > 1 ? e.call(arguments) : d, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
        };
      },
          i,
          j,
          k;if (d > 1) for (i = new Array(d), j = new Array(d), k = new Array(d); d > b; b++) {
        c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f;
      }return f || g.resolveWith(k, c), g.promise();
    } });var I;n.fn.ready = function (a) {
    return n.ready.promise().done(a), this;
  }, n.extend({ isReady: !1, readyWait: 1, holdReady: function holdReady(a) {
      a ? n.readyWait++ : n.ready(!0);
    }, ready: function ready(a) {
      (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (I.resolveWith(d, [n]), n.fn.triggerHandler && (n(d).triggerHandler("ready"), n(d).off("ready"))));
    } });function J() {
    d.removeEventListener("DOMContentLoaded", J), a.removeEventListener("load", J), n.ready();
  }n.ready.promise = function (b) {
    return I || (I = n.Deferred(), "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(n.ready) : (d.addEventListener("DOMContentLoaded", J), a.addEventListener("load", J))), I.promise(b);
  }, n.ready.promise();var K = function K(a, b, c, d, e, f, g) {
    var h = 0,
        i = a.length,
        j = null == c;if ("object" === n.type(c)) {
      e = !0;for (h in c) {
        K(a, b, h, c[h], !0, f, g);
      }
    } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function b(a, _b, c) {
      return j.call(n(a), c);
    })), b)) for (; i > h; h++) {
      b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
    }return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
  },
      L = function L(a) {
    return 1 === a.nodeType || 9 === a.nodeType || ! +a.nodeType;
  };function M() {
    this.expando = n.expando + M.uid++;
  }M.uid = 1, M.prototype = { register: function register(a, b) {
      var c = b || {};return a.nodeType ? a[this.expando] = c : Object.defineProperty(a, this.expando, { value: c, writable: !0, configurable: !0 }), a[this.expando];
    }, cache: function cache(a) {
      if (!L(a)) return {};var b = a[this.expando];return b || (b = {}, L(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, { value: b, configurable: !0 }))), b;
    }, set: function set(a, b, c) {
      var d,
          e = this.cache(a);if ("string" == typeof b) e[b] = c;else for (d in b) {
        e[d] = b[d];
      }return e;
    }, get: function get(a, b) {
      return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][b];
    }, access: function access(a, b, c) {
      var d;return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b);
    }, remove: function remove(a, b) {
      var c,
          d,
          e,
          f = a[this.expando];if (void 0 !== f) {
        if (void 0 === b) this.register(a);else {
          n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in f ? d = [b, e] : (d = e, d = d in f ? [d] : d.match(G) || [])), c = d.length;while (c--) {
            delete f[d[c]];
          }
        }(void 0 === b || n.isEmptyObject(f)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando]);
      }
    }, hasData: function hasData(a) {
      var b = a[this.expando];return void 0 !== b && !n.isEmptyObject(b);
    } };var N = new M(),
      O = new M(),
      P = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      Q = /[A-Z]/g;function R(a, b, c) {
    var d;if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(Q, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
      try {
        c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : P.test(c) ? n.parseJSON(c) : c;
      } catch (e) {}O.set(a, b, c);
    } else c = void 0;return c;
  }n.extend({ hasData: function hasData(a) {
      return O.hasData(a) || N.hasData(a);
    }, data: function data(a, b, c) {
      return O.access(a, b, c);
    }, removeData: function removeData(a, b) {
      O.remove(a, b);
    }, _data: function _data(a, b, c) {
      return N.access(a, b, c);
    }, _removeData: function _removeData(a, b) {
      N.remove(a, b);
    } }), n.fn.extend({ data: function data(a, b) {
      var c,
          d,
          e,
          f = this[0],
          g = f && f.attributes;if (void 0 === a) {
        if (this.length && (e = O.get(f), 1 === f.nodeType && !N.get(f, "hasDataAttrs"))) {
          c = g.length;while (c--) {
            g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), R(f, d, e[d])));
          }N.set(f, "hasDataAttrs", !0);
        }return e;
      }return "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) ? this.each(function () {
        O.set(this, a);
      }) : K(this, function (b) {
        var c, d;if (f && void 0 === b) {
          if (c = O.get(f, a) || O.get(f, a.replace(Q, "-$&").toLowerCase()), void 0 !== c) return c;if (d = n.camelCase(a), c = O.get(f, d), void 0 !== c) return c;if (c = R(f, d, void 0), void 0 !== c) return c;
        } else d = n.camelCase(a), this.each(function () {
          var c = O.get(this, d);O.set(this, d, b), a.indexOf("-") > -1 && void 0 !== c && O.set(this, a, b);
        });
      }, null, b, arguments.length > 1, null, !0);
    }, removeData: function removeData(a) {
      return this.each(function () {
        O.remove(this, a);
      });
    } }), n.extend({ queue: function queue(a, b, c) {
      var d;return a ? (b = (b || "fx") + "queue", d = N.get(a, b), c && (!d || n.isArray(c) ? d = N.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0;
    }, dequeue: function dequeue(a, b) {
      b = b || "fx";var c = n.queue(a, b),
          d = c.length,
          e = c.shift(),
          f = n._queueHooks(a, b),
          g = function g() {
        n.dequeue(a, b);
      };"inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
    }, _queueHooks: function _queueHooks(a, b) {
      var c = b + "queueHooks";return N.get(a, c) || N.access(a, c, { empty: n.Callbacks("once memory").add(function () {
          N.remove(a, [b + "queue", c]);
        }) });
    } }), n.fn.extend({ queue: function queue(a, b) {
      var c = 2;return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function () {
        var c = n.queue(this, a, b);n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a);
      });
    }, dequeue: function dequeue(a) {
      return this.each(function () {
        n.dequeue(this, a);
      });
    }, clearQueue: function clearQueue(a) {
      return this.queue(a || "fx", []);
    }, promise: function promise(a, b) {
      var c,
          d = 1,
          e = n.Deferred(),
          f = this,
          g = this.length,
          h = function h() {
        --d || e.resolveWith(f, [f]);
      };"string" != typeof a && (b = a, a = void 0), a = a || "fx";while (g--) {
        c = N.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
      }return h(), e.promise(b);
    } });var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      T = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"),
      U = ["Top", "Right", "Bottom", "Left"],
      V = function V(a, b) {
    return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a);
  };function W(a, b, c, d) {
    var e,
        f = 1,
        g = 20,
        h = d ? function () {
      return d.cur();
    } : function () {
      return n.css(a, b, "");
    },
        i = h(),
        j = c && c[3] || (n.cssNumber[b] ? "" : "px"),
        k = (n.cssNumber[b] || "px" !== j && +i) && T.exec(n.css(a, b));if (k && k[3] !== j) {
      j = j || k[3], c = c || [], k = +i || 1;do {
        f = f || ".5", k /= f, n.style(a, b, k + j);
      } while (f !== (f = h() / i) && 1 !== f && --g);
    }return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e;
  }var X = /^(?:checkbox|radio)$/i,
      Y = /<([\w:-]+)/,
      Z = /^$|\/(?:java|ecma)script/i,
      $ = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };$.optgroup = $.option, $.tbody = $.tfoot = $.colgroup = $.caption = $.thead, $.th = $.td;function _(a, b) {
    var c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [];return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c;
  }function aa(a, b) {
    for (var c = 0, d = a.length; d > c; c++) {
      N.set(a[c], "globalEval", !b || N.get(b[c], "globalEval"));
    }
  }var ba = /<|&#?\w+;/;function ca(a, b, c, d, e) {
    for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], o = 0, p = a.length; p > o; o++) {
      if (f = a[o], f || 0 === f) if ("object" === n.type(f)) n.merge(m, f.nodeType ? [f] : f);else if (ba.test(f)) {
        g = g || l.appendChild(b.createElement("div")), h = (Y.exec(f) || ["", ""])[1].toLowerCase(), i = $[h] || $._default, g.innerHTML = i[1] + n.htmlPrefilter(f) + i[2], k = i[0];while (k--) {
          g = g.lastChild;
        }n.merge(m, g.childNodes), g = l.firstChild, g.textContent = "";
      } else m.push(b.createTextNode(f));
    }l.textContent = "", o = 0;while (f = m[o++]) {
      if (d && n.inArray(f, d) > -1) e && e.push(f);else if (j = n.contains(f.ownerDocument, f), g = _(l.appendChild(f), "script"), j && aa(g), c) {
        k = 0;while (f = g[k++]) {
          Z.test(f.type || "") && c.push(f);
        }
      }
    }return l;
  }!function () {
    var a = d.createDocumentFragment(),
        b = a.appendChild(d.createElement("div")),
        c = d.createElement("input");c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), l.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;
  }();var da = /^key/,
      ea = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      fa = /^([^.]*)(?:\.(.+)|)/;function ga() {
    return !0;
  }function ha() {
    return !1;
  }function ia() {
    try {
      return d.activeElement;
    } catch (a) {}
  }function ja(a, b, c, d, e, f) {
    var g, h;if ("object" == (typeof b === "undefined" ? "undefined" : _typeof(b))) {
      "string" != typeof c && (d = d || c, c = void 0);for (h in b) {
        ja(a, h, c, d, b[h], f);
      }return a;
    }if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = ha;else if (!e) return a;return 1 === f && (g = e, e = function e(a) {
      return n().off(a), g.apply(this, arguments);
    }, e.guid = g.guid || (g.guid = n.guid++)), a.each(function () {
      n.event.add(this, b, e, d, c);
    });
  }n.event = { global: {}, add: function add(a, b, c, d, e) {
      var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          o,
          p,
          q,
          r = N.get(a);if (r) {
        c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function (b) {
          return "undefined" != typeof n && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0;
        }), b = (b || "").match(G) || [""], j = b.length;while (j--) {
          h = fa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({ type: o, origType: q, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && n.expr.match.needsContext.test(e), namespace: p.join(".") }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0);
        }
      }
    }, remove: function remove(a, b, c, d, e) {
      var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          o,
          p,
          q,
          r = N.hasData(a) && N.get(a);if (r && (i = r.events)) {
        b = (b || "").match(G) || [""], j = b.length;while (j--) {
          if (h = fa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
            l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;while (f--) {
              k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
            }g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o]);
          } else for (o in i) {
            n.event.remove(a, o + b[j], c, d, !0);
          }
        }n.isEmptyObject(i) && N.remove(a, "handle events");
      }
    }, dispatch: function dispatch(a) {
      a = n.event.fix(a);var b,
          c,
          d,
          f,
          g,
          h = [],
          i = e.call(arguments),
          j = (N.get(this, "events") || {})[a.type] || [],
          k = n.event.special[a.type] || {};if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
        h = n.event.handlers.call(this, a, j), b = 0;while ((f = h[b++]) && !a.isPropagationStopped()) {
          a.currentTarget = f.elem, c = 0;while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) {
            (!a.rnamespace || a.rnamespace.test(g.namespace)) && (a.handleObj = g, a.data = g.data, d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
          }
        }return k.postDispatch && k.postDispatch.call(this, a), a.result;
      }
    }, handlers: function handlers(a, b) {
      var c,
          d,
          e,
          f,
          g = [],
          h = b.delegateCount,
          i = a.target;if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1)) for (; i !== this; i = i.parentNode || this) {
        if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
          for (d = [], c = 0; h > c; c++) {
            f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
          }d.length && g.push({ elem: i, handlers: d });
        }
      }return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g;
    }, props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function filter(a, b) {
        return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a;
      } }, mouseHooks: { props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function filter(a, b) {
        var c,
            e,
            f,
            g = b.button;return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || d, e = c.documentElement, f = c.body, a.pageX = b.clientX + (e && e.scrollLeft || f && f.scrollLeft || 0) - (e && e.clientLeft || f && f.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || f && f.scrollTop || 0) - (e && e.clientTop || f && f.clientTop || 0)), a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a;
      } }, fix: function fix(a) {
      if (a[n.expando]) return a;var b,
          c,
          e,
          f = a.type,
          g = a,
          h = this.fixHooks[f];h || (this.fixHooks[f] = h = ea.test(f) ? this.mouseHooks : da.test(f) ? this.keyHooks : {}), e = h.props ? this.props.concat(h.props) : this.props, a = new n.Event(g), b = e.length;while (b--) {
        c = e[b], a[c] = g[c];
      }return a.target || (a.target = d), 3 === a.target.nodeType && (a.target = a.target.parentNode), h.filter ? h.filter(a, g) : a;
    }, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
          return this !== ia() && this.focus ? (this.focus(), !1) : void 0;
        }, delegateType: "focusin" }, blur: { trigger: function trigger() {
          return this === ia() && this.blur ? (this.blur(), !1) : void 0;
        }, delegateType: "focusout" }, click: { trigger: function trigger() {
          return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0;
        }, _default: function _default(a) {
          return n.nodeName(a.target, "a");
        } }, beforeunload: { postDispatch: function postDispatch(a) {
          void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
        } } } }, n.removeEvent = function (a, b, c) {
    a.removeEventListener && a.removeEventListener(b, c);
  }, n.Event = function (a, b) {
    return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ga : ha) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void (this[n.expando] = !0)) : new n.Event(a, b);
  }, n.Event.prototype = { constructor: n.Event, isDefaultPrevented: ha, isPropagationStopped: ha, isImmediatePropagationStopped: ha, preventDefault: function preventDefault() {
      var a = this.originalEvent;this.isDefaultPrevented = ga, a && a.preventDefault();
    }, stopPropagation: function stopPropagation() {
      var a = this.originalEvent;this.isPropagationStopped = ga, a && a.stopPropagation();
    }, stopImmediatePropagation: function stopImmediatePropagation() {
      var a = this.originalEvent;this.isImmediatePropagationStopped = ga, a && a.stopImmediatePropagation(), this.stopPropagation();
    } }, n.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (a, b) {
    n.event.special[a] = { delegateType: b, bindType: b, handle: function handle(a) {
        var c,
            d = this,
            e = a.relatedTarget,
            f = a.handleObj;return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c;
      } };
  }), n.fn.extend({ on: function on(a, b, c, d) {
      return ja(this, a, b, c, d);
    }, one: function one(a, b, c, d) {
      return ja(this, a, b, c, d, 1);
    }, off: function off(a, b, c) {
      var d, e;if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;if ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a))) {
        for (e in a) {
          this.off(e, b, a[e]);
        }return this;
      }return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = ha), this.each(function () {
        n.event.remove(this, a, c, b);
      });
    } });var ka = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
      la = /<script|<style|<link/i,
      ma = /checked\s*(?:[^=]|=\s*.checked.)/i,
      na = /^true\/(.*)/,
      oa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function pa(a, b) {
    return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
  }function qa(a) {
    return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a;
  }function ra(a) {
    var b = na.exec(a.type);return b ? a.type = b[1] : a.removeAttribute("type"), a;
  }function sa(a, b) {
    var c, d, e, f, g, h, i, j;if (1 === b.nodeType) {
      if (N.hasData(a) && (f = N.access(a), g = N.set(b, f), j = f.events)) {
        delete g.handle, g.events = {};for (e in j) {
          for (c = 0, d = j[e].length; d > c; c++) {
            n.event.add(b, e, j[e][c]);
          }
        }
      }O.hasData(a) && (h = O.access(a), i = n.extend({}, h), O.set(b, i));
    }
  }function ta(a, b) {
    var c = b.nodeName.toLowerCase();"input" === c && X.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue);
  }function ua(a, b, c, d) {
    b = f.apply([], b);var e,
        g,
        h,
        i,
        j,
        k,
        m = 0,
        o = a.length,
        p = o - 1,
        q = b[0],
        r = n.isFunction(q);if (r || o > 1 && "string" == typeof q && !l.checkClone && ma.test(q)) return a.each(function (e) {
      var f = a.eq(e);r && (b[0] = q.call(this, e, f.html())), ua(f, b, c, d);
    });if (o && (e = ca(b, a[0].ownerDocument, !1, a, d), g = e.firstChild, 1 === e.childNodes.length && (e = g), g || d)) {
      for (h = n.map(_(e, "script"), qa), i = h.length; o > m; m++) {
        j = e, m !== p && (j = n.clone(j, !0, !0), i && n.merge(h, _(j, "script"))), c.call(a[m], j, m);
      }if (i) for (k = h[h.length - 1].ownerDocument, n.map(h, ra), m = 0; i > m; m++) {
        j = h[m], Z.test(j.type || "") && !N.access(j, "globalEval") && n.contains(k, j) && (j.src ? n._evalUrl && n._evalUrl(j.src) : n.globalEval(j.textContent.replace(oa, "")));
      }
    }return a;
  }function va(a, b, c) {
    for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++) {
      c || 1 !== d.nodeType || n.cleanData(_(d)), d.parentNode && (c && n.contains(d.ownerDocument, d) && aa(_(d, "script")), d.parentNode.removeChild(d));
    }return a;
  }n.extend({ htmlPrefilter: function htmlPrefilter(a) {
      return a.replace(ka, "<$1></$2>");
    }, clone: function clone(a, b, c) {
      var d,
          e,
          f,
          g,
          h = a.cloneNode(!0),
          i = n.contains(a.ownerDocument, a);if (!(l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a))) for (g = _(h), f = _(a), d = 0, e = f.length; e > d; d++) {
        ta(f[d], g[d]);
      }if (b) if (c) for (f = f || _(a), g = g || _(h), d = 0, e = f.length; e > d; d++) {
        sa(f[d], g[d]);
      } else sa(a, h);return g = _(h, "script"), g.length > 0 && aa(g, !i && _(a, "script")), h;
    }, cleanData: function cleanData(a) {
      for (var b, c, d, e = n.event.special, f = 0; void 0 !== (c = a[f]); f++) {
        if (L(c)) {
          if (b = c[N.expando]) {
            if (b.events) for (d in b.events) {
              e[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
            }c[N.expando] = void 0;
          }c[O.expando] && (c[O.expando] = void 0);
        }
      }
    } }), n.fn.extend({ domManip: ua, detach: function detach(a) {
      return va(this, a, !0);
    }, remove: function remove(a) {
      return va(this, a);
    }, text: function text(a) {
      return K(this, function (a) {
        return void 0 === a ? n.text(this) : this.empty().each(function () {
          (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a);
        });
      }, null, a, arguments.length);
    }, append: function append() {
      return ua(this, arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = pa(this, a);b.appendChild(a);
        }
      });
    }, prepend: function prepend() {
      return ua(this, arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = pa(this, a);b.insertBefore(a, b.firstChild);
        }
      });
    }, before: function before() {
      return ua(this, arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this);
      });
    }, after: function after() {
      return ua(this, arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
      });
    }, empty: function empty() {
      for (var a, b = 0; null != (a = this[b]); b++) {
        1 === a.nodeType && (n.cleanData(_(a, !1)), a.textContent = "");
      }return this;
    }, clone: function clone(a, b) {
      return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
        return n.clone(this, a, b);
      });
    }, html: function html(a) {
      return K(this, function (a) {
        var b = this[0] || {},
            c = 0,
            d = this.length;if (void 0 === a && 1 === b.nodeType) return b.innerHTML;if ("string" == typeof a && !la.test(a) && !$[(Y.exec(a) || ["", ""])[1].toLowerCase()]) {
          a = n.htmlPrefilter(a);try {
            for (; d > c; c++) {
              b = this[c] || {}, 1 === b.nodeType && (n.cleanData(_(b, !1)), b.innerHTML = a);
            }b = 0;
          } catch (e) {}
        }b && this.empty().append(a);
      }, null, a, arguments.length);
    }, replaceWith: function replaceWith() {
      var a = [];return ua(this, arguments, function (b) {
        var c = this.parentNode;n.inArray(this, a) < 0 && (n.cleanData(_(this)), c && c.replaceChild(b, this));
      }, a);
    } }), n.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (a, b) {
    n.fn[a] = function (a) {
      for (var c, d = [], e = n(a), f = e.length - 1, h = 0; f >= h; h++) {
        c = h === f ? this : this.clone(!0), n(e[h])[b](c), g.apply(d, c.get());
      }return this.pushStack(d);
    };
  });var wa,
      xa = { HTML: "block", BODY: "block" };function ya(a, b) {
    var c = n(b.createElement(a)).appendTo(b.body),
        d = n.css(c[0], "display");return c.detach(), d;
  }function za(a) {
    var b = d,
        c = xa[a];return c || (c = ya(a, b), "none" !== c && c || (wa = (wa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = wa[0].contentDocument, b.write(), b.close(), c = ya(a, b), wa.detach()), xa[a] = c), c;
  }var Aa = /^margin/,
      Ba = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"),
      Ca = function Ca(b) {
    var c = b.ownerDocument.defaultView;return c && c.opener || (c = a), c.getComputedStyle(b);
  },
      Da = function Da(a, b, c, d) {
    var e,
        f,
        g = {};for (f in b) {
      g[f] = a.style[f], a.style[f] = b[f];
    }e = c.apply(a, d || []);for (f in b) {
      a.style[f] = g[f];
    }return e;
  },
      Ea = d.documentElement;!function () {
    var b,
        c,
        e,
        f,
        g = d.createElement("div"),
        h = d.createElement("div");if (h.style) {
      (function () {
        var i = function i() {
          h.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", h.innerHTML = "", Ea.appendChild(g);var d = a.getComputedStyle(h);b = "1%" !== d.top, f = "2px" === d.marginLeft, c = "4px" === d.width, h.style.marginRight = "50%", e = "4px" === d.marginRight, Ea.removeChild(g);
        };

        h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === h.style.backgroundClip, g.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", g.appendChild(h);n.extend(l, { pixelPosition: function pixelPosition() {
            return i(), b;
          }, boxSizingReliable: function boxSizingReliable() {
            return null == c && i(), c;
          }, pixelMarginRight: function pixelMarginRight() {
            return null == c && i(), e;
          }, reliableMarginLeft: function reliableMarginLeft() {
            return null == c && i(), f;
          }, reliableMarginRight: function reliableMarginRight() {
            var b,
                c = h.appendChild(d.createElement("div"));return c.style.cssText = h.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", h.style.width = "1px", Ea.appendChild(g), b = !parseFloat(a.getComputedStyle(c).marginRight), Ea.removeChild(g), h.removeChild(c), b;
          } });
      })();
    }
  }();function Fa(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.style;return c = c || Ca(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, "" !== g && void 0 !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), c && !l.pixelMarginRight() && Ba.test(g) && Aa.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f), void 0 !== g ? g + "" : g;
  }function Ga(a, b) {
    return { get: function get() {
        return a() ? void delete this.get : (this.get = b).apply(this, arguments);
      } };
  }var Ha = /^(none|table(?!-c[ea]).+)/,
      Ia = { position: "absolute", visibility: "hidden", display: "block" },
      Ja = { letterSpacing: "0", fontWeight: "400" },
      Ka = ["Webkit", "O", "Moz", "ms"],
      La = d.createElement("div").style;function Ma(a) {
    if (a in La) return a;var b = a[0].toUpperCase() + a.slice(1),
        c = Ka.length;while (c--) {
      if (a = Ka[c] + b, a in La) return a;
    }
  }function Na(a, b, c) {
    var d = T.exec(b);return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b;
  }function Oa(a, b, c, d, e) {
    for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) {
      "margin" === c && (g += n.css(a, c + U[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + U[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + U[f] + "Width", !0, e))) : (g += n.css(a, "padding" + U[f], !0, e), "padding" !== c && (g += n.css(a, "border" + U[f] + "Width", !0, e)));
    }return g;
  }function Pa(b, c, e) {
    var f = !0,
        g = "width" === c ? b.offsetWidth : b.offsetHeight,
        h = Ca(b),
        i = "border-box" === n.css(b, "boxSizing", !1, h);if (d.msFullscreenElement && a.top !== a && b.getClientRects().length && (g = Math.round(100 * b.getBoundingClientRect()[c])), 0 >= g || null == g) {
      if (g = Fa(b, c, h), (0 > g || null == g) && (g = b.style[c]), Ba.test(g)) return g;f = i && (l.boxSizingReliable() || g === b.style[c]), g = parseFloat(g) || 0;
    }return g + Oa(b, c, e || (i ? "border" : "content"), f, h) + "px";
  }function Qa(a, b) {
    for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) {
      d = a[g], d.style && (f[g] = N.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && V(d) && (f[g] = N.access(d, "olddisplay", za(d.nodeName)))) : (e = V(d), "none" === c && e || N.set(d, "olddisplay", e ? c : n.css(d, "display"))));
    }for (g = 0; h > g; g++) {
      d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
    }return a;
  }n.extend({ cssHooks: { opacity: { get: function get(a, b) {
          if (b) {
            var c = Fa(a, "opacity");return "" === c ? "1" : c;
          }
        } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": "cssFloat" }, style: function style(a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e,
            f,
            g,
            h = n.camelCase(b),
            i = a.style;return b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c === "undefined" ? "undefined" : _typeof(c), "string" === f && (e = T.exec(c)) && e[1] && (c = W(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "" : "px")), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0);
      }
    }, css: function css(a, b, c, d) {
      var e,
          f,
          g,
          h = n.camelCase(b);return b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Fa(a, b, d)), "normal" === e && b in Ja && (e = Ja[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e;
    } }), n.each(["height", "width"], function (a, b) {
    n.cssHooks[b] = { get: function get(a, c, d) {
        return c ? Ha.test(n.css(a, "display")) && 0 === a.offsetWidth ? Da(a, Ia, function () {
          return Pa(a, b, d);
        }) : Pa(a, b, d) : void 0;
      }, set: function set(a, c, d) {
        var e,
            f = d && Ca(a),
            g = d && Oa(a, b, d, "border-box" === n.css(a, "boxSizing", !1, f), f);return g && (e = T.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = n.css(a, b)), Na(a, c, g);
      } };
  }), n.cssHooks.marginLeft = Ga(l.reliableMarginLeft, function (a, b) {
    return b ? (parseFloat(Fa(a, "marginLeft")) || a.getBoundingClientRect().left - Da(a, { marginLeft: 0 }, function () {
      return a.getBoundingClientRect().left;
    })) + "px" : void 0;
  }), n.cssHooks.marginRight = Ga(l.reliableMarginRight, function (a, b) {
    return b ? Da(a, { display: "inline-block" }, Fa, [a, "marginRight"]) : void 0;
  }), n.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
    n.cssHooks[a + b] = { expand: function expand(c) {
        for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) {
          e[a + U[d] + b] = f[d] || f[d - 2] || f[0];
        }return e;
      } }, Aa.test(a) || (n.cssHooks[a + b].set = Na);
  }), n.fn.extend({ css: function css(a, b) {
      return K(this, function (a, b, c) {
        var d,
            e,
            f = {},
            g = 0;if (n.isArray(b)) {
          for (d = Ca(a), e = b.length; e > g; g++) {
            f[b[g]] = n.css(a, b[g], !1, d);
          }return f;
        }return void 0 !== c ? n.style(a, b, c) : n.css(a, b);
      }, a, b, arguments.length > 1);
    }, show: function show() {
      return Qa(this, !0);
    }, hide: function hide() {
      return Qa(this);
    }, toggle: function toggle(a) {
      return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
        V(this) ? n(this).show() : n(this).hide();
      });
    } });function Ra(a, b, c, d, e) {
    return new Ra.prototype.init(a, b, c, d, e);
  }n.Tween = Ra, Ra.prototype = { constructor: Ra, init: function init(a, b, c, d, e, f) {
      this.elem = a, this.prop = c, this.easing = e || n.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px");
    }, cur: function cur() {
      var a = Ra.propHooks[this.prop];return a && a.get ? a.get(this) : Ra.propHooks._default.get(this);
    }, run: function run(a) {
      var b,
          c = Ra.propHooks[this.prop];return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Ra.propHooks._default.set(this), this;
    } }, Ra.prototype.init.prototype = Ra.prototype, Ra.propHooks = { _default: { get: function get(a) {
        var b;return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0);
      }, set: function set(a) {
        n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem, a.prop, a.now + a.unit);
      } } }, Ra.propHooks.scrollTop = Ra.propHooks.scrollLeft = { set: function set(a) {
      a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
    } }, n.easing = { linear: function linear(a) {
      return a;
    }, swing: function swing(a) {
      return .5 - Math.cos(a * Math.PI) / 2;
    }, _default: "swing" }, n.fx = Ra.prototype.init, n.fx.step = {};var Sa,
      Ta,
      Ua = /^(?:toggle|show|hide)$/,
      Va = /queueHooks$/;function Wa() {
    return a.setTimeout(function () {
      Sa = void 0;
    }), Sa = n.now();
  }function Xa(a, b) {
    var c,
        d = 0,
        e = { height: a };for (b = b ? 1 : 0; 4 > d; d += 2 - b) {
      c = U[d], e["margin" + c] = e["padding" + c] = a;
    }return b && (e.opacity = e.width = a), e;
  }function Ya(a, b, c) {
    for (var d, e = (_a.tweeners[b] || []).concat(_a.tweeners["*"]), f = 0, g = e.length; g > f; f++) {
      if (d = e[f].call(c, b, a)) return d;
    }
  }function Za(a, b, c) {
    var d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l = this,
        m = {},
        o = a.style,
        p = a.nodeType && V(a),
        q = N.get(a, "fxshow");c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
      h.unqueued || i();
    }), h.unqueued++, l.always(function () {
      l.always(function () {
        h.unqueued--, n.queue(a, "fx").length || h.empty.fire();
      });
    })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = n.css(a, "display"), k = "none" === j ? N.get(a, "olddisplay") || za(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), c.overflow && (o.overflow = "hidden", l.always(function () {
      o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2];
    }));for (d in b) {
      if (e = b[d], Ua.exec(e)) {
        if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
          if ("show" !== e || !q || void 0 === q[d]) continue;p = !0;
        }m[d] = q && q[d] || n.style(a, d);
      } else j = void 0;
    }if (n.isEmptyObject(m)) "inline" === ("none" === j ? za(a.nodeName) : j) && (o.display = j);else {
      q ? "hidden" in q && (p = q.hidden) : q = N.access(a, "fxshow", {}), f && (q.hidden = !p), p ? n(a).show() : l.done(function () {
        n(a).hide();
      }), l.done(function () {
        var b;N.remove(a, "fxshow");for (b in m) {
          n.style(a, b, m[b]);
        }
      });for (d in m) {
        g = Ya(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0));
      }
    }
  }function $a(a, b) {
    var c, d, e, f, g;for (c in a) {
      if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
        f = g.expand(f), delete a[d];for (c in f) {
          c in a || (a[c] = f[c], b[c] = e);
        }
      } else b[d] = e;
    }
  }function _a(a, b, c) {
    var d,
        e,
        f = 0,
        g = _a.prefilters.length,
        h = n.Deferred().always(function () {
      delete i.elem;
    }),
        i = function i() {
      if (e) return !1;for (var b = Sa || Wa(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) {
        j.tweens[g].run(f);
      }return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1);
    },
        j = h.promise({ elem: a, props: n.extend({}, b), opts: n.extend(!0, { specialEasing: {}, easing: n.easing._default }, c), originalProperties: b, originalOptions: c, startTime: Sa || Wa(), duration: c.duration, tweens: [], createTween: function createTween(b, c) {
        var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);return j.tweens.push(d), d;
      }, stop: function stop(b) {
        var c = 0,
            d = b ? j.tweens.length : 0;if (e) return this;for (e = !0; d > c; c++) {
          j.tweens[c].run(1);
        }return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this;
      } }),
        k = j.props;for ($a(k, j.opts.specialEasing); g > f; f++) {
      if (d = _a.prefilters[f].call(j, a, k, j.opts)) return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)), d;
    }return n.map(k, Ya, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
  }n.Animation = n.extend(_a, { tweeners: { "*": [function (a, b) {
        var c = this.createTween(a, b);return W(c.elem, a, T.exec(b), c), c;
      }] }, tweener: function tweener(a, b) {
      n.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(G);for (var c, d = 0, e = a.length; e > d; d++) {
        c = a[d], _a.tweeners[c] = _a.tweeners[c] || [], _a.tweeners[c].unshift(b);
      }
    }, prefilters: [Za], prefilter: function prefilter(a, b) {
      b ? _a.prefilters.unshift(a) : _a.prefilters.push(a);
    } }), n.speed = function (a, b, c) {
    var d = a && "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) ? n.extend({}, a) : { complete: c || !c && b || n.isFunction(a) && a, duration: a, easing: c && b || b && !n.isFunction(b) && b };return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () {
      n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue);
    }, d;
  }, n.fn.extend({ fadeTo: function fadeTo(a, b, c, d) {
      return this.filter(V).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d);
    }, animate: function animate(a, b, c, d) {
      var e = n.isEmptyObject(a),
          f = n.speed(b, c, d),
          g = function g() {
        var b = _a(this, n.extend({}, a), f);(e || N.get(this, "finish")) && b.stop(!0);
      };return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
    }, stop: function stop(a, b, c) {
      var d = function d(a) {
        var b = a.stop;delete a.stop, b(c);
      };return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
        var b = !0,
            e = null != a && a + "queueHooks",
            f = n.timers,
            g = N.get(this);if (e) g[e] && g[e].stop && d(g[e]);else for (e in g) {
          g[e] && g[e].stop && Va.test(e) && d(g[e]);
        }for (e = f.length; e--;) {
          f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
        }(b || !c) && n.dequeue(this, a);
      });
    }, finish: function finish(a) {
      return a !== !1 && (a = a || "fx"), this.each(function () {
        var b,
            c = N.get(this),
            d = c[a + "queue"],
            e = c[a + "queueHooks"],
            f = n.timers,
            g = d ? d.length : 0;for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) {
          f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
        }for (b = 0; g > b; b++) {
          d[b] && d[b].finish && d[b].finish.call(this);
        }delete c.finish;
      });
    } }), n.each(["toggle", "show", "hide"], function (a, b) {
    var c = n.fn[b];n.fn[b] = function (a, d, e) {
      return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Xa(b, !0), a, d, e);
    };
  }), n.each({ slideDown: Xa("show"), slideUp: Xa("hide"), slideToggle: Xa("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (a, b) {
    n.fn[a] = function (a, c, d) {
      return this.animate(b, a, c, d);
    };
  }), n.timers = [], n.fx.tick = function () {
    var a,
        b = 0,
        c = n.timers;for (Sa = n.now(); b < c.length; b++) {
      a = c[b], a() || c[b] !== a || c.splice(b--, 1);
    }c.length || n.fx.stop(), Sa = void 0;
  }, n.fx.timer = function (a) {
    n.timers.push(a), a() ? n.fx.start() : n.timers.pop();
  }, n.fx.interval = 13, n.fx.start = function () {
    Ta || (Ta = a.setInterval(n.fx.tick, n.fx.interval));
  }, n.fx.stop = function () {
    a.clearInterval(Ta), Ta = null;
  }, n.fx.speeds = { slow: 600, fast: 200, _default: 400 }, n.fn.delay = function (b, c) {
    return b = n.fx ? n.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function (c, d) {
      var e = a.setTimeout(c, b);d.stop = function () {
        a.clearTimeout(e);
      };
    });
  }, function () {
    var a = d.createElement("input"),
        b = d.createElement("select"),
        c = b.appendChild(d.createElement("option"));a.type = "checkbox", l.checkOn = "" !== a.value, l.optSelected = c.selected, b.disabled = !0, l.optDisabled = !c.disabled, a = d.createElement("input"), a.value = "t", a.type = "radio", l.radioValue = "t" === a.value;
  }();var ab,
      bb = n.expr.attrHandle;n.fn.extend({ attr: function attr(a, b) {
      return K(this, n.attr, a, b, arguments.length > 1);
    }, removeAttr: function removeAttr(a) {
      return this.each(function () {
        n.removeAttr(this, a);
      });
    } }), n.extend({ attr: function attr(a, b, c) {
      var d,
          e,
          f = a.nodeType;if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? ab : void 0)), void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b), null == d ? void 0 : d));
    }, attrHooks: { type: { set: function set(a, b) {
          if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
            var c = a.value;return a.setAttribute("type", b), c && (a.value = c), b;
          }
        } } }, removeAttr: function removeAttr(a, b) {
      var c,
          d,
          e = 0,
          f = b && b.match(G);if (f && 1 === a.nodeType) while (c = f[e++]) {
        d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c);
      }
    } }), ab = { set: function set(a, b, c) {
      return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c;
    } }, n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
    var c = bb[b] || n.find.attr;bb[b] = function (a, b, d) {
      var e, f;return d || (f = bb[b], bb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, bb[b] = f), e;
    };
  });var cb = /^(?:input|select|textarea|button)$/i,
      db = /^(?:a|area)$/i;n.fn.extend({ prop: function prop(a, b) {
      return K(this, n.prop, a, b, arguments.length > 1);
    }, removeProp: function removeProp(a) {
      return this.each(function () {
        delete this[n.propFix[a] || a];
      });
    } }), n.extend({ prop: function prop(a, b, c) {
      var d,
          e,
          f = a.nodeType;if (3 !== f && 8 !== f && 2 !== f) return 1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
    }, propHooks: { tabIndex: { get: function get(a) {
          var b = n.find.attr(a, "tabindex");return b ? parseInt(b, 10) : cb.test(a.nodeName) || db.test(a.nodeName) && a.href ? 0 : -1;
        } } }, propFix: { "for": "htmlFor", "class": "className" } }), l.optSelected || (n.propHooks.selected = { get: function get(a) {
      var b = a.parentNode;return b && b.parentNode && b.parentNode.selectedIndex, null;
    } }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    n.propFix[this.toLowerCase()] = this;
  });var eb = /[\t\r\n\f]/g;function fb(a) {
    return a.getAttribute && a.getAttribute("class") || "";
  }n.fn.extend({ addClass: function addClass(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h,
          i = 0;if (n.isFunction(a)) return this.each(function (b) {
        n(this).addClass(a.call(this, b, fb(this)));
      });if ("string" == typeof a && a) {
        b = a.match(G) || [];while (c = this[i++]) {
          if (e = fb(c), d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")) {
            g = 0;while (f = b[g++]) {
              d.indexOf(" " + f + " ") < 0 && (d += f + " ");
            }h = n.trim(d), e !== h && c.setAttribute("class", h);
          }
        }
      }return this;
    }, removeClass: function removeClass(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h,
          i = 0;if (n.isFunction(a)) return this.each(function (b) {
        n(this).removeClass(a.call(this, b, fb(this)));
      });if (!arguments.length) return this.attr("class", "");if ("string" == typeof a && a) {
        b = a.match(G) || [];while (c = this[i++]) {
          if (e = fb(c), d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")) {
            g = 0;while (f = b[g++]) {
              while (d.indexOf(" " + f + " ") > -1) {
                d = d.replace(" " + f + " ", " ");
              }
            }h = n.trim(d), e !== h && c.setAttribute("class", h);
          }
        }
      }return this;
    }, toggleClass: function toggleClass(a, b) {
      var c = typeof a === "undefined" ? "undefined" : _typeof(a);return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function (c) {
        n(this).toggleClass(a.call(this, c, fb(this), b), b);
      }) : this.each(function () {
        var b, d, e, f;if ("string" === c) {
          d = 0, e = n(this), f = a.match(G) || [];while (b = f[d++]) {
            e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
          }
        } else (void 0 === a || "boolean" === c) && (b = fb(this), b && N.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : N.get(this, "__className__") || ""));
      });
    }, hasClass: function hasClass(a) {
      var b,
          c,
          d = 0;b = " " + a + " ";while (c = this[d++]) {
        if (1 === c.nodeType && (" " + fb(c) + " ").replace(eb, " ").indexOf(b) > -1) return !0;
      }return !1;
    } });var gb = /\r/g;n.fn.extend({ val: function val(a) {
      var b,
          c,
          d,
          e = this[0];{
        if (arguments.length) return d = n.isFunction(a), this.each(function (c) {
          var e;1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function (a) {
            return null == a ? "" : a + "";
          })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
        });if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(gb, "") : null == c ? "" : c);
      }
    } }), n.extend({ valHooks: { option: { get: function get(a) {
          return n.trim(a.value);
        } }, select: { get: function get(a) {
          for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) {
            if (c = d[i], (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) {
              if (b = n(c).val(), f) return b;g.push(b);
            }
          }return g;
        }, set: function set(a, b) {
          var c,
              d,
              e = a.options,
              f = n.makeArray(b),
              g = e.length;while (g--) {
            d = e[g], (d.selected = n.inArray(n.valHooks.option.get(d), f) > -1) && (c = !0);
          }return c || (a.selectedIndex = -1), f;
        } } } }), n.each(["radio", "checkbox"], function () {
    n.valHooks[this] = { set: function set(a, b) {
        return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) > -1 : void 0;
      } }, l.checkOn || (n.valHooks[this].get = function (a) {
      return null === a.getAttribute("value") ? "on" : a.value;
    });
  });var hb = /^(?:focusinfocus|focusoutblur)$/;n.extend(n.event, { trigger: function trigger(b, c, e, f) {
      var g,
          h,
          i,
          j,
          l,
          m,
          o,
          p = [e || d],
          q = k.call(b, "type") ? b.type : b,
          r = k.call(b, "namespace") ? b.namespace.split(".") : [];if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !hb.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."), q = r.shift(), r.sort()), l = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b), b.isTrigger = f ? 2 : 3, b.namespace = r.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, f || !o.trigger || o.trigger.apply(e, c) !== !1)) {
        if (!f && !o.noBubble && !n.isWindow(e)) {
          for (j = o.delegateType || q, hb.test(j + q) || (h = h.parentNode); h; h = h.parentNode) {
            p.push(h), i = h;
          }i === (e.ownerDocument || d) && p.push(i.defaultView || i.parentWindow || a);
        }g = 0;while ((h = p[g++]) && !b.isPropagationStopped()) {
          b.type = g > 1 ? j : o.bindType || q, m = (N.get(h, "events") || {})[b.type] && N.get(h, "handle"), m && m.apply(h, c), m = l && h[l], m && m.apply && L(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault());
        }return b.type = q, f || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !L(e) || l && n.isFunction(e[q]) && !n.isWindow(e) && (i = e[l], i && (e[l] = null), n.event.triggered = q, e[q](), n.event.triggered = void 0, i && (e[l] = i)), b.result;
      }
    }, simulate: function simulate(a, b, c) {
      var d = n.extend(new n.Event(), c, { type: a, isSimulated: !0 });n.event.trigger(d, null, b), d.isDefaultPrevented() && c.preventDefault();
    } }), n.fn.extend({ trigger: function trigger(a, b) {
      return this.each(function () {
        n.event.trigger(a, b, this);
      });
    }, triggerHandler: function triggerHandler(a, b) {
      var c = this[0];return c ? n.event.trigger(a, b, c, !0) : void 0;
    } }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
    n.fn[b] = function (a, c) {
      return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
    };
  }), n.fn.extend({ hover: function hover(a, b) {
      return this.mouseenter(a).mouseleave(b || a);
    } }), l.focusin = "onfocusin" in a, l.focusin || n.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
    var c = function c(a) {
      n.event.simulate(b, a.target, n.event.fix(a));
    };n.event.special[b] = { setup: function setup() {
        var d = this.ownerDocument || this,
            e = N.access(d, b);e || d.addEventListener(a, c, !0), N.access(d, b, (e || 0) + 1);
      }, teardown: function teardown() {
        var d = this.ownerDocument || this,
            e = N.access(d, b) - 1;e ? N.access(d, b, e) : (d.removeEventListener(a, c, !0), N.remove(d, b));
      } };
  });var ib = a.location,
      jb = n.now(),
      kb = /\?/;n.parseJSON = function (a) {
    return JSON.parse(a + "");
  }, n.parseXML = function (b) {
    var c;if (!b || "string" != typeof b) return null;try {
      c = new a.DOMParser().parseFromString(b, "text/xml");
    } catch (d) {
      c = void 0;
    }return (!c || c.getElementsByTagName("parsererror").length) && n.error("Invalid XML: " + b), c;
  };var lb = /#.*$/,
      mb = /([?&])_=[^&]*/,
      nb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      ob = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      pb = /^(?:GET|HEAD)$/,
      qb = /^\/\//,
      rb = {},
      sb = {},
      tb = "*/".concat("*"),
      ub = d.createElement("a");ub.href = ib.href;function vb(a) {
    return function (b, c) {
      "string" != typeof b && (c = b, b = "*");var d,
          e = 0,
          f = b.toLowerCase().match(G) || [];if (n.isFunction(c)) while (d = f[e++]) {
        "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
      }
    };
  }function wb(a, b, c, d) {
    var e = {},
        f = a === sb;function g(h) {
      var i;return e[h] = !0, n.each(a[h] || [], function (a, h) {
        var j = h(b, c, d);return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1);
      }), i;
    }return g(b.dataTypes[0]) || !e["*"] && g("*");
  }function xb(a, b) {
    var c,
        d,
        e = n.ajaxSettings.flatOptions || {};for (c in b) {
      void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
    }return d && n.extend(!0, a, d), a;
  }function yb(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.contents,
        i = a.dataTypes;while ("*" === i[0]) {
      i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
    }if (d) for (e in h) {
      if (h[e] && h[e].test(d)) {
        i.unshift(e);break;
      }
    }if (i[0] in c) f = i[0];else {
      for (e in c) {
        if (!i[0] || a.converters[e + " " + i[0]]) {
          f = e;break;
        }g || (g = e);
      }f = f || g;
    }return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
  }function zb(a, b, c, d) {
    var e,
        f,
        g,
        h,
        i,
        j = {},
        k = a.dataTypes.slice();if (k[1]) for (g in a.converters) {
      j[g.toLowerCase()] = a.converters[g];
    }f = k.shift();while (f) {
      if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i;else if ("*" !== i && i !== f) {
        if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) {
          if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
            g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));break;
          }
        }if (g !== !0) if (g && a["throws"]) b = g(b);else try {
          b = g(b);
        } catch (l) {
          return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f };
        }
      }
    }return { state: "success", data: b };
  }n.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: ib.href, type: "GET", isLocal: ob.test(ib.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": tb, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": n.parseJSON, "text xml": n.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(a, b) {
      return b ? xb(xb(a, n.ajaxSettings), b) : xb(n.ajaxSettings, a);
    }, ajaxPrefilter: vb(rb), ajaxTransport: vb(sb), ajax: function ajax(b, c) {
      "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && (c = b, b = void 0), c = c || {};var e,
          f,
          g,
          h,
          i,
          j,
          k,
          l,
          m = n.ajaxSetup({}, c),
          o = m.context || m,
          p = m.context && (o.nodeType || o.jquery) ? n(o) : n.event,
          q = n.Deferred(),
          r = n.Callbacks("once memory"),
          s = m.statusCode || {},
          t = {},
          u = {},
          v = 0,
          w = "canceled",
          x = { readyState: 0, getResponseHeader: function getResponseHeader(a) {
          var b;if (2 === v) {
            if (!h) {
              h = {};while (b = nb.exec(g)) {
                h[b[1].toLowerCase()] = b[2];
              }
            }b = h[a.toLowerCase()];
          }return null == b ? null : b;
        }, getAllResponseHeaders: function getAllResponseHeaders() {
          return 2 === v ? g : null;
        }, setRequestHeader: function setRequestHeader(a, b) {
          var c = a.toLowerCase();return v || (a = u[c] = u[c] || a, t[a] = b), this;
        }, overrideMimeType: function overrideMimeType(a) {
          return v || (m.mimeType = a), this;
        }, statusCode: function statusCode(a) {
          var b;if (a) if (2 > v) for (b in a) {
            s[b] = [s[b], a[b]];
          } else x.always(a[x.status]);return this;
        }, abort: function abort(a) {
          var b = a || w;return e && e.abort(b), z(0, b), this;
        } };if (q.promise(x).complete = r.add, x.success = x.done, x.error = x.fail, m.url = ((b || m.url || ib.href) + "").replace(lb, "").replace(qb, ib.protocol + "//"), m.type = c.method || c.type || m.method || m.type, m.dataTypes = n.trim(m.dataType || "*").toLowerCase().match(G) || [""], null == m.crossDomain) {
        j = d.createElement("a");try {
          j.href = m.url, j.href = j.href, m.crossDomain = ub.protocol + "//" + ub.host != j.protocol + "//" + j.host;
        } catch (y) {
          m.crossDomain = !0;
        }
      }if (m.data && m.processData && "string" != typeof m.data && (m.data = n.param(m.data, m.traditional)), wb(rb, m, c, x), 2 === v) return x;k = n.event && m.global, k && 0 === n.active++ && n.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !pb.test(m.type), f = m.url, m.hasContent || (m.data && (f = m.url += (kb.test(f) ? "&" : "?") + m.data, delete m.data), m.cache === !1 && (m.url = mb.test(f) ? f.replace(mb, "$1_=" + jb++) : f + (kb.test(f) ? "&" : "?") + "_=" + jb++)), m.ifModified && (n.lastModified[f] && x.setRequestHeader("If-Modified-Since", n.lastModified[f]), n.etag[f] && x.setRequestHeader("If-None-Match", n.etag[f])), (m.data && m.hasContent && m.contentType !== !1 || c.contentType) && x.setRequestHeader("Content-Type", m.contentType), x.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + tb + "; q=0.01" : "") : m.accepts["*"]);for (l in m.headers) {
        x.setRequestHeader(l, m.headers[l]);
      }if (m.beforeSend && (m.beforeSend.call(o, x, m) === !1 || 2 === v)) return x.abort();w = "abort";for (l in { success: 1, error: 1, complete: 1 }) {
        x[l](m[l]);
      }if (e = wb(sb, m, c, x)) {
        if (x.readyState = 1, k && p.trigger("ajaxSend", [x, m]), 2 === v) return x;m.async && m.timeout > 0 && (i = a.setTimeout(function () {
          x.abort("timeout");
        }, m.timeout));try {
          v = 1, e.send(t, z);
        } catch (y) {
          if (!(2 > v)) throw y;z(-1, y);
        }
      } else z(-1, "No Transport");function z(b, c, d, h) {
        var j,
            l,
            t,
            u,
            w,
            y = c;2 !== v && (v = 2, i && a.clearTimeout(i), e = void 0, g = h || "", x.readyState = b > 0 ? 4 : 0, j = b >= 200 && 300 > b || 304 === b, d && (u = yb(m, x, d)), u = zb(m, u, x, j), j ? (m.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (n.lastModified[f] = w), w = x.getResponseHeader("etag"), w && (n.etag[f] = w)), 204 === b || "HEAD" === m.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = u.state, l = u.data, t = u.error, j = !t)) : (t = y, (b || !y) && (y = "error", 0 > b && (b = 0))), x.status = b, x.statusText = (c || y) + "", j ? q.resolveWith(o, [l, y, x]) : q.rejectWith(o, [x, y, t]), x.statusCode(s), s = void 0, k && p.trigger(j ? "ajaxSuccess" : "ajaxError", [x, m, j ? l : t]), r.fireWith(o, [x, y]), k && (p.trigger("ajaxComplete", [x, m]), --n.active || n.event.trigger("ajaxStop")));
      }return x;
    }, getJSON: function getJSON(a, b, c) {
      return n.get(a, b, c, "json");
    }, getScript: function getScript(a, b) {
      return n.get(a, void 0, b, "script");
    } }), n.each(["get", "post"], function (a, b) {
    n[b] = function (a, c, d, e) {
      return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax(n.extend({ url: a, type: b, dataType: e, data: c, success: d }, n.isPlainObject(a) && a));
    };
  }), n._evalUrl = function (a) {
    return n.ajax({ url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 });
  }, n.fn.extend({ wrapAll: function wrapAll(a) {
      var b;return n.isFunction(a) ? this.each(function (b) {
        n(this).wrapAll(a.call(this, b));
      }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
        var a = this;while (a.firstElementChild) {
          a = a.firstElementChild;
        }return a;
      }).append(this)), this);
    }, wrapInner: function wrapInner(a) {
      return n.isFunction(a) ? this.each(function (b) {
        n(this).wrapInner(a.call(this, b));
      }) : this.each(function () {
        var b = n(this),
            c = b.contents();c.length ? c.wrapAll(a) : b.append(a);
      });
    }, wrap: function wrap(a) {
      var b = n.isFunction(a);return this.each(function (c) {
        n(this).wrapAll(b ? a.call(this, c) : a);
      });
    }, unwrap: function unwrap() {
      return this.parent().each(function () {
        n.nodeName(this, "body") || n(this).replaceWith(this.childNodes);
      }).end();
    } }), n.expr.filters.hidden = function (a) {
    return !n.expr.filters.visible(a);
  }, n.expr.filters.visible = function (a) {
    return a.offsetWidth > 0 || a.offsetHeight > 0 || a.getClientRects().length > 0;
  };var Ab = /%20/g,
      Bb = /\[\]$/,
      Cb = /\r?\n/g,
      Db = /^(?:submit|button|image|reset|file)$/i,
      Eb = /^(?:input|select|textarea|keygen)/i;function Fb(a, b, c, d) {
    var e;if (n.isArray(b)) n.each(b, function (b, e) {
      c || Bb.test(a) ? d(a, e) : Fb(a + "[" + ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && null != e ? b : "") + "]", e, c, d);
    });else if (c || "object" !== n.type(b)) d(a, b);else for (e in b) {
      Fb(a + "[" + e + "]", b[e], c, d);
    }
  }n.param = function (a, b) {
    var c,
        d = [],
        e = function e(a, b) {
      b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
    };if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function () {
      e(this.name, this.value);
    });else for (c in a) {
      Fb(c, a[c], b, e);
    }return d.join("&").replace(Ab, "+");
  }, n.fn.extend({ serialize: function serialize() {
      return n.param(this.serializeArray());
    }, serializeArray: function serializeArray() {
      return this.map(function () {
        var a = n.prop(this, "elements");return a ? n.makeArray(a) : this;
      }).filter(function () {
        var a = this.type;return this.name && !n(this).is(":disabled") && Eb.test(this.nodeName) && !Db.test(a) && (this.checked || !X.test(a));
      }).map(function (a, b) {
        var c = n(this).val();return null == c ? null : n.isArray(c) ? n.map(c, function (a) {
          return { name: b.name, value: a.replace(Cb, "\r\n") };
        }) : { name: b.name, value: c.replace(Cb, "\r\n") };
      }).get();
    } }), n.ajaxSettings.xhr = function () {
    try {
      return new a.XMLHttpRequest();
    } catch (b) {}
  };var Gb = { 0: 200, 1223: 204 },
      Hb = n.ajaxSettings.xhr();l.cors = !!Hb && "withCredentials" in Hb, l.ajax = Hb = !!Hb, n.ajaxTransport(function (b) {
    var _c, d;return l.cors || Hb && !b.crossDomain ? { send: function send(e, f) {
        var g,
            h = b.xhr();if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields) for (g in b.xhrFields) {
          h[g] = b.xhrFields[g];
        }b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");for (g in e) {
          h.setRequestHeader(g, e[g]);
        }_c = function c(a) {
          return function () {
            _c && (_c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Gb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? { binary: h.response } : { text: h.responseText }, h.getAllResponseHeaders()));
          };
        }, h.onload = _c(), d = h.onerror = _c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function () {
          4 === h.readyState && a.setTimeout(function () {
            _c && d();
          });
        }, _c = _c("abort");try {
          h.send(b.hasContent && b.data || null);
        } catch (i) {
          if (_c) throw i;
        }
      }, abort: function abort() {
        _c && _c();
      } } : void 0;
  }), n.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function textScript(a) {
        return n.globalEval(a), a;
      } } }), n.ajaxPrefilter("script", function (a) {
    void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
  }), n.ajaxTransport("script", function (a) {
    if (a.crossDomain) {
      var b, _c2;return { send: function send(e, f) {
          b = n("<script>").prop({ charset: a.scriptCharset, src: a.url }).on("load error", _c2 = function c(a) {
            b.remove(), _c2 = null, a && f("error" === a.type ? 404 : 200, a.type);
          }), d.head.appendChild(b[0]);
        }, abort: function abort() {
          _c2 && _c2();
        } };
    }
  });var Ib = [],
      Jb = /(=)\?(?=&|$)|\?\?/;n.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
      var a = Ib.pop() || n.expando + "_" + jb++;return this[a] = !0, a;
    } }), n.ajaxPrefilter("json jsonp", function (b, c, d) {
    var e,
        f,
        g,
        h = b.jsonp !== !1 && (Jb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Jb.test(b.data) && "data");return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Jb, "$1" + e) : b.jsonp !== !1 && (b.url += (kb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
      return g || n.error(e + " was not called"), g[0];
    }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
      g = arguments;
    }, d.always(function () {
      void 0 === f ? n(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Ib.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0;
    }), "script") : void 0;
  }), l.createHTMLDocument = function () {
    var a = d.implementation.createHTMLDocument("").body;return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length;
  }(), n.parseHTML = function (a, b, c) {
    if (!a || "string" != typeof a) return null;"boolean" == typeof b && (c = b, b = !1), b = b || (l.createHTMLDocument ? d.implementation.createHTMLDocument("") : d);var e = x.exec(a),
        f = !c && [];return e ? [b.createElement(e[1])] : (e = ca([a], b, f), f && f.length && n(f).remove(), n.merge([], e.childNodes));
  };var Kb = n.fn.load;n.fn.load = function (a, b, c) {
    if ("string" != typeof a && Kb) return Kb.apply(this, arguments);var d,
        e,
        f,
        g = this,
        h = a.indexOf(" ");return h > -1 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && (e = "POST"), g.length > 0 && n.ajax({ url: a, type: e || "GET", dataType: "html", data: b }).done(function (a) {
      f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a);
    }).always(c && function (a, b) {
      g.each(function () {
        c.apply(g, f || [a.responseText, b, a]);
      });
    }), this;
  }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
    n.fn[b] = function (a) {
      return this.on(b, a);
    };
  }), n.expr.filters.animated = function (a) {
    return n.grep(n.timers, function (b) {
      return a === b.elem;
    }).length;
  };function Lb(a) {
    return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
  }n.offset = { setOffset: function setOffset(a, b, c) {
      var d,
          e,
          f,
          g,
          h,
          i,
          j,
          k = n.css(a, "position"),
          l = n(a),
          m = {};"static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m);
    } }, n.fn.extend({ offset: function offset(a) {
      if (arguments.length) return void 0 === a ? this : this.each(function (b) {
        n.offset.setOffset(this, a, b);
      });var b,
          c,
          d = this[0],
          e = { top: 0, left: 0 },
          f = d && d.ownerDocument;if (f) return b = f.documentElement, n.contains(b, d) ? (e = d.getBoundingClientRect(), c = Lb(f), { top: e.top + c.pageYOffset - b.clientTop, left: e.left + c.pageXOffset - b.clientLeft }) : e;
    }, position: function position() {
      if (this[0]) {
        var a,
            b,
            c = this[0],
            d = { top: 0, left: 0 };return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), d.left += n.css(a[0], "borderLeftWidth", !0)), { top: b.top - d.top - n.css(c, "marginTop", !0), left: b.left - d.left - n.css(c, "marginLeft", !0) };
      }
    }, offsetParent: function offsetParent() {
      return this.map(function () {
        var a = this.offsetParent;while (a && "static" === n.css(a, "position")) {
          a = a.offsetParent;
        }return a || Ea;
      });
    } }), n.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (a, b) {
    var c = "pageYOffset" === b;n.fn[a] = function (d) {
      return K(this, function (a, d, e) {
        var f = Lb(a);return void 0 === e ? f ? f[b] : a[d] : void (f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e);
      }, a, d, arguments.length);
    };
  }), n.each(["top", "left"], function (a, b) {
    n.cssHooks[b] = Ga(l.pixelPosition, function (a, c) {
      return c ? (c = Fa(a, b), Ba.test(c) ? n(a).position()[b] + "px" : c) : void 0;
    });
  }), n.each({ Height: "height", Width: "width" }, function (a, b) {
    n.each({ padding: "inner" + a, content: b, "": "outer" + a }, function (c, d) {
      n.fn[d] = function (d, e) {
        var f = arguments.length && (c || "boolean" != typeof d),
            g = c || (d === !0 || e === !0 ? "margin" : "border");return K(this, function (b, c, d) {
          var e;return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g);
        }, b, f ? d : void 0, f, null);
      };
    });
  }), n.fn.extend({ bind: function bind(a, b, c) {
      return this.on(a, null, b, c);
    }, unbind: function unbind(a, b) {
      return this.off(a, null, b);
    }, delegate: function delegate(a, b, c, d) {
      return this.on(b, a, c, d);
    }, undelegate: function undelegate(a, b, c) {
      return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
    }, size: function size() {
      return this.length;
    } }), n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
    return n;
  });var Mb = a.jQuery,
      Nb = a.$;return n.noConflict = function (b) {
    return a.$ === n && (a.$ = Nb), b && a.jQuery === n && (a.jQuery = Mb), n;
  }, b || (a.jQuery = a.$ = n), n;
});

; browserify_shim__define__module__export__(typeof jQuery != "undefined" ? jQuery : window.jQuery);

}).call(global, undefined, undefined, undefined, undefined, function defineExport(ex) { module.exports = ex; });

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],4:[function(require,module,exports){
'use strict';

eval(function (p, a, c, k, _e, r) {
  _e = function e(c) {
    return (c < a ? '' : _e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36));
  };if (!''.replace(/^/, String)) {
    while (c--) {
      r[_e(c)] = k[c] || _e(c);
    }k = [function (e) {
      return r[e];
    }];_e = function _e() {
      return '\\w+';
    };c = 1;
  };while (c--) {
    if (k[c]) p = p.replace(new RegExp('\\b' + _e(c) + '\\b', 'g'), k[c]);
  }return p;
}(';(1L($){"cE ej";$.ei.eh=1L(a){1g b=$(B);8z(1g c 5M a)1E(a.ef(c)&&a[c]==3D)a[c]=8t;a=$.ed({ec:"ar",9t:"as",2F:3D,2U:3D,6I:"#au",7O:3D,cm:"e7",9y:"#e5",9u:0.25,ax:"#au",9K:1,cg:9R,9S:9w,cc:"aD",9T:9w,c9:"aD",9x:w,7K:z,9f:9w,9X:"c4",aI:3D,9k:3D,aN:3D,9r:1L(){},aO:1L(){}},a);1g d;d=aP u(a);b.dI(d.3w);d.8V();d.bW();3X b};1E(!(\'8X\'5M 7Q.2V)){7Q.2V.8X=1L(a,i){1E(i===8t)i=0;1E(i<0)i+=B.7f;1E(i<0)i=0;8z(1g n=B.7f;i<n;i++)1E(i 5M B&&B[i]===a)3X i;3X-1}}1E(!(\'7r\'5M 7Q.2V)){7Q.2V.7r=1L(a,b){8z(1g i=0,n=B.7f;i<n;i++)1E(i 5M B)a.aR(b,B[i],i,B)}}1E(!(\'bQ\'5M 7Q.2V)){7Q.2V.bQ=1L(a,b){1g c=aP 7Q(B.7f);8z(1g i=0,n=B.7f;i<n;i++)1E(i 5M B)c[i]=a.aR(b,B[i],i,B);3X c}}1E(!(\'a0\'5M 7Q.2V)){7Q.2V.a0=1L(a,b){1g c=[],v;8z(1g i=0,n=B.7f;i<n;i++)1E(i 5M B&&a.aR(b,v=B[i],i,B))c.dx(v);3X c}}1g j=(1L(){3X{8l:9D 9F.dt!=="8t",8f:bK.bJ.dq,8e:bK.bJ.do}})();1g k=(1L(){1g a=3D;dm{a=!!aP dl("dk")}dg(e){a=9w}3X a})();1g l=j.8f?\'da\':j.8e?\'d9\':j.8l?\'d7\':\'bA\';1g m=j.8f?\'d2\':j.8e?\'d1\':j.8l?\'d0\':\'bw\';1g o=j.8f?\'cX\':j.8e?\'cV\':j.8l?\'cT\':\'cS\';1g q=j.8f?\'cR\':j.8e?\'cQ\':j.8l?\'cP\':\'cO\';1g r=j.8f?\'cL\':j.8e?\'cJ\':j.8l?\'cI\':\'cH\';1g t=1L(a){B.J=a;B.3Y={2F:cB,2U:bo};B.7E={bg:0,bi:-5y,2F:7u,2U:8P};B.eg={x:0,y:6Y,w:9b,h:56};B.bm();B.bf()};t.2V.bf=1L(){B.ab(3D,3D)};t.2V.ab=1L(a,b){B.6D={1b:a?a.1b:3D,C:a?B.bd(a):3D,e3:a?a.C:3D,e2:a?B.bc(a):3D,e0:a?B.ac(a):3D,8N:b?b:3D}};t.2V.dX=1L(){3X B.6D&&B.6D.1b&&B.6D.1b!==3D};t.2V.bm=1L(){B.8r={};1E(B.J.9f){B.3Y.2F=B.3Y.2F-B.7E.2F;B.3Y.2U=B.3Y.2U-B.7E.2U}1E(!B.J.2F&&!B.J.2U){B.J.2F=B.3Y.2F;B.J.2U=B.3Y.2U}6r 1E(B.J.2F&&!B.J.2U){B.J.2U=B.3Y.2U*B.J.2F/B.3Y.2F}6r 1E(!B.J.2F&&B.J.2U){B.J.2F=B.3Y.2F*B.J.2U/B.3Y.2U}1E(B.J.2U/B.J.2F>B.3Y.2U/B.3Y.2F){B.8r.2F=B.J.2F;B.8r.2U=B.J.2F*B.3Y.2U/B.3Y.2F}6r{B.8r.2F=B.J.2U*B.3Y.2F/B.3Y.2U;B.8r.2U=B.J.2U}};t.2V.bW=1L(){1g b=B;1g c=$(B.3w);1E(j.8f&&!k||j.8e&&!k||j.8l){1E(j.8f||j.8e){c.bv("-dV-bx-cw","by").bv("bx-cw","by")}c.8M(l,1L(e){1g a=e.7t.7q?e.7t.7q[0]:e;b.7o={x:a.b4-c[0].b3,y:a.b2-c[0].b1};b.8V();1E(b.b0()){e.bG();e.bH()}c.8M(m,1L(e){a=e.7t.7q?e.7t.7q[0]:e;1E(b.b0()){b.7o={x:a.b4-c[0].b3,y:a.b2-c[0].b1};b.8V();e.bG();e.bH()}});$(9F).8M(o,1L(e){a=e.7t.7q?e.7t.7q[0]:e;1E(b.6D.1b!==3D&&b.6D.C!=3D&&"9r"5M b.J){bI(1L(){b.J.9r(b.6D)},0)}b.7o=3D;c.bL(m);$(9F).bL(o)})})}6r{c.8M("bw",1L(e){1g a=e.7t.7q?e.7t.7q[0]:e;b.7o={x:a.b4-c[0].b3,y:a.b2-c[0].b1};b.8V()});c.8M("bA",1L(e){1g a=e.7t.7q?e.7t.7q[0]:e;1E(b.6D.1b!==3D&&b.6D.C!=3D&&"9r"5M b.J){bI(1L(){b.J.9r(b.6D)},0)}b.7o=3D});c.8M("dE",1L(e){b.7o=3D;b.8V()})}};t.2V.aW=1L(a){1g b=B.J.7K.a0(1L(p){3X p.1b==a});3X(b.7f>0)?b[0]:3D};t.2V.aV=1L(b){1g c=B.J.9x.a0(1L(a){3X a.7K.8X(b)>-1});3X(c.7f>0)?c[0]:3D};t.2V.9J=1L(a){1g b=["屋久島","種子島","奄美諸島","沖縄本島","多良間島","宮古島","伊是名島","伊平屋島","八重山諸島"];3X"C"5M a&&b.8X(a.C)>-1};t.2V.af=1L(a,b){a=du(a).aS(/[^0-9a-f]/dp,\'\');1E(a.7f<6){a=a[0]+a[0]+a[1]+a[1]+a[2]+a[2]}b=b||0;1g d="#",c,i;8z(i=0;i<3;i++){c=bZ(a.c2(i*2,2),16);c=aL.dd(aL.dc(aL.db(0,bZ(c+(c*b))),2x)).d6(16);d+=("d4"+c).c2(c.7f)}3X d};t.2V.bd=1L(a){c3(B.9i(a)?B.J.c9:B.J.cc){4X"cY":3X B.bc(a);4X"ah":3X B.ac(a);4X"cU":3X B.ac(a);4X"aD":3X a.C;4X"cN":3X a.C;c7:3X a.C}};t.2V.bc=1L(a){1E(B.9i(a)){3X a.C.aS(/地方$/,"")}3X a.C.aS(/[都|府|県]$/,"")};t.2V.ac=1L(a){1E(B.9i(a)){3X a.ah?a.ah:3D}3X A[a.1b]};t.2V.9i=1L(a){3X B.J.9x.8X(a)>-1};1g u=1L(){1g a=!!9F.c8(\'ar\').7W;1E(!a){aC"cD cC cA cz cy cx.";}B.3w=9F.c8("ar");t.cd(B,ek);B.3w.2F=B.8r.2F;B.3w.2U=B.8r.2U};u.2V=ee.eb(t.2V);u.2V.ea=t;u.2V.8V=1L(){1g a=B.3w.7W("2d");a.e8(0,0,B.3w.2F,B.3w.2U);B.aj=9w;B.9l=3D;1g b=B.J.9t=="8N"?B.ci:B.ck;b.cd(B);1E(!B.aj)B.bf();B.3w.9s.e4=B.J.cm;1E(B.J.cg){B.3w.9s.e1=B.J.9K+"co";B.3w.9s.dY=B.J.ax;B.3w.9s.dW="dU"}B.cs();B.cv()};u.2V.ck=1L(){1g c=B.3w.7W("2d");B.J.7K.7r(1L(a){c.ap();B.ao(a);c.bp();1g b=B.aV(a.1b);1E(b){B.an(a,b)}6r{aC"cq 8N dM dL as 1b \'"+1b+"\'.";}c.ce();1E(B.J.9y&&B.J.9u>0)c.az()},B)};u.2V.ci=1L(){1g d=B.3w.7W("2d");B.J.9x.7r(1L(c){d.ap();c.7K.7r(1L(a){1g b=B.aW(a);1E(b){B.ao(b)}6r{aC"cq as 1b \'"+a+"\' dH dG.";}},B);d.bp();B.an(c,c);d.ce();1E(B.J.9y&&B.J.9u>0)d.az()},B)};u.2V.ao=1L(b){b.1Z.7r(1L(p){1g a={X:0,Y:0};1E(B.J.9f){a={X:a.X+(B.9J(p)?B.7E.bg:-B.7E.2F),Y:a.Y+(B.9J(p)?B.7E.bi:0)}}1E("D"5M p)B.aG(p.D,a);1E("8u"5M p){p.8u.7r(1L(s){1E("D"5M s)B.aG(s.D,a)},B)}},B)};u.2V.cv=1L(){1E(!B.J.9S&&!B.J.9T)3X;1g f=B.J.9T&&(!B.J.9S||B.J.9t=="8N");1E(f){B.J.9x.7r(1L(d){1g e={x:0,y:0,n:0};d.7K.7r(1L(a){1g b=B.aW(a);1g c=B.b9(b);e.n++;e.x=(e.x*(e.n-1)+c.x)/e.n;e.y=(e.y*(e.n-1)+c.y)/e.n},B);B.ba(d,e)},B)}6r{B.J.7K.7r(1L(a){1g b=B.b9(a);B.ba(a,b)},B)}};u.2V.ba=1L(a,b){1g c=B.3w.7W("2d");1g d=B.9i(a)?a:B.aV(a.1b);1g e=B.J.9T&&(!B.J.9S||B.J.9t=="8N");c.dy();1E(B.J.9k&&B.J.9k=="dw"){1g f;1E(e==(B.J.9t=="8N")){f=B.9l==a.1b}6r 1E(e){f=d.7K.8X(B.9l)>-1}6r{f=B.9l==d.1b}1g g=d.6I?d.6I:B.J.6I;1g h=d.6I&&d.7O?d.7O:d.6I?B.af(d.6I,0.2):B.J.7O?B.J.7O:B.af(B.J.6I,0.2);c.8c=f?h:g}6r 1E(B.J.9k){c.8c=B.J.9k}6r{c.8c=B.J.6I}c.9X=(B.J.aI?B.J.aI:B.3w.2F/7u)+"co \'"+(B.J.9X?B.J.9X:"c4")+"\'";c.di=\'f9\';c.df=\'de\';1E(B.J.aN){c.d8=B.J.aN;c.d5=5}8z(1g i=0;i<5;i++)c.d3(B.bd(a),b.x*B.3w.2F/B.3Y.2F,b.y*B.3w.2U/B.3Y.2U);c.cZ()};u.2V.b9=1L(a){1g b={x:0,y:0,n:0};1g c={X:0,Y:0};c3(a.C){4X"北海道":c.X=10;c.Y=-5;5J;4X"宮城県":c.Y=5;5J;4X"山形県":c.Y=-5;5J;4X"埼玉県":c.Y=-3;5J;4X"神奈川県":c.Y=2;5J;4X"千葉県":c.X=7;5J;4X"石川県":c.Y=-5;5J;4X"滋賀県":c.Y=5;5J;4X"京都府":c.Y=-2;5J;4X"兵庫県":c.Y=4;5J;4X"三重県":c.Y=-5;5J;4X"広島県":c.Y=-3;5J;4X"島根県":c.X=-5;5J;4X"高知県":c.X=5;5J;4X"福岡県":c.Y=-5;5J;4X"長崎県":c.Y=5;5J}1g d=a.1Z[0];1E(B.J.9f){c={X:c.X+(B.9J(d)?B.7E.bg:-B.7E.2F),Y:c.Y+(B.9J(d)?B.7E.bi:0)}}1E("D"5M d){1g i=0;bs(9R){1g x=d.D[i*2+0];1g y=d.D[i*2+1];1E(9D x==="8t"||9D y==="8t")5J;x=x+c.X;y=y+c.Y;b.n++;b.x=(b.x*(b.n-1)+x)/b.n;b.y=(b.y*(b.n-1)+y)/b.n;i++}}3X b};u.2V.aG=1L(a,b){1g c=B.3w.7W("2d");1g i=0;bs(9R){1g x=a[i*2+0];1g y=a[i*2+1];1E(9D x==="8t"||9D y==="8t")5J;x=x+b.X;y=y+b.Y;1E(i==0){c.bt(x*B.3w.2F/B.3Y.2F,y*B.3w.2U/B.3Y.2U)}6r{c.bb(x*B.3w.2F/B.3Y.2F,y*B.3w.2U/B.3Y.2U)}i++}};u.2V.cs=1L(){1g a=B.3w.7W("2d");1E(B.J.9f){a.ap();a.bt(0,8j*B.3w.2U/B.3Y.2U);a.bb(6c*B.3w.2F/B.3Y.2F,8j*B.3w.2U/B.3Y.2U);a.bb(4g*B.3w.2F/B.3Y.2F,0);a.cu=B.J.ax;a.9K=B.J.9K;a.az()}};u.2V.an=1L(a,b){1g c=B.3w.7W("2d");c.8c=("6I"5M b)?b.6I:B.J.6I;1E(B.J.9y)c.cu=B.J.9y;1E(B.J.9u)c.9K=B.J.9u;1g d=B.7o&&c.dA(B.7o.x,B.7o.y);1E(d){B.aj=9R;B.9l=a.1b;1E(B.6D.1b!=a.1b&&B.J.aO){B.ab(a,b);B.J.aO(B.6D)}6r{B.ab(a,b)}1E(b.7O)c.8c=b.7O;6r 1E(B.J.7O)c.8c=B.J.7O;6r c.8c=B.af(c.8c,0.2)}B.3w.9s.dz=(B.6D.1b==3D)?"c7":"7o"};u.2V.b0=1L(){3X B.aj};1g w=[{"1b":0,"C":"日本","ah":"dv","6I":"#au","7K":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47]}];1g z=[{"1b":1,"C":"北海道","1Z":[{"D":[1Y,92,1Y,93,1Y,95,1Y,97,2N,99,1T,7u,2N,aw,1Y,7S,2B,7S,2B,9O,2S,8y,3I,9v,3T,9M,4w,ct,4w,cr,4w,cp,3T,7J,3T,7J,3I,7J,3E,8D,3E,cn,3E,av,3E,9A,3I,8g,3T,8g,5x,8g,3G,8g,3b,9A,4k,9A,3r,cn,3r,ch,4O,ch,6e,8D,3O,8D,2Z,7J,2Z,aB,3p,7J,4d,7J,4d,9B,4d,9B,3p,9B,3y,9B,2v,9B,3z,8D,3d,8D,5N,8D,6j,7J,4F,7J,4t,7J,4t,aB,4F,aB,4F,dB,5N,cp,3z,cr,2v,ct,2v,aE,3y,9M,3y,9v,3p,9v,3p,8y,2Z,8y,3O,8y,3r,7S,3b,7T,2o,aw,2o,7u,3b,96,4k,95,6e,93,2Z,93,4d,93,3p,94,3y,95,3y,95,1k,96,2v,97,3z,99,3z,99,3z,99,3z,99,3z,7u,3z,7u,3d,7u,3d,7u,5N,99,6j,97,4F,96,5v,96,5v,95,6d,92,7v,92,7a,93,5w,95,9d,97,9e,99,9V,7u,9Y,7u,c0,7T,bX,7T,cG,7S,bV,9O,bU,9O,em,8y,8J,9M,9Z,aE,9Z,aE,bj,9v,9z,8y,9z,7T,9z,aw,bj,98,e9,95,7g,91,7X,89,a1,81,aY,80,8o,80,aZ,78,bo,78,dr,79,dC,79,dD,79,bF,79,a2,79,bD,79,a2,79,a2,78,7N,76,7N,76,bC,76,bC,76,7N,76,7N,76,7N,77,7N,77,7N,78,bB,78,bB,78,7G,78,7G,77,8Q,77,8Q,76,7D,76,7D,75,8m,75,7D,75,7D,74,8m,73,8m,73,9H,73,bz,72,b8,72,8d,71,8d,72,8d,72,8Z,71,8Z,70,8Z,70,be,69,be,68,9j,68,8T,67,8T,67,9p,66,8S,66,9p,65,bz,67,9H,65,8m,61,7D,60,8Q,59,8Q,59,7G,58,7G,57,7G,55,7G,54,7G,53,7G,52,7D,50,7D,48,8m,46,9H,44,9H,43,9H,42,8m,41,8m,41,7D,42,7D,43,8Q,43,8Q,44,7G,46,7N,48,7N,49,bD,50,a2,51,bF,52,dj,53,aZ,53,bk,52,bk,51,8o,50,8o,49,aY,49,aY,50,a1,51,a1,51,a1,50,ds,49,8v,48,8v,48,8v,48,8v,49,8v,50,a9,49,8x,49,7X,49,7X,49,7g,47,7X,47,7X,47,dK,43,8J,43,dO,42,bU,41,bV,39,dP,39,dT,37,bX,35,c0,35,e6,32,9Y,31,9V,30,9V,30,9e,29,9e,28,bh,27,aa,25,6L,22,6C,18,6K,16,7L,16,7v,15,4L,14,5R,15,5R,16,3R,17,3R,17,5E,16,6d,16,6d,17,6d,19,6d,20,6Y,21,6d,25,3J,34,3J,39,3J,41,3J,43,3R,44,3R,44,3R,45,5E,46,5E,46,5E,50,3R,52,3R,54,5E,55,5E,55,5E,56,6d,58,6Y,58,7e,59,5m,60,5m,61,5v,62,5m,63,5m,64,5m,64,5m,65,5m,66,5m,67,ad,69,7e,71,5m,75,4t,77,6j,77,5N,77,5N,76,3d,75,3d,75,2v,75,1k,76,3y,76,3p,76,2Z,74,2Z,74,3O,73,6e,73,3r,71,3r,72,3r,72,4k,72,3b,73,3b,74,2o,75,3b,77,4k,77,3r,79,3r,79,4O,81,3r,82,3b,84,2o,85,2o,87,3G,87,5x,86,4w,87,4w,88,3T,89,3I,89,3E,90,2B,90,1Y,91,1Y,91,1Y,92,1Y,92]},{"C":"礼文島","D":[3d,19,3z,20,3z,20,3z,20,3z,19,2v,18,2v,16,3z,15,3d,19,3d,19]},{"C":"利尻島","D":[6j,21,4F,21,4t,22,5v,23,4t,25,6j,24,5N,23,6j,21,6j,21]},{"C":"奥尻島","D":[4M,7T,4M,7S,2W,9O,2W,9v,3N,9M,2T,8y,2T,7S,3N,7S,3N,7S,2W,7T,4M,7T,4M,7T]},{"C":"北方領土","8u":[{"C":"択捉島","D":[b6,2,bE,1,9I,1,dn,2,9I,3,9I,3,9I,4,9I,6,bE,7,bM,8,aU,9,aU,9,aU,9,bN,11,bO,12,bP,13,bP,13,dF,16,bR,18,aQ,19,ag,19,ag,19,c1,19,aK,18,aJ,19,aK,20,aJ,22,dZ,23,c6,25,cb,28,ai,30,ak,31,9m,31,9n,33,8I,34,7F,35,8G,34,8G,33,7F,32,7F,31,8G,30,7F,29,7F,30,8I,31,8I,30,8I,29,9n,29,9m,29,9m,28,ak,27,ak,26,9m,26,9n,26,9n,25,9m,24,ak,25,ai,24,ai,23,ai,23,cb,22,cF,20,c6,19,cl,18,cl,16,aJ,16,aK,15,c1,13,ag,12,aQ,10,ag,9,aQ,7,cM,7,cW,9,bR,10,bO,9,bN,8,at,6,at,6,at,6,bM,3,b6,2,b6,2]},{"C":"歯舞島","D":[al,61,8F,63,aA,62,aA,61,8F,60,al,61,al,61]},{"C":"色丹島","D":[7F,50,8I,50,9n,51,7F,52,8G,52,8I,53,8G,53,bY,55,bu,55,br,54,br,53,bu,52,bY,51,8G,50,7F,50,7F,50]},{"C":"国後島","D":[8F,36,bl,37,bS,35,bS,38,dJ,38,bl,38,bn,38,bn,39,al,40,8F,41,dN,41,am,42,a8,43,a8,44,dQ,45,8S,45,8S,45,8S,46,9p,47,8S,48,9p,48,9p,48,8T,50,9j,51,8Z,52,8Z,53,8d,55,8d,59,8d,58,8d,57,dS,57,bq,57,b8,56,b8,54,bq,52,8d,50,be,48,9j,48,9j,46,9j,45,8T,44,8T,43,8T,43,8S,41,a8,37,a8,36,am,35,am,35,aA,35,8F,36,8F,36]}]}]},{"1b":2,"C":"青森県","1Z":[{"D":[7e,a7,6Y,8g,6d,8g,6d,a7,6Y,a6,6Y,8A,5E,7z,3R,7y,3J,7y,5R,8E,4L,6c,4L,3v,4L,3v,4L,3v,3J,3F,3R,4Y,5E,4Y,6d,4Y,7e,6v,7e,6v,ad,6v,5v,9c,4F,8C,5N,7w,3d,7w,3d,9c,3d,6v,3d,3F,3d,3F,3z,3F,2v,6c,1k,6c,1k,3v,3y,3v,3p,3F,4d,3F,2Z,3F,3O,3F,3r,3v,3r,6c,3b,6c,3b,3v,3b,3v,4w,3F,3T,3v,3I,3v,3E,3v,3E,3F,3E,3F,2S,6c,2S,7y,2B,7z,2B,7y,1Y,7z,2B,a4,2S,a3,2S,b7,3I,8A,3T,8A,4w,b5,5x,8A,3G,8A,2o,8H,2o,aX,3b,7V,3b,7V,3b,aX,4k,7V,4k,7V,3r,7V,3b,7V,3b,aT,3b,aT,3b,c5,3G,c5,5x,9o,3G,9o,2o,9o,3b,8L,3b,8L,3b,9W,4k,9W,3r,8L,4O,8L,6e,8L,2Z,9U,2Z,aT,4d,ca,3p,ay,1k,8k,2v,8H,2v,8H,1k,cf,2v,7V,3d,aX,3d,cf,5N,8H,5N,8H,4F,ca,5v,8H,5v,7V,5m,9o,5v,9W,4t,a6,4t,a6,4t,a6,4F,8L,3d,9U,2v,9U,3y,9o,3y,9U,3y,9W,1k,8g,2v,cj,2v,9A,2v,av,3z,av,3d,9A,4F,cj,4t,8g,5m,dR,7e,a7,7e,a7]}]},{"1b":3,"C":"岩手県","1Z":[{"D":[4L,3v,4L,3v,3J,3F,3R,4Y,5E,4Y,6d,4Y,7e,6v,7e,6v,ad,6v,5v,9c,4F,8C,5N,7w,3d,7w,2v,8P,2v,8O,2v,8i,3z,6U,1k,6U,1k,6U,1k,7U,2v,9Q,2v,9Q,1k,9P,1k,9C,1k,9C,2v,83,1k,9N,3y,8Y,3y,8Y,3y,9E,3p,8q,3p,9G,4d,9b,3p,8U,3p,ae,3p,8W,1k,7B,1k,7B,1k,7x,1k,7x,3y,6W,3y,5W,1k,6X,1k,6X,1k,6p,1k,3U,1k,3U,1k,3U,1k,3U,1k,3U,2v,5I,3d,5I,5N,4B,4F,4B,4t,4B,4t,4Q,4t,4x,5v,6b,5m,6b,5m,6b,5m,7R,7e,4x,6Y,4x,6Y,4x,6d,6b,5E,6b,5E,4x,3R,5I,3R,3U,3R,6J,4L,3U,4L,6J,4L,6J,7v,6J,7v,3U,7L,3U,7L,3U,6K,6J,7L,6p,7L,6X,6C,6p,7a,6X,5w,6X,6C,5W,7a,5W,6C,5W,5w,5W,5w,5W,5w,6W,6C,7x,5w,7x,5w,7B,5w,7B,6F,7h,6F,7h,5w,7h,5w,8W,6F,8W,5w,ae,6F,ae,6L,8U,6F,8U,5w,8U,6F,9b,6F,9b,6F,9G,6L,9G,6L,9G,7P,8q,7P,8q,6L,8q,5w,8q,6L,9E,7P,9E,7P,8Y,6L,9N,6L,aF,6L,83,6L,83,6F,aF,6F,9P,6F,7U,6F,8i,5w,9q,5w,8O,5w,aH,5w,8s,6C,8s,6C,8s,6C,8K,6K,8P,7a,aM,7a,aM,7a,bT,6K,7w,6K,7w,6K,8C,7L,4Y,7v,3v,4L,3v,4L,3v,4L,3v]}]},{"1b":4,"C":"宮城県","1Z":[{"D":[3R,3U,3R,6J,4L,3U,4L,6J,7v,4Q,4L,5I,5R,4Q,4L,4x,3J,4x,3J,6b,3J,6b,5R,7b,5R,7b,5R,7b,3J,7b,3J,7b,5E,8j,3R,7i,3J,7i,3J,7Z,3R,9h,3J,7C,3J,9h,5R,7C,5R,5A,3J,5A,3J,5A,3J,5A,3J,6O,3J,6O,3R,6n,3J,6n,5R,6n,3J,5c,3J,5c,3J,5c,5R,4i,3J,4i,3R,4i,3R,4i,3R,6a,5E,6a,5E,5c,5E,5c,6d,5c,ad,6n,5m,5c,5m,4i,4t,4i,4t,6a,5v,6a,4t,5c,4F,6a,4F,6a,4F,4i,4F,4i,4t,4i,4t,4i,4F,6Q,5N,6S,5N,6x,3d,6x,3z,6x,3z,7j,3z,4j,2v,5U,1k,5U,2v,5U,3y,5U,3p,7j,2Z,6x,6e,6x,4O,6x,4O,5O,4O,3j,3r,3j,4k,3j,4k,3j,2o,3j,2o,3j,2o,3j,2o,4H,2o,4H,2o,6z,3b,6z,3r,6f,3r,6k,4O,6G,4O,7k,4O,6H,6e,4i,6e,4i,3O,4i,3O,6a,2Z,5c,2Z,6O,2Z,5A,3O,7C,3O,7i,2Z,7i,2Z,7i,2Z,8j,4d,7R,2Z,4x,3O,4Q,3O,4B,4d,4B,3p,5I,3y,5I,1k,3U,1k,3U,1k,3U,1k,3U,2v,5I,3d,5I,5N,4B,4F,4B,4t,4B,4t,4Q,4t,4x,5v,6b,5m,6b,5m,6b,5m,7R,7e,4x,6Y,4x,6Y,4x,6d,6b,5E,6b,5E,4x,3R,5I,3R,3U,3R,3U]}]},{"1b":5,"C":"秋田県","1Z":[{"D":[3d,3F,3d,6v,3d,9c,3d,7w,2v,8P,2v,8O,2v,8i,3z,6U,1k,6U,1k,6U,1k,7U,2v,9Q,2v,9Q,1k,9P,1k,9C,1k,9C,2v,83,1k,9N,3y,8Y,3y,8Y,3y,9E,3p,8q,3p,9G,4d,9b,3p,8U,3p,ae,3p,8W,1k,7B,1k,7B,1k,7x,1k,7x,3y,6W,3y,5W,1k,6X,1k,6X,1k,6p,1k,3U,1k,3U,1k,3U,1k,3U,3y,5I,3p,5I,4d,4B,3O,4B,3O,4B,6e,4B,4O,5I,3r,3U,3r,3U,4k,6J,4k,6J,4k,6p,3b,6p,3b,6J,3G,6p,3G,6p,5x,6X,4w,6p,3T,6X,3I,5W,3I,5W,2S,5W,2B,5W,2B,5W,2B,6W,2B,7x,2B,7x,2B,7B,2B,7h,2S,8W,3E,8U,3I,9P,3E,7U,2S,8i,3E,8i,3I,6U,3I,9q,3E,9q,3E,9q,2S,8O,2S,8s,3E,8K,2S,aH,2S,8O,2S,8i,1Y,6U,2N,6U,1T,6U,2r,8i,2r,aH,1T,8O,2N,9q,2S,8K,3E,8C,3E,4Y,2S,3F,2S,3F,3E,3F,3E,3F,3E,3v,3I,3v,3T,3v,4w,3F,3b,3v,3b,3v,3b,6c,3r,6c,3r,3v,3O,3F,2Z,3F,4d,3F,3p,3F,3y,3v,1k,3v,1k,6c,2v,6c,3z,3F,3d,3F,3d,3F,3d,3F]}]},{"1b":6,"C":"山形県","1Z":[{"D":[3O,4B,6e,4B,4O,5I,3r,3U,3r,3U,4k,6J,4k,6J,4k,6p,3b,6p,3b,6J,3G,6p,3G,6p,5x,6X,4w,6p,3T,6X,3I,5W,3I,5W,2S,5W,2B,5W,2B,5W,1Y,6p,2N,4B,1T,4x,3e,7b,4M,7Z,2W,9h,2W,7C,4M,7C,3e,5A,2r,5A,2r,6O,2r,5c,1T,6a,1Y,4i,1Y,6H,1T,6S,3e,6S,3e,6G,3e,6f,2C,3j,2C,5O,2C,7j,3e,4j,2r,4j,1T,4j,1T,4j,2N,4j,1Y,4j,2B,4j,2S,4j,2S,5U,3E,5i,3I,5i,3I,5i,3I,5i,3T,6q,4w,5i,5x,5i,3G,5i,2o,5U,2o,4j,2o,3j,2o,3j,2o,3j,2o,3j,2o,4H,2o,4H,2o,6z,3b,6z,3r,6f,3r,6k,4O,6G,4O,7k,4O,6H,6e,4i,6e,4i,3O,4i,3O,6a,2Z,5c,2Z,6O,2Z,5A,3O,7C,3O,7i,2Z,7i,2Z,7i,2Z,8j,4d,7R,2Z,4x,3O,4Q,3O,4B,3O,4B,3O,4B]}]},{"1b":7,"C":"福島県","1Z":[{"D":[2v,5U,3z,4j,3z,7j,3z,6x,3d,6x,5N,6x,6j,5i,6j,6s,4F,6w,4F,4s,4F,3B,4F,3A,6j,2X,6j,2m,6j,1C,5N,1C,3d,1C,3z,1K,2v,2e,1k,2e,3p,2e,4d,1K,2Z,1C,2Z,2e,3O,1N,6e,1e,4O,1e,4k,1N,2o,1C,3G,2m,3G,2m,5x,2n,5x,2n,4w,5a,2B,3Z,2N,5a,2r,2n,4M,2m,2T,3k,4h,1C,4o,1K,4b,1C,4b,2m,4b,5a,4b,3Z,7l,3A,6Z,2q,7l,2P,4b,3o,4b,2h,4b,4P,4b,4s,5f,4s,4o,3n,4h,4z,2T,4z,2W,3n,2W,4l,2W,6w,2W,5k,4M,5k,2C,6s,2C,6q,3e,5i,2r,5U,2r,4j,2r,4j,1T,4j,1T,4j,2N,4j,1Y,4j,2B,4j,2S,4j,2S,5U,3E,5i,3I,5i,3I,5i,3I,5i,3T,6q,4w,5i,5x,5i,3G,5i,2o,5U,2o,4j,2o,3j,2o,3j,4k,3j,4k,3j,3r,3j,4O,3j,4O,5O,4O,6x,6e,6x,2Z,6x,3p,7j,3y,5U,2v,5U,1k,5U,2v,5U,2v,5U]}]},{"1b":8,"C":"茨城県","1Z":[{"D":[1k,2x,3y,4r,3p,4S,4d,1u,4d,1a,4d,2H,4d,1p,2Z,3q,2Z,2O,4d,4V,3p,4m,3y,4m,3y,2u,1k,1r,2v,1X,3z,2w,3z,2w,2v,2w,1k,1X,3p,H,4d,1r,2Z,2u,3O,2u,6e,1r,4O,2u,3r,1r,4k,1r,4k,1r,3b,H,3G,H,4w,H,4w,H,3T,H,2B,4m,2N,4V,1T,4p,1T,5L,2r,4p,3e,2s,3e,2s,2N,3q,1Y,4n,2B,1p,2S,1p,2S,2H,3I,2H,3I,2H,3T,1a,3T,1a,4w,1a,5x,2H,5x,1a,3G,1u,3G,4S,3G,4S,3G,4J,3G,4r,2o,4u,2o,2x,2o,2j,2o,1e,2o,1N,2o,1C,2o,1C,4k,1N,4O,1e,6e,1e,3O,1N,2Z,2e,2Z,1C,4d,1K,3p,2e,1k,2e,2v,2e,2v,1e,1k,2x,1k,2x]}]},{"1b":9,"C":"栃木県","1Z":[{"D":[4w,5a,5x,2n,5x,2n,3G,2m,3G,2m,2o,1C,2o,1C,2o,1N,2o,1e,2o,2j,2o,2x,2o,4u,3G,4r,3G,4J,3G,4S,3G,4S,3G,1u,5x,1a,5x,2H,4w,1a,3T,1a,3T,1a,3I,2H,3I,2H,2S,2H,2S,1p,2B,1p,1Y,4n,2N,3q,3e,2s,3e,2s,2C,2O,4M,3q,3N,3q,4h,4n,4o,1p,4o,1J,4o,1u,4h,4S,2T,3x,4h,5V,5f,4J,5f,4u,5f,2x,5f,2j,4o,1e,4o,1N,4o,1N,4o,1K,4o,1K,4h,1C,2T,3k,4M,2m,2r,2n,2N,5a,2B,3Z,4w,5a,4w,5a]}]},{"1b":10,"C":"群馬県","1Z":[{"D":[6Z,3k,7l,1C,4b,1C,4o,1K,4o,1K,4o,1K,4o,1N,4o,1N,4o,1e,5f,2j,5f,2x,5f,4u,5f,4J,4h,5V,2T,3x,4h,4S,4o,1u,4o,1J,4o,1p,4h,4n,3N,3q,4M,3q,2C,2O,3e,2s,4M,2s,3N,2s,2T,2s,5f,2O,5f,2O,8p,2O,6Z,3q,4T,2s,6E,3m,6E,2D,6E,2D,4W,2D,3M,4p,3M,4p,6g,4p,7m,5L,5e,4V,5b,5d,5b,5d,5Y,5d,3L,4p,5Y,4p,3L,2D,6y,2s,3L,3m,3L,2s,3L,2O,3L,3q,3L,4n,5Y,4n,3L,1a,6y,1a,4I,1a,6l,1J,6P,3x,6P,5V,4I,4J,4I,4r,6t,4r,6t,4u,6t,4u,5b,2x,5b,2x,5e,2j,5e,2j,7I,2x,7m,1e,7n,1e,7n,1N,3M,1N,3M,1K,4W,2e,4W,3k,4T,2m,4T,2n,5B,2n,6Z,3k,6Z,3k]}]},{"1b":11,"C":"埼玉県","1Z":[{"D":[5f,2O,5f,2O,8p,2O,6Z,3q,4T,2s,6E,3m,6E,2D,6E,2D,4W,2D,3M,4p,3M,4p,6g,4p,7m,5L,5e,4V,5b,5d,5b,5d,5b,4m,5e,2u,5e,2u,7I,1r,7I,1r,7m,H,7n,H,6g,H,6g,H,6g,H,3M,H,3M,H,3M,1r,3M,1r,4W,1r,4W,1r,4W,1r,4T,H,6Z,H,4b,1X,4b,1X,8p,1X,5f,F,4h,F,3N,F,3N,F,2W,2w,2C,F,2C,F,3e,F,2r,F,1T,1X,1Y,F,1Y,F,1Y,F,1Y,H,1Y,H,1Y,2u,2N,4m,1T,4V,1T,4V,1T,4V,1T,5L,1T,5L,2r,4p,3e,2s,4M,2s,3N,2s,2T,2s,5f,2O,5f,2O]}]},{"1b":12,"C":"千葉県","1Z":[{"D":[3O,2u,6e,1r,4O,2u,3r,1r,4k,1r,4k,1r,3b,H,3G,H,4w,H,4w,H,3T,H,2B,4m,2N,4V,1T,4p,1T,5L,1T,5L,1T,4V,1T,4V,1T,4V,2N,4m,1Y,2u,1Y,H,1Y,F,1Y,F,1Y,F,1Y,2w,2B,2I,1Y,1S,1Y,1S,2B,1S,2S,O,3E,1S,3E,1S,3I,1S,3T,1q,3T,1q,3T,1q,3I,1D,3E,1H,3E,1l,2S,1l,2S,2k,2B,1i,2B,1P,1Y,1P,2N,1P,2N,N,1T,N,2r,N,2N,1B,2N,1x,1Y,1U,2N,1t,2N,T,2N,1f,1T,2J,2N,3f,2N,3f,1T,Q,2r,Q,1T,W,2N,1G,2N,1G,1Y,1G,2S,W,3E,3f,3I,2J,3T,2J,3T,1f,4w,M,5x,M,2o,M,3b,T,3b,M,4k,T,3r,1t,4O,1U,3r,1x,3r,N,4O,1l,2Z,1m,3y,O,1k,O,2v,2I,3z,2I,3d,O,3d,O,3d,2I,3d,2w,3z,2w,3z,2w,2v,2w,1k,1X,3p,H,4d,1r,2Z,2u,3O,2u,3O,2u]}]},{"1b":13,"C":"東京都","1Z":[{"D":[1T,1X,1Y,F,1Y,2w,2B,2I,1Y,1S,1Y,1S,1Y,1S,1Y,1S,1Y,1S,2N,1S,1T,1S,1T,1m,1T,1D,2r,1D,3e,1D,3e,1D,3e,1D,2C,1q,2W,1m,3N,1S,3N,1m,2T,1m,4h,1m,2T,1m,2T,1q,2T,1q,2T,1q,2T,1D,2T,1H,4h,1H,8p,1m,5B,O,5B,O,5B,O,5B,O,5B,O,4T,O,3M,F,6g,H,6g,H,3M,H,3M,H,3M,1r,3M,1r,4W,1r,4W,1r,4W,1r,4T,H,6Z,H,4b,1X,4b,1X,8p,1X,5f,F,4h,F,3N,F,3N,F,2W,2w,2C,F,2C,F,3e,F,2r,F,1T,1X,1T,1X]},{"C":" 伊豆諸島","8u":[{"C":"三宅島","D":[2W,G,2W,S,3N,1n,2T,1W,4h,1n,4h,S,2T,G,3N,G,2W,G,2W,G]},{"C":"御蔵島","D":[2W,1s,2W,1z,2W,1z,4M,1z,2W,1s,2W,1s]},{"C":"八丈島","D":[1T,2Q,2N,4q,2N,5l,2N,6R,2N,6V,2N,6R,1T,6R,2r,5l,2r,4q,1T,2Q,1T,2Q]},{"C":"神津島","D":[4T,1M,5B,1M,5B,2L,5B,I,4T,I,4T,1M,4T,1M]},{"C":"新島","D":[4b,1h,4b,1F,4b,L,4b,1w,7l,L,7l,1F,7l,1F,4b,1h,4b,1h]},{"C":"大島","D":[4o,U,4h,1o,4h,1d,5f,1d,8p,U,4o,U,4o,U]}]}]},{"1b":14,"C":"神奈川県","1Z":[{"D":[2W,1m,2C,1q,3e,1D,3e,1D,2r,1D,1T,1D,1T,1D,1T,1H,2r,1H,3e,1l,2C,1l,2C,1l,2C,1l,2C,1l,3e,1i,2C,1i,2C,1i,2C,1P,2C,N,2C,N,2C,1B,2C,1B,3e,1x,2r,1x,2r,1U,3e,1t,2C,T,2C,T,2C,M,4M,M,4M,T,4M,1t,4M,1t,4M,1U,2W,1x,2T,1B,2T,1B,4h,N,5f,1B,6Z,1x,5B,1t,5B,T,4W,T,4W,1U,3M,1x,3M,1B,4W,1P,3M,1i,6g,1i,7n,1i,3M,1l,4W,1H,6E,1H,6E,1D,4T,1m,5B,O,5B,O,8p,1m,4h,1H,2T,1H,2T,1D,2T,1q,2T,1q,2T,1q,2T,1m,4h,1m,2T,1m,3N,1m,3N,1S,2W,1m,2W,1m]}]},{"1b":15,"C":"新潟県","1Z":[{"D":[2r,5A,2r,6O,2r,5c,1T,6a,1Y,4i,1Y,6H,1T,6S,3e,6S,3e,6G,3e,6f,2C,3j,2C,5O,2C,7j,3e,4j,2r,4j,2r,5U,3e,5i,2C,6q,2C,6s,4M,5k,2W,5k,2W,6w,2W,4l,2W,3n,2T,4z,4h,4z,4o,3n,5f,4s,4b,4s,4b,4P,4b,2h,4b,3o,7l,2P,6Z,2q,7l,3A,4b,3Z,4b,5a,4b,2m,4b,1C,7l,1C,6Z,3k,5B,2n,4T,2n,4T,2m,4W,3k,4W,2e,3M,1K,3M,1N,7n,1N,7n,1e,7m,1e,7I,2x,5e,2j,5e,2j,5b,2x,5b,2x,5b,2x,5b,1e,5Y,2e,3L,1C,6y,2n,4I,2m,6l,3k,5Q,1C,5Q,1C,5P,1C,5P,2e,5P,1N,4f,2e,6M,1N,6M,1N,8n,2e,8n,1K,8R,1C,a5,1C,8b,1K,8b,1K,8b,2e,9g,1N,9g,1e,5o,1e,5o,1e,5o,1N,5h,1K,5h,1C,5h,3k,5G,3k,5G,2m,5G,2m,5o,2n,cK,5a,8R,5a,8n,2X,6M,3Z,6A,3A,6N,3A,8w,3A,5P,3A,6l,2P,6t,3o,3L,4s,5Y,3n,5b,4l,5e,5C,7I,5k,7m,6q,6g,7j,4T,5O,7l,3j,5f,6z,4h,7k,2T,4i,2T,6n,3N,5A,2W,5A,2W,7C,4M,7C,3e,5A,2r,5A,2r,5A]},{"C":"佐渡島","D":[6t,6Q,6t,4i,6y,4i,6y,6Q,6y,6S,6t,6k,6y,6f,3L,6f,3L,6f,3L,4H,6P,7j,6l,4j,5Q,4j,5P,4j,8w,4j,5P,7j,5Q,7j,5Q,6x,5Q,5O,6l,3j,6l,4H,6l,4H,5Q,4H,5Q,3j,5P,3j,5P,6z,5P,6f,5Q,6k,5Q,7k,6l,6S,4I,6H,6t,6Q,6t,6Q]}]},{"1b":16,"C":"富山県","1Z":[{"D":[2z,1p,2z,1p,5u,1a,5T,1a,5K,1a,5K,2H,5K,1p,5K,1p,5X,1p,5Z,2H,4a,1J,7c,1u,7c,1u,5H,1u,7d,4S,7d,1u,6m,1u,5g,1u,6i,1J,4C,1J,4c,1a,4c,1a,5q,1a,5q,1a,5q,1J,5q,1J,5q,1J,6h,1u,6h,4S,6h,3x,5G,3x,5G,3x,5G,5V,5h,4J,5o,4u,5o,2x,5o,1e,5o,1e,9g,1e,5o,1e,5o,1e,5o,1N,5h,1K,5h,1C,5h,3k,5h,3k,5G,3k,5G,2m,5q,2m,4C,3k,6i,1C,6i,1K,6i,2e,5g,1N,6m,1N,7A,1e,7c,1N,8h,1N,5Z,1K,5Z,1C,4a,3k,4a,2m,5Z,2m,5T,1C,5T,1K,5u,2e,5u,1N,5u,1e,5u,1e,2z,1e,2z,1e,2z,2j,2z,2x,2z,4u,2z,4J,2z,5V,2z,3x,3g,4S,3g,1u,2z,1J,3g,1a,3g,1p,2z,1p,2z,1p,2z,1p]}]},{"1b":17,"C":"石川県","1Z":[{"D":[7d,4P,6m,4P,6m,4P,7A,3o,5H,3o,8h,2P,4a,2q,5Z,2q,5X,2q,5X,2q,5K,3B,5K,3A,5T,3Z,5T,2X,5K,5a,5K,3Z,5X,2X,5Z,2X,5Z,3Z,4a,3Z,4a,2X,4a,5a,4a,2m,4a,2m,4a,2m,5Z,2m,5T,1C,5T,1K,5u,2e,5u,1N,5u,1e,2z,1e,2z,1e,2z,2j,2z,2x,2z,4u,2z,4J,2z,5V,2z,3x,3g,4S,3g,1u,2z,1J,3g,1a,3g,1p,2z,1p,2z,1p,2z,1p,2z,1p,2z,1p,2z,4n,2z,4n,3g,2s,4D,3m,4D,3m,7Y,2D,4R,3m,3C,2s,7H,2s,7s,2O,7s,2O,7p,2s,7M,2O,4K,3q,4N,1p,5y,2H,5y,2H,4N,1a,7M,1J,7s,3x,8B,4J,4R,2x,7Y,2j,4D,1N,3g,3k,3g,2m,2z,2n,3g,2X,3g,3A,4D,3B,3g,3o,3g,2h,2z,4P,5u,4s,5T,4s,5T,3n,5K,3n,5X,3n,5X,3n,7c,4z,7c,4l,7A,4l,6m,5C,6i,4l,6i,3n,5g,3n,6m,3n,7d,4P,7d,4P]},{"C":"能登島","D":[4a,3B,4a,3B,4a,3A,5X,3Z,5X,3A,5K,3B,5X,3A,5X,3A,5X,3A,5X,3B,5Z,3A,4a,3B,4a,3B]}]},{"1b":18,"C":"福井県","1Z":[{"D":[4N,1p,4K,3q,7M,2O,7p,2s,7s,2O,7s,2O,7H,2s,3C,2s,4R,3m,7Y,2D,4D,3m,7Y,4p,7Y,5d,3g,5d,3g,2u,4D,1r,4R,H,3C,H,3C,1r,7M,H,4N,H,5y,1X,5y,F,5y,F,6T,2w,8a,F,3P,F,3P,2w,4G,O,5s,1S,4y,1S,2A,1m,5j,1m,5p,1D,3l,1H,3h,1H,3K,1l,5D,1H,4E,1D,4E,1q,2M,1q,2M,1m,2M,1S,2M,O,4E,2I,4E,O,4E,O,4E,O,4E,O,4E,1S,3S,1S,5F,O,5F,1S,5D,1m,5F,1m,4Z,1m,3K,1S,3K,1S,3K,2I,4Z,2I,3l,1S,3h,O,3l,2I,3l,O,3l,2I,3l,2w,3l,2w,3h,2w,3l,F,3l,2w,5p,2I,5p,2w,5j,2I,2p,2w,2p,F,2p,1X,2p,1X,2A,H,4y,H,4y,1X,4y,F,4y,F,5s,F,5s,H,4y,4m,2A,5d,2A,4V,2A,5L,2A,5L,2A,4p,5s,2s,3P,3q,3P,1p,6T,2H,5y,2H,5y,2H,4N,1p,4N,1p]}]},{"1b":19,"C":"山梨県","1Z":[{"D":[7n,H,7m,H,7I,1r,7I,1r,5e,2u,5e,2u,5e,2u,5b,1r,5Y,1r,3L,1r,6y,2u,4I,2u,6P,2u,6P,4m,6l,4m,5P,4m,8w,1r,6N,1r,4f,1X,4f,F,4f,F,6A,2w,6A,2I,4f,O,4f,O,4f,O,4f,O,6N,1m,6N,1q,6N,1l,6N,1P,6N,N,8w,N,5P,N,5Q,1B,5Q,1U,6l,1t,6P,1t,4I,1U,4I,1B,6t,2k,6y,1i,3L,1i,5Y,1i,5Y,1P,5Y,1P,5e,1P,6g,1i,6g,1i,7n,1i,3M,1l,4W,1H,6E,1H,6E,1D,4T,1m,5B,O,5B,O,4T,O,3M,F,6g,H,7n,H,7n,H]}]},{"1b":20,"C":"長野県","1Z":[{"D":[4I,2m,6y,2n,3L,1C,5Y,2e,5b,1e,5b,2x,6t,4u,6t,4u,6t,4r,4I,4r,4I,4J,6P,5V,6P,3x,6l,1J,4I,1a,6y,1a,3L,1a,5Y,4n,3L,4n,3L,3q,3L,2O,3L,2s,3L,3m,6y,2s,3L,2D,5Y,4p,3L,4p,5Y,5d,5e,2u,5Y,1r,3L,1r,6y,2u,4I,2u,6P,2u,6P,4m,6l,4m,5P,4m,8w,1r,6N,1r,4f,1X,4f,F,4f,F,6A,2w,6A,2I,4f,O,4f,O,4f,O,4f,1S,4f,1m,6A,1m,6A,1m,6A,1D,6A,1H,6M,1l,6M,1l,6M,1l,6M,2k,8n,1P,8R,1P,a5,N,8b,1B,5o,1x,5h,1U,5G,1x,6h,1x,5q,1x,3W,1x,4C,1B,4C,N,3W,N,3W,N,3W,N,3W,1P,3W,1i,3W,2k,4c,2k,4c,1l,4c,1H,4c,1q,3W,1q,4C,1q,4C,O,4C,2I,6i,F,5g,1X,7d,H,6m,1r,5g,4m,6i,2u,4C,4m,4C,5d,4c,4V,4c,4p,3W,2D,4c,2s,4c,2O,5q,3q,6h,1p,6h,2H,5q,1a,5q,1a,5q,1a,5q,1J,5q,1J,6h,1u,6h,4S,6h,3x,5G,3x,5G,3x,5G,5V,5h,4J,5o,4u,5o,2x,5o,1e,5o,1e,9g,1e,9g,1N,8b,2e,8b,1K,8b,1K,a5,1C,8R,1C,8n,1K,8n,2e,6M,1N,6M,1N,4f,2e,5P,1N,5P,2e,5P,1C,5Q,1C,5Q,1C,6l,3k,4I,2m,4I,2m]}]},{"1b":21,"C":"岐阜県","1Z":[{"D":[6m,1u,7d,1u,7d,4S,5H,1u,7c,1u,4a,1J,5Z,2H,5X,1p,5K,1p,5K,1p,5K,2H,5K,1a,5T,1a,5u,1a,2z,1p,2z,1p,2z,1p,2z,4n,2z,4n,2z,4n,3g,2s,4D,3m,4D,3m,7Y,4p,7Y,5d,3g,5d,3g,2u,4D,1r,4R,H,3C,H,3C,1r,7M,H,4N,H,5y,1X,5y,F,5y,F,6T,2w,6T,2I,5y,O,4N,1m,4K,1S,4K,1m,4K,1H,4N,1i,4K,1B,4K,N,4K,1B,7M,N,7p,N,7s,1B,7H,1x,8B,1U,3C,1t,3C,1t,3C,1U,3C,1B,3C,N,3C,N,4R,1i,4D,2k,5u,1l,5T,1l,5T,1l,5K,2k,5X,1i,5Z,1P,4a,N,8h,N,7c,N,7A,N,7d,1B,6m,1B,5g,1x,6i,1B,3W,N,3W,N,3W,N,3W,1P,3W,1i,3W,2k,4c,2k,4c,1l,4c,1H,4c,1q,3W,1q,4C,1q,4C,O,4C,2I,6i,F,5g,1X,7d,H,6m,1r,5g,4m,6i,2u,4C,4m,4C,5d,4c,4V,4c,4p,3W,2D,4c,2s,4c,2O,5q,3q,6h,1p,6h,2H,5q,1a,5q,1a,4c,1a,4c,1a,4C,1J,6i,1J,5g,1u,6m,1u,6m,1u]}]},{"1b":22,"C":"静岡県","1Z":[{"D":[3L,1i,6y,1i,6t,2k,4I,1B,4I,1U,6P,1t,6l,1t,5Q,1U,5Q,1B,5P,N,8w,N,6N,N,6N,1P,6N,1l,6N,1q,4f,O,4f,O,4f,O,4f,O,4f,1S,4f,1m,6A,1m,6A,1m,6A,1D,6A,1H,6M,1l,6M,1l,6M,1l,6M,2k,8n,1P,8R,1P,a5,N,8b,1B,5o,1x,5h,1U,5h,1t,5o,1t,5h,T,5h,T,5G,M,5G,M,6h,1f,5q,3f,4c,Q,4c,W,3W,1G,4C,2b,6i,2b,5g,2f,5g,1d,5g,1d,5g,1d,4C,1d,4C,1o,4C,2f,4C,1j,4C,U,3W,2f,4c,1j,3W,2f,3W,1o,4c,U,3W,1o,3W,1d,4c,1d,6h,1R,5h,1R,8R,1R,4f,1O,4f,R,6A,1R,4f,1o,6N,U,8w,2f,5P,2b,5Q,1G,6l,W,6P,Q,4I,Q,4I,3f,4I,3f,4I,3f,4I,2J,4I,2J,6t,1f,3L,M,5b,M,7m,1f,7m,3f,7I,3f,5e,3f,5e,1G,5e,1j,5b,2f,5e,U,5b,U,5b,1o,5b,1d,5b,1d,5e,1R,5e,R,7I,1O,7m,1O,6g,1R,3M,1R,3M,1R,4W,1o,6E,U,6E,2f,4T,1j,5B,2b,5B,W,4T,Q,4T,Q,4T,3f,6E,2J,4T,M,4W,T,4W,1U,3M,1x,3M,1B,4W,1P,3M,1i,6g,1i,6g,1i,5e,1P,5Y,1P,5Y,1P,5Y,1i,3L,1i,3L,1i]}]},{"1b":23,"C":"愛知県","1Z":[{"D":[3W,1x,5q,1x,6h,1x,5G,1x,5h,1U,5o,1x,5h,1U,5h,1t,5o,1t,5h,T,5h,T,5G,M,5G,M,5G,M,6h,1f,5q,3f,4c,Q,4c,W,3W,1G,4C,2b,6i,2b,5g,2f,5g,1o,5g,1d,5g,1d,5g,1d,5g,1d,4a,R,5T,R,5K,1d,5X,1d,5Z,1d,8h,1o,7c,1o,5H,U,5H,U,5H,1o,5H,1o,5H,1o,5H,U,5H,U,5H,1j,7c,1j,8h,1j,4a,1j,4a,2f,5Z,1j,5K,1j,5T,1j,5u,2b,5u,1G,5u,Q,2z,W,2z,2b,5u,2f,5u,1o,4D,2f,4D,1j,3g,2b,4D,W,4D,3f,3g,1f,3g,M,4D,1f,4D,1f,4D,M,7Y,M,4R,M,4R,M,4R,T,3C,1t,3C,1t,3C,1t,3C,1U,3C,1B,3C,N,3C,N,4R,1i,4D,2k,5u,1l,5T,1l,5T,1l,5K,2k,5X,1i,5Z,1P,4a,N,8h,N,7c,N,7A,N,7d,1B,6m,1B,5g,1x,6i,1B,3W,N,4C,N,4C,1B,3W,1x,3W,1x]}]},{"1b":24,"C":"三重県","1Z":[{"D":[4R,1f,3C,M,3C,1f,3C,1f,8B,2J,8B,3f,7H,W,7s,2b,7p,2f,7p,U,7p,1o,7p,1d,7H,R,4R,1O,4D,1c,3g,P,2z,P,3g,1y,3g,1y,3g,1h,4D,1h,3g,1h,3g,1h,3g,1F,4D,L,3g,L,4D,1w,3C,1w,3C,L,4R,L,3C,L,4R,L,3C,L,8B,L,8B,1F,7H,1F,7H,1F,7H,L,7s,L,7s,1w,7p,1w,7p,L,7M,1w,7M,L,4K,L,4K,1M,4N,1w,4N,1w,4N,V,8a,V,3P,1M,3P,1M,4G,1M,3P,2L,3P,I,3P,K,4G,I,5s,K,5s,K,4G,K,4G,G,3P,G,4G,G,4G,G,4G,1n,5s,1n,5s,1W,4y,1n,4y,1n,4y,1A,4y,1W,2A,1W,2A,1A,2p,1A,5j,3c,5p,1z,3l,1s,3h,1s,3h,1s,3K,3c,3K,1A,4Z,1n,4Z,1n,3h,1n,3h,1n,3l,1n,3l,S,3l,S,5p,G,5j,K,2p,G,2A,G,2p,K,2p,I,2p,I,2p,1M,2p,V,2A,L,2A,1F,2A,1F,2A,1h,2p,P,4y,E,4G,1c,5s,1O,2A,1R,2p,1d,2A,1o,2p,U,2p,U,2A,U,2p,2f,2A,1j,2p,1j,2p,2b,2p,1G,2A,1G,4y,Q,2A,Q,2A,Q,5s,Q,4G,Q,3P,W,8a,Q,5y,3f,4N,M,4K,1U,4K,1B,4K,1B,4K,N,4K,1B,7M,N,7p,N,7s,1B,7H,1x,8B,1U,3C,1t,3C,1t,3C,1t,4R,T,4R,M,4R,M,4R,M,4R,1f,4R,1f]}]},{"1b":25,"C":"滋賀県","1Z":[{"D":[4G,F,3P,F,3P,F,3P,F,3P,F,3P,F,3P,F,6T,F,6T,F,6T,2w,6T,2w,6T,2w,6T,2I,5y,O,4N,1m,4K,1S,4K,1m,4K,1H,4N,1i,4K,1B,4K,1B,4K,1U,4N,M,5y,3f,8a,Q,3P,W,4G,Q,5s,Q,2A,Q,2A,Q,4y,Q,2A,1G,2p,1G,2p,2b,5j,1G,2p,1G,5j,W,5p,Q,5p,Q,3l,Q,3h,2J,3h,1f,4Z,1t,3h,1B,3h,N,3h,1i,3K,1l,3h,1H,3l,1H,5p,1D,5j,1m,2A,1m,4y,1S,5s,1S,4G,O,3P,2w,4G,F,4G,F,4G,F,4G,F]}]},{"1b":26,"C":"京都府","1Z":[{"D":[2M,1S,2M,1m,2M,1q,4E,1q,4E,1D,5D,1H,3K,1l,3K,1l,3h,1i,3h,N,3h,1B,4Z,1t,3h,1f,3h,2J,3l,Q,5p,Q,5p,Q,5j,W,2p,1G,5j,1G,2p,2b,2p,1j,5j,1j,3l,2b,3l,1j,4Z,1j,3K,1j,5F,1G,5F,1G,5D,Q,3S,2J,3H,1f,3H,1f,4E,1f,4E,2J,2M,1f,2M,M,5r,M,4e,T,2G,T,2G,1t,2G,1t,4e,1U,2G,1x,2G,1B,5z,1B,5z,N,6B,N,4v,N,4v,N,4v,1P,4v,1P,4A,1i,2Y,1i,5t,1i,2R,1l,3u,1D,3V,1q,5t,1q,5t,1S,2Y,2I,3V,2I,2R,O,3u,2w,3u,F,3u,1X,3u,H,2R,1X,3V,H,2Y,1r,4A,1r,4A,2u,6B,2u,5z,2u,4U,2u,2G,H,2G,1X,4U,1X,5z,2w,5z,2w,4U,2I,5z,O,4U,O,2G,1S,2G,1S,4e,1S,4e,1S,2G,O,4e,2I,4e,2I,2M,2w,4E,2I,2M,O,2M,1S,2M,1S]}]},{"1b":27,"C":"大阪府","1Z":[{"D":[3H,1f,4E,1f,4E,2J,2M,1f,2M,M,5r,M,4e,T,2G,T,2G,1t,2G,1t,4U,1t,2G,T,4U,M,4U,M,2G,1f,4e,1f,5r,1f,4e,2J,4e,W,4e,2b,4e,2b,2G,1j,2G,1j,2G,1j,2G,U,2G,U,2G,U,2G,1o,4U,1d,2G,1R,4U,R,6B,1O,4v,E,4A,P,5t,P,3V,P,3V,P,3V,1y,3V,1y,5t,1h,2Y,1h,4A,1y,4A,1y,4A,1y,4A,1y,4v,1y,4v,1y,5z,P,2G,P,4e,P,5r,P,4E,P,3H,P,3H,E,3S,1c,3S,R,3S,1o,3S,2f,5D,1G,5F,1G,5F,1G,5D,Q,3S,2J,3H,1f,3H,1f,3H,1f]}]},{"1b":28,"C":"兵庫県","1Z":[{"D":[3u,F,3u,2w,2R,O,3V,2I,2Y,2I,5t,1S,5t,1q,3V,1q,3u,1D,2R,1l,5t,1i,2Y,1i,4A,1i,4v,1P,4v,1P,4v,N,4v,N,6B,N,5z,N,5z,1B,2G,1B,2G,1x,4e,1U,2G,1t,4U,1t,2G,T,4U,M,4U,M,2G,1f,4e,1f,5r,1f,4e,2J,4e,W,4e,2b,2G,1j,2G,1j,4U,1j,5z,2b,5z,1j,4v,1j,4A,1j,2Y,2f,3u,2f,5n,2b,6o,1G,6V,W,5l,Q,4q,W,4q,Q,2Q,Q,2K,Q,3s,Q,3s,Q,3s,W,3i,W,2E,W,2y,W,2t,W,2t,Q,2t,Q,2t,2J,4g,1f,2t,M,2t,T,2t,T,2t,1t,2t,1U,2y,1x,2E,1P,3i,1P,3i,1i,3s,1l,2K,1l,3t,1l,3t,1H,3t,1q,3t,1q,3t,1m,2K,1S,2K,O,2K,F,2K,1X,2K,H,2Q,H,4q,H,5l,H,5l,H,6R,H,6V,H,6o,H,6o,H,5S,H,5n,H,3u,1X,3u,F,3u,F]},{"C":"淡路島","D":[2R,1o,3u,1o,3u,1o,3u,1d,5n,R,5S,1c,5n,P,5n,P,5n,1y,5S,1h,6V,1h,6R,1F,5l,L,5l,1F,4q,1F,4q,1h,4q,1h,4q,1h,2Q,1h,2Q,1y,4q,1y,2Q,1y,4q,P,4q,E,5l,E,6R,1O,6V,R,6o,1R,6u,1o,2R,1o,2R,1o]}]},{"1b":29,"C":"奈良県","1Z":[{"D":[3l,2b,3l,1j,4Z,1j,3K,1j,5F,1G,5D,1G,3S,2f,3S,1o,3S,R,3S,1c,3H,E,3H,P,3H,1h,3S,1F,3S,L,3S,L,3H,L,4E,1w,2M,V,2M,1M,5r,1M,5r,2L,2M,I,2M,G,2M,S,2M,1n,2M,1W,2M,1W,2M,1A,3H,1W,3S,1W,5D,1W,3K,1A,3K,1A,3K,3c,3K,1A,4Z,1n,3l,S,5p,G,5j,K,2p,G,2A,G,2p,K,2p,I,2p,I,2p,1M,2p,V,2A,L,2A,1F,2A,1F,2A,1h,2p,P,4y,E,4G,1c,5s,1O,2A,1R,2p,1d,2A,1o,2p,U,2p,U,2A,U,2p,2f,2A,1j,2p,1j,5j,1j,3l,2b,3l,2b]}]},{"1b":30,"C":"和歌山県","1Z":[{"D":[4E,P,3H,P,3H,1h,3S,1F,3S,L,3S,L,3H,L,4E,1w,2M,V,2M,1M,5r,1M,5r,2L,2M,I,2M,G,2M,S,2M,1n,2M,1W,2M,1W,2M,1A,3H,1W,3S,1W,5D,1W,3K,1A,3K,1A,3K,3c,3h,1s,3h,1s,3l,1s,3l,1s,5p,1s,3h,2c,3h,1Q,3l,Z,3h,1Q,4Z,Z,3h,Z,3h,Z,3h,Z,4Z,1v,3h,1v,3h,1v,4Z,1I,4Z,1I,4Z,1I,3K,1V,5F,1V,3S,2g,5D,2g,5F,2g,5D,2l,3S,2g,3H,2l,3S,2g,3S,2g,3H,2g,2M,2g,5r,1V,2G,1V,2G,1I,4U,1I,6B,Z,6B,1Q,6B,1Q,4v,2c,4v,1s,4v,1s,6B,1s,6B,1s,6B,1z,4v,2a,4A,2a,2Y,3c,5t,1A,3V,1W,3V,1n,2R,1n,3u,1n,3u,S,3u,S,3u,G,3u,K,2R,K,3V,K,3V,I,3V,2L,3u,1M,2R,1M,2R,1M,3V,V,5t,V,2Y,1w,5t,L,3V,1F,2R,1h,2R,1y,3V,P,3V,1y,5t,1h,2Y,1h,4A,1y,4A,1y,4A,1y,4v,1y,4v,1y,5z,P,2G,P,4e,P,5r,P,4E,P,4E,P]}]},{"1b":31,"C":"鳥取県","1Z":[{"D":[3a,F,2y,F,3i,1X,2K,H,2K,1X,2K,F,2K,O,2K,1S,3t,1m,3t,1q,3t,1q,3t,1H,3t,1l,2K,1l,3s,1l,3i,1l,2E,2k,2y,2k,4g,1i,3Q,2k,3Q,1l,3a,1H,3a,1D,2i,1D,2l,1q,2l,1q,2l,1m,1V,1q,1v,1D,Z,1H,Z,1D,Z,1q,1s,1m,1z,1m,2a,1q,3c,1D,1A,1D,1A,1l,1W,1l,1n,1l,S,1l,K,1i,I,1i,I,1P,2L,1P,1M,1i,1w,2k,V,2k,1M,1l,1M,1H,1M,1D,1M,1D,2L,1q,K,1q,K,1m,G,O,G,O,G,2I,G,2w,K,2w,I,1X,I,H,K,H,K,1X,S,F,1n,2w,1W,F,1s,1X,1Q,F,1v,F,2l,F,2l,F,2i,F,3a,F,3a,F]}]},{"1b":32,"C":"島根県","1Z":[{"D":[R,1X,1c,1X,1O,H,1O,H,E,H,1F,H,1F,1r,1F,1r,1w,1r,1w,2u,L,4m,V,2u,V,4m,2L,2u,I,2u,G,1r,S,1r,S,1r,K,H,I,H,I,1X,K,2w,G,2w,G,2I,G,O,G,O,K,1m,K,1q,2L,1q,1M,1D,1M,1D,1M,1H,1M,1l,V,2k,1w,2k,1w,2k,L,1i,1F,2k,1h,2k,1h,2k,1y,2k,P,2k,E,2k,E,1i,1c,1i,1O,1P,R,N,1R,N,1d,1B,1d,1x,1R,1x,1d,1U,U,1U,2f,1t,1j,1t,2b,1U,2b,1U,Q,1t,2J,1U,1f,1t,1t,T,T,M,T,1f,1t,2J,1U,Q,1x,W,1x,1G,1B,1G,N,1j,1P,U,1P,U,1i,2f,1l,U,1H,2f,1H,1j,1H,2b,1H,2b,1H,1G,1D,1G,1q,Q,1q,3f,1D,2J,1H,1f,1D,T,1l,T,1i,1t,1P,1U,1P,1x,N,1x,1B,1x,1B,1B,1x,1B,1x,1B,1U,N,1U,N,1t,1P,T,1i,M,2k,2J,2k,Q,1l,W,1H,1G,1q,1j,1m,U,1S,1d,O,R,2I,R,F,1R,F,1R,F,R,1X,R,1X]},{"C":"隠岐島","D":[1W,4r,1A,4J,3c,5V,1A,4S,1W,1u,1n,1u,G,4S,G,5V,S,4J,1W,4r,1W,4r]},{"C":"西ノ島","D":[2L,1p,1M,4n,1M,4n,1M,1p,1M,1p,V,1p,V,2H,1w,1J,V,1J,V,1a,V,2H,1M,2H,2L,1p,2L,1p]},{"C":"中ノ島","D":[K,1a,I,1a,K,2H,I,1a,I,2H,2L,1p,2L,1a,2L,1J,1M,1a,1M,1a,1M,1u,I,1u,2L,1J,2L,1J,I,1J,I,1J,K,1a,K,1a]}]},{"1b":33,"C":"岡山県","1Z":[{"D":[2l,1m,2l,1q,2l,1q,2i,1D,3a,1D,3a,1H,3Q,1l,3Q,2k,4g,1i,2y,2k,2E,2k,3i,1l,3i,1i,3i,1P,2E,1P,2y,1x,2t,1U,2t,1t,2t,T,2t,T,2t,M,4g,1f,2t,2J,2t,Q,2t,Q,4g,W,2i,1j,2l,1j,2g,1j,2g,1j,2g,2b,1V,1j,1I,2b,1I,1j,1V,1j,1V,2f,1V,U,1V,2f,1V,U,1V,1d,1I,U,1I,U,1v,1o,Z,1d,1Q,1o,2c,1o,2c,1d,2c,1d,1s,1o,1z,U,1z,1o,2a,1o,2a,U,2a,2f,2a,2f,3c,2f,3c,2f,3c,U,1A,U,1A,U,1W,U,1n,U,1n,2f,S,2f,S,U,S,U,G,U,G,2f,G,2f,G,1j,G,2b,K,W,K,Q,K,2J,K,M,I,T,I,1U,I,1x,I,1B,K,1B,I,N,I,1P,I,1i,K,1i,S,1l,1n,1l,1W,1l,1A,1l,1A,1D,3c,1D,2a,1q,1z,1m,1s,1m,Z,1q,Z,1D,Z,1H,1v,1D,1V,1q,2l,1m,2l,1m]}]},{"1b":34,"C":"広島県","1Z":[{"D":[1w,2k,1w,2k,L,1i,1F,2k,1h,2k,1h,2k,1y,2k,P,2k,E,2k,E,1i,1c,1i,1O,1P,R,N,1R,N,1d,1B,1d,1x,1R,1x,1d,1U,U,1U,2f,1t,1j,1t,2b,1U,2b,1U,Q,1t,2J,1U,1f,1t,1t,T,T,M,T,1f,1t,2J,1U,Q,1x,W,1x,1G,1x,1G,1x,1j,1x,2f,1U,1o,T,R,T,R,T,R,T,R,T,R,T,1R,M,1d,1f,1d,M,1R,M,1R,1f,1R,2J,1R,2J,1d,3f,1d,2J,1o,2J,1o,2J,U,3f,U,3f,U,W,U,W,1o,1G,1o,2b,1o,1G,1o,1G,1d,1G,R,2b,R,2b,R,1G,1O,W,1c,1G,R,W,1d,Q,1R,Q,1R,3f,1R,3f,R,Q,1O,Q,1O,Q,E,W,E,Q,E,Q,P,W,P,1G,P,1G,1y,1G,1y,2b,1y,2b,P,2b,E,2b,E,1G,E,1G,E,2b,E,1G,1c,2b,1O,1j,1O,2f,1O,2f,1c,U,1c,U,1c,U,1c,1o,E,1o,E,1d,E,1d,E,1R,1c,1d,1c,1d,1c,U,1O,1o,1O,1d,R,1d,R,1R,1R,R,1R,R,1R,1O,1R,1c,1R,P,1R,1h,1d,1h,1o,L,1o,1w,1o,L,1d,1F,1R,1F,1R,1h,1O,1h,1O,L,R,L,R,L,R,L,1O,1w,R,1w,1R,L,1R,V,1d,2L,1d,1M,1R,V,1R,2L,1R,I,1R,I,1d,K,1o,K,U,K,U,G,U,G,2f,G,2f,G,1j,G,2b,K,W,K,Q,K,2J,K,M,I,T,I,1U,I,1x,I,1B,K,1B,I,N,I,1P,2L,1P,1M,1i,1w,2k,1w,2k]},{"C":"大崎上島","D":[R,R,1c,R,1c,1R,1c,R,1c,1O,1O,1c,R,1c,R,1O,R,R,R,R]}]},{"1b":35,"C":"山口県","1Z":[{"D":[1m,M,1m,T,1q,T,1D,T,1D,T,1D,T,1H,1f,1D,2J,1q,3f,1q,Q,1D,1G,1H,1G,1H,2b,1H,2b,1H,1j,1H,2f,1l,U,1i,2f,1P,U,1P,U,N,1j,1B,1G,1x,1G,1x,1G,1x,1j,1x,2f,1U,1o,T,R,T,R,T,R,T,R,T,1c,T,1c,T,1c,1t,P,1t,1h,1t,1F,1t,1F,T,1F,M,L,1f,1w,1f,1w,1f,L,3f,L,3f,1w,2J,1w,1f,V,1f,V,M,V,T,1w,1t,V,1U,V,1U,V,1U,1w,1U,L,1U,L,1U,1F,1x,1F,1x,1w,1x,V,1B,V,1B,V,1B,1w,N,L,1i,L,1i,1F,2k,1h,1H,1y,1H,1y,1H,1h,1D,1y,1q,1y,1D,P,1H,P,1D,E,1q,1c,1S,E,1S,E,O,E,2I,E,2I,1c,2w,P,F,E,F,1c,1X,E,H,E,1r,E,1r,P,1r,E,1r,1c,2u,P,5d,P,5d,1h,5d,1y,4V,P,5L,P,5L,E,5L,E,5L,E,5L,1c,4p,1c,2D,1O,3m,R,3m,1O,2O,1c,3q,E,4n,P,4n,E,3q,1c,3q,1O,3q,R,4n,1d,3q,1o,2O,2f,2O,2b,2O,1G,2O,W,2s,W,3m,W,2D,Q,3m,Q,2s,Q,3m,Q,2D,3f,4V,Q,4V,Q,4V,W,5d,W,4m,W,4m,W,2u,W,1r,W,H,W,H,W,1X,W,1X,W,1X,Q,F,Q,F,3f,2I,2J,O,1f,1S,M,1S,M,1m,M,1m,M]},{"C":"長島","D":[N,V,N,V,N,1M,1P,1M,N,V,N,V,N,V]}]},{"1b":36,"C":"徳島県","1Z":[{"D":[2l,1F,2g,L,1V,L,1V,L,1v,1w,Z,1w,Z,L,1Q,1F,2c,L,1s,L,1z,L,2a,1w,3c,1w,1A,V,1A,V,1A,V,1A,1M,1A,2L,1A,2L,1A,I,1W,K,2a,G,1z,G,1s,G,1s,S,2c,1n,1Q,S,Z,S,1v,S,1v,3c,1I,3c,1V,2a,2g,1z,1V,1s,2g,2c,2i,1Q,3a,1Q,3a,2c,3a,2c,3Q,2c,4g,1s,4g,1z,4g,1z,2t,1z,2y,2a,3i,2a,3s,1A,2K,1A,2Q,1W,4q,1n,4q,1n,2Q,1n,3t,1n,3t,S,2Q,G,3t,1M,2K,2L,2K,1M,2K,V,3t,L,2Q,1h,2Q,1y,3t,1y,2K,1y,2K,1h,2E,1h,2E,1F,2y,1F,2t,1F,3a,1F,2l,1F,2l,1F]}]},{"1b":37,"C":"香川県","1Z":[{"D":[2i,R,2i,R,2i,1O,2i,1c,2i,1O,3a,1O,3a,1O,3a,1O,3a,1c,3Q,1c,3Q,1c,3Q,E,3Q,P,4g,P,2t,P,2t,1y,2y,P,2y,1y,2E,1h,2E,1h,2E,1h,2E,1h,2E,1F,2y,1F,2t,1F,3a,1F,2l,1F,2g,L,1V,L,1V,L,1v,1w,Z,1w,Z,L,1Q,L,1Q,1F,2c,L,1s,L,1z,L,2a,1w,3c,1w,1A,V,1A,V,1A,V,1A,V,1W,1w,1n,1w,1W,L,1W,1F,1A,1y,1W,E,1n,1c,1W,1c,1A,E,3c,E,2a,E,1z,1c,1s,1O,2c,R,2c,R,1Q,1O,1Q,R,1Q,R,Z,1R,1I,R,1V,1O,1V,1O,2g,1O,2g,R,2l,R,2l,R,2i,R,2i,R]},{"C":"小豆島","D":[4g,U,2y,U,2y,U,2y,U,2t,1R,4g,1R,4g,1d,3Q,1R,3a,1R,3Q,1R,3Q,1d,2i,1d,2i,1d,2i,1o,2i,U,3a,U,4g,U,4g,U]},{"C":"豊島","D":[2g,1d,1V,1o,2g,1o,2l,1d,2g,1d,2g,1d]}]},{"1b":38,"C":"愛媛県","1Z":[{"D":[1c,P,P,1w,1h,1M,L,V,1w,V,V,V,V,1w,2L,V,K,V,S,V,1n,1w,1n,1w,1W,1w,1A,V,1A,V,1A,V,1A,1M,1A,2L,1A,2L,1A,I,1W,K,1n,I,S,I,G,I,K,G,I,G,2L,K,1M,K,1w,K,1w,K,L,G,1F,G,1F,G,1h,G,1h,S,1y,1n,1y,1W,E,1A,E,1A,E,3c,E,3c,E,2a,E,2a,1c,1z,1O,1s,1d,1s,1o,1s,1o,1Q,1d,1v,1o,1I,2f,1V,2f,2g,1j,2g,1G,2i,W,2l,W,2i,W,3Q,W,2t,W,2y,W,2y,W,2E,W,2E,Q,2E,3f,3i,3f,2E,2J,2E,2J,2E,2J,2E,1f,2y,1f,2E,1f,3i,M,2E,M,2y,M,2y,M,2t,1f,2t,1f,2t,1f,2t,1f,4g,M,3Q,M,3Q,T,3Q,T,4g,1t,4g,1t,3Q,T,3Q,M,3a,M,3Q,M,2i,1f,2i,M,2l,M,2g,T,2g,T,2g,M,1V,1f,2g,3f,1V,2J,1V,1f,1I,1f,1v,2J,1v,1f,Z,T,Z,T,Z,M,1Q,M,1Q,M,2c,M,2c,M,1s,M,1z,1f,1z,M,1z,T,2a,1t,1z,1t,2a,1B,1s,N,1s,1P,2c,1P,2c,1P,2c,1P,1s,1i,2c,2k,2c,1i,1s,N,1z,1B,1z,1x,2a,1U,2a,T,2a,1f,3c,Q,1n,2b,S,1j,K,2f,1M,2f,V,U,V,U,V,1o,L,R,1h,1O,1h,1O,1y,1c,P,1c,P]},{"C":"大三島","D":[P,R,1y,R,P,1c,1c,E,1c,1c,E,1c,E,1O,E,R,P,R,P,R]},{"C":"伯方島","D":[1y,1c,1y,1c,1h,1c,1h,E,1h,E,1h,E,1h,E,1h,E,1y,1c,1y,1c]},{"C":"中島","D":[1j,1F,1j,L,1j,L,2b,L,2b,L,1j,1F,1j,1F,1j,1F]},{"C":"大島","D":[1h,E,1h,P,P,1y,P,1y,P,P,1y,E,1h,E,1h,E,1h,E]}]},{"1b":39,"C":"高知県","1Z":[{"D":[1Q,S,Z,S,1v,S,1v,3c,1I,3c,1V,2a,2g,1z,1V,1s,2g,2c,2i,1Q,3a,1Q,2i,Z,2g,2l,1I,3a,1I,2i,1I,2i,1v,2i,1v,2l,1v,2g,Z,1V,Z,1V,Z,1I,1s,1Q,2a,2c,1A,2c,S,2c,G,2c,K,1Q,I,1Q,2L,1Q,2L,Z,1M,1v,V,1v,V,1v,1w,1v,L,1I,L,1v,1F,1I,1h,1I,1F,1V,1h,2l,1h,2i,1y,2i,1y,3a,1y,3Q,P,3a,E,4g,E,4g,1c,2t,1c,2y,1O,2y,1O,2t,R,2y,1R,2E,1R,3i,1R,2K,1d,2K,1d,3t,1d,2Q,1R,4q,1d,5l,1o,5l,1o,4q,1o,4q,U,2Q,2b,4q,W,2Q,Q,2Q,Q,2Q,Q,4q,3f,2Q,3f,2Q,3f,3t,Q,3t,Q,3s,1G,3i,W,3i,W,3i,W,2E,W,2E,W,2y,W,2y,W,2t,W,3Q,W,2i,W,2l,1G,2i,1j,2g,2f,2g,2f,1V,1o,1I,1d,1v,1o,1Q,1o,1s,1d,1s,1O,1s,1c,1z,E,2a,E,2a,E,3c,E,3c,E,1A,E,1A,1y,1W,1y,1n,1h,S,1h,G,1F,G,1F,G,L,G,1w,K,1w,K,1M,K,2L,K,I,G,K,G,G,I,S,I,1n,I,1W,K,2a,G,1z,G,1s,G,1s,S,2c,1n,1Q,S,1Q,S]}]},{"1b":40,"C":"福岡県","1Z":[{"D":[2s,E,2s,P,2s,P,2O,1y,2O,1h,2s,1M,2s,2L,2D,I,2D,K,2D,K,2D,K,2D,G,2D,G,2D,S,3m,S,2O,S,1p,S,2H,1n,1a,1n,1a,1W,1a,1A,1J,3c,1J,2a,1J,1z,1u,1z,1u,1z,1u,2c,1J,2c,1u,Z,1u,1v,1u,1v,1u,1v,3x,Z,4J,1Q,4r,Z,4u,Z,2x,Z,2j,1v,1e,1I,1e,1I,1N,1I,1N,1I,2e,1I,2e,Z,2e,1Q,1K,2c,1K,1s,1K,1s,1K,1s,1K,1z,2e,1z,1N,2a,1e,2a,1e,2a,1e,3c,2x,1A,2x,1A,4u,1W,2x,S,2j,S,1e,1n,1e,1n,1e,S,2e,G,3k,I,2m,I,2n,I,2X,I,2X,I,5a,2L,2n,2L,2m,1M,2m,1M,2m,V,2n,V,2n,V,2m,V,3k,1w,3k,1w,1C,1w,1C,L,1C,L,1K,1w,1K,V,1K,V,2e,1M,1N,1M,2j,V,2j,V,2j,1w,2j,L,1e,L,1e,L,2j,L,2x,1F,4u,1h,2x,1y,4u,1y,4u,1y,4u,P,4r,P,4J,E,4J,E,5V,E,4S,E,1u,1c,1u,1c,1u,1c,1J,1c,1a,E,2H,E,1p,E,1p,E,1p,P,4n,P,3q,P,3q,E,2s,E,2s,E]}]},{"1b":41,"C":"佐賀県","1Z":[{"D":[1e,1n,2j,S,2x,S,4u,1W,2x,1A,2x,1A,1e,3c,1e,2a,1e,2a,1N,2a,2e,1z,1K,1z,1K,1s,1K,1s,1K,1s,1K,2c,3k,1s,2m,1z,2n,1s,5a,2c,5a,1Q,2n,1v,2n,1I,2n,1I,2n,1V,2X,1I,2X,1I,3Z,1v,3A,Z,3B,1Q,2q,2c,2q,1s,2q,1s,2q,1z,2P,2a,2h,3c,2h,1W,2h,1n,2h,S,2h,S,3o,S,3o,S,3o,S,3o,1n,2P,1n,2P,S,2P,G,2P,K,2P,K,2P,I,3o,2L,2P,2L,2P,I,2q,2L,2q,1M,2q,V,2q,V,2q,1w,2q,V,3B,V,3Z,1M,3A,I,3A,2L,3A,I,2X,I,2X,I,2X,I,2n,I,2m,I,3k,I,2e,G,1e,S,1e,1n,1e,1n,1e,1n]}]},{"1b":42,"C":"長崎県","1Z":[{"D":[2n,1V,2X,2g,3Z,2g,2X,2l,2X,2i,5a,2l,3k,2l,1C,3a,1C,2t,3k,2y,2n,2E,5a,2E,2X,3i,2X,3i,3Z,3i,3Z,3i,3Z,2E,3A,2y,3Z,2t,2X,4g,2X,3Q,2X,3Q,3Z,3a,3A,3a,2P,3a,3o,4g,4P,2t,3n,2E,4z,2E,4z,2E,4z,2y,3n,2t,3n,3Q,4P,3Q,4s,3a,4s,3a,4s,2i,3n,2l,3n,2l,3n,2l,3n,2l,3n,2i,4l,1v,4l,1v,4l,Z,4l,1Q,4z,1z,3n,1z,3n,1s,4s,2c,4s,2c,4s,2c,4s,1Q,4s,1Q,4P,Z,4P,1v,4s,1V,2h,2g,2h,2g,2h,1V,3o,2g,2q,2l,2P,1I,2P,1v,2P,1Q,3o,2c,3o,2c,2h,1Q,4P,2c,4P,1s,4P,2c,4s,1z,4s,1z,4s,2a,3n,1z,4z,1z,4z,1z,4z,2a,3n,2a,4z,3c,4z,3c,4z,3c,4l,1A,4l,1n,4l,S,4l,G,4l,G,4l,K,4l,G,5C,G,5C,S,6w,S,6w,1n,5k,1W,6s,1A,6q,1A,5i,1W,6q,1W,6q,1W,6q,1W,6q,1n,6s,1n,6s,1n,6s,S,5k,S,5k,G,5k,K,6w,K,4l,I,6w,I,5C,I,4l,I,4l,I,4z,K,3n,K,4s,K,4s,I,4s,K,4s,G,4P,G,2h,K,3o,G,3o,S,3o,S,2h,S,2h,S,2h,1n,2h,1W,2h,3c,2P,2a,2q,1z,2q,1s,2q,1s,2q,2c,3B,1Q,3A,Z,3Z,1v,2X,1I,2X,1I,2n,1V,2n,1V,2n,1V]},{"C":"五島列島","8u":[{"C":"的山大島","D":[5O,K,6x,G,5O,G,3j,K,5O,K,5O,K,5O,K]},{"C":"対馬","D":[4P,1l,2h,1l,2h,2k,2h,1i,2h,1P,4P,N,3n,1x,3n,1x,3n,1U,3n,1t,4z,1t,3n,T,3n,M,4z,M,4l,1f,5C,1f,5C,3f,6w,Q,5k,1G,6s,1G,6s,1G,6s,W,6q,W,6q,1G,6q,W,6q,Q,6s,1f,6s,M,5k,T,5k,T,6w,M,6w,M,5C,T,5C,T,6w,1t,6w,1t,5C,1U,5C,1x,5C,1B,4l,N,4z,1P,4z,1P,4l,1P,4l,1i,3n,1l,4P,1l,4P,1l]},{"C":"福江島","D":[6Q,1v,6Q,1I,6H,1V,6H,1V,6Q,1V,6H,2l,6H,2i,6Q,2i,4i,2l,6a,2i,6a,3a,6a,3a,5c,3a,5c,2i,6n,2i,6O,2i,5A,2l,5A,2g,6O,2l,6O,2l,6n,2g,6O,1V,6n,1V,6n,1I,6n,1v,5c,Z,5c,1v,6a,1I,6a,1I,4i,1v,6Q,1v,6Q,1v,6Q,1v]},{"C":"中通島","D":[4H,S,4H,S,3j,S,5O,S,5O,1n,5O,1n,5O,1W,3j,1W,3j,1A,3j,2a,3j,2a,4H,1z,4H,1z,4H,1s,3j,1z,5O,1s,5O,2c,4H,2c,4H,1Q,4H,Z,4H,Z,6z,1v,6z,1v,6z,1v,6f,1I,6f,1v,6f,Z,6k,Z,6k,Z,6G,Z,6G,Z,6G,1v,7k,1I,7k,1v,7k,1v,7k,Z,6S,Z,6S,1v,6H,1I,6H,1v,6H,Z,6H,Z,6S,Z,6S,1Q,6S,1Q,7k,1Q,6G,1Q,6G,1Q,6G,1Q,6G,1Q,6k,1Q,6k,1Q,6k,1Q,6G,2c,6k,2c,6k,2c,6f,1s,6f,1s,6z,1s,6z,1z,6z,1z,6z,2a,4H,2a,4H,2a,4H,3c,4H,3c,3j,1W,3j,1W,3j,1n,4H,S,4H,S]},{"C":"壱岐島","D":[2P,1O,2P,1O,2q,1O,2q,1c,2q,E,2q,E,2P,E,2q,E,2q,P,2P,P,3o,1y,2h,P,4P,P,4P,E,2h,E,2h,E,2h,1c,2h,1O,2h,1c,2h,1O,2h,R,3o,R,2P,1O,2P,1O]}]}]},{"1b":43,"C":"熊本県","1Z":[{"D":[3q,Z,2s,1I,2s,1V,3m,2g,3m,2l,3m,2i,3m,3Q,2D,2t,2D,2y,2D,2y,3m,2y,2s,2E,2O,3i,3q,2K,4n,2K,4n,2K,1p,3t,1p,2Q,2H,2Q,1a,2Q,1J,5l,1J,6V,1a,6o,1a,6o,1a,5S,1a,5n,2H,6u,1J,3u,1J,2R,1a,5t,1J,5t,1u,5t,4S,2Y,3x,2Y,4J,2Y,4r,2Y,4u,2Y,2x,2Y,2j,2Y,2j,2Y,2j,2Y,2j,2Y,1e,3V,1N,2R,2e,2R,1K,2R,1C,3V,2m,3V,2n,3V,2n,2R,2n,2R,2n,2R,2n,3u,2n,3u,2n,6u,2m,5n,1C,6o,1K,6R,1N,5l,1N,4q,1N,4q,1N,2Q,1N,2Q,1N,2Q,1N,3t,2x,3s,1e,3s,2e,3s,2e,3s,1K,3i,1K,2K,3k,2K,1C,3s,1K,3i,2e,3i,1e,2E,1e,2y,2j,4g,1e,2i,1N,2l,2e,2g,2e,1I,1N,1I,1N,1I,1e,1I,1e,1I,2j,1v,2x,Z,4u,Z,4r,Z,4J,1Q,3x,Z,1u,1v,1u,1v,1J,1I,1a,1V,2H,2g,1p,1V,1p,1I,1p,1I,2H,Z,1p,Z,3q,Z,3q,Z]},{"C":"天草諸島","D":[2q,3s,2q,3s,2q,2K,3B,3s,3A,3s,3Z,3s,3Z,2Q,5a,2Q,2n,3t,2m,3t,1C,3t,1C,3t,1K,3t,1C,2Q,1C,5l,2m,6R,2m,6R,2X,5l,2X,5l,2X,4q,3Z,4q,3Z,5l,3Z,5l,3Z,6R,3A,6V,3B,6V,3B,6o,2q,6o,2q,5S,2q,5S,2P,5n,3o,5n,3o,6u,3o,6u,2h,6u,2h,6u,2h,6u,2h,6u,2h,6u,2h,5n,2h,5n,2h,5S,2h,5S,2h,5S,4P,6o,3o,6V,2h,5l,2P,2Q,2P,2K,2P,3s,2q,3s,2q,3s]}]},{"1b":44,"C":"大分県","1Z":[{"D":[1X,I,H,I,2u,G,4m,G,5d,G,5L,K,4p,K,4p,I,2D,I,2D,I,2D,K,2D,K,2D,K,2D,G,2D,G,2D,S,3m,S,2O,S,1p,S,2H,1n,1a,1n,1a,1W,1a,1A,1J,3c,1J,2a,1J,1z,1u,1z,1u,1z,1u,2c,1J,2c,1u,Z,1u,1v,1u,1v,1u,1v,1u,1v,1J,1I,1a,1V,2H,2g,1p,1V,1p,1I,1p,1I,2H,Z,1p,Z,3q,Z,2s,1I,2s,1V,3m,2g,3m,2l,3m,2i,3m,3Q,2D,2t,2D,2y,2D,2y,2D,2y,4p,2y,5L,2E,4V,2y,5d,2E,4m,3i,2u,3i,H,3s,1X,3s,F,3i,2w,2E,2I,3i,O,3s,O,2K,O,3t,O,3t,O,3t,O,2K,1S,2K,O,2K,1S,2K,1m,3s,1m,3s,1q,3s,1D,3i,1q,2E,1D,2y,1H,2t,2k,2t,1l,2t,1H,2t,1H,2t,1D,4g,1D,2t,1q,4g,1m,4g,1m,3Q,1q,3a,1D,3a,1H,2i,1H,2i,1H,2l,1H,2l,1D,2i,1D,2i,1q,2l,1q,2i,1S,2l,1q,2g,1m,2g,1S,1V,1S,1I,1m,1v,1q,Z,1S,Z,O,Z,2I,Z,2w,1Q,F,1Q,1r,1Q,1r,1z,1r,1z,H,1z,1X,1z,F,1z,F,1z,F,2a,2w,2a,2I,2a,2I,2a,O,1A,O,1n,O,K,2w,I,F,I,1X,I,1X,I]}]},{"1b":45,"C":"宮崎県","1Z":[{"D":[O,3s,O,2K,O,3t,O,3t,O,2Q,2I,2Q,2I,2Q,2w,4q,F,5l,1X,6R,H,6R,1X,6V,H,6o,H,5S,1r,6o,1r,5S,1r,5S,1r,5n,1r,5n,2u,5n,2u,6u,2u,3u,4m,3u,5d,3V,4V,2Y,4p,4U,3m,4E,3m,3H,3m,3H,2D,5D,3m,5F,3m,4Z,2O,3h,2O,3l,2O,3l,2O,3l,2O,3l,3q,5p,3q,2p,3q,2p,4n,2A,4n,2A,1p,4y,4n,5s,1p,5s,2H,4y,2H,4y,2H,4y,1a,2A,1a,2p,1J,2p,1u,5j,1u,5j,1u,5j,1u,5p,1u,5p,1J,5p,1J,4Z,1J,3K,1u,3K,1u,3K,4S,5F,3x,5F,3x,5D,3x,5D,3x,3S,3x,3H,5V,3H,5V,4E,4J,2M,4r,5r,4r,4e,4r,4U,2x,5z,2x,4v,2j,4A,2j,4A,2j,4A,2j,2Y,2j,2Y,2j,2Y,2j,2Y,2j,2Y,2x,2Y,4u,2Y,4r,2Y,4J,2Y,3x,2Y,4S,2Y,1u,5t,1J,5t,1a,5t,1J,2R,1J,3u,2H,6u,1a,5n,1a,5S,1a,6o,1a,6o,1J,6V,1J,5l,1J,4q,1a,2Q,2H,2Q,1p,2Q,1p,3t,4n,2K,4n,2K,3q,2K,2O,3i,2s,2E,3m,2y,2D,2y,2D,2y,4p,2y,5L,2E,4V,2y,5d,2E,4m,3i,2u,3i,H,3s,1X,3s,F,3i,2w,2E,2I,3i,O,3s,O,3s]}]},{"1b":46,"C":"鹿児島県","1Z":[{"D":[2j,4A,2j,4A,2j,4A,2j,2Y,2j,2Y,1e,3V,1N,2R,2e,2R,1K,2R,1C,3V,2m,3V,2n,3V,2n,2R,2n,2R,2n,2R,2n,3u,5a,2R,5a,2R,2X,2R,2X,3V,3Z,2R,3B,2R,3B,3u,3B,3u,3A,3u,3B,6u,3A,5S,3A,6o,3B,5S,3B,5S,3B,5S,3B,5n,2q,5n,2q,5n,2P,5n,2P,6u,2P,2R,2q,2R,2q,2R,3B,5t,3B,2Y,2q,4A,3B,4A,3B,4v,2q,4U,2P,2G,2P,4e,2q,5r,2q,5r,3A,3S,3B,4Z,3o,3l,3o,3l,3o,3h,2h,3h,4s,3h,3o,5j,2h,5j,3o,2p,2h,2p,3o,2A,3o,4y,2P,4y,3B,4y,3Z,5s,2X,4G,2X,3P,5a,3P,2n,3P,2n,8a,2m,8a,2m,3P,2m,3P,2m,3P,3k,4G,1C,5s,3k,4y,2m,2A,2n,3h,2m,4Z,3k,5F,1C,5D,1K,3S,1C,3H,1K,3H,2e,3H,1e,3H,2j,3S,2j,5F,1e,3K,1N,3K,1N,3K,2e,5D,1K,5D,1C,5F,1C,3K,1K,4Z,2e,4Z,2e,3h,2e,3l,2e,5p,1N,2A,1N,5s,2e,3P,1K,6T,1C,5y,3k,5y,3k,4N,3k,4N,3k,4N,2m,4K,1C,4K,1K,4N,2e,4N,1N,4N,2j,4N,2x,5y,4r,6T,4r,8a,4J,8a,5V,3P,3x,3P,4S,4G,3x,4G,3x,4G,3x,5s,4J,4y,5V,2p,4S,5j,1u,5j,1u,5j,1u,5p,1J,5p,1J,4Z,1J,3K,1u,3K,1u,3K,4S,5F,3x,5F,3x,5D,3x,3S,3x,3H,5V,3H,5V,4E,4J,2M,4r,5r,4r,4e,4r,4U,2x,5z,2x,4v,2j,4A,2j,4A]},{"C":"種子島","D":[1K,5H,1K,7A,1C,5H,1C,8h,1K,4a,2e,5Z,1e,5u,2j,3g,2j,3g,2x,4D,2x,4D,4u,4R,4r,4R,4r,3g,4u,5u,4u,5T,2x,5X,2j,5Z,1e,4a,1e,8h,1e,5H,1N,5H,1K,5H,1K,5H]},{"C":"屋久島","D":[2X,7A,3A,6m,2P,6m,2h,5H,2h,4a,3o,4a,2P,4a,2q,5Z,3A,4a,2X,7c,2X,7A,2X,7A]},{"C":"下瓶島","D":[5k,4e,6s,4e,6s,5r,6q,2M,5U,5r,5i,5r,5i,5r,6s,2G,5k,2G,5k,4U,5k,4U,6w,4U,6w,2G,5k,2G,5k,4e,5k,4e,5k,4e]},{"C":"上瓶島","D":[5C,4v,4l,6B,4z,5z,4z,6B,4z,5z,4z,5z,4l,4U,5C,5z,5C,6B,5C,6B,5C,4v,5C,4v]},{"C":"奄美諸島","8u":[{"C":"徳之島","D":[6W,3T,6W,4w,6W,3G,6W,3b,7x,4k,7B,3r,7h,4k,8W,2o,7h,2o,7h,3G,7h,5x,7h,3T,7h,3I,7B,3I,6W,3T,6W,3T,6W,3T]},{"C":"与路島","D":[5I,2S,3U,2S,3U,2B,5I,2B,5I,2S,5I,2S]},{"C":"請島","D":[4Q,3E,4B,2S,4B,2B,4Q,2B,4Q,2S,4x,2S,4Q,3E,4Q,3E]},{"C":"与論島","D":[7U,4t,7U,5v,6U,5v,6U,4t,7U,4t,7U,4t]},{"C":"沖永良部島","D":[83,4d,83,4d,8Y,3p,8q,4d,9E,3p,9N,3y,aF,1k,9C,3p,83,4d,83,4d]},{"C":"加計呂麻島","D":[4Q,2r,4Q,2r,4x,2r,4Q,2r,4Q,2r,4x,1T,4x,2N,7R,1Y,7R,2B,6b,2B,6b,2B,4x,2B,4x,2B,4x,2B,4Q,1Y,4B,2B,4B,1Y,4Q,2N,4B,1T,4B,2r,4Q,2r,4Q,2r]},{"C":"奄美大島","D":[4Q,2C,6b,2C,4x,4M,6b,2W,7R,2W,7b,3N,8j,3N,7i,3N,7Z,3N,7Z,3N,9h,3N,7C,3N,5A,2T,6O,2T,6n,4h,5c,4h,6n,2T,6n,2T,5c,2T,6n,3N,5c,3N,5c,2T,5c,4h,6a,4o,4i,4o,4i,4h,4i,3N,6a,2W,6n,2W,6O,4M,5A,2C,9h,2C,7Z,2C,7Z,3e,7Z,2r,7Z,1T,7i,1T,8j,2N,7b,2N,7b,2N,7b,1Y,7b,2B,7R,1Y,6b,1T,4x,2r,5I,2C,4Q,2C,4Q,2C]},{"C":"喜界島","D":[6k,1T,6G,1T,7k,2r,6k,3e,6f,3e,6z,3e,6f,2r,6f,2r,6k,1T,6k,1T]}]}]},{"1b":47,"C":"沖縄県","1Z":[{"C":"沖縄本島","D":[4Y,4L,3F,5R,9c,4L,7w,3J,aM,3R,8P,6d,8K,6Y,8s,6d,8s,3R,8s,5R,8K,5R,8K,5R,8P,4L,bT,7v,7w,7v,8C,7L,8C,6K,6v,7a,4Y,6K,4Y,6K,3F,7a,3v,7a,3v,6C,6c,6C,8E,6C,7y,6C,7z,6C,7z,5w,7z,6L,7y,7P,7y,7P,7y,9d,7z,7P,7z,6L,a4,6L,a4,7P,a3,9d,b7,aa,b7,bh,a3,9e,8A,9Y,8k,9Y,8k,9V,8k,9e,8k,bh,8k,aa,8k,aa,ay,9d,ay,9d,8A,7P,b5,6F,b5,7a,a3,6C,a4,7a,7z,6K,7y,6K,8E,6K,8E,6K,6c,7L,3v,7L,3v,7v,3v,7v,6c,4L,8E,5R,8E,3J,6c,3J,6c,3R,3v,3R,4Y,5R,4Y,4L,4Y,4L]},{"C":"多良間島","D":[49,7g,51,7g,52,7X,50,8x,49,7g,49,7g]},{"C":"宮古島","D":[66,aq,69,9z,70,7X,72,8v,67,a9,66,7X,65,7g,64,9z,66,aq,66,aq]},{"C":"伊是名島","D":[4Y,5v,4Y,5v,4Y,5m,3F,5v,4Y,5v,4Y,5v]},{"C":"伊平屋島","D":[6v,6j,8C,5N,6v,4F,6v,4F,4Y,4t,4Y,4F,6v,6j,6v,6j]},{"C":"八重山諸島","8u":[{"C":"与那国島","D":[1,8J,4,8J,5,9Z,3,9Z,1,8J,1,8J]},{"C":"波照間島","D":[19,8o,22,8o,22,aZ,20,el,19,8o,19,8o]},{"C":"西表島","D":[22,8x,29,a9,27,9L,25,9L,22,8v,22,8x,22,8x]},{"C":"石垣島","D":[42,7g,40,a9,37,9L,34,9L,31,8x,35,en,36,8x,42,7g,42,7g]}]}]}];1g A={1:"eo",2:"ep",3:"eq",4:"er",5:"es",6:"et",7:"eu",8:"ev",9:"ew",10:"ex",11:"ey",12:"ez",13:"eA",14:"eB",15:"eC",16:"eD",17:"eE",18:"eF",19:"eG",20:"eH",21:"eI",22:"eJ",23:"eK",24:"eL",25:"eM",26:"eN",27:"eO",28:"eP",29:"eQ",30:"eR",31:"eS",32:"eT",33:"eU",34:"eV",35:"eW",36:"eX",37:"eY",38:"eZ",39:"f0",40:"f1",41:"f2",42:"f3",43:"f4",44:"f5",45:"f6",46:"f7",47:"f8"}})(dh);', 62, 940, '|||||||||||||||||||||||||||||||||||||this|name|coords|318|282|330|280|328|options|329|323|301|295|285|319|305|315|331|300|311|325|306|||341|||||||||||264|code|317|313|253|302|var|321|293|309|503|291|287|332|312|266|288|279|338|299|262|342|324|297|320|337|334|296|249|289|if|322|307|290|343|263|250|function|326|252|316|294|340|314|286|481|298|344|333|281|483|path|||||||||||336|308|339||251|310|345|237|347|254|292|346|247|246|492|392|240|480|270|351|278|504|283|255|352|413|393|484|478|272|353|width|377|265|284|303|356|327|380|482|269|239|358|368|485|474|height|prototype|476|244|371|499|||||||||||348|493|335|506|479|304|412|388|354|220|248|389|271|234|238|501|268|495|355|357|367|151|element|260|502|505|242|241|408|null|486|152|491|382|487|519|386|454|462|475|498|397|349|518|383|488|192|369|429|return|base|243|||||||||||419|469|430|500|378|444|350|473|210|224|494|232|277|267|472|273|359|257|235|510|256|373|489|196|394|233|372|194|428|411|381|509|396|219|451|258|402|521|477|401|496|236|195|409|261|465|376|275|463|case|153|387|||||||||||245|456|208|276|457|471|426|434|226|391|229|360|512|365|435|390|431|379|395|370|414|511|527|490|400|375|205|466|231|384|517|385|433|422|193|break|416|274|in|507|221|447|448|520|364|415|225|259|188|417|455|418|||||||||||209|197|150|516|497|217|461|432|427|508|216|449|425|207|363|190|227|else|228|452|366|154|230|222|453|218|443|374|526|data|464|528|215|212|color|191|524|529|442|445|206|450|211|361|213|399|167|362|187|189|515|467|||||||||||525|199|421|424|514|length|556|184|201|223|214|468|459|460|pointer|404|changedTouches|forEach|405|originalEvent|100|522|157|186|148|147|423|185|204|586|NanseiIslands|617|584|406|458|114|prefectures|523|403|581|hoverColor|530|Array|198|103|102|168|135|getContext|557|410|202||||172|||||||398|437|fillStyle|593|MSPointer|Pointer|124|420|166|200|140|Touch|587|441|567|470|177|size|162|undefined|subpath|561|446|558|105|for|142|407|156|116|149|605|616|138|618|549|161|130|on|area|164|160|585|440|599|597|181|render|183|indexOf|175|594||||||||||||180|155|531|534|movesIslands|436|203|isArea|596|fontColor|hovered|620|619|132|598|165|onSelect|style|selection|borderLineWidth|106|false|areas|borderLineColor|553|122|115|171|typeof|176|document|179|588|649|isNanseiIslands|lineWidth|563|107|174|104|170|169|true|showsPrefectureName|showsAreaName|131|535|129|font|536|551|filter|565|579|145|146|439|128|125|601|560|532|setData|getEnglishName|513|182|brighten|631|english|622|hovering|621|606|602|setProperties|drawPrefecture|beginPath|555|canvas|prefecture|642|a0a0a0|121|101|lineColor|141|stroke|604|113|throw|full|108|173|drawCoords|163|fontSize|628|629|Math|159|fontShadowColor|onHover|new|632|call|replace|134|643|findAreaBelongingToByCode|findPrefectureByCode|136|566|570|isHovering|offsetTop|pageY|offsetLeft|pageX|143|645|144|590|getCenterOfPrefecture|drawText|lineTo|getShortName|getName|595|initializeData|left|533|top|552|568|608|fitSize|607|571|closePath|591|613|while|moveTo|614|css|mousemove|touch|none|589|mousedown|583|582|580|647|578|preventDefault|stopPropagation|setTimeout|navigator|window|off|644|641|639|638|map|635|610|158|546|544|addEvent|540|615|parseInt|539|630|substr|switch|Arial|133|625|default|createElement|areaNameType|139|623|prefectureNameType|apply|fill|137|drawsBoxLine|117|renderAreaMap|123|renderPrefectureMap|626|backgroundColor|119|px|111|No|110|drawIslandsLine|109|strokeStyle|drawName|action|CANVAS|support|not|may|651|browser|Your|use|624|542|mouseleave|touchleave|MSPointerLeave|438|pointerleave|633|kanji|mouseenter|touchenter|MSPointerEnter|pointerenter|mouseup|touchend|romaji|MSPointerUp|634|pointerup|short|restore|touchmove|MSPointerMove|pointermove|fillText|00|shadowBlur|toString|touchstart|shadowColor|MSPointerDown|pointerdown|max|min|round|middle|textBaseline|catch|jQuery|textAlign|576|htmlfile|ActiveXObject|try|650|msPointerEnabled|gi|pointerEnabled|572|564|ontouchstart|String|Japan|areaColor|push|save|cursor|isPointInPath|112|573|575|mouseout|636|defined|is|append|609|550|such|has|603|548|543|600|126|592|541|solid|ms|borderStyle|hasData|borderColor|627|englishName|borderWidth|ShortName|fullName|background|ffffff|537|transparent|clearRect|554|constructor|create|type|extend|Object|hasOwnProperty|okinawaCliclableZone|japanMap|fn|strict|arguments|569|547|559|Hokkaido|Aomori|Iwate|Miyagi|Akita|Yamagata|Fukushima|Ibaraki|Tochigi|Gunma|Saitama|Chiba|Tokyo|Kanagawa|Niigata|Toyama|Ishikawa|Fukui|Yamanashi|Nagano|Gifu|Shizuoka|Aichi|Mie|Shiga|Kyoto|Osaka|Hyogo|Nara|Wakayama|Tottori|Shimane|Okayama|Hiroshima|Yamaguchi|Tokushima|Kagawa|Ehime|Kochi|Fukuoka|Saga|Nagasaki|Kumamoto|Oita|Miyazaki|Kagoshima|Okinawa|center'.split('|'), 0, {}));

},{}]},{},[1]);
