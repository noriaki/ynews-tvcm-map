import jQuery from 'jquery';
import 'jquery.japan-map';
import 'jquery.tubeplayer';

class YNewsCM {
  /* class variables */
  static get AREAS() {
    return [
      {"code": 1 , "name":"北海道地方", "color":"#ca93ea", "hoverColor":"#e0b1fb", "prefectures":[1]},
      {"code": 2 , "name":"東北地方",   "color":"#a7a5ea", "hoverColor":"#d6d4fd", "prefectures":[2,3,4,5,6,7]},
      {"code": 3 , "name":"関東地方",   "color":"#84b0f6", "hoverColor":"#c1d8fd", "prefectures":[8,9,10,11,12,13,14]},
      {"code": 4 , "name":"北陸・甲信越地方",   "color":"#52d49c", "hoverColor":"#93ecc5", "prefectures":[15,16,17,18,19,20]},
      {"code": 5 , "name":"東海地方",   "color":"#77e18e", "hoverColor":"#aff9bf", "prefectures":[21,22,23,24]},
      {"code": 6 , "name":"近畿地方",   "color":"#f2db7b", "hoverColor":"#f6e8ac", "prefectures":[25,26,27,28,29,30]},
      {"code": 7 , "name":"中国地方",   "color":"#f9ca6c", "hoverColor":"#ffe5b0", "prefectures":[31,32,33,34,35]},
      {"code": 8 , "name":"四国地方",   "color":"#fbad8b", "hoverColor":"#ffd7c5", "prefectures":[36,37,38,39]},
      {"code": 9 , "name":"九州地方",   "color":"#f7a6a6", "hoverColor":"#ffcece", "prefectures":[40,41,42,43,44,45,46]},
      {"code":10 , "name":"沖縄地方",   "color":"#ea89c4", "hoverColor":"#fdcae9", "prefectures":[47]}
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
      , // 茨城
      , // 栃木
      , // 群馬
      , // 埼玉
      , // 千葉
      , // 東京
      , // 神奈川
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

  /* initialize */
  constructor() {}

  /* prototype methods */
  init() {
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
      modestbranding: false
    });
  }
}


jQuery(function($) {
  const ynewscm = new YNewsCM();
  $('#map').japanMap(ynewscm.init());
});
