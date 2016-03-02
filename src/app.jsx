import jQuery from 'jquery';
import 'jquery.japan-map';
import 'jquery.tubeplayer';

class YNewsCM {
  /* class variables */
  static get AREAS() {
    return [
      {code : 1, name: "北海道地方", color: "#7f7eda", hoverColor: "#b3b2ee", prefectures: [1]},
      {code : 2, name: "東北地方",   color: "#759ef4", hoverColor: "#98b9ff", prefectures: [2,3,4,5,6,7]},
      {code : 3, name: "関東地方",   color: "#7ecfea", hoverColor: "#b7e5f4", prefectures: [8,9,10,11,12,13,14]},
      {code : 4, name: "中部地方",   color: "#7cdc92", hoverColor: "#aceebb", prefectures: [15,16,17,18,19,20,21,22,23]},
      {code : 5, name: "近畿地方",   color: "#ffe966", hoverColor: "#fff19c", prefectures: [24,25,26,27,28,29,30]},
      {code : 6, name: "中国地方",   color: "#ffcc66", hoverColor: "#ffe0a3", prefectures: [31,32,33,34,35]},
      {code : 7, name: "四国地方",   color: "#fb9466", hoverColor: "#ffbb9c", prefectures: [36,37,38,39]},
      {code : 2, name: "九州地方",   color: "#ff9999", hoverColor: "#ffbdbd", prefectures: [40,41,42,43,44,45,46]},
      {code : 9, name: "沖縄地方",   color: "#eb98ff", hoverColor: "#f5c9ff", prefectures: [47]}
    ];
  }

