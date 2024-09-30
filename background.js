/*! For license information please see background.js.LICENSE.txt */
(() => {
  var t = {
      9293: function (t, e, n) {
        var r;
        !(function (i, o) {
          "use strict";
          var a = "function",
            s = "undefined",
            u = "object",
            c = "string",
            l = "model",
            f = "name",
            p = "type",
            h = "vendor",
            d = "version",
            g = "architecture",
            y = "console",
            v = "mobile",
            m = "tablet",
            b = "smarttv",
            w = "wearable",
            _ = "embedded",
            E = "Amazon",
            S = "Apple",
            T = "ASUS",
            x = "BlackBerry",
            O = "Browser",
            I = "Chrome",
            A = "Firefox",
            k = "Google",
            R = "Huawei",
            P = "LG",
            N = "Microsoft",
            C = "Motorola",
            D = "Opera",
            j = "Samsung",
            L = "Sharp",
            M = "Sony",
            U = "Xiaomi",
            B = "Zebra",
            F = "Facebook",
            q = function (t) {
              for (var e = {}, n = 0; n < t.length; n++)
                e[t[n].toUpperCase()] = t[n];
              return e;
            },
            V = function (t, e) {
              return typeof t === c && -1 !== z(e).indexOf(z(t));
            },
            z = function (t) {
              return t.toLowerCase();
            },
            W = function (t, e) {
              if (typeof t === c)
                return (
                  (t = t.replace(/^\s\s*/, "")),
                  typeof e === s ? t : t.substring(0, 350)
                );
            },
            H = function (t, e) {
              for (var n, r, i, s, c, l, f = 0; f < e.length && !c; ) {
                var p = e[f],
                  h = e[f + 1];
                for (n = r = 0; n < p.length && !c; )
                  if ((c = p[n++].exec(t)))
                    for (i = 0; i < h.length; i++)
                      (l = c[++r]),
                        typeof (s = h[i]) === u && s.length > 0
                          ? 2 === s.length
                            ? typeof s[1] == a
                              ? (this[s[0]] = s[1].call(this, l))
                              : (this[s[0]] = s[1])
                            : 3 === s.length
                            ? typeof s[1] !== a || (s[1].exec && s[1].test)
                              ? (this[s[0]] = l ? l.replace(s[1], s[2]) : o)
                              : (this[s[0]] = l ? s[1].call(this, l, s[2]) : o)
                            : 4 === s.length &&
                              (this[s[0]] = l
                                ? s[3].call(this, l.replace(s[1], s[2]))
                                : o)
                          : (this[s] = l || o);
                f += 2;
              }
            },
            $ = function (t, e) {
              for (var n in e)
                if (typeof e[n] === u && e[n].length > 0) {
                  for (var r = 0; r < e[n].length; r++)
                    if (V(e[n][r], t)) return "?" === n ? o : n;
                } else if (V(e[n], t)) return "?" === n ? o : n;
              return t;
            },
            G = {
              ME: "4.90",
              "NT 3.11": "NT3.51",
              "NT 4.0": "NT4.0",
              2e3: "NT 5.0",
              XP: ["NT 5.1", "NT 5.2"],
              Vista: "NT 6.0",
              7: "NT 6.1",
              8: "NT 6.2",
              8.1: "NT 6.3",
              10: ["NT 6.4", "NT 10.0"],
              RT: "ARM",
            },
            Y = {
              browser: [
                [/\b(?:crmo|crios)\/([\w\.]+)/i],
                [d, [f, "Chrome"]],
                [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                [d, [f, "Edge"]],
                [
                  /(opera mini)\/([-\w\.]+)/i,
                  /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
                  /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i,
                ],
                [f, d],
                [/opios[\/ ]+([\w\.]+)/i],
                [d, [f, D + " Mini"]],
                [/\bopr\/([\w\.]+)/i],
                [d, [f, D]],
                [
                  /(kindle)\/([\w\.]+)/i,
                  /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,
                  /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,
                  /(ba?idubrowser)[\/ ]?([\w\.]+)/i,
                  /(?:ms|\()(ie) ([\w\.]+)/i,
                  /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,
                  /(weibo)__([\d\.]+)/i,
                ],
                [f, d],
                [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
                [d, [f, "UC" + O]],
                [
                  /microm.+\bqbcore\/([\w\.]+)/i,
                  /\bqbcore\/([\w\.]+).+microm/i,
                ],
                [d, [f, "WeChat(Win) Desktop"]],
                [/micromessenger\/([\w\.]+)/i],
                [d, [f, "WeChat"]],
                [/konqueror\/([\w\.]+)/i],
                [d, [f, "Konqueror"]],
                [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
                [d, [f, "IE"]],
                [/yabrowser\/([\w\.]+)/i],
                [d, [f, "Yandex"]],
                [/(avast|avg)\/([\w\.]+)/i],
                [[f, /(.+)/, "$1 Secure " + O], d],
                [/\bfocus\/([\w\.]+)/i],
                [d, [f, A + " Focus"]],
                [/\bopt\/([\w\.]+)/i],
                [d, [f, D + " Touch"]],
                [/coc_coc\w+\/([\w\.]+)/i],
                [d, [f, "Coc Coc"]],
                [/dolfin\/([\w\.]+)/i],
                [d, [f, "Dolphin"]],
                [/coast\/([\w\.]+)/i],
                [d, [f, D + " Coast"]],
                [/miuibrowser\/([\w\.]+)/i],
                [d, [f, "MIUI " + O]],
                [/fxios\/([-\w\.]+)/i],
                [d, [f, A]],
                [/\bqihu|(qi?ho?o?|360)browser/i],
                [[f, "360 " + O]],
                [/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],
                [[f, /(.+)/, "$1 " + O], d],
                [/(comodo_dragon)\/([\w\.]+)/i],
                [[f, /_/g, " "], d],
                [
                  /(electron)\/([\w\.]+) safari/i,
                  /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
                  /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i,
                ],
                [f, d],
                [
                  /(metasr)[\/ ]?([\w\.]+)/i,
                  /(lbbrowser)/i,
                  /\[(linkedin)app\]/i,
                ],
                [f],
                [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
                [[f, F], d],
                [
                  /safari (line)\/([\w\.]+)/i,
                  /\b(line)\/([\w\.]+)\/iab/i,
                  /(chromium|instagram)[\/ ]([-\w\.]+)/i,
                ],
                [f, d],
                [/\bgsa\/([\w\.]+) .*safari\//i],
                [d, [f, "GSA"]],
                [/headlesschrome(?:\/([\w\.]+)| )/i],
                [d, [f, I + " Headless"]],
                [/ wv\).+(chrome)\/([\w\.]+)/i],
                [[f, I + " WebView"], d],
                [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
                [d, [f, "Android " + O]],
                [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
                [f, d],
                [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
                [d, [f, "Mobile Safari"]],
                [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
                [d, f],
                [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
                [
                  f,
                  [
                    d,
                    $,
                    {
                      "1.0": "/8",
                      1.2: "/1",
                      1.3: "/3",
                      "2.0": "/412",
                      "2.0.2": "/416",
                      "2.0.3": "/417",
                      "2.0.4": "/419",
                      "?": "/",
                    },
                  ],
                ],
                [/(webkit|khtml)\/([\w\.]+)/i],
                [f, d],
                [/(navigator|netscape\d?)\/([-\w\.]+)/i],
                [[f, "Netscape"], d],
                [/mobile vr; rv:([\w\.]+)\).+firefox/i],
                [d, [f, A + " Reality"]],
                [
                  /ekiohf.+(flow)\/([\w\.]+)/i,
                  /(swiftfox)/i,
                  /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,
                  /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
                  /(firefox)\/([\w\.]+)/i,
                  /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
                  /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
                  /(links) \(([\w\.]+)/i,
                ],
                [f, d],
                [/(cobalt)\/([\w\.]+)/i],
                [f, [d, /master.|lts./, ""]],
              ],
              cpu: [
                [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
                [[g, "amd64"]],
                [/(ia32(?=;))/i],
                [[g, z]],
                [/((?:i[346]|x)86)[;\)]/i],
                [[g, "ia32"]],
                [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
                [[g, "arm64"]],
                [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
                [[g, "armhf"]],
                [/windows (ce|mobile); ppc;/i],
                [[g, "arm"]],
                [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
                [[g, /ower/, "", z]],
                [/(sun4\w)[;\)]/i],
                [[g, "sparc"]],
                [
                  /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i,
                ],
                [[g, z]],
              ],
              device: [
                [
                  /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i,
                ],
                [l, [h, j], [p, m]],
                [
                  /\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i,
                  /samsung[- ]([-\w]+)/i,
                  /sec-(sgh\w+)/i,
                ],
                [l, [h, j], [p, v]],
                [/((ipod|iphone)\d+,\d+)/i],
                [l, [h, S], [p, v]],
                [/(ipad\d+,\d+)/i],
                [l, [h, S], [p, m]],
                [/\((ip(?:hone|od)[\w ]*);/i],
                [l, [h, S], [p, v]],
                [
                  /\((ipad);[-\w\),; ]+apple/i,
                  /applecoremedia\/[\w\.]+ \((ipad)/i,
                  /\b(ipad)\d\d?,\d\d?[;\]].+ios/i,
                ],
                [l, [h, S], [p, m]],
                [/(macintosh);/i],
                [l, [h, S]],
                [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
                [l, [h, R], [p, m]],
                [
                  /(?:huawei|honor)([-\w ]+)[;\)]/i,
                  /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i,
                ],
                [l, [h, R], [p, v]],
                [
                  /\b(poco[\w ]+)(?: bui|\))/i,
                  /\b; (\w+) build\/hm\1/i,
                  /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
                  /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
                  /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i,
                ],
                [
                  [l, /_/g, " "],
                  [h, U],
                  [p, v],
                ],
                [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
                [
                  [l, /_/g, " "],
                  [h, U],
                  [p, m],
                ],
                [
                  /; (\w+) bui.+ oppo/i,
                  /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i,
                ],
                [l, [h, "OPPO"], [p, v]],
                [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
                [l, [h, "Vivo"], [p, v]],
                [/\b(rmx[12]\d{3})(?: bui|;|\))/i],
                [l, [h, "Realme"], [p, v]],
                [
                  /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
                  /\bmot(?:orola)?[- ](\w*)/i,
                  /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i,
                ],
                [l, [h, C], [p, v]],
                [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
                [l, [h, C], [p, m]],
                [
                  /((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i,
                ],
                [l, [h, P], [p, m]],
                [
                  /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
                  /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
                  /\blg-?([\d\w]+) bui/i,
                ],
                [l, [h, P], [p, v]],
                [
                  /(ideatab[-\w ]+)/i,
                  /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i,
                ],
                [l, [h, "Lenovo"], [p, m]],
                [
                  /(?:maemo|nokia).*(n900|lumia \d+)/i,
                  /nokia[-_ ]?([-\w\.]*)/i,
                ],
                [
                  [l, /_/g, " "],
                  [h, "Nokia"],
                  [p, v],
                ],
                [/(pixel c)\b/i],
                [l, [h, k], [p, m]],
                [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
                [l, [h, k], [p, v]],
                [
                  /droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
                ],
                [l, [h, M], [p, v]],
                [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
                [
                  [l, "Xperia Tablet"],
                  [h, M],
                  [p, m],
                ],
                [
                  / (kb2005|in20[12]5|be20[12][59])\b/i,
                  /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i,
                ],
                [l, [h, "OnePlus"], [p, v]],
                [
                  /(alexa)webm/i,
                  /(kf[a-z]{2}wi)( bui|\))/i,
                  /(kf[a-z]+)( bui|\)).+silk\//i,
                ],
                [l, [h, E], [p, m]],
                [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
                [
                  [l, /(.+)/g, "Fire Phone $1"],
                  [h, E],
                  [p, v],
                ],
                [/(playbook);[-\w\),; ]+(rim)/i],
                [l, h, [p, m]],
                [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
                [l, [h, x], [p, v]],
                [
                  /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i,
                ],
                [l, [h, T], [p, m]],
                [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
                [l, [h, T], [p, v]],
                [/(nexus 9)/i],
                [l, [h, "HTC"], [p, m]],
                [
                  /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
                  /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
                  /(alcatel|geeksphone|nexian|panasonic|sony(?!-bra))[-_ ]?([-\w]*)/i,
                ],
                [h, [l, /_/g, " "], [p, v]],
                [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
                [l, [h, "Acer"], [p, m]],
                [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
                [l, [h, "Meizu"], [p, v]],
                [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
                [l, [h, L], [p, v]],
                [
                  /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,
                  /(hp) ([\w ]+\w)/i,
                  /(asus)-?(\w+)/i,
                  /(microsoft); (lumia[\w ]+)/i,
                  /(lenovo)[-_ ]?([-\w]+)/i,
                  /(jolla)/i,
                  /(oppo) ?([\w ]+) bui/i,
                ],
                [h, l, [p, v]],
                [
                  /(archos) (gamepad2?)/i,
                  /(hp).+(touchpad(?!.+tablet)|tablet)/i,
                  /(kindle)\/([\w\.]+)/i,
                  /(nook)[\w ]+build\/(\w+)/i,
                  /(dell) (strea[kpr\d ]*[\dko])/i,
                  /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
                  /(trinity)[- ]*(t\d{3}) bui/i,
                  /(gigaset)[- ]+(q\w{1,9}) bui/i,
                  /(vodafone) ([\w ]+)(?:\)| bui)/i,
                ],
                [h, l, [p, m]],
                [/(surface duo)/i],
                [l, [h, N], [p, m]],
                [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
                [l, [h, "Fairphone"], [p, v]],
                [/(u304aa)/i],
                [l, [h, "AT&T"], [p, v]],
                [/\bsie-(\w*)/i],
                [l, [h, "Siemens"], [p, v]],
                [/\b(rct\w+) b/i],
                [l, [h, "RCA"], [p, m]],
                [/\b(venue[\d ]{2,7}) b/i],
                [l, [h, "Dell"], [p, m]],
                [/\b(q(?:mv|ta)\w+) b/i],
                [l, [h, "Verizon"], [p, m]],
                [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
                [l, [h, "Barnes & Noble"], [p, m]],
                [/\b(tm\d{3}\w+) b/i],
                [l, [h, "NuVision"], [p, m]],
                [/\b(k88) b/i],
                [l, [h, "ZTE"], [p, m]],
                [/\b(nx\d{3}j) b/i],
                [l, [h, "ZTE"], [p, v]],
                [/\b(gen\d{3}) b.+49h/i],
                [l, [h, "Swiss"], [p, v]],
                [/\b(zur\d{3}) b/i],
                [l, [h, "Swiss"], [p, m]],
                [/\b((zeki)?tb.*\b) b/i],
                [l, [h, "Zeki"], [p, m]],
                [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
                [[h, "Dragon Touch"], l, [p, m]],
                [/\b(ns-?\w{0,9}) b/i],
                [l, [h, "Insignia"], [p, m]],
                [/\b((nxa|next)-?\w{0,9}) b/i],
                [l, [h, "NextBook"], [p, m]],
                [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
                [[h, "Voice"], l, [p, v]],
                [/\b(lvtel\-)?(v1[12]) b/i],
                [[h, "LvTel"], l, [p, v]],
                [/\b(ph-1) /i],
                [l, [h, "Essential"], [p, v]],
                [/\b(v(100md|700na|7011|917g).*\b) b/i],
                [l, [h, "Envizen"], [p, m]],
                [/\b(trio[-\w\. ]+) b/i],
                [l, [h, "MachSpeed"], [p, m]],
                [/\btu_(1491) b/i],
                [l, [h, "Rotor"], [p, m]],
                [/(shield[\w ]+) b/i],
                [l, [h, "Nvidia"], [p, m]],
                [/(sprint) (\w+)/i],
                [h, l, [p, v]],
                [/(kin\.[onetw]{3})/i],
                [
                  [l, /\./g, " "],
                  [h, N],
                  [p, v],
                ],
                [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                [l, [h, B], [p, m]],
                [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
                [l, [h, B], [p, v]],
                [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
                [h, l, [p, y]],
                [/droid.+; (shield) bui/i],
                [l, [h, "Nvidia"], [p, y]],
                [/(playstation [345portablevi]+)/i],
                [l, [h, M], [p, y]],
                [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
                [l, [h, N], [p, y]],
                [/smart-tv.+(samsung)/i],
                [h, [p, b]],
                [/hbbtv.+maple;(\d+)/i],
                [
                  [l, /^/, "SmartTV"],
                  [h, j],
                  [p, b],
                ],
                [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
                [
                  [h, P],
                  [p, b],
                ],
                [/(apple) ?tv/i],
                [h, [l, S + " TV"], [p, b]],
                [/crkey/i],
                [
                  [l, I + "cast"],
                  [h, k],
                  [p, b],
                ],
                [/droid.+aft(\w)( bui|\))/i],
                [l, [h, E], [p, b]],
                [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
                [l, [h, L], [p, b]],
                [/(bravia[\w ]+)( bui|\))/i],
                [l, [h, M], [p, b]],
                [/(mitv-\w{5}) bui/i],
                [l, [h, U], [p, b]],
                [
                  /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
                  /hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i,
                ],
                [
                  [h, W],
                  [l, W],
                  [p, b],
                ],
                [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
                [[p, b]],
                [/((pebble))app/i],
                [h, l, [p, w]],
                [/droid.+; (glass) \d/i],
                [l, [h, k], [p, w]],
                [/droid.+; (wt63?0{2,3})\)/i],
                [l, [h, B], [p, w]],
                [/(quest( 2)?)/i],
                [l, [h, F], [p, w]],
                [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
                [h, [p, _]],
                [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],
                [l, [p, v]],
                [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
                [l, [p, m]],
                [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
                [[p, m]],
                [
                  /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i,
                ],
                [[p, v]],
                [/(android[-\w\. ]{0,9});.+buil/i],
                [l, [h, "Generic"]],
              ],
              engine: [
                [/windows.+ edge\/([\w\.]+)/i],
                [d, [f, "EdgeHTML"]],
                [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                [d, [f, "Blink"]],
                [
                  /(presto)\/([\w\.]+)/i,
                  /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
                  /ekioh(flow)\/([\w\.]+)/i,
                  /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
                  /(icab)[\/ ]([23]\.[\d\.]+)/i,
                ],
                [f, d],
                [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                [d, f],
              ],
              os: [
                [/microsoft (windows) (vista|xp)/i],
                [f, d],
                [
                  /(windows) nt 6\.2; (arm)/i,
                  /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,
                  /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,
                ],
                [f, [d, $, G]],
                [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
                [
                  [f, "Windows"],
                  [d, $, G],
                ],
                [
                  /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
                  /cfnetwork\/.+darwin/i,
                ],
                [
                  [d, /_/g, "."],
                  [f, "iOS"],
                ],
                [
                  /(mac os x) ?([\w\. ]*)/i,
                  /(macintosh|mac_powerpc\b)(?!.+haiku)/i,
                ],
                [
                  [f, "Mac OS"],
                  [d, /_/g, "."],
                ],
                [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
                [d, f],
                [
                  /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
                  /(blackberry)\w*\/([\w\.]*)/i,
                  /(tizen|kaios)[\/ ]([\w\.]+)/i,
                  /\((series40);/i,
                ],
                [f, d],
                [/\(bb(10);/i],
                [d, [f, x]],
                [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
                [d, [f, "Symbian"]],
                [
                  /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i,
                ],
                [d, [f, A + " OS"]],
                [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
                [d, [f, "webOS"]],
                [/crkey\/([\d\.]+)/i],
                [d, [f, I + "cast"]],
                [/(cros) [\w]+ ([\w\.]+\w)/i],
                [[f, "Chromium OS"], d],
                [
                  /(nintendo|playstation) ([wids345portablevuch]+)/i,
                  /(xbox); +xbox ([^\);]+)/i,
                  /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
                  /(mint)[\/\(\) ]?(\w*)/i,
                  /(mageia|vectorlinux)[; ]/i,
                  /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
                  /(hurd|linux) ?([\w\.]*)/i,
                  /(gnu) ?([\w\.]*)/i,
                  /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
                  /(haiku) (\w+)/i,
                ],
                [f, d],
                [/(sunos) ?([\w\.\d]*)/i],
                [[f, "Solaris"], d],
                [
                  /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
                  /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
                  /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,
                  /(unix) ?([\w\.]*)/i,
                ],
                [f, d],
              ],
            },
            K = function (t, e) {
              if ((typeof t === u && ((e = t), (t = o)), !(this instanceof K)))
                return new K(t, e).getResult();
              var n =
                  t ||
                  (typeof i !== s && i.navigator && i.navigator.userAgent
                    ? i.navigator.userAgent
                    : ""),
                r = e
                  ? (function (t, e) {
                      var n = {};
                      for (var r in t)
                        e[r] && e[r].length % 2 == 0
                          ? (n[r] = e[r].concat(t[r]))
                          : (n[r] = t[r]);
                      return n;
                    })(Y, e)
                  : Y;
              return (
                (this.getBrowser = function () {
                  var t,
                    e = {};
                  return (
                    (e[f] = o),
                    (e[d] = o),
                    H.call(e, n, r.browser),
                    (e.major =
                      typeof (t = e.version) === c
                        ? t.replace(/[^\d\.]/g, "").split(".")[0]
                        : o),
                    e
                  );
                }),
                (this.getCPU = function () {
                  var t = {};
                  return (t[g] = o), H.call(t, n, r.cpu), t;
                }),
                (this.getDevice = function () {
                  var t = {};
                  return (
                    (t[h] = o),
                    (t[l] = o),
                    (t[p] = o),
                    H.call(t, n, r.device),
                    t
                  );
                }),
                (this.getEngine = function () {
                  var t = {};
                  return (t[f] = o), (t[d] = o), H.call(t, n, r.engine), t;
                }),
                (this.getOS = function () {
                  var t = {};
                  return (t[f] = o), (t[d] = o), H.call(t, n, r.os), t;
                }),
                (this.getResult = function () {
                  return {
                    ua: this.getUA(),
                    browser: this.getBrowser(),
                    engine: this.getEngine(),
                    os: this.getOS(),
                    device: this.getDevice(),
                    cpu: this.getCPU(),
                  };
                }),
                (this.getUA = function () {
                  return n;
                }),
                (this.setUA = function (t) {
                  return (
                    (n = typeof t === c && t.length > 350 ? W(t, 350) : t), this
                  );
                }),
                this.setUA(n),
                this
              );
            };
          (K.VERSION = "0.7.33"),
            (K.BROWSER = q([f, d, "major"])),
            (K.CPU = q([g])),
            (K.DEVICE = q([l, h, p, y, v, b, m, w, _])),
            (K.ENGINE = K.OS = q([f, d])),
            typeof e !== s
              ? (t.exports && (e = t.exports = K), (e.UAParser = K))
              : n.amdO
              ? (r = function () {
                  return K;
                }.call(e, n, e, t)) === o || (t.exports = r)
              : typeof i !== s && (i.UAParser = K);
          var X = typeof i !== s && (i.jQuery || i.Zepto);
          if (X && !X.ua) {
            var Q = new K();
            (X.ua = Q.getResult()),
              (X.ua.get = function () {
                return Q.getUA();
              }),
              (X.ua.set = function (t) {
                Q.setUA(t);
                var e = Q.getResult();
                for (var n in e) X.ua[n] = e[n];
              });
          }
        })("object" == typeof window ? window : this);
      },
      9332: (t) => {
        var e;
        (e = {
          name: "production",
          backend: "https://api.subtrans.cc",
          web: "https://www.subtrans.cc",
          dashboard: "https://app.subtrans.cc",
          ga_ua_id: "UA-220189590-3",
          amp_key: "07c61c6ea81b7a9d1d834b9eaf14e5f4",
        }),
          (t.exports = { env: e });
      },
      9742: (t, e) => {
        "use strict";
        (e.byteLength = function (t) {
          var e = s(t),
            n = e[0],
            r = e[1];
          return (3 * (n + r)) / 4 - r;
        }),
          (e.toByteArray = function (t) {
            var e,
              n,
              o = s(t),
              a = o[0],
              u = o[1],
              c = new i(
                (function (t, e, n) {
                  return (3 * (e + n)) / 4 - n;
                })(0, a, u)
              ),
              l = 0,
              f = u > 0 ? a - 4 : a;
            for (n = 0; n < f; n += 4)
              (e =
                (r[t.charCodeAt(n)] << 18) |
                (r[t.charCodeAt(n + 1)] << 12) |
                (r[t.charCodeAt(n + 2)] << 6) |
                r[t.charCodeAt(n + 3)]),
                (c[l++] = (e >> 16) & 255),
                (c[l++] = (e >> 8) & 255),
                (c[l++] = 255 & e);
            return (
              2 === u &&
                ((e =
                  (r[t.charCodeAt(n)] << 2) | (r[t.charCodeAt(n + 1)] >> 4)),
                (c[l++] = 255 & e)),
              1 === u &&
                ((e =
                  (r[t.charCodeAt(n)] << 10) |
                  (r[t.charCodeAt(n + 1)] << 4) |
                  (r[t.charCodeAt(n + 2)] >> 2)),
                (c[l++] = (e >> 8) & 255),
                (c[l++] = 255 & e)),
              c
            );
          }),
          (e.fromByteArray = function (t) {
            for (
              var e,
                r = t.length,
                i = r % 3,
                o = [],
                a = 16383,
                s = 0,
                c = r - i;
              s < c;
              s += a
            )
              o.push(u(t, s, s + a > c ? c : s + a));
            return (
              1 === i
                ? ((e = t[r - 1]), o.push(n[e >> 2] + n[(e << 4) & 63] + "=="))
                : 2 === i &&
                  ((e = (t[r - 2] << 8) + t[r - 1]),
                  o.push(
                    n[e >> 10] + n[(e >> 4) & 63] + n[(e << 2) & 63] + "="
                  )),
              o.join("")
            );
          });
        for (
          var n = [],
            r = [],
            i = "undefined" != typeof Uint8Array ? Uint8Array : Array,
            o =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            a = 0;
          a < 64;
          ++a
        )
          (n[a] = o[a]), (r[o.charCodeAt(a)] = a);
        function s(t) {
          var e = t.length;
          if (e % 4 > 0)
            throw new Error("Invalid string. Length must be a multiple of 4");
          var n = t.indexOf("=");
          return -1 === n && (n = e), [n, n === e ? 0 : 4 - (n % 4)];
        }
        function u(t, e, r) {
          for (var i, o, a = [], s = e; s < r; s += 3)
            (i =
              ((t[s] << 16) & 16711680) +
              ((t[s + 1] << 8) & 65280) +
              (255 & t[s + 2])),
              a.push(
                n[((o = i) >> 18) & 63] +
                  n[(o >> 12) & 63] +
                  n[(o >> 6) & 63] +
                  n[63 & o]
              );
          return a.join("");
        }
        (r["-".charCodeAt(0)] = 62), (r["_".charCodeAt(0)] = 63);
      },
      8764: (t, e, n) => {
        "use strict";
        const r = n(9742),
          i = n(645),
          o =
            "function" == typeof Symbol && "function" == typeof Symbol.for
              ? Symbol.for("nodejs.util.inspect.custom")
              : null;
        (e.Buffer = u),
          (e.SlowBuffer = function (t) {
            return +t != t && (t = 0), u.alloc(+t);
          }),
          (e.INSPECT_MAX_BYTES = 50);
        const a = 2147483647;
        function s(t) {
          if (t > a)
            throw new RangeError(
              'The value "' + t + '" is invalid for option "size"'
            );
          const e = new Uint8Array(t);
          return Object.setPrototypeOf(e, u.prototype), e;
        }
        function u(t, e, n) {
          if ("number" == typeof t) {
            if ("string" == typeof e)
              throw new TypeError(
                'The "string" argument must be of type string. Received type number'
              );
            return f(t);
          }
          return c(t, e, n);
        }
        function c(t, e, n) {
          if ("string" == typeof t)
            return (function (t, e) {
              if (
                (("string" == typeof e && "" !== e) || (e = "utf8"),
                !u.isEncoding(e))
              )
                throw new TypeError("Unknown encoding: " + e);
              const n = 0 | g(t, e);
              let r = s(n);
              const i = r.write(t, e);
              return i !== n && (r = r.slice(0, i)), r;
            })(t, e);
          if (ArrayBuffer.isView(t))
            return (function (t) {
              if (K(t, Uint8Array)) {
                const e = new Uint8Array(t);
                return h(e.buffer, e.byteOffset, e.byteLength);
              }
              return p(t);
            })(t);
          if (null == t)
            throw new TypeError(
              "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
                typeof t
            );
          if (K(t, ArrayBuffer) || (t && K(t.buffer, ArrayBuffer)))
            return h(t, e, n);
          if (
            "undefined" != typeof SharedArrayBuffer &&
            (K(t, SharedArrayBuffer) || (t && K(t.buffer, SharedArrayBuffer)))
          )
            return h(t, e, n);
          if ("number" == typeof t)
            throw new TypeError(
              'The "value" argument must not be of type number. Received type number'
            );
          const r = t.valueOf && t.valueOf();
          if (null != r && r !== t) return u.from(r, e, n);
          const i = (function (t) {
            if (u.isBuffer(t)) {
              const e = 0 | d(t.length),
                n = s(e);
              return 0 === n.length || t.copy(n, 0, 0, e), n;
            }
            return void 0 !== t.length
              ? "number" != typeof t.length || X(t.length)
                ? s(0)
                : p(t)
              : "Buffer" === t.type && Array.isArray(t.data)
              ? p(t.data)
              : void 0;
          })(t);
          if (i) return i;
          if (
            "undefined" != typeof Symbol &&
            null != Symbol.toPrimitive &&
            "function" == typeof t[Symbol.toPrimitive]
          )
            return u.from(t[Symbol.toPrimitive]("string"), e, n);
          throw new TypeError(
            "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
              typeof t
          );
        }
        function l(t) {
          if ("number" != typeof t)
            throw new TypeError('"size" argument must be of type number');
          if (t < 0)
            throw new RangeError(
              'The value "' + t + '" is invalid for option "size"'
            );
        }
        function f(t) {
          return l(t), s(t < 0 ? 0 : 0 | d(t));
        }
        function p(t) {
          const e = t.length < 0 ? 0 : 0 | d(t.length),
            n = s(e);
          for (let r = 0; r < e; r += 1) n[r] = 255 & t[r];
          return n;
        }
        function h(t, e, n) {
          if (e < 0 || t.byteLength < e)
            throw new RangeError('"offset" is outside of buffer bounds');
          if (t.byteLength < e + (n || 0))
            throw new RangeError('"length" is outside of buffer bounds');
          let r;
          return (
            (r =
              void 0 === e && void 0 === n
                ? new Uint8Array(t)
                : void 0 === n
                ? new Uint8Array(t, e)
                : new Uint8Array(t, e, n)),
            Object.setPrototypeOf(r, u.prototype),
            r
          );
        }
        function d(t) {
          if (t >= a)
            throw new RangeError(
              "Attempt to allocate Buffer larger than maximum size: 0x" +
                a.toString(16) +
                " bytes"
            );
          return 0 | t;
        }
        function g(t, e) {
          if (u.isBuffer(t)) return t.length;
          if (ArrayBuffer.isView(t) || K(t, ArrayBuffer)) return t.byteLength;
          if ("string" != typeof t)
            throw new TypeError(
              'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
                typeof t
            );
          const n = t.length,
            r = arguments.length > 2 && !0 === arguments[2];
          if (!r && 0 === n) return 0;
          let i = !1;
          for (;;)
            switch (e) {
              case "ascii":
              case "latin1":
              case "binary":
                return n;
              case "utf8":
              case "utf-8":
                return $(t).length;
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return 2 * n;
              case "hex":
                return n >>> 1;
              case "base64":
                return G(t).length;
              default:
                if (i) return r ? -1 : $(t).length;
                (e = ("" + e).toLowerCase()), (i = !0);
            }
        }
        function y(t, e, n) {
          let r = !1;
          if (((void 0 === e || e < 0) && (e = 0), e > this.length)) return "";
          if (((void 0 === n || n > this.length) && (n = this.length), n <= 0))
            return "";
          if ((n >>>= 0) <= (e >>>= 0)) return "";
          for (t || (t = "utf8"); ; )
            switch (t) {
              case "hex":
                return R(this, e, n);
              case "utf8":
              case "utf-8":
                return O(this, e, n);
              case "ascii":
                return A(this, e, n);
              case "latin1":
              case "binary":
                return k(this, e, n);
              case "base64":
                return x(this, e, n);
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return P(this, e, n);
              default:
                if (r) throw new TypeError("Unknown encoding: " + t);
                (t = (t + "").toLowerCase()), (r = !0);
            }
        }
        function v(t, e, n) {
          const r = t[e];
          (t[e] = t[n]), (t[n] = r);
        }
        function m(t, e, n, r, i) {
          if (0 === t.length) return -1;
          if (
            ("string" == typeof n
              ? ((r = n), (n = 0))
              : n > 2147483647
              ? (n = 2147483647)
              : n < -2147483648 && (n = -2147483648),
            X((n = +n)) && (n = i ? 0 : t.length - 1),
            n < 0 && (n = t.length + n),
            n >= t.length)
          ) {
            if (i) return -1;
            n = t.length - 1;
          } else if (n < 0) {
            if (!i) return -1;
            n = 0;
          }
          if (("string" == typeof e && (e = u.from(e, r)), u.isBuffer(e)))
            return 0 === e.length ? -1 : b(t, e, n, r, i);
          if ("number" == typeof e)
            return (
              (e &= 255),
              "function" == typeof Uint8Array.prototype.indexOf
                ? i
                  ? Uint8Array.prototype.indexOf.call(t, e, n)
                  : Uint8Array.prototype.lastIndexOf.call(t, e, n)
                : b(t, [e], n, r, i)
            );
          throw new TypeError("val must be string, number or Buffer");
        }
        function b(t, e, n, r, i) {
          let o,
            a = 1,
            s = t.length,
            u = e.length;
          if (
            void 0 !== r &&
            ("ucs2" === (r = String(r).toLowerCase()) ||
              "ucs-2" === r ||
              "utf16le" === r ||
              "utf-16le" === r)
          ) {
            if (t.length < 2 || e.length < 2) return -1;
            (a = 2), (s /= 2), (u /= 2), (n /= 2);
          }
          function c(t, e) {
            return 1 === a ? t[e] : t.readUInt16BE(e * a);
          }
          if (i) {
            let r = -1;
            for (o = n; o < s; o++)
              if (c(t, o) === c(e, -1 === r ? 0 : o - r)) {
                if ((-1 === r && (r = o), o - r + 1 === u)) return r * a;
              } else -1 !== r && (o -= o - r), (r = -1);
          } else
            for (n + u > s && (n = s - u), o = n; o >= 0; o--) {
              let n = !0;
              for (let r = 0; r < u; r++)
                if (c(t, o + r) !== c(e, r)) {
                  n = !1;
                  break;
                }
              if (n) return o;
            }
          return -1;
        }
        function w(t, e, n, r) {
          n = Number(n) || 0;
          const i = t.length - n;
          r ? (r = Number(r)) > i && (r = i) : (r = i);
          const o = e.length;
          let a;
          for (r > o / 2 && (r = o / 2), a = 0; a < r; ++a) {
            const r = parseInt(e.substr(2 * a, 2), 16);
            if (X(r)) return a;
            t[n + a] = r;
          }
          return a;
        }
        function _(t, e, n, r) {
          return Y($(e, t.length - n), t, n, r);
        }
        function E(t, e, n, r) {
          return Y(
            (function (t) {
              const e = [];
              for (let n = 0; n < t.length; ++n) e.push(255 & t.charCodeAt(n));
              return e;
            })(e),
            t,
            n,
            r
          );
        }
        function S(t, e, n, r) {
          return Y(G(e), t, n, r);
        }
        function T(t, e, n, r) {
          return Y(
            (function (t, e) {
              let n, r, i;
              const o = [];
              for (let a = 0; a < t.length && !((e -= 2) < 0); ++a)
                (n = t.charCodeAt(a)),
                  (r = n >> 8),
                  (i = n % 256),
                  o.push(i),
                  o.push(r);
              return o;
            })(e, t.length - n),
            t,
            n,
            r
          );
        }
        function x(t, e, n) {
          return 0 === e && n === t.length
            ? r.fromByteArray(t)
            : r.fromByteArray(t.slice(e, n));
        }
        function O(t, e, n) {
          n = Math.min(t.length, n);
          const r = [];
          let i = e;
          for (; i < n; ) {
            const e = t[i];
            let o = null,
              a = e > 239 ? 4 : e > 223 ? 3 : e > 191 ? 2 : 1;
            if (i + a <= n) {
              let n, r, s, u;
              switch (a) {
                case 1:
                  e < 128 && (o = e);
                  break;
                case 2:
                  (n = t[i + 1]),
                    128 == (192 & n) &&
                      ((u = ((31 & e) << 6) | (63 & n)), u > 127 && (o = u));
                  break;
                case 3:
                  (n = t[i + 1]),
                    (r = t[i + 2]),
                    128 == (192 & n) &&
                      128 == (192 & r) &&
                      ((u = ((15 & e) << 12) | ((63 & n) << 6) | (63 & r)),
                      u > 2047 && (u < 55296 || u > 57343) && (o = u));
                  break;
                case 4:
                  (n = t[i + 1]),
                    (r = t[i + 2]),
                    (s = t[i + 3]),
                    128 == (192 & n) &&
                      128 == (192 & r) &&
                      128 == (192 & s) &&
                      ((u =
                        ((15 & e) << 18) |
                        ((63 & n) << 12) |
                        ((63 & r) << 6) |
                        (63 & s)),
                      u > 65535 && u < 1114112 && (o = u));
              }
            }
            null === o
              ? ((o = 65533), (a = 1))
              : o > 65535 &&
                ((o -= 65536),
                r.push(((o >>> 10) & 1023) | 55296),
                (o = 56320 | (1023 & o))),
              r.push(o),
              (i += a);
          }
          return (function (t) {
            const e = t.length;
            if (e <= I) return String.fromCharCode.apply(String, t);
            let n = "",
              r = 0;
            for (; r < e; )
              n += String.fromCharCode.apply(String, t.slice(r, (r += I)));
            return n;
          })(r);
        }
        (e.kMaxLength = a),
          (u.TYPED_ARRAY_SUPPORT = (function () {
            try {
              const t = new Uint8Array(1),
                e = {
                  foo: function () {
                    return 42;
                  },
                };
              return (
                Object.setPrototypeOf(e, Uint8Array.prototype),
                Object.setPrototypeOf(t, e),
                42 === t.foo()
              );
            } catch (t) {
              return !1;
            }
          })()),
          u.TYPED_ARRAY_SUPPORT ||
            "undefined" == typeof console ||
            "function" != typeof console.error ||
            console.error(
              "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
            ),
          Object.defineProperty(u.prototype, "parent", {
            enumerable: !0,
            get: function () {
              if (u.isBuffer(this)) return this.buffer;
            },
          }),
          Object.defineProperty(u.prototype, "offset", {
            enumerable: !0,
            get: function () {
              if (u.isBuffer(this)) return this.byteOffset;
            },
          }),
          (u.poolSize = 8192),
          (u.from = function (t, e, n) {
            return c(t, e, n);
          }),
          Object.setPrototypeOf(u.prototype, Uint8Array.prototype),
          Object.setPrototypeOf(u, Uint8Array),
          (u.alloc = function (t, e, n) {
            return (function (t, e, n) {
              return (
                l(t),
                t <= 0
                  ? s(t)
                  : void 0 !== e
                  ? "string" == typeof n
                    ? s(t).fill(e, n)
                    : s(t).fill(e)
                  : s(t)
              );
            })(t, e, n);
          }),
          (u.allocUnsafe = function (t) {
            return f(t);
          }),
          (u.allocUnsafeSlow = function (t) {
            return f(t);
          }),
          (u.isBuffer = function (t) {
            return null != t && !0 === t._isBuffer && t !== u.prototype;
          }),
          (u.compare = function (t, e) {
            if (
              (K(t, Uint8Array) && (t = u.from(t, t.offset, t.byteLength)),
              K(e, Uint8Array) && (e = u.from(e, e.offset, e.byteLength)),
              !u.isBuffer(t) || !u.isBuffer(e))
            )
              throw new TypeError(
                'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
              );
            if (t === e) return 0;
            let n = t.length,
              r = e.length;
            for (let i = 0, o = Math.min(n, r); i < o; ++i)
              if (t[i] !== e[i]) {
                (n = t[i]), (r = e[i]);
                break;
              }
            return n < r ? -1 : r < n ? 1 : 0;
          }),
          (u.isEncoding = function (t) {
            switch (String(t).toLowerCase()) {
              case "hex":
              case "utf8":
              case "utf-8":
              case "ascii":
              case "latin1":
              case "binary":
              case "base64":
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return !0;
              default:
                return !1;
            }
          }),
          (u.concat = function (t, e) {
            if (!Array.isArray(t))
              throw new TypeError(
                '"list" argument must be an Array of Buffers'
              );
            if (0 === t.length) return u.alloc(0);
            let n;
            if (void 0 === e)
              for (e = 0, n = 0; n < t.length; ++n) e += t[n].length;
            const r = u.allocUnsafe(e);
            let i = 0;
            for (n = 0; n < t.length; ++n) {
              let e = t[n];
              if (K(e, Uint8Array))
                i + e.length > r.length
                  ? (u.isBuffer(e) || (e = u.from(e)), e.copy(r, i))
                  : Uint8Array.prototype.set.call(r, e, i);
              else {
                if (!u.isBuffer(e))
                  throw new TypeError(
                    '"list" argument must be an Array of Buffers'
                  );
                e.copy(r, i);
              }
              i += e.length;
            }
            return r;
          }),
          (u.byteLength = g),
          (u.prototype._isBuffer = !0),
          (u.prototype.swap16 = function () {
            const t = this.length;
            if (t % 2 != 0)
              throw new RangeError("Buffer size must be a multiple of 16-bits");
            for (let e = 0; e < t; e += 2) v(this, e, e + 1);
            return this;
          }),
          (u.prototype.swap32 = function () {
            const t = this.length;
            if (t % 4 != 0)
              throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (let e = 0; e < t; e += 4)
              v(this, e, e + 3), v(this, e + 1, e + 2);
            return this;
          }),
          (u.prototype.swap64 = function () {
            const t = this.length;
            if (t % 8 != 0)
              throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (let e = 0; e < t; e += 8)
              v(this, e, e + 7),
                v(this, e + 1, e + 6),
                v(this, e + 2, e + 5),
                v(this, e + 3, e + 4);
            return this;
          }),
          (u.prototype.toString = function () {
            const t = this.length;
            return 0 === t
              ? ""
              : 0 === arguments.length
              ? O(this, 0, t)
              : y.apply(this, arguments);
          }),
          (u.prototype.toLocaleString = u.prototype.toString),
          (u.prototype.equals = function (t) {
            if (!u.isBuffer(t))
              throw new TypeError("Argument must be a Buffer");
            return this === t || 0 === u.compare(this, t);
          }),
          (u.prototype.inspect = function () {
            let t = "";
            const n = e.INSPECT_MAX_BYTES;
            return (
              (t = this.toString("hex", 0, n)
                .replace(/(.{2})/g, "$1 ")
                .trim()),
              this.length > n && (t += " ... "),
              "<Buffer " + t + ">"
            );
          }),
          o && (u.prototype[o] = u.prototype.inspect),
          (u.prototype.compare = function (t, e, n, r, i) {
            if (
              (K(t, Uint8Array) && (t = u.from(t, t.offset, t.byteLength)),
              !u.isBuffer(t))
            )
              throw new TypeError(
                'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                  typeof t
              );
            if (
              (void 0 === e && (e = 0),
              void 0 === n && (n = t ? t.length : 0),
              void 0 === r && (r = 0),
              void 0 === i && (i = this.length),
              e < 0 || n > t.length || r < 0 || i > this.length)
            )
              throw new RangeError("out of range index");
            if (r >= i && e >= n) return 0;
            if (r >= i) return -1;
            if (e >= n) return 1;
            if (this === t) return 0;
            let o = (i >>>= 0) - (r >>>= 0),
              a = (n >>>= 0) - (e >>>= 0);
            const s = Math.min(o, a),
              c = this.slice(r, i),
              l = t.slice(e, n);
            for (let t = 0; t < s; ++t)
              if (c[t] !== l[t]) {
                (o = c[t]), (a = l[t]);
                break;
              }
            return o < a ? -1 : a < o ? 1 : 0;
          }),
          (u.prototype.includes = function (t, e, n) {
            return -1 !== this.indexOf(t, e, n);
          }),
          (u.prototype.indexOf = function (t, e, n) {
            return m(this, t, e, n, !0);
          }),
          (u.prototype.lastIndexOf = function (t, e, n) {
            return m(this, t, e, n, !1);
          }),
          (u.prototype.write = function (t, e, n, r) {
            if (void 0 === e) (r = "utf8"), (n = this.length), (e = 0);
            else if (void 0 === n && "string" == typeof e)
              (r = e), (n = this.length), (e = 0);
            else {
              if (!isFinite(e))
                throw new Error(
                  "Buffer.write(string, encoding, offset[, length]) is no longer supported"
                );
              (e >>>= 0),
                isFinite(n)
                  ? ((n >>>= 0), void 0 === r && (r = "utf8"))
                  : ((r = n), (n = void 0));
            }
            const i = this.length - e;
            if (
              ((void 0 === n || n > i) && (n = i),
              (t.length > 0 && (n < 0 || e < 0)) || e > this.length)
            )
              throw new RangeError("Attempt to write outside buffer bounds");
            r || (r = "utf8");
            let o = !1;
            for (;;)
              switch (r) {
                case "hex":
                  return w(this, t, e, n);
                case "utf8":
                case "utf-8":
                  return _(this, t, e, n);
                case "ascii":
                case "latin1":
                case "binary":
                  return E(this, t, e, n);
                case "base64":
                  return S(this, t, e, n);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return T(this, t, e, n);
                default:
                  if (o) throw new TypeError("Unknown encoding: " + r);
                  (r = ("" + r).toLowerCase()), (o = !0);
              }
          }),
          (u.prototype.toJSON = function () {
            return {
              type: "Buffer",
              data: Array.prototype.slice.call(this._arr || this, 0),
            };
          });
        const I = 4096;
        function A(t, e, n) {
          let r = "";
          n = Math.min(t.length, n);
          for (let i = e; i < n; ++i) r += String.fromCharCode(127 & t[i]);
          return r;
        }
        function k(t, e, n) {
          let r = "";
          n = Math.min(t.length, n);
          for (let i = e; i < n; ++i) r += String.fromCharCode(t[i]);
          return r;
        }
        function R(t, e, n) {
          const r = t.length;
          (!e || e < 0) && (e = 0), (!n || n < 0 || n > r) && (n = r);
          let i = "";
          for (let r = e; r < n; ++r) i += Q[t[r]];
          return i;
        }
        function P(t, e, n) {
          const r = t.slice(e, n);
          let i = "";
          for (let t = 0; t < r.length - 1; t += 2)
            i += String.fromCharCode(r[t] + 256 * r[t + 1]);
          return i;
        }
        function N(t, e, n) {
          if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
          if (t + e > n)
            throw new RangeError("Trying to access beyond buffer length");
        }
        function C(t, e, n, r, i, o) {
          if (!u.isBuffer(t))
            throw new TypeError('"buffer" argument must be a Buffer instance');
          if (e > i || e < o)
            throw new RangeError('"value" argument is out of bounds');
          if (n + r > t.length) throw new RangeError("Index out of range");
        }
        function D(t, e, n, r, i) {
          V(e, r, i, t, n, 7);
          let o = Number(e & BigInt(4294967295));
          (t[n++] = o),
            (o >>= 8),
            (t[n++] = o),
            (o >>= 8),
            (t[n++] = o),
            (o >>= 8),
            (t[n++] = o);
          let a = Number((e >> BigInt(32)) & BigInt(4294967295));
          return (
            (t[n++] = a),
            (a >>= 8),
            (t[n++] = a),
            (a >>= 8),
            (t[n++] = a),
            (a >>= 8),
            (t[n++] = a),
            n
          );
        }
        function j(t, e, n, r, i) {
          V(e, r, i, t, n, 7);
          let o = Number(e & BigInt(4294967295));
          (t[n + 7] = o),
            (o >>= 8),
            (t[n + 6] = o),
            (o >>= 8),
            (t[n + 5] = o),
            (o >>= 8),
            (t[n + 4] = o);
          let a = Number((e >> BigInt(32)) & BigInt(4294967295));
          return (
            (t[n + 3] = a),
            (a >>= 8),
            (t[n + 2] = a),
            (a >>= 8),
            (t[n + 1] = a),
            (a >>= 8),
            (t[n] = a),
            n + 8
          );
        }
        function L(t, e, n, r, i, o) {
          if (n + r > t.length) throw new RangeError("Index out of range");
          if (n < 0) throw new RangeError("Index out of range");
        }
        function M(t, e, n, r, o) {
          return (
            (e = +e),
            (n >>>= 0),
            o || L(t, 0, n, 4),
            i.write(t, e, n, r, 23, 4),
            n + 4
          );
        }
        function U(t, e, n, r, o) {
          return (
            (e = +e),
            (n >>>= 0),
            o || L(t, 0, n, 8),
            i.write(t, e, n, r, 52, 8),
            n + 8
          );
        }
        (u.prototype.slice = function (t, e) {
          const n = this.length;
          (t = ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n),
            (e = void 0 === e ? n : ~~e) < 0
              ? (e += n) < 0 && (e = 0)
              : e > n && (e = n),
            e < t && (e = t);
          const r = this.subarray(t, e);
          return Object.setPrototypeOf(r, u.prototype), r;
        }),
          (u.prototype.readUintLE = u.prototype.readUIntLE =
            function (t, e, n) {
              (t >>>= 0), (e >>>= 0), n || N(t, e, this.length);
              let r = this[t],
                i = 1,
                o = 0;
              for (; ++o < e && (i *= 256); ) r += this[t + o] * i;
              return r;
            }),
          (u.prototype.readUintBE = u.prototype.readUIntBE =
            function (t, e, n) {
              (t >>>= 0), (e >>>= 0), n || N(t, e, this.length);
              let r = this[t + --e],
                i = 1;
              for (; e > 0 && (i *= 256); ) r += this[t + --e] * i;
              return r;
            }),
          (u.prototype.readUint8 = u.prototype.readUInt8 =
            function (t, e) {
              return (t >>>= 0), e || N(t, 1, this.length), this[t];
            }),
          (u.prototype.readUint16LE = u.prototype.readUInt16LE =
            function (t, e) {
              return (
                (t >>>= 0),
                e || N(t, 2, this.length),
                this[t] | (this[t + 1] << 8)
              );
            }),
          (u.prototype.readUint16BE = u.prototype.readUInt16BE =
            function (t, e) {
              return (
                (t >>>= 0),
                e || N(t, 2, this.length),
                (this[t] << 8) | this[t + 1]
              );
            }),
          (u.prototype.readUint32LE = u.prototype.readUInt32LE =
            function (t, e) {
              return (
                (t >>>= 0),
                e || N(t, 4, this.length),
                (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) +
                  16777216 * this[t + 3]
              );
            }),
          (u.prototype.readUint32BE = u.prototype.readUInt32BE =
            function (t, e) {
              return (
                (t >>>= 0),
                e || N(t, 4, this.length),
                16777216 * this[t] +
                  ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3])
              );
            }),
          (u.prototype.readBigUInt64LE = J(function (t) {
            z((t >>>= 0), "offset");
            const e = this[t],
              n = this[t + 7];
            (void 0 !== e && void 0 !== n) || W(t, this.length - 8);
            const r =
                e + 256 * this[++t] + 65536 * this[++t] + this[++t] * 2 ** 24,
              i = this[++t] + 256 * this[++t] + 65536 * this[++t] + n * 2 ** 24;
            return BigInt(r) + (BigInt(i) << BigInt(32));
          })),
          (u.prototype.readBigUInt64BE = J(function (t) {
            z((t >>>= 0), "offset");
            const e = this[t],
              n = this[t + 7];
            (void 0 !== e && void 0 !== n) || W(t, this.length - 8);
            const r =
                e * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + this[++t],
              i = this[++t] * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + n;
            return (BigInt(r) << BigInt(32)) + BigInt(i);
          })),
          (u.prototype.readIntLE = function (t, e, n) {
            (t >>>= 0), (e >>>= 0), n || N(t, e, this.length);
            let r = this[t],
              i = 1,
              o = 0;
            for (; ++o < e && (i *= 256); ) r += this[t + o] * i;
            return (i *= 128), r >= i && (r -= Math.pow(2, 8 * e)), r;
          }),
          (u.prototype.readIntBE = function (t, e, n) {
            (t >>>= 0), (e >>>= 0), n || N(t, e, this.length);
            let r = e,
              i = 1,
              o = this[t + --r];
            for (; r > 0 && (i *= 256); ) o += this[t + --r] * i;
            return (i *= 128), o >= i && (o -= Math.pow(2, 8 * e)), o;
          }),
          (u.prototype.readInt8 = function (t, e) {
            return (
              (t >>>= 0),
              e || N(t, 1, this.length),
              128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
            );
          }),
          (u.prototype.readInt16LE = function (t, e) {
            (t >>>= 0), e || N(t, 2, this.length);
            const n = this[t] | (this[t + 1] << 8);
            return 32768 & n ? 4294901760 | n : n;
          }),
          (u.prototype.readInt16BE = function (t, e) {
            (t >>>= 0), e || N(t, 2, this.length);
            const n = this[t + 1] | (this[t] << 8);
            return 32768 & n ? 4294901760 | n : n;
          }),
          (u.prototype.readInt32LE = function (t, e) {
            return (
              (t >>>= 0),
              e || N(t, 4, this.length),
              this[t] |
                (this[t + 1] << 8) |
                (this[t + 2] << 16) |
                (this[t + 3] << 24)
            );
          }),
          (u.prototype.readInt32BE = function (t, e) {
            return (
              (t >>>= 0),
              e || N(t, 4, this.length),
              (this[t] << 24) |
                (this[t + 1] << 16) |
                (this[t + 2] << 8) |
                this[t + 3]
            );
          }),
          (u.prototype.readBigInt64LE = J(function (t) {
            z((t >>>= 0), "offset");
            const e = this[t],
              n = this[t + 7];
            (void 0 !== e && void 0 !== n) || W(t, this.length - 8);
            const r =
              this[t + 4] + 256 * this[t + 5] + 65536 * this[t + 6] + (n << 24);
            return (
              (BigInt(r) << BigInt(32)) +
              BigInt(
                e + 256 * this[++t] + 65536 * this[++t] + this[++t] * 2 ** 24
              )
            );
          })),
          (u.prototype.readBigInt64BE = J(function (t) {
            z((t >>>= 0), "offset");
            const e = this[t],
              n = this[t + 7];
            (void 0 !== e && void 0 !== n) || W(t, this.length - 8);
            const r =
              (e << 24) + 65536 * this[++t] + 256 * this[++t] + this[++t];
            return (
              (BigInt(r) << BigInt(32)) +
              BigInt(
                this[++t] * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + n
              )
            );
          })),
          (u.prototype.readFloatLE = function (t, e) {
            return (
              (t >>>= 0), e || N(t, 4, this.length), i.read(this, t, !0, 23, 4)
            );
          }),
          (u.prototype.readFloatBE = function (t, e) {
            return (
              (t >>>= 0), e || N(t, 4, this.length), i.read(this, t, !1, 23, 4)
            );
          }),
          (u.prototype.readDoubleLE = function (t, e) {
            return (
              (t >>>= 0), e || N(t, 8, this.length), i.read(this, t, !0, 52, 8)
            );
          }),
          (u.prototype.readDoubleBE = function (t, e) {
            return (
              (t >>>= 0), e || N(t, 8, this.length), i.read(this, t, !1, 52, 8)
            );
          }),
          (u.prototype.writeUintLE = u.prototype.writeUIntLE =
            function (t, e, n, r) {
              (t = +t),
                (e >>>= 0),
                (n >>>= 0),
                r || C(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
              let i = 1,
                o = 0;
              for (this[e] = 255 & t; ++o < n && (i *= 256); )
                this[e + o] = (t / i) & 255;
              return e + n;
            }),
          (u.prototype.writeUintBE = u.prototype.writeUIntBE =
            function (t, e, n, r) {
              (t = +t),
                (e >>>= 0),
                (n >>>= 0),
                r || C(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
              let i = n - 1,
                o = 1;
              for (this[e + i] = 255 & t; --i >= 0 && (o *= 256); )
                this[e + i] = (t / o) & 255;
              return e + n;
            }),
          (u.prototype.writeUint8 = u.prototype.writeUInt8 =
            function (t, e, n) {
              return (
                (t = +t),
                (e >>>= 0),
                n || C(this, t, e, 1, 255, 0),
                (this[e] = 255 & t),
                e + 1
              );
            }),
          (u.prototype.writeUint16LE = u.prototype.writeUInt16LE =
            function (t, e, n) {
              return (
                (t = +t),
                (e >>>= 0),
                n || C(this, t, e, 2, 65535, 0),
                (this[e] = 255 & t),
                (this[e + 1] = t >>> 8),
                e + 2
              );
            }),
          (u.prototype.writeUint16BE = u.prototype.writeUInt16BE =
            function (t, e, n) {
              return (
                (t = +t),
                (e >>>= 0),
                n || C(this, t, e, 2, 65535, 0),
                (this[e] = t >>> 8),
                (this[e + 1] = 255 & t),
                e + 2
              );
            }),
          (u.prototype.writeUint32LE = u.prototype.writeUInt32LE =
            function (t, e, n) {
              return (
                (t = +t),
                (e >>>= 0),
                n || C(this, t, e, 4, 4294967295, 0),
                (this[e + 3] = t >>> 24),
                (this[e + 2] = t >>> 16),
                (this[e + 1] = t >>> 8),
                (this[e] = 255 & t),
                e + 4
              );
            }),
          (u.prototype.writeUint32BE = u.prototype.writeUInt32BE =
            function (t, e, n) {
              return (
                (t = +t),
                (e >>>= 0),
                n || C(this, t, e, 4, 4294967295, 0),
                (this[e] = t >>> 24),
                (this[e + 1] = t >>> 16),
                (this[e + 2] = t >>> 8),
                (this[e + 3] = 255 & t),
                e + 4
              );
            }),
          (u.prototype.writeBigUInt64LE = J(function (t, e = 0) {
            return D(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"));
          })),
          (u.prototype.writeBigUInt64BE = J(function (t, e = 0) {
            return j(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"));
          })),
          (u.prototype.writeIntLE = function (t, e, n, r) {
            if (((t = +t), (e >>>= 0), !r)) {
              const r = Math.pow(2, 8 * n - 1);
              C(this, t, e, n, r - 1, -r);
            }
            let i = 0,
              o = 1,
              a = 0;
            for (this[e] = 255 & t; ++i < n && (o *= 256); )
              t < 0 && 0 === a && 0 !== this[e + i - 1] && (a = 1),
                (this[e + i] = (((t / o) >> 0) - a) & 255);
            return e + n;
          }),
          (u.prototype.writeIntBE = function (t, e, n, r) {
            if (((t = +t), (e >>>= 0), !r)) {
              const r = Math.pow(2, 8 * n - 1);
              C(this, t, e, n, r - 1, -r);
            }
            let i = n - 1,
              o = 1,
              a = 0;
            for (this[e + i] = 255 & t; --i >= 0 && (o *= 256); )
              t < 0 && 0 === a && 0 !== this[e + i + 1] && (a = 1),
                (this[e + i] = (((t / o) >> 0) - a) & 255);
            return e + n;
          }),
          (u.prototype.writeInt8 = function (t, e, n) {
            return (
              (t = +t),
              (e >>>= 0),
              n || C(this, t, e, 1, 127, -128),
              t < 0 && (t = 255 + t + 1),
              (this[e] = 255 & t),
              e + 1
            );
          }),
          (u.prototype.writeInt16LE = function (t, e, n) {
            return (
              (t = +t),
              (e >>>= 0),
              n || C(this, t, e, 2, 32767, -32768),
              (this[e] = 255 & t),
              (this[e + 1] = t >>> 8),
              e + 2
            );
          }),
          (u.prototype.writeInt16BE = function (t, e, n) {
            return (
              (t = +t),
              (e >>>= 0),
              n || C(this, t, e, 2, 32767, -32768),
              (this[e] = t >>> 8),
              (this[e + 1] = 255 & t),
              e + 2
            );
          }),
          (u.prototype.writeInt32LE = function (t, e, n) {
            return (
              (t = +t),
              (e >>>= 0),
              n || C(this, t, e, 4, 2147483647, -2147483648),
              (this[e] = 255 & t),
              (this[e + 1] = t >>> 8),
              (this[e + 2] = t >>> 16),
              (this[e + 3] = t >>> 24),
              e + 4
            );
          }),
          (u.prototype.writeInt32BE = function (t, e, n) {
            return (
              (t = +t),
              (e >>>= 0),
              n || C(this, t, e, 4, 2147483647, -2147483648),
              t < 0 && (t = 4294967295 + t + 1),
              (this[e] = t >>> 24),
              (this[e + 1] = t >>> 16),
              (this[e + 2] = t >>> 8),
              (this[e + 3] = 255 & t),
              e + 4
            );
          }),
          (u.prototype.writeBigInt64LE = J(function (t, e = 0) {
            return D(
              this,
              t,
              e,
              -BigInt("0x8000000000000000"),
              BigInt("0x7fffffffffffffff")
            );
          })),
          (u.prototype.writeBigInt64BE = J(function (t, e = 0) {
            return j(
              this,
              t,
              e,
              -BigInt("0x8000000000000000"),
              BigInt("0x7fffffffffffffff")
            );
          })),
          (u.prototype.writeFloatLE = function (t, e, n) {
            return M(this, t, e, !0, n);
          }),
          (u.prototype.writeFloatBE = function (t, e, n) {
            return M(this, t, e, !1, n);
          }),
          (u.prototype.writeDoubleLE = function (t, e, n) {
            return U(this, t, e, !0, n);
          }),
          (u.prototype.writeDoubleBE = function (t, e, n) {
            return U(this, t, e, !1, n);
          }),
          (u.prototype.copy = function (t, e, n, r) {
            if (!u.isBuffer(t))
              throw new TypeError("argument should be a Buffer");
            if (
              (n || (n = 0),
              r || 0 === r || (r = this.length),
              e >= t.length && (e = t.length),
              e || (e = 0),
              r > 0 && r < n && (r = n),
              r === n)
            )
              return 0;
            if (0 === t.length || 0 === this.length) return 0;
            if (e < 0) throw new RangeError("targetStart out of bounds");
            if (n < 0 || n >= this.length)
              throw new RangeError("Index out of range");
            if (r < 0) throw new RangeError("sourceEnd out of bounds");
            r > this.length && (r = this.length),
              t.length - e < r - n && (r = t.length - e + n);
            const i = r - n;
            return (
              this === t && "function" == typeof Uint8Array.prototype.copyWithin
                ? this.copyWithin(e, n, r)
                : Uint8Array.prototype.set.call(t, this.subarray(n, r), e),
              i
            );
          }),
          (u.prototype.fill = function (t, e, n, r) {
            if ("string" == typeof t) {
              if (
                ("string" == typeof e
                  ? ((r = e), (e = 0), (n = this.length))
                  : "string" == typeof n && ((r = n), (n = this.length)),
                void 0 !== r && "string" != typeof r)
              )
                throw new TypeError("encoding must be a string");
              if ("string" == typeof r && !u.isEncoding(r))
                throw new TypeError("Unknown encoding: " + r);
              if (1 === t.length) {
                const e = t.charCodeAt(0);
                (("utf8" === r && e < 128) || "latin1" === r) && (t = e);
              }
            } else
              "number" == typeof t
                ? (t &= 255)
                : "boolean" == typeof t && (t = Number(t));
            if (e < 0 || this.length < e || this.length < n)
              throw new RangeError("Out of range index");
            if (n <= e) return this;
            let i;
            if (
              ((e >>>= 0),
              (n = void 0 === n ? this.length : n >>> 0),
              t || (t = 0),
              "number" == typeof t)
            )
              for (i = e; i < n; ++i) this[i] = t;
            else {
              const o = u.isBuffer(t) ? t : u.from(t, r),
                a = o.length;
              if (0 === a)
                throw new TypeError(
                  'The value "' + t + '" is invalid for argument "value"'
                );
              for (i = 0; i < n - e; ++i) this[i + e] = o[i % a];
            }
            return this;
          });
        const B = {};
        function F(t, e, n) {
          B[t] = class extends n {
            constructor() {
              super(),
                Object.defineProperty(this, "message", {
                  value: e.apply(this, arguments),
                  writable: !0,
                  configurable: !0,
                }),
                (this.name = `${this.name} [${t}]`),
                this.stack,
                delete this.name;
            }
            get code() {
              return t;
            }
            set code(t) {
              Object.defineProperty(this, "code", {
                configurable: !0,
                enumerable: !0,
                value: t,
                writable: !0,
              });
            }
            toString() {
              return `${this.name} [${t}]: ${this.message}`;
            }
          };
        }
        function q(t) {
          let e = "",
            n = t.length;
          const r = "-" === t[0] ? 1 : 0;
          for (; n >= r + 4; n -= 3) e = `_${t.slice(n - 3, n)}${e}`;
          return `${t.slice(0, n)}${e}`;
        }
        function V(t, e, n, r, i, o) {
          if (t > n || t < e) {
            const r = "bigint" == typeof e ? "n" : "";
            let i;
            throw (
              ((i =
                o > 3
                  ? 0 === e || e === BigInt(0)
                    ? `>= 0${r} and < 2${r} ** ${8 * (o + 1)}${r}`
                    : `>= -(2${r} ** ${8 * (o + 1) - 1}${r}) and < 2 ** ${
                        8 * (o + 1) - 1
                      }${r}`
                  : `>= ${e}${r} and <= ${n}${r}`),
              new B.ERR_OUT_OF_RANGE("value", i, t))
            );
          }
          !(function (t, e, n) {
            z(e, "offset"),
              (void 0 !== t[e] && void 0 !== t[e + n]) ||
                W(e, t.length - (n + 1));
          })(r, i, o);
        }
        function z(t, e) {
          if ("number" != typeof t)
            throw new B.ERR_INVALID_ARG_TYPE(e, "number", t);
        }
        function W(t, e, n) {
          if (Math.floor(t) !== t)
            throw (
              (z(t, n), new B.ERR_OUT_OF_RANGE(n || "offset", "an integer", t))
            );
          if (e < 0) throw new B.ERR_BUFFER_OUT_OF_BOUNDS();
          throw new B.ERR_OUT_OF_RANGE(
            n || "offset",
            `>= ${n ? 1 : 0} and <= ${e}`,
            t
          );
        }
        F(
          "ERR_BUFFER_OUT_OF_BOUNDS",
          function (t) {
            return t
              ? `${t} is outside of buffer bounds`
              : "Attempt to access memory outside buffer bounds";
          },
          RangeError
        ),
          F(
            "ERR_INVALID_ARG_TYPE",
            function (t, e) {
              return `The "${t}" argument must be of type number. Received type ${typeof e}`;
            },
            TypeError
          ),
          F(
            "ERR_OUT_OF_RANGE",
            function (t, e, n) {
              let r = `The value of "${t}" is out of range.`,
                i = n;
              return (
                Number.isInteger(n) && Math.abs(n) > 2 ** 32
                  ? (i = q(String(n)))
                  : "bigint" == typeof n &&
                    ((i = String(n)),
                    (n > BigInt(2) ** BigInt(32) ||
                      n < -(BigInt(2) ** BigInt(32))) &&
                      (i = q(i)),
                    (i += "n")),
                (r += ` It must be ${e}. Received ${i}`),
                r
              );
            },
            RangeError
          );
        const H = /[^+/0-9A-Za-z-_]/g;
        function $(t, e) {
          let n;
          e = e || 1 / 0;
          const r = t.length;
          let i = null;
          const o = [];
          for (let a = 0; a < r; ++a) {
            if (((n = t.charCodeAt(a)), n > 55295 && n < 57344)) {
              if (!i) {
                if (n > 56319) {
                  (e -= 3) > -1 && o.push(239, 191, 189);
                  continue;
                }
                if (a + 1 === r) {
                  (e -= 3) > -1 && o.push(239, 191, 189);
                  continue;
                }
                i = n;
                continue;
              }
              if (n < 56320) {
                (e -= 3) > -1 && o.push(239, 191, 189), (i = n);
                continue;
              }
              n = 65536 + (((i - 55296) << 10) | (n - 56320));
            } else i && (e -= 3) > -1 && o.push(239, 191, 189);
            if (((i = null), n < 128)) {
              if ((e -= 1) < 0) break;
              o.push(n);
            } else if (n < 2048) {
              if ((e -= 2) < 0) break;
              o.push((n >> 6) | 192, (63 & n) | 128);
            } else if (n < 65536) {
              if ((e -= 3) < 0) break;
              o.push((n >> 12) | 224, ((n >> 6) & 63) | 128, (63 & n) | 128);
            } else {
              if (!(n < 1114112)) throw new Error("Invalid code point");
              if ((e -= 4) < 0) break;
              o.push(
                (n >> 18) | 240,
                ((n >> 12) & 63) | 128,
                ((n >> 6) & 63) | 128,
                (63 & n) | 128
              );
            }
          }
          return o;
        }
        function G(t) {
          return r.toByteArray(
            (function (t) {
              if ((t = (t = t.split("=")[0]).trim().replace(H, "")).length < 2)
                return "";
              for (; t.length % 4 != 0; ) t += "=";
              return t;
            })(t)
          );
        }
        function Y(t, e, n, r) {
          let i;
          for (i = 0; i < r && !(i + n >= e.length || i >= t.length); ++i)
            e[i + n] = t[i];
          return i;
        }
        function K(t, e) {
          return (
            t instanceof e ||
            (null != t &&
              null != t.constructor &&
              null != t.constructor.name &&
              t.constructor.name === e.name)
          );
        }
        function X(t) {
          return t != t;
        }
        const Q = (function () {
          const t = "0123456789abcdef",
            e = new Array(256);
          for (let n = 0; n < 16; ++n) {
            const r = 16 * n;
            for (let i = 0; i < 16; ++i) e[r + i] = t[n] + t[i];
          }
          return e;
        })();
        function J(t) {
          return "undefined" == typeof BigInt ? Z : t;
        }
        function Z() {
          throw new Error("BigInt not supported");
        }
      },
      584: (t) => {
        t.exports = {
          100: "Continue",
          101: "Switching Protocols",
          102: "Processing",
          200: "OK",
          201: "Created",
          202: "Accepted",
          203: "Non-Authoritative Information",
          204: "No Content",
          205: "Reset Content",
          206: "Partial Content",
          207: "Multi-Status",
          208: "Already Reported",
          226: "IM Used",
          300: "Multiple Choices",
          301: "Moved Permanently",
          302: "Found",
          303: "See Other",
          304: "Not Modified",
          305: "Use Proxy",
          307: "Temporary Redirect",
          308: "Permanent Redirect",
          400: "Bad Request",
          401: "Unauthorized",
          402: "Payment Required",
          403: "Forbidden",
          404: "Not Found",
          405: "Method Not Allowed",
          406: "Not Acceptable",
          407: "Proxy Authentication Required",
          408: "Request Timeout",
          409: "Conflict",
          410: "Gone",
          411: "Length Required",
          412: "Precondition Failed",
          413: "Payload Too Large",
          414: "URI Too Long",
          415: "Unsupported Media Type",
          416: "Range Not Satisfiable",
          417: "Expectation Failed",
          418: "I'm a teapot",
          421: "Misdirected Request",
          422: "Unprocessable Entity",
          423: "Locked",
          424: "Failed Dependency",
          425: "Unordered Collection",
          426: "Upgrade Required",
          428: "Precondition Required",
          429: "Too Many Requests",
          431: "Request Header Fields Too Large",
          451: "Unavailable For Legal Reasons",
          500: "Internal Server Error",
          501: "Not Implemented",
          502: "Bad Gateway",
          503: "Service Unavailable",
          504: "Gateway Timeout",
          505: "HTTP Version Not Supported",
          506: "Variant Also Negotiates",
          507: "Insufficient Storage",
          508: "Loop Detected",
          509: "Bandwidth Limit Exceeded",
          510: "Not Extended",
          511: "Network Authentication Required",
        };
      },
      1924: (t, e, n) => {
        "use strict";
        var r = n(210),
          i = n(5559),
          o = i(r("String.prototype.indexOf"));
        t.exports = function (t, e) {
          var n = r(t, !!e);
          return "function" == typeof n && o(t, ".prototype.") > -1 ? i(n) : n;
        };
      },
      5559: (t, e, n) => {
        "use strict";
        var r = n(8612),
          i = n(210),
          o = i("%Function.prototype.apply%"),
          a = i("%Function.prototype.call%"),
          s = i("%Reflect.apply%", !0) || r.call(a, o),
          u = i("%Object.getOwnPropertyDescriptor%", !0),
          c = i("%Object.defineProperty%", !0),
          l = i("%Math.max%");
        if (c)
          try {
            c({}, "a", { value: 1 });
          } catch (t) {
            c = null;
          }
        t.exports = function (t) {
          var e = s(r, a, arguments);
          return (
            u &&
              c &&
              u(e, "length").configurable &&
              c(e, "length", {
                value: 1 + l(0, t.length - (arguments.length - 1)),
              }),
            e
          );
        };
        var f = function () {
          return s(r, o, arguments);
        };
        c ? c(t.exports, "apply", { value: f }) : (t.exports.apply = f);
      },
      7187: (t) => {
        "use strict";
        var e,
          n = "object" == typeof Reflect ? Reflect : null,
          r =
            n && "function" == typeof n.apply
              ? n.apply
              : function (t, e, n) {
                  return Function.prototype.apply.call(t, e, n);
                };
        e =
          n && "function" == typeof n.ownKeys
            ? n.ownKeys
            : Object.getOwnPropertySymbols
            ? function (t) {
                return Object.getOwnPropertyNames(t).concat(
                  Object.getOwnPropertySymbols(t)
                );
              }
            : function (t) {
                return Object.getOwnPropertyNames(t);
              };
        var i =
          Number.isNaN ||
          function (t) {
            return t != t;
          };
        function o() {
          o.init.call(this);
        }
        (t.exports = o),
          (t.exports.once = function (t, e) {
            return new Promise(function (n, r) {
              function i(n) {
                t.removeListener(e, o), r(n);
              }
              function o() {
                "function" == typeof t.removeListener &&
                  t.removeListener("error", i),
                  n([].slice.call(arguments));
              }
              g(t, e, o, { once: !0 }),
                "error" !== e &&
                  (function (t, e, n) {
                    "function" == typeof t.on && g(t, "error", e, { once: !0 });
                  })(t, i);
            });
          }),
          (o.EventEmitter = o),
          (o.prototype._events = void 0),
          (o.prototype._eventsCount = 0),
          (o.prototype._maxListeners = void 0);
        var a = 10;
        function s(t) {
          if ("function" != typeof t)
            throw new TypeError(
              'The "listener" argument must be of type Function. Received type ' +
                typeof t
            );
        }
        function u(t) {
          return void 0 === t._maxListeners
            ? o.defaultMaxListeners
            : t._maxListeners;
        }
        function c(t, e, n, r) {
          var i, o, a, c;
          if (
            (s(n),
            void 0 === (o = t._events)
              ? ((o = t._events = Object.create(null)), (t._eventsCount = 0))
              : (void 0 !== o.newListener &&
                  (t.emit("newListener", e, n.listener ? n.listener : n),
                  (o = t._events)),
                (a = o[e])),
            void 0 === a)
          )
            (a = o[e] = n), ++t._eventsCount;
          else if (
            ("function" == typeof a
              ? (a = o[e] = r ? [n, a] : [a, n])
              : r
              ? a.unshift(n)
              : a.push(n),
            (i = u(t)) > 0 && a.length > i && !a.warned)
          ) {
            a.warned = !0;
            var l = new Error(
              "Possible EventEmitter memory leak detected. " +
                a.length +
                " " +
                String(e) +
                " listeners added. Use emitter.setMaxListeners() to increase limit"
            );
            (l.name = "MaxListenersExceededWarning"),
              (l.emitter = t),
              (l.type = e),
              (l.count = a.length),
              (c = l),
              console && console.warn && console.warn(c);
          }
          return t;
        }
        function l() {
          if (!this.fired)
            return (
              this.target.removeListener(this.type, this.wrapFn),
              (this.fired = !0),
              0 === arguments.length
                ? this.listener.call(this.target)
                : this.listener.apply(this.target, arguments)
            );
        }
        function f(t, e, n) {
          var r = {
              fired: !1,
              wrapFn: void 0,
              target: t,
              type: e,
              listener: n,
            },
            i = l.bind(r);
          return (i.listener = n), (r.wrapFn = i), i;
        }
        function p(t, e, n) {
          var r = t._events;
          if (void 0 === r) return [];
          var i = r[e];
          return void 0 === i
            ? []
            : "function" == typeof i
            ? n
              ? [i.listener || i]
              : [i]
            : n
            ? (function (t) {
                for (var e = new Array(t.length), n = 0; n < e.length; ++n)
                  e[n] = t[n].listener || t[n];
                return e;
              })(i)
            : d(i, i.length);
        }
        function h(t) {
          var e = this._events;
          if (void 0 !== e) {
            var n = e[t];
            if ("function" == typeof n) return 1;
            if (void 0 !== n) return n.length;
          }
          return 0;
        }
        function d(t, e) {
          for (var n = new Array(e), r = 0; r < e; ++r) n[r] = t[r];
          return n;
        }
        function g(t, e, n, r) {
          if ("function" == typeof t.on) r.once ? t.once(e, n) : t.on(e, n);
          else {
            if ("function" != typeof t.addEventListener)
              throw new TypeError(
                'The "emitter" argument must be of type EventEmitter. Received type ' +
                  typeof t
              );
            t.addEventListener(e, function i(o) {
              r.once && t.removeEventListener(e, i), n(o);
            });
          }
        }
        Object.defineProperty(o, "defaultMaxListeners", {
          enumerable: !0,
          get: function () {
            return a;
          },
          set: function (t) {
            if ("number" != typeof t || t < 0 || i(t))
              throw new RangeError(
                'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
                  t +
                  "."
              );
            a = t;
          },
        }),
          (o.init = function () {
            (void 0 !== this._events &&
              this._events !== Object.getPrototypeOf(this)._events) ||
              ((this._events = Object.create(null)), (this._eventsCount = 0)),
              (this._maxListeners = this._maxListeners || void 0);
          }),
          (o.prototype.setMaxListeners = function (t) {
            if ("number" != typeof t || t < 0 || i(t))
              throw new RangeError(
                'The value of "n" is out of range. It must be a non-negative number. Received ' +
                  t +
                  "."
              );
            return (this._maxListeners = t), this;
          }),
          (o.prototype.getMaxListeners = function () {
            return u(this);
          }),
          (o.prototype.emit = function (t) {
            for (var e = [], n = 1; n < arguments.length; n++)
              e.push(arguments[n]);
            var i = "error" === t,
              o = this._events;
            if (void 0 !== o) i = i && void 0 === o.error;
            else if (!i) return !1;
            if (i) {
              var a;
              if ((e.length > 0 && (a = e[0]), a instanceof Error)) throw a;
              var s = new Error(
                "Unhandled error." + (a ? " (" + a.message + ")" : "")
              );
              throw ((s.context = a), s);
            }
            var u = o[t];
            if (void 0 === u) return !1;
            if ("function" == typeof u) r(u, this, e);
            else {
              var c = u.length,
                l = d(u, c);
              for (n = 0; n < c; ++n) r(l[n], this, e);
            }
            return !0;
          }),
          (o.prototype.addListener = function (t, e) {
            return c(this, t, e, !1);
          }),
          (o.prototype.on = o.prototype.addListener),
          (o.prototype.prependListener = function (t, e) {
            return c(this, t, e, !0);
          }),
          (o.prototype.once = function (t, e) {
            return s(e), this.on(t, f(this, t, e)), this;
          }),
          (o.prototype.prependOnceListener = function (t, e) {
            return s(e), this.prependListener(t, f(this, t, e)), this;
          }),
          (o.prototype.removeListener = function (t, e) {
            var n, r, i, o, a;
            if ((s(e), void 0 === (r = this._events))) return this;
            if (void 0 === (n = r[t])) return this;
            if (n === e || n.listener === e)
              0 == --this._eventsCount
                ? (this._events = Object.create(null))
                : (delete r[t],
                  r.removeListener &&
                    this.emit("removeListener", t, n.listener || e));
            else if ("function" != typeof n) {
              for (i = -1, o = n.length - 1; o >= 0; o--)
                if (n[o] === e || n[o].listener === e) {
                  (a = n[o].listener), (i = o);
                  break;
                }
              if (i < 0) return this;
              0 === i
                ? n.shift()
                : (function (t, e) {
                    for (; e + 1 < t.length; e++) t[e] = t[e + 1];
                    t.pop();
                  })(n, i),
                1 === n.length && (r[t] = n[0]),
                void 0 !== r.removeListener &&
                  this.emit("removeListener", t, a || e);
            }
            return this;
          }),
          (o.prototype.off = o.prototype.removeListener),
          (o.prototype.removeAllListeners = function (t) {
            var e, n, r;
            if (void 0 === (n = this._events)) return this;
            if (void 0 === n.removeListener)
              return (
                0 === arguments.length
                  ? ((this._events = Object.create(null)),
                    (this._eventsCount = 0))
                  : void 0 !== n[t] &&
                    (0 == --this._eventsCount
                      ? (this._events = Object.create(null))
                      : delete n[t]),
                this
              );
            if (0 === arguments.length) {
              var i,
                o = Object.keys(n);
              for (r = 0; r < o.length; ++r)
                "removeListener" !== (i = o[r]) && this.removeAllListeners(i);
              return (
                this.removeAllListeners("removeListener"),
                (this._events = Object.create(null)),
                (this._eventsCount = 0),
                this
              );
            }
            if ("function" == typeof (e = n[t])) this.removeListener(t, e);
            else if (void 0 !== e)
              for (r = e.length - 1; r >= 0; r--) this.removeListener(t, e[r]);
            return this;
          }),
          (o.prototype.listeners = function (t) {
            return p(this, t, !0);
          }),
          (o.prototype.rawListeners = function (t) {
            return p(this, t, !1);
          }),
          (o.listenerCount = function (t, e) {
            return "function" == typeof t.listenerCount
              ? t.listenerCount(e)
              : h.call(t, e);
          }),
          (o.prototype.listenerCount = h),
          (o.prototype.eventNames = function () {
            return this._eventsCount > 0 ? e(this._events) : [];
          });
      },
      7648: (t) => {
        "use strict";
        var e = Array.prototype.slice,
          n = Object.prototype.toString;
        t.exports = function (t) {
          var r = this;
          if ("function" != typeof r || "[object Function]" !== n.call(r))
            throw new TypeError(
              "Function.prototype.bind called on incompatible " + r
            );
          for (
            var i,
              o = e.call(arguments, 1),
              a = Math.max(0, r.length - o.length),
              s = [],
              u = 0;
            u < a;
            u++
          )
            s.push("$" + u);
          if (
            ((i = Function(
              "binder",
              "return function (" +
                s.join(",") +
                "){ return binder.apply(this,arguments); }"
            )(function () {
              if (this instanceof i) {
                var n = r.apply(this, o.concat(e.call(arguments)));
                return Object(n) === n ? n : this;
              }
              return r.apply(t, o.concat(e.call(arguments)));
            })),
            r.prototype)
          ) {
            var c = function () {};
            (c.prototype = r.prototype),
              (i.prototype = new c()),
              (c.prototype = null);
          }
          return i;
        };
      },
      8612: (t, e, n) => {
        "use strict";
        var r = n(7648);
        t.exports = Function.prototype.bind || r;
      },
      210: (t, e, n) => {
        "use strict";
        var r,
          i = SyntaxError,
          o = Function,
          a = TypeError,
          s = function (t) {
            try {
              return o('"use strict"; return (' + t + ").constructor;")();
            } catch (t) {}
          },
          u = Object.getOwnPropertyDescriptor;
        if (u)
          try {
            u({}, "");
          } catch (t) {
            u = null;
          }
        var c = function () {
            throw new a();
          },
          l = u
            ? (function () {
                try {
                  return c;
                } catch (t) {
                  try {
                    return u(arguments, "callee").get;
                  } catch (t) {
                    return c;
                  }
                }
              })()
            : c,
          f = n(1405)(),
          p = n(8185)(),
          h =
            Object.getPrototypeOf ||
            (p
              ? function (t) {
                  return t.__proto__;
                }
              : null),
          d = {},
          g = "undefined" != typeof Uint8Array && h ? h(Uint8Array) : r,
          y = {
            "%AggregateError%":
              "undefined" == typeof AggregateError ? r : AggregateError,
            "%Array%": Array,
            "%ArrayBuffer%":
              "undefined" == typeof ArrayBuffer ? r : ArrayBuffer,
            "%ArrayIteratorPrototype%": f && h ? h([][Symbol.iterator]()) : r,
            "%AsyncFromSyncIteratorPrototype%": r,
            "%AsyncFunction%": d,
            "%AsyncGenerator%": d,
            "%AsyncGeneratorFunction%": d,
            "%AsyncIteratorPrototype%": d,
            "%Atomics%": "undefined" == typeof Atomics ? r : Atomics,
            "%BigInt%": "undefined" == typeof BigInt ? r : BigInt,
            "%BigInt64Array%":
              "undefined" == typeof BigInt64Array ? r : BigInt64Array,
            "%BigUint64Array%":
              "undefined" == typeof BigUint64Array ? r : BigUint64Array,
            "%Boolean%": Boolean,
            "%DataView%": "undefined" == typeof DataView ? r : DataView,
            "%Date%": Date,
            "%decodeURI%": decodeURI,
            "%decodeURIComponent%": decodeURIComponent,
            "%encodeURI%": encodeURI,
            "%encodeURIComponent%": encodeURIComponent,
            "%Error%": Error,
            "%eval%": eval,
            "%EvalError%": EvalError,
            "%Float32Array%":
              "undefined" == typeof Float32Array ? r : Float32Array,
            "%Float64Array%":
              "undefined" == typeof Float64Array ? r : Float64Array,
            "%FinalizationRegistry%":
              "undefined" == typeof FinalizationRegistry
                ? r
                : FinalizationRegistry,
            "%Function%": o,
            "%GeneratorFunction%": d,
            "%Int8Array%": "undefined" == typeof Int8Array ? r : Int8Array,
            "%Int16Array%": "undefined" == typeof Int16Array ? r : Int16Array,
            "%Int32Array%": "undefined" == typeof Int32Array ? r : Int32Array,
            "%isFinite%": isFinite,
            "%isNaN%": isNaN,
            "%IteratorPrototype%": f && h ? h(h([][Symbol.iterator]())) : r,
            "%JSON%": "object" == typeof JSON ? JSON : r,
            "%Map%": "undefined" == typeof Map ? r : Map,
            "%MapIteratorPrototype%":
              "undefined" != typeof Map && f && h
                ? h(new Map()[Symbol.iterator]())
                : r,
            "%Math%": Math,
            "%Number%": Number,
            "%Object%": Object,
            "%parseFloat%": parseFloat,
            "%parseInt%": parseInt,
            "%Promise%": "undefined" == typeof Promise ? r : Promise,
            "%Proxy%": "undefined" == typeof Proxy ? r : Proxy,
            "%RangeError%": RangeError,
            "%ReferenceError%": ReferenceError,
            "%Reflect%": "undefined" == typeof Reflect ? r : Reflect,
            "%RegExp%": RegExp,
            "%Set%": "undefined" == typeof Set ? r : Set,
            "%SetIteratorPrototype%":
              "undefined" != typeof Set && f && h
                ? h(new Set()[Symbol.iterator]())
                : r,
            "%SharedArrayBuffer%":
              "undefined" == typeof SharedArrayBuffer ? r : SharedArrayBuffer,
            "%String%": String,
            "%StringIteratorPrototype%": f && h ? h(""[Symbol.iterator]()) : r,
            "%Symbol%": f ? Symbol : r,
            "%SyntaxError%": i,
            "%ThrowTypeError%": l,
            "%TypedArray%": g,
            "%TypeError%": a,
            "%Uint8Array%": "undefined" == typeof Uint8Array ? r : Uint8Array,
            "%Uint8ClampedArray%":
              "undefined" == typeof Uint8ClampedArray ? r : Uint8ClampedArray,
            "%Uint16Array%":
              "undefined" == typeof Uint16Array ? r : Uint16Array,
            "%Uint32Array%":
              "undefined" == typeof Uint32Array ? r : Uint32Array,
            "%URIError%": URIError,
            "%WeakMap%": "undefined" == typeof WeakMap ? r : WeakMap,
            "%WeakRef%": "undefined" == typeof WeakRef ? r : WeakRef,
            "%WeakSet%": "undefined" == typeof WeakSet ? r : WeakSet,
          };
        if (h)
          try {
            null.error;
          } catch (t) {
            var v = h(h(t));
            y["%Error.prototype%"] = v;
          }
        var m = function t(e) {
            var n;
            if ("%AsyncFunction%" === e) n = s("async function () {}");
            else if ("%GeneratorFunction%" === e) n = s("function* () {}");
            else if ("%AsyncGeneratorFunction%" === e)
              n = s("async function* () {}");
            else if ("%AsyncGenerator%" === e) {
              var r = t("%AsyncGeneratorFunction%");
              r && (n = r.prototype);
            } else if ("%AsyncIteratorPrototype%" === e) {
              var i = t("%AsyncGenerator%");
              i && h && (n = h(i.prototype));
            }
            return (y[e] = n), n;
          },
          b = {
            "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
            "%ArrayPrototype%": ["Array", "prototype"],
            "%ArrayProto_entries%": ["Array", "prototype", "entries"],
            "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
            "%ArrayProto_keys%": ["Array", "prototype", "keys"],
            "%ArrayProto_values%": ["Array", "prototype", "values"],
            "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
            "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
            "%AsyncGeneratorPrototype%": [
              "AsyncGeneratorFunction",
              "prototype",
              "prototype",
            ],
            "%BooleanPrototype%": ["Boolean", "prototype"],
            "%DataViewPrototype%": ["DataView", "prototype"],
            "%DatePrototype%": ["Date", "prototype"],
            "%ErrorPrototype%": ["Error", "prototype"],
            "%EvalErrorPrototype%": ["EvalError", "prototype"],
            "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
            "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
            "%FunctionPrototype%": ["Function", "prototype"],
            "%Generator%": ["GeneratorFunction", "prototype"],
            "%GeneratorPrototype%": [
              "GeneratorFunction",
              "prototype",
              "prototype",
            ],
            "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
            "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
            "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
            "%JSONParse%": ["JSON", "parse"],
            "%JSONStringify%": ["JSON", "stringify"],
            "%MapPrototype%": ["Map", "prototype"],
            "%NumberPrototype%": ["Number", "prototype"],
            "%ObjectPrototype%": ["Object", "prototype"],
            "%ObjProto_toString%": ["Object", "prototype", "toString"],
            "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
            "%PromisePrototype%": ["Promise", "prototype"],
            "%PromiseProto_then%": ["Promise", "prototype", "then"],
            "%Promise_all%": ["Promise", "all"],
            "%Promise_reject%": ["Promise", "reject"],
            "%Promise_resolve%": ["Promise", "resolve"],
            "%RangeErrorPrototype%": ["RangeError", "prototype"],
            "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
            "%RegExpPrototype%": ["RegExp", "prototype"],
            "%SetPrototype%": ["Set", "prototype"],
            "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
            "%StringPrototype%": ["String", "prototype"],
            "%SymbolPrototype%": ["Symbol", "prototype"],
            "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
            "%TypedArrayPrototype%": ["TypedArray", "prototype"],
            "%TypeErrorPrototype%": ["TypeError", "prototype"],
            "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
            "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
            "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
            "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
            "%URIErrorPrototype%": ["URIError", "prototype"],
            "%WeakMapPrototype%": ["WeakMap", "prototype"],
            "%WeakSetPrototype%": ["WeakSet", "prototype"],
          },
          w = n(8612),
          _ = n(7642),
          E = w.call(Function.call, Array.prototype.concat),
          S = w.call(Function.apply, Array.prototype.splice),
          T = w.call(Function.call, String.prototype.replace),
          x = w.call(Function.call, String.prototype.slice),
          O = w.call(Function.call, RegExp.prototype.exec),
          I =
            /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
          A = /\\(\\)?/g,
          k = function (t, e) {
            var n,
              r = t;
            if ((_(b, r) && (r = "%" + (n = b[r])[0] + "%"), _(y, r))) {
              var o = y[r];
              if ((o === d && (o = m(r)), void 0 === o && !e))
                throw new a(
                  "intrinsic " +
                    t +
                    " exists, but is not available. Please file an issue!"
                );
              return { alias: n, name: r, value: o };
            }
            throw new i("intrinsic " + t + " does not exist!");
          };
        t.exports = function (t, e) {
          if ("string" != typeof t || 0 === t.length)
            throw new a("intrinsic name must be a non-empty string");
          if (arguments.length > 1 && "boolean" != typeof e)
            throw new a('"allowMissing" argument must be a boolean');
          if (null === O(/^%?[^%]*%?$/, t))
            throw new i(
              "`%` may not be present anywhere but at the beginning and end of the intrinsic name"
            );
          var n = (function (t) {
              var e = x(t, 0, 1),
                n = x(t, -1);
              if ("%" === e && "%" !== n)
                throw new i("invalid intrinsic syntax, expected closing `%`");
              if ("%" === n && "%" !== e)
                throw new i("invalid intrinsic syntax, expected opening `%`");
              var r = [];
              return (
                T(t, I, function (t, e, n, i) {
                  r[r.length] = n ? T(i, A, "$1") : e || t;
                }),
                r
              );
            })(t),
            r = n.length > 0 ? n[0] : "",
            o = k("%" + r + "%", e),
            s = o.name,
            c = o.value,
            l = !1,
            f = o.alias;
          f && ((r = f[0]), S(n, E([0, 1], f)));
          for (var p = 1, h = !0; p < n.length; p += 1) {
            var d = n[p],
              g = x(d, 0, 1),
              v = x(d, -1);
            if (
              ('"' === g ||
                "'" === g ||
                "`" === g ||
                '"' === v ||
                "'" === v ||
                "`" === v) &&
              g !== v
            )
              throw new i(
                "property names with quotes must have matching quotes"
              );
            if (
              (("constructor" !== d && h) || (l = !0),
              _(y, (s = "%" + (r += "." + d) + "%")))
            )
              c = y[s];
            else if (null != c) {
              if (!(d in c)) {
                if (!e)
                  throw new a(
                    "base intrinsic for " +
                      t +
                      " exists, but the property is not available."
                  );
                return;
              }
              if (u && p + 1 >= n.length) {
                var m = u(c, d);
                c =
                  (h = !!m) && "get" in m && !("originalValue" in m.get)
                    ? m.get
                    : c[d];
              } else (h = _(c, d)), (c = c[d]);
              h && !l && (y[s] = c);
            }
          }
          return c;
        };
      },
      8185: (t) => {
        "use strict";
        var e = { foo: {} },
          n = Object;
        t.exports = function () {
          return (
            { __proto__: e }.foo === e.foo &&
            !({ __proto__: null } instanceof n)
          );
        };
      },
      1405: (t, e, n) => {
        "use strict";
        var r = "undefined" != typeof Symbol && Symbol,
          i = n(5419);
        t.exports = function () {
          return (
            "function" == typeof r &&
            "function" == typeof Symbol &&
            "symbol" == typeof r("foo") &&
            "symbol" == typeof Symbol("bar") &&
            i()
          );
        };
      },
      5419: (t) => {
        "use strict";
        t.exports = function () {
          if (
            "function" != typeof Symbol ||
            "function" != typeof Object.getOwnPropertySymbols
          )
            return !1;
          if ("symbol" == typeof Symbol.iterator) return !0;
          var t = {},
            e = Symbol("test"),
            n = Object(e);
          if ("string" == typeof e) return !1;
          if ("[object Symbol]" !== Object.prototype.toString.call(e))
            return !1;
          if ("[object Symbol]" !== Object.prototype.toString.call(n))
            return !1;
          for (e in ((t[e] = 42), t)) return !1;
          if ("function" == typeof Object.keys && 0 !== Object.keys(t).length)
            return !1;
          if (
            "function" == typeof Object.getOwnPropertyNames &&
            0 !== Object.getOwnPropertyNames(t).length
          )
            return !1;
          var r = Object.getOwnPropertySymbols(t);
          if (1 !== r.length || r[0] !== e) return !1;
          if (!Object.prototype.propertyIsEnumerable.call(t, e)) return !1;
          if ("function" == typeof Object.getOwnPropertyDescriptor) {
            var i = Object.getOwnPropertyDescriptor(t, e);
            if (42 !== i.value || !0 !== i.enumerable) return !1;
          }
          return !0;
        };
      },
      7642: (t, e, n) => {
        "use strict";
        var r = n(8612);
        t.exports = r.call(Function.call, Object.prototype.hasOwnProperty);
      },
      9267: (t, e, n) => {
        var r = n(8501),
          i = n(8575),
          o = t.exports;
        for (var a in r) r.hasOwnProperty(a) && (o[a] = r[a]);
        function s(t) {
          if (
            ("string" == typeof t && (t = i.parse(t)),
            t.protocol || (t.protocol = "https:"),
            "https:" !== t.protocol)
          )
            throw new Error(
              'Protocol "' + t.protocol + '" not supported. Expected "https:"'
            );
          return t;
        }
        (o.request = function (t, e) {
          return (t = s(t)), r.request.call(this, t, e);
        }),
          (o.get = function (t, e) {
            return (t = s(t)), r.get.call(this, t, e);
          });
      },
      645: (t, e) => {
        (e.read = function (t, e, n, r, i) {
          var o,
            a,
            s = 8 * i - r - 1,
            u = (1 << s) - 1,
            c = u >> 1,
            l = -7,
            f = n ? i - 1 : 0,
            p = n ? -1 : 1,
            h = t[e + f];
          for (
            f += p, o = h & ((1 << -l) - 1), h >>= -l, l += s;
            l > 0;
            o = 256 * o + t[e + f], f += p, l -= 8
          );
          for (
            a = o & ((1 << -l) - 1), o >>= -l, l += r;
            l > 0;
            a = 256 * a + t[e + f], f += p, l -= 8
          );
          if (0 === o) o = 1 - c;
          else {
            if (o === u) return a ? NaN : (1 / 0) * (h ? -1 : 1);
            (a += Math.pow(2, r)), (o -= c);
          }
          return (h ? -1 : 1) * a * Math.pow(2, o - r);
        }),
          (e.write = function (t, e, n, r, i, o) {
            var a,
              s,
              u,
              c = 8 * o - i - 1,
              l = (1 << c) - 1,
              f = l >> 1,
              p = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
              h = r ? 0 : o - 1,
              d = r ? 1 : -1,
              g = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0;
            for (
              e = Math.abs(e),
                isNaN(e) || e === 1 / 0
                  ? ((s = isNaN(e) ? 1 : 0), (a = l))
                  : ((a = Math.floor(Math.log(e) / Math.LN2)),
                    e * (u = Math.pow(2, -a)) < 1 && (a--, (u *= 2)),
                    (e += a + f >= 1 ? p / u : p * Math.pow(2, 1 - f)) * u >=
                      2 && (a++, (u /= 2)),
                    a + f >= l
                      ? ((s = 0), (a = l))
                      : a + f >= 1
                      ? ((s = (e * u - 1) * Math.pow(2, i)), (a += f))
                      : ((s = e * Math.pow(2, f - 1) * Math.pow(2, i)),
                        (a = 0)));
              i >= 8;
              t[n + h] = 255 & s, h += d, s /= 256, i -= 8
            );
            for (
              a = (a << i) | s, c += i;
              c > 0;
              t[n + h] = 255 & a, h += d, a /= 256, c -= 8
            );
            t[n + h - d] |= 128 * g;
          });
      },
      5717: (t) => {
        "function" == typeof Object.create
          ? (t.exports = function (t, e) {
              e &&
                ((t.super_ = e),
                (t.prototype = Object.create(e.prototype, {
                  constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })));
            })
          : (t.exports = function (t, e) {
              if (e) {
                t.super_ = e;
                var n = function () {};
                (n.prototype = e.prototype),
                  (t.prototype = new n()),
                  (t.prototype.constructor = t);
              }
            });
      },
      6486: function (t, e, n) {
        var r;
        (t = n.nmd(t)),
          function () {
            var i,
              o = "Expected a function",
              a = "__lodash_hash_undefined__",
              s = "__lodash_placeholder__",
              u = 32,
              c = 128,
              l = 1 / 0,
              f = 9007199254740991,
              p = NaN,
              h = 4294967295,
              d = [
                ["ary", c],
                ["bind", 1],
                ["bindKey", 2],
                ["curry", 8],
                ["curryRight", 16],
                ["flip", 512],
                ["partial", u],
                ["partialRight", 64],
                ["rearg", 256],
              ],
              g = "[object Arguments]",
              y = "[object Array]",
              v = "[object Boolean]",
              m = "[object Date]",
              b = "[object Error]",
              w = "[object Function]",
              _ = "[object GeneratorFunction]",
              E = "[object Map]",
              S = "[object Number]",
              T = "[object Object]",
              x = "[object Promise]",
              O = "[object RegExp]",
              I = "[object Set]",
              A = "[object String]",
              k = "[object Symbol]",
              R = "[object WeakMap]",
              P = "[object ArrayBuffer]",
              N = "[object DataView]",
              C = "[object Float32Array]",
              D = "[object Float64Array]",
              j = "[object Int8Array]",
              L = "[object Int16Array]",
              M = "[object Int32Array]",
              U = "[object Uint8Array]",
              B = "[object Uint8ClampedArray]",
              F = "[object Uint16Array]",
              q = "[object Uint32Array]",
              V = /\b__p \+= '';/g,
              z = /\b(__p \+=) '' \+/g,
              W = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
              H = /&(?:amp|lt|gt|quot|#39);/g,
              $ = /[&<>"']/g,
              G = RegExp(H.source),
              Y = RegExp($.source),
              K = /<%-([\s\S]+?)%>/g,
              X = /<%([\s\S]+?)%>/g,
              Q = /<%=([\s\S]+?)%>/g,
              J = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
              Z = /^\w*$/,
              tt =
                /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
              et = /[\\^$.*+?()[\]{}|]/g,
              nt = RegExp(et.source),
              rt = /^\s+/,
              it = /\s/,
              ot = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
              at = /\{\n\/\* \[wrapped with (.+)\] \*/,
              st = /,? & /,
              ut = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
              ct = /[()=,{}\[\]\/\s]/,
              lt = /\\(\\)?/g,
              ft = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
              pt = /\w*$/,
              ht = /^[-+]0x[0-9a-f]+$/i,
              dt = /^0b[01]+$/i,
              gt = /^\[object .+?Constructor\]$/,
              yt = /^0o[0-7]+$/i,
              vt = /^(?:0|[1-9]\d*)$/,
              mt = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
              bt = /($^)/,
              wt = /['\n\r\u2028\u2029\\]/g,
              _t = "\\ud800-\\udfff",
              Et = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
              St = "\\u2700-\\u27bf",
              Tt = "a-z\\xdf-\\xf6\\xf8-\\xff",
              xt = "A-Z\\xc0-\\xd6\\xd8-\\xde",
              Ot = "\\ufe0e\\ufe0f",
              It =
                "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
              At = "[" + _t + "]",
              kt = "[" + It + "]",
              Rt = "[" + Et + "]",
              Pt = "\\d+",
              Nt = "[" + St + "]",
              Ct = "[" + Tt + "]",
              Dt = "[^" + _t + It + Pt + St + Tt + xt + "]",
              jt = "\\ud83c[\\udffb-\\udfff]",
              Lt = "[^" + _t + "]",
              Mt = "(?:\\ud83c[\\udde6-\\uddff]){2}",
              Ut = "[\\ud800-\\udbff][\\udc00-\\udfff]",
              Bt = "[" + xt + "]",
              Ft = "\\u200d",
              qt = "(?:" + Ct + "|" + Dt + ")",
              Vt = "(?:" + Bt + "|" + Dt + ")",
              zt = "(?:['’](?:d|ll|m|re|s|t|ve))?",
              Wt = "(?:['’](?:D|LL|M|RE|S|T|VE))?",
              Ht = "(?:" + Rt + "|" + jt + ")?",
              $t = "[" + Ot + "]?",
              Gt =
                $t +
                Ht +
                "(?:" +
                Ft +
                "(?:" +
                [Lt, Mt, Ut].join("|") +
                ")" +
                $t +
                Ht +
                ")*",
              Yt = "(?:" + [Nt, Mt, Ut].join("|") + ")" + Gt,
              Kt = "(?:" + [Lt + Rt + "?", Rt, Mt, Ut, At].join("|") + ")",
              Xt = RegExp("['’]", "g"),
              Qt = RegExp(Rt, "g"),
              Jt = RegExp(jt + "(?=" + jt + ")|" + Kt + Gt, "g"),
              Zt = RegExp(
                [
                  Bt +
                    "?" +
                    Ct +
                    "+" +
                    zt +
                    "(?=" +
                    [kt, Bt, "$"].join("|") +
                    ")",
                  Vt + "+" + Wt + "(?=" + [kt, Bt + qt, "$"].join("|") + ")",
                  Bt + "?" + qt + "+" + zt,
                  Bt + "+" + Wt,
                  "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
                  "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
                  Pt,
                  Yt,
                ].join("|"),
                "g"
              ),
              te = RegExp("[" + Ft + _t + Et + Ot + "]"),
              ee =
                /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
              ne = [
                "Array",
                "Buffer",
                "DataView",
                "Date",
                "Error",
                "Float32Array",
                "Float64Array",
                "Function",
                "Int8Array",
                "Int16Array",
                "Int32Array",
                "Map",
                "Math",
                "Object",
                "Promise",
                "RegExp",
                "Set",
                "String",
                "Symbol",
                "TypeError",
                "Uint8Array",
                "Uint8ClampedArray",
                "Uint16Array",
                "Uint32Array",
                "WeakMap",
                "_",
                "clearTimeout",
                "isFinite",
                "parseInt",
                "setTimeout",
              ],
              re = -1,
              ie = {};
            (ie[C] =
              ie[D] =
              ie[j] =
              ie[L] =
              ie[M] =
              ie[U] =
              ie[B] =
              ie[F] =
              ie[q] =
                !0),
              (ie[g] =
                ie[y] =
                ie[P] =
                ie[v] =
                ie[N] =
                ie[m] =
                ie[b] =
                ie[w] =
                ie[E] =
                ie[S] =
                ie[T] =
                ie[O] =
                ie[I] =
                ie[A] =
                ie[R] =
                  !1);
            var oe = {};
            (oe[g] =
              oe[y] =
              oe[P] =
              oe[N] =
              oe[v] =
              oe[m] =
              oe[C] =
              oe[D] =
              oe[j] =
              oe[L] =
              oe[M] =
              oe[E] =
              oe[S] =
              oe[T] =
              oe[O] =
              oe[I] =
              oe[A] =
              oe[k] =
              oe[U] =
              oe[B] =
              oe[F] =
              oe[q] =
                !0),
              (oe[b] = oe[w] = oe[R] = !1);
            var ae = {
                "\\": "\\",
                "'": "'",
                "\n": "n",
                "\r": "r",
                "\u2028": "u2028",
                "\u2029": "u2029",
              },
              se = parseFloat,
              ue = parseInt,
              ce =
                "object" == typeof n.g && n.g && n.g.Object === Object && n.g,
              le =
                "object" == typeof self &&
                self &&
                self.Object === Object &&
                self,
              fe = ce || le || Function("return this")(),
              pe = e && !e.nodeType && e,
              he = pe && t && !t.nodeType && t,
              de = he && he.exports === pe,
              ge = de && ce.process,
              ye = (function () {
                try {
                  return (
                    (he && he.require && he.require("util").types) ||
                    (ge && ge.binding && ge.binding("util"))
                  );
                } catch (t) {}
              })(),
              ve = ye && ye.isArrayBuffer,
              me = ye && ye.isDate,
              be = ye && ye.isMap,
              we = ye && ye.isRegExp,
              _e = ye && ye.isSet,
              Ee = ye && ye.isTypedArray;
            function Se(t, e, n) {
              switch (n.length) {
                case 0:
                  return t.call(e);
                case 1:
                  return t.call(e, n[0]);
                case 2:
                  return t.call(e, n[0], n[1]);
                case 3:
                  return t.call(e, n[0], n[1], n[2]);
              }
              return t.apply(e, n);
            }
            function Te(t, e, n, r) {
              for (var i = -1, o = null == t ? 0 : t.length; ++i < o; ) {
                var a = t[i];
                e(r, a, n(a), t);
              }
              return r;
            }
            function xe(t, e) {
              for (
                var n = -1, r = null == t ? 0 : t.length;
                ++n < r && !1 !== e(t[n], n, t);

              );
              return t;
            }
            function Oe(t, e) {
              for (
                var n = null == t ? 0 : t.length;
                n-- && !1 !== e(t[n], n, t);

              );
              return t;
            }
            function Ie(t, e) {
              for (var n = -1, r = null == t ? 0 : t.length; ++n < r; )
                if (!e(t[n], n, t)) return !1;
              return !0;
            }
            function Ae(t, e) {
              for (
                var n = -1, r = null == t ? 0 : t.length, i = 0, o = [];
                ++n < r;

              ) {
                var a = t[n];
                e(a, n, t) && (o[i++] = a);
              }
              return o;
            }
            function ke(t, e) {
              return !(null == t || !t.length) && Be(t, e, 0) > -1;
            }
            function Re(t, e, n) {
              for (var r = -1, i = null == t ? 0 : t.length; ++r < i; )
                if (n(e, t[r])) return !0;
              return !1;
            }
            function Pe(t, e) {
              for (
                var n = -1, r = null == t ? 0 : t.length, i = Array(r);
                ++n < r;

              )
                i[n] = e(t[n], n, t);
              return i;
            }
            function Ne(t, e) {
              for (var n = -1, r = e.length, i = t.length; ++n < r; )
                t[i + n] = e[n];
              return t;
            }
            function Ce(t, e, n, r) {
              var i = -1,
                o = null == t ? 0 : t.length;
              for (r && o && (n = t[++i]); ++i < o; ) n = e(n, t[i], i, t);
              return n;
            }
            function De(t, e, n, r) {
              var i = null == t ? 0 : t.length;
              for (r && i && (n = t[--i]); i--; ) n = e(n, t[i], i, t);
              return n;
            }
            function je(t, e) {
              for (var n = -1, r = null == t ? 0 : t.length; ++n < r; )
                if (e(t[n], n, t)) return !0;
              return !1;
            }
            var Le = ze("length");
            function Me(t, e, n) {
              var r;
              return (
                n(t, function (t, n, i) {
                  if (e(t, n, i)) return (r = n), !1;
                }),
                r
              );
            }
            function Ue(t, e, n, r) {
              for (var i = t.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i; )
                if (e(t[o], o, t)) return o;
              return -1;
            }
            function Be(t, e, n) {
              return e == e
                ? (function (t, e, n) {
                    for (var r = n - 1, i = t.length; ++r < i; )
                      if (t[r] === e) return r;
                    return -1;
                  })(t, e, n)
                : Ue(t, qe, n);
            }
            function Fe(t, e, n, r) {
              for (var i = n - 1, o = t.length; ++i < o; )
                if (r(t[i], e)) return i;
              return -1;
            }
            function qe(t) {
              return t != t;
            }
            function Ve(t, e) {
              var n = null == t ? 0 : t.length;
              return n ? $e(t, e) / n : p;
            }
            function ze(t) {
              return function (e) {
                return null == e ? i : e[t];
              };
            }
            function We(t) {
              return function (e) {
                return null == t ? i : t[e];
              };
            }
            function He(t, e, n, r, i) {
              return (
                i(t, function (t, i, o) {
                  n = r ? ((r = !1), t) : e(n, t, i, o);
                }),
                n
              );
            }
            function $e(t, e) {
              for (var n, r = -1, o = t.length; ++r < o; ) {
                var a = e(t[r]);
                a !== i && (n = n === i ? a : n + a);
              }
              return n;
            }
            function Ge(t, e) {
              for (var n = -1, r = Array(t); ++n < t; ) r[n] = e(n);
              return r;
            }
            function Ye(t) {
              return t ? t.slice(0, pn(t) + 1).replace(rt, "") : t;
            }
            function Ke(t) {
              return function (e) {
                return t(e);
              };
            }
            function Xe(t, e) {
              return Pe(e, function (e) {
                return t[e];
              });
            }
            function Qe(t, e) {
              return t.has(e);
            }
            function Je(t, e) {
              for (var n = -1, r = t.length; ++n < r && Be(e, t[n], 0) > -1; );
              return n;
            }
            function Ze(t, e) {
              for (var n = t.length; n-- && Be(e, t[n], 0) > -1; );
              return n;
            }
            var tn = We({
                À: "A",
                Á: "A",
                Â: "A",
                Ã: "A",
                Ä: "A",
                Å: "A",
                à: "a",
                á: "a",
                â: "a",
                ã: "a",
                ä: "a",
                å: "a",
                Ç: "C",
                ç: "c",
                Ð: "D",
                ð: "d",
                È: "E",
                É: "E",
                Ê: "E",
                Ë: "E",
                è: "e",
                é: "e",
                ê: "e",
                ë: "e",
                Ì: "I",
                Í: "I",
                Î: "I",
                Ï: "I",
                ì: "i",
                í: "i",
                î: "i",
                ï: "i",
                Ñ: "N",
                ñ: "n",
                Ò: "O",
                Ó: "O",
                Ô: "O",
                Õ: "O",
                Ö: "O",
                Ø: "O",
                ò: "o",
                ó: "o",
                ô: "o",
                õ: "o",
                ö: "o",
                ø: "o",
                Ù: "U",
                Ú: "U",
                Û: "U",
                Ü: "U",
                ù: "u",
                ú: "u",
                û: "u",
                ü: "u",
                Ý: "Y",
                ý: "y",
                ÿ: "y",
                Æ: "Ae",
                æ: "ae",
                Þ: "Th",
                þ: "th",
                ß: "ss",
                Ā: "A",
                Ă: "A",
                Ą: "A",
                ā: "a",
                ă: "a",
                ą: "a",
                Ć: "C",
                Ĉ: "C",
                Ċ: "C",
                Č: "C",
                ć: "c",
                ĉ: "c",
                ċ: "c",
                č: "c",
                Ď: "D",
                Đ: "D",
                ď: "d",
                đ: "d",
                Ē: "E",
                Ĕ: "E",
                Ė: "E",
                Ę: "E",
                Ě: "E",
                ē: "e",
                ĕ: "e",
                ė: "e",
                ę: "e",
                ě: "e",
                Ĝ: "G",
                Ğ: "G",
                Ġ: "G",
                Ģ: "G",
                ĝ: "g",
                ğ: "g",
                ġ: "g",
                ģ: "g",
                Ĥ: "H",
                Ħ: "H",
                ĥ: "h",
                ħ: "h",
                Ĩ: "I",
                Ī: "I",
                Ĭ: "I",
                Į: "I",
                İ: "I",
                ĩ: "i",
                ī: "i",
                ĭ: "i",
                į: "i",
                ı: "i",
                Ĵ: "J",
                ĵ: "j",
                Ķ: "K",
                ķ: "k",
                ĸ: "k",
                Ĺ: "L",
                Ļ: "L",
                Ľ: "L",
                Ŀ: "L",
                Ł: "L",
                ĺ: "l",
                ļ: "l",
                ľ: "l",
                ŀ: "l",
                ł: "l",
                Ń: "N",
                Ņ: "N",
                Ň: "N",
                Ŋ: "N",
                ń: "n",
                ņ: "n",
                ň: "n",
                ŋ: "n",
                Ō: "O",
                Ŏ: "O",
                Ő: "O",
                ō: "o",
                ŏ: "o",
                ő: "o",
                Ŕ: "R",
                Ŗ: "R",
                Ř: "R",
                ŕ: "r",
                ŗ: "r",
                ř: "r",
                Ś: "S",
                Ŝ: "S",
                Ş: "S",
                Š: "S",
                ś: "s",
                ŝ: "s",
                ş: "s",
                š: "s",
                Ţ: "T",
                Ť: "T",
                Ŧ: "T",
                ţ: "t",
                ť: "t",
                ŧ: "t",
                Ũ: "U",
                Ū: "U",
                Ŭ: "U",
                Ů: "U",
                Ű: "U",
                Ų: "U",
                ũ: "u",
                ū: "u",
                ŭ: "u",
                ů: "u",
                ű: "u",
                ų: "u",
                Ŵ: "W",
                ŵ: "w",
                Ŷ: "Y",
                ŷ: "y",
                Ÿ: "Y",
                Ź: "Z",
                Ż: "Z",
                Ž: "Z",
                ź: "z",
                ż: "z",
                ž: "z",
                Ĳ: "IJ",
                ĳ: "ij",
                Œ: "Oe",
                œ: "oe",
                ŉ: "'n",
                ſ: "s",
              }),
              en = We({
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
              });
            function nn(t) {
              return "\\" + ae[t];
            }
            function rn(t) {
              return te.test(t);
            }
            function on(t) {
              var e = -1,
                n = Array(t.size);
              return (
                t.forEach(function (t, r) {
                  n[++e] = [r, t];
                }),
                n
              );
            }
            function an(t, e) {
              return function (n) {
                return t(e(n));
              };
            }
            function sn(t, e) {
              for (var n = -1, r = t.length, i = 0, o = []; ++n < r; ) {
                var a = t[n];
                (a !== e && a !== s) || ((t[n] = s), (o[i++] = n));
              }
              return o;
            }
            function un(t) {
              var e = -1,
                n = Array(t.size);
              return (
                t.forEach(function (t) {
                  n[++e] = t;
                }),
                n
              );
            }
            function cn(t) {
              var e = -1,
                n = Array(t.size);
              return (
                t.forEach(function (t) {
                  n[++e] = [t, t];
                }),
                n
              );
            }
            function ln(t) {
              return rn(t)
                ? (function (t) {
                    for (var e = (Jt.lastIndex = 0); Jt.test(t); ) ++e;
                    return e;
                  })(t)
                : Le(t);
            }
            function fn(t) {
              return rn(t)
                ? (function (t) {
                    return t.match(Jt) || [];
                  })(t)
                : (function (t) {
                    return t.split("");
                  })(t);
            }
            function pn(t) {
              for (var e = t.length; e-- && it.test(t.charAt(e)); );
              return e;
            }
            var hn = We({
                "&amp;": "&",
                "&lt;": "<",
                "&gt;": ">",
                "&quot;": '"',
                "&#39;": "'",
              }),
              dn = (function t(e) {
                var n,
                  r = (e =
                    null == e
                      ? fe
                      : dn.defaults(fe.Object(), e, dn.pick(fe, ne))).Array,
                  it = e.Date,
                  _t = e.Error,
                  Et = e.Function,
                  St = e.Math,
                  Tt = e.Object,
                  xt = e.RegExp,
                  Ot = e.String,
                  It = e.TypeError,
                  At = r.prototype,
                  kt = Et.prototype,
                  Rt = Tt.prototype,
                  Pt = e["__core-js_shared__"],
                  Nt = kt.toString,
                  Ct = Rt.hasOwnProperty,
                  Dt = 0,
                  jt = (n = /[^.]+$/.exec(
                    (Pt && Pt.keys && Pt.keys.IE_PROTO) || ""
                  ))
                    ? "Symbol(src)_1." + n
                    : "",
                  Lt = Rt.toString,
                  Mt = Nt.call(Tt),
                  Ut = fe._,
                  Bt = xt(
                    "^" +
                      Nt.call(Ct)
                        .replace(et, "\\$&")
                        .replace(
                          /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                          "$1.*?"
                        ) +
                      "$"
                  ),
                  Ft = de ? e.Buffer : i,
                  qt = e.Symbol,
                  Vt = e.Uint8Array,
                  zt = Ft ? Ft.allocUnsafe : i,
                  Wt = an(Tt.getPrototypeOf, Tt),
                  Ht = Tt.create,
                  $t = Rt.propertyIsEnumerable,
                  Gt = At.splice,
                  Yt = qt ? qt.isConcatSpreadable : i,
                  Kt = qt ? qt.iterator : i,
                  Jt = qt ? qt.toStringTag : i,
                  te = (function () {
                    try {
                      var t = uo(Tt, "defineProperty");
                      return t({}, "", {}), t;
                    } catch (t) {}
                  })(),
                  ae = e.clearTimeout !== fe.clearTimeout && e.clearTimeout,
                  ce = it && it.now !== fe.Date.now && it.now,
                  le = e.setTimeout !== fe.setTimeout && e.setTimeout,
                  pe = St.ceil,
                  he = St.floor,
                  ge = Tt.getOwnPropertySymbols,
                  ye = Ft ? Ft.isBuffer : i,
                  Le = e.isFinite,
                  We = At.join,
                  gn = an(Tt.keys, Tt),
                  yn = St.max,
                  vn = St.min,
                  mn = it.now,
                  bn = e.parseInt,
                  wn = St.random,
                  _n = At.reverse,
                  En = uo(e, "DataView"),
                  Sn = uo(e, "Map"),
                  Tn = uo(e, "Promise"),
                  xn = uo(e, "Set"),
                  On = uo(e, "WeakMap"),
                  In = uo(Tt, "create"),
                  An = On && new On(),
                  kn = {},
                  Rn = Mo(En),
                  Pn = Mo(Sn),
                  Nn = Mo(Tn),
                  Cn = Mo(xn),
                  Dn = Mo(On),
                  jn = qt ? qt.prototype : i,
                  Ln = jn ? jn.valueOf : i,
                  Mn = jn ? jn.toString : i;
                function Un(t) {
                  if (ts(t) && !za(t) && !(t instanceof Vn)) {
                    if (t instanceof qn) return t;
                    if (Ct.call(t, "__wrapped__")) return Uo(t);
                  }
                  return new qn(t);
                }
                var Bn = (function () {
                  function t() {}
                  return function (e) {
                    if (!Za(e)) return {};
                    if (Ht) return Ht(e);
                    t.prototype = e;
                    var n = new t();
                    return (t.prototype = i), n;
                  };
                })();
                function Fn() {}
                function qn(t, e) {
                  (this.__wrapped__ = t),
                    (this.__actions__ = []),
                    (this.__chain__ = !!e),
                    (this.__index__ = 0),
                    (this.__values__ = i);
                }
                function Vn(t) {
                  (this.__wrapped__ = t),
                    (this.__actions__ = []),
                    (this.__dir__ = 1),
                    (this.__filtered__ = !1),
                    (this.__iteratees__ = []),
                    (this.__takeCount__ = h),
                    (this.__views__ = []);
                }
                function zn(t) {
                  var e = -1,
                    n = null == t ? 0 : t.length;
                  for (this.clear(); ++e < n; ) {
                    var r = t[e];
                    this.set(r[0], r[1]);
                  }
                }
                function Wn(t) {
                  var e = -1,
                    n = null == t ? 0 : t.length;
                  for (this.clear(); ++e < n; ) {
                    var r = t[e];
                    this.set(r[0], r[1]);
                  }
                }
                function Hn(t) {
                  var e = -1,
                    n = null == t ? 0 : t.length;
                  for (this.clear(); ++e < n; ) {
                    var r = t[e];
                    this.set(r[0], r[1]);
                  }
                }
                function $n(t) {
                  var e = -1,
                    n = null == t ? 0 : t.length;
                  for (this.__data__ = new Hn(); ++e < n; ) this.add(t[e]);
                }
                function Gn(t) {
                  var e = (this.__data__ = new Wn(t));
                  this.size = e.size;
                }
                function Yn(t, e) {
                  var n = za(t),
                    r = !n && Va(t),
                    i = !n && !r && Ga(t),
                    o = !n && !r && !i && us(t),
                    a = n || r || i || o,
                    s = a ? Ge(t.length, Ot) : [],
                    u = s.length;
                  for (var c in t)
                    (!e && !Ct.call(t, c)) ||
                      (a &&
                        ("length" == c ||
                          (i && ("offset" == c || "parent" == c)) ||
                          (o &&
                            ("buffer" == c ||
                              "byteLength" == c ||
                              "byteOffset" == c)) ||
                          yo(c, u))) ||
                      s.push(c);
                  return s;
                }
                function Kn(t) {
                  var e = t.length;
                  return e ? t[Hr(0, e - 1)] : i;
                }
                function Xn(t, e) {
                  return No(Oi(t), or(e, 0, t.length));
                }
                function Qn(t) {
                  return No(Oi(t));
                }
                function Jn(t, e, n) {
                  ((n !== i && !Ba(t[e], n)) || (n === i && !(e in t))) &&
                    rr(t, e, n);
                }
                function Zn(t, e, n) {
                  var r = t[e];
                  (Ct.call(t, e) && Ba(r, n) && (n !== i || e in t)) ||
                    rr(t, e, n);
                }
                function tr(t, e) {
                  for (var n = t.length; n--; ) if (Ba(t[n][0], e)) return n;
                  return -1;
                }
                function er(t, e, n, r) {
                  return (
                    lr(t, function (t, i, o) {
                      e(r, t, n(t), o);
                    }),
                    r
                  );
                }
                function nr(t, e) {
                  return t && Ii(e, Rs(e), t);
                }
                function rr(t, e, n) {
                  "__proto__" == e && te
                    ? te(t, e, {
                        configurable: !0,
                        enumerable: !0,
                        value: n,
                        writable: !0,
                      })
                    : (t[e] = n);
                }
                function ir(t, e) {
                  for (
                    var n = -1, o = e.length, a = r(o), s = null == t;
                    ++n < o;

                  )
                    a[n] = s ? i : xs(t, e[n]);
                  return a;
                }
                function or(t, e, n) {
                  return (
                    t == t &&
                      (n !== i && (t = t <= n ? t : n),
                      e !== i && (t = t >= e ? t : e)),
                    t
                  );
                }
                function ar(t, e, n, r, o, a) {
                  var s,
                    u = 1 & e,
                    c = 2 & e,
                    l = 4 & e;
                  if ((n && (s = o ? n(t, r, o, a) : n(t)), s !== i)) return s;
                  if (!Za(t)) return t;
                  var f = za(t);
                  if (f) {
                    if (
                      ((s = (function (t) {
                        var e = t.length,
                          n = new t.constructor(e);
                        return (
                          e &&
                            "string" == typeof t[0] &&
                            Ct.call(t, "index") &&
                            ((n.index = t.index), (n.input = t.input)),
                          n
                        );
                      })(t)),
                      !u)
                    )
                      return Oi(t, s);
                  } else {
                    var p = fo(t),
                      h = p == w || p == _;
                    if (Ga(t)) return wi(t, u);
                    if (p == T || p == g || (h && !o)) {
                      if (((s = c || h ? {} : ho(t)), !u))
                        return c
                          ? (function (t, e) {
                              return Ii(t, lo(t), e);
                            })(
                              t,
                              (function (t, e) {
                                return t && Ii(e, Ps(e), t);
                              })(s, t)
                            )
                          : (function (t, e) {
                              return Ii(t, co(t), e);
                            })(t, nr(s, t));
                    } else {
                      if (!oe[p]) return o ? t : {};
                      s = (function (t, e, n) {
                        var r,
                          i = t.constructor;
                        switch (e) {
                          case P:
                            return _i(t);
                          case v:
                          case m:
                            return new i(+t);
                          case N:
                            return (function (t, e) {
                              var n = e ? _i(t.buffer) : t.buffer;
                              return new t.constructor(
                                n,
                                t.byteOffset,
                                t.byteLength
                              );
                            })(t, n);
                          case C:
                          case D:
                          case j:
                          case L:
                          case M:
                          case U:
                          case B:
                          case F:
                          case q:
                            return Ei(t, n);
                          case E:
                            return new i();
                          case S:
                          case A:
                            return new i(t);
                          case O:
                            return (function (t) {
                              var e = new t.constructor(t.source, pt.exec(t));
                              return (e.lastIndex = t.lastIndex), e;
                            })(t);
                          case I:
                            return new i();
                          case k:
                            return (r = t), Ln ? Tt(Ln.call(r)) : {};
                        }
                      })(t, p, u);
                    }
                  }
                  a || (a = new Gn());
                  var d = a.get(t);
                  if (d) return d;
                  a.set(t, s),
                    os(t)
                      ? t.forEach(function (r) {
                          s.add(ar(r, e, n, r, t, a));
                        })
                      : es(t) &&
                        t.forEach(function (r, i) {
                          s.set(i, ar(r, e, n, i, t, a));
                        });
                  var y = f ? i : (l ? (c ? eo : to) : c ? Ps : Rs)(t);
                  return (
                    xe(y || t, function (r, i) {
                      y && (r = t[(i = r)]), Zn(s, i, ar(r, e, n, i, t, a));
                    }),
                    s
                  );
                }
                function sr(t, e, n) {
                  var r = n.length;
                  if (null == t) return !r;
                  for (t = Tt(t); r--; ) {
                    var o = n[r],
                      a = e[o],
                      s = t[o];
                    if ((s === i && !(o in t)) || !a(s)) return !1;
                  }
                  return !0;
                }
                function ur(t, e, n) {
                  if ("function" != typeof t) throw new It(o);
                  return Ao(function () {
                    t.apply(i, n);
                  }, e);
                }
                function cr(t, e, n, r) {
                  var i = -1,
                    o = ke,
                    a = !0,
                    s = t.length,
                    u = [],
                    c = e.length;
                  if (!s) return u;
                  n && (e = Pe(e, Ke(n))),
                    r
                      ? ((o = Re), (a = !1))
                      : e.length >= 200 &&
                        ((o = Qe), (a = !1), (e = new $n(e)));
                  t: for (; ++i < s; ) {
                    var l = t[i],
                      f = null == n ? l : n(l);
                    if (((l = r || 0 !== l ? l : 0), a && f == f)) {
                      for (var p = c; p--; ) if (e[p] === f) continue t;
                      u.push(l);
                    } else o(e, f, r) || u.push(l);
                  }
                  return u;
                }
                (Un.templateSettings = {
                  escape: K,
                  evaluate: X,
                  interpolate: Q,
                  variable: "",
                  imports: { _: Un },
                }),
                  (Un.prototype = Fn.prototype),
                  (Un.prototype.constructor = Un),
                  (qn.prototype = Bn(Fn.prototype)),
                  (qn.prototype.constructor = qn),
                  (Vn.prototype = Bn(Fn.prototype)),
                  (Vn.prototype.constructor = Vn),
                  (zn.prototype.clear = function () {
                    (this.__data__ = In ? In(null) : {}), (this.size = 0);
                  }),
                  (zn.prototype.delete = function (t) {
                    var e = this.has(t) && delete this.__data__[t];
                    return (this.size -= e ? 1 : 0), e;
                  }),
                  (zn.prototype.get = function (t) {
                    var e = this.__data__;
                    if (In) {
                      var n = e[t];
                      return n === a ? i : n;
                    }
                    return Ct.call(e, t) ? e[t] : i;
                  }),
                  (zn.prototype.has = function (t) {
                    var e = this.__data__;
                    return In ? e[t] !== i : Ct.call(e, t);
                  }),
                  (zn.prototype.set = function (t, e) {
                    var n = this.__data__;
                    return (
                      (this.size += this.has(t) ? 0 : 1),
                      (n[t] = In && e === i ? a : e),
                      this
                    );
                  }),
                  (Wn.prototype.clear = function () {
                    (this.__data__ = []), (this.size = 0);
                  }),
                  (Wn.prototype.delete = function (t) {
                    var e = this.__data__,
                      n = tr(e, t);
                    return !(
                      n < 0 ||
                      (n == e.length - 1 ? e.pop() : Gt.call(e, n, 1),
                      --this.size,
                      0)
                    );
                  }),
                  (Wn.prototype.get = function (t) {
                    var e = this.__data__,
                      n = tr(e, t);
                    return n < 0 ? i : e[n][1];
                  }),
                  (Wn.prototype.has = function (t) {
                    return tr(this.__data__, t) > -1;
                  }),
                  (Wn.prototype.set = function (t, e) {
                    var n = this.__data__,
                      r = tr(n, t);
                    return (
                      r < 0 ? (++this.size, n.push([t, e])) : (n[r][1] = e),
                      this
                    );
                  }),
                  (Hn.prototype.clear = function () {
                    (this.size = 0),
                      (this.__data__ = {
                        hash: new zn(),
                        map: new (Sn || Wn)(),
                        string: new zn(),
                      });
                  }),
                  (Hn.prototype.delete = function (t) {
                    var e = ao(this, t).delete(t);
                    return (this.size -= e ? 1 : 0), e;
                  }),
                  (Hn.prototype.get = function (t) {
                    return ao(this, t).get(t);
                  }),
                  (Hn.prototype.has = function (t) {
                    return ao(this, t).has(t);
                  }),
                  (Hn.prototype.set = function (t, e) {
                    var n = ao(this, t),
                      r = n.size;
                    return (
                      n.set(t, e), (this.size += n.size == r ? 0 : 1), this
                    );
                  }),
                  ($n.prototype.add = $n.prototype.push =
                    function (t) {
                      return this.__data__.set(t, a), this;
                    }),
                  ($n.prototype.has = function (t) {
                    return this.__data__.has(t);
                  }),
                  (Gn.prototype.clear = function () {
                    (this.__data__ = new Wn()), (this.size = 0);
                  }),
                  (Gn.prototype.delete = function (t) {
                    var e = this.__data__,
                      n = e.delete(t);
                    return (this.size = e.size), n;
                  }),
                  (Gn.prototype.get = function (t) {
                    return this.__data__.get(t);
                  }),
                  (Gn.prototype.has = function (t) {
                    return this.__data__.has(t);
                  }),
                  (Gn.prototype.set = function (t, e) {
                    var n = this.__data__;
                    if (n instanceof Wn) {
                      var r = n.__data__;
                      if (!Sn || r.length < 199)
                        return r.push([t, e]), (this.size = ++n.size), this;
                      n = this.__data__ = new Hn(r);
                    }
                    return n.set(t, e), (this.size = n.size), this;
                  });
                var lr = Ri(mr),
                  fr = Ri(br, !0);
                function pr(t, e) {
                  var n = !0;
                  return (
                    lr(t, function (t, r, i) {
                      return (n = !!e(t, r, i));
                    }),
                    n
                  );
                }
                function hr(t, e, n) {
                  for (var r = -1, o = t.length; ++r < o; ) {
                    var a = t[r],
                      s = e(a);
                    if (null != s && (u === i ? s == s && !ss(s) : n(s, u)))
                      var u = s,
                        c = a;
                  }
                  return c;
                }
                function dr(t, e) {
                  var n = [];
                  return (
                    lr(t, function (t, r, i) {
                      e(t, r, i) && n.push(t);
                    }),
                    n
                  );
                }
                function gr(t, e, n, r, i) {
                  var o = -1,
                    a = t.length;
                  for (n || (n = go), i || (i = []); ++o < a; ) {
                    var s = t[o];
                    e > 0 && n(s)
                      ? e > 1
                        ? gr(s, e - 1, n, r, i)
                        : Ne(i, s)
                      : r || (i[i.length] = s);
                  }
                  return i;
                }
                var yr = Pi(),
                  vr = Pi(!0);
                function mr(t, e) {
                  return t && yr(t, e, Rs);
                }
                function br(t, e) {
                  return t && vr(t, e, Rs);
                }
                function wr(t, e) {
                  return Ae(e, function (e) {
                    return Xa(t[e]);
                  });
                }
                function _r(t, e) {
                  for (
                    var n = 0, r = (e = yi(e, t)).length;
                    null != t && n < r;

                  )
                    t = t[Lo(e[n++])];
                  return n && n == r ? t : i;
                }
                function Er(t, e, n) {
                  var r = e(t);
                  return za(t) ? r : Ne(r, n(t));
                }
                function Sr(t) {
                  return null == t
                    ? t === i
                      ? "[object Undefined]"
                      : "[object Null]"
                    : Jt && Jt in Tt(t)
                    ? (function (t) {
                        var e = Ct.call(t, Jt),
                          n = t[Jt];
                        try {
                          t[Jt] = i;
                          var r = !0;
                        } catch (t) {}
                        var o = Lt.call(t);
                        return r && (e ? (t[Jt] = n) : delete t[Jt]), o;
                      })(t)
                    : (function (t) {
                        return Lt.call(t);
                      })(t);
                }
                function Tr(t, e) {
                  return t > e;
                }
                function xr(t, e) {
                  return null != t && Ct.call(t, e);
                }
                function Or(t, e) {
                  return null != t && e in Tt(t);
                }
                function Ir(t, e, n) {
                  for (
                    var o = n ? Re : ke,
                      a = t[0].length,
                      s = t.length,
                      u = s,
                      c = r(s),
                      l = 1 / 0,
                      f = [];
                    u--;

                  ) {
                    var p = t[u];
                    u && e && (p = Pe(p, Ke(e))),
                      (l = vn(p.length, l)),
                      (c[u] =
                        !n && (e || (a >= 120 && p.length >= 120))
                          ? new $n(u && p)
                          : i);
                  }
                  p = t[0];
                  var h = -1,
                    d = c[0];
                  t: for (; ++h < a && f.length < l; ) {
                    var g = p[h],
                      y = e ? e(g) : g;
                    if (
                      ((g = n || 0 !== g ? g : 0), !(d ? Qe(d, y) : o(f, y, n)))
                    ) {
                      for (u = s; --u; ) {
                        var v = c[u];
                        if (!(v ? Qe(v, y) : o(t[u], y, n))) continue t;
                      }
                      d && d.push(y), f.push(g);
                    }
                  }
                  return f;
                }
                function Ar(t, e, n) {
                  var r =
                    null == (t = xo(t, (e = yi(e, t)))) ? t : t[Lo(Ko(e))];
                  return null == r ? i : Se(r, t, n);
                }
                function kr(t) {
                  return ts(t) && Sr(t) == g;
                }
                function Rr(t, e, n, r, o) {
                  return (
                    t === e ||
                    (null == t || null == e || (!ts(t) && !ts(e))
                      ? t != t && e != e
                      : (function (t, e, n, r, o, a) {
                          var s = za(t),
                            u = za(e),
                            c = s ? y : fo(t),
                            l = u ? y : fo(e),
                            f = (c = c == g ? T : c) == T,
                            p = (l = l == g ? T : l) == T,
                            h = c == l;
                          if (h && Ga(t)) {
                            if (!Ga(e)) return !1;
                            (s = !0), (f = !1);
                          }
                          if (h && !f)
                            return (
                              a || (a = new Gn()),
                              s || us(t)
                                ? Ji(t, e, n, r, o, a)
                                : (function (t, e, n, r, i, o, a) {
                                    switch (n) {
                                      case N:
                                        if (
                                          t.byteLength != e.byteLength ||
                                          t.byteOffset != e.byteOffset
                                        )
                                          return !1;
                                        (t = t.buffer), (e = e.buffer);
                                      case P:
                                        return !(
                                          t.byteLength != e.byteLength ||
                                          !o(new Vt(t), new Vt(e))
                                        );
                                      case v:
                                      case m:
                                      case S:
                                        return Ba(+t, +e);
                                      case b:
                                        return (
                                          t.name == e.name &&
                                          t.message == e.message
                                        );
                                      case O:
                                      case A:
                                        return t == e + "";
                                      case E:
                                        var s = on;
                                      case I:
                                        var u = 1 & r;
                                        if (
                                          (s || (s = un),
                                          t.size != e.size && !u)
                                        )
                                          return !1;
                                        var c = a.get(t);
                                        if (c) return c == e;
                                        (r |= 2), a.set(t, e);
                                        var l = Ji(s(t), s(e), r, i, o, a);
                                        return a.delete(t), l;
                                      case k:
                                        if (Ln) return Ln.call(t) == Ln.call(e);
                                    }
                                    return !1;
                                  })(t, e, c, n, r, o, a)
                            );
                          if (!(1 & n)) {
                            var d = f && Ct.call(t, "__wrapped__"),
                              w = p && Ct.call(e, "__wrapped__");
                            if (d || w) {
                              var _ = d ? t.value() : t,
                                x = w ? e.value() : e;
                              return a || (a = new Gn()), o(_, x, n, r, a);
                            }
                          }
                          return (
                            !!h &&
                            (a || (a = new Gn()),
                            (function (t, e, n, r, o, a) {
                              var s = 1 & n,
                                u = to(t),
                                c = u.length;
                              if (c != to(e).length && !s) return !1;
                              for (var l = c; l--; ) {
                                var f = u[l];
                                if (!(s ? f in e : Ct.call(e, f))) return !1;
                              }
                              var p = a.get(t),
                                h = a.get(e);
                              if (p && h) return p == e && h == t;
                              var d = !0;
                              a.set(t, e), a.set(e, t);
                              for (var g = s; ++l < c; ) {
                                var y = t[(f = u[l])],
                                  v = e[f];
                                if (r)
                                  var m = s
                                    ? r(v, y, f, e, t, a)
                                    : r(y, v, f, t, e, a);
                                if (
                                  !(m === i ? y === v || o(y, v, n, r, a) : m)
                                ) {
                                  d = !1;
                                  break;
                                }
                                g || (g = "constructor" == f);
                              }
                              if (d && !g) {
                                var b = t.constructor,
                                  w = e.constructor;
                                b == w ||
                                  !("constructor" in t) ||
                                  !("constructor" in e) ||
                                  ("function" == typeof b &&
                                    b instanceof b &&
                                    "function" == typeof w &&
                                    w instanceof w) ||
                                  (d = !1);
                              }
                              return a.delete(t), a.delete(e), d;
                            })(t, e, n, r, o, a))
                          );
                        })(t, e, n, r, Rr, o))
                  );
                }
                function Pr(t, e, n, r) {
                  var o = n.length,
                    a = o,
                    s = !r;
                  if (null == t) return !a;
                  for (t = Tt(t); o--; ) {
                    var u = n[o];
                    if (s && u[2] ? u[1] !== t[u[0]] : !(u[0] in t)) return !1;
                  }
                  for (; ++o < a; ) {
                    var c = (u = n[o])[0],
                      l = t[c],
                      f = u[1];
                    if (s && u[2]) {
                      if (l === i && !(c in t)) return !1;
                    } else {
                      var p = new Gn();
                      if (r) var h = r(l, f, c, t, e, p);
                      if (!(h === i ? Rr(f, l, 3, r, p) : h)) return !1;
                    }
                  }
                  return !0;
                }
                function Nr(t) {
                  return (
                    !(!Za(t) || ((e = t), jt && jt in e)) &&
                    (Xa(t) ? Bt : gt).test(Mo(t))
                  );
                  var e;
                }
                function Cr(t) {
                  return "function" == typeof t
                    ? t
                    : null == t
                    ? nu
                    : "object" == typeof t
                    ? za(t)
                      ? Ur(t[0], t[1])
                      : Mr(t)
                    : fu(t);
                }
                function Dr(t) {
                  if (!_o(t)) return gn(t);
                  var e = [];
                  for (var n in Tt(t))
                    Ct.call(t, n) && "constructor" != n && e.push(n);
                  return e;
                }
                function jr(t, e) {
                  return t < e;
                }
                function Lr(t, e) {
                  var n = -1,
                    i = Ha(t) ? r(t.length) : [];
                  return (
                    lr(t, function (t, r, o) {
                      i[++n] = e(t, r, o);
                    }),
                    i
                  );
                }
                function Mr(t) {
                  var e = so(t);
                  return 1 == e.length && e[0][2]
                    ? So(e[0][0], e[0][1])
                    : function (n) {
                        return n === t || Pr(n, t, e);
                      };
                }
                function Ur(t, e) {
                  return mo(t) && Eo(e)
                    ? So(Lo(t), e)
                    : function (n) {
                        var r = xs(n, t);
                        return r === i && r === e ? Os(n, t) : Rr(e, r, 3);
                      };
                }
                function Br(t, e, n, r, o) {
                  t !== e &&
                    yr(
                      e,
                      function (a, s) {
                        if ((o || (o = new Gn()), Za(a)))
                          !(function (t, e, n, r, o, a, s) {
                            var u = Oo(t, n),
                              c = Oo(e, n),
                              l = s.get(c);
                            if (l) Jn(t, n, l);
                            else {
                              var f = a ? a(u, c, n + "", t, e, s) : i,
                                p = f === i;
                              if (p) {
                                var h = za(c),
                                  d = !h && Ga(c),
                                  g = !h && !d && us(c);
                                (f = c),
                                  h || d || g
                                    ? za(u)
                                      ? (f = u)
                                      : $a(u)
                                      ? (f = Oi(u))
                                      : d
                                      ? ((p = !1), (f = wi(c, !0)))
                                      : g
                                      ? ((p = !1), (f = Ei(c, !0)))
                                      : (f = [])
                                    : rs(c) || Va(c)
                                    ? ((f = u),
                                      Va(u)
                                        ? (f = ys(u))
                                        : (Za(u) && !Xa(u)) || (f = ho(c)))
                                    : (p = !1);
                              }
                              p && (s.set(c, f), o(f, c, r, a, s), s.delete(c)),
                                Jn(t, n, f);
                            }
                          })(t, e, s, n, Br, r, o);
                        else {
                          var u = r ? r(Oo(t, s), a, s + "", t, e, o) : i;
                          u === i && (u = a), Jn(t, s, u);
                        }
                      },
                      Ps
                    );
                }
                function Fr(t, e) {
                  var n = t.length;
                  if (n) return yo((e += e < 0 ? n : 0), n) ? t[e] : i;
                }
                function qr(t, e, n) {
                  e = e.length
                    ? Pe(e, function (t) {
                        return za(t)
                          ? function (e) {
                              return _r(e, 1 === t.length ? t[0] : t);
                            }
                          : t;
                      })
                    : [nu];
                  var r = -1;
                  e = Pe(e, Ke(oo()));
                  var i = Lr(t, function (t, n, i) {
                    var o = Pe(e, function (e) {
                      return e(t);
                    });
                    return { criteria: o, index: ++r, value: t };
                  });
                  return (function (t, e) {
                    var r = t.length;
                    for (
                      t.sort(function (t, e) {
                        return (function (t, e, n) {
                          for (
                            var r = -1,
                              i = t.criteria,
                              o = e.criteria,
                              a = i.length,
                              s = n.length;
                            ++r < a;

                          ) {
                            var u = Si(i[r], o[r]);
                            if (u)
                              return r >= s ? u : u * ("desc" == n[r] ? -1 : 1);
                          }
                          return t.index - e.index;
                        })(t, e, n);
                      });
                      r--;

                    )
                      t[r] = t[r].value;
                    return t;
                  })(i);
                }
                function Vr(t, e, n) {
                  for (var r = -1, i = e.length, o = {}; ++r < i; ) {
                    var a = e[r],
                      s = _r(t, a);
                    n(s, a) && Xr(o, yi(a, t), s);
                  }
                  return o;
                }
                function zr(t, e, n, r) {
                  var i = r ? Fe : Be,
                    o = -1,
                    a = e.length,
                    s = t;
                  for (
                    t === e && (e = Oi(e)), n && (s = Pe(t, Ke(n)));
                    ++o < a;

                  )
                    for (
                      var u = 0, c = e[o], l = n ? n(c) : c;
                      (u = i(s, l, u, r)) > -1;

                    )
                      s !== t && Gt.call(s, u, 1), Gt.call(t, u, 1);
                  return t;
                }
                function Wr(t, e) {
                  for (var n = t ? e.length : 0, r = n - 1; n--; ) {
                    var i = e[n];
                    if (n == r || i !== o) {
                      var o = i;
                      yo(i) ? Gt.call(t, i, 1) : ui(t, i);
                    }
                  }
                  return t;
                }
                function Hr(t, e) {
                  return t + he(wn() * (e - t + 1));
                }
                function $r(t, e) {
                  var n = "";
                  if (!t || e < 1 || e > f) return n;
                  do {
                    e % 2 && (n += t), (e = he(e / 2)) && (t += t);
                  } while (e);
                  return n;
                }
                function Gr(t, e) {
                  return ko(To(t, e, nu), t + "");
                }
                function Yr(t) {
                  return Kn(Bs(t));
                }
                function Kr(t, e) {
                  var n = Bs(t);
                  return No(n, or(e, 0, n.length));
                }
                function Xr(t, e, n, r) {
                  if (!Za(t)) return t;
                  for (
                    var o = -1, a = (e = yi(e, t)).length, s = a - 1, u = t;
                    null != u && ++o < a;

                  ) {
                    var c = Lo(e[o]),
                      l = n;
                    if (
                      "__proto__" === c ||
                      "constructor" === c ||
                      "prototype" === c
                    )
                      return t;
                    if (o != s) {
                      var f = u[c];
                      (l = r ? r(f, c, u) : i) === i &&
                        (l = Za(f) ? f : yo(e[o + 1]) ? [] : {});
                    }
                    Zn(u, c, l), (u = u[c]);
                  }
                  return t;
                }
                var Qr = An
                    ? function (t, e) {
                        return An.set(t, e), t;
                      }
                    : nu,
                  Jr = te
                    ? function (t, e) {
                        return te(t, "toString", {
                          configurable: !0,
                          enumerable: !1,
                          value: Zs(e),
                          writable: !0,
                        });
                      }
                    : nu;
                function Zr(t) {
                  return No(Bs(t));
                }
                function ti(t, e, n) {
                  var i = -1,
                    o = t.length;
                  e < 0 && (e = -e > o ? 0 : o + e),
                    (n = n > o ? o : n) < 0 && (n += o),
                    (o = e > n ? 0 : (n - e) >>> 0),
                    (e >>>= 0);
                  for (var a = r(o); ++i < o; ) a[i] = t[i + e];
                  return a;
                }
                function ei(t, e) {
                  var n;
                  return (
                    lr(t, function (t, r, i) {
                      return !(n = e(t, r, i));
                    }),
                    !!n
                  );
                }
                function ni(t, e, n) {
                  var r = 0,
                    i = null == t ? r : t.length;
                  if ("number" == typeof e && e == e && i <= 2147483647) {
                    for (; r < i; ) {
                      var o = (r + i) >>> 1,
                        a = t[o];
                      null !== a && !ss(a) && (n ? a <= e : a < e)
                        ? (r = o + 1)
                        : (i = o);
                    }
                    return i;
                  }
                  return ri(t, e, nu, n);
                }
                function ri(t, e, n, r) {
                  var o = 0,
                    a = null == t ? 0 : t.length;
                  if (0 === a) return 0;
                  for (
                    var s = (e = n(e)) != e,
                      u = null === e,
                      c = ss(e),
                      l = e === i;
                    o < a;

                  ) {
                    var f = he((o + a) / 2),
                      p = n(t[f]),
                      h = p !== i,
                      d = null === p,
                      g = p == p,
                      y = ss(p);
                    if (s) var v = r || g;
                    else
                      v = l
                        ? g && (r || h)
                        : u
                        ? g && h && (r || !d)
                        : c
                        ? g && h && !d && (r || !y)
                        : !d && !y && (r ? p <= e : p < e);
                    v ? (o = f + 1) : (a = f);
                  }
                  return vn(a, 4294967294);
                }
                function ii(t, e) {
                  for (var n = -1, r = t.length, i = 0, o = []; ++n < r; ) {
                    var a = t[n],
                      s = e ? e(a) : a;
                    if (!n || !Ba(s, u)) {
                      var u = s;
                      o[i++] = 0 === a ? 0 : a;
                    }
                  }
                  return o;
                }
                function oi(t) {
                  return "number" == typeof t ? t : ss(t) ? p : +t;
                }
                function ai(t) {
                  if ("string" == typeof t) return t;
                  if (za(t)) return Pe(t, ai) + "";
                  if (ss(t)) return Mn ? Mn.call(t) : "";
                  var e = t + "";
                  return "0" == e && 1 / t == -1 / 0 ? "-0" : e;
                }
                function si(t, e, n) {
                  var r = -1,
                    i = ke,
                    o = t.length,
                    a = !0,
                    s = [],
                    u = s;
                  if (n) (a = !1), (i = Re);
                  else if (o >= 200) {
                    var c = e ? null : $i(t);
                    if (c) return un(c);
                    (a = !1), (i = Qe), (u = new $n());
                  } else u = e ? [] : s;
                  t: for (; ++r < o; ) {
                    var l = t[r],
                      f = e ? e(l) : l;
                    if (((l = n || 0 !== l ? l : 0), a && f == f)) {
                      for (var p = u.length; p--; ) if (u[p] === f) continue t;
                      e && u.push(f), s.push(l);
                    } else i(u, f, n) || (u !== s && u.push(f), s.push(l));
                  }
                  return s;
                }
                function ui(t, e) {
                  return (
                    null == (t = xo(t, (e = yi(e, t)))) || delete t[Lo(Ko(e))]
                  );
                }
                function ci(t, e, n, r) {
                  return Xr(t, e, n(_r(t, e)), r);
                }
                function li(t, e, n, r) {
                  for (
                    var i = t.length, o = r ? i : -1;
                    (r ? o-- : ++o < i) && e(t[o], o, t);

                  );
                  return n
                    ? ti(t, r ? 0 : o, r ? o + 1 : i)
                    : ti(t, r ? o + 1 : 0, r ? i : o);
                }
                function fi(t, e) {
                  var n = t;
                  return (
                    n instanceof Vn && (n = n.value()),
                    Ce(
                      e,
                      function (t, e) {
                        return e.func.apply(e.thisArg, Ne([t], e.args));
                      },
                      n
                    )
                  );
                }
                function pi(t, e, n) {
                  var i = t.length;
                  if (i < 2) return i ? si(t[0]) : [];
                  for (var o = -1, a = r(i); ++o < i; )
                    for (var s = t[o], u = -1; ++u < i; )
                      u != o && (a[o] = cr(a[o] || s, t[u], e, n));
                  return si(gr(a, 1), e, n);
                }
                function hi(t, e, n) {
                  for (
                    var r = -1, o = t.length, a = e.length, s = {};
                    ++r < o;

                  ) {
                    var u = r < a ? e[r] : i;
                    n(s, t[r], u);
                  }
                  return s;
                }
                function di(t) {
                  return $a(t) ? t : [];
                }
                function gi(t) {
                  return "function" == typeof t ? t : nu;
                }
                function yi(t, e) {
                  return za(t) ? t : mo(t, e) ? [t] : jo(vs(t));
                }
                var vi = Gr;
                function mi(t, e, n) {
                  var r = t.length;
                  return (n = n === i ? r : n), !e && n >= r ? t : ti(t, e, n);
                }
                var bi =
                  ae ||
                  function (t) {
                    return fe.clearTimeout(t);
                  };
                function wi(t, e) {
                  if (e) return t.slice();
                  var n = t.length,
                    r = zt ? zt(n) : new t.constructor(n);
                  return t.copy(r), r;
                }
                function _i(t) {
                  var e = new t.constructor(t.byteLength);
                  return new Vt(e).set(new Vt(t)), e;
                }
                function Ei(t, e) {
                  var n = e ? _i(t.buffer) : t.buffer;
                  return new t.constructor(n, t.byteOffset, t.length);
                }
                function Si(t, e) {
                  if (t !== e) {
                    var n = t !== i,
                      r = null === t,
                      o = t == t,
                      a = ss(t),
                      s = e !== i,
                      u = null === e,
                      c = e == e,
                      l = ss(e);
                    if (
                      (!u && !l && !a && t > e) ||
                      (a && s && c && !u && !l) ||
                      (r && s && c) ||
                      (!n && c) ||
                      !o
                    )
                      return 1;
                    if (
                      (!r && !a && !l && t < e) ||
                      (l && n && o && !r && !a) ||
                      (u && n && o) ||
                      (!s && o) ||
                      !c
                    )
                      return -1;
                  }
                  return 0;
                }
                function Ti(t, e, n, i) {
                  for (
                    var o = -1,
                      a = t.length,
                      s = n.length,
                      u = -1,
                      c = e.length,
                      l = yn(a - s, 0),
                      f = r(c + l),
                      p = !i;
                    ++u < c;

                  )
                    f[u] = e[u];
                  for (; ++o < s; ) (p || o < a) && (f[n[o]] = t[o]);
                  for (; l--; ) f[u++] = t[o++];
                  return f;
                }
                function xi(t, e, n, i) {
                  for (
                    var o = -1,
                      a = t.length,
                      s = -1,
                      u = n.length,
                      c = -1,
                      l = e.length,
                      f = yn(a - u, 0),
                      p = r(f + l),
                      h = !i;
                    ++o < f;

                  )
                    p[o] = t[o];
                  for (var d = o; ++c < l; ) p[d + c] = e[c];
                  for (; ++s < u; ) (h || o < a) && (p[d + n[s]] = t[o++]);
                  return p;
                }
                function Oi(t, e) {
                  var n = -1,
                    i = t.length;
                  for (e || (e = r(i)); ++n < i; ) e[n] = t[n];
                  return e;
                }
                function Ii(t, e, n, r) {
                  var o = !n;
                  n || (n = {});
                  for (var a = -1, s = e.length; ++a < s; ) {
                    var u = e[a],
                      c = r ? r(n[u], t[u], u, n, t) : i;
                    c === i && (c = t[u]), o ? rr(n, u, c) : Zn(n, u, c);
                  }
                  return n;
                }
                function Ai(t, e) {
                  return function (n, r) {
                    var i = za(n) ? Te : er,
                      o = e ? e() : {};
                    return i(n, t, oo(r, 2), o);
                  };
                }
                function ki(t) {
                  return Gr(function (e, n) {
                    var r = -1,
                      o = n.length,
                      a = o > 1 ? n[o - 1] : i,
                      s = o > 2 ? n[2] : i;
                    for (
                      a = t.length > 3 && "function" == typeof a ? (o--, a) : i,
                        s &&
                          vo(n[0], n[1], s) &&
                          ((a = o < 3 ? i : a), (o = 1)),
                        e = Tt(e);
                      ++r < o;

                    ) {
                      var u = n[r];
                      u && t(e, u, r, a);
                    }
                    return e;
                  });
                }
                function Ri(t, e) {
                  return function (n, r) {
                    if (null == n) return n;
                    if (!Ha(n)) return t(n, r);
                    for (
                      var i = n.length, o = e ? i : -1, a = Tt(n);
                      (e ? o-- : ++o < i) && !1 !== r(a[o], o, a);

                    );
                    return n;
                  };
                }
                function Pi(t) {
                  return function (e, n, r) {
                    for (var i = -1, o = Tt(e), a = r(e), s = a.length; s--; ) {
                      var u = a[t ? s : ++i];
                      if (!1 === n(o[u], u, o)) break;
                    }
                    return e;
                  };
                }
                function Ni(t) {
                  return function (e) {
                    var n = rn((e = vs(e))) ? fn(e) : i,
                      r = n ? n[0] : e.charAt(0),
                      o = n ? mi(n, 1).join("") : e.slice(1);
                    return r[t]() + o;
                  };
                }
                function Ci(t) {
                  return function (e) {
                    return Ce(Xs(Vs(e).replace(Xt, "")), t, "");
                  };
                }
                function Di(t) {
                  return function () {
                    var e = arguments;
                    switch (e.length) {
                      case 0:
                        return new t();
                      case 1:
                        return new t(e[0]);
                      case 2:
                        return new t(e[0], e[1]);
                      case 3:
                        return new t(e[0], e[1], e[2]);
                      case 4:
                        return new t(e[0], e[1], e[2], e[3]);
                      case 5:
                        return new t(e[0], e[1], e[2], e[3], e[4]);
                      case 6:
                        return new t(e[0], e[1], e[2], e[3], e[4], e[5]);
                      case 7:
                        return new t(e[0], e[1], e[2], e[3], e[4], e[5], e[6]);
                    }
                    var n = Bn(t.prototype),
                      r = t.apply(n, e);
                    return Za(r) ? r : n;
                  };
                }
                function ji(t) {
                  return function (e, n, r) {
                    var o = Tt(e);
                    if (!Ha(e)) {
                      var a = oo(n, 3);
                      (e = Rs(e)),
                        (n = function (t) {
                          return a(o[t], t, o);
                        });
                    }
                    var s = t(e, n, r);
                    return s > -1 ? o[a ? e[s] : s] : i;
                  };
                }
                function Li(t) {
                  return Zi(function (e) {
                    var n = e.length,
                      r = n,
                      a = qn.prototype.thru;
                    for (t && e.reverse(); r--; ) {
                      var s = e[r];
                      if ("function" != typeof s) throw new It(o);
                      if (a && !u && "wrapper" == ro(s)) var u = new qn([], !0);
                    }
                    for (r = u ? r : n; ++r < n; ) {
                      var c = ro((s = e[r])),
                        l = "wrapper" == c ? no(s) : i;
                      u =
                        l &&
                        bo(l[0]) &&
                        424 == l[1] &&
                        !l[4].length &&
                        1 == l[9]
                          ? u[ro(l[0])].apply(u, l[3])
                          : 1 == s.length && bo(s)
                          ? u[c]()
                          : u.thru(s);
                    }
                    return function () {
                      var t = arguments,
                        r = t[0];
                      if (u && 1 == t.length && za(r))
                        return u.plant(r).value();
                      for (
                        var i = 0, o = n ? e[i].apply(this, t) : r;
                        ++i < n;

                      )
                        o = e[i].call(this, o);
                      return o;
                    };
                  });
                }
                function Mi(t, e, n, o, a, s, u, l, f, p) {
                  var h = e & c,
                    d = 1 & e,
                    g = 2 & e,
                    y = 24 & e,
                    v = 512 & e,
                    m = g ? i : Di(t);
                  return function c() {
                    for (var b = arguments.length, w = r(b), _ = b; _--; )
                      w[_] = arguments[_];
                    if (y)
                      var E = io(c),
                        S = (function (t, e) {
                          for (var n = t.length, r = 0; n--; )
                            t[n] === e && ++r;
                          return r;
                        })(w, E);
                    if (
                      (o && (w = Ti(w, o, a, y)),
                      s && (w = xi(w, s, u, y)),
                      (b -= S),
                      y && b < p)
                    ) {
                      var T = sn(w, E);
                      return Wi(t, e, Mi, c.placeholder, n, w, T, l, f, p - b);
                    }
                    var x = d ? n : this,
                      O = g ? x[t] : t;
                    return (
                      (b = w.length),
                      l
                        ? (w = (function (t, e) {
                            for (
                              var n = t.length, r = vn(e.length, n), o = Oi(t);
                              r--;

                            ) {
                              var a = e[r];
                              t[r] = yo(a, n) ? o[a] : i;
                            }
                            return t;
                          })(w, l))
                        : v && b > 1 && w.reverse(),
                      h && f < b && (w.length = f),
                      this &&
                        this !== fe &&
                        this instanceof c &&
                        (O = m || Di(O)),
                      O.apply(x, w)
                    );
                  };
                }
                function Ui(t, e) {
                  return function (n, r) {
                    return (function (t, e, n, r) {
                      return (
                        mr(t, function (t, i, o) {
                          e(r, n(t), i, o);
                        }),
                        r
                      );
                    })(n, t, e(r), {});
                  };
                }
                function Bi(t, e) {
                  return function (n, r) {
                    var o;
                    if (n === i && r === i) return e;
                    if ((n !== i && (o = n), r !== i)) {
                      if (o === i) return r;
                      "string" == typeof n || "string" == typeof r
                        ? ((n = ai(n)), (r = ai(r)))
                        : ((n = oi(n)), (r = oi(r))),
                        (o = t(n, r));
                    }
                    return o;
                  };
                }
                function Fi(t) {
                  return Zi(function (e) {
                    return (
                      (e = Pe(e, Ke(oo()))),
                      Gr(function (n) {
                        var r = this;
                        return t(e, function (t) {
                          return Se(t, r, n);
                        });
                      })
                    );
                  });
                }
                function qi(t, e) {
                  var n = (e = e === i ? " " : ai(e)).length;
                  if (n < 2) return n ? $r(e, t) : e;
                  var r = $r(e, pe(t / ln(e)));
                  return rn(e) ? mi(fn(r), 0, t).join("") : r.slice(0, t);
                }
                function Vi(t) {
                  return function (e, n, o) {
                    return (
                      o && "number" != typeof o && vo(e, n, o) && (n = o = i),
                      (e = ps(e)),
                      n === i ? ((n = e), (e = 0)) : (n = ps(n)),
                      (function (t, e, n, i) {
                        for (
                          var o = -1,
                            a = yn(pe((e - t) / (n || 1)), 0),
                            s = r(a);
                          a--;

                        )
                          (s[i ? a : ++o] = t), (t += n);
                        return s;
                      })(e, n, (o = o === i ? (e < n ? 1 : -1) : ps(o)), t)
                    );
                  };
                }
                function zi(t) {
                  return function (e, n) {
                    return (
                      ("string" == typeof e && "string" == typeof n) ||
                        ((e = gs(e)), (n = gs(n))),
                      t(e, n)
                    );
                  };
                }
                function Wi(t, e, n, r, o, a, s, c, l, f) {
                  var p = 8 & e;
                  (e |= p ? u : 64), 4 & (e &= ~(p ? 64 : u)) || (e &= -4);
                  var h = [
                      t,
                      e,
                      o,
                      p ? a : i,
                      p ? s : i,
                      p ? i : a,
                      p ? i : s,
                      c,
                      l,
                      f,
                    ],
                    d = n.apply(i, h);
                  return bo(t) && Io(d, h), (d.placeholder = r), Ro(d, t, e);
                }
                function Hi(t) {
                  var e = St[t];
                  return function (t, n) {
                    if (
                      ((t = gs(t)),
                      (n = null == n ? 0 : vn(hs(n), 292)) && Le(t))
                    ) {
                      var r = (vs(t) + "e").split("e");
                      return +(
                        (r = (vs(e(r[0] + "e" + (+r[1] + n))) + "e").split(
                          "e"
                        ))[0] +
                        "e" +
                        (+r[1] - n)
                      );
                    }
                    return e(t);
                  };
                }
                var $i =
                  xn && 1 / un(new xn([, -0]))[1] == l
                    ? function (t) {
                        return new xn(t);
                      }
                    : su;
                function Gi(t) {
                  return function (e) {
                    var n = fo(e);
                    return n == E
                      ? on(e)
                      : n == I
                      ? cn(e)
                      : (function (t, e) {
                          return Pe(e, function (e) {
                            return [e, t[e]];
                          });
                        })(e, t(e));
                  };
                }
                function Yi(t, e, n, a, l, f, p, h) {
                  var d = 2 & e;
                  if (!d && "function" != typeof t) throw new It(o);
                  var g = a ? a.length : 0;
                  if (
                    (g || ((e &= -97), (a = l = i)),
                    (p = p === i ? p : yn(hs(p), 0)),
                    (h = h === i ? h : hs(h)),
                    (g -= l ? l.length : 0),
                    64 & e)
                  ) {
                    var y = a,
                      v = l;
                    a = l = i;
                  }
                  var m = d ? i : no(t),
                    b = [t, e, n, a, l, y, v, f, p, h];
                  if (
                    (m &&
                      (function (t, e) {
                        var n = t[1],
                          r = e[1],
                          i = n | r,
                          o = i < 131,
                          a =
                            (r == c && 8 == n) ||
                            (r == c && 256 == n && t[7].length <= e[8]) ||
                            (384 == r && e[7].length <= e[8] && 8 == n);
                        if (!o && !a) return t;
                        1 & r && ((t[2] = e[2]), (i |= 1 & n ? 0 : 4));
                        var u = e[3];
                        if (u) {
                          var l = t[3];
                          (t[3] = l ? Ti(l, u, e[4]) : u),
                            (t[4] = l ? sn(t[3], s) : e[4]);
                        }
                        (u = e[5]) &&
                          ((l = t[5]),
                          (t[5] = l ? xi(l, u, e[6]) : u),
                          (t[6] = l ? sn(t[5], s) : e[6])),
                          (u = e[7]) && (t[7] = u),
                          r & c &&
                            (t[8] = null == t[8] ? e[8] : vn(t[8], e[8])),
                          null == t[9] && (t[9] = e[9]),
                          (t[0] = e[0]),
                          (t[1] = i);
                      })(b, m),
                    (t = b[0]),
                    (e = b[1]),
                    (n = b[2]),
                    (a = b[3]),
                    (l = b[4]),
                    !(h = b[9] =
                      b[9] === i ? (d ? 0 : t.length) : yn(b[9] - g, 0)) &&
                      24 & e &&
                      (e &= -25),
                    e && 1 != e)
                  )
                    w =
                      8 == e || 16 == e
                        ? (function (t, e, n) {
                            var o = Di(t);
                            return function a() {
                              for (
                                var s = arguments.length,
                                  u = r(s),
                                  c = s,
                                  l = io(a);
                                c--;

                              )
                                u[c] = arguments[c];
                              var f =
                                s < 3 && u[0] !== l && u[s - 1] !== l
                                  ? []
                                  : sn(u, l);
                              return (s -= f.length) < n
                                ? Wi(
                                    t,
                                    e,
                                    Mi,
                                    a.placeholder,
                                    i,
                                    u,
                                    f,
                                    i,
                                    i,
                                    n - s
                                  )
                                : Se(
                                    this && this !== fe && this instanceof a
                                      ? o
                                      : t,
                                    this,
                                    u
                                  );
                            };
                          })(t, e, h)
                        : (e != u && 33 != e) || l.length
                        ? Mi.apply(i, b)
                        : (function (t, e, n, i) {
                            var o = 1 & e,
                              a = Di(t);
                            return function e() {
                              for (
                                var s = -1,
                                  u = arguments.length,
                                  c = -1,
                                  l = i.length,
                                  f = r(l + u),
                                  p =
                                    this && this !== fe && this instanceof e
                                      ? a
                                      : t;
                                ++c < l;

                              )
                                f[c] = i[c];
                              for (; u--; ) f[c++] = arguments[++s];
                              return Se(p, o ? n : this, f);
                            };
                          })(t, e, n, a);
                  else
                    var w = (function (t, e, n) {
                      var r = 1 & e,
                        i = Di(t);
                      return function e() {
                        return (
                          this && this !== fe && this instanceof e ? i : t
                        ).apply(r ? n : this, arguments);
                      };
                    })(t, e, n);
                  return Ro((m ? Qr : Io)(w, b), t, e);
                }
                function Ki(t, e, n, r) {
                  return t === i || (Ba(t, Rt[n]) && !Ct.call(r, n)) ? e : t;
                }
                function Xi(t, e, n, r, o, a) {
                  return (
                    Za(t) &&
                      Za(e) &&
                      (a.set(e, t), Br(t, e, i, Xi, a), a.delete(e)),
                    t
                  );
                }
                function Qi(t) {
                  return rs(t) ? i : t;
                }
                function Ji(t, e, n, r, o, a) {
                  var s = 1 & n,
                    u = t.length,
                    c = e.length;
                  if (u != c && !(s && c > u)) return !1;
                  var l = a.get(t),
                    f = a.get(e);
                  if (l && f) return l == e && f == t;
                  var p = -1,
                    h = !0,
                    d = 2 & n ? new $n() : i;
                  for (a.set(t, e), a.set(e, t); ++p < u; ) {
                    var g = t[p],
                      y = e[p];
                    if (r)
                      var v = s ? r(y, g, p, e, t, a) : r(g, y, p, t, e, a);
                    if (v !== i) {
                      if (v) continue;
                      h = !1;
                      break;
                    }
                    if (d) {
                      if (
                        !je(e, function (t, e) {
                          if (!Qe(d, e) && (g === t || o(g, t, n, r, a)))
                            return d.push(e);
                        })
                      ) {
                        h = !1;
                        break;
                      }
                    } else if (g !== y && !o(g, y, n, r, a)) {
                      h = !1;
                      break;
                    }
                  }
                  return a.delete(t), a.delete(e), h;
                }
                function Zi(t) {
                  return ko(To(t, i, Wo), t + "");
                }
                function to(t) {
                  return Er(t, Rs, co);
                }
                function eo(t) {
                  return Er(t, Ps, lo);
                }
                var no = An
                  ? function (t) {
                      return An.get(t);
                    }
                  : su;
                function ro(t) {
                  for (
                    var e = t.name + "",
                      n = kn[e],
                      r = Ct.call(kn, e) ? n.length : 0;
                    r--;

                  ) {
                    var i = n[r],
                      o = i.func;
                    if (null == o || o == t) return i.name;
                  }
                  return e;
                }
                function io(t) {
                  return (Ct.call(Un, "placeholder") ? Un : t).placeholder;
                }
                function oo() {
                  var t = Un.iteratee || ru;
                  return (
                    (t = t === ru ? Cr : t),
                    arguments.length ? t(arguments[0], arguments[1]) : t
                  );
                }
                function ao(t, e) {
                  var n,
                    r,
                    i = t.__data__;
                  return (
                    "string" == (r = typeof (n = e)) ||
                    "number" == r ||
                    "symbol" == r ||
                    "boolean" == r
                      ? "__proto__" !== n
                      : null === n
                  )
                    ? i["string" == typeof e ? "string" : "hash"]
                    : i.map;
                }
                function so(t) {
                  for (var e = Rs(t), n = e.length; n--; ) {
                    var r = e[n],
                      i = t[r];
                    e[n] = [r, i, Eo(i)];
                  }
                  return e;
                }
                function uo(t, e) {
                  var n = (function (t, e) {
                    return null == t ? i : t[e];
                  })(t, e);
                  return Nr(n) ? n : i;
                }
                var co = ge
                    ? function (t) {
                        return null == t
                          ? []
                          : ((t = Tt(t)),
                            Ae(ge(t), function (e) {
                              return $t.call(t, e);
                            }));
                      }
                    : du,
                  lo = ge
                    ? function (t) {
                        for (var e = []; t; ) Ne(e, co(t)), (t = Wt(t));
                        return e;
                      }
                    : du,
                  fo = Sr;
                function po(t, e, n) {
                  for (
                    var r = -1, i = (e = yi(e, t)).length, o = !1;
                    ++r < i;

                  ) {
                    var a = Lo(e[r]);
                    if (!(o = null != t && n(t, a))) break;
                    t = t[a];
                  }
                  return o || ++r != i
                    ? o
                    : !!(i = null == t ? 0 : t.length) &&
                        Ja(i) &&
                        yo(a, i) &&
                        (za(t) || Va(t));
                }
                function ho(t) {
                  return "function" != typeof t.constructor || _o(t)
                    ? {}
                    : Bn(Wt(t));
                }
                function go(t) {
                  return za(t) || Va(t) || !!(Yt && t && t[Yt]);
                }
                function yo(t, e) {
                  var n = typeof t;
                  return (
                    !!(e = null == e ? f : e) &&
                    ("number" == n || ("symbol" != n && vt.test(t))) &&
                    t > -1 &&
                    t % 1 == 0 &&
                    t < e
                  );
                }
                function vo(t, e, n) {
                  if (!Za(n)) return !1;
                  var r = typeof e;
                  return (
                    !!("number" == r
                      ? Ha(n) && yo(e, n.length)
                      : "string" == r && e in n) && Ba(n[e], t)
                  );
                }
                function mo(t, e) {
                  if (za(t)) return !1;
                  var n = typeof t;
                  return (
                    !(
                      "number" != n &&
                      "symbol" != n &&
                      "boolean" != n &&
                      null != t &&
                      !ss(t)
                    ) ||
                    Z.test(t) ||
                    !J.test(t) ||
                    (null != e && t in Tt(e))
                  );
                }
                function bo(t) {
                  var e = ro(t),
                    n = Un[e];
                  if ("function" != typeof n || !(e in Vn.prototype)) return !1;
                  if (t === n) return !0;
                  var r = no(n);
                  return !!r && t === r[0];
                }
                ((En && fo(new En(new ArrayBuffer(1))) != N) ||
                  (Sn && fo(new Sn()) != E) ||
                  (Tn && fo(Tn.resolve()) != x) ||
                  (xn && fo(new xn()) != I) ||
                  (On && fo(new On()) != R)) &&
                  (fo = function (t) {
                    var e = Sr(t),
                      n = e == T ? t.constructor : i,
                      r = n ? Mo(n) : "";
                    if (r)
                      switch (r) {
                        case Rn:
                          return N;
                        case Pn:
                          return E;
                        case Nn:
                          return x;
                        case Cn:
                          return I;
                        case Dn:
                          return R;
                      }
                    return e;
                  });
                var wo = Pt ? Xa : gu;
                function _o(t) {
                  var e = t && t.constructor;
                  return t === (("function" == typeof e && e.prototype) || Rt);
                }
                function Eo(t) {
                  return t == t && !Za(t);
                }
                function So(t, e) {
                  return function (n) {
                    return null != n && n[t] === e && (e !== i || t in Tt(n));
                  };
                }
                function To(t, e, n) {
                  return (
                    (e = yn(e === i ? t.length - 1 : e, 0)),
                    function () {
                      for (
                        var i = arguments,
                          o = -1,
                          a = yn(i.length - e, 0),
                          s = r(a);
                        ++o < a;

                      )
                        s[o] = i[e + o];
                      o = -1;
                      for (var u = r(e + 1); ++o < e; ) u[o] = i[o];
                      return (u[e] = n(s)), Se(t, this, u);
                    }
                  );
                }
                function xo(t, e) {
                  return e.length < 2 ? t : _r(t, ti(e, 0, -1));
                }
                function Oo(t, e) {
                  if (
                    ("constructor" !== e || "function" != typeof t[e]) &&
                    "__proto__" != e
                  )
                    return t[e];
                }
                var Io = Po(Qr),
                  Ao =
                    le ||
                    function (t, e) {
                      return fe.setTimeout(t, e);
                    },
                  ko = Po(Jr);
                function Ro(t, e, n) {
                  var r = e + "";
                  return ko(
                    t,
                    (function (t, e) {
                      var n = e.length;
                      if (!n) return t;
                      var r = n - 1;
                      return (
                        (e[r] = (n > 1 ? "& " : "") + e[r]),
                        (e = e.join(n > 2 ? ", " : " ")),
                        t.replace(ot, "{\n/* [wrapped with " + e + "] */\n")
                      );
                    })(
                      r,
                      (function (t, e) {
                        return (
                          xe(d, function (n) {
                            var r = "_." + n[0];
                            e & n[1] && !ke(t, r) && t.push(r);
                          }),
                          t.sort()
                        );
                      })(
                        (function (t) {
                          var e = t.match(at);
                          return e ? e[1].split(st) : [];
                        })(r),
                        n
                      )
                    )
                  );
                }
                function Po(t) {
                  var e = 0,
                    n = 0;
                  return function () {
                    var r = mn(),
                      o = 16 - (r - n);
                    if (((n = r), o > 0)) {
                      if (++e >= 800) return arguments[0];
                    } else e = 0;
                    return t.apply(i, arguments);
                  };
                }
                function No(t, e) {
                  var n = -1,
                    r = t.length,
                    o = r - 1;
                  for (e = e === i ? r : e; ++n < e; ) {
                    var a = Hr(n, o),
                      s = t[a];
                    (t[a] = t[n]), (t[n] = s);
                  }
                  return (t.length = e), t;
                }
                var Co,
                  Do,
                  jo =
                    ((Co = Ca(
                      function (t) {
                        var e = [];
                        return (
                          46 === t.charCodeAt(0) && e.push(""),
                          t.replace(tt, function (t, n, r, i) {
                            e.push(r ? i.replace(lt, "$1") : n || t);
                          }),
                          e
                        );
                      },
                      function (t) {
                        return 500 === Do.size && Do.clear(), t;
                      }
                    )),
                    (Do = Co.cache),
                    Co);
                function Lo(t) {
                  if ("string" == typeof t || ss(t)) return t;
                  var e = t + "";
                  return "0" == e && 1 / t == -1 / 0 ? "-0" : e;
                }
                function Mo(t) {
                  if (null != t) {
                    try {
                      return Nt.call(t);
                    } catch (t) {}
                    try {
                      return t + "";
                    } catch (t) {}
                  }
                  return "";
                }
                function Uo(t) {
                  if (t instanceof Vn) return t.clone();
                  var e = new qn(t.__wrapped__, t.__chain__);
                  return (
                    (e.__actions__ = Oi(t.__actions__)),
                    (e.__index__ = t.__index__),
                    (e.__values__ = t.__values__),
                    e
                  );
                }
                var Bo = Gr(function (t, e) {
                    return $a(t) ? cr(t, gr(e, 1, $a, !0)) : [];
                  }),
                  Fo = Gr(function (t, e) {
                    var n = Ko(e);
                    return (
                      $a(n) && (n = i),
                      $a(t) ? cr(t, gr(e, 1, $a, !0), oo(n, 2)) : []
                    );
                  }),
                  qo = Gr(function (t, e) {
                    var n = Ko(e);
                    return (
                      $a(n) && (n = i),
                      $a(t) ? cr(t, gr(e, 1, $a, !0), i, n) : []
                    );
                  });
                function Vo(t, e, n) {
                  var r = null == t ? 0 : t.length;
                  if (!r) return -1;
                  var i = null == n ? 0 : hs(n);
                  return i < 0 && (i = yn(r + i, 0)), Ue(t, oo(e, 3), i);
                }
                function zo(t, e, n) {
                  var r = null == t ? 0 : t.length;
                  if (!r) return -1;
                  var o = r - 1;
                  return (
                    n !== i &&
                      ((o = hs(n)), (o = n < 0 ? yn(r + o, 0) : vn(o, r - 1))),
                    Ue(t, oo(e, 3), o, !0)
                  );
                }
                function Wo(t) {
                  return null != t && t.length ? gr(t, 1) : [];
                }
                function Ho(t) {
                  return t && t.length ? t[0] : i;
                }
                var $o = Gr(function (t) {
                    var e = Pe(t, di);
                    return e.length && e[0] === t[0] ? Ir(e) : [];
                  }),
                  Go = Gr(function (t) {
                    var e = Ko(t),
                      n = Pe(t, di);
                    return (
                      e === Ko(n) ? (e = i) : n.pop(),
                      n.length && n[0] === t[0] ? Ir(n, oo(e, 2)) : []
                    );
                  }),
                  Yo = Gr(function (t) {
                    var e = Ko(t),
                      n = Pe(t, di);
                    return (
                      (e = "function" == typeof e ? e : i) && n.pop(),
                      n.length && n[0] === t[0] ? Ir(n, i, e) : []
                    );
                  });
                function Ko(t) {
                  var e = null == t ? 0 : t.length;
                  return e ? t[e - 1] : i;
                }
                var Xo = Gr(Qo);
                function Qo(t, e) {
                  return t && t.length && e && e.length ? zr(t, e) : t;
                }
                var Jo = Zi(function (t, e) {
                  var n = null == t ? 0 : t.length,
                    r = ir(t, e);
                  return (
                    Wr(
                      t,
                      Pe(e, function (t) {
                        return yo(t, n) ? +t : t;
                      }).sort(Si)
                    ),
                    r
                  );
                });
                function Zo(t) {
                  return null == t ? t : _n.call(t);
                }
                var ta = Gr(function (t) {
                    return si(gr(t, 1, $a, !0));
                  }),
                  ea = Gr(function (t) {
                    var e = Ko(t);
                    return $a(e) && (e = i), si(gr(t, 1, $a, !0), oo(e, 2));
                  }),
                  na = Gr(function (t) {
                    var e = Ko(t);
                    return (
                      (e = "function" == typeof e ? e : i),
                      si(gr(t, 1, $a, !0), i, e)
                    );
                  });
                function ra(t) {
                  if (!t || !t.length) return [];
                  var e = 0;
                  return (
                    (t = Ae(t, function (t) {
                      if ($a(t)) return (e = yn(t.length, e)), !0;
                    })),
                    Ge(e, function (e) {
                      return Pe(t, ze(e));
                    })
                  );
                }
                function ia(t, e) {
                  if (!t || !t.length) return [];
                  var n = ra(t);
                  return null == e
                    ? n
                    : Pe(n, function (t) {
                        return Se(e, i, t);
                      });
                }
                var oa = Gr(function (t, e) {
                    return $a(t) ? cr(t, e) : [];
                  }),
                  aa = Gr(function (t) {
                    return pi(Ae(t, $a));
                  }),
                  sa = Gr(function (t) {
                    var e = Ko(t);
                    return $a(e) && (e = i), pi(Ae(t, $a), oo(e, 2));
                  }),
                  ua = Gr(function (t) {
                    var e = Ko(t);
                    return (
                      (e = "function" == typeof e ? e : i), pi(Ae(t, $a), i, e)
                    );
                  }),
                  ca = Gr(ra),
                  la = Gr(function (t) {
                    var e = t.length,
                      n = e > 1 ? t[e - 1] : i;
                    return (
                      (n = "function" == typeof n ? (t.pop(), n) : i), ia(t, n)
                    );
                  });
                function fa(t) {
                  var e = Un(t);
                  return (e.__chain__ = !0), e;
                }
                function pa(t, e) {
                  return e(t);
                }
                var ha = Zi(function (t) {
                    var e = t.length,
                      n = e ? t[0] : 0,
                      r = this.__wrapped__,
                      o = function (e) {
                        return ir(e, t);
                      };
                    return !(e > 1 || this.__actions__.length) &&
                      r instanceof Vn &&
                      yo(n)
                      ? ((r = r.slice(n, +n + (e ? 1 : 0))).__actions__.push({
                          func: pa,
                          args: [o],
                          thisArg: i,
                        }),
                        new qn(r, this.__chain__).thru(function (t) {
                          return e && !t.length && t.push(i), t;
                        }))
                      : this.thru(o);
                  }),
                  da = Ai(function (t, e, n) {
                    Ct.call(t, n) ? ++t[n] : rr(t, n, 1);
                  }),
                  ga = ji(Vo),
                  ya = ji(zo);
                function va(t, e) {
                  return (za(t) ? xe : lr)(t, oo(e, 3));
                }
                function ma(t, e) {
                  return (za(t) ? Oe : fr)(t, oo(e, 3));
                }
                var ba = Ai(function (t, e, n) {
                    Ct.call(t, n) ? t[n].push(e) : rr(t, n, [e]);
                  }),
                  wa = Gr(function (t, e, n) {
                    var i = -1,
                      o = "function" == typeof e,
                      a = Ha(t) ? r(t.length) : [];
                    return (
                      lr(t, function (t) {
                        a[++i] = o ? Se(e, t, n) : Ar(t, e, n);
                      }),
                      a
                    );
                  }),
                  _a = Ai(function (t, e, n) {
                    rr(t, n, e);
                  });
                function Ea(t, e) {
                  return (za(t) ? Pe : Lr)(t, oo(e, 3));
                }
                var Sa = Ai(
                    function (t, e, n) {
                      t[n ? 0 : 1].push(e);
                    },
                    function () {
                      return [[], []];
                    }
                  ),
                  Ta = Gr(function (t, e) {
                    if (null == t) return [];
                    var n = e.length;
                    return (
                      n > 1 && vo(t, e[0], e[1])
                        ? (e = [])
                        : n > 2 && vo(e[0], e[1], e[2]) && (e = [e[0]]),
                      qr(t, gr(e, 1), [])
                    );
                  }),
                  xa =
                    ce ||
                    function () {
                      return fe.Date.now();
                    };
                function Oa(t, e, n) {
                  return (
                    (e = n ? i : e),
                    (e = t && null == e ? t.length : e),
                    Yi(t, c, i, i, i, i, e)
                  );
                }
                function Ia(t, e) {
                  var n;
                  if ("function" != typeof e) throw new It(o);
                  return (
                    (t = hs(t)),
                    function () {
                      return (
                        --t > 0 && (n = e.apply(this, arguments)),
                        t <= 1 && (e = i),
                        n
                      );
                    }
                  );
                }
                var Aa = Gr(function (t, e, n) {
                    var r = 1;
                    if (n.length) {
                      var i = sn(n, io(Aa));
                      r |= u;
                    }
                    return Yi(t, r, e, n, i);
                  }),
                  ka = Gr(function (t, e, n) {
                    var r = 3;
                    if (n.length) {
                      var i = sn(n, io(ka));
                      r |= u;
                    }
                    return Yi(e, r, t, n, i);
                  });
                function Ra(t, e, n) {
                  var r,
                    a,
                    s,
                    u,
                    c,
                    l,
                    f = 0,
                    p = !1,
                    h = !1,
                    d = !0;
                  if ("function" != typeof t) throw new It(o);
                  function g(e) {
                    var n = r,
                      o = a;
                    return (r = a = i), (f = e), (u = t.apply(o, n));
                  }
                  function y(t) {
                    var n = t - l;
                    return l === i || n >= e || n < 0 || (h && t - f >= s);
                  }
                  function v() {
                    var t = xa();
                    if (y(t)) return m(t);
                    c = Ao(
                      v,
                      (function (t) {
                        var n = e - (t - l);
                        return h ? vn(n, s - (t - f)) : n;
                      })(t)
                    );
                  }
                  function m(t) {
                    return (c = i), d && r ? g(t) : ((r = a = i), u);
                  }
                  function b() {
                    var t = xa(),
                      n = y(t);
                    if (((r = arguments), (a = this), (l = t), n)) {
                      if (c === i)
                        return (function (t) {
                          return (f = t), (c = Ao(v, e)), p ? g(t) : u;
                        })(l);
                      if (h) return bi(c), (c = Ao(v, e)), g(l);
                    }
                    return c === i && (c = Ao(v, e)), u;
                  }
                  return (
                    (e = gs(e) || 0),
                    Za(n) &&
                      ((p = !!n.leading),
                      (s = (h = "maxWait" in n)
                        ? yn(gs(n.maxWait) || 0, e)
                        : s),
                      (d = "trailing" in n ? !!n.trailing : d)),
                    (b.cancel = function () {
                      c !== i && bi(c), (f = 0), (r = l = a = c = i);
                    }),
                    (b.flush = function () {
                      return c === i ? u : m(xa());
                    }),
                    b
                  );
                }
                var Pa = Gr(function (t, e) {
                    return ur(t, 1, e);
                  }),
                  Na = Gr(function (t, e, n) {
                    return ur(t, gs(e) || 0, n);
                  });
                function Ca(t, e) {
                  if (
                    "function" != typeof t ||
                    (null != e && "function" != typeof e)
                  )
                    throw new It(o);
                  var n = function () {
                    var r = arguments,
                      i = e ? e.apply(this, r) : r[0],
                      o = n.cache;
                    if (o.has(i)) return o.get(i);
                    var a = t.apply(this, r);
                    return (n.cache = o.set(i, a) || o), a;
                  };
                  return (n.cache = new (Ca.Cache || Hn)()), n;
                }
                function Da(t) {
                  if ("function" != typeof t) throw new It(o);
                  return function () {
                    var e = arguments;
                    switch (e.length) {
                      case 0:
                        return !t.call(this);
                      case 1:
                        return !t.call(this, e[0]);
                      case 2:
                        return !t.call(this, e[0], e[1]);
                      case 3:
                        return !t.call(this, e[0], e[1], e[2]);
                    }
                    return !t.apply(this, e);
                  };
                }
                Ca.Cache = Hn;
                var ja = vi(function (t, e) {
                    var n = (e =
                      1 == e.length && za(e[0])
                        ? Pe(e[0], Ke(oo()))
                        : Pe(gr(e, 1), Ke(oo()))).length;
                    return Gr(function (r) {
                      for (var i = -1, o = vn(r.length, n); ++i < o; )
                        r[i] = e[i].call(this, r[i]);
                      return Se(t, this, r);
                    });
                  }),
                  La = Gr(function (t, e) {
                    var n = sn(e, io(La));
                    return Yi(t, u, i, e, n);
                  }),
                  Ma = Gr(function (t, e) {
                    var n = sn(e, io(Ma));
                    return Yi(t, 64, i, e, n);
                  }),
                  Ua = Zi(function (t, e) {
                    return Yi(t, 256, i, i, i, e);
                  });
                function Ba(t, e) {
                  return t === e || (t != t && e != e);
                }
                var Fa = zi(Tr),
                  qa = zi(function (t, e) {
                    return t >= e;
                  }),
                  Va = kr(
                    (function () {
                      return arguments;
                    })()
                  )
                    ? kr
                    : function (t) {
                        return (
                          ts(t) && Ct.call(t, "callee") && !$t.call(t, "callee")
                        );
                      },
                  za = r.isArray,
                  Wa = ve
                    ? Ke(ve)
                    : function (t) {
                        return ts(t) && Sr(t) == P;
                      };
                function Ha(t) {
                  return null != t && Ja(t.length) && !Xa(t);
                }
                function $a(t) {
                  return ts(t) && Ha(t);
                }
                var Ga = ye || gu,
                  Ya = me
                    ? Ke(me)
                    : function (t) {
                        return ts(t) && Sr(t) == m;
                      };
                function Ka(t) {
                  if (!ts(t)) return !1;
                  var e = Sr(t);
                  return (
                    e == b ||
                    "[object DOMException]" == e ||
                    ("string" == typeof t.message &&
                      "string" == typeof t.name &&
                      !rs(t))
                  );
                }
                function Xa(t) {
                  if (!Za(t)) return !1;
                  var e = Sr(t);
                  return (
                    e == w ||
                    e == _ ||
                    "[object AsyncFunction]" == e ||
                    "[object Proxy]" == e
                  );
                }
                function Qa(t) {
                  return "number" == typeof t && t == hs(t);
                }
                function Ja(t) {
                  return "number" == typeof t && t > -1 && t % 1 == 0 && t <= f;
                }
                function Za(t) {
                  var e = typeof t;
                  return null != t && ("object" == e || "function" == e);
                }
                function ts(t) {
                  return null != t && "object" == typeof t;
                }
                var es = be
                  ? Ke(be)
                  : function (t) {
                      return ts(t) && fo(t) == E;
                    };
                function ns(t) {
                  return "number" == typeof t || (ts(t) && Sr(t) == S);
                }
                function rs(t) {
                  if (!ts(t) || Sr(t) != T) return !1;
                  var e = Wt(t);
                  if (null === e) return !0;
                  var n = Ct.call(e, "constructor") && e.constructor;
                  return (
                    "function" == typeof n && n instanceof n && Nt.call(n) == Mt
                  );
                }
                var is = we
                    ? Ke(we)
                    : function (t) {
                        return ts(t) && Sr(t) == O;
                      },
                  os = _e
                    ? Ke(_e)
                    : function (t) {
                        return ts(t) && fo(t) == I;
                      };
                function as(t) {
                  return (
                    "string" == typeof t || (!za(t) && ts(t) && Sr(t) == A)
                  );
                }
                function ss(t) {
                  return "symbol" == typeof t || (ts(t) && Sr(t) == k);
                }
                var us = Ee
                    ? Ke(Ee)
                    : function (t) {
                        return ts(t) && Ja(t.length) && !!ie[Sr(t)];
                      },
                  cs = zi(jr),
                  ls = zi(function (t, e) {
                    return t <= e;
                  });
                function fs(t) {
                  if (!t) return [];
                  if (Ha(t)) return as(t) ? fn(t) : Oi(t);
                  if (Kt && t[Kt])
                    return (function (t) {
                      for (var e, n = []; !(e = t.next()).done; )
                        n.push(e.value);
                      return n;
                    })(t[Kt]());
                  var e = fo(t);
                  return (e == E ? on : e == I ? un : Bs)(t);
                }
                function ps(t) {
                  return t
                    ? (t = gs(t)) === l || t === -1 / 0
                      ? 17976931348623157e292 * (t < 0 ? -1 : 1)
                      : t == t
                      ? t
                      : 0
                    : 0 === t
                    ? t
                    : 0;
                }
                function hs(t) {
                  var e = ps(t),
                    n = e % 1;
                  return e == e ? (n ? e - n : e) : 0;
                }
                function ds(t) {
                  return t ? or(hs(t), 0, h) : 0;
                }
                function gs(t) {
                  if ("number" == typeof t) return t;
                  if (ss(t)) return p;
                  if (Za(t)) {
                    var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                    t = Za(e) ? e + "" : e;
                  }
                  if ("string" != typeof t) return 0 === t ? t : +t;
                  t = Ye(t);
                  var n = dt.test(t);
                  return n || yt.test(t)
                    ? ue(t.slice(2), n ? 2 : 8)
                    : ht.test(t)
                    ? p
                    : +t;
                }
                function ys(t) {
                  return Ii(t, Ps(t));
                }
                function vs(t) {
                  return null == t ? "" : ai(t);
                }
                var ms = ki(function (t, e) {
                    if (_o(e) || Ha(e)) Ii(e, Rs(e), t);
                    else for (var n in e) Ct.call(e, n) && Zn(t, n, e[n]);
                  }),
                  bs = ki(function (t, e) {
                    Ii(e, Ps(e), t);
                  }),
                  ws = ki(function (t, e, n, r) {
                    Ii(e, Ps(e), t, r);
                  }),
                  _s = ki(function (t, e, n, r) {
                    Ii(e, Rs(e), t, r);
                  }),
                  Es = Zi(ir),
                  Ss = Gr(function (t, e) {
                    t = Tt(t);
                    var n = -1,
                      r = e.length,
                      o = r > 2 ? e[2] : i;
                    for (o && vo(e[0], e[1], o) && (r = 1); ++n < r; )
                      for (
                        var a = e[n], s = Ps(a), u = -1, c = s.length;
                        ++u < c;

                      ) {
                        var l = s[u],
                          f = t[l];
                        (f === i || (Ba(f, Rt[l]) && !Ct.call(t, l))) &&
                          (t[l] = a[l]);
                      }
                    return t;
                  }),
                  Ts = Gr(function (t) {
                    return t.push(i, Xi), Se(Cs, i, t);
                  });
                function xs(t, e, n) {
                  var r = null == t ? i : _r(t, e);
                  return r === i ? n : r;
                }
                function Os(t, e) {
                  return null != t && po(t, e, Or);
                }
                var Is = Ui(function (t, e, n) {
                    null != e &&
                      "function" != typeof e.toString &&
                      (e = Lt.call(e)),
                      (t[e] = n);
                  }, Zs(nu)),
                  As = Ui(function (t, e, n) {
                    null != e &&
                      "function" != typeof e.toString &&
                      (e = Lt.call(e)),
                      Ct.call(t, e) ? t[e].push(n) : (t[e] = [n]);
                  }, oo),
                  ks = Gr(Ar);
                function Rs(t) {
                  return Ha(t) ? Yn(t) : Dr(t);
                }
                function Ps(t) {
                  return Ha(t)
                    ? Yn(t, !0)
                    : (function (t) {
                        if (!Za(t))
                          return (function (t) {
                            var e = [];
                            if (null != t) for (var n in Tt(t)) e.push(n);
                            return e;
                          })(t);
                        var e = _o(t),
                          n = [];
                        for (var r in t)
                          ("constructor" != r || (!e && Ct.call(t, r))) &&
                            n.push(r);
                        return n;
                      })(t);
                }
                var Ns = ki(function (t, e, n) {
                    Br(t, e, n);
                  }),
                  Cs = ki(function (t, e, n, r) {
                    Br(t, e, n, r);
                  }),
                  Ds = Zi(function (t, e) {
                    var n = {};
                    if (null == t) return n;
                    var r = !1;
                    (e = Pe(e, function (e) {
                      return (e = yi(e, t)), r || (r = e.length > 1), e;
                    })),
                      Ii(t, eo(t), n),
                      r && (n = ar(n, 7, Qi));
                    for (var i = e.length; i--; ) ui(n, e[i]);
                    return n;
                  }),
                  js = Zi(function (t, e) {
                    return null == t
                      ? {}
                      : (function (t, e) {
                          return Vr(t, e, function (e, n) {
                            return Os(t, n);
                          });
                        })(t, e);
                  });
                function Ls(t, e) {
                  if (null == t) return {};
                  var n = Pe(eo(t), function (t) {
                    return [t];
                  });
                  return (
                    (e = oo(e)),
                    Vr(t, n, function (t, n) {
                      return e(t, n[0]);
                    })
                  );
                }
                var Ms = Gi(Rs),
                  Us = Gi(Ps);
                function Bs(t) {
                  return null == t ? [] : Xe(t, Rs(t));
                }
                var Fs = Ci(function (t, e, n) {
                  return (e = e.toLowerCase()), t + (n ? qs(e) : e);
                });
                function qs(t) {
                  return Ks(vs(t).toLowerCase());
                }
                function Vs(t) {
                  return (t = vs(t)) && t.replace(mt, tn).replace(Qt, "");
                }
                var zs = Ci(function (t, e, n) {
                    return t + (n ? "-" : "") + e.toLowerCase();
                  }),
                  Ws = Ci(function (t, e, n) {
                    return t + (n ? " " : "") + e.toLowerCase();
                  }),
                  Hs = Ni("toLowerCase"),
                  $s = Ci(function (t, e, n) {
                    return t + (n ? "_" : "") + e.toLowerCase();
                  }),
                  Gs = Ci(function (t, e, n) {
                    return t + (n ? " " : "") + Ks(e);
                  }),
                  Ys = Ci(function (t, e, n) {
                    return t + (n ? " " : "") + e.toUpperCase();
                  }),
                  Ks = Ni("toUpperCase");
                function Xs(t, e, n) {
                  return (
                    (t = vs(t)),
                    (e = n ? i : e) === i
                      ? (function (t) {
                          return ee.test(t);
                        })(t)
                        ? (function (t) {
                            return t.match(Zt) || [];
                          })(t)
                        : (function (t) {
                            return t.match(ut) || [];
                          })(t)
                      : t.match(e) || []
                  );
                }
                var Qs = Gr(function (t, e) {
                    try {
                      return Se(t, i, e);
                    } catch (t) {
                      return Ka(t) ? t : new _t(t);
                    }
                  }),
                  Js = Zi(function (t, e) {
                    return (
                      xe(e, function (e) {
                        (e = Lo(e)), rr(t, e, Aa(t[e], t));
                      }),
                      t
                    );
                  });
                function Zs(t) {
                  return function () {
                    return t;
                  };
                }
                var tu = Li(),
                  eu = Li(!0);
                function nu(t) {
                  return t;
                }
                function ru(t) {
                  return Cr("function" == typeof t ? t : ar(t, 1));
                }
                var iu = Gr(function (t, e) {
                    return function (n) {
                      return Ar(n, t, e);
                    };
                  }),
                  ou = Gr(function (t, e) {
                    return function (n) {
                      return Ar(t, n, e);
                    };
                  });
                function au(t, e, n) {
                  var r = Rs(e),
                    i = wr(e, r);
                  null != n ||
                    (Za(e) && (i.length || !r.length)) ||
                    ((n = e), (e = t), (t = this), (i = wr(e, Rs(e))));
                  var o = !(Za(n) && "chain" in n && !n.chain),
                    a = Xa(t);
                  return (
                    xe(i, function (n) {
                      var r = e[n];
                      (t[n] = r),
                        a &&
                          (t.prototype[n] = function () {
                            var e = this.__chain__;
                            if (o || e) {
                              var n = t(this.__wrapped__);
                              return (
                                (n.__actions__ = Oi(this.__actions__)).push({
                                  func: r,
                                  args: arguments,
                                  thisArg: t,
                                }),
                                (n.__chain__ = e),
                                n
                              );
                            }
                            return r.apply(t, Ne([this.value()], arguments));
                          });
                    }),
                    t
                  );
                }
                function su() {}
                var uu = Fi(Pe),
                  cu = Fi(Ie),
                  lu = Fi(je);
                function fu(t) {
                  return mo(t)
                    ? ze(Lo(t))
                    : (function (t) {
                        return function (e) {
                          return _r(e, t);
                        };
                      })(t);
                }
                var pu = Vi(),
                  hu = Vi(!0);
                function du() {
                  return [];
                }
                function gu() {
                  return !1;
                }
                var yu,
                  vu = Bi(function (t, e) {
                    return t + e;
                  }, 0),
                  mu = Hi("ceil"),
                  bu = Bi(function (t, e) {
                    return t / e;
                  }, 1),
                  wu = Hi("floor"),
                  _u = Bi(function (t, e) {
                    return t * e;
                  }, 1),
                  Eu = Hi("round"),
                  Su = Bi(function (t, e) {
                    return t - e;
                  }, 0);
                return (
                  (Un.after = function (t, e) {
                    if ("function" != typeof e) throw new It(o);
                    return (
                      (t = hs(t)),
                      function () {
                        if (--t < 1) return e.apply(this, arguments);
                      }
                    );
                  }),
                  (Un.ary = Oa),
                  (Un.assign = ms),
                  (Un.assignIn = bs),
                  (Un.assignInWith = ws),
                  (Un.assignWith = _s),
                  (Un.at = Es),
                  (Un.before = Ia),
                  (Un.bind = Aa),
                  (Un.bindAll = Js),
                  (Un.bindKey = ka),
                  (Un.castArray = function () {
                    if (!arguments.length) return [];
                    var t = arguments[0];
                    return za(t) ? t : [t];
                  }),
                  (Un.chain = fa),
                  (Un.chunk = function (t, e, n) {
                    e = (n ? vo(t, e, n) : e === i) ? 1 : yn(hs(e), 0);
                    var o = null == t ? 0 : t.length;
                    if (!o || e < 1) return [];
                    for (var a = 0, s = 0, u = r(pe(o / e)); a < o; )
                      u[s++] = ti(t, a, (a += e));
                    return u;
                  }),
                  (Un.compact = function (t) {
                    for (
                      var e = -1, n = null == t ? 0 : t.length, r = 0, i = [];
                      ++e < n;

                    ) {
                      var o = t[e];
                      o && (i[r++] = o);
                    }
                    return i;
                  }),
                  (Un.concat = function () {
                    var t = arguments.length;
                    if (!t) return [];
                    for (var e = r(t - 1), n = arguments[0], i = t; i--; )
                      e[i - 1] = arguments[i];
                    return Ne(za(n) ? Oi(n) : [n], gr(e, 1));
                  }),
                  (Un.cond = function (t) {
                    var e = null == t ? 0 : t.length,
                      n = oo();
                    return (
                      (t = e
                        ? Pe(t, function (t) {
                            if ("function" != typeof t[1]) throw new It(o);
                            return [n(t[0]), t[1]];
                          })
                        : []),
                      Gr(function (n) {
                        for (var r = -1; ++r < e; ) {
                          var i = t[r];
                          if (Se(i[0], this, n)) return Se(i[1], this, n);
                        }
                      })
                    );
                  }),
                  (Un.conforms = function (t) {
                    return (function (t) {
                      var e = Rs(t);
                      return function (n) {
                        return sr(n, t, e);
                      };
                    })(ar(t, 1));
                  }),
                  (Un.constant = Zs),
                  (Un.countBy = da),
                  (Un.create = function (t, e) {
                    var n = Bn(t);
                    return null == e ? n : nr(n, e);
                  }),
                  (Un.curry = function t(e, n, r) {
                    var o = Yi(e, 8, i, i, i, i, i, (n = r ? i : n));
                    return (o.placeholder = t.placeholder), o;
                  }),
                  (Un.curryRight = function t(e, n, r) {
                    var o = Yi(e, 16, i, i, i, i, i, (n = r ? i : n));
                    return (o.placeholder = t.placeholder), o;
                  }),
                  (Un.debounce = Ra),
                  (Un.defaults = Ss),
                  (Un.defaultsDeep = Ts),
                  (Un.defer = Pa),
                  (Un.delay = Na),
                  (Un.difference = Bo),
                  (Un.differenceBy = Fo),
                  (Un.differenceWith = qo),
                  (Un.drop = function (t, e, n) {
                    var r = null == t ? 0 : t.length;
                    return r
                      ? ti(t, (e = n || e === i ? 1 : hs(e)) < 0 ? 0 : e, r)
                      : [];
                  }),
                  (Un.dropRight = function (t, e, n) {
                    var r = null == t ? 0 : t.length;
                    return r
                      ? ti(
                          t,
                          0,
                          (e = r - (e = n || e === i ? 1 : hs(e))) < 0 ? 0 : e
                        )
                      : [];
                  }),
                  (Un.dropRightWhile = function (t, e) {
                    return t && t.length ? li(t, oo(e, 3), !0, !0) : [];
                  }),
                  (Un.dropWhile = function (t, e) {
                    return t && t.length ? li(t, oo(e, 3), !0) : [];
                  }),
                  (Un.fill = function (t, e, n, r) {
                    var o = null == t ? 0 : t.length;
                    return o
                      ? (n &&
                          "number" != typeof n &&
                          vo(t, e, n) &&
                          ((n = 0), (r = o)),
                        (function (t, e, n, r) {
                          var o = t.length;
                          for (
                            (n = hs(n)) < 0 && (n = -n > o ? 0 : o + n),
                              (r = r === i || r > o ? o : hs(r)) < 0 &&
                                (r += o),
                              r = n > r ? 0 : ds(r);
                            n < r;

                          )
                            t[n++] = e;
                          return t;
                        })(t, e, n, r))
                      : [];
                  }),
                  (Un.filter = function (t, e) {
                    return (za(t) ? Ae : dr)(t, oo(e, 3));
                  }),
                  (Un.flatMap = function (t, e) {
                    return gr(Ea(t, e), 1);
                  }),
                  (Un.flatMapDeep = function (t, e) {
                    return gr(Ea(t, e), l);
                  }),
                  (Un.flatMapDepth = function (t, e, n) {
                    return (n = n === i ? 1 : hs(n)), gr(Ea(t, e), n);
                  }),
                  (Un.flatten = Wo),
                  (Un.flattenDeep = function (t) {
                    return null != t && t.length ? gr(t, l) : [];
                  }),
                  (Un.flattenDepth = function (t, e) {
                    return null != t && t.length
                      ? gr(t, (e = e === i ? 1 : hs(e)))
                      : [];
                  }),
                  (Un.flip = function (t) {
                    return Yi(t, 512);
                  }),
                  (Un.flow = tu),
                  (Un.flowRight = eu),
                  (Un.fromPairs = function (t) {
                    for (
                      var e = -1, n = null == t ? 0 : t.length, r = {};
                      ++e < n;

                    ) {
                      var i = t[e];
                      r[i[0]] = i[1];
                    }
                    return r;
                  }),
                  (Un.functions = function (t) {
                    return null == t ? [] : wr(t, Rs(t));
                  }),
                  (Un.functionsIn = function (t) {
                    return null == t ? [] : wr(t, Ps(t));
                  }),
                  (Un.groupBy = ba),
                  (Un.initial = function (t) {
                    return null != t && t.length ? ti(t, 0, -1) : [];
                  }),
                  (Un.intersection = $o),
                  (Un.intersectionBy = Go),
                  (Un.intersectionWith = Yo),
                  (Un.invert = Is),
                  (Un.invertBy = As),
                  (Un.invokeMap = wa),
                  (Un.iteratee = ru),
                  (Un.keyBy = _a),
                  (Un.keys = Rs),
                  (Un.keysIn = Ps),
                  (Un.map = Ea),
                  (Un.mapKeys = function (t, e) {
                    var n = {};
                    return (
                      (e = oo(e, 3)),
                      mr(t, function (t, r, i) {
                        rr(n, e(t, r, i), t);
                      }),
                      n
                    );
                  }),
                  (Un.mapValues = function (t, e) {
                    var n = {};
                    return (
                      (e = oo(e, 3)),
                      mr(t, function (t, r, i) {
                        rr(n, r, e(t, r, i));
                      }),
                      n
                    );
                  }),
                  (Un.matches = function (t) {
                    return Mr(ar(t, 1));
                  }),
                  (Un.matchesProperty = function (t, e) {
                    return Ur(t, ar(e, 1));
                  }),
                  (Un.memoize = Ca),
                  (Un.merge = Ns),
                  (Un.mergeWith = Cs),
                  (Un.method = iu),
                  (Un.methodOf = ou),
                  (Un.mixin = au),
                  (Un.negate = Da),
                  (Un.nthArg = function (t) {
                    return (
                      (t = hs(t)),
                      Gr(function (e) {
                        return Fr(e, t);
                      })
                    );
                  }),
                  (Un.omit = Ds),
                  (Un.omitBy = function (t, e) {
                    return Ls(t, Da(oo(e)));
                  }),
                  (Un.once = function (t) {
                    return Ia(2, t);
                  }),
                  (Un.orderBy = function (t, e, n, r) {
                    return null == t
                      ? []
                      : (za(e) || (e = null == e ? [] : [e]),
                        za((n = r ? i : n)) || (n = null == n ? [] : [n]),
                        qr(t, e, n));
                  }),
                  (Un.over = uu),
                  (Un.overArgs = ja),
                  (Un.overEvery = cu),
                  (Un.overSome = lu),
                  (Un.partial = La),
                  (Un.partialRight = Ma),
                  (Un.partition = Sa),
                  (Un.pick = js),
                  (Un.pickBy = Ls),
                  (Un.property = fu),
                  (Un.propertyOf = function (t) {
                    return function (e) {
                      return null == t ? i : _r(t, e);
                    };
                  }),
                  (Un.pull = Xo),
                  (Un.pullAll = Qo),
                  (Un.pullAllBy = function (t, e, n) {
                    return t && t.length && e && e.length
                      ? zr(t, e, oo(n, 2))
                      : t;
                  }),
                  (Un.pullAllWith = function (t, e, n) {
                    return t && t.length && e && e.length ? zr(t, e, i, n) : t;
                  }),
                  (Un.pullAt = Jo),
                  (Un.range = pu),
                  (Un.rangeRight = hu),
                  (Un.rearg = Ua),
                  (Un.reject = function (t, e) {
                    return (za(t) ? Ae : dr)(t, Da(oo(e, 3)));
                  }),
                  (Un.remove = function (t, e) {
                    var n = [];
                    if (!t || !t.length) return n;
                    var r = -1,
                      i = [],
                      o = t.length;
                    for (e = oo(e, 3); ++r < o; ) {
                      var a = t[r];
                      e(a, r, t) && (n.push(a), i.push(r));
                    }
                    return Wr(t, i), n;
                  }),
                  (Un.rest = function (t, e) {
                    if ("function" != typeof t) throw new It(o);
                    return Gr(t, (e = e === i ? e : hs(e)));
                  }),
                  (Un.reverse = Zo),
                  (Un.sampleSize = function (t, e, n) {
                    return (
                      (e = (n ? vo(t, e, n) : e === i) ? 1 : hs(e)),
                      (za(t) ? Xn : Kr)(t, e)
                    );
                  }),
                  (Un.set = function (t, e, n) {
                    return null == t ? t : Xr(t, e, n);
                  }),
                  (Un.setWith = function (t, e, n, r) {
                    return (
                      (r = "function" == typeof r ? r : i),
                      null == t ? t : Xr(t, e, n, r)
                    );
                  }),
                  (Un.shuffle = function (t) {
                    return (za(t) ? Qn : Zr)(t);
                  }),
                  (Un.slice = function (t, e, n) {
                    var r = null == t ? 0 : t.length;
                    return r
                      ? (n && "number" != typeof n && vo(t, e, n)
                          ? ((e = 0), (n = r))
                          : ((e = null == e ? 0 : hs(e)),
                            (n = n === i ? r : hs(n))),
                        ti(t, e, n))
                      : [];
                  }),
                  (Un.sortBy = Ta),
                  (Un.sortedUniq = function (t) {
                    return t && t.length ? ii(t) : [];
                  }),
                  (Un.sortedUniqBy = function (t, e) {
                    return t && t.length ? ii(t, oo(e, 2)) : [];
                  }),
                  (Un.split = function (t, e, n) {
                    return (
                      n && "number" != typeof n && vo(t, e, n) && (e = n = i),
                      (n = n === i ? h : n >>> 0)
                        ? (t = vs(t)) &&
                          ("string" == typeof e || (null != e && !is(e))) &&
                          !(e = ai(e)) &&
                          rn(t)
                          ? mi(fn(t), 0, n)
                          : t.split(e, n)
                        : []
                    );
                  }),
                  (Un.spread = function (t, e) {
                    if ("function" != typeof t) throw new It(o);
                    return (
                      (e = null == e ? 0 : yn(hs(e), 0)),
                      Gr(function (n) {
                        var r = n[e],
                          i = mi(n, 0, e);
                        return r && Ne(i, r), Se(t, this, i);
                      })
                    );
                  }),
                  (Un.tail = function (t) {
                    var e = null == t ? 0 : t.length;
                    return e ? ti(t, 1, e) : [];
                  }),
                  (Un.take = function (t, e, n) {
                    return t && t.length
                      ? ti(t, 0, (e = n || e === i ? 1 : hs(e)) < 0 ? 0 : e)
                      : [];
                  }),
                  (Un.takeRight = function (t, e, n) {
                    var r = null == t ? 0 : t.length;
                    return r
                      ? ti(
                          t,
                          (e = r - (e = n || e === i ? 1 : hs(e))) < 0 ? 0 : e,
                          r
                        )
                      : [];
                  }),
                  (Un.takeRightWhile = function (t, e) {
                    return t && t.length ? li(t, oo(e, 3), !1, !0) : [];
                  }),
                  (Un.takeWhile = function (t, e) {
                    return t && t.length ? li(t, oo(e, 3)) : [];
                  }),
                  (Un.tap = function (t, e) {
                    return e(t), t;
                  }),
                  (Un.throttle = function (t, e, n) {
                    var r = !0,
                      i = !0;
                    if ("function" != typeof t) throw new It(o);
                    return (
                      Za(n) &&
                        ((r = "leading" in n ? !!n.leading : r),
                        (i = "trailing" in n ? !!n.trailing : i)),
                      Ra(t, e, { leading: r, maxWait: e, trailing: i })
                    );
                  }),
                  (Un.thru = pa),
                  (Un.toArray = fs),
                  (Un.toPairs = Ms),
                  (Un.toPairsIn = Us),
                  (Un.toPath = function (t) {
                    return za(t) ? Pe(t, Lo) : ss(t) ? [t] : Oi(jo(vs(t)));
                  }),
                  (Un.toPlainObject = ys),
                  (Un.transform = function (t, e, n) {
                    var r = za(t),
                      i = r || Ga(t) || us(t);
                    if (((e = oo(e, 4)), null == n)) {
                      var o = t && t.constructor;
                      n = i
                        ? r
                          ? new o()
                          : []
                        : Za(t) && Xa(o)
                        ? Bn(Wt(t))
                        : {};
                    }
                    return (
                      (i ? xe : mr)(t, function (t, r, i) {
                        return e(n, t, r, i);
                      }),
                      n
                    );
                  }),
                  (Un.unary = function (t) {
                    return Oa(t, 1);
                  }),
                  (Un.union = ta),
                  (Un.unionBy = ea),
                  (Un.unionWith = na),
                  (Un.uniq = function (t) {
                    return t && t.length ? si(t) : [];
                  }),
                  (Un.uniqBy = function (t, e) {
                    return t && t.length ? si(t, oo(e, 2)) : [];
                  }),
                  (Un.uniqWith = function (t, e) {
                    return (
                      (e = "function" == typeof e ? e : i),
                      t && t.length ? si(t, i, e) : []
                    );
                  }),
                  (Un.unset = function (t, e) {
                    return null == t || ui(t, e);
                  }),
                  (Un.unzip = ra),
                  (Un.unzipWith = ia),
                  (Un.update = function (t, e, n) {
                    return null == t ? t : ci(t, e, gi(n));
                  }),
                  (Un.updateWith = function (t, e, n, r) {
                    return (
                      (r = "function" == typeof r ? r : i),
                      null == t ? t : ci(t, e, gi(n), r)
                    );
                  }),
                  (Un.values = Bs),
                  (Un.valuesIn = function (t) {
                    return null == t ? [] : Xe(t, Ps(t));
                  }),
                  (Un.without = oa),
                  (Un.words = Xs),
                  (Un.wrap = function (t, e) {
                    return La(gi(e), t);
                  }),
                  (Un.xor = aa),
                  (Un.xorBy = sa),
                  (Un.xorWith = ua),
                  (Un.zip = ca),
                  (Un.zipObject = function (t, e) {
                    return hi(t || [], e || [], Zn);
                  }),
                  (Un.zipObjectDeep = function (t, e) {
                    return hi(t || [], e || [], Xr);
                  }),
                  (Un.zipWith = la),
                  (Un.entries = Ms),
                  (Un.entriesIn = Us),
                  (Un.extend = bs),
                  (Un.extendWith = ws),
                  au(Un, Un),
                  (Un.add = vu),
                  (Un.attempt = Qs),
                  (Un.camelCase = Fs),
                  (Un.capitalize = qs),
                  (Un.ceil = mu),
                  (Un.clamp = function (t, e, n) {
                    return (
                      n === i && ((n = e), (e = i)),
                      n !== i && (n = (n = gs(n)) == n ? n : 0),
                      e !== i && (e = (e = gs(e)) == e ? e : 0),
                      or(gs(t), e, n)
                    );
                  }),
                  (Un.clone = function (t) {
                    return ar(t, 4);
                  }),
                  (Un.cloneDeep = function (t) {
                    return ar(t, 5);
                  }),
                  (Un.cloneDeepWith = function (t, e) {
                    return ar(t, 5, (e = "function" == typeof e ? e : i));
                  }),
                  (Un.cloneWith = function (t, e) {
                    return ar(t, 4, (e = "function" == typeof e ? e : i));
                  }),
                  (Un.conformsTo = function (t, e) {
                    return null == e || sr(t, e, Rs(e));
                  }),
                  (Un.deburr = Vs),
                  (Un.defaultTo = function (t, e) {
                    return null == t || t != t ? e : t;
                  }),
                  (Un.divide = bu),
                  (Un.endsWith = function (t, e, n) {
                    (t = vs(t)), (e = ai(e));
                    var r = t.length,
                      o = (n = n === i ? r : or(hs(n), 0, r));
                    return (n -= e.length) >= 0 && t.slice(n, o) == e;
                  }),
                  (Un.eq = Ba),
                  (Un.escape = function (t) {
                    return (t = vs(t)) && Y.test(t) ? t.replace($, en) : t;
                  }),
                  (Un.escapeRegExp = function (t) {
                    return (t = vs(t)) && nt.test(t)
                      ? t.replace(et, "\\$&")
                      : t;
                  }),
                  (Un.every = function (t, e, n) {
                    var r = za(t) ? Ie : pr;
                    return n && vo(t, e, n) && (e = i), r(t, oo(e, 3));
                  }),
                  (Un.find = ga),
                  (Un.findIndex = Vo),
                  (Un.findKey = function (t, e) {
                    return Me(t, oo(e, 3), mr);
                  }),
                  (Un.findLast = ya),
                  (Un.findLastIndex = zo),
                  (Un.findLastKey = function (t, e) {
                    return Me(t, oo(e, 3), br);
                  }),
                  (Un.floor = wu),
                  (Un.forEach = va),
                  (Un.forEachRight = ma),
                  (Un.forIn = function (t, e) {
                    return null == t ? t : yr(t, oo(e, 3), Ps);
                  }),
                  (Un.forInRight = function (t, e) {
                    return null == t ? t : vr(t, oo(e, 3), Ps);
                  }),
                  (Un.forOwn = function (t, e) {
                    return t && mr(t, oo(e, 3));
                  }),
                  (Un.forOwnRight = function (t, e) {
                    return t && br(t, oo(e, 3));
                  }),
                  (Un.get = xs),
                  (Un.gt = Fa),
                  (Un.gte = qa),
                  (Un.has = function (t, e) {
                    return null != t && po(t, e, xr);
                  }),
                  (Un.hasIn = Os),
                  (Un.head = Ho),
                  (Un.identity = nu),
                  (Un.includes = function (t, e, n, r) {
                    (t = Ha(t) ? t : Bs(t)), (n = n && !r ? hs(n) : 0);
                    var i = t.length;
                    return (
                      n < 0 && (n = yn(i + n, 0)),
                      as(t)
                        ? n <= i && t.indexOf(e, n) > -1
                        : !!i && Be(t, e, n) > -1
                    );
                  }),
                  (Un.indexOf = function (t, e, n) {
                    var r = null == t ? 0 : t.length;
                    if (!r) return -1;
                    var i = null == n ? 0 : hs(n);
                    return i < 0 && (i = yn(r + i, 0)), Be(t, e, i);
                  }),
                  (Un.inRange = function (t, e, n) {
                    return (
                      (e = ps(e)),
                      n === i ? ((n = e), (e = 0)) : (n = ps(n)),
                      (function (t, e, n) {
                        return t >= vn(e, n) && t < yn(e, n);
                      })((t = gs(t)), e, n)
                    );
                  }),
                  (Un.invoke = ks),
                  (Un.isArguments = Va),
                  (Un.isArray = za),
                  (Un.isArrayBuffer = Wa),
                  (Un.isArrayLike = Ha),
                  (Un.isArrayLikeObject = $a),
                  (Un.isBoolean = function (t) {
                    return !0 === t || !1 === t || (ts(t) && Sr(t) == v);
                  }),
                  (Un.isBuffer = Ga),
                  (Un.isDate = Ya),
                  (Un.isElement = function (t) {
                    return ts(t) && 1 === t.nodeType && !rs(t);
                  }),
                  (Un.isEmpty = function (t) {
                    if (null == t) return !0;
                    if (
                      Ha(t) &&
                      (za(t) ||
                        "string" == typeof t ||
                        "function" == typeof t.splice ||
                        Ga(t) ||
                        us(t) ||
                        Va(t))
                    )
                      return !t.length;
                    var e = fo(t);
                    if (e == E || e == I) return !t.size;
                    if (_o(t)) return !Dr(t).length;
                    for (var n in t) if (Ct.call(t, n)) return !1;
                    return !0;
                  }),
                  (Un.isEqual = function (t, e) {
                    return Rr(t, e);
                  }),
                  (Un.isEqualWith = function (t, e, n) {
                    var r = (n = "function" == typeof n ? n : i) ? n(t, e) : i;
                    return r === i ? Rr(t, e, i, n) : !!r;
                  }),
                  (Un.isError = Ka),
                  (Un.isFinite = function (t) {
                    return "number" == typeof t && Le(t);
                  }),
                  (Un.isFunction = Xa),
                  (Un.isInteger = Qa),
                  (Un.isLength = Ja),
                  (Un.isMap = es),
                  (Un.isMatch = function (t, e) {
                    return t === e || Pr(t, e, so(e));
                  }),
                  (Un.isMatchWith = function (t, e, n) {
                    return (
                      (n = "function" == typeof n ? n : i), Pr(t, e, so(e), n)
                    );
                  }),
                  (Un.isNaN = function (t) {
                    return ns(t) && t != +t;
                  }),
                  (Un.isNative = function (t) {
                    if (wo(t))
                      throw new _t(
                        "Unsupported core-js use. Try https://npms.io/search?q=ponyfill."
                      );
                    return Nr(t);
                  }),
                  (Un.isNil = function (t) {
                    return null == t;
                  }),
                  (Un.isNull = function (t) {
                    return null === t;
                  }),
                  (Un.isNumber = ns),
                  (Un.isObject = Za),
                  (Un.isObjectLike = ts),
                  (Un.isPlainObject = rs),
                  (Un.isRegExp = is),
                  (Un.isSafeInteger = function (t) {
                    return Qa(t) && t >= -9007199254740991 && t <= f;
                  }),
                  (Un.isSet = os),
                  (Un.isString = as),
                  (Un.isSymbol = ss),
                  (Un.isTypedArray = us),
                  (Un.isUndefined = function (t) {
                    return t === i;
                  }),
                  (Un.isWeakMap = function (t) {
                    return ts(t) && fo(t) == R;
                  }),
                  (Un.isWeakSet = function (t) {
                    return ts(t) && "[object WeakSet]" == Sr(t);
                  }),
                  (Un.join = function (t, e) {
                    return null == t ? "" : We.call(t, e);
                  }),
                  (Un.kebabCase = zs),
                  (Un.last = Ko),
                  (Un.lastIndexOf = function (t, e, n) {
                    var r = null == t ? 0 : t.length;
                    if (!r) return -1;
                    var o = r;
                    return (
                      n !== i &&
                        (o = (o = hs(n)) < 0 ? yn(r + o, 0) : vn(o, r - 1)),
                      e == e
                        ? (function (t, e, n) {
                            for (var r = n + 1; r--; ) if (t[r] === e) return r;
                            return r;
                          })(t, e, o)
                        : Ue(t, qe, o, !0)
                    );
                  }),
                  (Un.lowerCase = Ws),
                  (Un.lowerFirst = Hs),
                  (Un.lt = cs),
                  (Un.lte = ls),
                  (Un.max = function (t) {
                    return t && t.length ? hr(t, nu, Tr) : i;
                  }),
                  (Un.maxBy = function (t, e) {
                    return t && t.length ? hr(t, oo(e, 2), Tr) : i;
                  }),
                  (Un.mean = function (t) {
                    return Ve(t, nu);
                  }),
                  (Un.meanBy = function (t, e) {
                    return Ve(t, oo(e, 2));
                  }),
                  (Un.min = function (t) {
                    return t && t.length ? hr(t, nu, jr) : i;
                  }),
                  (Un.minBy = function (t, e) {
                    return t && t.length ? hr(t, oo(e, 2), jr) : i;
                  }),
                  (Un.stubArray = du),
                  (Un.stubFalse = gu),
                  (Un.stubObject = function () {
                    return {};
                  }),
                  (Un.stubString = function () {
                    return "";
                  }),
                  (Un.stubTrue = function () {
                    return !0;
                  }),
                  (Un.multiply = _u),
                  (Un.nth = function (t, e) {
                    return t && t.length ? Fr(t, hs(e)) : i;
                  }),
                  (Un.noConflict = function () {
                    return fe._ === this && (fe._ = Ut), this;
                  }),
                  (Un.noop = su),
                  (Un.now = xa),
                  (Un.pad = function (t, e, n) {
                    t = vs(t);
                    var r = (e = hs(e)) ? ln(t) : 0;
                    if (!e || r >= e) return t;
                    var i = (e - r) / 2;
                    return qi(he(i), n) + t + qi(pe(i), n);
                  }),
                  (Un.padEnd = function (t, e, n) {
                    t = vs(t);
                    var r = (e = hs(e)) ? ln(t) : 0;
                    return e && r < e ? t + qi(e - r, n) : t;
                  }),
                  (Un.padStart = function (t, e, n) {
                    t = vs(t);
                    var r = (e = hs(e)) ? ln(t) : 0;
                    return e && r < e ? qi(e - r, n) + t : t;
                  }),
                  (Un.parseInt = function (t, e, n) {
                    return (
                      n || null == e ? (e = 0) : e && (e = +e),
                      bn(vs(t).replace(rt, ""), e || 0)
                    );
                  }),
                  (Un.random = function (t, e, n) {
                    if (
                      (n && "boolean" != typeof n && vo(t, e, n) && (e = n = i),
                      n === i &&
                        ("boolean" == typeof e
                          ? ((n = e), (e = i))
                          : "boolean" == typeof t && ((n = t), (t = i))),
                      t === i && e === i
                        ? ((t = 0), (e = 1))
                        : ((t = ps(t)),
                          e === i ? ((e = t), (t = 0)) : (e = ps(e))),
                      t > e)
                    ) {
                      var r = t;
                      (t = e), (e = r);
                    }
                    if (n || t % 1 || e % 1) {
                      var o = wn();
                      return vn(
                        t + o * (e - t + se("1e-" + ((o + "").length - 1))),
                        e
                      );
                    }
                    return Hr(t, e);
                  }),
                  (Un.reduce = function (t, e, n) {
                    var r = za(t) ? Ce : He,
                      i = arguments.length < 3;
                    return r(t, oo(e, 4), n, i, lr);
                  }),
                  (Un.reduceRight = function (t, e, n) {
                    var r = za(t) ? De : He,
                      i = arguments.length < 3;
                    return r(t, oo(e, 4), n, i, fr);
                  }),
                  (Un.repeat = function (t, e, n) {
                    return (
                      (e = (n ? vo(t, e, n) : e === i) ? 1 : hs(e)),
                      $r(vs(t), e)
                    );
                  }),
                  (Un.replace = function () {
                    var t = arguments,
                      e = vs(t[0]);
                    return t.length < 3 ? e : e.replace(t[1], t[2]);
                  }),
                  (Un.result = function (t, e, n) {
                    var r = -1,
                      o = (e = yi(e, t)).length;
                    for (o || ((o = 1), (t = i)); ++r < o; ) {
                      var a = null == t ? i : t[Lo(e[r])];
                      a === i && ((r = o), (a = n)),
                        (t = Xa(a) ? a.call(t) : a);
                    }
                    return t;
                  }),
                  (Un.round = Eu),
                  (Un.runInContext = t),
                  (Un.sample = function (t) {
                    return (za(t) ? Kn : Yr)(t);
                  }),
                  (Un.size = function (t) {
                    if (null == t) return 0;
                    if (Ha(t)) return as(t) ? ln(t) : t.length;
                    var e = fo(t);
                    return e == E || e == I ? t.size : Dr(t).length;
                  }),
                  (Un.snakeCase = $s),
                  (Un.some = function (t, e, n) {
                    var r = za(t) ? je : ei;
                    return n && vo(t, e, n) && (e = i), r(t, oo(e, 3));
                  }),
                  (Un.sortedIndex = function (t, e) {
                    return ni(t, e);
                  }),
                  (Un.sortedIndexBy = function (t, e, n) {
                    return ri(t, e, oo(n, 2));
                  }),
                  (Un.sortedIndexOf = function (t, e) {
                    var n = null == t ? 0 : t.length;
                    if (n) {
                      var r = ni(t, e);
                      if (r < n && Ba(t[r], e)) return r;
                    }
                    return -1;
                  }),
                  (Un.sortedLastIndex = function (t, e) {
                    return ni(t, e, !0);
                  }),
                  (Un.sortedLastIndexBy = function (t, e, n) {
                    return ri(t, e, oo(n, 2), !0);
                  }),
                  (Un.sortedLastIndexOf = function (t, e) {
                    if (null != t && t.length) {
                      var n = ni(t, e, !0) - 1;
                      if (Ba(t[n], e)) return n;
                    }
                    return -1;
                  }),
                  (Un.startCase = Gs),
                  (Un.startsWith = function (t, e, n) {
                    return (
                      (t = vs(t)),
                      (n = null == n ? 0 : or(hs(n), 0, t.length)),
                      (e = ai(e)),
                      t.slice(n, n + e.length) == e
                    );
                  }),
                  (Un.subtract = Su),
                  (Un.sum = function (t) {
                    return t && t.length ? $e(t, nu) : 0;
                  }),
                  (Un.sumBy = function (t, e) {
                    return t && t.length ? $e(t, oo(e, 2)) : 0;
                  }),
                  (Un.template = function (t, e, n) {
                    var r = Un.templateSettings;
                    n && vo(t, e, n) && (e = i),
                      (t = vs(t)),
                      (e = ws({}, e, r, Ki));
                    var o,
                      a,
                      s = ws({}, e.imports, r.imports, Ki),
                      u = Rs(s),
                      c = Xe(s, u),
                      l = 0,
                      f = e.interpolate || bt,
                      p = "__p += '",
                      h = xt(
                        (e.escape || bt).source +
                          "|" +
                          f.source +
                          "|" +
                          (f === Q ? ft : bt).source +
                          "|" +
                          (e.evaluate || bt).source +
                          "|$",
                        "g"
                      ),
                      d =
                        "//# sourceURL=" +
                        (Ct.call(e, "sourceURL")
                          ? (e.sourceURL + "").replace(/\s/g, " ")
                          : "lodash.templateSources[" + ++re + "]") +
                        "\n";
                    t.replace(h, function (e, n, r, i, s, u) {
                      return (
                        r || (r = i),
                        (p += t.slice(l, u).replace(wt, nn)),
                        n && ((o = !0), (p += "' +\n__e(" + n + ") +\n'")),
                        s && ((a = !0), (p += "';\n" + s + ";\n__p += '")),
                        r &&
                          (p +=
                            "' +\n((__t = (" +
                            r +
                            ")) == null ? '' : __t) +\n'"),
                        (l = u + e.length),
                        e
                      );
                    }),
                      (p += "';\n");
                    var g = Ct.call(e, "variable") && e.variable;
                    if (g) {
                      if (ct.test(g))
                        throw new _t(
                          "Invalid `variable` option passed into `_.template`"
                        );
                    } else p = "with (obj) {\n" + p + "\n}\n";
                    (p = (a ? p.replace(V, "") : p)
                      .replace(z, "$1")
                      .replace(W, "$1;")),
                      (p =
                        "function(" +
                        (g || "obj") +
                        ") {\n" +
                        (g ? "" : "obj || (obj = {});\n") +
                        "var __t, __p = ''" +
                        (o ? ", __e = _.escape" : "") +
                        (a
                          ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n"
                          : ";\n") +
                        p +
                        "return __p\n}");
                    var y = Qs(function () {
                      return Et(u, d + "return " + p).apply(i, c);
                    });
                    if (((y.source = p), Ka(y))) throw y;
                    return y;
                  }),
                  (Un.times = function (t, e) {
                    if ((t = hs(t)) < 1 || t > f) return [];
                    var n = h,
                      r = vn(t, h);
                    (e = oo(e)), (t -= h);
                    for (var i = Ge(r, e); ++n < t; ) e(n);
                    return i;
                  }),
                  (Un.toFinite = ps),
                  (Un.toInteger = hs),
                  (Un.toLength = ds),
                  (Un.toLower = function (t) {
                    return vs(t).toLowerCase();
                  }),
                  (Un.toNumber = gs),
                  (Un.toSafeInteger = function (t) {
                    return t
                      ? or(hs(t), -9007199254740991, f)
                      : 0 === t
                      ? t
                      : 0;
                  }),
                  (Un.toString = vs),
                  (Un.toUpper = function (t) {
                    return vs(t).toUpperCase();
                  }),
                  (Un.trim = function (t, e, n) {
                    if ((t = vs(t)) && (n || e === i)) return Ye(t);
                    if (!t || !(e = ai(e))) return t;
                    var r = fn(t),
                      o = fn(e);
                    return mi(r, Je(r, o), Ze(r, o) + 1).join("");
                  }),
                  (Un.trimEnd = function (t, e, n) {
                    if ((t = vs(t)) && (n || e === i))
                      return t.slice(0, pn(t) + 1);
                    if (!t || !(e = ai(e))) return t;
                    var r = fn(t);
                    return mi(r, 0, Ze(r, fn(e)) + 1).join("");
                  }),
                  (Un.trimStart = function (t, e, n) {
                    if ((t = vs(t)) && (n || e === i)) return t.replace(rt, "");
                    if (!t || !(e = ai(e))) return t;
                    var r = fn(t);
                    return mi(r, Je(r, fn(e))).join("");
                  }),
                  (Un.truncate = function (t, e) {
                    var n = 30,
                      r = "...";
                    if (Za(e)) {
                      var o = "separator" in e ? e.separator : o;
                      (n = "length" in e ? hs(e.length) : n),
                        (r = "omission" in e ? ai(e.omission) : r);
                    }
                    var a = (t = vs(t)).length;
                    if (rn(t)) {
                      var s = fn(t);
                      a = s.length;
                    }
                    if (n >= a) return t;
                    var u = n - ln(r);
                    if (u < 1) return r;
                    var c = s ? mi(s, 0, u).join("") : t.slice(0, u);
                    if (o === i) return c + r;
                    if ((s && (u += c.length - u), is(o))) {
                      if (t.slice(u).search(o)) {
                        var l,
                          f = c;
                        for (
                          o.global || (o = xt(o.source, vs(pt.exec(o)) + "g")),
                            o.lastIndex = 0;
                          (l = o.exec(f));

                        )
                          var p = l.index;
                        c = c.slice(0, p === i ? u : p);
                      }
                    } else if (t.indexOf(ai(o), u) != u) {
                      var h = c.lastIndexOf(o);
                      h > -1 && (c = c.slice(0, h));
                    }
                    return c + r;
                  }),
                  (Un.unescape = function (t) {
                    return (t = vs(t)) && G.test(t) ? t.replace(H, hn) : t;
                  }),
                  (Un.uniqueId = function (t) {
                    var e = ++Dt;
                    return vs(t) + e;
                  }),
                  (Un.upperCase = Ys),
                  (Un.upperFirst = Ks),
                  (Un.each = va),
                  (Un.eachRight = ma),
                  (Un.first = Ho),
                  au(
                    Un,
                    ((yu = {}),
                    mr(Un, function (t, e) {
                      Ct.call(Un.prototype, e) || (yu[e] = t);
                    }),
                    yu),
                    { chain: !1 }
                  ),
                  (Un.VERSION = "4.17.21"),
                  xe(
                    [
                      "bind",
                      "bindKey",
                      "curry",
                      "curryRight",
                      "partial",
                      "partialRight",
                    ],
                    function (t) {
                      Un[t].placeholder = Un;
                    }
                  ),
                  xe(["drop", "take"], function (t, e) {
                    (Vn.prototype[t] = function (n) {
                      n = n === i ? 1 : yn(hs(n), 0);
                      var r =
                        this.__filtered__ && !e ? new Vn(this) : this.clone();
                      return (
                        r.__filtered__
                          ? (r.__takeCount__ = vn(n, r.__takeCount__))
                          : r.__views__.push({
                              size: vn(n, h),
                              type: t + (r.__dir__ < 0 ? "Right" : ""),
                            }),
                        r
                      );
                    }),
                      (Vn.prototype[t + "Right"] = function (e) {
                        return this.reverse()[t](e).reverse();
                      });
                  }),
                  xe(["filter", "map", "takeWhile"], function (t, e) {
                    var n = e + 1,
                      r = 1 == n || 3 == n;
                    Vn.prototype[t] = function (t) {
                      var e = this.clone();
                      return (
                        e.__iteratees__.push({ iteratee: oo(t, 3), type: n }),
                        (e.__filtered__ = e.__filtered__ || r),
                        e
                      );
                    };
                  }),
                  xe(["head", "last"], function (t, e) {
                    var n = "take" + (e ? "Right" : "");
                    Vn.prototype[t] = function () {
                      return this[n](1).value()[0];
                    };
                  }),
                  xe(["initial", "tail"], function (t, e) {
                    var n = "drop" + (e ? "" : "Right");
                    Vn.prototype[t] = function () {
                      return this.__filtered__ ? new Vn(this) : this[n](1);
                    };
                  }),
                  (Vn.prototype.compact = function () {
                    return this.filter(nu);
                  }),
                  (Vn.prototype.find = function (t) {
                    return this.filter(t).head();
                  }),
                  (Vn.prototype.findLast = function (t) {
                    return this.reverse().find(t);
                  }),
                  (Vn.prototype.invokeMap = Gr(function (t, e) {
                    return "function" == typeof t
                      ? new Vn(this)
                      : this.map(function (n) {
                          return Ar(n, t, e);
                        });
                  })),
                  (Vn.prototype.reject = function (t) {
                    return this.filter(Da(oo(t)));
                  }),
                  (Vn.prototype.slice = function (t, e) {
                    t = hs(t);
                    var n = this;
                    return n.__filtered__ && (t > 0 || e < 0)
                      ? new Vn(n)
                      : (t < 0 ? (n = n.takeRight(-t)) : t && (n = n.drop(t)),
                        e !== i &&
                          (n =
                            (e = hs(e)) < 0 ? n.dropRight(-e) : n.take(e - t)),
                        n);
                  }),
                  (Vn.prototype.takeRightWhile = function (t) {
                    return this.reverse().takeWhile(t).reverse();
                  }),
                  (Vn.prototype.toArray = function () {
                    return this.take(h);
                  }),
                  mr(Vn.prototype, function (t, e) {
                    var n = /^(?:filter|find|map|reject)|While$/.test(e),
                      r = /^(?:head|last)$/.test(e),
                      o = Un[r ? "take" + ("last" == e ? "Right" : "") : e],
                      a = r || /^find/.test(e);
                    o &&
                      (Un.prototype[e] = function () {
                        var e = this.__wrapped__,
                          s = r ? [1] : arguments,
                          u = e instanceof Vn,
                          c = s[0],
                          l = u || za(e),
                          f = function (t) {
                            var e = o.apply(Un, Ne([t], s));
                            return r && p ? e[0] : e;
                          };
                        l &&
                          n &&
                          "function" == typeof c &&
                          1 != c.length &&
                          (u = l = !1);
                        var p = this.__chain__,
                          h = !!this.__actions__.length,
                          d = a && !p,
                          g = u && !h;
                        if (!a && l) {
                          e = g ? e : new Vn(this);
                          var y = t.apply(e, s);
                          return (
                            y.__actions__.push({
                              func: pa,
                              args: [f],
                              thisArg: i,
                            }),
                            new qn(y, p)
                          );
                        }
                        return d && g
                          ? t.apply(this, s)
                          : ((y = this.thru(f)),
                            d ? (r ? y.value()[0] : y.value()) : y);
                      });
                  }),
                  xe(
                    ["pop", "push", "shift", "sort", "splice", "unshift"],
                    function (t) {
                      var e = At[t],
                        n = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru",
                        r = /^(?:pop|shift)$/.test(t);
                      Un.prototype[t] = function () {
                        var t = arguments;
                        if (r && !this.__chain__) {
                          var i = this.value();
                          return e.apply(za(i) ? i : [], t);
                        }
                        return this[n](function (n) {
                          return e.apply(za(n) ? n : [], t);
                        });
                      };
                    }
                  ),
                  mr(Vn.prototype, function (t, e) {
                    var n = Un[e];
                    if (n) {
                      var r = n.name + "";
                      Ct.call(kn, r) || (kn[r] = []),
                        kn[r].push({ name: e, func: n });
                    }
                  }),
                  (kn[Mi(i, 2).name] = [{ name: "wrapper", func: i }]),
                  (Vn.prototype.clone = function () {
                    var t = new Vn(this.__wrapped__);
                    return (
                      (t.__actions__ = Oi(this.__actions__)),
                      (t.__dir__ = this.__dir__),
                      (t.__filtered__ = this.__filtered__),
                      (t.__iteratees__ = Oi(this.__iteratees__)),
                      (t.__takeCount__ = this.__takeCount__),
                      (t.__views__ = Oi(this.__views__)),
                      t
                    );
                  }),
                  (Vn.prototype.reverse = function () {
                    if (this.__filtered__) {
                      var t = new Vn(this);
                      (t.__dir__ = -1), (t.__filtered__ = !0);
                    } else (t = this.clone()).__dir__ *= -1;
                    return t;
                  }),
                  (Vn.prototype.value = function () {
                    var t = this.__wrapped__.value(),
                      e = this.__dir__,
                      n = za(t),
                      r = e < 0,
                      i = n ? t.length : 0,
                      o = (function (t, e, n) {
                        for (var r = -1, i = n.length; ++r < i; ) {
                          var o = n[r],
                            a = o.size;
                          switch (o.type) {
                            case "drop":
                              t += a;
                              break;
                            case "dropRight":
                              e -= a;
                              break;
                            case "take":
                              e = vn(e, t + a);
                              break;
                            case "takeRight":
                              t = yn(t, e - a);
                          }
                        }
                        return { start: t, end: e };
                      })(0, i, this.__views__),
                      a = o.start,
                      s = o.end,
                      u = s - a,
                      c = r ? s : a - 1,
                      l = this.__iteratees__,
                      f = l.length,
                      p = 0,
                      h = vn(u, this.__takeCount__);
                    if (!n || (!r && i == u && h == u))
                      return fi(t, this.__actions__);
                    var d = [];
                    t: for (; u-- && p < h; ) {
                      for (var g = -1, y = t[(c += e)]; ++g < f; ) {
                        var v = l[g],
                          m = v.iteratee,
                          b = v.type,
                          w = m(y);
                        if (2 == b) y = w;
                        else if (!w) {
                          if (1 == b) continue t;
                          break t;
                        }
                      }
                      d[p++] = y;
                    }
                    return d;
                  }),
                  (Un.prototype.at = ha),
                  (Un.prototype.chain = function () {
                    return fa(this);
                  }),
                  (Un.prototype.commit = function () {
                    return new qn(this.value(), this.__chain__);
                  }),
                  (Un.prototype.next = function () {
                    this.__values__ === i &&
                      (this.__values__ = fs(this.value()));
                    var t = this.__index__ >= this.__values__.length;
                    return {
                      done: t,
                      value: t ? i : this.__values__[this.__index__++],
                    };
                  }),
                  (Un.prototype.plant = function (t) {
                    for (var e, n = this; n instanceof Fn; ) {
                      var r = Uo(n);
                      (r.__index__ = 0),
                        (r.__values__ = i),
                        e ? (o.__wrapped__ = r) : (e = r);
                      var o = r;
                      n = n.__wrapped__;
                    }
                    return (o.__wrapped__ = t), e;
                  }),
                  (Un.prototype.reverse = function () {
                    var t = this.__wrapped__;
                    if (t instanceof Vn) {
                      var e = t;
                      return (
                        this.__actions__.length && (e = new Vn(this)),
                        (e = e.reverse()).__actions__.push({
                          func: pa,
                          args: [Zo],
                          thisArg: i,
                        }),
                        new qn(e, this.__chain__)
                      );
                    }
                    return this.thru(Zo);
                  }),
                  (Un.prototype.toJSON =
                    Un.prototype.valueOf =
                    Un.prototype.value =
                      function () {
                        return fi(this.__wrapped__, this.__actions__);
                      }),
                  (Un.prototype.first = Un.prototype.head),
                  Kt &&
                    (Un.prototype[Kt] = function () {
                      return this;
                    }),
                  Un
                );
              })();
            (fe._ = dn),
              (r = function () {
                return dn;
              }.call(e, n, e, t)) === i || (t.exports = r);
          }.call(this);
      },
      631: (t, e, n) => {
        var r = "function" == typeof Map && Map.prototype,
          i =
            Object.getOwnPropertyDescriptor && r
              ? Object.getOwnPropertyDescriptor(Map.prototype, "size")
              : null,
          o = r && i && "function" == typeof i.get ? i.get : null,
          a = r && Map.prototype.forEach,
          s = "function" == typeof Set && Set.prototype,
          u =
            Object.getOwnPropertyDescriptor && s
              ? Object.getOwnPropertyDescriptor(Set.prototype, "size")
              : null,
          c = s && u && "function" == typeof u.get ? u.get : null,
          l = s && Set.prototype.forEach,
          f =
            "function" == typeof WeakMap && WeakMap.prototype
              ? WeakMap.prototype.has
              : null,
          p =
            "function" == typeof WeakSet && WeakSet.prototype
              ? WeakSet.prototype.has
              : null,
          h =
            "function" == typeof WeakRef && WeakRef.prototype
              ? WeakRef.prototype.deref
              : null,
          d = Boolean.prototype.valueOf,
          g = Object.prototype.toString,
          y = Function.prototype.toString,
          v = String.prototype.match,
          m = String.prototype.slice,
          b = String.prototype.replace,
          w = String.prototype.toUpperCase,
          _ = String.prototype.toLowerCase,
          E = RegExp.prototype.test,
          S = Array.prototype.concat,
          T = Array.prototype.join,
          x = Array.prototype.slice,
          O = Math.floor,
          I = "function" == typeof BigInt ? BigInt.prototype.valueOf : null,
          A = Object.getOwnPropertySymbols,
          k =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? Symbol.prototype.toString
              : null,
          R = "function" == typeof Symbol && "object" == typeof Symbol.iterator,
          P =
            "function" == typeof Symbol &&
            Symbol.toStringTag &&
            (Symbol.toStringTag, 1)
              ? Symbol.toStringTag
              : null,
          N = Object.prototype.propertyIsEnumerable,
          C =
            ("function" == typeof Reflect
              ? Reflect.getPrototypeOf
              : Object.getPrototypeOf) ||
            ([].__proto__ === Array.prototype
              ? function (t) {
                  return t.__proto__;
                }
              : null);
        function D(t, e) {
          if (
            t === 1 / 0 ||
            t === -1 / 0 ||
            t != t ||
            (t && t > -1e3 && t < 1e3) ||
            E.call(/e/, e)
          )
            return e;
          var n = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
          if ("number" == typeof t) {
            var r = t < 0 ? -O(-t) : O(t);
            if (r !== t) {
              var i = String(r),
                o = m.call(e, i.length + 1);
              return (
                b.call(i, n, "$&_") +
                "." +
                b.call(b.call(o, /([0-9]{3})/g, "$&_"), /_$/, "")
              );
            }
          }
          return b.call(e, n, "$&_");
        }
        var j = n(4654),
          L = j.custom,
          M = V(L) ? L : null;
        function U(t, e, n) {
          var r = "double" === (n.quoteStyle || e) ? '"' : "'";
          return r + t + r;
        }
        function B(t) {
          return b.call(String(t), /"/g, "&quot;");
        }
        function F(t) {
          return !(
            "[object Array]" !== H(t) ||
            (P && "object" == typeof t && P in t)
          );
        }
        function q(t) {
          return !(
            "[object RegExp]" !== H(t) ||
            (P && "object" == typeof t && P in t)
          );
        }
        function V(t) {
          if (R) return t && "object" == typeof t && t instanceof Symbol;
          if ("symbol" == typeof t) return !0;
          if (!t || "object" != typeof t || !k) return !1;
          try {
            return k.call(t), !0;
          } catch (t) {}
          return !1;
        }
        t.exports = function t(e, n, r, i) {
          var s = n || {};
          if (
            W(s, "quoteStyle") &&
            "single" !== s.quoteStyle &&
            "double" !== s.quoteStyle
          )
            throw new TypeError(
              'option "quoteStyle" must be "single" or "double"'
            );
          if (
            W(s, "maxStringLength") &&
            ("number" == typeof s.maxStringLength
              ? s.maxStringLength < 0 && s.maxStringLength !== 1 / 0
              : null !== s.maxStringLength)
          )
            throw new TypeError(
              'option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`'
            );
          var u = !W(s, "customInspect") || s.customInspect;
          if ("boolean" != typeof u && "symbol" !== u)
            throw new TypeError(
              "option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`"
            );
          if (
            W(s, "indent") &&
            null !== s.indent &&
            "\t" !== s.indent &&
            !(parseInt(s.indent, 10) === s.indent && s.indent > 0)
          )
            throw new TypeError(
              'option "indent" must be "\\t", an integer > 0, or `null`'
            );
          if (
            W(s, "numericSeparator") &&
            "boolean" != typeof s.numericSeparator
          )
            throw new TypeError(
              'option "numericSeparator", if provided, must be `true` or `false`'
            );
          var g = s.numericSeparator;
          if (void 0 === e) return "undefined";
          if (null === e) return "null";
          if ("boolean" == typeof e) return e ? "true" : "false";
          if ("string" == typeof e) return G(e, s);
          if ("number" == typeof e) {
            if (0 === e) return 1 / 0 / e > 0 ? "0" : "-0";
            var w = String(e);
            return g ? D(e, w) : w;
          }
          if ("bigint" == typeof e) {
            var E = String(e) + "n";
            return g ? D(e, E) : E;
          }
          var O = void 0 === s.depth ? 5 : s.depth;
          if (
            (void 0 === r && (r = 0), r >= O && O > 0 && "object" == typeof e)
          )
            return F(e) ? "[Array]" : "[Object]";
          var A,
            L = (function (t, e) {
              var n;
              if ("\t" === t.indent) n = "\t";
              else {
                if (!("number" == typeof t.indent && t.indent > 0)) return null;
                n = T.call(Array(t.indent + 1), " ");
              }
              return { base: n, prev: T.call(Array(e + 1), n) };
            })(s, r);
          if (void 0 === i) i = [];
          else if ($(i, e) >= 0) return "[Circular]";
          function z(e, n, o) {
            if ((n && (i = x.call(i)).push(n), o)) {
              var a = { depth: s.depth };
              return (
                W(s, "quoteStyle") && (a.quoteStyle = s.quoteStyle),
                t(e, a, r + 1, i)
              );
            }
            return t(e, s, r + 1, i);
          }
          if ("function" == typeof e && !q(e)) {
            var Y = (function (t) {
                if (t.name) return t.name;
                var e = v.call(y.call(t), /^function\s*([\w$]+)/);
                return e ? e[1] : null;
              })(e),
              tt = Z(e, z);
            return (
              "[Function" +
              (Y ? ": " + Y : " (anonymous)") +
              "]" +
              (tt.length > 0 ? " { " + T.call(tt, ", ") + " }" : "")
            );
          }
          if (V(e)) {
            var et = R
              ? b.call(String(e), /^(Symbol\(.*\))_[^)]*$/, "$1")
              : k.call(e);
            return "object" != typeof e || R ? et : K(et);
          }
          if (
            (A = e) &&
            "object" == typeof A &&
            (("undefined" != typeof HTMLElement && A instanceof HTMLElement) ||
              ("string" == typeof A.nodeName &&
                "function" == typeof A.getAttribute))
          ) {
            for (
              var nt = "<" + _.call(String(e.nodeName)),
                rt = e.attributes || [],
                it = 0;
              it < rt.length;
              it++
            )
              nt += " " + rt[it].name + "=" + U(B(rt[it].value), "double", s);
            return (
              (nt += ">"),
              e.childNodes && e.childNodes.length && (nt += "..."),
              nt + "</" + _.call(String(e.nodeName)) + ">"
            );
          }
          if (F(e)) {
            if (0 === e.length) return "[]";
            var ot = Z(e, z);
            return L &&
              !(function (t) {
                for (var e = 0; e < t.length; e++)
                  if ($(t[e], "\n") >= 0) return !1;
                return !0;
              })(ot)
              ? "[" + J(ot, L) + "]"
              : "[ " + T.call(ot, ", ") + " ]";
          }
          if (
            (function (t) {
              return !(
                "[object Error]" !== H(t) ||
                (P && "object" == typeof t && P in t)
              );
            })(e)
          ) {
            var at = Z(e, z);
            return "cause" in Error.prototype ||
              !("cause" in e) ||
              N.call(e, "cause")
              ? 0 === at.length
                ? "[" + String(e) + "]"
                : "{ [" + String(e) + "] " + T.call(at, ", ") + " }"
              : "{ [" +
                  String(e) +
                  "] " +
                  T.call(S.call("[cause]: " + z(e.cause), at), ", ") +
                  " }";
          }
          if ("object" == typeof e && u) {
            if (M && "function" == typeof e[M] && j)
              return j(e, { depth: O - r });
            if ("symbol" !== u && "function" == typeof e.inspect)
              return e.inspect();
          }
          if (
            (function (t) {
              if (!o || !t || "object" != typeof t) return !1;
              try {
                o.call(t);
                try {
                  c.call(t);
                } catch (t) {
                  return !0;
                }
                return t instanceof Map;
              } catch (t) {}
              return !1;
            })(e)
          ) {
            var st = [];
            return (
              a &&
                a.call(e, function (t, n) {
                  st.push(z(n, e, !0) + " => " + z(t, e));
                }),
              Q("Map", o.call(e), st, L)
            );
          }
          if (
            (function (t) {
              if (!c || !t || "object" != typeof t) return !1;
              try {
                c.call(t);
                try {
                  o.call(t);
                } catch (t) {
                  return !0;
                }
                return t instanceof Set;
              } catch (t) {}
              return !1;
            })(e)
          ) {
            var ut = [];
            return (
              l &&
                l.call(e, function (t) {
                  ut.push(z(t, e));
                }),
              Q("Set", c.call(e), ut, L)
            );
          }
          if (
            (function (t) {
              if (!f || !t || "object" != typeof t) return !1;
              try {
                f.call(t, f);
                try {
                  p.call(t, p);
                } catch (t) {
                  return !0;
                }
                return t instanceof WeakMap;
              } catch (t) {}
              return !1;
            })(e)
          )
            return X("WeakMap");
          if (
            (function (t) {
              if (!p || !t || "object" != typeof t) return !1;
              try {
                p.call(t, p);
                try {
                  f.call(t, f);
                } catch (t) {
                  return !0;
                }
                return t instanceof WeakSet;
              } catch (t) {}
              return !1;
            })(e)
          )
            return X("WeakSet");
          if (
            (function (t) {
              if (!h || !t || "object" != typeof t) return !1;
              try {
                return h.call(t), !0;
              } catch (t) {}
              return !1;
            })(e)
          )
            return X("WeakRef");
          if (
            (function (t) {
              return !(
                "[object Number]" !== H(t) ||
                (P && "object" == typeof t && P in t)
              );
            })(e)
          )
            return K(z(Number(e)));
          if (
            (function (t) {
              if (!t || "object" != typeof t || !I) return !1;
              try {
                return I.call(t), !0;
              } catch (t) {}
              return !1;
            })(e)
          )
            return K(z(I.call(e)));
          if (
            (function (t) {
              return !(
                "[object Boolean]" !== H(t) ||
                (P && "object" == typeof t && P in t)
              );
            })(e)
          )
            return K(d.call(e));
          if (
            (function (t) {
              return !(
                "[object String]" !== H(t) ||
                (P && "object" == typeof t && P in t)
              );
            })(e)
          )
            return K(z(String(e)));
          if (
            !(function (t) {
              return !(
                "[object Date]" !== H(t) ||
                (P && "object" == typeof t && P in t)
              );
            })(e) &&
            !q(e)
          ) {
            var ct = Z(e, z),
              lt = C
                ? C(e) === Object.prototype
                : e instanceof Object || e.constructor === Object,
              ft = e instanceof Object ? "" : "null prototype",
              pt =
                !lt && P && Object(e) === e && P in e
                  ? m.call(H(e), 8, -1)
                  : ft
                  ? "Object"
                  : "",
              ht =
                (lt || "function" != typeof e.constructor
                  ? ""
                  : e.constructor.name
                  ? e.constructor.name + " "
                  : "") +
                (pt || ft
                  ? "[" + T.call(S.call([], pt || [], ft || []), ": ") + "] "
                  : "");
            return 0 === ct.length
              ? ht + "{}"
              : L
              ? ht + "{" + J(ct, L) + "}"
              : ht + "{ " + T.call(ct, ", ") + " }";
          }
          return String(e);
        };
        var z =
          Object.prototype.hasOwnProperty ||
          function (t) {
            return t in this;
          };
        function W(t, e) {
          return z.call(t, e);
        }
        function H(t) {
          return g.call(t);
        }
        function $(t, e) {
          if (t.indexOf) return t.indexOf(e);
          for (var n = 0, r = t.length; n < r; n++) if (t[n] === e) return n;
          return -1;
        }
        function G(t, e) {
          if (t.length > e.maxStringLength) {
            var n = t.length - e.maxStringLength,
              r = "... " + n + " more character" + (n > 1 ? "s" : "");
            return G(m.call(t, 0, e.maxStringLength), e) + r;
          }
          return U(
            b.call(b.call(t, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, Y),
            "single",
            e
          );
        }
        function Y(t) {
          var e = t.charCodeAt(0),
            n = { 8: "b", 9: "t", 10: "n", 12: "f", 13: "r" }[e];
          return n
            ? "\\" + n
            : "\\x" + (e < 16 ? "0" : "") + w.call(e.toString(16));
        }
        function K(t) {
          return "Object(" + t + ")";
        }
        function X(t) {
          return t + " { ? }";
        }
        function Q(t, e, n, r) {
          return t + " (" + e + ") {" + (r ? J(n, r) : T.call(n, ", ")) + "}";
        }
        function J(t, e) {
          if (0 === t.length) return "";
          var n = "\n" + e.prev + e.base;
          return n + T.call(t, "," + n) + "\n" + e.prev;
        }
        function Z(t, e) {
          var n = F(t),
            r = [];
          if (n) {
            r.length = t.length;
            for (var i = 0; i < t.length; i++) r[i] = W(t, i) ? e(t[i], t) : "";
          }
          var o,
            a = "function" == typeof A ? A(t) : [];
          if (R) {
            o = {};
            for (var s = 0; s < a.length; s++) o["$" + a[s]] = a[s];
          }
          for (var u in t)
            W(t, u) &&
              ((n && String(Number(u)) === u && u < t.length) ||
                (R && o["$" + u] instanceof Symbol) ||
                (E.call(/[^\w$]/, u)
                  ? r.push(e(u, t) + ": " + e(t[u], t))
                  : r.push(u + ": " + e(t[u], t))));
          if ("function" == typeof A)
            for (var c = 0; c < a.length; c++)
              N.call(t, a[c]) && r.push("[" + e(a[c]) + "]: " + e(t[a[c]], t));
          return r;
        }
      },
      4155: (t) => {
        var e,
          n,
          r = (t.exports = {});
        function i() {
          throw new Error("setTimeout has not been defined");
        }
        function o() {
          throw new Error("clearTimeout has not been defined");
        }
        function a(t) {
          if (e === setTimeout) return setTimeout(t, 0);
          if ((e === i || !e) && setTimeout)
            return (e = setTimeout), setTimeout(t, 0);
          try {
            return e(t, 0);
          } catch (n) {
            try {
              return e.call(null, t, 0);
            } catch (n) {
              return e.call(this, t, 0);
            }
          }
        }
        !(function () {
          try {
            e = "function" == typeof setTimeout ? setTimeout : i;
          } catch (t) {
            e = i;
          }
          try {
            n = "function" == typeof clearTimeout ? clearTimeout : o;
          } catch (t) {
            n = o;
          }
        })();
        var s,
          u = [],
          c = !1,
          l = -1;
        function f() {
          c &&
            s &&
            ((c = !1),
            s.length ? (u = s.concat(u)) : (l = -1),
            u.length && p());
        }
        function p() {
          if (!c) {
            var t = a(f);
            c = !0;
            for (var e = u.length; e; ) {
              for (s = u, u = []; ++l < e; ) s && s[l].run();
              (l = -1), (e = u.length);
            }
            (s = null),
              (c = !1),
              (function (t) {
                if (n === clearTimeout) return clearTimeout(t);
                if ((n === o || !n) && clearTimeout)
                  return (n = clearTimeout), clearTimeout(t);
                try {
                  return n(t);
                } catch (e) {
                  try {
                    return n.call(null, t);
                  } catch (e) {
                    return n.call(this, t);
                  }
                }
              })(t);
          }
        }
        function h(t, e) {
          (this.fun = t), (this.array = e);
        }
        function d() {}
        (r.nextTick = function (t) {
          var e = new Array(arguments.length - 1);
          if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
          u.push(new h(t, e)), 1 !== u.length || c || a(p);
        }),
          (h.prototype.run = function () {
            this.fun.apply(null, this.array);
          }),
          (r.title = "browser"),
          (r.browser = !0),
          (r.env = {}),
          (r.argv = []),
          (r.version = ""),
          (r.versions = {}),
          (r.on = d),
          (r.addListener = d),
          (r.once = d),
          (r.off = d),
          (r.removeListener = d),
          (r.removeAllListeners = d),
          (r.emit = d),
          (r.prependListener = d),
          (r.prependOnceListener = d),
          (r.listeners = function (t) {
            return [];
          }),
          (r.binding = function (t) {
            throw new Error("process.binding is not supported");
          }),
          (r.cwd = function () {
            return "/";
          }),
          (r.chdir = function (t) {
            throw new Error("process.chdir is not supported");
          }),
          (r.umask = function () {
            return 0;
          });
      },
      5798: (t) => {
        "use strict";
        var e = String.prototype.replace,
          n = /%20/g,
          r = "RFC3986";
        t.exports = {
          default: r,
          formatters: {
            RFC1738: function (t) {
              return e.call(t, n, "+");
            },
            RFC3986: function (t) {
              return String(t);
            },
          },
          RFC1738: "RFC1738",
          RFC3986: r,
        };
      },
      129: (t, e, n) => {
        "use strict";
        var r = n(8261),
          i = n(5235),
          o = n(5798);
        t.exports = { formats: o, parse: i, stringify: r };
      },
      5235: (t, e, n) => {
        "use strict";
        var r = n(2769),
          i = Object.prototype.hasOwnProperty,
          o = Array.isArray,
          a = {
            allowDots: !1,
            allowPrototypes: !1,
            allowSparse: !1,
            arrayLimit: 20,
            charset: "utf-8",
            charsetSentinel: !1,
            comma: !1,
            decoder: r.decode,
            delimiter: "&",
            depth: 5,
            ignoreQueryPrefix: !1,
            interpretNumericEntities: !1,
            parameterLimit: 1e3,
            parseArrays: !0,
            plainObjects: !1,
            strictNullHandling: !1,
          },
          s = function (t) {
            return t.replace(/&#(\d+);/g, function (t, e) {
              return String.fromCharCode(parseInt(e, 10));
            });
          },
          u = function (t, e) {
            return t && "string" == typeof t && e.comma && t.indexOf(",") > -1
              ? t.split(",")
              : t;
          },
          c = function (t, e, n, r) {
            if (t) {
              var o = n.allowDots ? t.replace(/\.([^.[]+)/g, "[$1]") : t,
                a = /(\[[^[\]]*])/g,
                s = n.depth > 0 && /(\[[^[\]]*])/.exec(o),
                c = s ? o.slice(0, s.index) : o,
                l = [];
              if (c) {
                if (
                  !n.plainObjects &&
                  i.call(Object.prototype, c) &&
                  !n.allowPrototypes
                )
                  return;
                l.push(c);
              }
              for (
                var f = 0;
                n.depth > 0 && null !== (s = a.exec(o)) && f < n.depth;

              ) {
                if (
                  ((f += 1),
                  !n.plainObjects &&
                    i.call(Object.prototype, s[1].slice(1, -1)) &&
                    !n.allowPrototypes)
                )
                  return;
                l.push(s[1]);
              }
              return (
                s && l.push("[" + o.slice(s.index) + "]"),
                (function (t, e, n, r) {
                  for (var i = r ? e : u(e, n), o = t.length - 1; o >= 0; --o) {
                    var a,
                      s = t[o];
                    if ("[]" === s && n.parseArrays) a = [].concat(i);
                    else {
                      a = n.plainObjects ? Object.create(null) : {};
                      var c =
                          "[" === s.charAt(0) && "]" === s.charAt(s.length - 1)
                            ? s.slice(1, -1)
                            : s,
                        l = parseInt(c, 10);
                      n.parseArrays || "" !== c
                        ? !isNaN(l) &&
                          s !== c &&
                          String(l) === c &&
                          l >= 0 &&
                          n.parseArrays &&
                          l <= n.arrayLimit
                          ? ((a = [])[l] = i)
                          : "__proto__" !== c && (a[c] = i)
                        : (a = { 0: i });
                    }
                    i = a;
                  }
                  return i;
                })(l, e, n, r)
              );
            }
          };
        t.exports = function (t, e) {
          var n = (function (t) {
            if (!t) return a;
            if (
              null !== t.decoder &&
              void 0 !== t.decoder &&
              "function" != typeof t.decoder
            )
              throw new TypeError("Decoder has to be a function.");
            if (
              void 0 !== t.charset &&
              "utf-8" !== t.charset &&
              "iso-8859-1" !== t.charset
            )
              throw new TypeError(
                "The charset option must be either utf-8, iso-8859-1, or undefined"
              );
            var e = void 0 === t.charset ? a.charset : t.charset;
            return {
              allowDots: void 0 === t.allowDots ? a.allowDots : !!t.allowDots,
              allowPrototypes:
                "boolean" == typeof t.allowPrototypes
                  ? t.allowPrototypes
                  : a.allowPrototypes,
              allowSparse:
                "boolean" == typeof t.allowSparse
                  ? t.allowSparse
                  : a.allowSparse,
              arrayLimit:
                "number" == typeof t.arrayLimit ? t.arrayLimit : a.arrayLimit,
              charset: e,
              charsetSentinel:
                "boolean" == typeof t.charsetSentinel
                  ? t.charsetSentinel
                  : a.charsetSentinel,
              comma: "boolean" == typeof t.comma ? t.comma : a.comma,
              decoder: "function" == typeof t.decoder ? t.decoder : a.decoder,
              delimiter:
                "string" == typeof t.delimiter || r.isRegExp(t.delimiter)
                  ? t.delimiter
                  : a.delimiter,
              depth:
                "number" == typeof t.depth || !1 === t.depth
                  ? +t.depth
                  : a.depth,
              ignoreQueryPrefix: !0 === t.ignoreQueryPrefix,
              interpretNumericEntities:
                "boolean" == typeof t.interpretNumericEntities
                  ? t.interpretNumericEntities
                  : a.interpretNumericEntities,
              parameterLimit:
                "number" == typeof t.parameterLimit
                  ? t.parameterLimit
                  : a.parameterLimit,
              parseArrays: !1 !== t.parseArrays,
              plainObjects:
                "boolean" == typeof t.plainObjects
                  ? t.plainObjects
                  : a.plainObjects,
              strictNullHandling:
                "boolean" == typeof t.strictNullHandling
                  ? t.strictNullHandling
                  : a.strictNullHandling,
            };
          })(e);
          if ("" === t || null == t)
            return n.plainObjects ? Object.create(null) : {};
          for (
            var l =
                "string" == typeof t
                  ? (function (t, e) {
                      var n,
                        c = { __proto__: null },
                        l = e.ignoreQueryPrefix ? t.replace(/^\?/, "") : t,
                        f =
                          e.parameterLimit === 1 / 0
                            ? void 0
                            : e.parameterLimit,
                        p = l.split(e.delimiter, f),
                        h = -1,
                        d = e.charset;
                      if (e.charsetSentinel)
                        for (n = 0; n < p.length; ++n)
                          0 === p[n].indexOf("utf8=") &&
                            ("utf8=%E2%9C%93" === p[n]
                              ? (d = "utf-8")
                              : "utf8=%26%2310003%3B" === p[n] &&
                                (d = "iso-8859-1"),
                            (h = n),
                            (n = p.length));
                      for (n = 0; n < p.length; ++n)
                        if (n !== h) {
                          var g,
                            y,
                            v = p[n],
                            m = v.indexOf("]="),
                            b = -1 === m ? v.indexOf("=") : m + 1;
                          -1 === b
                            ? ((g = e.decoder(v, a.decoder, d, "key")),
                              (y = e.strictNullHandling ? null : ""))
                            : ((g = e.decoder(
                                v.slice(0, b),
                                a.decoder,
                                d,
                                "key"
                              )),
                              (y = r.maybeMap(
                                u(v.slice(b + 1), e),
                                function (t) {
                                  return e.decoder(t, a.decoder, d, "value");
                                }
                              ))),
                            y &&
                              e.interpretNumericEntities &&
                              "iso-8859-1" === d &&
                              (y = s(y)),
                            v.indexOf("[]=") > -1 && (y = o(y) ? [y] : y),
                            i.call(c, g)
                              ? (c[g] = r.combine(c[g], y))
                              : (c[g] = y);
                        }
                      return c;
                    })(t, n)
                  : t,
              f = n.plainObjects ? Object.create(null) : {},
              p = Object.keys(l),
              h = 0;
            h < p.length;
            ++h
          ) {
            var d = p[h],
              g = c(d, l[d], n, "string" == typeof t);
            f = r.merge(f, g, n);
          }
          return !0 === n.allowSparse ? f : r.compact(f);
        };
      },
      8261: (t, e, n) => {
        "use strict";
        var r = n(7478),
          i = n(2769),
          o = n(5798),
          a = Object.prototype.hasOwnProperty,
          s = {
            brackets: function (t) {
              return t + "[]";
            },
            comma: "comma",
            indices: function (t, e) {
              return t + "[" + e + "]";
            },
            repeat: function (t) {
              return t;
            },
          },
          u = Array.isArray,
          c = Array.prototype.push,
          l = function (t, e) {
            c.apply(t, u(e) ? e : [e]);
          },
          f = Date.prototype.toISOString,
          p = o.default,
          h = {
            addQueryPrefix: !1,
            allowDots: !1,
            charset: "utf-8",
            charsetSentinel: !1,
            delimiter: "&",
            encode: !0,
            encoder: i.encode,
            encodeValuesOnly: !1,
            format: p,
            formatter: o.formatters[p],
            indices: !1,
            serializeDate: function (t) {
              return f.call(t);
            },
            skipNulls: !1,
            strictNullHandling: !1,
          },
          d = {},
          g = function t(e, n, o, a, s, c, f, p, g, y, v, m, b, w, _, E) {
            for (
              var S, T = e, x = E, O = 0, I = !1;
              void 0 !== (x = x.get(d)) && !I;

            ) {
              var A = x.get(e);
              if (((O += 1), void 0 !== A)) {
                if (A === O) throw new RangeError("Cyclic object value");
                I = !0;
              }
              void 0 === x.get(d) && (O = 0);
            }
            if (
              ("function" == typeof p
                ? (T = p(n, T))
                : T instanceof Date
                ? (T = v(T))
                : "comma" === o &&
                  u(T) &&
                  (T = i.maybeMap(T, function (t) {
                    return t instanceof Date ? v(t) : t;
                  })),
              null === T)
            ) {
              if (s) return f && !w ? f(n, h.encoder, _, "key", m) : n;
              T = "";
            }
            if (
              "string" == typeof (S = T) ||
              "number" == typeof S ||
              "boolean" == typeof S ||
              "symbol" == typeof S ||
              "bigint" == typeof S ||
              i.isBuffer(T)
            )
              return f
                ? [
                    b(w ? n : f(n, h.encoder, _, "key", m)) +
                      "=" +
                      b(f(T, h.encoder, _, "value", m)),
                  ]
                : [b(n) + "=" + b(String(T))];
            var k,
              R = [];
            if (void 0 === T) return R;
            if ("comma" === o && u(T))
              w && f && (T = i.maybeMap(T, f)),
                (k = [{ value: T.length > 0 ? T.join(",") || null : void 0 }]);
            else if (u(p)) k = p;
            else {
              var P = Object.keys(T);
              k = g ? P.sort(g) : P;
            }
            for (
              var N = a && u(T) && 1 === T.length ? n + "[]" : n, C = 0;
              C < k.length;
              ++C
            ) {
              var D = k[C],
                j = "object" == typeof D && void 0 !== D.value ? D.value : T[D];
              if (!c || null !== j) {
                var L = u(T)
                  ? "function" == typeof o
                    ? o(N, D)
                    : N
                  : N + (y ? "." + D : "[" + D + "]");
                E.set(e, O);
                var M = r();
                M.set(d, E),
                  l(
                    R,
                    t(
                      j,
                      L,
                      o,
                      a,
                      s,
                      c,
                      "comma" === o && w && u(T) ? null : f,
                      p,
                      g,
                      y,
                      v,
                      m,
                      b,
                      w,
                      _,
                      M
                    )
                  );
              }
            }
            return R;
          };
        t.exports = function (t, e) {
          var n,
            i = t,
            c = (function (t) {
              if (!t) return h;
              if (
                null !== t.encoder &&
                void 0 !== t.encoder &&
                "function" != typeof t.encoder
              )
                throw new TypeError("Encoder has to be a function.");
              var e = t.charset || h.charset;
              if (
                void 0 !== t.charset &&
                "utf-8" !== t.charset &&
                "iso-8859-1" !== t.charset
              )
                throw new TypeError(
                  "The charset option must be either utf-8, iso-8859-1, or undefined"
                );
              var n = o.default;
              if (void 0 !== t.format) {
                if (!a.call(o.formatters, t.format))
                  throw new TypeError("Unknown format option provided.");
                n = t.format;
              }
              var r = o.formatters[n],
                i = h.filter;
              return (
                ("function" == typeof t.filter || u(t.filter)) &&
                  (i = t.filter),
                {
                  addQueryPrefix:
                    "boolean" == typeof t.addQueryPrefix
                      ? t.addQueryPrefix
                      : h.addQueryPrefix,
                  allowDots:
                    void 0 === t.allowDots ? h.allowDots : !!t.allowDots,
                  charset: e,
                  charsetSentinel:
                    "boolean" == typeof t.charsetSentinel
                      ? t.charsetSentinel
                      : h.charsetSentinel,
                  delimiter: void 0 === t.delimiter ? h.delimiter : t.delimiter,
                  encode: "boolean" == typeof t.encode ? t.encode : h.encode,
                  encoder:
                    "function" == typeof t.encoder ? t.encoder : h.encoder,
                  encodeValuesOnly:
                    "boolean" == typeof t.encodeValuesOnly
                      ? t.encodeValuesOnly
                      : h.encodeValuesOnly,
                  filter: i,
                  format: n,
                  formatter: r,
                  serializeDate:
                    "function" == typeof t.serializeDate
                      ? t.serializeDate
                      : h.serializeDate,
                  skipNulls:
                    "boolean" == typeof t.skipNulls ? t.skipNulls : h.skipNulls,
                  sort: "function" == typeof t.sort ? t.sort : null,
                  strictNullHandling:
                    "boolean" == typeof t.strictNullHandling
                      ? t.strictNullHandling
                      : h.strictNullHandling,
                }
              );
            })(e);
          "function" == typeof c.filter
            ? (i = (0, c.filter)("", i))
            : u(c.filter) && (n = c.filter);
          var f,
            p = [];
          if ("object" != typeof i || null === i) return "";
          f =
            e && e.arrayFormat in s
              ? e.arrayFormat
              : e && "indices" in e
              ? e.indices
                ? "indices"
                : "repeat"
              : "indices";
          var d = s[f];
          if (
            e &&
            "commaRoundTrip" in e &&
            "boolean" != typeof e.commaRoundTrip
          )
            throw new TypeError(
              "`commaRoundTrip` must be a boolean, or absent"
            );
          var y = "comma" === d && e && e.commaRoundTrip;
          n || (n = Object.keys(i)), c.sort && n.sort(c.sort);
          for (var v = r(), m = 0; m < n.length; ++m) {
            var b = n[m];
            (c.skipNulls && null === i[b]) ||
              l(
                p,
                g(
                  i[b],
                  b,
                  d,
                  y,
                  c.strictNullHandling,
                  c.skipNulls,
                  c.encode ? c.encoder : null,
                  c.filter,
                  c.sort,
                  c.allowDots,
                  c.serializeDate,
                  c.format,
                  c.formatter,
                  c.encodeValuesOnly,
                  c.charset,
                  v
                )
              );
          }
          var w = p.join(c.delimiter),
            _ = !0 === c.addQueryPrefix ? "?" : "";
          return (
            c.charsetSentinel &&
              ("iso-8859-1" === c.charset
                ? (_ += "utf8=%26%2310003%3B&")
                : (_ += "utf8=%E2%9C%93&")),
            w.length > 0 ? _ + w : ""
          );
        };
      },
      2769: (t, e, n) => {
        "use strict";
        var r = n(5798),
          i = Object.prototype.hasOwnProperty,
          o = Array.isArray,
          a = (function () {
            for (var t = [], e = 0; e < 256; ++e)
              t.push(
                "%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase()
              );
            return t;
          })(),
          s = function (t, e) {
            for (
              var n = e && e.plainObjects ? Object.create(null) : {}, r = 0;
              r < t.length;
              ++r
            )
              void 0 !== t[r] && (n[r] = t[r]);
            return n;
          };
        t.exports = {
          arrayToObject: s,
          assign: function (t, e) {
            return Object.keys(e).reduce(function (t, n) {
              return (t[n] = e[n]), t;
            }, t);
          },
          combine: function (t, e) {
            return [].concat(t, e);
          },
          compact: function (t) {
            for (
              var e = [{ obj: { o: t }, prop: "o" }], n = [], r = 0;
              r < e.length;
              ++r
            )
              for (
                var i = e[r], a = i.obj[i.prop], s = Object.keys(a), u = 0;
                u < s.length;
                ++u
              ) {
                var c = s[u],
                  l = a[c];
                "object" == typeof l &&
                  null !== l &&
                  -1 === n.indexOf(l) &&
                  (e.push({ obj: a, prop: c }), n.push(l));
              }
            return (
              (function (t) {
                for (; t.length > 1; ) {
                  var e = t.pop(),
                    n = e.obj[e.prop];
                  if (o(n)) {
                    for (var r = [], i = 0; i < n.length; ++i)
                      void 0 !== n[i] && r.push(n[i]);
                    e.obj[e.prop] = r;
                  }
                }
              })(e),
              t
            );
          },
          decode: function (t, e, n) {
            var r = t.replace(/\+/g, " ");
            if ("iso-8859-1" === n)
              return r.replace(/%[0-9a-f]{2}/gi, unescape);
            try {
              return decodeURIComponent(r);
            } catch (t) {
              return r;
            }
          },
          encode: function (t, e, n, i, o) {
            if (0 === t.length) return t;
            var s = t;
            if (
              ("symbol" == typeof t
                ? (s = Symbol.prototype.toString.call(t))
                : "string" != typeof t && (s = String(t)),
              "iso-8859-1" === n)
            )
              return escape(s).replace(/%u[0-9a-f]{4}/gi, function (t) {
                return "%26%23" + parseInt(t.slice(2), 16) + "%3B";
              });
            for (var u = "", c = 0; c < s.length; ++c) {
              var l = s.charCodeAt(c);
              45 === l ||
              46 === l ||
              95 === l ||
              126 === l ||
              (l >= 48 && l <= 57) ||
              (l >= 65 && l <= 90) ||
              (l >= 97 && l <= 122) ||
              (o === r.RFC1738 && (40 === l || 41 === l))
                ? (u += s.charAt(c))
                : l < 128
                ? (u += a[l])
                : l < 2048
                ? (u += a[192 | (l >> 6)] + a[128 | (63 & l)])
                : l < 55296 || l >= 57344
                ? (u +=
                    a[224 | (l >> 12)] +
                    a[128 | ((l >> 6) & 63)] +
                    a[128 | (63 & l)])
                : ((c += 1),
                  (l = 65536 + (((1023 & l) << 10) | (1023 & s.charCodeAt(c)))),
                  (u +=
                    a[240 | (l >> 18)] +
                    a[128 | ((l >> 12) & 63)] +
                    a[128 | ((l >> 6) & 63)] +
                    a[128 | (63 & l)]));
            }
            return u;
          },
          isBuffer: function (t) {
            return !(
              !t ||
              "object" != typeof t ||
              !(
                t.constructor &&
                t.constructor.isBuffer &&
                t.constructor.isBuffer(t)
              )
            );
          },
          isRegExp: function (t) {
            return "[object RegExp]" === Object.prototype.toString.call(t);
          },
          maybeMap: function (t, e) {
            if (o(t)) {
              for (var n = [], r = 0; r < t.length; r += 1) n.push(e(t[r]));
              return n;
            }
            return e(t);
          },
          merge: function t(e, n, r) {
            if (!n) return e;
            if ("object" != typeof n) {
              if (o(e)) e.push(n);
              else {
                if (!e || "object" != typeof e) return [e, n];
                ((r && (r.plainObjects || r.allowPrototypes)) ||
                  !i.call(Object.prototype, n)) &&
                  (e[n] = !0);
              }
              return e;
            }
            if (!e || "object" != typeof e) return [e].concat(n);
            var a = e;
            return (
              o(e) && !o(n) && (a = s(e, r)),
              o(e) && o(n)
                ? (n.forEach(function (n, o) {
                    if (i.call(e, o)) {
                      var a = e[o];
                      a && "object" == typeof a && n && "object" == typeof n
                        ? (e[o] = t(a, n, r))
                        : e.push(n);
                    } else e[o] = n;
                  }),
                  e)
                : Object.keys(n).reduce(function (e, o) {
                    var a = n[o];
                    return (
                      i.call(e, o) ? (e[o] = t(e[o], a, r)) : (e[o] = a), e
                    );
                  }, a)
            );
          },
        };
      },
      4281: (t) => {
        "use strict";
        var e = {};
        function n(t, n, r) {
          r || (r = Error);
          var i = (function (t) {
            var e, r;
            function i(e, r, i) {
              return (
                t.call(
                  this,
                  (function (t, e, r) {
                    return "string" == typeof n ? n : n(t, e, r);
                  })(e, r, i)
                ) || this
              );
            }
            return (
              (r = t),
              ((e = i).prototype = Object.create(r.prototype)),
              (e.prototype.constructor = e),
              (e.__proto__ = r),
              i
            );
          })(r);
          (i.prototype.name = r.name), (i.prototype.code = t), (e[t] = i);
        }
        function r(t, e) {
          if (Array.isArray(t)) {
            var n = t.length;
            return (
              (t = t.map(function (t) {
                return String(t);
              })),
              n > 2
                ? "one of "
                    .concat(e, " ")
                    .concat(t.slice(0, n - 1).join(", "), ", or ") + t[n - 1]
                : 2 === n
                ? "one of ".concat(e, " ").concat(t[0], " or ").concat(t[1])
                : "of ".concat(e, " ").concat(t[0])
            );
          }
          return "of ".concat(e, " ").concat(String(t));
        }
        n(
          "ERR_INVALID_OPT_VALUE",
          function (t, e) {
            return 'The value "' + e + '" is invalid for option "' + t + '"';
          },
          TypeError
        ),
          n(
            "ERR_INVALID_ARG_TYPE",
            function (t, e, n) {
              var i, o, a, s, u;
              if (
                ("string" == typeof e && ((o = "not "), e.substr(0, 4) === o)
                  ? ((i = "must not be"), (e = e.replace(/^not /, "")))
                  : (i = "must be"),
                (function (t, e, n) {
                  return (
                    (void 0 === n || n > t.length) && (n = t.length),
                    t.substring(n - 9, n) === e
                  );
                })(t, " argument"))
              )
                a = "The ".concat(t, " ").concat(i, " ").concat(r(e, "type"));
              else {
                var c =
                  ("number" != typeof u && (u = 0),
                  u + 1 > (s = t).length || -1 === s.indexOf(".", u)
                    ? "argument"
                    : "property");
                a = 'The "'
                  .concat(t, '" ')
                  .concat(c, " ")
                  .concat(i, " ")
                  .concat(r(e, "type"));
              }
              return a + ". Received type ".concat(typeof n);
            },
            TypeError
          ),
          n("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF"),
          n("ERR_METHOD_NOT_IMPLEMENTED", function (t) {
            return "The " + t + " method is not implemented";
          }),
          n("ERR_STREAM_PREMATURE_CLOSE", "Premature close"),
          n("ERR_STREAM_DESTROYED", function (t) {
            return "Cannot call " + t + " after a stream was destroyed";
          }),
          n("ERR_MULTIPLE_CALLBACK", "Callback called multiple times"),
          n("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable"),
          n("ERR_STREAM_WRITE_AFTER_END", "write after end"),
          n(
            "ERR_STREAM_NULL_VALUES",
            "May not write null values to stream",
            TypeError
          ),
          n(
            "ERR_UNKNOWN_ENCODING",
            function (t) {
              return "Unknown encoding: " + t;
            },
            TypeError
          ),
          n(
            "ERR_STREAM_UNSHIFT_AFTER_END_EVENT",
            "stream.unshift() after end event"
          ),
          (t.exports.q = e);
      },
      6753: (t, e, n) => {
        "use strict";
        var r = n(4155),
          i =
            Object.keys ||
            function (t) {
              var e = [];
              for (var n in t) e.push(n);
              return e;
            };
        t.exports = l;
        var o = n(9481),
          a = n(4229);
        n(5717)(l, o);
        for (var s = i(a.prototype), u = 0; u < s.length; u++) {
          var c = s[u];
          l.prototype[c] || (l.prototype[c] = a.prototype[c]);
        }
        function l(t) {
          if (!(this instanceof l)) return new l(t);
          o.call(this, t),
            a.call(this, t),
            (this.allowHalfOpen = !0),
            t &&
              (!1 === t.readable && (this.readable = !1),
              !1 === t.writable && (this.writable = !1),
              !1 === t.allowHalfOpen &&
                ((this.allowHalfOpen = !1), this.once("end", f)));
        }
        function f() {
          this._writableState.ended || r.nextTick(p, this);
        }
        function p(t) {
          t.end();
        }
        Object.defineProperty(l.prototype, "writableHighWaterMark", {
          enumerable: !1,
          get: function () {
            return this._writableState.highWaterMark;
          },
        }),
          Object.defineProperty(l.prototype, "writableBuffer", {
            enumerable: !1,
            get: function () {
              return this._writableState && this._writableState.getBuffer();
            },
          }),
          Object.defineProperty(l.prototype, "writableLength", {
            enumerable: !1,
            get: function () {
              return this._writableState.length;
            },
          }),
          Object.defineProperty(l.prototype, "destroyed", {
            enumerable: !1,
            get: function () {
              return (
                void 0 !== this._readableState &&
                void 0 !== this._writableState &&
                this._readableState.destroyed &&
                this._writableState.destroyed
              );
            },
            set: function (t) {
              void 0 !== this._readableState &&
                void 0 !== this._writableState &&
                ((this._readableState.destroyed = t),
                (this._writableState.destroyed = t));
            },
          });
      },
      2725: (t, e, n) => {
        "use strict";
        t.exports = i;
        var r = n(4605);
        function i(t) {
          if (!(this instanceof i)) return new i(t);
          r.call(this, t);
        }
        n(5717)(i, r),
          (i.prototype._transform = function (t, e, n) {
            n(null, t);
          });
      },
      9481: (t, e, n) => {
        "use strict";
        var r,
          i = n(4155);
        (t.exports = x), (x.ReadableState = T), n(7187).EventEmitter;
        var o,
          a = function (t, e) {
            return t.listeners(e).length;
          },
          s = n(2503),
          u = n(8764).Buffer,
          c =
            (void 0 !== n.g
              ? n.g
              : "undefined" != typeof window
              ? window
              : "undefined" != typeof self
              ? self
              : {}
            ).Uint8Array || function () {},
          l = n(4616);
        o = l && l.debuglog ? l.debuglog("stream") : function () {};
        var f,
          p,
          h,
          d = n(7327),
          g = n(1195),
          y = n(2457).getHighWaterMark,
          v = n(4281).q,
          m = v.ERR_INVALID_ARG_TYPE,
          b = v.ERR_STREAM_PUSH_AFTER_EOF,
          w = v.ERR_METHOD_NOT_IMPLEMENTED,
          _ = v.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
        n(5717)(x, s);
        var E = g.errorOrDestroy,
          S = ["error", "close", "destroy", "pause", "resume"];
        function T(t, e, i) {
          (r = r || n(6753)),
            (t = t || {}),
            "boolean" != typeof i && (i = e instanceof r),
            (this.objectMode = !!t.objectMode),
            i && (this.objectMode = this.objectMode || !!t.readableObjectMode),
            (this.highWaterMark = y(this, t, "readableHighWaterMark", i)),
            (this.buffer = new d()),
            (this.length = 0),
            (this.pipes = null),
            (this.pipesCount = 0),
            (this.flowing = null),
            (this.ended = !1),
            (this.endEmitted = !1),
            (this.reading = !1),
            (this.sync = !0),
            (this.needReadable = !1),
            (this.emittedReadable = !1),
            (this.readableListening = !1),
            (this.resumeScheduled = !1),
            (this.paused = !0),
            (this.emitClose = !1 !== t.emitClose),
            (this.autoDestroy = !!t.autoDestroy),
            (this.destroyed = !1),
            (this.defaultEncoding = t.defaultEncoding || "utf8"),
            (this.awaitDrain = 0),
            (this.readingMore = !1),
            (this.decoder = null),
            (this.encoding = null),
            t.encoding &&
              (f || (f = n(2553).s),
              (this.decoder = new f(t.encoding)),
              (this.encoding = t.encoding));
        }
        function x(t) {
          if (((r = r || n(6753)), !(this instanceof x))) return new x(t);
          var e = this instanceof r;
          (this._readableState = new T(t, this, e)),
            (this.readable = !0),
            t &&
              ("function" == typeof t.read && (this._read = t.read),
              "function" == typeof t.destroy && (this._destroy = t.destroy)),
            s.call(this);
        }
        function O(t, e, n, r, i) {
          o("readableAddChunk", e);
          var a,
            s = t._readableState;
          if (null === e)
            (s.reading = !1),
              (function (t, e) {
                if ((o("onEofChunk"), !e.ended)) {
                  if (e.decoder) {
                    var n = e.decoder.end();
                    n &&
                      n.length &&
                      (e.buffer.push(n),
                      (e.length += e.objectMode ? 1 : n.length));
                  }
                  (e.ended = !0),
                    e.sync
                      ? R(t)
                      : ((e.needReadable = !1),
                        e.emittedReadable || ((e.emittedReadable = !0), P(t)));
                }
              })(t, s);
          else if (
            (i ||
              (a = (function (t, e) {
                var n, r;
                return (
                  (r = e),
                  u.isBuffer(r) ||
                    r instanceof c ||
                    "string" == typeof e ||
                    void 0 === e ||
                    t.objectMode ||
                    (n = new m("chunk", ["string", "Buffer", "Uint8Array"], e)),
                  n
                );
              })(s, e)),
            a)
          )
            E(t, a);
          else if (s.objectMode || (e && e.length > 0))
            if (
              ("string" == typeof e ||
                s.objectMode ||
                Object.getPrototypeOf(e) === u.prototype ||
                (e = (function (t) {
                  return u.from(t);
                })(e)),
              r)
            )
              s.endEmitted ? E(t, new _()) : I(t, s, e, !0);
            else if (s.ended) E(t, new b());
            else {
              if (s.destroyed) return !1;
              (s.reading = !1),
                s.decoder && !n
                  ? ((e = s.decoder.write(e)),
                    s.objectMode || 0 !== e.length ? I(t, s, e, !1) : N(t, s))
                  : I(t, s, e, !1);
            }
          else r || ((s.reading = !1), N(t, s));
          return !s.ended && (s.length < s.highWaterMark || 0 === s.length);
        }
        function I(t, e, n, r) {
          e.flowing && 0 === e.length && !e.sync
            ? ((e.awaitDrain = 0), t.emit("data", n))
            : ((e.length += e.objectMode ? 1 : n.length),
              r ? e.buffer.unshift(n) : e.buffer.push(n),
              e.needReadable && R(t)),
            N(t, e);
        }
        Object.defineProperty(x.prototype, "destroyed", {
          enumerable: !1,
          get: function () {
            return (
              void 0 !== this._readableState && this._readableState.destroyed
            );
          },
          set: function (t) {
            this._readableState && (this._readableState.destroyed = t);
          },
        }),
          (x.prototype.destroy = g.destroy),
          (x.prototype._undestroy = g.undestroy),
          (x.prototype._destroy = function (t, e) {
            e(t);
          }),
          (x.prototype.push = function (t, e) {
            var n,
              r = this._readableState;
            return (
              r.objectMode
                ? (n = !0)
                : "string" == typeof t &&
                  ((e = e || r.defaultEncoding) !== r.encoding &&
                    ((t = u.from(t, e)), (e = "")),
                  (n = !0)),
              O(this, t, e, !1, n)
            );
          }),
          (x.prototype.unshift = function (t) {
            return O(this, t, null, !0, !1);
          }),
          (x.prototype.isPaused = function () {
            return !1 === this._readableState.flowing;
          }),
          (x.prototype.setEncoding = function (t) {
            f || (f = n(2553).s);
            var e = new f(t);
            (this._readableState.decoder = e),
              (this._readableState.encoding =
                this._readableState.decoder.encoding);
            for (var r = this._readableState.buffer.head, i = ""; null !== r; )
              (i += e.write(r.data)), (r = r.next);
            return (
              this._readableState.buffer.clear(),
              "" !== i && this._readableState.buffer.push(i),
              (this._readableState.length = i.length),
              this
            );
          });
        var A = 1073741824;
        function k(t, e) {
          return t <= 0 || (0 === e.length && e.ended)
            ? 0
            : e.objectMode
            ? 1
            : t != t
            ? e.flowing && e.length
              ? e.buffer.head.data.length
              : e.length
            : (t > e.highWaterMark &&
                (e.highWaterMark = (function (t) {
                  return (
                    t >= A
                      ? (t = A)
                      : (t--,
                        (t |= t >>> 1),
                        (t |= t >>> 2),
                        (t |= t >>> 4),
                        (t |= t >>> 8),
                        (t |= t >>> 16),
                        t++),
                    t
                  );
                })(t)),
              t <= e.length
                ? t
                : e.ended
                ? e.length
                : ((e.needReadable = !0), 0));
        }
        function R(t) {
          var e = t._readableState;
          o("emitReadable", e.needReadable, e.emittedReadable),
            (e.needReadable = !1),
            e.emittedReadable ||
              (o("emitReadable", e.flowing),
              (e.emittedReadable = !0),
              i.nextTick(P, t));
        }
        function P(t) {
          var e = t._readableState;
          o("emitReadable_", e.destroyed, e.length, e.ended),
            e.destroyed ||
              (!e.length && !e.ended) ||
              (t.emit("readable"), (e.emittedReadable = !1)),
            (e.needReadable =
              !e.flowing && !e.ended && e.length <= e.highWaterMark),
            M(t);
        }
        function N(t, e) {
          e.readingMore || ((e.readingMore = !0), i.nextTick(C, t, e));
        }
        function C(t, e) {
          for (
            ;
            !e.reading &&
            !e.ended &&
            (e.length < e.highWaterMark || (e.flowing && 0 === e.length));

          ) {
            var n = e.length;
            if ((o("maybeReadMore read 0"), t.read(0), n === e.length)) break;
          }
          e.readingMore = !1;
        }
        function D(t) {
          var e = t._readableState;
          (e.readableListening = t.listenerCount("readable") > 0),
            e.resumeScheduled && !e.paused
              ? (e.flowing = !0)
              : t.listenerCount("data") > 0 && t.resume();
        }
        function j(t) {
          o("readable nexttick read 0"), t.read(0);
        }
        function L(t, e) {
          o("resume", e.reading),
            e.reading || t.read(0),
            (e.resumeScheduled = !1),
            t.emit("resume"),
            M(t),
            e.flowing && !e.reading && t.read(0);
        }
        function M(t) {
          var e = t._readableState;
          for (o("flow", e.flowing); e.flowing && null !== t.read(); );
        }
        function U(t, e) {
          return 0 === e.length
            ? null
            : (e.objectMode
                ? (n = e.buffer.shift())
                : !t || t >= e.length
                ? ((n = e.decoder
                    ? e.buffer.join("")
                    : 1 === e.buffer.length
                    ? e.buffer.first()
                    : e.buffer.concat(e.length)),
                  e.buffer.clear())
                : (n = e.buffer.consume(t, e.decoder)),
              n);
          var n;
        }
        function B(t) {
          var e = t._readableState;
          o("endReadable", e.endEmitted),
            e.endEmitted || ((e.ended = !0), i.nextTick(F, e, t));
        }
        function F(t, e) {
          if (
            (o("endReadableNT", t.endEmitted, t.length),
            !t.endEmitted &&
              0 === t.length &&
              ((t.endEmitted = !0),
              (e.readable = !1),
              e.emit("end"),
              t.autoDestroy))
          ) {
            var n = e._writableState;
            (!n || (n.autoDestroy && n.finished)) && e.destroy();
          }
        }
        function q(t, e) {
          for (var n = 0, r = t.length; n < r; n++) if (t[n] === e) return n;
          return -1;
        }
        (x.prototype.read = function (t) {
          o("read", t), (t = parseInt(t, 10));
          var e = this._readableState,
            n = t;
          if (
            (0 !== t && (e.emittedReadable = !1),
            0 === t &&
              e.needReadable &&
              ((0 !== e.highWaterMark
                ? e.length >= e.highWaterMark
                : e.length > 0) ||
                e.ended))
          )
            return (
              o("read: emitReadable", e.length, e.ended),
              0 === e.length && e.ended ? B(this) : R(this),
              null
            );
          if (0 === (t = k(t, e)) && e.ended)
            return 0 === e.length && B(this), null;
          var r,
            i = e.needReadable;
          return (
            o("need readable", i),
            (0 === e.length || e.length - t < e.highWaterMark) &&
              o("length less than watermark", (i = !0)),
            e.ended || e.reading
              ? o("reading or ended", (i = !1))
              : i &&
                (o("do read"),
                (e.reading = !0),
                (e.sync = !0),
                0 === e.length && (e.needReadable = !0),
                this._read(e.highWaterMark),
                (e.sync = !1),
                e.reading || (t = k(n, e))),
            null === (r = t > 0 ? U(t, e) : null)
              ? ((e.needReadable = e.length <= e.highWaterMark), (t = 0))
              : ((e.length -= t), (e.awaitDrain = 0)),
            0 === e.length &&
              (e.ended || (e.needReadable = !0), n !== t && e.ended && B(this)),
            null !== r && this.emit("data", r),
            r
          );
        }),
          (x.prototype._read = function (t) {
            E(this, new w("_read()"));
          }),
          (x.prototype.pipe = function (t, e) {
            var n = this,
              r = this._readableState;
            switch (r.pipesCount) {
              case 0:
                r.pipes = t;
                break;
              case 1:
                r.pipes = [r.pipes, t];
                break;
              default:
                r.pipes.push(t);
            }
            (r.pipesCount += 1), o("pipe count=%d opts=%j", r.pipesCount, e);
            var s =
              (e && !1 === e.end) || t === i.stdout || t === i.stderr ? g : u;
            function u() {
              o("onend"), t.end();
            }
            r.endEmitted ? i.nextTick(s) : n.once("end", s),
              t.on("unpipe", function e(i, a) {
                o("onunpipe"),
                  i === n &&
                    a &&
                    !1 === a.hasUnpiped &&
                    ((a.hasUnpiped = !0),
                    o("cleanup"),
                    t.removeListener("close", h),
                    t.removeListener("finish", d),
                    t.removeListener("drain", c),
                    t.removeListener("error", p),
                    t.removeListener("unpipe", e),
                    n.removeListener("end", u),
                    n.removeListener("end", g),
                    n.removeListener("data", f),
                    (l = !0),
                    !r.awaitDrain ||
                      (t._writableState && !t._writableState.needDrain) ||
                      c());
              });
            var c = (function (t) {
              return function () {
                var e = t._readableState;
                o("pipeOnDrain", e.awaitDrain),
                  e.awaitDrain && e.awaitDrain--,
                  0 === e.awaitDrain &&
                    a(t, "data") &&
                    ((e.flowing = !0), M(t));
              };
            })(n);
            t.on("drain", c);
            var l = !1;
            function f(e) {
              o("ondata");
              var i = t.write(e);
              o("dest.write", i),
                !1 === i &&
                  (((1 === r.pipesCount && r.pipes === t) ||
                    (r.pipesCount > 1 && -1 !== q(r.pipes, t))) &&
                    !l &&
                    (o("false write response, pause", r.awaitDrain),
                    r.awaitDrain++),
                  n.pause());
            }
            function p(e) {
              o("onerror", e),
                g(),
                t.removeListener("error", p),
                0 === a(t, "error") && E(t, e);
            }
            function h() {
              t.removeListener("finish", d), g();
            }
            function d() {
              o("onfinish"), t.removeListener("close", h), g();
            }
            function g() {
              o("unpipe"), n.unpipe(t);
            }
            return (
              n.on("data", f),
              (function (t, e, n) {
                if ("function" == typeof t.prependListener)
                  return t.prependListener(e, n);
                t._events && t._events[e]
                  ? Array.isArray(t._events[e])
                    ? t._events[e].unshift(n)
                    : (t._events[e] = [n, t._events[e]])
                  : t.on(e, n);
              })(t, "error", p),
              t.once("close", h),
              t.once("finish", d),
              t.emit("pipe", n),
              r.flowing || (o("pipe resume"), n.resume()),
              t
            );
          }),
          (x.prototype.unpipe = function (t) {
            var e = this._readableState,
              n = { hasUnpiped: !1 };
            if (0 === e.pipesCount) return this;
            if (1 === e.pipesCount)
              return (
                (t && t !== e.pipes) ||
                  (t || (t = e.pipes),
                  (e.pipes = null),
                  (e.pipesCount = 0),
                  (e.flowing = !1),
                  t && t.emit("unpipe", this, n)),
                this
              );
            if (!t) {
              var r = e.pipes,
                i = e.pipesCount;
              (e.pipes = null), (e.pipesCount = 0), (e.flowing = !1);
              for (var o = 0; o < i; o++)
                r[o].emit("unpipe", this, { hasUnpiped: !1 });
              return this;
            }
            var a = q(e.pipes, t);
            return (
              -1 === a ||
                (e.pipes.splice(a, 1),
                (e.pipesCount -= 1),
                1 === e.pipesCount && (e.pipes = e.pipes[0]),
                t.emit("unpipe", this, n)),
              this
            );
          }),
          (x.prototype.on = function (t, e) {
            var n = s.prototype.on.call(this, t, e),
              r = this._readableState;
            return (
              "data" === t
                ? ((r.readableListening = this.listenerCount("readable") > 0),
                  !1 !== r.flowing && this.resume())
                : "readable" === t &&
                  (r.endEmitted ||
                    r.readableListening ||
                    ((r.readableListening = r.needReadable = !0),
                    (r.flowing = !1),
                    (r.emittedReadable = !1),
                    o("on readable", r.length, r.reading),
                    r.length ? R(this) : r.reading || i.nextTick(j, this))),
              n
            );
          }),
          (x.prototype.addListener = x.prototype.on),
          (x.prototype.removeListener = function (t, e) {
            var n = s.prototype.removeListener.call(this, t, e);
            return "readable" === t && i.nextTick(D, this), n;
          }),
          (x.prototype.removeAllListeners = function (t) {
            var e = s.prototype.removeAllListeners.apply(this, arguments);
            return ("readable" !== t && void 0 !== t) || i.nextTick(D, this), e;
          }),
          (x.prototype.resume = function () {
            var t = this._readableState;
            return (
              t.flowing ||
                (o("resume"),
                (t.flowing = !t.readableListening),
                (function (t, e) {
                  e.resumeScheduled ||
                    ((e.resumeScheduled = !0), i.nextTick(L, t, e));
                })(this, t)),
              (t.paused = !1),
              this
            );
          }),
          (x.prototype.pause = function () {
            return (
              o("call pause flowing=%j", this._readableState.flowing),
              !1 !== this._readableState.flowing &&
                (o("pause"),
                (this._readableState.flowing = !1),
                this.emit("pause")),
              (this._readableState.paused = !0),
              this
            );
          }),
          (x.prototype.wrap = function (t) {
            var e = this,
              n = this._readableState,
              r = !1;
            for (var i in (t.on("end", function () {
              if ((o("wrapped end"), n.decoder && !n.ended)) {
                var t = n.decoder.end();
                t && t.length && e.push(t);
              }
              e.push(null);
            }),
            t.on("data", function (i) {
              o("wrapped data"),
                n.decoder && (i = n.decoder.write(i)),
                (n.objectMode && null == i) ||
                  ((n.objectMode || (i && i.length)) &&
                    (e.push(i) || ((r = !0), t.pause())));
            }),
            t))
              void 0 === this[i] &&
                "function" == typeof t[i] &&
                (this[i] = (function (e) {
                  return function () {
                    return t[e].apply(t, arguments);
                  };
                })(i));
            for (var a = 0; a < S.length; a++)
              t.on(S[a], this.emit.bind(this, S[a]));
            return (
              (this._read = function (e) {
                o("wrapped _read", e), r && ((r = !1), t.resume());
              }),
              this
            );
          }),
          "function" == typeof Symbol &&
            (x.prototype[Symbol.asyncIterator] = function () {
              return void 0 === p && (p = n(5850)), p(this);
            }),
          Object.defineProperty(x.prototype, "readableHighWaterMark", {
            enumerable: !1,
            get: function () {
              return this._readableState.highWaterMark;
            },
          }),
          Object.defineProperty(x.prototype, "readableBuffer", {
            enumerable: !1,
            get: function () {
              return this._readableState && this._readableState.buffer;
            },
          }),
          Object.defineProperty(x.prototype, "readableFlowing", {
            enumerable: !1,
            get: function () {
              return this._readableState.flowing;
            },
            set: function (t) {
              this._readableState && (this._readableState.flowing = t);
            },
          }),
          (x._fromList = U),
          Object.defineProperty(x.prototype, "readableLength", {
            enumerable: !1,
            get: function () {
              return this._readableState.length;
            },
          }),
          "function" == typeof Symbol &&
            (x.from = function (t, e) {
              return void 0 === h && (h = n(5167)), h(x, t, e);
            });
      },
      4605: (t, e, n) => {
        "use strict";
        t.exports = l;
        var r = n(4281).q,
          i = r.ERR_METHOD_NOT_IMPLEMENTED,
          o = r.ERR_MULTIPLE_CALLBACK,
          a = r.ERR_TRANSFORM_ALREADY_TRANSFORMING,
          s = r.ERR_TRANSFORM_WITH_LENGTH_0,
          u = n(6753);
        function c(t, e) {
          var n = this._transformState;
          n.transforming = !1;
          var r = n.writecb;
          if (null === r) return this.emit("error", new o());
          (n.writechunk = null),
            (n.writecb = null),
            null != e && this.push(e),
            r(t);
          var i = this._readableState;
          (i.reading = !1),
            (i.needReadable || i.length < i.highWaterMark) &&
              this._read(i.highWaterMark);
        }
        function l(t) {
          if (!(this instanceof l)) return new l(t);
          u.call(this, t),
            (this._transformState = {
              afterTransform: c.bind(this),
              needTransform: !1,
              transforming: !1,
              writecb: null,
              writechunk: null,
              writeencoding: null,
            }),
            (this._readableState.needReadable = !0),
            (this._readableState.sync = !1),
            t &&
              ("function" == typeof t.transform &&
                (this._transform = t.transform),
              "function" == typeof t.flush && (this._flush = t.flush)),
            this.on("prefinish", f);
        }
        function f() {
          var t = this;
          "function" != typeof this._flush || this._readableState.destroyed
            ? p(this, null, null)
            : this._flush(function (e, n) {
                p(t, e, n);
              });
        }
        function p(t, e, n) {
          if (e) return t.emit("error", e);
          if ((null != n && t.push(n), t._writableState.length)) throw new s();
          if (t._transformState.transforming) throw new a();
          return t.push(null);
        }
        n(5717)(l, u),
          (l.prototype.push = function (t, e) {
            return (
              (this._transformState.needTransform = !1),
              u.prototype.push.call(this, t, e)
            );
          }),
          (l.prototype._transform = function (t, e, n) {
            n(new i("_transform()"));
          }),
          (l.prototype._write = function (t, e, n) {
            var r = this._transformState;
            if (
              ((r.writecb = n),
              (r.writechunk = t),
              (r.writeencoding = e),
              !r.transforming)
            ) {
              var i = this._readableState;
              (r.needTransform ||
                i.needReadable ||
                i.length < i.highWaterMark) &&
                this._read(i.highWaterMark);
            }
          }),
          (l.prototype._read = function (t) {
            var e = this._transformState;
            null === e.writechunk || e.transforming
              ? (e.needTransform = !0)
              : ((e.transforming = !0),
                this._transform(
                  e.writechunk,
                  e.writeencoding,
                  e.afterTransform
                ));
          }),
          (l.prototype._destroy = function (t, e) {
            u.prototype._destroy.call(this, t, function (t) {
              e(t);
            });
          });
      },
      4229: (t, e, n) => {
        "use strict";
        var r,
          i = n(4155);
        function o(t) {
          var e = this;
          (this.next = null),
            (this.entry = null),
            (this.finish = function () {
              !(function (t, e, n) {
                var r = t.entry;
                for (t.entry = null; r; ) {
                  var i = r.callback;
                  e.pendingcb--, i(undefined), (r = r.next);
                }
                e.corkedRequestsFree.next = t;
              })(e, t);
            });
        }
        (t.exports = x), (x.WritableState = T);
        var a,
          s = { deprecate: n(4927) },
          u = n(2503),
          c = n(8764).Buffer,
          l =
            (void 0 !== n.g
              ? n.g
              : "undefined" != typeof window
              ? window
              : "undefined" != typeof self
              ? self
              : {}
            ).Uint8Array || function () {},
          f = n(1195),
          p = n(2457).getHighWaterMark,
          h = n(4281).q,
          d = h.ERR_INVALID_ARG_TYPE,
          g = h.ERR_METHOD_NOT_IMPLEMENTED,
          y = h.ERR_MULTIPLE_CALLBACK,
          v = h.ERR_STREAM_CANNOT_PIPE,
          m = h.ERR_STREAM_DESTROYED,
          b = h.ERR_STREAM_NULL_VALUES,
          w = h.ERR_STREAM_WRITE_AFTER_END,
          _ = h.ERR_UNKNOWN_ENCODING,
          E = f.errorOrDestroy;
        function S() {}
        function T(t, e, a) {
          (r = r || n(6753)),
            (t = t || {}),
            "boolean" != typeof a && (a = e instanceof r),
            (this.objectMode = !!t.objectMode),
            a && (this.objectMode = this.objectMode || !!t.writableObjectMode),
            (this.highWaterMark = p(this, t, "writableHighWaterMark", a)),
            (this.finalCalled = !1),
            (this.needDrain = !1),
            (this.ending = !1),
            (this.ended = !1),
            (this.finished = !1),
            (this.destroyed = !1);
          var s = !1 === t.decodeStrings;
          (this.decodeStrings = !s),
            (this.defaultEncoding = t.defaultEncoding || "utf8"),
            (this.length = 0),
            (this.writing = !1),
            (this.corked = 0),
            (this.sync = !0),
            (this.bufferProcessing = !1),
            (this.onwrite = function (t) {
              !(function (t, e) {
                var n = t._writableState,
                  r = n.sync,
                  o = n.writecb;
                if ("function" != typeof o) throw new y();
                if (
                  ((function (t) {
                    (t.writing = !1),
                      (t.writecb = null),
                      (t.length -= t.writelen),
                      (t.writelen = 0);
                  })(n),
                  e)
                )
                  !(function (t, e, n, r, o) {
                    --e.pendingcb,
                      n
                        ? (i.nextTick(o, r),
                          i.nextTick(P, t, e),
                          (t._writableState.errorEmitted = !0),
                          E(t, r))
                        : (o(r),
                          (t._writableState.errorEmitted = !0),
                          E(t, r),
                          P(t, e));
                  })(t, n, r, e, o);
                else {
                  var a = k(n) || t.destroyed;
                  a ||
                    n.corked ||
                    n.bufferProcessing ||
                    !n.bufferedRequest ||
                    A(t, n),
                    r ? i.nextTick(I, t, n, a, o) : I(t, n, a, o);
                }
              })(e, t);
            }),
            (this.writecb = null),
            (this.writelen = 0),
            (this.bufferedRequest = null),
            (this.lastBufferedRequest = null),
            (this.pendingcb = 0),
            (this.prefinished = !1),
            (this.errorEmitted = !1),
            (this.emitClose = !1 !== t.emitClose),
            (this.autoDestroy = !!t.autoDestroy),
            (this.bufferedRequestCount = 0),
            (this.corkedRequestsFree = new o(this));
        }
        function x(t) {
          var e = this instanceof (r = r || n(6753));
          if (!e && !a.call(x, this)) return new x(t);
          (this._writableState = new T(t, this, e)),
            (this.writable = !0),
            t &&
              ("function" == typeof t.write && (this._write = t.write),
              "function" == typeof t.writev && (this._writev = t.writev),
              "function" == typeof t.destroy && (this._destroy = t.destroy),
              "function" == typeof t.final && (this._final = t.final)),
            u.call(this);
        }
        function O(t, e, n, r, i, o, a) {
          (e.writelen = r),
            (e.writecb = a),
            (e.writing = !0),
            (e.sync = !0),
            e.destroyed
              ? e.onwrite(new m("write"))
              : n
              ? t._writev(i, e.onwrite)
              : t._write(i, o, e.onwrite),
            (e.sync = !1);
        }
        function I(t, e, n, r) {
          n ||
            (function (t, e) {
              0 === e.length &&
                e.needDrain &&
                ((e.needDrain = !1), t.emit("drain"));
            })(t, e),
            e.pendingcb--,
            r(),
            P(t, e);
        }
        function A(t, e) {
          e.bufferProcessing = !0;
          var n = e.bufferedRequest;
          if (t._writev && n && n.next) {
            var r = e.bufferedRequestCount,
              i = new Array(r),
              a = e.corkedRequestsFree;
            a.entry = n;
            for (var s = 0, u = !0; n; )
              (i[s] = n), n.isBuf || (u = !1), (n = n.next), (s += 1);
            (i.allBuffers = u),
              O(t, e, !0, e.length, i, "", a.finish),
              e.pendingcb++,
              (e.lastBufferedRequest = null),
              a.next
                ? ((e.corkedRequestsFree = a.next), (a.next = null))
                : (e.corkedRequestsFree = new o(e)),
              (e.bufferedRequestCount = 0);
          } else {
            for (; n; ) {
              var c = n.chunk,
                l = n.encoding,
                f = n.callback;
              if (
                (O(t, e, !1, e.objectMode ? 1 : c.length, c, l, f),
                (n = n.next),
                e.bufferedRequestCount--,
                e.writing)
              )
                break;
            }
            null === n && (e.lastBufferedRequest = null);
          }
          (e.bufferedRequest = n), (e.bufferProcessing = !1);
        }
        function k(t) {
          return (
            t.ending &&
            0 === t.length &&
            null === t.bufferedRequest &&
            !t.finished &&
            !t.writing
          );
        }
        function R(t, e) {
          t._final(function (n) {
            e.pendingcb--,
              n && E(t, n),
              (e.prefinished = !0),
              t.emit("prefinish"),
              P(t, e);
          });
        }
        function P(t, e) {
          var n = k(e);
          if (
            n &&
            ((function (t, e) {
              e.prefinished ||
                e.finalCalled ||
                ("function" != typeof t._final || e.destroyed
                  ? ((e.prefinished = !0), t.emit("prefinish"))
                  : (e.pendingcb++, (e.finalCalled = !0), i.nextTick(R, t, e)));
            })(t, e),
            0 === e.pendingcb &&
              ((e.finished = !0), t.emit("finish"), e.autoDestroy))
          ) {
            var r = t._readableState;
            (!r || (r.autoDestroy && r.endEmitted)) && t.destroy();
          }
          return n;
        }
        n(5717)(x, u),
          (T.prototype.getBuffer = function () {
            for (var t = this.bufferedRequest, e = []; t; )
              e.push(t), (t = t.next);
            return e;
          }),
          (function () {
            try {
              Object.defineProperty(T.prototype, "buffer", {
                get: s.deprecate(
                  function () {
                    return this.getBuffer();
                  },
                  "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.",
                  "DEP0003"
                ),
              });
            } catch (t) {}
          })(),
          "function" == typeof Symbol &&
          Symbol.hasInstance &&
          "function" == typeof Function.prototype[Symbol.hasInstance]
            ? ((a = Function.prototype[Symbol.hasInstance]),
              Object.defineProperty(x, Symbol.hasInstance, {
                value: function (t) {
                  return (
                    !!a.call(this, t) ||
                    (this === x && t && t._writableState instanceof T)
                  );
                },
              }))
            : (a = function (t) {
                return t instanceof this;
              }),
          (x.prototype.pipe = function () {
            E(this, new v());
          }),
          (x.prototype.write = function (t, e, n) {
            var r,
              o = this._writableState,
              a = !1,
              s = !o.objectMode && ((r = t), c.isBuffer(r) || r instanceof l);
            return (
              s &&
                !c.isBuffer(t) &&
                (t = (function (t) {
                  return c.from(t);
                })(t)),
              "function" == typeof e && ((n = e), (e = null)),
              s ? (e = "buffer") : e || (e = o.defaultEncoding),
              "function" != typeof n && (n = S),
              o.ending
                ? (function (t, e) {
                    var n = new w();
                    E(t, n), i.nextTick(e, n);
                  })(this, n)
                : (s ||
                    (function (t, e, n, r) {
                      var o;
                      return (
                        null === n
                          ? (o = new b())
                          : "string" == typeof n ||
                            e.objectMode ||
                            (o = new d("chunk", ["string", "Buffer"], n)),
                        !o || (E(t, o), i.nextTick(r, o), !1)
                      );
                    })(this, o, t, n)) &&
                  (o.pendingcb++,
                  (a = (function (t, e, n, r, i, o) {
                    if (!n) {
                      var a = (function (t, e, n) {
                        return (
                          t.objectMode ||
                            !1 === t.decodeStrings ||
                            "string" != typeof e ||
                            (e = c.from(e, n)),
                          e
                        );
                      })(e, r, i);
                      r !== a && ((n = !0), (i = "buffer"), (r = a));
                    }
                    var s = e.objectMode ? 1 : r.length;
                    e.length += s;
                    var u = e.length < e.highWaterMark;
                    if ((u || (e.needDrain = !0), e.writing || e.corked)) {
                      var l = e.lastBufferedRequest;
                      (e.lastBufferedRequest = {
                        chunk: r,
                        encoding: i,
                        isBuf: n,
                        callback: o,
                        next: null,
                      }),
                        l
                          ? (l.next = e.lastBufferedRequest)
                          : (e.bufferedRequest = e.lastBufferedRequest),
                        (e.bufferedRequestCount += 1);
                    } else O(t, e, !1, s, r, i, o);
                    return u;
                  })(this, o, s, t, e, n))),
              a
            );
          }),
          (x.prototype.cork = function () {
            this._writableState.corked++;
          }),
          (x.prototype.uncork = function () {
            var t = this._writableState;
            t.corked &&
              (t.corked--,
              t.writing ||
                t.corked ||
                t.bufferProcessing ||
                !t.bufferedRequest ||
                A(this, t));
          }),
          (x.prototype.setDefaultEncoding = function (t) {
            if (
              ("string" == typeof t && (t = t.toLowerCase()),
              !(
                [
                  "hex",
                  "utf8",
                  "utf-8",
                  "ascii",
                  "binary",
                  "base64",
                  "ucs2",
                  "ucs-2",
                  "utf16le",
                  "utf-16le",
                  "raw",
                ].indexOf((t + "").toLowerCase()) > -1
              ))
            )
              throw new _(t);
            return (this._writableState.defaultEncoding = t), this;
          }),
          Object.defineProperty(x.prototype, "writableBuffer", {
            enumerable: !1,
            get: function () {
              return this._writableState && this._writableState.getBuffer();
            },
          }),
          Object.defineProperty(x.prototype, "writableHighWaterMark", {
            enumerable: !1,
            get: function () {
              return this._writableState.highWaterMark;
            },
          }),
          (x.prototype._write = function (t, e, n) {
            n(new g("_write()"));
          }),
          (x.prototype._writev = null),
          (x.prototype.end = function (t, e, n) {
            var r = this._writableState;
            return (
              "function" == typeof t
                ? ((n = t), (t = null), (e = null))
                : "function" == typeof e && ((n = e), (e = null)),
              null != t && this.write(t, e),
              r.corked && ((r.corked = 1), this.uncork()),
              r.ending ||
                (function (t, e, n) {
                  (e.ending = !0),
                    P(t, e),
                    n && (e.finished ? i.nextTick(n) : t.once("finish", n)),
                    (e.ended = !0),
                    (t.writable = !1);
                })(this, r, n),
              this
            );
          }),
          Object.defineProperty(x.prototype, "writableLength", {
            enumerable: !1,
            get: function () {
              return this._writableState.length;
            },
          }),
          Object.defineProperty(x.prototype, "destroyed", {
            enumerable: !1,
            get: function () {
              return (
                void 0 !== this._writableState && this._writableState.destroyed
              );
            },
            set: function (t) {
              this._writableState && (this._writableState.destroyed = t);
            },
          }),
          (x.prototype.destroy = f.destroy),
          (x.prototype._undestroy = f.undestroy),
          (x.prototype._destroy = function (t, e) {
            e(t);
          });
      },
      5850: (t, e, n) => {
        "use strict";
        var r,
          i = n(4155);
        function o(t, e, n) {
          return (
            (e = (function (t) {
              var e = (function (t, e) {
                if ("object" != typeof t || null === t) return t;
                var n = t[Symbol.toPrimitive];
                if (void 0 !== n) {
                  var r = n.call(t, "string");
                  if ("object" != typeof r) return r;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value."
                  );
                }
                return String(t);
              })(t);
              return "symbol" == typeof e ? e : String(e);
            })(e)) in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        var a = n(8610),
          s = Symbol("lastResolve"),
          u = Symbol("lastReject"),
          c = Symbol("error"),
          l = Symbol("ended"),
          f = Symbol("lastPromise"),
          p = Symbol("handlePromise"),
          h = Symbol("stream");
        function d(t, e) {
          return { value: t, done: e };
        }
        function g(t) {
          var e = t[s];
          if (null !== e) {
            var n = t[h].read();
            null !== n &&
              ((t[f] = null), (t[s] = null), (t[u] = null), e(d(n, !1)));
          }
        }
        function y(t) {
          i.nextTick(g, t);
        }
        var v = Object.getPrototypeOf(function () {}),
          m = Object.setPrototypeOf(
            (o(
              (r = {
                get stream() {
                  return this[h];
                },
                next: function () {
                  var t = this,
                    e = this[c];
                  if (null !== e) return Promise.reject(e);
                  if (this[l]) return Promise.resolve(d(void 0, !0));
                  if (this[h].destroyed)
                    return new Promise(function (e, n) {
                      i.nextTick(function () {
                        t[c] ? n(t[c]) : e(d(void 0, !0));
                      });
                    });
                  var n,
                    r = this[f];
                  if (r)
                    n = new Promise(
                      (function (t, e) {
                        return function (n, r) {
                          t.then(function () {
                            e[l] ? n(d(void 0, !0)) : e[p](n, r);
                          }, r);
                        };
                      })(r, this)
                    );
                  else {
                    var o = this[h].read();
                    if (null !== o) return Promise.resolve(d(o, !1));
                    n = new Promise(this[p]);
                  }
                  return (this[f] = n), n;
                },
              }),
              Symbol.asyncIterator,
              function () {
                return this;
              }
            ),
            o(r, "return", function () {
              var t = this;
              return new Promise(function (e, n) {
                t[h].destroy(null, function (t) {
                  t ? n(t) : e(d(void 0, !0));
                });
              });
            }),
            r),
            v
          );
        t.exports = function (t) {
          var e,
            n = Object.create(
              m,
              (o((e = {}), h, { value: t, writable: !0 }),
              o(e, s, { value: null, writable: !0 }),
              o(e, u, { value: null, writable: !0 }),
              o(e, c, { value: null, writable: !0 }),
              o(e, l, { value: t._readableState.endEmitted, writable: !0 }),
              o(e, p, {
                value: function (t, e) {
                  var r = n[h].read();
                  r
                    ? ((n[f] = null), (n[s] = null), (n[u] = null), t(d(r, !1)))
                    : ((n[s] = t), (n[u] = e));
                },
                writable: !0,
              }),
              e)
            );
          return (
            (n[f] = null),
            a(t, function (t) {
              if (t && "ERR_STREAM_PREMATURE_CLOSE" !== t.code) {
                var e = n[u];
                return (
                  null !== e &&
                    ((n[f] = null), (n[s] = null), (n[u] = null), e(t)),
                  void (n[c] = t)
                );
              }
              var r = n[s];
              null !== r &&
                ((n[f] = null), (n[s] = null), (n[u] = null), r(d(void 0, !0))),
                (n[l] = !0);
            }),
            t.on("readable", y.bind(null, n)),
            n
          );
        };
      },
      7327: (t, e, n) => {
        "use strict";
        function r(t, e) {
          var n = Object.keys(t);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e &&
              (r = r.filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function i(t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? r(Object(n), !0).forEach(function (e) {
                  o(t, e, n[e]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
              : r(Object(n)).forEach(function (e) {
                  Object.defineProperty(
                    t,
                    e,
                    Object.getOwnPropertyDescriptor(n, e)
                  );
                });
          }
          return t;
        }
        function o(t, e, n) {
          return (
            (e = s(e)) in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        function a(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, s(r.key), r);
          }
        }
        function s(t) {
          var e = (function (t, e) {
            if ("object" != typeof t || null === t) return t;
            var n = t[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(t, "string");
              if ("object" != typeof r) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return String(t);
          })(t);
          return "symbol" == typeof e ? e : String(e);
        }
        var u = n(8764).Buffer,
          c = n(2361).inspect,
          l = (c && c.custom) || "inspect";
        t.exports = (function () {
          function t() {
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
              (this.head = null),
              (this.tail = null),
              (this.length = 0);
          }
          var e, n;
          return (
            (e = t),
            (n = [
              {
                key: "push",
                value: function (t) {
                  var e = { data: t, next: null };
                  this.length > 0 ? (this.tail.next = e) : (this.head = e),
                    (this.tail = e),
                    ++this.length;
                },
              },
              {
                key: "unshift",
                value: function (t) {
                  var e = { data: t, next: this.head };
                  0 === this.length && (this.tail = e),
                    (this.head = e),
                    ++this.length;
                },
              },
              {
                key: "shift",
                value: function () {
                  if (0 !== this.length) {
                    var t = this.head.data;
                    return (
                      1 === this.length
                        ? (this.head = this.tail = null)
                        : (this.head = this.head.next),
                      --this.length,
                      t
                    );
                  }
                },
              },
              {
                key: "clear",
                value: function () {
                  (this.head = this.tail = null), (this.length = 0);
                },
              },
              {
                key: "join",
                value: function (t) {
                  if (0 === this.length) return "";
                  for (var e = this.head, n = "" + e.data; (e = e.next); )
                    n += t + e.data;
                  return n;
                },
              },
              {
                key: "concat",
                value: function (t) {
                  if (0 === this.length) return u.alloc(0);
                  for (
                    var e,
                      n,
                      r,
                      i = u.allocUnsafe(t >>> 0),
                      o = this.head,
                      a = 0;
                    o;

                  )
                    (e = o.data),
                      (n = i),
                      (r = a),
                      u.prototype.copy.call(e, n, r),
                      (a += o.data.length),
                      (o = o.next);
                  return i;
                },
              },
              {
                key: "consume",
                value: function (t, e) {
                  var n;
                  return (
                    t < this.head.data.length
                      ? ((n = this.head.data.slice(0, t)),
                        (this.head.data = this.head.data.slice(t)))
                      : (n =
                          t === this.head.data.length
                            ? this.shift()
                            : e
                            ? this._getString(t)
                            : this._getBuffer(t)),
                    n
                  );
                },
              },
              {
                key: "first",
                value: function () {
                  return this.head.data;
                },
              },
              {
                key: "_getString",
                value: function (t) {
                  var e = this.head,
                    n = 1,
                    r = e.data;
                  for (t -= r.length; (e = e.next); ) {
                    var i = e.data,
                      o = t > i.length ? i.length : t;
                    if (
                      (o === i.length ? (r += i) : (r += i.slice(0, t)),
                      0 == (t -= o))
                    ) {
                      o === i.length
                        ? (++n,
                          e.next
                            ? (this.head = e.next)
                            : (this.head = this.tail = null))
                        : ((this.head = e), (e.data = i.slice(o)));
                      break;
                    }
                    ++n;
                  }
                  return (this.length -= n), r;
                },
              },
              {
                key: "_getBuffer",
                value: function (t) {
                  var e = u.allocUnsafe(t),
                    n = this.head,
                    r = 1;
                  for (n.data.copy(e), t -= n.data.length; (n = n.next); ) {
                    var i = n.data,
                      o = t > i.length ? i.length : t;
                    if ((i.copy(e, e.length - t, 0, o), 0 == (t -= o))) {
                      o === i.length
                        ? (++r,
                          n.next
                            ? (this.head = n.next)
                            : (this.head = this.tail = null))
                        : ((this.head = n), (n.data = i.slice(o)));
                      break;
                    }
                    ++r;
                  }
                  return (this.length -= r), e;
                },
              },
              {
                key: l,
                value: function (t, e) {
                  return c(
                    this,
                    i(i({}, e), {}, { depth: 0, customInspect: !1 })
                  );
                },
              },
            ]) && a(e.prototype, n),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t
          );
        })();
      },
      1195: (t, e, n) => {
        "use strict";
        var r = n(4155);
        function i(t, e) {
          a(t, e), o(t);
        }
        function o(t) {
          (t._writableState && !t._writableState.emitClose) ||
            (t._readableState && !t._readableState.emitClose) ||
            t.emit("close");
        }
        function a(t, e) {
          t.emit("error", e);
        }
        t.exports = {
          destroy: function (t, e) {
            var n = this,
              s = this._readableState && this._readableState.destroyed,
              u = this._writableState && this._writableState.destroyed;
            return s || u
              ? (e
                  ? e(t)
                  : t &&
                    (this._writableState
                      ? this._writableState.errorEmitted ||
                        ((this._writableState.errorEmitted = !0),
                        r.nextTick(a, this, t))
                      : r.nextTick(a, this, t)),
                this)
              : (this._readableState && (this._readableState.destroyed = !0),
                this._writableState && (this._writableState.destroyed = !0),
                this._destroy(t || null, function (t) {
                  !e && t
                    ? n._writableState
                      ? n._writableState.errorEmitted
                        ? r.nextTick(o, n)
                        : ((n._writableState.errorEmitted = !0),
                          r.nextTick(i, n, t))
                      : r.nextTick(i, n, t)
                    : e
                    ? (r.nextTick(o, n), e(t))
                    : r.nextTick(o, n);
                }),
                this);
          },
          undestroy: function () {
            this._readableState &&
              ((this._readableState.destroyed = !1),
              (this._readableState.reading = !1),
              (this._readableState.ended = !1),
              (this._readableState.endEmitted = !1)),
              this._writableState &&
                ((this._writableState.destroyed = !1),
                (this._writableState.ended = !1),
                (this._writableState.ending = !1),
                (this._writableState.finalCalled = !1),
                (this._writableState.prefinished = !1),
                (this._writableState.finished = !1),
                (this._writableState.errorEmitted = !1));
          },
          errorOrDestroy: function (t, e) {
            var n = t._readableState,
              r = t._writableState;
            (n && n.autoDestroy) || (r && r.autoDestroy)
              ? t.destroy(e)
              : t.emit("error", e);
          },
        };
      },
      8610: (t, e, n) => {
        "use strict";
        var r = n(4281).q.ERR_STREAM_PREMATURE_CLOSE;
        function i() {}
        t.exports = function t(e, n, o) {
          if ("function" == typeof n) return t(e, null, n);
          n || (n = {}),
            (o = (function (t) {
              var e = !1;
              return function () {
                if (!e) {
                  e = !0;
                  for (
                    var n = arguments.length, r = new Array(n), i = 0;
                    i < n;
                    i++
                  )
                    r[i] = arguments[i];
                  t.apply(this, r);
                }
              };
            })(o || i));
          var a = n.readable || (!1 !== n.readable && e.readable),
            s = n.writable || (!1 !== n.writable && e.writable),
            u = function () {
              e.writable || l();
            },
            c = e._writableState && e._writableState.finished,
            l = function () {
              (s = !1), (c = !0), a || o.call(e);
            },
            f = e._readableState && e._readableState.endEmitted,
            p = function () {
              (a = !1), (f = !0), s || o.call(e);
            },
            h = function (t) {
              o.call(e, t);
            },
            d = function () {
              var t;
              return a && !f
                ? ((e._readableState && e._readableState.ended) ||
                    (t = new r()),
                  o.call(e, t))
                : s && !c
                ? ((e._writableState && e._writableState.ended) ||
                    (t = new r()),
                  o.call(e, t))
                : void 0;
            },
            g = function () {
              e.req.on("finish", l);
            };
          return (
            (function (t) {
              return t.setHeader && "function" == typeof t.abort;
            })(e)
              ? (e.on("complete", l),
                e.on("abort", d),
                e.req ? g() : e.on("request", g))
              : s && !e._writableState && (e.on("end", u), e.on("close", u)),
            e.on("end", p),
            e.on("finish", l),
            !1 !== n.error && e.on("error", h),
            e.on("close", d),
            function () {
              e.removeListener("complete", l),
                e.removeListener("abort", d),
                e.removeListener("request", g),
                e.req && e.req.removeListener("finish", l),
                e.removeListener("end", u),
                e.removeListener("close", u),
                e.removeListener("finish", l),
                e.removeListener("end", p),
                e.removeListener("error", h),
                e.removeListener("close", d);
            }
          );
        };
      },
      5167: (t) => {
        t.exports = function () {
          throw new Error("Readable.from is not available in the browser");
        };
      },
      9946: (t, e, n) => {
        "use strict";
        var r,
          i = n(4281).q,
          o = i.ERR_MISSING_ARGS,
          a = i.ERR_STREAM_DESTROYED;
        function s(t) {
          if (t) throw t;
        }
        function u(t) {
          t();
        }
        function c(t, e) {
          return t.pipe(e);
        }
        t.exports = function () {
          for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
            e[i] = arguments[i];
          var l,
            f = (function (t) {
              return t.length
                ? "function" != typeof t[t.length - 1]
                  ? s
                  : t.pop()
                : s;
            })(e);
          if ((Array.isArray(e[0]) && (e = e[0]), e.length < 2))
            throw new o("streams");
          var p = e.map(function (t, i) {
            var o = i < e.length - 1;
            return (function (t, e, i, o) {
              o = (function (t) {
                var e = !1;
                return function () {
                  e || ((e = !0), t.apply(void 0, arguments));
                };
              })(o);
              var s = !1;
              t.on("close", function () {
                s = !0;
              }),
                void 0 === r && (r = n(8610)),
                r(t, { readable: e, writable: i }, function (t) {
                  if (t) return o(t);
                  (s = !0), o();
                });
              var u = !1;
              return function (e) {
                if (!s && !u)
                  return (
                    (u = !0),
                    (function (t) {
                      return t.setHeader && "function" == typeof t.abort;
                    })(t)
                      ? t.abort()
                      : "function" == typeof t.destroy
                      ? t.destroy()
                      : void o(e || new a("pipe"))
                  );
              };
            })(t, o, i > 0, function (t) {
              l || (l = t), t && p.forEach(u), o || (p.forEach(u), f(l));
            });
          });
          return e.reduce(c);
        };
      },
      2457: (t, e, n) => {
        "use strict";
        var r = n(4281).q.ERR_INVALID_OPT_VALUE;
        t.exports = {
          getHighWaterMark: function (t, e, n, i) {
            var o = (function (t, e, n) {
              return null != t.highWaterMark
                ? t.highWaterMark
                : e
                ? t[n]
                : null;
            })(e, i, n);
            if (null != o) {
              if (!isFinite(o) || Math.floor(o) !== o || o < 0)
                throw new r(i ? n : "highWaterMark", o);
              return Math.floor(o);
            }
            return t.objectMode ? 16 : 16384;
          },
        };
      },
      2503: (t, e, n) => {
        t.exports = n(7187).EventEmitter;
      },
      8473: (t, e, n) => {
        ((e = t.exports = n(9481)).Stream = e),
          (e.Readable = e),
          (e.Writable = n(4229)),
          (e.Duplex = n(6753)),
          (e.Transform = n(4605)),
          (e.PassThrough = n(2725)),
          (e.finished = n(8610)),
          (e.pipeline = n(9946));
      },
      9509: (t, e, n) => {
        var r = n(8764),
          i = r.Buffer;
        function o(t, e) {
          for (var n in t) e[n] = t[n];
        }
        function a(t, e, n) {
          return i(t, e, n);
        }
        i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow
          ? (t.exports = r)
          : (o(r, e), (e.Buffer = a)),
          (a.prototype = Object.create(i.prototype)),
          o(i, a),
          (a.from = function (t, e, n) {
            if ("number" == typeof t)
              throw new TypeError("Argument must not be a number");
            return i(t, e, n);
          }),
          (a.alloc = function (t, e, n) {
            if ("number" != typeof t)
              throw new TypeError("Argument must be a number");
            var r = i(t);
            return (
              void 0 !== e
                ? "string" == typeof n
                  ? r.fill(e, n)
                  : r.fill(e)
                : r.fill(0),
              r
            );
          }),
          (a.allocUnsafe = function (t) {
            if ("number" != typeof t)
              throw new TypeError("Argument must be a number");
            return i(t);
          }),
          (a.allocUnsafeSlow = function (t) {
            if ("number" != typeof t)
              throw new TypeError("Argument must be a number");
            return r.SlowBuffer(t);
          });
      },
      6099: (t, e, n) => {
        var r = n(8764).Buffer;
        !(function (t) {
          (t.parser = function (t, e) {
            return new o(t, e);
          }),
            (t.SAXParser = o),
            (t.SAXStream = s),
            (t.createStream = function (t, e) {
              return new s(t, e);
            }),
            (t.MAX_BUFFER_LENGTH = 65536);
          var e,
            i = [
              "comment",
              "sgmlDecl",
              "textNode",
              "tagName",
              "doctype",
              "procInstName",
              "procInstBody",
              "entity",
              "attribName",
              "attribValue",
              "cdata",
              "script",
            ];
          function o(e, n) {
            if (!(this instanceof o)) return new o(e, n);
            var r = this;
            !(function (t) {
              for (var e = 0, n = i.length; e < n; e++) t[i[e]] = "";
            })(r),
              (r.q = r.c = ""),
              (r.bufferCheckPosition = t.MAX_BUFFER_LENGTH),
              (r.opt = n || {}),
              (r.opt.lowercase = r.opt.lowercase || r.opt.lowercasetags),
              (r.looseCase = r.opt.lowercase ? "toLowerCase" : "toUpperCase"),
              (r.tags = []),
              (r.closed = r.closedRoot = r.sawRoot = !1),
              (r.tag = r.error = null),
              (r.strict = !!e),
              (r.noscript = !(!e && !r.opt.noscript)),
              (r.state = x.BEGIN),
              (r.strictEntities = r.opt.strictEntities),
              (r.ENTITIES = r.strictEntities
                ? Object.create(t.XML_ENTITIES)
                : Object.create(t.ENTITIES)),
              (r.attribList = []),
              r.opt.xmlns && (r.ns = Object.create(p)),
              (r.trackPosition = !1 !== r.opt.position),
              r.trackPosition && (r.position = r.line = r.column = 0),
              I(r, "onready");
          }
          (t.EVENTS = [
            "text",
            "processinginstruction",
            "sgmldeclaration",
            "doctype",
            "comment",
            "opentagstart",
            "attribute",
            "opentag",
            "closetag",
            "opencdata",
            "cdata",
            "closecdata",
            "error",
            "end",
            "ready",
            "script",
            "opennamespace",
            "closenamespace",
          ]),
            Object.create ||
              (Object.create = function (t) {
                function e() {}
                return (e.prototype = t), new e();
              }),
            Object.keys ||
              (Object.keys = function (t) {
                var e = [];
                for (var n in t) t.hasOwnProperty(n) && e.push(n);
                return e;
              }),
            (o.prototype = {
              end: function () {
                N(this);
              },
              write: function (e) {
                var n = this;
                if (this.error) throw this.error;
                if (n.closed)
                  return P(
                    n,
                    "Cannot write after close. Assign an onready handler."
                  );
                if (null === e) return N(n);
                "object" == typeof e && (e = e.toString());
                for (var r = 0, o = ""; (o = q(e, r++)), (n.c = o), o; )
                  switch (
                    (n.trackPosition &&
                      (n.position++,
                      "\n" === o ? (n.line++, (n.column = 0)) : n.column++),
                    n.state)
                  ) {
                    case x.BEGIN:
                      if (((n.state = x.BEGIN_WHITESPACE), "\ufeff" === o))
                        continue;
                      F(n, o);
                      continue;
                    case x.BEGIN_WHITESPACE:
                      F(n, o);
                      continue;
                    case x.TEXT:
                      if (n.sawRoot && !n.closedRoot) {
                        for (var a = r - 1; o && "<" !== o && "&" !== o; )
                          (o = q(e, r++)) &&
                            n.trackPosition &&
                            (n.position++,
                            "\n" === o
                              ? (n.line++, (n.column = 0))
                              : n.column++);
                        n.textNode += e.substring(a, r - 1);
                      }
                      "<" !== o || (n.sawRoot && n.closedRoot && !n.strict)
                        ? (v(o) ||
                            (n.sawRoot && !n.closedRoot) ||
                            C(n, "Text data outside of root node."),
                          "&" === o
                            ? (n.state = x.TEXT_ENTITY)
                            : (n.textNode += o))
                        : ((n.state = x.OPEN_WAKA),
                          (n.startTagPosition = n.position));
                      continue;
                    case x.SCRIPT:
                      "<" === o ? (n.state = x.SCRIPT_ENDING) : (n.script += o);
                      continue;
                    case x.SCRIPT_ENDING:
                      "/" === o
                        ? (n.state = x.CLOSE_TAG)
                        : ((n.script += "<" + o), (n.state = x.SCRIPT));
                      continue;
                    case x.OPEN_WAKA:
                      if ("!" === o) (n.state = x.SGML_DECL), (n.sgmlDecl = "");
                      else if (v(o));
                      else if (w(h, o)) (n.state = x.OPEN_TAG), (n.tagName = o);
                      else if ("/" === o)
                        (n.state = x.CLOSE_TAG), (n.tagName = "");
                      else if ("?" === o)
                        (n.state = x.PROC_INST),
                          (n.procInstName = n.procInstBody = "");
                      else {
                        if (
                          (C(n, "Unencoded <"),
                          n.startTagPosition + 1 < n.position)
                        ) {
                          var s = n.position - n.startTagPosition;
                          o = new Array(s).join(" ") + o;
                        }
                        (n.textNode += "<" + o), (n.state = x.TEXT);
                      }
                      continue;
                    case x.SGML_DECL:
                      (n.sgmlDecl + o).toUpperCase() === u
                        ? (A(n, "onopencdata"),
                          (n.state = x.CDATA),
                          (n.sgmlDecl = ""),
                          (n.cdata = ""))
                        : n.sgmlDecl + o === "--"
                        ? ((n.state = x.COMMENT),
                          (n.comment = ""),
                          (n.sgmlDecl = ""))
                        : (n.sgmlDecl + o).toUpperCase() === c
                        ? ((n.state = x.DOCTYPE),
                          (n.doctype || n.sawRoot) &&
                            C(n, "Inappropriately located doctype declaration"),
                          (n.doctype = ""),
                          (n.sgmlDecl = ""))
                        : ">" === o
                        ? (A(n, "onsgmldeclaration", n.sgmlDecl),
                          (n.sgmlDecl = ""),
                          (n.state = x.TEXT))
                        : m(o)
                        ? ((n.state = x.SGML_DECL_QUOTED), (n.sgmlDecl += o))
                        : (n.sgmlDecl += o);
                      continue;
                    case x.SGML_DECL_QUOTED:
                      o === n.q && ((n.state = x.SGML_DECL), (n.q = "")),
                        (n.sgmlDecl += o);
                      continue;
                    case x.DOCTYPE:
                      ">" === o
                        ? ((n.state = x.TEXT),
                          A(n, "ondoctype", n.doctype),
                          (n.doctype = !0))
                        : ((n.doctype += o),
                          "[" === o
                            ? (n.state = x.DOCTYPE_DTD)
                            : m(o) &&
                              ((n.state = x.DOCTYPE_QUOTED), (n.q = o)));
                      continue;
                    case x.DOCTYPE_QUOTED:
                      (n.doctype += o),
                        o === n.q && ((n.q = ""), (n.state = x.DOCTYPE));
                      continue;
                    case x.DOCTYPE_DTD:
                      (n.doctype += o),
                        "]" === o
                          ? (n.state = x.DOCTYPE)
                          : m(o) &&
                            ((n.state = x.DOCTYPE_DTD_QUOTED), (n.q = o));
                      continue;
                    case x.DOCTYPE_DTD_QUOTED:
                      (n.doctype += o),
                        o === n.q && ((n.state = x.DOCTYPE_DTD), (n.q = ""));
                      continue;
                    case x.COMMENT:
                      "-" === o
                        ? (n.state = x.COMMENT_ENDING)
                        : (n.comment += o);
                      continue;
                    case x.COMMENT_ENDING:
                      "-" === o
                        ? ((n.state = x.COMMENT_ENDED),
                          (n.comment = R(n.opt, n.comment)),
                          n.comment && A(n, "oncomment", n.comment),
                          (n.comment = ""))
                        : ((n.comment += "-" + o), (n.state = x.COMMENT));
                      continue;
                    case x.COMMENT_ENDED:
                      ">" !== o
                        ? (C(n, "Malformed comment"),
                          (n.comment += "--" + o),
                          (n.state = x.COMMENT))
                        : (n.state = x.TEXT);
                      continue;
                    case x.CDATA:
                      "]" === o ? (n.state = x.CDATA_ENDING) : (n.cdata += o);
                      continue;
                    case x.CDATA_ENDING:
                      "]" === o
                        ? (n.state = x.CDATA_ENDING_2)
                        : ((n.cdata += "]" + o), (n.state = x.CDATA));
                      continue;
                    case x.CDATA_ENDING_2:
                      ">" === o
                        ? (n.cdata && A(n, "oncdata", n.cdata),
                          A(n, "onclosecdata"),
                          (n.cdata = ""),
                          (n.state = x.TEXT))
                        : "]" === o
                        ? (n.cdata += "]")
                        : ((n.cdata += "]]" + o), (n.state = x.CDATA));
                      continue;
                    case x.PROC_INST:
                      "?" === o
                        ? (n.state = x.PROC_INST_ENDING)
                        : v(o)
                        ? (n.state = x.PROC_INST_BODY)
                        : (n.procInstName += o);
                      continue;
                    case x.PROC_INST_BODY:
                      if (!n.procInstBody && v(o)) continue;
                      "?" === o
                        ? (n.state = x.PROC_INST_ENDING)
                        : (n.procInstBody += o);
                      continue;
                    case x.PROC_INST_ENDING:
                      ">" === o
                        ? (A(n, "onprocessinginstruction", {
                            name: n.procInstName,
                            body: n.procInstBody,
                          }),
                          (n.procInstName = n.procInstBody = ""),
                          (n.state = x.TEXT))
                        : ((n.procInstBody += "?" + o),
                          (n.state = x.PROC_INST_BODY));
                      continue;
                    case x.OPEN_TAG:
                      w(d, o)
                        ? (n.tagName += o)
                        : (D(n),
                          ">" === o
                            ? M(n)
                            : "/" === o
                            ? (n.state = x.OPEN_TAG_SLASH)
                            : (v(o) || C(n, "Invalid character in tag name"),
                              (n.state = x.ATTRIB)));
                      continue;
                    case x.OPEN_TAG_SLASH:
                      ">" === o
                        ? (M(n, !0), U(n))
                        : (C(
                            n,
                            "Forward-slash in opening tag not followed by >"
                          ),
                          (n.state = x.ATTRIB));
                      continue;
                    case x.ATTRIB:
                      if (v(o)) continue;
                      ">" === o
                        ? M(n)
                        : "/" === o
                        ? (n.state = x.OPEN_TAG_SLASH)
                        : w(h, o)
                        ? ((n.attribName = o),
                          (n.attribValue = ""),
                          (n.state = x.ATTRIB_NAME))
                        : C(n, "Invalid attribute name");
                      continue;
                    case x.ATTRIB_NAME:
                      "=" === o
                        ? (n.state = x.ATTRIB_VALUE)
                        : ">" === o
                        ? (C(n, "Attribute without value"),
                          (n.attribValue = n.attribName),
                          L(n),
                          M(n))
                        : v(o)
                        ? (n.state = x.ATTRIB_NAME_SAW_WHITE)
                        : w(d, o)
                        ? (n.attribName += o)
                        : C(n, "Invalid attribute name");
                      continue;
                    case x.ATTRIB_NAME_SAW_WHITE:
                      if ("=" === o) n.state = x.ATTRIB_VALUE;
                      else {
                        if (v(o)) continue;
                        C(n, "Attribute without value"),
                          (n.tag.attributes[n.attribName] = ""),
                          (n.attribValue = ""),
                          A(n, "onattribute", {
                            name: n.attribName,
                            value: "",
                          }),
                          (n.attribName = ""),
                          ">" === o
                            ? M(n)
                            : w(h, o)
                            ? ((n.attribName = o), (n.state = x.ATTRIB_NAME))
                            : (C(n, "Invalid attribute name"),
                              (n.state = x.ATTRIB));
                      }
                      continue;
                    case x.ATTRIB_VALUE:
                      if (v(o)) continue;
                      m(o)
                        ? ((n.q = o), (n.state = x.ATTRIB_VALUE_QUOTED))
                        : (C(n, "Unquoted attribute value"),
                          (n.state = x.ATTRIB_VALUE_UNQUOTED),
                          (n.attribValue = o));
                      continue;
                    case x.ATTRIB_VALUE_QUOTED:
                      if (o !== n.q) {
                        "&" === o
                          ? (n.state = x.ATTRIB_VALUE_ENTITY_Q)
                          : (n.attribValue += o);
                        continue;
                      }
                      L(n), (n.q = ""), (n.state = x.ATTRIB_VALUE_CLOSED);
                      continue;
                    case x.ATTRIB_VALUE_CLOSED:
                      v(o)
                        ? (n.state = x.ATTRIB)
                        : ">" === o
                        ? M(n)
                        : "/" === o
                        ? (n.state = x.OPEN_TAG_SLASH)
                        : w(h, o)
                        ? (C(n, "No whitespace between attributes"),
                          (n.attribName = o),
                          (n.attribValue = ""),
                          (n.state = x.ATTRIB_NAME))
                        : C(n, "Invalid attribute name");
                      continue;
                    case x.ATTRIB_VALUE_UNQUOTED:
                      if (!b(o)) {
                        "&" === o
                          ? (n.state = x.ATTRIB_VALUE_ENTITY_U)
                          : (n.attribValue += o);
                        continue;
                      }
                      L(n), ">" === o ? M(n) : (n.state = x.ATTRIB);
                      continue;
                    case x.CLOSE_TAG:
                      if (n.tagName)
                        ">" === o
                          ? U(n)
                          : w(d, o)
                          ? (n.tagName += o)
                          : n.script
                          ? ((n.script += "</" + n.tagName),
                            (n.tagName = ""),
                            (n.state = x.SCRIPT))
                          : (v(o) || C(n, "Invalid tagname in closing tag"),
                            (n.state = x.CLOSE_TAG_SAW_WHITE));
                      else {
                        if (v(o)) continue;
                        _(h, o)
                          ? n.script
                            ? ((n.script += "</" + o), (n.state = x.SCRIPT))
                            : C(n, "Invalid tagname in closing tag.")
                          : (n.tagName = o);
                      }
                      continue;
                    case x.CLOSE_TAG_SAW_WHITE:
                      if (v(o)) continue;
                      ">" === o
                        ? U(n)
                        : C(n, "Invalid characters in closing tag");
                      continue;
                    case x.TEXT_ENTITY:
                    case x.ATTRIB_VALUE_ENTITY_Q:
                    case x.ATTRIB_VALUE_ENTITY_U:
                      var l, f;
                      switch (n.state) {
                        case x.TEXT_ENTITY:
                          (l = x.TEXT), (f = "textNode");
                          break;
                        case x.ATTRIB_VALUE_ENTITY_Q:
                          (l = x.ATTRIB_VALUE_QUOTED), (f = "attribValue");
                          break;
                        case x.ATTRIB_VALUE_ENTITY_U:
                          (l = x.ATTRIB_VALUE_UNQUOTED), (f = "attribValue");
                      }
                      ";" === o
                        ? ((n[f] += B(n)), (n.entity = ""), (n.state = l))
                        : w(n.entity.length ? y : g, o)
                        ? (n.entity += o)
                        : (C(n, "Invalid character in entity name"),
                          (n[f] += "&" + n.entity + o),
                          (n.entity = ""),
                          (n.state = l));
                      continue;
                    default:
                      throw new Error(n, "Unknown state: " + n.state);
                  }
                return (
                  n.position >= n.bufferCheckPosition &&
                    (function (e) {
                      for (
                        var n = Math.max(t.MAX_BUFFER_LENGTH, 10),
                          r = 0,
                          o = 0,
                          a = i.length;
                        o < a;
                        o++
                      ) {
                        var s = e[i[o]].length;
                        if (s > n)
                          switch (i[o]) {
                            case "textNode":
                              k(e);
                              break;
                            case "cdata":
                              A(e, "oncdata", e.cdata), (e.cdata = "");
                              break;
                            case "script":
                              A(e, "onscript", e.script), (e.script = "");
                              break;
                            default:
                              P(e, "Max buffer length exceeded: " + i[o]);
                          }
                        r = Math.max(r, s);
                      }
                      var u = t.MAX_BUFFER_LENGTH - r;
                      e.bufferCheckPosition = u + e.position;
                    })(n),
                  n
                );
              },
              resume: function () {
                return (this.error = null), this;
              },
              close: function () {
                return this.write(null);
              },
              flush: function () {
                var t;
                k((t = this)),
                  "" !== t.cdata && (A(t, "oncdata", t.cdata), (t.cdata = "")),
                  "" !== t.script &&
                    (A(t, "onscript", t.script), (t.script = ""));
              },
            });
          try {
            e = n(2830).Stream;
          } catch (t) {
            e = function () {};
          }
          var a = t.EVENTS.filter(function (t) {
            return "error" !== t && "end" !== t;
          });
          function s(t, n) {
            if (!(this instanceof s)) return new s(t, n);
            e.apply(this),
              (this._parser = new o(t, n)),
              (this.writable = !0),
              (this.readable = !0);
            var r = this;
            (this._parser.onend = function () {
              r.emit("end");
            }),
              (this._parser.onerror = function (t) {
                r.emit("error", t), (r._parser.error = null);
              }),
              (this._decoder = null),
              a.forEach(function (t) {
                Object.defineProperty(r, "on" + t, {
                  get: function () {
                    return r._parser["on" + t];
                  },
                  set: function (e) {
                    if (!e)
                      return (
                        r.removeAllListeners(t), (r._parser["on" + t] = e), e
                      );
                    r.on(t, e);
                  },
                  enumerable: !0,
                  configurable: !1,
                });
              });
          }
          (s.prototype = Object.create(e.prototype, {
            constructor: { value: s },
          })),
            (s.prototype.write = function (t) {
              if (
                "function" == typeof r &&
                "function" == typeof r.isBuffer &&
                r.isBuffer(t)
              ) {
                if (!this._decoder) {
                  var e = n(2553).s;
                  this._decoder = new e("utf8");
                }
                t = this._decoder.write(t);
              }
              return this._parser.write(t.toString()), this.emit("data", t), !0;
            }),
            (s.prototype.end = function (t) {
              return t && t.length && this.write(t), this._parser.end(), !0;
            }),
            (s.prototype.on = function (t, n) {
              var r = this;
              return (
                r._parser["on" + t] ||
                  -1 === a.indexOf(t) ||
                  (r._parser["on" + t] = function () {
                    var e =
                      1 === arguments.length
                        ? [arguments[0]]
                        : Array.apply(null, arguments);
                    e.splice(0, 0, t), r.emit.apply(r, e);
                  }),
                e.prototype.on.call(r, t, n)
              );
            });
          var u = "[CDATA[",
            c = "DOCTYPE",
            l = "http://www.w3.org/XML/1998/namespace",
            f = "http://www.w3.org/2000/xmlns/",
            p = { xml: l, xmlns: f },
            h =
              /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
            d =
              /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/,
            g =
              /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
            y =
              /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
          function v(t) {
            return " " === t || "\n" === t || "\r" === t || "\t" === t;
          }
          function m(t) {
            return '"' === t || "'" === t;
          }
          function b(t) {
            return ">" === t || v(t);
          }
          function w(t, e) {
            return t.test(e);
          }
          function _(t, e) {
            return !w(t, e);
          }
          var E,
            S,
            T,
            x = 0;
          for (var O in ((t.STATE = {
            BEGIN: x++,
            BEGIN_WHITESPACE: x++,
            TEXT: x++,
            TEXT_ENTITY: x++,
            OPEN_WAKA: x++,
            SGML_DECL: x++,
            SGML_DECL_QUOTED: x++,
            DOCTYPE: x++,
            DOCTYPE_QUOTED: x++,
            DOCTYPE_DTD: x++,
            DOCTYPE_DTD_QUOTED: x++,
            COMMENT_STARTING: x++,
            COMMENT: x++,
            COMMENT_ENDING: x++,
            COMMENT_ENDED: x++,
            CDATA: x++,
            CDATA_ENDING: x++,
            CDATA_ENDING_2: x++,
            PROC_INST: x++,
            PROC_INST_BODY: x++,
            PROC_INST_ENDING: x++,
            OPEN_TAG: x++,
            OPEN_TAG_SLASH: x++,
            ATTRIB: x++,
            ATTRIB_NAME: x++,
            ATTRIB_NAME_SAW_WHITE: x++,
            ATTRIB_VALUE: x++,
            ATTRIB_VALUE_QUOTED: x++,
            ATTRIB_VALUE_CLOSED: x++,
            ATTRIB_VALUE_UNQUOTED: x++,
            ATTRIB_VALUE_ENTITY_Q: x++,
            ATTRIB_VALUE_ENTITY_U: x++,
            CLOSE_TAG: x++,
            CLOSE_TAG_SAW_WHITE: x++,
            SCRIPT: x++,
            SCRIPT_ENDING: x++,
          }),
          (t.XML_ENTITIES = {
            amp: "&",
            gt: ">",
            lt: "<",
            quot: '"',
            apos: "'",
          }),
          (t.ENTITIES = {
            amp: "&",
            gt: ">",
            lt: "<",
            quot: '"',
            apos: "'",
            AElig: 198,
            Aacute: 193,
            Acirc: 194,
            Agrave: 192,
            Aring: 197,
            Atilde: 195,
            Auml: 196,
            Ccedil: 199,
            ETH: 208,
            Eacute: 201,
            Ecirc: 202,
            Egrave: 200,
            Euml: 203,
            Iacute: 205,
            Icirc: 206,
            Igrave: 204,
            Iuml: 207,
            Ntilde: 209,
            Oacute: 211,
            Ocirc: 212,
            Ograve: 210,
            Oslash: 216,
            Otilde: 213,
            Ouml: 214,
            THORN: 222,
            Uacute: 218,
            Ucirc: 219,
            Ugrave: 217,
            Uuml: 220,
            Yacute: 221,
            aacute: 225,
            acirc: 226,
            aelig: 230,
            agrave: 224,
            aring: 229,
            atilde: 227,
            auml: 228,
            ccedil: 231,
            eacute: 233,
            ecirc: 234,
            egrave: 232,
            eth: 240,
            euml: 235,
            iacute: 237,
            icirc: 238,
            igrave: 236,
            iuml: 239,
            ntilde: 241,
            oacute: 243,
            ocirc: 244,
            ograve: 242,
            oslash: 248,
            otilde: 245,
            ouml: 246,
            szlig: 223,
            thorn: 254,
            uacute: 250,
            ucirc: 251,
            ugrave: 249,
            uuml: 252,
            yacute: 253,
            yuml: 255,
            copy: 169,
            reg: 174,
            nbsp: 160,
            iexcl: 161,
            cent: 162,
            pound: 163,
            curren: 164,
            yen: 165,
            brvbar: 166,
            sect: 167,
            uml: 168,
            ordf: 170,
            laquo: 171,
            not: 172,
            shy: 173,
            macr: 175,
            deg: 176,
            plusmn: 177,
            sup1: 185,
            sup2: 178,
            sup3: 179,
            acute: 180,
            micro: 181,
            para: 182,
            middot: 183,
            cedil: 184,
            ordm: 186,
            raquo: 187,
            frac14: 188,
            frac12: 189,
            frac34: 190,
            iquest: 191,
            times: 215,
            divide: 247,
            OElig: 338,
            oelig: 339,
            Scaron: 352,
            scaron: 353,
            Yuml: 376,
            fnof: 402,
            circ: 710,
            tilde: 732,
            Alpha: 913,
            Beta: 914,
            Gamma: 915,
            Delta: 916,
            Epsilon: 917,
            Zeta: 918,
            Eta: 919,
            Theta: 920,
            Iota: 921,
            Kappa: 922,
            Lambda: 923,
            Mu: 924,
            Nu: 925,
            Xi: 926,
            Omicron: 927,
            Pi: 928,
            Rho: 929,
            Sigma: 931,
            Tau: 932,
            Upsilon: 933,
            Phi: 934,
            Chi: 935,
            Psi: 936,
            Omega: 937,
            alpha: 945,
            beta: 946,
            gamma: 947,
            delta: 948,
            epsilon: 949,
            zeta: 950,
            eta: 951,
            theta: 952,
            iota: 953,
            kappa: 954,
            lambda: 955,
            mu: 956,
            nu: 957,
            xi: 958,
            omicron: 959,
            pi: 960,
            rho: 961,
            sigmaf: 962,
            sigma: 963,
            tau: 964,
            upsilon: 965,
            phi: 966,
            chi: 967,
            psi: 968,
            omega: 969,
            thetasym: 977,
            upsih: 978,
            piv: 982,
            ensp: 8194,
            emsp: 8195,
            thinsp: 8201,
            zwnj: 8204,
            zwj: 8205,
            lrm: 8206,
            rlm: 8207,
            ndash: 8211,
            mdash: 8212,
            lsquo: 8216,
            rsquo: 8217,
            sbquo: 8218,
            ldquo: 8220,
            rdquo: 8221,
            bdquo: 8222,
            dagger: 8224,
            Dagger: 8225,
            bull: 8226,
            hellip: 8230,
            permil: 8240,
            prime: 8242,
            Prime: 8243,
            lsaquo: 8249,
            rsaquo: 8250,
            oline: 8254,
            frasl: 8260,
            euro: 8364,
            image: 8465,
            weierp: 8472,
            real: 8476,
            trade: 8482,
            alefsym: 8501,
            larr: 8592,
            uarr: 8593,
            rarr: 8594,
            darr: 8595,
            harr: 8596,
            crarr: 8629,
            lArr: 8656,
            uArr: 8657,
            rArr: 8658,
            dArr: 8659,
            hArr: 8660,
            forall: 8704,
            part: 8706,
            exist: 8707,
            empty: 8709,
            nabla: 8711,
            isin: 8712,
            notin: 8713,
            ni: 8715,
            prod: 8719,
            sum: 8721,
            minus: 8722,
            lowast: 8727,
            radic: 8730,
            prop: 8733,
            infin: 8734,
            ang: 8736,
            and: 8743,
            or: 8744,
            cap: 8745,
            cup: 8746,
            int: 8747,
            there4: 8756,
            sim: 8764,
            cong: 8773,
            asymp: 8776,
            ne: 8800,
            equiv: 8801,
            le: 8804,
            ge: 8805,
            sub: 8834,
            sup: 8835,
            nsub: 8836,
            sube: 8838,
            supe: 8839,
            oplus: 8853,
            otimes: 8855,
            perp: 8869,
            sdot: 8901,
            lceil: 8968,
            rceil: 8969,
            lfloor: 8970,
            rfloor: 8971,
            lang: 9001,
            rang: 9002,
            loz: 9674,
            spades: 9824,
            clubs: 9827,
            hearts: 9829,
            diams: 9830,
          }),
          Object.keys(t.ENTITIES).forEach(function (e) {
            var n = t.ENTITIES[e],
              r = "number" == typeof n ? String.fromCharCode(n) : n;
            t.ENTITIES[e] = r;
          }),
          t.STATE))
            t.STATE[t.STATE[O]] = O;
          function I(t, e, n) {
            t[e] && t[e](n);
          }
          function A(t, e, n) {
            t.textNode && k(t), I(t, e, n);
          }
          function k(t) {
            (t.textNode = R(t.opt, t.textNode)),
              t.textNode && I(t, "ontext", t.textNode),
              (t.textNode = "");
          }
          function R(t, e) {
            return (
              t.trim && (e = e.trim()),
              t.normalize && (e = e.replace(/\s+/g, " ")),
              e
            );
          }
          function P(t, e) {
            return (
              k(t),
              t.trackPosition &&
                (e +=
                  "\nLine: " +
                  t.line +
                  "\nColumn: " +
                  t.column +
                  "\nChar: " +
                  t.c),
              (e = new Error(e)),
              (t.error = e),
              I(t, "onerror", e),
              t
            );
          }
          function N(t) {
            return (
              t.sawRoot && !t.closedRoot && C(t, "Unclosed root tag"),
              t.state !== x.BEGIN &&
                t.state !== x.BEGIN_WHITESPACE &&
                t.state !== x.TEXT &&
                P(t, "Unexpected end"),
              k(t),
              (t.c = ""),
              (t.closed = !0),
              I(t, "onend"),
              o.call(t, t.strict, t.opt),
              t
            );
          }
          function C(t, e) {
            if ("object" != typeof t || !(t instanceof o))
              throw new Error("bad call to strictFail");
            t.strict && P(t, e);
          }
          function D(t) {
            t.strict || (t.tagName = t.tagName[t.looseCase]());
            var e = t.tags[t.tags.length - 1] || t,
              n = (t.tag = { name: t.tagName, attributes: {} });
            t.opt.xmlns && (n.ns = e.ns),
              (t.attribList.length = 0),
              A(t, "onopentagstart", n);
          }
          function j(t, e) {
            var n = t.indexOf(":") < 0 ? ["", t] : t.split(":"),
              r = n[0],
              i = n[1];
            return (
              e && "xmlns" === t && ((r = "xmlns"), (i = "")),
              { prefix: r, local: i }
            );
          }
          function L(t) {
            if (
              (t.strict || (t.attribName = t.attribName[t.looseCase]()),
              -1 !== t.attribList.indexOf(t.attribName) ||
                t.tag.attributes.hasOwnProperty(t.attribName))
            )
              t.attribName = t.attribValue = "";
            else {
              if (t.opt.xmlns) {
                var e = j(t.attribName, !0),
                  n = e.prefix,
                  r = e.local;
                if ("xmlns" === n)
                  if ("xml" === r && t.attribValue !== l)
                    C(
                      t,
                      "xml: prefix must be bound to " +
                        l +
                        "\nActual: " +
                        t.attribValue
                    );
                  else if ("xmlns" === r && t.attribValue !== f)
                    C(
                      t,
                      "xmlns: prefix must be bound to " +
                        f +
                        "\nActual: " +
                        t.attribValue
                    );
                  else {
                    var i = t.tag,
                      o = t.tags[t.tags.length - 1] || t;
                    i.ns === o.ns && (i.ns = Object.create(o.ns)),
                      (i.ns[r] = t.attribValue);
                  }
                t.attribList.push([t.attribName, t.attribValue]);
              } else
                (t.tag.attributes[t.attribName] = t.attribValue),
                  A(t, "onattribute", {
                    name: t.attribName,
                    value: t.attribValue,
                  });
              t.attribName = t.attribValue = "";
            }
          }
          function M(t, e) {
            if (t.opt.xmlns) {
              var n = t.tag,
                r = j(t.tagName);
              (n.prefix = r.prefix),
                (n.local = r.local),
                (n.uri = n.ns[r.prefix] || ""),
                n.prefix &&
                  !n.uri &&
                  (C(
                    t,
                    "Unbound namespace prefix: " + JSON.stringify(t.tagName)
                  ),
                  (n.uri = r.prefix));
              var i = t.tags[t.tags.length - 1] || t;
              n.ns &&
                i.ns !== n.ns &&
                Object.keys(n.ns).forEach(function (e) {
                  A(t, "onopennamespace", { prefix: e, uri: n.ns[e] });
                });
              for (var o = 0, a = t.attribList.length; o < a; o++) {
                var s = t.attribList[o],
                  u = s[0],
                  c = s[1],
                  l = j(u, !0),
                  f = l.prefix,
                  p = l.local,
                  h = "" === f ? "" : n.ns[f] || "",
                  d = { name: u, value: c, prefix: f, local: p, uri: h };
                f &&
                  "xmlns" !== f &&
                  !h &&
                  (C(t, "Unbound namespace prefix: " + JSON.stringify(f)),
                  (d.uri = f)),
                  (t.tag.attributes[u] = d),
                  A(t, "onattribute", d);
              }
              t.attribList.length = 0;
            }
            (t.tag.isSelfClosing = !!e),
              (t.sawRoot = !0),
              t.tags.push(t.tag),
              A(t, "onopentag", t.tag),
              e ||
                (t.noscript || "script" !== t.tagName.toLowerCase()
                  ? (t.state = x.TEXT)
                  : (t.state = x.SCRIPT),
                (t.tag = null),
                (t.tagName = "")),
              (t.attribName = t.attribValue = ""),
              (t.attribList.length = 0);
          }
          function U(t) {
            if (!t.tagName)
              return (
                C(t, "Weird empty close tag."),
                (t.textNode += "</>"),
                void (t.state = x.TEXT)
              );
            if (t.script) {
              if ("script" !== t.tagName)
                return (
                  (t.script += "</" + t.tagName + ">"),
                  (t.tagName = ""),
                  void (t.state = x.SCRIPT)
                );
              A(t, "onscript", t.script), (t.script = "");
            }
            var e = t.tags.length,
              n = t.tagName;
            t.strict || (n = n[t.looseCase]());
            for (var r = n; e-- && t.tags[e].name !== r; )
              C(t, "Unexpected close tag");
            if (e < 0)
              return (
                C(t, "Unmatched closing tag: " + t.tagName),
                (t.textNode += "</" + t.tagName + ">"),
                void (t.state = x.TEXT)
              );
            t.tagName = n;
            for (var i = t.tags.length; i-- > e; ) {
              var o = (t.tag = t.tags.pop());
              (t.tagName = t.tag.name), A(t, "onclosetag", t.tagName);
              var a = {};
              for (var s in o.ns) a[s] = o.ns[s];
              var u = t.tags[t.tags.length - 1] || t;
              t.opt.xmlns &&
                o.ns !== u.ns &&
                Object.keys(o.ns).forEach(function (e) {
                  var n = o.ns[e];
                  A(t, "onclosenamespace", { prefix: e, uri: n });
                });
            }
            0 === e && (t.closedRoot = !0),
              (t.tagName = t.attribValue = t.attribName = ""),
              (t.attribList.length = 0),
              (t.state = x.TEXT);
          }
          function B(t) {
            var e,
              n = t.entity,
              r = n.toLowerCase(),
              i = "";
            return t.ENTITIES[n]
              ? t.ENTITIES[n]
              : t.ENTITIES[r]
              ? t.ENTITIES[r]
              : ("#" === (n = r).charAt(0) &&
                  ("x" === n.charAt(1)
                    ? ((n = n.slice(2)),
                      (i = (e = parseInt(n, 16)).toString(16)))
                    : ((n = n.slice(1)),
                      (i = (e = parseInt(n, 10)).toString(10)))),
                (n = n.replace(/^0+/, "")),
                isNaN(e) || i.toLowerCase() !== n
                  ? (C(t, "Invalid character entity"), "&" + t.entity + ";")
                  : String.fromCodePoint(e));
          }
          function F(t, e) {
            "<" === e
              ? ((t.state = x.OPEN_WAKA), (t.startTagPosition = t.position))
              : v(e) ||
                (C(t, "Non-whitespace before first tag."),
                (t.textNode = e),
                (t.state = x.TEXT));
          }
          function q(t, e) {
            var n = "";
            return e < t.length && (n = t.charAt(e)), n;
          }
          (x = t.STATE),
            String.fromCodePoint ||
              ((E = String.fromCharCode),
              (S = Math.floor),
              (T = function () {
                var t,
                  e,
                  n = [],
                  r = -1,
                  i = arguments.length;
                if (!i) return "";
                for (var o = ""; ++r < i; ) {
                  var a = Number(arguments[r]);
                  if (!isFinite(a) || a < 0 || a > 1114111 || S(a) !== a)
                    throw RangeError("Invalid code point: " + a);
                  a <= 65535
                    ? n.push(a)
                    : ((t = 55296 + ((a -= 65536) >> 10)),
                      (e = (a % 1024) + 56320),
                      n.push(t, e)),
                    (r + 1 === i || n.length > 16384) &&
                      ((o += E.apply(null, n)), (n.length = 0));
                }
                return o;
              }),
              Object.defineProperty
                ? Object.defineProperty(String, "fromCodePoint", {
                    value: T,
                    configurable: !0,
                    writable: !0,
                  })
                : (String.fromCodePoint = T));
        })(e);
      },
      7478: (t, e, n) => {
        "use strict";
        var r = n(210),
          i = n(1924),
          o = n(631),
          a = r("%TypeError%"),
          s = r("%WeakMap%", !0),
          u = r("%Map%", !0),
          c = i("WeakMap.prototype.get", !0),
          l = i("WeakMap.prototype.set", !0),
          f = i("WeakMap.prototype.has", !0),
          p = i("Map.prototype.get", !0),
          h = i("Map.prototype.set", !0),
          d = i("Map.prototype.has", !0),
          g = function (t, e) {
            for (var n, r = t; null !== (n = r.next); r = n)
              if (n.key === e)
                return (r.next = n.next), (n.next = t.next), (t.next = n), n;
          };
        t.exports = function () {
          var t,
            e,
            n,
            r = {
              assert: function (t) {
                if (!r.has(t))
                  throw new a("Side channel does not contain " + o(t));
              },
              get: function (r) {
                if (
                  s &&
                  r &&
                  ("object" == typeof r || "function" == typeof r)
                ) {
                  if (t) return c(t, r);
                } else if (u) {
                  if (e) return p(e, r);
                } else if (n)
                  return (function (t, e) {
                    var n = g(t, e);
                    return n && n.value;
                  })(n, r);
              },
              has: function (r) {
                if (
                  s &&
                  r &&
                  ("object" == typeof r || "function" == typeof r)
                ) {
                  if (t) return f(t, r);
                } else if (u) {
                  if (e) return d(e, r);
                } else if (n)
                  return (function (t, e) {
                    return !!g(t, e);
                  })(n, r);
                return !1;
              },
              set: function (r, i) {
                s && r && ("object" == typeof r || "function" == typeof r)
                  ? (t || (t = new s()), l(t, r, i))
                  : u
                  ? (e || (e = new u()), h(e, r, i))
                  : (n || (n = { key: {}, next: null }),
                    (function (t, e, n) {
                      var r = g(t, e);
                      r
                        ? (r.value = n)
                        : (t.next = { key: e, next: t.next, value: n });
                    })(n, r, i));
              },
            };
          return r;
        };
      },
      2830: (t, e, n) => {
        t.exports = i;
        var r = n(7187).EventEmitter;
        function i() {
          r.call(this);
        }
        n(5717)(i, r),
          (i.Readable = n(9481)),
          (i.Writable = n(4229)),
          (i.Duplex = n(6753)),
          (i.Transform = n(4605)),
          (i.PassThrough = n(2725)),
          (i.finished = n(8610)),
          (i.pipeline = n(9946)),
          (i.Stream = i),
          (i.prototype.pipe = function (t, e) {
            var n = this;
            function i(e) {
              t.writable && !1 === t.write(e) && n.pause && n.pause();
            }
            function o() {
              n.readable && n.resume && n.resume();
            }
            n.on("data", i),
              t.on("drain", o),
              t._isStdio ||
                (e && !1 === e.end) ||
                (n.on("end", s), n.on("close", u));
            var a = !1;
            function s() {
              a || ((a = !0), t.end());
            }
            function u() {
              a || ((a = !0), "function" == typeof t.destroy && t.destroy());
            }
            function c(t) {
              if ((l(), 0 === r.listenerCount(this, "error"))) throw t;
            }
            function l() {
              n.removeListener("data", i),
                t.removeListener("drain", o),
                n.removeListener("end", s),
                n.removeListener("close", u),
                n.removeListener("error", c),
                t.removeListener("error", c),
                n.removeListener("end", l),
                n.removeListener("close", l),
                t.removeListener("close", l);
            }
            return (
              n.on("error", c),
              t.on("error", c),
              n.on("end", l),
              n.on("close", l),
              t.on("close", l),
              t.emit("pipe", n),
              t
            );
          });
      },
      8501: (t, e, n) => {
        var r = n(1989),
          i = n(5676),
          o = n(7529),
          a = n(584),
          s = n(8575),
          u = e;
        (u.request = function (t, e) {
          t = "string" == typeof t ? s.parse(t) : o(t);
          var i =
              -1 === n.g.location.protocol.search(/^https?:$/) ? "http:" : "",
            a = t.protocol || i,
            u = t.hostname || t.host,
            c = t.port,
            l = t.path || "/";
          u && -1 !== u.indexOf(":") && (u = "[" + u + "]"),
            (t.url = (u ? a + "//" + u : "") + (c ? ":" + c : "") + l),
            (t.method = (t.method || "GET").toUpperCase()),
            (t.headers = t.headers || {});
          var f = new r(t);
          return e && f.on("response", e), f;
        }),
          (u.get = function (t, e) {
            var n = u.request(t, e);
            return n.end(), n;
          }),
          (u.ClientRequest = r),
          (u.IncomingMessage = i.IncomingMessage),
          (u.Agent = function () {}),
          (u.Agent.defaultMaxSockets = 4),
          (u.globalAgent = new u.Agent()),
          (u.STATUS_CODES = a),
          (u.METHODS = [
            "CHECKOUT",
            "CONNECT",
            "COPY",
            "DELETE",
            "GET",
            "HEAD",
            "LOCK",
            "M-SEARCH",
            "MERGE",
            "MKACTIVITY",
            "MKCOL",
            "MOVE",
            "NOTIFY",
            "OPTIONS",
            "PATCH",
            "POST",
            "PROPFIND",
            "PROPPATCH",
            "PURGE",
            "PUT",
            "REPORT",
            "SEARCH",
            "SUBSCRIBE",
            "TRACE",
            "UNLOCK",
            "UNSUBSCRIBE",
          ]);
      },
      8725: (t, e, n) => {
        var r;
        function i() {
          if (void 0 !== r) return r;
          if (n.g.XMLHttpRequest) {
            r = new n.g.XMLHttpRequest();
            try {
              r.open("GET", n.g.XDomainRequest ? "/" : "https://example.com");
            } catch (t) {
              r = null;
            }
          } else r = null;
          return r;
        }
        function o(t) {
          var e = i();
          if (!e) return !1;
          try {
            return (e.responseType = t), e.responseType === t;
          } catch (t) {}
          return !1;
        }
        function a(t) {
          return "function" == typeof t;
        }
        (e.fetch = a(n.g.fetch) && a(n.g.ReadableStream)),
          (e.writableStream = a(n.g.WritableStream)),
          (e.abortController = a(n.g.AbortController)),
          (e.arraybuffer = e.fetch || o("arraybuffer")),
          (e.msstream = !e.fetch && o("ms-stream")),
          (e.mozchunkedarraybuffer = !e.fetch && o("moz-chunked-arraybuffer")),
          (e.overrideMimeType = e.fetch || (!!i() && a(i().overrideMimeType))),
          (r = null);
      },
      1989: (t, e, n) => {
        var r = n(8764).Buffer,
          i = n(4155),
          o = n(8725),
          a = n(5717),
          s = n(5676),
          u = n(8473),
          c = s.IncomingMessage,
          l = s.readyStates,
          f = (t.exports = function (t) {
            var e,
              n = this;
            u.Writable.call(n),
              (n._opts = t),
              (n._body = []),
              (n._headers = {}),
              t.auth &&
                n.setHeader(
                  "Authorization",
                  "Basic " + r.from(t.auth).toString("base64")
                ),
              Object.keys(t.headers).forEach(function (e) {
                n.setHeader(e, t.headers[e]);
              });
            var i = !0;
            if (
              "disable-fetch" === t.mode ||
              ("requestTimeout" in t && !o.abortController)
            )
              (i = !1), (e = !0);
            else if ("prefer-streaming" === t.mode) e = !1;
            else if ("allow-wrong-content-type" === t.mode)
              e = !o.overrideMimeType;
            else {
              if (t.mode && "default" !== t.mode && "prefer-fast" !== t.mode)
                throw new Error("Invalid value for opts.mode");
              e = !0;
            }
            (n._mode = (function (t, e) {
              return o.fetch && e
                ? "fetch"
                : o.mozchunkedarraybuffer
                ? "moz-chunked-arraybuffer"
                : o.msstream
                ? "ms-stream"
                : o.arraybuffer && t
                ? "arraybuffer"
                : "text";
            })(e, i)),
              (n._fetchTimer = null),
              (n._socketTimeout = null),
              (n._socketTimer = null),
              n.on("finish", function () {
                n._onFinish();
              });
          });
        a(f, u.Writable),
          (f.prototype.setHeader = function (t, e) {
            var n = t.toLowerCase();
            -1 === p.indexOf(n) && (this._headers[n] = { name: t, value: e });
          }),
          (f.prototype.getHeader = function (t) {
            var e = this._headers[t.toLowerCase()];
            return e ? e.value : null;
          }),
          (f.prototype.removeHeader = function (t) {
            delete this._headers[t.toLowerCase()];
          }),
          (f.prototype._onFinish = function () {
            var t = this;
            if (!t._destroyed) {
              var e = t._opts;
              "timeout" in e && 0 !== e.timeout && t.setTimeout(e.timeout);
              var r = t._headers,
                a = null;
              "GET" !== e.method &&
                "HEAD" !== e.method &&
                (a = new Blob(t._body, {
                  type: (r["content-type"] || {}).value || "",
                }));
              var s = [];
              if (
                (Object.keys(r).forEach(function (t) {
                  var e = r[t].name,
                    n = r[t].value;
                  Array.isArray(n)
                    ? n.forEach(function (t) {
                        s.push([e, t]);
                      })
                    : s.push([e, n]);
                }),
                "fetch" === t._mode)
              ) {
                var u = null;
                if (o.abortController) {
                  var c = new AbortController();
                  (u = c.signal),
                    (t._fetchAbortController = c),
                    "requestTimeout" in e &&
                      0 !== e.requestTimeout &&
                      (t._fetchTimer = n.g.setTimeout(function () {
                        t.emit("requestTimeout"),
                          t._fetchAbortController &&
                            t._fetchAbortController.abort();
                      }, e.requestTimeout));
                }
                n.g
                  .fetch(t._opts.url, {
                    method: t._opts.method,
                    headers: s,
                    body: a || void 0,
                    mode: "cors",
                    credentials: e.withCredentials ? "include" : "same-origin",
                    signal: u,
                  })
                  .then(
                    function (e) {
                      (t._fetchResponse = e), t._resetTimers(!1), t._connect();
                    },
                    function (e) {
                      t._resetTimers(!0), t._destroyed || t.emit("error", e);
                    }
                  );
              } else {
                var f = (t._xhr = new n.g.XMLHttpRequest());
                try {
                  f.open(t._opts.method, t._opts.url, !0);
                } catch (e) {
                  return void i.nextTick(function () {
                    t.emit("error", e);
                  });
                }
                "responseType" in f && (f.responseType = t._mode),
                  "withCredentials" in f &&
                    (f.withCredentials = !!e.withCredentials),
                  "text" === t._mode &&
                    "overrideMimeType" in f &&
                    f.overrideMimeType("text/plain; charset=x-user-defined"),
                  "requestTimeout" in e &&
                    ((f.timeout = e.requestTimeout),
                    (f.ontimeout = function () {
                      t.emit("requestTimeout");
                    })),
                  s.forEach(function (t) {
                    f.setRequestHeader(t[0], t[1]);
                  }),
                  (t._response = null),
                  (f.onreadystatechange = function () {
                    switch (f.readyState) {
                      case l.LOADING:
                      case l.DONE:
                        t._onXHRProgress();
                    }
                  }),
                  "moz-chunked-arraybuffer" === t._mode &&
                    (f.onprogress = function () {
                      t._onXHRProgress();
                    }),
                  (f.onerror = function () {
                    t._destroyed ||
                      (t._resetTimers(!0),
                      t.emit("error", new Error("XHR error")));
                  });
                try {
                  f.send(a);
                } catch (e) {
                  return void i.nextTick(function () {
                    t.emit("error", e);
                  });
                }
              }
            }
          }),
          (f.prototype._onXHRProgress = function () {
            var t = this;
            t._resetTimers(!1),
              (function (t) {
                try {
                  var e = t.status;
                  return null !== e && 0 !== e;
                } catch (t) {
                  return !1;
                }
              })(t._xhr) &&
                !t._destroyed &&
                (t._response || t._connect(),
                t._response._onXHRProgress(t._resetTimers.bind(t)));
          }),
          (f.prototype._connect = function () {
            var t = this;
            t._destroyed ||
              ((t._response = new c(
                t._xhr,
                t._fetchResponse,
                t._mode,
                t._resetTimers.bind(t)
              )),
              t._response.on("error", function (e) {
                t.emit("error", e);
              }),
              t.emit("response", t._response));
          }),
          (f.prototype._write = function (t, e, n) {
            this._body.push(t), n();
          }),
          (f.prototype._resetTimers = function (t) {
            var e = this;
            n.g.clearTimeout(e._socketTimer),
              (e._socketTimer = null),
              t
                ? (n.g.clearTimeout(e._fetchTimer), (e._fetchTimer = null))
                : e._socketTimeout &&
                  (e._socketTimer = n.g.setTimeout(function () {
                    e.emit("timeout");
                  }, e._socketTimeout));
          }),
          (f.prototype.abort = f.prototype.destroy =
            function (t) {
              var e = this;
              (e._destroyed = !0),
                e._resetTimers(!0),
                e._response && (e._response._destroyed = !0),
                e._xhr
                  ? e._xhr.abort()
                  : e._fetchAbortController && e._fetchAbortController.abort(),
                t && e.emit("error", t);
            }),
          (f.prototype.end = function (t, e, n) {
            "function" == typeof t && ((n = t), (t = void 0)),
              u.Writable.prototype.end.call(this, t, e, n);
          }),
          (f.prototype.setTimeout = function (t, e) {
            var n = this;
            e && n.once("timeout", e),
              (n._socketTimeout = t),
              n._resetTimers(!1);
          }),
          (f.prototype.flushHeaders = function () {}),
          (f.prototype.setNoDelay = function () {}),
          (f.prototype.setSocketKeepAlive = function () {});
        var p = [
          "accept-charset",
          "accept-encoding",
          "access-control-request-headers",
          "access-control-request-method",
          "connection",
          "content-length",
          "cookie",
          "cookie2",
          "date",
          "dnt",
          "expect",
          "host",
          "keep-alive",
          "origin",
          "referer",
          "te",
          "trailer",
          "transfer-encoding",
          "upgrade",
          "via",
        ];
      },
      5676: (t, e, n) => {
        var r = n(4155),
          i = n(8764).Buffer,
          o = n(8725),
          a = n(5717),
          s = n(8473),
          u = (e.readyStates = {
            UNSENT: 0,
            OPENED: 1,
            HEADERS_RECEIVED: 2,
            LOADING: 3,
            DONE: 4,
          }),
          c = (e.IncomingMessage = function (t, e, n, a) {
            var u = this;
            if (
              (s.Readable.call(u),
              (u._mode = n),
              (u.headers = {}),
              (u.rawHeaders = []),
              (u.trailers = {}),
              (u.rawTrailers = []),
              u.on("end", function () {
                r.nextTick(function () {
                  u.emit("close");
                });
              }),
              "fetch" === n)
            ) {
              if (
                ((u._fetchResponse = e),
                (u.url = e.url),
                (u.statusCode = e.status),
                (u.statusMessage = e.statusText),
                e.headers.forEach(function (t, e) {
                  (u.headers[e.toLowerCase()] = t), u.rawHeaders.push(e, t);
                }),
                o.writableStream)
              ) {
                var c = new WritableStream({
                  write: function (t) {
                    return (
                      a(!1),
                      new Promise(function (e, n) {
                        u._destroyed
                          ? n()
                          : u.push(i.from(t))
                          ? e()
                          : (u._resumeFetch = e);
                      })
                    );
                  },
                  close: function () {
                    a(!0), u._destroyed || u.push(null);
                  },
                  abort: function (t) {
                    a(!0), u._destroyed || u.emit("error", t);
                  },
                });
                try {
                  return void e.body.pipeTo(c).catch(function (t) {
                    a(!0), u._destroyed || u.emit("error", t);
                  });
                } catch (t) {}
              }
              var l = e.body.getReader();
              !(function t() {
                l.read()
                  .then(function (e) {
                    u._destroyed ||
                      (a(e.done),
                      e.done ? u.push(null) : (u.push(i.from(e.value)), t()));
                  })
                  .catch(function (t) {
                    a(!0), u._destroyed || u.emit("error", t);
                  });
              })();
            } else if (
              ((u._xhr = t),
              (u._pos = 0),
              (u.url = t.responseURL),
              (u.statusCode = t.status),
              (u.statusMessage = t.statusText),
              t
                .getAllResponseHeaders()
                .split(/\r?\n/)
                .forEach(function (t) {
                  var e = t.match(/^([^:]+):\s*(.*)/);
                  if (e) {
                    var n = e[1].toLowerCase();
                    "set-cookie" === n
                      ? (void 0 === u.headers[n] && (u.headers[n] = []),
                        u.headers[n].push(e[2]))
                      : void 0 !== u.headers[n]
                      ? (u.headers[n] += ", " + e[2])
                      : (u.headers[n] = e[2]),
                      u.rawHeaders.push(e[1], e[2]);
                  }
                }),
              (u._charset = "x-user-defined"),
              !o.overrideMimeType)
            ) {
              var f = u.rawHeaders["mime-type"];
              if (f) {
                var p = f.match(/;\s*charset=([^;])(;|$)/);
                p && (u._charset = p[1].toLowerCase());
              }
              u._charset || (u._charset = "utf-8");
            }
          });
        a(c, s.Readable),
          (c.prototype._read = function () {
            var t = this._resumeFetch;
            t && ((this._resumeFetch = null), t());
          }),
          (c.prototype._onXHRProgress = function (t) {
            var e = this,
              r = e._xhr,
              o = null;
            switch (e._mode) {
              case "text":
                if ((o = r.responseText).length > e._pos) {
                  var a = o.substr(e._pos);
                  if ("x-user-defined" === e._charset) {
                    for (var s = i.alloc(a.length), c = 0; c < a.length; c++)
                      s[c] = 255 & a.charCodeAt(c);
                    e.push(s);
                  } else e.push(a, e._charset);
                  e._pos = o.length;
                }
                break;
              case "arraybuffer":
                if (r.readyState !== u.DONE || !r.response) break;
                (o = r.response), e.push(i.from(new Uint8Array(o)));
                break;
              case "moz-chunked-arraybuffer":
                if (((o = r.response), r.readyState !== u.LOADING || !o)) break;
                e.push(i.from(new Uint8Array(o)));
                break;
              case "ms-stream":
                if (((o = r.response), r.readyState !== u.LOADING)) break;
                var l = new n.g.MSStreamReader();
                (l.onprogress = function () {
                  l.result.byteLength > e._pos &&
                    (e.push(i.from(new Uint8Array(l.result.slice(e._pos)))),
                    (e._pos = l.result.byteLength));
                }),
                  (l.onload = function () {
                    t(!0), e.push(null);
                  }),
                  l.readAsArrayBuffer(o);
            }
            e._xhr.readyState === u.DONE &&
              "ms-stream" !== e._mode &&
              (t(!0), e.push(null));
          });
      },
      2553: (t, e, n) => {
        "use strict";
        var r = n(9509).Buffer,
          i =
            r.isEncoding ||
            function (t) {
              switch ((t = "" + t) && t.toLowerCase()) {
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "binary":
                case "base64":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                case "raw":
                  return !0;
                default:
                  return !1;
              }
            };
        function o(t) {
          var e;
          switch (
            ((this.encoding = (function (t) {
              var e = (function (t) {
                if (!t) return "utf8";
                for (var e; ; )
                  switch (t) {
                    case "utf8":
                    case "utf-8":
                      return "utf8";
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                      return "utf16le";
                    case "latin1":
                    case "binary":
                      return "latin1";
                    case "base64":
                    case "ascii":
                    case "hex":
                      return t;
                    default:
                      if (e) return;
                      (t = ("" + t).toLowerCase()), (e = !0);
                  }
              })(t);
              if ("string" != typeof e && (r.isEncoding === i || !i(t)))
                throw new Error("Unknown encoding: " + t);
              return e || t;
            })(t)),
            this.encoding)
          ) {
            case "utf16le":
              (this.text = u), (this.end = c), (e = 4);
              break;
            case "utf8":
              (this.fillLast = s), (e = 4);
              break;
            case "base64":
              (this.text = l), (this.end = f), (e = 3);
              break;
            default:
              return (this.write = p), void (this.end = h);
          }
          (this.lastNeed = 0),
            (this.lastTotal = 0),
            (this.lastChar = r.allocUnsafe(e));
        }
        function a(t) {
          return t <= 127
            ? 0
            : t >> 5 == 6
            ? 2
            : t >> 4 == 14
            ? 3
            : t >> 3 == 30
            ? 4
            : t >> 6 == 2
            ? -1
            : -2;
        }
        function s(t) {
          var e = this.lastTotal - this.lastNeed,
            n = (function (t, e, n) {
              if (128 != (192 & e[0])) return (t.lastNeed = 0), "�";
              if (t.lastNeed > 1 && e.length > 1) {
                if (128 != (192 & e[1])) return (t.lastNeed = 1), "�";
                if (t.lastNeed > 2 && e.length > 2 && 128 != (192 & e[2]))
                  return (t.lastNeed = 2), "�";
              }
            })(this, t);
          return void 0 !== n
            ? n
            : this.lastNeed <= t.length
            ? (t.copy(this.lastChar, e, 0, this.lastNeed),
              this.lastChar.toString(this.encoding, 0, this.lastTotal))
            : (t.copy(this.lastChar, e, 0, t.length),
              void (this.lastNeed -= t.length));
        }
        function u(t, e) {
          if ((t.length - e) % 2 == 0) {
            var n = t.toString("utf16le", e);
            if (n) {
              var r = n.charCodeAt(n.length - 1);
              if (r >= 55296 && r <= 56319)
                return (
                  (this.lastNeed = 2),
                  (this.lastTotal = 4),
                  (this.lastChar[0] = t[t.length - 2]),
                  (this.lastChar[1] = t[t.length - 1]),
                  n.slice(0, -1)
                );
            }
            return n;
          }
          return (
            (this.lastNeed = 1),
            (this.lastTotal = 2),
            (this.lastChar[0] = t[t.length - 1]),
            t.toString("utf16le", e, t.length - 1)
          );
        }
        function c(t) {
          var e = t && t.length ? this.write(t) : "";
          if (this.lastNeed) {
            var n = this.lastTotal - this.lastNeed;
            return e + this.lastChar.toString("utf16le", 0, n);
          }
          return e;
        }
        function l(t, e) {
          var n = (t.length - e) % 3;
          return 0 === n
            ? t.toString("base64", e)
            : ((this.lastNeed = 3 - n),
              (this.lastTotal = 3),
              1 === n
                ? (this.lastChar[0] = t[t.length - 1])
                : ((this.lastChar[0] = t[t.length - 2]),
                  (this.lastChar[1] = t[t.length - 1])),
              t.toString("base64", e, t.length - n));
        }
        function f(t) {
          var e = t && t.length ? this.write(t) : "";
          return this.lastNeed
            ? e + this.lastChar.toString("base64", 0, 3 - this.lastNeed)
            : e;
        }
        function p(t) {
          return t.toString(this.encoding);
        }
        function h(t) {
          return t && t.length ? this.write(t) : "";
        }
        (e.s = o),
          (o.prototype.write = function (t) {
            if (0 === t.length) return "";
            var e, n;
            if (this.lastNeed) {
              if (void 0 === (e = this.fillLast(t))) return "";
              (n = this.lastNeed), (this.lastNeed = 0);
            } else n = 0;
            return n < t.length
              ? e
                ? e + this.text(t, n)
                : this.text(t, n)
              : e || "";
          }),
          (o.prototype.end = function (t) {
            var e = t && t.length ? this.write(t) : "";
            return this.lastNeed ? e + "�" : e;
          }),
          (o.prototype.text = function (t, e) {
            var n = (function (t, e, n) {
              var r = e.length - 1;
              if (r < n) return 0;
              var i = a(e[r]);
              return i >= 0
                ? (i > 0 && (t.lastNeed = i - 1), i)
                : --r < n || -2 === i
                ? 0
                : (i = a(e[r])) >= 0
                ? (i > 0 && (t.lastNeed = i - 2), i)
                : --r < n || -2 === i
                ? 0
                : (i = a(e[r])) >= 0
                ? (i > 0 && (2 === i ? (i = 0) : (t.lastNeed = i - 3)), i)
                : 0;
            })(this, t, e);
            if (!this.lastNeed) return t.toString("utf8", e);
            this.lastTotal = n;
            var r = t.length - (n - this.lastNeed);
            return t.copy(this.lastChar, 0, r), t.toString("utf8", e, r);
          }),
          (o.prototype.fillLast = function (t) {
            if (this.lastNeed <= t.length)
              return (
                t.copy(
                  this.lastChar,
                  this.lastTotal - this.lastNeed,
                  0,
                  this.lastNeed
                ),
                this.lastChar.toString(this.encoding, 0, this.lastTotal)
              );
            t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, t.length),
              (this.lastNeed -= t.length);
          });
      },
      2511: function (t, e, n) {
        var r;
        (t = n.nmd(t)),
          (function (i) {
            e && e.nodeType, t && t.nodeType;
            var o = "object" == typeof n.g && n.g;
            o.global !== o && o.window !== o && o.self;
            var a,
              s = 2147483647,
              u = 36,
              c = 26,
              l = 38,
              f = 700,
              p = /^xn--/,
              h = /[^\x20-\x7E]/,
              d = /[\x2E\u3002\uFF0E\uFF61]/g,
              g = {
                overflow: "Overflow: input needs wider integers to process",
                "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                "invalid-input": "Invalid input",
              },
              y = u - 1,
              v = Math.floor,
              m = String.fromCharCode;
            function b(t) {
              throw new RangeError(g[t]);
            }
            function w(t, e) {
              for (var n = t.length, r = []; n--; ) r[n] = e(t[n]);
              return r;
            }
            function _(t, e) {
              var n = t.split("@"),
                r = "";
              return (
                n.length > 1 && ((r = n[0] + "@"), (t = n[1])),
                r + w((t = t.replace(d, ".")).split("."), e).join(".")
              );
            }
            function E(t) {
              for (var e, n, r = [], i = 0, o = t.length; i < o; )
                (e = t.charCodeAt(i++)) >= 55296 && e <= 56319 && i < o
                  ? 56320 == (64512 & (n = t.charCodeAt(i++)))
                    ? r.push(((1023 & e) << 10) + (1023 & n) + 65536)
                    : (r.push(e), i--)
                  : r.push(e);
              return r;
            }
            function S(t) {
              return w(t, function (t) {
                var e = "";
                return (
                  t > 65535 &&
                    ((e += m((((t -= 65536) >>> 10) & 1023) | 55296)),
                    (t = 56320 | (1023 & t))),
                  e + m(t)
                );
              }).join("");
            }
            function T(t, e) {
              return t + 22 + 75 * (t < 26) - ((0 != e) << 5);
            }
            function x(t, e, n) {
              var r = 0;
              for (
                t = n ? v(t / f) : t >> 1, t += v(t / e);
                t > (y * c) >> 1;
                r += u
              )
                t = v(t / y);
              return v(r + ((y + 1) * t) / (t + l));
            }
            function O(t) {
              var e,
                n,
                r,
                i,
                o,
                a,
                l,
                f,
                p,
                h,
                d,
                g = [],
                y = t.length,
                m = 0,
                w = 128,
                _ = 72;
              for ((n = t.lastIndexOf("-")) < 0 && (n = 0), r = 0; r < n; ++r)
                t.charCodeAt(r) >= 128 && b("not-basic"),
                  g.push(t.charCodeAt(r));
              for (i = n > 0 ? n + 1 : 0; i < y; ) {
                for (
                  o = m, a = 1, l = u;
                  i >= y && b("invalid-input"),
                    ((f =
                      (d = t.charCodeAt(i++)) - 48 < 10
                        ? d - 22
                        : d - 65 < 26
                        ? d - 65
                        : d - 97 < 26
                        ? d - 97
                        : u) >= u ||
                      f > v((s - m) / a)) &&
                      b("overflow"),
                    (m += f * a),
                    !(f < (p = l <= _ ? 1 : l >= _ + c ? c : l - _));
                  l += u
                )
                  a > v(s / (h = u - p)) && b("overflow"), (a *= h);
                (_ = x(m - o, (e = g.length + 1), 0 == o)),
                  v(m / e) > s - w && b("overflow"),
                  (w += v(m / e)),
                  (m %= e),
                  g.splice(m++, 0, w);
              }
              return S(g);
            }
            function I(t) {
              var e,
                n,
                r,
                i,
                o,
                a,
                l,
                f,
                p,
                h,
                d,
                g,
                y,
                w,
                _,
                S = [];
              for (
                g = (t = E(t)).length, e = 128, n = 0, o = 72, a = 0;
                a < g;
                ++a
              )
                (d = t[a]) < 128 && S.push(m(d));
              for (r = i = S.length, i && S.push("-"); r < g; ) {
                for (l = s, a = 0; a < g; ++a)
                  (d = t[a]) >= e && d < l && (l = d);
                for (
                  l - e > v((s - n) / (y = r + 1)) && b("overflow"),
                    n += (l - e) * y,
                    e = l,
                    a = 0;
                  a < g;
                  ++a
                )
                  if (((d = t[a]) < e && ++n > s && b("overflow"), d == e)) {
                    for (
                      f = n, p = u;
                      !(f < (h = p <= o ? 1 : p >= o + c ? c : p - o));
                      p += u
                    )
                      (_ = f - h),
                        (w = u - h),
                        S.push(m(T(h + (_ % w), 0))),
                        (f = v(_ / w));
                    S.push(m(T(f, 0))), (o = x(n, y, r == i)), (n = 0), ++r;
                  }
                ++n, ++e;
              }
              return S.join("");
            }
            (a = {
              version: "1.4.1",
              ucs2: { decode: E, encode: S },
              decode: O,
              encode: I,
              toASCII: function (t) {
                return _(t, function (t) {
                  return h.test(t) ? "xn--" + I(t) : t;
                });
              },
              toUnicode: function (t) {
                return _(t, function (t) {
                  return p.test(t) ? O(t.slice(4).toLowerCase()) : t;
                });
              },
            }),
              void 0 ===
                (r = function () {
                  return a;
                }.call(e, n, e, t)) || (t.exports = r);
          })();
      },
      8575: (t, e, n) => {
        "use strict";
        var r = n(2511);
        function i() {
          (this.protocol = null),
            (this.slashes = null),
            (this.auth = null),
            (this.host = null),
            (this.port = null),
            (this.hostname = null),
            (this.hash = null),
            (this.search = null),
            (this.query = null),
            (this.pathname = null),
            (this.path = null),
            (this.href = null);
        }
        var o = /^([a-z0-9.+-]+:)/i,
          a = /:[0-9]*$/,
          s = /^(\/\/?(?!\/)[^?\s]*)(\?[^\s]*)?$/,
          u = ["{", "}", "|", "\\", "^", "`"].concat([
            "<",
            ">",
            '"',
            "`",
            " ",
            "\r",
            "\n",
            "\t",
          ]),
          c = ["'"].concat(u),
          l = ["%", "/", "?", ";", "#"].concat(c),
          f = ["/", "?", "#"],
          p = /^[+a-z0-9A-Z_-]{0,63}$/,
          h = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
          d = { javascript: !0, "javascript:": !0 },
          g = { javascript: !0, "javascript:": !0 },
          y = {
            http: !0,
            https: !0,
            ftp: !0,
            gopher: !0,
            file: !0,
            "http:": !0,
            "https:": !0,
            "ftp:": !0,
            "gopher:": !0,
            "file:": !0,
          },
          v = n(129);
        function m(t, e, n) {
          if (t && "object" == typeof t && t instanceof i) return t;
          var r = new i();
          return r.parse(t, e, n), r;
        }
        (i.prototype.parse = function (t, e, n) {
          if ("string" != typeof t)
            throw new TypeError(
              "Parameter 'url' must be a string, not " + typeof t
            );
          var i = t.indexOf("?"),
            a = -1 !== i && i < t.indexOf("#") ? "?" : "#",
            u = t.split(a);
          u[0] = u[0].replace(/\\/g, "/");
          var m = (t = u.join(a));
          if (((m = m.trim()), !n && 1 === t.split("#").length)) {
            var b = s.exec(m);
            if (b)
              return (
                (this.path = m),
                (this.href = m),
                (this.pathname = b[1]),
                b[2]
                  ? ((this.search = b[2]),
                    (this.query = e
                      ? v.parse(this.search.substr(1))
                      : this.search.substr(1)))
                  : e && ((this.search = ""), (this.query = {})),
                this
              );
          }
          var w = o.exec(m);
          if (w) {
            var _ = (w = w[0]).toLowerCase();
            (this.protocol = _), (m = m.substr(w.length));
          }
          if (n || w || m.match(/^\/\/[^@/]+@[^@/]+/)) {
            var E = "//" === m.substr(0, 2);
            !E || (w && g[w]) || ((m = m.substr(2)), (this.slashes = !0));
          }
          if (!g[w] && (E || (w && !y[w]))) {
            for (var S, T, x = -1, O = 0; O < f.length; O++)
              -1 !== (I = m.indexOf(f[O])) && (-1 === x || I < x) && (x = I);
            for (
              -1 !==
                (T = -1 === x ? m.lastIndexOf("@") : m.lastIndexOf("@", x)) &&
                ((S = m.slice(0, T)),
                (m = m.slice(T + 1)),
                (this.auth = decodeURIComponent(S))),
                x = -1,
                O = 0;
              O < l.length;
              O++
            ) {
              var I;
              -1 !== (I = m.indexOf(l[O])) && (-1 === x || I < x) && (x = I);
            }
            -1 === x && (x = m.length),
              (this.host = m.slice(0, x)),
              (m = m.slice(x)),
              this.parseHost(),
              (this.hostname = this.hostname || "");
            var A =
              "[" === this.hostname[0] &&
              "]" === this.hostname[this.hostname.length - 1];
            if (!A)
              for (
                var k = this.hostname.split(/\./), R = ((O = 0), k.length);
                O < R;
                O++
              ) {
                var P = k[O];
                if (P && !P.match(p)) {
                  for (var N = "", C = 0, D = P.length; C < D; C++)
                    P.charCodeAt(C) > 127 ? (N += "x") : (N += P[C]);
                  if (!N.match(p)) {
                    var j = k.slice(0, O),
                      L = k.slice(O + 1),
                      M = P.match(h);
                    M && (j.push(M[1]), L.unshift(M[2])),
                      L.length && (m = "/" + L.join(".") + m),
                      (this.hostname = j.join("."));
                    break;
                  }
                }
              }
            this.hostname.length > 255
              ? (this.hostname = "")
              : (this.hostname = this.hostname.toLowerCase()),
              A || (this.hostname = r.toASCII(this.hostname));
            var U = this.port ? ":" + this.port : "",
              B = this.hostname || "";
            (this.host = B + U),
              (this.href += this.host),
              A &&
                ((this.hostname = this.hostname.substr(
                  1,
                  this.hostname.length - 2
                )),
                "/" !== m[0] && (m = "/" + m));
          }
          if (!d[_])
            for (O = 0, R = c.length; O < R; O++) {
              var F = c[O];
              if (-1 !== m.indexOf(F)) {
                var q = encodeURIComponent(F);
                q === F && (q = escape(F)), (m = m.split(F).join(q));
              }
            }
          var V = m.indexOf("#");
          -1 !== V && ((this.hash = m.substr(V)), (m = m.slice(0, V)));
          var z = m.indexOf("?");
          if (
            (-1 !== z
              ? ((this.search = m.substr(z)),
                (this.query = m.substr(z + 1)),
                e && (this.query = v.parse(this.query)),
                (m = m.slice(0, z)))
              : e && ((this.search = ""), (this.query = {})),
            m && (this.pathname = m),
            y[_] && this.hostname && !this.pathname && (this.pathname = "/"),
            this.pathname || this.search)
          ) {
            U = this.pathname || "";
            var W = this.search || "";
            this.path = U + W;
          }
          return (this.href = this.format()), this;
        }),
          (i.prototype.format = function () {
            var t = this.auth || "";
            t &&
              ((t = (t = encodeURIComponent(t)).replace(/%3A/i, ":")),
              (t += "@"));
            var e = this.protocol || "",
              n = this.pathname || "",
              r = this.hash || "",
              i = !1,
              o = "";
            this.host
              ? (i = t + this.host)
              : this.hostname &&
                ((i =
                  t +
                  (-1 === this.hostname.indexOf(":")
                    ? this.hostname
                    : "[" + this.hostname + "]")),
                this.port && (i += ":" + this.port)),
              this.query &&
                "object" == typeof this.query &&
                Object.keys(this.query).length &&
                (o = v.stringify(this.query, {
                  arrayFormat: "repeat",
                  encodeValuesOnly: !0,
                  addQueryPrefix: !1,
                }));
            var a = this.search || (o && "?" + o) || "";
            return (
              e && ":" !== e.substr(-1) && (e += ":"),
              this.slashes || ((!e || y[e]) && !1 !== i)
                ? ((i = "//" + (i || "")),
                  n && "/" !== n.charAt(0) && (n = "/" + n))
                : i || (i = ""),
              r && "#" !== r.charAt(0) && (r = "#" + r),
              a && "?" !== a.charAt(0) && (a = "?" + a),
              e +
                i +
                (n = n.replace(/[?#]/g, function (t) {
                  return encodeURIComponent(t);
                })) +
                (a = a.replace("#", "%23")) +
                r
            );
          }),
          (i.prototype.resolve = function (t) {
            return this.resolveObject(m(t, !1, !0)).format();
          }),
          (i.prototype.resolveObject = function (t) {
            if ("string" == typeof t) {
              var e = new i();
              e.parse(t, !1, !0), (t = e);
            }
            for (
              var n = new i(), r = Object.keys(this), o = 0;
              o < r.length;
              o++
            ) {
              var a = r[o];
              n[a] = this[a];
            }
            if (((n.hash = t.hash), "" === t.href))
              return (n.href = n.format()), n;
            if (t.slashes && !t.protocol) {
              for (var s = Object.keys(t), u = 0; u < s.length; u++) {
                var c = s[u];
                "protocol" !== c && (n[c] = t[c]);
              }
              return (
                y[n.protocol] &&
                  n.hostname &&
                  !n.pathname &&
                  ((n.pathname = "/"), (n.path = n.pathname)),
                (n.href = n.format()),
                n
              );
            }
            if (t.protocol && t.protocol !== n.protocol) {
              if (!y[t.protocol]) {
                for (var l = Object.keys(t), f = 0; f < l.length; f++) {
                  var p = l[f];
                  n[p] = t[p];
                }
                return (n.href = n.format()), n;
              }
              if (((n.protocol = t.protocol), t.host || g[t.protocol]))
                n.pathname = t.pathname;
              else {
                for (
                  var h = (t.pathname || "").split("/");
                  h.length && !(t.host = h.shift());

                );
                t.host || (t.host = ""),
                  t.hostname || (t.hostname = ""),
                  "" !== h[0] && h.unshift(""),
                  h.length < 2 && h.unshift(""),
                  (n.pathname = h.join("/"));
              }
              if (
                ((n.search = t.search),
                (n.query = t.query),
                (n.host = t.host || ""),
                (n.auth = t.auth),
                (n.hostname = t.hostname || t.host),
                (n.port = t.port),
                n.pathname || n.search)
              ) {
                var d = n.pathname || "",
                  v = n.search || "";
                n.path = d + v;
              }
              return (
                (n.slashes = n.slashes || t.slashes), (n.href = n.format()), n
              );
            }
            var m = n.pathname && "/" === n.pathname.charAt(0),
              b = t.host || (t.pathname && "/" === t.pathname.charAt(0)),
              w = b || m || (n.host && t.pathname),
              _ = w,
              E = (n.pathname && n.pathname.split("/")) || [],
              S =
                ((h = (t.pathname && t.pathname.split("/")) || []),
                n.protocol && !y[n.protocol]);
            if (
              (S &&
                ((n.hostname = ""),
                (n.port = null),
                n.host && ("" === E[0] ? (E[0] = n.host) : E.unshift(n.host)),
                (n.host = ""),
                t.protocol &&
                  ((t.hostname = null),
                  (t.port = null),
                  t.host && ("" === h[0] ? (h[0] = t.host) : h.unshift(t.host)),
                  (t.host = null)),
                (w = w && ("" === h[0] || "" === E[0]))),
              b)
            )
              (n.host = t.host || "" === t.host ? t.host : n.host),
                (n.hostname =
                  t.hostname || "" === t.hostname ? t.hostname : n.hostname),
                (n.search = t.search),
                (n.query = t.query),
                (E = h);
            else if (h.length)
              E || (E = []),
                E.pop(),
                (E = E.concat(h)),
                (n.search = t.search),
                (n.query = t.query);
            else if (null != t.search)
              return (
                S &&
                  ((n.host = E.shift()),
                  (n.hostname = n.host),
                  (A =
                    !!(n.host && n.host.indexOf("@") > 0) &&
                    n.host.split("@")) &&
                    ((n.auth = A.shift()),
                    (n.hostname = A.shift()),
                    (n.host = n.hostname))),
                (n.search = t.search),
                (n.query = t.query),
                (null === n.pathname && null === n.search) ||
                  (n.path =
                    (n.pathname ? n.pathname : "") +
                    (n.search ? n.search : "")),
                (n.href = n.format()),
                n
              );
            if (!E.length)
              return (
                (n.pathname = null),
                n.search ? (n.path = "/" + n.search) : (n.path = null),
                (n.href = n.format()),
                n
              );
            for (
              var T = E.slice(-1)[0],
                x =
                  ((n.host || t.host || E.length > 1) &&
                    ("." === T || ".." === T)) ||
                  "" === T,
                O = 0,
                I = E.length;
              I >= 0;
              I--
            )
              "." === (T = E[I])
                ? E.splice(I, 1)
                : ".." === T
                ? (E.splice(I, 1), O++)
                : O && (E.splice(I, 1), O--);
            if (!w && !_) for (; O--; O) E.unshift("..");
            !w ||
              "" === E[0] ||
              (E[0] && "/" === E[0].charAt(0)) ||
              E.unshift(""),
              x && "/" !== E.join("/").substr(-1) && E.push("");
            var A,
              k = "" === E[0] || (E[0] && "/" === E[0].charAt(0));
            return (
              S &&
                ((n.hostname = k ? "" : E.length ? E.shift() : ""),
                (n.host = n.hostname),
                (A =
                  !!(n.host && n.host.indexOf("@") > 0) && n.host.split("@")) &&
                  ((n.auth = A.shift()),
                  (n.hostname = A.shift()),
                  (n.host = n.hostname))),
              (w = w || (n.host && E.length)) && !k && E.unshift(""),
              E.length > 0
                ? (n.pathname = E.join("/"))
                : ((n.pathname = null), (n.path = null)),
              (null === n.pathname && null === n.search) ||
                (n.path =
                  (n.pathname ? n.pathname : "") + (n.search ? n.search : "")),
              (n.auth = t.auth || n.auth),
              (n.slashes = n.slashes || t.slashes),
              (n.href = n.format()),
              n
            );
          }),
          (i.prototype.parseHost = function () {
            var t = this.host,
              e = a.exec(t);
            e &&
              (":" !== (e = e[0]) && (this.port = e.substr(1)),
              (t = t.substr(0, t.length - e.length))),
              t && (this.hostname = t);
          }),
          (e.parse = m),
          (e.resolve = function (t, e) {
            return m(t, !1, !0).resolve(e);
          }),
          (e.resolveObject = function (t, e) {
            return t ? m(t, !1, !0).resolveObject(e) : e;
          }),
          (e.format = function (t) {
            return (
              "string" == typeof t && (t = m(t)),
              t instanceof i ? t.format() : i.prototype.format.call(t)
            );
          }),
          (e.Url = i);
      },
      4927: (t, e, n) => {
        function r(t) {
          try {
            if (!n.g.localStorage) return !1;
          } catch (t) {
            return !1;
          }
          var e = n.g.localStorage[t];
          return null != e && "true" === String(e).toLowerCase();
        }
        t.exports = function (t, e) {
          if (r("noDeprecation")) return t;
          var n = !1;
          return function () {
            if (!n) {
              if (r("throwDeprecation")) throw new Error(e);
              r("traceDeprecation") ? console.trace(e) : console.warn(e),
                (n = !0);
            }
            return t.apply(this, arguments);
          };
        };
      },
      8369: (t, e, n) => {
        t.exports = {
          WebVTT: n(112).WebVTT,
          VTTCue: n(6427).VTTCue,
          VTTRegion: n(7224).VTTRegion,
        };
      },
      112: function () {
        !(function (t) {
          function e(t, e) {
            return (
              void 0 === e && (e = 1),
              "rgba(" +
                [
                  parseInt(t.substring(0, 2), 16),
                  parseInt(t.substring(2, 4), 16),
                  parseInt(t.substring(4, 6), 16),
                  e,
                ].join(",") +
                ")"
            );
          }
          var n = 1;
          function r(t, r, o) {
            switch (o) {
              case "webvtt.font.color":
              case "webvtt.font.opacity":
                var a = Services.prefs.getCharPref("webvtt.font.color"),
                  s = Services.prefs.getIntPref("webvtt.font.opacity") / 100;
                i.fontSet = e(a, s);
                break;
              case "webvtt.font.scale":
                n = Services.prefs.getIntPref("webvtt.font.scale") / 100;
                break;
              case "webvtt.bg.color":
              case "webvtt.bg.opacity":
                var u = Services.prefs.getCharPref("webvtt.bg.color"),
                  c = Services.prefs.getIntPref("webvtt.bg.opacity") / 100;
                i.backgroundSet = e(u, c);
                break;
              case "webvtt.edge.color":
              case "webvtt.edge.type":
                var l = Services.prefs.getIntPref("webvtt.edge.type"),
                  f = Services.prefs.getCharPref("webvtt.edge.color");
                i.edgeSet =
                  ["", "0px 0px ", "4px 4px 4px ", "-2px -2px ", "2px 2px "][
                    l
                  ] + e(f);
            }
          }
          if ("undefined" != typeof Services) {
            var i = {};
            [
              "webvtt.font.color",
              "webvtt.font.opacity",
              "webvtt.font.scale",
              "webvtt.bg.color",
              "webvtt.bg.opacity",
              "webvtt.edge.color",
              "webvtt.edge.type",
            ].forEach(function (t) {
              r(0, 0, t), Services.prefs.addObserver(t, r, !1);
            });
          }
          var o =
            Object.create ||
            (function () {
              function t() {}
              return function (e) {
                if (1 !== arguments.length)
                  throw new Error(
                    "Object.create shim only accepts one parameter."
                  );
                return (t.prototype = e), new t();
              };
            })();
          function a(t, e) {
            (this.name = "ParsingError"),
              (this.code = t.code),
              (this.message = e || t.message);
          }
          function s(t) {
            function e(t, e, n, r) {
              return 3600 * (0 | t) + 60 * (0 | e) + (0 | n) + (0 | r) / 1e3;
            }
            var n = t.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);
            return n
              ? n[3]
                ? e(n[1], n[2], n[3].replace(":", ""), n[4])
                : n[1] > 59
                ? e(n[1], n[2], 0, n[4])
                : e(0, n[1], n[2], n[4])
              : null;
          }
          function u() {
            this.values = o(null);
          }
          function c(t, e, n, r) {
            var i = r ? t.split(r) : [t];
            for (var o in i)
              if ("string" == typeof i[o]) {
                var a = i[o].split(n);
                2 === a.length && e(a[0], a[1]);
              }
          }
          function l(t, e, n) {
            var r = t;
            function i() {
              var e = s(t);
              if (null === e)
                throw new a(a.Errors.BadTimeStamp, "Malformed timestamp: " + r);
              return (t = t.replace(/^[^\sa-zA-Z-]+/, "")), e;
            }
            function o() {
              t = t.replace(/^\s+/, "");
            }
            if ((o(), (e.startTime = i()), o(), "--\x3e" !== t.substr(0, 3)))
              throw new a(
                a.Errors.BadTimeStamp,
                "Malformed time stamp (time stamps must be separated by '--\x3e'): " +
                  r
              );
            (t = t.substr(3)),
              o(),
              (e.endTime = i()),
              o(),
              (function (t, e) {
                var r = new u();
                c(
                  t,
                  function (t, e) {
                    switch (t) {
                      case "region":
                        for (var i = n.length - 1; i >= 0; i--)
                          if (n[i].id === e) {
                            r.set(t, n[i].region);
                            break;
                          }
                        break;
                      case "vertical":
                        r.alt(t, e, ["rl", "lr"]);
                        break;
                      case "line":
                        var o = e.split(","),
                          a = o[0];
                        r.integer(t, a),
                          r.percent(t, a) && r.set("snapToLines", !1),
                          r.alt(t, a, ["auto"]),
                          2 === o.length &&
                            r.alt("lineAlign", o[1], [
                              "start",
                              "middle",
                              "end",
                            ]);
                        break;
                      case "position":
                        (o = e.split(",")),
                          r.percent(t, o[0]),
                          2 === o.length &&
                            r.alt("positionAlign", o[1], [
                              "start",
                              "middle",
                              "end",
                            ]);
                        break;
                      case "size":
                        r.percent(t, e);
                        break;
                      case "align":
                        r.alt(t, e, [
                          "start",
                          "middle",
                          "end",
                          "left",
                          "right",
                        ]);
                    }
                  },
                  /:/,
                  /\s/
                ),
                  (e.region = r.get("region", null)),
                  (e.vertical = r.get("vertical", "")),
                  (e.line = r.get("line", "auto")),
                  (e.lineAlign = r.get("lineAlign", "start")),
                  (e.snapToLines = r.get("snapToLines", !0)),
                  (e.size = r.get("size", 100)),
                  (e.align = r.get("align", "middle")),
                  (e.position = r.get("position", "auto")),
                  (e.positionAlign = r.get(
                    "positionAlign",
                    {
                      start: "start",
                      left: "start",
                      middle: "middle",
                      end: "end",
                      right: "end",
                    },
                    e.align
                  ));
              })(t, e);
          }
          (a.prototype = o(Error.prototype)),
            (a.prototype.constructor = a),
            (a.Errors = {
              BadSignature: { code: 0, message: "Malformed WebVTT signature." },
              BadTimeStamp: { code: 1, message: "Malformed time stamp." },
            }),
            (u.prototype = {
              set: function (t, e) {
                this.get(t) || "" === e || (this.values[t] = e);
              },
              get: function (t, e, n) {
                return n
                  ? this.has(t)
                    ? this.values[t]
                    : e[n]
                  : this.has(t)
                  ? this.values[t]
                  : e;
              },
              has: function (t) {
                return t in this.values;
              },
              alt: function (t, e, n) {
                for (var r = 0; r < n.length; ++r)
                  if (e === n[r]) {
                    this.set(t, e);
                    break;
                  }
              },
              integer: function (t, e) {
                /^-?\d+$/.test(e) && this.set(t, parseInt(e, 10));
              },
              percent: function (t, e) {
                return (
                  !!(
                    e.match(/^([\d]{1,3})(\.[\d]*)?%$/) &&
                    (e = parseFloat(e)) >= 0 &&
                    e <= 100
                  ) && (this.set(t, e), !0)
                );
              },
            });
          var f = {
              "&amp;": "&",
              "&lt;": "<",
              "&gt;": ">",
              "&lrm;": "‎",
              "&rlm;": "‏",
              "&nbsp;": " ",
            },
            p = {
              c: "span",
              i: "i",
              b: "b",
              u: "u",
              ruby: "ruby",
              rt: "rt",
              v: "span",
              lang: "span",
            },
            h = { v: "title", lang: "lang" },
            d = { rt: "ruby" };
          function g(t, e) {
            function n() {
              if (!e) return null;
              var t,
                n = e.match(/^([^<]*)(<[^>]+>?)?/);
              return (t = n[1] ? n[1] : n[2]), (e = e.substr(t.length)), t;
            }
            function r(t) {
              return f[t];
            }
            function i(t) {
              for (; (m = t.match(/&(amp|lt|gt|lrm|rlm|nbsp);/)); )
                t = t.replace(m[0], r);
              return t;
            }
            function o(t, e) {
              return !d[e.localName] || d[e.localName] === t.localName;
            }
            function a(e, n) {
              var r = p[e];
              if (!r) return null;
              var i = t.document.createElement(r);
              i.localName = r;
              var o = h[e];
              return o && n && (i[o] = n.trim()), i;
            }
            for (
              var u, c = t.document.createElement("div"), l = c, g = [];
              null !== (u = n());

            )
              if ("<" !== u[0]) l.appendChild(t.document.createTextNode(i(u)));
              else {
                if ("/" === u[1]) {
                  g.length &&
                    g[g.length - 1] === u.substr(2).replace(">", "") &&
                    (g.pop(), (l = l.parentNode));
                  continue;
                }
                var y,
                  v = s(u.substr(1, u.length - 2));
                if (v) {
                  (y = t.document.createProcessingInstruction("timestamp", v)),
                    l.appendChild(y);
                  continue;
                }
                var m = u.match(
                  /^<([^.\s/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/
                );
                if (!m) continue;
                if (!(y = a(m[1], m[3]))) continue;
                if (!o(l, y)) continue;
                m[2] && (y.className = m[2].substr(1).replace(".", " ")),
                  g.push(m[1]),
                  l.appendChild(y),
                  (l = y);
              }
            return c;
          }
          var y = [
            [1470, 1470],
            [1472, 1472],
            [1475, 1475],
            [1478, 1478],
            [1488, 1514],
            [1520, 1524],
            [1544, 1544],
            [1547, 1547],
            [1549, 1549],
            [1563, 1563],
            [1566, 1610],
            [1645, 1647],
            [1649, 1749],
            [1765, 1766],
            [1774, 1775],
            [1786, 1805],
            [1807, 1808],
            [1810, 1839],
            [1869, 1957],
            [1969, 1969],
            [1984, 2026],
            [2036, 2037],
            [2042, 2042],
            [2048, 2069],
            [2074, 2074],
            [2084, 2084],
            [2088, 2088],
            [2096, 2110],
            [2112, 2136],
            [2142, 2142],
            [2208, 2208],
            [2210, 2220],
            [8207, 8207],
            [64285, 64285],
            [64287, 64296],
            [64298, 64310],
            [64312, 64316],
            [64318, 64318],
            [64320, 64321],
            [64323, 64324],
            [64326, 64449],
            [64467, 64829],
            [64848, 64911],
            [64914, 64967],
            [65008, 65020],
            [65136, 65140],
            [65142, 65276],
            [67584, 67589],
            [67592, 67592],
            [67594, 67637],
            [67639, 67640],
            [67644, 67644],
            [67647, 67669],
            [67671, 67679],
            [67840, 67867],
            [67872, 67897],
            [67903, 67903],
            [67968, 68023],
            [68030, 68031],
            [68096, 68096],
            [68112, 68115],
            [68117, 68119],
            [68121, 68147],
            [68160, 68167],
            [68176, 68184],
            [68192, 68223],
            [68352, 68405],
            [68416, 68437],
            [68440, 68466],
            [68472, 68479],
            [68608, 68680],
            [126464, 126467],
            [126469, 126495],
            [126497, 126498],
            [126500, 126500],
            [126503, 126503],
            [126505, 126514],
            [126516, 126519],
            [126521, 126521],
            [126523, 126523],
            [126530, 126530],
            [126535, 126535],
            [126537, 126537],
            [126539, 126539],
            [126541, 126543],
            [126545, 126546],
            [126548, 126548],
            [126551, 126551],
            [126553, 126553],
            [126555, 126555],
            [126557, 126557],
            [126559, 126559],
            [126561, 126562],
            [126564, 126564],
            [126567, 126570],
            [126572, 126578],
            [126580, 126583],
            [126585, 126588],
            [126590, 126590],
            [126592, 126601],
            [126603, 126619],
            [126625, 126627],
            [126629, 126633],
            [126635, 126651],
            [1114109, 1114109],
          ];
          function v(t) {
            for (var e = 0; e < y.length; e++) {
              var n = y[e];
              if (t >= n[0] && t <= n[1]) return !0;
            }
            return !1;
          }
          function m() {}
          function b(t, e, n) {
            var r =
                "undefined" != typeof navigator &&
                /MSIE\s8\.0/.test(navigator.userAgent),
              o = "rgba(255, 255, 255, 1)",
              a = "rgba(0, 0, 0, 0.8)",
              s = "";
            void 0 !== i &&
              ((o = i.fontSet), (a = i.backgroundSet), (s = i.edgeSet)),
              r && ((o = "rgb(255, 255, 255)"), (a = "rgb(0, 0, 0)")),
              m.call(this),
              (this.cue = e),
              (this.cueDiv = g(t, e.text));
            var u = {
              color: o,
              backgroundColor: a,
              textShadow: s,
              position: "relative",
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              display: "inline",
            };
            r ||
              ((u.writingMode =
                "" === e.vertical
                  ? "horizontal-tb"
                  : "lr" === e.vertical
                  ? "vertical-lr"
                  : "vertical-rl"),
              (u.unicodeBidi = "plaintext")),
              this.applyStyles(u, this.cueDiv),
              (this.div = t.document.createElement("div")),
              (u = {
                textAlign: "middle" === e.align ? "center" : e.align,
                font: n.font,
                whiteSpace: "pre-line",
                position: "absolute",
              }),
              r ||
                ((u.direction = (function (t) {
                  var e = [],
                    n = "";
                  if (!t || !t.childNodes) return "ltr";
                  function r(t, e) {
                    for (var n = e.childNodes.length - 1; n >= 0; n--)
                      t.push(e.childNodes[n]);
                  }
                  function i(t) {
                    if (!t || !t.length) return null;
                    var e = t.pop(),
                      n = e.textContent || e.innerText;
                    if (n) {
                      var o = n.match(/^.*(\n|\r)/);
                      return o ? ((t.length = 0), o[0]) : n;
                    }
                    return "ruby" === e.tagName
                      ? i(t)
                      : e.childNodes
                      ? (r(t, e), i(t))
                      : void 0;
                  }
                  for (r(e, t); (n = i(e)); )
                    for (var o = 0; o < n.length; o++)
                      if (v(n.charCodeAt(o))) return "rtl";
                  return "ltr";
                })(this.cueDiv)),
                (u.writingMode =
                  "" === e.vertical
                    ? "horizontal-tb"
                    : "lr" === e.vertical
                    ? "vertical-lr"
                    : ("vertical-rl".stylesunicodeBidi = "plaintext"))),
              this.applyStyles(u),
              this.div.appendChild(this.cueDiv);
            var c = 0;
            switch (e.positionAlign) {
              case "start":
                c = e.position;
                break;
              case "middle":
                c = e.position - e.size / 2;
                break;
              case "end":
                c = e.position - e.size;
            }
            "" === e.vertical
              ? this.applyStyles({
                  left: this.formatStyle(c, "%"),
                  width: this.formatStyle(e.size, "%"),
                })
              : this.applyStyles({
                  top: this.formatStyle(c, "%"),
                  height: this.formatStyle(e.size, "%"),
                }),
              (this.move = function (t) {
                this.applyStyles({
                  top: this.formatStyle(t.top, "px"),
                  bottom: this.formatStyle(t.bottom, "px"),
                  left: this.formatStyle(t.left, "px"),
                  right: this.formatStyle(t.right, "px"),
                  height: this.formatStyle(t.height, "px"),
                  width: this.formatStyle(t.width, "px"),
                });
              });
          }
          function w(t) {
            var e,
              n,
              r,
              i,
              o =
                "undefined" != typeof navigator &&
                /MSIE\s8\.0/.test(navigator.userAgent);
            if (t.div) {
              (n = t.div.offsetHeight),
                (r = t.div.offsetWidth),
                (i = t.div.offsetTop);
              var a =
                (a = t.div.childNodes) &&
                (a = a[0]) &&
                a.getClientRects &&
                a.getClientRects();
              (t = t.div.getBoundingClientRect()),
                (e = a
                  ? Math.max((a[0] && a[0].height) || 0, t.height / a.length)
                  : 0);
            }
            (this.left = t.left),
              (this.right = t.right),
              (this.top = t.top || i),
              (this.height = t.height || n),
              (this.bottom = t.bottom || i + (t.height || n)),
              (this.width = t.width || r),
              (this.lineHeight = void 0 !== e ? e : t.lineHeight),
              o && !this.lineHeight && (this.lineHeight = 13);
          }
          function _(t, e, n, r) {
            var i = new w(e),
              o = e.cue,
              a = (function (t) {
                if (
                  "number" == typeof t.line &&
                  (t.snapToLines || (t.line >= 0 && t.line <= 100))
                )
                  return t.line;
                if (
                  !t.track ||
                  !t.track.textTrackList ||
                  !t.track.textTrackList.mediaElement
                )
                  return -1;
                for (
                  var e = t.track, n = e.textTrackList, r = 0, i = 0;
                  i < n.length && n[i] !== e;
                  i++
                )
                  "showing" === n[i].mode && r++;
                return -1 * ++r;
              })(o),
              s = [];
            if (o.snapToLines) {
              var u;
              switch (o.vertical) {
                case "":
                  (s = ["+y", "-y"]), (u = "height");
                  break;
                case "rl":
                  (s = ["+x", "-x"]), (u = "width");
                  break;
                case "lr":
                  (s = ["-x", "+x"]), (u = "width");
              }
              var c = i.lineHeight,
                l = c * Math.round(a),
                f = n[u] + c,
                p = s[0];
              Math.abs(l) > f &&
                ((l = l < 0 ? -1 : 1), (l *= Math.ceil(f / c) * c)),
                a < 0 &&
                  ((l += "" === o.vertical ? n.height : n.width),
                  (s = s.reverse())),
                i.move(p, l);
            } else {
              var h = (i.lineHeight / n.height) * 100;
              switch (o.lineAlign) {
                case "middle":
                  a -= h / 2;
                  break;
                case "end":
                  a -= h;
              }
              switch (o.vertical) {
                case "":
                  e.applyStyles({ top: e.formatStyle(a, "%") });
                  break;
                case "rl":
                  e.applyStyles({ left: e.formatStyle(a, "%") });
                  break;
                case "lr":
                  e.applyStyles({ right: e.formatStyle(a, "%") });
              }
              (s = ["+y", "-x", "+x", "-y"]), (i = new w(e));
            }
            var d = (function (t, e) {
              for (var i, o = new w(t), a = 1, s = 0; s < e.length; s++) {
                for (
                  ;
                  t.overlapsOppositeAxis(n, e[s]) ||
                  (t.within(n) && t.overlapsAny(r));

                )
                  t.move(e[s]);
                if (t.within(n)) return t;
                var u = t.intersectPercentage(n);
                a > u && ((i = new w(t)), (a = u)), (t = new w(o));
              }
              return i || o;
            })(i, s);
            e.move(d.toCSSCompatValues(n));
          }
          function E() {}
          (m.prototype.applyStyles = function (t, e) {
            for (var n in ((e = e || this.div), t))
              t.hasOwnProperty(n) && (e.style[n] = t[n]);
          }),
            (m.prototype.formatStyle = function (t, e) {
              return 0 === t ? 0 : t + e;
            }),
            (b.prototype = o(m.prototype)),
            (b.prototype.constructor = b),
            (w.prototype.move = function (t, e) {
              switch (((e = void 0 !== e ? e : this.lineHeight), t)) {
                case "+x":
                  (this.left += e), (this.right += e);
                  break;
                case "-x":
                  (this.left -= e), (this.right -= e);
                  break;
                case "+y":
                  (this.top += e), (this.bottom += e);
                  break;
                case "-y":
                  (this.top -= e), (this.bottom -= e);
              }
            }),
            (w.prototype.overlaps = function (t) {
              return (
                this.left < t.right &&
                this.right > t.left &&
                this.top < t.bottom &&
                this.bottom > t.top
              );
            }),
            (w.prototype.overlapsAny = function (t) {
              for (var e = 0; e < t.length; e++)
                if (this.overlaps(t[e])) return !0;
              return !1;
            }),
            (w.prototype.within = function (t) {
              return (
                this.top >= t.top &&
                this.bottom <= t.bottom &&
                this.left >= t.left &&
                this.right <= t.right
              );
            }),
            (w.prototype.overlapsOppositeAxis = function (t, e) {
              switch (e) {
                case "+x":
                  return this.left < t.left;
                case "-x":
                  return this.right > t.right;
                case "+y":
                  return this.top < t.top;
                case "-y":
                  return this.bottom > t.bottom;
              }
            }),
            (w.prototype.intersectPercentage = function (t) {
              return (
                (Math.max(
                  0,
                  Math.min(this.right, t.right) - Math.max(this.left, t.left)
                ) *
                  Math.max(
                    0,
                    Math.min(this.bottom, t.bottom) - Math.max(this.top, t.top)
                  )) /
                (this.height * this.width)
              );
            }),
            (w.prototype.toCSSCompatValues = function (t) {
              return {
                top: this.top - t.top,
                bottom: t.bottom - this.bottom,
                left: this.left - t.left,
                right: t.right - this.right,
                height: this.height,
                width: this.width,
              };
            }),
            (w.getSimpleBoxPosition = function (t) {
              var e = t.div
                  ? t.div.offsetHeight
                  : t.tagName
                  ? t.offsetHeight
                  : 0,
                n = t.div ? t.div.offsetWidth : t.tagName ? t.offsetWidth : 0,
                r = t.div ? t.div.offsetTop : t.tagName ? t.offsetTop : 0;
              return {
                left: (t = t.div
                  ? t.div.getBoundingClientRect()
                  : t.tagName
                  ? t.getBoundingClientRect()
                  : t).left,
                right: t.right,
                top: t.top || r,
                height: t.height || e,
                bottom: t.bottom || r + (t.height || e),
                width: t.width || n,
              };
            }),
            (E.StringDecoder = function () {
              return {
                decode: function (t) {
                  if (!t) return "";
                  if ("string" != typeof t)
                    throw new Error("Error - expected string data.");
                  return decodeURIComponent(encodeURIComponent(t));
                },
              };
            }),
            (E.convertCueToDOMTree = function (t, e) {
              return t && e ? g(t, e) : null;
            }),
            (E.processCues = function (t, e, r) {
              if (!t || !e || !r) return null;
              for (; r.firstChild; ) r.removeChild(r.firstChild);
              var i = t.document.createElement("div");
              if (
                ((i.style.position = "absolute"),
                (i.style.left = "0"),
                (i.style.right = "0"),
                (i.style.top = "0"),
                (i.style.bottom = "0"),
                (i.style.margin = "1.5%"),
                r.appendChild(i),
                (function (t) {
                  for (var e = 0; e < t.length; e++)
                    if (t[e].hasBeenReset || !t[e].displayState) return !0;
                  return !1;
                })(e))
              ) {
                var o = [],
                  a = w.getSimpleBoxPosition(i),
                  s = {
                    font:
                      (Math.round(0.05 * a.height * 100) / 100) * n +
                      "px sans-serif",
                  };
                !(function () {
                  for (var n, r, u = 0; u < e.length; u++)
                    (r = e[u]),
                      (n = new b(t, r, s)),
                      i.appendChild(n.div),
                      _(0, n, a, o),
                      (r.displayState = n.div),
                      o.push(w.getSimpleBoxPosition(n));
                })();
              } else
                for (var u = 0; u < e.length; u++)
                  i.appendChild(e[u].displayState);
            }),
            (E.Parser = function (t, e) {
              (this.window = t),
                (this.state = "INITIAL"),
                (this.buffer = ""),
                (this.decoder = e || new TextDecoder("utf8")),
                (this.regionList = []);
            }),
            (E.Parser.prototype = {
              reportOrThrowError: function (t) {
                if (!(t instanceof a)) throw t;
                this.onparsingerror && this.onparsingerror(t);
              },
              parse: function (t) {
                var e = this;
                function n() {
                  for (
                    var t = e.buffer, n = 0;
                    n < t.length && "\r" !== t[n] && "\n" !== t[n];

                  )
                    ++n;
                  var r = t.substr(0, n);
                  return (
                    "\r" === t[n] && ++n,
                    "\n" === t[n] && ++n,
                    (e.buffer = t.substr(n)),
                    r
                  );
                }
                t && (e.buffer += e.decoder.decode(t, { stream: !0 }));
                try {
                  var r;
                  if ("INITIAL" === e.state) {
                    if (!/\r\n|\n/.test(e.buffer)) return this;
                    var i = (r = n()).match(/^WEBVTT([ \t].*)?$/);
                    if (!i || !i[0]) throw new a(a.Errors.BadSignature);
                    e.state = "HEADER";
                  }
                  for (var o = !1; e.buffer; ) {
                    if (!/\r\n|\n/.test(e.buffer)) return this;
                    switch ((o ? (o = !1) : (r = n()), e.state)) {
                      case "HEADER":
                        /:/.test(r)
                          ? c(
                              r,
                              function (t, n) {
                                "Region" === t &&
                                  (function (t) {
                                    var n = new u();
                                    if (
                                      (c(
                                        t,
                                        function (t, e) {
                                          switch (t) {
                                            case "id":
                                              n.set(t, e);
                                              break;
                                            case "width":
                                              n.percent(t, e);
                                              break;
                                            case "lines":
                                              n.integer(t, e);
                                              break;
                                            case "regionanchor":
                                            case "viewportanchor":
                                              var r = e.split(",");
                                              if (2 !== r.length) break;
                                              var i = new u();
                                              if (
                                                (i.percent("x", r[0]),
                                                i.percent("y", r[1]),
                                                !i.has("x") || !i.has("y"))
                                              )
                                                break;
                                              n.set(t + "X", i.get("x")),
                                                n.set(t + "Y", i.get("y"));
                                              break;
                                            case "scroll":
                                              n.alt(t, e, ["up"]);
                                          }
                                        },
                                        /=/,
                                        /\s/
                                      ),
                                      n.has("id"))
                                    ) {
                                      var r = new e.window.VTTRegion();
                                      (r.width = n.get("width", 100)),
                                        (r.lines = n.get("lines", 3)),
                                        (r.regionAnchorX = n.get(
                                          "regionanchorX",
                                          0
                                        )),
                                        (r.regionAnchorY = n.get(
                                          "regionanchorY",
                                          100
                                        )),
                                        (r.viewportAnchorX = n.get(
                                          "viewportanchorX",
                                          0
                                        )),
                                        (r.viewportAnchorY = n.get(
                                          "viewportanchorY",
                                          100
                                        )),
                                        (r.scroll = n.get("scroll", "")),
                                        e.onregion && e.onregion(r),
                                        e.regionList.push({
                                          id: n.get("id"),
                                          region: r,
                                        });
                                    }
                                  })(n);
                              },
                              /:/
                            )
                          : r || (e.state = "ID");
                        continue;
                      case "NOTE":
                        r || (e.state = "ID");
                        continue;
                      case "ID":
                        if (/^NOTE($|[ \t])/.test(r)) {
                          e.state = "NOTE";
                          break;
                        }
                        if (!r) continue;
                        if (
                          ((e.cue = new e.window.VTTCue(0, 0, "")),
                          (e.state = "CUE"),
                          -1 === r.indexOf("--\x3e"))
                        ) {
                          e.cue.id = r;
                          continue;
                        }
                      case "CUE":
                        try {
                          l(r, e.cue, e.regionList);
                        } catch (t) {
                          e.reportOrThrowError(t),
                            (e.cue = null),
                            (e.state = "BADCUE");
                          continue;
                        }
                        e.state = "CUETEXT";
                        continue;
                      case "CUETEXT":
                        var s = -1 !== r.indexOf("--\x3e");
                        if (!r || (s && (o = !0))) {
                          e.oncue && e.oncue(e.cue),
                            (e.cue = null),
                            (e.state = "ID");
                          continue;
                        }
                        e.cue.text && (e.cue.text += "\n"), (e.cue.text += r);
                        continue;
                      case "BADCUE":
                        r || (e.state = "ID");
                        continue;
                    }
                  }
                } catch (t) {
                  e.reportOrThrowError(t),
                    "CUETEXT" === e.state && e.cue && e.oncue && e.oncue(e.cue),
                    (e.cue = null),
                    (e.state = "INITIAL" === e.state ? "BADWEBVTT" : "BADCUE");
                }
                return this;
              },
              flush: function () {
                var t = this;
                try {
                  if (
                    ((t.buffer += t.decoder.decode()),
                    (t.cue || "HEADER" === t.state) &&
                      ((t.buffer += "\n\n"), t.parse()),
                    "INITIAL" === t.state)
                  )
                    throw new a(a.Errors.BadSignature);
                } catch (e) {
                  t.reportOrThrowError(e);
                }
                return t.onflush && t.onflush(), this;
              },
            }),
            (t.WebVTT = E);
        })(this);
      },
      6427: function (t, e, n) {
        var r;
        t.exports && (this.VTTCue = this.VTTCue || n(113).VTTCue),
          ((r = this).VTTCue.prototype.toJSON = function () {
            var t = {},
              e = this;
            return (
              Object.keys(this).forEach(function (n) {
                "getCueAsHTML" !== n &&
                  "hasBeenReset" !== n &&
                  "displayState" !== n &&
                  (t[n] = e[n]);
              }),
              t
            );
          }),
          (r.VTTCue.create = function (t) {
            if (
              !t.hasOwnProperty("startTime") ||
              !t.hasOwnProperty("endTime") ||
              !t.hasOwnProperty("text")
            )
              throw new Error(
                "You must at least have start time, end time, and text."
              );
            var e = new r.VTTCue(t.startTime, t.endTime, t.text);
            for (var n in t) e.hasOwnProperty(n) && (e[n] = t[n]);
            return e;
          }),
          (r.VTTCue.fromJSON = function (t) {
            return this.create(JSON.parse(t));
          });
      },
      113: function () {
        !(function (t) {
          var e = { "": !0, lr: !0, rl: !0 },
            n = { start: !0, middle: !0, end: !0, left: !0, right: !0 };
          function r(t) {
            return (
              "string" == typeof t && !!n[t.toLowerCase()] && t.toLowerCase()
            );
          }
          function i(t) {
            for (var e = 1; e < arguments.length; e++) {
              var n = arguments[e];
              for (var r in n) t[r] = n[r];
            }
            return t;
          }
          function o(t, n, o) {
            var a = this,
              s = /MSIE\s8\.0/.test(navigator.userAgent),
              u = {};
            s ? (a = document.createElement("custom")) : (u.enumerable = !0),
              (a.hasBeenReset = !1);
            var c = "",
              l = !1,
              f = t,
              p = n,
              h = o,
              d = null,
              g = "",
              y = !0,
              v = "auto",
              m = "start",
              b = 50,
              w = "middle",
              _ = 50,
              E = "middle";
            if (
              (Object.defineProperty(
                a,
                "id",
                i({}, u, {
                  get: function () {
                    return c;
                  },
                  set: function (t) {
                    c = "" + t;
                  },
                })
              ),
              Object.defineProperty(
                a,
                "pauseOnExit",
                i({}, u, {
                  get: function () {
                    return l;
                  },
                  set: function (t) {
                    l = !!t;
                  },
                })
              ),
              Object.defineProperty(
                a,
                "startTime",
                i({}, u, {
                  get: function () {
                    return f;
                  },
                  set: function (t) {
                    if ("number" != typeof t)
                      throw new TypeError(
                        "Start time must be set to a number."
                      );
                    (f = t), (this.hasBeenReset = !0);
                  },
                })
              ),
              Object.defineProperty(
                a,
                "endTime",
                i({}, u, {
                  get: function () {
                    return p;
                  },
                  set: function (t) {
                    if ("number" != typeof t)
                      throw new TypeError("End time must be set to a number.");
                    (p = t), (this.hasBeenReset = !0);
                  },
                })
              ),
              Object.defineProperty(
                a,
                "text",
                i({}, u, {
                  get: function () {
                    return h;
                  },
                  set: function (t) {
                    (h = "" + t), (this.hasBeenReset = !0);
                  },
                })
              ),
              Object.defineProperty(
                a,
                "region",
                i({}, u, {
                  get: function () {
                    return d;
                  },
                  set: function (t) {
                    (d = t), (this.hasBeenReset = !0);
                  },
                })
              ),
              Object.defineProperty(
                a,
                "vertical",
                i({}, u, {
                  get: function () {
                    return g;
                  },
                  set: function (t) {
                    var n = (function (t) {
                      return (
                        "string" == typeof t &&
                        !!e[t.toLowerCase()] &&
                        t.toLowerCase()
                      );
                    })(t);
                    if (!1 === n)
                      throw new SyntaxError(
                        "An invalid or illegal string was specified."
                      );
                    (g = n), (this.hasBeenReset = !0);
                  },
                })
              ),
              Object.defineProperty(
                a,
                "snapToLines",
                i({}, u, {
                  get: function () {
                    return y;
                  },
                  set: function (t) {
                    (y = !!t), (this.hasBeenReset = !0);
                  },
                })
              ),
              Object.defineProperty(
                a,
                "line",
                i({}, u, {
                  get: function () {
                    return v;
                  },
                  set: function (t) {
                    if ("number" != typeof t && "auto" !== t)
                      throw new SyntaxError(
                        "An invalid number or illegal string was specified."
                      );
                    (v = t), (this.hasBeenReset = !0);
                  },
                })
              ),
              Object.defineProperty(
                a,
                "lineAlign",
                i({}, u, {
                  get: function () {
                    return m;
                  },
                  set: function (t) {
                    var e = r(t);
                    if (!e)
                      throw new SyntaxError(
                        "An invalid or illegal string was specified."
                      );
                    (m = e), (this.hasBeenReset = !0);
                  },
                })
              ),
              Object.defineProperty(
                a,
                "position",
                i({}, u, {
                  get: function () {
                    return b;
                  },
                  set: function (t) {
                    if (t < 0 || t > 100)
                      throw new Error("Position must be between 0 and 100.");
                    (b = t), (this.hasBeenReset = !0);
                  },
                })
              ),
              Object.defineProperty(
                a,
                "positionAlign",
                i({}, u, {
                  get: function () {
                    return w;
                  },
                  set: function (t) {
                    var e = r(t);
                    if (!e)
                      throw new SyntaxError(
                        "An invalid or illegal string was specified."
                      );
                    (w = e), (this.hasBeenReset = !0);
                  },
                })
              ),
              Object.defineProperty(
                a,
                "size",
                i({}, u, {
                  get: function () {
                    return _;
                  },
                  set: function (t) {
                    if (t < 0 || t > 100)
                      throw new Error("Size must be between 0 and 100.");
                    (_ = t), (this.hasBeenReset = !0);
                  },
                })
              ),
              Object.defineProperty(
                a,
                "align",
                i({}, u, {
                  get: function () {
                    return E;
                  },
                  set: function (t) {
                    var e = r(t);
                    if (!e)
                      throw new SyntaxError(
                        "An invalid or illegal string was specified."
                      );
                    (E = e), (this.hasBeenReset = !0);
                  },
                })
              ),
              (a.displayState = void 0),
              s)
            )
              return a;
          }
          (o.prototype.getCueAsHTML = function () {
            return WebVTT.convertCueToDOMTree(window, this.text);
          }),
            (t.VTTCue = t.VTTCue || o);
        })(this);
      },
      7224: function (t, e, n) {
        var r;
        t.exports && (this.VTTRegion = n(2285).VTTRegion),
          ((r = this).VTTRegion.create = function (t) {
            var e = new r.VTTRegion();
            for (var n in t) e.hasOwnProperty(n) && (e[n] = t[n]);
            return e;
          }),
          (r.VTTRegion.fromJSON = function (t) {
            return this.create(JSON.parse(t));
          });
      },
      2285: function () {
        !(function (t) {
          var e = { "": !0, up: !0 };
          function n(t) {
            return "number" == typeof t && t >= 0 && t <= 100;
          }
          t.VTTRegion =
            t.VTTRegion ||
            function () {
              var t = 100,
                r = 3,
                i = 0,
                o = 100,
                a = 0,
                s = 100,
                u = "";
              Object.defineProperties(this, {
                width: {
                  enumerable: !0,
                  get: function () {
                    return t;
                  },
                  set: function (e) {
                    if (!n(e))
                      throw new Error("Width must be between 0 and 100.");
                    t = e;
                  },
                },
                lines: {
                  enumerable: !0,
                  get: function () {
                    return r;
                  },
                  set: function (t) {
                    if ("number" != typeof t)
                      throw new TypeError("Lines must be set to a number.");
                    r = t;
                  },
                },
                regionAnchorY: {
                  enumerable: !0,
                  get: function () {
                    return o;
                  },
                  set: function (t) {
                    if (!n(t))
                      throw new Error(
                        "RegionAnchorX must be between 0 and 100."
                      );
                    o = t;
                  },
                },
                regionAnchorX: {
                  enumerable: !0,
                  get: function () {
                    return i;
                  },
                  set: function (t) {
                    if (!n(t))
                      throw new Error(
                        "RegionAnchorY must be between 0 and 100."
                      );
                    i = t;
                  },
                },
                viewportAnchorY: {
                  enumerable: !0,
                  get: function () {
                    return s;
                  },
                  set: function (t) {
                    if (!n(t))
                      throw new Error(
                        "ViewportAnchorY must be between 0 and 100."
                      );
                    s = t;
                  },
                },
                viewportAnchorX: {
                  enumerable: !0,
                  get: function () {
                    return a;
                  },
                  set: function (t) {
                    if (!n(t))
                      throw new Error(
                        "ViewportAnchorX must be between 0 and 100."
                      );
                    a = t;
                  },
                },
                scroll: {
                  enumerable: !0,
                  get: function () {
                    return u;
                  },
                  set: function (t) {
                    var n = (function (t) {
                      return (
                        "string" == typeof t &&
                        !!e[t.toLowerCase()] &&
                        t.toLowerCase()
                      );
                    })(t);
                    if (!1 === n)
                      throw new SyntaxError(
                        "An invalid or illegal string was specified."
                      );
                    u = n;
                  },
                },
              });
            };
        })(this);
      },
      111: function (t) {
        (function () {
          var e,
            n,
            r,
            i,
            o,
            a,
            s,
            u,
            c,
            l,
            f,
            p,
            h = [].slice,
            d = {}.hasOwnProperty;
          (e = function () {
            var t, e, n, r, i, o;
            if (
              ((o = arguments[0]),
              (i = 2 <= arguments.length ? h.call(arguments, 1) : []),
              a(Object.assign))
            )
              Object.assign.apply(null, arguments);
            else
              for (t = 0, n = i.length; t < n; t++)
                if (null != (r = i[t]))
                  for (e in r) d.call(r, e) && (o[e] = r[e]);
            return o;
          }),
            (a = function (t) {
              return (
                !!t && "[object Function]" === Object.prototype.toString.call(t)
              );
            }),
            (s = function (t) {
              var e;
              return !!t && ("function" == (e = typeof t) || "object" === e);
            }),
            (i = function (t) {
              return a(Array.isArray)
                ? Array.isArray(t)
                : "[object Array]" === Object.prototype.toString.call(t);
            }),
            (o = function (t) {
              var e;
              if (i(t)) return !t.length;
              for (e in t) if (d.call(t, e)) return !1;
              return !0;
            }),
            (u = function (t) {
              var e, n;
              return (
                s(t) &&
                (n = Object.getPrototypeOf(t)) &&
                (e = n.constructor) &&
                "function" == typeof e &&
                e instanceof e &&
                Function.prototype.toString.call(e) ===
                  Function.prototype.toString.call(Object)
              );
            }),
            (p = function (t) {
              return (t.split(/[-_\s]+|(?=[A-Z][a-z])/) || []).filter(function (
                t
              ) {
                return !!t;
              });
            }),
            (n = function (t) {
              var e, n, i, o, a, s;
              for (o = "", n = e = 0, i = (a = p(t)).length; e < i; n = ++e)
                (s = a[n]), (o += n ? r(s.toLowerCase()) : s.toLowerCase());
              return o;
            }),
            (f = function (t) {
              var e, n, i, o, a, s;
              for (o = "", n = e = 0, i = (a = p(t)).length; e < i; n = ++e)
                (s = a[n]), (o += r(s.toLowerCase()));
              return o;
            }),
            (c = function (t) {
              var e, n, r, i, o;
              for (i = "", n = e = 0, r = (o = p(t)).length; e < r; n = ++e)
                i += (n ? "-" : "") + o[n].toLowerCase();
              return i;
            }),
            (l = function (t) {
              var e, n, r, i, o;
              for (i = "", n = e = 0, r = (o = p(t)).length; e < r; n = ++e)
                i += (n ? "_" : "") + o[n].toLowerCase();
              return i;
            }),
            (r = function (t) {
              return t.charAt(0).toUpperCase() + t.slice(1);
            }),
            (t.exports.assign = e),
            (t.exports.isFunction = a),
            (t.exports.isObject = s),
            (t.exports.isArray = i),
            (t.exports.isEmpty = o),
            (t.exports.isPlainObject = u),
            (t.exports.camelCase = n),
            (t.exports.titleCase = f),
            (t.exports.kebabCase = c),
            (t.exports.snakeCase = l),
            (t.exports.capitalize = r),
            (t.exports.words = p);
        }).call(this);
      },
      2750: function (t) {
        (function () {
          t.exports = (function () {
            function t(t, e, n) {
              if (
                ((this.options = t.options),
                (this.stringify = t.stringify),
                null == e)
              )
                throw new Error("Missing attribute name of element " + t.name);
              if (null == n)
                throw new Error(
                  "Missing attribute value for attribute " +
                    e +
                    " of element " +
                    t.name
                );
              (this.name = this.stringify.attName(e)),
                (this.value = this.stringify.attValue(n));
            }
            return (
              (t.prototype.clone = function () {
                return Object.create(this);
              }),
              (t.prototype.toString = function (t) {
                return this.options.writer.set(t).attribute(this);
              }),
              t
            );
          })();
        }).call(this);
      },
      6170: function (t, e, n) {
        (function () {
          var e,
            r = {}.hasOwnProperty;
          (e = n(2026)),
            (t.exports = (function (t) {
              function e(t, n) {
                if ((e.__super__.constructor.call(this, t), null == n))
                  throw new Error("Missing CDATA text");
                this.text = this.stringify.cdata(n);
              }
              return (
                (function (t, e) {
                  for (var n in e) r.call(e, n) && (t[n] = e[n]);
                  function i() {
                    this.constructor = t;
                  }
                  (i.prototype = e.prototype),
                    (t.prototype = new i()),
                    (t.__super__ = e.prototype);
                })(e, t),
                (e.prototype.clone = function () {
                  return Object.create(this);
                }),
                (e.prototype.toString = function (t) {
                  return this.options.writer.set(t).cdata(this);
                }),
                e
              );
            })(e));
        }).call(this);
      },
      2096: function (t, e, n) {
        (function () {
          var e,
            r = {}.hasOwnProperty;
          (e = n(2026)),
            (t.exports = (function (t) {
              function e(t, n) {
                if ((e.__super__.constructor.call(this, t), null == n))
                  throw new Error("Missing comment text");
                this.text = this.stringify.comment(n);
              }
              return (
                (function (t, e) {
                  for (var n in e) r.call(e, n) && (t[n] = e[n]);
                  function i() {
                    this.constructor = t;
                  }
                  (i.prototype = e.prototype),
                    (t.prototype = new i()),
                    (t.__super__ = e.prototype);
                })(e, t),
                (e.prototype.clone = function () {
                  return Object.create(this);
                }),
                (e.prototype.toString = function (t) {
                  return this.options.writer.set(t).comment(this);
                }),
                e
              );
            })(e));
        }).call(this);
      },
      1179: function (t, e, n) {
        (function () {
          var e,
            r = {}.hasOwnProperty;
          (e = n(2026)),
            (t.exports = (function (t) {
              function e(t, n, r, i, o, a) {
                if ((e.__super__.constructor.call(this, t), null == n))
                  throw new Error("Missing DTD element name");
                if (null == r) throw new Error("Missing DTD attribute name");
                if (!i) throw new Error("Missing DTD attribute type");
                if (!o) throw new Error("Missing DTD attribute default");
                if (
                  (0 !== o.indexOf("#") && (o = "#" + o),
                  !o.match(/^(#REQUIRED|#IMPLIED|#FIXED|#DEFAULT)$/))
                )
                  throw new Error(
                    "Invalid default value type; expected: #REQUIRED, #IMPLIED, #FIXED or #DEFAULT"
                  );
                if (a && !o.match(/^(#FIXED|#DEFAULT)$/))
                  throw new Error(
                    "Default value only applies to #FIXED or #DEFAULT"
                  );
                (this.elementName = this.stringify.eleName(n)),
                  (this.attributeName = this.stringify.attName(r)),
                  (this.attributeType = this.stringify.dtdAttType(i)),
                  (this.defaultValue = this.stringify.dtdAttDefault(a)),
                  (this.defaultValueType = o);
              }
              return (
                (function (t, e) {
                  for (var n in e) r.call(e, n) && (t[n] = e[n]);
                  function i() {
                    this.constructor = t;
                  }
                  (i.prototype = e.prototype),
                    (t.prototype = new i()),
                    (t.__super__ = e.prototype);
                })(e, t),
                (e.prototype.toString = function (t) {
                  return this.options.writer.set(t).dtdAttList(this);
                }),
                e
              );
            })(e));
        }).call(this);
      },
      6347: function (t, e, n) {
        (function () {
          var e,
            r = {}.hasOwnProperty;
          (e = n(2026)),
            (t.exports = (function (t) {
              function e(t, n, r) {
                if ((e.__super__.constructor.call(this, t), null == n))
                  throw new Error("Missing DTD element name");
                r || (r = "(#PCDATA)"),
                  Array.isArray(r) && (r = "(" + r.join(",") + ")"),
                  (this.name = this.stringify.eleName(n)),
                  (this.value = this.stringify.dtdElementValue(r));
              }
              return (
                (function (t, e) {
                  for (var n in e) r.call(e, n) && (t[n] = e[n]);
                  function i() {
                    this.constructor = t;
                  }
                  (i.prototype = e.prototype),
                    (t.prototype = new i()),
                    (t.__super__ = e.prototype);
                })(e, t),
                (e.prototype.toString = function (t) {
                  return this.options.writer.set(t).dtdElement(this);
                }),
                e
              );
            })(e));
        }).call(this);
      },
      9078: function (t, e, n) {
        (function () {
          var e,
            r,
            i = {}.hasOwnProperty;
          (r = n(111).isObject),
            (e = n(2026)),
            (t.exports = (function (t) {
              function e(t, n, i, o) {
                if ((e.__super__.constructor.call(this, t), null == i))
                  throw new Error("Missing entity name");
                if (null == o) throw new Error("Missing entity value");
                if (
                  ((this.pe = !!n),
                  (this.name = this.stringify.eleName(i)),
                  r(o))
                ) {
                  if (!o.pubID && !o.sysID)
                    throw new Error(
                      "Public and/or system identifiers are required for an external entity"
                    );
                  if (o.pubID && !o.sysID)
                    throw new Error(
                      "System identifier is required for a public external entity"
                    );
                  if (
                    (null != o.pubID &&
                      (this.pubID = this.stringify.dtdPubID(o.pubID)),
                    null != o.sysID &&
                      (this.sysID = this.stringify.dtdSysID(o.sysID)),
                    null != o.nData &&
                      (this.nData = this.stringify.dtdNData(o.nData)),
                    this.pe && this.nData)
                  )
                    throw new Error(
                      "Notation declaration is not allowed in a parameter entity"
                    );
                } else this.value = this.stringify.dtdEntityValue(o);
              }
              return (
                (function (t, e) {
                  for (var n in e) i.call(e, n) && (t[n] = e[n]);
                  function r() {
                    this.constructor = t;
                  }
                  (r.prototype = e.prototype),
                    (t.prototype = new r()),
                    (t.__super__ = e.prototype);
                })(e, t),
                (e.prototype.toString = function (t) {
                  return this.options.writer.set(t).dtdEntity(this);
                }),
                e
              );
            })(e));
        }).call(this);
      },
      4777: function (t, e, n) {
        (function () {
          var e,
            r = {}.hasOwnProperty;
          (e = n(2026)),
            (t.exports = (function (t) {
              function e(t, n, r) {
                if ((e.__super__.constructor.call(this, t), null == n))
                  throw new Error("Missing notation name");
                if (!r.pubID && !r.sysID)
                  throw new Error(
                    "Public or system identifiers are required for an external entity"
                  );
                (this.name = this.stringify.eleName(n)),
                  null != r.pubID &&
                    (this.pubID = this.stringify.dtdPubID(r.pubID)),
                  null != r.sysID &&
                    (this.sysID = this.stringify.dtdSysID(r.sysID));
              }
              return (
                (function (t, e) {
                  for (var n in e) r.call(e, n) && (t[n] = e[n]);
                  function i() {
                    this.constructor = t;
                  }
                  (i.prototype = e.prototype),
                    (t.prototype = new i()),
                    (t.__super__ = e.prototype);
                })(e, t),
                (e.prototype.toString = function (t) {
                  return this.options.writer.set(t).dtdNotation(this);
                }),
                e
              );
            })(e));
        }).call(this);
      },
      9077: function (t, e, n) {
        (function () {
          var e,
            r,
            i = {}.hasOwnProperty;
          (r = n(111).isObject),
            (e = n(2026)),
            (t.exports = (function (t) {
              function e(t, n, i, o) {
                var a;
                e.__super__.constructor.call(this, t),
                  r(n) &&
                    ((n = (a = n).version),
                    (i = a.encoding),
                    (o = a.standalone)),
                  n || (n = "1.0"),
                  (this.version = this.stringify.xmlVersion(n)),
                  null != i && (this.encoding = this.stringify.xmlEncoding(i)),
                  null != o &&
                    (this.standalone = this.stringify.xmlStandalone(o));
              }
              return (
                (function (t, e) {
                  for (var n in e) i.call(e, n) && (t[n] = e[n]);
                  function r() {
                    this.constructor = t;
                  }
                  (r.prototype = e.prototype),
                    (t.prototype = new r()),
                    (t.__super__ = e.prototype);
                })(e, t),
                (e.prototype.toString = function (t) {
                  return this.options.writer.set(t).declaration(this);
                }),
                e
              );
            })(e));
        }).call(this);
      },
      6544: function (t, e, n) {
        (function () {
          var e,
            r,
            i,
            o,
            a,
            s,
            u = {}.hasOwnProperty;
          (s = n(111).isObject),
            (a = n(2026)),
            (e = n(1179)),
            (i = n(9078)),
            (r = n(6347)),
            (o = n(4777)),
            (t.exports = (function (t) {
              function n(t, e, r) {
                var i, o;
                n.__super__.constructor.call(this, t),
                  (this.documentObject = t),
                  s(e) && ((e = (i = e).pubID), (r = i.sysID)),
                  null == r && ((r = (o = [e, r])[0]), (e = o[1])),
                  null != e && (this.pubID = this.stringify.dtdPubID(e)),
                  null != r && (this.sysID = this.stringify.dtdSysID(r));
              }
              return (
                (function (t, e) {
                  for (var n in e) u.call(e, n) && (t[n] = e[n]);
                  function r() {
                    this.constructor = t;
                  }
                  (r.prototype = e.prototype),
                    (t.prototype = new r()),
                    (t.__super__ = e.prototype);
                })(n, t),
                (n.prototype.element = function (t, e) {
                  var n;
                  return (n = new r(this, t, e)), this.children.push(n), this;
                }),
                (n.prototype.attList = function (t, n, r, i, o) {
                  var a;
                  return (
                    (a = new e(this, t, n, r, i, o)),
                    this.children.push(a),
                    this
                  );
                }),
                (n.prototype.entity = function (t, e) {
                  var n;
                  return (
                    (n = new i(this, !1, t, e)), this.children.push(n), this
                  );
                }),
                (n.prototype.pEntity = function (t, e) {
                  var n;
                  return (
                    (n = new i(this, !0, t, e)), this.children.push(n), this
                  );
                }),
                (n.prototype.notation = function (t, e) {
                  var n;
                  return (n = new o(this, t, e)), this.children.push(n), this;
                }),
                (n.prototype.toString = function (t) {
                  return this.options.writer.set(t).docType(this);
                }),
                (n.prototype.ele = function (t, e) {
                  return this.element(t, e);
                }),
                (n.prototype.att = function (t, e, n, r, i) {
                  return this.attList(t, e, n, r, i);
                }),
                (n.prototype.ent = function (t, e) {
                  return this.entity(t, e);
                }),
                (n.prototype.pent = function (t, e) {
                  return this.pEntity(t, e);
                }),
                (n.prototype.not = function (t, e) {
                  return this.notation(t, e);
                }),
                (n.prototype.up = function () {
                  return this.root() || this.documentObject;
                }),
                n
              );
            })(a));
        }).call(this);
      },
      6934: function (t, e, n) {
        (function () {
          var e,
            r,
            i,
            o,
            a = {}.hasOwnProperty;
          (o = n(111).isPlainObject),
            (e = n(2026)),
            (i = n(5549)),
            (r = n(6434)),
            (t.exports = (function (t) {
              function e(t) {
                e.__super__.constructor.call(this, null),
                  t || (t = {}),
                  t.writer || (t.writer = new r()),
                  (this.options = t),
                  (this.stringify = new i(t)),
                  (this.isDocument = !0);
              }
              return (
                (function (t, e) {
                  for (var n in e) a.call(e, n) && (t[n] = e[n]);
                  function r() {
                    this.constructor = t;
                  }
                  (r.prototype = e.prototype),
                    (t.prototype = new r()),
                    (t.__super__ = e.prototype);
                })(e, t),
                (e.prototype.end = function (t) {
                  var e;
                  return (
                    t
                      ? o(t) && ((e = t), (t = this.options.writer.set(e)))
                      : (t = this.options.writer),
                    t.document(this)
                  );
                }),
                (e.prototype.toString = function (t) {
                  return this.options.writer.set(t).document(this);
                }),
                e
              );
            })(e));
        }).call(this);
      },
      9227: function (t, e, n) {
        (function () {
          var e,
            r,
            i,
            o,
            a,
            s,
            u,
            c,
            l,
            f,
            p,
            h,
            d,
            g,
            y,
            v,
            m,
            b,
            w,
            _ = {}.hasOwnProperty;
          (w = n(111)),
            (m = w.isObject),
            (v = w.isFunction),
            (b = w.isPlainObject),
            (f = n(2161)),
            (r = n(6170)),
            (i = n(2096)),
            (h = n(9406)),
            (y = n(3595)),
            (p = n(9181)),
            (c = n(9077)),
            (l = n(6544)),
            (o = n(1179)),
            (s = n(9078)),
            (a = n(6347)),
            (u = n(4777)),
            (e = n(2750)),
            (g = n(5549)),
            (d = n(6434)),
            (t.exports = (function () {
              function t(t, e, n) {
                var r;
                t || (t = {}),
                  t.writer
                    ? b(t.writer) && ((r = t.writer), (t.writer = new d(r)))
                    : (t.writer = new d(t)),
                  (this.options = t),
                  (this.writer = t.writer),
                  (this.stringify = new g(t)),
                  (this.onDataCallback = e || function () {}),
                  (this.onEndCallback = n || function () {}),
                  (this.currentNode = null),
                  (this.currentLevel = -1),
                  (this.openTags = {}),
                  (this.documentStarted = !1),
                  (this.documentCompleted = !1),
                  (this.root = null);
              }
              return (
                (t.prototype.node = function (t, e, n) {
                  var r;
                  if (null == t) throw new Error("Missing node name");
                  if (this.root && -1 === this.currentLevel)
                    throw new Error("Document can only have one root node");
                  return (
                    this.openCurrent(),
                    (t = t.valueOf()),
                    null == e && (e = {}),
                    (e = e.valueOf()),
                    m(e) || ((n = (r = [e, n])[0]), (e = r[1])),
                    (this.currentNode = new f(this, t, e)),
                    (this.currentNode.children = !1),
                    this.currentLevel++,
                    (this.openTags[this.currentLevel] = this.currentNode),
                    null != n && this.text(n),
                    this
                  );
                }),
                (t.prototype.element = function (t, e, n) {
                  return this.currentNode && this.currentNode instanceof l
                    ? this.dtdElement.apply(this, arguments)
                    : this.node(t, e, n);
                }),
                (t.prototype.attribute = function (t, n) {
                  var r, i;
                  if (!this.currentNode || this.currentNode.children)
                    throw new Error(
                      "att() can only be used immediately after an ele() call in callback mode"
                    );
                  if ((null != t && (t = t.valueOf()), m(t)))
                    for (r in t)
                      _.call(t, r) && ((i = t[r]), this.attribute(r, i));
                  else
                    v(n) && (n = n.apply()),
                      (this.options.skipNullAttributes && null == n) ||
                        (this.currentNode.attributes[t] = new e(this, t, n));
                  return this;
                }),
                (t.prototype.text = function (t) {
                  var e;
                  return (
                    this.openCurrent(),
                    (e = new y(this, t)),
                    this.onData(this.writer.text(e, this.currentLevel + 1)),
                    this
                  );
                }),
                (t.prototype.cdata = function (t) {
                  var e;
                  return (
                    this.openCurrent(),
                    (e = new r(this, t)),
                    this.onData(this.writer.cdata(e, this.currentLevel + 1)),
                    this
                  );
                }),
                (t.prototype.comment = function (t) {
                  var e;
                  return (
                    this.openCurrent(),
                    (e = new i(this, t)),
                    this.onData(this.writer.comment(e, this.currentLevel + 1)),
                    this
                  );
                }),
                (t.prototype.raw = function (t) {
                  var e;
                  return (
                    this.openCurrent(),
                    (e = new h(this, t)),
                    this.onData(this.writer.raw(e, this.currentLevel + 1)),
                    this
                  );
                }),
                (t.prototype.instruction = function (t, e) {
                  var n, r, i, o, a;
                  if (
                    (this.openCurrent(),
                    null != t && (t = t.valueOf()),
                    null != e && (e = e.valueOf()),
                    Array.isArray(t))
                  )
                    for (n = 0, o = t.length; n < o; n++)
                      (r = t[n]), this.instruction(r);
                  else if (m(t))
                    for (r in t)
                      _.call(t, r) && ((i = t[r]), this.instruction(r, i));
                  else
                    v(e) && (e = e.apply()),
                      (a = new p(this, t, e)),
                      this.onData(
                        this.writer.processingInstruction(
                          a,
                          this.currentLevel + 1
                        )
                      );
                  return this;
                }),
                (t.prototype.declaration = function (t, e, n) {
                  var r;
                  if ((this.openCurrent(), this.documentStarted))
                    throw new Error("declaration() must be the first node");
                  return (
                    (r = new c(this, t, e, n)),
                    this.onData(
                      this.writer.declaration(r, this.currentLevel + 1)
                    ),
                    this
                  );
                }),
                (t.prototype.doctype = function (t, e, n) {
                  if ((this.openCurrent(), null == t))
                    throw new Error("Missing root node name");
                  if (this.root)
                    throw new Error("dtd() must come before the root node");
                  return (
                    (this.currentNode = new l(this, e, n)),
                    (this.currentNode.rootNodeName = t),
                    (this.currentNode.children = !1),
                    this.currentLevel++,
                    (this.openTags[this.currentLevel] = this.currentNode),
                    this
                  );
                }),
                (t.prototype.dtdElement = function (t, e) {
                  var n;
                  return (
                    this.openCurrent(),
                    (n = new a(this, t, e)),
                    this.onData(
                      this.writer.dtdElement(n, this.currentLevel + 1)
                    ),
                    this
                  );
                }),
                (t.prototype.attList = function (t, e, n, r, i) {
                  var a;
                  return (
                    this.openCurrent(),
                    (a = new o(this, t, e, n, r, i)),
                    this.onData(
                      this.writer.dtdAttList(a, this.currentLevel + 1)
                    ),
                    this
                  );
                }),
                (t.prototype.entity = function (t, e) {
                  var n;
                  return (
                    this.openCurrent(),
                    (n = new s(this, !1, t, e)),
                    this.onData(
                      this.writer.dtdEntity(n, this.currentLevel + 1)
                    ),
                    this
                  );
                }),
                (t.prototype.pEntity = function (t, e) {
                  var n;
                  return (
                    this.openCurrent(),
                    (n = new s(this, !0, t, e)),
                    this.onData(
                      this.writer.dtdEntity(n, this.currentLevel + 1)
                    ),
                    this
                  );
                }),
                (t.prototype.notation = function (t, e) {
                  var n;
                  return (
                    this.openCurrent(),
                    (n = new u(this, t, e)),
                    this.onData(
                      this.writer.dtdNotation(n, this.currentLevel + 1)
                    ),
                    this
                  );
                }),
                (t.prototype.up = function () {
                  if (this.currentLevel < 0)
                    throw new Error("The document node has no parent");
                  return (
                    this.currentNode
                      ? (this.currentNode.children
                          ? this.closeNode(this.currentNode)
                          : this.openNode(this.currentNode),
                        (this.currentNode = null))
                      : this.closeNode(this.openTags[this.currentLevel]),
                    delete this.openTags[this.currentLevel],
                    this.currentLevel--,
                    this
                  );
                }),
                (t.prototype.end = function () {
                  for (; this.currentLevel >= 0; ) this.up();
                  return this.onEnd();
                }),
                (t.prototype.openCurrent = function () {
                  if (this.currentNode)
                    return (
                      (this.currentNode.children = !0),
                      this.openNode(this.currentNode)
                    );
                }),
                (t.prototype.openNode = function (t) {
                  if (!t.isOpen)
                    return (
                      !this.root &&
                        0 === this.currentLevel &&
                        t instanceof f &&
                        (this.root = t),
                      this.onData(this.writer.openNode(t, this.currentLevel)),
                      (t.isOpen = !0)
                    );
                }),
                (t.prototype.closeNode = function (t) {
                  if (!t.isClosed)
                    return (
                      this.onData(this.writer.closeNode(t, this.currentLevel)),
                      (t.isClosed = !0)
                    );
                }),
                (t.prototype.onData = function (t) {
                  return (this.documentStarted = !0), this.onDataCallback(t);
                }),
                (t.prototype.onEnd = function () {
                  return (this.documentCompleted = !0), this.onEndCallback();
                }),
                (t.prototype.ele = function () {
                  return this.element.apply(this, arguments);
                }),
                (t.prototype.nod = function (t, e, n) {
                  return this.node(t, e, n);
                }),
                (t.prototype.txt = function (t) {
                  return this.text(t);
                }),
                (t.prototype.dat = function (t) {
                  return this.cdata(t);
                }),
                (t.prototype.com = function (t) {
                  return this.comment(t);
                }),
                (t.prototype.ins = function (t, e) {
                  return this.instruction(t, e);
                }),
                (t.prototype.dec = function (t, e, n) {
                  return this.declaration(t, e, n);
                }),
                (t.prototype.dtd = function (t, e, n) {
                  return this.doctype(t, e, n);
                }),
                (t.prototype.e = function (t, e, n) {
                  return this.element(t, e, n);
                }),
                (t.prototype.n = function (t, e, n) {
                  return this.node(t, e, n);
                }),
                (t.prototype.t = function (t) {
                  return this.text(t);
                }),
                (t.prototype.d = function (t) {
                  return this.cdata(t);
                }),
                (t.prototype.c = function (t) {
                  return this.comment(t);
                }),
                (t.prototype.r = function (t) {
                  return this.raw(t);
                }),
                (t.prototype.i = function (t, e) {
                  return this.instruction(t, e);
                }),
                (t.prototype.att = function () {
                  return this.currentNode && this.currentNode instanceof l
                    ? this.attList.apply(this, arguments)
                    : this.attribute.apply(this, arguments);
                }),
                (t.prototype.a = function () {
                  return this.currentNode && this.currentNode instanceof l
                    ? this.attList.apply(this, arguments)
                    : this.attribute.apply(this, arguments);
                }),
                (t.prototype.ent = function (t, e) {
                  return this.entity(t, e);
                }),
                (t.prototype.pent = function (t, e) {
                  return this.pEntity(t, e);
                }),
                (t.prototype.not = function (t, e) {
                  return this.notation(t, e);
                }),
                t
              );
            })());
        }).call(this);
      },
      2161: function (t, e, n) {
        (function () {
          var e,
            r,
            i,
            o,
            a,
            s = {}.hasOwnProperty;
          (a = n(111)),
            (o = a.isObject),
            (i = a.isFunction),
            (r = n(2026)),
            (e = n(2750)),
            (t.exports = (function (t) {
              function n(t, e, r) {
                if ((n.__super__.constructor.call(this, t), null == e))
                  throw new Error("Missing element name");
                (this.name = this.stringify.eleName(e)),
                  (this.attributes = {}),
                  null != r && this.attribute(r),
                  t.isDocument &&
                    ((this.isRoot = !0),
                    (this.documentObject = t),
                    (t.rootObject = this));
              }
              return (
                (function (t, e) {
                  for (var n in e) s.call(e, n) && (t[n] = e[n]);
                  function r() {
                    this.constructor = t;
                  }
                  (r.prototype = e.prototype),
                    (t.prototype = new r()),
                    (t.__super__ = e.prototype);
                })(n, t),
                (n.prototype.clone = function () {
                  var t, e, n, r;
                  for (e in ((n = Object.create(this)).isRoot &&
                    (n.documentObject = null),
                  (n.attributes = {}),
                  (r = this.attributes)))
                    s.call(r, e) && ((t = r[e]), (n.attributes[e] = t.clone()));
                  return (
                    (n.children = []),
                    this.children.forEach(function (t) {
                      var e;
                      return ((e = t.clone()).parent = n), n.children.push(e);
                    }),
                    n
                  );
                }),
                (n.prototype.attribute = function (t, n) {
                  var r, a;
                  if ((null != t && (t = t.valueOf()), o(t)))
                    for (r in t)
                      s.call(t, r) && ((a = t[r]), this.attribute(r, a));
                  else
                    i(n) && (n = n.apply()),
                      (this.options.skipNullAttributes && null == n) ||
                        (this.attributes[t] = new e(this, t, n));
                  return this;
                }),
                (n.prototype.removeAttribute = function (t) {
                  var e, n, r;
                  if (null == t) throw new Error("Missing attribute name");
                  if (((t = t.valueOf()), Array.isArray(t)))
                    for (n = 0, r = t.length; n < r; n++)
                      (e = t[n]), delete this.attributes[e];
                  else delete this.attributes[t];
                  return this;
                }),
                (n.prototype.toString = function (t) {
                  return this.options.writer.set(t).element(this);
                }),
                (n.prototype.att = function (t, e) {
                  return this.attribute(t, e);
                }),
                (n.prototype.a = function (t, e) {
                  return this.attribute(t, e);
                }),
                n
              );
            })(r));
        }).call(this);
      },
      2026: function (t, e, n) {
        (function () {
          var e,
            r,
            i,
            o,
            a,
            s,
            u,
            c,
            l,
            f,
            p,
            h,
            d = {}.hasOwnProperty;
          (h = n(111)),
            (p = h.isObject),
            (f = h.isFunction),
            (l = h.isEmpty),
            (a = null),
            (e = null),
            (r = null),
            (i = null),
            (o = null),
            (u = null),
            (c = null),
            (s = null),
            (t.exports = (function () {
              function t(t) {
                (this.parent = t),
                  this.parent &&
                    ((this.options = this.parent.options),
                    (this.stringify = this.parent.stringify)),
                  (this.children = []),
                  a ||
                    ((a = n(2161)),
                    (e = n(6170)),
                    (r = n(2096)),
                    (i = n(9077)),
                    (o = n(6544)),
                    (u = n(9406)),
                    (c = n(3595)),
                    (s = n(9181)));
              }
              return (
                (t.prototype.element = function (t, e, n) {
                  var r, i, o, a, s, u, c, h, g, y;
                  if (
                    ((u = null),
                    null == e && (e = {}),
                    (e = e.valueOf()),
                    p(e) || ((n = (g = [e, n])[0]), (e = g[1])),
                    null != t && (t = t.valueOf()),
                    Array.isArray(t))
                  )
                    for (o = 0, c = t.length; o < c; o++)
                      (i = t[o]), (u = this.element(i));
                  else if (f(t)) u = this.element(t.apply());
                  else if (p(t)) {
                    for (s in t)
                      if (d.call(t, s))
                        if (
                          ((y = t[s]),
                          f(y) && (y = y.apply()),
                          p(y) && l(y) && (y = null),
                          !this.options.ignoreDecorators &&
                            this.stringify.convertAttKey &&
                            0 === s.indexOf(this.stringify.convertAttKey))
                        )
                          u = this.attribute(
                            s.substr(this.stringify.convertAttKey.length),
                            y
                          );
                        else if (
                          !this.options.separateArrayItems &&
                          Array.isArray(y)
                        )
                          for (a = 0, h = y.length; a < h; a++)
                            (i = y[a]),
                              ((r = {})[s] = i),
                              (u = this.element(r));
                        else
                          p(y)
                            ? (u = this.element(s)).element(y)
                            : (u = this.element(s, y));
                  } else
                    u =
                      !this.options.ignoreDecorators &&
                      this.stringify.convertTextKey &&
                      0 === t.indexOf(this.stringify.convertTextKey)
                        ? this.text(n)
                        : !this.options.ignoreDecorators &&
                          this.stringify.convertCDataKey &&
                          0 === t.indexOf(this.stringify.convertCDataKey)
                        ? this.cdata(n)
                        : !this.options.ignoreDecorators &&
                          this.stringify.convertCommentKey &&
                          0 === t.indexOf(this.stringify.convertCommentKey)
                        ? this.comment(n)
                        : !this.options.ignoreDecorators &&
                          this.stringify.convertRawKey &&
                          0 === t.indexOf(this.stringify.convertRawKey)
                        ? this.raw(n)
                        : !this.options.ignoreDecorators &&
                          this.stringify.convertPIKey &&
                          0 === t.indexOf(this.stringify.convertPIKey)
                        ? this.instruction(
                            t.substr(this.stringify.convertPIKey.length),
                            n
                          )
                        : this.node(t, e, n);
                  if (null == u)
                    throw new Error("Could not create any elements with: " + t);
                  return u;
                }),
                (t.prototype.insertBefore = function (t, e, n) {
                  var r, i, o;
                  if (this.isRoot)
                    throw new Error("Cannot insert elements at root level");
                  return (
                    (i = this.parent.children.indexOf(this)),
                    (o = this.parent.children.splice(i)),
                    (r = this.parent.element(t, e, n)),
                    Array.prototype.push.apply(this.parent.children, o),
                    r
                  );
                }),
                (t.prototype.insertAfter = function (t, e, n) {
                  var r, i, o;
                  if (this.isRoot)
                    throw new Error("Cannot insert elements at root level");
                  return (
                    (i = this.parent.children.indexOf(this)),
                    (o = this.parent.children.splice(i + 1)),
                    (r = this.parent.element(t, e, n)),
                    Array.prototype.push.apply(this.parent.children, o),
                    r
                  );
                }),
                (t.prototype.remove = function () {
                  var t;
                  if (this.isRoot)
                    throw new Error("Cannot remove the root element");
                  return (
                    (t = this.parent.children.indexOf(this)),
                    [].splice.apply(
                      this.parent.children,
                      [t, t - t + 1].concat([])
                    ),
                    this.parent
                  );
                }),
                (t.prototype.node = function (t, e, n) {
                  var r, i;
                  return (
                    null != t && (t = t.valueOf()),
                    e || (e = {}),
                    (e = e.valueOf()),
                    p(e) || ((n = (i = [e, n])[0]), (e = i[1])),
                    (r = new a(this, t, e)),
                    null != n && r.text(n),
                    this.children.push(r),
                    r
                  );
                }),
                (t.prototype.text = function (t) {
                  var e;
                  return (e = new c(this, t)), this.children.push(e), this;
                }),
                (t.prototype.cdata = function (t) {
                  var n;
                  return (n = new e(this, t)), this.children.push(n), this;
                }),
                (t.prototype.comment = function (t) {
                  var e;
                  return (e = new r(this, t)), this.children.push(e), this;
                }),
                (t.prototype.commentBefore = function (t) {
                  var e, n;
                  return (
                    (e = this.parent.children.indexOf(this)),
                    (n = this.parent.children.splice(e)),
                    this.parent.comment(t),
                    Array.prototype.push.apply(this.parent.children, n),
                    this
                  );
                }),
                (t.prototype.commentAfter = function (t) {
                  var e, n;
                  return (
                    (e = this.parent.children.indexOf(this)),
                    (n = this.parent.children.splice(e + 1)),
                    this.parent.comment(t),
                    Array.prototype.push.apply(this.parent.children, n),
                    this
                  );
                }),
                (t.prototype.raw = function (t) {
                  var e;
                  return (e = new u(this, t)), this.children.push(e), this;
                }),
                (t.prototype.instruction = function (t, e) {
                  var n, r, i, o, a;
                  if (
                    (null != t && (t = t.valueOf()),
                    null != e && (e = e.valueOf()),
                    Array.isArray(t))
                  )
                    for (o = 0, a = t.length; o < a; o++)
                      (n = t[o]), this.instruction(n);
                  else if (p(t))
                    for (n in t)
                      d.call(t, n) && ((r = t[n]), this.instruction(n, r));
                  else
                    f(e) && (e = e.apply()),
                      (i = new s(this, t, e)),
                      this.children.push(i);
                  return this;
                }),
                (t.prototype.instructionBefore = function (t, e) {
                  var n, r;
                  return (
                    (n = this.parent.children.indexOf(this)),
                    (r = this.parent.children.splice(n)),
                    this.parent.instruction(t, e),
                    Array.prototype.push.apply(this.parent.children, r),
                    this
                  );
                }),
                (t.prototype.instructionAfter = function (t, e) {
                  var n, r;
                  return (
                    (n = this.parent.children.indexOf(this)),
                    (r = this.parent.children.splice(n + 1)),
                    this.parent.instruction(t, e),
                    Array.prototype.push.apply(this.parent.children, r),
                    this
                  );
                }),
                (t.prototype.declaration = function (t, e, n) {
                  var r, o;
                  return (
                    (r = this.document()),
                    (o = new i(r, t, e, n)),
                    r.children[0] instanceof i
                      ? (r.children[0] = o)
                      : r.children.unshift(o),
                    r.root() || r
                  );
                }),
                (t.prototype.doctype = function (t, e) {
                  var n, r, i, a, s, u, c, l, f;
                  for (
                    n = this.document(),
                      r = new o(n, t, e),
                      i = a = 0,
                      u = (l = n.children).length;
                    a < u;
                    i = ++a
                  )
                    if (l[i] instanceof o) return (n.children[i] = r), r;
                  for (i = s = 0, c = (f = n.children).length; s < c; i = ++s)
                    if (f[i].isRoot) return n.children.splice(i, 0, r), r;
                  return n.children.push(r), r;
                }),
                (t.prototype.up = function () {
                  if (this.isRoot)
                    throw new Error(
                      "The root node has no parent. Use doc() if you need to get the document object."
                    );
                  return this.parent;
                }),
                (t.prototype.root = function () {
                  var t;
                  for (t = this; t; ) {
                    if (t.isDocument) return t.rootObject;
                    if (t.isRoot) return t;
                    t = t.parent;
                  }
                }),
                (t.prototype.document = function () {
                  var t;
                  for (t = this; t; ) {
                    if (t.isDocument) return t;
                    t = t.parent;
                  }
                }),
                (t.prototype.end = function (t) {
                  return this.document().end(t);
                }),
                (t.prototype.prev = function () {
                  var t;
                  if ((t = this.parent.children.indexOf(this)) < 1)
                    throw new Error("Already at the first node");
                  return this.parent.children[t - 1];
                }),
                (t.prototype.next = function () {
                  var t;
                  if (
                    -1 === (t = this.parent.children.indexOf(this)) ||
                    t === this.parent.children.length - 1
                  )
                    throw new Error("Already at the last node");
                  return this.parent.children[t + 1];
                }),
                (t.prototype.importDocument = function (t) {
                  var e;
                  return (
                    ((e = t.root().clone()).parent = this),
                    (e.isRoot = !1),
                    this.children.push(e),
                    this
                  );
                }),
                (t.prototype.ele = function (t, e, n) {
                  return this.element(t, e, n);
                }),
                (t.prototype.nod = function (t, e, n) {
                  return this.node(t, e, n);
                }),
                (t.prototype.txt = function (t) {
                  return this.text(t);
                }),
                (t.prototype.dat = function (t) {
                  return this.cdata(t);
                }),
                (t.prototype.com = function (t) {
                  return this.comment(t);
                }),
                (t.prototype.ins = function (t, e) {
                  return this.instruction(t, e);
                }),
                (t.prototype.doc = function () {
                  return this.document();
                }),
                (t.prototype.dec = function (t, e, n) {
                  return this.declaration(t, e, n);
                }),
                (t.prototype.dtd = function (t, e) {
                  return this.doctype(t, e);
                }),
                (t.prototype.e = function (t, e, n) {
                  return this.element(t, e, n);
                }),
                (t.prototype.n = function (t, e, n) {
                  return this.node(t, e, n);
                }),
                (t.prototype.t = function (t) {
                  return this.text(t);
                }),
                (t.prototype.d = function (t) {
                  return this.cdata(t);
                }),
                (t.prototype.c = function (t) {
                  return this.comment(t);
                }),
                (t.prototype.r = function (t) {
                  return this.raw(t);
                }),
                (t.prototype.i = function (t, e) {
                  return this.instruction(t, e);
                }),
                (t.prototype.u = function () {
                  return this.up();
                }),
                (t.prototype.importXMLBuilder = function (t) {
                  return this.importDocument(t);
                }),
                t
              );
            })());
        }).call(this);
      },
      9181: function (t, e, n) {
        (function () {
          var e,
            r = {}.hasOwnProperty;
          (e = n(2026)),
            (t.exports = (function (t) {
              function e(t, n, r) {
                if ((e.__super__.constructor.call(this, t), null == n))
                  throw new Error("Missing instruction target");
                (this.target = this.stringify.insTarget(n)),
                  r && (this.value = this.stringify.insValue(r));
              }
              return (
                (function (t, e) {
                  for (var n in e) r.call(e, n) && (t[n] = e[n]);
                  function i() {
                    this.constructor = t;
                  }
                  (i.prototype = e.prototype),
                    (t.prototype = new i()),
                    (t.__super__ = e.prototype);
                })(e, t),
                (e.prototype.clone = function () {
                  return Object.create(this);
                }),
                (e.prototype.toString = function (t) {
                  return this.options.writer.set(t).processingInstruction(this);
                }),
                e
              );
            })(e));
        }).call(this);
      },
      9406: function (t, e, n) {
        (function () {
          var e,
            r = {}.hasOwnProperty;
          (e = n(2026)),
            (t.exports = (function (t) {
              function e(t, n) {
                if ((e.__super__.constructor.call(this, t), null == n))
                  throw new Error("Missing raw text");
                this.value = this.stringify.raw(n);
              }
              return (
                (function (t, e) {
                  for (var n in e) r.call(e, n) && (t[n] = e[n]);
                  function i() {
                    this.constructor = t;
                  }
                  (i.prototype = e.prototype),
                    (t.prototype = new i()),
                    (t.__super__ = e.prototype);
                })(e, t),
                (e.prototype.clone = function () {
                  return Object.create(this);
                }),
                (e.prototype.toString = function (t) {
                  return this.options.writer.set(t).raw(this);
                }),
                e
              );
            })(e));
        }).call(this);
      },
      1996: function (t, e, n) {
        (function () {
          var e,
            r,
            i,
            o,
            a,
            s,
            u,
            c,
            l,
            f,
            p,
            h,
            d,
            g = {}.hasOwnProperty;
          (u = n(9077)),
            (c = n(6544)),
            (e = n(6170)),
            (r = n(2096)),
            (l = n(2161)),
            (p = n(9406)),
            (h = n(3595)),
            (f = n(9181)),
            (i = n(1179)),
            (o = n(6347)),
            (a = n(9078)),
            (s = n(4777)),
            (d = n(751)),
            (t.exports = (function (t) {
              function n(t, e) {
                (this.stream = t), n.__super__.constructor.call(this, e);
              }
              return (
                (function (t, e) {
                  for (var n in e) g.call(e, n) && (t[n] = e[n]);
                  function r() {
                    this.constructor = t;
                  }
                  (r.prototype = e.prototype),
                    (t.prototype = new r()),
                    (t.__super__ = e.prototype);
                })(n, t),
                (n.prototype.document = function (t) {
                  var e, n, i, o, a, s, l, p;
                  for (n = 0, o = (s = t.children).length; n < o; n++)
                    (e = s[n]).isLastRootNode = !1;
                  for (
                    t.children[t.children.length - 1].isLastRootNode = !0,
                      p = [],
                      i = 0,
                      a = (l = t.children).length;
                    i < a;
                    i++
                  )
                    switch (((e = l[i]), !1)) {
                      case !(e instanceof u):
                        p.push(this.declaration(e));
                        break;
                      case !(e instanceof c):
                        p.push(this.docType(e));
                        break;
                      case !(e instanceof r):
                        p.push(this.comment(e));
                        break;
                      case !(e instanceof f):
                        p.push(this.processingInstruction(e));
                        break;
                      default:
                        p.push(this.element(e));
                    }
                  return p;
                }),
                (n.prototype.attribute = function (t) {
                  return this.stream.write(" " + t.name + '="' + t.value + '"');
                }),
                (n.prototype.cdata = function (t, e) {
                  return this.stream.write(
                    this.space(e) +
                      "<![CDATA[" +
                      t.text +
                      "]]>" +
                      this.endline(t)
                  );
                }),
                (n.prototype.comment = function (t, e) {
                  return this.stream.write(
                    this.space(e) +
                      "\x3c!-- " +
                      t.text +
                      " --\x3e" +
                      this.endline(t)
                  );
                }),
                (n.prototype.declaration = function (t, e) {
                  return (
                    this.stream.write(this.space(e)),
                    this.stream.write('<?xml version="' + t.version + '"'),
                    null != t.encoding &&
                      this.stream.write(' encoding="' + t.encoding + '"'),
                    null != t.standalone &&
                      this.stream.write(' standalone="' + t.standalone + '"'),
                    this.stream.write("?>"),
                    this.stream.write(this.endline(t))
                  );
                }),
                (n.prototype.docType = function (t, n) {
                  var u, c, l, p;
                  if (
                    (n || (n = 0),
                    this.stream.write(this.space(n)),
                    this.stream.write("<!DOCTYPE " + t.root().name),
                    t.pubID && t.sysID
                      ? this.stream.write(
                          ' PUBLIC "' + t.pubID + '" "' + t.sysID + '"'
                        )
                      : t.sysID &&
                        this.stream.write(' SYSTEM "' + t.sysID + '"'),
                    t.children.length > 0)
                  ) {
                    for (
                      this.stream.write(" ["),
                        this.stream.write(this.endline(t)),
                        c = 0,
                        l = (p = t.children).length;
                      c < l;
                      c++
                    )
                      switch (((u = p[c]), !1)) {
                        case !(u instanceof i):
                          this.dtdAttList(u, n + 1);
                          break;
                        case !(u instanceof o):
                          this.dtdElement(u, n + 1);
                          break;
                        case !(u instanceof a):
                          this.dtdEntity(u, n + 1);
                          break;
                        case !(u instanceof s):
                          this.dtdNotation(u, n + 1);
                          break;
                        case !(u instanceof e):
                          this.cdata(u, n + 1);
                          break;
                        case !(u instanceof r):
                          this.comment(u, n + 1);
                          break;
                        case !(u instanceof f):
                          this.processingInstruction(u, n + 1);
                          break;
                        default:
                          throw new Error(
                            "Unknown DTD node type: " + u.constructor.name
                          );
                      }
                    this.stream.write("]");
                  }
                  return (
                    this.stream.write(">"), this.stream.write(this.endline(t))
                  );
                }),
                (n.prototype.element = function (t, n) {
                  var i, o, a, s, u, c, d, y;
                  for (u in (n || (n = 0),
                  (y = this.space(n)),
                  this.stream.write(y + "<" + t.name),
                  (c = t.attributes)))
                    g.call(c, u) && ((i = c[u]), this.attribute(i));
                  if (
                    0 === t.children.length ||
                    t.children.every(function (t) {
                      return "" === t.value;
                    })
                  )
                    this.allowEmpty
                      ? this.stream.write("></" + t.name + ">")
                      : this.stream.write("/>");
                  else if (
                    this.pretty &&
                    1 === t.children.length &&
                    null != t.children[0].value
                  )
                    this.stream.write(">"),
                      this.stream.write(t.children[0].value),
                      this.stream.write("</" + t.name + ">");
                  else {
                    for (
                      this.stream.write(">" + this.newline),
                        a = 0,
                        s = (d = t.children).length;
                      a < s;
                      a++
                    )
                      switch (((o = d[a]), !1)) {
                        case !(o instanceof e):
                          this.cdata(o, n + 1);
                          break;
                        case !(o instanceof r):
                          this.comment(o, n + 1);
                          break;
                        case !(o instanceof l):
                          this.element(o, n + 1);
                          break;
                        case !(o instanceof p):
                          this.raw(o, n + 1);
                          break;
                        case !(o instanceof h):
                          this.text(o, n + 1);
                          break;
                        case !(o instanceof f):
                          this.processingInstruction(o, n + 1);
                          break;
                        default:
                          throw new Error(
                            "Unknown XML node type: " + o.constructor.name
                          );
                      }
                    this.stream.write(y + "</" + t.name + ">");
                  }
                  return this.stream.write(this.endline(t));
                }),
                (n.prototype.processingInstruction = function (t, e) {
                  return (
                    this.stream.write(this.space(e) + "<?" + t.target),
                    t.value && this.stream.write(" " + t.value),
                    this.stream.write("?>" + this.endline(t))
                  );
                }),
                (n.prototype.raw = function (t, e) {
                  return this.stream.write(
                    this.space(e) + t.value + this.endline(t)
                  );
                }),
                (n.prototype.text = function (t, e) {
                  return this.stream.write(
                    this.space(e) + t.value + this.endline(t)
                  );
                }),
                (n.prototype.dtdAttList = function (t, e) {
                  return (
                    this.stream.write(
                      this.space(e) +
                        "<!ATTLIST " +
                        t.elementName +
                        " " +
                        t.attributeName +
                        " " +
                        t.attributeType
                    ),
                    "#DEFAULT" !== t.defaultValueType &&
                      this.stream.write(" " + t.defaultValueType),
                    t.defaultValue &&
                      this.stream.write(' "' + t.defaultValue + '"'),
                    this.stream.write(">" + this.endline(t))
                  );
                }),
                (n.prototype.dtdElement = function (t, e) {
                  return this.stream.write(
                    this.space(e) +
                      "<!ELEMENT " +
                      t.name +
                      " " +
                      t.value +
                      ">" +
                      this.endline(t)
                  );
                }),
                (n.prototype.dtdEntity = function (t, e) {
                  return (
                    this.stream.write(this.space(e) + "<!ENTITY"),
                    t.pe && this.stream.write(" %"),
                    this.stream.write(" " + t.name),
                    t.value
                      ? this.stream.write(' "' + t.value + '"')
                      : (t.pubID && t.sysID
                          ? this.stream.write(
                              ' PUBLIC "' + t.pubID + '" "' + t.sysID + '"'
                            )
                          : t.sysID &&
                            this.stream.write(' SYSTEM "' + t.sysID + '"'),
                        t.nData && this.stream.write(" NDATA " + t.nData)),
                    this.stream.write(">" + this.endline(t))
                  );
                }),
                (n.prototype.dtdNotation = function (t, e) {
                  return (
                    this.stream.write(this.space(e) + "<!NOTATION " + t.name),
                    t.pubID && t.sysID
                      ? this.stream.write(
                          ' PUBLIC "' + t.pubID + '" "' + t.sysID + '"'
                        )
                      : t.pubID
                      ? this.stream.write(' PUBLIC "' + t.pubID + '"')
                      : t.sysID &&
                        this.stream.write(' SYSTEM "' + t.sysID + '"'),
                    this.stream.write(">" + this.endline(t))
                  );
                }),
                (n.prototype.endline = function (t) {
                  return t.isLastRootNode ? "" : this.newline;
                }),
                n
              );
            })(d));
        }).call(this);
      },
      6434: function (t, e, n) {
        (function () {
          var e,
            r,
            i,
            o,
            a,
            s,
            u,
            c,
            l,
            f,
            p,
            h,
            d,
            g = {}.hasOwnProperty;
          (u = n(9077)),
            (c = n(6544)),
            (e = n(6170)),
            (r = n(2096)),
            (l = n(2161)),
            (p = n(9406)),
            (h = n(3595)),
            (f = n(9181)),
            (i = n(1179)),
            (o = n(6347)),
            (a = n(9078)),
            (s = n(4777)),
            (d = n(751)),
            (t.exports = (function (t) {
              function n(t) {
                n.__super__.constructor.call(this, t);
              }
              return (
                (function (t, e) {
                  for (var n in e) g.call(e, n) && (t[n] = e[n]);
                  function r() {
                    this.constructor = t;
                  }
                  (r.prototype = e.prototype),
                    (t.prototype = new r()),
                    (t.__super__ = e.prototype);
                })(n, t),
                (n.prototype.document = function (t) {
                  var e, n, i, o, a;
                  for (o = "", n = 0, i = (a = t.children).length; n < i; n++)
                    (e = a[n]),
                      (o += function () {
                        switch (!1) {
                          case !(e instanceof u):
                            return this.declaration(e);
                          case !(e instanceof c):
                            return this.docType(e);
                          case !(e instanceof r):
                            return this.comment(e);
                          case !(e instanceof f):
                            return this.processingInstruction(e);
                          default:
                            return this.element(e, 0);
                        }
                      }.call(this));
                  return (
                    this.pretty &&
                      o.slice(-this.newline.length) === this.newline &&
                      (o = o.slice(0, -this.newline.length)),
                    o
                  );
                }),
                (n.prototype.attribute = function (t) {
                  return " " + t.name + '="' + t.value + '"';
                }),
                (n.prototype.cdata = function (t, e) {
                  return (
                    this.space(e) + "<![CDATA[" + t.text + "]]>" + this.newline
                  );
                }),
                (n.prototype.comment = function (t, e) {
                  return (
                    this.space(e) +
                    "\x3c!-- " +
                    t.text +
                    " --\x3e" +
                    this.newline
                  );
                }),
                (n.prototype.declaration = function (t, e) {
                  var n;
                  return (
                    (n = this.space(e)),
                    (n += '<?xml version="' + t.version + '"'),
                    null != t.encoding &&
                      (n += ' encoding="' + t.encoding + '"'),
                    null != t.standalone &&
                      (n += ' standalone="' + t.standalone + '"'),
                    (n += "?>") + this.newline
                  );
                }),
                (n.prototype.docType = function (t, n) {
                  var u, c, l, p, h;
                  if (
                    (n || (n = 0),
                    (p = this.space(n)),
                    (p += "<!DOCTYPE " + t.root().name),
                    t.pubID && t.sysID
                      ? (p += ' PUBLIC "' + t.pubID + '" "' + t.sysID + '"')
                      : t.sysID && (p += ' SYSTEM "' + t.sysID + '"'),
                    t.children.length > 0)
                  ) {
                    for (
                      p += " [",
                        p += this.newline,
                        c = 0,
                        l = (h = t.children).length;
                      c < l;
                      c++
                    )
                      (u = h[c]),
                        (p += function () {
                          switch (!1) {
                            case !(u instanceof i):
                              return this.dtdAttList(u, n + 1);
                            case !(u instanceof o):
                              return this.dtdElement(u, n + 1);
                            case !(u instanceof a):
                              return this.dtdEntity(u, n + 1);
                            case !(u instanceof s):
                              return this.dtdNotation(u, n + 1);
                            case !(u instanceof e):
                              return this.cdata(u, n + 1);
                            case !(u instanceof r):
                              return this.comment(u, n + 1);
                            case !(u instanceof f):
                              return this.processingInstruction(u, n + 1);
                            default:
                              throw new Error(
                                "Unknown DTD node type: " + u.constructor.name
                              );
                          }
                        }.call(this));
                    p += "]";
                  }
                  return (p += ">") + this.newline;
                }),
                (n.prototype.element = function (t, n) {
                  var i, o, a, s, u, c, d, y, v;
                  for (u in (n || (n = 0),
                  (c = ""),
                  (c += (v = this.space(n)) + "<" + t.name),
                  (d = t.attributes)))
                    g.call(d, u) && ((i = d[u]), (c += this.attribute(i)));
                  if (
                    0 === t.children.length ||
                    t.children.every(function (t) {
                      return "" === t.value;
                    })
                  )
                    this.allowEmpty
                      ? (c += "></" + t.name + ">" + this.newline)
                      : (c += "/>" + this.newline);
                  else if (
                    this.pretty &&
                    1 === t.children.length &&
                    null != t.children[0].value
                  )
                    (c += ">"),
                      (c += t.children[0].value),
                      (c += "</" + t.name + ">" + this.newline);
                  else {
                    for (
                      c += ">" + this.newline,
                        a = 0,
                        s = (y = t.children).length;
                      a < s;
                      a++
                    )
                      (o = y[a]),
                        (c += function () {
                          switch (!1) {
                            case !(o instanceof e):
                              return this.cdata(o, n + 1);
                            case !(o instanceof r):
                              return this.comment(o, n + 1);
                            case !(o instanceof l):
                              return this.element(o, n + 1);
                            case !(o instanceof p):
                              return this.raw(o, n + 1);
                            case !(o instanceof h):
                              return this.text(o, n + 1);
                            case !(o instanceof f):
                              return this.processingInstruction(o, n + 1);
                            default:
                              throw new Error(
                                "Unknown XML node type: " + o.constructor.name
                              );
                          }
                        }.call(this));
                    c += v + "</" + t.name + ">" + this.newline;
                  }
                  return c;
                }),
                (n.prototype.processingInstruction = function (t, e) {
                  var n;
                  return (
                    (n = this.space(e) + "<?" + t.target),
                    t.value && (n += " " + t.value),
                    n + "?>" + this.newline
                  );
                }),
                (n.prototype.raw = function (t, e) {
                  return this.space(e) + t.value + this.newline;
                }),
                (n.prototype.text = function (t, e) {
                  return this.space(e) + t.value + this.newline;
                }),
                (n.prototype.dtdAttList = function (t, e) {
                  var n;
                  return (
                    (n =
                      this.space(e) +
                      "<!ATTLIST " +
                      t.elementName +
                      " " +
                      t.attributeName +
                      " " +
                      t.attributeType),
                    "#DEFAULT" !== t.defaultValueType &&
                      (n += " " + t.defaultValueType),
                    t.defaultValue && (n += ' "' + t.defaultValue + '"'),
                    n + ">" + this.newline
                  );
                }),
                (n.prototype.dtdElement = function (t, e) {
                  return (
                    this.space(e) +
                    "<!ELEMENT " +
                    t.name +
                    " " +
                    t.value +
                    ">" +
                    this.newline
                  );
                }),
                (n.prototype.dtdEntity = function (t, e) {
                  var n;
                  return (
                    (n = this.space(e) + "<!ENTITY"),
                    t.pe && (n += " %"),
                    (n += " " + t.name),
                    t.value
                      ? (n += ' "' + t.value + '"')
                      : (t.pubID && t.sysID
                          ? (n += ' PUBLIC "' + t.pubID + '" "' + t.sysID + '"')
                          : t.sysID && (n += ' SYSTEM "' + t.sysID + '"'),
                        t.nData && (n += " NDATA " + t.nData)),
                    n + ">" + this.newline
                  );
                }),
                (n.prototype.dtdNotation = function (t, e) {
                  var n;
                  return (
                    (n = this.space(e) + "<!NOTATION " + t.name),
                    t.pubID && t.sysID
                      ? (n += ' PUBLIC "' + t.pubID + '" "' + t.sysID + '"')
                      : t.pubID
                      ? (n += ' PUBLIC "' + t.pubID + '"')
                      : t.sysID && (n += ' SYSTEM "' + t.sysID + '"'),
                    n + ">" + this.newline
                  );
                }),
                (n.prototype.openNode = function (t, e) {
                  var n, r, i, o;
                  if ((e || (e = 0), t instanceof l)) {
                    for (r in ((i = this.space(e) + "<" + t.name),
                    (o = t.attributes)))
                      g.call(o, r) && ((n = o[r]), (i += this.attribute(n)));
                    return i + (t.children ? ">" : "/>") + this.newline;
                  }
                  return (
                    (i = this.space(e) + "<!DOCTYPE " + t.rootNodeName),
                    t.pubID && t.sysID
                      ? (i += ' PUBLIC "' + t.pubID + '" "' + t.sysID + '"')
                      : t.sysID && (i += ' SYSTEM "' + t.sysID + '"'),
                    i + (t.children ? " [" : ">") + this.newline
                  );
                }),
                (n.prototype.closeNode = function (t, e) {
                  switch ((e || (e = 0), !1)) {
                    case !(t instanceof l):
                      return this.space(e) + "</" + t.name + ">" + this.newline;
                    case !(t instanceof c):
                      return this.space(e) + "]>" + this.newline;
                  }
                }),
                n
              );
            })(d));
        }).call(this);
      },
      5549: function (t, e, n) {
        (function () {
          var e,
            r,
            i,
            o,
            a,
            s = {}.hasOwnProperty;
          (i = n(111)),
            (e = i.camelCase),
            (a = i.titleCase),
            (r = i.kebabCase),
            (o = i.snakeCase),
            (t.exports = (function () {
              function t(t) {
                var e, n, r, i, o;
                for (r in ((this.assertLegalChar =
                  ((e = this.assertLegalChar),
                  (n = this),
                  function () {
                    return e.apply(n, arguments);
                  })),
                t || (t = {}),
                (this.allowSurrogateChars = t.allowSurrogateChars),
                (this.noDoubleEncoding = t.noDoubleEncoding),
                (this.textCase = t.textCase),
                (i = t.stringify || {})))
                  s.call(i, r) && ((o = i[r]), (this[r] = o));
              }
              return (
                (t.prototype.eleName = function (t) {
                  return (
                    (t = "" + t || ""),
                    (t = this.applyCase(t)),
                    this.assertLegalChar(t)
                  );
                }),
                (t.prototype.eleText = function (t) {
                  return (
                    (t = "" + t || ""), this.assertLegalChar(this.elEscape(t))
                  );
                }),
                (t.prototype.cdata = function (t) {
                  return (
                    (t = (t = "" + t || "").replace("]]>", "]]]]><![CDATA[>")),
                    this.assertLegalChar(t)
                  );
                }),
                (t.prototype.comment = function (t) {
                  if ((t = "" + t || "").match(/--/))
                    throw new Error(
                      "Comment text cannot contain double-hypen: " + t
                    );
                  return this.assertLegalChar(t);
                }),
                (t.prototype.raw = function (t) {
                  return "" + t || "";
                }),
                (t.prototype.attName = function (t) {
                  return (t = "" + t || ""), this.applyCase(t);
                }),
                (t.prototype.attValue = function (t) {
                  return (t = "" + t || ""), this.attEscape(t);
                }),
                (t.prototype.insTarget = function (t) {
                  return "" + t || "";
                }),
                (t.prototype.insValue = function (t) {
                  if ((t = "" + t || "").match(/\?>/))
                    throw new Error(
                      "Invalid processing instruction value: " + t
                    );
                  return t;
                }),
                (t.prototype.xmlVersion = function (t) {
                  if (!(t = "" + t || "").match(/1\.[0-9]+/))
                    throw new Error("Invalid version number: " + t);
                  return t;
                }),
                (t.prototype.xmlEncoding = function (t) {
                  if (
                    !(t = "" + t || "").match(/^[A-Za-z](?:[A-Za-z0-9._-]|-)*$/)
                  )
                    throw new Error("Invalid encoding: " + t);
                  return t;
                }),
                (t.prototype.xmlStandalone = function (t) {
                  return t ? "yes" : "no";
                }),
                (t.prototype.dtdPubID = function (t) {
                  return "" + t || "";
                }),
                (t.prototype.dtdSysID = function (t) {
                  return "" + t || "";
                }),
                (t.prototype.dtdElementValue = function (t) {
                  return "" + t || "";
                }),
                (t.prototype.dtdAttType = function (t) {
                  return "" + t || "";
                }),
                (t.prototype.dtdAttDefault = function (t) {
                  return null != t ? "" + t || "" : t;
                }),
                (t.prototype.dtdEntityValue = function (t) {
                  return "" + t || "";
                }),
                (t.prototype.dtdNData = function (t) {
                  return "" + t || "";
                }),
                (t.prototype.convertAttKey = "@"),
                (t.prototype.convertPIKey = "?"),
                (t.prototype.convertTextKey = "#text"),
                (t.prototype.convertCDataKey = "#cdata"),
                (t.prototype.convertCommentKey = "#comment"),
                (t.prototype.convertRawKey = "#raw"),
                (t.prototype.assertLegalChar = function (t) {
                  var e, n;
                  if (
                    ((e = this.allowSurrogateChars
                      ? /[\u0000-\u0008\u000B-\u000C\u000E-\u001F\uFFFE-\uFFFF]/
                      : /[\u0000-\u0008\u000B-\u000C\u000E-\u001F\uD800-\uDFFF\uFFFE-\uFFFF]/),
                    (n = t.match(e)))
                  )
                    throw new Error(
                      "Invalid character (" +
                        n +
                        ") in string: " +
                        t +
                        " at index " +
                        n.index
                    );
                  return t;
                }),
                (t.prototype.applyCase = function (t) {
                  switch (this.textCase) {
                    case "camel":
                      return e(t);
                    case "title":
                      return a(t);
                    case "kebab":
                    case "lower":
                      return r(t);
                    case "snake":
                      return o(t);
                    case "upper":
                      return r(t).toUpperCase();
                    default:
                      return t;
                  }
                }),
                (t.prototype.elEscape = function (t) {
                  var e;
                  return (
                    (e = this.noDoubleEncoding ? /(?!&\S+;)&/g : /&/g),
                    t
                      .replace(e, "&amp;")
                      .replace(/</g, "&lt;")
                      .replace(/>/g, "&gt;")
                      .replace(/\r/g, "&#xD;")
                  );
                }),
                (t.prototype.attEscape = function (t) {
                  var e;
                  return (
                    (e = this.noDoubleEncoding ? /(?!&\S+;)&/g : /&/g),
                    t
                      .replace(e, "&amp;")
                      .replace(/</g, "&lt;")
                      .replace(/"/g, "&quot;")
                      .replace(/\t/g, "&#x9;")
                      .replace(/\n/g, "&#xA;")
                      .replace(/\r/g, "&#xD;")
                  );
                }),
                t
              );
            })());
        }).call(this);
      },
      3595: function (t, e, n) {
        (function () {
          var e,
            r = {}.hasOwnProperty;
          (e = n(2026)),
            (t.exports = (function (t) {
              function e(t, n) {
                if ((e.__super__.constructor.call(this, t), null == n))
                  throw new Error("Missing element text");
                this.value = this.stringify.eleText(n);
              }
              return (
                (function (t, e) {
                  for (var n in e) r.call(e, n) && (t[n] = e[n]);
                  function i() {
                    this.constructor = t;
                  }
                  (i.prototype = e.prototype),
                    (t.prototype = new i()),
                    (t.__super__ = e.prototype);
                })(e, t),
                (e.prototype.clone = function () {
                  return Object.create(this);
                }),
                (e.prototype.toString = function (t) {
                  return this.options.writer.set(t).text(this);
                }),
                e
              );
            })(e));
        }).call(this);
      },
      751: function (t) {
        (function () {
          var e = {}.hasOwnProperty;
          t.exports = (function () {
            function t(t) {
              var n, r, i, o, a, s, u;
              for (n in (t || (t = {}),
              (this.pretty = t.pretty || !1),
              (this.allowEmpty = null != (r = t.allowEmpty) && r),
              this.pretty
                ? ((this.indent = null != (i = t.indent) ? i : "  "),
                  (this.newline = null != (o = t.newline) ? o : "\n"),
                  (this.offset = null != (a = t.offset) ? a : 0))
                : ((this.indent = ""), (this.newline = ""), (this.offset = 0)),
              (s = t.writer || {})))
                e.call(s, n) && ((u = s[n]), (this[n] = u));
            }
            return (
              (t.prototype.set = function (t) {
                var n, r, i;
                for (n in (t || (t = {}),
                "pretty" in t && (this.pretty = t.pretty),
                "allowEmpty" in t && (this.allowEmpty = t.allowEmpty),
                this.pretty
                  ? ((this.indent = "indent" in t ? t.indent : "  "),
                    (this.newline = "newline" in t ? t.newline : "\n"),
                    (this.offset = "offset" in t ? t.offset : 0))
                  : ((this.indent = ""),
                    (this.newline = ""),
                    (this.offset = 0)),
                (r = t.writer || {})))
                  e.call(r, n) && ((i = r[n]), (this[n] = i));
                return this;
              }),
              (t.prototype.space = function (t) {
                return this.pretty
                  ? new Array((t || 0) + this.offset + 1).join(this.indent)
                  : "";
              }),
              t
            );
          })();
        }).call(this);
      },
      5532: function (t, e, n) {
        (function () {
          var e, r, i, o, a, s, u;
          (u = n(111)),
            (a = u.assign),
            (s = u.isFunction),
            (e = n(6934)),
            (r = n(9227)),
            (o = n(6434)),
            (i = n(1996)),
            (t.exports.create = function (t, n, r, i) {
              var o, s;
              if (null == t) throw new Error("Root element needs a name");
              return (
                (i = a({}, n, r, i)),
                (s = (o = new e(i)).element(t)),
                i.headless ||
                  (o.declaration(i),
                  (null == i.pubID && null == i.sysID) || o.doctype(i)),
                s
              );
            }),
            (t.exports.begin = function (t, n, i) {
              var o;
              return (
                s(t) && ((n = (o = [t, n])[0]), (i = o[1]), (t = {})),
                n ? new r(t, n, i) : new e(t)
              );
            }),
            (t.exports.stringWriter = function (t) {
              return new o(t);
            }),
            (t.exports.streamWriter = function (t, e) {
              return new i(t, e);
            });
        }).call(this);
      },
      8994: (t, e, n) => {
        var r = n(8764).Buffer,
          i = n(8501),
          o = n(9267),
          a = n(8575),
          s = n(9567),
          u = n(2475),
          c = n(1105);
        function l(t, e) {
          if (0 == this instanceof l) return new l(t, e);
          if (
            ("string" == typeof t &&
              (((t = a.parse(t)).host = t.hostname), (t.path = t.pathname)),
            void 0 !== t.url)
          ) {
            var n = a.parse(t.url);
            (t.host = n.hostname), (t.path = n.pathname), (t.port = n.port);
          }
          var i = {
            "User-Agent": "NodeJS XML-RPC Client",
            "Content-Type": "text/xml",
            Accept: "text/xml",
            "Accept-Charset": "UTF8",
            Connection: "Keep-Alive",
          };
          if (
            ((t.headers = t.headers || {}),
            null == t.headers.Authorization &&
              null != t.basic_auth &&
              null != t.basic_auth.user &&
              null != t.basic_auth.pass)
          ) {
            var o = t.basic_auth.user + ":" + t.basic_auth.pass;
            t.headers.Authorization = "Basic " + new r(o).toString("base64");
          }
          for (var s in i) void 0 === t.headers[s] && (t.headers[s] = i[s]);
          (t.method = "POST"),
            (this.options = t),
            (this.isSecure = e),
            (this.headersProcessors = {
              processors: [],
              composeRequest: function (t) {
                this.processors.forEach(function (e) {
                  e.composeRequest(t);
                });
              },
              parseResponse: function (t) {
                this.processors.forEach(function (e) {
                  e.parseResponse(t);
                });
              },
            }),
            t.cookies &&
              ((this.cookies = new c()),
              this.headersProcessors.processors.unshift(this.cookies));
        }
        (l.prototype.methodCall = function (t, e, n) {
          var a = this.options,
            c = s.serializeMethodCall(t, e, a.encoding),
            l = this.isSecure ? o : i;
          (a.headers["Content-Length"] = r.byteLength(c, "utf8")),
            this.headersProcessors.composeRequest(a.headers);
          var f = l.request(
            a,
            function (t) {
              var e = [];
              function r(n) {
                return (
                  Object.defineProperty(n, "req", { value: f }),
                  Object.defineProperty(n, "res", { value: t }),
                  Object.defineProperty(n, "body", { value: e.join("") }),
                  n
                );
              }
              t.on("data", function (t) {
                e.push(t);
              }),
                404 == t.statusCode
                  ? n(r(new Error("Not Found")))
                  : (this.headersProcessors.parseResponse(t.headers),
                    new u(a.responseEncoding).deserializeMethodResponse(
                      t,
                      function (t, e) {
                        t && (t = r(t)), n(t, e);
                      }
                    ));
            }.bind(this)
          );
          f.on("error", n), f.write(c, "utf8"), f.end();
        }),
          (l.prototype.getCookie = function (t) {
            if (!this.cookies)
              throw "Cookies support is not turned on for this client instance";
            return this.cookies.get(t);
          }),
          (l.prototype.setCookie = function (t, e) {
            if (!this.cookies)
              throw "Cookies support is not turned on for this client instance";
            return this.cookies.set(t, e), this;
          }),
          (t.exports = l);
      },
      1105: (t) => {
        function e() {
          this.cookies = {};
        }
        (e.prototype = {
          get: function (t) {
            return this.cookies[t] && this.checkNotExpired(t)
              ? this.cookies[t].value
              : null;
          },
          set: function (t, e, n) {
            var r =
              "object" == typeof n
                ? {
                    value: e,
                    expires: n.expires,
                    secure: n.secure || !1,
                    new: n.new || !1,
                  }
                : { value: e };
            this.checkNotExpired(t, r) && (this.cookies[t] = r);
          },
          getExpirationDate: function (t) {
            return this.cookies[t] ? this.cookies[t].expires : null;
          },
          checkNotExpired: function (t, e) {
            void 0 === e && (e = this.cookies[t]);
            var n = new Date();
            return !(
              e &&
              e.expires &&
              n > e.expires &&
              (delete this.cookies[t], 1)
            );
          },
          parseResponse: function (t) {
            var e = t["set-cookie"];
            e &&
              e.forEach(
                function (t) {
                  var e = t.split(";"),
                    n = e.shift().split("="),
                    r = {};
                  e.forEach(function (t) {
                    if (0 == (t = t.trim()).toLowerCase().indexOf("expires")) {
                      var e = t.split("=")[1].trim();
                      r.expires = new Date(e);
                    }
                  }),
                    this.set(n[0].trim(), n[1].trim(), r);
                }.bind(this)
              );
          },
          composeRequest: function (t) {
            0 != Object.keys(this.cookies).length &&
              (t.Cookie = this.toString());
          },
          toString: function () {
            return Object.keys(this.cookies)
              .filter(this.checkNotExpired.bind(this))
              .map(
                function (t) {
                  return t + "=" + this.cookies[t].value;
                }.bind(this)
              )
              .join(";");
          },
        }),
          (t.exports = e);
      },
      9196: (t) => {
        var e = (t.exports = function (t) {
          this.raw = t;
        });
        (e.prototype.serialize = function (t) {
          return t.ele(this.tagName).txt(this.raw);
        }),
          (e.prototype.tagName = "customType");
      },
      2140: (t) => {
        var e = function (t) {
          (this.opts = {}), this.setOpts(t);
        };
        (e.DEFAULT_OPTIONS = {
          colons: !0,
          hyphens: !1,
          local: !0,
          ms: !1,
          offset: !1,
        }),
          (e.ISO8601 = new RegExp(
            "([0-9]{4})([-]?([0-9]{2}))([-]?([0-9]{2}))(T([0-9]{2})(((:?([0-9]{2}))?((:?([0-9]{2}))?(.([0-9]+))?))?)(Z|([+-]([0-9]{2}(:?([0-9]{2}))?)))?)?"
          )),
          (e.prototype.setOpts = function (t) {
            t || (t = e.DEFAULT_OPTIONS);
            var n = this;
            Object.keys(e.DEFAULT_OPTIONS).forEach(function (r) {
              n.opts[r] = t.hasOwnProperty(r) ? t[r] : e.DEFAULT_OPTIONS[r];
            });
          }),
          (e.prototype.decodeIso8601 = function (t) {
            var n = t.toString().match(e.ISO8601);
            if (!n)
              throw new Error(
                "Expected a ISO8601 datetime but got '" + t + "'"
              );
            var r = [
              [n[1], n[3] || "01", n[5] || "01"].join("-"),
              "T",
              [n[7] || "00", n[11] || "00", n[14] || "00"].join(":"),
              ".",
              n[16] || "000",
            ].join("");
            return (
              (r +=
                void 0 !== n[17]
                  ? n[17] + (n[19] && void 0 === n[20] ? "00" : "")
                  : e.formatCurrentOffset(new Date(r))),
              new Date(r)
            );
          }),
          (e.prototype.encodeIso8601 = function (t) {
            var n = this.opts.local
              ? e.getLocalDateParts(t)
              : e.getUTCDateParts(t);
            return [
              [n[0], n[1], n[2]].join(this.opts.hyphens ? "-" : ""),
              "T",
              [n[3], n[4], n[5]].join(this.opts.colons ? ":" : ""),
              this.opts.ms ? "." + n[6] : "",
              this.opts.local
                ? this.opts.offset
                  ? e.formatCurrentOffset(t)
                  : ""
                : "Z",
            ].join("");
          }),
          (e.getUTCDateParts = function (t) {
            return [
              t.getUTCFullYear(),
              e.zeroPad(t.getUTCMonth() + 1, 2),
              e.zeroPad(t.getUTCDate(), 2),
              e.zeroPad(t.getUTCHours(), 2),
              e.zeroPad(t.getUTCMinutes(), 2),
              e.zeroPad(t.getUTCSeconds(), 2),
              e.zeroPad(t.getUTCMilliseconds(), 3),
            ];
          }),
          (e.getLocalDateParts = function (t) {
            return [
              t.getFullYear(),
              e.zeroPad(t.getMonth() + 1, 2),
              e.zeroPad(t.getDate(), 2),
              e.zeroPad(t.getHours(), 2),
              e.zeroPad(t.getMinutes(), 2),
              e.zeroPad(t.getSeconds(), 2),
              e.zeroPad(t.getMilliseconds(), 3),
            ];
          }),
          (e.zeroPad = function (t, e) {
            for (var n = "" + t; n.length < e; ) n = "0" + n;
            return n;
          }),
          (e.formatCurrentOffset = function (t) {
            var n = (t || new Date()).getTimezoneOffset();
            return 0 === n
              ? "Z"
              : [
                  n < 0 ? "+" : "-",
                  e.zeroPad(Math.abs(Math.floor(n / 60)), 2),
                  ":",
                  e.zeroPad(Math.abs(n % 60), 2),
                ].join("");
          }),
          (t.exports = new e());
      },
      2475: (t, e, n) => {
        var r = n(8764).Buffer,
          i = n(6099),
          o = n(2140),
          a = function (t) {
            (this.type = null),
              (this.responseType = null),
              (this.stack = []),
              (this.marks = []),
              (this.data = []),
              (this.methodname = null),
              (this.encoding = t || "utf8"),
              (this.value = !1),
              (this.callback = null),
              (this.error = null),
              (this.parser = i.createStream()),
              this.parser.on("opentag", this.onOpentag.bind(this)),
              this.parser.on("closetag", this.onClosetag.bind(this)),
              this.parser.on("text", this.onText.bind(this)),
              this.parser.on("cdata", this.onCDATA.bind(this)),
              this.parser.on("end", this.onDone.bind(this)),
              this.parser.on("error", this.onError.bind(this));
          };
        (a.prototype.deserializeMethodResponse = function (t, e) {
          var n = this;
          (this.callback = function (t, r) {
            t
              ? e(t)
              : r.length > 1
              ? e(new Error("Response has more than one param"))
              : "methodresponse" !== n.type
              ? e(new Error("Not a method response"))
              : n.responseType
              ? e(null, r[0])
              : e(new Error("Invalid method response"));
          }),
            t.setEncoding(this.encoding),
            t.on("error", this.onError.bind(this)),
            t.pipe(this.parser);
        }),
          (a.prototype.deserializeMethodCall = function (t, e) {
            var n = this;
            (this.callback = function (t, r) {
              t
                ? e(t)
                : "methodcall" !== n.type
                ? e(new Error("Not a method call"))
                : n.methodname
                ? e(null, n.methodname, r)
                : e(new Error("Method call did not contain a method name"));
            }),
              t.setEncoding(this.encoding),
              t.on("error", this.onError.bind(this)),
              t.pipe(this.parser);
          }),
          (a.prototype.onDone = function () {
            var t, e;
            this.error ||
              (null === this.type || this.marks.length
                ? this.callback(new Error("Invalid XML-RPC message"))
                : "fault" === this.responseType
                ? this.callback(
                    ((t = this.stack[0]),
                    ((e = new Error(
                      "XML-RPC fault" +
                        (t.faultString ? ": " + t.faultString : "")
                    )).code = t.faultCode),
                    (e.faultCode = t.faultCode),
                    (e.faultString = t.faultString),
                    e)
                  )
                : this.callback(void 0, this.stack));
          }),
          (a.prototype.onError = function (t) {
            this.error ||
              ((this.error = "string" == typeof t ? new Error(t) : t),
              this.callback(this.error));
          }),
          (a.prototype.push = function (t) {
            this.stack.push(t);
          }),
          (a.prototype.onOpentag = function (t) {
            ("ARRAY" !== t.name && "STRUCT" !== t.name) ||
              this.marks.push(this.stack.length),
              (this.data = []),
              (this.value = "VALUE" === t.name);
          }),
          (a.prototype.onText = function (t) {
            this.data.push(t);
          }),
          (a.prototype.onCDATA = function (t) {
            this.data.push(t);
          }),
          (a.prototype.onClosetag = function (t) {
            var e = this.data.join("");
            try {
              switch (t) {
                case "BOOLEAN":
                  this.endBoolean(e);
                  break;
                case "INT":
                case "I4":
                  this.endInt(e);
                  break;
                case "I8":
                  this.endI8(e);
                  break;
                case "DOUBLE":
                  this.endDouble(e);
                  break;
                case "STRING":
                case "NAME":
                  this.endString(e);
                  break;
                case "ARRAY":
                  this.endArray(e);
                  break;
                case "STRUCT":
                  this.endStruct(e);
                  break;
                case "BASE64":
                  this.endBase64(e);
                  break;
                case "DATETIME.ISO8601":
                  this.endDateTime(e);
                  break;
                case "VALUE":
                  this.endValue(e);
                  break;
                case "PARAMS":
                  this.endParams(e);
                  break;
                case "FAULT":
                  this.endFault(e);
                  break;
                case "METHODRESPONSE":
                  this.endMethodResponse(e);
                  break;
                case "METHODNAME":
                  this.endMethodName(e);
                  break;
                case "METHODCALL":
                  this.endMethodCall(e);
                  break;
                case "NIL":
                  this.endNil(e);
                  break;
                case "DATA":
                case "PARAM":
                case "MEMBER":
                  break;
                default:
                  this.onError("Unknown XML-RPC tag '" + t + "'");
              }
            } catch (t) {
              this.onError(t);
            }
          }),
          (a.prototype.endNil = function (t) {
            this.push(null), (this.value = !1);
          }),
          (a.prototype.endBoolean = function (t) {
            if ("1" === t) this.push(!0);
            else {
              if ("0" !== t)
                throw new Error("Illegal boolean value '" + t + "'");
              this.push(!1);
            }
            this.value = !1;
          }),
          (a.prototype.endInt = function (t) {
            var e = parseInt(t, 10);
            if (isNaN(e))
              throw new Error("Expected an integer but got '" + t + "'");
            this.push(e), (this.value = !1);
          }),
          (a.prototype.endDouble = function (t) {
            var e = parseFloat(t);
            if (isNaN(e))
              throw new Error("Expected a double but got '" + t + "'");
            this.push(e), (this.value = !1);
          }),
          (a.prototype.endString = function (t) {
            this.push(t), (this.value = !1);
          }),
          (a.prototype.endArray = function (t) {
            var e = this.marks.pop();
            this.stack.splice(e, this.stack.length - e, this.stack.slice(e)),
              (this.value = !1);
          }),
          (a.prototype.endStruct = function (t) {
            for (
              var e = this.marks.pop(), n = {}, r = this.stack.slice(e), i = 0;
              i < r.length;
              i += 2
            )
              n[r[i]] = r[i + 1];
            this.stack.splice(e, this.stack.length - e, n), (this.value = !1);
          }),
          (a.prototype.endBase64 = function (t) {
            var e = new r(t, "base64");
            this.push(e), (this.value = !1);
          }),
          (a.prototype.endDateTime = function (t) {
            var e = o.decodeIso8601(t);
            this.push(e), (this.value = !1);
          });
        var s = /^-?\d+$/;
        (a.prototype.endI8 = function (t) {
          if (!s.test(t))
            throw new Error("Expected integer (I8) value but got '" + t + "'");
          this.endString(t);
        }),
          (a.prototype.endValue = function (t) {
            this.value && this.endString(t);
          }),
          (a.prototype.endParams = function (t) {
            this.responseType = "params";
          }),
          (a.prototype.endFault = function (t) {
            this.responseType = "fault";
          }),
          (a.prototype.endMethodResponse = function (t) {
            this.type = "methodresponse";
          }),
          (a.prototype.endMethodName = function (t) {
            this.methodname = t;
          }),
          (a.prototype.endMethodCall = function (t) {
            this.type = "methodcall";
          }),
          (t.exports = a);
      },
      9567: (t, e, n) => {
        var r = n(8764).Buffer,
          i = n(5532),
          o = n(2140),
          a = n(9196);
        function s(t, e) {
          for (
            var n = [{ value: t, xml: e }], i = null, o = null, s = null;
            n.length > 0;

          )
            if (void 0 !== (i = n[n.length - 1]).index)
              (s = u(i)) ? n.push(s) : n.pop();
            else
              switch (((o = i.xml.ele("value")), typeof i.value)) {
                case "boolean":
                  c(i.value, o), n.pop();
                  break;
                case "string":
                  f(i.value, o), n.pop();
                  break;
                case "number":
                  p(i.value, o), n.pop();
                  break;
                case "object":
                  null === i.value
                    ? (o.ele("nil"), n.pop())
                    : i.value instanceof Date
                    ? (h(i.value, o), n.pop())
                    : r.isBuffer(i.value)
                    ? (d(i.value, o), n.pop())
                    : i.value instanceof a
                    ? (i.value.serialize(o), n.pop())
                    : (Array.isArray(i.value)
                        ? (i.xml = o.ele("array").ele("data"))
                        : ((i.xml = o.ele("struct")),
                          (i.keys = Object.keys(i.value))),
                      (i.index = 0),
                      (s = u(i)) ? n.push(s) : n.pop());
                  break;
                default:
                  n.pop();
              }
        }
        function u(t) {
          var e = null;
          if (t.keys) {
            if (t.index < t.keys.length) {
              var n = t.keys[t.index++],
                r = t.xml.ele("member").ele("name").text(n).up();
              e = { value: t.value[n], xml: r };
            }
          } else
            t.index < t.value.length &&
              ((e = { value: t.value[t.index], xml: t.xml }), t.index++);
          return e;
        }
        function c(t, e) {
          e.ele("boolean").txt(t ? 1 : 0);
        }
        (e.serializeMethodCall = function (t, e, n) {
          e = e || [];
          var r = { version: "1.0", allowSurrogateChars: !0 };
          n && (r.encoding = n);
          var o = i
            .create("methodCall", r)
            .ele("methodName")
            .txt(t)
            .up()
            .ele("params");
          return (
            e.forEach(function (t) {
              s(t, o.ele("param"));
            }),
            o.doc().toString()
          );
        }),
          (e.serializeMethodResponse = function (t) {
            var e = i
              .create("methodResponse", {
                version: "1.0",
                allowSurrogateChars: !0,
              })
              .ele("params")
              .ele("param");
            return s(t, e), e.doc().toString();
          }),
          (e.serializeFault = function (t) {
            var e = i
              .create("methodResponse", {
                version: "1.0",
                allowSurrogateChars: !0,
              })
              .ele("fault");
            return s(t, e), e.doc().toString();
          });
        var l = /^(?![^<&]*]]>[^<&]*)[^<&]*$/;
        function f(t, e) {
          0 === t.length
            ? e.ele("string")
            : l.test(t)
            ? e.ele("string").txt(t)
            : e.ele("string").d(t);
        }
        function p(t, e) {
          t % 1 == 0 ? e.ele("int").txt(t) : e.ele("double").txt(t);
        }
        function h(t, e) {
          e.ele("dateTime.iso8601").txt(o.encodeIso8601(t));
        }
        function d(t, e) {
          e.ele("base64").txt(t.toString("base64"));
        }
      },
      8714: (t, e, n) => {
        var r = n(4155),
          i = n(8501),
          o = n(9267),
          a = n(8575),
          s = n(7187).EventEmitter,
          u = n(9567),
          c = n(2475);
        function l(t, e, n) {
          if (0 == this instanceof l) return new l(t, e);
          n = n || function () {};
          var s = this;
          function f(t, e) {
            new c().deserializeMethodCall(t, function (t, n, r) {
              Object.prototype.hasOwnProperty.call(s._events, n)
                ? s.emit(n, null, r, function (t, n) {
                    var r;
                    (r =
                      null !== t
                        ? u.serializeFault(t)
                        : u.serializeMethodResponse(n)),
                      e.writeHead(200, { "Content-Type": "text/xml" }),
                      e.end(r);
                  })
                : (s.emit("NotFound", n, r), e.writeHead(404), e.end());
            });
          }
          "string" == typeof t &&
            (((t = a.parse(t)).host = t.hostname), (t.path = t.pathname)),
            (this.httpServer = e ? o.createServer(t, f) : i.createServer(f)),
            r.nextTick(
              function () {
                this.httpServer.listen(t.port, t.host, n);
              }.bind(this)
            ),
            (this.close = function (t) {
              this.httpServer.once("close", t), this.httpServer.close();
            }.bind(this));
        }
        (l.prototype.__proto__ = s.prototype), (t.exports = l);
      },
      9115: (t, e, n) => {
        var r = n(8994),
          i = n(8714),
          o = n(9196),
          a = n(2140),
          s = e;
        (s.createClient = function (t) {
          return new r(t, !1);
        }),
          (s.createSecureClient = function (t) {
            return new r(t, !0);
          }),
          (s.createServer = function (t, e) {
            return new i(t, !1, e);
          }),
          (s.createSecureServer = function (t, e) {
            return new i(t, !0, e);
          }),
          (s.CustomType = o),
          (s.dateFormatter = a);
      },
      7529: (t) => {
        t.exports = function () {
          for (var t = {}, n = 0; n < arguments.length; n++) {
            var r = arguments[n];
            for (var i in r) e.call(r, i) && (t[i] = r[i]);
          }
          return t;
        };
        var e = Object.prototype.hasOwnProperty;
      },
      4654: () => {},
      2361: () => {},
      4616: () => {},
      7061: (t, e, n) => {
        var r = n(8698).default;
        function i() {
          "use strict";
          (t.exports = i =
            function () {
              return n;
            }),
            (t.exports.__esModule = !0),
            (t.exports.default = t.exports);
          var e,
            n = {},
            o = Object.prototype,
            a = o.hasOwnProperty,
            s =
              Object.defineProperty ||
              function (t, e, n) {
                t[e] = n.value;
              },
            u = "function" == typeof Symbol ? Symbol : {},
            c = u.iterator || "@@iterator",
            l = u.asyncIterator || "@@asyncIterator",
            f = u.toStringTag || "@@toStringTag";
          function p(t, e, n) {
            return (
              Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              t[e]
            );
          }
          try {
            p({}, "");
          } catch (e) {
            p = function (t, e, n) {
              return (t[e] = n);
            };
          }
          function h(t, e, n, r) {
            var i = e && e.prototype instanceof w ? e : w,
              o = Object.create(i.prototype),
              a = new C(r || []);
            return s(o, "_invoke", { value: k(t, n, a) }), o;
          }
          function d(t, e, n) {
            try {
              return { type: "normal", arg: t.call(e, n) };
            } catch (t) {
              return { type: "throw", arg: t };
            }
          }
          n.wrap = h;
          var g = "suspendedStart",
            y = "suspendedYield",
            v = "executing",
            m = "completed",
            b = {};
          function w() {}
          function _() {}
          function E() {}
          var S = {};
          p(S, c, function () {
            return this;
          });
          var T = Object.getPrototypeOf,
            x = T && T(T(D([])));
          x && x !== o && a.call(x, c) && (S = x);
          var O = (E.prototype = w.prototype = Object.create(S));
          function I(t) {
            ["next", "throw", "return"].forEach(function (e) {
              p(t, e, function (t) {
                return this._invoke(e, t);
              });
            });
          }
          function A(t, e) {
            function n(i, o, s, u) {
              var c = d(t[i], t, o);
              if ("throw" !== c.type) {
                var l = c.arg,
                  f = l.value;
                return f && "object" == r(f) && a.call(f, "__await")
                  ? e.resolve(f.__await).then(
                      function (t) {
                        n("next", t, s, u);
                      },
                      function (t) {
                        n("throw", t, s, u);
                      }
                    )
                  : e.resolve(f).then(
                      function (t) {
                        (l.value = t), s(l);
                      },
                      function (t) {
                        return n("throw", t, s, u);
                      }
                    );
              }
              u(c.arg);
            }
            var i;
            s(this, "_invoke", {
              value: function (t, r) {
                function o() {
                  return new e(function (e, i) {
                    n(t, r, e, i);
                  });
                }
                return (i = i ? i.then(o, o) : o());
              },
            });
          }
          function k(t, n, r) {
            var i = g;
            return function (o, a) {
              if (i === v) throw new Error("Generator is already running");
              if (i === m) {
                if ("throw" === o) throw a;
                return { value: e, done: !0 };
              }
              for (r.method = o, r.arg = a; ; ) {
                var s = r.delegate;
                if (s) {
                  var u = R(s, r);
                  if (u) {
                    if (u === b) continue;
                    return u;
                  }
                }
                if ("next" === r.method) r.sent = r._sent = r.arg;
                else if ("throw" === r.method) {
                  if (i === g) throw ((i = m), r.arg);
                  r.dispatchException(r.arg);
                } else "return" === r.method && r.abrupt("return", r.arg);
                i = v;
                var c = d(t, n, r);
                if ("normal" === c.type) {
                  if (((i = r.done ? m : y), c.arg === b)) continue;
                  return { value: c.arg, done: r.done };
                }
                "throw" === c.type &&
                  ((i = m), (r.method = "throw"), (r.arg = c.arg));
              }
            };
          }
          function R(t, n) {
            var r = n.method,
              i = t.iterator[r];
            if (i === e)
              return (
                (n.delegate = null),
                ("throw" === r &&
                  t.iterator.return &&
                  ((n.method = "return"),
                  (n.arg = e),
                  R(t, n),
                  "throw" === n.method)) ||
                  ("return" !== r &&
                    ((n.method = "throw"),
                    (n.arg = new TypeError(
                      "The iterator does not provide a '" + r + "' method"
                    )))),
                b
              );
            var o = d(i, t.iterator, n.arg);
            if ("throw" === o.type)
              return (
                (n.method = "throw"), (n.arg = o.arg), (n.delegate = null), b
              );
            var a = o.arg;
            return a
              ? a.done
                ? ((n[t.resultName] = a.value),
                  (n.next = t.nextLoc),
                  "return" !== n.method && ((n.method = "next"), (n.arg = e)),
                  (n.delegate = null),
                  b)
                : a
              : ((n.method = "throw"),
                (n.arg = new TypeError("iterator result is not an object")),
                (n.delegate = null),
                b);
          }
          function P(t) {
            var e = { tryLoc: t[0] };
            1 in t && (e.catchLoc = t[1]),
              2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
              this.tryEntries.push(e);
          }
          function N(t) {
            var e = t.completion || {};
            (e.type = "normal"), delete e.arg, (t.completion = e);
          }
          function C(t) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              t.forEach(P, this),
              this.reset(!0);
          }
          function D(t) {
            if (t || "" === t) {
              var n = t[c];
              if (n) return n.call(t);
              if ("function" == typeof t.next) return t;
              if (!isNaN(t.length)) {
                var i = -1,
                  o = function n() {
                    for (; ++i < t.length; )
                      if (a.call(t, i))
                        return (n.value = t[i]), (n.done = !1), n;
                    return (n.value = e), (n.done = !0), n;
                  };
                return (o.next = o);
              }
            }
            throw new TypeError(r(t) + " is not iterable");
          }
          return (
            (_.prototype = E),
            s(O, "constructor", { value: E, configurable: !0 }),
            s(E, "constructor", { value: _, configurable: !0 }),
            (_.displayName = p(E, f, "GeneratorFunction")),
            (n.isGeneratorFunction = function (t) {
              var e = "function" == typeof t && t.constructor;
              return (
                !!e &&
                (e === _ || "GeneratorFunction" === (e.displayName || e.name))
              );
            }),
            (n.mark = function (t) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, E)
                  : ((t.__proto__ = E), p(t, f, "GeneratorFunction")),
                (t.prototype = Object.create(O)),
                t
              );
            }),
            (n.awrap = function (t) {
              return { __await: t };
            }),
            I(A.prototype),
            p(A.prototype, l, function () {
              return this;
            }),
            (n.AsyncIterator = A),
            (n.async = function (t, e, r, i, o) {
              void 0 === o && (o = Promise);
              var a = new A(h(t, e, r, i), o);
              return n.isGeneratorFunction(e)
                ? a
                : a.next().then(function (t) {
                    return t.done ? t.value : a.next();
                  });
            }),
            I(O),
            p(O, f, "Generator"),
            p(O, c, function () {
              return this;
            }),
            p(O, "toString", function () {
              return "[object Generator]";
            }),
            (n.keys = function (t) {
              var e = Object(t),
                n = [];
              for (var r in e) n.push(r);
              return (
                n.reverse(),
                function t() {
                  for (; n.length; ) {
                    var r = n.pop();
                    if (r in e) return (t.value = r), (t.done = !1), t;
                  }
                  return (t.done = !0), t;
                }
              );
            }),
            (n.values = D),
            (C.prototype = {
              constructor: C,
              reset: function (t) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = e),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = e),
                  this.tryEntries.forEach(N),
                  !t)
                )
                  for (var n in this)
                    "t" === n.charAt(0) &&
                      a.call(this, n) &&
                      !isNaN(+n.slice(1)) &&
                      (this[n] = e);
              },
              stop: function () {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval;
              },
              dispatchException: function (t) {
                if (this.done) throw t;
                var n = this;
                function r(r, i) {
                  return (
                    (s.type = "throw"),
                    (s.arg = t),
                    (n.next = r),
                    i && ((n.method = "next"), (n.arg = e)),
                    !!i
                  );
                }
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var o = this.tryEntries[i],
                    s = o.completion;
                  if ("root" === o.tryLoc) return r("end");
                  if (o.tryLoc <= this.prev) {
                    var u = a.call(o, "catchLoc"),
                      c = a.call(o, "finallyLoc");
                    if (u && c) {
                      if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                      if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                    } else if (u) {
                      if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                    } else {
                      if (!c)
                        throw new Error(
                          "try statement without catch or finally"
                        );
                      if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (t, e) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                  var r = this.tryEntries[n];
                  if (
                    r.tryLoc <= this.prev &&
                    a.call(r, "finallyLoc") &&
                    this.prev < r.finallyLoc
                  ) {
                    var i = r;
                    break;
                  }
                }
                i &&
                  ("break" === t || "continue" === t) &&
                  i.tryLoc <= e &&
                  e <= i.finallyLoc &&
                  (i = null);
                var o = i ? i.completion : {};
                return (
                  (o.type = t),
                  (o.arg = e),
                  i
                    ? ((this.method = "next"), (this.next = i.finallyLoc), b)
                    : this.complete(o)
                );
              },
              complete: function (t, e) {
                if ("throw" === t.type) throw t.arg;
                return (
                  "break" === t.type || "continue" === t.type
                    ? (this.next = t.arg)
                    : "return" === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === t.type && e && (this.next = e),
                  b
                );
              },
              finish: function (t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var n = this.tryEntries[e];
                  if (n.finallyLoc === t)
                    return this.complete(n.completion, n.afterLoc), N(n), b;
                }
              },
              catch: function (t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var n = this.tryEntries[e];
                  if (n.tryLoc === t) {
                    var r = n.completion;
                    if ("throw" === r.type) {
                      var i = r.arg;
                      N(n);
                    }
                    return i;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function (t, n, r) {
                return (
                  (this.delegate = {
                    iterator: D(t),
                    resultName: n,
                    nextLoc: r,
                  }),
                  "next" === this.method && (this.arg = e),
                  b
                );
              },
            }),
            n
          );
        }
        (t.exports = i),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports);
      },
      8698: (t) => {
        function e(n) {
          return (
            (t.exports = e =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            (t.exports.__esModule = !0),
            (t.exports.default = t.exports),
            e(n)
          );
        }
        (t.exports = e),
          (t.exports.__esModule = !0),
          (t.exports.default = t.exports);
      },
      4687: (t, e, n) => {
        var r = n(7061)();
        t.exports = r;
        try {
          regeneratorRuntime = r;
        } catch (t) {
          "object" == typeof globalThis
            ? (globalThis.regeneratorRuntime = r)
            : Function("r", "regeneratorRuntime = r")(r);
        }
      },
    },
    e = {};
  function n(r) {
    var i = e[r];
    if (void 0 !== i) return i.exports;
    var o = (e[r] = { id: r, loaded: !1, exports: {} });
    return t[r].call(o.exports, o, o.exports, n), (o.loaded = !0), o.exports;
  }
  (n.amdO = {}),
    (n.n = (t) => {
      var e = t && t.__esModule ? () => t.default : () => t;
      return n.d(e, { a: e }), e;
    }),
    (n.d = (t, e) => {
      for (var r in e)
        n.o(e, r) &&
          !n.o(t, r) &&
          Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
    }),
    (n.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (t) {
        if ("object" == typeof window) return window;
      }
    })()),
    (n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (n.r = (t) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (n.nmd = (t) => ((t.paths = []), t.children || (t.children = []), t)),
    (() => {
      "use strict";
      var t = {};
      n.r(t),
        n.d(t, {
          decodeHtmlSpecialChar: () => C,
          getGAClientId: () => F,
          getI18nWebURL: () => M,
          getMonthId: () => U,
          hexToRGBA: () => N,
          sleep: () => P,
          storageGet: () => j,
          storageMerge: () => D,
          storageSet: () => L,
          urlAddParams: () => B,
        });
      var e = {};
      n.r(e),
        n.d(e, {
          IdentifyOperation: () => Ft,
          LogLevel: () => Z,
          PluginType: () => St,
          RevenueProperty: () => qt,
          ServerZone: () => Pt,
          SpecialEventType: () => Vt,
          Status: () => At,
          TransportType: () => Ht,
        });
      var r = {};
      function i(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function o(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var n =
              null == t
                ? null
                : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                  t["@@iterator"];
            if (null != n) {
              var r,
                i,
                o,
                a,
                s = [],
                u = !0,
                c = !1;
              try {
                if (((o = (n = n.call(t)).next), 0 === e)) {
                  if (Object(n) !== n) return;
                  u = !1;
                } else
                  for (
                    ;
                    !(u = (r = o.call(n)).done) &&
                    (s.push(r.value), s.length !== e);
                    u = !0
                  );
              } catch (t) {
                (c = !0), (i = t);
              } finally {
                try {
                  if (
                    !u &&
                    null != n.return &&
                    ((a = n.return()), Object(a) !== a)
                  )
                    return;
                } finally {
                  if (c) throw i;
                }
              }
              return s;
            }
          })(t, e) ||
          (function (t, e) {
            if (t) {
              if ("string" == typeof t) return i(t, e);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              return (
                "Object" === n && t.constructor && (n = t.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(t)
                  : "Arguments" === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  ? i(t, e)
                  : void 0
              );
            }
          })(t, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function a(t, e, n, r, i, o, a) {
        try {
          var s = t[o](a),
            u = s.value;
        } catch (t) {
          return void n(t);
        }
        s.done ? e(u) : Promise.resolve(u).then(r, i);
      }
      function s(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (r, i) {
            var o = t.apply(e, n);
            function s(t) {
              a(o, r, i, s, u, "next", t);
            }
            function u(t) {
              a(o, r, i, s, u, "throw", t);
            }
            s(void 0);
          });
        };
      }
      n.r(r),
        n.d(r, {
          Identify: () => Yt,
          Revenue: () => Kt,
          Types: () => e,
          add: () => fn,
          createInstance: () => un,
          extendSession: () => pn,
          flush: () => hn,
          getDeviceId: () => dn,
          getSessionId: () => gn,
          getUserId: () => yn,
          groupIdentify: () => vn,
          identify: () => mn,
          init: () => bn,
          logEvent: () => wn,
          remove: () => _n,
          reset: () => En,
          revenue: () => Sn,
          runQueuedFunctions: () => rn,
          setDeviceId: () => Tn,
          setGroup: () => xn,
          setOptOut: () => On,
          setSessionId: () => In,
          setTransport: () => An,
          setUserId: () => kn,
          track: () => Rn,
        });
      var u = n(4687),
        c = n.n(u),
        l = n(9332),
        f = {
          supportLangs: [
            { a: "ar", l: "عربي" },
            { a: "bg", l: "български" },
            { a: "zh-CN", l: "中文-简体" },
            { a: "zh-TW", l: "中文-繁體" },
            { a: "cs", l: "čeština" },
            { a: "da", l: "Dansk" },
            { a: "nl", l: "Nederlands" },
            { a: "en", l: "English" },
            { a: "et", l: "Eesti" },
            { a: "fi", l: "Suomi" },
            { a: "fr", l: "Français" },
            { a: "de", l: "Deutsch" },
            { a: "el", l: "Ελληνικά" },
            { a: "hu", l: "Magyar" },
            { a: "it", l: "Italiano" },
            { a: "ja", l: "日本語" },
            { a: "ko", l: "한국어" },
            { a: "pl", l: "Polski" },
            { a: "pt-BR", l: "Português(Brasil)" },
            { a: "pt-PT", l: "Português(Portugal)" },
            { a: "ro", l: "Română" },
            { a: "ru", l: "Pусский" },
            { a: "sl", l: "Slovenščina" },
            { a: "es", l: "Español" },
            { a: "sv", l: "Svenska" },
            { a: "th", l: "ภาษาไทย" },
            { a: "vi", l: "Tiếng Việt" },
            { a: "tr", l: "Türk" },
            { a: "fil", l: "Filipino" },
            { a: "ms", l: "Malay" },
            { a: "ur", l: "اوردو" },
            { a: "uk", l: "УкраїнськаName" },
            { a: "iw", l: "עִברִית" },
            { a: "sk", l: "slovenský" },
            { a: "id", l: "Indonesia" },
            { a: "ca", l: "català" },
            { a: "fa", l: "فارسی" },
            { a: "am", l: "አማርኛ" },
            { a: "eu", l: "euskara" },
            { a: "bn", l: "বাংলা" },
            { a: "hr", l: "Hrvatski" },
            { a: "gu", l: "ગુજરાતી" },
            { a: "hi", l: "हिंदी" },
            { a: "is", l: "íslenskur" },
            { a: "kn", l: "ಕನ್ನಡ" },
            { a: "lv", l: "latviski" },
            { a: "lt", l: "lietuvių" },
            { a: "ml", l: "മലയാളം" },
            { a: "mr", l: "मराठीर" },
            { a: "no", l: "norsk" },
            { a: "sr", l: "Српски" },
            { a: "sw", l: "kiswahili" },
            { a: "ta", l: "தமிழ்த" },
            { a: "te", l: "తెలుగుల" },
            { a: "cy", l: "Cymraeg" },
            { a: "ckb", l: "کوردی(سۆلانی)" },
            { a: "ht", l: "Kreyòl ayisyen" },
          ],
          storageKeys: { gaClientId: "ga.clientid" },
        };
      (f.env = { name: l.env.name }),
        (f.ga = { uaId: l.env.ga_ua_id }),
        (f.cues = { transOnceLength: 100, checkTailLength: 20 }),
        (f.web = {
          host: l.env.web,
          bye: l.env.web + "/bye",
          pricing: l.env.web + "#pricing",
          supported_sites: l.env.web + "/docs/supported-sites",
          tutorial: l.env.web + "/docs/how-to-use",
          faq: l.env.web + "/docs/faqs",
          blog_update: l.env.web + "/blog/tags/update",
          contact: l.env.web + "/docs/contact",
          affiliate_program: l.env.web + "/docs/affiliate-program",
          i18n: { nonDefaultLocales: ["zh-CN", "zh-TW"] },
        }),
        (f.dashboard = {
          host: l.env.dashboard,
          reigster: l.env.dashboard + "/register",
        }),
        (f.backend = {
          host: l.env.backend,
          translate: l.env.backend + "/translate",
          usage: l.env.backend + "/usage",
          account: l.env.backend + "/account",
          os: "https://api.opensubtitles.org:443/xml-rpc",
          dictionary: l.env.backend + "/dictionary",
          synthesize: l.env.backend + "/synthesize",
        }),
        (f.localeInfoMap = {
          ar: { lang: "Arabic" },
          bn: { lang: "Bengali" },
          bg: { lang: "Bulgarian" },
          ca: { lang: "Catalan" },
          cs: { lang: "Czech" },
          da: { lang: "Danish" },
          de: { lang: "German" },
          el: { lang: "Greek" },
          en: { lang: "English" },
          "en-US": { lang: "English(US)" },
          "en-GB": { lang: "English(UK)" },
          es: { lang: "Spanish" },
          et: { lang: "Estonian" },
          eu: { lang: "Basque" },
          nl: { lang: "Dutch" },
          fi: { lang: "Finnish" },
          fil: { lang: "Filipino" },
          fr: { lang: "French" },
          hi: { lang: "Hindi" },
          hu: { lang: "Hungarian" },
          is: { lang: "Icelandic" },
          id: { lang: "Indonesian" },
          it: { lang: "Italian" },
          ja: { lang: "Japanese" },
          ko: { lang: "Korean" },
          ms: { lang: "Malay" },
          no: { lang: "Norwegian" },
          pl: { lang: "Polish" },
          "pt-BR": { lang: "Portuguese(Brazil)" },
          "pt-PT": { lang: "Portuguese(Portugal)" },
          ro: { lang: "Romanian" },
          ru: { lang: "Russian" },
          sk: { lang: "Slovak" },
          sl: { lang: "Slovenian" },
          sv: { lang: "Swedish" },
          th: { lang: "Thai" },
          tr: { lang: "Turkish" },
          uk: { lang: "Ukrainian" },
          vi: { lang: "Vietnamese" },
          zh: { lang: "Chinese" },
          "zh-CN": { lang: "Chinese(Simplified)" },
          "zh-TW": { lang: "Chinese(Traditional)" },
        }),
        (f.subtSettings = {
          default: {
            subt1: {
              color: "#ffffff",
              size: 20,
              weight: "bold",
              opacity: 1,
              bgcolor: "#222222",
              bgopacity: 0.5,
            },
            subt2: {
              color: "#ffffff",
              size: 18,
              weight: "bold",
              opacity: 1,
              bgcolor: "#222222",
              bgopacity: 0.5,
            },
            position: { x: 0, y: 0.1 },
          },
          preset: [
            {
              name: "preset 01",
              category: "subtitle",
              style: {
                color: "#ffffff",
                size: 20,
                weight: "bold",
                opacity: 1,
                bgcolor: "#222222",
                bgopacity: 0.5,
              },
            },
            {
              name: "preset 02",
              category: "subtitle",
              style: {
                color: "#ff9800",
                size: 24,
                weight: "bold",
                opacity: 0.95,
                bgcolor: "#222222",
                bgopacity: 0.7,
              },
            },
            {
              name: "preset 03",
              category: "subtitle",
              style: {
                color: "#00ff7f",
                size: 23,
                weight: "normal",
                opacity: 0.9,
                bgcolor: "#ff0000",
                bgopacity: 0.6,
              },
            },
            {
              name: "preset 04",
              category: "subtitle",
              style: {
                color: "#f4f460",
                size: 25,
                weight: "bold",
                opacity: 0.9,
                bgcolor: "#222222",
                bgopacity: 0.05,
              },
            },
          ],
        }),
        (f.trial = { mtMinutes: 15 }),
        (f.osLangs = [
          { id: "all", name: "All" },
          { id: "abk", name: "Abkhazian" },
          { id: "afr", name: "Afrikaans" },
          { id: "alb", name: "Albanian" },
          { id: "ara", name: "Arabic" },
          { id: "arg", name: "Aragonese" },
          { id: "arm", name: "Armenian" },
          { id: "asm", name: "Assamese" },
          { id: "ast", name: "Asturian" },
          { id: "aze", name: "Azerbaijani" },
          { id: "baq", name: "Basque" },
          { id: "bel", name: "Belarusian" },
          { id: "ben", name: "Bengali" },
          { id: "bos", name: "Bosnian" },
          { id: "bre", name: "Breton" },
          { id: "bul", name: "Bulgarian" },
          { id: "bur", name: "Burmese" },
          { id: "cat", name: "Catalan" },
          { id: "chi", name: "Chinese (simplified)" },
          { id: "zht", name: "Chinese (traditional)" },
          { id: "hrv", name: "Croatian" },
          { id: "cze", name: "Czech" },
          { id: "dan", name: "Danish" },
          { id: "prs", name: "Dari" },
          { id: "dut", name: "Dutch" },
          { id: "eng", name: "English" },
          { id: "epo", name: "Esperanto" },
          { id: "est", name: "Estonian" },
          { id: "ext", name: "Extremaduran" },
          { id: "fin", name: "Finnish" },
          { id: "fre", name: "French" },
          { id: "gla", name: "Gaelic" },
          { id: "glg", name: "Galician" },
          { id: "geo", name: "Georgian" },
          { id: "ger", name: "German" },
          { id: "ell", name: "Greek" },
          { id: "heb", name: "Hebrew" },
          { id: "hin", name: "Hindi" },
          { id: "hun", name: "Hungarian" },
          { id: "ice", name: "Icelandic" },
          { id: "ibo", name: "Igbo" },
          { id: "ind", name: "Indonesian" },
          { id: "ina", name: "Interlingua" },
          { id: "gle", name: "Irish" },
          { id: "ita", name: "Italian" },
          { id: "jpn", name: "Japanese" },
          { id: "kan", name: "Kannada" },
          { id: "kaz", name: "Kazakh" },
          { id: "khm", name: "Khmer" },
          { id: "kor", name: "Korean" },
          { id: "kur", name: "Kurdish" },
          { id: "lav", name: "Latvian" },
          { id: "lit", name: "Lithuanian" },
          { id: "ltz", name: "Luxembourgish" },
          { id: "mac", name: "Macedonian" },
          { id: "may", name: "Malay" },
          { id: "mal", name: "Malayalam" },
          { id: "mni", name: "Manipuri" },
          { id: "mar", name: "Marathi" },
          { id: "mon", name: "Mongolian" },
          { id: "mne", name: "Montenegrin" },
          { id: "nav", name: "Navajo" },
          { id: "nep", name: "Nepali" },
          { id: "sme", name: "Northern Sami" },
          { id: "nor", name: "Norwegian" },
          { id: "oci", name: "Occitan" },
          { id: "ori", name: "Odia" },
          { id: "per", name: "Persian" },
          { id: "pol", name: "Polish" },
          { id: "por", name: "Portuguese" },
          { id: "pob", name: "Portuguese (BR)" },
          { id: "pom", name: "Portuguese (MZ)" },
          { id: "pus", name: "Pushto" },
          { id: "rum", name: "Romanian" },
          { id: "rus", name: "Russian" },
          { id: "sat", name: "Santali" },
          { id: "scc", name: "Serbian" },
          { id: "snd", name: "Sindhi" },
          { id: "sin", name: "Sinhalese" },
          { id: "slo", name: "Slovak" },
          { id: "slv", name: "Slovenian" },
          { id: "som", name: "Somali" },
          { id: "spa", name: "Spanish" },
          { id: "spn", name: "Spanish (EU)" },
          { id: "spl", name: "Spanish (LA)" },
          { id: "swa", name: "Swahili" },
          { id: "swe", name: "Swedish" },
          { id: "syr", name: "Syriac" },
          { id: "tgl", name: "Tagalog" },
          { id: "tam", name: "Tamil" },
          { id: "tat", name: "Tatar" },
          { id: "tel", name: "Telugu" },
          { id: "tha", name: "Thai" },
          { id: "tok", name: "Toki Pona" },
          { id: "tur", name: "Turkish" },
          { id: "tuk", name: "Turkmen" },
          { id: "ukr", name: "Ukrainian" },
          { id: "urd", name: "Urdu" },
          { id: "vie", name: "Vietnamese" },
          { id: "wel", name: "Welsh" },
        ]),
        (f.amp = { key: l.env.amp_key });
      const p = f;
      function h(t) {
        return (
          (h =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                }),
          h(t)
        );
      }
      function d(t, e, n) {
        return (
          (e = (function (t) {
            var e = (function (t, e) {
              if ("object" !== h(t) || null === t) return t;
              var n = t[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(t, "string");
                if ("object" !== h(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(t);
            })(t);
            return "symbol" === h(e) ? e : String(e);
          })(e)) in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      var g,
        y = n(6486),
        v = n.n(y),
        m = new Uint8Array(16);
      function b() {
        if (
          !g &&
          !(g =
            ("undefined" != typeof crypto &&
              crypto.getRandomValues &&
              crypto.getRandomValues.bind(crypto)) ||
            ("undefined" != typeof msCrypto &&
              "function" == typeof msCrypto.getRandomValues &&
              msCrypto.getRandomValues.bind(msCrypto)))
        )
          throw new Error(
            "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
          );
        return g(m);
      }
      const w =
        /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
      for (var _ = [], E = 0; E < 256; ++E)
        _.push((E + 256).toString(16).substr(1));
      const S = function (t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            n = (
              _[t[e + 0]] +
              _[t[e + 1]] +
              _[t[e + 2]] +
              _[t[e + 3]] +
              "-" +
              _[t[e + 4]] +
              _[t[e + 5]] +
              "-" +
              _[t[e + 6]] +
              _[t[e + 7]] +
              "-" +
              _[t[e + 8]] +
              _[t[e + 9]] +
              "-" +
              _[t[e + 10]] +
              _[t[e + 11]] +
              _[t[e + 12]] +
              _[t[e + 13]] +
              _[t[e + 14]] +
              _[t[e + 15]]
            ).toLowerCase();
          if (
            !(function (t) {
              return "string" == typeof t && w.test(t);
            })(n)
          )
            throw TypeError("Stringified UUID is invalid");
          return n;
        },
        T = function (t, e, n) {
          var r = (t = t || {}).random || (t.rng || b)();
          if (((r[6] = (15 & r[6]) | 64), (r[8] = (63 & r[8]) | 128), e)) {
            n = n || 0;
            for (var i = 0; i < 16; ++i) e[n + i] = r[i];
            return e;
          }
          return S(r);
        };
      var x = { level: (0, 3) };
      chrome.storage.local.get(["settings"]).then(function (t) {
        var e;
        !0 ===
          (null === (e = t.settings) || void 0 === e ? void 0 : e.debugMode) &&
          (x.level = 0);
      }),
        (x.error = function () {
          if (x.level <= 3) {
            for (
              var t, e = arguments.length, n = new Array(e), r = 0;
              r < e;
              r++
            )
              n[r] = arguments[r];
            (t = console).log.apply(t, ["[st]"].concat(n));
          }
        }),
        (x.warning = function () {
          if (x.level <= 2) {
            for (
              var t, e = arguments.length, n = new Array(e), r = 0;
              r < e;
              r++
            )
              n[r] = arguments[r];
            (t = console).log.apply(t, ["[st]"].concat(n));
          }
        }),
        (x.info = function () {
          if (x.level <= 1) {
            for (
              var t, e = arguments.length, n = new Array(e), r = 0;
              r < e;
              r++
            )
              n[r] = arguments[r];
            (t = console).log.apply(t, ["[st]"].concat(n));
          }
        }),
        (x.debug = function () {
          if (x.level <= 0) {
            for (
              var t, e = arguments.length, n = new Array(e), r = 0;
              r < e;
              r++
            )
              n[r] = arguments[r];
            (t = console).log.apply(t, ["[st]"].concat(n));
          }
        });
      const O = x;
      var I,
        A,
        k,
        R,
        P = function (t) {
          return new Promise(function (e) {
            return setTimeout(e, t);
          });
        },
        N = function (t, e) {
          if (!t || 7 !== t.length) return "";
          var n = parseInt(t.slice(1, 3), 16),
            r = parseInt(t.slice(3, 5), 16),
            i = parseInt(t.slice(5, 7), 16);
          return e
            ? "rgba(" + n + ", " + r + ", " + i + ", " + e + ")"
            : "rgb(" + n + ", " + r + ", " + i + ")";
        },
        C = function (t) {
          var e = document.createElement("textarea");
          return (e.innerHTML = t), e.value;
        },
        D = function (t, e) {
          return (I =
            I ||
            s(
              c().mark(function t(e, n) {
                var r;
                return c().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.next = 2), chrome.storage.local.get([e]);
                      case 2:
                        return (
                          (r = t.sent),
                          O.debug("before merge:", r[e]),
                          O.debug("after merge:", v().merge(r[e], n)),
                          (t.next = 7),
                          chrome.storage.local.set(d({}, e, v().merge(r[e], n)))
                        );
                      case 7:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )).apply(this, arguments);
        },
        j = function (t, e) {
          return (A =
            A ||
            s(
              c().mark(function t(e, n) {
                return c().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (e) {
                          t.next = 6;
                          break;
                        }
                        return (
                          (t.next = 3),
                          chrome.storage.local.get(null).then(function (t) {
                            return v().get(t, n);
                          })
                        );
                      case 3:
                      case 8:
                        return t.abrupt("return", t.sent);
                      case 6:
                        return (
                          (t.next = 8),
                          chrome.storage.local
                            .get(e ? [e] : null)
                            .then(function (t) {
                              return v().get(t[e], n);
                            })
                        );
                      case 9:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )).apply(this, arguments);
        },
        L = function (t, e) {
          return (k =
            k ||
            s(
              c().mark(function t(e, n) {
                return c().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          O.debug("in storageSet, ", e, n),
                          (t.next = 3),
                          chrome.storage.local.set(d({}, e, n))
                        );
                      case 3:
                        return t.abrupt("return", t.sent);
                      case 4:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )).apply(this, arguments);
        },
        M = function (t) {
          if (
            new Set(p.web.i18n.nonDefaultLocales).has(
              chrome.i18n.getUILanguage()
            )
          ) {
            var e = new URL(t);
            return (
              e.protocol +
              "//" +
              e.hostname +
              "/" +
              chrome.i18n.getUILanguage() +
              e.pathname +
              e.hash
            );
          }
          return t;
        },
        U = function () {
          return (
            100 * new Date().getUTCFullYear() + new Date().getUTCMonth() + 1
          );
        },
        B = function (t, e) {
          for (
            var n = new URL(t), r = 0, i = Object.keys(e);
            r < i.length;
            r++
          ) {
            var o = i[r];
            n.searchParams.append(o, e[o]);
          }
          return n.toString();
        },
        F = function () {
          return (R =
            R ||
            s(
              c().mark(function t() {
                var e, n, r;
                return c().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (e = p.storageKeys.gaClientId),
                          (n = null),
                          (t.next = 4),
                          chrome.storage.local.get([e])
                        );
                      case 4:
                        return (
                          (r = t.sent),
                          O.debug("storage get:", r),
                          r[e]
                            ? (O.debug("got id from storage: ", r[e]),
                              (n = r[e]))
                            : ((n = T()),
                              O.debug("generate id from uuidv4: ", n),
                              chrome.storage.local.set(d({}, e, n))),
                          t.abrupt("return", n)
                        );
                      case 8:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )).apply(this, arguments);
        };
      n(8369);
      var q = function (t, e) {
        var n = {};
        return (
          t.split("\n").forEach(function (t) {
            n[t] = e;
          }),
          n
        );
      };
      const V = (t) =>
          "bigint" == typeof t ||
          (!Number.isNaN(Number(t)) && Math.floor(Number(t)) === t),
        z = (t) => "bigint" == typeof t || (t >= 0 && Number.isSafeInteger(t));
      function W(t, e) {
        if (0 === e.length) return t;
        let n;
        const r = [...t];
        for (let t = r.length - 1, i = 0, o = 0; t > 0; t--, i++) {
          (i %= e.length), (o += n = e[i].codePointAt(0));
          const a = (n + i + o) % t,
            s = r[t],
            u = r[a];
          (r[a] = s), (r[t] = u);
        }
        return r;
      }
      const H = (t, e) =>
          t.reduce((n, r) => {
            const i = e.indexOf(r);
            if (-1 === i)
              throw new Error(
                `The provided ID (${t.join(
                  ""
                )}) is invalid, as it contains characters that do not exist in the alphabet (${e.join(
                  ""
                )})`
              );
            if ("bigint" == typeof n) return n * BigInt(e.length) + BigInt(i);
            const o = n * e.length + i;
            return Number.isSafeInteger(o)
              ? o
              : (K(
                  "Unable to decode the provided string, due to lack of support for BigInt numbers in the current environment"
                ),
                BigInt(n) * BigInt(e.length) + BigInt(i));
          }, 0),
        $ = /^\+?\d+$/,
        G = (t) =>
          new RegExp(
            t
              .map((t) => Y(t))
              .sort((t, e) => e.length - t.length)
              .join("|")
          ),
        Y = (t) => t.replace(/[\s#$()*+,.?[\\\]^{|}-]/g, "\\$&"),
        K = (t = "BigInt is not available in this environment") => {
          if ("function" != typeof BigInt) throw new TypeError(t);
        };
      class X {
        constructor(
          t = "",
          e = 0,
          n = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890",
          r = "cfhistuCFHISTU"
        ) {
          if (((this.minLength = e), "number" != typeof e))
            throw new TypeError(
              `Hashids: Provided 'minLength' has to be a number (is ${typeof e})`
            );
          if ("string" != typeof t)
            throw new TypeError(
              `Hashids: Provided 'salt' has to be a string (is ${typeof t})`
            );
          if ("string" != typeof n)
            throw new TypeError(
              `Hashids: Provided alphabet has to be a string (is ${typeof n})`
            );
          const i = Array.from(t),
            o = Array.from(n),
            a = Array.from(r);
          this.salt = i;
          const s = [...new Set(o)];
          var u;
          if (s.length < 16)
            throw new Error(
              `Hashids: alphabet must contain at least 16 unique characters, provided: ${s.join(
                ""
              )}`
            );
          this.alphabet = ((u = a), s.filter((t) => !u.includes(t)));
          const c = ((l = s), a.filter((t) => l.includes(t)));
          var l;
          let f, p;
          (this.seps = W(c, i)),
            (0 === this.seps.length ||
              this.alphabet.length / this.seps.length > 3.5) &&
              ((f = Math.ceil(this.alphabet.length / 3.5)),
              f > this.seps.length &&
                ((p = f - this.seps.length),
                this.seps.push(...this.alphabet.slice(0, p)),
                (this.alphabet = this.alphabet.slice(p)))),
            (this.alphabet = W(this.alphabet, i));
          const h = Math.ceil(this.alphabet.length / 12);
          this.alphabet.length < 3
            ? ((this.guards = this.seps.slice(0, h)),
              (this.seps = this.seps.slice(h)))
            : ((this.guards = this.alphabet.slice(0, h)),
              (this.alphabet = this.alphabet.slice(h))),
            (this.guardsRegExp = G(this.guards)),
            (this.sepsRegExp = G(this.seps)),
            (this.allowedCharsRegExp = ((t) =>
              new RegExp(
                `^[${t
                  .map((t) => Y(t))
                  .sort((t, e) => e.length - t.length)
                  .join("")}]+$`
              ))([...this.alphabet, ...this.guards, ...this.seps]));
        }
        encode(t, ...e) {
          let n = Array.isArray(t) ? t : [...(null != t ? [t] : []), ...e];
          return 0 === n.length
            ? ""
            : (n.every(V) ||
                (n = n.map((t) =>
                  "bigint" == typeof t || "number" == typeof t
                    ? t
                    : ((t) => {
                        if (!$.test(t)) return Number.NaN;
                        const e = Number.parseInt(t, 10);
                        return Number.isSafeInteger(e)
                          ? e
                          : (K(
                              "Unable to encode the provided BigInt string without loss of information due to lack of support for BigInt type in the current environment"
                            ),
                            BigInt(t));
                      })(String(t))
                )),
              n.every(z) ? this._encode(n).join("") : "");
        }
        decode(t) {
          return t && "string" == typeof t && 0 !== t.length
            ? this._decode(t)
            : [];
        }
        encodeHex(t) {
          let e = t;
          switch (typeof e) {
            case "bigint":
              e = e.toString(16);
              break;
            case "string":
              if (!/^[\dA-Fa-f]+$/.test(e)) return "";
              break;
            default:
              throw new Error(
                `Hashids: The provided value is neither a string, nor a BigInt (got: ${typeof e})`
              );
          }
          const n =
            ((r = e),
            12,
            (i = (t) => Number.parseInt(`1${t}`, 16)),
            Array.from({ length: Math.ceil(r.length / 12) }, (t, e) =>
              i(r.slice(12 * e, 12 * (e + 1)))
            ));
          var r, i;
          return this.encode(n);
        }
        decodeHex(t) {
          return this.decode(t)
            .map((t) => t.toString(16).slice(1))
            .join("");
        }
        isValidId(t) {
          return this.allowedCharsRegExp.test(t);
        }
        _encode(t) {
          let { alphabet: e } = this;
          const n = t.reduce(
            (t, e, n) =>
              t +
              ("bigint" == typeof e
                ? Number(e % BigInt(n + 100))
                : e % (n + 100)),
            0
          );
          let r = [e[n % e.length]];
          const i = [...r],
            { seps: o } = this,
            { guards: a } = this;
          if (
            (t.forEach((n, a) => {
              const s = i.concat(this.salt, e);
              e = W(e, s);
              const u = ((t, e) => {
                const n = [];
                let r = t;
                if ("bigint" == typeof r) {
                  const t = BigInt(e.length);
                  do {
                    n.unshift(e[Number(r % t)]), (r /= t);
                  } while (r > BigInt(0));
                } else
                  do {
                    n.unshift(e[r % e.length]), (r = Math.floor(r / e.length));
                  } while (r > 0);
                return n;
              })(n, e);
              if ((r.push(...u), a + 1 < t.length)) {
                const t = u[0].codePointAt(0) + a,
                  e = "bigint" == typeof n ? Number(n % BigInt(t)) : n % t;
                r.push(o[e % o.length]);
              }
            }),
            r.length < this.minLength)
          ) {
            const t = (n + r[0].codePointAt(0)) % a.length;
            if ((r.unshift(a[t]), r.length < this.minLength)) {
              const t = (n + r[2].codePointAt(0)) % a.length;
              r.push(a[t]);
            }
          }
          const s = Math.floor(e.length / 2);
          for (; r.length < this.minLength; ) {
            (e = W(e, e)), r.unshift(...e.slice(s)), r.push(...e.slice(0, s));
            const t = r.length - this.minLength;
            if (t > 0) {
              const e = t / 2;
              r = r.slice(e, e + this.minLength);
            }
          }
          return r;
        }
        _decode(t) {
          if (!this.isValidId(t))
            throw new Error(
              `The provided ID (${t}) is invalid, as it contains characters that do not exist in the alphabet (${this.guards.join(
                ""
              )}${this.seps.join("")}${this.alphabet.join("")})`
            );
          const e = t.split(this.guardsRegExp),
            n = e[3 === e.length || 2 === e.length ? 1 : 0];
          if (0 === n.length) return [];
          const r = n[Symbol.iterator]().next().value,
            i = n.slice(r.length).split(this.sepsRegExp);
          let o = this.alphabet;
          const a = [];
          for (const t of i) {
            const e = W(o, [r, ...this.salt, ...o].slice(0, o.length));
            a.push(H(Array.from(t), e)), (o = e);
          }
          return this._encode(a).join("") !== t ? [] : a;
        }
      }
      var Q = function (t, e) {
        return (
          (Q =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, e) {
                t.__proto__ = e;
              }) ||
            function (t, e) {
              for (var n in e)
                Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            }),
          Q(t, e)
        );
      };
      function J(t, e) {
        if ("function" != typeof e && null !== e)
          throw new TypeError(
            "Class extends value " + String(e) + " is not a constructor or null"
          );
        function n() {
          this.constructor = t;
        }
        Q(t, e),
          (t.prototype =
            null === e
              ? Object.create(e)
              : ((n.prototype = e.prototype), new n()));
      }
      var Z,
        tt = function () {
          return (
            (tt =
              Object.assign ||
              function (t) {
                for (var e, n = 1, r = arguments.length; n < r; n++)
                  for (var i in (e = arguments[n]))
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t;
              }),
            tt.apply(this, arguments)
          );
        };
      function et(t, e) {
        var n = {};
        for (var r in t)
          Object.prototype.hasOwnProperty.call(t, r) &&
            e.indexOf(r) < 0 &&
            (n[r] = t[r]);
        if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
          var i = 0;
          for (r = Object.getOwnPropertySymbols(t); i < r.length; i++)
            e.indexOf(r[i]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
              (n[r[i]] = t[r[i]]);
        }
        return n;
      }
      function nt(t, e, n, r) {
        return new (n || (n = Promise))(function (i, o) {
          function a(t) {
            try {
              u(r.next(t));
            } catch (t) {
              o(t);
            }
          }
          function s(t) {
            try {
              u(r.throw(t));
            } catch (t) {
              o(t);
            }
          }
          function u(t) {
            var e;
            t.done
              ? i(t.value)
              : ((e = t.value),
                e instanceof n
                  ? e
                  : new n(function (t) {
                      t(e);
                    })).then(a, s);
          }
          u((r = r.apply(t, e || [])).next());
        });
      }
      function rt(t, e) {
        var n,
          r,
          i,
          o,
          a = {
            label: 0,
            sent: function () {
              if (1 & i[0]) throw i[1];
              return i[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (o = { next: s(0), throw: s(1), return: s(2) }),
          "function" == typeof Symbol &&
            (o[Symbol.iterator] = function () {
              return this;
            }),
          o
        );
        function s(s) {
          return function (u) {
            return (function (s) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; o && ((o = 0), s[0] && (a = 0)), a; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (i =
                        2 & s[0]
                          ? r.return
                          : s[0]
                          ? r.throw || ((i = r.return) && i.call(r), 0)
                          : r.next) &&
                      !(i = i.call(r, s[1])).done)
                  )
                    return i;
                  switch (((r = 0), i && (s = [2 & s[0], i.value]), s[0])) {
                    case 0:
                    case 1:
                      i = s;
                      break;
                    case 4:
                      return a.label++, { value: s[1], done: !1 };
                    case 5:
                      a.label++, (r = s[1]), (s = [0]);
                      continue;
                    case 7:
                      (s = a.ops.pop()), a.trys.pop();
                      continue;
                    default:
                      if (
                        !(
                          (i = (i = a.trys).length > 0 && i[i.length - 1]) ||
                          (6 !== s[0] && 2 !== s[0])
                        )
                      ) {
                        a = 0;
                        continue;
                      }
                      if (3 === s[0] && (!i || (s[1] > i[0] && s[1] < i[3]))) {
                        a.label = s[1];
                        break;
                      }
                      if (6 === s[0] && a.label < i[1]) {
                        (a.label = i[1]), (i = s);
                        break;
                      }
                      if (i && a.label < i[2]) {
                        (a.label = i[2]), a.ops.push(s);
                        break;
                      }
                      i[2] && a.ops.pop(), a.trys.pop();
                      continue;
                  }
                  s = e.call(t, a);
                } catch (t) {
                  (s = [6, t]), (r = 0);
                } finally {
                  n = i = 0;
                }
              if (5 & s[0]) throw s[1];
              return { value: s[0] ? s[1] : void 0, done: !0 };
            })([s, u]);
          };
        }
      }
      function it(t) {
        var e = "function" == typeof Symbol && Symbol.iterator,
          n = e && t[e],
          r = 0;
        if (n) return n.call(t);
        if (t && "number" == typeof t.length)
          return {
            next: function () {
              return (
                t && r >= t.length && (t = void 0),
                { value: t && t[r++], done: !t }
              );
            },
          };
        throw new TypeError(
          e ? "Object is not iterable." : "Symbol.iterator is not defined."
        );
      }
      function ot(t, e) {
        var n = "function" == typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r,
          i,
          o = n.call(t),
          a = [];
        try {
          for (; (void 0 === e || e-- > 0) && !(r = o.next()).done; )
            a.push(r.value);
        } catch (t) {
          i = { error: t };
        } finally {
          try {
            r && !r.done && (n = o.return) && n.call(o);
          } finally {
            if (i) throw i.error;
          }
        }
        return a;
      }
      function at(t, e, n) {
        if (n || 2 === arguments.length)
          for (var r, i = 0, o = e.length; i < o; i++)
            (!r && i in e) ||
              (r || (r = Array.prototype.slice.call(e, 0, i)), (r[i] = e[i]));
        return t.concat(r || Array.prototype.slice.call(e));
      }
      Object.create,
        Object.create,
        "function" == typeof SuppressedError && SuppressedError,
        (function (t) {
          (t[(t.None = 0)] = "None"),
            (t[(t.Error = 1)] = "Error"),
            (t[(t.Warn = 2)] = "Warn"),
            (t[(t.Verbose = 3)] = "Verbose"),
            (t[(t.Debug = 4)] = "Debug");
        })(Z || (Z = {}));
      var st = function (t) {
          return function () {
            var e = tt({}, t.config);
            return { logger: e.loggerProvider, logLevel: e.logLevel };
          };
        },
        ut = function (t, e) {
          var n, r;
          e = (e = e.replace(/\[(\w+)\]/g, ".$1")).replace(/^\./, "");
          try {
            for (
              var i = it(e.split(".")), o = i.next();
              !o.done;
              o = i.next()
            ) {
              var a = o.value;
              if (!(a in t)) return;
              t = t[a];
            }
          } catch (t) {
            n = { error: t };
          } finally {
            try {
              o && !o.done && (r = i.return) && r.call(i);
            } finally {
              if (n) throw n.error;
            }
          }
          return t;
        },
        ct = function (t, e) {
          return function () {
            var n,
              r,
              i = {};
            try {
              for (var o = it(e), a = o.next(); !a.done; a = o.next()) {
                var s = a.value;
                i[s] = ut(t, s);
              }
            } catch (t) {
              n = { error: t };
            } finally {
              try {
                a && !a.done && (r = o.return) && r.call(o);
              } finally {
                if (n) throw n.error;
              }
            }
            return i;
          };
        },
        lt = function (t, e, n, r, i) {
          return (
            void 0 === i && (i = null),
            function () {
              for (var o = [], a = 0; a < arguments.length; a++)
                o[a] = arguments[a];
              var s = n(),
                u = s.logger,
                c = s.logLevel;
              if ((c && c < Z.Debug) || !c || !u) return t.apply(i, o);
              var l,
                f = {
                  type: "invoke public method",
                  name: e,
                  args: o,
                  stacktrace:
                    ((l = 1),
                    void 0 === l && (l = 0),
                    (new Error().stack || "")
                      .split("\n")
                      .slice(2 + l)
                      .map(function (t) {
                        return t.trim();
                      })),
                  time: { start: new Date().toISOString() },
                  states: {},
                };
              r && f.states && (f.states.before = r());
              var p = t.apply(i, o);
              return (
                p && p.promise
                  ? p.promise.then(function () {
                      r && f.states && (f.states.after = r()),
                        f.time && (f.time.end = new Date().toISOString()),
                        u.debug(JSON.stringify(f, null, 2));
                    })
                  : (r && f.states && (f.states.after = r()),
                    f.time && (f.time.end = new Date().toISOString()),
                    u.debug(JSON.stringify(f, null, 2))),
                p
              );
            }
          );
        },
        ft = "AMP",
        pt = "".concat(ft, "_unsent"),
        ht = "https://api2.amplitude.com/2/httpapi",
        dt = function (t, e, n) {
          return (
            void 0 === e && (e = ""),
            void 0 === n && (n = 10),
            [ft, e, t.substring(0, n)].filter(Boolean).join("_")
          );
        },
        gt = function () {
          return "undefined" != typeof globalThis
            ? globalThis
            : "undefined" != typeof window
            ? window
            : "undefined" != typeof self
            ? self
            : void 0 !== n.g
            ? n.g
            : void 0;
        },
        yt = function () {
          var t,
            e = gt();
          return (
            null === (t = null == e ? void 0 : e.location) || void 0 === t
              ? void 0
              : t.search
          )
            ? e.location.search
                .substring(1)
                .split("&")
                .filter(Boolean)
                .reduce(function (t, e) {
                  var n = e.split("=", 2),
                    r = vt(n[0]),
                    i = vt(n[1]);
                  return i ? ((t[r] = i), t) : t;
                }, {})
            : {};
        },
        vt = function (t) {
          void 0 === t && (t = "");
          try {
            return decodeURIComponent(t);
          } catch (t) {
            return "";
          }
        },
        mt = (function () {
          function t() {}
          return (
            (t.prototype.getApplicationContext = function () {
              return {
                versionName: this.versionName,
                language: bt(),
                platform: "Web",
                os: void 0,
                deviceModel: void 0,
              };
            }),
            t
          );
        })(),
        bt = function () {
          return (
            ("undefined" != typeof navigator &&
              ((navigator.languages && navigator.languages[0]) ||
                navigator.language)) ||
            ""
          );
        },
        wt = (function () {
          function t() {
            this.queue = [];
          }
          return (
            (t.prototype.logEvent = function (t) {
              this.receiver
                ? this.receiver(t)
                : this.queue.length < 512 && this.queue.push(t);
            }),
            (t.prototype.setEventReceiver = function (t) {
              (this.receiver = t),
                this.queue.length > 0 &&
                  (this.queue.forEach(function (e) {
                    t(e);
                  }),
                  (this.queue = []));
            }),
            t
          );
        })(),
        _t = function () {
          return (
            (_t =
              Object.assign ||
              function (t) {
                for (var e, n = 1, r = arguments.length; n < r; n++)
                  for (var i in (e = arguments[n]))
                    Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t;
              }),
            _t.apply(this, arguments)
          );
        },
        Et = function (t, e) {
          var n = typeof t;
          if (n !== typeof e) return !1;
          for (
            var r = 0, i = ["string", "number", "boolean", "undefined"];
            r < i.length;
            r++
          )
            if (i[r] === n) return t === e;
          if (null == t && null == e) return !0;
          if (null == t || null == e) return !1;
          if (t.length !== e.length) return !1;
          var o = Array.isArray(t),
            a = Array.isArray(e);
          if (o !== a) return !1;
          if (!o || !a) {
            var s = Object.keys(t).sort(),
              u = Object.keys(e).sort();
            if (!Et(s, u)) return !1;
            var c = !0;
            return (
              Object.keys(t).forEach(function (n) {
                Et(t[n], e[n]) || (c = !1);
              }),
              c
            );
          }
          for (var l = 0; l < t.length; l++) if (!Et(t[l], e[l])) return !1;
          return !0;
        };
      Object.entries ||
        (Object.entries = function (t) {
          for (var e = Object.keys(t), n = e.length, r = new Array(n); n--; )
            r[n] = [e[n], t[e[n]]];
          return r;
        });
      var St,
        Tt = (function () {
          function t() {
            (this.identity = { userProperties: {} }),
              (this.listeners = new Set());
          }
          return (
            (t.prototype.editIdentity = function () {
              var t = this,
                e = _t({}, this.identity.userProperties),
                n = _t(_t({}, this.identity), { userProperties: e });
              return {
                setUserId: function (t) {
                  return (n.userId = t), this;
                },
                setDeviceId: function (t) {
                  return (n.deviceId = t), this;
                },
                setUserProperties: function (t) {
                  return (n.userProperties = t), this;
                },
                setOptOut: function (t) {
                  return (n.optOut = t), this;
                },
                updateUserProperties: function (t) {
                  for (
                    var e = n.userProperties || {},
                      r = 0,
                      i = Object.entries(t);
                    r < i.length;
                    r++
                  ) {
                    var o = i[r],
                      a = o[0],
                      s = o[1];
                    switch (a) {
                      case "$set":
                        for (
                          var u = 0, c = Object.entries(s);
                          u < c.length;
                          u++
                        ) {
                          var l = c[u],
                            f = l[0],
                            p = l[1];
                          e[f] = p;
                        }
                        break;
                      case "$unset":
                        for (var h = 0, d = Object.keys(s); h < d.length; h++)
                          delete e[(f = d[h])];
                        break;
                      case "$clearAll":
                        e = {};
                    }
                  }
                  return (n.userProperties = e), this;
                },
                commit: function () {
                  return t.setIdentity(n), this;
                },
              };
            }),
            (t.prototype.getIdentity = function () {
              return _t({}, this.identity);
            }),
            (t.prototype.setIdentity = function (t) {
              var e = _t({}, this.identity);
              (this.identity = _t({}, t)),
                Et(e, this.identity) ||
                  this.listeners.forEach(function (e) {
                    e(t);
                  });
            }),
            (t.prototype.addIdentityListener = function (t) {
              this.listeners.add(t);
            }),
            (t.prototype.removeIdentityListener = function (t) {
              this.listeners.delete(t);
            }),
            t
          );
        })(),
        xt =
          "undefined" != typeof globalThis
            ? globalThis
            : void 0 !== n.g
            ? n.g
            : self,
        Ot = (function () {
          function t() {
            (this.identityStore = new Tt()),
              (this.eventBridge = new wt()),
              (this.applicationContextProvider = new mt());
          }
          return (
            (t.getInstance = function (e) {
              return (
                xt.analyticsConnectorInstances ||
                  (xt.analyticsConnectorInstances = {}),
                xt.analyticsConnectorInstances[e] ||
                  (xt.analyticsConnectorInstances[e] = new t()),
                xt.analyticsConnectorInstances[e]
              );
            }),
            t
          );
        })(),
        It = function (t) {
          return void 0 === t && (t = "$default_instance"), Ot.getInstance(t);
        };
      !(function (t) {
        (t.BEFORE = "before"),
          (t.ENRICHMENT = "enrichment"),
          (t.DESTINATION = "destination");
      })(St || (St = {}));
      var At,
        kt = (function () {
          function t() {
            (this.name = "identity"),
              (this.type = St.BEFORE),
              (this.identityStore = It().identityStore);
          }
          return (
            (t.prototype.execute = function (t) {
              return nt(this, void 0, void 0, function () {
                var e;
                return rt(this, function (n) {
                  return (
                    (e = t.user_properties) &&
                      this.identityStore
                        .editIdentity()
                        .updateUserProperties(e)
                        .commit(),
                    [2, t]
                  );
                });
              });
            }),
            (t.prototype.setup = function (t) {
              return nt(this, void 0, void 0, function () {
                return rt(this, function (e) {
                  return (
                    t.instanceName &&
                      (this.identityStore = It(t.instanceName).identityStore),
                    [2]
                  );
                });
              });
            }),
            t
          );
        })(),
        Rt = function (t) {
          return { promise: t || Promise.resolve() };
        };
      !(function (t) {
        (t.Unknown = "unknown"),
          (t.Skipped = "skipped"),
          (t.Success = "success"),
          (t.RateLimit = "rate_limit"),
          (t.PayloadTooLarge = "payload_too_large"),
          (t.Invalid = "invalid"),
          (t.Failed = "failed"),
          (t.Timeout = "Timeout"),
          (t.SystemError = "SystemError");
      })(At || (At = {}));
      var Pt,
        Nt = function (t, e, n) {
          return (
            void 0 === e && (e = 0),
            void 0 === n && (n = At.Unknown),
            { event: t, code: e, message: n }
          );
        };
      !(function (t) {
        (t.US = "US"), (t.EU = "EU");
      })(Pt || (Pt = {}));
      var Ct = "Amplitude Logger ",
        Dt = (function () {
          function t() {
            this.logLevel = Z.None;
          }
          return (
            (t.prototype.disable = function () {
              this.logLevel = Z.None;
            }),
            (t.prototype.enable = function (t) {
              void 0 === t && (t = Z.Warn), (this.logLevel = t);
            }),
            (t.prototype.log = function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              this.logLevel < Z.Verbose ||
                console.log("".concat(Ct, "[Log]: ").concat(t.join(" ")));
            }),
            (t.prototype.warn = function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              this.logLevel < Z.Warn ||
                console.warn("".concat(Ct, "[Warn]: ").concat(t.join(" ")));
            }),
            (t.prototype.error = function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              this.logLevel < Z.Error ||
                console.error("".concat(Ct, "[Error]: ").concat(t.join(" ")));
            }),
            (t.prototype.debug = function () {
              for (var t = [], e = 0; e < arguments.length; e++)
                t[e] = arguments[e];
              this.logLevel < Z.Debug ||
                console.log("".concat(Ct, "[Debug]: ").concat(t.join(" ")));
            }),
            t
          );
        })(),
        jt = function () {
          return {
            flushMaxRetries: 12,
            flushQueueSize: 200,
            flushIntervalMillis: 1e4,
            instanceName: "$default_instance",
            logLevel: Z.Warn,
            loggerProvider: new Dt(),
            optOut: !1,
            serverUrl: ht,
            serverZone: Pt.US,
            useBatch: !1,
          };
        },
        Lt = (function () {
          function t(t) {
            var e, n, r, i;
            this._optOut = !1;
            var o = jt();
            (this.apiKey = t.apiKey),
              (this.flushIntervalMillis =
                null !== (e = t.flushIntervalMillis) && void 0 !== e
                  ? e
                  : o.flushIntervalMillis),
              (this.flushMaxRetries = t.flushMaxRetries || o.flushMaxRetries),
              (this.flushQueueSize = t.flushQueueSize || o.flushQueueSize),
              (this.instanceName = t.instanceName || o.instanceName),
              (this.loggerProvider = t.loggerProvider || o.loggerProvider),
              (this.logLevel =
                null !== (n = t.logLevel) && void 0 !== n ? n : o.logLevel),
              (this.minIdLength = t.minIdLength),
              (this.plan = t.plan),
              (this.ingestionMetadata = t.ingestionMetadata),
              (this.optOut =
                null !== (r = t.optOut) && void 0 !== r ? r : o.optOut),
              (this.serverUrl = t.serverUrl),
              (this.serverZone = t.serverZone || o.serverZone),
              (this.storageProvider = t.storageProvider),
              (this.transportProvider = t.transportProvider),
              (this.useBatch =
                null !== (i = t.useBatch) && void 0 !== i ? i : o.useBatch),
              this.loggerProvider.enable(this.logLevel);
            var a = Ut(t.serverUrl, t.serverZone, t.useBatch);
            (this.serverZone = a.serverZone), (this.serverUrl = a.serverUrl);
          }
          return (
            Object.defineProperty(t.prototype, "optOut", {
              get: function () {
                return this._optOut;
              },
              set: function (t) {
                this._optOut = t;
              },
              enumerable: !1,
              configurable: !0,
            }),
            t
          );
        })(),
        Mt = function (t, e) {
          return t === Pt.EU
            ? e
              ? "https://api.eu.amplitude.com/batch"
              : "https://api.eu.amplitude.com/2/httpapi"
            : e
            ? "https://api2.amplitude.com/batch"
            : ht;
        },
        Ut = function (t, e, n) {
          if (
            (void 0 === t && (t = ""),
            void 0 === e && (e = jt().serverZone),
            void 0 === n && (n = jt().useBatch),
            t)
          )
            return { serverUrl: t, serverZone: void 0 };
          var r = ["US", "EU"].includes(e) ? e : jt().serverZone;
          return { serverZone: r, serverUrl: Mt(r, n) };
        };
      function Bt(t) {
        var e = "";
        try {
          "body" in t && (e = JSON.stringify(t.body));
        } catch (t) {}
        return e;
      }
      var Ft,
        qt,
        Vt,
        zt = (function () {
          function t() {
            (this.name = "amplitude"),
              (this.type = St.DESTINATION),
              (this.retryTimeout = 1e3),
              (this.throttleTimeout = 3e4),
              (this.storageKey = ""),
              (this.scheduled = null),
              (this.queue = []);
          }
          return (
            (t.prototype.setup = function (t) {
              var e;
              return nt(this, void 0, void 0, function () {
                var n,
                  r = this;
                return rt(this, function (i) {
                  switch (i.label) {
                    case 0:
                      return (
                        (this.config = t),
                        (this.storageKey = ""
                          .concat(pt, "_")
                          .concat(this.config.apiKey.substring(0, 10))),
                        [
                          4,
                          null === (e = this.config.storageProvider) ||
                          void 0 === e
                            ? void 0
                            : e.get(this.storageKey),
                        ]
                      );
                    case 1:
                      return (
                        (n = i.sent()),
                        this.saveEvents(),
                        n &&
                          n.length > 0 &&
                          Promise.all(
                            n.map(function (t) {
                              return r.execute(t);
                            })
                          ).catch(),
                        [2, Promise.resolve(void 0)]
                      );
                  }
                });
              });
            }),
            (t.prototype.execute = function (t) {
              var e = this;
              return new Promise(function (n) {
                var r = {
                  event: t,
                  attempts: 0,
                  callback: function (t) {
                    return n(t);
                  },
                  timeout: 0,
                };
                e.addToQueue(r);
              });
            }),
            (t.prototype.addToQueue = function () {
              for (var t = this, e = [], n = 0; n < arguments.length; n++)
                e[n] = arguments[n];
              e
                .filter(function (e) {
                  return e.attempts < t.config.flushMaxRetries
                    ? ((e.attempts += 1), !0)
                    : (t.fulfillRequest(
                        [e],
                        500,
                        "Event rejected due to exceeded retry count"
                      ),
                      !1);
                })
                .forEach(function (e) {
                  (t.queue = t.queue.concat(e)),
                    0 !== e.timeout
                      ? setTimeout(function () {
                          (e.timeout = 0), t.schedule(0);
                        }, e.timeout)
                      : t.schedule(t.config.flushIntervalMillis);
                }),
                this.saveEvents();
            }),
            (t.prototype.schedule = function (t) {
              var e = this;
              this.scheduled ||
                (this.scheduled = setTimeout(function () {
                  e.flush(!0).then(function () {
                    e.queue.length > 0 && e.schedule(t);
                  });
                }, t));
            }),
            (t.prototype.flush = function (t) {
              return (
                void 0 === t && (t = !1),
                nt(this, void 0, void 0, function () {
                  var e,
                    n,
                    r,
                    i = this;
                  return rt(this, function (o) {
                    switch (o.label) {
                      case 0:
                        return (
                          (e = []),
                          (n = []),
                          this.queue.forEach(function (t) {
                            return 0 === t.timeout ? e.push(t) : n.push(t);
                          }),
                          (this.queue = n),
                          this.scheduled &&
                            (clearTimeout(this.scheduled),
                            (this.scheduled = null)),
                          (a = e),
                          (s = this.config.flushQueueSize),
                          (u = Math.max(s, 1)),
                          (r = a.reduce(function (t, e, n) {
                            var r = Math.floor(n / u);
                            return t[r] || (t[r] = []), t[r].push(e), t;
                          }, [])),
                          [
                            4,
                            Promise.all(
                              r.map(function (e) {
                                return i.send(e, t);
                              })
                            ),
                          ]
                        );
                      case 1:
                        return o.sent(), [2];
                    }
                    var a, s, u;
                  });
                })
              );
            }),
            (t.prototype.send = function (t, e) {
              return (
                void 0 === e && (e = !0),
                nt(this, void 0, void 0, function () {
                  var n, r, i, o, a;
                  return rt(this, function (s) {
                    switch (s.label) {
                      case 0:
                        if (!this.config.apiKey)
                          return [
                            2,
                            this.fulfillRequest(
                              t,
                              400,
                              "Event rejected due to missing API key"
                            ),
                          ];
                        (n = {
                          api_key: this.config.apiKey,
                          events: t.map(function (t) {
                            var e = t.event;
                            return e.extra, et(e, ["extra"]);
                          }),
                          options: { min_id_length: this.config.minIdLength },
                        }),
                          (s.label = 1);
                      case 1:
                        return (
                          s.trys.push([1, 3, , 4]),
                          (r = Ut(
                            this.config.serverUrl,
                            this.config.serverZone,
                            this.config.useBatch
                          ).serverUrl),
                          [4, this.config.transportProvider.send(r, n)]
                        );
                      case 2:
                        return null === (i = s.sent())
                          ? (this.fulfillRequest(
                              t,
                              0,
                              "Unexpected error occurred"
                            ),
                            [2])
                          : e
                          ? (this.handleResponse(i, t), [3, 4])
                          : ("body" in i
                              ? this.fulfillRequest(
                                  t,
                                  i.statusCode,
                                  "".concat(i.status, ": ").concat(Bt(i))
                                )
                              : this.fulfillRequest(t, i.statusCode, i.status),
                            [2]);
                      case 3:
                        return (
                          (o = s.sent()),
                          (a =
                            (u = o) instanceof Error ? u.message : String(u)),
                          this.config.loggerProvider.error(a),
                          this.fulfillRequest(t, 0, a),
                          [3, 4]
                        );
                      case 4:
                        return [2];
                    }
                    var u;
                  });
                })
              );
            }),
            (t.prototype.handleResponse = function (t, e) {
              var n = t.status;
              switch (n) {
                case At.Success:
                  this.handleSuccessResponse(t, e);
                  break;
                case At.Invalid:
                  this.handleInvalidResponse(t, e);
                  break;
                case At.PayloadTooLarge:
                  this.handlePayloadTooLargeResponse(t, e);
                  break;
                case At.RateLimit:
                  this.handleRateLimitResponse(t, e);
                  break;
                default:
                  this.config.loggerProvider.warn(
                    "{code: 0, error: \"Status '"
                      .concat(n, "' provided for ")
                      .concat(e.length, ' events"}')
                  ),
                    this.handleOtherResponse(e);
              }
            }),
            (t.prototype.handleSuccessResponse = function (t, e) {
              this.fulfillRequest(
                e,
                t.statusCode,
                "Event tracked successfully"
              );
            }),
            (t.prototype.handleInvalidResponse = function (t, e) {
              var n = this;
              if (
                t.body.missingField ||
                t.body.error.startsWith("Invalid API key")
              )
                this.fulfillRequest(e, t.statusCode, t.body.error);
              else {
                var r = at(
                    at(
                      at(
                        at(
                          [],
                          ot(Object.values(t.body.eventsWithInvalidFields)),
                          !1
                        ),
                        ot(Object.values(t.body.eventsWithMissingFields)),
                        !1
                      ),
                      ot(Object.values(t.body.eventsWithInvalidIdLengths)),
                      !1
                    ),
                    ot(t.body.silencedEvents),
                    !1
                  ).flat(),
                  i = new Set(r),
                  o = e.filter(function (e, r) {
                    if (!i.has(r)) return !0;
                    n.fulfillRequest([e], t.statusCode, t.body.error);
                  });
                o.length > 0 && this.config.loggerProvider.warn(Bt(t)),
                  this.addToQueue.apply(this, at([], ot(o), !1));
              }
            }),
            (t.prototype.handlePayloadTooLargeResponse = function (t, e) {
              1 !== e.length
                ? (this.config.loggerProvider.warn(Bt(t)),
                  (this.config.flushQueueSize /= 2),
                  this.addToQueue.apply(this, at([], ot(e), !1)))
                : this.fulfillRequest(e, t.statusCode, t.body.error);
            }),
            (t.prototype.handleRateLimitResponse = function (t, e) {
              var n = this,
                r = Object.keys(t.body.exceededDailyQuotaUsers),
                i = Object.keys(t.body.exceededDailyQuotaDevices),
                o = t.body.throttledEvents,
                a = new Set(r),
                s = new Set(i),
                u = new Set(o),
                c = e.filter(function (e, r) {
                  if (
                    !(
                      (e.event.user_id && a.has(e.event.user_id)) ||
                      (e.event.device_id && s.has(e.event.device_id))
                    )
                  )
                    return u.has(r) && (e.timeout = n.throttleTimeout), !0;
                  n.fulfillRequest([e], t.statusCode, t.body.error);
                });
              c.length > 0 && this.config.loggerProvider.warn(Bt(t)),
                this.addToQueue.apply(this, at([], ot(c), !1));
            }),
            (t.prototype.handleOtherResponse = function (t) {
              var e = this;
              this.addToQueue.apply(
                this,
                at(
                  [],
                  ot(
                    t.map(function (t) {
                      return (t.timeout = t.attempts * e.retryTimeout), t;
                    })
                  ),
                  !1
                )
              );
            }),
            (t.prototype.fulfillRequest = function (t, e, n) {
              this.saveEvents(),
                t.forEach(function (t) {
                  return t.callback(Nt(t.event, e, n));
                });
            }),
            (t.prototype.saveEvents = function () {
              if (this.config.storageProvider) {
                var t = Array.from(
                  this.queue.map(function (t) {
                    return t.event;
                  })
                );
                this.config.storageProvider.set(this.storageKey, t);
              }
            }),
            t
          );
        })(),
        Wt = function (t) {
          return t
            ? (t ^ ((16 * Math.random()) >> (t / 4))).toString(16)
            : (
                String(1e7) +
                String(-1e3) +
                String(-4e3) +
                String(-8e3) +
                String(-1e11)
              ).replace(/[018]/g, Wt);
        };
      !(function (t) {
        (t.SET = "$set"),
          (t.SET_ONCE = "$setOnce"),
          (t.ADD = "$add"),
          (t.APPEND = "$append"),
          (t.PREPEND = "$prepend"),
          (t.REMOVE = "$remove"),
          (t.PREINSERT = "$preInsert"),
          (t.POSTINSERT = "$postInsert"),
          (t.UNSET = "$unset"),
          (t.CLEAR_ALL = "$clearAll");
      })(Ft || (Ft = {})),
        (function (t) {
          (t.REVENUE_PRODUCT_ID = "$productId"),
            (t.REVENUE_QUANTITY = "$quantity"),
            (t.REVENUE_PRICE = "$price"),
            (t.REVENUE_TYPE = "$revenueType"),
            (t.REVENUE = "$revenue");
        })(qt || (qt = {})),
        (function (t) {
          (t.IDENTIFY = "$identify"),
            (t.GROUP_IDENTIFY = "$groupidentify"),
            (t.REVENUE = "revenue_amount");
        })(Vt || (Vt = {}));
      var Ht,
        $t = function (t) {
          if (Object.keys(t).length > 1e3) return !1;
          for (var e in t) {
            var n = t[e];
            if (!Gt(e, n)) return !1;
          }
          return !0;
        },
        Gt = function (t, e) {
          var n, r;
          if ("string" != typeof t) return !1;
          if (Array.isArray(e)) {
            var i = !0;
            try {
              for (var o = it(e), a = o.next(); !a.done; a = o.next()) {
                var s = a.value;
                if (Array.isArray(s)) return !1;
                if ("object" == typeof s) i = i && $t(s);
                else if (!["number", "string"].includes(typeof s)) return !1;
                if (!i) return !1;
              }
            } catch (t) {
              n = { error: t };
            } finally {
              try {
                a && !a.done && (r = o.return) && r.call(o);
              } finally {
                if (n) throw n.error;
              }
            }
          } else {
            if (null == e) return !1;
            if ("object" == typeof e) return $t(e);
            if (!["number", "string", "boolean"].includes(typeof e)) return !1;
          }
          return !0;
        },
        Yt = (function () {
          function t() {
            (this._propertySet = new Set()), (this._properties = {});
          }
          return (
            (t.prototype.getUserProperties = function () {
              return tt({}, this._properties);
            }),
            (t.prototype.set = function (t, e) {
              return this._safeSet(Ft.SET, t, e), this;
            }),
            (t.prototype.setOnce = function (t, e) {
              return this._safeSet(Ft.SET_ONCE, t, e), this;
            }),
            (t.prototype.append = function (t, e) {
              return this._safeSet(Ft.APPEND, t, e), this;
            }),
            (t.prototype.prepend = function (t, e) {
              return this._safeSet(Ft.PREPEND, t, e), this;
            }),
            (t.prototype.postInsert = function (t, e) {
              return this._safeSet(Ft.POSTINSERT, t, e), this;
            }),
            (t.prototype.preInsert = function (t, e) {
              return this._safeSet(Ft.PREINSERT, t, e), this;
            }),
            (t.prototype.remove = function (t, e) {
              return this._safeSet(Ft.REMOVE, t, e), this;
            }),
            (t.prototype.add = function (t, e) {
              return this._safeSet(Ft.ADD, t, e), this;
            }),
            (t.prototype.unset = function (t) {
              return this._safeSet(Ft.UNSET, t, "-"), this;
            }),
            (t.prototype.clearAll = function () {
              return (
                (this._properties = {}),
                (this._properties[Ft.CLEAR_ALL] = "-"),
                this
              );
            }),
            (t.prototype._safeSet = function (t, e, n) {
              if (this._validate(t, e, n)) {
                var r = this._properties[t];
                return (
                  void 0 === r && ((r = {}), (this._properties[t] = r)),
                  (r[e] = n),
                  this._propertySet.add(e),
                  !0
                );
              }
              return !1;
            }),
            (t.prototype._validate = function (t, e, n) {
              return (
                void 0 === this._properties[Ft.CLEAR_ALL] &&
                !this._propertySet.has(e) &&
                (t === Ft.ADD
                  ? "number" == typeof n
                  : t === Ft.UNSET || t === Ft.REMOVE || Gt(e, n))
              );
            }),
            t
          );
        })(),
        Kt = (function () {
          function t() {
            (this.productId = ""), (this.quantity = 1), (this.price = 0);
          }
          return (
            (t.prototype.setProductId = function (t) {
              return (this.productId = t), this;
            }),
            (t.prototype.setQuantity = function (t) {
              return t > 0 && (this.quantity = t), this;
            }),
            (t.prototype.setPrice = function (t) {
              return (this.price = t), this;
            }),
            (t.prototype.setRevenueType = function (t) {
              return (this.revenueType = t), this;
            }),
            (t.prototype.setRevenue = function (t) {
              return (this.revenue = t), this;
            }),
            (t.prototype.setEventProperties = function (t) {
              return $t(t) && (this.properties = t), this;
            }),
            (t.prototype.getEventProperties = function () {
              var t = this.properties ? tt({}, this.properties) : {};
              return (
                (t[qt.REVENUE_PRODUCT_ID] = this.productId),
                (t[qt.REVENUE_QUANTITY] = this.quantity),
                (t[qt.REVENUE_PRICE] = this.price),
                (t[qt.REVENUE_TYPE] = this.revenueType),
                (t[qt.REVENUE] = this.revenue),
                t
              );
            }),
            t
          );
        })(),
        Xt = function (t, e) {
          return tt(tt({}, e), {
            event_type: Vt.IDENTIFY,
            user_properties: t.getUserProperties(),
          });
        },
        Qt = (function () {
          function t(t) {
            (this.client = t),
              (this.queue = []),
              (this.applying = !1),
              (this.plugins = []);
          }
          return (
            (t.prototype.register = function (t, e) {
              return nt(this, void 0, void 0, function () {
                return rt(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [4, t.setup(e, this.client)];
                    case 1:
                      return n.sent(), this.plugins.push(t), [2];
                  }
                });
              });
            }),
            (t.prototype.deregister = function (t) {
              var e;
              return nt(this, void 0, void 0, function () {
                var n, r;
                return rt(this, function (i) {
                  switch (i.label) {
                    case 0:
                      return (
                        (n = this.plugins.findIndex(function (e) {
                          return e.name === t;
                        })),
                        (r = this.plugins[n]),
                        this.plugins.splice(n, 1),
                        [
                          4,
                          null === (e = r.teardown) || void 0 === e
                            ? void 0
                            : e.call(r),
                        ]
                      );
                    case 1:
                      return i.sent(), [2];
                  }
                });
              });
            }),
            (t.prototype.reset = function (t) {
              (this.applying = !1),
                this.plugins.map(function (t) {
                  var e;
                  return null === (e = t.teardown) || void 0 === e
                    ? void 0
                    : e.call(t);
                }),
                (this.plugins = []),
                (this.client = t);
            }),
            (t.prototype.push = function (t) {
              var e = this;
              return new Promise(function (n) {
                e.queue.push([t, n]), e.scheduleApply(0);
              });
            }),
            (t.prototype.scheduleApply = function (t) {
              var e = this;
              this.applying ||
                ((this.applying = !0),
                setTimeout(function () {
                  e.apply(e.queue.shift()).then(function () {
                    (e.applying = !1), e.queue.length > 0 && e.scheduleApply(0);
                  });
                }, t));
            }),
            (t.prototype.apply = function (t) {
              return nt(this, void 0, void 0, function () {
                var e, n, r, i, o, a, s, u, c, l, f, p, h, d, g, y, v, m, b;
                return rt(this, function (w) {
                  switch (w.label) {
                    case 0:
                      if (!t) return [2];
                      (e = ot(t, 1)),
                        (n = e[0]),
                        (r = ot(t, 2)),
                        (i = r[1]),
                        (o = this.plugins.filter(function (t) {
                          return t.type === St.BEFORE;
                        })),
                        (w.label = 1);
                    case 1:
                      w.trys.push([1, 6, 7, 8]),
                        (a = it(o)),
                        (s = a.next()),
                        (w.label = 2);
                    case 2:
                      return s.done ? [3, 5] : [4, s.value.execute(tt({}, n))];
                    case 3:
                      if (null === (p = w.sent()))
                        return i({ event: n, code: 0, message: "" }), [2];
                      (n = p), (w.label = 4);
                    case 4:
                      return (s = a.next()), [3, 2];
                    case 5:
                      return [3, 8];
                    case 6:
                      return (u = w.sent()), (y = { error: u }), [3, 8];
                    case 7:
                      try {
                        s && !s.done && (v = a.return) && v.call(a);
                      } finally {
                        if (y) throw y.error;
                      }
                      return [7];
                    case 8:
                      (c = this.plugins.filter(function (t) {
                        return t.type === St.ENRICHMENT;
                      })),
                        (w.label = 9);
                    case 9:
                      w.trys.push([9, 14, 15, 16]),
                        (l = it(c)),
                        (f = l.next()),
                        (w.label = 10);
                    case 10:
                      return f.done ? [3, 13] : [4, f.value.execute(tt({}, n))];
                    case 11:
                      if (null === (p = w.sent()))
                        return i({ event: n, code: 0, message: "" }), [2];
                      (n = p), (w.label = 12);
                    case 12:
                      return (f = l.next()), [3, 10];
                    case 13:
                      return [3, 16];
                    case 14:
                      return (h = w.sent()), (m = { error: h }), [3, 16];
                    case 15:
                      try {
                        f && !f.done && (b = l.return) && b.call(l);
                      } finally {
                        if (m) throw m.error;
                      }
                      return [7];
                    case 16:
                      return (
                        (d = this.plugins.filter(function (t) {
                          return t.type === St.DESTINATION;
                        })),
                        (g = d.map(function (t) {
                          var e = tt({}, n);
                          return t.execute(e).catch(function (t) {
                            return Nt(e, 0, String(t));
                          });
                        })),
                        Promise.all(g).then(function (t) {
                          var e = ot(t, 1)[0];
                          i(e);
                        }),
                        [2]
                      );
                  }
                });
              });
            }),
            (t.prototype.flush = function () {
              return nt(this, void 0, void 0, function () {
                var t,
                  e,
                  n,
                  r = this;
                return rt(this, function (i) {
                  switch (i.label) {
                    case 0:
                      return (
                        (t = this.queue),
                        (this.queue = []),
                        [
                          4,
                          Promise.all(
                            t.map(function (t) {
                              return r.apply(t);
                            })
                          ),
                        ]
                      );
                    case 1:
                      return (
                        i.sent(),
                        (e = this.plugins.filter(function (t) {
                          return t.type === St.DESTINATION;
                        })),
                        (n = e.map(function (t) {
                          return t.flush && t.flush();
                        })),
                        [4, Promise.all(n)]
                      );
                    case 2:
                      return i.sent(), [2];
                  }
                });
              });
            }),
            t
          );
        })(),
        Jt = (function () {
          function t(t) {
            void 0 === t && (t = "$default"),
              (this.initializing = !1),
              (this.q = []),
              (this.dispatchQ = []),
              (this.logEvent = this.track.bind(this)),
              (this.timeline = new Qt(this)),
              (this.name = t);
          }
          return (
            (t.prototype._init = function (t) {
              return nt(this, void 0, void 0, function () {
                return rt(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (this.config = t),
                        this.timeline.reset(this),
                        [4, this.runQueuedFunctions("q")]
                      );
                    case 1:
                      return e.sent(), [2];
                  }
                });
              });
            }),
            (t.prototype.runQueuedFunctions = function (t) {
              return nt(this, void 0, void 0, function () {
                var e, n, r, i, o, a;
                return rt(this, function (s) {
                  switch (s.label) {
                    case 0:
                      (e = this[t]), (this[t] = []), (s.label = 1);
                    case 1:
                      s.trys.push([1, 6, 7, 8]),
                        (n = it(e)),
                        (r = n.next()),
                        (s.label = 2);
                    case 2:
                      return r.done ? [3, 5] : [4, (0, r.value)()];
                    case 3:
                      s.sent(), (s.label = 4);
                    case 4:
                      return (r = n.next()), [3, 2];
                    case 5:
                      return [3, 8];
                    case 6:
                      return (i = s.sent()), (o = { error: i }), [3, 8];
                    case 7:
                      try {
                        r && !r.done && (a = n.return) && a.call(n);
                      } finally {
                        if (o) throw o.error;
                      }
                      return [7];
                    case 8:
                      return [2];
                  }
                });
              });
            }),
            (t.prototype.track = function (t, e, n) {
              var r = (function (t, e, n) {
                return tt(
                  tt(tt({}, "string" == typeof t ? { event_type: t } : t), n),
                  e && { event_properties: e }
                );
              })(t, e, n);
              return Rt(this.dispatch(r));
            }),
            (t.prototype.identify = function (t, e) {
              var n = Xt(t, e);
              return Rt(this.dispatch(n));
            }),
            (t.prototype.groupIdentify = function (t, e, n, r) {
              var i = (function (t, e, n, r) {
                var i;
                return tt(tt({}, r), {
                  event_type: Vt.GROUP_IDENTIFY,
                  group_properties: n.getUserProperties(),
                  groups: ((i = {}), (i[t] = e), i),
                });
              })(t, e, n, r);
              return Rt(this.dispatch(i));
            }),
            (t.prototype.setGroup = function (t, e, n) {
              var r = (function (t, e, n) {
                var r,
                  i = new Yt();
                return (
                  i.set(t, e),
                  tt(tt({}, n), {
                    event_type: Vt.IDENTIFY,
                    user_properties: i.getUserProperties(),
                    groups: ((r = {}), (r[t] = e), r),
                  })
                );
              })(t, e, n);
              return Rt(this.dispatch(r));
            }),
            (t.prototype.revenue = function (t, e) {
              var n = (function (t, e) {
                return tt(tt({}, e), {
                  event_type: Vt.REVENUE,
                  event_properties: t.getEventProperties(),
                });
              })(t, e);
              return Rt(this.dispatch(n));
            }),
            (t.prototype.add = function (t) {
              return this.config
                ? Rt(this.timeline.register(t, this.config))
                : (this.q.push(this.add.bind(this, t)), Rt());
            }),
            (t.prototype.remove = function (t) {
              return this.config
                ? Rt(this.timeline.deregister(t))
                : (this.q.push(this.remove.bind(this, t)), Rt());
            }),
            (t.prototype.dispatchWithCallback = function (t, e) {
              if (!this.config) return e(Nt(t, 0, "Client not initialized"));
              this.process(t).then(e);
            }),
            (t.prototype.dispatch = function (t) {
              return nt(this, void 0, void 0, function () {
                var e = this;
                return rt(this, function (n) {
                  return this.config
                    ? [2, this.process(t)]
                    : [
                        2,
                        new Promise(function (n) {
                          e.dispatchQ.push(
                            e.dispatchWithCallback.bind(e, t, n)
                          );
                        }),
                      ];
                });
              });
            }),
            (t.prototype.process = function (t) {
              return nt(this, void 0, void 0, function () {
                var e, n, r;
                return rt(this, function (i) {
                  switch (i.label) {
                    case 0:
                      return (
                        i.trys.push([0, 2, , 3]),
                        this.config.optOut
                          ? [2, Nt(t, 0, "Event skipped due to optOut config")]
                          : [4, this.timeline.push(t)]
                      );
                    case 1:
                      return (
                        200 === (r = i.sent()).code
                          ? this.config.loggerProvider.log(r.message)
                          : this.config.loggerProvider.error(r.message),
                        [2, r]
                      );
                    case 2:
                      return (
                        (e = i.sent()),
                        (n = String(e)),
                        this.config.loggerProvider.error(n),
                        [2, (r = Nt(t, 0, n))]
                      );
                    case 3:
                      return [2];
                  }
                });
              });
            }),
            (t.prototype.setOptOut = function (t) {
              this.config
                ? (this.config.optOut = Boolean(t))
                : this.q.push(this.setOptOut.bind(this, Boolean(t)));
            }),
            (t.prototype.flush = function () {
              return Rt(this.timeline.flush());
            }),
            t
          );
        })(),
        Zt = "dclid",
        te = "fbclid",
        ee = "gbraid",
        ne = "gclid",
        re = "ko_click_id",
        ie = "li_fat_id",
        oe = "msclkid",
        ae = "rtd_cid",
        se = "ttclid",
        ue = "twclid",
        ce = "wbraid",
        le = {
          utm_campaign: void 0,
          utm_content: void 0,
          utm_id: void 0,
          utm_medium: void 0,
          utm_source: void 0,
          utm_term: void 0,
          referrer: void 0,
          referring_domain: void 0,
          dclid: void 0,
          gbraid: void 0,
          gclid: void 0,
          fbclid: void 0,
          ko_click_id: void 0,
          li_fat_id: void 0,
          msclkid: void 0,
          rtd_cid: void 0,
          ttclid: void 0,
          twclid: void 0,
          wbraid: void 0,
        },
        fe = (function () {
          function t() {}
          return (
            (t.prototype.parse = function () {
              return nt(this, void 0, void 0, function () {
                return rt(this, function (t) {
                  return [
                    2,
                    tt(
                      tt(
                        tt(tt({}, le), this.getUtmParam()),
                        this.getReferrer()
                      ),
                      this.getClickIds()
                    ),
                  ];
                });
              });
            }),
            (t.prototype.getUtmParam = function () {
              var t = yt();
              return {
                utm_campaign: t.utm_campaign,
                utm_content: t.utm_content,
                utm_id: t.utm_id,
                utm_medium: t.utm_medium,
                utm_source: t.utm_source,
                utm_term: t.utm_term,
              };
            }),
            (t.prototype.getReferrer = function () {
              var t,
                e,
                n = { referrer: void 0, referring_domain: void 0 };
              try {
                (n.referrer = document.referrer || void 0),
                  (n.referring_domain =
                    null !==
                      (e =
                        null === (t = n.referrer) || void 0 === t
                          ? void 0
                          : t.split("/")[2]) && void 0 !== e
                      ? e
                      : void 0);
              } catch (t) {}
              return n;
            }),
            (t.prototype.getClickIds = function () {
              var t,
                e = yt();
              return (
                ((t = {})[Zt] = e[Zt]),
                (t[te] = e[te]),
                (t[ee] = e[ee]),
                (t[ne] = e[ne]),
                (t[re] = e[re]),
                (t[ie] = e[ie]),
                (t[oe] = e[oe]),
                (t[ae] = e[ae]),
                (t[se] = e[se]),
                (t[ue] = e[ue]),
                (t[ce] = e[ce]),
                t
              );
            }),
            t
          );
        })(),
        pe = function (t) {
          var e = {};
          for (var n in t) {
            var r = t[n];
            r && (e[n] = r);
          }
          return e;
        },
        he = function () {
          for (var t, e = [], n = 0; n < arguments.length; n++)
            e[n] = arguments[n];
          var r,
            i = {},
            o = gt(),
            a = void 0,
            s = ot(e, 2),
            u = s[0],
            c = s[1];
          u && "init" in u ? ((t = u), c && (i = c)) : u && (i = u);
          var l = function () {
              return nt(void 0, void 0, void 0, function () {
                var t, e, n;
                return rt(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return (
                        (e = {
                          event_type:
                            null !== (n = i.eventType) && void 0 !== n
                              ? n
                              : "Page View",
                        }),
                        (t = [{}]),
                        [4, de()]
                      );
                    case 1:
                      return [
                        2,
                        ((e.event_properties = tt.apply(void 0, [
                          tt.apply(void 0, t.concat([r.sent()])),
                          {
                            page_domain:
                              ("undefined" != typeof location &&
                                location.hostname) ||
                              "",
                            page_location:
                              ("undefined" != typeof location &&
                                location.href) ||
                              "",
                            page_path:
                              ("undefined" != typeof location &&
                                location.pathname) ||
                              "",
                            page_title:
                              ("undefined" != typeof document &&
                                document.title) ||
                              "",
                            page_url:
                              ("undefined" != typeof location &&
                                location.href.split("?")[0]) ||
                              "",
                          },
                        ])),
                        e),
                      ];
                  }
                });
              });
            },
            f = function () {
              return (
                void 0 === i.trackOn ||
                ("function" == typeof i.trackOn && i.trackOn())
              );
            },
            p = "undefined" != typeof location ? location.href : null,
            h = function () {
              return nt(void 0, void 0, void 0, function () {
                var e, n, r, o;
                return rt(this, function (s) {
                  switch (s.label) {
                    case 0:
                      return (
                        (e = location.href),
                        (n = ye(i.trackHistoryChanges, e, p || "") && f()),
                        (p = e),
                        n
                          ? (null == a || a.log("Tracking page view event"),
                            null != t ? [3, 1] : [3, 3])
                          : [3, 4]
                      );
                    case 1:
                      return (o = (r = t).track), [4, l()];
                    case 2:
                      o.apply(r, [s.sent()]), (s.label = 3);
                    case 3:
                      s.label = 4;
                    case 4:
                      return [2];
                  }
                });
              });
            },
            d = function () {
              h();
            },
            g = {
              name: "page-view-tracking",
              type: St.ENRICHMENT,
              setup: function (e, n) {
                return nt(void 0, void 0, void 0, function () {
                  var s, c, p, g, y;
                  return rt(this, function (v) {
                    switch (v.label) {
                      case 0:
                        return (t = null != t ? t : n)
                          ? ((a = e.loggerProvider).log(
                              "Installing @amplitude/plugin-page-view-tracking-browser"
                            ),
                            (i.trackOn = (
                              null === (g = e.attribution) || void 0 === g
                                ? void 0
                                : g.trackPageViews
                            )
                              ? "attribution"
                              : i.trackOn),
                            !n &&
                              (null === (y = e.attribution) || void 0 === y
                                ? void 0
                                : y.trackPageViews) &&
                              (a.warn(
                                "@amplitude/plugin-page-view-tracking-browser overrides page view tracking behavior defined in @amplitude/analytics-browser. Resolve by disabling page view tracking in @amplitude/analytics-browser."
                              ),
                              (e.attribution.trackPageViews = !1)),
                            i.trackHistoryChanges &&
                              o &&
                              (o.addEventListener("popstate", d),
                              (r = o.history.pushState),
                              (o.history.pushState = new Proxy(
                                o.history.pushState,
                                {
                                  apply: function (t, e, n) {
                                    var r = ot(n, 3),
                                      i = r[0],
                                      o = r[1],
                                      a = r[2];
                                    t.apply(e, [i, o, a]), h();
                                  },
                                }
                              ))),
                            f()
                              ? (a.log("Tracking page view event"),
                                (p = (c = t).track),
                                [4, l()])
                              : [3, 2])
                          : ((s = u ? "Options" : "undefined"),
                            e.loggerProvider.error(
                              "Argument of type '".concat(
                                s,
                                "' is not assignable to parameter of type 'BrowserClient'."
                              )
                            ),
                            [2]);
                      case 1:
                        p.apply(c, [v.sent()]), (v.label = 2);
                      case 2:
                        return [2];
                    }
                  });
                });
              },
              execute: function (t) {
                return nt(void 0, void 0, void 0, function () {
                  var e;
                  return rt(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return "attribution" === i.trackOn && ge(t)
                          ? (null == a ||
                              a.log(
                                "Enriching campaign event to page view event with campaign parameters"
                              ),
                            [4, l()])
                          : [3, 2];
                      case 1:
                        (e = n.sent()),
                          (t.event_type = e.event_type),
                          (t.event_properties = tt(
                            tt({}, t.event_properties),
                            e.event_properties
                          )),
                          (n.label = 2);
                      case 2:
                        return [2, t];
                    }
                  });
                });
              },
              teardown: function () {
                return nt(void 0, void 0, void 0, function () {
                  return rt(this, function (t) {
                    return (
                      o &&
                        (o.removeEventListener("popstate", d),
                        r && (o.history.pushState = r)),
                      [2]
                    );
                  });
                });
              },
            };
          return (g.__trackHistoryPageView = h), g;
        },
        de = function () {
          return nt(void 0, void 0, void 0, function () {
            var t;
            return rt(this, function (e) {
              switch (e.label) {
                case 0:
                  return (t = pe), [4, new fe().parse()];
                case 1:
                  return [2, t.apply(void 0, [e.sent()])];
              }
            });
          });
        },
        ge = function (t) {
          if ("$identify" === t.event_type && t.user_properties) {
            var e = t.user_properties,
              n = e[Ft.SET] || {},
              r = e[Ft.UNSET] || {},
              i = at(at([], ot(Object.keys(n)), !1), ot(Object.keys(r)), !1);
            return Object.keys(le).every(function (t) {
              return i.includes(t);
            });
          }
          return !1;
        },
        ye = function (t, e, n) {
          return "pathOnly" === t
            ? e.split("?")[0] !== n.split("?")[0]
            : e !== n;
        },
        ve = function (t) {
          var e = t.split(".");
          return e.length <= 2 ? t : e.slice(e.length - 2, e.length).join(".");
        };
      !(function (t) {
        (t.XHR = "xhr"), (t.SendBeacon = "beacon"), (t.Fetch = "fetch");
      })(Ht || (Ht = {}));
      var me = (function () {
          function t() {
            this.memoryStorage = new Map();
          }
          return (
            (t.prototype.isEnabled = function () {
              return nt(this, void 0, void 0, function () {
                return rt(this, function (t) {
                  return [2, !0];
                });
              });
            }),
            (t.prototype.get = function (t) {
              return nt(this, void 0, void 0, function () {
                return rt(this, function (e) {
                  return [2, this.memoryStorage.get(t)];
                });
              });
            }),
            (t.prototype.getRaw = function (t) {
              return nt(this, void 0, void 0, function () {
                var e;
                return rt(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [4, this.get(t)];
                    case 1:
                      return [2, (e = n.sent()) ? JSON.stringify(e) : void 0];
                  }
                });
              });
            }),
            (t.prototype.set = function (t, e) {
              return nt(this, void 0, void 0, function () {
                return rt(this, function (n) {
                  return this.memoryStorage.set(t, e), [2];
                });
              });
            }),
            (t.prototype.remove = function (t) {
              return nt(this, void 0, void 0, function () {
                return rt(this, function (e) {
                  return this.memoryStorage.delete(t), [2];
                });
              });
            }),
            (t.prototype.reset = function () {
              return nt(this, void 0, void 0, function () {
                return rt(this, function (t) {
                  return this.memoryStorage.clear(), [2];
                });
              });
            }),
            t
          );
        })(),
        be = (function () {
          function t() {}
          return (
            (t.prototype.send = function (t, e) {
              return Promise.resolve(null);
            }),
            (t.prototype.buildResponse = function (t) {
              var e,
                n,
                r,
                i,
                o,
                a,
                s,
                u,
                c,
                l,
                f,
                p,
                h,
                d,
                g,
                y,
                v,
                m,
                b,
                w,
                _,
                E;
              if ("object" != typeof t) return null;
              var S = t.code || 0,
                T = this.buildStatus(S);
              switch (T) {
                case At.Success:
                  return {
                    status: T,
                    statusCode: S,
                    body: {
                      eventsIngested:
                        null !== (e = t.events_ingested) && void 0 !== e
                          ? e
                          : 0,
                      payloadSizeBytes:
                        null !== (n = t.payload_size_bytes) && void 0 !== n
                          ? n
                          : 0,
                      serverUploadTime:
                        null !== (r = t.server_upload_time) && void 0 !== r
                          ? r
                          : 0,
                    },
                  };
                case At.Invalid:
                  return {
                    status: T,
                    statusCode: S,
                    body: {
                      error: null !== (i = t.error) && void 0 !== i ? i : "",
                      missingField:
                        null !== (o = t.missing_field) && void 0 !== o ? o : "",
                      eventsWithInvalidFields:
                        null !== (a = t.events_with_invalid_fields) &&
                        void 0 !== a
                          ? a
                          : {},
                      eventsWithMissingFields:
                        null !== (s = t.events_with_missing_fields) &&
                        void 0 !== s
                          ? s
                          : {},
                      eventsWithInvalidIdLengths:
                        null !== (u = t.events_with_invalid_id_lengths) &&
                        void 0 !== u
                          ? u
                          : {},
                      epsThreshold:
                        null !== (c = t.eps_threshold) && void 0 !== c ? c : 0,
                      exceededDailyQuotaDevices:
                        null !== (l = t.exceeded_daily_quota_devices) &&
                        void 0 !== l
                          ? l
                          : {},
                      silencedDevices:
                        null !== (f = t.silenced_devices) && void 0 !== f
                          ? f
                          : [],
                      silencedEvents:
                        null !== (p = t.silenced_events) && void 0 !== p
                          ? p
                          : [],
                      throttledDevices:
                        null !== (h = t.throttled_devices) && void 0 !== h
                          ? h
                          : {},
                      throttledEvents:
                        null !== (d = t.throttled_events) && void 0 !== d
                          ? d
                          : [],
                    },
                  };
                case At.PayloadTooLarge:
                  return {
                    status: T,
                    statusCode: S,
                    body: {
                      error: null !== (g = t.error) && void 0 !== g ? g : "",
                    },
                  };
                case At.RateLimit:
                  return {
                    status: T,
                    statusCode: S,
                    body: {
                      error: null !== (y = t.error) && void 0 !== y ? y : "",
                      epsThreshold:
                        null !== (v = t.eps_threshold) && void 0 !== v ? v : 0,
                      throttledDevices:
                        null !== (m = t.throttled_devices) && void 0 !== m
                          ? m
                          : {},
                      throttledUsers:
                        null !== (b = t.throttled_users) && void 0 !== b
                          ? b
                          : {},
                      exceededDailyQuotaDevices:
                        null !== (w = t.exceeded_daily_quota_devices) &&
                        void 0 !== w
                          ? w
                          : {},
                      exceededDailyQuotaUsers:
                        null !== (_ = t.exceeded_daily_quota_users) &&
                        void 0 !== _
                          ? _
                          : {},
                      throttledEvents:
                        null !== (E = t.throttled_events) && void 0 !== E
                          ? E
                          : [],
                    },
                  };
                case At.Timeout:
                default:
                  return { status: T, statusCode: S };
              }
            }),
            (t.prototype.buildStatus = function (t) {
              return t >= 200 && t < 300
                ? At.Success
                : 429 === t
                ? At.RateLimit
                : 413 === t
                ? At.PayloadTooLarge
                : 408 === t
                ? At.Timeout
                : t >= 400 && t < 500
                ? At.Invalid
                : t >= 500
                ? At.Failed
                : At.Unknown;
            }),
            t
          );
        })(),
        we = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            J(e, t),
            (e.prototype.send = function (t, e) {
              return nt(this, void 0, void 0, function () {
                var n, r;
                return rt(this, function (i) {
                  switch (i.label) {
                    case 0:
                      if ("undefined" == typeof fetch)
                        throw new Error("FetchTransport is not supported");
                      return (
                        (n = {
                          headers: {
                            "Content-Type": "application/json",
                            Accept: "*/*",
                          },
                          body: JSON.stringify(e),
                          method: "POST",
                        }),
                        [4, fetch(t, n)]
                      );
                    case 1:
                      return [4, i.sent().json()];
                    case 2:
                      return (r = i.sent()), [2, this.buildResponse(r)];
                  }
                });
              });
            }),
            e
          );
        })(be),
        _e = (function () {
          function t(t) {
            this.options = tt({}, t);
          }
          return (
            (t.prototype.isEnabled = function () {
              return nt(this, void 0, void 0, function () {
                var e, n;
                return rt(this, function (r) {
                  switch (r.label) {
                    case 0:
                      if (!gt()) return [2, !1];
                      (t.testValue = String(Date.now())),
                        (e = new t(this.options)),
                        (n = "AMP_TEST"),
                        (r.label = 1);
                    case 1:
                      return (
                        r.trys.push([1, 4, 5, 7]), [4, e.set(n, t.testValue)]
                      );
                    case 2:
                      return r.sent(), [4, e.get(n)];
                    case 3:
                      return [2, r.sent() === t.testValue];
                    case 4:
                      return r.sent(), [2, !1];
                    case 5:
                      return [4, e.remove(n)];
                    case 6:
                      return r.sent(), [7];
                    case 7:
                      return [2];
                  }
                });
              });
            }),
            (t.prototype.get = function (t) {
              return nt(this, void 0, void 0, function () {
                var e;
                return rt(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [4, this.getRaw(t)];
                    case 1:
                      if (!(e = n.sent())) return [2, void 0];
                      try {
                        try {
                          e = decodeURIComponent(atob(e));
                        } catch (t) {}
                        return [2, JSON.parse(e)];
                      } catch (t) {
                        return [2, void 0];
                      }
                      return [2];
                  }
                });
              });
            }),
            (t.prototype.getRaw = function (t) {
              var e;
              return nt(this, void 0, void 0, function () {
                var n, r, i;
                return rt(this, function (o) {
                  return (
                    (n = gt()),
                    (r =
                      null !==
                        (e =
                          null == n ? void 0 : n.document.cookie.split("; ")) &&
                      void 0 !== e
                        ? e
                        : []),
                    (i = r.find(function (e) {
                      return 0 === e.indexOf(t + "=");
                    }))
                      ? [2, i.substring(t.length + 1)]
                      : [2, void 0]
                  );
                });
              });
            }),
            (t.prototype.set = function (t, e) {
              var n;
              return nt(this, void 0, void 0, function () {
                var r, i, o, a, s, u;
                return rt(this, function (c) {
                  try {
                    (r =
                      null !== (n = this.options.expirationDays) && void 0 !== n
                        ? n
                        : 0),
                      (o = void 0),
                      (i = null !== e ? r : -1) &&
                        ((a = new Date()).setTime(
                          a.getTime() + 24 * i * 60 * 60 * 1e3
                        ),
                        (o = a)),
                      (s = ""
                        .concat(t, "=")
                        .concat(btoa(encodeURIComponent(JSON.stringify(e))))),
                      o && (s += "; expires=".concat(o.toUTCString())),
                      (s += "; path=/"),
                      this.options.domain &&
                        (s += "; domain=".concat(this.options.domain)),
                      this.options.secure && (s += "; Secure"),
                      this.options.sameSite &&
                        (s += "; SameSite=".concat(this.options.sameSite)),
                      (u = gt()) && (u.document.cookie = s);
                  } catch (t) {}
                  return [2];
                });
              });
            }),
            (t.prototype.remove = function (t) {
              return nt(this, void 0, void 0, function () {
                return rt(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return [4, this.set(t, null)];
                    case 1:
                      return e.sent(), [2];
                  }
                });
              });
            }),
            (t.prototype.reset = function () {
              return nt(this, void 0, void 0, function () {
                return rt(this, function (t) {
                  return [2];
                });
              });
            }),
            t
          );
        })(),
        Ee = 1e3,
        Se = (function () {
          function t(t) {
            this.loggerProvider = null == t ? void 0 : t.loggerProvider;
          }
          return (
            (t.prototype.isEnabled = function () {
              return nt(this, void 0, void 0, function () {
                var e, n, r;
                return rt(this, function (i) {
                  switch (i.label) {
                    case 0:
                      if (!gt()) return [2, !1];
                      (e = String(Date.now())),
                        (n = new t()),
                        (r = "AMP_TEST"),
                        (i.label = 1);
                    case 1:
                      return i.trys.push([1, 4, 5, 7]), [4, n.set(r, e)];
                    case 2:
                      return i.sent(), [4, n.get(r)];
                    case 3:
                      return [2, i.sent() === e];
                    case 4:
                      return i.sent(), [2, !1];
                    case 5:
                      return [4, n.remove(r)];
                    case 6:
                      return i.sent(), [7];
                    case 7:
                      return [2];
                  }
                });
              });
            }),
            (t.prototype.get = function (t) {
              return nt(this, void 0, void 0, function () {
                var e;
                return rt(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return n.trys.push([0, 2, , 3]), [4, this.getRaw(t)];
                    case 1:
                      return (e = n.sent()) ? [2, JSON.parse(e)] : [2, void 0];
                    case 2:
                      return n.sent(), [2, void 0];
                    case 3:
                      return [2];
                  }
                });
              });
            }),
            (t.prototype.getRaw = function (t) {
              var e;
              return nt(this, void 0, void 0, function () {
                return rt(this, function (n) {
                  return [
                    2,
                    (null === (e = gt()) || void 0 === e
                      ? void 0
                      : e.localStorage.getItem(t)) || void 0,
                  ];
                });
              });
            }),
            (t.prototype.set = function (t, e) {
              var n, r;
              return nt(this, void 0, void 0, function () {
                var i, o, a;
                return rt(this, function (s) {
                  i = Array.isArray(e) && e.length > Ee;
                  try {
                    (o = i
                      ? JSON.stringify(e.slice(0, Ee))
                      : JSON.stringify(e)),
                      null === (n = gt()) ||
                        void 0 === n ||
                        n.localStorage.setItem(t, o);
                  } catch (t) {}
                  return (
                    i &&
                      ((a = e.length - Ee),
                      null === (r = this.loggerProvider) ||
                        void 0 === r ||
                        r.error(
                          "Failed to save "
                            .concat(
                              a,
                              " events because the queue length exceeded "
                            )
                            .concat(Ee, ".")
                        )),
                    [2]
                  );
                });
              });
            }),
            (t.prototype.remove = function (t) {
              var e;
              return nt(this, void 0, void 0, function () {
                return rt(this, function (n) {
                  try {
                    null === (e = gt()) ||
                      void 0 === e ||
                      e.localStorage.removeItem(t);
                  } catch (t) {}
                  return [2];
                });
              });
            }),
            (t.prototype.reset = function () {
              var t;
              return nt(this, void 0, void 0, function () {
                return rt(this, function (e) {
                  try {
                    null === (t = gt()) ||
                      void 0 === t ||
                      t.localStorage.clear();
                  } catch (t) {}
                  return [2];
                });
              });
            }),
            t
          );
        })(),
        Te = (function (t) {
          function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.state = { done: 4 }), e;
          }
          return (
            J(e, t),
            (e.prototype.send = function (t, e) {
              return nt(this, void 0, void 0, function () {
                var n = this;
                return rt(this, function (r) {
                  return [
                    2,
                    new Promise(function (r, i) {
                      "undefined" == typeof XMLHttpRequest &&
                        i(new Error("XHRTransport is not supported."));
                      var o = new XMLHttpRequest();
                      o.open("POST", t, !0),
                        (o.onreadystatechange = function () {
                          if (o.readyState === n.state.done)
                            try {
                              var t = o.responseText,
                                e = JSON.parse(t),
                                a = n.buildResponse(e);
                              r(a);
                            } catch (t) {
                              i(t);
                            }
                        }),
                        o.setRequestHeader("Content-Type", "application/json"),
                        o.setRequestHeader("Accept", "*/*"),
                        o.send(JSON.stringify(e));
                    }),
                  ];
                });
              });
            }),
            e
          );
        })(be),
        xe = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            J(e, t),
            (e.prototype.send = function (t, e) {
              return nt(this, void 0, void 0, function () {
                var n = this;
                return rt(this, function (r) {
                  return [
                    2,
                    new Promise(function (r, i) {
                      var o = gt();
                      if (!(null == o ? void 0 : o.navigator.sendBeacon))
                        throw new Error("SendBeaconTransport is not supported");
                      try {
                        var a = JSON.stringify(e);
                        return r(
                          o.navigator.sendBeacon(t, JSON.stringify(e))
                            ? n.buildResponse({
                                code: 200,
                                events_ingested: e.events.length,
                                payload_size_bytes: a.length,
                                server_upload_time: Date.now(),
                              })
                            : n.buildResponse({ code: 500 })
                        );
                      } catch (t) {
                        i(t);
                      }
                    }),
                  ];
                });
              });
            }),
            e
          );
        })(be),
        Oe = function () {
          return {
            cookieExpiration: 365,
            cookieSameSite: "Lax",
            cookieSecure: !1,
            cookieStorage: new me(),
            cookieUpgrade: !0,
            disableCookies: !1,
            domain: "",
            sessionTimeout: 18e5,
            trackingOptions: {
              deviceManufacturer: !0,
              deviceModel: !0,
              ipAddress: !0,
              language: !0,
              osName: !0,
              osVersion: !0,
              platform: !0,
            },
            transportProvider: new we(),
          };
        },
        Ie = (function (t) {
          function e(e, n) {
            var r,
              i,
              o,
              a,
              s,
              u,
              c,
              l,
              f,
              p = this,
              h = Oe();
            return (
              ((p =
                t.call(
                  this,
                  tt(
                    tt(
                      {
                        flushIntervalMillis: 1e3,
                        flushMaxRetries: 5,
                        flushQueueSize: 30,
                        transportProvider: h.transportProvider,
                      },
                      n
                    ),
                    { apiKey: e }
                  )
                ) || this)._optOut = !1),
              (p.cookieStorage =
                null !== (r = null == n ? void 0 : n.cookieStorage) &&
                void 0 !== r
                  ? r
                  : h.cookieStorage),
              (p.deviceId = null == n ? void 0 : n.deviceId),
              (p.lastEventId = null == n ? void 0 : n.lastEventId),
              (p.lastEventTime = null == n ? void 0 : n.lastEventTime),
              (p.optOut = Boolean(null == n ? void 0 : n.optOut)),
              (p.sessionId = null == n ? void 0 : n.sessionId),
              (p.userId = null == n ? void 0 : n.userId),
              (p.appVersion = null == n ? void 0 : n.appVersion),
              (p.attribution = null == n ? void 0 : n.attribution),
              (p.cookieExpiration =
                null !== (i = null == n ? void 0 : n.cookieExpiration) &&
                void 0 !== i
                  ? i
                  : h.cookieExpiration),
              (p.cookieSameSite =
                null !== (o = null == n ? void 0 : n.cookieSameSite) &&
                void 0 !== o
                  ? o
                  : h.cookieSameSite),
              (p.cookieSecure =
                null !== (a = null == n ? void 0 : n.cookieSecure) &&
                void 0 !== a
                  ? a
                  : h.cookieSecure),
              (p.cookieUpgrade =
                null !== (s = null == n ? void 0 : n.cookieUpgrade) &&
                void 0 !== s
                  ? s
                  : h.cookieUpgrade),
              (p.defaultTracking = null == n ? void 0 : n.defaultTracking),
              (p.disableCookies =
                null !== (u = null == n ? void 0 : n.disableCookies) &&
                void 0 !== u
                  ? u
                  : h.disableCookies),
              (p.defaultTracking = null == n ? void 0 : n.defaultTracking),
              (p.domain =
                null !== (c = null == n ? void 0 : n.domain) && void 0 !== c
                  ? c
                  : h.domain),
              (p.partnerId = null == n ? void 0 : n.partnerId),
              (p.sessionTimeout =
                null !== (l = null == n ? void 0 : n.sessionTimeout) &&
                void 0 !== l
                  ? l
                  : h.sessionTimeout),
              (p.trackingOptions =
                null !== (f = null == n ? void 0 : n.trackingOptions) &&
                void 0 !== f
                  ? f
                  : h.trackingOptions),
              p
            );
          }
          return (
            J(e, t),
            Object.defineProperty(e.prototype, "deviceId", {
              get: function () {
                return this._deviceId;
              },
              set: function (t) {
                this._deviceId !== t &&
                  ((this._deviceId = t), this.updateStorage());
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "userId", {
              get: function () {
                return this._userId;
              },
              set: function (t) {
                this._userId !== t &&
                  ((this._userId = t), this.updateStorage());
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "sessionId", {
              get: function () {
                return this._sessionId;
              },
              set: function (t) {
                this._sessionId !== t &&
                  ((this._sessionId = t), this.updateStorage());
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "optOut", {
              get: function () {
                return this._optOut;
              },
              set: function (t) {
                this._optOut !== t &&
                  ((this._optOut = t), this.updateStorage());
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "lastEventTime", {
              get: function () {
                return this._lastEventTime;
              },
              set: function (t) {
                this._lastEventTime !== t &&
                  ((this._lastEventTime = t), this.updateStorage());
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, "lastEventId", {
              get: function () {
                return this._lastEventId;
              },
              set: function (t) {
                this._lastEventId !== t &&
                  ((this._lastEventId = t), this.updateStorage());
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.updateStorage = function () {
              var t,
                e = {
                  deviceId: this._deviceId,
                  userId: this._userId,
                  sessionId: this._sessionId,
                  optOut: this._optOut,
                  lastEventTime: this._lastEventTime,
                  lastEventId: this._lastEventId,
                };
              null === (t = this.cookieStorage) ||
                void 0 === t ||
                t.set(dt(this.apiKey), e);
            }),
            e
          );
        })(Lt),
        Ae = function (t, e) {
          return nt(void 0, void 0, void 0, function () {
            var n, r, i, o, a, s, u, c, l, f, p, h, d, g, y;
            return rt(this, function (v) {
              switch (v.label) {
                case 0:
                  return (
                    (n = Oe()),
                    (r =
                      null !== (g = null == e ? void 0 : e.deviceId) &&
                      void 0 !== g
                        ? g
                        : Wt()),
                    (i = null == e ? void 0 : e.lastEventId),
                    (o = null == e ? void 0 : e.lastEventTime),
                    (a = null == e ? void 0 : e.optOut),
                    (s = null == e ? void 0 : e.sessionId),
                    (u = null == e ? void 0 : e.userId),
                    (c = null == e ? void 0 : e.cookieStorage),
                    (l = null == e ? void 0 : e.domain),
                    (f = Ie.bind),
                    (p = [void 0, t]),
                    (h = [tt({}, e)]),
                    (d = {
                      cookieStorage: c,
                      deviceId: r,
                      domain: l,
                      lastEventId: i,
                      lastEventTime: o,
                      optOut: a,
                      sessionId: s,
                    }),
                    [4, Pe(e)]
                  );
                case 1:
                  return [
                    2,
                    new (f.apply(
                      Ie,
                      p.concat([
                        tt.apply(
                          void 0,
                          h.concat([
                            ((d.storageProvider = v.sent()),
                            (d.trackingOptions = tt(
                              tt({}, n.trackingOptions),
                              null == e ? void 0 : e.trackingOptions
                            )),
                            (d.transportProvider =
                              null !==
                                (y =
                                  null == e ? void 0 : e.transportProvider) &&
                              void 0 !== y
                                ? y
                                : Ne(null == e ? void 0 : e.transport)),
                            (d.userId = u),
                            d),
                          ])
                        ),
                      ])
                    ))(),
                  ];
              }
            });
          });
        },
        ke = function (t, e) {
          return (
            void 0 === e && (e = Oe()),
            nt(void 0, void 0, void 0, function () {
              var n, r, i;
              return rt(this, function (o) {
                switch (o.label) {
                  case 0:
                    return (
                      (n = tt(tt({}, e), t)),
                      (r = null == t ? void 0 : t.cookieStorage),
                      (i = !r) ? [3, 2] : [4, r.isEnabled()]
                    );
                  case 1:
                    (i = !o.sent()), (o.label = 2);
                  case 2:
                    return i ? [2, Re(n)] : [2, r];
                }
              });
            })
          );
        },
        Re = function (t) {
          return nt(void 0, void 0, void 0, function () {
            var e, n;
            return rt(this, function (r) {
              switch (r.label) {
                case 0:
                  return (
                    (e = new _e({
                      domain: t.domain,
                      expirationDays: t.cookieExpiration,
                      sameSite: t.cookieSameSite,
                      secure: t.cookieSecure,
                    })),
                    (n = t.disableCookies) ? [3, 2] : [4, e.isEnabled()]
                  );
                case 1:
                  (n = !r.sent()), (r.label = 2);
                case 2:
                  return n ? [4, (e = new Se()).isEnabled()] : [3, 4];
                case 3:
                  r.sent() || (e = new me()), (r.label = 4);
                case 4:
                  return [2, e];
              }
            });
          });
        },
        Pe = function (t) {
          return nt(void 0, void 0, void 0, function () {
            var e, n, r, i, o, a, s, u, c;
            return rt(this, function (l) {
              switch (l.label) {
                case 0:
                  if (
                    ((e =
                      t &&
                      Object.prototype.hasOwnProperty.call(
                        t,
                        "storageProvider"
                      )),
                    (n = t && t.loggerProvider),
                    e && !t.storageProvider)
                  )
                    return [3, 9];
                  l.label = 1;
                case 1:
                  l.trys.push([1, 7, 8, 9]),
                    (r = it([
                      null == t ? void 0 : t.storageProvider,
                      new Se({ loggerProvider: n }),
                    ])),
                    (i = r.next()),
                    (l.label = 2);
                case 2:
                  return i.done
                    ? [3, 6]
                    : ((o = i.value), (a = o) ? [4, o.isEnabled()] : [3, 4]);
                case 3:
                  (a = l.sent()), (l.label = 4);
                case 4:
                  if (a) return [2, o];
                  l.label = 5;
                case 5:
                  return (i = r.next()), [3, 2];
                case 6:
                  return [3, 9];
                case 7:
                  return (s = l.sent()), (u = { error: s }), [3, 9];
                case 8:
                  try {
                    i && !i.done && (c = r.return) && c.call(r);
                  } finally {
                    if (u) throw u.error;
                  }
                  return [7];
                case 9:
                  return [2, void 0];
              }
            });
          });
        },
        Ne = function (t) {
          return t === Ht.XHR
            ? new Te()
            : t === Ht.SendBeacon
            ? new xe()
            : Oe().transportProvider;
        },
        Ce = "[Amplitude]",
        De = "".concat(Ce, " Page Viewed"),
        je = "".concat(Ce, " Form Started"),
        Le = "".concat(Ce, " Form Submitted"),
        Me = "".concat(Ce, " File Downloaded"),
        Ue = "session_start",
        Be = "session_end",
        Fe = "".concat(Ce, " File Extension"),
        qe = "".concat(Ce, " File Name"),
        Ve = "".concat(Ce, " Link ID"),
        ze = "".concat(Ce, " Link Text"),
        We = "".concat(Ce, " Link URL"),
        He = "".concat(Ce, " Form ID"),
        $e = "".concat(Ce, " Form Name"),
        Ge = "".concat(Ce, " Form Destination"),
        Ye = function (t, e) {
          return nt(void 0, void 0, void 0, function () {
            var n, r, i, o, a, s, u, c, l, f, p;
            return rt(this, function (h) {
              switch (h.label) {
                case 0:
                  return [4, ke(e)];
                case 1:
                  return (
                    (n = h.sent()),
                    (r = (function (t) {
                      return ""
                        .concat(ft.toLowerCase(), "_")
                        .concat(t.substring(0, 6));
                    })(t)),
                    [4, n.getRaw(r)]
                  );
                case 2:
                  return (i = h.sent())
                    ? (
                        null !== (p = e.cookieUpgrade) && void 0 !== p
                          ? p
                          : Oe().cookieUpgrade
                      )
                      ? [4, n.remove(r)]
                      : [3, 4]
                    : [2, { optOut: !1 }];
                case 3:
                  h.sent(), (h.label = 4);
                case 4:
                  return (
                    (o = ot(i.split("."), 6)),
                    (a = o[0]),
                    (s = o[1]),
                    (u = o[2]),
                    (c = o[3]),
                    (l = o[4]),
                    (f = o[5]),
                    [
                      2,
                      {
                        deviceId: a,
                        userId: Xe(s),
                        sessionId: Ke(c),
                        lastEventId: Ke(f),
                        lastEventTime: Ke(l),
                        optOut: Boolean(u),
                      },
                    ]
                  );
              }
            });
          });
        },
        Ke = function (t) {
          var e = parseInt(t, 32);
          if (!isNaN(e)) return e;
        },
        Xe = function (t) {
          if (atob && escape && t)
            try {
              return decodeURIComponent(escape(atob(t)));
            } catch (t) {
              return;
            }
        },
        Qe = n(9293),
        Je = n.n(Qe),
        Ze = function () {
          var t, e, n, r;
          if ("undefined" == typeof navigator) return "";
          var i = navigator.userLanguage;
          return null !==
            (r =
              null !==
                (n =
                  null !==
                    (e =
                      null === (t = navigator.languages) || void 0 === t
                        ? void 0
                        : t[0]) && void 0 !== e
                    ? e
                    : navigator.language) && void 0 !== n
                ? n
                : i) && void 0 !== r
            ? r
            : "";
        },
        tn = (function () {
          function t() {
            (this.name = "context"),
              (this.type = St.BEFORE),
              (this.library = "amplitude-ts/".concat("1.13.0")),
              "undefined" != typeof navigator &&
                (this.userAgent = navigator.userAgent),
              (this.uaResult = new (Je())(this.userAgent).getResult());
          }
          return (
            (t.prototype.setup = function (t) {
              return (this.config = t), Promise.resolve(void 0);
            }),
            (t.prototype.execute = function (t) {
              var e, n;
              return nt(this, void 0, void 0, function () {
                var r, i, o, a, s, u, c;
                return rt(this, function (l) {
                  return (
                    (r = new Date().getTime()),
                    (i = this.uaResult.browser.name),
                    (o = this.uaResult.browser.version),
                    (a = this.uaResult.device.model || this.uaResult.os.name),
                    (s = this.uaResult.device.vendor),
                    (u =
                      null !== (e = this.config.lastEventId) && void 0 !== e
                        ? e
                        : -1),
                    (c = null !== (n = t.event_id) && void 0 !== n ? n : u + 1),
                    (this.config.lastEventId = c),
                    t.time || (this.config.lastEventTime = r),
                    [
                      2,
                      tt(
                        tt(
                          tt(
                            tt(
                              tt(
                                tt(
                                  tt(
                                    tt(
                                      tt(
                                        tt(
                                          tt(
                                            tt(
                                              {
                                                user_id: this.config.userId,
                                                device_id: this.config.deviceId,
                                                session_id:
                                                  this.config.sessionId,
                                                time: r,
                                              },
                                              this.config.appVersion && {
                                                app_version:
                                                  this.config.appVersion,
                                              }
                                            ),
                                            this.config.trackingOptions
                                              .platform && { platform: "Web" }
                                          ),
                                          this.config.trackingOptions
                                            .osName && { os_name: i }
                                        ),
                                        this.config.trackingOptions
                                          .osVersion && { os_version: o }
                                      ),
                                      this.config.trackingOptions
                                        .deviceManufacturer && {
                                        device_manufacturer: s,
                                      }
                                    ),
                                    this.config.trackingOptions.deviceModel && {
                                      device_model: a,
                                    }
                                  ),
                                  this.config.trackingOptions.language && {
                                    language: Ze(),
                                  }
                                ),
                                this.config.trackingOptions.ipAddress && {
                                  ip: "$remote",
                                }
                              ),
                              {
                                insert_id: Wt(),
                                partner_id: this.config.partnerId,
                                plan: this.config.plan,
                              }
                            ),
                            this.config.ingestionMetadata && {
                              ingestion_metadata: {
                                source_name:
                                  this.config.ingestionMetadata.sourceName,
                                source_version:
                                  this.config.ingestionMetadata.sourceVersion,
                              },
                            }
                          ),
                          t
                        ),
                        {
                          event_id: c,
                          library: this.library,
                          user_agent: this.userAgent,
                        }
                      ),
                    ]
                  );
                });
              });
            }),
            t
          );
        })(),
        en = {
          page_domain: "".concat(Ce, " Page Domain"),
          page_location: "".concat(Ce, " Page Location"),
          page_path: "".concat(Ce, " Page Path"),
          page_title: "".concat(Ce, " Page Title"),
          page_url: "".concat(Ce, " Page URL"),
        },
        nn = function () {
          var t,
            e = [],
            n = function (t, n, r) {
              t.addEventListener(n, r),
                e.push({ element: t, type: n, handler: r });
            };
          return {
            name: "@amplitude/plugin-form-interaction-tracking-browser",
            type: St.ENRICHMENT,
            setup: function (e, r) {
              return nt(void 0, void 0, void 0, function () {
                var i;
                return rt(this, function (o) {
                  return r
                    ? ("undefined" == typeof document ||
                        ((i = function (t) {
                          var e = !1;
                          n(t, "change", function () {
                            var n;
                            e ||
                              r.track(
                                je,
                                (((n = {})[He] = t.id),
                                (n[$e] = t.name),
                                (n[Ge] = t.action),
                                n)
                              ),
                              (e = !0);
                          }),
                            n(t, "submit", function () {
                              var n, i;
                              e ||
                                r.track(
                                  je,
                                  (((n = {})[He] = t.id),
                                  (n[$e] = t.name),
                                  (n[Ge] = t.action),
                                  n)
                                ),
                                r.track(
                                  Le,
                                  (((i = {})[He] = t.id),
                                  (i[$e] = t.name),
                                  (i[Ge] = t.action),
                                  i)
                                ),
                                (e = !1);
                            });
                        }),
                        Array.from(
                          document.getElementsByTagName("form")
                        ).forEach(i),
                        "undefined" != typeof MutationObserver &&
                          (t = new MutationObserver(function (t) {
                            t.forEach(function (t) {
                              t.addedNodes.forEach(function (t) {
                                "FORM" === t.nodeName && i(t),
                                  "querySelectorAll" in t &&
                                    "function" == typeof t.querySelectorAll &&
                                    Array.from(t.querySelectorAll("form")).map(
                                      i
                                    );
                              });
                            });
                          })).observe(document.body, {
                            subtree: !0,
                            childList: !0,
                          })),
                      [2])
                    : (e.loggerProvider.warn(
                        "Form interaction tracking requires a later version of @amplitude/analytics-browser. Form interaction events are not tracked."
                      ),
                      [2]);
                });
              });
            },
            execute: function (t) {
              return nt(void 0, void 0, void 0, function () {
                return rt(this, function (e) {
                  return [2, t];
                });
              });
            },
            teardown: function () {
              return nt(void 0, void 0, void 0, function () {
                return rt(this, function (n) {
                  return (
                    null == t || t.disconnect(),
                    e.forEach(function (t) {
                      var e = t.element,
                        n = t.type,
                        r = t.handler;
                      null == e || e.removeEventListener(n, r);
                    }),
                    (e = []),
                    [2]
                  );
                });
              });
            },
          };
        },
        rn = function (t, e) {
          on(t, e);
        },
        on = function (t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              i = r.name,
              o = r.args,
              a = r.resolve,
              s = t && t[i];
            if ("function" == typeof s) {
              var u = s.apply(t, o);
              "function" == typeof a && a(null == u ? void 0 : u.promise);
            }
          }
          return t;
        },
        an = function (t) {
          return t && void 0 !== t._q;
        },
        sn = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            J(e, t),
            (e.prototype.init = function (t, e, n) {
              return (
                void 0 === t && (t = ""),
                Rt(this._init(tt(tt({}, n), { userId: e, apiKey: t })))
              );
            }),
            (e.prototype._init = function (e) {
              var n, r, i, o, a, s, u, c, l, f, p, h, d, g, y, v, m, b, w, _;
              return nt(this, void 0, void 0, function () {
                var E,
                  S,
                  T,
                  x,
                  O,
                  I,
                  A,
                  k,
                  R,
                  P,
                  N,
                  C,
                  D,
                  j,
                  L,
                  M,
                  U,
                  B,
                  F = this;
                return rt(this, function (q) {
                  switch (q.label) {
                    case 0:
                      return this.initializing
                        ? [2]
                        : ((this.initializing = !0),
                          (E = e),
                          e.disableCookies ? ((S = ""), [3, 5]) : [3, 1]);
                    case 1:
                      return null === (n = e.domain) || void 0 === n
                        ? [3, 2]
                        : ((T = n), [3, 4]);
                    case 2:
                      return [
                        4,
                        nt(void 0, void 0, void 0, function () {
                          var t, e, n, r, i, o, a;
                          return rt(this, function (s) {
                            switch (s.label) {
                              case 0:
                                return [4, new _e().isEnabled()];
                              case 1:
                                if (!s.sent() || "undefined" == typeof location)
                                  return [2, ""];
                                for (
                                  t = location.hostname,
                                    e = t.split("."),
                                    n = [],
                                    r = "AMP_TLDTEST",
                                    i = e.length - 2;
                                  i >= 0;
                                  --i
                                )
                                  n.push(e.slice(i).join("."));
                                (i = 0), (s.label = 2);
                              case 2:
                                return i < n.length
                                  ? ((o = n[i]),
                                    [
                                      4,
                                      (a = new _e({ domain: "." + o })).set(
                                        r,
                                        1
                                      ),
                                    ])
                                  : [3, 7];
                              case 3:
                                return s.sent(), [4, a.get(r)];
                              case 4:
                                return s.sent() ? [4, a.remove(r)] : [3, 6];
                              case 5:
                                return s.sent(), [2, "." + o];
                              case 6:
                                return i++, [3, 2];
                              case 7:
                                return [2, ""];
                            }
                          });
                        }),
                      ];
                    case 3:
                      (T = q.sent()), (q.label = 4);
                    case 4:
                      (S = T), (q.label = 5);
                    case 5:
                      return (E.domain = S), [4, Ye(e.apiKey, e)];
                    case 6:
                      return (x = q.sent()), [4, ke(e)];
                    case 7:
                      return [4, (O = q.sent()).get(dt(e.apiKey))];
                    case 8:
                      return (
                        (I = q.sent()),
                        (A = yt()),
                        (k =
                          null !==
                            (o =
                              null !==
                                (i =
                                  null !== (r = e.deviceId) && void 0 !== r
                                    ? r
                                    : A.deviceId) && void 0 !== i
                                ? i
                                : null == I
                                ? void 0
                                : I.deviceId) && void 0 !== o
                            ? o
                            : x.deviceId),
                        (R =
                          null !== (a = null == I ? void 0 : I.sessionId) &&
                          void 0 !== a
                            ? a
                            : x.sessionId),
                        (P =
                          null !==
                            (u =
                              null !== (s = e.optOut) && void 0 !== s
                                ? s
                                : null == I
                                ? void 0
                                : I.optOut) && void 0 !== u
                            ? u
                            : x.optOut),
                        (N =
                          null !== (c = null == I ? void 0 : I.lastEventId) &&
                          void 0 !== c
                            ? c
                            : x.lastEventId),
                        (C =
                          null !== (l = null == I ? void 0 : I.lastEventTime) &&
                          void 0 !== l
                            ? l
                            : x.lastEventTime),
                        (D =
                          null !==
                            (p =
                              null !== (f = e.userId) && void 0 !== f
                                ? f
                                : null == I
                                ? void 0
                                : I.userId) && void 0 !== p
                            ? p
                            : x.userId),
                        (this.previousSessionDeviceId =
                          null !== (h = null == I ? void 0 : I.deviceId) &&
                          void 0 !== h
                            ? h
                            : x.deviceId),
                        (this.previousSessionUserId =
                          null !== (d = null == I ? void 0 : I.userId) &&
                          void 0 !== d
                            ? d
                            : x.userId),
                        [
                          4,
                          Ae(
                            e.apiKey,
                            tt(tt({}, e), {
                              deviceId: k,
                              sessionId: R,
                              optOut: P,
                              lastEventId: N,
                              lastEventTime: C,
                              userId: D,
                              cookieStorage: O,
                            })
                          ),
                        ]
                      );
                    case 9:
                      return (
                        (j = q.sent()), [4, t.prototype._init.call(this, j)]
                      );
                    case 10:
                      return (
                        q.sent(),
                        (L = !1),
                        (!this.config.lastEventTime ||
                          !this.config.sessionId ||
                          (this.config.lastEventTime &&
                            Date.now() - this.config.lastEventTime >
                              this.config.sessionTimeout)) &&
                          (this.setSessionId(
                            null !==
                              (y =
                                null !== (g = e.sessionId) && void 0 !== g
                                  ? g
                                  : this.config.sessionId) && void 0 !== y
                              ? y
                              : Date.now()
                          ),
                          (L = !0)),
                        (M = It(e.instanceName)).identityStore.setIdentity({
                          userId: this.config.userId,
                          deviceId: this.config.deviceId,
                        }),
                        [4, this.add(new zt()).promise]
                      );
                    case 11:
                      return q.sent(), [4, this.add(new tn()).promise];
                    case 12:
                      return q.sent(), [4, this.add(new kt()).promise];
                    case 13:
                      return (
                        q.sent(),
                        (
                          "boolean" == typeof (W = this.config.defaultTracking)
                            ? W
                            : null == W
                            ? void 0
                            : W.fileDownloads
                        )
                          ? [
                              4,
                              this.add(
                                ((z = []),
                                {
                                  name: "@amplitude/plugin-file-download-tracking-browser",
                                  type: St.ENRICHMENT,
                                  setup: function (t, e) {
                                    return nt(
                                      void 0,
                                      void 0,
                                      void 0,
                                      function () {
                                        var n, r;
                                        return rt(this, function (i) {
                                          return e
                                            ? ("undefined" == typeof document ||
                                                ((n = function (t) {
                                                  var n;
                                                  try {
                                                    n = new URL(
                                                      t.href,
                                                      window.location.href
                                                    );
                                                  } catch (t) {
                                                    return;
                                                  }
                                                  var i,
                                                    o,
                                                    a,
                                                    s = r.exec(n.href),
                                                    u =
                                                      null == s ? void 0 : s[1];
                                                  u &&
                                                    ((o = "click"),
                                                    (a = function () {
                                                      var r;
                                                      u &&
                                                        e.track(
                                                          Me,
                                                          (((r = {})[Fe] = u),
                                                          (r[qe] = n.pathname),
                                                          (r[Ve] = t.id),
                                                          (r[ze] = t.text),
                                                          (r[We] = t.href),
                                                          r)
                                                        );
                                                    }),
                                                    (i = t).addEventListener(
                                                      o,
                                                      a
                                                    ),
                                                    z.push({
                                                      element: i,
                                                      type: o,
                                                      handler: a,
                                                    }));
                                                }),
                                                (r =
                                                  /\.(pdf|xlsx?|docx?|txt|rtf|csv|exe|key|pp(s|t|tx)|7z|pkg|rar|gz|zip|avi|mov|mp4|mpe?g|wmv|midi?|mp3|wav|wma)$/),
                                                Array.from(
                                                  document.getElementsByTagName(
                                                    "a"
                                                  )
                                                ).forEach(n),
                                                "undefined" !=
                                                  typeof MutationObserver &&
                                                  (V = new MutationObserver(
                                                    function (t) {
                                                      t.forEach(function (t) {
                                                        t.addedNodes.forEach(
                                                          function (t) {
                                                            "A" ===
                                                              t.nodeName &&
                                                              n(t),
                                                              "querySelectorAll" in
                                                                t &&
                                                                "function" ==
                                                                  typeof t.querySelectorAll &&
                                                                Array.from(
                                                                  t.querySelectorAll(
                                                                    "a"
                                                                  )
                                                                ).map(n);
                                                          }
                                                        );
                                                      });
                                                    }
                                                  )).observe(document.body, {
                                                    subtree: !0,
                                                    childList: !0,
                                                  })),
                                              [2])
                                            : (t.loggerProvider.warn(
                                                "File download tracking requires a later version of @amplitude/analytics-browser. File download events are not tracked."
                                              ),
                                              [2]);
                                        });
                                      }
                                    );
                                  },
                                  execute: function (t) {
                                    return nt(
                                      void 0,
                                      void 0,
                                      void 0,
                                      function () {
                                        return rt(this, function (e) {
                                          return [2, t];
                                        });
                                      }
                                    );
                                  },
                                  teardown: function () {
                                    return nt(
                                      void 0,
                                      void 0,
                                      void 0,
                                      function () {
                                        return rt(this, function (t) {
                                          return (
                                            null == V || V.disconnect(),
                                            z.forEach(function (t) {
                                              var e = t.element,
                                                n = t.type,
                                                r = t.handler;
                                              null == e ||
                                                e.removeEventListener(n, r);
                                            }),
                                            (z = []),
                                            [2]
                                          );
                                        });
                                      }
                                    );
                                  },
                                })
                              ).promise,
                            ]
                          : [3, 15]
                      );
                    case 14:
                      q.sent(), (q.label = 15);
                    case 15:
                      return (function (t) {
                        return "boolean" == typeof t
                          ? t
                          : !!(null == t ? void 0 : t.formInteractions);
                      })(this.config.defaultTracking)
                        ? [4, this.add(nn()).promise]
                        : [3, 17];
                    case 16:
                      q.sent(), (q.label = 17);
                    case 17:
                      return (
                        null === (v = this.config.attribution) || void 0 === v
                          ? void 0
                          : v.disabled
                      )
                        ? [3, 19]
                        : (((U = (function () {
                            for (
                              var t, e, n = this, r = [], i = 0;
                              i < arguments.length;
                              i++
                            )
                              r[i] = arguments[i];
                            var o = {},
                              a = ot(r, 2),
                              s = a[0],
                              u = a[1];
                            s && "init" in s
                              ? ((e = s), u && (o = u))
                              : s && (o = s);
                            var c =
                              null !== (t = o.excludeReferrers) && void 0 !== t
                                ? t
                                : [];
                            "undefined" != typeof location &&
                              c.unshift(location.hostname),
                              (o = tt(
                                tt(
                                  {
                                    disabled: !1,
                                    initialEmptyValue: "EMPTY",
                                    resetSessionOnNewCampaign: !1,
                                  },
                                  o
                                ),
                                { excludeReferrers: c }
                              ));
                            var l = {
                              name: "web-attribution",
                              type: St.BEFORE,
                              setup: function (t, n) {
                                var r;
                                return nt(this, void 0, void 0, function () {
                                  var i, a, u, c, l, f, p, h;
                                  return rt(this, function (d) {
                                    switch (d.label) {
                                      case 0:
                                        return (e = null != e ? e : n)
                                          ? o.disabled
                                            ? (t.loggerProvider.log(
                                                "@amplitude/plugin-web-attribution-browser is disabled. Attribution is not tracked."
                                              ),
                                              [2])
                                            : (t.loggerProvider.log(
                                                "Installing @amplitude/plugin-web-attribution-browser."
                                              ),
                                              n ||
                                                (null === (r = t.attribution) ||
                                                void 0 === r
                                                  ? void 0
                                                  : r.disabled) ||
                                                (t.loggerProvider.warn(
                                                  "@amplitude/plugin-web-attribution-browser overrides web attribution behavior defined in @amplitude/analytics-browser. Resolve by disabling web attribution tracking in @amplitude/analytics-browser."
                                                ),
                                                (t.attribution = {
                                                  disabled: !0,
                                                })),
                                              (a = t.cookieStorage),
                                              (g = t.apiKey),
                                              void 0 === (y = "MKTG") &&
                                                (y = ""),
                                              void 0 === v && (v = 10),
                                              (u = [ft, y, g.substring(0, v)]
                                                .filter(Boolean)
                                                .join("_")),
                                              [
                                                4,
                                                Promise.all([
                                                  new fe().parse(),
                                                  a.get(u),
                                                ]),
                                              ])
                                          : ((i = s ? "Options" : "undefined"),
                                            t.loggerProvider.error(
                                              "Argument of type '".concat(
                                                i,
                                                "' is not assignable to parameter of type 'BrowserClient'."
                                              )
                                            ),
                                            [2]);
                                      case 1:
                                        return (
                                          (c = ot.apply(void 0, [d.sent(), 2])),
                                          (l = c[0]),
                                          (f = c[1]),
                                          (null !=
                                          (p = this.__pluginEnabledOverride)
                                            ? p
                                            : (function (t, e, n) {
                                                t.referrer;
                                                var r,
                                                  i = t.referring_domain,
                                                  o = et(t, [
                                                    "referrer",
                                                    "referring_domain",
                                                  ]),
                                                  a = e || {},
                                                  s =
                                                    (a.referrer,
                                                    a.referring_domain),
                                                  u = et(a, [
                                                    "referrer",
                                                    "referring_domain",
                                                  ]);
                                                if (
                                                  t.referring_domain &&
                                                  (null ===
                                                    (r = n.excludeReferrers) ||
                                                  void 0 === r
                                                    ? void 0
                                                    : r.includes(
                                                        t.referring_domain
                                                      ))
                                                )
                                                  return !1;
                                                var c =
                                                    JSON.stringify(o) !==
                                                    JSON.stringify(u),
                                                  l =
                                                    ve(i || "") !== ve(s || "");
                                                return !e || c || l;
                                              })(l, f, o)) &&
                                            (o.resetSessionOnNewCampaign &&
                                              (e.setSessionId(Date.now()),
                                              t.loggerProvider.log(
                                                "Created a new session for new campaign."
                                              )),
                                            t.loggerProvider.log(
                                              "Tracking attribution."
                                            ),
                                            (h = (function (t, e) {
                                              var n = tt(tt({}, le), t),
                                                r = Object.entries(n).reduce(
                                                  function (t, n) {
                                                    var r,
                                                      i = ot(n, 2),
                                                      o = i[0],
                                                      a = i[1];
                                                    return (
                                                      t.setOnce(
                                                        "initial_".concat(o),
                                                        null !==
                                                          (r =
                                                            null != a
                                                              ? a
                                                              : e.initialEmptyValue) &&
                                                          void 0 !== r
                                                          ? r
                                                          : "EMPTY"
                                                      ),
                                                      a
                                                        ? t.set(o, a)
                                                        : t.unset(o)
                                                    );
                                                  },
                                                  new Yt()
                                                );
                                              return Xt(r);
                                            })(l, o)),
                                            e.track(h),
                                            a.set(u, l)),
                                          [2]
                                        );
                                    }
                                    var g, y, v;
                                  });
                                });
                              },
                              execute: function (t) {
                                return nt(n, void 0, void 0, function () {
                                  return rt(this, function (e) {
                                    return [2, t];
                                  });
                                });
                              },
                              __pluginEnabledOverride: void 0,
                            };
                            return l;
                          })({
                            excludeReferrers:
                              null === (m = this.config.attribution) ||
                              void 0 === m
                                ? void 0
                                : m.excludeReferrers,
                            initialEmptyValue:
                              null === (b = this.config.attribution) ||
                              void 0 === b
                                ? void 0
                                : b.initialEmptyValue,
                            resetSessionOnNewCampaign:
                              null === (w = this.config.attribution) ||
                              void 0 === w
                                ? void 0
                                : w.resetSessionOnNewCampaign,
                          })).__pluginEnabledOverride =
                            !(
                              !L &&
                              !(null === (_ = this.config.attribution) ||
                              void 0 === _
                                ? void 0
                                : _.trackNewCampaigns)
                            ) && void 0),
                          [4, this.add(U).promise]);
                    case 18:
                      q.sent(), (q.label = 19);
                    case 19:
                      return (
                        (B = (function (t) {
                          var e,
                            n,
                            r = (
                              null === (e = t.attribution) || void 0 === e
                                ? void 0
                                : e.trackPageViews
                            )
                              ? "attribution"
                              : function () {
                                  return !1;
                                },
                            i = void 0,
                            o = "Page View";
                          return (
                            ("boolean" == typeof (n = t.defaultTracking)
                              ? n
                              : !!(
                                  !0 === (null == n ? void 0 : n.pageViews) ||
                                  ((null == n ? void 0 : n.pageViews) &&
                                    "object" == typeof n.pageViews)
                                )) &&
                              ((r = void 0),
                              (o = void 0),
                              t.defaultTracking &&
                                "object" == typeof t.defaultTracking &&
                                t.defaultTracking.pageViews &&
                                "object" ==
                                  typeof t.defaultTracking.pageViews &&
                                ("trackOn" in t.defaultTracking.pageViews &&
                                  (r = t.defaultTracking.pageViews.trackOn),
                                "trackHistoryChanges" in
                                  t.defaultTracking.pageViews &&
                                  (i =
                                    t.defaultTracking.pageViews
                                      .trackHistoryChanges),
                                "eventType" in t.defaultTracking.pageViews &&
                                  t.defaultTracking.pageViews.eventType &&
                                  (o = t.defaultTracking.pageViews.eventType))),
                            { trackOn: r, trackHistoryChanges: i, eventType: o }
                          );
                        })(this.config)),
                        (B.eventType = B.eventType || De),
                        [4, this.add(he(B)).promise]
                      );
                    case 20:
                      return (
                        q.sent(),
                        [
                          4,
                          this.add({
                            name: "@amplitude/plugin-default-page-view-event-enrichment-browser",
                            type: St.ENRICHMENT,
                            setup: function () {
                              return nt(void 0, void 0, void 0, function () {
                                return rt(this, function (t) {
                                  return [2, void 0];
                                });
                              });
                            },
                            execute: function (t) {
                              return nt(void 0, void 0, void 0, function () {
                                return rt(this, function (e) {
                                  return (
                                    t.event_type === De &&
                                      t.event_properties &&
                                      (t.event_properties = Object.entries(
                                        t.event_properties
                                      ).reduce(function (t, e) {
                                        var n = ot(e, 2),
                                          r = n[0],
                                          i = n[1],
                                          o = en[r];
                                        return o ? (t[o] = i) : (t[r] = i), t;
                                      }, {})),
                                    [2, t]
                                  );
                                });
                              });
                            },
                          }).promise,
                        ]
                      );
                    case 21:
                      return (
                        q.sent(),
                        (this.initializing = !1),
                        [4, this.runQueuedFunctions("dispatchQ")]
                      );
                    case 22:
                      return (
                        q.sent(),
                        M.eventBridge.setEventReceiver(function (t) {
                          F.track(t.eventType, t.eventProperties);
                        }),
                        [2]
                      );
                  }
                  var V, z, W;
                });
              });
            }),
            (e.prototype.getUserId = function () {
              var t;
              return null === (t = this.config) || void 0 === t
                ? void 0
                : t.userId;
            }),
            (e.prototype.setUserId = function (t) {
              this.config
                ? (t === this.config.userId && void 0 !== t) ||
                  ((this.config.userId = t),
                  (function (t, e) {
                    It(e).identityStore.editIdentity().setUserId(t).commit();
                  })(t, this.config.instanceName))
                : this.q.push(this.setUserId.bind(this, t));
            }),
            (e.prototype.getDeviceId = function () {
              var t;
              return null === (t = this.config) || void 0 === t
                ? void 0
                : t.deviceId;
            }),
            (e.prototype.setDeviceId = function (t) {
              this.config
                ? ((this.config.deviceId = t),
                  (function (t, e) {
                    It(e).identityStore.editIdentity().setDeviceId(t).commit();
                  })(t, this.config.instanceName))
                : this.q.push(this.setDeviceId.bind(this, t));
            }),
            (e.prototype.setOptOut = function (e) {
              !(function (t, e) {
                It(e).identityStore.editIdentity().setOptOut(t).commit();
              })(e, this.config.instanceName),
                t.prototype.setOptOut.call(this, e);
            }),
            (e.prototype.reset = function () {
              this.setDeviceId(Wt()), this.setUserId(void 0);
            }),
            (e.prototype.getSessionId = function () {
              var t;
              return null === (t = this.config) || void 0 === t
                ? void 0
                : t.sessionId;
            }),
            (e.prototype.setSessionId = function (t) {
              var e;
              if (this.config) {
                if (t !== this.config.sessionId) {
                  var n,
                    r = this.getSessionId(),
                    i = this.config.lastEventTime,
                    o =
                      null !== (e = this.config.lastEventId) && void 0 !== e
                        ? e
                        : -1;
                  (this.config.sessionId = t),
                    (this.config.lastEventTime = void 0),
                    ("boolean" == typeof (n = this.config.defaultTracking)
                      ? n
                      : null == n
                      ? void 0
                      : n.sessions) &&
                      (r &&
                        i &&
                        this.track(Be, void 0, {
                          device_id: this.previousSessionDeviceId,
                          event_id: ++o,
                          session_id: r,
                          time: i + 1,
                          user_id: this.previousSessionUserId,
                        }),
                      (this.config.lastEventTime = this.config.sessionId),
                      this.track(Ue, void 0, {
                        event_id: ++o,
                        session_id: this.config.sessionId,
                        time: this.config.lastEventTime,
                      })),
                    (this.previousSessionDeviceId = this.config.deviceId),
                    (this.previousSessionUserId = this.config.userId);
                }
              } else this.q.push(this.setSessionId.bind(this, t));
            }),
            (e.prototype.extendSession = function () {
              this.config
                ? (this.config.lastEventTime = Date.now())
                : this.q.push(this.extendSession.bind(this));
            }),
            (e.prototype.setTransport = function (t) {
              this.config
                ? (this.config.transportProvider = Ne(t))
                : this.q.push(this.setTransport.bind(this, t));
            }),
            (e.prototype.identify = function (e, n) {
              if (an(e)) {
                var r = e._q;
                (e._q = []), (e = on(new Yt(), r));
              }
              return (
                (null == n ? void 0 : n.user_id) && this.setUserId(n.user_id),
                (null == n ? void 0 : n.device_id) &&
                  this.setDeviceId(n.device_id),
                t.prototype.identify.call(this, e, n)
              );
            }),
            (e.prototype.groupIdentify = function (e, n, r, i) {
              if (an(r)) {
                var o = r._q;
                (r._q = []), (r = on(new Yt(), o));
              }
              return t.prototype.groupIdentify.call(this, e, n, r, i);
            }),
            (e.prototype.revenue = function (e, n) {
              if (an(e)) {
                var r = e._q;
                (e._q = []), (e = on(new Kt(), r));
              }
              return t.prototype.revenue.call(this, e, n);
            }),
            (e.prototype.process = function (e) {
              return nt(this, void 0, void 0, function () {
                var n, r, i;
                return rt(this, function (o) {
                  return (
                    (n = Date.now()),
                    (r = this.config.lastEventTime || Date.now()),
                    (i = n - r),
                    e.event_type !== Ue &&
                      e.event_type !== Be &&
                      (!e.session_id || e.session_id === this.getSessionId()) &&
                      i > this.config.sessionTimeout &&
                      this.setSessionId(n),
                    [2, t.prototype.process.call(this, e)]
                  );
                });
              });
            }),
            e
          );
        })(Jt),
        un = function () {
          var t = new sn();
          return {
            init: lt(t.init.bind(t), "init", st(t), ct(t, ["config"])),
            add: lt(
              t.add.bind(t),
              "add",
              st(t),
              ct(t, ["config.apiKey", "timeline.plugins"])
            ),
            remove: lt(
              t.remove.bind(t),
              "remove",
              st(t),
              ct(t, ["config.apiKey", "timeline.plugins"])
            ),
            track: lt(
              t.track.bind(t),
              "track",
              st(t),
              ct(t, ["config.apiKey", "timeline.queue.length"])
            ),
            logEvent: lt(
              t.logEvent.bind(t),
              "logEvent",
              st(t),
              ct(t, ["config.apiKey", "timeline.queue.length"])
            ),
            identify: lt(
              t.identify.bind(t),
              "identify",
              st(t),
              ct(t, ["config.apiKey", "timeline.queue.length"])
            ),
            groupIdentify: lt(
              t.groupIdentify.bind(t),
              "groupIdentify",
              st(t),
              ct(t, ["config.apiKey", "timeline.queue.length"])
            ),
            setGroup: lt(
              t.setGroup.bind(t),
              "setGroup",
              st(t),
              ct(t, ["config.apiKey", "timeline.queue.length"])
            ),
            revenue: lt(
              t.revenue.bind(t),
              "revenue",
              st(t),
              ct(t, ["config.apiKey", "timeline.queue.length"])
            ),
            flush: lt(
              t.flush.bind(t),
              "flush",
              st(t),
              ct(t, ["config.apiKey", "timeline.queue.length"])
            ),
            getUserId: lt(
              t.getUserId.bind(t),
              "getUserId",
              st(t),
              ct(t, ["config", "config.userId"])
            ),
            setUserId: lt(
              t.setUserId.bind(t),
              "setUserId",
              st(t),
              ct(t, ["config", "config.userId"])
            ),
            getDeviceId: lt(
              t.getDeviceId.bind(t),
              "getDeviceId",
              st(t),
              ct(t, ["config", "config.deviceId"])
            ),
            setDeviceId: lt(
              t.setDeviceId.bind(t),
              "setDeviceId",
              st(t),
              ct(t, ["config", "config.deviceId"])
            ),
            reset: lt(
              t.reset.bind(t),
              "reset",
              st(t),
              ct(t, ["config", "config.userId", "config.deviceId"])
            ),
            getSessionId: lt(
              t.getSessionId.bind(t),
              "getSessionId",
              st(t),
              ct(t, ["config"])
            ),
            setSessionId: lt(
              t.setSessionId.bind(t),
              "setSessionId",
              st(t),
              ct(t, ["config"])
            ),
            extendSession: lt(
              t.extendSession.bind(t),
              "extendSession",
              st(t),
              ct(t, ["config"])
            ),
            setOptOut: lt(
              t.setOptOut.bind(t),
              "setOptOut",
              st(t),
              ct(t, ["config"])
            ),
            setTransport: lt(
              t.setTransport.bind(t),
              "setTransport",
              st(t),
              ct(t, ["config"])
            ),
          };
        };
      const cn = un();
      var ln,
        fn = cn.add,
        pn = cn.extendSession,
        hn = cn.flush,
        dn = cn.getDeviceId,
        gn = cn.getSessionId,
        yn = cn.getUserId,
        vn = cn.groupIdentify,
        mn = cn.identify,
        bn = cn.init,
        wn = cn.logEvent,
        _n = cn.remove,
        En = cn.reset,
        Sn = cn.revenue,
        Tn = cn.setDeviceId,
        xn = cn.setGroup,
        On = cn.setOptOut,
        In = cn.setSessionId,
        An = cn.setTransport,
        kn = cn.setUserId,
        Rn = cn.track;
      function Pn(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Nn(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Pn(Object(n), !0).forEach(function (e) {
                d(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : Pn(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var Cn,
        Dn,
        jn = new X();
      function Ln(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Mn(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Ln(Object(n), !0).forEach(function (e) {
                d(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : Ln(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var Un,
        Bn,
        Fn = new X(),
        qn = !1,
        Vn = function (t) {
          return (Dn =
            Dn ||
            s(
              c().mark(function t(e) {
                var n, r;
                return c().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (n = {
                            errcode: -2,
                            rslt: null,
                            errmsg: "unknown error",
                          }),
                          O.debug("fetch apiUsage, body:", JSON.stringify(e)),
                          (r = p.backend.usage),
                          (t.next = 5),
                          fetch(r, {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(e),
                          })
                            .then(function (t) {
                              return t.json();
                            })
                            .then(function (t) {
                              O.debug("/usage ".concat(e.cmd, ", rsp:"), t),
                                "report_and_get" === e.cmd
                                  ? zn(e, t)
                                  : O.error("unknown payload cmd:", e.cmd),
                                (n = { errcode: 0, rslt: t });
                            })
                            .catch(function (t) {
                              O.error("catch err:", t.message),
                                (n = {
                                  errcode: -2,
                                  rslt: null,
                                  errmsg: "catch err: ".concat(t.message),
                                });
                            })
                        );
                      case 5:
                        return t.abrupt("return", n);
                      case 6:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )).apply(this, arguments);
        },
        zn = function (t, e) {};
      function Wn(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Hn(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? Wn(Object(n), !0).forEach(function (e) {
                d(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : Wn(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var $n,
        Gn,
        Yn,
        Kn,
        Xn = function (t) {
          return (Bn =
            Bn ||
            s(
              c().mark(function t(e) {
                var n, r;
                return c().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (n = {
                            errcode: -2,
                            rslt: null,
                            errmsg: "unknown error",
                          }),
                          O.debug("fetch apiAccount, body:", JSON.stringify(e)),
                          (r = p.backend.account),
                          (t.next = 5),
                          fetch(r, {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(e),
                          })
                            .then(function (t) {
                              return t.json();
                            })
                            .then(function (t) {
                              O.debug(
                                "/account ".concat(e.cmd, ", rsp:"),
                                JSON.stringify(t)
                              ),
                                "getinfo" === e.cmd
                                  ? Qn(e, t)
                                  : O.error("unknown payload cmd:", e.cmd),
                                (n = { errcode: 0, rslt: t });
                            })
                            .catch(function (t) {
                              O.error("catch err:", t.message),
                                (n = {
                                  errcode: -2,
                                  rslt: null,
                                  errmsg: "catch err: ".concat(t.message),
                                });
                            })
                        );
                      case 5:
                        return t.abrupt("return", n);
                      case 6:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )).apply(this, arguments);
        },
        Qn = function (t, e) {
          O.debug("in handleGetInfoRsp"),
            e.errcode ||
              L("account_info", Hn({ updatedAt: Date.now() }, e.info));
        },
        Jn = void 0,
        Zn = n(9115),
        tr = function (t) {
          return (Gn =
            Gn ||
            s(
              c().mark(function t(e) {
                var n, r, i, o;
                return c().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (n = {
                            errcode: -2,
                            rslt: null,
                            errmsg: "unknown error",
                          }),
                          O.debug(
                            "xmlrpc apiAccount, searchParams:",
                            JSON.stringify(e)
                          ),
                          (r = new URL(p.backend.os)),
                          (i = {
                            host: r.host,
                            port: r.port || 443,
                            path: r.pathname,
                            headers: { "User-Agent": "UserAgent" },
                          }),
                          (o = Zn.createSecureClient(i)),
                          (t.next = 7),
                          new Promise(function (t, e) {
                            o.methodCall(
                              "LogIn",
                              ["", "", "en", "UserAgent"],
                              function (n, r) {
                                if (n) return e(Jn.handleError(n));
                                t(r);
                              }
                            );
                          })
                            .then(function (t) {
                              if ((O.debug("xmlrpc LogIn, data", t), t.token)) {
                                var r = t.token;
                                return new Promise(function (t, n) {
                                  o.methodCall(
                                    "SearchSubtitles",
                                    [r, [e]],
                                    function (e, r) {
                                      if (e) return n(Jn.handleError(e));
                                      t(r);
                                    }
                                  );
                                });
                              }
                              n = {
                                errcode: -1,
                                errmsg: "search err, get token err",
                                rslt: null,
                              };
                            })
                            .then(function (t) {
                              if (
                                (O.debug("xmlrpc SearchSubtitles, data", t),
                                "200 OK" === t.status)
                              ) {
                                for (
                                  var e = [], r = 0;
                                  r < Math.min(t.data.length, 100);
                                  r++
                                ) {
                                  var i = t.data[r],
                                    o = {};
                                  (o.IDMovie = i.IDMovie),
                                    (o.url = i.SubDownloadLink.replace(
                                      ".gz",
                                      ""
                                    )),
                                    (o.langcode = i.ISO639),
                                    (o.downloads = parseInt(i.SubDownloadsCnt)),
                                    (o.lang = i.LanguageName),
                                    (o.encoding = i.SubEncoding),
                                    (o.id = i.IDSubtitleFile),
                                    (o.filename = i.SubFileName),
                                    (o.date = i.SubAddDate),
                                    (o.fps = parseFloat(i.MovieFPS) || null),
                                    (o.format = i.SubFormat),
                                    e.push(o);
                                }
                                n = {
                                  errcode: 0,
                                  errmsg: null,
                                  rslt: { subs: e },
                                };
                              } else n = { errcode: -1, errmsg: t.status, rslt: null };
                            })
                            .catch(function (t) {
                              O.debug("catch err:", t),
                                (n = {
                                  errcode: -2,
                                  rslt: null,
                                  errmsg: "catch err: ".concat(t.message),
                                });
                            })
                        );
                      case 7:
                        return t.abrupt("return", n);
                      case 8:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )).apply(this, arguments);
        };
      function er(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function nr(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? er(Object(n), !0).forEach(function (e) {
                d(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : er(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var rr,
        ir,
        or = function (t) {
          return (Kn =
            Kn ||
            s(
              c().mark(function t(e) {
                var n, r;
                return c().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (n = {
                            errcode: -2,
                            rslt: null,
                            errmsg: "unknown error",
                          }),
                          O.debug(
                            "fetch apiDictionary, body:",
                            JSON.stringify(e)
                          ),
                          (r = p.backend.dictionary),
                          (t.next = 5),
                          fetch(r, {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(e),
                          })
                            .then(function (t) {
                              return t.json();
                            })
                            .then(function (t) {
                              O.debug(
                                "/dictionary ".concat(e.cmd, ", rsp:"),
                                t
                              ),
                                "lookup" === e.cmd
                                  ? ar(e, t)
                                  : "examples" === e.cmd
                                  ? sr(e, t)
                                  : O.error("unknown payload cmd:", e.cmd),
                                (n = { errcode: 0, rslt: t });
                            })
                            .catch(function (t) {
                              O.error("catch err:", t.message),
                                (n = {
                                  errcode: -2,
                                  rslt: null,
                                  errmsg: "catch err: ".concat(t.message),
                                });
                            })
                        );
                      case 5:
                        return t.abrupt("return", n);
                      case 6:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )).apply(this, arguments);
        },
        ar = function (t, e) {},
        sr = function (t, e) {};
      function ur(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function cr(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? ur(Object(n), !0).forEach(function (e) {
                d(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : ur(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      }
      var lr,
        fr,
        pr,
        hr,
        dr,
        gr,
        yr,
        vr,
        mr = function (t) {
          return (ir =
            ir ||
            s(
              c().mark(function t(e) {
                var n, r;
                return c().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (n = {
                            errcode: -2,
                            rslt: null,
                            errmsg: "unknown error",
                          }),
                          O.debug(
                            "fetch apiSynthesize, body:",
                            JSON.stringify(e)
                          ),
                          (r = p.backend.synthesize),
                          (t.next = 5),
                          fetch(r, {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(e),
                          })
                            .then(function (t) {
                              return t.json();
                            })
                            .then(function (t) {
                              O.debug(
                                "/synthesize ".concat(e.cmd, ", rsp:"),
                                t
                              ),
                                "text" === e.cmd
                                  ? br(e, t)
                                  : O.error("unknown payload cmd:", e.cmd),
                                (n = { errcode: 0, rslt: t });
                            })
                            .catch(function (t) {
                              O.error("catch err:", t.message),
                                (n = {
                                  errcode: -2,
                                  rslt: null,
                                  errmsg: "catch err: ".concat(t.message),
                                });
                            })
                        );
                      case 5:
                        return t.abrupt("return", n);
                      case 6:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )).apply(this, arguments);
        },
        br = function (t, e) {};
      O.debug("background.js run, date: ", Date()),
        s(
          c().mark(function t() {
            return c().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (t.t0 = r),
                      (t.t1 = p.amp.key),
                      (t.t2 = void 0),
                      (t.next = 5),
                      F()
                    );
                  case 5:
                    (t.t3 = t.sent),
                      (t.t4 = { deviceId: t.t3 }),
                      t.t0.init.call(t.t0, t.t1, t.t2, t.t4);
                  case 8:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )();
      var wr = function (t, e) {
          return (fr =
            fr ||
            s(
              c().mark(function t(e, n) {
                return c().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.next = 2), D("cfg", e);
                      case 2:
                        return (t.next = 4), F();
                      case 4:
                        t.sent,
                          chrome.runtime.setUninstallURL(
                            "https://airtable.com/apph8WCnFwjvBVTgC/shrH8OVRdQttDuSHo"
                          ),
                          chrome.storage.session.setAccessLevel({
                            accessLevel: "TRUSTED_AND_UNTRUSTED_CONTEXTS",
                          });
                      case 7:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )).apply(this, arguments);
        },
        _r = function () {
          return (pr =
            pr ||
            s(
              c().mark(function e() {
                var n, r, i, o;
                return c().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.t0 = chrome.tabs),
                          (e.t1 = t),
                          (e.t2 = M(p.web.tutorial)),
                          (e.next = 5),
                          j(null, p.storageKeys.gaClientId)
                        );
                      case 5:
                        (e.t3 = e.sent),
                          (e.t4 = { deviceid: e.t3 }),
                          (e.t5 = e.t1.urlAddParams.call(e.t1, e.t2, e.t4)),
                          (e.t6 = { url: e.t5 }),
                          e.t0.create.call(e.t0, e.t6),
                          (i = chrome.i18n.getUILanguage().split("_")[0]),
                          (o = chrome.i18n.getUILanguage().split("-")[0]),
                          O.debug("_possibleTransTo1,2:", i, o),
                          L("setting", {
                            switch: !0,
                            trans_src: "en",
                            lang_1: "en",
                            lang_2:
                              (null ===
                                (n = p.supportLangs.find(function (t) {
                                  return t.a.startsWith(i);
                                })) || void 0 === n
                                ? void 0
                                : n.a) ||
                              (null ===
                                (r = p.supportLangs.find(function (t) {
                                  return t.a.startsWith(o);
                                })) || void 0 === r
                                ? void 0
                                : r.a) ||
                              "en",
                            switch_use_mt: !1,
                          });
                      case 14:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )).apply(this, arguments);
        },
        Er = function () {
          return (hr =
            hr ||
            s(
              c().mark(function t() {
                return c().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )).apply(this, arguments);
        },
        Sr = function () {
          return (dr =
            dr ||
            s(
              c().mark(function t() {
                return c().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )).apply(this, arguments);
        },
        Tr = function () {
          return (gr =
            gr ||
            s(
              c().mark(function t() {
                return c().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )).apply(this, arguments);
        },
        xr = function (t, e, n) {
          return (yr =
            yr ||
            s(
              c().mark(function t(e, n, r) {
                return c().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        Rn("Background OnInstall", {
                          reason: e,
                          prever: n,
                          nowver: r,
                        });
                      case 1:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )).apply(this, arguments);
        };
      chrome.runtime.onInstalled.addListener(function (t) {
        return (lr =
          lr ||
          s(
            c().mark(function t(e) {
              return c().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        O.debug(
                          "background.js - chrome.runtime.onInstalled fired, event:",
                          e
                        ),
                        O.debug("version pre: " + e.previousVersion),
                        O.debug(
                          "version now: " + chrome.runtime.getManifest().version
                        ),
                        O.debug("cfg: ", p),
                        (t.next = 6),
                        wr(p, e.reason)
                      );
                    case 6:
                      (t.t0 = e.reason),
                        (t.next =
                          "install" === t.t0
                            ? 9
                            : "update" === t.t0
                            ? 12
                            : "chrome_update" === t.t0
                            ? 15
                            : 18);
                      break;
                    case 9:
                      return (t.next = 11), _r();
                    case 11:
                    case 14:
                    case 17:
                      return t.abrupt("break", 20);
                    case 12:
                      return (t.next = 14), Er();
                    case 15:
                      return (t.next = 17), Sr();
                    case 18:
                      return (t.next = 20), Tr();
                    case 20:
                      return (
                        (t.next = 22),
                        xr(
                          e.reason,
                          e.previousVersion,
                          chrome.runtime.getManifest().version
                        )
                      );
                    case 22:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          )).apply(this, arguments);
      }),
        chrome.storage.onChanged.addListener(function (t, e) {
          for (var n = 0, r = Object.entries(t); n < r.length; n++) {
            var i = o(r[n], 2),
              a = i[0],
              s = i[1],
              u = s.oldValue,
              c = s.newValue;
            O.debug(
              '"'
                .concat(a, '" in "')
                .concat(e, '" changed from "')
                .concat(u, '" to "')
                .concat(c, '".')
            ),
              Rn("Background Storage Change", {
                namespace: e,
                key: a,
                oldValue: u,
                newValue: c,
              });
          }
        }),
        chrome.runtime.onMessage.addListener(function (t, e, n) {
          O.debug("in handleRuntimeOnMessage, req:", t),
            O.debug("in handleRuntimeOnMessage, sender:", e),
            Rn("Background Runtime Message", {
              status: "begin",
              cmd: t.cmd,
              req: t,
            });
          var r = null;
          return "translate" === t.cmd
            ? ((function (t, e, n) {
                (ln =
                  ln ||
                  s(
                    c().mark(function t(e, n, r) {
                      var i, o, a, s, u, l, f, h, d, g, y, v;
                      return c().wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              (o = {
                                errcode: -1,
                                errmsg: "unknown err",
                                rslt: null,
                              }),
                                (a = {}),
                                (s = !1);
                            case 3:
                              return (
                                (t.t1 = jn), (t.next = 6), j("usage", "mtTrial")
                              );
                            case 6:
                              if (
                                ((t.t2 = t.sent),
                                (t.t0 = t.t1.decode.call(t.t1, t.t2)[0]),
                                t.t0)
                              ) {
                                t.next = 10;
                                break;
                              }
                              t.t0 = 0;
                            case 10:
                              if (
                                ((d = t.t0),
                                O.debug(
                                  "in handleOnmessageTranslate, _decoded_mtTrial:",
                                  d
                                ),
                                !(d >= 60 * p.trial.mtMinutes * 1e3))
                              ) {
                                t.next = 24;
                                break;
                              }
                              return (t.next = 15), j("account", "email");
                            case 15:
                              return (
                                (g = t.sent),
                                (t.next = 18),
                                j("account", "cusId")
                              );
                            case 18:
                              t.next = 24;
                              break;

                            case 24:
                              return (
                                (v = p.backend.translate),
                                O.debug("fetch: " + v),
                                (t.t3 = O),
                                (t.t4 = JSON),
                                (t.next = 30),
                                j(null, "ga.clientid")
                              );
                            case 30:
                              return (
                                (t.t5 = t.sent),
                                (t.next = 33),
                                j("account", "email")
                              );
                            case 33:
                              return (
                                (t.t6 = t.sent),
                                (t.next = 36),
                                j("account", "cusId")
                              );
                            case 36:
                              return (
                                (t.t7 = t.sent),
                                (t.t8 = U()),
                                (t.t9 = chrome.runtime.getManifest().version),
                                (t.t10 = n.origin),
                                (t.t11 =
                                  null == n ||
                                  null === (u = n.tab) ||
                                  void 0 === u
                                    ? void 0
                                    : u.url),
                                (t.t12 =
                                  null == n ||
                                  null === (l = n.tab) ||
                                  void 0 === l
                                    ? void 0
                                    : l.title),
                                (t.t13 = e.payload.from),
                                (t.t14 = e.payload.to),
                                (t.t15 = {
                                  ext: "SubTrans",
                                  cid: t.t5,
                                  email: t.t6,
                                  cusId: t.t7,
                                  monthId: t.t8,
                                  version: t.t9,
                                  origin: t.t10,
                                  tab_url: t.t11,
                                  tab_title: t.t12,
                                  from: t.t13,
                                  to: t.t14,
                                  q: "...",
                                }),
                                (t.t16 = t.t4.stringify.call(t.t4, t.t15)),
                                (t.t17 = "body: " + t.t16),
                                t.t3.debug.call(t.t3, t.t17),
                                (t.t18 = fetch),
                                (t.t19 = v),
                                (t.t20 = {
                                  "Content-Type": "application/json",
                                }),
                                (t.t21 = JSON),
                                (t.next = 54),
                                j(null, "ga.clientid")
                              );
                            case 54:
                              return (
                                (t.t22 = t.sent),
                                (t.next = 57),
                                j("account", "email")
                              );
                            case 57:
                              return (
                                (t.t23 = t.sent),
                                (t.next = 60),
                                j("account", "cusId")
                              );
                            case 60:
                              return (
                                (t.t24 = t.sent),
                                (t.t25 = U()),
                                (t.t26 = chrome.runtime.getManifest().version),
                                (t.t27 = n.origin),
                                (t.t28 =
                                  null == n ||
                                  null === (f = n.tab) ||
                                  void 0 === f
                                    ? void 0
                                    : f.url),
                                (t.t29 =
                                  null == n ||
                                  null === (h = n.tab) ||
                                  void 0 === h
                                    ? void 0
                                    : h.title),
                                (t.t30 = e.payload.from),
                                (t.t31 = e.payload.to),
                                (t.t32 = e.payload.q),
                                (t.t33 = {
                                  ext: "SubTrans",
                                  cid: t.t22,
                                  email: t.t23,
                                  cusId: t.t24,
                                  monthId: t.t25,
                                  version: t.t26,
                                  origin: t.t27,
                                  tab_url: t.t28,
                                  tab_title: t.t29,
                                  from: t.t30,
                                  to: t.t31,
                                  q: t.t32,
                                }),
                                (t.t34 = t.t21.stringify.call(t.t21, t.t33)),
                                (t.t35 = {
                                  method: "POST",
                                  headers: t.t20,
                                  body: t.t34,
                                }),
                                (t.next = 74),
                                (0, t.t18)(t.t19, t.t35)
                                  .then(function (t) {
                                    return t.json();
                                  })
                                  .then(function (t) {
                                    var n;
                                    return (
                                      O.debug(
                                        "fetch 'translate' rslt errcode: ",
                                        null == t ? void 0 : t.errcode,
                                        ", errmsg:",
                                        null == t ? void 0 : t.errmsg
                                      ),
                                      0 !== t.errcode
                                        ? ((s = !0),
                                          -110 === t.errcode
                                            ? q(
                                                e.payload.q,
                                                chrome.i18n.getMessage(
                                                  "subt_fake_exceed_quota"
                                                )
                                              )
                                            : q(
                                                e.payload.q,
                                                "[error] - ".concat(
                                                  null === (n = t.errmsg) ||
                                                    void 0 === n
                                                    ? void 0
                                                    : n.slice(0, 20)
                                                )
                                              ))
                                        : t.trans_result
                                    );
                                  })
                                  .catch(function (t) {
                                    var n;
                                    return (
                                      O.error(t),
                                      (s = !0),
                                      q(
                                        e.payload.q,
                                        "[error] - ".concat(
                                          null === (n = t.message) ||
                                            void 0 === n
                                            ? void 0
                                            : n.slice(0, 20)
                                        )
                                      )
                                    );
                                  })
                              );
                            case 74:
                              (a = t.sent) &&
                                (o = { errcode: 0, rslt: a, isFaked: false });
                            case 76:
                            case 77:
                              O.debug("onMessage[translate] sendrsp:", o),
                                r(o),
                                Rn("Background Runtime Message", {
                                  status: "end",
                                  cmd: e.cmd,
                                  rsp: Nn(
                                    Nn({}, o),
                                    {},
                                    {
                                      rslt: JSON.stringify(
                                        null === (i = o) || void 0 === i
                                          ? void 0
                                          : i.rslt
                                      ),
                                    }
                                  ),
                                });
                            case 80:
                            case "end":
                              return t.stop();
                          }
                      }, t);
                    })
                  )).apply(this, arguments);
              })(t, e, n),
              !0)
            : "usage" === t.cmd
            ? ((function (t, e, n) {
                (Cn =
                  Cn ||
                  s(
                    c().mark(function t(e, n, r) {
                      var i, o, a, s, u, l, f, h, d, g, y, v, m, b, w;
                      return c().wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              (i = { errcode: -1, rslt: null }),
                                O.debug(
                                  "in handleOnmessageUsage, isReportingUsage:",
                                  qn
                                );
                            case 2:
                              if (!qn) {
                                t.next = 5;
                                break;
                              }
                              return (
                                (i = {
                                  errcode: -1,
                                  errmsg: "abandon, usage is modifing",
                                }),
                                t.abrupt("break", 72)
                              );
                            case 5:
                              return (qn = !0), (t.next = 8), j(null, "usage");
                            case 8:
                              if (
                                ((o = t.sent),
                                (a =
                                  Fn.decode(
                                    null == o ? void 0 : o.mtTrial
                                  )[0] || 0),
                                (s =
                                  Fn.decode(
                                    null == o ? void 0 : o.mtCache
                                  )[0] || 0),
                                O.debug(
                                  "in handleOnmessageUsage, _decoded_mtTrial:",
                                  a
                                ),
                                O.debug(
                                  "in handleOnmessageUsage, _decoded_mtCache:",
                                  s
                                ),
                                !(a < 60 * p.trial.mtMinutes * 1e3))
                              ) {
                                t.next = 19;
                                break;
                              }
                              return (
                                (t.next = 16),
                                L("usage", {
                                  mtTrial: Fn.encode(
                                    a +
                                      ((null === (u = e.payload) ||
                                      void 0 === u ||
                                      null === (u = u.payload) ||
                                      void 0 === u
                                        ? void 0
                                        : u.value) || 0)
                                  ),
                                  mtCache: Fn.encode(s),
                                })
                              );
                            case 16:
                              (i = {
                                errcode: 0,
                                errmsg: "set to usage.mtTrail success",
                              }),
                                (t.next = 70);
                              break;
                            case 19:
                              return (t.next = 21), j("account", "email");
                            case 21:
                              return (
                                (l = t.sent),
                                (t.next = 24),
                                j("account", "cusId")
                              );
                            case 24:
                              t.next = 29;
                              break;

                            case 29:
                              if (
                                !(
                                  s +
                                    ((null === (h = e.payload) ||
                                    void 0 === h ||
                                    null === (h = h.payload) ||
                                    void 0 === h
                                      ? void 0
                                      : h.value) || 0) <
                                  6e4
                                )
                              ) {
                                t.next = 35;
                                break;
                              }
                              return (
                                (t.next = 32),
                                L("usage", {
                                  mtTrial: Fn.encode(a),
                                  mtCache: Fn.encode(
                                    s +
                                      ((null === (d = e.payload) ||
                                      void 0 === d ||
                                      null === (d = d.payload) ||
                                      void 0 === d
                                        ? void 0
                                        : d.value) || 0)
                                  ),
                                })
                              );
                            case 32:
                              (i = {
                                errcode: 0,
                                errmsg: "set to usage.mtCache success",
                              }),
                                (t.next = 70);
                              break;
                            case 35:
                              return (
                                O.debug(
                                  "in handleOnmessageUsage, reporting to server"
                                ),
                                (t.t0 = e.payload.cmd),
                                (t.t1 = Mn),
                                (t.t2 = Mn),
                                (t.next = 41),
                                j(null, "ga.clientid")
                              );
                            case 41:
                              return (
                                (t.t3 = t.sent),
                                (t.next = 44),
                                j("account", "email")
                              );
                            case 44:
                              return (
                                (t.t4 = t.sent),
                                (t.next = 47),
                                j("account", "cusId")
                              );
                            case 47:
                              return (
                                (t.t5 = t.sent),
                                (t.t6 = U()),
                                (t.t7 = chrome.runtime.getManifest().version),
                                (t.t8 = Date.now()),
                                (t.t9 =
                                  null == n ||
                                  null === (g = n.tab) ||
                                  void 0 === g
                                    ? void 0
                                    : g.url),
                                (t.t10 =
                                  null == n ||
                                  null === (y = n.tab) ||
                                  void 0 === y
                                    ? void 0
                                    : y.title),
                                (t.t11 = {
                                  ext: "SubTrans",
                                  cid: t.t3,
                                  email: t.t4,
                                  cusId: t.t5,
                                  monthId: t.t6,
                                  version: t.t7,
                                  reportAt: t.t8,
                                  tab_url: t.t9,
                                  tab_title: t.t10,
                                }),
                                (t.t12 = e.payload.payload),
                                (t.t13 = (0, t.t2)(t.t11, t.t12)),
                                (t.t14 = {}),
                                (t.t15 = {
                                  value:
                                    s +
                                    ((null === (v = e.payload) ||
                                    void 0 === v ||
                                    null === (v = v.payload) ||
                                    void 0 === v
                                      ? void 0
                                      : v.value) || 0),
                                }),
                                (t.t16 = (0, t.t1)(t.t13, t.t14, t.t15)),
                                (b = { cmd: t.t0, payload: t.t16 }),
                                (t.next = 62),
                                Vn(b)
                              );
                            case 62:
                              if (
                                0 !== (i = t.sent).errcode ||
                                0 !==
                                  (null === (m = i) ||
                                  void 0 === m ||
                                  null === (m = m.rslt) ||
                                  void 0 === m
                                    ? void 0
                                    : m.errcode)
                              ) {
                                t.next = 68;
                                break;
                              }
                              return (
                                (t.next = 66),
                                L("usage", {
                                  mtTrial: Fn.encode(a),
                                  mtCache: Fn.encode(0),
                                })
                              );
                            case 66:
                              t.next = 70;
                              break;
                            case 68:
                              return (
                                (t.next = 70),
                                L("usage", {
                                  mtTrial: Fn.encode(a),
                                  mtCache: Fn.encode(
                                    s +
                                      ((null === (w = e.payload) ||
                                      void 0 === w ||
                                      null === (w = w.payload) ||
                                      void 0 === w
                                        ? void 0
                                        : w.value) || 0)
                                  ),
                                })
                              );
                            case 70:
                              qn = !1;
                            case 71:
                            case 72:
                              O.debug(
                                "onMessage[usage] sendrsp:",
                                JSON.stringify(i)
                              ),
                                r(i),
                                Rn("Background Runtime Message", {
                                  status: "end",
                                  cmd: e.cmd,
                                  rsp: i,
                                });
                            case 75:
                            case "end":
                              return t.stop();
                          }
                      }, t);
                    })
                  )).apply(this, arguments);
              })(t, e, n),
              !0)
            : "account" === t.cmd
            ? ((function (t, e, n) {
                (Un =
                  Un ||
                  s(
                    c().mark(function t(e, n, r) {
                      var i, o, a, s, u, l, f;
                      return c().wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              i = {
                                errcode: -1,
                                errmsg: "unknown err",
                                rslt: null,
                              };
                            case 1:
                              return (t.next = 3), j("account", "email");
                            case 3:
                              return (
                                (s = t.sent),
                                (t.next = 6),
                                j("account", "cusId")
                              );
                            case 6:
                              t.next = 10;
                              break;

                            case 10:
                              return (t.next = 12), j(null, "account_info");
                            case 12:
                              if (
                                !(
                                  ((null == (l = t.sent)
                                    ? void 0
                                    : l.updatedAt) || 0) +
                                    1e4 >
                                  Date.now()
                                )
                              ) {
                                t.next = 16;
                                break;
                              }
                              return (
                                (i = {
                                  errcode: 0,
                                  errmsg: "get from cache success",
                                  rslt: { info: l },
                                }),
                                t.abrupt("break", 35)
                              );
                            case 16:
                              return (
                                (t.t0 = e.payload.cmd),
                                (t.t1 = Hn),
                                (t.next = 20),
                                j(null, "ga.clientid")
                              );
                            case 20:
                              return (
                                (t.t2 = t.sent),
                                (t.t3 = s),
                                (t.t4 = u),
                                (t.t5 = U()),
                                (t.t6 = chrome.runtime.getManifest().version),
                                (t.t7 =
                                  null == n ||
                                  null === (o = n.tab) ||
                                  void 0 === o
                                    ? void 0
                                    : o.url),
                                (t.t8 =
                                  null == n ||
                                  null === (a = n.tab) ||
                                  void 0 === a
                                    ? void 0
                                    : a.title),
                                (t.t9 = {
                                  ext: "SubTrans",
                                  cid: t.t2,
                                  email: t.t3,
                                  cusId: t.t4,
                                  monthId: t.t5,
                                  version: t.t6,
                                  tab_url: t.t7,
                                  tab_title: t.t8,
                                }),
                                (t.t10 = e.payload.payload),
                                (t.t11 = (0, t.t1)(t.t9, t.t10)),
                                (f = { cmd: t.t0, payload: t.t11 }),
                                (t.next = 33),
                                Xn(f)
                              );
                            case 33:
                              i = t.sent;
                            case 34:
                            case 35:
                              O.debug("onMessage[account] sendrsp:", i),
                                r(i),
                                Rn("Background Runtime Message", {
                                  status: "end",
                                  cmd: e.cmd,
                                  rsp: i,
                                });
                            case 38:
                            case "end":
                              return t.stop();
                          }
                      }, t);
                    })
                  )).apply(this, arguments);
              })(t, e, n),
              !0)
            : "os" === t.cmd
            ? ((function (t, e, n) {
                ($n =
                  $n ||
                  s(
                    c().mark(function t(e, n, r) {
                      var i, o, a;
                      return c().wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              i = {
                                errcode: -1,
                                errmsg: "unknown err",
                                rslt: null,
                              };
                            case 1:
                              if ("search" !== e.payload.cmd) {
                                t.next = 9;
                                break;
                              }
                              if (
                                null !== (o = e.payload) &&
                                void 0 !== o &&
                                null !== (o = o.payload) &&
                                void 0 !== o &&
                                o.query
                              ) {
                                t.next = 5;
                                break;
                              }
                              return (
                                (i = {
                                  errcode: -1,
                                  errmsg: "params err: query",
                                  rslt: null,
                                }),
                                t.abrupt("break", 10)
                              );
                            case 5:
                              return (
                                (a = {
                                  query: e.payload.payload.query,
                                  sublanguageid:
                                    e.payload.payload.sublanguageid || "all",
                                }),
                                (t.next = 8),
                                tr(a)
                              );
                            case 8:
                              i = t.sent;
                            case 9:
                            case 10:
                              O.debug("onMessage[os] sendrsp:", i),
                                r(i),
                                Rn("Background Runtime Message", {
                                  status: "end",
                                  cmd: e.cmd,
                                  rsp: i,
                                });
                            case 13:
                            case "end":
                              return t.stop();
                          }
                      }, t);
                    })
                  )).apply(this, arguments);
              })(t, e, n),
              !0)
            : "dictionary" === t.cmd
            ? ((function (t, e, n) {
                (Yn =
                  Yn ||
                  s(
                    c().mark(function t(e, n, r) {
                      var i, o, a;
                      return c().wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              i = { errcode: -1, rslt: null };
                            case 1:
                              return (t.next = 3), j(null, "account");
                            case 3:
                              return (
                                (o = t.sent),
                                (t.t0 = e.payload.cmd),
                                (t.t1 = nr),
                                (t.next = 8),
                                j(null, "ga.clientid")
                              );
                            case 8:
                              return (
                                (t.t2 = t.sent),
                                (t.t3 = null == o ? void 0 : o.email),
                                (t.t4 = null == o ? void 0 : o.cusId),
                                (t.t5 = chrome.runtime.getManifest().version),
                                (t.t6 = {
                                  ext: "SubTrans",
                                  cid: t.t2,
                                  email: t.t3,
                                  cusId: t.t4,
                                  version: t.t5,
                                }),
                                (t.t7 = e.payload.payload),
                                (t.t8 = (0, t.t1)(t.t6, t.t7)),
                                (a = { cmd: t.t0, payload: t.t8 }),
                                (t.next = 18),
                                or(a)
                              );
                            case 18:
                              i = t.sent;
                            case 19:
                            case 20:
                              O.debug("sendrsp:", JSON.stringify(i)),
                                r(i),
                                Rn("Background Runtime Message", {
                                  status: "end",
                                  cmd: e.cmd,
                                  rsp: i,
                                });
                            case 23:
                            case "end":
                              return t.stop();
                          }
                      }, t);
                    })
                  )).apply(this, arguments);
              })(t, e, n),
              !0)
            : "synthesize" === t.cmd
            ? ((function (t, e, n) {
                (rr =
                  rr ||
                  s(
                    c().mark(function t(e, n, r) {
                      var i, o, a;
                      return c().wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              i = { errcode: -1, rslt: null };
                            case 1:
                              return (t.next = 3), j(null, "account");
                            case 3:
                              return (
                                (o = t.sent),
                                (t.t0 = e.payload.cmd),
                                (t.t1 = cr),
                                (t.next = 8),
                                j(null, "ga.clientid")
                              );
                            case 8:
                              return (
                                (t.t2 = t.sent),
                                (t.t3 = null == o ? void 0 : o.email),
                                (t.t4 = null == o ? void 0 : o.cusId),
                                (t.t5 = chrome.runtime.getManifest().version),
                                (t.t6 = {
                                  ext: "SubTrans",
                                  cid: t.t2,
                                  email: t.t3,
                                  cusId: t.t4,
                                  version: t.t5,
                                }),
                                (t.t7 = e.payload.payload),
                                (t.t8 = (0, t.t1)(t.t6, t.t7)),
                                (a = { cmd: t.t0, payload: t.t8 }),
                                (t.next = 18),
                                mr(a)
                              );
                            case 18:
                              i = t.sent;
                            case 19:
                            case 20:
                              O.debug("sendrsp:", JSON.stringify(i)),
                                r(i),
                                Rn("Background Runtime Message", {
                                  status: "end",
                                  cmd: e.cmd,
                                  rsp: i,
                                });
                            case 23:
                            case "end":
                              return t.stop();
                          }
                      }, t);
                    })
                  )).apply(this, arguments);
              })(t, e, n),
              !0)
            : (O.error("wrong req.cmd"),
              n((r = { errcode: -1, errmsg: "wrong req.cmd" })),
              void O.debug("rsp:", r));
        }),
        chrome.runtime.onMessageExternal.addListener(function (t, e, n) {
          return (vr =
            vr ||
            s(
              c().mark(function t(e, n, r) {
                var i, o, a, s, u, l;
                return c().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (
                          (O.debug(
                            "in handleRuntimeOnMessageExternal, req:",
                            e
                          ),
                          O.debug(
                            "in handleRuntimeOnMessageExternal, sender:",
                            n
                          ),
                          Rn("Background Runtime MessageExternal", {
                            status: "begin",
                            cmd: e.cmd,
                            req: e,
                          }),
                          (i = null),
                          "from_web_account_update" !== e.cmd)
                        ) {
                          t.next = 17;
                          break;
                        }
                        if (!e.account_info) {
                          t.next = 12;
                          break;
                        }
                        return (t.next = 8), L("account", e.account_info);
                      case 8:
                        if (
                          ((i = {
                            errcode: 0,
                            errmsg: "save account_info succ",
                          }),
                          null !== (o = e.account_info) &&
                            void 0 !== o &&
                            o.email)
                        ) {
                          for (
                            kn(e.account_info.email),
                              a = new Yt(),
                              s = 0,
                              u = Object.keys(e.account_info);
                            s < u.length;
                            s++
                          )
                            (l = u[s]), a.set(l, e.account_info.key);
                          mn(a);
                        }
                        t.next = 14;
                        break;
                      case 12:
                        O.error("req.account_info invalid"),
                          (i = { errcode: -1, errmsg: "account_info invalid" });
                      case 14:
                        r(i), (t.next = 20);
                        break;
                      case 17:
                        O.error("wrong req.cmd"),
                          r((i = { errcode: -1, errmsg: "wrong req.cmd" }));
                      case 20:
                        O.debug("rsp:", i),
                          Rn("Background Runtime MessageExternal", {
                            status: "end",
                            cmd: e.cmd,
                            rsp: i,
                          });
                      case 22:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )).apply(this, arguments);
        }),
        chrome.webRequest.onCompleted.addListener(
          function (t) {
            O.debug("in chrome.webRequest.onCompleted, details:", t);
            var e = new URL(t.url),
              n = e.pathname.split("/");
            "https://www.skillshare.com" === e.origin &&
              "sessions" === (null == n ? void 0 : n[1]) &&
              "stream" === (null == n ? void 0 : n[3]) &&
              "1" !== e.searchParams.get("st") &&
              chrome.storage.session.set({ skillshare: { sessionId: n[2] } });
          },
          { urls: ["https://www.skillshare.com/*"] },
          ["responseHeaders"]
        );
    })();
})();