  static get VIDEOS() {
    return [
      {"title":"「地元を忘れた僕」篇_Yahoo!ニュースアプリCM","id":"utbJ5gCH0no"}, // 関東一都六県
      {"title":"【北海道篇】Yahoo!ニュースアプリCM","id":"YIxgrxI0t-o"},
      {"title":"【青森篇】Yahoo!ニュースアプリCM","id":"-WurasGbPfE"},
      {"title":"【岩手篇】Yahoo!ニュースアプリCM","id":"apZA6DthyYY"},
      {"title":"【宮城篇】Yahoo!ニュースアプリCM","id":"c5DsFeEGyP0"},
      {"title":"【秋田篇】Yahoo!ニュースアプリCM","id":"wcgiEH-VL4g"},
      {"title":"【山形篇】Yahoo!ニュースアプリCM","id":"ZVqZCHf8AFk"},
      {"title":"【福島篇】Yahoo!ニュースアプリCM","id":"bEfbxTeb5Z0"},
      /* 茨城 */, /* 栃木 */, /* 群馬 */, /* 埼玉 */,
      /* 千葉 */, /* 東京 */, /* 神奈川 */,
      {"title":"【新潟篇】Yahoo!ニュースアプリCM","id":"kTiYhNYsyt0"},
      {"title":"【富山篇】Yahoo!ニュースアプリCM","id":"LMjRjFrgxqw"},
      {"title":"【石川篇】Yahoo!ニュースアプリCM","id":"S8rAvUljh-U"},
      {"title":"【福井篇】Yahoo!ニュースアプリCM","id":"AjApBmLNIRE"},
      {"title":"【山梨篇】Yahoo!ニュースアプリCM","id":"C64o4iohBEA"},
      {"title":"【長野篇】Yahoo!ニュースアプリCM","id":"EJWmMCXb2Bc"},
      {"title":"【岐阜篇】Yahoo!ニュースアプリCM","id":"HdE0PTeEf44"},
      {"title":"【静岡篇】Yahoo!ニュースアプリCM","id":"wCvRKMVimWA"},
      {"title":"【愛知篇】Yahoo!ニュースアプリCM","id":"y9BY-RAPOo8"},
      {"title":"【三重篇】Yahoo!ニュースアプリCM","id":"V1UZzl1QMHk"},
      {"title":"【滋賀篇】Yahoo!ニュースアプリCM","id":"pZZJ5JB_HvI"},
      {"title":"【京都篇】Yahoo!ニュースアプリCM","id":"DlGPD5E_zVI"},
      {"title":"【大阪篇】Yahoo!ニュースアプリCM","id":"w-oZcJ00sRw"},
      {"title":"【兵庫篇】Yahoo!ニュースアプリCM","id":"lBSjzAbFOGo"},
      {"title":"【奈良篇】Yahoo!ニュースアプリCM","id":"Qc-ntyaRLxg"},
      {"title":"【和歌山篇】Yahoo!ニュースアプリCM","id":"bwBpNxYkr4Y"},
      {"title":"【鳥取篇】Yahoo!ニュースアプリCM","id":"OWeyqXBy42Y"},
      {"title":"【島根篇】Yahoo!ニュースアプリCM","id":"nNCpdyP2UyA"},
      {"title":"【岡山篇】Yahoo!ニュースアプリCM","id":"ZGVhHORc8nw"},
      {"title":"【広島篇】Yahoo!ニュースアプリCM","id":"q4R613279l8"},
      {"title":"【山口篇】Yahoo!ニュースアプリCM","id":"ZP_11RwPULo"},
      {"title":"【徳島篇】Yahoo!ニュースアプリCM","id":"vdIqQ1gcUWQ"},
      {"title":"【香川篇】Yahoo!ニュースアプリCM","id":"DMzCA7hYvOA"},
      {"title":"【愛媛篇】Yahoo!ニュースアプリCM","id":"LtcJ9TtTxvM"},
      {"title":"【高知篇】Yahoo!ニュースアプリCM","id":"hpyI1_sBCYY"},
      {"title":"【福岡篇】Yahoo!ニュースアプリCM","id":"1b66cSoO-sU"},
      {"title":"【佐賀篇】Yahoo!ニュースアプリCM","id":"OGp3eXmR8Sg"},
      {"title":"【長崎篇】Yahoo!ニュースアプリCM","id":"AkuJfKarmy8"},
      {"title":"【熊本篇】Yahoo!ニュースアプリCM","id":"NlKn6qhilSE"},
      {"title":"【大分篇】Yahoo!ニュースアプリCM","id":"66giPpoolN4"},
      {"title":"【宮崎篇】Yahoo!ニュースアプリCM","id":"bwqLmz-7x3o"},
      {"title":"【鹿児島篇】Yahoo!ニュースアプリCM","id":"ya84gurSkRE"},
      {"title":"【沖縄篇】Yahoo!ニュースアプリCM","id":"THisa6ZVcqA"}
    ];
  }

  /* accessors */
  get areas() { return this.constructor.AREAS; }
  get videos() { return this.constructor.VIDEOS; }

  get map_options() {
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
      onSelect: this.select_handler.bind(this)
    };
  }

  /* initialize */
  constructor(selector='#map') {
    this.selector = selector;
    this.map = jQuery(selector);
  }

  /* prototype methods */
  init() {
    this.render();
    jQuery(window).on('resize', () => { this.render(); });
  }

  render() {
    this.map.empty();
    this.map.japanMap(
      jQuery.extend({}, this.map_options, {
        width: this.map.width()
      })
    );
  }

  select_handler(data) {
    const index = data.area.code === 3 ? 0 : data.code;
    const video = this.videos[index];
    const player = jQuery('#player');
    jQuery('#title').text(video.title);
    player.tubeplayer("destroy");
    player.tubeplayer({
      initialVideo: video.id,
      width: 560,
      height: 315,
      color: "white",
      theme: "light",
      autoPlay: true,
      protocol: window.location.protocol == "https:" ? "https" : "http",
      modestbranding: false
    });
  }
}


jQuery(function() {
  const ynewscm = new YNewsCM('#map');
  ynewscm.init();
});
