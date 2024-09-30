/*! For license information please see options.js.LICENSE.txt */
(() => {
  var e,
    t,
    n = {
      9293: function (e, t, n) {
        var r;
        !(function (i, o) {
          "use strict";
          var a = "function",
            u = "undefined",
            l = "object",
            s = "string",
            c = "model",
            f = "name",
            d = "type",
            p = "vendor",
            h = "version",
            v = "architecture",
            g = "console",
            m = "mobile",
            y = "tablet",
            b = "smarttv",
            w = "wearable",
            _ = "embedded",
            k = "Amazon",
            x = "Apple",
            S = "ASUS",
            E = "BlackBerry",
            O = "Browser",
            C = "Chrome",
            T = "Firefox",
            P = "Google",
            I = "Huawei",
            R = "LG",
            N = "Microsoft",
            A = "Motorola",
            L = "Opera",
            z = "Samsung",
            j = "Sharp",
            M = "Sony",
            $ = "Xiaomi",
            D = "Zebra",
            U = "Facebook",
            F = function (e) {
              for (var t = {}, n = 0; n < e.length; n++)
                t[e[n].toUpperCase()] = e[n];
              return t;
            },
            B = function (e, t) {
              return typeof e === s && -1 !== V(t).indexOf(V(e));
            },
            V = function (e) {
              return e.toLowerCase();
            },
            q = function (e, t) {
              if (typeof e === s)
                return (
                  (e = e.replace(/^\s\s*/, "")),
                  typeof t === u ? e : e.substring(0, 350)
                );
            },
            W = function (e, t) {
              for (var n, r, i, u, s, c, f = 0; f < t.length && !s; ) {
                var d = t[f],
                  p = t[f + 1];
                for (n = r = 0; n < d.length && !s; )
                  if ((s = d[n++].exec(e)))
                    for (i = 0; i < p.length; i++)
                      (c = s[++r]),
                        typeof (u = p[i]) === l && u.length > 0
                          ? 2 === u.length
                            ? typeof u[1] == a
                              ? (this[u[0]] = u[1].call(this, c))
                              : (this[u[0]] = u[1])
                            : 3 === u.length
                            ? typeof u[1] !== a || (u[1].exec && u[1].test)
                              ? (this[u[0]] = c ? c.replace(u[1], u[2]) : o)
                              : (this[u[0]] = c ? u[1].call(this, c, u[2]) : o)
                            : 4 === u.length &&
                              (this[u[0]] = c
                                ? u[3].call(this, c.replace(u[1], u[2]))
                                : o)
                          : (this[u] = c || o);
                f += 2;
              }
            },
            H = function (e, t) {
              for (var n in t)
                if (typeof t[n] === l && t[n].length > 0) {
                  for (var r = 0; r < t[n].length; r++)
                    if (B(t[n][r], e)) return "?" === n ? o : n;
                } else if (B(t[n], e)) return "?" === n ? o : n;
              return e;
            },
            K = {
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
            Q = {
              browser: [
                [/\b(?:crmo|crios)\/([\w\.]+)/i],
                [h, [f, "Chrome"]],
                [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                [h, [f, "Edge"]],
                [
                  /(opera mini)\/([-\w\.]+)/i,
                  /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
                  /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i,
                ],
                [f, h],
                [/opios[\/ ]+([\w\.]+)/i],
                [h, [f, L + " Mini"]],
                [/\bopr\/([\w\.]+)/i],
                [h, [f, L]],
                [
                  /(kindle)\/([\w\.]+)/i,
                  /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,
                  /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,
                  /(ba?idubrowser)[\/ ]?([\w\.]+)/i,
                  /(?:ms|\()(ie) ([\w\.]+)/i,
                  /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,
                  /(weibo)__([\d\.]+)/i,
                ],
                [f, h],
                [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
                [h, [f, "UC" + O]],
                [
                  /microm.+\bqbcore\/([\w\.]+)/i,
                  /\bqbcore\/([\w\.]+).+microm/i,
                ],
                [h, [f, "WeChat(Win) Desktop"]],
                [/micromessenger\/([\w\.]+)/i],
                [h, [f, "WeChat"]],
                [/konqueror\/([\w\.]+)/i],
                [h, [f, "Konqueror"]],
                [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
                [h, [f, "IE"]],
                [/yabrowser\/([\w\.]+)/i],
                [h, [f, "Yandex"]],
                [/(avast|avg)\/([\w\.]+)/i],
                [[f, /(.+)/, "$1 Secure " + O], h],
                [/\bfocus\/([\w\.]+)/i],
                [h, [f, T + " Focus"]],
                [/\bopt\/([\w\.]+)/i],
                [h, [f, L + " Touch"]],
                [/coc_coc\w+\/([\w\.]+)/i],
                [h, [f, "Coc Coc"]],
                [/dolfin\/([\w\.]+)/i],
                [h, [f, "Dolphin"]],
                [/coast\/([\w\.]+)/i],
                [h, [f, L + " Coast"]],
                [/miuibrowser\/([\w\.]+)/i],
                [h, [f, "MIUI " + O]],
                [/fxios\/([-\w\.]+)/i],
                [h, [f, T]],
                [/\bqihu|(qi?ho?o?|360)browser/i],
                [[f, "360 " + O]],
                [/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],
                [[f, /(.+)/, "$1 " + O], h],
                [/(comodo_dragon)\/([\w\.]+)/i],
                [[f, /_/g, " "], h],
                [
                  /(electron)\/([\w\.]+) safari/i,
                  /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
                  /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i,
                ],
                [f, h],
                [
                  /(metasr)[\/ ]?([\w\.]+)/i,
                  /(lbbrowser)/i,
                  /\[(linkedin)app\]/i,
                ],
                [f],
                [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
                [[f, U], h],
                [
                  /safari (line)\/([\w\.]+)/i,
                  /\b(line)\/([\w\.]+)\/iab/i,
                  /(chromium|instagram)[\/ ]([-\w\.]+)/i,
                ],
                [f, h],
                [/\bgsa\/([\w\.]+) .*safari\//i],
                [h, [f, "GSA"]],
                [/headlesschrome(?:\/([\w\.]+)| )/i],
                [h, [f, C + " Headless"]],
                [/ wv\).+(chrome)\/([\w\.]+)/i],
                [[f, C + " WebView"], h],
                [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
                [h, [f, "Android " + O]],
                [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
                [f, h],
                [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
                [h, [f, "Mobile Safari"]],
                [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
                [h, f],
                [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
                [
                  f,
                  [
                    h,
                    H,
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
                [f, h],
                [/(navigator|netscape\d?)\/([-\w\.]+)/i],
                [[f, "Netscape"], h],
                [/mobile vr; rv:([\w\.]+)\).+firefox/i],
                [h, [f, T + " Reality"]],
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
                [f, h],
                [/(cobalt)\/([\w\.]+)/i],
                [f, [h, /master.|lts./, ""]],
              ],
              cpu: [
                [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
                [[v, "amd64"]],
                [/(ia32(?=;))/i],
                [[v, V]],
                [/((?:i[346]|x)86)[;\)]/i],
                [[v, "ia32"]],
                [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
                [[v, "arm64"]],
                [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
                [[v, "armhf"]],
                [/windows (ce|mobile); ppc;/i],
                [[v, "arm"]],
                [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
                [[v, /ower/, "", V]],
                [/(sun4\w)[;\)]/i],
                [[v, "sparc"]],
                [
                  /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i,
                ],
                [[v, V]],
              ],
              device: [
                [
                  /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i,
                ],
                [c, [p, z], [d, y]],
                [
                  /\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i,
                  /samsung[- ]([-\w]+)/i,
                  /sec-(sgh\w+)/i,
                ],
                [c, [p, z], [d, m]],
                [/((ipod|iphone)\d+,\d+)/i],
                [c, [p, x], [d, m]],
                [/(ipad\d+,\d+)/i],
                [c, [p, x], [d, y]],
                [/\((ip(?:hone|od)[\w ]*);/i],
                [c, [p, x], [d, m]],
                [
                  /\((ipad);[-\w\),; ]+apple/i,
                  /applecoremedia\/[\w\.]+ \((ipad)/i,
                  /\b(ipad)\d\d?,\d\d?[;\]].+ios/i,
                ],
                [c, [p, x], [d, y]],
                [/(macintosh);/i],
                [c, [p, x]],
                [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
                [c, [p, I], [d, y]],
                [
                  /(?:huawei|honor)([-\w ]+)[;\)]/i,
                  /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i,
                ],
                [c, [p, I], [d, m]],
                [
                  /\b(poco[\w ]+)(?: bui|\))/i,
                  /\b; (\w+) build\/hm\1/i,
                  /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
                  /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
                  /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i,
                ],
                [
                  [c, /_/g, " "],
                  [p, $],
                  [d, m],
                ],
                [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
                [
                  [c, /_/g, " "],
                  [p, $],
                  [d, y],
                ],
                [
                  /; (\w+) bui.+ oppo/i,
                  /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i,
                ],
                [c, [p, "OPPO"], [d, m]],
                [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
                [c, [p, "Vivo"], [d, m]],
                [/\b(rmx[12]\d{3})(?: bui|;|\))/i],
                [c, [p, "Realme"], [d, m]],
                [
                  /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
                  /\bmot(?:orola)?[- ](\w*)/i,
                  /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i,
                ],
                [c, [p, A], [d, m]],
                [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
                [c, [p, A], [d, y]],
                [
                  /((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i,
                ],
                [c, [p, R], [d, y]],
                [
                  /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
                  /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
                  /\blg-?([\d\w]+) bui/i,
                ],
                [c, [p, R], [d, m]],
                [
                  /(ideatab[-\w ]+)/i,
                  /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i,
                ],
                [c, [p, "Lenovo"], [d, y]],
                [
                  /(?:maemo|nokia).*(n900|lumia \d+)/i,
                  /nokia[-_ ]?([-\w\.]*)/i,
                ],
                [
                  [c, /_/g, " "],
                  [p, "Nokia"],
                  [d, m],
                ],
                [/(pixel c)\b/i],
                [c, [p, P], [d, y]],
                [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
                [c, [p, P], [d, m]],
                [
                  /droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
                ],
                [c, [p, M], [d, m]],
                [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
                [
                  [c, "Xperia Tablet"],
                  [p, M],
                  [d, y],
                ],
                [
                  / (kb2005|in20[12]5|be20[12][59])\b/i,
                  /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i,
                ],
                [c, [p, "OnePlus"], [d, m]],
                [
                  /(alexa)webm/i,
                  /(kf[a-z]{2}wi)( bui|\))/i,
                  /(kf[a-z]+)( bui|\)).+silk\//i,
                ],
                [c, [p, k], [d, y]],
                [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
                [
                  [c, /(.+)/g, "Fire Phone $1"],
                  [p, k],
                  [d, m],
                ],
                [/(playbook);[-\w\),; ]+(rim)/i],
                [c, p, [d, y]],
                [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
                [c, [p, E], [d, m]],
                [
                  /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i,
                ],
                [c, [p, S], [d, y]],
                [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
                [c, [p, S], [d, m]],
                [/(nexus 9)/i],
                [c, [p, "HTC"], [d, y]],
                [
                  /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
                  /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
                  /(alcatel|geeksphone|nexian|panasonic|sony(?!-bra))[-_ ]?([-\w]*)/i,
                ],
                [p, [c, /_/g, " "], [d, m]],
                [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
                [c, [p, "Acer"], [d, y]],
                [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
                [c, [p, "Meizu"], [d, m]],
                [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
                [c, [p, j], [d, m]],
                [
                  /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,
                  /(hp) ([\w ]+\w)/i,
                  /(asus)-?(\w+)/i,
                  /(microsoft); (lumia[\w ]+)/i,
                  /(lenovo)[-_ ]?([-\w]+)/i,
                  /(jolla)/i,
                  /(oppo) ?([\w ]+) bui/i,
                ],
                [p, c, [d, m]],
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
                [p, c, [d, y]],
                [/(surface duo)/i],
                [c, [p, N], [d, y]],
                [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
                [c, [p, "Fairphone"], [d, m]],
                [/(u304aa)/i],
                [c, [p, "AT&T"], [d, m]],
                [/\bsie-(\w*)/i],
                [c, [p, "Siemens"], [d, m]],
                [/\b(rct\w+) b/i],
                [c, [p, "RCA"], [d, y]],
                [/\b(venue[\d ]{2,7}) b/i],
                [c, [p, "Dell"], [d, y]],
                [/\b(q(?:mv|ta)\w+) b/i],
                [c, [p, "Verizon"], [d, y]],
                [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
                [c, [p, "Barnes & Noble"], [d, y]],
                [/\b(tm\d{3}\w+) b/i],
                [c, [p, "NuVision"], [d, y]],
                [/\b(k88) b/i],
                [c, [p, "ZTE"], [d, y]],
                [/\b(nx\d{3}j) b/i],
                [c, [p, "ZTE"], [d, m]],
                [/\b(gen\d{3}) b.+49h/i],
                [c, [p, "Swiss"], [d, m]],
                [/\b(zur\d{3}) b/i],
                [c, [p, "Swiss"], [d, y]],
                [/\b((zeki)?tb.*\b) b/i],
                [c, [p, "Zeki"], [d, y]],
                [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
                [[p, "Dragon Touch"], c, [d, y]],
                [/\b(ns-?\w{0,9}) b/i],
                [c, [p, "Insignia"], [d, y]],
                [/\b((nxa|next)-?\w{0,9}) b/i],
                [c, [p, "NextBook"], [d, y]],
                [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
                [[p, "Voice"], c, [d, m]],
                [/\b(lvtel\-)?(v1[12]) b/i],
                [[p, "LvTel"], c, [d, m]],
                [/\b(ph-1) /i],
                [c, [p, "Essential"], [d, m]],
                [/\b(v(100md|700na|7011|917g).*\b) b/i],
                [c, [p, "Envizen"], [d, y]],
                [/\b(trio[-\w\. ]+) b/i],
                [c, [p, "MachSpeed"], [d, y]],
                [/\btu_(1491) b/i],
                [c, [p, "Rotor"], [d, y]],
                [/(shield[\w ]+) b/i],
                [c, [p, "Nvidia"], [d, y]],
                [/(sprint) (\w+)/i],
                [p, c, [d, m]],
                [/(kin\.[onetw]{3})/i],
                [
                  [c, /\./g, " "],
                  [p, N],
                  [d, m],
                ],
                [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                [c, [p, D], [d, y]],
                [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
                [c, [p, D], [d, m]],
                [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
                [p, c, [d, g]],
                [/droid.+; (shield) bui/i],
                [c, [p, "Nvidia"], [d, g]],
                [/(playstation [345portablevi]+)/i],
                [c, [p, M], [d, g]],
                [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
                [c, [p, N], [d, g]],
                [/smart-tv.+(samsung)/i],
                [p, [d, b]],
                [/hbbtv.+maple;(\d+)/i],
                [
                  [c, /^/, "SmartTV"],
                  [p, z],
                  [d, b],
                ],
                [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
                [
                  [p, R],
                  [d, b],
                ],
                [/(apple) ?tv/i],
                [p, [c, x + " TV"], [d, b]],
                [/crkey/i],
                [
                  [c, C + "cast"],
                  [p, P],
                  [d, b],
                ],
                [/droid.+aft(\w)( bui|\))/i],
                [c, [p, k], [d, b]],
                [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
                [c, [p, j], [d, b]],
                [/(bravia[\w ]+)( bui|\))/i],
                [c, [p, M], [d, b]],
                [/(mitv-\w{5}) bui/i],
                [c, [p, $], [d, b]],
                [
                  /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
                  /hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i,
                ],
                [
                  [p, q],
                  [c, q],
                  [d, b],
                ],
                [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
                [[d, b]],
                [/((pebble))app/i],
                [p, c, [d, w]],
                [/droid.+; (glass) \d/i],
                [c, [p, P], [d, w]],
                [/droid.+; (wt63?0{2,3})\)/i],
                [c, [p, D], [d, w]],
                [/(quest( 2)?)/i],
                [c, [p, U], [d, w]],
                [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
                [p, [d, _]],
                [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],
                [c, [d, m]],
                [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
                [c, [d, y]],
                [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
                [[d, y]],
                [
                  /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i,
                ],
                [[d, m]],
                [/(android[-\w\. ]{0,9});.+buil/i],
                [c, [p, "Generic"]],
              ],
              engine: [
                [/windows.+ edge\/([\w\.]+)/i],
                [h, [f, "EdgeHTML"]],
                [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                [h, [f, "Blink"]],
                [
                  /(presto)\/([\w\.]+)/i,
                  /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
                  /ekioh(flow)\/([\w\.]+)/i,
                  /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
                  /(icab)[\/ ]([23]\.[\d\.]+)/i,
                ],
                [f, h],
                [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                [h, f],
              ],
              os: [
                [/microsoft (windows) (vista|xp)/i],
                [f, h],
                [
                  /(windows) nt 6\.2; (arm)/i,
                  /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,
                  /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,
                ],
                [f, [h, H, K]],
                [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
                [
                  [f, "Windows"],
                  [h, H, K],
                ],
                [
                  /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
                  /cfnetwork\/.+darwin/i,
                ],
                [
                  [h, /_/g, "."],
                  [f, "iOS"],
                ],
                [
                  /(mac os x) ?([\w\. ]*)/i,
                  /(macintosh|mac_powerpc\b)(?!.+haiku)/i,
                ],
                [
                  [f, "Mac OS"],
                  [h, /_/g, "."],
                ],
                [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
                [h, f],
                [
                  /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
                  /(blackberry)\w*\/([\w\.]*)/i,
                  /(tizen|kaios)[\/ ]([\w\.]+)/i,
                  /\((series40);/i,
                ],
                [f, h],
                [/\(bb(10);/i],
                [h, [f, E]],
                [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
                [h, [f, "Symbian"]],
                [
                  /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i,
                ],
                [h, [f, T + " OS"]],
                [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
                [h, [f, "webOS"]],
                [/crkey\/([\d\.]+)/i],
                [h, [f, C + "cast"]],
                [/(cros) [\w]+ ([\w\.]+\w)/i],
                [[f, "Chromium OS"], h],
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
                [f, h],
                [/(sunos) ?([\w\.\d]*)/i],
                [[f, "Solaris"], h],
                [
                  /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
                  /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
                  /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,
                  /(unix) ?([\w\.]*)/i,
                ],
                [f, h],
              ],
            },
            G = function (e, t) {
              if ((typeof e === l && ((t = e), (e = o)), !(this instanceof G)))
                return new G(e, t).getResult();
              var n =
                  e ||
                  (typeof i !== u && i.navigator && i.navigator.userAgent
                    ? i.navigator.userAgent
                    : ""),
                r = t
                  ? (function (e, t) {
                      var n = {};
                      for (var r in e)
                        t[r] && t[r].length % 2 == 0
                          ? (n[r] = t[r].concat(e[r]))
                          : (n[r] = e[r]);
                      return n;
                    })(Q, t)
                  : Q;
              return (
                (this.getBrowser = function () {
                  var e,
                    t = {};
                  return (
                    (t[f] = o),
                    (t[h] = o),
                    W.call(t, n, r.browser),
                    (t.major =
                      typeof (e = t.version) === s
                        ? e.replace(/[^\d\.]/g, "").split(".")[0]
                        : o),
                    t
                  );
                }),
                (this.getCPU = function () {
                  var e = {};
                  return (e[v] = o), W.call(e, n, r.cpu), e;
                }),
                (this.getDevice = function () {
                  var e = {};
                  return (
                    (e[p] = o),
                    (e[c] = o),
                    (e[d] = o),
                    W.call(e, n, r.device),
                    e
                  );
                }),
                (this.getEngine = function () {
                  var e = {};
                  return (e[f] = o), (e[h] = o), W.call(e, n, r.engine), e;
                }),
                (this.getOS = function () {
                  var e = {};
                  return (e[f] = o), (e[h] = o), W.call(e, n, r.os), e;
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
                (this.setUA = function (e) {
                  return (
                    (n = typeof e === s && e.length > 350 ? q(e, 350) : e), this
                  );
                }),
                this.setUA(n),
                this
              );
            };
          (G.VERSION = "0.7.33"),
            (G.BROWSER = F([f, h, "major"])),
            (G.CPU = F([v])),
            (G.DEVICE = F([c, p, d, g, m, b, y, w, _])),
            (G.ENGINE = G.OS = F([f, h])),
            typeof t !== u
              ? (e.exports && (t = e.exports = G), (t.UAParser = G))
              : n.amdO
              ? (r = function () {
                  return G;
                }.call(t, n, t, e)) === o || (e.exports = r)
              : typeof i !== u && (i.UAParser = G);
          var Y = typeof i !== u && (i.jQuery || i.Zepto);
          if (Y && !Y.ua) {
            var X = new G();
            (Y.ua = X.getResult()),
              (Y.ua.get = function () {
                return X.getUA();
              }),
              (Y.ua.set = function (e) {
                X.setUA(e);
                var t = X.getResult();
                for (var n in t) Y.ua[n] = t[n];
              });
          }
        })("object" == typeof window ? window : this);
      },
      9332: (e) => {
        var t;
        (t = {
          name: "production",
          backend: "https://api.subtrans.cc",
          web: "https://www.subtrans.cc",
          dashboard: "https://app.subtrans.cc",
          ga_ua_id: "UA-220189590-3",
          amp_key: "07c61c6ea81b7a9d1d834b9eaf14e5f4",
        }),
          (e.exports = { env: t });
      },
      8679: (e, t, n) => {
        "use strict";
        var r = n(1296),
          i = {
            childContextTypes: !0,
            contextType: !0,
            contextTypes: !0,
            defaultProps: !0,
            displayName: !0,
            getDefaultProps: !0,
            getDerivedStateFromError: !0,
            getDerivedStateFromProps: !0,
            mixins: !0,
            propTypes: !0,
            type: !0,
          },
          o = {
            name: !0,
            length: !0,
            prototype: !0,
            caller: !0,
            callee: !0,
            arguments: !0,
            arity: !0,
          },
          a = {
            $$typeof: !0,
            compare: !0,
            defaultProps: !0,
            displayName: !0,
            propTypes: !0,
            type: !0,
          },
          u = {};
        function l(e) {
          return r.isMemo(e) ? a : u[e.$$typeof] || i;
        }
        (u[r.ForwardRef] = {
          $$typeof: !0,
          render: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
        }),
          (u[r.Memo] = a);
        var s = Object.defineProperty,
          c = Object.getOwnPropertyNames,
          f = Object.getOwnPropertySymbols,
          d = Object.getOwnPropertyDescriptor,
          p = Object.getPrototypeOf,
          h = Object.prototype;
        e.exports = function e(t, n, r) {
          if ("string" != typeof n) {
            if (h) {
              var i = p(n);
              i && i !== h && e(t, i, r);
            }
            var a = c(n);
            f && (a = a.concat(f(n)));
            for (var u = l(t), v = l(n), g = 0; g < a.length; ++g) {
              var m = a[g];
              if (!(o[m] || (r && r[m]) || (v && v[m]) || (u && u[m]))) {
                var y = d(n, m);
                try {
                  s(t, m, y);
                } catch (e) {}
              }
            }
          }
          return t;
        };
      },
      6103: (e, t) => {
        "use strict";
        var n = "function" == typeof Symbol && Symbol.for,
          r = n ? Symbol.for("react.element") : 60103,
          i = n ? Symbol.for("react.portal") : 60106,
          o = n ? Symbol.for("react.fragment") : 60107,
          a = n ? Symbol.for("react.strict_mode") : 60108,
          u = n ? Symbol.for("react.profiler") : 60114,
          l = n ? Symbol.for("react.provider") : 60109,
          s = n ? Symbol.for("react.context") : 60110,
          c = n ? Symbol.for("react.async_mode") : 60111,
          f = n ? Symbol.for("react.concurrent_mode") : 60111,
          d = n ? Symbol.for("react.forward_ref") : 60112,
          p = n ? Symbol.for("react.suspense") : 60113,
          h = n ? Symbol.for("react.suspense_list") : 60120,
          v = n ? Symbol.for("react.memo") : 60115,
          g = n ? Symbol.for("react.lazy") : 60116,
          m = n ? Symbol.for("react.block") : 60121,
          y = n ? Symbol.for("react.fundamental") : 60117,
          b = n ? Symbol.for("react.responder") : 60118,
          w = n ? Symbol.for("react.scope") : 60119;
        function _(e) {
          if ("object" == typeof e && null !== e) {
            var t = e.$$typeof;
            switch (t) {
              case r:
                switch ((e = e.type)) {
                  case c:
                  case f:
                  case o:
                  case u:
                  case a:
                  case p:
                    return e;
                  default:
                    switch ((e = e && e.$$typeof)) {
                      case s:
                      case d:
                      case g:
                      case v:
                      case l:
                        return e;
                      default:
                        return t;
                    }
                }
              case i:
                return t;
            }
          }
        }
        function k(e) {
          return _(e) === f;
        }
        (t.AsyncMode = c),
          (t.ConcurrentMode = f),
          (t.ContextConsumer = s),
          (t.ContextProvider = l),
          (t.Element = r),
          (t.ForwardRef = d),
          (t.Fragment = o),
          (t.Lazy = g),
          (t.Memo = v),
          (t.Portal = i),
          (t.Profiler = u),
          (t.StrictMode = a),
          (t.Suspense = p),
          (t.isAsyncMode = function (e) {
            return k(e) || _(e) === c;
          }),
          (t.isConcurrentMode = k),
          (t.isContextConsumer = function (e) {
            return _(e) === s;
          }),
          (t.isContextProvider = function (e) {
            return _(e) === l;
          }),
          (t.isElement = function (e) {
            return "object" == typeof e && null !== e && e.$$typeof === r;
          }),
          (t.isForwardRef = function (e) {
            return _(e) === d;
          }),
          (t.isFragment = function (e) {
            return _(e) === o;
          }),
          (t.isLazy = function (e) {
            return _(e) === g;
          }),
          (t.isMemo = function (e) {
            return _(e) === v;
          }),
          (t.isPortal = function (e) {
            return _(e) === i;
          }),
          (t.isProfiler = function (e) {
            return _(e) === u;
          }),
          (t.isStrictMode = function (e) {
            return _(e) === a;
          }),
          (t.isSuspense = function (e) {
            return _(e) === p;
          }),
          (t.isValidElementType = function (e) {
            return (
              "string" == typeof e ||
              "function" == typeof e ||
              e === o ||
              e === f ||
              e === u ||
              e === a ||
              e === p ||
              e === h ||
              ("object" == typeof e &&
                null !== e &&
                (e.$$typeof === g ||
                  e.$$typeof === v ||
                  e.$$typeof === l ||
                  e.$$typeof === s ||
                  e.$$typeof === d ||
                  e.$$typeof === y ||
                  e.$$typeof === b ||
                  e.$$typeof === w ||
                  e.$$typeof === m))
            );
          }),
          (t.typeOf = _);
      },
      1296: (e, t, n) => {
        "use strict";
        e.exports = n(6103);
      },
      6486: function (e, t, n) {
        var r;
        (e = n.nmd(e)),
          function () {
            var i,
              o = "Expected a function",
              a = "__lodash_hash_undefined__",
              u = "__lodash_placeholder__",
              l = 32,
              s = 128,
              c = 1 / 0,
              f = 9007199254740991,
              d = NaN,
              p = 4294967295,
              h = [
                ["ary", s],
                ["bind", 1],
                ["bindKey", 2],
                ["curry", 8],
                ["curryRight", 16],
                ["flip", 512],
                ["partial", l],
                ["partialRight", 64],
                ["rearg", 256],
              ],
              v = "[object Arguments]",
              g = "[object Array]",
              m = "[object Boolean]",
              y = "[object Date]",
              b = "[object Error]",
              w = "[object Function]",
              _ = "[object GeneratorFunction]",
              k = "[object Map]",
              x = "[object Number]",
              S = "[object Object]",
              E = "[object Promise]",
              O = "[object RegExp]",
              C = "[object Set]",
              T = "[object String]",
              P = "[object Symbol]",
              I = "[object WeakMap]",
              R = "[object ArrayBuffer]",
              N = "[object DataView]",
              A = "[object Float32Array]",
              L = "[object Float64Array]",
              z = "[object Int8Array]",
              j = "[object Int16Array]",
              M = "[object Int32Array]",
              $ = "[object Uint8Array]",
              D = "[object Uint8ClampedArray]",
              U = "[object Uint16Array]",
              F = "[object Uint32Array]",
              B = /\b__p \+= '';/g,
              V = /\b(__p \+=) '' \+/g,
              q = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
              W = /&(?:amp|lt|gt|quot|#39);/g,
              H = /[&<>"']/g,
              K = RegExp(W.source),
              Q = RegExp(H.source),
              G = /<%-([\s\S]+?)%>/g,
              Y = /<%([\s\S]+?)%>/g,
              X = /<%=([\s\S]+?)%>/g,
              Z = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
              J = /^\w*$/,
              ee =
                /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
              te = /[\\^$.*+?()[\]{}|]/g,
              ne = RegExp(te.source),
              re = /^\s+/,
              ie = /\s/,
              oe = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
              ae = /\{\n\/\* \[wrapped with (.+)\] \*/,
              ue = /,? & /,
              le = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
              se = /[()=,{}\[\]\/\s]/,
              ce = /\\(\\)?/g,
              fe = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
              de = /\w*$/,
              pe = /^[-+]0x[0-9a-f]+$/i,
              he = /^0b[01]+$/i,
              ve = /^\[object .+?Constructor\]$/,
              ge = /^0o[0-7]+$/i,
              me = /^(?:0|[1-9]\d*)$/,
              ye = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
              be = /($^)/,
              we = /['\n\r\u2028\u2029\\]/g,
              _e = "\\ud800-\\udfff",
              ke = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
              xe = "\\u2700-\\u27bf",
              Se = "a-z\\xdf-\\xf6\\xf8-\\xff",
              Ee = "A-Z\\xc0-\\xd6\\xd8-\\xde",
              Oe = "\\ufe0e\\ufe0f",
              Ce =
                "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
              Te = "[" + _e + "]",
              Pe = "[" + Ce + "]",
              Ie = "[" + ke + "]",
              Re = "\\d+",
              Ne = "[" + xe + "]",
              Ae = "[" + Se + "]",
              Le = "[^" + _e + Ce + Re + xe + Se + Ee + "]",
              ze = "\\ud83c[\\udffb-\\udfff]",
              je = "[^" + _e + "]",
              Me = "(?:\\ud83c[\\udde6-\\uddff]){2}",
              $e = "[\\ud800-\\udbff][\\udc00-\\udfff]",
              De = "[" + Ee + "]",
              Ue = "\\u200d",
              Fe = "(?:" + Ae + "|" + Le + ")",
              Be = "(?:" + De + "|" + Le + ")",
              Ve = "(?:['’](?:d|ll|m|re|s|t|ve))?",
              qe = "(?:['’](?:D|LL|M|RE|S|T|VE))?",
              We = "(?:" + Ie + "|" + ze + ")?",
              He = "[" + Oe + "]?",
              Ke =
                He +
                We +
                "(?:" +
                Ue +
                "(?:" +
                [je, Me, $e].join("|") +
                ")" +
                He +
                We +
                ")*",
              Qe = "(?:" + [Ne, Me, $e].join("|") + ")" + Ke,
              Ge = "(?:" + [je + Ie + "?", Ie, Me, $e, Te].join("|") + ")",
              Ye = RegExp("['’]", "g"),
              Xe = RegExp(Ie, "g"),
              Ze = RegExp(ze + "(?=" + ze + ")|" + Ge + Ke, "g"),
              Je = RegExp(
                [
                  De +
                    "?" +
                    Ae +
                    "+" +
                    Ve +
                    "(?=" +
                    [Pe, De, "$"].join("|") +
                    ")",
                  Be + "+" + qe + "(?=" + [Pe, De + Fe, "$"].join("|") + ")",
                  De + "?" + Fe + "+" + Ve,
                  De + "+" + qe,
                  "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
                  "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
                  Re,
                  Qe,
                ].join("|"),
                "g"
              ),
              et = RegExp("[" + Ue + _e + ke + Oe + "]"),
              tt =
                /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
              nt = [
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
              rt = -1,
              it = {};
            (it[A] =
              it[L] =
              it[z] =
              it[j] =
              it[M] =
              it[$] =
              it[D] =
              it[U] =
              it[F] =
                !0),
              (it[v] =
                it[g] =
                it[R] =
                it[m] =
                it[N] =
                it[y] =
                it[b] =
                it[w] =
                it[k] =
                it[x] =
                it[S] =
                it[O] =
                it[C] =
                it[T] =
                it[I] =
                  !1);
            var ot = {};
            (ot[v] =
              ot[g] =
              ot[R] =
              ot[N] =
              ot[m] =
              ot[y] =
              ot[A] =
              ot[L] =
              ot[z] =
              ot[j] =
              ot[M] =
              ot[k] =
              ot[x] =
              ot[S] =
              ot[O] =
              ot[C] =
              ot[T] =
              ot[P] =
              ot[$] =
              ot[D] =
              ot[U] =
              ot[F] =
                !0),
              (ot[b] = ot[w] = ot[I] = !1);
            var at = {
                "\\": "\\",
                "'": "'",
                "\n": "n",
                "\r": "r",
                "\u2028": "u2028",
                "\u2029": "u2029",
              },
              ut = parseFloat,
              lt = parseInt,
              st =
                "object" == typeof n.g && n.g && n.g.Object === Object && n.g,
              ct =
                "object" == typeof self &&
                self &&
                self.Object === Object &&
                self,
              ft = st || ct || Function("return this")(),
              dt = t && !t.nodeType && t,
              pt = dt && e && !e.nodeType && e,
              ht = pt && pt.exports === dt,
              vt = ht && st.process,
              gt = (function () {
                try {
                  return (
                    (pt && pt.require && pt.require("util").types) ||
                    (vt && vt.binding && vt.binding("util"))
                  );
                } catch (e) {}
              })(),
              mt = gt && gt.isArrayBuffer,
              yt = gt && gt.isDate,
              bt = gt && gt.isMap,
              wt = gt && gt.isRegExp,
              _t = gt && gt.isSet,
              kt = gt && gt.isTypedArray;
            function xt(e, t, n) {
              switch (n.length) {
                case 0:
                  return e.call(t);
                case 1:
                  return e.call(t, n[0]);
                case 2:
                  return e.call(t, n[0], n[1]);
                case 3:
                  return e.call(t, n[0], n[1], n[2]);
              }
              return e.apply(t, n);
            }
            function St(e, t, n, r) {
              for (var i = -1, o = null == e ? 0 : e.length; ++i < o; ) {
                var a = e[i];
                t(r, a, n(a), e);
              }
              return r;
            }
            function Et(e, t) {
              for (
                var n = -1, r = null == e ? 0 : e.length;
                ++n < r && !1 !== t(e[n], n, e);

              );
              return e;
            }
            function Ot(e, t) {
              for (
                var n = null == e ? 0 : e.length;
                n-- && !1 !== t(e[n], n, e);

              );
              return e;
            }
            function Ct(e, t) {
              for (var n = -1, r = null == e ? 0 : e.length; ++n < r; )
                if (!t(e[n], n, e)) return !1;
              return !0;
            }
            function Tt(e, t) {
              for (
                var n = -1, r = null == e ? 0 : e.length, i = 0, o = [];
                ++n < r;

              ) {
                var a = e[n];
                t(a, n, e) && (o[i++] = a);
              }
              return o;
            }
            function Pt(e, t) {
              return !(null == e || !e.length) && Dt(e, t, 0) > -1;
            }
            function It(e, t, n) {
              for (var r = -1, i = null == e ? 0 : e.length; ++r < i; )
                if (n(t, e[r])) return !0;
              return !1;
            }
            function Rt(e, t) {
              for (
                var n = -1, r = null == e ? 0 : e.length, i = Array(r);
                ++n < r;

              )
                i[n] = t(e[n], n, e);
              return i;
            }
            function Nt(e, t) {
              for (var n = -1, r = t.length, i = e.length; ++n < r; )
                e[i + n] = t[n];
              return e;
            }
            function At(e, t, n, r) {
              var i = -1,
                o = null == e ? 0 : e.length;
              for (r && o && (n = e[++i]); ++i < o; ) n = t(n, e[i], i, e);
              return n;
            }
            function Lt(e, t, n, r) {
              var i = null == e ? 0 : e.length;
              for (r && i && (n = e[--i]); i--; ) n = t(n, e[i], i, e);
              return n;
            }
            function zt(e, t) {
              for (var n = -1, r = null == e ? 0 : e.length; ++n < r; )
                if (t(e[n], n, e)) return !0;
              return !1;
            }
            var jt = Vt("length");
            function Mt(e, t, n) {
              var r;
              return (
                n(e, function (e, n, i) {
                  if (t(e, n, i)) return (r = n), !1;
                }),
                r
              );
            }
            function $t(e, t, n, r) {
              for (var i = e.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i; )
                if (t(e[o], o, e)) return o;
              return -1;
            }
            function Dt(e, t, n) {
              return t == t
                ? (function (e, t, n) {
                    for (var r = n - 1, i = e.length; ++r < i; )
                      if (e[r] === t) return r;
                    return -1;
                  })(e, t, n)
                : $t(e, Ft, n);
            }
            function Ut(e, t, n, r) {
              for (var i = n - 1, o = e.length; ++i < o; )
                if (r(e[i], t)) return i;
              return -1;
            }
            function Ft(e) {
              return e != e;
            }
            function Bt(e, t) {
              var n = null == e ? 0 : e.length;
              return n ? Ht(e, t) / n : d;
            }
            function Vt(e) {
              return function (t) {
                return null == t ? i : t[e];
              };
            }
            function qt(e) {
              return function (t) {
                return null == e ? i : e[t];
              };
            }
            function Wt(e, t, n, r, i) {
              return (
                i(e, function (e, i, o) {
                  n = r ? ((r = !1), e) : t(n, e, i, o);
                }),
                n
              );
            }
            function Ht(e, t) {
              for (var n, r = -1, o = e.length; ++r < o; ) {
                var a = t(e[r]);
                a !== i && (n = n === i ? a : n + a);
              }
              return n;
            }
            function Kt(e, t) {
              for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
              return r;
            }
            function Qt(e) {
              return e ? e.slice(0, dn(e) + 1).replace(re, "") : e;
            }
            function Gt(e) {
              return function (t) {
                return e(t);
              };
            }
            function Yt(e, t) {
              return Rt(t, function (t) {
                return e[t];
              });
            }
            function Xt(e, t) {
              return e.has(t);
            }
            function Zt(e, t) {
              for (var n = -1, r = e.length; ++n < r && Dt(t, e[n], 0) > -1; );
              return n;
            }
            function Jt(e, t) {
              for (var n = e.length; n-- && Dt(t, e[n], 0) > -1; );
              return n;
            }
            var en = qt({
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
              tn = qt({
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
              });
            function nn(e) {
              return "\\" + at[e];
            }
            function rn(e) {
              return et.test(e);
            }
            function on(e) {
              var t = -1,
                n = Array(e.size);
              return (
                e.forEach(function (e, r) {
                  n[++t] = [r, e];
                }),
                n
              );
            }
            function an(e, t) {
              return function (n) {
                return e(t(n));
              };
            }
            function un(e, t) {
              for (var n = -1, r = e.length, i = 0, o = []; ++n < r; ) {
                var a = e[n];
                (a !== t && a !== u) || ((e[n] = u), (o[i++] = n));
              }
              return o;
            }
            function ln(e) {
              var t = -1,
                n = Array(e.size);
              return (
                e.forEach(function (e) {
                  n[++t] = e;
                }),
                n
              );
            }
            function sn(e) {
              var t = -1,
                n = Array(e.size);
              return (
                e.forEach(function (e) {
                  n[++t] = [e, e];
                }),
                n
              );
            }
            function cn(e) {
              return rn(e)
                ? (function (e) {
                    for (var t = (Ze.lastIndex = 0); Ze.test(e); ) ++t;
                    return t;
                  })(e)
                : jt(e);
            }
            function fn(e) {
              return rn(e)
                ? (function (e) {
                    return e.match(Ze) || [];
                  })(e)
                : (function (e) {
                    return e.split("");
                  })(e);
            }
            function dn(e) {
              for (var t = e.length; t-- && ie.test(e.charAt(t)); );
              return t;
            }
            var pn = qt({
                "&amp;": "&",
                "&lt;": "<",
                "&gt;": ">",
                "&quot;": '"',
                "&#39;": "'",
              }),
              hn = (function e(t) {
                var n,
                  r = (t =
                    null == t
                      ? ft
                      : hn.defaults(ft.Object(), t, hn.pick(ft, nt))).Array,
                  ie = t.Date,
                  _e = t.Error,
                  ke = t.Function,
                  xe = t.Math,
                  Se = t.Object,
                  Ee = t.RegExp,
                  Oe = t.String,
                  Ce = t.TypeError,
                  Te = r.prototype,
                  Pe = ke.prototype,
                  Ie = Se.prototype,
                  Re = t["__core-js_shared__"],
                  Ne = Pe.toString,
                  Ae = Ie.hasOwnProperty,
                  Le = 0,
                  ze = (n = /[^.]+$/.exec(
                    (Re && Re.keys && Re.keys.IE_PROTO) || ""
                  ))
                    ? "Symbol(src)_1." + n
                    : "",
                  je = Ie.toString,
                  Me = Ne.call(Se),
                  $e = ft._,
                  De = Ee(
                    "^" +
                      Ne.call(Ae)
                        .replace(te, "\\$&")
                        .replace(
                          /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                          "$1.*?"
                        ) +
                      "$"
                  ),
                  Ue = ht ? t.Buffer : i,
                  Fe = t.Symbol,
                  Be = t.Uint8Array,
                  Ve = Ue ? Ue.allocUnsafe : i,
                  qe = an(Se.getPrototypeOf, Se),
                  We = Se.create,
                  He = Ie.propertyIsEnumerable,
                  Ke = Te.splice,
                  Qe = Fe ? Fe.isConcatSpreadable : i,
                  Ge = Fe ? Fe.iterator : i,
                  Ze = Fe ? Fe.toStringTag : i,
                  et = (function () {
                    try {
                      var e = lo(Se, "defineProperty");
                      return e({}, "", {}), e;
                    } catch (e) {}
                  })(),
                  at = t.clearTimeout !== ft.clearTimeout && t.clearTimeout,
                  st = ie && ie.now !== ft.Date.now && ie.now,
                  ct = t.setTimeout !== ft.setTimeout && t.setTimeout,
                  dt = xe.ceil,
                  pt = xe.floor,
                  vt = Se.getOwnPropertySymbols,
                  gt = Ue ? Ue.isBuffer : i,
                  jt = t.isFinite,
                  qt = Te.join,
                  vn = an(Se.keys, Se),
                  gn = xe.max,
                  mn = xe.min,
                  yn = ie.now,
                  bn = t.parseInt,
                  wn = xe.random,
                  _n = Te.reverse,
                  kn = lo(t, "DataView"),
                  xn = lo(t, "Map"),
                  Sn = lo(t, "Promise"),
                  En = lo(t, "Set"),
                  On = lo(t, "WeakMap"),
                  Cn = lo(Se, "create"),
                  Tn = On && new On(),
                  Pn = {},
                  In = Mo(kn),
                  Rn = Mo(xn),
                  Nn = Mo(Sn),
                  An = Mo(En),
                  Ln = Mo(On),
                  zn = Fe ? Fe.prototype : i,
                  jn = zn ? zn.valueOf : i,
                  Mn = zn ? zn.toString : i;
                function $n(e) {
                  if (eu(e) && !Va(e) && !(e instanceof Bn)) {
                    if (e instanceof Fn) return e;
                    if (Ae.call(e, "__wrapped__")) return $o(e);
                  }
                  return new Fn(e);
                }
                var Dn = (function () {
                  function e() {}
                  return function (t) {
                    if (!Ja(t)) return {};
                    if (We) return We(t);
                    e.prototype = t;
                    var n = new e();
                    return (e.prototype = i), n;
                  };
                })();
                function Un() {}
                function Fn(e, t) {
                  (this.__wrapped__ = e),
                    (this.__actions__ = []),
                    (this.__chain__ = !!t),
                    (this.__index__ = 0),
                    (this.__values__ = i);
                }
                function Bn(e) {
                  (this.__wrapped__ = e),
                    (this.__actions__ = []),
                    (this.__dir__ = 1),
                    (this.__filtered__ = !1),
                    (this.__iteratees__ = []),
                    (this.__takeCount__ = p),
                    (this.__views__ = []);
                }
                function Vn(e) {
                  var t = -1,
                    n = null == e ? 0 : e.length;
                  for (this.clear(); ++t < n; ) {
                    var r = e[t];
                    this.set(r[0], r[1]);
                  }
                }
                function qn(e) {
                  var t = -1,
                    n = null == e ? 0 : e.length;
                  for (this.clear(); ++t < n; ) {
                    var r = e[t];
                    this.set(r[0], r[1]);
                  }
                }
                function Wn(e) {
                  var t = -1,
                    n = null == e ? 0 : e.length;
                  for (this.clear(); ++t < n; ) {
                    var r = e[t];
                    this.set(r[0], r[1]);
                  }
                }
                function Hn(e) {
                  var t = -1,
                    n = null == e ? 0 : e.length;
                  for (this.__data__ = new Wn(); ++t < n; ) this.add(e[t]);
                }
                function Kn(e) {
                  var t = (this.__data__ = new qn(e));
                  this.size = t.size;
                }
                function Qn(e, t) {
                  var n = Va(e),
                    r = !n && Ba(e),
                    i = !n && !r && Ka(e),
                    o = !n && !r && !i && lu(e),
                    a = n || r || i || o,
                    u = a ? Kt(e.length, Oe) : [],
                    l = u.length;
                  for (var s in e)
                    (!t && !Ae.call(e, s)) ||
                      (a &&
                        ("length" == s ||
                          (i && ("offset" == s || "parent" == s)) ||
                          (o &&
                            ("buffer" == s ||
                              "byteLength" == s ||
                              "byteOffset" == s)) ||
                          go(s, l))) ||
                      u.push(s);
                  return u;
                }
                function Gn(e) {
                  var t = e.length;
                  return t ? e[Wr(0, t - 1)] : i;
                }
                function Yn(e, t) {
                  return No(Oi(e), or(t, 0, e.length));
                }
                function Xn(e) {
                  return No(Oi(e));
                }
                function Zn(e, t, n) {
                  ((n !== i && !Da(e[t], n)) || (n === i && !(t in e))) &&
                    rr(e, t, n);
                }
                function Jn(e, t, n) {
                  var r = e[t];
                  (Ae.call(e, t) && Da(r, n) && (n !== i || t in e)) ||
                    rr(e, t, n);
                }
                function er(e, t) {
                  for (var n = e.length; n--; ) if (Da(e[n][0], t)) return n;
                  return -1;
                }
                function tr(e, t, n, r) {
                  return (
                    cr(e, function (e, i, o) {
                      t(r, e, n(e), o);
                    }),
                    r
                  );
                }
                function nr(e, t) {
                  return e && Ci(t, Iu(t), e);
                }
                function rr(e, t, n) {
                  "__proto__" == t && et
                    ? et(e, t, {
                        configurable: !0,
                        enumerable: !0,
                        value: n,
                        writable: !0,
                      })
                    : (e[t] = n);
                }
                function ir(e, t) {
                  for (
                    var n = -1, o = t.length, a = r(o), u = null == e;
                    ++n < o;

                  )
                    a[n] = u ? i : Eu(e, t[n]);
                  return a;
                }
                function or(e, t, n) {
                  return (
                    e == e &&
                      (n !== i && (e = e <= n ? e : n),
                      t !== i && (e = e >= t ? e : t)),
                    e
                  );
                }
                function ar(e, t, n, r, o, a) {
                  var u,
                    l = 1 & t,
                    s = 2 & t,
                    c = 4 & t;
                  if ((n && (u = o ? n(e, r, o, a) : n(e)), u !== i)) return u;
                  if (!Ja(e)) return e;
                  var f = Va(e);
                  if (f) {
                    if (
                      ((u = (function (e) {
                        var t = e.length,
                          n = new e.constructor(t);
                        return (
                          t &&
                            "string" == typeof e[0] &&
                            Ae.call(e, "index") &&
                            ((n.index = e.index), (n.input = e.input)),
                          n
                        );
                      })(e)),
                      !l)
                    )
                      return Oi(e, u);
                  } else {
                    var d = fo(e),
                      p = d == w || d == _;
                    if (Ka(e)) return wi(e, l);
                    if (d == S || d == v || (p && !o)) {
                      if (((u = s || p ? {} : ho(e)), !l))
                        return s
                          ? (function (e, t) {
                              return Ci(e, co(e), t);
                            })(
                              e,
                              (function (e, t) {
                                return e && Ci(t, Ru(t), e);
                              })(u, e)
                            )
                          : (function (e, t) {
                              return Ci(e, so(e), t);
                            })(e, nr(u, e));
                    } else {
                      if (!ot[d]) return o ? e : {};
                      u = (function (e, t, n) {
                        var r,
                          i = e.constructor;
                        switch (t) {
                          case R:
                            return _i(e);
                          case m:
                          case y:
                            return new i(+e);
                          case N:
                            return (function (e, t) {
                              var n = t ? _i(e.buffer) : e.buffer;
                              return new e.constructor(
                                n,
                                e.byteOffset,
                                e.byteLength
                              );
                            })(e, n);
                          case A:
                          case L:
                          case z:
                          case j:
                          case M:
                          case $:
                          case D:
                          case U:
                          case F:
                            return ki(e, n);
                          case k:
                            return new i();
                          case x:
                          case T:
                            return new i(e);
                          case O:
                            return (function (e) {
                              var t = new e.constructor(e.source, de.exec(e));
                              return (t.lastIndex = e.lastIndex), t;
                            })(e);
                          case C:
                            return new i();
                          case P:
                            return (r = e), jn ? Se(jn.call(r)) : {};
                        }
                      })(e, d, l);
                    }
                  }
                  a || (a = new Kn());
                  var h = a.get(e);
                  if (h) return h;
                  a.set(e, u),
                    ou(e)
                      ? e.forEach(function (r) {
                          u.add(ar(r, t, n, r, e, a));
                        })
                      : tu(e) &&
                        e.forEach(function (r, i) {
                          u.set(i, ar(r, t, n, i, e, a));
                        });
                  var g = f ? i : (c ? (s ? to : eo) : s ? Ru : Iu)(e);
                  return (
                    Et(g || e, function (r, i) {
                      g && (r = e[(i = r)]), Jn(u, i, ar(r, t, n, i, e, a));
                    }),
                    u
                  );
                }
                function ur(e, t, n) {
                  var r = n.length;
                  if (null == e) return !r;
                  for (e = Se(e); r--; ) {
                    var o = n[r],
                      a = t[o],
                      u = e[o];
                    if ((u === i && !(o in e)) || !a(u)) return !1;
                  }
                  return !0;
                }
                function lr(e, t, n) {
                  if ("function" != typeof e) throw new Ce(o);
                  return To(function () {
                    e.apply(i, n);
                  }, t);
                }
                function sr(e, t, n, r) {
                  var i = -1,
                    o = Pt,
                    a = !0,
                    u = e.length,
                    l = [],
                    s = t.length;
                  if (!u) return l;
                  n && (t = Rt(t, Gt(n))),
                    r
                      ? ((o = It), (a = !1))
                      : t.length >= 200 &&
                        ((o = Xt), (a = !1), (t = new Hn(t)));
                  e: for (; ++i < u; ) {
                    var c = e[i],
                      f = null == n ? c : n(c);
                    if (((c = r || 0 !== c ? c : 0), a && f == f)) {
                      for (var d = s; d--; ) if (t[d] === f) continue e;
                      l.push(c);
                    } else o(t, f, r) || l.push(c);
                  }
                  return l;
                }
                ($n.templateSettings = {
                  escape: G,
                  evaluate: Y,
                  interpolate: X,
                  variable: "",
                  imports: { _: $n },
                }),
                  ($n.prototype = Un.prototype),
                  ($n.prototype.constructor = $n),
                  (Fn.prototype = Dn(Un.prototype)),
                  (Fn.prototype.constructor = Fn),
                  (Bn.prototype = Dn(Un.prototype)),
                  (Bn.prototype.constructor = Bn),
                  (Vn.prototype.clear = function () {
                    (this.__data__ = Cn ? Cn(null) : {}), (this.size = 0);
                  }),
                  (Vn.prototype.delete = function (e) {
                    var t = this.has(e) && delete this.__data__[e];
                    return (this.size -= t ? 1 : 0), t;
                  }),
                  (Vn.prototype.get = function (e) {
                    var t = this.__data__;
                    if (Cn) {
                      var n = t[e];
                      return n === a ? i : n;
                    }
                    return Ae.call(t, e) ? t[e] : i;
                  }),
                  (Vn.prototype.has = function (e) {
                    var t = this.__data__;
                    return Cn ? t[e] !== i : Ae.call(t, e);
                  }),
                  (Vn.prototype.set = function (e, t) {
                    var n = this.__data__;
                    return (
                      (this.size += this.has(e) ? 0 : 1),
                      (n[e] = Cn && t === i ? a : t),
                      this
                    );
                  }),
                  (qn.prototype.clear = function () {
                    (this.__data__ = []), (this.size = 0);
                  }),
                  (qn.prototype.delete = function (e) {
                    var t = this.__data__,
                      n = er(t, e);
                    return !(
                      n < 0 ||
                      (n == t.length - 1 ? t.pop() : Ke.call(t, n, 1),
                      --this.size,
                      0)
                    );
                  }),
                  (qn.prototype.get = function (e) {
                    var t = this.__data__,
                      n = er(t, e);
                    return n < 0 ? i : t[n][1];
                  }),
                  (qn.prototype.has = function (e) {
                    return er(this.__data__, e) > -1;
                  }),
                  (qn.prototype.set = function (e, t) {
                    var n = this.__data__,
                      r = er(n, e);
                    return (
                      r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t),
                      this
                    );
                  }),
                  (Wn.prototype.clear = function () {
                    (this.size = 0),
                      (this.__data__ = {
                        hash: new Vn(),
                        map: new (xn || qn)(),
                        string: new Vn(),
                      });
                  }),
                  (Wn.prototype.delete = function (e) {
                    var t = ao(this, e).delete(e);
                    return (this.size -= t ? 1 : 0), t;
                  }),
                  (Wn.prototype.get = function (e) {
                    return ao(this, e).get(e);
                  }),
                  (Wn.prototype.has = function (e) {
                    return ao(this, e).has(e);
                  }),
                  (Wn.prototype.set = function (e, t) {
                    var n = ao(this, e),
                      r = n.size;
                    return (
                      n.set(e, t), (this.size += n.size == r ? 0 : 1), this
                    );
                  }),
                  (Hn.prototype.add = Hn.prototype.push =
                    function (e) {
                      return this.__data__.set(e, a), this;
                    }),
                  (Hn.prototype.has = function (e) {
                    return this.__data__.has(e);
                  }),
                  (Kn.prototype.clear = function () {
                    (this.__data__ = new qn()), (this.size = 0);
                  }),
                  (Kn.prototype.delete = function (e) {
                    var t = this.__data__,
                      n = t.delete(e);
                    return (this.size = t.size), n;
                  }),
                  (Kn.prototype.get = function (e) {
                    return this.__data__.get(e);
                  }),
                  (Kn.prototype.has = function (e) {
                    return this.__data__.has(e);
                  }),
                  (Kn.prototype.set = function (e, t) {
                    var n = this.__data__;
                    if (n instanceof qn) {
                      var r = n.__data__;
                      if (!xn || r.length < 199)
                        return r.push([e, t]), (this.size = ++n.size), this;
                      n = this.__data__ = new Wn(r);
                    }
                    return n.set(e, t), (this.size = n.size), this;
                  });
                var cr = Ii(yr),
                  fr = Ii(br, !0);
                function dr(e, t) {
                  var n = !0;
                  return (
                    cr(e, function (e, r, i) {
                      return (n = !!t(e, r, i));
                    }),
                    n
                  );
                }
                function pr(e, t, n) {
                  for (var r = -1, o = e.length; ++r < o; ) {
                    var a = e[r],
                      u = t(a);
                    if (null != u && (l === i ? u == u && !uu(u) : n(u, l)))
                      var l = u,
                        s = a;
                  }
                  return s;
                }
                function hr(e, t) {
                  var n = [];
                  return (
                    cr(e, function (e, r, i) {
                      t(e, r, i) && n.push(e);
                    }),
                    n
                  );
                }
                function vr(e, t, n, r, i) {
                  var o = -1,
                    a = e.length;
                  for (n || (n = vo), i || (i = []); ++o < a; ) {
                    var u = e[o];
                    t > 0 && n(u)
                      ? t > 1
                        ? vr(u, t - 1, n, r, i)
                        : Nt(i, u)
                      : r || (i[i.length] = u);
                  }
                  return i;
                }
                var gr = Ri(),
                  mr = Ri(!0);
                function yr(e, t) {
                  return e && gr(e, t, Iu);
                }
                function br(e, t) {
                  return e && mr(e, t, Iu);
                }
                function wr(e, t) {
                  return Tt(t, function (t) {
                    return Ya(e[t]);
                  });
                }
                function _r(e, t) {
                  for (
                    var n = 0, r = (t = gi(t, e)).length;
                    null != e && n < r;

                  )
                    e = e[jo(t[n++])];
                  return n && n == r ? e : i;
                }
                function kr(e, t, n) {
                  var r = t(e);
                  return Va(e) ? r : Nt(r, n(e));
                }
                function xr(e) {
                  return null == e
                    ? e === i
                      ? "[object Undefined]"
                      : "[object Null]"
                    : Ze && Ze in Se(e)
                    ? (function (e) {
                        var t = Ae.call(e, Ze),
                          n = e[Ze];
                        try {
                          e[Ze] = i;
                          var r = !0;
                        } catch (e) {}
                        var o = je.call(e);
                        return r && (t ? (e[Ze] = n) : delete e[Ze]), o;
                      })(e)
                    : (function (e) {
                        return je.call(e);
                      })(e);
                }
                function Sr(e, t) {
                  return e > t;
                }
                function Er(e, t) {
                  return null != e && Ae.call(e, t);
                }
                function Or(e, t) {
                  return null != e && t in Se(e);
                }
                function Cr(e, t, n) {
                  for (
                    var o = n ? It : Pt,
                      a = e[0].length,
                      u = e.length,
                      l = u,
                      s = r(u),
                      c = 1 / 0,
                      f = [];
                    l--;

                  ) {
                    var d = e[l];
                    l && t && (d = Rt(d, Gt(t))),
                      (c = mn(d.length, c)),
                      (s[l] =
                        !n && (t || (a >= 120 && d.length >= 120))
                          ? new Hn(l && d)
                          : i);
                  }
                  d = e[0];
                  var p = -1,
                    h = s[0];
                  e: for (; ++p < a && f.length < c; ) {
                    var v = d[p],
                      g = t ? t(v) : v;
                    if (
                      ((v = n || 0 !== v ? v : 0), !(h ? Xt(h, g) : o(f, g, n)))
                    ) {
                      for (l = u; --l; ) {
                        var m = s[l];
                        if (!(m ? Xt(m, g) : o(e[l], g, n))) continue e;
                      }
                      h && h.push(g), f.push(v);
                    }
                  }
                  return f;
                }
                function Tr(e, t, n) {
                  var r =
                    null == (e = Eo(e, (t = gi(t, e)))) ? e : e[jo(Go(t))];
                  return null == r ? i : xt(r, e, n);
                }
                function Pr(e) {
                  return eu(e) && xr(e) == v;
                }
                function Ir(e, t, n, r, o) {
                  return (
                    e === t ||
                    (null == e || null == t || (!eu(e) && !eu(t))
                      ? e != e && t != t
                      : (function (e, t, n, r, o, a) {
                          var u = Va(e),
                            l = Va(t),
                            s = u ? g : fo(e),
                            c = l ? g : fo(t),
                            f = (s = s == v ? S : s) == S,
                            d = (c = c == v ? S : c) == S,
                            p = s == c;
                          if (p && Ka(e)) {
                            if (!Ka(t)) return !1;
                            (u = !0), (f = !1);
                          }
                          if (p && !f)
                            return (
                              a || (a = new Kn()),
                              u || lu(e)
                                ? Zi(e, t, n, r, o, a)
                                : (function (e, t, n, r, i, o, a) {
                                    switch (n) {
                                      case N:
                                        if (
                                          e.byteLength != t.byteLength ||
                                          e.byteOffset != t.byteOffset
                                        )
                                          return !1;
                                        (e = e.buffer), (t = t.buffer);
                                      case R:
                                        return !(
                                          e.byteLength != t.byteLength ||
                                          !o(new Be(e), new Be(t))
                                        );
                                      case m:
                                      case y:
                                      case x:
                                        return Da(+e, +t);
                                      case b:
                                        return (
                                          e.name == t.name &&
                                          e.message == t.message
                                        );
                                      case O:
                                      case T:
                                        return e == t + "";
                                      case k:
                                        var u = on;
                                      case C:
                                        var l = 1 & r;
                                        if (
                                          (u || (u = ln),
                                          e.size != t.size && !l)
                                        )
                                          return !1;
                                        var s = a.get(e);
                                        if (s) return s == t;
                                        (r |= 2), a.set(e, t);
                                        var c = Zi(u(e), u(t), r, i, o, a);
                                        return a.delete(e), c;
                                      case P:
                                        if (jn) return jn.call(e) == jn.call(t);
                                    }
                                    return !1;
                                  })(e, t, s, n, r, o, a)
                            );
                          if (!(1 & n)) {
                            var h = f && Ae.call(e, "__wrapped__"),
                              w = d && Ae.call(t, "__wrapped__");
                            if (h || w) {
                              var _ = h ? e.value() : e,
                                E = w ? t.value() : t;
                              return a || (a = new Kn()), o(_, E, n, r, a);
                            }
                          }
                          return (
                            !!p &&
                            (a || (a = new Kn()),
                            (function (e, t, n, r, o, a) {
                              var u = 1 & n,
                                l = eo(e),
                                s = l.length;
                              if (s != eo(t).length && !u) return !1;
                              for (var c = s; c--; ) {
                                var f = l[c];
                                if (!(u ? f in t : Ae.call(t, f))) return !1;
                              }
                              var d = a.get(e),
                                p = a.get(t);
                              if (d && p) return d == t && p == e;
                              var h = !0;
                              a.set(e, t), a.set(t, e);
                              for (var v = u; ++c < s; ) {
                                var g = e[(f = l[c])],
                                  m = t[f];
                                if (r)
                                  var y = u
                                    ? r(m, g, f, t, e, a)
                                    : r(g, m, f, e, t, a);
                                if (
                                  !(y === i ? g === m || o(g, m, n, r, a) : y)
                                ) {
                                  h = !1;
                                  break;
                                }
                                v || (v = "constructor" == f);
                              }
                              if (h && !v) {
                                var b = e.constructor,
                                  w = t.constructor;
                                b == w ||
                                  !("constructor" in e) ||
                                  !("constructor" in t) ||
                                  ("function" == typeof b &&
                                    b instanceof b &&
                                    "function" == typeof w &&
                                    w instanceof w) ||
                                  (h = !1);
                              }
                              return a.delete(e), a.delete(t), h;
                            })(e, t, n, r, o, a))
                          );
                        })(e, t, n, r, Ir, o))
                  );
                }
                function Rr(e, t, n, r) {
                  var o = n.length,
                    a = o,
                    u = !r;
                  if (null == e) return !a;
                  for (e = Se(e); o--; ) {
                    var l = n[o];
                    if (u && l[2] ? l[1] !== e[l[0]] : !(l[0] in e)) return !1;
                  }
                  for (; ++o < a; ) {
                    var s = (l = n[o])[0],
                      c = e[s],
                      f = l[1];
                    if (u && l[2]) {
                      if (c === i && !(s in e)) return !1;
                    } else {
                      var d = new Kn();
                      if (r) var p = r(c, f, s, e, t, d);
                      if (!(p === i ? Ir(f, c, 3, r, d) : p)) return !1;
                    }
                  }
                  return !0;
                }
                function Nr(e) {
                  return (
                    !(!Ja(e) || ((t = e), ze && ze in t)) &&
                    (Ya(e) ? De : ve).test(Mo(e))
                  );
                  var t;
                }
                function Ar(e) {
                  return "function" == typeof e
                    ? e
                    : null == e
                    ? nl
                    : "object" == typeof e
                    ? Va(e)
                      ? $r(e[0], e[1])
                      : Mr(e)
                    : fl(e);
                }
                function Lr(e) {
                  if (!_o(e)) return vn(e);
                  var t = [];
                  for (var n in Se(e))
                    Ae.call(e, n) && "constructor" != n && t.push(n);
                  return t;
                }
                function zr(e, t) {
                  return e < t;
                }
                function jr(e, t) {
                  var n = -1,
                    i = Wa(e) ? r(e.length) : [];
                  return (
                    cr(e, function (e, r, o) {
                      i[++n] = t(e, r, o);
                    }),
                    i
                  );
                }
                function Mr(e) {
                  var t = uo(e);
                  return 1 == t.length && t[0][2]
                    ? xo(t[0][0], t[0][1])
                    : function (n) {
                        return n === e || Rr(n, e, t);
                      };
                }
                function $r(e, t) {
                  return yo(e) && ko(t)
                    ? xo(jo(e), t)
                    : function (n) {
                        var r = Eu(n, e);
                        return r === i && r === t ? Ou(n, e) : Ir(t, r, 3);
                      };
                }
                function Dr(e, t, n, r, o) {
                  e !== t &&
                    gr(
                      t,
                      function (a, u) {
                        if ((o || (o = new Kn()), Ja(a)))
                          !(function (e, t, n, r, o, a, u) {
                            var l = Oo(e, n),
                              s = Oo(t, n),
                              c = u.get(s);
                            if (c) Zn(e, n, c);
                            else {
                              var f = a ? a(l, s, n + "", e, t, u) : i,
                                d = f === i;
                              if (d) {
                                var p = Va(s),
                                  h = !p && Ka(s),
                                  v = !p && !h && lu(s);
                                (f = s),
                                  p || h || v
                                    ? Va(l)
                                      ? (f = l)
                                      : Ha(l)
                                      ? (f = Oi(l))
                                      : h
                                      ? ((d = !1), (f = wi(s, !0)))
                                      : v
                                      ? ((d = !1), (f = ki(s, !0)))
                                      : (f = [])
                                    : ru(s) || Ba(s)
                                    ? ((f = l),
                                      Ba(l)
                                        ? (f = gu(l))
                                        : (Ja(l) && !Ya(l)) || (f = ho(s)))
                                    : (d = !1);
                              }
                              d && (u.set(s, f), o(f, s, r, a, u), u.delete(s)),
                                Zn(e, n, f);
                            }
                          })(e, t, u, n, Dr, r, o);
                        else {
                          var l = r ? r(Oo(e, u), a, u + "", e, t, o) : i;
                          l === i && (l = a), Zn(e, u, l);
                        }
                      },
                      Ru
                    );
                }
                function Ur(e, t) {
                  var n = e.length;
                  if (n) return go((t += t < 0 ? n : 0), n) ? e[t] : i;
                }
                function Fr(e, t, n) {
                  t = t.length
                    ? Rt(t, function (e) {
                        return Va(e)
                          ? function (t) {
                              return _r(t, 1 === e.length ? e[0] : e);
                            }
                          : e;
                      })
                    : [nl];
                  var r = -1;
                  t = Rt(t, Gt(oo()));
                  var i = jr(e, function (e, n, i) {
                    var o = Rt(t, function (t) {
                      return t(e);
                    });
                    return { criteria: o, index: ++r, value: e };
                  });
                  return (function (e, t) {
                    var r = e.length;
                    for (
                      e.sort(function (e, t) {
                        return (function (e, t, n) {
                          for (
                            var r = -1,
                              i = e.criteria,
                              o = t.criteria,
                              a = i.length,
                              u = n.length;
                            ++r < a;

                          ) {
                            var l = xi(i[r], o[r]);
                            if (l)
                              return r >= u ? l : l * ("desc" == n[r] ? -1 : 1);
                          }
                          return e.index - t.index;
                        })(e, t, n);
                      });
                      r--;

                    )
                      e[r] = e[r].value;
                    return e;
                  })(i);
                }
                function Br(e, t, n) {
                  for (var r = -1, i = t.length, o = {}; ++r < i; ) {
                    var a = t[r],
                      u = _r(e, a);
                    n(u, a) && Yr(o, gi(a, e), u);
                  }
                  return o;
                }
                function Vr(e, t, n, r) {
                  var i = r ? Ut : Dt,
                    o = -1,
                    a = t.length,
                    u = e;
                  for (
                    e === t && (t = Oi(t)), n && (u = Rt(e, Gt(n)));
                    ++o < a;

                  )
                    for (
                      var l = 0, s = t[o], c = n ? n(s) : s;
                      (l = i(u, c, l, r)) > -1;

                    )
                      u !== e && Ke.call(u, l, 1), Ke.call(e, l, 1);
                  return e;
                }
                function qr(e, t) {
                  for (var n = e ? t.length : 0, r = n - 1; n--; ) {
                    var i = t[n];
                    if (n == r || i !== o) {
                      var o = i;
                      go(i) ? Ke.call(e, i, 1) : li(e, i);
                    }
                  }
                  return e;
                }
                function Wr(e, t) {
                  return e + pt(wn() * (t - e + 1));
                }
                function Hr(e, t) {
                  var n = "";
                  if (!e || t < 1 || t > f) return n;
                  do {
                    t % 2 && (n += e), (t = pt(t / 2)) && (e += e);
                  } while (t);
                  return n;
                }
                function Kr(e, t) {
                  return Po(So(e, t, nl), e + "");
                }
                function Qr(e) {
                  return Gn(Du(e));
                }
                function Gr(e, t) {
                  var n = Du(e);
                  return No(n, or(t, 0, n.length));
                }
                function Yr(e, t, n, r) {
                  if (!Ja(e)) return e;
                  for (
                    var o = -1, a = (t = gi(t, e)).length, u = a - 1, l = e;
                    null != l && ++o < a;

                  ) {
                    var s = jo(t[o]),
                      c = n;
                    if (
                      "__proto__" === s ||
                      "constructor" === s ||
                      "prototype" === s
                    )
                      return e;
                    if (o != u) {
                      var f = l[s];
                      (c = r ? r(f, s, l) : i) === i &&
                        (c = Ja(f) ? f : go(t[o + 1]) ? [] : {});
                    }
                    Jn(l, s, c), (l = l[s]);
                  }
                  return e;
                }
                var Xr = Tn
                    ? function (e, t) {
                        return Tn.set(e, t), e;
                      }
                    : nl,
                  Zr = et
                    ? function (e, t) {
                        return et(e, "toString", {
                          configurable: !0,
                          enumerable: !1,
                          value: Ju(t),
                          writable: !0,
                        });
                      }
                    : nl;
                function Jr(e) {
                  return No(Du(e));
                }
                function ei(e, t, n) {
                  var i = -1,
                    o = e.length;
                  t < 0 && (t = -t > o ? 0 : o + t),
                    (n = n > o ? o : n) < 0 && (n += o),
                    (o = t > n ? 0 : (n - t) >>> 0),
                    (t >>>= 0);
                  for (var a = r(o); ++i < o; ) a[i] = e[i + t];
                  return a;
                }
                function ti(e, t) {
                  var n;
                  return (
                    cr(e, function (e, r, i) {
                      return !(n = t(e, r, i));
                    }),
                    !!n
                  );
                }
                function ni(e, t, n) {
                  var r = 0,
                    i = null == e ? r : e.length;
                  if ("number" == typeof t && t == t && i <= 2147483647) {
                    for (; r < i; ) {
                      var o = (r + i) >>> 1,
                        a = e[o];
                      null !== a && !uu(a) && (n ? a <= t : a < t)
                        ? (r = o + 1)
                        : (i = o);
                    }
                    return i;
                  }
                  return ri(e, t, nl, n);
                }
                function ri(e, t, n, r) {
                  var o = 0,
                    a = null == e ? 0 : e.length;
                  if (0 === a) return 0;
                  for (
                    var u = (t = n(t)) != t,
                      l = null === t,
                      s = uu(t),
                      c = t === i;
                    o < a;

                  ) {
                    var f = pt((o + a) / 2),
                      d = n(e[f]),
                      p = d !== i,
                      h = null === d,
                      v = d == d,
                      g = uu(d);
                    if (u) var m = r || v;
                    else
                      m = c
                        ? v && (r || p)
                        : l
                        ? v && p && (r || !h)
                        : s
                        ? v && p && !h && (r || !g)
                        : !h && !g && (r ? d <= t : d < t);
                    m ? (o = f + 1) : (a = f);
                  }
                  return mn(a, 4294967294);
                }
                function ii(e, t) {
                  for (var n = -1, r = e.length, i = 0, o = []; ++n < r; ) {
                    var a = e[n],
                      u = t ? t(a) : a;
                    if (!n || !Da(u, l)) {
                      var l = u;
                      o[i++] = 0 === a ? 0 : a;
                    }
                  }
                  return o;
                }
                function oi(e) {
                  return "number" == typeof e ? e : uu(e) ? d : +e;
                }
                function ai(e) {
                  if ("string" == typeof e) return e;
                  if (Va(e)) return Rt(e, ai) + "";
                  if (uu(e)) return Mn ? Mn.call(e) : "";
                  var t = e + "";
                  return "0" == t && 1 / e == -1 / 0 ? "-0" : t;
                }
                function ui(e, t, n) {
                  var r = -1,
                    i = Pt,
                    o = e.length,
                    a = !0,
                    u = [],
                    l = u;
                  if (n) (a = !1), (i = It);
                  else if (o >= 200) {
                    var s = t ? null : Hi(e);
                    if (s) return ln(s);
                    (a = !1), (i = Xt), (l = new Hn());
                  } else l = t ? [] : u;
                  e: for (; ++r < o; ) {
                    var c = e[r],
                      f = t ? t(c) : c;
                    if (((c = n || 0 !== c ? c : 0), a && f == f)) {
                      for (var d = l.length; d--; ) if (l[d] === f) continue e;
                      t && l.push(f), u.push(c);
                    } else i(l, f, n) || (l !== u && l.push(f), u.push(c));
                  }
                  return u;
                }
                function li(e, t) {
                  return (
                    null == (e = Eo(e, (t = gi(t, e)))) || delete e[jo(Go(t))]
                  );
                }
                function si(e, t, n, r) {
                  return Yr(e, t, n(_r(e, t)), r);
                }
                function ci(e, t, n, r) {
                  for (
                    var i = e.length, o = r ? i : -1;
                    (r ? o-- : ++o < i) && t(e[o], o, e);

                  );
                  return n
                    ? ei(e, r ? 0 : o, r ? o + 1 : i)
                    : ei(e, r ? o + 1 : 0, r ? i : o);
                }
                function fi(e, t) {
                  var n = e;
                  return (
                    n instanceof Bn && (n = n.value()),
                    At(
                      t,
                      function (e, t) {
                        return t.func.apply(t.thisArg, Nt([e], t.args));
                      },
                      n
                    )
                  );
                }
                function di(e, t, n) {
                  var i = e.length;
                  if (i < 2) return i ? ui(e[0]) : [];
                  for (var o = -1, a = r(i); ++o < i; )
                    for (var u = e[o], l = -1; ++l < i; )
                      l != o && (a[o] = sr(a[o] || u, e[l], t, n));
                  return ui(vr(a, 1), t, n);
                }
                function pi(e, t, n) {
                  for (
                    var r = -1, o = e.length, a = t.length, u = {};
                    ++r < o;

                  ) {
                    var l = r < a ? t[r] : i;
                    n(u, e[r], l);
                  }
                  return u;
                }
                function hi(e) {
                  return Ha(e) ? e : [];
                }
                function vi(e) {
                  return "function" == typeof e ? e : nl;
                }
                function gi(e, t) {
                  return Va(e) ? e : yo(e, t) ? [e] : zo(mu(e));
                }
                var mi = Kr;
                function yi(e, t, n) {
                  var r = e.length;
                  return (n = n === i ? r : n), !t && n >= r ? e : ei(e, t, n);
                }
                var bi =
                  at ||
                  function (e) {
                    return ft.clearTimeout(e);
                  };
                function wi(e, t) {
                  if (t) return e.slice();
                  var n = e.length,
                    r = Ve ? Ve(n) : new e.constructor(n);
                  return e.copy(r), r;
                }
                function _i(e) {
                  var t = new e.constructor(e.byteLength);
                  return new Be(t).set(new Be(e)), t;
                }
                function ki(e, t) {
                  var n = t ? _i(e.buffer) : e.buffer;
                  return new e.constructor(n, e.byteOffset, e.length);
                }
                function xi(e, t) {
                  if (e !== t) {
                    var n = e !== i,
                      r = null === e,
                      o = e == e,
                      a = uu(e),
                      u = t !== i,
                      l = null === t,
                      s = t == t,
                      c = uu(t);
                    if (
                      (!l && !c && !a && e > t) ||
                      (a && u && s && !l && !c) ||
                      (r && u && s) ||
                      (!n && s) ||
                      !o
                    )
                      return 1;
                    if (
                      (!r && !a && !c && e < t) ||
                      (c && n && o && !r && !a) ||
                      (l && n && o) ||
                      (!u && o) ||
                      !s
                    )
                      return -1;
                  }
                  return 0;
                }
                function Si(e, t, n, i) {
                  for (
                    var o = -1,
                      a = e.length,
                      u = n.length,
                      l = -1,
                      s = t.length,
                      c = gn(a - u, 0),
                      f = r(s + c),
                      d = !i;
                    ++l < s;

                  )
                    f[l] = t[l];
                  for (; ++o < u; ) (d || o < a) && (f[n[o]] = e[o]);
                  for (; c--; ) f[l++] = e[o++];
                  return f;
                }
                function Ei(e, t, n, i) {
                  for (
                    var o = -1,
                      a = e.length,
                      u = -1,
                      l = n.length,
                      s = -1,
                      c = t.length,
                      f = gn(a - l, 0),
                      d = r(f + c),
                      p = !i;
                    ++o < f;

                  )
                    d[o] = e[o];
                  for (var h = o; ++s < c; ) d[h + s] = t[s];
                  for (; ++u < l; ) (p || o < a) && (d[h + n[u]] = e[o++]);
                  return d;
                }
                function Oi(e, t) {
                  var n = -1,
                    i = e.length;
                  for (t || (t = r(i)); ++n < i; ) t[n] = e[n];
                  return t;
                }
                function Ci(e, t, n, r) {
                  var o = !n;
                  n || (n = {});
                  for (var a = -1, u = t.length; ++a < u; ) {
                    var l = t[a],
                      s = r ? r(n[l], e[l], l, n, e) : i;
                    s === i && (s = e[l]), o ? rr(n, l, s) : Jn(n, l, s);
                  }
                  return n;
                }
                function Ti(e, t) {
                  return function (n, r) {
                    var i = Va(n) ? St : tr,
                      o = t ? t() : {};
                    return i(n, e, oo(r, 2), o);
                  };
                }
                function Pi(e) {
                  return Kr(function (t, n) {
                    var r = -1,
                      o = n.length,
                      a = o > 1 ? n[o - 1] : i,
                      u = o > 2 ? n[2] : i;
                    for (
                      a = e.length > 3 && "function" == typeof a ? (o--, a) : i,
                        u &&
                          mo(n[0], n[1], u) &&
                          ((a = o < 3 ? i : a), (o = 1)),
                        t = Se(t);
                      ++r < o;

                    ) {
                      var l = n[r];
                      l && e(t, l, r, a);
                    }
                    return t;
                  });
                }
                function Ii(e, t) {
                  return function (n, r) {
                    if (null == n) return n;
                    if (!Wa(n)) return e(n, r);
                    for (
                      var i = n.length, o = t ? i : -1, a = Se(n);
                      (t ? o-- : ++o < i) && !1 !== r(a[o], o, a);

                    );
                    return n;
                  };
                }
                function Ri(e) {
                  return function (t, n, r) {
                    for (var i = -1, o = Se(t), a = r(t), u = a.length; u--; ) {
                      var l = a[e ? u : ++i];
                      if (!1 === n(o[l], l, o)) break;
                    }
                    return t;
                  };
                }
                function Ni(e) {
                  return function (t) {
                    var n = rn((t = mu(t))) ? fn(t) : i,
                      r = n ? n[0] : t.charAt(0),
                      o = n ? yi(n, 1).join("") : t.slice(1);
                    return r[e]() + o;
                  };
                }
                function Ai(e) {
                  return function (t) {
                    return At(Yu(Bu(t).replace(Ye, "")), e, "");
                  };
                }
                function Li(e) {
                  return function () {
                    var t = arguments;
                    switch (t.length) {
                      case 0:
                        return new e();
                      case 1:
                        return new e(t[0]);
                      case 2:
                        return new e(t[0], t[1]);
                      case 3:
                        return new e(t[0], t[1], t[2]);
                      case 4:
                        return new e(t[0], t[1], t[2], t[3]);
                      case 5:
                        return new e(t[0], t[1], t[2], t[3], t[4]);
                      case 6:
                        return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
                      case 7:
                        return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);
                    }
                    var n = Dn(e.prototype),
                      r = e.apply(n, t);
                    return Ja(r) ? r : n;
                  };
                }
                function zi(e) {
                  return function (t, n, r) {
                    var o = Se(t);
                    if (!Wa(t)) {
                      var a = oo(n, 3);
                      (t = Iu(t)),
                        (n = function (e) {
                          return a(o[e], e, o);
                        });
                    }
                    var u = e(t, n, r);
                    return u > -1 ? o[a ? t[u] : u] : i;
                  };
                }
                function ji(e) {
                  return Ji(function (t) {
                    var n = t.length,
                      r = n,
                      a = Fn.prototype.thru;
                    for (e && t.reverse(); r--; ) {
                      var u = t[r];
                      if ("function" != typeof u) throw new Ce(o);
                      if (a && !l && "wrapper" == ro(u)) var l = new Fn([], !0);
                    }
                    for (r = l ? r : n; ++r < n; ) {
                      var s = ro((u = t[r])),
                        c = "wrapper" == s ? no(u) : i;
                      l =
                        c &&
                        bo(c[0]) &&
                        424 == c[1] &&
                        !c[4].length &&
                        1 == c[9]
                          ? l[ro(c[0])].apply(l, c[3])
                          : 1 == u.length && bo(u)
                          ? l[s]()
                          : l.thru(u);
                    }
                    return function () {
                      var e = arguments,
                        r = e[0];
                      if (l && 1 == e.length && Va(r))
                        return l.plant(r).value();
                      for (
                        var i = 0, o = n ? t[i].apply(this, e) : r;
                        ++i < n;

                      )
                        o = t[i].call(this, o);
                      return o;
                    };
                  });
                }
                function Mi(e, t, n, o, a, u, l, c, f, d) {
                  var p = t & s,
                    h = 1 & t,
                    v = 2 & t,
                    g = 24 & t,
                    m = 512 & t,
                    y = v ? i : Li(e);
                  return function s() {
                    for (var b = arguments.length, w = r(b), _ = b; _--; )
                      w[_] = arguments[_];
                    if (g)
                      var k = io(s),
                        x = (function (e, t) {
                          for (var n = e.length, r = 0; n--; )
                            e[n] === t && ++r;
                          return r;
                        })(w, k);
                    if (
                      (o && (w = Si(w, o, a, g)),
                      u && (w = Ei(w, u, l, g)),
                      (b -= x),
                      g && b < d)
                    ) {
                      var S = un(w, k);
                      return qi(e, t, Mi, s.placeholder, n, w, S, c, f, d - b);
                    }
                    var E = h ? n : this,
                      O = v ? E[e] : e;
                    return (
                      (b = w.length),
                      c
                        ? (w = (function (e, t) {
                            for (
                              var n = e.length, r = mn(t.length, n), o = Oi(e);
                              r--;

                            ) {
                              var a = t[r];
                              e[r] = go(a, n) ? o[a] : i;
                            }
                            return e;
                          })(w, c))
                        : m && b > 1 && w.reverse(),
                      p && f < b && (w.length = f),
                      this &&
                        this !== ft &&
                        this instanceof s &&
                        (O = y || Li(O)),
                      O.apply(E, w)
                    );
                  };
                }
                function $i(e, t) {
                  return function (n, r) {
                    return (function (e, t, n, r) {
                      return (
                        yr(e, function (e, i, o) {
                          t(r, n(e), i, o);
                        }),
                        r
                      );
                    })(n, e, t(r), {});
                  };
                }
                function Di(e, t) {
                  return function (n, r) {
                    var o;
                    if (n === i && r === i) return t;
                    if ((n !== i && (o = n), r !== i)) {
                      if (o === i) return r;
                      "string" == typeof n || "string" == typeof r
                        ? ((n = ai(n)), (r = ai(r)))
                        : ((n = oi(n)), (r = oi(r))),
                        (o = e(n, r));
                    }
                    return o;
                  };
                }
                function Ui(e) {
                  return Ji(function (t) {
                    return (
                      (t = Rt(t, Gt(oo()))),
                      Kr(function (n) {
                        var r = this;
                        return e(t, function (e) {
                          return xt(e, r, n);
                        });
                      })
                    );
                  });
                }
                function Fi(e, t) {
                  var n = (t = t === i ? " " : ai(t)).length;
                  if (n < 2) return n ? Hr(t, e) : t;
                  var r = Hr(t, dt(e / cn(t)));
                  return rn(t) ? yi(fn(r), 0, e).join("") : r.slice(0, e);
                }
                function Bi(e) {
                  return function (t, n, o) {
                    return (
                      o && "number" != typeof o && mo(t, n, o) && (n = o = i),
                      (t = du(t)),
                      n === i ? ((n = t), (t = 0)) : (n = du(n)),
                      (function (e, t, n, i) {
                        for (
                          var o = -1,
                            a = gn(dt((t - e) / (n || 1)), 0),
                            u = r(a);
                          a--;

                        )
                          (u[i ? a : ++o] = e), (e += n);
                        return u;
                      })(t, n, (o = o === i ? (t < n ? 1 : -1) : du(o)), e)
                    );
                  };
                }
                function Vi(e) {
                  return function (t, n) {
                    return (
                      ("string" == typeof t && "string" == typeof n) ||
                        ((t = vu(t)), (n = vu(n))),
                      e(t, n)
                    );
                  };
                }
                function qi(e, t, n, r, o, a, u, s, c, f) {
                  var d = 8 & t;
                  (t |= d ? l : 64), 4 & (t &= ~(d ? 64 : l)) || (t &= -4);
                  var p = [
                      e,
                      t,
                      o,
                      d ? a : i,
                      d ? u : i,
                      d ? i : a,
                      d ? i : u,
                      s,
                      c,
                      f,
                    ],
                    h = n.apply(i, p);
                  return bo(e) && Co(h, p), (h.placeholder = r), Io(h, e, t);
                }
                function Wi(e) {
                  var t = xe[e];
                  return function (e, n) {
                    if (
                      ((e = vu(e)),
                      (n = null == n ? 0 : mn(pu(n), 292)) && jt(e))
                    ) {
                      var r = (mu(e) + "e").split("e");
                      return +(
                        (r = (mu(t(r[0] + "e" + (+r[1] + n))) + "e").split(
                          "e"
                        ))[0] +
                        "e" +
                        (+r[1] - n)
                      );
                    }
                    return t(e);
                  };
                }
                var Hi =
                  En && 1 / ln(new En([, -0]))[1] == c
                    ? function (e) {
                        return new En(e);
                      }
                    : ul;
                function Ki(e) {
                  return function (t) {
                    var n = fo(t);
                    return n == k
                      ? on(t)
                      : n == C
                      ? sn(t)
                      : (function (e, t) {
                          return Rt(t, function (t) {
                            return [t, e[t]];
                          });
                        })(t, e(t));
                  };
                }
                function Qi(e, t, n, a, c, f, d, p) {
                  var h = 2 & t;
                  if (!h && "function" != typeof e) throw new Ce(o);
                  var v = a ? a.length : 0;
                  if (
                    (v || ((t &= -97), (a = c = i)),
                    (d = d === i ? d : gn(pu(d), 0)),
                    (p = p === i ? p : pu(p)),
                    (v -= c ? c.length : 0),
                    64 & t)
                  ) {
                    var g = a,
                      m = c;
                    a = c = i;
                  }
                  var y = h ? i : no(e),
                    b = [e, t, n, a, c, g, m, f, d, p];
                  if (
                    (y &&
                      (function (e, t) {
                        var n = e[1],
                          r = t[1],
                          i = n | r,
                          o = i < 131,
                          a =
                            (r == s && 8 == n) ||
                            (r == s && 256 == n && e[7].length <= t[8]) ||
                            (384 == r && t[7].length <= t[8] && 8 == n);
                        if (!o && !a) return e;
                        1 & r && ((e[2] = t[2]), (i |= 1 & n ? 0 : 4));
                        var l = t[3];
                        if (l) {
                          var c = e[3];
                          (e[3] = c ? Si(c, l, t[4]) : l),
                            (e[4] = c ? un(e[3], u) : t[4]);
                        }
                        (l = t[5]) &&
                          ((c = e[5]),
                          (e[5] = c ? Ei(c, l, t[6]) : l),
                          (e[6] = c ? un(e[5], u) : t[6])),
                          (l = t[7]) && (e[7] = l),
                          r & s &&
                            (e[8] = null == e[8] ? t[8] : mn(e[8], t[8])),
                          null == e[9] && (e[9] = t[9]),
                          (e[0] = t[0]),
                          (e[1] = i);
                      })(b, y),
                    (e = b[0]),
                    (t = b[1]),
                    (n = b[2]),
                    (a = b[3]),
                    (c = b[4]),
                    !(p = b[9] =
                      b[9] === i ? (h ? 0 : e.length) : gn(b[9] - v, 0)) &&
                      24 & t &&
                      (t &= -25),
                    t && 1 != t)
                  )
                    w =
                      8 == t || 16 == t
                        ? (function (e, t, n) {
                            var o = Li(e);
                            return function a() {
                              for (
                                var u = arguments.length,
                                  l = r(u),
                                  s = u,
                                  c = io(a);
                                s--;

                              )
                                l[s] = arguments[s];
                              var f =
                                u < 3 && l[0] !== c && l[u - 1] !== c
                                  ? []
                                  : un(l, c);
                              return (u -= f.length) < n
                                ? qi(
                                    e,
                                    t,
                                    Mi,
                                    a.placeholder,
                                    i,
                                    l,
                                    f,
                                    i,
                                    i,
                                    n - u
                                  )
                                : xt(
                                    this && this !== ft && this instanceof a
                                      ? o
                                      : e,
                                    this,
                                    l
                                  );
                            };
                          })(e, t, p)
                        : (t != l && 33 != t) || c.length
                        ? Mi.apply(i, b)
                        : (function (e, t, n, i) {
                            var o = 1 & t,
                              a = Li(e);
                            return function t() {
                              for (
                                var u = -1,
                                  l = arguments.length,
                                  s = -1,
                                  c = i.length,
                                  f = r(c + l),
                                  d =
                                    this && this !== ft && this instanceof t
                                      ? a
                                      : e;
                                ++s < c;

                              )
                                f[s] = i[s];
                              for (; l--; ) f[s++] = arguments[++u];
                              return xt(d, o ? n : this, f);
                            };
                          })(e, t, n, a);
                  else
                    var w = (function (e, t, n) {
                      var r = 1 & t,
                        i = Li(e);
                      return function t() {
                        return (
                          this && this !== ft && this instanceof t ? i : e
                        ).apply(r ? n : this, arguments);
                      };
                    })(e, t, n);
                  return Io((y ? Xr : Co)(w, b), e, t);
                }
                function Gi(e, t, n, r) {
                  return e === i || (Da(e, Ie[n]) && !Ae.call(r, n)) ? t : e;
                }
                function Yi(e, t, n, r, o, a) {
                  return (
                    Ja(e) &&
                      Ja(t) &&
                      (a.set(t, e), Dr(e, t, i, Yi, a), a.delete(t)),
                    e
                  );
                }
                function Xi(e) {
                  return ru(e) ? i : e;
                }
                function Zi(e, t, n, r, o, a) {
                  var u = 1 & n,
                    l = e.length,
                    s = t.length;
                  if (l != s && !(u && s > l)) return !1;
                  var c = a.get(e),
                    f = a.get(t);
                  if (c && f) return c == t && f == e;
                  var d = -1,
                    p = !0,
                    h = 2 & n ? new Hn() : i;
                  for (a.set(e, t), a.set(t, e); ++d < l; ) {
                    var v = e[d],
                      g = t[d];
                    if (r)
                      var m = u ? r(g, v, d, t, e, a) : r(v, g, d, e, t, a);
                    if (m !== i) {
                      if (m) continue;
                      p = !1;
                      break;
                    }
                    if (h) {
                      if (
                        !zt(t, function (e, t) {
                          if (!Xt(h, t) && (v === e || o(v, e, n, r, a)))
                            return h.push(t);
                        })
                      ) {
                        p = !1;
                        break;
                      }
                    } else if (v !== g && !o(v, g, n, r, a)) {
                      p = !1;
                      break;
                    }
                  }
                  return a.delete(e), a.delete(t), p;
                }
                function Ji(e) {
                  return Po(So(e, i, qo), e + "");
                }
                function eo(e) {
                  return kr(e, Iu, so);
                }
                function to(e) {
                  return kr(e, Ru, co);
                }
                var no = Tn
                  ? function (e) {
                      return Tn.get(e);
                    }
                  : ul;
                function ro(e) {
                  for (
                    var t = e.name + "",
                      n = Pn[t],
                      r = Ae.call(Pn, t) ? n.length : 0;
                    r--;

                  ) {
                    var i = n[r],
                      o = i.func;
                    if (null == o || o == e) return i.name;
                  }
                  return t;
                }
                function io(e) {
                  return (Ae.call($n, "placeholder") ? $n : e).placeholder;
                }
                function oo() {
                  var e = $n.iteratee || rl;
                  return (
                    (e = e === rl ? Ar : e),
                    arguments.length ? e(arguments[0], arguments[1]) : e
                  );
                }
                function ao(e, t) {
                  var n,
                    r,
                    i = e.__data__;
                  return (
                    "string" == (r = typeof (n = t)) ||
                    "number" == r ||
                    "symbol" == r ||
                    "boolean" == r
                      ? "__proto__" !== n
                      : null === n
                  )
                    ? i["string" == typeof t ? "string" : "hash"]
                    : i.map;
                }
                function uo(e) {
                  for (var t = Iu(e), n = t.length; n--; ) {
                    var r = t[n],
                      i = e[r];
                    t[n] = [r, i, ko(i)];
                  }
                  return t;
                }
                function lo(e, t) {
                  var n = (function (e, t) {
                    return null == e ? i : e[t];
                  })(e, t);
                  return Nr(n) ? n : i;
                }
                var so = vt
                    ? function (e) {
                        return null == e
                          ? []
                          : ((e = Se(e)),
                            Tt(vt(e), function (t) {
                              return He.call(e, t);
                            }));
                      }
                    : hl,
                  co = vt
                    ? function (e) {
                        for (var t = []; e; ) Nt(t, so(e)), (e = qe(e));
                        return t;
                      }
                    : hl,
                  fo = xr;
                function po(e, t, n) {
                  for (
                    var r = -1, i = (t = gi(t, e)).length, o = !1;
                    ++r < i;

                  ) {
                    var a = jo(t[r]);
                    if (!(o = null != e && n(e, a))) break;
                    e = e[a];
                  }
                  return o || ++r != i
                    ? o
                    : !!(i = null == e ? 0 : e.length) &&
                        Za(i) &&
                        go(a, i) &&
                        (Va(e) || Ba(e));
                }
                function ho(e) {
                  return "function" != typeof e.constructor || _o(e)
                    ? {}
                    : Dn(qe(e));
                }
                function vo(e) {
                  return Va(e) || Ba(e) || !!(Qe && e && e[Qe]);
                }
                function go(e, t) {
                  var n = typeof e;
                  return (
                    !!(t = null == t ? f : t) &&
                    ("number" == n || ("symbol" != n && me.test(e))) &&
                    e > -1 &&
                    e % 1 == 0 &&
                    e < t
                  );
                }
                function mo(e, t, n) {
                  if (!Ja(n)) return !1;
                  var r = typeof t;
                  return (
                    !!("number" == r
                      ? Wa(n) && go(t, n.length)
                      : "string" == r && t in n) && Da(n[t], e)
                  );
                }
                function yo(e, t) {
                  if (Va(e)) return !1;
                  var n = typeof e;
                  return (
                    !(
                      "number" != n &&
                      "symbol" != n &&
                      "boolean" != n &&
                      null != e &&
                      !uu(e)
                    ) ||
                    J.test(e) ||
                    !Z.test(e) ||
                    (null != t && e in Se(t))
                  );
                }
                function bo(e) {
                  var t = ro(e),
                    n = $n[t];
                  if ("function" != typeof n || !(t in Bn.prototype)) return !1;
                  if (e === n) return !0;
                  var r = no(n);
                  return !!r && e === r[0];
                }
                ((kn && fo(new kn(new ArrayBuffer(1))) != N) ||
                  (xn && fo(new xn()) != k) ||
                  (Sn && fo(Sn.resolve()) != E) ||
                  (En && fo(new En()) != C) ||
                  (On && fo(new On()) != I)) &&
                  (fo = function (e) {
                    var t = xr(e),
                      n = t == S ? e.constructor : i,
                      r = n ? Mo(n) : "";
                    if (r)
                      switch (r) {
                        case In:
                          return N;
                        case Rn:
                          return k;
                        case Nn:
                          return E;
                        case An:
                          return C;
                        case Ln:
                          return I;
                      }
                    return t;
                  });
                var wo = Re ? Ya : vl;
                function _o(e) {
                  var t = e && e.constructor;
                  return e === (("function" == typeof t && t.prototype) || Ie);
                }
                function ko(e) {
                  return e == e && !Ja(e);
                }
                function xo(e, t) {
                  return function (n) {
                    return null != n && n[e] === t && (t !== i || e in Se(n));
                  };
                }
                function So(e, t, n) {
                  return (
                    (t = gn(t === i ? e.length - 1 : t, 0)),
                    function () {
                      for (
                        var i = arguments,
                          o = -1,
                          a = gn(i.length - t, 0),
                          u = r(a);
                        ++o < a;

                      )
                        u[o] = i[t + o];
                      o = -1;
                      for (var l = r(t + 1); ++o < t; ) l[o] = i[o];
                      return (l[t] = n(u)), xt(e, this, l);
                    }
                  );
                }
                function Eo(e, t) {
                  return t.length < 2 ? e : _r(e, ei(t, 0, -1));
                }
                function Oo(e, t) {
                  if (
                    ("constructor" !== t || "function" != typeof e[t]) &&
                    "__proto__" != t
                  )
                    return e[t];
                }
                var Co = Ro(Xr),
                  To =
                    ct ||
                    function (e, t) {
                      return ft.setTimeout(e, t);
                    },
                  Po = Ro(Zr);
                function Io(e, t, n) {
                  var r = t + "";
                  return Po(
                    e,
                    (function (e, t) {
                      var n = t.length;
                      if (!n) return e;
                      var r = n - 1;
                      return (
                        (t[r] = (n > 1 ? "& " : "") + t[r]),
                        (t = t.join(n > 2 ? ", " : " ")),
                        e.replace(oe, "{\n/* [wrapped with " + t + "] */\n")
                      );
                    })(
                      r,
                      (function (e, t) {
                        return (
                          Et(h, function (n) {
                            var r = "_." + n[0];
                            t & n[1] && !Pt(e, r) && e.push(r);
                          }),
                          e.sort()
                        );
                      })(
                        (function (e) {
                          var t = e.match(ae);
                          return t ? t[1].split(ue) : [];
                        })(r),
                        n
                      )
                    )
                  );
                }
                function Ro(e) {
                  var t = 0,
                    n = 0;
                  return function () {
                    var r = yn(),
                      o = 16 - (r - n);
                    if (((n = r), o > 0)) {
                      if (++t >= 800) return arguments[0];
                    } else t = 0;
                    return e.apply(i, arguments);
                  };
                }
                function No(e, t) {
                  var n = -1,
                    r = e.length,
                    o = r - 1;
                  for (t = t === i ? r : t; ++n < t; ) {
                    var a = Wr(n, o),
                      u = e[a];
                    (e[a] = e[n]), (e[n] = u);
                  }
                  return (e.length = t), e;
                }
                var Ao,
                  Lo,
                  zo =
                    ((Ao = Aa(
                      function (e) {
                        var t = [];
                        return (
                          46 === e.charCodeAt(0) && t.push(""),
                          e.replace(ee, function (e, n, r, i) {
                            t.push(r ? i.replace(ce, "$1") : n || e);
                          }),
                          t
                        );
                      },
                      function (e) {
                        return 500 === Lo.size && Lo.clear(), e;
                      }
                    )),
                    (Lo = Ao.cache),
                    Ao);
                function jo(e) {
                  if ("string" == typeof e || uu(e)) return e;
                  var t = e + "";
                  return "0" == t && 1 / e == -1 / 0 ? "-0" : t;
                }
                function Mo(e) {
                  if (null != e) {
                    try {
                      return Ne.call(e);
                    } catch (e) {}
                    try {
                      return e + "";
                    } catch (e) {}
                  }
                  return "";
                }
                function $o(e) {
                  if (e instanceof Bn) return e.clone();
                  var t = new Fn(e.__wrapped__, e.__chain__);
                  return (
                    (t.__actions__ = Oi(e.__actions__)),
                    (t.__index__ = e.__index__),
                    (t.__values__ = e.__values__),
                    t
                  );
                }
                var Do = Kr(function (e, t) {
                    return Ha(e) ? sr(e, vr(t, 1, Ha, !0)) : [];
                  }),
                  Uo = Kr(function (e, t) {
                    var n = Go(t);
                    return (
                      Ha(n) && (n = i),
                      Ha(e) ? sr(e, vr(t, 1, Ha, !0), oo(n, 2)) : []
                    );
                  }),
                  Fo = Kr(function (e, t) {
                    var n = Go(t);
                    return (
                      Ha(n) && (n = i),
                      Ha(e) ? sr(e, vr(t, 1, Ha, !0), i, n) : []
                    );
                  });
                function Bo(e, t, n) {
                  var r = null == e ? 0 : e.length;
                  if (!r) return -1;
                  var i = null == n ? 0 : pu(n);
                  return i < 0 && (i = gn(r + i, 0)), $t(e, oo(t, 3), i);
                }
                function Vo(e, t, n) {
                  var r = null == e ? 0 : e.length;
                  if (!r) return -1;
                  var o = r - 1;
                  return (
                    n !== i &&
                      ((o = pu(n)), (o = n < 0 ? gn(r + o, 0) : mn(o, r - 1))),
                    $t(e, oo(t, 3), o, !0)
                  );
                }
                function qo(e) {
                  return null != e && e.length ? vr(e, 1) : [];
                }
                function Wo(e) {
                  return e && e.length ? e[0] : i;
                }
                var Ho = Kr(function (e) {
                    var t = Rt(e, hi);
                    return t.length && t[0] === e[0] ? Cr(t) : [];
                  }),
                  Ko = Kr(function (e) {
                    var t = Go(e),
                      n = Rt(e, hi);
                    return (
                      t === Go(n) ? (t = i) : n.pop(),
                      n.length && n[0] === e[0] ? Cr(n, oo(t, 2)) : []
                    );
                  }),
                  Qo = Kr(function (e) {
                    var t = Go(e),
                      n = Rt(e, hi);
                    return (
                      (t = "function" == typeof t ? t : i) && n.pop(),
                      n.length && n[0] === e[0] ? Cr(n, i, t) : []
                    );
                  });
                function Go(e) {
                  var t = null == e ? 0 : e.length;
                  return t ? e[t - 1] : i;
                }
                var Yo = Kr(Xo);
                function Xo(e, t) {
                  return e && e.length && t && t.length ? Vr(e, t) : e;
                }
                var Zo = Ji(function (e, t) {
                  var n = null == e ? 0 : e.length,
                    r = ir(e, t);
                  return (
                    qr(
                      e,
                      Rt(t, function (e) {
                        return go(e, n) ? +e : e;
                      }).sort(xi)
                    ),
                    r
                  );
                });
                function Jo(e) {
                  return null == e ? e : _n.call(e);
                }
                var ea = Kr(function (e) {
                    return ui(vr(e, 1, Ha, !0));
                  }),
                  ta = Kr(function (e) {
                    var t = Go(e);
                    return Ha(t) && (t = i), ui(vr(e, 1, Ha, !0), oo(t, 2));
                  }),
                  na = Kr(function (e) {
                    var t = Go(e);
                    return (
                      (t = "function" == typeof t ? t : i),
                      ui(vr(e, 1, Ha, !0), i, t)
                    );
                  });
                function ra(e) {
                  if (!e || !e.length) return [];
                  var t = 0;
                  return (
                    (e = Tt(e, function (e) {
                      if (Ha(e)) return (t = gn(e.length, t)), !0;
                    })),
                    Kt(t, function (t) {
                      return Rt(e, Vt(t));
                    })
                  );
                }
                function ia(e, t) {
                  if (!e || !e.length) return [];
                  var n = ra(e);
                  return null == t
                    ? n
                    : Rt(n, function (e) {
                        return xt(t, i, e);
                      });
                }
                var oa = Kr(function (e, t) {
                    return Ha(e) ? sr(e, t) : [];
                  }),
                  aa = Kr(function (e) {
                    return di(Tt(e, Ha));
                  }),
                  ua = Kr(function (e) {
                    var t = Go(e);
                    return Ha(t) && (t = i), di(Tt(e, Ha), oo(t, 2));
                  }),
                  la = Kr(function (e) {
                    var t = Go(e);
                    return (
                      (t = "function" == typeof t ? t : i), di(Tt(e, Ha), i, t)
                    );
                  }),
                  sa = Kr(ra),
                  ca = Kr(function (e) {
                    var t = e.length,
                      n = t > 1 ? e[t - 1] : i;
                    return (
                      (n = "function" == typeof n ? (e.pop(), n) : i), ia(e, n)
                    );
                  });
                function fa(e) {
                  var t = $n(e);
                  return (t.__chain__ = !0), t;
                }
                function da(e, t) {
                  return t(e);
                }
                var pa = Ji(function (e) {
                    var t = e.length,
                      n = t ? e[0] : 0,
                      r = this.__wrapped__,
                      o = function (t) {
                        return ir(t, e);
                      };
                    return !(t > 1 || this.__actions__.length) &&
                      r instanceof Bn &&
                      go(n)
                      ? ((r = r.slice(n, +n + (t ? 1 : 0))).__actions__.push({
                          func: da,
                          args: [o],
                          thisArg: i,
                        }),
                        new Fn(r, this.__chain__).thru(function (e) {
                          return t && !e.length && e.push(i), e;
                        }))
                      : this.thru(o);
                  }),
                  ha = Ti(function (e, t, n) {
                    Ae.call(e, n) ? ++e[n] : rr(e, n, 1);
                  }),
                  va = zi(Bo),
                  ga = zi(Vo);
                function ma(e, t) {
                  return (Va(e) ? Et : cr)(e, oo(t, 3));
                }
                function ya(e, t) {
                  return (Va(e) ? Ot : fr)(e, oo(t, 3));
                }
                var ba = Ti(function (e, t, n) {
                    Ae.call(e, n) ? e[n].push(t) : rr(e, n, [t]);
                  }),
                  wa = Kr(function (e, t, n) {
                    var i = -1,
                      o = "function" == typeof t,
                      a = Wa(e) ? r(e.length) : [];
                    return (
                      cr(e, function (e) {
                        a[++i] = o ? xt(t, e, n) : Tr(e, t, n);
                      }),
                      a
                    );
                  }),
                  _a = Ti(function (e, t, n) {
                    rr(e, n, t);
                  });
                function ka(e, t) {
                  return (Va(e) ? Rt : jr)(e, oo(t, 3));
                }
                var xa = Ti(
                    function (e, t, n) {
                      e[n ? 0 : 1].push(t);
                    },
                    function () {
                      return [[], []];
                    }
                  ),
                  Sa = Kr(function (e, t) {
                    if (null == e) return [];
                    var n = t.length;
                    return (
                      n > 1 && mo(e, t[0], t[1])
                        ? (t = [])
                        : n > 2 && mo(t[0], t[1], t[2]) && (t = [t[0]]),
                      Fr(e, vr(t, 1), [])
                    );
                  }),
                  Ea =
                    st ||
                    function () {
                      return ft.Date.now();
                    };
                function Oa(e, t, n) {
                  return (
                    (t = n ? i : t),
                    (t = e && null == t ? e.length : t),
                    Qi(e, s, i, i, i, i, t)
                  );
                }
                function Ca(e, t) {
                  var n;
                  if ("function" != typeof t) throw new Ce(o);
                  return (
                    (e = pu(e)),
                    function () {
                      return (
                        --e > 0 && (n = t.apply(this, arguments)),
                        e <= 1 && (t = i),
                        n
                      );
                    }
                  );
                }
                var Ta = Kr(function (e, t, n) {
                    var r = 1;
                    if (n.length) {
                      var i = un(n, io(Ta));
                      r |= l;
                    }
                    return Qi(e, r, t, n, i);
                  }),
                  Pa = Kr(function (e, t, n) {
                    var r = 3;
                    if (n.length) {
                      var i = un(n, io(Pa));
                      r |= l;
                    }
                    return Qi(t, r, e, n, i);
                  });
                function Ia(e, t, n) {
                  var r,
                    a,
                    u,
                    l,
                    s,
                    c,
                    f = 0,
                    d = !1,
                    p = !1,
                    h = !0;
                  if ("function" != typeof e) throw new Ce(o);
                  function v(t) {
                    var n = r,
                      o = a;
                    return (r = a = i), (f = t), (l = e.apply(o, n));
                  }
                  function g(e) {
                    var n = e - c;
                    return c === i || n >= t || n < 0 || (p && e - f >= u);
                  }
                  function m() {
                    var e = Ea();
                    if (g(e)) return y(e);
                    s = To(
                      m,
                      (function (e) {
                        var n = t - (e - c);
                        return p ? mn(n, u - (e - f)) : n;
                      })(e)
                    );
                  }
                  function y(e) {
                    return (s = i), h && r ? v(e) : ((r = a = i), l);
                  }
                  function b() {
                    var e = Ea(),
                      n = g(e);
                    if (((r = arguments), (a = this), (c = e), n)) {
                      if (s === i)
                        return (function (e) {
                          return (f = e), (s = To(m, t)), d ? v(e) : l;
                        })(c);
                      if (p) return bi(s), (s = To(m, t)), v(c);
                    }
                    return s === i && (s = To(m, t)), l;
                  }
                  return (
                    (t = vu(t) || 0),
                    Ja(n) &&
                      ((d = !!n.leading),
                      (u = (p = "maxWait" in n)
                        ? gn(vu(n.maxWait) || 0, t)
                        : u),
                      (h = "trailing" in n ? !!n.trailing : h)),
                    (b.cancel = function () {
                      s !== i && bi(s), (f = 0), (r = c = a = s = i);
                    }),
                    (b.flush = function () {
                      return s === i ? l : y(Ea());
                    }),
                    b
                  );
                }
                var Ra = Kr(function (e, t) {
                    return lr(e, 1, t);
                  }),
                  Na = Kr(function (e, t, n) {
                    return lr(e, vu(t) || 0, n);
                  });
                function Aa(e, t) {
                  if (
                    "function" != typeof e ||
                    (null != t && "function" != typeof t)
                  )
                    throw new Ce(o);
                  var n = function () {
                    var r = arguments,
                      i = t ? t.apply(this, r) : r[0],
                      o = n.cache;
                    if (o.has(i)) return o.get(i);
                    var a = e.apply(this, r);
                    return (n.cache = o.set(i, a) || o), a;
                  };
                  return (n.cache = new (Aa.Cache || Wn)()), n;
                }
                function La(e) {
                  if ("function" != typeof e) throw new Ce(o);
                  return function () {
                    var t = arguments;
                    switch (t.length) {
                      case 0:
                        return !e.call(this);
                      case 1:
                        return !e.call(this, t[0]);
                      case 2:
                        return !e.call(this, t[0], t[1]);
                      case 3:
                        return !e.call(this, t[0], t[1], t[2]);
                    }
                    return !e.apply(this, t);
                  };
                }
                Aa.Cache = Wn;
                var za = mi(function (e, t) {
                    var n = (t =
                      1 == t.length && Va(t[0])
                        ? Rt(t[0], Gt(oo()))
                        : Rt(vr(t, 1), Gt(oo()))).length;
                    return Kr(function (r) {
                      for (var i = -1, o = mn(r.length, n); ++i < o; )
                        r[i] = t[i].call(this, r[i]);
                      return xt(e, this, r);
                    });
                  }),
                  ja = Kr(function (e, t) {
                    var n = un(t, io(ja));
                    return Qi(e, l, i, t, n);
                  }),
                  Ma = Kr(function (e, t) {
                    var n = un(t, io(Ma));
                    return Qi(e, 64, i, t, n);
                  }),
                  $a = Ji(function (e, t) {
                    return Qi(e, 256, i, i, i, t);
                  });
                function Da(e, t) {
                  return e === t || (e != e && t != t);
                }
                var Ua = Vi(Sr),
                  Fa = Vi(function (e, t) {
                    return e >= t;
                  }),
                  Ba = Pr(
                    (function () {
                      return arguments;
                    })()
                  )
                    ? Pr
                    : function (e) {
                        return (
                          eu(e) && Ae.call(e, "callee") && !He.call(e, "callee")
                        );
                      },
                  Va = r.isArray,
                  qa = mt
                    ? Gt(mt)
                    : function (e) {
                        return eu(e) && xr(e) == R;
                      };
                function Wa(e) {
                  return null != e && Za(e.length) && !Ya(e);
                }
                function Ha(e) {
                  return eu(e) && Wa(e);
                }
                var Ka = gt || vl,
                  Qa = yt
                    ? Gt(yt)
                    : function (e) {
                        return eu(e) && xr(e) == y;
                      };
                function Ga(e) {
                  if (!eu(e)) return !1;
                  var t = xr(e);
                  return (
                    t == b ||
                    "[object DOMException]" == t ||
                    ("string" == typeof e.message &&
                      "string" == typeof e.name &&
                      !ru(e))
                  );
                }
                function Ya(e) {
                  if (!Ja(e)) return !1;
                  var t = xr(e);
                  return (
                    t == w ||
                    t == _ ||
                    "[object AsyncFunction]" == t ||
                    "[object Proxy]" == t
                  );
                }
                function Xa(e) {
                  return "number" == typeof e && e == pu(e);
                }
                function Za(e) {
                  return "number" == typeof e && e > -1 && e % 1 == 0 && e <= f;
                }
                function Ja(e) {
                  var t = typeof e;
                  return null != e && ("object" == t || "function" == t);
                }
                function eu(e) {
                  return null != e && "object" == typeof e;
                }
                var tu = bt
                  ? Gt(bt)
                  : function (e) {
                      return eu(e) && fo(e) == k;
                    };
                function nu(e) {
                  return "number" == typeof e || (eu(e) && xr(e) == x);
                }
                function ru(e) {
                  if (!eu(e) || xr(e) != S) return !1;
                  var t = qe(e);
                  if (null === t) return !0;
                  var n = Ae.call(t, "constructor") && t.constructor;
                  return (
                    "function" == typeof n && n instanceof n && Ne.call(n) == Me
                  );
                }
                var iu = wt
                    ? Gt(wt)
                    : function (e) {
                        return eu(e) && xr(e) == O;
                      },
                  ou = _t
                    ? Gt(_t)
                    : function (e) {
                        return eu(e) && fo(e) == C;
                      };
                function au(e) {
                  return (
                    "string" == typeof e || (!Va(e) && eu(e) && xr(e) == T)
                  );
                }
                function uu(e) {
                  return "symbol" == typeof e || (eu(e) && xr(e) == P);
                }
                var lu = kt
                    ? Gt(kt)
                    : function (e) {
                        return eu(e) && Za(e.length) && !!it[xr(e)];
                      },
                  su = Vi(zr),
                  cu = Vi(function (e, t) {
                    return e <= t;
                  });
                function fu(e) {
                  if (!e) return [];
                  if (Wa(e)) return au(e) ? fn(e) : Oi(e);
                  if (Ge && e[Ge])
                    return (function (e) {
                      for (var t, n = []; !(t = e.next()).done; )
                        n.push(t.value);
                      return n;
                    })(e[Ge]());
                  var t = fo(e);
                  return (t == k ? on : t == C ? ln : Du)(e);
                }
                function du(e) {
                  return e
                    ? (e = vu(e)) === c || e === -1 / 0
                      ? 17976931348623157e292 * (e < 0 ? -1 : 1)
                      : e == e
                      ? e
                      : 0
                    : 0 === e
                    ? e
                    : 0;
                }
                function pu(e) {
                  var t = du(e),
                    n = t % 1;
                  return t == t ? (n ? t - n : t) : 0;
                }
                function hu(e) {
                  return e ? or(pu(e), 0, p) : 0;
                }
                function vu(e) {
                  if ("number" == typeof e) return e;
                  if (uu(e)) return d;
                  if (Ja(e)) {
                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = Ja(t) ? t + "" : t;
                  }
                  if ("string" != typeof e) return 0 === e ? e : +e;
                  e = Qt(e);
                  var n = he.test(e);
                  return n || ge.test(e)
                    ? lt(e.slice(2), n ? 2 : 8)
                    : pe.test(e)
                    ? d
                    : +e;
                }
                function gu(e) {
                  return Ci(e, Ru(e));
                }
                function mu(e) {
                  return null == e ? "" : ai(e);
                }
                var yu = Pi(function (e, t) {
                    if (_o(t) || Wa(t)) Ci(t, Iu(t), e);
                    else for (var n in t) Ae.call(t, n) && Jn(e, n, t[n]);
                  }),
                  bu = Pi(function (e, t) {
                    Ci(t, Ru(t), e);
                  }),
                  wu = Pi(function (e, t, n, r) {
                    Ci(t, Ru(t), e, r);
                  }),
                  _u = Pi(function (e, t, n, r) {
                    Ci(t, Iu(t), e, r);
                  }),
                  ku = Ji(ir),
                  xu = Kr(function (e, t) {
                    e = Se(e);
                    var n = -1,
                      r = t.length,
                      o = r > 2 ? t[2] : i;
                    for (o && mo(t[0], t[1], o) && (r = 1); ++n < r; )
                      for (
                        var a = t[n], u = Ru(a), l = -1, s = u.length;
                        ++l < s;

                      ) {
                        var c = u[l],
                          f = e[c];
                        (f === i || (Da(f, Ie[c]) && !Ae.call(e, c))) &&
                          (e[c] = a[c]);
                      }
                    return e;
                  }),
                  Su = Kr(function (e) {
                    return e.push(i, Yi), xt(Au, i, e);
                  });
                function Eu(e, t, n) {
                  var r = null == e ? i : _r(e, t);
                  return r === i ? n : r;
                }
                function Ou(e, t) {
                  return null != e && po(e, t, Or);
                }
                var Cu = $i(function (e, t, n) {
                    null != t &&
                      "function" != typeof t.toString &&
                      (t = je.call(t)),
                      (e[t] = n);
                  }, Ju(nl)),
                  Tu = $i(function (e, t, n) {
                    null != t &&
                      "function" != typeof t.toString &&
                      (t = je.call(t)),
                      Ae.call(e, t) ? e[t].push(n) : (e[t] = [n]);
                  }, oo),
                  Pu = Kr(Tr);
                function Iu(e) {
                  return Wa(e) ? Qn(e) : Lr(e);
                }
                function Ru(e) {
                  return Wa(e)
                    ? Qn(e, !0)
                    : (function (e) {
                        if (!Ja(e))
                          return (function (e) {
                            var t = [];
                            if (null != e) for (var n in Se(e)) t.push(n);
                            return t;
                          })(e);
                        var t = _o(e),
                          n = [];
                        for (var r in e)
                          ("constructor" != r || (!t && Ae.call(e, r))) &&
                            n.push(r);
                        return n;
                      })(e);
                }
                var Nu = Pi(function (e, t, n) {
                    Dr(e, t, n);
                  }),
                  Au = Pi(function (e, t, n, r) {
                    Dr(e, t, n, r);
                  }),
                  Lu = Ji(function (e, t) {
                    var n = {};
                    if (null == e) return n;
                    var r = !1;
                    (t = Rt(t, function (t) {
                      return (t = gi(t, e)), r || (r = t.length > 1), t;
                    })),
                      Ci(e, to(e), n),
                      r && (n = ar(n, 7, Xi));
                    for (var i = t.length; i--; ) li(n, t[i]);
                    return n;
                  }),
                  zu = Ji(function (e, t) {
                    return null == e
                      ? {}
                      : (function (e, t) {
                          return Br(e, t, function (t, n) {
                            return Ou(e, n);
                          });
                        })(e, t);
                  });
                function ju(e, t) {
                  if (null == e) return {};
                  var n = Rt(to(e), function (e) {
                    return [e];
                  });
                  return (
                    (t = oo(t)),
                    Br(e, n, function (e, n) {
                      return t(e, n[0]);
                    })
                  );
                }
                var Mu = Ki(Iu),
                  $u = Ki(Ru);
                function Du(e) {
                  return null == e ? [] : Yt(e, Iu(e));
                }
                var Uu = Ai(function (e, t, n) {
                  return (t = t.toLowerCase()), e + (n ? Fu(t) : t);
                });
                function Fu(e) {
                  return Gu(mu(e).toLowerCase());
                }
                function Bu(e) {
                  return (e = mu(e)) && e.replace(ye, en).replace(Xe, "");
                }
                var Vu = Ai(function (e, t, n) {
                    return e + (n ? "-" : "") + t.toLowerCase();
                  }),
                  qu = Ai(function (e, t, n) {
                    return e + (n ? " " : "") + t.toLowerCase();
                  }),
                  Wu = Ni("toLowerCase"),
                  Hu = Ai(function (e, t, n) {
                    return e + (n ? "_" : "") + t.toLowerCase();
                  }),
                  Ku = Ai(function (e, t, n) {
                    return e + (n ? " " : "") + Gu(t);
                  }),
                  Qu = Ai(function (e, t, n) {
                    return e + (n ? " " : "") + t.toUpperCase();
                  }),
                  Gu = Ni("toUpperCase");
                function Yu(e, t, n) {
                  return (
                    (e = mu(e)),
                    (t = n ? i : t) === i
                      ? (function (e) {
                          return tt.test(e);
                        })(e)
                        ? (function (e) {
                            return e.match(Je) || [];
                          })(e)
                        : (function (e) {
                            return e.match(le) || [];
                          })(e)
                      : e.match(t) || []
                  );
                }
                var Xu = Kr(function (e, t) {
                    try {
                      return xt(e, i, t);
                    } catch (e) {
                      return Ga(e) ? e : new _e(e);
                    }
                  }),
                  Zu = Ji(function (e, t) {
                    return (
                      Et(t, function (t) {
                        (t = jo(t)), rr(e, t, Ta(e[t], e));
                      }),
                      e
                    );
                  });
                function Ju(e) {
                  return function () {
                    return e;
                  };
                }
                var el = ji(),
                  tl = ji(!0);
                function nl(e) {
                  return e;
                }
                function rl(e) {
                  return Ar("function" == typeof e ? e : ar(e, 1));
                }
                var il = Kr(function (e, t) {
                    return function (n) {
                      return Tr(n, e, t);
                    };
                  }),
                  ol = Kr(function (e, t) {
                    return function (n) {
                      return Tr(e, n, t);
                    };
                  });
                function al(e, t, n) {
                  var r = Iu(t),
                    i = wr(t, r);
                  null != n ||
                    (Ja(t) && (i.length || !r.length)) ||
                    ((n = t), (t = e), (e = this), (i = wr(t, Iu(t))));
                  var o = !(Ja(n) && "chain" in n && !n.chain),
                    a = Ya(e);
                  return (
                    Et(i, function (n) {
                      var r = t[n];
                      (e[n] = r),
                        a &&
                          (e.prototype[n] = function () {
                            var t = this.__chain__;
                            if (o || t) {
                              var n = e(this.__wrapped__);
                              return (
                                (n.__actions__ = Oi(this.__actions__)).push({
                                  func: r,
                                  args: arguments,
                                  thisArg: e,
                                }),
                                (n.__chain__ = t),
                                n
                              );
                            }
                            return r.apply(e, Nt([this.value()], arguments));
                          });
                    }),
                    e
                  );
                }
                function ul() {}
                var ll = Ui(Rt),
                  sl = Ui(Ct),
                  cl = Ui(zt);
                function fl(e) {
                  return yo(e)
                    ? Vt(jo(e))
                    : (function (e) {
                        return function (t) {
                          return _r(t, e);
                        };
                      })(e);
                }
                var dl = Bi(),
                  pl = Bi(!0);
                function hl() {
                  return [];
                }
                function vl() {
                  return !1;
                }
                var gl,
                  ml = Di(function (e, t) {
                    return e + t;
                  }, 0),
                  yl = Wi("ceil"),
                  bl = Di(function (e, t) {
                    return e / t;
                  }, 1),
                  wl = Wi("floor"),
                  _l = Di(function (e, t) {
                    return e * t;
                  }, 1),
                  kl = Wi("round"),
                  xl = Di(function (e, t) {
                    return e - t;
                  }, 0);
                return (
                  ($n.after = function (e, t) {
                    if ("function" != typeof t) throw new Ce(o);
                    return (
                      (e = pu(e)),
                      function () {
                        if (--e < 1) return t.apply(this, arguments);
                      }
                    );
                  }),
                  ($n.ary = Oa),
                  ($n.assign = yu),
                  ($n.assignIn = bu),
                  ($n.assignInWith = wu),
                  ($n.assignWith = _u),
                  ($n.at = ku),
                  ($n.before = Ca),
                  ($n.bind = Ta),
                  ($n.bindAll = Zu),
                  ($n.bindKey = Pa),
                  ($n.castArray = function () {
                    if (!arguments.length) return [];
                    var e = arguments[0];
                    return Va(e) ? e : [e];
                  }),
                  ($n.chain = fa),
                  ($n.chunk = function (e, t, n) {
                    t = (n ? mo(e, t, n) : t === i) ? 1 : gn(pu(t), 0);
                    var o = null == e ? 0 : e.length;
                    if (!o || t < 1) return [];
                    for (var a = 0, u = 0, l = r(dt(o / t)); a < o; )
                      l[u++] = ei(e, a, (a += t));
                    return l;
                  }),
                  ($n.compact = function (e) {
                    for (
                      var t = -1, n = null == e ? 0 : e.length, r = 0, i = [];
                      ++t < n;

                    ) {
                      var o = e[t];
                      o && (i[r++] = o);
                    }
                    return i;
                  }),
                  ($n.concat = function () {
                    var e = arguments.length;
                    if (!e) return [];
                    for (var t = r(e - 1), n = arguments[0], i = e; i--; )
                      t[i - 1] = arguments[i];
                    return Nt(Va(n) ? Oi(n) : [n], vr(t, 1));
                  }),
                  ($n.cond = function (e) {
                    var t = null == e ? 0 : e.length,
                      n = oo();
                    return (
                      (e = t
                        ? Rt(e, function (e) {
                            if ("function" != typeof e[1]) throw new Ce(o);
                            return [n(e[0]), e[1]];
                          })
                        : []),
                      Kr(function (n) {
                        for (var r = -1; ++r < t; ) {
                          var i = e[r];
                          if (xt(i[0], this, n)) return xt(i[1], this, n);
                        }
                      })
                    );
                  }),
                  ($n.conforms = function (e) {
                    return (function (e) {
                      var t = Iu(e);
                      return function (n) {
                        return ur(n, e, t);
                      };
                    })(ar(e, 1));
                  }),
                  ($n.constant = Ju),
                  ($n.countBy = ha),
                  ($n.create = function (e, t) {
                    var n = Dn(e);
                    return null == t ? n : nr(n, t);
                  }),
                  ($n.curry = function e(t, n, r) {
                    var o = Qi(t, 8, i, i, i, i, i, (n = r ? i : n));
                    return (o.placeholder = e.placeholder), o;
                  }),
                  ($n.curryRight = function e(t, n, r) {
                    var o = Qi(t, 16, i, i, i, i, i, (n = r ? i : n));
                    return (o.placeholder = e.placeholder), o;
                  }),
                  ($n.debounce = Ia),
                  ($n.defaults = xu),
                  ($n.defaultsDeep = Su),
                  ($n.defer = Ra),
                  ($n.delay = Na),
                  ($n.difference = Do),
                  ($n.differenceBy = Uo),
                  ($n.differenceWith = Fo),
                  ($n.drop = function (e, t, n) {
                    var r = null == e ? 0 : e.length;
                    return r
                      ? ei(e, (t = n || t === i ? 1 : pu(t)) < 0 ? 0 : t, r)
                      : [];
                  }),
                  ($n.dropRight = function (e, t, n) {
                    var r = null == e ? 0 : e.length;
                    return r
                      ? ei(
                          e,
                          0,
                          (t = r - (t = n || t === i ? 1 : pu(t))) < 0 ? 0 : t
                        )
                      : [];
                  }),
                  ($n.dropRightWhile = function (e, t) {
                    return e && e.length ? ci(e, oo(t, 3), !0, !0) : [];
                  }),
                  ($n.dropWhile = function (e, t) {
                    return e && e.length ? ci(e, oo(t, 3), !0) : [];
                  }),
                  ($n.fill = function (e, t, n, r) {
                    var o = null == e ? 0 : e.length;
                    return o
                      ? (n &&
                          "number" != typeof n &&
                          mo(e, t, n) &&
                          ((n = 0), (r = o)),
                        (function (e, t, n, r) {
                          var o = e.length;
                          for (
                            (n = pu(n)) < 0 && (n = -n > o ? 0 : o + n),
                              (r = r === i || r > o ? o : pu(r)) < 0 &&
                                (r += o),
                              r = n > r ? 0 : hu(r);
                            n < r;

                          )
                            e[n++] = t;
                          return e;
                        })(e, t, n, r))
                      : [];
                  }),
                  ($n.filter = function (e, t) {
                    return (Va(e) ? Tt : hr)(e, oo(t, 3));
                  }),
                  ($n.flatMap = function (e, t) {
                    return vr(ka(e, t), 1);
                  }),
                  ($n.flatMapDeep = function (e, t) {
                    return vr(ka(e, t), c);
                  }),
                  ($n.flatMapDepth = function (e, t, n) {
                    return (n = n === i ? 1 : pu(n)), vr(ka(e, t), n);
                  }),
                  ($n.flatten = qo),
                  ($n.flattenDeep = function (e) {
                    return null != e && e.length ? vr(e, c) : [];
                  }),
                  ($n.flattenDepth = function (e, t) {
                    return null != e && e.length
                      ? vr(e, (t = t === i ? 1 : pu(t)))
                      : [];
                  }),
                  ($n.flip = function (e) {
                    return Qi(e, 512);
                  }),
                  ($n.flow = el),
                  ($n.flowRight = tl),
                  ($n.fromPairs = function (e) {
                    for (
                      var t = -1, n = null == e ? 0 : e.length, r = {};
                      ++t < n;

                    ) {
                      var i = e[t];
                      r[i[0]] = i[1];
                    }
                    return r;
                  }),
                  ($n.functions = function (e) {
                    return null == e ? [] : wr(e, Iu(e));
                  }),
                  ($n.functionsIn = function (e) {
                    return null == e ? [] : wr(e, Ru(e));
                  }),
                  ($n.groupBy = ba),
                  ($n.initial = function (e) {
                    return null != e && e.length ? ei(e, 0, -1) : [];
                  }),
                  ($n.intersection = Ho),
                  ($n.intersectionBy = Ko),
                  ($n.intersectionWith = Qo),
                  ($n.invert = Cu),
                  ($n.invertBy = Tu),
                  ($n.invokeMap = wa),
                  ($n.iteratee = rl),
                  ($n.keyBy = _a),
                  ($n.keys = Iu),
                  ($n.keysIn = Ru),
                  ($n.map = ka),
                  ($n.mapKeys = function (e, t) {
                    var n = {};
                    return (
                      (t = oo(t, 3)),
                      yr(e, function (e, r, i) {
                        rr(n, t(e, r, i), e);
                      }),
                      n
                    );
                  }),
                  ($n.mapValues = function (e, t) {
                    var n = {};
                    return (
                      (t = oo(t, 3)),
                      yr(e, function (e, r, i) {
                        rr(n, r, t(e, r, i));
                      }),
                      n
                    );
                  }),
                  ($n.matches = function (e) {
                    return Mr(ar(e, 1));
                  }),
                  ($n.matchesProperty = function (e, t) {
                    return $r(e, ar(t, 1));
                  }),
                  ($n.memoize = Aa),
                  ($n.merge = Nu),
                  ($n.mergeWith = Au),
                  ($n.method = il),
                  ($n.methodOf = ol),
                  ($n.mixin = al),
                  ($n.negate = La),
                  ($n.nthArg = function (e) {
                    return (
                      (e = pu(e)),
                      Kr(function (t) {
                        return Ur(t, e);
                      })
                    );
                  }),
                  ($n.omit = Lu),
                  ($n.omitBy = function (e, t) {
                    return ju(e, La(oo(t)));
                  }),
                  ($n.once = function (e) {
                    return Ca(2, e);
                  }),
                  ($n.orderBy = function (e, t, n, r) {
                    return null == e
                      ? []
                      : (Va(t) || (t = null == t ? [] : [t]),
                        Va((n = r ? i : n)) || (n = null == n ? [] : [n]),
                        Fr(e, t, n));
                  }),
                  ($n.over = ll),
                  ($n.overArgs = za),
                  ($n.overEvery = sl),
                  ($n.overSome = cl),
                  ($n.partial = ja),
                  ($n.partialRight = Ma),
                  ($n.partition = xa),
                  ($n.pick = zu),
                  ($n.pickBy = ju),
                  ($n.property = fl),
                  ($n.propertyOf = function (e) {
                    return function (t) {
                      return null == e ? i : _r(e, t);
                    };
                  }),
                  ($n.pull = Yo),
                  ($n.pullAll = Xo),
                  ($n.pullAllBy = function (e, t, n) {
                    return e && e.length && t && t.length
                      ? Vr(e, t, oo(n, 2))
                      : e;
                  }),
                  ($n.pullAllWith = function (e, t, n) {
                    return e && e.length && t && t.length ? Vr(e, t, i, n) : e;
                  }),
                  ($n.pullAt = Zo),
                  ($n.range = dl),
                  ($n.rangeRight = pl),
                  ($n.rearg = $a),
                  ($n.reject = function (e, t) {
                    return (Va(e) ? Tt : hr)(e, La(oo(t, 3)));
                  }),
                  ($n.remove = function (e, t) {
                    var n = [];
                    if (!e || !e.length) return n;
                    var r = -1,
                      i = [],
                      o = e.length;
                    for (t = oo(t, 3); ++r < o; ) {
                      var a = e[r];
                      t(a, r, e) && (n.push(a), i.push(r));
                    }
                    return qr(e, i), n;
                  }),
                  ($n.rest = function (e, t) {
                    if ("function" != typeof e) throw new Ce(o);
                    return Kr(e, (t = t === i ? t : pu(t)));
                  }),
                  ($n.reverse = Jo),
                  ($n.sampleSize = function (e, t, n) {
                    return (
                      (t = (n ? mo(e, t, n) : t === i) ? 1 : pu(t)),
                      (Va(e) ? Yn : Gr)(e, t)
                    );
                  }),
                  ($n.set = function (e, t, n) {
                    return null == e ? e : Yr(e, t, n);
                  }),
                  ($n.setWith = function (e, t, n, r) {
                    return (
                      (r = "function" == typeof r ? r : i),
                      null == e ? e : Yr(e, t, n, r)
                    );
                  }),
                  ($n.shuffle = function (e) {
                    return (Va(e) ? Xn : Jr)(e);
                  }),
                  ($n.slice = function (e, t, n) {
                    var r = null == e ? 0 : e.length;
                    return r
                      ? (n && "number" != typeof n && mo(e, t, n)
                          ? ((t = 0), (n = r))
                          : ((t = null == t ? 0 : pu(t)),
                            (n = n === i ? r : pu(n))),
                        ei(e, t, n))
                      : [];
                  }),
                  ($n.sortBy = Sa),
                  ($n.sortedUniq = function (e) {
                    return e && e.length ? ii(e) : [];
                  }),
                  ($n.sortedUniqBy = function (e, t) {
                    return e && e.length ? ii(e, oo(t, 2)) : [];
                  }),
                  ($n.split = function (e, t, n) {
                    return (
                      n && "number" != typeof n && mo(e, t, n) && (t = n = i),
                      (n = n === i ? p : n >>> 0)
                        ? (e = mu(e)) &&
                          ("string" == typeof t || (null != t && !iu(t))) &&
                          !(t = ai(t)) &&
                          rn(e)
                          ? yi(fn(e), 0, n)
                          : e.split(t, n)
                        : []
                    );
                  }),
                  ($n.spread = function (e, t) {
                    if ("function" != typeof e) throw new Ce(o);
                    return (
                      (t = null == t ? 0 : gn(pu(t), 0)),
                      Kr(function (n) {
                        var r = n[t],
                          i = yi(n, 0, t);
                        return r && Nt(i, r), xt(e, this, i);
                      })
                    );
                  }),
                  ($n.tail = function (e) {
                    var t = null == e ? 0 : e.length;
                    return t ? ei(e, 1, t) : [];
                  }),
                  ($n.take = function (e, t, n) {
                    return e && e.length
                      ? ei(e, 0, (t = n || t === i ? 1 : pu(t)) < 0 ? 0 : t)
                      : [];
                  }),
                  ($n.takeRight = function (e, t, n) {
                    var r = null == e ? 0 : e.length;
                    return r
                      ? ei(
                          e,
                          (t = r - (t = n || t === i ? 1 : pu(t))) < 0 ? 0 : t,
                          r
                        )
                      : [];
                  }),
                  ($n.takeRightWhile = function (e, t) {
                    return e && e.length ? ci(e, oo(t, 3), !1, !0) : [];
                  }),
                  ($n.takeWhile = function (e, t) {
                    return e && e.length ? ci(e, oo(t, 3)) : [];
                  }),
                  ($n.tap = function (e, t) {
                    return t(e), e;
                  }),
                  ($n.throttle = function (e, t, n) {
                    var r = !0,
                      i = !0;
                    if ("function" != typeof e) throw new Ce(o);
                    return (
                      Ja(n) &&
                        ((r = "leading" in n ? !!n.leading : r),
                        (i = "trailing" in n ? !!n.trailing : i)),
                      Ia(e, t, { leading: r, maxWait: t, trailing: i })
                    );
                  }),
                  ($n.thru = da),
                  ($n.toArray = fu),
                  ($n.toPairs = Mu),
                  ($n.toPairsIn = $u),
                  ($n.toPath = function (e) {
                    return Va(e) ? Rt(e, jo) : uu(e) ? [e] : Oi(zo(mu(e)));
                  }),
                  ($n.toPlainObject = gu),
                  ($n.transform = function (e, t, n) {
                    var r = Va(e),
                      i = r || Ka(e) || lu(e);
                    if (((t = oo(t, 4)), null == n)) {
                      var o = e && e.constructor;
                      n = i
                        ? r
                          ? new o()
                          : []
                        : Ja(e) && Ya(o)
                        ? Dn(qe(e))
                        : {};
                    }
                    return (
                      (i ? Et : yr)(e, function (e, r, i) {
                        return t(n, e, r, i);
                      }),
                      n
                    );
                  }),
                  ($n.unary = function (e) {
                    return Oa(e, 1);
                  }),
                  ($n.union = ea),
                  ($n.unionBy = ta),
                  ($n.unionWith = na),
                  ($n.uniq = function (e) {
                    return e && e.length ? ui(e) : [];
                  }),
                  ($n.uniqBy = function (e, t) {
                    return e && e.length ? ui(e, oo(t, 2)) : [];
                  }),
                  ($n.uniqWith = function (e, t) {
                    return (
                      (t = "function" == typeof t ? t : i),
                      e && e.length ? ui(e, i, t) : []
                    );
                  }),
                  ($n.unset = function (e, t) {
                    return null == e || li(e, t);
                  }),
                  ($n.unzip = ra),
                  ($n.unzipWith = ia),
                  ($n.update = function (e, t, n) {
                    return null == e ? e : si(e, t, vi(n));
                  }),
                  ($n.updateWith = function (e, t, n, r) {
                    return (
                      (r = "function" == typeof r ? r : i),
                      null == e ? e : si(e, t, vi(n), r)
                    );
                  }),
                  ($n.values = Du),
                  ($n.valuesIn = function (e) {
                    return null == e ? [] : Yt(e, Ru(e));
                  }),
                  ($n.without = oa),
                  ($n.words = Yu),
                  ($n.wrap = function (e, t) {
                    return ja(vi(t), e);
                  }),
                  ($n.xor = aa),
                  ($n.xorBy = ua),
                  ($n.xorWith = la),
                  ($n.zip = sa),
                  ($n.zipObject = function (e, t) {
                    return pi(e || [], t || [], Jn);
                  }),
                  ($n.zipObjectDeep = function (e, t) {
                    return pi(e || [], t || [], Yr);
                  }),
                  ($n.zipWith = ca),
                  ($n.entries = Mu),
                  ($n.entriesIn = $u),
                  ($n.extend = bu),
                  ($n.extendWith = wu),
                  al($n, $n),
                  ($n.add = ml),
                  ($n.attempt = Xu),
                  ($n.camelCase = Uu),
                  ($n.capitalize = Fu),
                  ($n.ceil = yl),
                  ($n.clamp = function (e, t, n) {
                    return (
                      n === i && ((n = t), (t = i)),
                      n !== i && (n = (n = vu(n)) == n ? n : 0),
                      t !== i && (t = (t = vu(t)) == t ? t : 0),
                      or(vu(e), t, n)
                    );
                  }),
                  ($n.clone = function (e) {
                    return ar(e, 4);
                  }),
                  ($n.cloneDeep = function (e) {
                    return ar(e, 5);
                  }),
                  ($n.cloneDeepWith = function (e, t) {
                    return ar(e, 5, (t = "function" == typeof t ? t : i));
                  }),
                  ($n.cloneWith = function (e, t) {
                    return ar(e, 4, (t = "function" == typeof t ? t : i));
                  }),
                  ($n.conformsTo = function (e, t) {
                    return null == t || ur(e, t, Iu(t));
                  }),
                  ($n.deburr = Bu),
                  ($n.defaultTo = function (e, t) {
                    return null == e || e != e ? t : e;
                  }),
                  ($n.divide = bl),
                  ($n.endsWith = function (e, t, n) {
                    (e = mu(e)), (t = ai(t));
                    var r = e.length,
                      o = (n = n === i ? r : or(pu(n), 0, r));
                    return (n -= t.length) >= 0 && e.slice(n, o) == t;
                  }),
                  ($n.eq = Da),
                  ($n.escape = function (e) {
                    return (e = mu(e)) && Q.test(e) ? e.replace(H, tn) : e;
                  }),
                  ($n.escapeRegExp = function (e) {
                    return (e = mu(e)) && ne.test(e)
                      ? e.replace(te, "\\$&")
                      : e;
                  }),
                  ($n.every = function (e, t, n) {
                    var r = Va(e) ? Ct : dr;
                    return n && mo(e, t, n) && (t = i), r(e, oo(t, 3));
                  }),
                  ($n.find = va),
                  ($n.findIndex = Bo),
                  ($n.findKey = function (e, t) {
                    return Mt(e, oo(t, 3), yr);
                  }),
                  ($n.findLast = ga),
                  ($n.findLastIndex = Vo),
                  ($n.findLastKey = function (e, t) {
                    return Mt(e, oo(t, 3), br);
                  }),
                  ($n.floor = wl),
                  ($n.forEach = ma),
                  ($n.forEachRight = ya),
                  ($n.forIn = function (e, t) {
                    return null == e ? e : gr(e, oo(t, 3), Ru);
                  }),
                  ($n.forInRight = function (e, t) {
                    return null == e ? e : mr(e, oo(t, 3), Ru);
                  }),
                  ($n.forOwn = function (e, t) {
                    return e && yr(e, oo(t, 3));
                  }),
                  ($n.forOwnRight = function (e, t) {
                    return e && br(e, oo(t, 3));
                  }),
                  ($n.get = Eu),
                  ($n.gt = Ua),
                  ($n.gte = Fa),
                  ($n.has = function (e, t) {
                    return null != e && po(e, t, Er);
                  }),
                  ($n.hasIn = Ou),
                  ($n.head = Wo),
                  ($n.identity = nl),
                  ($n.includes = function (e, t, n, r) {
                    (e = Wa(e) ? e : Du(e)), (n = n && !r ? pu(n) : 0);
                    var i = e.length;
                    return (
                      n < 0 && (n = gn(i + n, 0)),
                      au(e)
                        ? n <= i && e.indexOf(t, n) > -1
                        : !!i && Dt(e, t, n) > -1
                    );
                  }),
                  ($n.indexOf = function (e, t, n) {
                    var r = null == e ? 0 : e.length;
                    if (!r) return -1;
                    var i = null == n ? 0 : pu(n);
                    return i < 0 && (i = gn(r + i, 0)), Dt(e, t, i);
                  }),
                  ($n.inRange = function (e, t, n) {
                    return (
                      (t = du(t)),
                      n === i ? ((n = t), (t = 0)) : (n = du(n)),
                      (function (e, t, n) {
                        return e >= mn(t, n) && e < gn(t, n);
                      })((e = vu(e)), t, n)
                    );
                  }),
                  ($n.invoke = Pu),
                  ($n.isArguments = Ba),
                  ($n.isArray = Va),
                  ($n.isArrayBuffer = qa),
                  ($n.isArrayLike = Wa),
                  ($n.isArrayLikeObject = Ha),
                  ($n.isBoolean = function (e) {
                    return !0 === e || !1 === e || (eu(e) && xr(e) == m);
                  }),
                  ($n.isBuffer = Ka),
                  ($n.isDate = Qa),
                  ($n.isElement = function (e) {
                    return eu(e) && 1 === e.nodeType && !ru(e);
                  }),
                  ($n.isEmpty = function (e) {
                    if (null == e) return !0;
                    if (
                      Wa(e) &&
                      (Va(e) ||
                        "string" == typeof e ||
                        "function" == typeof e.splice ||
                        Ka(e) ||
                        lu(e) ||
                        Ba(e))
                    )
                      return !e.length;
                    var t = fo(e);
                    if (t == k || t == C) return !e.size;
                    if (_o(e)) return !Lr(e).length;
                    for (var n in e) if (Ae.call(e, n)) return !1;
                    return !0;
                  }),
                  ($n.isEqual = function (e, t) {
                    return Ir(e, t);
                  }),
                  ($n.isEqualWith = function (e, t, n) {
                    var r = (n = "function" == typeof n ? n : i) ? n(e, t) : i;
                    return r === i ? Ir(e, t, i, n) : !!r;
                  }),
                  ($n.isError = Ga),
                  ($n.isFinite = function (e) {
                    return "number" == typeof e && jt(e);
                  }),
                  ($n.isFunction = Ya),
                  ($n.isInteger = Xa),
                  ($n.isLength = Za),
                  ($n.isMap = tu),
                  ($n.isMatch = function (e, t) {
                    return e === t || Rr(e, t, uo(t));
                  }),
                  ($n.isMatchWith = function (e, t, n) {
                    return (
                      (n = "function" == typeof n ? n : i), Rr(e, t, uo(t), n)
                    );
                  }),
                  ($n.isNaN = function (e) {
                    return nu(e) && e != +e;
                  }),
                  ($n.isNative = function (e) {
                    if (wo(e))
                      throw new _e(
                        "Unsupported core-js use. Try https://npms.io/search?q=ponyfill."
                      );
                    return Nr(e);
                  }),
                  ($n.isNil = function (e) {
                    return null == e;
                  }),
                  ($n.isNull = function (e) {
                    return null === e;
                  }),
                  ($n.isNumber = nu),
                  ($n.isObject = Ja),
                  ($n.isObjectLike = eu),
                  ($n.isPlainObject = ru),
                  ($n.isRegExp = iu),
                  ($n.isSafeInteger = function (e) {
                    return Xa(e) && e >= -9007199254740991 && e <= f;
                  }),
                  ($n.isSet = ou),
                  ($n.isString = au),
                  ($n.isSymbol = uu),
                  ($n.isTypedArray = lu),
                  ($n.isUndefined = function (e) {
                    return e === i;
                  }),
                  ($n.isWeakMap = function (e) {
                    return eu(e) && fo(e) == I;
                  }),
                  ($n.isWeakSet = function (e) {
                    return eu(e) && "[object WeakSet]" == xr(e);
                  }),
                  ($n.join = function (e, t) {
                    return null == e ? "" : qt.call(e, t);
                  }),
                  ($n.kebabCase = Vu),
                  ($n.last = Go),
                  ($n.lastIndexOf = function (e, t, n) {
                    var r = null == e ? 0 : e.length;
                    if (!r) return -1;
                    var o = r;
                    return (
                      n !== i &&
                        (o = (o = pu(n)) < 0 ? gn(r + o, 0) : mn(o, r - 1)),
                      t == t
                        ? (function (e, t, n) {
                            for (var r = n + 1; r--; ) if (e[r] === t) return r;
                            return r;
                          })(e, t, o)
                        : $t(e, Ft, o, !0)
                    );
                  }),
                  ($n.lowerCase = qu),
                  ($n.lowerFirst = Wu),
                  ($n.lt = su),
                  ($n.lte = cu),
                  ($n.max = function (e) {
                    return e && e.length ? pr(e, nl, Sr) : i;
                  }),
                  ($n.maxBy = function (e, t) {
                    return e && e.length ? pr(e, oo(t, 2), Sr) : i;
                  }),
                  ($n.mean = function (e) {
                    return Bt(e, nl);
                  }),
                  ($n.meanBy = function (e, t) {
                    return Bt(e, oo(t, 2));
                  }),
                  ($n.min = function (e) {
                    return e && e.length ? pr(e, nl, zr) : i;
                  }),
                  ($n.minBy = function (e, t) {
                    return e && e.length ? pr(e, oo(t, 2), zr) : i;
                  }),
                  ($n.stubArray = hl),
                  ($n.stubFalse = vl),
                  ($n.stubObject = function () {
                    return {};
                  }),
                  ($n.stubString = function () {
                    return "";
                  }),
                  ($n.stubTrue = function () {
                    return !0;
                  }),
                  ($n.multiply = _l),
                  ($n.nth = function (e, t) {
                    return e && e.length ? Ur(e, pu(t)) : i;
                  }),
                  ($n.noConflict = function () {
                    return ft._ === this && (ft._ = $e), this;
                  }),
                  ($n.noop = ul),
                  ($n.now = Ea),
                  ($n.pad = function (e, t, n) {
                    e = mu(e);
                    var r = (t = pu(t)) ? cn(e) : 0;
                    if (!t || r >= t) return e;
                    var i = (t - r) / 2;
                    return Fi(pt(i), n) + e + Fi(dt(i), n);
                  }),
                  ($n.padEnd = function (e, t, n) {
                    e = mu(e);
                    var r = (t = pu(t)) ? cn(e) : 0;
                    return t && r < t ? e + Fi(t - r, n) : e;
                  }),
                  ($n.padStart = function (e, t, n) {
                    e = mu(e);
                    var r = (t = pu(t)) ? cn(e) : 0;
                    return t && r < t ? Fi(t - r, n) + e : e;
                  }),
                  ($n.parseInt = function (e, t, n) {
                    return (
                      n || null == t ? (t = 0) : t && (t = +t),
                      bn(mu(e).replace(re, ""), t || 0)
                    );
                  }),
                  ($n.random = function (e, t, n) {
                    if (
                      (n && "boolean" != typeof n && mo(e, t, n) && (t = n = i),
                      n === i &&
                        ("boolean" == typeof t
                          ? ((n = t), (t = i))
                          : "boolean" == typeof e && ((n = e), (e = i))),
                      e === i && t === i
                        ? ((e = 0), (t = 1))
                        : ((e = du(e)),
                          t === i ? ((t = e), (e = 0)) : (t = du(t))),
                      e > t)
                    ) {
                      var r = e;
                      (e = t), (t = r);
                    }
                    if (n || e % 1 || t % 1) {
                      var o = wn();
                      return mn(
                        e + o * (t - e + ut("1e-" + ((o + "").length - 1))),
                        t
                      );
                    }
                    return Wr(e, t);
                  }),
                  ($n.reduce = function (e, t, n) {
                    var r = Va(e) ? At : Wt,
                      i = arguments.length < 3;
                    return r(e, oo(t, 4), n, i, cr);
                  }),
                  ($n.reduceRight = function (e, t, n) {
                    var r = Va(e) ? Lt : Wt,
                      i = arguments.length < 3;
                    return r(e, oo(t, 4), n, i, fr);
                  }),
                  ($n.repeat = function (e, t, n) {
                    return (
                      (t = (n ? mo(e, t, n) : t === i) ? 1 : pu(t)),
                      Hr(mu(e), t)
                    );
                  }),
                  ($n.replace = function () {
                    var e = arguments,
                      t = mu(e[0]);
                    return e.length < 3 ? t : t.replace(e[1], e[2]);
                  }),
                  ($n.result = function (e, t, n) {
                    var r = -1,
                      o = (t = gi(t, e)).length;
                    for (o || ((o = 1), (e = i)); ++r < o; ) {
                      var a = null == e ? i : e[jo(t[r])];
                      a === i && ((r = o), (a = n)),
                        (e = Ya(a) ? a.call(e) : a);
                    }
                    return e;
                  }),
                  ($n.round = kl),
                  ($n.runInContext = e),
                  ($n.sample = function (e) {
                    return (Va(e) ? Gn : Qr)(e);
                  }),
                  ($n.size = function (e) {
                    if (null == e) return 0;
                    if (Wa(e)) return au(e) ? cn(e) : e.length;
                    var t = fo(e);
                    return t == k || t == C ? e.size : Lr(e).length;
                  }),
                  ($n.snakeCase = Hu),
                  ($n.some = function (e, t, n) {
                    var r = Va(e) ? zt : ti;
                    return n && mo(e, t, n) && (t = i), r(e, oo(t, 3));
                  }),
                  ($n.sortedIndex = function (e, t) {
                    return ni(e, t);
                  }),
                  ($n.sortedIndexBy = function (e, t, n) {
                    return ri(e, t, oo(n, 2));
                  }),
                  ($n.sortedIndexOf = function (e, t) {
                    var n = null == e ? 0 : e.length;
                    if (n) {
                      var r = ni(e, t);
                      if (r < n && Da(e[r], t)) return r;
                    }
                    return -1;
                  }),
                  ($n.sortedLastIndex = function (e, t) {
                    return ni(e, t, !0);
                  }),
                  ($n.sortedLastIndexBy = function (e, t, n) {
                    return ri(e, t, oo(n, 2), !0);
                  }),
                  ($n.sortedLastIndexOf = function (e, t) {
                    if (null != e && e.length) {
                      var n = ni(e, t, !0) - 1;
                      if (Da(e[n], t)) return n;
                    }
                    return -1;
                  }),
                  ($n.startCase = Ku),
                  ($n.startsWith = function (e, t, n) {
                    return (
                      (e = mu(e)),
                      (n = null == n ? 0 : or(pu(n), 0, e.length)),
                      (t = ai(t)),
                      e.slice(n, n + t.length) == t
                    );
                  }),
                  ($n.subtract = xl),
                  ($n.sum = function (e) {
                    return e && e.length ? Ht(e, nl) : 0;
                  }),
                  ($n.sumBy = function (e, t) {
                    return e && e.length ? Ht(e, oo(t, 2)) : 0;
                  }),
                  ($n.template = function (e, t, n) {
                    var r = $n.templateSettings;
                    n && mo(e, t, n) && (t = i),
                      (e = mu(e)),
                      (t = wu({}, t, r, Gi));
                    var o,
                      a,
                      u = wu({}, t.imports, r.imports, Gi),
                      l = Iu(u),
                      s = Yt(u, l),
                      c = 0,
                      f = t.interpolate || be,
                      d = "__p += '",
                      p = Ee(
                        (t.escape || be).source +
                          "|" +
                          f.source +
                          "|" +
                          (f === X ? fe : be).source +
                          "|" +
                          (t.evaluate || be).source +
                          "|$",
                        "g"
                      ),
                      h =
                        "//# sourceURL=" +
                        (Ae.call(t, "sourceURL")
                          ? (t.sourceURL + "").replace(/\s/g, " ")
                          : "lodash.templateSources[" + ++rt + "]") +
                        "\n";
                    e.replace(p, function (t, n, r, i, u, l) {
                      return (
                        r || (r = i),
                        (d += e.slice(c, l).replace(we, nn)),
                        n && ((o = !0), (d += "' +\n__e(" + n + ") +\n'")),
                        u && ((a = !0), (d += "';\n" + u + ";\n__p += '")),
                        r &&
                          (d +=
                            "' +\n((__t = (" +
                            r +
                            ")) == null ? '' : __t) +\n'"),
                        (c = l + t.length),
                        t
                      );
                    }),
                      (d += "';\n");
                    var v = Ae.call(t, "variable") && t.variable;
                    if (v) {
                      if (se.test(v))
                        throw new _e(
                          "Invalid `variable` option passed into `_.template`"
                        );
                    } else d = "with (obj) {\n" + d + "\n}\n";
                    (d = (a ? d.replace(B, "") : d)
                      .replace(V, "$1")
                      .replace(q, "$1;")),
                      (d =
                        "function(" +
                        (v || "obj") +
                        ") {\n" +
                        (v ? "" : "obj || (obj = {});\n") +
                        "var __t, __p = ''" +
                        (o ? ", __e = _.escape" : "") +
                        (a
                          ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n"
                          : ";\n") +
                        d +
                        "return __p\n}");
                    var g = Xu(function () {
                      return ke(l, h + "return " + d).apply(i, s);
                    });
                    if (((g.source = d), Ga(g))) throw g;
                    return g;
                  }),
                  ($n.times = function (e, t) {
                    if ((e = pu(e)) < 1 || e > f) return [];
                    var n = p,
                      r = mn(e, p);
                    (t = oo(t)), (e -= p);
                    for (var i = Kt(r, t); ++n < e; ) t(n);
                    return i;
                  }),
                  ($n.toFinite = du),
                  ($n.toInteger = pu),
                  ($n.toLength = hu),
                  ($n.toLower = function (e) {
                    return mu(e).toLowerCase();
                  }),
                  ($n.toNumber = vu),
                  ($n.toSafeInteger = function (e) {
                    return e
                      ? or(pu(e), -9007199254740991, f)
                      : 0 === e
                      ? e
                      : 0;
                  }),
                  ($n.toString = mu),
                  ($n.toUpper = function (e) {
                    return mu(e).toUpperCase();
                  }),
                  ($n.trim = function (e, t, n) {
                    if ((e = mu(e)) && (n || t === i)) return Qt(e);
                    if (!e || !(t = ai(t))) return e;
                    var r = fn(e),
                      o = fn(t);
                    return yi(r, Zt(r, o), Jt(r, o) + 1).join("");
                  }),
                  ($n.trimEnd = function (e, t, n) {
                    if ((e = mu(e)) && (n || t === i))
                      return e.slice(0, dn(e) + 1);
                    if (!e || !(t = ai(t))) return e;
                    var r = fn(e);
                    return yi(r, 0, Jt(r, fn(t)) + 1).join("");
                  }),
                  ($n.trimStart = function (e, t, n) {
                    if ((e = mu(e)) && (n || t === i)) return e.replace(re, "");
                    if (!e || !(t = ai(t))) return e;
                    var r = fn(e);
                    return yi(r, Zt(r, fn(t))).join("");
                  }),
                  ($n.truncate = function (e, t) {
                    var n = 30,
                      r = "...";
                    if (Ja(t)) {
                      var o = "separator" in t ? t.separator : o;
                      (n = "length" in t ? pu(t.length) : n),
                        (r = "omission" in t ? ai(t.omission) : r);
                    }
                    var a = (e = mu(e)).length;
                    if (rn(e)) {
                      var u = fn(e);
                      a = u.length;
                    }
                    if (n >= a) return e;
                    var l = n - cn(r);
                    if (l < 1) return r;
                    var s = u ? yi(u, 0, l).join("") : e.slice(0, l);
                    if (o === i) return s + r;
                    if ((u && (l += s.length - l), iu(o))) {
                      if (e.slice(l).search(o)) {
                        var c,
                          f = s;
                        for (
                          o.global || (o = Ee(o.source, mu(de.exec(o)) + "g")),
                            o.lastIndex = 0;
                          (c = o.exec(f));

                        )
                          var d = c.index;
                        s = s.slice(0, d === i ? l : d);
                      }
                    } else if (e.indexOf(ai(o), l) != l) {
                      var p = s.lastIndexOf(o);
                      p > -1 && (s = s.slice(0, p));
                    }
                    return s + r;
                  }),
                  ($n.unescape = function (e) {
                    return (e = mu(e)) && K.test(e) ? e.replace(W, pn) : e;
                  }),
                  ($n.uniqueId = function (e) {
                    var t = ++Le;
                    return mu(e) + t;
                  }),
                  ($n.upperCase = Qu),
                  ($n.upperFirst = Gu),
                  ($n.each = ma),
                  ($n.eachRight = ya),
                  ($n.first = Wo),
                  al(
                    $n,
                    ((gl = {}),
                    yr($n, function (e, t) {
                      Ae.call($n.prototype, t) || (gl[t] = e);
                    }),
                    gl),
                    { chain: !1 }
                  ),
                  ($n.VERSION = "4.17.21"),
                  Et(
                    [
                      "bind",
                      "bindKey",
                      "curry",
                      "curryRight",
                      "partial",
                      "partialRight",
                    ],
                    function (e) {
                      $n[e].placeholder = $n;
                    }
                  ),
                  Et(["drop", "take"], function (e, t) {
                    (Bn.prototype[e] = function (n) {
                      n = n === i ? 1 : gn(pu(n), 0);
                      var r =
                        this.__filtered__ && !t ? new Bn(this) : this.clone();
                      return (
                        r.__filtered__
                          ? (r.__takeCount__ = mn(n, r.__takeCount__))
                          : r.__views__.push({
                              size: mn(n, p),
                              type: e + (r.__dir__ < 0 ? "Right" : ""),
                            }),
                        r
                      );
                    }),
                      (Bn.prototype[e + "Right"] = function (t) {
                        return this.reverse()[e](t).reverse();
                      });
                  }),
                  Et(["filter", "map", "takeWhile"], function (e, t) {
                    var n = t + 1,
                      r = 1 == n || 3 == n;
                    Bn.prototype[e] = function (e) {
                      var t = this.clone();
                      return (
                        t.__iteratees__.push({ iteratee: oo(e, 3), type: n }),
                        (t.__filtered__ = t.__filtered__ || r),
                        t
                      );
                    };
                  }),
                  Et(["head", "last"], function (e, t) {
                    var n = "take" + (t ? "Right" : "");
                    Bn.prototype[e] = function () {
                      return this[n](1).value()[0];
                    };
                  }),
                  Et(["initial", "tail"], function (e, t) {
                    var n = "drop" + (t ? "" : "Right");
                    Bn.prototype[e] = function () {
                      return this.__filtered__ ? new Bn(this) : this[n](1);
                    };
                  }),
                  (Bn.prototype.compact = function () {
                    return this.filter(nl);
                  }),
                  (Bn.prototype.find = function (e) {
                    return this.filter(e).head();
                  }),
                  (Bn.prototype.findLast = function (e) {
                    return this.reverse().find(e);
                  }),
                  (Bn.prototype.invokeMap = Kr(function (e, t) {
                    return "function" == typeof e
                      ? new Bn(this)
                      : this.map(function (n) {
                          return Tr(n, e, t);
                        });
                  })),
                  (Bn.prototype.reject = function (e) {
                    return this.filter(La(oo(e)));
                  }),
                  (Bn.prototype.slice = function (e, t) {
                    e = pu(e);
                    var n = this;
                    return n.__filtered__ && (e > 0 || t < 0)
                      ? new Bn(n)
                      : (e < 0 ? (n = n.takeRight(-e)) : e && (n = n.drop(e)),
                        t !== i &&
                          (n =
                            (t = pu(t)) < 0 ? n.dropRight(-t) : n.take(t - e)),
                        n);
                  }),
                  (Bn.prototype.takeRightWhile = function (e) {
                    return this.reverse().takeWhile(e).reverse();
                  }),
                  (Bn.prototype.toArray = function () {
                    return this.take(p);
                  }),
                  yr(Bn.prototype, function (e, t) {
                    var n = /^(?:filter|find|map|reject)|While$/.test(t),
                      r = /^(?:head|last)$/.test(t),
                      o = $n[r ? "take" + ("last" == t ? "Right" : "") : t],
                      a = r || /^find/.test(t);
                    o &&
                      ($n.prototype[t] = function () {
                        var t = this.__wrapped__,
                          u = r ? [1] : arguments,
                          l = t instanceof Bn,
                          s = u[0],
                          c = l || Va(t),
                          f = function (e) {
                            var t = o.apply($n, Nt([e], u));
                            return r && d ? t[0] : t;
                          };
                        c &&
                          n &&
                          "function" == typeof s &&
                          1 != s.length &&
                          (l = c = !1);
                        var d = this.__chain__,
                          p = !!this.__actions__.length,
                          h = a && !d,
                          v = l && !p;
                        if (!a && c) {
                          t = v ? t : new Bn(this);
                          var g = e.apply(t, u);
                          return (
                            g.__actions__.push({
                              func: da,
                              args: [f],
                              thisArg: i,
                            }),
                            new Fn(g, d)
                          );
                        }
                        return h && v
                          ? e.apply(this, u)
                          : ((g = this.thru(f)),
                            h ? (r ? g.value()[0] : g.value()) : g);
                      });
                  }),
                  Et(
                    ["pop", "push", "shift", "sort", "splice", "unshift"],
                    function (e) {
                      var t = Te[e],
                        n = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru",
                        r = /^(?:pop|shift)$/.test(e);
                      $n.prototype[e] = function () {
                        var e = arguments;
                        if (r && !this.__chain__) {
                          var i = this.value();
                          return t.apply(Va(i) ? i : [], e);
                        }
                        return this[n](function (n) {
                          return t.apply(Va(n) ? n : [], e);
                        });
                      };
                    }
                  ),
                  yr(Bn.prototype, function (e, t) {
                    var n = $n[t];
                    if (n) {
                      var r = n.name + "";
                      Ae.call(Pn, r) || (Pn[r] = []),
                        Pn[r].push({ name: t, func: n });
                    }
                  }),
                  (Pn[Mi(i, 2).name] = [{ name: "wrapper", func: i }]),
                  (Bn.prototype.clone = function () {
                    var e = new Bn(this.__wrapped__);
                    return (
                      (e.__actions__ = Oi(this.__actions__)),
                      (e.__dir__ = this.__dir__),
                      (e.__filtered__ = this.__filtered__),
                      (e.__iteratees__ = Oi(this.__iteratees__)),
                      (e.__takeCount__ = this.__takeCount__),
                      (e.__views__ = Oi(this.__views__)),
                      e
                    );
                  }),
                  (Bn.prototype.reverse = function () {
                    if (this.__filtered__) {
                      var e = new Bn(this);
                      (e.__dir__ = -1), (e.__filtered__ = !0);
                    } else (e = this.clone()).__dir__ *= -1;
                    return e;
                  }),
                  (Bn.prototype.value = function () {
                    var e = this.__wrapped__.value(),
                      t = this.__dir__,
                      n = Va(e),
                      r = t < 0,
                      i = n ? e.length : 0,
                      o = (function (e, t, n) {
                        for (var r = -1, i = n.length; ++r < i; ) {
                          var o = n[r],
                            a = o.size;
                          switch (o.type) {
                            case "drop":
                              e += a;
                              break;
                            case "dropRight":
                              t -= a;
                              break;
                            case "take":
                              t = mn(t, e + a);
                              break;
                            case "takeRight":
                              e = gn(e, t - a);
                          }
                        }
                        return { start: e, end: t };
                      })(0, i, this.__views__),
                      a = o.start,
                      u = o.end,
                      l = u - a,
                      s = r ? u : a - 1,
                      c = this.__iteratees__,
                      f = c.length,
                      d = 0,
                      p = mn(l, this.__takeCount__);
                    if (!n || (!r && i == l && p == l))
                      return fi(e, this.__actions__);
                    var h = [];
                    e: for (; l-- && d < p; ) {
                      for (var v = -1, g = e[(s += t)]; ++v < f; ) {
                        var m = c[v],
                          y = m.iteratee,
                          b = m.type,
                          w = y(g);
                        if (2 == b) g = w;
                        else if (!w) {
                          if (1 == b) continue e;
                          break e;
                        }
                      }
                      h[d++] = g;
                    }
                    return h;
                  }),
                  ($n.prototype.at = pa),
                  ($n.prototype.chain = function () {
                    return fa(this);
                  }),
                  ($n.prototype.commit = function () {
                    return new Fn(this.value(), this.__chain__);
                  }),
                  ($n.prototype.next = function () {
                    this.__values__ === i &&
                      (this.__values__ = fu(this.value()));
                    var e = this.__index__ >= this.__values__.length;
                    return {
                      done: e,
                      value: e ? i : this.__values__[this.__index__++],
                    };
                  }),
                  ($n.prototype.plant = function (e) {
                    for (var t, n = this; n instanceof Un; ) {
                      var r = $o(n);
                      (r.__index__ = 0),
                        (r.__values__ = i),
                        t ? (o.__wrapped__ = r) : (t = r);
                      var o = r;
                      n = n.__wrapped__;
                    }
                    return (o.__wrapped__ = e), t;
                  }),
                  ($n.prototype.reverse = function () {
                    var e = this.__wrapped__;
                    if (e instanceof Bn) {
                      var t = e;
                      return (
                        this.__actions__.length && (t = new Bn(this)),
                        (t = t.reverse()).__actions__.push({
                          func: da,
                          args: [Jo],
                          thisArg: i,
                        }),
                        new Fn(t, this.__chain__)
                      );
                    }
                    return this.thru(Jo);
                  }),
                  ($n.prototype.toJSON =
                    $n.prototype.valueOf =
                    $n.prototype.value =
                      function () {
                        return fi(this.__wrapped__, this.__actions__);
                      }),
                  ($n.prototype.first = $n.prototype.head),
                  Ge &&
                    ($n.prototype[Ge] = function () {
                      return this;
                    }),
                  $n
                );
              })();
            (ft._ = hn),
              (r = function () {
                return hn;
              }.call(t, n, t, e)) === i || (e.exports = r);
          }.call(this);
      },
      7418: (e) => {
        "use strict";
        var t = Object.getOwnPropertySymbols,
          n = Object.prototype.hasOwnProperty,
          r = Object.prototype.propertyIsEnumerable;
        e.exports = (function () {
          try {
            if (!Object.assign) return !1;
            var e = new String("abc");
            if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0]))
              return !1;
            for (var t = {}, n = 0; n < 10; n++)
              t["_" + String.fromCharCode(n)] = n;
            if (
              "0123456789" !==
              Object.getOwnPropertyNames(t)
                .map(function (e) {
                  return t[e];
                })
                .join("")
            )
              return !1;
            var r = {};
            return (
              "abcdefghijklmnopqrst".split("").forEach(function (e) {
                r[e] = e;
              }),
              "abcdefghijklmnopqrst" ===
                Object.keys(Object.assign({}, r)).join("")
            );
          } catch (e) {
            return !1;
          }
        })()
          ? Object.assign
          : function (e, i) {
              for (
                var o,
                  a,
                  u = (function (e) {
                    if (null == e)
                      throw new TypeError(
                        "Object.assign cannot be called with null or undefined"
                      );
                    return Object(e);
                  })(e),
                  l = 1;
                l < arguments.length;
                l++
              ) {
                for (var s in (o = Object(arguments[l])))
                  n.call(o, s) && (u[s] = o[s]);
                if (t) {
                  a = t(o);
                  for (var c = 0; c < a.length; c++)
                    r.call(o, a[c]) && (u[a[c]] = o[a[c]]);
                }
              }
              return u;
            };
      },
      4448: (e, t, n) => {
        "use strict";
        var r = n(7294),
          i = n(7418),
          o = n(3840);
        function a(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        if (!r) throw Error(a(227));
        var u = new Set(),
          l = {};
        function s(e, t) {
          c(e, t), c(e + "Capture", t);
        }
        function c(e, t) {
          for (l[e] = t, e = 0; e < t.length; e++) u.add(t[e]);
        }
        var f = !(
            "undefined" == typeof window ||
            void 0 === window.document ||
            void 0 === window.document.createElement
          ),
          d =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = Object.prototype.hasOwnProperty,
          h = {},
          v = {};
        function g(e, t, n, r, i, o, a) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = i),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = o),
            (this.removeEmptyString = a);
        }
        var m = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            m[e] = new g(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            m[t] = new g(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              m[e] = new g(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            m[e] = new g(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              m[e] = new g(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            m[e] = new g(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            m[e] = new g(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            m[e] = new g(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            m[e] = new g(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var y = /[\-:]([a-z])/g;
        function b(e) {
          return e[1].toUpperCase();
        }
        function w(e, t, n, r) {
          var i = m.hasOwnProperty(t) ? m[t] : null;
          (null !== i
            ? 0 === i.type
            : !r &&
              2 < t.length &&
              ("o" === t[0] || "O" === t[0]) &&
              ("n" === t[1] || "N" === t[1])) ||
            ((function (e, t, n, r) {
              if (
                null == t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, i, r) && (n = null),
            r || null === i
              ? (function (e) {
                  return (
                    !!p.call(v, e) ||
                    (!p.call(h, e) &&
                      (d.test(e) ? (v[e] = !0) : ((h[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : i.mustUseProperty
              ? (e[i.propertyName] = null === n ? 3 !== i.type && "" : n)
              : ((t = i.attributeName),
                (r = i.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (i = i.type) || (4 === i && !0 === n)
                        ? ""
                        : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(y, b);
            m[t] = new g(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(y, b);
              m[t] = new g(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(y, b);
            m[t] = new g(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            m[e] = new g(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (m.xlinkHref = new g(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            m[e] = new g(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var _ = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          k = 60103,
          x = 60106,
          S = 60107,
          E = 60108,
          O = 60114,
          C = 60109,
          T = 60110,
          P = 60112,
          I = 60113,
          R = 60120,
          N = 60115,
          A = 60116,
          L = 60121,
          z = 60128,
          j = 60129,
          M = 60130,
          $ = 60131;
        if ("function" == typeof Symbol && Symbol.for) {
          var D = Symbol.for;
          (k = D("react.element")),
            (x = D("react.portal")),
            (S = D("react.fragment")),
            (E = D("react.strict_mode")),
            (O = D("react.profiler")),
            (C = D("react.provider")),
            (T = D("react.context")),
            (P = D("react.forward_ref")),
            (I = D("react.suspense")),
            (R = D("react.suspense_list")),
            (N = D("react.memo")),
            (A = D("react.lazy")),
            (L = D("react.block")),
            D("react.scope"),
            (z = D("react.opaque.id")),
            (j = D("react.debug_trace_mode")),
            (M = D("react.offscreen")),
            ($ = D("react.legacy_hidden"));
        }
        var U,
          F = "function" == typeof Symbol && Symbol.iterator;
        function B(e) {
          return null === e || "object" != typeof e
            ? null
            : "function" == typeof (e = (F && e[F]) || e["@@iterator"])
            ? e
            : null;
        }
        function V(e) {
          if (void 0 === U)
            try {
              throw Error();
            } catch (e) {
              var t = e.stack.trim().match(/\n( *(at )?)/);
              U = (t && t[1]) || "";
            }
          return "\n" + U + e;
        }
        var q = !1;
        function W(e, t) {
          if (!e || q) return "";
          q = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" == typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (e) {
                  var r = e;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (e) {
                  r = e;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (e) {
                r = e;
              }
              e();
            }
          } catch (e) {
            if (e && r && "string" == typeof e.stack) {
              for (
                var i = e.stack.split("\n"),
                  o = r.stack.split("\n"),
                  a = i.length - 1,
                  u = o.length - 1;
                1 <= a && 0 <= u && i[a] !== o[u];

              )
                u--;
              for (; 1 <= a && 0 <= u; a--, u--)
                if (i[a] !== o[u]) {
                  if (1 !== a || 1 !== u)
                    do {
                      if ((a--, 0 > --u || i[a] !== o[u]))
                        return "\n" + i[a].replace(" at new ", " at ");
                    } while (1 <= a && 0 <= u);
                  break;
                }
            }
          } finally {
            (q = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? V(e) : "";
        }
        function H(e) {
          switch (e.tag) {
            case 5:
              return V(e.type);
            case 16:
              return V("Lazy");
            case 13:
              return V("Suspense");
            case 19:
              return V("SuspenseList");
            case 0:
            case 2:
            case 15:
              return W(e.type, !1);
            case 11:
              return W(e.type.render, !1);
            case 22:
              return W(e.type._render, !1);
            case 1:
              return W(e.type, !0);
            default:
              return "";
          }
        }
        function K(e) {
          if (null == e) return null;
          if ("function" == typeof e) return e.displayName || e.name || null;
          if ("string" == typeof e) return e;
          switch (e) {
            case S:
              return "Fragment";
            case x:
              return "Portal";
            case O:
              return "Profiler";
            case E:
              return "StrictMode";
            case I:
              return "Suspense";
            case R:
              return "SuspenseList";
          }
          if ("object" == typeof e)
            switch (e.$$typeof) {
              case T:
                return (e.displayName || "Context") + ".Consumer";
              case C:
                return (e._context.displayName || "Context") + ".Provider";
              case P:
                var t = e.render;
                return (
                  (t = t.displayName || t.name || ""),
                  e.displayName ||
                    ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef")
                );
              case N:
                return K(e.type);
              case L:
                return K(e._render);
              case A:
                (t = e._payload), (e = e._init);
                try {
                  return K(e(t));
                } catch (e) {}
            }
          return null;
        }
        function Q(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "object":
            case "string":
            case "undefined":
              return e;
            default:
              return "";
          }
        }
        function G(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function Y(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = G(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                void 0 !== n &&
                "function" == typeof n.get &&
                "function" == typeof n.set
              ) {
                var i = n.get,
                  o = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return i.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), o.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function X(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = G(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function Z(e) {
          if (
            void 0 ===
            (e = e || ("undefined" != typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function J(e, t) {
          var n = t.checked;
          return i({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function ee(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = Q(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function te(e, t) {
          null != (t = t.checked) && w(e, "checked", t, !1);
        }
        function ne(e, t) {
          te(e, t);
          var n = Q(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ie(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ie(e, t.type, Q(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function re(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function ie(e, t, n) {
          ("number" === t && Z(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        function oe(e, t) {
          return (
            (e = i({ children: void 0 }, t)),
            (t = (function (e) {
              var t = "";
              return (
                r.Children.forEach(e, function (e) {
                  null != e && (t += e);
                }),
                t
              );
            })(t.children)) && (e.children = t),
            e
          );
        }
        function ae(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
            for (n = 0; n < e.length; n++)
              (i = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== i && (e[n].selected = i),
                i && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + Q(n), t = null, i = 0; i < e.length; i++) {
              if (e[i].value === n)
                return (
                  (e[i].selected = !0), void (r && (e[i].defaultSelected = !0))
                );
              null !== t || e[i].disabled || (t = e[i]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function ue(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(a(91));
          return i({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function le(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(a(92));
              if (Array.isArray(n)) {
                if (!(1 >= n.length)) throw Error(a(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: Q(n) };
        }
        function se(e, t) {
          var n = Q(t.value),
            r = Q(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function ce(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        var fe = {
          html: "http://www.w3.org/1999/xhtml",
          mathml: "http://www.w3.org/1998/Math/MathML",
          svg: "http://www.w3.org/2000/svg",
        };
        function de(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function pe(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? de(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var he,
          ve,
          ge =
            ((ve = function (e, t) {
              if (e.namespaceURI !== fe.svg || "innerHTML" in e)
                e.innerHTML = t;
              else {
                for (
                  (he = he || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = he.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ve(e, t);
                  });
                }
              : ve);
        function me(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var ye = {
            animationIterationCount: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          be = ["Webkit", "ms", "Moz", "O"];
        function we(e, t, n) {
          return null == t || "boolean" == typeof t || "" === t
            ? ""
            : n ||
              "number" != typeof t ||
              0 === t ||
              (ye.hasOwnProperty(e) && ye[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function _e(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                i = we(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, i) : (e[n] = i);
            }
        }
        Object.keys(ye).forEach(function (e) {
          be.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (ye[t] = ye[e]);
          });
        });
        var ke = i(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function xe(e, t) {
          if (t) {
            if (
              ke[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(a(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(a(60));
              if (
                "object" != typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(a(61));
            }
            if (null != t.style && "object" != typeof t.style)
              throw Error(a(62));
          }
        }
        function Se(e, t) {
          if (-1 === e.indexOf("-")) return "string" == typeof t.is;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        function Ee(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var Oe = null,
          Ce = null,
          Te = null;
        function Pe(e) {
          if ((e = ni(e))) {
            if ("function" != typeof Oe) throw Error(a(280));
            var t = e.stateNode;
            t && ((t = ii(t)), Oe(e.stateNode, e.type, t));
          }
        }
        function Ie(e) {
          Ce ? (Te ? Te.push(e) : (Te = [e])) : (Ce = e);
        }
        function Re() {
          if (Ce) {
            var e = Ce,
              t = Te;
            if (((Te = Ce = null), Pe(e), t))
              for (e = 0; e < t.length; e++) Pe(t[e]);
          }
        }
        function Ne(e, t) {
          return e(t);
        }
        function Ae(e, t, n, r, i) {
          return e(t, n, r, i);
        }
        function Le() {}
        var ze = Ne,
          je = !1,
          Me = !1;
        function $e() {
          (null === Ce && null === Te) || (Le(), Re());
        }
        function De(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = ii(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" != typeof n) throw Error(a(231, t, typeof n));
          return n;
        }
        var Ue = !1;
        if (f)
          try {
            var Fe = {};
            Object.defineProperty(Fe, "passive", {
              get: function () {
                Ue = !0;
              },
            }),
              window.addEventListener("test", Fe, Fe),
              window.removeEventListener("test", Fe, Fe);
          } catch (ve) {
            Ue = !1;
          }
        function Be(e, t, n, r, i, o, a, u, l) {
          var s = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, s);
          } catch (e) {
            this.onError(e);
          }
        }
        var Ve = !1,
          qe = null,
          We = !1,
          He = null,
          Ke = {
            onError: function (e) {
              (Ve = !0), (qe = e);
            },
          };
        function Qe(e, t, n, r, i, o, a, u, l) {
          (Ve = !1), (qe = null), Be.apply(Ke, arguments);
        }
        function Ge(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 != (1026 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function Ye(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function Xe(e) {
          if (Ge(e) !== e) throw Error(a(188));
        }
        function Ze(e) {
          if (
            ((e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = Ge(e))) throw Error(a(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var i = n.return;
                if (null === i) break;
                var o = i.alternate;
                if (null === o) {
                  if (null !== (r = i.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (i.child === o.child) {
                  for (o = i.child; o; ) {
                    if (o === n) return Xe(i), e;
                    if (o === r) return Xe(i), t;
                    o = o.sibling;
                  }
                  throw Error(a(188));
                }
                if (n.return !== r.return) (n = i), (r = o);
                else {
                  for (var u = !1, l = i.child; l; ) {
                    if (l === n) {
                      (u = !0), (n = i), (r = o);
                      break;
                    }
                    if (l === r) {
                      (u = !0), (r = i), (n = o);
                      break;
                    }
                    l = l.sibling;
                  }
                  if (!u) {
                    for (l = o.child; l; ) {
                      if (l === n) {
                        (u = !0), (n = o), (r = i);
                        break;
                      }
                      if (l === r) {
                        (u = !0), (r = o), (n = i);
                        break;
                      }
                      l = l.sibling;
                    }
                    if (!u) throw Error(a(189));
                  }
                }
                if (n.alternate !== r) throw Error(a(190));
              }
              if (3 !== n.tag) throw Error(a(188));
              return n.stateNode.current === n ? e : t;
            })(e)),
            !e)
          )
            return null;
          for (var t = e; ; ) {
            if (5 === t.tag || 6 === t.tag) return t;
            if (t.child) (t.child.return = t), (t = t.child);
            else {
              if (t === e) break;
              for (; !t.sibling; ) {
                if (!t.return || t.return === e) return null;
                t = t.return;
              }
              (t.sibling.return = t.return), (t = t.sibling);
            }
          }
          return null;
        }
        function Je(e, t) {
          for (var n = e.alternate; null !== t; ) {
            if (t === e || t === n) return !0;
            t = t.return;
          }
          return !1;
        }
        var et,
          tt,
          nt,
          rt,
          it = !1,
          ot = [],
          at = null,
          ut = null,
          lt = null,
          st = new Map(),
          ct = new Map(),
          ft = [],
          dt =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function pt(e, t, n, r, i) {
          return {
            blockedOn: e,
            domEventName: t,
            eventSystemFlags: 16 | n,
            nativeEvent: i,
            targetContainers: [r],
          };
        }
        function ht(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              at = null;
              break;
            case "dragenter":
            case "dragleave":
              ut = null;
              break;
            case "mouseover":
            case "mouseout":
              lt = null;
              break;
            case "pointerover":
            case "pointerout":
              st.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              ct.delete(t.pointerId);
          }
        }
        function vt(e, t, n, r, i, o) {
          return null === e || e.nativeEvent !== o
            ? ((e = pt(t, n, r, i, o)),
              null !== t && null !== (t = ni(t)) && tt(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== i && -1 === t.indexOf(i) && t.push(i),
              e);
        }
        function gt(e) {
          var t = ti(e.target);
          if (null !== t) {
            var n = Ge(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = Ye(n)))
                  return (
                    (e.blockedOn = t),
                    void rt(e.lanePriority, function () {
                      o.unstable_runWithPriority(e.priority, function () {
                        nt(n);
                      });
                    })
                  );
              } else if (3 === t && n.stateNode.hydrate)
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function mt(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Zt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = ni(n)) && tt(t), (e.blockedOn = n), !1;
            t.shift();
          }
          return !0;
        }
        function yt(e, t, n) {
          mt(e) && n.delete(t);
        }
        function bt() {
          for (it = !1; 0 < ot.length; ) {
            var e = ot[0];
            if (null !== e.blockedOn) {
              null !== (e = ni(e.blockedOn)) && et(e);
              break;
            }
            for (var t = e.targetContainers; 0 < t.length; ) {
              var n = Zt(
                e.domEventName,
                e.eventSystemFlags,
                t[0],
                e.nativeEvent
              );
              if (null !== n) {
                e.blockedOn = n;
                break;
              }
              t.shift();
            }
            null === e.blockedOn && ot.shift();
          }
          null !== at && mt(at) && (at = null),
            null !== ut && mt(ut) && (ut = null),
            null !== lt && mt(lt) && (lt = null),
            st.forEach(yt),
            ct.forEach(yt);
        }
        function wt(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            it ||
              ((it = !0),
              o.unstable_scheduleCallback(o.unstable_NormalPriority, bt)));
        }
        function _t(e) {
          function t(t) {
            return wt(t, e);
          }
          if (0 < ot.length) {
            wt(ot[0], e);
            for (var n = 1; n < ot.length; n++) {
              var r = ot[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== at && wt(at, e),
              null !== ut && wt(ut, e),
              null !== lt && wt(lt, e),
              st.forEach(t),
              ct.forEach(t),
              n = 0;
            n < ft.length;
            n++
          )
            (r = ft[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < ft.length && null === (n = ft[0]).blockedOn; )
            gt(n), null === n.blockedOn && ft.shift();
        }
        function kt(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var xt = {
            animationend: kt("Animation", "AnimationEnd"),
            animationiteration: kt("Animation", "AnimationIteration"),
            animationstart: kt("Animation", "AnimationStart"),
            transitionend: kt("Transition", "TransitionEnd"),
          },
          St = {},
          Et = {};
        function Ot(e) {
          if (St[e]) return St[e];
          if (!xt[e]) return e;
          var t,
            n = xt[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in Et) return (St[e] = n[t]);
          return e;
        }
        f &&
          ((Et = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete xt.animationend.animation,
            delete xt.animationiteration.animation,
            delete xt.animationstart.animation),
          "TransitionEvent" in window || delete xt.transitionend.transition);
        var Ct = Ot("animationend"),
          Tt = Ot("animationiteration"),
          Pt = Ot("animationstart"),
          It = Ot("transitionend"),
          Rt = new Map(),
          Nt = new Map(),
          At = [
            "abort",
            "abort",
            Ct,
            "animationEnd",
            Tt,
            "animationIteration",
            Pt,
            "animationStart",
            "canplay",
            "canPlay",
            "canplaythrough",
            "canPlayThrough",
            "durationchange",
            "durationChange",
            "emptied",
            "emptied",
            "encrypted",
            "encrypted",
            "ended",
            "ended",
            "error",
            "error",
            "gotpointercapture",
            "gotPointerCapture",
            "load",
            "load",
            "loadeddata",
            "loadedData",
            "loadedmetadata",
            "loadedMetadata",
            "loadstart",
            "loadStart",
            "lostpointercapture",
            "lostPointerCapture",
            "playing",
            "playing",
            "progress",
            "progress",
            "seeking",
            "seeking",
            "stalled",
            "stalled",
            "suspend",
            "suspend",
            "timeupdate",
            "timeUpdate",
            It,
            "transitionEnd",
            "waiting",
            "waiting",
          ];
        function Lt(e, t) {
          for (var n = 0; n < e.length; n += 2) {
            var r = e[n],
              i = e[n + 1];
            (i = "on" + (i[0].toUpperCase() + i.slice(1))),
              Nt.set(r, t),
              Rt.set(r, i),
              s(i, [r]);
          }
        }
        (0, o.unstable_now)();
        var zt = 8;
        function jt(e) {
          if (0 != (1 & e)) return (zt = 15), 1;
          if (0 != (2 & e)) return (zt = 14), 2;
          if (0 != (4 & e)) return (zt = 13), 4;
          var t = 24 & e;
          return 0 !== t
            ? ((zt = 12), t)
            : 0 != (32 & e)
            ? ((zt = 11), 32)
            : 0 != (t = 192 & e)
            ? ((zt = 10), t)
            : 0 != (256 & e)
            ? ((zt = 9), 256)
            : 0 != (t = 3584 & e)
            ? ((zt = 8), t)
            : 0 != (4096 & e)
            ? ((zt = 7), 4096)
            : 0 != (t = 4186112 & e)
            ? ((zt = 6), t)
            : 0 != (t = 62914560 & e)
            ? ((zt = 5), t)
            : 67108864 & e
            ? ((zt = 4), 67108864)
            : 0 != (134217728 & e)
            ? ((zt = 3), 134217728)
            : 0 != (t = 805306368 & e)
            ? ((zt = 2), t)
            : 0 != (1073741824 & e)
            ? ((zt = 1), 1073741824)
            : ((zt = 8), e);
        }
        function Mt(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return (zt = 0);
          var r = 0,
            i = 0,
            o = e.expiredLanes,
            a = e.suspendedLanes,
            u = e.pingedLanes;
          if (0 !== o) (r = o), (i = zt = 15);
          else if (0 != (o = 134217727 & n)) {
            var l = o & ~a;
            0 !== l
              ? ((r = jt(l)), (i = zt))
              : 0 != (u &= o) && ((r = jt(u)), (i = zt));
          } else
            0 != (o = n & ~a)
              ? ((r = jt(o)), (i = zt))
              : 0 !== u && ((r = jt(u)), (i = zt));
          if (0 === r) return 0;
          if (
            ((r = n & (((0 > (r = 31 - Vt(r)) ? 0 : 1 << r) << 1) - 1)),
            0 !== t && t !== r && 0 == (t & a))
          ) {
            if ((jt(t), i <= zt)) return t;
            zt = i;
          }
          if (0 !== (t = e.entangledLanes))
            for (e = e.entanglements, t &= r; 0 < t; )
              (i = 1 << (n = 31 - Vt(t))), (r |= e[n]), (t &= ~i);
          return r;
        }
        function $t(e) {
          return 0 != (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function Dt(e, t) {
          switch (e) {
            case 15:
              return 1;
            case 14:
              return 2;
            case 12:
              return 0 === (e = Ut(24 & ~t)) ? Dt(10, t) : e;
            case 10:
              return 0 === (e = Ut(192 & ~t)) ? Dt(8, t) : e;
            case 8:
              return (
                0 === (e = Ut(3584 & ~t)) &&
                  0 === (e = Ut(4186112 & ~t)) &&
                  (e = 512),
                e
              );
            case 2:
              return 0 === (t = Ut(805306368 & ~t)) && (t = 268435456), t;
          }
          throw Error(a(358, e));
        }
        function Ut(e) {
          return e & -e;
        }
        function Ft(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function Bt(e, t, n) {
          e.pendingLanes |= t;
          var r = t - 1;
          (e.suspendedLanes &= r),
            (e.pingedLanes &= r),
            ((e = e.eventTimes)[(t = 31 - Vt(t))] = n);
        }
        var Vt = Math.clz32
            ? Math.clz32
            : function (e) {
                return 0 === e ? 32 : (31 - ((qt(e) / Wt) | 0)) | 0;
              },
          qt = Math.log,
          Wt = Math.LN2,
          Ht = o.unstable_UserBlockingPriority,
          Kt = o.unstable_runWithPriority,
          Qt = !0;
        function Gt(e, t, n, r) {
          je || Le();
          var i = Xt,
            o = je;
          je = !0;
          try {
            Ae(i, e, t, n, r);
          } finally {
            (je = o) || $e();
          }
        }
        function Yt(e, t, n, r) {
          Kt(Ht, Xt.bind(null, e, t, n, r));
        }
        function Xt(e, t, n, r) {
          var i;
          if (Qt)
            if ((i = 0 == (4 & t)) && 0 < ot.length && -1 < dt.indexOf(e))
              (e = pt(null, e, t, n, r)), ot.push(e);
            else {
              var o = Zt(e, t, n, r);
              if (null === o) i && ht(e, r);
              else {
                if (i) {
                  if (-1 < dt.indexOf(e))
                    return (e = pt(o, e, t, n, r)), void ot.push(e);
                  if (
                    (function (e, t, n, r, i) {
                      switch (t) {
                        case "focusin":
                          return (at = vt(at, e, t, n, r, i)), !0;
                        case "dragenter":
                          return (ut = vt(ut, e, t, n, r, i)), !0;
                        case "mouseover":
                          return (lt = vt(lt, e, t, n, r, i)), !0;
                        case "pointerover":
                          var o = i.pointerId;
                          return (
                            st.set(o, vt(st.get(o) || null, e, t, n, r, i)), !0
                          );
                        case "gotpointercapture":
                          return (
                            (o = i.pointerId),
                            ct.set(o, vt(ct.get(o) || null, e, t, n, r, i)),
                            !0
                          );
                      }
                      return !1;
                    })(o, e, t, n, r)
                  )
                    return;
                  ht(e, r);
                }
                Lr(e, t, r, null, n);
              }
            }
        }
        function Zt(e, t, n, r) {
          var i = Ee(r);
          if (null !== (i = ti(i))) {
            var o = Ge(i);
            if (null === o) i = null;
            else {
              var a = o.tag;
              if (13 === a) {
                if (null !== (i = Ye(o))) return i;
                i = null;
              } else if (3 === a) {
                if (o.stateNode.hydrate)
                  return 3 === o.tag ? o.stateNode.containerInfo : null;
                i = null;
              } else o !== i && (i = null);
            }
          }
          return Lr(e, t, r, i, n), null;
        }
        var Jt = null,
          en = null,
          tn = null;
        function nn() {
          if (tn) return tn;
          var e,
            t,
            n = en,
            r = n.length,
            i = "value" in Jt ? Jt.value : Jt.textContent,
            o = i.length;
          for (e = 0; e < r && n[e] === i[e]; e++);
          var a = r - e;
          for (t = 1; t <= a && n[r - t] === i[o - t]; t++);
          return (tn = i.slice(e, 1 < t ? 1 - t : void 0));
        }
        function rn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function on() {
          return !0;
        }
        function an() {
          return !1;
        }
        function un(e) {
          function t(t, n, r, i, o) {
            for (var a in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = i),
            (this.target = o),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(a) && ((t = e[a]), (this[a] = t ? t(i) : i[a]));
            return (
              (this.isDefaultPrevented = (
                null != i.defaultPrevented
                  ? i.defaultPrevented
                  : !1 === i.returnValue
              )
                ? on
                : an),
              (this.isPropagationStopped = an),
              this
            );
          }
          return (
            i(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" != typeof e.returnValue && (e.returnValue = !1),
                  (this.isDefaultPrevented = on));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" != typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = on));
              },
              persist: function () {},
              isPersistent: on,
            }),
            t
          );
        }
        var ln,
          sn,
          cn,
          fn = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          dn = un(fn),
          pn = i({}, fn, { view: 0, detail: 0 }),
          hn = un(pn),
          vn = i({}, pn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Cn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== cn &&
                    (cn && "mousemove" === e.type
                      ? ((ln = e.screenX - cn.screenX),
                        (sn = e.screenY - cn.screenY))
                      : (sn = ln = 0),
                    (cn = e)),
                  ln);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : sn;
            },
          }),
          gn = un(vn),
          mn = un(i({}, vn, { dataTransfer: 0 })),
          yn = un(i({}, pn, { relatedTarget: 0 })),
          bn = un(
            i({}, fn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          wn = i({}, fn, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          _n = un(wn),
          kn = un(i({}, fn, { data: 0 })),
          xn = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          Sn = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          En = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function On(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = En[e]) && !!t[e];
        }
        function Cn() {
          return On;
        }
        var Tn = i({}, pn, {
            key: function (e) {
              if (e.key) {
                var t = xn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = rn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? Sn[e.keyCode] || "Unidentified"
                : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Cn,
            charCode: function (e) {
              return "keypress" === e.type ? rn(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? rn(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          Pn = un(Tn),
          In = un(
            i({}, vn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          Rn = un(
            i({}, pn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: Cn,
            })
          ),
          Nn = un(
            i({}, fn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          An = i({}, vn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          Ln = un(An),
          zn = [9, 13, 27, 32],
          jn = f && "CompositionEvent" in window,
          Mn = null;
        f && "documentMode" in document && (Mn = document.documentMode);
        var $n = f && "TextEvent" in window && !Mn,
          Dn = f && (!jn || (Mn && 8 < Mn && 11 >= Mn)),
          Un = String.fromCharCode(32),
          Fn = !1;
        function Bn(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== zn.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Vn(e) {
          return "object" == typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var qn = !1,
          Wn = {
            color: !0,
            date: !0,
            datetime: !0,
            "datetime-local": !0,
            email: !0,
            month: !0,
            number: !0,
            password: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0,
          };
        function Hn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Wn[e.type] : "textarea" === t;
        }
        function Kn(e, t, n, r) {
          Ie(r),
            0 < (t = jr(t, "onChange")).length &&
              ((n = new dn("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var Qn = null,
          Gn = null;
        function Yn(e) {
          Tr(e, 0);
        }
        function Xn(e) {
          if (X(ri(e))) return e;
        }
        function Zn(e, t) {
          if ("change" === e) return t;
        }
        var Jn = !1;
        if (f) {
          var er;
          if (f) {
            var tr = "oninput" in document;
            if (!tr) {
              var nr = document.createElement("div");
              nr.setAttribute("oninput", "return;"),
                (tr = "function" == typeof nr.oninput);
            }
            er = tr;
          } else er = !1;
          Jn = er && (!document.documentMode || 9 < document.documentMode);
        }
        function rr() {
          Qn && (Qn.detachEvent("onpropertychange", ir), (Gn = Qn = null));
        }
        function ir(e) {
          if ("value" === e.propertyName && Xn(Gn)) {
            var t = [];
            if ((Kn(t, Gn, e, Ee(e)), (e = Yn), je)) e(t);
            else {
              je = !0;
              try {
                Ne(e, t);
              } finally {
                (je = !1), $e();
              }
            }
          }
        }
        function or(e, t, n) {
          "focusin" === e
            ? (rr(), (Gn = n), (Qn = t).attachEvent("onpropertychange", ir))
            : "focusout" === e && rr();
        }
        function ar(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Xn(Gn);
        }
        function ur(e, t) {
          if ("click" === e) return Xn(t);
        }
        function lr(e, t) {
          if ("input" === e || "change" === e) return Xn(t);
        }
        var sr =
            "function" == typeof Object.is
              ? Object.is
              : function (e, t) {
                  return (
                    (e === t && (0 !== e || 1 / e == 1 / t)) ||
                    (e != e && t != t)
                  );
                },
          cr = Object.prototype.hasOwnProperty;
        function fr(e, t) {
          if (sr(e, t)) return !0;
          if (
            "object" != typeof e ||
            null === e ||
            "object" != typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++)
            if (!cr.call(t, n[r]) || !sr(e[n[r]], t[n[r]])) return !1;
          return !0;
        }
        function dr(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function pr(e, t) {
          var n,
            r = dr(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = dr(r);
          }
        }
        function hr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? hr(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function vr() {
          for (var e = window, t = Z(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" == typeof t.contentWindow.location.href;
            } catch (e) {
              n = !1;
            }
            if (!n) break;
            t = Z((e = t.contentWindow).document);
          }
          return t;
        }
        function gr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        var mr = f && "documentMode" in document && 11 >= document.documentMode,
          yr = null,
          br = null,
          wr = null,
          _r = !1;
        function kr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          _r ||
            null == yr ||
            yr !== Z(r) ||
            ((r =
              "selectionStart" in (r = yr) && gr(r)
                ? { start: r.selectionStart, end: r.selectionEnd }
                : {
                    anchorNode: (r = (
                      (r.ownerDocument && r.ownerDocument.defaultView) ||
                      window
                    ).getSelection()).anchorNode,
                    anchorOffset: r.anchorOffset,
                    focusNode: r.focusNode,
                    focusOffset: r.focusOffset,
                  }),
            (wr && fr(wr, r)) ||
              ((wr = r),
              0 < (r = jr(br, "onSelect")).length &&
                ((t = new dn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = yr))));
        }
        Lt(
          "cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(
            " "
          ),
          0
        ),
          Lt(
            "drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(
              " "
            ),
            1
          ),
          Lt(At, 2);
        for (
          var xr =
              "change selectionchange textInput compositionstart compositionend compositionupdate".split(
                " "
              ),
            Sr = 0;
          Sr < xr.length;
          Sr++
        )
          Nt.set(xr[Sr], 0);
        c("onMouseEnter", ["mouseout", "mouseover"]),
          c("onMouseLeave", ["mouseout", "mouseover"]),
          c("onPointerEnter", ["pointerout", "pointerover"]),
          c("onPointerLeave", ["pointerout", "pointerover"]),
          s(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          s(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          s("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          s(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          s(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          s(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var Er =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Or = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(Er)
          );
        function Cr(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, i, o, u, l, s) {
              if ((Qe.apply(this, arguments), Ve)) {
                if (!Ve) throw Error(a(198));
                var c = qe;
                (Ve = !1), (qe = null), We || ((We = !0), (He = c));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Tr(e, t) {
          t = 0 != (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              i = r.event;
            r = r.listeners;
            e: {
              var o = void 0;
              if (t)
                for (var a = r.length - 1; 0 <= a; a--) {
                  var u = r[a],
                    l = u.instance,
                    s = u.currentTarget;
                  if (((u = u.listener), l !== o && i.isPropagationStopped()))
                    break e;
                  Cr(i, u, s), (o = l);
                }
              else
                for (a = 0; a < r.length; a++) {
                  if (
                    ((l = (u = r[a]).instance),
                    (s = u.currentTarget),
                    (u = u.listener),
                    l !== o && i.isPropagationStopped())
                  )
                    break e;
                  Cr(i, u, s), (o = l);
                }
            }
          }
          if (We) throw ((e = He), (We = !1), (He = null), e);
        }
        function Pr(e, t) {
          var n = oi(t),
            r = e + "__bubble";
          n.has(r) || (Ar(t, e, 2, !1), n.add(r));
        }
        var Ir = "_reactListening" + Math.random().toString(36).slice(2);
        function Rr(e) {
          e[Ir] ||
            ((e[Ir] = !0),
            u.forEach(function (t) {
              Or.has(t) || Nr(t, !1, e, null), Nr(t, !0, e, null);
            }));
        }
        function Nr(e, t, n, r) {
          var i =
              4 < arguments.length && void 0 !== arguments[4]
                ? arguments[4]
                : 0,
            o = n;
          if (
            ("selectionchange" === e &&
              9 !== n.nodeType &&
              (o = n.ownerDocument),
            null !== r && !t && Or.has(e))
          ) {
            if ("scroll" !== e) return;
            (i |= 2), (o = r);
          }
          var a = oi(o),
            u = e + "__" + (t ? "capture" : "bubble");
          a.has(u) || (t && (i |= 4), Ar(o, e, i, t), a.add(u));
        }
        function Ar(e, t, n, r) {
          var i = Nt.get(t);
          switch (void 0 === i ? 2 : i) {
            case 0:
              i = Gt;
              break;
            case 1:
              i = Yt;
              break;
            default:
              i = Xt;
          }
          (n = i.bind(null, t, n, e)),
            (i = void 0),
            !Ue ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (i = !0),
            r
              ? void 0 !== i
                ? e.addEventListener(t, n, { capture: !0, passive: i })
                : e.addEventListener(t, n, !0)
              : void 0 !== i
              ? e.addEventListener(t, n, { passive: i })
              : e.addEventListener(t, n, !1);
        }
        function Lr(e, t, n, r, i) {
          var o = r;
          if (0 == (1 & t) && 0 == (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var a = r.tag;
              if (3 === a || 4 === a) {
                var u = r.stateNode.containerInfo;
                if (u === i || (8 === u.nodeType && u.parentNode === i)) break;
                if (4 === a)
                  for (a = r.return; null !== a; ) {
                    var l = a.tag;
                    if (
                      (3 === l || 4 === l) &&
                      ((l = a.stateNode.containerInfo) === i ||
                        (8 === l.nodeType && l.parentNode === i))
                    )
                      return;
                    a = a.return;
                  }
                for (; null !== u; ) {
                  if (null === (a = ti(u))) return;
                  if (5 === (l = a.tag) || 6 === l) {
                    r = o = a;
                    continue e;
                  }
                  u = u.parentNode;
                }
              }
              r = r.return;
            }
          !(function (e, t, n) {
            if (Me) return e();
            Me = !0;
            try {
              return ze(e, t, n);
            } finally {
              (Me = !1), $e();
            }
          })(function () {
            var r = o,
              i = Ee(n),
              a = [];
            e: {
              var u = Rt.get(e);
              if (void 0 !== u) {
                var l = dn,
                  s = e;
                switch (e) {
                  case "keypress":
                    if (0 === rn(n)) break e;
                  case "keydown":
                  case "keyup":
                    l = Pn;
                    break;
                  case "focusin":
                    (s = "focus"), (l = yn);
                    break;
                  case "focusout":
                    (s = "blur"), (l = yn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    l = yn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    l = gn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    l = mn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    l = Rn;
                    break;
                  case Ct:
                  case Tt:
                  case Pt:
                    l = bn;
                    break;
                  case It:
                    l = Nn;
                    break;
                  case "scroll":
                    l = hn;
                    break;
                  case "wheel":
                    l = Ln;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    l = _n;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    l = In;
                }
                var c = 0 != (4 & t),
                  f = !c && "scroll" === e,
                  d = c ? (null !== u ? u + "Capture" : null) : u;
                c = [];
                for (var p, h = r; null !== h; ) {
                  var v = (p = h).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== v &&
                      ((p = v),
                      null !== d &&
                        null != (v = De(h, d)) &&
                        c.push(zr(h, v, p))),
                    f)
                  )
                    break;
                  h = h.return;
                }
                0 < c.length &&
                  ((u = new l(u, s, null, n, i)),
                  a.push({ event: u, listeners: c }));
              }
            }
            if (0 == (7 & t)) {
              if (
                ((l = "mouseout" === e || "pointerout" === e),
                (!(u = "mouseover" === e || "pointerover" === e) ||
                  0 != (16 & t) ||
                  !(s = n.relatedTarget || n.fromElement) ||
                  (!ti(s) && !s[Jr])) &&
                  (l || u) &&
                  ((u =
                    i.window === i
                      ? i
                      : (u = i.ownerDocument)
                      ? u.defaultView || u.parentWindow
                      : window),
                  l
                    ? ((l = r),
                      null !==
                        (s = (s = n.relatedTarget || n.toElement)
                          ? ti(s)
                          : null) &&
                        (s !== (f = Ge(s)) || (5 !== s.tag && 6 !== s.tag)) &&
                        (s = null))
                    : ((l = null), (s = r)),
                  l !== s))
              ) {
                if (
                  ((c = gn),
                  (v = "onMouseLeave"),
                  (d = "onMouseEnter"),
                  (h = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((c = In),
                    (v = "onPointerLeave"),
                    (d = "onPointerEnter"),
                    (h = "pointer")),
                  (f = null == l ? u : ri(l)),
                  (p = null == s ? u : ri(s)),
                  ((u = new c(v, h + "leave", l, n, i)).target = f),
                  (u.relatedTarget = p),
                  (v = null),
                  ti(i) === r &&
                    (((c = new c(d, h + "enter", s, n, i)).target = p),
                    (c.relatedTarget = f),
                    (v = c)),
                  (f = v),
                  l && s)
                )
                  e: {
                    for (d = s, h = 0, p = c = l; p; p = Mr(p)) h++;
                    for (p = 0, v = d; v; v = Mr(v)) p++;
                    for (; 0 < h - p; ) (c = Mr(c)), h--;
                    for (; 0 < p - h; ) (d = Mr(d)), p--;
                    for (; h--; ) {
                      if (c === d || (null !== d && c === d.alternate)) break e;
                      (c = Mr(c)), (d = Mr(d));
                    }
                    c = null;
                  }
                else c = null;
                null !== l && $r(a, u, l, c, !1),
                  null !== s && null !== f && $r(a, f, s, c, !0);
              }
              if (
                "select" ===
                  (l =
                    (u = r ? ri(r) : window).nodeName &&
                    u.nodeName.toLowerCase()) ||
                ("input" === l && "file" === u.type)
              )
                var g = Zn;
              else if (Hn(u))
                if (Jn) g = lr;
                else {
                  g = ar;
                  var m = or;
                }
              else
                (l = u.nodeName) &&
                  "input" === l.toLowerCase() &&
                  ("checkbox" === u.type || "radio" === u.type) &&
                  (g = ur);
              switch (
                (g && (g = g(e, r))
                  ? Kn(a, g, n, i)
                  : (m && m(e, u, r),
                    "focusout" === e &&
                      (m = u._wrapperState) &&
                      m.controlled &&
                      "number" === u.type &&
                      ie(u, "number", u.value)),
                (m = r ? ri(r) : window),
                e)
              ) {
                case "focusin":
                  (Hn(m) || "true" === m.contentEditable) &&
                    ((yr = m), (br = r), (wr = null));
                  break;
                case "focusout":
                  wr = br = yr = null;
                  break;
                case "mousedown":
                  _r = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (_r = !1), kr(a, n, i);
                  break;
                case "selectionchange":
                  if (mr) break;
                case "keydown":
                case "keyup":
                  kr(a, n, i);
              }
              var y;
              if (jn)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var b = "onCompositionStart";
                      break e;
                    case "compositionend":
                      b = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      b = "onCompositionUpdate";
                      break e;
                  }
                  b = void 0;
                }
              else
                qn
                  ? Bn(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (b = "onCompositionStart");
              b &&
                (Dn &&
                  "ko" !== n.locale &&
                  (qn || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && qn && (y = nn())
                    : ((en = "value" in (Jt = i) ? Jt.value : Jt.textContent),
                      (qn = !0))),
                0 < (m = jr(r, b)).length &&
                  ((b = new kn(b, e, null, n, i)),
                  a.push({ event: b, listeners: m }),
                  (y || null !== (y = Vn(n))) && (b.data = y))),
                (y = $n
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Vn(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((Fn = !0), Un);
                        case "textInput":
                          return (e = t.data) === Un && Fn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (qn)
                        return "compositionend" === e || (!jn && Bn(e, t))
                          ? ((e = nn()), (tn = en = Jt = null), (qn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return Dn && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = jr(r, "onBeforeInput")).length &&
                  ((i = new kn("onBeforeInput", "beforeinput", null, n, i)),
                  a.push({ event: i, listeners: r }),
                  (i.data = y));
            }
            Tr(a, t);
          });
        }
        function zr(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function jr(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var i = e,
              o = i.stateNode;
            5 === i.tag &&
              null !== o &&
              ((i = o),
              null != (o = De(e, n)) && r.unshift(zr(e, o, i)),
              null != (o = De(e, t)) && r.push(zr(e, o, i))),
              (e = e.return);
          }
          return r;
        }
        function Mr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function $r(e, t, n, r, i) {
          for (var o = t._reactName, a = []; null !== n && n !== r; ) {
            var u = n,
              l = u.alternate,
              s = u.stateNode;
            if (null !== l && l === r) break;
            5 === u.tag &&
              null !== s &&
              ((u = s),
              i
                ? null != (l = De(n, o)) && a.unshift(zr(n, l, u))
                : i || (null != (l = De(n, o)) && a.push(zr(n, l, u)))),
              (n = n.return);
          }
          0 !== a.length && e.push({ event: t, listeners: a });
        }
        function Dr() {}
        var Ur = null,
          Fr = null;
        function Br(e, t) {
          switch (e) {
            case "button":
            case "input":
            case "select":
            case "textarea":
              return !!t.autoFocus;
          }
          return !1;
        }
        function Vr(e, t) {
          return (
            "textarea" === e ||
            "option" === e ||
            "noscript" === e ||
            "string" == typeof t.children ||
            "number" == typeof t.children ||
            ("object" == typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var qr = "function" == typeof setTimeout ? setTimeout : void 0,
          Wr = "function" == typeof clearTimeout ? clearTimeout : void 0;
        function Hr(e) {
          (1 === e.nodeType || (9 === e.nodeType && null != (e = e.body))) &&
            (e.textContent = "");
        }
        function Kr(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
          }
          return e;
        }
        function Qr(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var Gr = 0,
          Yr = Math.random().toString(36).slice(2),
          Xr = "__reactFiber$" + Yr,
          Zr = "__reactProps$" + Yr,
          Jr = "__reactContainer$" + Yr,
          ei = "__reactEvents$" + Yr;
        function ti(e) {
          var t = e[Xr];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[Jr] || n[Xr])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = Qr(e); null !== e; ) {
                  if ((n = e[Xr])) return n;
                  e = Qr(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function ni(e) {
          return !(e = e[Xr] || e[Jr]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function ri(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(a(33));
        }
        function ii(e) {
          return e[Zr] || null;
        }
        function oi(e) {
          var t = e[ei];
          return void 0 === t && (t = e[ei] = new Set()), t;
        }
        var ai = [],
          ui = -1;
        function li(e) {
          return { current: e };
        }
        function si(e) {
          0 > ui || ((e.current = ai[ui]), (ai[ui] = null), ui--);
        }
        function ci(e, t) {
          ui++, (ai[ui] = e.current), (e.current = t);
        }
        var fi = {},
          di = li(fi),
          pi = li(!1),
          hi = fi;
        function vi(e, t) {
          var n = e.type.contextTypes;
          if (!n) return fi;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var i,
            o = {};
          for (i in n) o[i] = t[i];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            o
          );
        }
        function gi(e) {
          return null != e.childContextTypes;
        }
        function mi() {
          si(pi), si(di);
        }
        function yi(e, t, n) {
          if (di.current !== fi) throw Error(a(168));
          ci(di, t), ci(pi, n);
        }
        function bi(e, t, n) {
          var r = e.stateNode;
          if (
            ((e = t.childContextTypes), "function" != typeof r.getChildContext)
          )
            return n;
          for (var o in (r = r.getChildContext()))
            if (!(o in e)) throw Error(a(108, K(t) || "Unknown", o));
          return i({}, n, r);
        }
        function wi(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              fi),
            (hi = di.current),
            ci(di, e),
            ci(pi, pi.current),
            !0
          );
        }
        function _i(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(a(169));
          n
            ? ((e = bi(e, t, hi)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              si(pi),
              si(di),
              ci(di, e))
            : si(pi),
            ci(pi, n);
        }
        var ki = null,
          xi = null,
          Si = o.unstable_runWithPriority,
          Ei = o.unstable_scheduleCallback,
          Oi = o.unstable_cancelCallback,
          Ci = o.unstable_shouldYield,
          Ti = o.unstable_requestPaint,
          Pi = o.unstable_now,
          Ii = o.unstable_getCurrentPriorityLevel,
          Ri = o.unstable_ImmediatePriority,
          Ni = o.unstable_UserBlockingPriority,
          Ai = o.unstable_NormalPriority,
          Li = o.unstable_LowPriority,
          zi = o.unstable_IdlePriority,
          ji = {},
          Mi = void 0 !== Ti ? Ti : function () {},
          $i = null,
          Di = null,
          Ui = !1,
          Fi = Pi(),
          Bi =
            1e4 > Fi
              ? Pi
              : function () {
                  return Pi() - Fi;
                };
        function Vi() {
          switch (Ii()) {
            case Ri:
              return 99;
            case Ni:
              return 98;
            case Ai:
              return 97;
            case Li:
              return 96;
            case zi:
              return 95;
            default:
              throw Error(a(332));
          }
        }
        function qi(e) {
          switch (e) {
            case 99:
              return Ri;
            case 98:
              return Ni;
            case 97:
              return Ai;
            case 96:
              return Li;
            case 95:
              return zi;
            default:
              throw Error(a(332));
          }
        }
        function Wi(e, t) {
          return (e = qi(e)), Si(e, t);
        }
        function Hi(e, t, n) {
          return (e = qi(e)), Ei(e, t, n);
        }
        function Ki() {
          if (null !== Di) {
            var e = Di;
            (Di = null), Oi(e);
          }
          Qi();
        }
        function Qi() {
          if (!Ui && null !== $i) {
            Ui = !0;
            var e = 0;
            try {
              var t = $i;
              Wi(99, function () {
                for (; e < t.length; e++) {
                  var n = t[e];
                  do {
                    n = n(!0);
                  } while (null !== n);
                }
              }),
                ($i = null);
            } catch (t) {
              throw (null !== $i && ($i = $i.slice(e + 1)), Ei(Ri, Ki), t);
            } finally {
              Ui = !1;
            }
          }
        }
        var Gi = _.ReactCurrentBatchConfig;
        function Yi(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = i({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var Xi = li(null),
          Zi = null,
          Ji = null,
          eo = null;
        function to() {
          eo = Ji = Zi = null;
        }
        function no(e) {
          var t = Xi.current;
          si(Xi), (e.type._context._currentValue = t);
        }
        function ro(e, t) {
          for (; null !== e; ) {
            var n = e.alternate;
            if ((e.childLanes & t) === t) {
              if (null === n || (n.childLanes & t) === t) break;
              n.childLanes |= t;
            } else (e.childLanes |= t), null !== n && (n.childLanes |= t);
            e = e.return;
          }
        }
        function io(e, t) {
          (Zi = e),
            (eo = Ji = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 != (e.lanes & t) && (ja = !0), (e.firstContext = null));
        }
        function oo(e, t) {
          if (eo !== e && !1 !== t && 0 !== t)
            if (
              (("number" == typeof t && 1073741823 !== t) ||
                ((eo = e), (t = 1073741823)),
              (t = { context: e, observedBits: t, next: null }),
              null === Ji)
            ) {
              if (null === Zi) throw Error(a(308));
              (Ji = t),
                (Zi.dependencies = {
                  lanes: 0,
                  firstContext: t,
                  responders: null,
                });
            } else Ji = Ji.next = t;
          return e._currentValue;
        }
        var ao = !1;
        function uo(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null },
            effects: null,
          };
        }
        function lo(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function so(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function co(e, t) {
          if (null !== (e = e.updateQueue)) {
            var n = (e = e.shared).pending;
            null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
              (e.pending = t);
          }
        }
        function fo(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var i = null,
              o = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var a = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === o ? (i = o = a) : (o = o.next = a), (n = n.next);
              } while (null !== n);
              null === o ? (i = o = t) : (o = o.next = t);
            } else i = o = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: i,
                lastBaseUpdate: o,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function po(e, t, n, r) {
          var o = e.updateQueue;
          ao = !1;
          var a = o.firstBaseUpdate,
            u = o.lastBaseUpdate,
            l = o.shared.pending;
          if (null !== l) {
            o.shared.pending = null;
            var s = l,
              c = s.next;
            (s.next = null), null === u ? (a = c) : (u.next = c), (u = s);
            var f = e.alternate;
            if (null !== f) {
              var d = (f = f.updateQueue).lastBaseUpdate;
              d !== u &&
                (null === d ? (f.firstBaseUpdate = c) : (d.next = c),
                (f.lastBaseUpdate = s));
            }
          }
          if (null !== a) {
            for (d = o.baseState, u = 0, f = c = s = null; ; ) {
              l = a.lane;
              var p = a.eventTime;
              if ((r & l) === l) {
                null !== f &&
                  (f = f.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: a.tag,
                      payload: a.payload,
                      callback: a.callback,
                      next: null,
                    });
                e: {
                  var h = e,
                    v = a;
                  switch (((l = t), (p = n), v.tag)) {
                    case 1:
                      if ("function" == typeof (h = v.payload)) {
                        d = h.call(p, d, l);
                        break e;
                      }
                      d = h;
                      break e;
                    case 3:
                      h.flags = (-4097 & h.flags) | 64;
                    case 0:
                      if (
                        null ==
                        (l =
                          "function" == typeof (h = v.payload)
                            ? h.call(p, d, l)
                            : h)
                      )
                        break e;
                      d = i({}, d, l);
                      break e;
                    case 2:
                      ao = !0;
                  }
                }
                null !== a.callback &&
                  ((e.flags |= 32),
                  null === (l = o.effects) ? (o.effects = [a]) : l.push(a));
              } else
                (p = {
                  eventTime: p,
                  lane: l,
                  tag: a.tag,
                  payload: a.payload,
                  callback: a.callback,
                  next: null,
                }),
                  null === f ? ((c = f = p), (s = d)) : (f = f.next = p),
                  (u |= l);
              if (null === (a = a.next)) {
                if (null === (l = o.shared.pending)) break;
                (a = l.next),
                  (l.next = null),
                  (o.lastBaseUpdate = l),
                  (o.shared.pending = null);
              }
            }
            null === f && (s = d),
              (o.baseState = s),
              (o.firstBaseUpdate = c),
              (o.lastBaseUpdate = f),
              (Du |= u),
              (e.lanes = u),
              (e.memoizedState = d);
          }
        }
        function ho(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                i = r.callback;
              if (null !== i) {
                if (((r.callback = null), (r = n), "function" != typeof i))
                  throw Error(a(191, i));
                i.call(r);
              }
            }
        }
        var vo = new r.Component().refs;
        function go(e, t, n, r) {
          (n = null == (n = n(r, (t = e.memoizedState))) ? t : i({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var mo = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && Ge(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = cl(),
              i = fl(e),
              o = so(r, i);
            (o.payload = t),
              null != n && (o.callback = n),
              co(e, o),
              dl(e, i, r);
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = cl(),
              i = fl(e),
              o = so(r, i);
            (o.tag = 1),
              (o.payload = t),
              null != n && (o.callback = n),
              co(e, o),
              dl(e, i, r);
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = cl(),
              r = fl(e),
              i = so(n, r);
            (i.tag = 2), null != t && (i.callback = t), co(e, i), dl(e, r, n);
          },
        };
        function yo(e, t, n, r, i, o, a) {
          return "function" == typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, o, a)
            : !(
                t.prototype &&
                t.prototype.isPureReactComponent &&
                fr(n, r) &&
                fr(i, o)
              );
        }
        function bo(e, t, n) {
          var r = !1,
            i = fi,
            o = t.contextType;
          return (
            "object" == typeof o && null !== o
              ? (o = oo(o))
              : ((i = gi(t) ? hi : di.current),
                (o = (r = null != (r = t.contextTypes)) ? vi(e, i) : fi)),
            (t = new t(n, o)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = mo),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                i),
              (e.__reactInternalMemoizedMaskedChildContext = o)),
            t
          );
        }
        function wo(e, t, n, r) {
          (e = t.state),
            "function" == typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" == typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && mo.enqueueReplaceState(t, t.state, null);
        }
        function _o(e, t, n, r) {
          var i = e.stateNode;
          (i.props = n), (i.state = e.memoizedState), (i.refs = vo), uo(e);
          var o = t.contextType;
          "object" == typeof o && null !== o
            ? (i.context = oo(o))
            : ((o = gi(t) ? hi : di.current), (i.context = vi(e, o))),
            po(e, n, i, r),
            (i.state = e.memoizedState),
            "function" == typeof (o = t.getDerivedStateFromProps) &&
              (go(e, t, o, n), (i.state = e.memoizedState)),
            "function" == typeof t.getDerivedStateFromProps ||
              "function" == typeof i.getSnapshotBeforeUpdate ||
              ("function" != typeof i.UNSAFE_componentWillMount &&
                "function" != typeof i.componentWillMount) ||
              ((t = i.state),
              "function" == typeof i.componentWillMount &&
                i.componentWillMount(),
              "function" == typeof i.UNSAFE_componentWillMount &&
                i.UNSAFE_componentWillMount(),
              t !== i.state && mo.enqueueReplaceState(i, i.state, null),
              po(e, n, i, r),
              (i.state = e.memoizedState)),
            "function" == typeof i.componentDidMount && (e.flags |= 4);
        }
        var ko = Array.isArray;
        function xo(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" != typeof e &&
            "object" != typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(a(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(a(147, e));
              var i = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" == typeof t.ref &&
                t.ref._stringRef === i
                ? t.ref
                : ((t = function (e) {
                    var t = r.refs;
                    t === vo && (t = r.refs = {}),
                      null === e ? delete t[i] : (t[i] = e);
                  }),
                  (t._stringRef = i),
                  t);
            }
            if ("string" != typeof e) throw Error(a(284));
            if (!n._owner) throw Error(a(290, e));
          }
          return e;
        }
        function So(e, t) {
          if ("textarea" !== e.type)
            throw Error(
              a(
                31,
                "[object Object]" === Object.prototype.toString.call(t)
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : t
              )
            );
        }
        function Eo(e) {
          function t(t, n) {
            if (e) {
              var r = t.lastEffect;
              null !== r
                ? ((r.nextEffect = n), (t.lastEffect = n))
                : (t.firstEffect = t.lastEffect = n),
                (n.nextEffect = null),
                (n.flags = 8);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function i(e, t) {
            return ((e = ql(e, t)).index = 0), (e.sibling = null), e;
          }
          function o(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags = 2), n)
                    : r
                  : ((t.flags = 2), n)
                : n
            );
          }
          function u(t) {
            return e && null === t.alternate && (t.flags = 2), t;
          }
          function l(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Ql(n, e.mode, r)).return = e), t)
              : (((t = i(t, n)).return = e), t);
          }
          function s(e, t, n, r) {
            return null !== t && t.elementType === n.type
              ? (((r = i(t, n.props)).ref = xo(e, t, n)), (r.return = e), r)
              : (((r = Wl(n.type, n.key, n.props, null, e.mode, r)).ref = xo(
                  e,
                  t,
                  n
                )),
                (r.return = e),
                r);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Gl(n, e.mode, r)).return = e), t)
              : (((t = i(t, n.children || [])).return = e), t);
          }
          function f(e, t, n, r, o) {
            return null === t || 7 !== t.tag
              ? (((t = Hl(n, e.mode, r, o)).return = e), t)
              : (((t = i(t, n)).return = e), t);
          }
          function d(e, t, n) {
            if ("string" == typeof t || "number" == typeof t)
              return ((t = Ql("" + t, e.mode, n)).return = e), t;
            if ("object" == typeof t && null !== t) {
              switch (t.$$typeof) {
                case k:
                  return (
                    ((n = Wl(t.type, t.key, t.props, null, e.mode, n)).ref = xo(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case x:
                  return ((t = Gl(t, e.mode, n)).return = e), t;
              }
              if (ko(t) || B(t))
                return ((t = Hl(t, e.mode, n, null)).return = e), t;
              So(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var i = null !== t ? t.key : null;
            if ("string" == typeof n || "number" == typeof n)
              return null !== i ? null : l(e, t, "" + n, r);
            if ("object" == typeof n && null !== n) {
              switch (n.$$typeof) {
                case k:
                  return n.key === i
                    ? n.type === S
                      ? f(e, t, n.props.children, r, i)
                      : s(e, t, n, r)
                    : null;
                case x:
                  return n.key === i ? c(e, t, n, r) : null;
              }
              if (ko(n) || B(n)) return null !== i ? null : f(e, t, n, r, null);
              So(e, n);
            }
            return null;
          }
          function h(e, t, n, r, i) {
            if ("string" == typeof r || "number" == typeof r)
              return l(t, (e = e.get(n) || null), "" + r, i);
            if ("object" == typeof r && null !== r) {
              switch (r.$$typeof) {
                case k:
                  return (
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r.type === S
                      ? f(t, e, r.props.children, i, r.key)
                      : s(t, e, r, i)
                  );
                case x:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    i
                  );
              }
              if (ko(r) || B(r))
                return f(t, (e = e.get(n) || null), r, i, null);
              So(t, r);
            }
            return null;
          }
          function v(i, a, u, l) {
            for (
              var s = null, c = null, f = a, v = (a = 0), g = null;
              null !== f && v < u.length;
              v++
            ) {
              f.index > v ? ((g = f), (f = null)) : (g = f.sibling);
              var m = p(i, f, u[v], l);
              if (null === m) {
                null === f && (f = g);
                break;
              }
              e && f && null === m.alternate && t(i, f),
                (a = o(m, a, v)),
                null === c ? (s = m) : (c.sibling = m),
                (c = m),
                (f = g);
            }
            if (v === u.length) return n(i, f), s;
            if (null === f) {
              for (; v < u.length; v++)
                null !== (f = d(i, u[v], l)) &&
                  ((a = o(f, a, v)),
                  null === c ? (s = f) : (c.sibling = f),
                  (c = f));
              return s;
            }
            for (f = r(i, f); v < u.length; v++)
              null !== (g = h(f, i, v, u[v], l)) &&
                (e &&
                  null !== g.alternate &&
                  f.delete(null === g.key ? v : g.key),
                (a = o(g, a, v)),
                null === c ? (s = g) : (c.sibling = g),
                (c = g));
            return (
              e &&
                f.forEach(function (e) {
                  return t(i, e);
                }),
              s
            );
          }
          function g(i, u, l, s) {
            var c = B(l);
            if ("function" != typeof c) throw Error(a(150));
            if (null == (l = c.call(l))) throw Error(a(151));
            for (
              var f = (c = null), v = u, g = (u = 0), m = null, y = l.next();
              null !== v && !y.done;
              g++, y = l.next()
            ) {
              v.index > g ? ((m = v), (v = null)) : (m = v.sibling);
              var b = p(i, v, y.value, s);
              if (null === b) {
                null === v && (v = m);
                break;
              }
              e && v && null === b.alternate && t(i, v),
                (u = o(b, u, g)),
                null === f ? (c = b) : (f.sibling = b),
                (f = b),
                (v = m);
            }
            if (y.done) return n(i, v), c;
            if (null === v) {
              for (; !y.done; g++, y = l.next())
                null !== (y = d(i, y.value, s)) &&
                  ((u = o(y, u, g)),
                  null === f ? (c = y) : (f.sibling = y),
                  (f = y));
              return c;
            }
            for (v = r(i, v); !y.done; g++, y = l.next())
              null !== (y = h(v, i, g, y.value, s)) &&
                (e &&
                  null !== y.alternate &&
                  v.delete(null === y.key ? g : y.key),
                (u = o(y, u, g)),
                null === f ? (c = y) : (f.sibling = y),
                (f = y));
            return (
              e &&
                v.forEach(function (e) {
                  return t(i, e);
                }),
              c
            );
          }
          return function (e, r, o, l) {
            var s =
              "object" == typeof o &&
              null !== o &&
              o.type === S &&
              null === o.key;
            s && (o = o.props.children);
            var c = "object" == typeof o && null !== o;
            if (c)
              switch (o.$$typeof) {
                case k:
                  e: {
                    for (c = o.key, s = r; null !== s; ) {
                      if (s.key === c) {
                        if (7 === s.tag) {
                          if (o.type === S) {
                            n(e, s.sibling),
                              ((r = i(s, o.props.children)).return = e),
                              (e = r);
                            break e;
                          }
                        } else if (s.elementType === o.type) {
                          n(e, s.sibling),
                            ((r = i(s, o.props)).ref = xo(e, s, o)),
                            (r.return = e),
                            (e = r);
                          break e;
                        }
                        n(e, s);
                        break;
                      }
                      t(e, s), (s = s.sibling);
                    }
                    o.type === S
                      ? (((r = Hl(o.props.children, e.mode, l, o.key)).return =
                          e),
                        (e = r))
                      : (((l = Wl(
                          o.type,
                          o.key,
                          o.props,
                          null,
                          e.mode,
                          l
                        )).ref = xo(e, r, o)),
                        (l.return = e),
                        (e = l));
                  }
                  return u(e);
                case x:
                  e: {
                    for (s = o.key; null !== r; ) {
                      if (r.key === s) {
                        if (
                          4 === r.tag &&
                          r.stateNode.containerInfo === o.containerInfo &&
                          r.stateNode.implementation === o.implementation
                        ) {
                          n(e, r.sibling),
                            ((r = i(r, o.children || [])).return = e),
                            (e = r);
                          break e;
                        }
                        n(e, r);
                        break;
                      }
                      t(e, r), (r = r.sibling);
                    }
                    ((r = Gl(o, e.mode, l)).return = e), (e = r);
                  }
                  return u(e);
              }
            if ("string" == typeof o || "number" == typeof o)
              return (
                (o = "" + o),
                null !== r && 6 === r.tag
                  ? (n(e, r.sibling), ((r = i(r, o)).return = e), (e = r))
                  : (n(e, r), ((r = Ql(o, e.mode, l)).return = e), (e = r)),
                u(e)
              );
            if (ko(o)) return v(e, r, o, l);
            if (B(o)) return g(e, r, o, l);
            if ((c && So(e, o), void 0 === o && !s))
              switch (e.tag) {
                case 1:
                case 22:
                case 0:
                case 11:
                case 15:
                  throw Error(a(152, K(e.type) || "Component"));
              }
            return n(e, r);
          };
        }
        var Oo = Eo(!0),
          Co = Eo(!1),
          To = {},
          Po = li(To),
          Io = li(To),
          Ro = li(To);
        function No(e) {
          if (e === To) throw Error(a(174));
          return e;
        }
        function Ao(e, t) {
          switch ((ci(Ro, t), ci(Io, e), ci(Po, To), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : pe(null, "");
              break;
            default:
              t = pe(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          si(Po), ci(Po, t);
        }
        function Lo() {
          si(Po), si(Io), si(Ro);
        }
        function zo(e) {
          No(Ro.current);
          var t = No(Po.current),
            n = pe(t, e.type);
          t !== n && (ci(Io, e), ci(Po, n));
        }
        function jo(e) {
          Io.current === e && (si(Po), si(Io));
        }
        var Mo = li(0);
        function $o(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 != (64 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var Do = null,
          Uo = null,
          Fo = !1;
        function Bo(e, t) {
          var n = Bl(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.type = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            (n.flags = 8),
            null !== e.lastEffect
              ? ((e.lastEffect.nextEffect = n), (e.lastEffect = n))
              : (e.firstEffect = e.lastEffect = n);
        }
        function Vo(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) && ((e.stateNode = t), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), !0)
              );
            default:
              return !1;
          }
        }
        function qo(e) {
          if (Fo) {
            var t = Uo;
            if (t) {
              var n = t;
              if (!Vo(e, t)) {
                if (!(t = Kr(n.nextSibling)) || !Vo(e, t))
                  return (
                    (e.flags = (-1025 & e.flags) | 2), (Fo = !1), void (Do = e)
                  );
                Bo(Do, n);
              }
              (Do = e), (Uo = Kr(t.firstChild));
            } else (e.flags = (-1025 & e.flags) | 2), (Fo = !1), (Do = e);
          }
        }
        function Wo(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          Do = e;
        }
        function Ho(e) {
          if (e !== Do) return !1;
          if (!Fo) return Wo(e), (Fo = !0), !1;
          var t = e.type;
          if (
            5 !== e.tag ||
            ("head" !== t && "body" !== t && !Vr(t, e.memoizedProps))
          )
            for (t = Uo; t; ) Bo(e, t), (t = Kr(t.nextSibling));
          if ((Wo(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(a(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      Uo = Kr(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              Uo = null;
            }
          } else Uo = Do ? Kr(e.stateNode.nextSibling) : null;
          return !0;
        }
        function Ko() {
          (Uo = Do = null), (Fo = !1);
        }
        var Qo = [];
        function Go() {
          for (var e = 0; e < Qo.length; e++)
            Qo[e]._workInProgressVersionPrimary = null;
          Qo.length = 0;
        }
        var Yo = _.ReactCurrentDispatcher,
          Xo = _.ReactCurrentBatchConfig,
          Zo = 0,
          Jo = null,
          ea = null,
          ta = null,
          na = !1,
          ra = !1;
        function ia() {
          throw Error(a(321));
        }
        function oa(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!sr(e[n], t[n])) return !1;
          return !0;
        }
        function aa(e, t, n, r, i, o) {
          if (
            ((Zo = o),
            (Jo = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (Yo.current = null === e || null === e.memoizedState ? Na : Aa),
            (e = n(r, i)),
            ra)
          ) {
            o = 0;
            do {
              if (((ra = !1), !(25 > o))) throw Error(a(301));
              (o += 1),
                (ta = ea = null),
                (t.updateQueue = null),
                (Yo.current = La),
                (e = n(r, i));
            } while (ra);
          }
          if (
            ((Yo.current = Ra),
            (t = null !== ea && null !== ea.next),
            (Zo = 0),
            (ta = ea = Jo = null),
            (na = !1),
            t)
          )
            throw Error(a(300));
          return e;
        }
        function ua() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === ta ? (Jo.memoizedState = ta = e) : (ta = ta.next = e), ta
          );
        }
        function la() {
          if (null === ea) {
            var e = Jo.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = ea.next;
          var t = null === ta ? Jo.memoizedState : ta.next;
          if (null !== t) (ta = t), (ea = e);
          else {
            if (null === e) throw Error(a(310));
            (e = {
              memoizedState: (ea = e).memoizedState,
              baseState: ea.baseState,
              baseQueue: ea.baseQueue,
              queue: ea.queue,
              next: null,
            }),
              null === ta ? (Jo.memoizedState = ta = e) : (ta = ta.next = e);
          }
          return ta;
        }
        function sa(e, t) {
          return "function" == typeof t ? t(e) : t;
        }
        function ca(e) {
          var t = la(),
            n = t.queue;
          if (null === n) throw Error(a(311));
          n.lastRenderedReducer = e;
          var r = ea,
            i = r.baseQueue,
            o = n.pending;
          if (null !== o) {
            if (null !== i) {
              var u = i.next;
              (i.next = o.next), (o.next = u);
            }
            (r.baseQueue = i = o), (n.pending = null);
          }
          if (null !== i) {
            (i = i.next), (r = r.baseState);
            var l = (u = o = null),
              s = i;
            do {
              var c = s.lane;
              if ((Zo & c) === c)
                null !== l &&
                  (l = l.next =
                    {
                      lane: 0,
                      action: s.action,
                      eagerReducer: s.eagerReducer,
                      eagerState: s.eagerState,
                      next: null,
                    }),
                  (r = s.eagerReducer === e ? s.eagerState : e(r, s.action));
              else {
                var f = {
                  lane: c,
                  action: s.action,
                  eagerReducer: s.eagerReducer,
                  eagerState: s.eagerState,
                  next: null,
                };
                null === l ? ((u = l = f), (o = r)) : (l = l.next = f),
                  (Jo.lanes |= c),
                  (Du |= c);
              }
              s = s.next;
            } while (null !== s && s !== i);
            null === l ? (o = r) : (l.next = u),
              sr(r, t.memoizedState) || (ja = !0),
              (t.memoizedState = r),
              (t.baseState = o),
              (t.baseQueue = l),
              (n.lastRenderedState = r);
          }
          return [t.memoizedState, n.dispatch];
        }
        function fa(e) {
          var t = la(),
            n = t.queue;
          if (null === n) throw Error(a(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            i = n.pending,
            o = t.memoizedState;
          if (null !== i) {
            n.pending = null;
            var u = (i = i.next);
            do {
              (o = e(o, u.action)), (u = u.next);
            } while (u !== i);
            sr(o, t.memoizedState) || (ja = !0),
              (t.memoizedState = o),
              null === t.baseQueue && (t.baseState = o),
              (n.lastRenderedState = o);
          }
          return [o, r];
        }
        function da(e, t, n) {
          var r = t._getVersion;
          r = r(t._source);
          var i = t._workInProgressVersionPrimary;
          if (
            (null !== i
              ? (e = i === r)
              : ((e = e.mutableReadLanes),
                (e = (Zo & e) === e) &&
                  ((t._workInProgressVersionPrimary = r), Qo.push(t))),
            e)
          )
            return n(t._source);
          throw (Qo.push(t), Error(a(350)));
        }
        function pa(e, t, n, r) {
          var i = Ru;
          if (null === i) throw Error(a(349));
          var o = t._getVersion,
            u = o(t._source),
            l = Yo.current,
            s = l.useState(function () {
              return da(i, t, n);
            }),
            c = s[1],
            f = s[0];
          s = ta;
          var d = e.memoizedState,
            p = d.refs,
            h = p.getSnapshot,
            v = d.source;
          d = d.subscribe;
          var g = Jo;
          return (
            (e.memoizedState = { refs: p, source: t, subscribe: r }),
            l.useEffect(
              function () {
                (p.getSnapshot = n), (p.setSnapshot = c);
                var e = o(t._source);
                if (!sr(u, e)) {
                  (e = n(t._source)),
                    sr(f, e) ||
                      (c(e),
                      (e = fl(g)),
                      (i.mutableReadLanes |= e & i.pendingLanes)),
                    (e = i.mutableReadLanes),
                    (i.entangledLanes |= e);
                  for (var r = i.entanglements, a = e; 0 < a; ) {
                    var l = 31 - Vt(a),
                      s = 1 << l;
                    (r[l] |= e), (a &= ~s);
                  }
                }
              },
              [n, t, r]
            ),
            l.useEffect(
              function () {
                return r(t._source, function () {
                  var e = p.getSnapshot,
                    n = p.setSnapshot;
                  try {
                    n(e(t._source));
                    var r = fl(g);
                    i.mutableReadLanes |= r & i.pendingLanes;
                  } catch (e) {
                    n(function () {
                      throw e;
                    });
                  }
                });
              },
              [t, r]
            ),
            (sr(h, n) && sr(v, t) && sr(d, r)) ||
              (((e = {
                pending: null,
                dispatch: null,
                lastRenderedReducer: sa,
                lastRenderedState: f,
              }).dispatch = c =
                Ia.bind(null, Jo, e)),
              (s.queue = e),
              (s.baseQueue = null),
              (f = da(i, t, n)),
              (s.memoizedState = s.baseState = f)),
            f
          );
        }
        function ha(e, t, n) {
          return pa(la(), e, t, n);
        }
        function va(e) {
          var t = ua();
          return (
            "function" == typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = (e = t.queue =
              {
                pending: null,
                dispatch: null,
                lastRenderedReducer: sa,
                lastRenderedState: e,
              }).dispatch =
              Ia.bind(null, Jo, e)),
            [t.memoizedState, e]
          );
        }
        function ga(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = Jo.updateQueue)
              ? ((t = { lastEffect: null }),
                (Jo.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function ma(e) {
          return (e = { current: e }), (ua().memoizedState = e);
        }
        function ya() {
          return la().memoizedState;
        }
        function ba(e, t, n, r) {
          var i = ua();
          (Jo.flags |= e),
            (i.memoizedState = ga(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function wa(e, t, n, r) {
          var i = la();
          r = void 0 === r ? null : r;
          var o = void 0;
          if (null !== ea) {
            var a = ea.memoizedState;
            if (((o = a.destroy), null !== r && oa(r, a.deps)))
              return void ga(t, n, o, r);
          }
          (Jo.flags |= e), (i.memoizedState = ga(1 | t, n, o, r));
        }
        function _a(e, t) {
          return ba(516, 4, e, t);
        }
        function ka(e, t) {
          return wa(516, 4, e, t);
        }
        function xa(e, t) {
          return wa(4, 2, e, t);
        }
        function Sa(e, t) {
          return "function" == typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null != t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function Ea(e, t, n) {
          return (
            (n = null != n ? n.concat([e]) : null),
            wa(4, 2, Sa.bind(null, t, e), n)
          );
        }
        function Oa() {}
        function Ca(e, t) {
          var n = la();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && oa(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Ta(e, t) {
          var n = la();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && oa(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Pa(e, t) {
          var n = Vi();
          Wi(98 > n ? 98 : n, function () {
            e(!0);
          }),
            Wi(97 < n ? 97 : n, function () {
              var n = Xo.transition;
              Xo.transition = 1;
              try {
                e(!1), t();
              } finally {
                Xo.transition = n;
              }
            });
        }
        function Ia(e, t, n) {
          var r = cl(),
            i = fl(e),
            o = {
              lane: i,
              action: n,
              eagerReducer: null,
              eagerState: null,
              next: null,
            },
            a = t.pending;
          if (
            (null === a ? (o.next = o) : ((o.next = a.next), (a.next = o)),
            (t.pending = o),
            (a = e.alternate),
            e === Jo || (null !== a && a === Jo))
          )
            ra = na = !0;
          else {
            if (
              0 === e.lanes &&
              (null === a || 0 === a.lanes) &&
              null !== (a = t.lastRenderedReducer)
            )
              try {
                var u = t.lastRenderedState,
                  l = a(u, n);
                if (((o.eagerReducer = a), (o.eagerState = l), sr(l, u)))
                  return;
              } catch (e) {}
            dl(e, i, r);
          }
        }
        var Ra = {
            readContext: oo,
            useCallback: ia,
            useContext: ia,
            useEffect: ia,
            useImperativeHandle: ia,
            useLayoutEffect: ia,
            useMemo: ia,
            useReducer: ia,
            useRef: ia,
            useState: ia,
            useDebugValue: ia,
            useDeferredValue: ia,
            useTransition: ia,
            useMutableSource: ia,
            useOpaqueIdentifier: ia,
            unstable_isNewReconciler: !1,
          },
          Na = {
            readContext: oo,
            useCallback: function (e, t) {
              return (ua().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: oo,
            useEffect: _a,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null != n ? n.concat([e]) : null),
                ba(4, 2, Sa.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return ba(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = ua();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = ua();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = (e = r.queue =
                  {
                    pending: null,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: t,
                  }).dispatch =
                  Ia.bind(null, Jo, e)),
                [r.memoizedState, e]
              );
            },
            useRef: ma,
            useState: va,
            useDebugValue: Oa,
            useDeferredValue: function (e) {
              var t = va(e),
                n = t[0],
                r = t[1];
              return (
                _a(
                  function () {
                    var t = Xo.transition;
                    Xo.transition = 1;
                    try {
                      r(e);
                    } finally {
                      Xo.transition = t;
                    }
                  },
                  [e]
                ),
                n
              );
            },
            useTransition: function () {
              var e = va(!1),
                t = e[0];
              return ma((e = Pa.bind(null, e[1]))), [e, t];
            },
            useMutableSource: function (e, t, n) {
              var r = ua();
              return (
                (r.memoizedState = {
                  refs: { getSnapshot: t, setSnapshot: null },
                  source: e,
                  subscribe: n,
                }),
                pa(r, e, t, n)
              );
            },
            useOpaqueIdentifier: function () {
              if (Fo) {
                var e = !1,
                  t = (function (e) {
                    return { $$typeof: z, toString: e, valueOf: e };
                  })(function () {
                    throw (
                      (e || ((e = !0), n("r:" + (Gr++).toString(36))),
                      Error(a(355)))
                    );
                  }),
                  n = va(t)[1];
                return (
                  0 == (2 & Jo.mode) &&
                    ((Jo.flags |= 516),
                    ga(
                      5,
                      function () {
                        n("r:" + (Gr++).toString(36));
                      },
                      void 0,
                      null
                    )),
                  t
                );
              }
              return va((t = "r:" + (Gr++).toString(36))), t;
            },
            unstable_isNewReconciler: !1,
          },
          Aa = {
            readContext: oo,
            useCallback: Ca,
            useContext: oo,
            useEffect: ka,
            useImperativeHandle: Ea,
            useLayoutEffect: xa,
            useMemo: Ta,
            useReducer: ca,
            useRef: ya,
            useState: function () {
              return ca(sa);
            },
            useDebugValue: Oa,
            useDeferredValue: function (e) {
              var t = ca(sa),
                n = t[0],
                r = t[1];
              return (
                ka(
                  function () {
                    var t = Xo.transition;
                    Xo.transition = 1;
                    try {
                      r(e);
                    } finally {
                      Xo.transition = t;
                    }
                  },
                  [e]
                ),
                n
              );
            },
            useTransition: function () {
              var e = ca(sa)[0];
              return [ya().current, e];
            },
            useMutableSource: ha,
            useOpaqueIdentifier: function () {
              return ca(sa)[0];
            },
            unstable_isNewReconciler: !1,
          },
          La = {
            readContext: oo,
            useCallback: Ca,
            useContext: oo,
            useEffect: ka,
            useImperativeHandle: Ea,
            useLayoutEffect: xa,
            useMemo: Ta,
            useReducer: fa,
            useRef: ya,
            useState: function () {
              return fa(sa);
            },
            useDebugValue: Oa,
            useDeferredValue: function (e) {
              var t = fa(sa),
                n = t[0],
                r = t[1];
              return (
                ka(
                  function () {
                    var t = Xo.transition;
                    Xo.transition = 1;
                    try {
                      r(e);
                    } finally {
                      Xo.transition = t;
                    }
                  },
                  [e]
                ),
                n
              );
            },
            useTransition: function () {
              var e = fa(sa)[0];
              return [ya().current, e];
            },
            useMutableSource: ha,
            useOpaqueIdentifier: function () {
              return fa(sa)[0];
            },
            unstable_isNewReconciler: !1,
          },
          za = _.ReactCurrentOwner,
          ja = !1;
        function Ma(e, t, n, r) {
          t.child = null === e ? Co(t, null, n, r) : Oo(t, e.child, n, r);
        }
        function $a(e, t, n, r, i) {
          n = n.render;
          var o = t.ref;
          return (
            io(t, i),
            (r = aa(e, t, n, r, o, i)),
            null === e || ja
              ? ((t.flags |= 1), Ma(e, t, r, i), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -517),
                (e.lanes &= ~i),
                ru(e, t, i))
          );
        }
        function Da(e, t, n, r, i, o) {
          if (null === e) {
            var a = n.type;
            return "function" != typeof a ||
              Vl(a) ||
              void 0 !== a.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Wl(n.type, null, r, t, t.mode, o)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = a), Ua(e, t, a, r, i, o));
          }
          return (
            (a = e.child),
            0 == (i & o) &&
            ((i = a.memoizedProps),
            (n = null !== (n = n.compare) ? n : fr)(i, r) && e.ref === t.ref)
              ? ru(e, t, o)
              : ((t.flags |= 1),
                ((e = ql(a, r)).ref = t.ref),
                (e.return = t),
                (t.child = e))
          );
        }
        function Ua(e, t, n, r, i, o) {
          if (null !== e && fr(e.memoizedProps, r) && e.ref === t.ref) {
            if (((ja = !1), 0 == (o & i)))
              return (t.lanes = e.lanes), ru(e, t, o);
            0 != (16384 & e.flags) && (ja = !0);
          }
          return Va(e, t, n, r, o);
        }
        function Fa(e, t, n) {
          var r = t.pendingProps,
            i = r.children,
            o = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode || "unstable-defer-without-hiding" === r.mode)
            if (0 == (4 & t.mode))
              (t.memoizedState = { baseLanes: 0 }), wl(0, n);
            else {
              if (0 == (1073741824 & n))
                return (
                  (e = null !== o ? o.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = { baseLanes: e }),
                  wl(0, e),
                  null
                );
              (t.memoizedState = { baseLanes: 0 }),
                wl(0, null !== o ? o.baseLanes : n);
            }
          else
            null !== o
              ? ((r = o.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              wl(0, r);
          return Ma(e, t, i, n), t.child;
        }
        function Ba(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            (t.flags |= 128);
        }
        function Va(e, t, n, r, i) {
          var o = gi(n) ? hi : di.current;
          return (
            (o = vi(t, o)),
            io(t, i),
            (n = aa(e, t, n, r, o, i)),
            null === e || ja
              ? ((t.flags |= 1), Ma(e, t, n, i), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -517),
                (e.lanes &= ~i),
                ru(e, t, i))
          );
        }
        function qa(e, t, n, r, i) {
          if (gi(n)) {
            var o = !0;
            wi(t);
          } else o = !1;
          if ((io(t, i), null === t.stateNode))
            null !== e &&
              ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
              bo(t, n, r),
              _o(t, n, r, i),
              (r = !0);
          else if (null === e) {
            var a = t.stateNode,
              u = t.memoizedProps;
            a.props = u;
            var l = a.context,
              s = n.contextType;
            s =
              "object" == typeof s && null !== s
                ? oo(s)
                : vi(t, (s = gi(n) ? hi : di.current));
            var c = n.getDerivedStateFromProps,
              f =
                "function" == typeof c ||
                "function" == typeof a.getSnapshotBeforeUpdate;
            f ||
              ("function" != typeof a.UNSAFE_componentWillReceiveProps &&
                "function" != typeof a.componentWillReceiveProps) ||
              ((u !== r || l !== s) && wo(t, a, r, s)),
              (ao = !1);
            var d = t.memoizedState;
            (a.state = d),
              po(t, r, a, i),
              (l = t.memoizedState),
              u !== r || d !== l || pi.current || ao
                ? ("function" == typeof c &&
                    (go(t, n, c, r), (l = t.memoizedState)),
                  (u = ao || yo(t, n, u, r, d, l, s))
                    ? (f ||
                        ("function" != typeof a.UNSAFE_componentWillMount &&
                          "function" != typeof a.componentWillMount) ||
                        ("function" == typeof a.componentWillMount &&
                          a.componentWillMount(),
                        "function" == typeof a.UNSAFE_componentWillMount &&
                          a.UNSAFE_componentWillMount()),
                      "function" == typeof a.componentDidMount &&
                        (t.flags |= 4))
                    : ("function" == typeof a.componentDidMount &&
                        (t.flags |= 4),
                      (t.memoizedProps = r),
                      (t.memoizedState = l)),
                  (a.props = r),
                  (a.state = l),
                  (a.context = s),
                  (r = u))
                : ("function" == typeof a.componentDidMount && (t.flags |= 4),
                  (r = !1));
          } else {
            (a = t.stateNode),
              lo(e, t),
              (u = t.memoizedProps),
              (s = t.type === t.elementType ? u : Yi(t.type, u)),
              (a.props = s),
              (f = t.pendingProps),
              (d = a.context),
              (l =
                "object" == typeof (l = n.contextType) && null !== l
                  ? oo(l)
                  : vi(t, (l = gi(n) ? hi : di.current)));
            var p = n.getDerivedStateFromProps;
            (c =
              "function" == typeof p ||
              "function" == typeof a.getSnapshotBeforeUpdate) ||
              ("function" != typeof a.UNSAFE_componentWillReceiveProps &&
                "function" != typeof a.componentWillReceiveProps) ||
              ((u !== f || d !== l) && wo(t, a, r, l)),
              (ao = !1),
              (d = t.memoizedState),
              (a.state = d),
              po(t, r, a, i);
            var h = t.memoizedState;
            u !== f || d !== h || pi.current || ao
              ? ("function" == typeof p &&
                  (go(t, n, p, r), (h = t.memoizedState)),
                (s = ao || yo(t, n, s, r, d, h, l))
                  ? (c ||
                      ("function" != typeof a.UNSAFE_componentWillUpdate &&
                        "function" != typeof a.componentWillUpdate) ||
                      ("function" == typeof a.componentWillUpdate &&
                        a.componentWillUpdate(r, h, l),
                      "function" == typeof a.UNSAFE_componentWillUpdate &&
                        a.UNSAFE_componentWillUpdate(r, h, l)),
                    "function" == typeof a.componentDidUpdate && (t.flags |= 4),
                    "function" == typeof a.getSnapshotBeforeUpdate &&
                      (t.flags |= 256))
                  : ("function" != typeof a.componentDidUpdate ||
                      (u === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" != typeof a.getSnapshotBeforeUpdate ||
                      (u === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 256),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
                (a.props = r),
                (a.state = h),
                (a.context = l),
                (r = s))
              : ("function" != typeof a.componentDidUpdate ||
                  (u === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 4),
                "function" != typeof a.getSnapshotBeforeUpdate ||
                  (u === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 256),
                (r = !1));
          }
          return Wa(e, t, n, r, o, i);
        }
        function Wa(e, t, n, r, i, o) {
          Ba(e, t);
          var a = 0 != (64 & t.flags);
          if (!r && !a) return i && _i(t, n, !1), ru(e, t, o);
          (r = t.stateNode), (za.current = t);
          var u =
            a && "function" != typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && a
              ? ((t.child = Oo(t, e.child, null, o)),
                (t.child = Oo(t, null, u, o)))
              : Ma(e, t, u, o),
            (t.memoizedState = r.state),
            i && _i(t, n, !0),
            t.child
          );
        }
        function Ha(e) {
          var t = e.stateNode;
          t.pendingContext
            ? yi(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && yi(0, t.context, !1),
            Ao(e, t.containerInfo);
        }
        var Ka,
          Qa,
          Ga,
          Ya,
          Xa = { dehydrated: null, retryLane: 0 };
        function Za(e, t, n) {
          var r,
            i = t.pendingProps,
            o = Mo.current,
            a = !1;
          return (
            (r = 0 != (64 & t.flags)) ||
              (r = (null === e || null !== e.memoizedState) && 0 != (2 & o)),
            r
              ? ((a = !0), (t.flags &= -65))
              : (null !== e && null === e.memoizedState) ||
                void 0 === i.fallback ||
                !0 === i.unstable_avoidThisFallback ||
                (o |= 1),
            ci(Mo, 1 & o),
            null === e
              ? (void 0 !== i.fallback && qo(t),
                (e = i.children),
                (o = i.fallback),
                a
                  ? ((e = Ja(t, e, o, n)),
                    (t.child.memoizedState = { baseLanes: n }),
                    (t.memoizedState = Xa),
                    e)
                  : "number" == typeof i.unstable_expectedLoadTime
                  ? ((e = Ja(t, e, o, n)),
                    (t.child.memoizedState = { baseLanes: n }),
                    (t.memoizedState = Xa),
                    (t.lanes = 33554432),
                    e)
                  : (((n = Kl(
                      { mode: "visible", children: e },
                      t.mode,
                      n,
                      null
                    )).return = t),
                    (t.child = n)))
              : (e.memoizedState,
                a
                  ? ((i = (function (e, t, n, r, i) {
                      var o = t.mode,
                        a = e.child;
                      e = a.sibling;
                      var u = { mode: "hidden", children: n };
                      return (
                        0 == (2 & o) && t.child !== a
                          ? (((n = t.child).childLanes = 0),
                            (n.pendingProps = u),
                            null !== (a = n.lastEffect)
                              ? ((t.firstEffect = n.firstEffect),
                                (t.lastEffect = a),
                                (a.nextEffect = null))
                              : (t.firstEffect = t.lastEffect = null))
                          : (n = ql(a, u)),
                        null !== e
                          ? (r = ql(e, r))
                          : ((r = Hl(r, o, i, null)).flags |= 2),
                        (r.return = t),
                        (n.return = t),
                        (n.sibling = r),
                        (t.child = n),
                        r
                      );
                    })(e, t, i.children, i.fallback, n)),
                    (a = t.child),
                    (o = e.child.memoizedState),
                    (a.memoizedState =
                      null === o
                        ? { baseLanes: n }
                        : { baseLanes: o.baseLanes | n }),
                    (a.childLanes = e.childLanes & ~n),
                    (t.memoizedState = Xa),
                    i)
                  : ((n = (function (e, t, n, r) {
                      var i = e.child;
                      return (
                        (e = i.sibling),
                        (n = ql(i, { mode: "visible", children: n })),
                        0 == (2 & t.mode) && (n.lanes = r),
                        (n.return = t),
                        (n.sibling = null),
                        null !== e &&
                          ((e.nextEffect = null),
                          (e.flags = 8),
                          (t.firstEffect = t.lastEffect = e)),
                        (t.child = n)
                      );
                    })(e, t, i.children, n)),
                    (t.memoizedState = null),
                    n))
          );
        }
        function Ja(e, t, n, r) {
          var i = e.mode,
            o = e.child;
          return (
            (t = { mode: "hidden", children: t }),
            0 == (2 & i) && null !== o
              ? ((o.childLanes = 0), (o.pendingProps = t))
              : (o = Kl(t, i, 0, null)),
            (n = Hl(n, i, r, null)),
            (o.return = e),
            (n.return = e),
            (o.sibling = n),
            (e.child = o),
            n
          );
        }
        function eu(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          null !== n && (n.lanes |= t), ro(e.return, t);
        }
        function tu(e, t, n, r, i, o) {
          var a = e.memoizedState;
          null === a
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: i,
                lastEffect: o,
              })
            : ((a.isBackwards = t),
              (a.rendering = null),
              (a.renderingStartTime = 0),
              (a.last = r),
              (a.tail = n),
              (a.tailMode = i),
              (a.lastEffect = o));
        }
        function nu(e, t, n) {
          var r = t.pendingProps,
            i = r.revealOrder,
            o = r.tail;
          if ((Ma(e, t, r.children, n), 0 != (2 & (r = Mo.current))))
            (r = (1 & r) | 2), (t.flags |= 64);
          else {
            if (null !== e && 0 != (64 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && eu(e, n);
                else if (19 === e.tag) eu(e, n);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((ci(Mo, r), 0 == (2 & t.mode))) t.memoizedState = null;
          else
            switch (i) {
              case "forwards":
                for (n = t.child, i = null; null !== n; )
                  null !== (e = n.alternate) && null === $o(e) && (i = n),
                    (n = n.sibling);
                null === (n = i)
                  ? ((i = t.child), (t.child = null))
                  : ((i = n.sibling), (n.sibling = null)),
                  tu(t, !1, i, n, o, t.lastEffect);
                break;
              case "backwards":
                for (n = null, i = t.child, t.child = null; null !== i; ) {
                  if (null !== (e = i.alternate) && null === $o(e)) {
                    t.child = i;
                    break;
                  }
                  (e = i.sibling), (i.sibling = n), (n = i), (i = e);
                }
                tu(t, !0, n, null, o, t.lastEffect);
                break;
              case "together":
                tu(t, !1, null, null, void 0, t.lastEffect);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function ru(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Du |= t.lanes),
            0 != (n & t.childLanes))
          ) {
            if (null !== e && t.child !== e.child) throw Error(a(153));
            if (null !== t.child) {
              for (
                n = ql((e = t.child), e.pendingProps),
                  t.child = n,
                  n.return = t;
                null !== e.sibling;

              )
                (e = e.sibling),
                  ((n = n.sibling = ql(e, e.pendingProps)).return = t);
              n.sibling = null;
            }
            return t.child;
          }
          return null;
        }
        function iu(e, t) {
          if (!Fo)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function ou(e, t, n) {
          var r = t.pendingProps;
          switch (t.tag) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return null;
            case 1:
            case 17:
              return gi(t.type) && mi(), null;
            case 3:
              return (
                Lo(),
                si(pi),
                si(di),
                Go(),
                (r = t.stateNode).pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (Ho(t) ? (t.flags |= 4) : r.hydrate || (t.flags |= 256)),
                Qa(t),
                null
              );
            case 5:
              jo(t);
              var o = No(Ro.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                Ga(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 128);
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(a(166));
                  return null;
                }
                if (((e = No(Po.current)), Ho(t))) {
                  (r = t.stateNode), (n = t.type);
                  var u = t.memoizedProps;
                  switch (((r[Xr] = t), (r[Zr] = u), n)) {
                    case "dialog":
                      Pr("cancel", r), Pr("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Pr("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (e = 0; e < Er.length; e++) Pr(Er[e], r);
                      break;
                    case "source":
                      Pr("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Pr("error", r), Pr("load", r);
                      break;
                    case "details":
                      Pr("toggle", r);
                      break;
                    case "input":
                      ee(r, u), Pr("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!u.multiple }),
                        Pr("invalid", r);
                      break;
                    case "textarea":
                      le(r, u), Pr("invalid", r);
                  }
                  for (var s in (xe(n, u), (e = null), u))
                    u.hasOwnProperty(s) &&
                      ((o = u[s]),
                      "children" === s
                        ? "string" == typeof o
                          ? r.textContent !== o && (e = ["children", o])
                          : "number" == typeof o &&
                            r.textContent !== "" + o &&
                            (e = ["children", "" + o])
                        : l.hasOwnProperty(s) &&
                          null != o &&
                          "onScroll" === s &&
                          Pr("scroll", r));
                  switch (n) {
                    case "input":
                      Y(r), re(r, u, !0);
                      break;
                    case "textarea":
                      Y(r), ce(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" == typeof u.onClick && (r.onclick = Dr);
                  }
                  (r = e), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  switch (
                    ((s = 9 === o.nodeType ? o : o.ownerDocument),
                    e === fe.html && (e = de(n)),
                    e === fe.html
                      ? "script" === n
                        ? (((e = s.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" == typeof r.is
                        ? (e = s.createElement(n, { is: r.is }))
                        : ((e = s.createElement(n)),
                          "select" === n &&
                            ((s = e),
                            r.multiple
                              ? (s.multiple = !0)
                              : r.size && (s.size = r.size)))
                      : (e = s.createElementNS(e, n)),
                    (e[Xr] = t),
                    (e[Zr] = r),
                    Ka(e, t, !1, !1),
                    (t.stateNode = e),
                    (s = Se(n, r)),
                    n)
                  ) {
                    case "dialog":
                      Pr("cancel", e), Pr("close", e), (o = r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Pr("load", e), (o = r);
                      break;
                    case "video":
                    case "audio":
                      for (o = 0; o < Er.length; o++) Pr(Er[o], e);
                      o = r;
                      break;
                    case "source":
                      Pr("error", e), (o = r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Pr("error", e), Pr("load", e), (o = r);
                      break;
                    case "details":
                      Pr("toggle", e), (o = r);
                      break;
                    case "input":
                      ee(e, r), (o = J(e, r)), Pr("invalid", e);
                      break;
                    case "option":
                      o = oe(e, r);
                      break;
                    case "select":
                      (e._wrapperState = { wasMultiple: !!r.multiple }),
                        (o = i({}, r, { value: void 0 })),
                        Pr("invalid", e);
                      break;
                    case "textarea":
                      le(e, r), (o = ue(e, r)), Pr("invalid", e);
                      break;
                    default:
                      o = r;
                  }
                  xe(n, o);
                  var c = o;
                  for (u in c)
                    if (c.hasOwnProperty(u)) {
                      var f = c[u];
                      "style" === u
                        ? _e(e, f)
                        : "dangerouslySetInnerHTML" === u
                        ? null != (f = f ? f.__html : void 0) && ge(e, f)
                        : "children" === u
                        ? "string" == typeof f
                          ? ("textarea" !== n || "" !== f) && me(e, f)
                          : "number" == typeof f && me(e, "" + f)
                        : "suppressContentEditableWarning" !== u &&
                          "suppressHydrationWarning" !== u &&
                          "autoFocus" !== u &&
                          (l.hasOwnProperty(u)
                            ? null != f && "onScroll" === u && Pr("scroll", e)
                            : null != f && w(e, u, f, s));
                    }
                  switch (n) {
                    case "input":
                      Y(e), re(e, r, !1);
                      break;
                    case "textarea":
                      Y(e), ce(e);
                      break;
                    case "option":
                      null != r.value &&
                        e.setAttribute("value", "" + Q(r.value));
                      break;
                    case "select":
                      (e.multiple = !!r.multiple),
                        null != (u = r.value)
                          ? ae(e, !!r.multiple, u, !1)
                          : null != r.defaultValue &&
                            ae(e, !!r.multiple, r.defaultValue, !0);
                      break;
                    default:
                      "function" == typeof o.onClick && (e.onclick = Dr);
                  }
                  Br(n, r) && (t.flags |= 4);
                }
                null !== t.ref && (t.flags |= 128);
              }
              return null;
            case 6:
              if (e && null != t.stateNode) Ya(e, t, e.memoizedProps, r);
              else {
                if ("string" != typeof r && null === t.stateNode)
                  throw Error(a(166));
                (n = No(Ro.current)),
                  No(Po.current),
                  Ho(t)
                    ? ((r = t.stateNode),
                      (n = t.memoizedProps),
                      (r[Xr] = t),
                      r.nodeValue !== n && (t.flags |= 4))
                    : (((r = (
                        9 === n.nodeType ? n : n.ownerDocument
                      ).createTextNode(r))[Xr] = t),
                      (t.stateNode = r));
              }
              return null;
            case 13:
              return (
                si(Mo),
                (r = t.memoizedState),
                0 != (64 & t.flags)
                  ? ((t.lanes = n), t)
                  : ((r = null !== r),
                    (n = !1),
                    null === e
                      ? void 0 !== t.memoizedProps.fallback && Ho(t)
                      : (n = null !== e.memoizedState),
                    r &&
                      !n &&
                      0 != (2 & t.mode) &&
                      ((null === e &&
                        !0 !== t.memoizedProps.unstable_avoidThisFallback) ||
                      0 != (1 & Mo.current)
                        ? 0 === ju && (ju = 3)
                        : ((0 !== ju && 3 !== ju) || (ju = 4),
                          null === Ru ||
                            (0 == (134217727 & Du) && 0 == (134217727 & Uu)) ||
                            gl(Ru, Au))),
                    (r || n) && (t.flags |= 4),
                    null)
              );
            case 4:
              return (
                Lo(), Qa(t), null === e && Rr(t.stateNode.containerInfo), null
              );
            case 10:
              return no(t), null;
            case 19:
              if ((si(Mo), null === (r = t.memoizedState))) return null;
              if (((u = 0 != (64 & t.flags)), null === (s = r.rendering)))
                if (u) iu(r, !1);
                else {
                  if (0 !== ju || (null !== e && 0 != (64 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (s = $o(e))) {
                        for (
                          t.flags |= 64,
                            iu(r, !1),
                            null !== (u = s.updateQueue) &&
                              ((t.updateQueue = u), (t.flags |= 4)),
                            null === r.lastEffect && (t.firstEffect = null),
                            t.lastEffect = r.lastEffect,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((u = n).flags &= 2),
                            (u.nextEffect = null),
                            (u.firstEffect = null),
                            (u.lastEffect = null),
                            null === (s = u.alternate)
                              ? ((u.childLanes = 0),
                                (u.lanes = e),
                                (u.child = null),
                                (u.memoizedProps = null),
                                (u.memoizedState = null),
                                (u.updateQueue = null),
                                (u.dependencies = null),
                                (u.stateNode = null))
                              : ((u.childLanes = s.childLanes),
                                (u.lanes = s.lanes),
                                (u.child = s.child),
                                (u.memoizedProps = s.memoizedProps),
                                (u.memoizedState = s.memoizedState),
                                (u.updateQueue = s.updateQueue),
                                (u.type = s.type),
                                (e = s.dependencies),
                                (u.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return ci(Mo, (1 & Mo.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== r.tail &&
                    Bi() > qu &&
                    ((t.flags |= 64),
                    (u = !0),
                    iu(r, !1),
                    (t.lanes = 33554432));
                }
              else {
                if (!u)
                  if (null !== (e = $o(s))) {
                    if (
                      ((t.flags |= 64),
                      (u = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      iu(r, !0),
                      null === r.tail &&
                        "hidden" === r.tailMode &&
                        !s.alternate &&
                        !Fo)
                    )
                      return (
                        null !== (t = t.lastEffect = r.lastEffect) &&
                          (t.nextEffect = null),
                        null
                      );
                  } else
                    2 * Bi() - r.renderingStartTime > qu &&
                      1073741824 !== n &&
                      ((t.flags |= 64),
                      (u = !0),
                      iu(r, !1),
                      (t.lanes = 33554432));
                r.isBackwards
                  ? ((s.sibling = t.child), (t.child = s))
                  : (null !== (n = r.last) ? (n.sibling = s) : (t.child = s),
                    (r.last = s));
              }
              return null !== r.tail
                ? ((n = r.tail),
                  (r.rendering = n),
                  (r.tail = n.sibling),
                  (r.lastEffect = t.lastEffect),
                  (r.renderingStartTime = Bi()),
                  (n.sibling = null),
                  (t = Mo.current),
                  ci(Mo, u ? (1 & t) | 2 : 1 & t),
                  n)
                : null;
            case 23:
            case 24:
              return (
                _l(),
                null !== e &&
                  (null !== e.memoizedState) != (null !== t.memoizedState) &&
                  "unstable-defer-without-hiding" !== r.mode &&
                  (t.flags |= 4),
                null
              );
          }
          throw Error(a(156, t.tag));
        }
        function au(e) {
          switch (e.tag) {
            case 1:
              gi(e.type) && mi();
              var t = e.flags;
              return 4096 & t ? ((e.flags = (-4097 & t) | 64), e) : null;
            case 3:
              if ((Lo(), si(pi), si(di), Go(), 0 != (64 & (t = e.flags))))
                throw Error(a(285));
              return (e.flags = (-4097 & t) | 64), e;
            case 5:
              return jo(e), null;
            case 13:
              return (
                si(Mo),
                4096 & (t = e.flags) ? ((e.flags = (-4097 & t) | 64), e) : null
              );
            case 19:
              return si(Mo), null;
            case 4:
              return Lo(), null;
            case 10:
              return no(e), null;
            case 23:
            case 24:
              return _l(), null;
            default:
              return null;
          }
        }
        function uu(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += H(r)), (r = r.return);
            } while (r);
            var i = n;
          } catch (e) {
            i = "\nError generating stack: " + e.message + "\n" + e.stack;
          }
          return { value: e, source: t, stack: i };
        }
        function lu(e, t) {
          try {
            console.error(t.value);
          } catch (e) {
            setTimeout(function () {
              throw e;
            });
          }
        }
        (Ka = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (Qa = function () {}),
          (Ga = function (e, t, n, r) {
            var o = e.memoizedProps;
            if (o !== r) {
              (e = t.stateNode), No(Po.current);
              var a,
                u = null;
              switch (n) {
                case "input":
                  (o = J(e, o)), (r = J(e, r)), (u = []);
                  break;
                case "option":
                  (o = oe(e, o)), (r = oe(e, r)), (u = []);
                  break;
                case "select":
                  (o = i({}, o, { value: void 0 })),
                    (r = i({}, r, { value: void 0 })),
                    (u = []);
                  break;
                case "textarea":
                  (o = ue(e, o)), (r = ue(e, r)), (u = []);
                  break;
                default:
                  "function" != typeof o.onClick &&
                    "function" == typeof r.onClick &&
                    (e.onclick = Dr);
              }
              for (f in (xe(n, r), (n = null), o))
                if (!r.hasOwnProperty(f) && o.hasOwnProperty(f) && null != o[f])
                  if ("style" === f) {
                    var s = o[f];
                    for (a in s)
                      s.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== f &&
                      "children" !== f &&
                      "suppressContentEditableWarning" !== f &&
                      "suppressHydrationWarning" !== f &&
                      "autoFocus" !== f &&
                      (l.hasOwnProperty(f)
                        ? u || (u = [])
                        : (u = u || []).push(f, null));
              for (f in r) {
                var c = r[f];
                if (
                  ((s = null != o ? o[f] : void 0),
                  r.hasOwnProperty(f) && c !== s && (null != c || null != s))
                )
                  if ("style" === f)
                    if (s) {
                      for (a in s)
                        !s.hasOwnProperty(a) ||
                          (c && c.hasOwnProperty(a)) ||
                          (n || (n = {}), (n[a] = ""));
                      for (a in c)
                        c.hasOwnProperty(a) &&
                          s[a] !== c[a] &&
                          (n || (n = {}), (n[a] = c[a]));
                    } else n || (u || (u = []), u.push(f, n)), (n = c);
                  else
                    "dangerouslySetInnerHTML" === f
                      ? ((c = c ? c.__html : void 0),
                        (s = s ? s.__html : void 0),
                        null != c && s !== c && (u = u || []).push(f, c))
                      : "children" === f
                      ? ("string" != typeof c && "number" != typeof c) ||
                        (u = u || []).push(f, "" + c)
                      : "suppressContentEditableWarning" !== f &&
                        "suppressHydrationWarning" !== f &&
                        (l.hasOwnProperty(f)
                          ? (null != c && "onScroll" === f && Pr("scroll", e),
                            u || s === c || (u = []))
                          : "object" == typeof c &&
                            null !== c &&
                            c.$$typeof === z
                          ? c.toString()
                          : (u = u || []).push(f, c));
              }
              n && (u = u || []).push("style", n);
              var f = u;
              (t.updateQueue = f) && (t.flags |= 4);
            }
          }),
          (Ya = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var su = "function" == typeof WeakMap ? WeakMap : Map;
        function cu(e, t, n) {
          ((n = so(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              Qu || ((Qu = !0), (Gu = r)), lu(0, t);
            }),
            n
          );
        }
        function fu(e, t, n) {
          (n = so(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" == typeof r) {
            var i = t.value;
            n.payload = function () {
              return lu(0, t), r(i);
            };
          }
          var o = e.stateNode;
          return (
            null !== o &&
              "function" == typeof o.componentDidCatch &&
              (n.callback = function () {
                "function" != typeof r &&
                  (null === Yu ? (Yu = new Set([this])) : Yu.add(this),
                  lu(0, t));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        var du = "function" == typeof WeakSet ? WeakSet : Set;
        function pu(e) {
          var t = e.ref;
          if (null !== t)
            if ("function" == typeof t)
              try {
                t(null);
              } catch (t) {
                $l(e, t);
              }
            else t.current = null;
        }
        function hu(e, t) {
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
            case 22:
            case 5:
            case 6:
            case 4:
            case 17:
              return;
            case 1:
              if (256 & t.flags && null !== e) {
                var n = e.memoizedProps,
                  r = e.memoizedState;
                (t = (e = t.stateNode).getSnapshotBeforeUpdate(
                  t.elementType === t.type ? n : Yi(t.type, n),
                  r
                )),
                  (e.__reactInternalSnapshotBeforeUpdate = t);
              }
              return;
            case 3:
              return void (256 & t.flags && Hr(t.stateNode.containerInfo));
          }
          throw Error(a(163));
        }
        function vu(e, t, n) {
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
            case 22:
              if (
                null !==
                (t = null !== (t = n.updateQueue) ? t.lastEffect : null)
              ) {
                e = t = t.next;
                do {
                  if (3 == (3 & e.tag)) {
                    var r = e.create;
                    e.destroy = r();
                  }
                  e = e.next;
                } while (e !== t);
              }
              if (
                null !==
                (t = null !== (t = n.updateQueue) ? t.lastEffect : null)
              ) {
                e = t = t.next;
                do {
                  var i = e;
                  (r = i.next),
                    0 != (4 & (i = i.tag)) &&
                      0 != (1 & i) &&
                      (zl(n, e), Ll(n, e)),
                    (e = r);
                } while (e !== t);
              }
              return;
            case 1:
              return (
                (e = n.stateNode),
                4 & n.flags &&
                  (null === t
                    ? e.componentDidMount()
                    : ((r =
                        n.elementType === n.type
                          ? t.memoizedProps
                          : Yi(n.type, t.memoizedProps)),
                      e.componentDidUpdate(
                        r,
                        t.memoizedState,
                        e.__reactInternalSnapshotBeforeUpdate
                      ))),
                void (null !== (t = n.updateQueue) && ho(n, t, e))
              );
            case 3:
              if (null !== (t = n.updateQueue)) {
                if (((e = null), null !== n.child))
                  switch (n.child.tag) {
                    case 5:
                    case 1:
                      e = n.child.stateNode;
                  }
                ho(n, t, e);
              }
              return;
            case 5:
              return (
                (e = n.stateNode),
                void (
                  null === t &&
                  4 & n.flags &&
                  Br(n.type, n.memoizedProps) &&
                  e.focus()
                )
              );
            case 6:
            case 4:
            case 12:
            case 19:
            case 17:
            case 20:
            case 21:
            case 23:
            case 24:
              return;
            case 13:
              return void (
                null === n.memoizedState &&
                ((n = n.alternate),
                null !== n &&
                  ((n = n.memoizedState),
                  null !== n && ((n = n.dehydrated), null !== n && _t(n))))
              );
          }
          throw Error(a(163));
        }
        function gu(e, t) {
          for (var n = e; ; ) {
            if (5 === n.tag) {
              var r = n.stateNode;
              if (t)
                "function" == typeof (r = r.style).setProperty
                  ? r.setProperty("display", "none", "important")
                  : (r.display = "none");
              else {
                r = n.stateNode;
                var i = n.memoizedProps.style;
                (i =
                  null != i && i.hasOwnProperty("display") ? i.display : null),
                  (r.style.display = we("display", i));
              }
            } else if (6 === n.tag)
              n.stateNode.nodeValue = t ? "" : n.memoizedProps;
            else if (
              ((23 !== n.tag && 24 !== n.tag) ||
                null === n.memoizedState ||
                n === e) &&
              null !== n.child
            ) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === e) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === e) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }
        function mu(e, t) {
          if (xi && "function" == typeof xi.onCommitFiberUnmount)
            try {
              xi.onCommitFiberUnmount(ki, t);
            } catch (e) {}
          switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
            case 22:
              if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
                var n = (e = e.next);
                do {
                  var r = n,
                    i = r.destroy;
                  if (((r = r.tag), void 0 !== i))
                    if (0 != (4 & r)) zl(t, n);
                    else {
                      r = t;
                      try {
                        i();
                      } catch (e) {
                        $l(r, e);
                      }
                    }
                  n = n.next;
                } while (n !== e);
              }
              break;
            case 1:
              if (
                (pu(t),
                "function" == typeof (e = t.stateNode).componentWillUnmount)
              )
                try {
                  (e.props = t.memoizedProps),
                    (e.state = t.memoizedState),
                    e.componentWillUnmount();
                } catch (e) {
                  $l(t, e);
                }
              break;
            case 5:
              pu(t);
              break;
            case 4:
              xu(e, t);
          }
        }
        function yu(e) {
          (e.alternate = null),
            (e.child = null),
            (e.dependencies = null),
            (e.firstEffect = null),
            (e.lastEffect = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.return = null),
            (e.updateQueue = null);
        }
        function bu(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function wu(e) {
          e: {
            for (var t = e.return; null !== t; ) {
              if (bu(t)) break e;
              t = t.return;
            }
            throw Error(a(160));
          }
          var n = t;
          switch (((t = n.stateNode), n.tag)) {
            case 5:
              var r = !1;
              break;
            case 3:
            case 4:
              (t = t.containerInfo), (r = !0);
              break;
            default:
              throw Error(a(161));
          }
          16 & n.flags && (me(t, ""), (n.flags &= -17));
          e: t: for (n = e; ; ) {
            for (; null === n.sibling; ) {
              if (null === n.return || bu(n.return)) {
                n = null;
                break e;
              }
              n = n.return;
            }
            for (
              n.sibling.return = n.return, n = n.sibling;
              5 !== n.tag && 6 !== n.tag && 18 !== n.tag;

            ) {
              if (2 & n.flags) continue t;
              if (null === n.child || 4 === n.tag) continue t;
              (n.child.return = n), (n = n.child);
            }
            if (!(2 & n.flags)) {
              n = n.stateNode;
              break e;
            }
          }
          r ? _u(e, n, t) : ku(e, n, t);
        }
        function _u(e, t, n) {
          var r = e.tag,
            i = 5 === r || 6 === r;
          if (i)
            (e = i ? e.stateNode : e.stateNode.instance),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  null != (n = n._reactRootContainer) ||
                    null !== t.onclick ||
                    (t.onclick = Dr));
          else if (4 !== r && null !== (e = e.child))
            for (_u(e, t, n), e = e.sibling; null !== e; )
              _u(e, t, n), (e = e.sibling);
        }
        function ku(e, t, n) {
          var r = e.tag,
            i = 5 === r || 6 === r;
          if (i)
            (e = i ? e.stateNode : e.stateNode.instance),
              t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (ku(e, t, n), e = e.sibling; null !== e; )
              ku(e, t, n), (e = e.sibling);
        }
        function xu(e, t) {
          for (var n, r, i = t, o = !1; ; ) {
            if (!o) {
              o = i.return;
              e: for (;;) {
                if (null === o) throw Error(a(160));
                switch (((n = o.stateNode), o.tag)) {
                  case 5:
                    r = !1;
                    break e;
                  case 3:
                  case 4:
                    (n = n.containerInfo), (r = !0);
                    break e;
                }
                o = o.return;
              }
              o = !0;
            }
            if (5 === i.tag || 6 === i.tag) {
              e: for (var u = e, l = i, s = l; ; )
                if ((mu(u, s), null !== s.child && 4 !== s.tag))
                  (s.child.return = s), (s = s.child);
                else {
                  if (s === l) break e;
                  for (; null === s.sibling; ) {
                    if (null === s.return || s.return === l) break e;
                    s = s.return;
                  }
                  (s.sibling.return = s.return), (s = s.sibling);
                }
              r
                ? ((u = n),
                  (l = i.stateNode),
                  8 === u.nodeType
                    ? u.parentNode.removeChild(l)
                    : u.removeChild(l))
                : n.removeChild(i.stateNode);
            } else if (4 === i.tag) {
              if (null !== i.child) {
                (n = i.stateNode.containerInfo),
                  (r = !0),
                  (i.child.return = i),
                  (i = i.child);
                continue;
              }
            } else if ((mu(e, i), null !== i.child)) {
              (i.child.return = i), (i = i.child);
              continue;
            }
            if (i === t) break;
            for (; null === i.sibling; ) {
              if (null === i.return || i.return === t) return;
              4 === (i = i.return).tag && (o = !1);
            }
            (i.sibling.return = i.return), (i = i.sibling);
          }
        }
        function Su(e, t) {
          switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
            case 22:
              var n = t.updateQueue;
              if (null !== (n = null !== n ? n.lastEffect : null)) {
                var r = (n = n.next);
                do {
                  3 == (3 & r.tag) &&
                    ((e = r.destroy),
                    (r.destroy = void 0),
                    void 0 !== e && e()),
                    (r = r.next);
                } while (r !== n);
              }
              return;
            case 1:
            case 12:
            case 17:
              return;
            case 5:
              if (null != (n = t.stateNode)) {
                r = t.memoizedProps;
                var i = null !== e ? e.memoizedProps : r;
                e = t.type;
                var o = t.updateQueue;
                if (((t.updateQueue = null), null !== o)) {
                  for (
                    n[Zr] = r,
                      "input" === e &&
                        "radio" === r.type &&
                        null != r.name &&
                        te(n, r),
                      Se(e, i),
                      t = Se(e, r),
                      i = 0;
                    i < o.length;
                    i += 2
                  ) {
                    var u = o[i],
                      l = o[i + 1];
                    "style" === u
                      ? _e(n, l)
                      : "dangerouslySetInnerHTML" === u
                      ? ge(n, l)
                      : "children" === u
                      ? me(n, l)
                      : w(n, u, l, t);
                  }
                  switch (e) {
                    case "input":
                      ne(n, r);
                      break;
                    case "textarea":
                      se(n, r);
                      break;
                    case "select":
                      (e = n._wrapperState.wasMultiple),
                        (n._wrapperState.wasMultiple = !!r.multiple),
                        null != (o = r.value)
                          ? ae(n, !!r.multiple, o, !1)
                          : e !== !!r.multiple &&
                            (null != r.defaultValue
                              ? ae(n, !!r.multiple, r.defaultValue, !0)
                              : ae(n, !!r.multiple, r.multiple ? [] : "", !1));
                  }
                }
              }
              return;
            case 6:
              if (null === t.stateNode) throw Error(a(162));
              return void (t.stateNode.nodeValue = t.memoizedProps);
            case 3:
              return void (
                (n = t.stateNode).hydrate &&
                ((n.hydrate = !1), _t(n.containerInfo))
              );
            case 13:
              return (
                null !== t.memoizedState && ((Vu = Bi()), gu(t.child, !0)),
                void Eu(t)
              );
            case 19:
              return void Eu(t);
            case 23:
            case 24:
              return void gu(t, null !== t.memoizedState);
          }
          throw Error(a(163));
        }
        function Eu(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new du()),
              t.forEach(function (t) {
                var r = Ul.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function Ou(e, t) {
          return (
            null !== e &&
            (null === (e = e.memoizedState) || null !== e.dehydrated) &&
            null !== (t = t.memoizedState) &&
            null === t.dehydrated
          );
        }
        var Cu = Math.ceil,
          Tu = _.ReactCurrentDispatcher,
          Pu = _.ReactCurrentOwner,
          Iu = 0,
          Ru = null,
          Nu = null,
          Au = 0,
          Lu = 0,
          zu = li(0),
          ju = 0,
          Mu = null,
          $u = 0,
          Du = 0,
          Uu = 0,
          Fu = 0,
          Bu = null,
          Vu = 0,
          qu = 1 / 0;
        function Wu() {
          qu = Bi() + 500;
        }
        var Hu,
          Ku = null,
          Qu = !1,
          Gu = null,
          Yu = null,
          Xu = !1,
          Zu = null,
          Ju = 90,
          el = [],
          tl = [],
          nl = null,
          rl = 0,
          il = null,
          ol = -1,
          al = 0,
          ul = 0,
          ll = null,
          sl = !1;
        function cl() {
          return 0 != (48 & Iu) ? Bi() : -1 !== ol ? ol : (ol = Bi());
        }
        function fl(e) {
          if (0 == (2 & (e = e.mode))) return 1;
          if (0 == (4 & e)) return 99 === Vi() ? 1 : 2;
          if ((0 === al && (al = $u), 0 !== Gi.transition)) {
            0 !== ul && (ul = null !== Bu ? Bu.pendingLanes : 0), (e = al);
            var t = 4186112 & ~ul;
            return (
              0 == (t &= -t) &&
                0 == (t = (e = 4186112 & ~e) & -e) &&
                (t = 8192),
              t
            );
          }
          return (
            (e = Vi()),
            (e = Dt(
              0 != (4 & Iu) && 98 === e
                ? 12
                : (e = (function (e) {
                    switch (e) {
                      case 99:
                        return 15;
                      case 98:
                        return 10;
                      case 97:
                      case 96:
                        return 8;
                      case 95:
                        return 2;
                      default:
                        return 0;
                    }
                  })(e)),
              al
            ))
          );
        }
        function dl(e, t, n) {
          if (50 < rl) throw ((rl = 0), (il = null), Error(a(185)));
          if (null === (e = pl(e, t))) return null;
          Bt(e, t, n), e === Ru && ((Uu |= t), 4 === ju && gl(e, Au));
          var r = Vi();
          1 === t
            ? 0 != (8 & Iu) && 0 == (48 & Iu)
              ? ml(e)
              : (hl(e, n), 0 === Iu && (Wu(), Ki()))
            : (0 == (4 & Iu) ||
                (98 !== r && 99 !== r) ||
                (null === nl ? (nl = new Set([e])) : nl.add(e)),
              hl(e, n)),
            (Bu = e);
        }
        function pl(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        function hl(e, t) {
          for (
            var n = e.callbackNode,
              r = e.suspendedLanes,
              i = e.pingedLanes,
              o = e.expirationTimes,
              u = e.pendingLanes;
            0 < u;

          ) {
            var l = 31 - Vt(u),
              s = 1 << l,
              c = o[l];
            if (-1 === c) {
              if (0 == (s & r) || 0 != (s & i)) {
                (c = t), jt(s);
                var f = zt;
                o[l] = 10 <= f ? c + 250 : 6 <= f ? c + 5e3 : -1;
              }
            } else c <= t && (e.expiredLanes |= s);
            u &= ~s;
          }
          if (((r = Mt(e, e === Ru ? Au : 0)), (t = zt), 0 === r))
            null !== n &&
              (n !== ji && Oi(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0));
          else {
            if (null !== n) {
              if (e.callbackPriority === t) return;
              n !== ji && Oi(n);
            }
            15 === t
              ? ((n = ml.bind(null, e)),
                null === $i ? (($i = [n]), (Di = Ei(Ri, Qi))) : $i.push(n),
                (n = ji))
              : 14 === t
              ? (n = Hi(99, ml.bind(null, e)))
              : ((n = (function (e) {
                  switch (e) {
                    case 15:
                    case 14:
                      return 99;
                    case 13:
                    case 12:
                    case 11:
                    case 10:
                      return 98;
                    case 9:
                    case 8:
                    case 7:
                    case 6:
                    case 4:
                    case 5:
                      return 97;
                    case 3:
                    case 2:
                    case 1:
                      return 95;
                    case 0:
                      return 90;
                    default:
                      throw Error(a(358, e));
                  }
                })(t)),
                (n = Hi(n, vl.bind(null, e)))),
              (e.callbackPriority = t),
              (e.callbackNode = n);
          }
        }
        function vl(e) {
          if (((ol = -1), (ul = al = 0), 0 != (48 & Iu))) throw Error(a(327));
          var t = e.callbackNode;
          if (Al() && e.callbackNode !== t) return null;
          var n = Mt(e, e === Ru ? Au : 0);
          if (0 === n) return null;
          var r = n,
            i = Iu;
          Iu |= 16;
          var o = Sl();
          for ((Ru === e && Au === r) || (Wu(), kl(e, r)); ; )
            try {
              Cl();
              break;
            } catch (t) {
              xl(e, t);
            }
          if (
            (to(),
            (Tu.current = o),
            (Iu = i),
            null !== Nu ? (r = 0) : ((Ru = null), (Au = 0), (r = ju)),
            0 != ($u & Uu))
          )
            kl(e, 0);
          else if (0 !== r) {
            if (
              (2 === r &&
                ((Iu |= 64),
                e.hydrate && ((e.hydrate = !1), Hr(e.containerInfo)),
                0 !== (n = $t(e)) && (r = El(e, n))),
              1 === r)
            )
              throw ((t = Mu), kl(e, 0), gl(e, n), hl(e, Bi()), t);
            switch (
              ((e.finishedWork = e.current.alternate), (e.finishedLanes = n), r)
            ) {
              case 0:
              case 1:
                throw Error(a(345));
              case 2:
              case 5:
                Il(e);
                break;
              case 3:
                if (
                  (gl(e, n), (62914560 & n) === n && 10 < (r = Vu + 500 - Bi()))
                ) {
                  if (0 !== Mt(e, 0)) break;
                  if (((i = e.suspendedLanes) & n) !== n) {
                    cl(), (e.pingedLanes |= e.suspendedLanes & i);
                    break;
                  }
                  e.timeoutHandle = qr(Il.bind(null, e), r);
                  break;
                }
                Il(e);
                break;
              case 4:
                if ((gl(e, n), (4186112 & n) === n)) break;
                for (r = e.eventTimes, i = -1; 0 < n; ) {
                  var u = 31 - Vt(n);
                  (o = 1 << u), (u = r[u]) > i && (i = u), (n &= ~o);
                }
                if (
                  ((n = i),
                  10 <
                    (n =
                      (120 > (n = Bi() - n)
                        ? 120
                        : 480 > n
                        ? 480
                        : 1080 > n
                        ? 1080
                        : 1920 > n
                        ? 1920
                        : 3e3 > n
                        ? 3e3
                        : 4320 > n
                        ? 4320
                        : 1960 * Cu(n / 1960)) - n))
                ) {
                  e.timeoutHandle = qr(Il.bind(null, e), n);
                  break;
                }
                Il(e);
                break;
              default:
                throw Error(a(329));
            }
          }
          return hl(e, Bi()), e.callbackNode === t ? vl.bind(null, e) : null;
        }
        function gl(e, t) {
          for (
            t &= ~Fu,
              t &= ~Uu,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - Vt(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function ml(e) {
          if (0 != (48 & Iu)) throw Error(a(327));
          if ((Al(), e === Ru && 0 != (e.expiredLanes & Au))) {
            var t = Au,
              n = El(e, t);
            0 != ($u & Uu) && (n = El(e, (t = Mt(e, t))));
          } else n = El(e, (t = Mt(e, 0)));
          if (
            (0 !== e.tag &&
              2 === n &&
              ((Iu |= 64),
              e.hydrate && ((e.hydrate = !1), Hr(e.containerInfo)),
              0 !== (t = $t(e)) && (n = El(e, t))),
            1 === n)
          )
            throw ((n = Mu), kl(e, 0), gl(e, t), hl(e, Bi()), n);
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            Il(e),
            hl(e, Bi()),
            null
          );
        }
        function yl(e, t) {
          var n = Iu;
          Iu |= 1;
          try {
            return e(t);
          } finally {
            0 === (Iu = n) && (Wu(), Ki());
          }
        }
        function bl(e, t) {
          var n = Iu;
          (Iu &= -2), (Iu |= 8);
          try {
            return e(t);
          } finally {
            0 === (Iu = n) && (Wu(), Ki());
          }
        }
        function wl(e, t) {
          ci(zu, Lu), (Lu |= t), ($u |= t);
        }
        function _l() {
          (Lu = zu.current), si(zu);
        }
        function kl(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), Wr(n)), null !== Nu))
            for (n = Nu.return; null !== n; ) {
              var r = n;
              switch (r.tag) {
                case 1:
                  null != (r = r.type.childContextTypes) && mi();
                  break;
                case 3:
                  Lo(), si(pi), si(di), Go();
                  break;
                case 5:
                  jo(r);
                  break;
                case 4:
                  Lo();
                  break;
                case 13:
                case 19:
                  si(Mo);
                  break;
                case 10:
                  no(r);
                  break;
                case 23:
                case 24:
                  _l();
              }
              n = n.return;
            }
          (Ru = e),
            (Nu = ql(e.current, null)),
            (Au = Lu = $u = t),
            (ju = 0),
            (Mu = null),
            (Fu = Uu = Du = 0);
        }
        function xl(e, t) {
          for (;;) {
            var n = Nu;
            try {
              if ((to(), (Yo.current = Ra), na)) {
                for (var r = Jo.memoizedState; null !== r; ) {
                  var i = r.queue;
                  null !== i && (i.pending = null), (r = r.next);
                }
                na = !1;
              }
              if (
                ((Zo = 0),
                (ta = ea = Jo = null),
                (ra = !1),
                (Pu.current = null),
                null === n || null === n.return)
              ) {
                (ju = 1), (Mu = t), (Nu = null);
                break;
              }
              e: {
                var o = e,
                  a = n.return,
                  u = n,
                  l = t;
                if (
                  ((t = Au),
                  (u.flags |= 2048),
                  (u.firstEffect = u.lastEffect = null),
                  null !== l &&
                    "object" == typeof l &&
                    "function" == typeof l.then)
                ) {
                  var s = l;
                  if (0 == (2 & u.mode)) {
                    var c = u.alternate;
                    c
                      ? ((u.updateQueue = c.updateQueue),
                        (u.memoizedState = c.memoizedState),
                        (u.lanes = c.lanes))
                      : ((u.updateQueue = null), (u.memoizedState = null));
                  }
                  var f = 0 != (1 & Mo.current),
                    d = a;
                  do {
                    var p;
                    if ((p = 13 === d.tag)) {
                      var h = d.memoizedState;
                      if (null !== h) p = null !== h.dehydrated;
                      else {
                        var v = d.memoizedProps;
                        p =
                          void 0 !== v.fallback &&
                          (!0 !== v.unstable_avoidThisFallback || !f);
                      }
                    }
                    if (p) {
                      var g = d.updateQueue;
                      if (null === g) {
                        var m = new Set();
                        m.add(s), (d.updateQueue = m);
                      } else g.add(s);
                      if (0 == (2 & d.mode)) {
                        if (
                          ((d.flags |= 64),
                          (u.flags |= 16384),
                          (u.flags &= -2981),
                          1 === u.tag)
                        )
                          if (null === u.alternate) u.tag = 17;
                          else {
                            var y = so(-1, 1);
                            (y.tag = 2), co(u, y);
                          }
                        u.lanes |= 1;
                        break e;
                      }
                      (l = void 0), (u = t);
                      var b = o.pingCache;
                      if (
                        (null === b
                          ? ((b = o.pingCache = new su()),
                            (l = new Set()),
                            b.set(s, l))
                          : void 0 === (l = b.get(s)) &&
                            ((l = new Set()), b.set(s, l)),
                        !l.has(u))
                      ) {
                        l.add(u);
                        var w = Dl.bind(null, o, s, u);
                        s.then(w, w);
                      }
                      (d.flags |= 4096), (d.lanes = t);
                      break e;
                    }
                    d = d.return;
                  } while (null !== d);
                  l = Error(
                    (K(u.type) || "A React component") +
                      " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."
                  );
                }
                5 !== ju && (ju = 2), (l = uu(l, u)), (d = a);
                do {
                  switch (d.tag) {
                    case 3:
                      (o = l),
                        (d.flags |= 4096),
                        (t &= -t),
                        (d.lanes |= t),
                        fo(d, cu(0, o, t));
                      break e;
                    case 1:
                      o = l;
                      var _ = d.type,
                        k = d.stateNode;
                      if (
                        0 == (64 & d.flags) &&
                        ("function" == typeof _.getDerivedStateFromError ||
                          (null !== k &&
                            "function" == typeof k.componentDidCatch &&
                            (null === Yu || !Yu.has(k))))
                      ) {
                        (d.flags |= 4096),
                          (t &= -t),
                          (d.lanes |= t),
                          fo(d, fu(d, o, t));
                        break e;
                      }
                  }
                  d = d.return;
                } while (null !== d);
              }
              Pl(n);
            } catch (e) {
              (t = e), Nu === n && null !== n && (Nu = n = n.return);
              continue;
            }
            break;
          }
        }
        function Sl() {
          var e = Tu.current;
          return (Tu.current = Ra), null === e ? Ra : e;
        }
        function El(e, t) {
          var n = Iu;
          Iu |= 16;
          var r = Sl();
          for ((Ru === e && Au === t) || kl(e, t); ; )
            try {
              Ol();
              break;
            } catch (t) {
              xl(e, t);
            }
          if ((to(), (Iu = n), (Tu.current = r), null !== Nu))
            throw Error(a(261));
          return (Ru = null), (Au = 0), ju;
        }
        function Ol() {
          for (; null !== Nu; ) Tl(Nu);
        }
        function Cl() {
          for (; null !== Nu && !Ci(); ) Tl(Nu);
        }
        function Tl(e) {
          var t = Hu(e.alternate, e, Lu);
          (e.memoizedProps = e.pendingProps),
            null === t ? Pl(e) : (Nu = t),
            (Pu.current = null);
        }
        function Pl(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 == (2048 & t.flags))) {
              if (null !== (n = ou(n, t, Lu))) return void (Nu = n);
              if (
                (24 !== (n = t).tag && 23 !== n.tag) ||
                null === n.memoizedState ||
                0 != (1073741824 & Lu) ||
                0 == (4 & n.mode)
              ) {
                for (var r = 0, i = n.child; null !== i; )
                  (r |= i.lanes | i.childLanes), (i = i.sibling);
                n.childLanes = r;
              }
              null !== e &&
                0 == (2048 & e.flags) &&
                (null === e.firstEffect && (e.firstEffect = t.firstEffect),
                null !== t.lastEffect &&
                  (null !== e.lastEffect &&
                    (e.lastEffect.nextEffect = t.firstEffect),
                  (e.lastEffect = t.lastEffect)),
                1 < t.flags &&
                  (null !== e.lastEffect
                    ? (e.lastEffect.nextEffect = t)
                    : (e.firstEffect = t),
                  (e.lastEffect = t)));
            } else {
              if (null !== (n = au(t))) return (n.flags &= 2047), void (Nu = n);
              null !== e &&
                ((e.firstEffect = e.lastEffect = null), (e.flags |= 2048));
            }
            if (null !== (t = t.sibling)) return void (Nu = t);
            Nu = t = e;
          } while (null !== t);
          0 === ju && (ju = 5);
        }
        function Il(e) {
          var t = Vi();
          return Wi(99, Rl.bind(null, e, t)), null;
        }
        function Rl(e, t) {
          do {
            Al();
          } while (null !== Zu);
          if (0 != (48 & Iu)) throw Error(a(327));
          var n = e.finishedWork;
          if (null === n) return null;
          if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
            throw Error(a(177));
          e.callbackNode = null;
          var r = n.lanes | n.childLanes,
            i = r,
            o = e.pendingLanes & ~i;
          (e.pendingLanes = i),
            (e.suspendedLanes = 0),
            (e.pingedLanes = 0),
            (e.expiredLanes &= i),
            (e.mutableReadLanes &= i),
            (e.entangledLanes &= i),
            (i = e.entanglements);
          for (var u = e.eventTimes, l = e.expirationTimes; 0 < o; ) {
            var s = 31 - Vt(o),
              c = 1 << s;
            (i[s] = 0), (u[s] = -1), (l[s] = -1), (o &= ~c);
          }
          if (
            (null !== nl && 0 == (24 & r) && nl.has(e) && nl.delete(e),
            e === Ru && ((Nu = Ru = null), (Au = 0)),
            1 < n.flags
              ? null !== n.lastEffect
                ? ((n.lastEffect.nextEffect = n), (r = n.firstEffect))
                : (r = n)
              : (r = n.firstEffect),
            null !== r)
          ) {
            if (
              ((i = Iu),
              (Iu |= 32),
              (Pu.current = null),
              (Ur = Qt),
              gr((u = vr())))
            ) {
              if ("selectionStart" in u)
                l = { start: u.selectionStart, end: u.selectionEnd };
              else
                e: if (
                  ((l = ((l = u.ownerDocument) && l.defaultView) || window),
                  (c = l.getSelection && l.getSelection()) &&
                    0 !== c.rangeCount)
                ) {
                  (l = c.anchorNode),
                    (o = c.anchorOffset),
                    (s = c.focusNode),
                    (c = c.focusOffset);
                  try {
                    l.nodeType, s.nodeType;
                  } catch (e) {
                    l = null;
                    break e;
                  }
                  var f = 0,
                    d = -1,
                    p = -1,
                    h = 0,
                    v = 0,
                    g = u,
                    m = null;
                  t: for (;;) {
                    for (
                      var y;
                      g !== l || (0 !== o && 3 !== g.nodeType) || (d = f + o),
                        g !== s || (0 !== c && 3 !== g.nodeType) || (p = f + c),
                        3 === g.nodeType && (f += g.nodeValue.length),
                        null !== (y = g.firstChild);

                    )
                      (m = g), (g = y);
                    for (;;) {
                      if (g === u) break t;
                      if (
                        (m === l && ++h === o && (d = f),
                        m === s && ++v === c && (p = f),
                        null !== (y = g.nextSibling))
                      )
                        break;
                      m = (g = m).parentNode;
                    }
                    g = y;
                  }
                  l = -1 === d || -1 === p ? null : { start: d, end: p };
                } else l = null;
              l = l || { start: 0, end: 0 };
            } else l = null;
            (Fr = { focusedElem: u, selectionRange: l }),
              (Qt = !1),
              (ll = null),
              (sl = !1),
              (Ku = r);
            do {
              try {
                Nl();
              } catch (e) {
                if (null === Ku) throw Error(a(330));
                $l(Ku, e), (Ku = Ku.nextEffect);
              }
            } while (null !== Ku);
            (ll = null), (Ku = r);
            do {
              try {
                for (u = e; null !== Ku; ) {
                  var b = Ku.flags;
                  if ((16 & b && me(Ku.stateNode, ""), 128 & b)) {
                    var w = Ku.alternate;
                    if (null !== w) {
                      var _ = w.ref;
                      null !== _ &&
                        ("function" == typeof _ ? _(null) : (_.current = null));
                    }
                  }
                  switch (1038 & b) {
                    case 2:
                      wu(Ku), (Ku.flags &= -3);
                      break;
                    case 6:
                      wu(Ku), (Ku.flags &= -3), Su(Ku.alternate, Ku);
                      break;
                    case 1024:
                      Ku.flags &= -1025;
                      break;
                    case 1028:
                      (Ku.flags &= -1025), Su(Ku.alternate, Ku);
                      break;
                    case 4:
                      Su(Ku.alternate, Ku);
                      break;
                    case 8:
                      xu(u, (l = Ku));
                      var k = l.alternate;
                      yu(l), null !== k && yu(k);
                  }
                  Ku = Ku.nextEffect;
                }
              } catch (e) {
                if (null === Ku) throw Error(a(330));
                $l(Ku, e), (Ku = Ku.nextEffect);
              }
            } while (null !== Ku);
            if (
              ((_ = Fr),
              (w = vr()),
              (b = _.focusedElem),
              (u = _.selectionRange),
              w !== b &&
                b &&
                b.ownerDocument &&
                hr(b.ownerDocument.documentElement, b))
            ) {
              null !== u &&
                gr(b) &&
                ((w = u.start),
                void 0 === (_ = u.end) && (_ = w),
                "selectionStart" in b
                  ? ((b.selectionStart = w),
                    (b.selectionEnd = Math.min(_, b.value.length)))
                  : (_ =
                      ((w = b.ownerDocument || document) && w.defaultView) ||
                      window).getSelection &&
                    ((_ = _.getSelection()),
                    (l = b.textContent.length),
                    (k = Math.min(u.start, l)),
                    (u = void 0 === u.end ? k : Math.min(u.end, l)),
                    !_.extend && k > u && ((l = u), (u = k), (k = l)),
                    (l = pr(b, k)),
                    (o = pr(b, u)),
                    l &&
                      o &&
                      (1 !== _.rangeCount ||
                        _.anchorNode !== l.node ||
                        _.anchorOffset !== l.offset ||
                        _.focusNode !== o.node ||
                        _.focusOffset !== o.offset) &&
                      ((w = w.createRange()).setStart(l.node, l.offset),
                      _.removeAllRanges(),
                      k > u
                        ? (_.addRange(w), _.extend(o.node, o.offset))
                        : (w.setEnd(o.node, o.offset), _.addRange(w))))),
                (w = []);
              for (_ = b; (_ = _.parentNode); )
                1 === _.nodeType &&
                  w.push({ element: _, left: _.scrollLeft, top: _.scrollTop });
              for (
                "function" == typeof b.focus && b.focus(), b = 0;
                b < w.length;
                b++
              )
                ((_ = w[b]).element.scrollLeft = _.left),
                  (_.element.scrollTop = _.top);
            }
            (Qt = !!Ur), (Fr = Ur = null), (e.current = n), (Ku = r);
            do {
              try {
                for (b = e; null !== Ku; ) {
                  var x = Ku.flags;
                  if ((36 & x && vu(b, Ku.alternate, Ku), 128 & x)) {
                    w = void 0;
                    var S = Ku.ref;
                    if (null !== S) {
                      var E = Ku.stateNode;
                      Ku.tag,
                        (w = E),
                        "function" == typeof S ? S(w) : (S.current = w);
                    }
                  }
                  Ku = Ku.nextEffect;
                }
              } catch (e) {
                if (null === Ku) throw Error(a(330));
                $l(Ku, e), (Ku = Ku.nextEffect);
              }
            } while (null !== Ku);
            (Ku = null), Mi(), (Iu = i);
          } else e.current = n;
          if (Xu) (Xu = !1), (Zu = e), (Ju = t);
          else
            for (Ku = r; null !== Ku; )
              (t = Ku.nextEffect),
                (Ku.nextEffect = null),
                8 & Ku.flags &&
                  (((x = Ku).sibling = null), (x.stateNode = null)),
                (Ku = t);
          if (
            (0 === (r = e.pendingLanes) && (Yu = null),
            1 === r ? (e === il ? rl++ : ((rl = 0), (il = e))) : (rl = 0),
            (n = n.stateNode),
            xi && "function" == typeof xi.onCommitFiberRoot)
          )
            try {
              xi.onCommitFiberRoot(ki, n, void 0, 64 == (64 & n.current.flags));
            } catch (e) {}
          if ((hl(e, Bi()), Qu)) throw ((Qu = !1), (e = Gu), (Gu = null), e);
          return 0 != (8 & Iu) || Ki(), null;
        }
        function Nl() {
          for (; null !== Ku; ) {
            var e = Ku.alternate;
            sl ||
              null === ll ||
              (0 != (8 & Ku.flags)
                ? Je(Ku, ll) && (sl = !0)
                : 13 === Ku.tag && Ou(e, Ku) && Je(Ku, ll) && (sl = !0));
            var t = Ku.flags;
            0 != (256 & t) && hu(e, Ku),
              0 == (512 & t) ||
                Xu ||
                ((Xu = !0),
                Hi(97, function () {
                  return Al(), null;
                })),
              (Ku = Ku.nextEffect);
          }
        }
        function Al() {
          if (90 !== Ju) {
            var e = 97 < Ju ? 97 : Ju;
            return (Ju = 90), Wi(e, jl);
          }
          return !1;
        }
        function Ll(e, t) {
          el.push(t, e),
            Xu ||
              ((Xu = !0),
              Hi(97, function () {
                return Al(), null;
              }));
        }
        function zl(e, t) {
          tl.push(t, e),
            Xu ||
              ((Xu = !0),
              Hi(97, function () {
                return Al(), null;
              }));
        }
        function jl() {
          if (null === Zu) return !1;
          var e = Zu;
          if (((Zu = null), 0 != (48 & Iu))) throw Error(a(331));
          var t = Iu;
          Iu |= 32;
          var n = tl;
          tl = [];
          for (var r = 0; r < n.length; r += 2) {
            var i = n[r],
              o = n[r + 1],
              u = i.destroy;
            if (((i.destroy = void 0), "function" == typeof u))
              try {
                u();
              } catch (e) {
                if (null === o) throw Error(a(330));
                $l(o, e);
              }
          }
          for (n = el, el = [], r = 0; r < n.length; r += 2) {
            (i = n[r]), (o = n[r + 1]);
            try {
              var l = i.create;
              i.destroy = l();
            } catch (e) {
              if (null === o) throw Error(a(330));
              $l(o, e);
            }
          }
          for (l = e.current.firstEffect; null !== l; )
            (e = l.nextEffect),
              (l.nextEffect = null),
              8 & l.flags && ((l.sibling = null), (l.stateNode = null)),
              (l = e);
          return (Iu = t), Ki(), !0;
        }
        function Ml(e, t, n) {
          co(e, (t = cu(0, (t = uu(n, t)), 1))),
            (t = cl()),
            null !== (e = pl(e, 1)) && (Bt(e, 1, t), hl(e, t));
        }
        function $l(e, t) {
          if (3 === e.tag) Ml(e, e, t);
          else
            for (var n = e.return; null !== n; ) {
              if (3 === n.tag) {
                Ml(n, e, t);
                break;
              }
              if (1 === n.tag) {
                var r = n.stateNode;
                if (
                  "function" == typeof n.type.getDerivedStateFromError ||
                  ("function" == typeof r.componentDidCatch &&
                    (null === Yu || !Yu.has(r)))
                ) {
                  var i = fu(n, (e = uu(t, e)), 1);
                  if ((co(n, i), (i = cl()), null !== (n = pl(n, 1))))
                    Bt(n, 1, i), hl(n, i);
                  else if (
                    "function" == typeof r.componentDidCatch &&
                    (null === Yu || !Yu.has(r))
                  )
                    try {
                      r.componentDidCatch(t, e);
                    } catch (e) {}
                  break;
                }
              }
              n = n.return;
            }
        }
        function Dl(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = cl()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Ru === e &&
              (Au & n) === n &&
              (4 === ju ||
              (3 === ju && (62914560 & Au) === Au && 500 > Bi() - Vu)
                ? kl(e, 0)
                : (Fu |= n)),
            hl(e, t);
        }
        function Ul(e, t) {
          var n = e.stateNode;
          null !== n && n.delete(t),
            0 == (t = 0) &&
              (0 == (2 & (t = e.mode))
                ? (t = 1)
                : 0 == (4 & t)
                ? (t = 99 === Vi() ? 1 : 2)
                : (0 === al && (al = $u),
                  0 === (t = Ut(62914560 & ~al)) && (t = 4194304))),
            (n = cl()),
            null !== (e = pl(e, t)) && (Bt(e, t, n), hl(e, n));
        }
        function Fl(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.flags = 0),
            (this.lastEffect = this.firstEffect = this.nextEffect = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Bl(e, t, n, r) {
          return new Fl(e, t, n, r);
        }
        function Vl(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function ql(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Bl(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.nextEffect = null),
                (n.firstEffect = null),
                (n.lastEffect = null)),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function Wl(e, t, n, r, i, o) {
          var u = 2;
          if (((r = e), "function" == typeof e)) Vl(e) && (u = 1);
          else if ("string" == typeof e) u = 5;
          else
            e: switch (e) {
              case S:
                return Hl(n.children, i, o, t);
              case j:
                (u = 8), (i |= 16);
                break;
              case E:
                (u = 8), (i |= 1);
                break;
              case O:
                return (
                  ((e = Bl(12, n, t, 8 | i)).elementType = O),
                  (e.type = O),
                  (e.lanes = o),
                  e
                );
              case I:
                return (
                  ((e = Bl(13, n, t, i)).type = I),
                  (e.elementType = I),
                  (e.lanes = o),
                  e
                );
              case R:
                return (
                  ((e = Bl(19, n, t, i)).elementType = R), (e.lanes = o), e
                );
              case M:
                return Kl(n, i, o, t);
              case $:
                return (
                  ((e = Bl(24, n, t, i)).elementType = $), (e.lanes = o), e
                );
              default:
                if ("object" == typeof e && null !== e)
                  switch (e.$$typeof) {
                    case C:
                      u = 10;
                      break e;
                    case T:
                      u = 9;
                      break e;
                    case P:
                      u = 11;
                      break e;
                    case N:
                      u = 14;
                      break e;
                    case A:
                      (u = 16), (r = null);
                      break e;
                    case L:
                      u = 22;
                      break e;
                  }
                throw Error(a(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Bl(u, n, t, i)).elementType = e),
            (t.type = r),
            (t.lanes = o),
            t
          );
        }
        function Hl(e, t, n, r) {
          return ((e = Bl(7, e, r, t)).lanes = n), e;
        }
        function Kl(e, t, n, r) {
          return ((e = Bl(23, e, r, t)).elementType = M), (e.lanes = n), e;
        }
        function Ql(e, t, n) {
          return ((e = Bl(6, e, null, t)).lanes = n), e;
        }
        function Gl(e, t, n) {
          return (
            ((t = Bl(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Yl(e, t, n) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.pendingContext = this.context = null),
            (this.hydrate = n),
            (this.callbackNode = null),
            (this.callbackPriority = 0),
            (this.eventTimes = Ft(0)),
            (this.expirationTimes = Ft(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = Ft(0)),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Xl(e, t, n, r) {
          var i = t.current,
            o = cl(),
            u = fl(i);
          e: if (n) {
            t: {
              if (Ge((n = n._reactInternals)) !== n || 1 !== n.tag)
                throw Error(a(170));
              var l = n;
              do {
                switch (l.tag) {
                  case 3:
                    l = l.stateNode.context;
                    break t;
                  case 1:
                    if (gi(l.type)) {
                      l = l.stateNode.__reactInternalMemoizedMergedChildContext;
                      break t;
                    }
                }
                l = l.return;
              } while (null !== l);
              throw Error(a(171));
            }
            if (1 === n.tag) {
              var s = n.type;
              if (gi(s)) {
                n = bi(n, s, l);
                break e;
              }
            }
            n = l;
          } else n = fi;
          return (
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = so(o, u)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            co(i, t),
            dl(i, u, o),
            u
          );
        }
        function Zl(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function Jl(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function es(e, t) {
          Jl(e, t), (e = e.alternate) && Jl(e, t);
        }
        function ts(e, t, n) {
          var r =
            (null != n &&
              null != n.hydrationOptions &&
              n.hydrationOptions.mutableSources) ||
            null;
          if (
            ((n = new Yl(e, t, null != n && !0 === n.hydrate)),
            (t = Bl(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0)),
            (n.current = t),
            (t.stateNode = n),
            uo(t),
            (e[Jr] = n.current),
            Rr(8 === e.nodeType ? e.parentNode : e),
            r)
          )
            for (e = 0; e < r.length; e++) {
              var i = (t = r[e])._getVersion;
              (i = i(t._source)),
                null == n.mutableSourceEagerHydrationData
                  ? (n.mutableSourceEagerHydrationData = [t, i])
                  : n.mutableSourceEagerHydrationData.push(t, i);
            }
          this._internalRoot = n;
        }
        function ns(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function rs(e, t, n, r, i) {
          var o = n._reactRootContainer;
          if (o) {
            var a = o._internalRoot;
            if ("function" == typeof i) {
              var u = i;
              i = function () {
                var e = Zl(a);
                u.call(e);
              };
            }
            Xl(t, a, e, i);
          } else {
            if (
              ((o = n._reactRootContainer =
                (function (e, t) {
                  if (
                    (t ||
                      (t = !(
                        !(t = e
                          ? 9 === e.nodeType
                            ? e.documentElement
                            : e.firstChild
                          : null) ||
                        1 !== t.nodeType ||
                        !t.hasAttribute("data-reactroot")
                      )),
                    !t)
                  )
                    for (var n; (n = e.lastChild); ) e.removeChild(n);
                  return new ts(e, 0, t ? { hydrate: !0 } : void 0);
                })(n, r)),
              (a = o._internalRoot),
              "function" == typeof i)
            ) {
              var l = i;
              i = function () {
                var e = Zl(a);
                l.call(e);
              };
            }
            bl(function () {
              Xl(t, a, e, i);
            });
          }
          return Zl(a);
        }
        function is(e, t) {
          var n =
            2 < arguments.length && void 0 !== arguments[2]
              ? arguments[2]
              : null;
          if (!ns(t)) throw Error(a(200));
          return (function (e, t, n) {
            var r =
              3 < arguments.length && void 0 !== arguments[3]
                ? arguments[3]
                : null;
            return {
              $$typeof: x,
              key: null == r ? null : "" + r,
              children: e,
              containerInfo: t,
              implementation: n,
            };
          })(e, t, null, n);
        }
        (Hu = function (e, t, n) {
          var r = t.lanes;
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || pi.current) ja = !0;
            else {
              if (0 == (n & r)) {
                switch (((ja = !1), t.tag)) {
                  case 3:
                    Ha(t), Ko();
                    break;
                  case 5:
                    zo(t);
                    break;
                  case 1:
                    gi(t.type) && wi(t);
                    break;
                  case 4:
                    Ao(t, t.stateNode.containerInfo);
                    break;
                  case 10:
                    r = t.memoizedProps.value;
                    var i = t.type._context;
                    ci(Xi, i._currentValue), (i._currentValue = r);
                    break;
                  case 13:
                    if (null !== t.memoizedState)
                      return 0 != (n & t.child.childLanes)
                        ? Za(e, t, n)
                        : (ci(Mo, 1 & Mo.current),
                          null !== (t = ru(e, t, n)) ? t.sibling : null);
                    ci(Mo, 1 & Mo.current);
                    break;
                  case 19:
                    if (((r = 0 != (n & t.childLanes)), 0 != (64 & e.flags))) {
                      if (r) return nu(e, t, n);
                      t.flags |= 64;
                    }
                    if (
                      (null !== (i = t.memoizedState) &&
                        ((i.rendering = null),
                        (i.tail = null),
                        (i.lastEffect = null)),
                      ci(Mo, Mo.current),
                      r)
                    )
                      break;
                    return null;
                  case 23:
                  case 24:
                    return (t.lanes = 0), Fa(e, t, n);
                }
                return ru(e, t, n);
              }
              ja = 0 != (16384 & e.flags);
            }
          else ja = !1;
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              if (
                ((r = t.type),
                null !== e &&
                  ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
                (e = t.pendingProps),
                (i = vi(t, di.current)),
                io(t, n),
                (i = aa(null, t, r, e, i, n)),
                (t.flags |= 1),
                "object" == typeof i &&
                  null !== i &&
                  "function" == typeof i.render &&
                  void 0 === i.$$typeof)
              ) {
                if (
                  ((t.tag = 1),
                  (t.memoizedState = null),
                  (t.updateQueue = null),
                  gi(r))
                ) {
                  var o = !0;
                  wi(t);
                } else o = !1;
                (t.memoizedState =
                  null !== i.state && void 0 !== i.state ? i.state : null),
                  uo(t);
                var u = r.getDerivedStateFromProps;
                "function" == typeof u && go(t, r, u, e),
                  (i.updater = mo),
                  (t.stateNode = i),
                  (i._reactInternals = t),
                  _o(t, r, e, n),
                  (t = Wa(null, t, r, !0, o, n));
              } else (t.tag = 0), Ma(null, t, i, n), (t = t.child);
              return t;
            case 16:
              i = t.elementType;
              e: {
                switch (
                  (null !== e &&
                    ((e.alternate = null),
                    (t.alternate = null),
                    (t.flags |= 2)),
                  (e = t.pendingProps),
                  (i = (o = i._init)(i._payload)),
                  (t.type = i),
                  (o = t.tag =
                    (function (e) {
                      if ("function" == typeof e) return Vl(e) ? 1 : 0;
                      if (null != e) {
                        if ((e = e.$$typeof) === P) return 11;
                        if (e === N) return 14;
                      }
                      return 2;
                    })(i)),
                  (e = Yi(i, e)),
                  o)
                ) {
                  case 0:
                    t = Va(null, t, i, e, n);
                    break e;
                  case 1:
                    t = qa(null, t, i, e, n);
                    break e;
                  case 11:
                    t = $a(null, t, i, e, n);
                    break e;
                  case 14:
                    t = Da(null, t, i, Yi(i.type, e), r, n);
                    break e;
                }
                throw Error(a(306, i, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (i = t.pendingProps),
                Va(e, t, r, (i = t.elementType === r ? i : Yi(r, i)), n)
              );
            case 1:
              return (
                (r = t.type),
                (i = t.pendingProps),
                qa(e, t, r, (i = t.elementType === r ? i : Yi(r, i)), n)
              );
            case 3:
              if ((Ha(t), (r = t.updateQueue), null === e || null === r))
                throw Error(a(282));
              if (
                ((r = t.pendingProps),
                (i = null !== (i = t.memoizedState) ? i.element : null),
                lo(e, t),
                po(t, r, null, n),
                (r = t.memoizedState.element) === i)
              )
                Ko(), (t = ru(e, t, n));
              else {
                if (
                  ((o = (i = t.stateNode).hydrate) &&
                    ((Uo = Kr(t.stateNode.containerInfo.firstChild)),
                    (Do = t),
                    (o = Fo = !0)),
                  o)
                ) {
                  if (null != (e = i.mutableSourceEagerHydrationData))
                    for (i = 0; i < e.length; i += 2)
                      ((o = e[i])._workInProgressVersionPrimary = e[i + 1]),
                        Qo.push(o);
                  for (n = Co(t, null, r, n), t.child = n; n; )
                    (n.flags = (-3 & n.flags) | 1024), (n = n.sibling);
                } else Ma(e, t, r, n), Ko();
                t = t.child;
              }
              return t;
            case 5:
              return (
                zo(t),
                null === e && qo(t),
                (r = t.type),
                (i = t.pendingProps),
                (o = null !== e ? e.memoizedProps : null),
                (u = i.children),
                Vr(r, i)
                  ? (u = null)
                  : null !== o && Vr(r, o) && (t.flags |= 16),
                Ba(e, t),
                Ma(e, t, u, n),
                t.child
              );
            case 6:
              return null === e && qo(t), null;
            case 13:
              return Za(e, t, n);
            case 4:
              return (
                Ao(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Oo(t, null, r, n)) : Ma(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (i = t.pendingProps),
                $a(e, t, r, (i = t.elementType === r ? i : Yi(r, i)), n)
              );
            case 7:
              return Ma(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return Ma(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                (r = t.type._context),
                  (i = t.pendingProps),
                  (u = t.memoizedProps),
                  (o = i.value);
                var l = t.type._context;
                if (
                  (ci(Xi, l._currentValue), (l._currentValue = o), null !== u)
                )
                  if (
                    ((l = u.value),
                    0 ==
                      (o = sr(l, o)
                        ? 0
                        : 0 |
                          ("function" == typeof r._calculateChangedBits
                            ? r._calculateChangedBits(l, o)
                            : 1073741823)))
                  ) {
                    if (u.children === i.children && !pi.current) {
                      t = ru(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (l = t.child) && (l.return = t);
                      null !== l;

                    ) {
                      var s = l.dependencies;
                      if (null !== s) {
                        u = l.child;
                        for (var c = s.firstContext; null !== c; ) {
                          if (c.context === r && 0 != (c.observedBits & o)) {
                            1 === l.tag &&
                              (((c = so(-1, n & -n)).tag = 2), co(l, c)),
                              (l.lanes |= n),
                              null !== (c = l.alternate) && (c.lanes |= n),
                              ro(l.return, n),
                              (s.lanes |= n);
                            break;
                          }
                          c = c.next;
                        }
                      } else
                        u = 10 === l.tag && l.type === t.type ? null : l.child;
                      if (null !== u) u.return = l;
                      else
                        for (u = l; null !== u; ) {
                          if (u === t) {
                            u = null;
                            break;
                          }
                          if (null !== (l = u.sibling)) {
                            (l.return = u.return), (u = l);
                            break;
                          }
                          u = u.return;
                        }
                      l = u;
                    }
                Ma(e, t, i.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (i = t.type),
                (r = (o = t.pendingProps).children),
                io(t, n),
                (r = r((i = oo(i, o.unstable_observedBits)))),
                (t.flags |= 1),
                Ma(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (o = Yi((i = t.type), t.pendingProps)),
                Da(e, t, i, (o = Yi(i.type, o)), r, n)
              );
            case 15:
              return Ua(e, t, t.type, t.pendingProps, r, n);
            case 17:
              return (
                (r = t.type),
                (i = t.pendingProps),
                (i = t.elementType === r ? i : Yi(r, i)),
                null !== e &&
                  ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
                (t.tag = 1),
                gi(r) ? ((e = !0), wi(t)) : (e = !1),
                io(t, n),
                bo(t, r, i),
                _o(t, r, i, n),
                Wa(null, t, r, !0, e, n)
              );
            case 19:
              return nu(e, t, n);
            case 23:
            case 24:
              return Fa(e, t, n);
          }
          throw Error(a(156, t.tag));
        }),
          (ts.prototype.render = function (e) {
            Xl(e, this._internalRoot, null, null);
          }),
          (ts.prototype.unmount = function () {
            var e = this._internalRoot,
              t = e.containerInfo;
            Xl(null, e, null, function () {
              t[Jr] = null;
            });
          }),
          (et = function (e) {
            13 === e.tag && (dl(e, 4, cl()), es(e, 4));
          }),
          (tt = function (e) {
            13 === e.tag && (dl(e, 67108864, cl()), es(e, 67108864));
          }),
          (nt = function (e) {
            if (13 === e.tag) {
              var t = cl(),
                n = fl(e);
              dl(e, n, t), es(e, n);
            }
          }),
          (rt = function (e, t) {
            return t();
          }),
          (Oe = function (e, t, n) {
            switch (t) {
              case "input":
                if ((ne(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var i = ii(r);
                      if (!i) throw Error(a(90));
                      X(r), ne(r, i);
                    }
                  }
                }
                break;
              case "textarea":
                se(e, n);
                break;
              case "select":
                null != (t = n.value) && ae(e, !!n.multiple, t, !1);
            }
          }),
          (Ne = yl),
          (Ae = function (e, t, n, r, i) {
            var o = Iu;
            Iu |= 4;
            try {
              return Wi(98, e.bind(null, t, n, r, i));
            } finally {
              0 === (Iu = o) && (Wu(), Ki());
            }
          }),
          (Le = function () {
            0 == (49 & Iu) &&
              ((function () {
                if (null !== nl) {
                  var e = nl;
                  (nl = null),
                    e.forEach(function (e) {
                      (e.expiredLanes |= 24 & e.pendingLanes), hl(e, Bi());
                    });
                }
                Ki();
              })(),
              Al());
          }),
          (ze = function (e, t) {
            var n = Iu;
            Iu |= 2;
            try {
              return e(t);
            } finally {
              0 === (Iu = n) && (Wu(), Ki());
            }
          });
        var os = { Events: [ni, ri, ii, Ie, Re, Al, { current: !1 }] },
          as = {
            findFiberByHostInstance: ti,
            bundleType: 0,
            version: "17.0.2",
            rendererPackageName: "react-dom",
          },
          us = {
            bundleType: as.bundleType,
            version: as.version,
            rendererPackageName: as.rendererPackageName,
            rendererConfig: as.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: _.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = Ze(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              as.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
          };
        if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var ls = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!ls.isDisabled && ls.supportsFiber)
            try {
              (ki = ls.inject(us)), (xi = ls);
            } catch (ve) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = os),
          (t.createPortal = is),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" == typeof e.render) throw Error(a(188));
              throw Error(a(268, Object.keys(e)));
            }
            return null === (e = Ze(t)) ? null : e.stateNode;
          }),
          (t.flushSync = function (e, t) {
            var n = Iu;
            if (0 != (48 & n)) return e(t);
            Iu |= 1;
            try {
              if (e) return Wi(99, e.bind(null, t));
            } finally {
              (Iu = n), Ki();
            }
          }),
          (t.hydrate = function (e, t, n) {
            if (!ns(t)) throw Error(a(200));
            return rs(null, e, t, !0, n);
          }),
          (t.render = function (e, t, n) {
            if (!ns(t)) throw Error(a(200));
            return rs(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!ns(e)) throw Error(a(40));
            return (
              !!e._reactRootContainer &&
              (bl(function () {
                rs(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[Jr] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = yl),
          (t.unstable_createPortal = function (e, t) {
            return is(
              e,
              t,
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null
            );
          }),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!ns(n)) throw Error(a(200));
            if (null == e || void 0 === e._reactInternals) throw Error(a(38));
            return rs(e, t, n, !1, r);
          }),
          (t.version = "17.0.2");
      },
      3935: (e, t, n) => {
        "use strict";
        !(function e() {
          if (
            "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (e) {
              console.error(e);
            }
        })(),
          (e.exports = n(4448));
      },
      5251: (e, t, n) => {
        "use strict";
        n(7418);
        var r = n(7294),
          i = 60103;
        if ("function" == typeof Symbol && Symbol.for) {
          var o = Symbol.for;
          (i = o("react.element")), o("react.fragment");
        }
        var a =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          u = Object.prototype.hasOwnProperty,
          l = { key: !0, ref: !0, __self: !0, __source: !0 };
        function s(e, t, n) {
          var r,
            o = {},
            s = null,
            c = null;
          for (r in (void 0 !== n && (s = "" + n),
          void 0 !== t.key && (s = "" + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            u.call(t, r) && !l.hasOwnProperty(r) && (o[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === o[r] && (o[r] = t[r]);
          return {
            $$typeof: i,
            type: e,
            key: s,
            ref: c,
            props: o,
            _owner: a.current,
          };
        }
        (t.jsx = s), (t.jsxs = s);
      },
      2408: (e, t, n) => {
        "use strict";
        var r = n(7418),
          i = 60103,
          o = 60106;
        (t.Fragment = 60107), (t.StrictMode = 60108), (t.Profiler = 60114);
        var a = 60109,
          u = 60110,
          l = 60112;
        t.Suspense = 60113;
        var s = 60115,
          c = 60116;
        if ("function" == typeof Symbol && Symbol.for) {
          var f = Symbol.for;
          (i = f("react.element")),
            (o = f("react.portal")),
            (t.Fragment = f("react.fragment")),
            (t.StrictMode = f("react.strict_mode")),
            (t.Profiler = f("react.profiler")),
            (a = f("react.provider")),
            (u = f("react.context")),
            (l = f("react.forward_ref")),
            (t.Suspense = f("react.suspense")),
            (s = f("react.memo")),
            (c = f("react.lazy"));
        }
        var d = "function" == typeof Symbol && Symbol.iterator;
        function p(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          v = {};
        function g(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = v),
            (this.updater = n || h);
        }
        function m() {}
        function y(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = v),
            (this.updater = n || h);
        }
        (g.prototype.isReactComponent = {}),
          (g.prototype.setState = function (e, t) {
            if ("object" != typeof e && "function" != typeof e && null != e)
              throw Error(p(85));
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (g.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (m.prototype = g.prototype);
        var b = (y.prototype = new m());
        (b.constructor = y), r(b, g.prototype), (b.isPureReactComponent = !0);
        var w = { current: null },
          _ = Object.prototype.hasOwnProperty,
          k = { key: !0, ref: !0, __self: !0, __source: !0 };
        function x(e, t, n) {
          var r,
            o = {},
            a = null,
            u = null;
          if (null != t)
            for (r in (void 0 !== t.ref && (u = t.ref),
            void 0 !== t.key && (a = "" + t.key),
            t))
              _.call(t, r) && !k.hasOwnProperty(r) && (o[r] = t[r]);
          var l = arguments.length - 2;
          if (1 === l) o.children = n;
          else if (1 < l) {
            for (var s = Array(l), c = 0; c < l; c++) s[c] = arguments[c + 2];
            o.children = s;
          }
          if (e && e.defaultProps)
            for (r in (l = e.defaultProps)) void 0 === o[r] && (o[r] = l[r]);
          return {
            $$typeof: i,
            type: e,
            key: a,
            ref: u,
            props: o,
            _owner: w.current,
          };
        }
        function S(e) {
          return "object" == typeof e && null !== e && e.$$typeof === i;
        }
        var E = /\/+/g;
        function O(e, t) {
          return "object" == typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function C(e, t, n, r, a) {
          var u = typeof e;
          ("undefined" !== u && "boolean" !== u) || (e = null);
          var l = !1;
          if (null === e) l = !0;
          else
            switch (u) {
              case "string":
              case "number":
                l = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case i:
                  case o:
                    l = !0;
                }
            }
          if (l)
            return (
              (a = a((l = e))),
              (e = "" === r ? "." + O(l, 0) : r),
              Array.isArray(a)
                ? ((n = ""),
                  null != e && (n = e.replace(E, "$&/") + "/"),
                  C(a, t, n, "", function (e) {
                    return e;
                  }))
                : null != a &&
                  (S(a) &&
                    (a = (function (e, t) {
                      return {
                        $$typeof: i,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      a,
                      n +
                        (!a.key || (l && l.key === a.key)
                          ? ""
                          : ("" + a.key).replace(E, "$&/") + "/") +
                        e
                    )),
                  t.push(a)),
              1
            );
          if (((l = 0), (r = "" === r ? "." : r + ":"), Array.isArray(e)))
            for (var s = 0; s < e.length; s++) {
              var c = r + O((u = e[s]), s);
              l += C(u, t, n, c, a);
            }
          else if (
            ((c = (function (e) {
              return null === e || "object" != typeof e
                ? null
                : "function" == typeof (e = (d && e[d]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" == typeof c)
          )
            for (e = c.call(e), s = 0; !(u = e.next()).done; )
              l += C((u = u.value), t, n, (c = r + O(u, s++)), a);
          else if ("object" === u)
            throw (
              ((t = "" + e),
              Error(
                p(
                  31,
                  "[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t
                )
              ))
            );
          return l;
        }
        function T(e, t, n) {
          if (null == e) return e;
          var r = [],
            i = 0;
          return (
            C(e, r, "", "", function (e) {
              return t.call(n, e, i++);
            }),
            r
          );
        }
        function P(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()),
              (e._status = 0),
              (e._result = t),
              t.then(
                function (t) {
                  0 === e._status &&
                    ((t = t.default), (e._status = 1), (e._result = t));
                },
                function (t) {
                  0 === e._status && ((e._status = 2), (e._result = t));
                }
              );
          }
          if (1 === e._status) return e._result;
          throw e._result;
        }
        var I = { current: null };
        function R() {
          var e = I.current;
          if (null === e) throw Error(p(321));
          return e;
        }
        var N = {
          ReactCurrentDispatcher: I,
          ReactCurrentBatchConfig: { transition: 0 },
          ReactCurrentOwner: w,
          IsSomeRendererActing: { current: !1 },
          assign: r,
        };
        (t.Children = {
          map: T,
          forEach: function (e, t, n) {
            T(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              T(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              T(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!S(e)) throw Error(p(143));
            return e;
          },
        }),
          (t.Component = g),
          (t.PureComponent = y),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = N),
          (t.cloneElement = function (e, t, n) {
            if (null == e) throw Error(p(267, e));
            var o = r({}, e.props),
              a = e.key,
              u = e.ref,
              l = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((u = t.ref), (l = w.current)),
                void 0 !== t.key && (a = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var s = e.type.defaultProps;
              for (c in t)
                _.call(t, c) &&
                  !k.hasOwnProperty(c) &&
                  (o[c] = void 0 === t[c] && void 0 !== s ? s[c] : t[c]);
            }
            var c = arguments.length - 2;
            if (1 === c) o.children = n;
            else if (1 < c) {
              s = Array(c);
              for (var f = 0; f < c; f++) s[f] = arguments[f + 2];
              o.children = s;
            }
            return {
              $$typeof: i,
              type: e.type,
              key: a,
              ref: u,
              props: o,
              _owner: l,
            };
          }),
          (t.createContext = function (e, t) {
            return (
              void 0 === t && (t = null),
              ((e = {
                $$typeof: u,
                _calculateChangedBits: t,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
              }).Provider = { $$typeof: a, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = x),
          (t.createFactory = function (e) {
            var t = x.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: l, render: e };
          }),
          (t.isValidElement = S),
          (t.lazy = function (e) {
            return {
              $$typeof: c,
              _payload: { _status: -1, _result: e },
              _init: P,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: s, type: e, compare: void 0 === t ? null : t };
          }),
          (t.useCallback = function (e, t) {
            return R().useCallback(e, t);
          }),
          (t.useContext = function (e, t) {
            return R().useContext(e, t);
          }),
          (t.useDebugValue = function () {}),
          (t.useEffect = function (e, t) {
            return R().useEffect(e, t);
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return R().useImperativeHandle(e, t, n);
          }),
          (t.useLayoutEffect = function (e, t) {
            return R().useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return R().useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return R().useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return R().useRef(e);
          }),
          (t.useState = function (e) {
            return R().useState(e);
          }),
          (t.version = "17.0.2");
      },
      7294: (e, t, n) => {
        "use strict";
        e.exports = n(2408);
      },
      5893: (e, t, n) => {
        "use strict";
        e.exports = n(5251);
      },
      53: (e, t) => {
        "use strict";
        var n, r, i, o;
        if (
          "object" == typeof performance &&
          "function" == typeof performance.now
        ) {
          var a = performance;
          t.unstable_now = function () {
            return a.now();
          };
        } else {
          var u = Date,
            l = u.now();
          t.unstable_now = function () {
            return u.now() - l;
          };
        }
        if (
          "undefined" == typeof window ||
          "function" != typeof MessageChannel
        ) {
          var s = null,
            c = null,
            f = function () {
              if (null !== s)
                try {
                  var e = t.unstable_now();
                  s(!0, e), (s = null);
                } catch (e) {
                  throw (setTimeout(f, 0), e);
                }
            };
          (n = function (e) {
            null !== s ? setTimeout(n, 0, e) : ((s = e), setTimeout(f, 0));
          }),
            (r = function (e, t) {
              c = setTimeout(e, t);
            }),
            (i = function () {
              clearTimeout(c);
            }),
            (t.unstable_shouldYield = function () {
              return !1;
            }),
            (o = t.unstable_forceFrameRate = function () {});
        } else {
          var d = window.setTimeout,
            p = window.clearTimeout;
          if ("undefined" != typeof console) {
            var h = window.cancelAnimationFrame;
            "function" != typeof window.requestAnimationFrame &&
              console.error(
                "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
              ),
              "function" != typeof h &&
                console.error(
                  "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
                );
          }
          var v = !1,
            g = null,
            m = -1,
            y = 5,
            b = 0;
          (t.unstable_shouldYield = function () {
            return t.unstable_now() >= b;
          }),
            (o = function () {}),
            (t.unstable_forceFrameRate = function (e) {
              0 > e || 125 < e
                ? console.error(
                    "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                  )
                : (y = 0 < e ? Math.floor(1e3 / e) : 5);
            });
          var w = new MessageChannel(),
            _ = w.port2;
          (w.port1.onmessage = function () {
            if (null !== g) {
              var e = t.unstable_now();
              b = e + y;
              try {
                g(!0, e) ? _.postMessage(null) : ((v = !1), (g = null));
              } catch (e) {
                throw (_.postMessage(null), e);
              }
            } else v = !1;
          }),
            (n = function (e) {
              (g = e), v || ((v = !0), _.postMessage(null));
            }),
            (r = function (e, n) {
              m = d(function () {
                e(t.unstable_now());
              }, n);
            }),
            (i = function () {
              p(m), (m = -1);
            });
        }
        function k(e, t) {
          var n = e.length;
          e.push(t);
          e: for (;;) {
            var r = (n - 1) >>> 1,
              i = e[r];
            if (!(void 0 !== i && 0 < E(i, t))) break e;
            (e[r] = t), (e[n] = i), (n = r);
          }
        }
        function x(e) {
          return void 0 === (e = e[0]) ? null : e;
        }
        function S(e) {
          var t = e[0];
          if (void 0 !== t) {
            var n = e.pop();
            if (n !== t) {
              e[0] = n;
              e: for (var r = 0, i = e.length; r < i; ) {
                var o = 2 * (r + 1) - 1,
                  a = e[o],
                  u = o + 1,
                  l = e[u];
                if (void 0 !== a && 0 > E(a, n))
                  void 0 !== l && 0 > E(l, a)
                    ? ((e[r] = l), (e[u] = n), (r = u))
                    : ((e[r] = a), (e[o] = n), (r = o));
                else {
                  if (!(void 0 !== l && 0 > E(l, n))) break e;
                  (e[r] = l), (e[u] = n), (r = u);
                }
              }
            }
            return t;
          }
          return null;
        }
        function E(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        var O = [],
          C = [],
          T = 1,
          P = null,
          I = 3,
          R = !1,
          N = !1,
          A = !1;
        function L(e) {
          for (var t = x(C); null !== t; ) {
            if (null === t.callback) S(C);
            else {
              if (!(t.startTime <= e)) break;
              S(C), (t.sortIndex = t.expirationTime), k(O, t);
            }
            t = x(C);
          }
        }
        function z(e) {
          if (((A = !1), L(e), !N))
            if (null !== x(O)) (N = !0), n(j);
            else {
              var t = x(C);
              null !== t && r(z, t.startTime - e);
            }
        }
        function j(e, n) {
          (N = !1), A && ((A = !1), i()), (R = !0);
          var o = I;
          try {
            for (
              L(n), P = x(O);
              null !== P &&
              (!(P.expirationTime > n) || (e && !t.unstable_shouldYield()));

            ) {
              var a = P.callback;
              if ("function" == typeof a) {
                (P.callback = null), (I = P.priorityLevel);
                var u = a(P.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" == typeof u
                    ? (P.callback = u)
                    : P === x(O) && S(O),
                  L(n);
              } else S(O);
              P = x(O);
            }
            if (null !== P) var l = !0;
            else {
              var s = x(C);
              null !== s && r(z, s.startTime - n), (l = !1);
            }
            return l;
          } finally {
            (P = null), (I = o), (R = !1);
          }
        }
        var M = o;
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            N || R || ((N = !0), n(j));
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return I;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return x(O);
          }),
          (t.unstable_next = function (e) {
            switch (I) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = I;
            }
            var n = I;
            I = t;
            try {
              return e();
            } finally {
              I = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = M),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = I;
            I = e;
            try {
              return t();
            } finally {
              I = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, o, a) {
            var u = t.unstable_now();
            switch (
              ((a =
                "object" == typeof a &&
                null !== a &&
                "number" == typeof (a = a.delay) &&
                0 < a
                  ? u + a
                  : u),
              e)
            ) {
              case 1:
                var l = -1;
                break;
              case 2:
                l = 250;
                break;
              case 5:
                l = 1073741823;
                break;
              case 4:
                l = 1e4;
                break;
              default:
                l = 5e3;
            }
            return (
              (e = {
                id: T++,
                callback: o,
                priorityLevel: e,
                startTime: a,
                expirationTime: (l = a + l),
                sortIndex: -1,
              }),
              a > u
                ? ((e.sortIndex = a),
                  k(C, e),
                  null === x(O) &&
                    e === x(C) &&
                    (A ? i() : (A = !0), r(z, a - u)))
                : ((e.sortIndex = l), k(O, e), N || R || ((N = !0), n(j))),
              e
            );
          }),
          (t.unstable_wrapCallback = function (e) {
            var t = I;
            return function () {
              var n = I;
              I = t;
              try {
                return e.apply(this, arguments);
              } finally {
                I = n;
              }
            };
          });
      },
      3840: (e, t, n) => {
        "use strict";
        e.exports = n(53);
      },
      7061: (e, t, n) => {
        var r = n(8698).default;
        function i() {
          "use strict";
          (e.exports = i =
            function () {
              return n;
            }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports);
          var t,
            n = {},
            o = Object.prototype,
            a = o.hasOwnProperty,
            u =
              Object.defineProperty ||
              function (e, t, n) {
                e[t] = n.value;
              },
            l = "function" == typeof Symbol ? Symbol : {},
            s = l.iterator || "@@iterator",
            c = l.asyncIterator || "@@asyncIterator",
            f = l.toStringTag || "@@toStringTag";
          function d(e, t, n) {
            return (
              Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              e[t]
            );
          }
          try {
            d({}, "");
          } catch (t) {
            d = function (e, t, n) {
              return (e[t] = n);
            };
          }
          function p(e, t, n, r) {
            var i = t && t.prototype instanceof w ? t : w,
              o = Object.create(i.prototype),
              a = new A(r || []);
            return u(o, "_invoke", { value: P(e, n, a) }), o;
          }
          function h(e, t, n) {
            try {
              return { type: "normal", arg: e.call(t, n) };
            } catch (e) {
              return { type: "throw", arg: e };
            }
          }
          n.wrap = p;
          var v = "suspendedStart",
            g = "suspendedYield",
            m = "executing",
            y = "completed",
            b = {};
          function w() {}
          function _() {}
          function k() {}
          var x = {};
          d(x, s, function () {
            return this;
          });
          var S = Object.getPrototypeOf,
            E = S && S(S(L([])));
          E && E !== o && a.call(E, s) && (x = E);
          var O = (k.prototype = w.prototype = Object.create(x));
          function C(e) {
            ["next", "throw", "return"].forEach(function (t) {
              d(e, t, function (e) {
                return this._invoke(t, e);
              });
            });
          }
          function T(e, t) {
            function n(i, o, u, l) {
              var s = h(e[i], e, o);
              if ("throw" !== s.type) {
                var c = s.arg,
                  f = c.value;
                return f && "object" == r(f) && a.call(f, "__await")
                  ? t.resolve(f.__await).then(
                      function (e) {
                        n("next", e, u, l);
                      },
                      function (e) {
                        n("throw", e, u, l);
                      }
                    )
                  : t.resolve(f).then(
                      function (e) {
                        (c.value = e), u(c);
                      },
                      function (e) {
                        return n("throw", e, u, l);
                      }
                    );
              }
              l(s.arg);
            }
            var i;
            u(this, "_invoke", {
              value: function (e, r) {
                function o() {
                  return new t(function (t, i) {
                    n(e, r, t, i);
                  });
                }
                return (i = i ? i.then(o, o) : o());
              },
            });
          }
          function P(e, n, r) {
            var i = v;
            return function (o, a) {
              if (i === m) throw new Error("Generator is already running");
              if (i === y) {
                if ("throw" === o) throw a;
                return { value: t, done: !0 };
              }
              for (r.method = o, r.arg = a; ; ) {
                var u = r.delegate;
                if (u) {
                  var l = I(u, r);
                  if (l) {
                    if (l === b) continue;
                    return l;
                  }
                }
                if ("next" === r.method) r.sent = r._sent = r.arg;
                else if ("throw" === r.method) {
                  if (i === v) throw ((i = y), r.arg);
                  r.dispatchException(r.arg);
                } else "return" === r.method && r.abrupt("return", r.arg);
                i = m;
                var s = h(e, n, r);
                if ("normal" === s.type) {
                  if (((i = r.done ? y : g), s.arg === b)) continue;
                  return { value: s.arg, done: r.done };
                }
                "throw" === s.type &&
                  ((i = y), (r.method = "throw"), (r.arg = s.arg));
              }
            };
          }
          function I(e, n) {
            var r = n.method,
              i = e.iterator[r];
            if (i === t)
              return (
                (n.delegate = null),
                ("throw" === r &&
                  e.iterator.return &&
                  ((n.method = "return"),
                  (n.arg = t),
                  I(e, n),
                  "throw" === n.method)) ||
                  ("return" !== r &&
                    ((n.method = "throw"),
                    (n.arg = new TypeError(
                      "The iterator does not provide a '" + r + "' method"
                    )))),
                b
              );
            var o = h(i, e.iterator, n.arg);
            if ("throw" === o.type)
              return (
                (n.method = "throw"), (n.arg = o.arg), (n.delegate = null), b
              );
            var a = o.arg;
            return a
              ? a.done
                ? ((n[e.resultName] = a.value),
                  (n.next = e.nextLoc),
                  "return" !== n.method && ((n.method = "next"), (n.arg = t)),
                  (n.delegate = null),
                  b)
                : a
              : ((n.method = "throw"),
                (n.arg = new TypeError("iterator result is not an object")),
                (n.delegate = null),
                b);
          }
          function R(e) {
            var t = { tryLoc: e[0] };
            1 in e && (t.catchLoc = e[1]),
              2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
              this.tryEntries.push(t);
          }
          function N(e) {
            var t = e.completion || {};
            (t.type = "normal"), delete t.arg, (e.completion = t);
          }
          function A(e) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              e.forEach(R, this),
              this.reset(!0);
          }
          function L(e) {
            if (e || "" === e) {
              var n = e[s];
              if (n) return n.call(e);
              if ("function" == typeof e.next) return e;
              if (!isNaN(e.length)) {
                var i = -1,
                  o = function n() {
                    for (; ++i < e.length; )
                      if (a.call(e, i))
                        return (n.value = e[i]), (n.done = !1), n;
                    return (n.value = t), (n.done = !0), n;
                  };
                return (o.next = o);
              }
            }
            throw new TypeError(r(e) + " is not iterable");
          }
          return (
            (_.prototype = k),
            u(O, "constructor", { value: k, configurable: !0 }),
            u(k, "constructor", { value: _, configurable: !0 }),
            (_.displayName = d(k, f, "GeneratorFunction")),
            (n.isGeneratorFunction = function (e) {
              var t = "function" == typeof e && e.constructor;
              return (
                !!t &&
                (t === _ || "GeneratorFunction" === (t.displayName || t.name))
              );
            }),
            (n.mark = function (e) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, k)
                  : ((e.__proto__ = k), d(e, f, "GeneratorFunction")),
                (e.prototype = Object.create(O)),
                e
              );
            }),
            (n.awrap = function (e) {
              return { __await: e };
            }),
            C(T.prototype),
            d(T.prototype, c, function () {
              return this;
            }),
            (n.AsyncIterator = T),
            (n.async = function (e, t, r, i, o) {
              void 0 === o && (o = Promise);
              var a = new T(p(e, t, r, i), o);
              return n.isGeneratorFunction(t)
                ? a
                : a.next().then(function (e) {
                    return e.done ? e.value : a.next();
                  });
            }),
            C(O),
            d(O, f, "Generator"),
            d(O, s, function () {
              return this;
            }),
            d(O, "toString", function () {
              return "[object Generator]";
            }),
            (n.keys = function (e) {
              var t = Object(e),
                n = [];
              for (var r in t) n.push(r);
              return (
                n.reverse(),
                function e() {
                  for (; n.length; ) {
                    var r = n.pop();
                    if (r in t) return (e.value = r), (e.done = !1), e;
                  }
                  return (e.done = !0), e;
                }
              );
            }),
            (n.values = L),
            (A.prototype = {
              constructor: A,
              reset: function (e) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = t),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = t),
                  this.tryEntries.forEach(N),
                  !e)
                )
                  for (var n in this)
                    "t" === n.charAt(0) &&
                      a.call(this, n) &&
                      !isNaN(+n.slice(1)) &&
                      (this[n] = t);
              },
              stop: function () {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval;
              },
              dispatchException: function (e) {
                if (this.done) throw e;
                var n = this;
                function r(r, i) {
                  return (
                    (u.type = "throw"),
                    (u.arg = e),
                    (n.next = r),
                    i && ((n.method = "next"), (n.arg = t)),
                    !!i
                  );
                }
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var o = this.tryEntries[i],
                    u = o.completion;
                  if ("root" === o.tryLoc) return r("end");
                  if (o.tryLoc <= this.prev) {
                    var l = a.call(o, "catchLoc"),
                      s = a.call(o, "finallyLoc");
                    if (l && s) {
                      if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                      if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                    } else if (l) {
                      if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                    } else {
                      if (!s)
                        throw new Error(
                          "try statement without catch or finally"
                        );
                      if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (e, t) {
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
                  ("break" === e || "continue" === e) &&
                  i.tryLoc <= t &&
                  t <= i.finallyLoc &&
                  (i = null);
                var o = i ? i.completion : {};
                return (
                  (o.type = e),
                  (o.arg = t),
                  i
                    ? ((this.method = "next"), (this.next = i.finallyLoc), b)
                    : this.complete(o)
                );
              },
              complete: function (e, t) {
                if ("throw" === e.type) throw e.arg;
                return (
                  "break" === e.type || "continue" === e.type
                    ? (this.next = e.arg)
                    : "return" === e.type
                    ? ((this.rval = this.arg = e.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === e.type && t && (this.next = t),
                  b
                );
              },
              finish: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t];
                  if (n.finallyLoc === e)
                    return this.complete(n.completion, n.afterLoc), N(n), b;
                }
              },
              catch: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t];
                  if (n.tryLoc === e) {
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
              delegateYield: function (e, n, r) {
                return (
                  (this.delegate = {
                    iterator: L(e),
                    resultName: n,
                    nextLoc: r,
                  }),
                  "next" === this.method && (this.arg = t),
                  b
                );
              },
            }),
            n
          );
        }
        (e.exports = i),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      8698: (e) => {
        function t(n) {
          return (
            (e.exports = t =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
                  }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports),
            t(n)
          );
        }
        (e.exports = t),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports);
      },
      4687: (e, t, n) => {
        var r = n(7061)();
        e.exports = r;
        try {
          regeneratorRuntime = r;
        } catch (e) {
          "object" == typeof globalThis
            ? (globalThis.regeneratorRuntime = r)
            : Function("r", "regeneratorRuntime = r")(r);
        }
      },
    },
    r = {};
  function i(e) {
    var t = r[e];
    if (void 0 !== t) return t.exports;
    var o = (r[e] = { id: e, loaded: !1, exports: {} });
    return n[e].call(o.exports, o, o.exports, i), (o.loaded = !0), o.exports;
  }
  (i.amdO = {}),
    (i.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return i.d(t, { a: t }), t;
    }),
    (t = Object.getPrototypeOf
      ? (e) => Object.getPrototypeOf(e)
      : (e) => e.__proto__),
    (i.t = function (n, r) {
      if ((1 & r && (n = this(n)), 8 & r)) return n;
      if ("object" == typeof n && n) {
        if (4 & r && n.__esModule) return n;
        if (16 & r && "function" == typeof n.then) return n;
      }
      var o = Object.create(null);
      i.r(o);
      var a = {};
      e = e || [null, t({}), t([]), t(t)];
      for (var u = 2 & r && n; "object" == typeof u && !~e.indexOf(u); u = t(u))
        Object.getOwnPropertyNames(u).forEach((e) => (a[e] = () => n[e]));
      return (a.default = () => n), i.d(o, a), o;
    }),
    (i.d = (e, t) => {
      for (var n in t)
        i.o(t, n) &&
          !i.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (i.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (i.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (i.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (() => {
      "use strict";
      var e = {};
      i.r(e),
        i.d(e, {
          IdentifyOperation: () => go,
          LogLevel: () => Ti,
          PluginType: () => Zi,
          RevenueProperty: () => mo,
          ServerZone: () => ao,
          SpecialEventType: () => yo,
          Status: () => ro,
          TransportType: () => _o,
        });
      var t = {};
      function n(e, t, n, r, i, o, a) {
        try {
          var u = e[o](a),
            l = u.value;
        } catch (e) {
          return void n(e);
        }
        u.done ? t(l) : Promise.resolve(l).then(r, i);
      }
      function r(e) {
        return function () {
          var t = this,
            r = arguments;
          return new Promise(function (i, o) {
            var a = e.apply(t, r);
            function u(e) {
              n(a, i, o, u, l, "next", e);
            }
            function l(e) {
              n(a, i, o, u, l, "throw", e);
            }
            u(void 0);
          });
        };
      }
      function o(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      i.r(t),
        i.d(t, {
          Identify: () => So,
          Revenue: () => Eo,
          Types: () => e,
          add: () => Da,
          createInstance: () => Ma,
          extendSession: () => Ua,
          flush: () => Fa,
          getDeviceId: () => Ba,
          getSessionId: () => Va,
          getUserId: () => qa,
          groupIdentify: () => Wa,
          identify: () => Ha,
          init: () => Ka,
          logEvent: () => Qa,
          remove: () => Ga,
          reset: () => Ya,
          revenue: () => Xa,
          runQueuedFunctions: () => Aa,
          setDeviceId: () => Za,
          setGroup: () => Ja,
          setOptOut: () => eu,
          setSessionId: () => tu,
          setTransport: () => nu,
          setUserId: () => ru,
          track: () => iu,
        });
      var a = i(4687),
        u = i.n(a),
        l = i(7294),
        s = i.t(l, 2),
        c = i(3935);
      function f() {
        return (
          (f = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          f.apply(this, arguments)
        );
      }
      function d(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = {},
          o = Object.keys(e);
        for (r = 0; r < o.length; r++)
          (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
        return i;
      }
      function p(e) {
        var t,
          n,
          r = "";
        if ("string" == typeof e || "number" == typeof e) r += e;
        else if ("object" == typeof e)
          if (Array.isArray(e))
            for (t = 0; t < e.length; t++)
              e[t] && (n = p(e[t])) && (r && (r += " "), (r += n));
          else for (t in e) e[t] && (r && (r += " "), (r += t));
        return r;
      }
      const h = function () {
        for (var e, t, n = 0, r = ""; n < arguments.length; )
          (e = arguments[n++]) && (t = p(e)) && (r && (r += " "), (r += t));
        return r;
      };
      function v(e) {
        var t = Object.create(null);
        return function (n) {
          return void 0 === t[n] && (t[n] = e(n)), t[n];
        };
      }
      var g =
          /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
        m = v(function (e) {
          return (
            g.test(e) ||
            (111 === e.charCodeAt(0) &&
              110 === e.charCodeAt(1) &&
              e.charCodeAt(2) < 91)
          );
        }),
        y = (function () {
          function e(e) {
            var t = this;
            (this._insertTag = function (e) {
              var n;
              (n =
                0 === t.tags.length
                  ? t.insertionPoint
                    ? t.insertionPoint.nextSibling
                    : t.prepend
                    ? t.container.firstChild
                    : t.before
                  : t.tags[t.tags.length - 1].nextSibling),
                t.container.insertBefore(e, n),
                t.tags.push(e);
            }),
              (this.isSpeedy = void 0 === e.speedy || e.speedy),
              (this.tags = []),
              (this.ctr = 0),
              (this.nonce = e.nonce),
              (this.key = e.key),
              (this.container = e.container),
              (this.prepend = e.prepend),
              (this.insertionPoint = e.insertionPoint),
              (this.before = null);
          }
          var t = e.prototype;
          return (
            (t.hydrate = function (e) {
              e.forEach(this._insertTag);
            }),
            (t.insert = function (e) {
              this.ctr % (this.isSpeedy ? 65e3 : 1) == 0 &&
                this._insertTag(
                  (function (e) {
                    var t = document.createElement("style");
                    return (
                      t.setAttribute("data-emotion", e.key),
                      void 0 !== e.nonce && t.setAttribute("nonce", e.nonce),
                      t.appendChild(document.createTextNode("")),
                      t.setAttribute("data-s", ""),
                      t
                    );
                  })(this)
                );
              var t = this.tags[this.tags.length - 1];
              if (this.isSpeedy) {
                var n = (function (e) {
                  if (e.sheet) return e.sheet;
                  for (var t = 0; t < document.styleSheets.length; t++)
                    if (document.styleSheets[t].ownerNode === e)
                      return document.styleSheets[t];
                })(t);
                try {
                  n.insertRule(e, n.cssRules.length);
                } catch (e) {}
              } else t.appendChild(document.createTextNode(e));
              this.ctr++;
            }),
            (t.flush = function () {
              this.tags.forEach(function (e) {
                return e.parentNode && e.parentNode.removeChild(e);
              }),
                (this.tags = []),
                (this.ctr = 0);
            }),
            e
          );
        })(),
        b = Math.abs,
        w = String.fromCharCode,
        _ = Object.assign;
      function k(e) {
        return e.trim();
      }
      function x(e, t, n) {
        return e.replace(t, n);
      }
      function S(e, t) {
        return e.indexOf(t);
      }
      function E(e, t) {
        return 0 | e.charCodeAt(t);
      }
      function O(e, t, n) {
        return e.slice(t, n);
      }
      function C(e) {
        return e.length;
      }
      function T(e) {
        return e.length;
      }
      function P(e, t) {
        return t.push(e), e;
      }
      var I = 1,
        R = 1,
        N = 0,
        A = 0,
        L = 0,
        z = "";
      function j(e, t, n, r, i, o, a) {
        return {
          value: e,
          root: t,
          parent: n,
          type: r,
          props: i,
          children: o,
          line: I,
          column: R,
          length: a,
          return: "",
        };
      }
      function M(e, t) {
        return _(
          j("", null, null, "", null, null, 0),
          e,
          { length: -e.length },
          t
        );
      }
      function $() {
        return (L = A > 0 ? E(z, --A) : 0), R--, 10 === L && ((R = 1), I--), L;
      }
      function D() {
        return (L = A < N ? E(z, A++) : 0), R++, 10 === L && ((R = 1), I++), L;
      }
      function U() {
        return E(z, A);
      }
      function F() {
        return A;
      }
      function B(e, t) {
        return O(z, e, t);
      }
      function V(e) {
        switch (e) {
          case 0:
          case 9:
          case 10:
          case 13:
          case 32:
            return 5;
          case 33:
          case 43:
          case 44:
          case 47:
          case 62:
          case 64:
          case 126:
          case 59:
          case 123:
          case 125:
            return 4;
          case 58:
            return 3;
          case 34:
          case 39:
          case 40:
          case 91:
            return 2;
          case 41:
          case 93:
            return 1;
        }
        return 0;
      }
      function q(e) {
        return (I = R = 1), (N = C((z = e))), (A = 0), [];
      }
      function W(e) {
        return (z = ""), e;
      }
      function H(e) {
        return k(B(A - 1, G(91 === e ? e + 2 : 40 === e ? e + 1 : e)));
      }
      function K(e) {
        for (; (L = U()) && L < 33; ) D();
        return V(e) > 2 || V(L) > 3 ? "" : " ";
      }
      function Q(e, t) {
        for (
          ;
          --t &&
          D() &&
          !(L < 48 || L > 102 || (L > 57 && L < 65) || (L > 70 && L < 97));

        );
        return B(e, F() + (t < 6 && 32 == U() && 32 == D()));
      }
      function G(e) {
        for (; D(); )
          switch (L) {
            case e:
              return A;
            case 34:
            case 39:
              34 !== e && 39 !== e && G(L);
              break;
            case 40:
              41 === e && G(e);
              break;
            case 92:
              D();
          }
        return A;
      }
      function Y(e, t) {
        for (; D() && e + L !== 57 && (e + L !== 84 || 47 !== U()); );
        return "/*" + B(t, A - 1) + "*" + w(47 === e ? e : D());
      }
      function X(e) {
        for (; !V(U()); ) D();
        return B(e, A);
      }
      var Z = "-ms-",
        J = "-moz-",
        ee = "-webkit-",
        te = "comm",
        ne = "rule",
        re = "decl",
        ie = "@keyframes";
      function oe(e, t) {
        for (var n = "", r = T(e), i = 0; i < r; i++)
          n += t(e[i], i, e, t) || "";
        return n;
      }
      function ae(e, t, n, r) {
        switch (e.type) {
          case "@layer":
            if (e.children.length) break;
          case "@import":
          case re:
            return (e.return = e.return || e.value);
          case te:
            return "";
          case ie:
            return (e.return = e.value + "{" + oe(e.children, r) + "}");
          case ne:
            e.value = e.props.join(",");
        }
        return C((n = oe(e.children, r)))
          ? (e.return = e.value + "{" + n + "}")
          : "";
      }
      function ue(e) {
        return W(le("", null, null, null, [""], (e = q(e)), 0, [0], e));
      }
      function le(e, t, n, r, i, o, a, u, l) {
        for (
          var s = 0,
            c = 0,
            f = a,
            d = 0,
            p = 0,
            h = 0,
            v = 1,
            g = 1,
            m = 1,
            y = 0,
            b = "",
            _ = i,
            k = o,
            O = r,
            T = b;
          g;

        )
          switch (((h = y), (y = D()))) {
            case 40:
              if (108 != h && 58 == E(T, f - 1)) {
                -1 != S((T += x(H(y), "&", "&\f")), "&\f") && (m = -1);
                break;
              }
            case 34:
            case 39:
            case 91:
              T += H(y);
              break;
            case 9:
            case 10:
            case 13:
            case 32:
              T += K(h);
              break;
            case 92:
              T += Q(F() - 1, 7);
              continue;
            case 47:
              switch (U()) {
                case 42:
                case 47:
                  P(ce(Y(D(), F()), t, n), l);
                  break;
                default:
                  T += "/";
              }
              break;
            case 123 * v:
              u[s++] = C(T) * m;
            case 125 * v:
            case 59:
            case 0:
              switch (y) {
                case 0:
                case 125:
                  g = 0;
                case 59 + c:
                  -1 == m && (T = x(T, /\f/g, "")),
                    p > 0 &&
                      C(T) - f &&
                      P(
                        p > 32
                          ? fe(T + ";", r, n, f - 1)
                          : fe(x(T, " ", "") + ";", r, n, f - 2),
                        l
                      );
                  break;
                case 59:
                  T += ";";
                default:
                  if (
                    (P(
                      (O = se(T, t, n, s, c, i, u, b, (_ = []), (k = []), f)),
                      o
                    ),
                    123 === y)
                  )
                    if (0 === c) le(T, t, O, O, _, o, f, u, k);
                    else
                      switch (99 === d && 110 === E(T, 3) ? 100 : d) {
                        case 100:
                        case 108:
                        case 109:
                        case 115:
                          le(
                            e,
                            O,
                            O,
                            r &&
                              P(se(e, O, O, 0, 0, i, u, b, i, (_ = []), f), k),
                            i,
                            k,
                            f,
                            u,
                            r ? _ : k
                          );
                          break;
                        default:
                          le(T, O, O, O, [""], k, 0, u, k);
                      }
              }
              (s = c = p = 0), (v = m = 1), (b = T = ""), (f = a);
              break;
            case 58:
              (f = 1 + C(T)), (p = h);
            default:
              if (v < 1)
                if (123 == y) --v;
                else if (125 == y && 0 == v++ && 125 == $()) continue;
              switch (((T += w(y)), y * v)) {
                case 38:
                  m = c > 0 ? 1 : ((T += "\f"), -1);
                  break;
                case 44:
                  (u[s++] = (C(T) - 1) * m), (m = 1);
                  break;
                case 64:
                  45 === U() && (T += H(D())),
                    (d = U()),
                    (c = f = C((b = T += X(F())))),
                    y++;
                  break;
                case 45:
                  45 === h && 2 == C(T) && (v = 0);
              }
          }
        return o;
      }
      function se(e, t, n, r, i, o, a, u, l, s, c) {
        for (
          var f = i - 1, d = 0 === i ? o : [""], p = T(d), h = 0, v = 0, g = 0;
          h < r;
          ++h
        )
          for (
            var m = 0, y = O(e, f + 1, (f = b((v = a[h])))), w = e;
            m < p;
            ++m
          )
            (w = k(v > 0 ? d[m] + " " + y : x(y, /&\f/g, d[m]))) &&
              (l[g++] = w);
        return j(e, t, n, 0 === i ? ne : u, l, s, c);
      }
      function ce(e, t, n) {
        return j(e, t, n, te, w(L), O(e, 2, -2), 0);
      }
      function fe(e, t, n, r) {
        return j(e, t, n, re, O(e, 0, r), O(e, r + 1, -1), r);
      }
      var de = function (e, t, n) {
          for (
            var r = 0, i = 0;
            (r = i), (i = U()), 38 === r && 12 === i && (t[n] = 1), !V(i);

          )
            D();
          return B(e, A);
        },
        pe = new WeakMap(),
        he = function (e) {
          if ("rule" === e.type && e.parent && !(e.length < 1)) {
            for (
              var t = e.value,
                n = e.parent,
                r = e.column === n.column && e.line === n.line;
              "rule" !== n.type;

            )
              if (!(n = n.parent)) return;
            if (
              (1 !== e.props.length || 58 === t.charCodeAt(0) || pe.get(n)) &&
              !r
            ) {
              pe.set(e, !0);
              for (
                var i = [],
                  o = (function (e, t) {
                    return W(
                      (function (e, t) {
                        var n = -1,
                          r = 44;
                        do {
                          switch (V(r)) {
                            case 0:
                              38 === r && 12 === U() && (t[n] = 1),
                                (e[n] += de(A - 1, t, n));
                              break;
                            case 2:
                              e[n] += H(r);
                              break;
                            case 4:
                              if (44 === r) {
                                (e[++n] = 58 === U() ? "&\f" : ""),
                                  (t[n] = e[n].length);
                                break;
                              }
                            default:
                              e[n] += w(r);
                          }
                        } while ((r = D()));
                        return e;
                      })(q(e), t)
                    );
                  })(t, i),
                  a = n.props,
                  u = 0,
                  l = 0;
                u < o.length;
                u++
              )
                for (var s = 0; s < a.length; s++, l++)
                  e.props[l] = i[u]
                    ? o[u].replace(/&\f/g, a[s])
                    : a[s] + " " + o[u];
            }
          }
        },
        ve = function (e) {
          if ("decl" === e.type) {
            var t = e.value;
            108 === t.charCodeAt(0) &&
              98 === t.charCodeAt(2) &&
              ((e.return = ""), (e.value = ""));
          }
        };
      function ge(e, t) {
        switch (
          (function (e, t) {
            return 45 ^ E(e, 0)
              ? (((((((t << 2) ^ E(e, 0)) << 2) ^ E(e, 1)) << 2) ^ E(e, 2)) <<
                  2) ^
                  E(e, 3)
              : 0;
          })(e, t)
        ) {
          case 5103:
            return ee + "print-" + e + e;
          case 5737:
          case 4201:
          case 3177:
          case 3433:
          case 1641:
          case 4457:
          case 2921:
          case 5572:
          case 6356:
          case 5844:
          case 3191:
          case 6645:
          case 3005:
          case 6391:
          case 5879:
          case 5623:
          case 6135:
          case 4599:
          case 4855:
          case 4215:
          case 6389:
          case 5109:
          case 5365:
          case 5621:
          case 3829:
            return ee + e + e;
          case 5349:
          case 4246:
          case 4810:
          case 6968:
          case 2756:
            return ee + e + J + e + Z + e + e;
          case 6828:
          case 4268:
            return ee + e + Z + e + e;
          case 6165:
            return ee + e + Z + "flex-" + e + e;
          case 5187:
            return (
              ee +
              e +
              x(e, /(\w+).+(:[^]+)/, ee + "box-$1$2" + Z + "flex-$1$2") +
              e
            );
          case 5443:
            return ee + e + Z + "flex-item-" + x(e, /flex-|-self/, "") + e;
          case 4675:
            return (
              ee +
              e +
              Z +
              "flex-line-pack" +
              x(e, /align-content|flex-|-self/, "") +
              e
            );
          case 5548:
            return ee + e + Z + x(e, "shrink", "negative") + e;
          case 5292:
            return ee + e + Z + x(e, "basis", "preferred-size") + e;
          case 6060:
            return (
              ee +
              "box-" +
              x(e, "-grow", "") +
              ee +
              e +
              Z +
              x(e, "grow", "positive") +
              e
            );
          case 4554:
            return ee + x(e, /([^-])(transform)/g, "$1" + ee + "$2") + e;
          case 6187:
            return (
              x(
                x(x(e, /(zoom-|grab)/, ee + "$1"), /(image-set)/, ee + "$1"),
                e,
                ""
              ) + e
            );
          case 5495:
          case 3959:
            return x(e, /(image-set\([^]*)/, ee + "$1$`$1");
          case 4968:
            return (
              x(
                x(
                  e,
                  /(.+:)(flex-)?(.*)/,
                  ee + "box-pack:$3" + Z + "flex-pack:$3"
                ),
                /s.+-b[^;]+/,
                "justify"
              ) +
              ee +
              e +
              e
            );
          case 4095:
          case 3583:
          case 4068:
          case 2532:
            return x(e, /(.+)-inline(.+)/, ee + "$1$2") + e;
          case 8116:
          case 7059:
          case 5753:
          case 5535:
          case 5445:
          case 5701:
          case 4933:
          case 4677:
          case 5533:
          case 5789:
          case 5021:
          case 4765:
            if (C(e) - 1 - t > 6)
              switch (E(e, t + 1)) {
                case 109:
                  if (45 !== E(e, t + 4)) break;
                case 102:
                  return (
                    x(
                      e,
                      /(.+:)(.+)-([^]+)/,
                      "$1" +
                        ee +
                        "$2-$3$1" +
                        J +
                        (108 == E(e, t + 3) ? "$3" : "$2-$3")
                    ) + e
                  );
                case 115:
                  return ~S(e, "stretch")
                    ? ge(x(e, "stretch", "fill-available"), t) + e
                    : e;
              }
            break;
          case 4949:
            if (115 !== E(e, t + 1)) break;
          case 6444:
            switch (E(e, C(e) - 3 - (~S(e, "!important") && 10))) {
              case 107:
                return x(e, ":", ":" + ee) + e;
              case 101:
                return (
                  x(
                    e,
                    /(.+:)([^;!]+)(;|!.+)?/,
                    "$1" +
                      ee +
                      (45 === E(e, 14) ? "inline-" : "") +
                      "box$3$1" +
                      ee +
                      "$2$3$1" +
                      Z +
                      "$2box$3"
                  ) + e
                );
            }
            break;
          case 5936:
            switch (E(e, t + 11)) {
              case 114:
                return ee + e + Z + x(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
              case 108:
                return ee + e + Z + x(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
              case 45:
                return ee + e + Z + x(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
            }
            return ee + e + Z + e + e;
        }
        return e;
      }
      var me = [
          function (e, t, n, r) {
            if (e.length > -1 && !e.return)
              switch (e.type) {
                case re:
                  e.return = ge(e.value, e.length);
                  break;
                case ie:
                  return oe([M(e, { value: x(e.value, "@", "@" + ee) })], r);
                case ne:
                  if (e.length)
                    return (function (e, t) {
                      return e.map(t).join("");
                    })(e.props, function (t) {
                      switch (
                        (function (e, t) {
                          return (e = /(::plac\w+|:read-\w+)/.exec(e))
                            ? e[0]
                            : e;
                        })(t)
                      ) {
                        case ":read-only":
                        case ":read-write":
                          return oe(
                            [
                              M(e, {
                                props: [x(t, /:(read-\w+)/, ":-moz-$1")],
                              }),
                            ],
                            r
                          );
                        case "::placeholder":
                          return oe(
                            [
                              M(e, {
                                props: [
                                  x(t, /:(plac\w+)/, ":" + ee + "input-$1"),
                                ],
                              }),
                              M(e, { props: [x(t, /:(plac\w+)/, ":-moz-$1")] }),
                              M(e, {
                                props: [x(t, /:(plac\w+)/, Z + "input-$1")],
                              }),
                            ],
                            r
                          );
                      }
                      return "";
                    });
              }
          },
        ],
        ye = function (e) {
          var t = e.key;
          if ("css" === t) {
            var n = document.querySelectorAll(
              "style[data-emotion]:not([data-s])"
            );
            Array.prototype.forEach.call(n, function (e) {
              -1 !== e.getAttribute("data-emotion").indexOf(" ") &&
                (document.head.appendChild(e), e.setAttribute("data-s", ""));
            });
          }
          var r,
            i,
            o = e.stylisPlugins || me,
            a = {},
            u = [];
          (r = e.container || document.head),
            Array.prototype.forEach.call(
              document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
              function (e) {
                for (
                  var t = e.getAttribute("data-emotion").split(" "), n = 1;
                  n < t.length;
                  n++
                )
                  a[t[n]] = !0;
                u.push(e);
              }
            );
          var l,
            s,
            c,
            f,
            d = [
              ae,
              ((f = function (e) {
                l.insert(e);
              }),
              function (e) {
                e.root || ((e = e.return) && f(e));
              }),
            ],
            p =
              ((s = [he, ve].concat(o, d)),
              (c = T(s)),
              function (e, t, n, r) {
                for (var i = "", o = 0; o < c; o++) i += s[o](e, t, n, r) || "";
                return i;
              });
          i = function (e, t, n, r) {
            (l = n),
              oe(ue(e ? e + "{" + t.styles + "}" : t.styles), p),
              r && (h.inserted[t.name] = !0);
          };
          var h = {
            key: t,
            sheet: new y({
              key: t,
              container: r,
              nonce: e.nonce,
              speedy: e.speedy,
              prepend: e.prepend,
              insertionPoint: e.insertionPoint,
            }),
            nonce: e.nonce,
            inserted: a,
            registered: {},
            insert: i,
          };
          return h.sheet.hydrate(u), h;
        },
        be = {
          animationIterationCount: 1,
          aspectRatio: 1,
          borderImageOutset: 1,
          borderImageSlice: 1,
          borderImageWidth: 1,
          boxFlex: 1,
          boxFlexGroup: 1,
          boxOrdinalGroup: 1,
          columnCount: 1,
          columns: 1,
          flex: 1,
          flexGrow: 1,
          flexPositive: 1,
          flexShrink: 1,
          flexNegative: 1,
          flexOrder: 1,
          gridRow: 1,
          gridRowEnd: 1,
          gridRowSpan: 1,
          gridRowStart: 1,
          gridColumn: 1,
          gridColumnEnd: 1,
          gridColumnSpan: 1,
          gridColumnStart: 1,
          msGridRow: 1,
          msGridRowSpan: 1,
          msGridColumn: 1,
          msGridColumnSpan: 1,
          fontWeight: 1,
          lineHeight: 1,
          opacity: 1,
          order: 1,
          orphans: 1,
          tabSize: 1,
          widows: 1,
          zIndex: 1,
          zoom: 1,
          WebkitLineClamp: 1,
          fillOpacity: 1,
          floodOpacity: 1,
          stopOpacity: 1,
          strokeDasharray: 1,
          strokeDashoffset: 1,
          strokeMiterlimit: 1,
          strokeOpacity: 1,
          strokeWidth: 1,
        },
        we = /[A-Z]|^ms/g,
        _e = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
        ke = function (e) {
          return 45 === e.charCodeAt(1);
        },
        xe = function (e) {
          return null != e && "boolean" != typeof e;
        },
        Se = v(function (e) {
          return ke(e) ? e : e.replace(we, "-$&").toLowerCase();
        }),
        Ee = function (e, t) {
          switch (e) {
            case "animation":
            case "animationName":
              if ("string" == typeof t)
                return t.replace(_e, function (e, t, n) {
                  return (Ce = { name: t, styles: n, next: Ce }), t;
                });
          }
          return 1 === be[e] || ke(e) || "number" != typeof t || 0 === t
            ? t
            : t + "px";
        };
      function Oe(e, t, n) {
        if (null == n) return "";
        if (void 0 !== n.__emotion_styles) return n;
        switch (typeof n) {
          case "boolean":
            return "";
          case "object":
            if (1 === n.anim)
              return (
                (Ce = { name: n.name, styles: n.styles, next: Ce }), n.name
              );
            if (void 0 !== n.styles) {
              var r = n.next;
              if (void 0 !== r)
                for (; void 0 !== r; )
                  (Ce = { name: r.name, styles: r.styles, next: Ce }),
                    (r = r.next);
              return n.styles + ";";
            }
            return (function (e, t, n) {
              var r = "";
              if (Array.isArray(n))
                for (var i = 0; i < n.length; i++) r += Oe(e, t, n[i]) + ";";
              else
                for (var o in n) {
                  var a = n[o];
                  if ("object" != typeof a)
                    null != t && void 0 !== t[a]
                      ? (r += o + "{" + t[a] + "}")
                      : xe(a) && (r += Se(o) + ":" + Ee(o, a) + ";");
                  else if (
                    !Array.isArray(a) ||
                    "string" != typeof a[0] ||
                    (null != t && void 0 !== t[a[0]])
                  ) {
                    var u = Oe(e, t, a);
                    switch (o) {
                      case "animation":
                      case "animationName":
                        r += Se(o) + ":" + u + ";";
                        break;
                      default:
                        r += o + "{" + u + "}";
                    }
                  } else
                    for (var l = 0; l < a.length; l++)
                      xe(a[l]) && (r += Se(o) + ":" + Ee(o, a[l]) + ";");
                }
              return r;
            })(e, t, n);
          case "function":
            if (void 0 !== e) {
              var i = Ce,
                o = n(e);
              return (Ce = i), Oe(e, t, o);
            }
        }
        if (null == t) return n;
        var a = t[n];
        return void 0 !== a ? a : n;
      }
      var Ce,
        Te = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
        Pe = function (e, t, n) {
          if (
            1 === e.length &&
            "object" == typeof e[0] &&
            null !== e[0] &&
            void 0 !== e[0].styles
          )
            return e[0];
          var r = !0,
            i = "";
          Ce = void 0;
          var o = e[0];
          null == o || void 0 === o.raw
            ? ((r = !1), (i += Oe(n, t, o)))
            : (i += o[0]);
          for (var a = 1; a < e.length; a++)
            (i += Oe(n, t, e[a])), r && (i += o[a]);
          Te.lastIndex = 0;
          for (var u, l = ""; null !== (u = Te.exec(i)); ) l += "-" + u[1];
          var s =
            (function (e) {
              for (var t, n = 0, r = 0, i = e.length; i >= 4; ++r, i -= 4)
                (t =
                  1540483477 *
                    (65535 &
                      (t =
                        (255 & e.charCodeAt(r)) |
                        ((255 & e.charCodeAt(++r)) << 8) |
                        ((255 & e.charCodeAt(++r)) << 16) |
                        ((255 & e.charCodeAt(++r)) << 24))) +
                  ((59797 * (t >>> 16)) << 16)),
                  (n =
                    (1540483477 * (65535 & (t ^= t >>> 24)) +
                      ((59797 * (t >>> 16)) << 16)) ^
                    (1540483477 * (65535 & n) + ((59797 * (n >>> 16)) << 16)));
              switch (i) {
                case 3:
                  n ^= (255 & e.charCodeAt(r + 2)) << 16;
                case 2:
                  n ^= (255 & e.charCodeAt(r + 1)) << 8;
                case 1:
                  n =
                    1540483477 * (65535 & (n ^= 255 & e.charCodeAt(r))) +
                    ((59797 * (n >>> 16)) << 16);
              }
              return (
                ((n =
                  1540483477 * (65535 & (n ^= n >>> 13)) +
                  ((59797 * (n >>> 16)) << 16)) ^
                  (n >>> 15)) >>>
                0
              ).toString(36);
            })(i) + l;
          return { name: s, styles: i, next: Ce };
        },
        Ie = !!s.useInsertionEffect && s.useInsertionEffect,
        Re =
          Ie ||
          function (e) {
            return e();
          },
        Ne =
          (Ie || l.useLayoutEffect,
          l.createContext(
            "undefined" != typeof HTMLElement ? ye({ key: "css" }) : null
          ));
      Ne.Provider;
      var Ae = l.createContext({}),
        Le = function (e, t, n) {
          var r = e.key + "-" + t.name;
          !1 === n &&
            void 0 === e.registered[r] &&
            (e.registered[r] = t.styles);
        },
        ze = m,
        je = function (e) {
          return "theme" !== e;
        },
        Me = function (e) {
          return "string" == typeof e && e.charCodeAt(0) > 96 ? ze : je;
        },
        $e = function (e, t, n) {
          var r;
          if (t) {
            var i = t.shouldForwardProp;
            r =
              e.__emotion_forwardProp && i
                ? function (t) {
                    return e.__emotion_forwardProp(t) && i(t);
                  }
                : i;
          }
          return (
            "function" != typeof r && n && (r = e.__emotion_forwardProp), r
          );
        },
        De = function (e) {
          var t = e.cache,
            n = e.serialized,
            r = e.isStringTag;
          return (
            Le(t, n, r),
            Re(function () {
              return (function (e, t, n) {
                Le(e, t, n);
                var r = e.key + "-" + t.name;
                if (void 0 === e.inserted[t.name]) {
                  var i = t;
                  do {
                    e.insert(t === i ? "." + r : "", i, e.sheet, !0),
                      (i = i.next);
                  } while (void 0 !== i);
                }
              })(t, n, r);
            }),
            null
          );
        },
        Ue = function e(t, n) {
          var r,
            i,
            o = t.__emotion_real === t,
            a = (o && t.__emotion_base) || t;
          void 0 !== n && ((r = n.label), (i = n.target));
          var u = $e(t, n, o),
            s = u || Me(a),
            c = !s("as");
          return function () {
            var d = arguments,
              p =
                o && void 0 !== t.__emotion_styles
                  ? t.__emotion_styles.slice(0)
                  : [];
            if (
              (void 0 !== r && p.push("label:" + r + ";"),
              null == d[0] || void 0 === d[0].raw)
            )
              p.push.apply(p, d);
            else {
              p.push(d[0][0]);
              for (var h = d.length, v = 1; v < h; v++) p.push(d[v], d[0][v]);
            }
            var g,
              m =
                ((g = function (e, t, n) {
                  var r,
                    o,
                    f,
                    d,
                    h = (c && e.as) || a,
                    v = "",
                    g = [],
                    m = e;
                  if (null == e.theme) {
                    for (var y in ((m = {}), e)) m[y] = e[y];
                    m.theme = l.useContext(Ae);
                  }
                  "string" == typeof e.className
                    ? ((r = t.registered),
                      (o = g),
                      (f = e.className),
                      (d = ""),
                      f.split(" ").forEach(function (e) {
                        void 0 !== r[e] ? o.push(r[e] + ";") : (d += e + " ");
                      }),
                      (v = d))
                    : null != e.className && (v = e.className + " ");
                  var b = Pe(p.concat(g), t.registered, m);
                  (v += t.key + "-" + b.name), void 0 !== i && (v += " " + i);
                  var w = c && void 0 === u ? Me(h) : s,
                    _ = {};
                  for (var k in e) (c && "as" === k) || (w(k) && (_[k] = e[k]));
                  return (
                    (_.className = v),
                    (_.ref = n),
                    l.createElement(
                      l.Fragment,
                      null,
                      l.createElement(De, {
                        cache: t,
                        serialized: b,
                        isStringTag: "string" == typeof h,
                      }),
                      l.createElement(h, _)
                    )
                  );
                }),
                (0, l.forwardRef)(function (e, t) {
                  var n = (0, l.useContext)(Ne);
                  return g(e, n, t);
                }));
            return (
              (m.displayName =
                void 0 !== r
                  ? r
                  : "Styled(" +
                    ("string" == typeof a
                      ? a
                      : a.displayName || a.name || "Component") +
                    ")"),
              (m.defaultProps = t.defaultProps),
              (m.__emotion_real = m),
              (m.__emotion_base = a),
              (m.__emotion_styles = p),
              (m.__emotion_forwardProp = u),
              Object.defineProperty(m, "toString", {
                value: function () {
                  return "." + i;
                },
              }),
              (m.withComponent = function (t, r) {
                return e(
                  t,
                  f({}, n, r, { shouldForwardProp: $e(m, r, !0) })
                ).apply(void 0, p);
              }),
              m
            );
          };
        }.bind();
      function Fe(e, t) {
        return Ue(e, t);
      }
      function Be(e) {
        let t = "https://mui.com/production-error/?code=" + e;
        for (let e = 1; e < arguments.length; e += 1)
          t += "&args[]=" + encodeURIComponent(arguments[e]);
        return (
          "Minified MUI error #" + e + "; visit " + t + " for the full message."
        );
      }
      function Ve(e) {
        if ("string" != typeof e) throw new Error(Be(7));
        return e.charAt(0).toUpperCase() + e.slice(1);
      }
      function qe(e) {
        return null !== e && "object" == typeof e && e.constructor === Object;
      }
      function We(e) {
        if (!qe(e)) return e;
        const t = {};
        return (
          Object.keys(e).forEach((n) => {
            t[n] = We(e[n]);
          }),
          t
        );
      }
      function He(e, t, n = { clone: !0 }) {
        const r = n.clone ? f({}, e) : e;
        return (
          qe(e) &&
            qe(t) &&
            Object.keys(t).forEach((i) => {
              "__proto__" !== i &&
                (qe(t[i]) && i in e && qe(e[i])
                  ? (r[i] = He(e[i], t[i], n))
                  : n.clone
                  ? (r[i] = qe(t[i]) ? We(t[i]) : t[i])
                  : (r[i] = t[i]));
            }),
          r
        );
      }
      [
        "a",
        "abbr",
        "address",
        "area",
        "article",
        "aside",
        "audio",
        "b",
        "base",
        "bdi",
        "bdo",
        "big",
        "blockquote",
        "body",
        "br",
        "button",
        "canvas",
        "caption",
        "cite",
        "code",
        "col",
        "colgroup",
        "data",
        "datalist",
        "dd",
        "del",
        "details",
        "dfn",
        "dialog",
        "div",
        "dl",
        "dt",
        "em",
        "embed",
        "fieldset",
        "figcaption",
        "figure",
        "footer",
        "form",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "head",
        "header",
        "hgroup",
        "hr",
        "html",
        "i",
        "iframe",
        "img",
        "input",
        "ins",
        "kbd",
        "keygen",
        "label",
        "legend",
        "li",
        "link",
        "main",
        "map",
        "mark",
        "marquee",
        "menu",
        "menuitem",
        "meta",
        "meter",
        "nav",
        "noscript",
        "object",
        "ol",
        "optgroup",
        "option",
        "output",
        "p",
        "param",
        "picture",
        "pre",
        "progress",
        "q",
        "rp",
        "rt",
        "ruby",
        "s",
        "samp",
        "script",
        "section",
        "select",
        "small",
        "source",
        "span",
        "strong",
        "style",
        "sub",
        "summary",
        "sup",
        "table",
        "tbody",
        "td",
        "textarea",
        "tfoot",
        "th",
        "thead",
        "time",
        "title",
        "tr",
        "track",
        "u",
        "ul",
        "var",
        "video",
        "wbr",
        "circle",
        "clipPath",
        "defs",
        "ellipse",
        "foreignObject",
        "g",
        "image",
        "line",
        "linearGradient",
        "mask",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "radialGradient",
        "rect",
        "stop",
        "svg",
        "text",
        "tspan",
      ].forEach(function (e) {
        Ue[e] = Ue(e);
      });
      const Ke = function (e, t) {
          return t ? He(e, t, { clone: !1 }) : e;
        },
        Qe = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
        Ge = {
          keys: ["xs", "sm", "md", "lg", "xl"],
          up: (e) => `@media (min-width:${Qe[e]}px)`,
        };
      function Ye(e, t, n) {
        const r = e.theme || {};
        if (Array.isArray(t)) {
          const e = r.breakpoints || Ge;
          return t.reduce((r, i, o) => ((r[e.up(e.keys[o])] = n(t[o])), r), {});
        }
        if ("object" == typeof t) {
          const e = r.breakpoints || Ge;
          return Object.keys(t).reduce((r, i) => {
            if (-1 !== Object.keys(e.values || Qe).indexOf(i))
              r[e.up(i)] = n(t[i], i);
            else {
              const e = i;
              r[e] = t[e];
            }
            return r;
          }, {});
        }
        return n(t);
      }
      function Xe(e, t, n = !0) {
        if (!t || "string" != typeof t) return null;
        if (e && e.vars && n) {
          const n = `vars.${t}`
            .split(".")
            .reduce((e, t) => (e && e[t] ? e[t] : null), e);
          if (null != n) return n;
        }
        return t
          .split(".")
          .reduce((e, t) => (e && null != e[t] ? e[t] : null), e);
      }
      function Ze(e, t, n, r = n) {
        let i;
        return (
          (i =
            "function" == typeof e
              ? e(n)
              : Array.isArray(e)
              ? e[n] || r
              : Xe(e, n) || r),
          t && (i = t(i, r, e)),
          i
        );
      }
      const Je = function (e) {
          const {
              prop: t,
              cssProperty: n = e.prop,
              themeKey: r,
              transform: i,
            } = e,
            o = (e) => {
              if (null == e[t]) return null;
              const o = e[t],
                a = Xe(e.theme, r) || {};
              return Ye(e, o, (e) => {
                let r = Ze(a, i, e);
                return (
                  e === r &&
                    "string" == typeof e &&
                    (r = Ze(a, i, `${t}${"default" === e ? "" : Ve(e)}`, e)),
                  !1 === n ? r : { [n]: r }
                );
              });
            };
          return (o.propTypes = {}), (o.filterProps = [t]), o;
        },
        et = { m: "margin", p: "padding" },
        tt = {
          t: "Top",
          r: "Right",
          b: "Bottom",
          l: "Left",
          x: ["Left", "Right"],
          y: ["Top", "Bottom"],
        },
        nt = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" },
        rt = (function (e) {
          const t = {};
          return (e) => (
            void 0 === t[e] &&
              (t[e] = ((e) => {
                if (e.length > 2) {
                  if (!nt[e]) return [e];
                  e = nt[e];
                }
                const [t, n] = e.split(""),
                  r = et[t],
                  i = tt[n] || "";
                return Array.isArray(i) ? i.map((e) => r + e) : [r + i];
              })(e)),
            t[e]
          );
        })(),
        it = [
          "m",
          "mt",
          "mr",
          "mb",
          "ml",
          "mx",
          "my",
          "margin",
          "marginTop",
          "marginRight",
          "marginBottom",
          "marginLeft",
          "marginX",
          "marginY",
          "marginInline",
          "marginInlineStart",
          "marginInlineEnd",
          "marginBlock",
          "marginBlockStart",
          "marginBlockEnd",
        ],
        ot = [
          "p",
          "pt",
          "pr",
          "pb",
          "pl",
          "px",
          "py",
          "padding",
          "paddingTop",
          "paddingRight",
          "paddingBottom",
          "paddingLeft",
          "paddingX",
          "paddingY",
          "paddingInline",
          "paddingInlineStart",
          "paddingInlineEnd",
          "paddingBlock",
          "paddingBlockStart",
          "paddingBlockEnd",
        ],
        at = [...it, ...ot];
      function ut(e, t, n, r) {
        var i;
        const o = null != (i = Xe(e, t, !1)) ? i : n;
        return "number" == typeof o
          ? (e) => ("string" == typeof e ? e : o * e)
          : Array.isArray(o)
          ? (e) => ("string" == typeof e ? e : o[e])
          : "function" == typeof o
          ? o
          : () => {};
      }
      function lt(e) {
        return ut(e, "spacing", 8);
      }
      function st(e, t) {
        if ("string" == typeof t || null == t) return t;
        const n = e(Math.abs(t));
        return t >= 0 ? n : "number" == typeof n ? -n : `-${n}`;
      }
      function ct(e, t) {
        const n = lt(e.theme);
        return Object.keys(e)
          .map((r) =>
            (function (e, t, n, r) {
              if (-1 === t.indexOf(n)) return null;
              const i = (function (e, t) {
                return (n) => e.reduce((e, r) => ((e[r] = st(t, n)), e), {});
              })(rt(n), r);
              return Ye(e, e[n], i);
            })(e, t, r, n)
          )
          .reduce(Ke, {});
      }
      function ft(e) {
        return ct(e, it);
      }
      function dt(e) {
        return ct(e, ot);
      }
      function pt(e) {
        return ct(e, at);
      }
      (ft.propTypes = {}),
        (ft.filterProps = it),
        (dt.propTypes = {}),
        (dt.filterProps = ot),
        (pt.propTypes = {}),
        (pt.filterProps = at);
      const ht = function (...e) {
        const t = e.reduce(
            (e, t) => (
              t.filterProps.forEach((n) => {
                e[n] = t;
              }),
              e
            ),
            {}
          ),
          n = (e) =>
            Object.keys(e).reduce((n, r) => (t[r] ? Ke(n, t[r](e)) : n), {});
        return (
          (n.propTypes = {}),
          (n.filterProps = e.reduce((e, t) => e.concat(t.filterProps), [])),
          n
        );
      };
      function vt(e) {
        return "number" != typeof e ? e : `${e}px solid`;
      }
      const gt = Je({ prop: "border", themeKey: "borders", transform: vt }),
        mt = Je({ prop: "borderTop", themeKey: "borders", transform: vt }),
        yt = Je({ prop: "borderRight", themeKey: "borders", transform: vt }),
        bt = Je({ prop: "borderBottom", themeKey: "borders", transform: vt }),
        wt = Je({ prop: "borderLeft", themeKey: "borders", transform: vt }),
        _t = Je({ prop: "borderColor", themeKey: "palette" }),
        kt = Je({ prop: "borderTopColor", themeKey: "palette" }),
        xt = Je({ prop: "borderRightColor", themeKey: "palette" }),
        St = Je({ prop: "borderBottomColor", themeKey: "palette" }),
        Et = Je({ prop: "borderLeftColor", themeKey: "palette" }),
        Ot = (e) => {
          if (void 0 !== e.borderRadius && null !== e.borderRadius) {
            const t = ut(e.theme, "shape.borderRadius", 4),
              n = (e) => ({ borderRadius: st(t, e) });
            return Ye(e, e.borderRadius, n);
          }
          return null;
        };
      (Ot.propTypes = {}),
        (Ot.filterProps = ["borderRadius"]),
        ht(gt, mt, yt, bt, wt, _t, kt, xt, St, Et, Ot);
      const Ct = (e) => {
        if (void 0 !== e.gap && null !== e.gap) {
          const t = ut(e.theme, "spacing", 8),
            n = (e) => ({ gap: st(t, e) });
          return Ye(e, e.gap, n);
        }
        return null;
      };
      (Ct.propTypes = {}), (Ct.filterProps = ["gap"]);
      const Tt = (e) => {
        if (void 0 !== e.columnGap && null !== e.columnGap) {
          const t = ut(e.theme, "spacing", 8),
            n = (e) => ({ columnGap: st(t, e) });
          return Ye(e, e.columnGap, n);
        }
        return null;
      };
      (Tt.propTypes = {}), (Tt.filterProps = ["columnGap"]);
      const Pt = (e) => {
        if (void 0 !== e.rowGap && null !== e.rowGap) {
          const t = ut(e.theme, "spacing", 8),
            n = (e) => ({ rowGap: st(t, e) });
          return Ye(e, e.rowGap, n);
        }
        return null;
      };
      function It(e, t) {
        return "grey" === t ? t : e;
      }
      function Rt(e) {
        return e <= 1 && 0 !== e ? 100 * e + "%" : e;
      }
      (Pt.propTypes = {}),
        (Pt.filterProps = ["rowGap"]),
        ht(
          Ct,
          Tt,
          Pt,
          Je({ prop: "gridColumn" }),
          Je({ prop: "gridRow" }),
          Je({ prop: "gridAutoFlow" }),
          Je({ prop: "gridAutoColumns" }),
          Je({ prop: "gridAutoRows" }),
          Je({ prop: "gridTemplateColumns" }),
          Je({ prop: "gridTemplateRows" }),
          Je({ prop: "gridTemplateAreas" }),
          Je({ prop: "gridArea" })
        ),
        ht(
          Je({ prop: "color", themeKey: "palette", transform: It }),
          Je({
            prop: "bgcolor",
            cssProperty: "backgroundColor",
            themeKey: "palette",
            transform: It,
          }),
          Je({ prop: "backgroundColor", themeKey: "palette", transform: It })
        );
      const Nt = Je({ prop: "width", transform: Rt }),
        At = (e) => {
          if (void 0 !== e.maxWidth && null !== e.maxWidth) {
            const t = (t) => {
              var n, r;
              const i =
                (null == (n = e.theme) ||
                null == (n = n.breakpoints) ||
                null == (n = n.values)
                  ? void 0
                  : n[t]) || Qe[t];
              return i
                ? "px" !==
                  (null == (r = e.theme) || null == (r = r.breakpoints)
                    ? void 0
                    : r.unit)
                  ? { maxWidth: `${i}${e.theme.breakpoints.unit}` }
                  : { maxWidth: i }
                : { maxWidth: Rt(t) };
            };
            return Ye(e, e.maxWidth, t);
          }
          return null;
        };
      At.filterProps = ["maxWidth"];
      const Lt = Je({ prop: "minWidth", transform: Rt }),
        zt = Je({ prop: "height", transform: Rt }),
        jt = Je({ prop: "maxHeight", transform: Rt }),
        Mt = Je({ prop: "minHeight", transform: Rt }),
        $t =
          (Je({ prop: "size", cssProperty: "width", transform: Rt }),
          Je({ prop: "size", cssProperty: "height", transform: Rt }),
          ht(Nt, At, Lt, zt, jt, Mt, Je({ prop: "boxSizing" })),
          {
            border: { themeKey: "borders", transform: vt },
            borderTop: { themeKey: "borders", transform: vt },
            borderRight: { themeKey: "borders", transform: vt },
            borderBottom: { themeKey: "borders", transform: vt },
            borderLeft: { themeKey: "borders", transform: vt },
            borderColor: { themeKey: "palette" },
            borderTopColor: { themeKey: "palette" },
            borderRightColor: { themeKey: "palette" },
            borderBottomColor: { themeKey: "palette" },
            borderLeftColor: { themeKey: "palette" },
            borderRadius: { themeKey: "shape.borderRadius", style: Ot },
            color: { themeKey: "palette", transform: It },
            bgcolor: {
              themeKey: "palette",
              cssProperty: "backgroundColor",
              transform: It,
            },
            backgroundColor: { themeKey: "palette", transform: It },
            p: { style: dt },
            pt: { style: dt },
            pr: { style: dt },
            pb: { style: dt },
            pl: { style: dt },
            px: { style: dt },
            py: { style: dt },
            padding: { style: dt },
            paddingTop: { style: dt },
            paddingRight: { style: dt },
            paddingBottom: { style: dt },
            paddingLeft: { style: dt },
            paddingX: { style: dt },
            paddingY: { style: dt },
            paddingInline: { style: dt },
            paddingInlineStart: { style: dt },
            paddingInlineEnd: { style: dt },
            paddingBlock: { style: dt },
            paddingBlockStart: { style: dt },
            paddingBlockEnd: { style: dt },
            m: { style: ft },
            mt: { style: ft },
            mr: { style: ft },
            mb: { style: ft },
            ml: { style: ft },
            mx: { style: ft },
            my: { style: ft },
            margin: { style: ft },
            marginTop: { style: ft },
            marginRight: { style: ft },
            marginBottom: { style: ft },
            marginLeft: { style: ft },
            marginX: { style: ft },
            marginY: { style: ft },
            marginInline: { style: ft },
            marginInlineStart: { style: ft },
            marginInlineEnd: { style: ft },
            marginBlock: { style: ft },
            marginBlockStart: { style: ft },
            marginBlockEnd: { style: ft },
            displayPrint: {
              cssProperty: !1,
              transform: (e) => ({ "@media print": { display: e } }),
            },
            display: {},
            overflow: {},
            textOverflow: {},
            visibility: {},
            whiteSpace: {},
            flexBasis: {},
            flexDirection: {},
            flexWrap: {},
            justifyContent: {},
            alignItems: {},
            alignContent: {},
            order: {},
            flex: {},
            flexGrow: {},
            flexShrink: {},
            alignSelf: {},
            justifyItems: {},
            justifySelf: {},
            gap: { style: Ct },
            rowGap: { style: Pt },
            columnGap: { style: Tt },
            gridColumn: {},
            gridRow: {},
            gridAutoFlow: {},
            gridAutoColumns: {},
            gridAutoRows: {},
            gridTemplateColumns: {},
            gridTemplateRows: {},
            gridTemplateAreas: {},
            gridArea: {},
            position: {},
            zIndex: { themeKey: "zIndex" },
            top: {},
            right: {},
            bottom: {},
            left: {},
            boxShadow: { themeKey: "shadows" },
            width: { transform: Rt },
            maxWidth: { style: At },
            minWidth: { transform: Rt },
            height: { transform: Rt },
            maxHeight: { transform: Rt },
            minHeight: { transform: Rt },
            boxSizing: {},
            fontFamily: { themeKey: "typography" },
            fontSize: { themeKey: "typography" },
            fontStyle: { themeKey: "typography" },
            fontWeight: { themeKey: "typography" },
            letterSpacing: {},
            textTransform: {},
            lineHeight: {},
            textAlign: {},
            typography: { cssProperty: !1, themeKey: "typography" },
          }),
        Dt = (function () {
          function e(e, t, n, r) {
            const i = { [e]: t, theme: n },
              o = r[e];
            if (!o) return { [e]: t };
            const {
              cssProperty: a = e,
              themeKey: u,
              transform: l,
              style: s,
            } = o;
            if (null == t) return null;
            if ("typography" === u && "inherit" === t) return { [e]: t };
            const c = Xe(n, u) || {};
            return s
              ? s(i)
              : Ye(i, t, (t) => {
                  let n = Ze(c, l, t);
                  return (
                    t === n &&
                      "string" == typeof t &&
                      (n = Ze(c, l, `${e}${"default" === t ? "" : Ve(t)}`, t)),
                    !1 === a ? n : { [a]: n }
                  );
                });
          }
          return function t(n) {
            var r;
            const { sx: i, theme: o = {} } = n || {};
            if (!i) return null;
            const a = null != (r = o.unstable_sxConfig) ? r : $t;
            function u(n) {
              let r = n;
              if ("function" == typeof n) r = n(o);
              else if ("object" != typeof n) return n;
              if (!r) return null;
              const i = (function (e = {}) {
                  var t;
                  return (
                    (null == (t = e.keys)
                      ? void 0
                      : t.reduce((t, n) => ((t[e.up(n)] = {}), t), {})) || {}
                  );
                })(o.breakpoints),
                u = Object.keys(i);
              let l = i;
              return (
                Object.keys(r).forEach((n) => {
                  const i = "function" == typeof (u = r[n]) ? u(o) : u;
                  var u;
                  if (null != i)
                    if ("object" == typeof i)
                      if (a[n]) l = Ke(l, e(n, i, o, a));
                      else {
                        const e = Ye({ theme: o }, i, (e) => ({ [n]: e }));
                        !(function (...e) {
                          const t = e.reduce(
                              (e, t) => e.concat(Object.keys(t)),
                              []
                            ),
                            n = new Set(t);
                          return e.every(
                            (e) => n.size === Object.keys(e).length
                          );
                        })(e, i)
                          ? (l = Ke(l, e))
                          : (l[n] = t({ sx: i, theme: o }));
                      }
                    else l = Ke(l, e(n, i, o, a));
                }),
                (s = l),
                u.reduce((e, t) => {
                  const n = e[t];
                  return (!n || 0 === Object.keys(n).length) && delete e[t], e;
                }, s)
              );
              var s;
            }
            return Array.isArray(i) ? i.map(u) : u(i);
          };
        })();
      Dt.filterProps = ["sx"];
      const Ut = Dt,
        Ft = ["sx"],
        Bt = ["values", "unit", "step"],
        Vt = { borderRadius: 4 },
        qt = ["breakpoints", "palette", "spacing", "shape"],
        Wt = function (e = {}, ...t) {
          const {
              breakpoints: n = {},
              palette: r = {},
              spacing: i,
              shape: o = {},
            } = e,
            a = d(e, qt),
            u = (function (e) {
              const {
                  values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
                  unit: n = "px",
                  step: r = 5,
                } = e,
                i = d(e, Bt),
                o = ((e) => {
                  const t =
                    Object.keys(e).map((t) => ({ key: t, val: e[t] })) || [];
                  return (
                    t.sort((e, t) => e.val - t.val),
                    t.reduce((e, t) => f({}, e, { [t.key]: t.val }), {})
                  );
                })(t),
                a = Object.keys(o);
              function u(e) {
                return `@media (min-width:${
                  "number" == typeof t[e] ? t[e] : e
                }${n})`;
              }
              function l(e) {
                return `@media (max-width:${
                  ("number" == typeof t[e] ? t[e] : e) - r / 100
                }${n})`;
              }
              function s(e, i) {
                const o = a.indexOf(i);
                return `@media (min-width:${
                  "number" == typeof t[e] ? t[e] : e
                }${n}) and (max-width:${
                  (-1 !== o && "number" == typeof t[a[o]] ? t[a[o]] : i) -
                  r / 100
                }${n})`;
              }
              return f(
                {
                  keys: a,
                  values: o,
                  up: u,
                  down: l,
                  between: s,
                  only: function (e) {
                    return a.indexOf(e) + 1 < a.length
                      ? s(e, a[a.indexOf(e) + 1])
                      : u(e);
                  },
                  not: function (e) {
                    const t = a.indexOf(e);
                    return 0 === t
                      ? u(a[1])
                      : t === a.length - 1
                      ? l(a[t])
                      : s(e, a[a.indexOf(e) + 1]).replace(
                          "@media",
                          "@media not all and"
                        );
                  },
                  unit: n,
                },
                i
              );
            })(n),
            l = (function (e = 8) {
              if (e.mui) return e;
              const t = lt({ spacing: e }),
                n = (...e) =>
                  (0 === e.length ? [1] : e)
                    .map((e) => {
                      const n = t(e);
                      return "number" == typeof n ? `${n}px` : n;
                    })
                    .join(" ");
              return (n.mui = !0), n;
            })(i);
          let s = He(
            {
              breakpoints: u,
              direction: "ltr",
              components: {},
              palette: f({ mode: "light" }, r),
              spacing: l,
              shape: f({}, Vt, o),
            },
            a
          );
          return (
            (s = t.reduce((e, t) => He(e, t), s)),
            (s.unstable_sxConfig = f(
              {},
              $t,
              null == a ? void 0 : a.unstable_sxConfig
            )),
            (s.unstable_sx = function (e) {
              return Ut({ sx: e, theme: this });
            }),
            s
          );
        },
        Ht = Wt(),
        Kt = function (e = Ht) {
          return (function (e = null) {
            const t = l.useContext(Ae);
            return t && ((n = t), 0 !== Object.keys(n).length) ? t : e;
            var n;
          })(e);
        };
      var Qt = i(5893);
      const Gt = ["className", "component"],
        Yt = (e) => e,
        Xt = (() => {
          let e = Yt;
          return {
            configure(t) {
              e = t;
            },
            generate: (t) => e(t),
            reset() {
              e = Yt;
            },
          };
        })();
      function Zt(e, t = 0, n = 1) {
        return Math.min(Math.max(t, e), n);
      }
      function Jt(e) {
        if (e.type) return e;
        if ("#" === e.charAt(0))
          return Jt(
            (function (e) {
              e = e.slice(1);
              const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
              let n = e.match(t);
              return (
                n && 1 === n[0].length && (n = n.map((e) => e + e)),
                n
                  ? `rgb${4 === n.length ? "a" : ""}(${n
                      .map((e, t) =>
                        t < 3
                          ? parseInt(e, 16)
                          : Math.round((parseInt(e, 16) / 255) * 1e3) / 1e3
                      )
                      .join(", ")})`
                  : ""
              );
            })(e)
          );
        const t = e.indexOf("("),
          n = e.substring(0, t);
        if (-1 === ["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n))
          throw new Error(Be(9, e));
        let r,
          i = e.substring(t + 1, e.length - 1);
        if ("color" === n) {
          if (
            ((i = i.split(" ")),
            (r = i.shift()),
            4 === i.length && "/" === i[3].charAt(0) && (i[3] = i[3].slice(1)),
            -1 ===
              [
                "srgb",
                "display-p3",
                "a98-rgb",
                "prophoto-rgb",
                "rec-2020",
              ].indexOf(r))
          )
            throw new Error(Be(10, r));
        } else i = i.split(",");
        return (
          (i = i.map((e) => parseFloat(e))),
          { type: n, values: i, colorSpace: r }
        );
      }
      function en(e) {
        const { type: t, colorSpace: n } = e;
        let { values: r } = e;
        return (
          -1 !== t.indexOf("rgb")
            ? (r = r.map((e, t) => (t < 3 ? parseInt(e, 10) : e)))
            : -1 !== t.indexOf("hsl") &&
              ((r[1] = `${r[1]}%`), (r[2] = `${r[2]}%`)),
          (r =
            -1 !== t.indexOf("color")
              ? `${n} ${r.join(" ")}`
              : `${r.join(", ")}`),
          `${t}(${r})`
        );
      }
      function tn(e) {
        let t =
          "hsl" === (e = Jt(e)).type || "hsla" === e.type
            ? Jt(
                (function (e) {
                  e = Jt(e);
                  const { values: t } = e,
                    n = t[0],
                    r = t[1] / 100,
                    i = t[2] / 100,
                    o = r * Math.min(i, 1 - i),
                    a = (e, t = (e + n / 30) % 12) =>
                      i - o * Math.max(Math.min(t - 3, 9 - t, 1), -1);
                  let u = "rgb";
                  const l = [
                    Math.round(255 * a(0)),
                    Math.round(255 * a(8)),
                    Math.round(255 * a(4)),
                  ];
                  return (
                    "hsla" === e.type && ((u += "a"), l.push(t[3])),
                    en({ type: u, values: l })
                  );
                })(e)
              ).values
            : e.values;
        return (
          (t = t.map(
            (t) => (
              "color" !== e.type && (t /= 255),
              t <= 0.03928 ? t / 12.92 : ((t + 0.055) / 1.055) ** 2.4
            )
          )),
          Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3))
        );
      }
      function nn(e, t) {
        return (
          (e = Jt(e)),
          (t = Zt(t)),
          ("rgb" !== e.type && "hsl" !== e.type) || (e.type += "a"),
          "color" === e.type ? (e.values[3] = `/${t}`) : (e.values[3] = t),
          en(e)
        );
      }
      function rn(e, t) {
        if (((e = Jt(e)), (t = Zt(t)), -1 !== e.type.indexOf("hsl")))
          e.values[2] *= 1 - t;
        else if (-1 !== e.type.indexOf("rgb") || -1 !== e.type.indexOf("color"))
          for (let n = 0; n < 3; n += 1) e.values[n] *= 1 - t;
        return en(e);
      }
      function on(e, t) {
        if (((e = Jt(e)), (t = Zt(t)), -1 !== e.type.indexOf("hsl")))
          e.values[2] += (100 - e.values[2]) * t;
        else if (-1 !== e.type.indexOf("rgb"))
          for (let n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t;
        else if (-1 !== e.type.indexOf("color"))
          for (let n = 0; n < 3; n += 1) e.values[n] += (1 - e.values[n]) * t;
        return en(e);
      }
      const an = { black: "#000", white: "#fff" },
        un = {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#eeeeee",
          300: "#e0e0e0",
          400: "#bdbdbd",
          500: "#9e9e9e",
          600: "#757575",
          700: "#616161",
          800: "#424242",
          900: "#212121",
          A100: "#f5f5f5",
          A200: "#eeeeee",
          A400: "#bdbdbd",
          A700: "#616161",
        },
        ln = {
          50: "#f3e5f5",
          100: "#e1bee7",
          200: "#ce93d8",
          300: "#ba68c8",
          400: "#ab47bc",
          500: "#9c27b0",
          600: "#8e24aa",
          700: "#7b1fa2",
          800: "#6a1b9a",
          900: "#4a148c",
          A100: "#ea80fc",
          A200: "#e040fb",
          A400: "#d500f9",
          A700: "#aa00ff",
        },
        sn = {
          50: "#ffebee",
          100: "#ffcdd2",
          200: "#ef9a9a",
          300: "#e57373",
          400: "#ef5350",
          500: "#f44336",
          600: "#e53935",
          700: "#d32f2f",
          800: "#c62828",
          900: "#b71c1c",
          A100: "#ff8a80",
          A200: "#ff5252",
          A400: "#ff1744",
          A700: "#d50000",
        },
        cn = {
          50: "#fff3e0",
          100: "#ffe0b2",
          200: "#ffcc80",
          300: "#ffb74d",
          400: "#ffa726",
          500: "#ff9800",
          600: "#fb8c00",
          700: "#f57c00",
          800: "#ef6c00",
          900: "#e65100",
          A100: "#ffd180",
          A200: "#ffab40",
          A400: "#ff9100",
          A700: "#ff6d00",
        },
        fn = {
          50: "#e3f2fd",
          100: "#bbdefb",
          200: "#90caf9",
          300: "#64b5f6",
          400: "#42a5f5",
          500: "#2196f3",
          600: "#1e88e5",
          700: "#1976d2",
          800: "#1565c0",
          900: "#0d47a1",
          A100: "#82b1ff",
          A200: "#448aff",
          A400: "#2979ff",
          A700: "#2962ff",
        },
        dn = {
          50: "#e1f5fe",
          100: "#b3e5fc",
          200: "#81d4fa",
          300: "#4fc3f7",
          400: "#29b6f6",
          500: "#03a9f4",
          600: "#039be5",
          700: "#0288d1",
          800: "#0277bd",
          900: "#01579b",
          A100: "#80d8ff",
          A200: "#40c4ff",
          A400: "#00b0ff",
          A700: "#0091ea",
        },
        pn = {
          50: "#e8f5e9",
          100: "#c8e6c9",
          200: "#a5d6a7",
          300: "#81c784",
          400: "#66bb6a",
          500: "#4caf50",
          600: "#43a047",
          700: "#388e3c",
          800: "#2e7d32",
          900: "#1b5e20",
          A100: "#b9f6ca",
          A200: "#69f0ae",
          A400: "#00e676",
          A700: "#00c853",
        },
        hn = ["mode", "contrastThreshold", "tonalOffset"],
        vn = {
          text: {
            primary: "rgba(0, 0, 0, 0.87)",
            secondary: "rgba(0, 0, 0, 0.6)",
            disabled: "rgba(0, 0, 0, 0.38)",
          },
          divider: "rgba(0, 0, 0, 0.12)",
          background: { paper: an.white, default: an.white },
          action: {
            active: "rgba(0, 0, 0, 0.54)",
            hover: "rgba(0, 0, 0, 0.04)",
            hoverOpacity: 0.04,
            selected: "rgba(0, 0, 0, 0.08)",
            selectedOpacity: 0.08,
            disabled: "rgba(0, 0, 0, 0.26)",
            disabledBackground: "rgba(0, 0, 0, 0.12)",
            disabledOpacity: 0.38,
            focus: "rgba(0, 0, 0, 0.12)",
            focusOpacity: 0.12,
            activatedOpacity: 0.12,
          },
        },
        gn = {
          text: {
            primary: an.white,
            secondary: "rgba(255, 255, 255, 0.7)",
            disabled: "rgba(255, 255, 255, 0.5)",
            icon: "rgba(255, 255, 255, 0.5)",
          },
          divider: "rgba(255, 255, 255, 0.12)",
          background: { paper: "#121212", default: "#121212" },
          action: {
            active: an.white,
            hover: "rgba(255, 255, 255, 0.08)",
            hoverOpacity: 0.08,
            selected: "rgba(255, 255, 255, 0.16)",
            selectedOpacity: 0.16,
            disabled: "rgba(255, 255, 255, 0.3)",
            disabledBackground: "rgba(255, 255, 255, 0.12)",
            disabledOpacity: 0.38,
            focus: "rgba(255, 255, 255, 0.12)",
            focusOpacity: 0.12,
            activatedOpacity: 0.24,
          },
        };
      function mn(e, t, n, r) {
        const i = r.light || r,
          o = r.dark || 1.5 * r;
        e[t] ||
          (e.hasOwnProperty(n)
            ? (e[t] = e[n])
            : "light" === t
            ? (e.light = on(e.main, i))
            : "dark" === t && (e.dark = rn(e.main, o)));
      }
      const yn = [
          "fontFamily",
          "fontSize",
          "fontWeightLight",
          "fontWeightRegular",
          "fontWeightMedium",
          "fontWeightBold",
          "htmlFontSize",
          "allVariants",
          "pxToRem",
        ],
        bn = { textTransform: "uppercase" },
        wn = '"Roboto", "Helvetica", "Arial", sans-serif';
      function _n(e, t) {
        const n = "function" == typeof t ? t(e) : t,
          {
            fontFamily: r = wn,
            fontSize: i = 14,
            fontWeightLight: o = 300,
            fontWeightRegular: a = 400,
            fontWeightMedium: u = 500,
            fontWeightBold: l = 700,
            htmlFontSize: s = 16,
            allVariants: c,
            pxToRem: p,
          } = n,
          h = d(n, yn),
          v = i / 14,
          g = p || ((e) => (e / s) * v + "rem"),
          m = (e, t, n, i, o) => {
            return f(
              { fontFamily: r, fontWeight: e, fontSize: g(t), lineHeight: n },
              r === wn
                ? {
                    letterSpacing:
                      ((a = i / t), Math.round(1e5 * a) / 1e5 + "em"),
                  }
                : {},
              o,
              c
            );
            var a;
          },
          y = {
            h1: m(o, 96, 1.167, -1.5),
            h2: m(o, 60, 1.2, -0.5),
            h3: m(a, 48, 1.167, 0),
            h4: m(a, 34, 1.235, 0.25),
            h5: m(a, 24, 1.334, 0),
            h6: m(u, 20, 1.6, 0.15),
            subtitle1: m(a, 16, 1.75, 0.15),
            subtitle2: m(u, 14, 1.57, 0.1),
            body1: m(a, 16, 1.5, 0.15),
            body2: m(a, 14, 1.43, 0.15),
            button: m(u, 14, 1.75, 0.4, bn),
            caption: m(a, 12, 1.66, 0.4),
            overline: m(a, 12, 2.66, 1, bn),
            inherit: {
              fontFamily: "inherit",
              fontWeight: "inherit",
              fontSize: "inherit",
              lineHeight: "inherit",
              letterSpacing: "inherit",
            },
          };
        return He(
          f(
            {
              htmlFontSize: s,
              pxToRem: g,
              fontFamily: r,
              fontSize: i,
              fontWeightLight: o,
              fontWeightRegular: a,
              fontWeightMedium: u,
              fontWeightBold: l,
            },
            y
          ),
          h,
          { clone: !1 }
        );
      }
      function kn(...e) {
        return [
          `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,0.2)`,
          `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,0.14)`,
          `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,0.12)`,
        ].join(",");
      }
      const xn = [
          "none",
          kn(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
          kn(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
          kn(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
          kn(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
          kn(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
          kn(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
          kn(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
          kn(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
          kn(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
          kn(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
          kn(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
          kn(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
          kn(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
          kn(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
          kn(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
          kn(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
          kn(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
          kn(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
          kn(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
          kn(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
          kn(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
          kn(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
          kn(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
          kn(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
        ],
        Sn = ["duration", "easing", "delay"],
        En = {
          easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
          easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
          easeIn: "cubic-bezier(0.4, 0, 1, 1)",
          sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
        },
        On = {
          shortest: 150,
          shorter: 200,
          short: 250,
          standard: 300,
          complex: 375,
          enteringScreen: 225,
          leavingScreen: 195,
        };
      function Cn(e) {
        return `${Math.round(e)}ms`;
      }
      function Tn(e) {
        if (!e) return 0;
        const t = e / 36;
        return Math.round(10 * (4 + 15 * t ** 0.25 + t / 5));
      }
      function Pn(e) {
        const t = f({}, En, e.easing),
          n = f({}, On, e.duration);
        return f(
          {
            getAutoHeightDuration: Tn,
            create: (e = ["all"], r = {}) => {
              const {
                duration: i = n.standard,
                easing: o = t.easeInOut,
                delay: a = 0,
              } = r;
              return (
                d(r, Sn),
                (Array.isArray(e) ? e : [e])
                  .map(
                    (e) =>
                      `${e} ${"string" == typeof i ? i : Cn(i)} ${o} ${
                        "string" == typeof a ? a : Cn(a)
                      }`
                  )
                  .join(",")
              );
            },
          },
          e,
          { easing: t, duration: n }
        );
      }
      const In = {
          mobileStepper: 1e3,
          fab: 1050,
          speedDial: 1050,
          appBar: 1100,
          drawer: 1200,
          modal: 1300,
          snackbar: 1400,
          tooltip: 1500,
        },
        Rn = [
          "breakpoints",
          "mixins",
          "spacing",
          "palette",
          "transitions",
          "typography",
          "shape",
        ];
      const Nn = function (e = {}, ...t) {
          const {
              mixins: n = {},
              palette: r = {},
              transitions: i = {},
              typography: o = {},
            } = e,
            a = d(e, Rn);
          if (e.vars) throw new Error(Be(18));
          const u = (function (e) {
              const {
                  mode: t = "light",
                  contrastThreshold: n = 3,
                  tonalOffset: r = 0.2,
                } = e,
                i = d(e, hn),
                o =
                  e.primary ||
                  (function (e = "light") {
                    return "dark" === e
                      ? { main: fn[200], light: fn[50], dark: fn[400] }
                      : { main: fn[700], light: fn[400], dark: fn[800] };
                  })(t),
                a =
                  e.secondary ||
                  (function (e = "light") {
                    return "dark" === e
                      ? { main: ln[200], light: ln[50], dark: ln[400] }
                      : { main: ln[500], light: ln[300], dark: ln[700] };
                  })(t),
                u =
                  e.error ||
                  (function (e = "light") {
                    return "dark" === e
                      ? { main: sn[500], light: sn[300], dark: sn[700] }
                      : { main: sn[700], light: sn[400], dark: sn[800] };
                  })(t),
                l =
                  e.info ||
                  (function (e = "light") {
                    return "dark" === e
                      ? { main: dn[400], light: dn[300], dark: dn[700] }
                      : { main: dn[700], light: dn[500], dark: dn[900] };
                  })(t),
                s =
                  e.success ||
                  (function (e = "light") {
                    return "dark" === e
                      ? { main: pn[400], light: pn[300], dark: pn[700] }
                      : { main: pn[800], light: pn[500], dark: pn[900] };
                  })(t),
                c =
                  e.warning ||
                  (function (e = "light") {
                    return "dark" === e
                      ? { main: cn[400], light: cn[300], dark: cn[700] }
                      : { main: "#ed6c02", light: cn[500], dark: cn[900] };
                  })(t);
              function p(e) {
                const t =
                  (function (e, t) {
                    const n = tn(e),
                      r = tn(t);
                    return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
                  })(e, gn.text.primary) >= n
                    ? gn.text.primary
                    : vn.text.primary;
                return t;
              }
              const h = ({
                  color: e,
                  name: t,
                  mainShade: n = 500,
                  lightShade: i = 300,
                  darkShade: o = 700,
                }) => {
                  if (
                    (!(e = f({}, e)).main && e[n] && (e.main = e[n]),
                    !e.hasOwnProperty("main"))
                  )
                    throw new Error(Be(11, t ? ` (${t})` : "", n));
                  if ("string" != typeof e.main)
                    throw new Error(
                      Be(12, t ? ` (${t})` : "", JSON.stringify(e.main))
                    );
                  return (
                    mn(e, "light", i, r),
                    mn(e, "dark", o, r),
                    e.contrastText || (e.contrastText = p(e.main)),
                    e
                  );
                },
                v = { dark: gn, light: vn };
              return He(
                f(
                  {
                    common: f({}, an),
                    mode: t,
                    primary: h({ color: o, name: "primary" }),
                    secondary: h({
                      color: a,
                      name: "secondary",
                      mainShade: "A400",
                      lightShade: "A200",
                      darkShade: "A700",
                    }),
                    error: h({ color: u, name: "error" }),
                    warning: h({ color: c, name: "warning" }),
                    info: h({ color: l, name: "info" }),
                    success: h({ color: s, name: "success" }),
                    grey: un,
                    contrastThreshold: n,
                    getContrastText: p,
                    augmentColor: h,
                    tonalOffset: r,
                  },
                  v[t]
                ),
                i
              );
            })(r),
            l = Wt(e);
          let s = He(l, {
            mixins:
              ((c = l.breakpoints),
              (p = n),
              f(
                {
                  toolbar: {
                    minHeight: 56,
                    [c.up("xs")]: {
                      "@media (orientation: landscape)": { minHeight: 48 },
                    },
                    [c.up("sm")]: { minHeight: 64 },
                  },
                },
                p
              )),
            palette: u,
            shadows: xn.slice(),
            typography: _n(u, o),
            transitions: Pn(i),
            zIndex: f({}, In),
          });
          var c, p;
          return (
            (s = He(s, a)),
            (s = t.reduce((e, t) => He(e, t), s)),
            (s.unstable_sxConfig = f(
              {},
              $t,
              null == a ? void 0 : a.unstable_sxConfig
            )),
            (s.unstable_sx = function (e) {
              return Ut({ sx: e, theme: this });
            }),
            s
          );
        },
        An = "$$material",
        Ln = Nn(),
        zn = (function (e = {}) {
          const {
              themeId: t,
              defaultTheme: n,
              defaultClassName: r = "MuiBox-root",
              generateClassName: i,
            } = e,
            o = Fe("div", {
              shouldForwardProp: (e) =>
                "theme" !== e && "sx" !== e && "as" !== e,
            })(Ut);
          return l.forwardRef(function (e, a) {
            const u = Kt(n),
              l = (function (e) {
                const { sx: t } = e,
                  n = d(e, Ft),
                  { systemProps: r, otherProps: i } = ((e) => {
                    var t, n;
                    const r = { systemProps: {}, otherProps: {} },
                      i =
                        null !=
                        (t =
                          null == e || null == (n = e.theme)
                            ? void 0
                            : n.unstable_sxConfig)
                          ? t
                          : $t;
                    return (
                      Object.keys(e).forEach((t) => {
                        i[t]
                          ? (r.systemProps[t] = e[t])
                          : (r.otherProps[t] = e[t]);
                      }),
                      r
                    );
                  })(n);
                let o;
                return (
                  (o = Array.isArray(t)
                    ? [r, ...t]
                    : "function" == typeof t
                    ? (...e) => {
                        const n = t(...e);
                        return qe(n) ? f({}, r, n) : r;
                      }
                    : f({}, r, t)),
                  f({}, i, { sx: o })
                );
              })(e),
              { className: s, component: c = "div" } = l,
              p = d(l, Gt);
            return (0,
            Qt.jsx)(o, f({ as: c, ref: a, className: h(s, i ? i(r) : r), theme: (t && u[t]) || u }, p));
          });
        })({
          themeId: An,
          defaultTheme: Ln,
          defaultClassName: "MuiBox-root",
          generateClassName: Xt.generate,
        }),
        jn = zn;
      function Mn(e, t, n = void 0) {
        const r = {};
        return (
          Object.keys(e).forEach((i) => {
            r[i] = e[i]
              .reduce((e, r) => {
                if (r) {
                  const i = t(r);
                  "" !== i && e.push(i), n && n[r] && e.push(n[r]);
                }
                return e;
              }, [])
              .join(" ");
          }),
          r
        );
      }
      const $n = Ve,
        Dn = ["variant"];
      function Un(e) {
        return 0 === e.length;
      }
      function Fn(e) {
        const { variant: t } = e,
          n = d(e, Dn);
        let r = t || "";
        return (
          Object.keys(n)
            .sort()
            .forEach((t) => {
              r +=
                "color" === t
                  ? Un(r)
                    ? e[t]
                    : Ve(e[t])
                  : `${Un(r) ? t : Ve(t)}${Ve(e[t].toString())}`;
            }),
          r
        );
      }
      const Bn = [
        "name",
        "slot",
        "skipVariantsResolver",
        "skipSx",
        "overridesResolver",
      ];
      function Vn(e) {
        return "ownerState" !== e && "theme" !== e && "sx" !== e && "as" !== e;
      }
      const qn = Wt(),
        Wn = (e) => (e ? e.charAt(0).toLowerCase() + e.slice(1) : e);
      function Hn({ defaultTheme: e, theme: t, themeId: n }) {
        return (r = t), 0 === Object.keys(r).length ? e : t[n] || t;
        var r;
      }
      function Kn(e) {
        return e ? (t, n) => n[e] : null;
      }
      const Qn = Nn(),
        Gn = (function (e = {}) {
          const {
              themeId: t,
              defaultTheme: n = qn,
              rootShouldForwardProp: r = Vn,
              slotShouldForwardProp: i = Vn,
            } = e,
            o = (e) =>
              Ut(
                f({}, e, {
                  theme: Hn(f({}, e, { defaultTheme: n, themeId: t })),
                })
              );
          return (
            (o.__mui_systemSx = !0),
            (e, a = {}) => {
              ((e, t) => {
                Array.isArray(e.__emotion_styles) &&
                  (e.__emotion_styles = e.__emotion_styles.filter(
                    (e) => !(null != e && e.__mui_systemSx)
                  ));
              })(e);
              const {
                  name: u,
                  slot: l,
                  skipVariantsResolver: s,
                  skipSx: c,
                  overridesResolver: p = Kn(Wn(l)),
                } = a,
                h = d(a, Bn),
                v =
                  void 0 !== s ? s : (l && "Root" !== l && "root" !== l) || !1,
                g = c || !1;
              let m = Vn;
              "Root" === l || "root" === l
                ? (m = r)
                : l
                ? (m = i)
                : (function (e) {
                    return "string" == typeof e && e.charCodeAt(0) > 96;
                  })(e) && (m = void 0);
              const y = Fe(e, f({ shouldForwardProp: m, label: void 0 }, h)),
                b = (r, ...i) => {
                  const a = i
                    ? i.map((e) =>
                        "function" == typeof e && e.__emotion_real !== e
                          ? (r) =>
                              e(
                                f({}, r, {
                                  theme: Hn(
                                    f({}, r, { defaultTheme: n, themeId: t })
                                  ),
                                })
                              )
                          : e
                      )
                    : [];
                  let l = r;
                  u &&
                    p &&
                    a.push((e) => {
                      const r = Hn(f({}, e, { defaultTheme: n, themeId: t })),
                        i = ((e, t) =>
                          t.components &&
                          t.components[e] &&
                          t.components[e].styleOverrides
                            ? t.components[e].styleOverrides
                            : null)(u, r);
                      if (i) {
                        const t = {};
                        return (
                          Object.entries(i).forEach(([n, i]) => {
                            t[n] =
                              "function" == typeof i
                                ? i(f({}, e, { theme: r }))
                                : i;
                          }),
                          p(e, t)
                        );
                      }
                      return null;
                    }),
                    u &&
                      !v &&
                      a.push((e) => {
                        const r = Hn(f({}, e, { defaultTheme: n, themeId: t }));
                        return ((e, t, n, r) => {
                          var i;
                          const { ownerState: o = {} } = e,
                            a = [],
                            u =
                              null == n ||
                              null == (i = n.components) ||
                              null == (i = i[r])
                                ? void 0
                                : i.variants;
                          return (
                            u &&
                              u.forEach((n) => {
                                let r = !0;
                                Object.keys(n.props).forEach((t) => {
                                  o[t] !== n.props[t] &&
                                    e[t] !== n.props[t] &&
                                    (r = !1);
                                }),
                                  r && a.push(t[Fn(n.props)]);
                              }),
                            a
                          );
                        })(
                          e,
                          ((e, t) => {
                            let n = [];
                            t &&
                              t.components &&
                              t.components[e] &&
                              t.components[e].variants &&
                              (n = t.components[e].variants);
                            const r = {};
                            return (
                              n.forEach((e) => {
                                const t = Fn(e.props);
                                r[t] = e.style;
                              }),
                              r
                            );
                          })(u, r),
                          r,
                          u
                        );
                      }),
                    g || a.push(o);
                  const s = a.length - i.length;
                  if (Array.isArray(r) && s > 0) {
                    const e = new Array(s).fill("");
                    (l = [...r, ...e]), (l.raw = [...r.raw, ...e]);
                  } else
                    "function" == typeof r &&
                      r.__emotion_real !== r &&
                      (l = (e) =>
                        r(
                          f({}, e, {
                            theme: Hn(
                              f({}, e, { defaultTheme: n, themeId: t })
                            ),
                          })
                        ));
                  const c = y(l, ...a);
                  return e.muiName && (c.muiName = e.muiName), c;
                };
              return y.withConfig && (b.withConfig = y.withConfig), b;
            }
          );
        })({
          themeId: An,
          defaultTheme: Qn,
          rootShouldForwardProp: (e) => Vn(e) && "classes" !== e,
        }),
        Yn = Gn,
        Xn = l.createContext(void 0);
      function Zn(e, t) {
        const n = f({}, t);
        return (
          Object.keys(e).forEach((r) => {
            if (r.toString().match(/^(components|slots)$/))
              n[r] = f({}, e[r], n[r]);
            else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
              const i = e[r] || {},
                o = t[r];
              (n[r] = {}),
                o && Object.keys(o)
                  ? i && Object.keys(i)
                    ? ((n[r] = f({}, o)),
                      Object.keys(i).forEach((e) => {
                        n[r][e] = Zn(i[e], o[e]);
                      }))
                    : (n[r] = o)
                  : (n[r] = i);
            } else void 0 === n[r] && (n[r] = e[r]);
          }),
          n
        );
      }
      function Jn(e) {
        const { theme: t, name: n, props: r } = e;
        return t &&
          t.components &&
          t.components[n] &&
          t.components[n].defaultProps
          ? Zn(t.components[n].defaultProps, r)
          : r;
      }
      function er({ props: e, name: t }) {
        return (function ({ props: e, name: t, defaultTheme: n, themeId: r }) {
          let i = Kt(n);
          return r && (i = i[r] || i), Jn({ theme: i, name: t, props: e });
        })({ props: e, name: t, defaultTheme: Qn, themeId: An });
      }
      const tr = function (...e) {
          return l.useMemo(
            () =>
              e.every((e) => null == e)
                ? null
                : (t) => {
                    e.forEach((e) => {
                      !(function (e, t) {
                        "function" == typeof e ? e(t) : e && (e.current = t);
                      })(e, t);
                    });
                  },
            e
          );
        },
        nr = "undefined" != typeof window ? l.useLayoutEffect : l.useEffect,
        rr = function (e) {
          const t = l.useRef(e);
          return (
            nr(() => {
              t.current = e;
            }),
            l.useCallback((...e) => (0, t.current)(...e), [])
          );
        };
      let ir,
        or = !0,
        ar = !1;
      const ur = {
        text: !0,
        search: !0,
        url: !0,
        tel: !0,
        email: !0,
        password: !0,
        number: !0,
        date: !0,
        month: !0,
        week: !0,
        time: !0,
        datetime: !0,
        "datetime-local": !0,
      };
      function lr(e) {
        e.metaKey || e.altKey || e.ctrlKey || (or = !0);
      }
      function sr() {
        or = !1;
      }
      function cr() {
        "hidden" === this.visibilityState && ar && (or = !0);
      }
      const fr = function () {
        const e = l.useCallback((e) => {
            var t;
            null != e &&
              ((t = e.ownerDocument).addEventListener("keydown", lr, !0),
              t.addEventListener("mousedown", sr, !0),
              t.addEventListener("pointerdown", sr, !0),
              t.addEventListener("touchstart", sr, !0),
              t.addEventListener("visibilitychange", cr, !0));
          }, []),
          t = l.useRef(!1);
        return {
          isFocusVisibleRef: t,
          onFocus: function (e) {
            return (
              !!(function (e) {
                const { target: t } = e;
                try {
                  return t.matches(":focus-visible");
                } catch (e) {}
                return (
                  or ||
                  (function (e) {
                    const { type: t, tagName: n } = e;
                    return (
                      !("INPUT" !== n || !ur[t] || e.readOnly) ||
                      ("TEXTAREA" === n && !e.readOnly) ||
                      !!e.isContentEditable
                    );
                  })(t)
                );
              })(e) && ((t.current = !0), !0)
            );
          },
          onBlur: function () {
            return (
              !!t.current &&
              ((ar = !0),
              window.clearTimeout(ir),
              (ir = window.setTimeout(() => {
                ar = !1;
              }, 100)),
              (t.current = !1),
              !0)
            );
          },
          ref: e,
        };
      };
      function dr(e, t) {
        return (
          (dr = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          dr(e, t)
        );
      }
      const pr = l.createContext(null);
      function hr(e, t) {
        var n = Object.create(null);
        return (
          e &&
            l.Children.map(e, function (e) {
              return e;
            }).forEach(function (e) {
              n[e.key] = (function (e) {
                return t && (0, l.isValidElement)(e) ? t(e) : e;
              })(e);
            }),
          n
        );
      }
      function vr(e, t, n) {
        return null != n[t] ? n[t] : e.props[t];
      }
      function gr(e, t, n) {
        var r = hr(e.children),
          i = (function (e, t) {
            function n(n) {
              return n in t ? t[n] : e[n];
            }
            (e = e || {}), (t = t || {});
            var r,
              i = Object.create(null),
              o = [];
            for (var a in e)
              a in t ? o.length && ((i[a] = o), (o = [])) : o.push(a);
            var u = {};
            for (var l in t) {
              if (i[l])
                for (r = 0; r < i[l].length; r++) {
                  var s = i[l][r];
                  u[i[l][r]] = n(s);
                }
              u[l] = n(l);
            }
            for (r = 0; r < o.length; r++) u[o[r]] = n(o[r]);
            return u;
          })(t, r);
        return (
          Object.keys(i).forEach(function (o) {
            var a = i[o];
            if ((0, l.isValidElement)(a)) {
              var u = o in t,
                s = o in r,
                c = t[o],
                f = (0, l.isValidElement)(c) && !c.props.in;
              !s || (u && !f)
                ? s || !u || f
                  ? s &&
                    u &&
                    (0, l.isValidElement)(c) &&
                    (i[o] = (0, l.cloneElement)(a, {
                      onExited: n.bind(null, a),
                      in: c.props.in,
                      exit: vr(a, "exit", e),
                      enter: vr(a, "enter", e),
                    }))
                  : (i[o] = (0, l.cloneElement)(a, { in: !1 }))
                : (i[o] = (0, l.cloneElement)(a, {
                    onExited: n.bind(null, a),
                    in: !0,
                    exit: vr(a, "exit", e),
                    enter: vr(a, "enter", e),
                  }));
            }
          }),
          i
        );
      }
      var mr =
          Object.values ||
          function (e) {
            return Object.keys(e).map(function (t) {
              return e[t];
            });
          },
        yr = (function (e) {
          var t, n;
          function r(t, n) {
            var r,
              i = (r = e.call(this, t, n) || this).handleExited.bind(
                (function (e) {
                  if (void 0 === e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return e;
                })(r)
              );
            return (
              (r.state = {
                contextValue: { isMounting: !0 },
                handleExited: i,
                firstRender: !0,
              }),
              r
            );
          }
          (n = e),
            ((t = r).prototype = Object.create(n.prototype)),
            (t.prototype.constructor = t),
            dr(t, n);
          var i = r.prototype;
          return (
            (i.componentDidMount = function () {
              (this.mounted = !0),
                this.setState({ contextValue: { isMounting: !1 } });
            }),
            (i.componentWillUnmount = function () {
              this.mounted = !1;
            }),
            (r.getDerivedStateFromProps = function (e, t) {
              var n,
                r,
                i = t.children,
                o = t.handleExited;
              return {
                children: t.firstRender
                  ? ((n = e),
                    (r = o),
                    hr(n.children, function (e) {
                      return (0,
                      l.cloneElement)(e, { onExited: r.bind(null, e), in: !0, appear: vr(e, "appear", n), enter: vr(e, "enter", n), exit: vr(e, "exit", n) });
                    }))
                  : gr(e, i, o),
                firstRender: !1,
              };
            }),
            (i.handleExited = function (e, t) {
              var n = hr(this.props.children);
              e.key in n ||
                (e.props.onExited && e.props.onExited(t),
                this.mounted &&
                  this.setState(function (t) {
                    var n = f({}, t.children);
                    return delete n[e.key], { children: n };
                  }));
            }),
            (i.render = function () {
              var e = this.props,
                t = e.component,
                n = e.childFactory,
                r = d(e, ["component", "childFactory"]),
                i = this.state.contextValue,
                o = mr(this.state.children).map(n);
              return (
                delete r.appear,
                delete r.enter,
                delete r.exit,
                null === t
                  ? l.createElement(pr.Provider, { value: i }, o)
                  : l.createElement(
                      pr.Provider,
                      { value: i },
                      l.createElement(t, r, o)
                    )
              );
            }),
            r
          );
        })(l.Component);
      (yr.propTypes = {}),
        (yr.defaultProps = {
          component: "div",
          childFactory: function (e) {
            return e;
          },
        });
      const br = yr;
      function wr() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return Pe(t);
      }
      i(8679);
      var _r = function () {
        var e = wr.apply(void 0, arguments),
          t = "animation-" + e.name;
        return {
          name: t,
          styles: "@keyframes " + t + "{" + e.styles + "}",
          anim: 1,
          toString: function () {
            return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
          },
        };
      };
      const kr = {
        active: "active",
        checked: "checked",
        completed: "completed",
        disabled: "disabled",
        error: "error",
        expanded: "expanded",
        focused: "focused",
        focusVisible: "focusVisible",
        open: "open",
        readOnly: "readOnly",
        required: "required",
        selected: "selected",
      };
      function xr(e, t, n = "Mui") {
        const r = kr[t];
        return r ? `${n}-${r}` : `${Xt.generate(e)}-${t}`;
      }
      function Sr(e, t, n = "Mui") {
        const r = {};
        return (
          t.forEach((t) => {
            r[t] = xr(e, t, n);
          }),
          r
        );
      }
      const Er = Sr("MuiTouchRipple", [
          "root",
          "ripple",
          "rippleVisible",
          "ripplePulsate",
          "child",
          "childLeaving",
          "childPulsate",
        ]),
        Or = ["center", "classes", "className"];
      let Cr,
        Tr,
        Pr,
        Ir,
        Rr = (e) => e;
      const Nr = _r(
          Cr ||
            (Cr = Rr`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)
        ),
        Ar = _r(
          Tr ||
            (Tr = Rr`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)
        ),
        Lr = _r(
          Pr ||
            (Pr = Rr`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)
        ),
        zr = Yn("span", { name: "MuiTouchRipple", slot: "Root" })({
          overflow: "hidden",
          pointerEvents: "none",
          position: "absolute",
          zIndex: 0,
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          borderRadius: "inherit",
        }),
        jr = Yn(
          function (e) {
            const {
                className: t,
                classes: n,
                pulsate: r = !1,
                rippleX: i,
                rippleY: o,
                rippleSize: a,
                in: u,
                onExited: s,
                timeout: c,
              } = e,
              [f, d] = l.useState(!1),
              p = h(t, n.ripple, n.rippleVisible, r && n.ripplePulsate),
              v = { width: a, height: a, top: -a / 2 + o, left: -a / 2 + i },
              g = h(n.child, f && n.childLeaving, r && n.childPulsate);
            return (
              u || f || d(!0),
              l.useEffect(() => {
                if (!u && null != s) {
                  const e = setTimeout(s, c);
                  return () => {
                    clearTimeout(e);
                  };
                }
              }, [s, u, c]),
              (0, Qt.jsx)("span", {
                className: p,
                style: v,
                children: (0, Qt.jsx)("span", { className: g }),
              })
            );
          },
          { name: "MuiTouchRipple", slot: "Ripple" }
        )(
          Ir ||
            (Ir = Rr`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),
          Er.rippleVisible,
          Nr,
          550,
          ({ theme: e }) => e.transitions.easing.easeInOut,
          Er.ripplePulsate,
          ({ theme: e }) => e.transitions.duration.shorter,
          Er.child,
          Er.childLeaving,
          Ar,
          550,
          ({ theme: e }) => e.transitions.easing.easeInOut,
          Er.childPulsate,
          Lr,
          ({ theme: e }) => e.transitions.easing.easeInOut
        ),
        Mr = l.forwardRef(function (e, t) {
          const n = er({ props: e, name: "MuiTouchRipple" }),
            { center: r = !1, classes: i = {}, className: o } = n,
            a = d(n, Or),
            [u, s] = l.useState([]),
            c = l.useRef(0),
            p = l.useRef(null);
          l.useEffect(() => {
            p.current && (p.current(), (p.current = null));
          }, [u]);
          const v = l.useRef(!1),
            g = l.useRef(0),
            m = l.useRef(null),
            y = l.useRef(null);
          l.useEffect(
            () => () => {
              g.current && clearTimeout(g.current);
            },
            []
          );
          const b = l.useCallback(
              (e) => {
                const {
                  pulsate: t,
                  rippleX: n,
                  rippleY: r,
                  rippleSize: o,
                  cb: a,
                } = e;
                s((e) => [
                  ...e,
                  (0, Qt.jsx)(
                    jr,
                    {
                      classes: {
                        ripple: h(i.ripple, Er.ripple),
                        rippleVisible: h(i.rippleVisible, Er.rippleVisible),
                        ripplePulsate: h(i.ripplePulsate, Er.ripplePulsate),
                        child: h(i.child, Er.child),
                        childLeaving: h(i.childLeaving, Er.childLeaving),
                        childPulsate: h(i.childPulsate, Er.childPulsate),
                      },
                      timeout: 550,
                      pulsate: t,
                      rippleX: n,
                      rippleY: r,
                      rippleSize: o,
                    },
                    c.current
                  ),
                ]),
                  (c.current += 1),
                  (p.current = a);
              },
              [i]
            ),
            w = l.useCallback(
              (e = {}, t = {}, n = () => {}) => {
                const {
                  pulsate: i = !1,
                  center: o = r || t.pulsate,
                  fakeElement: a = !1,
                } = t;
                if ("mousedown" === (null == e ? void 0 : e.type) && v.current)
                  return void (v.current = !1);
                "touchstart" === (null == e ? void 0 : e.type) &&
                  (v.current = !0);
                const u = a ? null : y.current,
                  l = u
                    ? u.getBoundingClientRect()
                    : { width: 0, height: 0, left: 0, top: 0 };
                let s, c, f;
                if (
                  o ||
                  void 0 === e ||
                  (0 === e.clientX && 0 === e.clientY) ||
                  (!e.clientX && !e.touches)
                )
                  (s = Math.round(l.width / 2)), (c = Math.round(l.height / 2));
                else {
                  const { clientX: t, clientY: n } =
                    e.touches && e.touches.length > 0 ? e.touches[0] : e;
                  (s = Math.round(t - l.left)), (c = Math.round(n - l.top));
                }
                if (o)
                  (f = Math.sqrt((2 * l.width ** 2 + l.height ** 2) / 3)),
                    f % 2 == 0 && (f += 1);
                else {
                  const e =
                      2 * Math.max(Math.abs((u ? u.clientWidth : 0) - s), s) +
                      2,
                    t =
                      2 * Math.max(Math.abs((u ? u.clientHeight : 0) - c), c) +
                      2;
                  f = Math.sqrt(e ** 2 + t ** 2);
                }
                null != e && e.touches
                  ? null === m.current &&
                    ((m.current = () => {
                      b({
                        pulsate: i,
                        rippleX: s,
                        rippleY: c,
                        rippleSize: f,
                        cb: n,
                      });
                    }),
                    (g.current = setTimeout(() => {
                      m.current && (m.current(), (m.current = null));
                    }, 80)))
                  : b({
                      pulsate: i,
                      rippleX: s,
                      rippleY: c,
                      rippleSize: f,
                      cb: n,
                    });
              },
              [r, b]
            ),
            _ = l.useCallback(() => {
              w({}, { pulsate: !0 });
            }, [w]),
            k = l.useCallback((e, t) => {
              if (
                (clearTimeout(g.current),
                "touchend" === (null == e ? void 0 : e.type) && m.current)
              )
                return (
                  m.current(),
                  (m.current = null),
                  void (g.current = setTimeout(() => {
                    k(e, t);
                  }))
                );
              (m.current = null),
                s((e) => (e.length > 0 ? e.slice(1) : e)),
                (p.current = t);
            }, []);
          return (
            l.useImperativeHandle(
              t,
              () => ({ pulsate: _, start: w, stop: k }),
              [_, w, k]
            ),
            (0, Qt.jsx)(
              zr,
              f({ className: h(Er.root, i.root, o), ref: y }, a, {
                children: (0, Qt.jsx)(br, {
                  component: null,
                  exit: !0,
                  children: u,
                }),
              })
            )
          );
        });
      function $r(e) {
        return xr("MuiButtonBase", e);
      }
      const Dr = Sr("MuiButtonBase", ["root", "disabled", "focusVisible"]),
        Ur = [
          "action",
          "centerRipple",
          "children",
          "className",
          "component",
          "disabled",
          "disableRipple",
          "disableTouchRipple",
          "focusRipple",
          "focusVisibleClassName",
          "LinkComponent",
          "onBlur",
          "onClick",
          "onContextMenu",
          "onDragLeave",
          "onFocus",
          "onFocusVisible",
          "onKeyDown",
          "onKeyUp",
          "onMouseDown",
          "onMouseLeave",
          "onMouseUp",
          "onTouchEnd",
          "onTouchMove",
          "onTouchStart",
          "tabIndex",
          "TouchRippleProps",
          "touchRippleRef",
          "type",
        ],
        Fr = Yn("button", {
          name: "MuiButtonBase",
          slot: "Root",
          overridesResolver: (e, t) => t.root,
        })({
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          boxSizing: "border-box",
          WebkitTapHighlightColor: "transparent",
          backgroundColor: "transparent",
          outline: 0,
          border: 0,
          margin: 0,
          borderRadius: 0,
          padding: 0,
          cursor: "pointer",
          userSelect: "none",
          verticalAlign: "middle",
          MozAppearance: "none",
          WebkitAppearance: "none",
          textDecoration: "none",
          color: "inherit",
          "&::-moz-focus-inner": { borderStyle: "none" },
          [`&.${Dr.disabled}`]: { pointerEvents: "none", cursor: "default" },
          "@media print": { colorAdjust: "exact" },
        }),
        Br = l.forwardRef(function (e, t) {
          const n = er({ props: e, name: "MuiButtonBase" }),
            {
              action: r,
              centerRipple: i = !1,
              children: o,
              className: a,
              component: u = "button",
              disabled: s = !1,
              disableRipple: c = !1,
              disableTouchRipple: p = !1,
              focusRipple: v = !1,
              LinkComponent: g = "a",
              onBlur: m,
              onClick: y,
              onContextMenu: b,
              onDragLeave: w,
              onFocus: _,
              onFocusVisible: k,
              onKeyDown: x,
              onKeyUp: S,
              onMouseDown: E,
              onMouseLeave: O,
              onMouseUp: C,
              onTouchEnd: T,
              onTouchMove: P,
              onTouchStart: I,
              tabIndex: R = 0,
              TouchRippleProps: N,
              touchRippleRef: A,
              type: L,
            } = n,
            z = d(n, Ur),
            j = l.useRef(null),
            M = l.useRef(null),
            $ = tr(M, A),
            { isFocusVisibleRef: D, onFocus: U, onBlur: F, ref: B } = fr(),
            [V, q] = l.useState(!1);
          s && V && q(!1),
            l.useImperativeHandle(
              r,
              () => ({
                focusVisible: () => {
                  q(!0), j.current.focus();
                },
              }),
              []
            );
          const [W, H] = l.useState(!1);
          l.useEffect(() => {
            H(!0);
          }, []);
          const K = W && !c && !s;
          function Q(e, t, n = p) {
            return rr(
              (r) => (t && t(r), !n && M.current && M.current[e](r), !0)
            );
          }
          l.useEffect(() => {
            V && v && !c && W && M.current.pulsate();
          }, [c, v, V, W]);
          const G = Q("start", E),
            Y = Q("stop", b),
            X = Q("stop", w),
            Z = Q("stop", C),
            J = Q("stop", (e) => {
              V && e.preventDefault(), O && O(e);
            }),
            ee = Q("start", I),
            te = Q("stop", T),
            ne = Q("stop", P),
            re = Q(
              "stop",
              (e) => {
                F(e), !1 === D.current && q(!1), m && m(e);
              },
              !1
            ),
            ie = rr((e) => {
              j.current || (j.current = e.currentTarget),
                U(e),
                !0 === D.current && (q(!0), k && k(e)),
                _ && _(e);
            }),
            oe = () => {
              const e = j.current;
              return u && "button" !== u && !("A" === e.tagName && e.href);
            },
            ae = l.useRef(!1),
            ue = rr((e) => {
              v &&
                !ae.current &&
                V &&
                M.current &&
                " " === e.key &&
                ((ae.current = !0),
                M.current.stop(e, () => {
                  M.current.start(e);
                })),
                e.target === e.currentTarget &&
                  oe() &&
                  " " === e.key &&
                  e.preventDefault(),
                x && x(e),
                e.target === e.currentTarget &&
                  oe() &&
                  "Enter" === e.key &&
                  !s &&
                  (e.preventDefault(), y && y(e));
            }),
            le = rr((e) => {
              v &&
                " " === e.key &&
                M.current &&
                V &&
                !e.defaultPrevented &&
                ((ae.current = !1),
                M.current.stop(e, () => {
                  M.current.pulsate(e);
                })),
                S && S(e),
                y &&
                  e.target === e.currentTarget &&
                  oe() &&
                  " " === e.key &&
                  !e.defaultPrevented &&
                  y(e);
            });
          let se = u;
          "button" === se && (z.href || z.to) && (se = g);
          const ce = {};
          "button" === se
            ? ((ce.type = void 0 === L ? "button" : L), (ce.disabled = s))
            : (z.href || z.to || (ce.role = "button"),
              s && (ce["aria-disabled"] = s));
          const fe = tr(t, B, j),
            de = f({}, n, {
              centerRipple: i,
              component: u,
              disabled: s,
              disableRipple: c,
              disableTouchRipple: p,
              focusRipple: v,
              tabIndex: R,
              focusVisible: V,
            }),
            pe = ((e) => {
              const {
                  disabled: t,
                  focusVisible: n,
                  focusVisibleClassName: r,
                  classes: i,
                } = e,
                o = Mn(
                  { root: ["root", t && "disabled", n && "focusVisible"] },
                  $r,
                  i
                );
              return n && r && (o.root += ` ${r}`), o;
            })(de);
          return (0,
          Qt.jsxs)(Fr, f({ as: se, className: h(pe.root, a), ownerState: de, onBlur: re, onClick: y, onContextMenu: Y, onFocus: ie, onKeyDown: ue, onKeyUp: le, onMouseDown: G, onMouseLeave: J, onMouseUp: Z, onDragLeave: X, onTouchEnd: te, onTouchMove: ne, onTouchStart: ee, ref: fe, tabIndex: s ? -1 : R, type: L }, ce, z, { children: [o, K ? (0, Qt.jsx)(Mr, f({ ref: $, center: i }, N)) : null] }));
        }),
        Vr = Br;
      function qr(e) {
        return xr("PrivateSwitchBase", e);
      }
      Sr("PrivateSwitchBase", [
        "root",
        "checked",
        "disabled",
        "input",
        "edgeStart",
        "edgeEnd",
      ]);
      const Wr = [
          "autoFocus",
          "checked",
          "checkedIcon",
          "className",
          "defaultChecked",
          "disabled",
          "disableFocusRipple",
          "edge",
          "icon",
          "id",
          "inputProps",
          "inputRef",
          "name",
          "onBlur",
          "onChange",
          "onFocus",
          "readOnly",
          "required",
          "tabIndex",
          "type",
          "value",
        ],
        Hr = Yn(Vr)(({ ownerState: e }) =>
          f(
            { padding: 9, borderRadius: "50%" },
            "start" === e.edge && { marginLeft: "small" === e.size ? -3 : -12 },
            "end" === e.edge && { marginRight: "small" === e.size ? -3 : -12 }
          )
        ),
        Kr = Yn("input")({
          cursor: "inherit",
          position: "absolute",
          opacity: 0,
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          margin: 0,
          padding: 0,
          zIndex: 1,
        }),
        Qr = l.forwardRef(function (e, t) {
          const {
              autoFocus: n,
              checked: r,
              checkedIcon: i,
              className: o,
              defaultChecked: a,
              disabled: u,
              disableFocusRipple: s = !1,
              edge: c = !1,
              icon: p,
              id: v,
              inputProps: g,
              inputRef: m,
              name: y,
              onBlur: b,
              onChange: w,
              onFocus: _,
              readOnly: k,
              required: x = !1,
              tabIndex: S,
              type: E,
              value: O,
            } = e,
            C = d(e, Wr),
            [T, P] = (function ({
              controlled: e,
              default: t,
              name: n,
              state: r = "value",
            }) {
              const { current: i } = l.useRef(void 0 !== e),
                [o, a] = l.useState(t);
              return [
                i ? e : o,
                l.useCallback((e) => {
                  i || a(e);
                }, []),
              ];
            })({
              controlled: r,
              default: Boolean(a),
              name: "SwitchBase",
              state: "checked",
            }),
            I = l.useContext(Xn);
          let R = u;
          I && void 0 === R && (R = I.disabled);
          const N = "checkbox" === E || "radio" === E,
            A = f({}, e, {
              checked: T,
              disabled: R,
              disableFocusRipple: s,
              edge: c,
            }),
            L = ((e) => {
              const { classes: t, checked: n, disabled: r, edge: i } = e;
              return Mn(
                {
                  root: [
                    "root",
                    n && "checked",
                    r && "disabled",
                    i && `edge${$n(i)}`,
                  ],
                  input: ["input"],
                },
                qr,
                t
              );
            })(A);
          return (0, Qt.jsxs)(
            Hr,
            f(
              {
                component: "span",
                className: h(L.root, o),
                centerRipple: !0,
                focusRipple: !s,
                disabled: R,
                tabIndex: null,
                role: void 0,
                onFocus: (e) => {
                  _ && _(e), I && I.onFocus && I.onFocus(e);
                },
                onBlur: (e) => {
                  b && b(e), I && I.onBlur && I.onBlur(e);
                },
                ownerState: A,
                ref: t,
              },
              C,
              {
                children: [
                  (0, Qt.jsx)(
                    Kr,
                    f(
                      {
                        autoFocus: n,
                        checked: r,
                        defaultChecked: a,
                        className: L.input,
                        disabled: R,
                        id: N ? v : void 0,
                        name: y,
                        onChange: (e) => {
                          if (e.nativeEvent.defaultPrevented) return;
                          const t = e.target.checked;
                          P(t), w && w(e, t);
                        },
                        readOnly: k,
                        ref: m,
                        required: x,
                        ownerState: A,
                        tabIndex: S,
                        type: E,
                      },
                      "checkbox" === E && void 0 === O ? {} : { value: O },
                      g
                    )
                  ),
                  T ? i : p,
                ],
              }
            )
          );
        });
      function Gr(e) {
        return xr("MuiSwitch", e);
      }
      const Yr = Sr("MuiSwitch", [
          "root",
          "edgeStart",
          "edgeEnd",
          "switchBase",
          "colorPrimary",
          "colorSecondary",
          "sizeSmall",
          "sizeMedium",
          "checked",
          "disabled",
          "input",
          "thumb",
          "track",
        ]),
        Xr = ["className", "color", "edge", "size", "sx"],
        Zr = Yn("span", {
          name: "MuiSwitch",
          slot: "Root",
          overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [
              t.root,
              n.edge && t[`edge${$n(n.edge)}`],
              t[`size${$n(n.size)}`],
            ];
          },
        })(({ ownerState: e }) =>
          f(
            {
              display: "inline-flex",
              width: 58,
              height: 38,
              overflow: "hidden",
              padding: 12,
              boxSizing: "border-box",
              position: "relative",
              flexShrink: 0,
              zIndex: 0,
              verticalAlign: "middle",
              "@media print": { colorAdjust: "exact" },
            },
            "start" === e.edge && { marginLeft: -8 },
            "end" === e.edge && { marginRight: -8 },
            "small" === e.size && {
              width: 40,
              height: 24,
              padding: 7,
              [`& .${Yr.thumb}`]: { width: 16, height: 16 },
              [`& .${Yr.switchBase}`]: {
                padding: 4,
                [`&.${Yr.checked}`]: { transform: "translateX(16px)" },
              },
            }
          )
        ),
        Jr = Yn(Qr, {
          name: "MuiSwitch",
          slot: "SwitchBase",
          overridesResolver: (e, t) => {
            const { ownerState: n } = e;
            return [
              t.switchBase,
              { [`& .${Yr.input}`]: t.input },
              "default" !== n.color && t[`color${$n(n.color)}`],
            ];
          },
        })(
          ({ theme: e }) => ({
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
            color: e.vars
              ? e.vars.palette.Switch.defaultColor
              : `${
                  "light" === e.palette.mode
                    ? e.palette.common.white
                    : e.palette.grey[300]
                }`,
            transition: e.transitions.create(["left", "transform"], {
              duration: e.transitions.duration.shortest,
            }),
            [`&.${Yr.checked}`]: { transform: "translateX(20px)" },
            [`&.${Yr.disabled}`]: {
              color: e.vars
                ? e.vars.palette.Switch.defaultDisabledColor
                : `${
                    "light" === e.palette.mode
                      ? e.palette.grey[100]
                      : e.palette.grey[600]
                  }`,
            },
            [`&.${Yr.checked} + .${Yr.track}`]: { opacity: 0.5 },
            [`&.${Yr.disabled} + .${Yr.track}`]: {
              opacity: e.vars
                ? e.vars.opacity.switchTrackDisabled
                : "" + ("light" === e.palette.mode ? 0.12 : 0.2),
            },
            [`& .${Yr.input}`]: { left: "-100%", width: "300%" },
          }),
          ({ theme: e, ownerState: t }) =>
            f(
              {
                "&:hover": {
                  backgroundColor: e.vars
                    ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`
                    : nn(
                        e.palette.action.active,
                        e.palette.action.hoverOpacity
                      ),
                  "@media (hover: none)": { backgroundColor: "transparent" },
                },
              },
              "default" !== t.color && {
                [`&.${Yr.checked}`]: {
                  color: (e.vars || e).palette[t.color].main,
                  "&:hover": {
                    backgroundColor: e.vars
                      ? `rgba(${e.vars.palette[t.color].mainChannel} / ${
                          e.vars.palette.action.hoverOpacity
                        })`
                      : nn(
                          e.palette[t.color].main,
                          e.palette.action.hoverOpacity
                        ),
                    "@media (hover: none)": { backgroundColor: "transparent" },
                  },
                  [`&.${Yr.disabled}`]: {
                    color: e.vars
                      ? e.vars.palette.Switch[`${t.color}DisabledColor`]
                      : `${
                          "light" === e.palette.mode
                            ? on(e.palette[t.color].main, 0.62)
                            : rn(e.palette[t.color].main, 0.55)
                        }`,
                  },
                },
                [`&.${Yr.checked} + .${Yr.track}`]: {
                  backgroundColor: (e.vars || e).palette[t.color].main,
                },
              }
            )
        ),
        ei = Yn("span", {
          name: "MuiSwitch",
          slot: "Track",
          overridesResolver: (e, t) => t.track,
        })(({ theme: e }) => ({
          height: "100%",
          width: "100%",
          borderRadius: 7,
          zIndex: -1,
          transition: e.transitions.create(["opacity", "background-color"], {
            duration: e.transitions.duration.shortest,
          }),
          backgroundColor: e.vars
            ? e.vars.palette.common.onBackground
            : `${
                "light" === e.palette.mode
                  ? e.palette.common.black
                  : e.palette.common.white
              }`,
          opacity: e.vars
            ? e.vars.opacity.switchTrack
            : "" + ("light" === e.palette.mode ? 0.38 : 0.3),
        })),
        ti = Yn("span", {
          name: "MuiSwitch",
          slot: "Thumb",
          overridesResolver: (e, t) => t.thumb,
        })(({ theme: e }) => ({
          boxShadow: (e.vars || e).shadows[1],
          backgroundColor: "currentColor",
          width: 20,
          height: 20,
          borderRadius: "50%",
        })),
        ni = l.forwardRef(function (e, t) {
          const n = er({ props: e, name: "MuiSwitch" }),
            {
              className: r,
              color: i = "primary",
              edge: o = !1,
              size: a = "medium",
              sx: u,
            } = n,
            l = d(n, Xr),
            s = f({}, n, { color: i, edge: o, size: a }),
            c = ((e) => {
              const {
                classes: t,
                edge: n,
                size: r,
                color: i,
                checked: o,
                disabled: a,
              } = e;
              return f(
                {},
                t,
                Mn(
                  {
                    root: ["root", n && `edge${$n(n)}`, `size${$n(r)}`],
                    switchBase: [
                      "switchBase",
                      `color${$n(i)}`,
                      o && "checked",
                      a && "disabled",
                    ],
                    thumb: ["thumb"],
                    track: ["track"],
                    input: ["input"],
                  },
                  Gr,
                  t
                )
              );
            })(s),
            p = (0, Qt.jsx)(ti, { className: c.thumb, ownerState: s });
          return (0,
          Qt.jsxs)(Zr, { className: h(c.root, r), sx: u, ownerState: s, children: [(0, Qt.jsx)(Jr, f({ type: "checkbox", icon: p, checkedIcon: p, ref: t, ownerState: s }, l, { classes: f({}, c, { root: c.switchBase }) })), (0, Qt.jsx)(ei, { className: c.track, ownerState: s })] });
        });
      var ri = i(9332),
        ii = {
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
      (ii.env = { name: ri.env.name }),
        (ii.ga = { uaId: ri.env.ga_ua_id }),
        (ii.cues = { transOnceLength: 100, checkTailLength: 20 }),
        (ii.web = {
          host: ri.env.web,
          bye: ri.env.web + "/bye",
          pricing: ri.env.web + "#pricing",
          supported_sites: ri.env.web + "/docs/supported-sites",
          tutorial: ri.env.web + "/docs/how-to-use",
          faq: ri.env.web + "/docs/faqs",
          blog_update: ri.env.web + "/blog/tags/update",
          contact: ri.env.web + "/docs/contact",
          affiliate_program: ri.env.web + "/docs/affiliate-program",
          i18n: { nonDefaultLocales: ["zh-CN", "zh-TW"] },
        }),
        (ii.dashboard = {
          host: ri.env.dashboard,
          reigster: ri.env.dashboard + "/register",
        }),
        (ii.backend = {
          host: ri.env.backend,
          translate: ri.env.backend + "/translate",
          usage: ri.env.backend + "/usage",
          account: ri.env.backend + "/account",
          os: "https://api.opensubtitles.org:443/xml-rpc",
          dictionary: ri.env.backend + "/dictionary",
          synthesize: ri.env.backend + "/synthesize",
        }),
        (ii.localeInfoMap = {
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
        (ii.subtSettings = {
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
        (ii.trial = { mtMinutes: 15 }),
        (ii.osLangs = [
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
        (ii.amp = { key: ri.env.amp_key });
      const oi = ii;
      var ai = { level: (0, 3) };
      chrome.storage.local.get(["settings"]).then(function (e) {
        var t;
        !0 ===
          (null === (t = e.settings) || void 0 === t ? void 0 : t.debugMode) &&
          (ai.level = 0);
      }),
        (ai.error = function () {
          if (ai.level <= 3) {
            for (
              var e, t = arguments.length, n = new Array(t), r = 0;
              r < t;
              r++
            )
              n[r] = arguments[r];
            (e = console).log.apply(e, ["[st]"].concat(n));
          }
        }),
        (ai.warning = function () {
          if (ai.level <= 2) {
            for (
              var e, t = arguments.length, n = new Array(t), r = 0;
              r < t;
              r++
            )
              n[r] = arguments[r];
            (e = console).log.apply(e, ["[st]"].concat(n));
          }
        }),
        (ai.info = function () {
          if (ai.level <= 1) {
            for (
              var e, t = arguments.length, n = new Array(t), r = 0;
              r < t;
              r++
            )
              n[r] = arguments[r];
            (e = console).log.apply(e, ["[st]"].concat(n));
          }
        }),
        (ai.debug = function () {
          if (ai.level <= 0) {
            for (
              var e, t = arguments.length, n = new Array(t), r = 0;
              r < t;
              r++
            )
              n[r] = arguments[r];
            (e = console).log.apply(e, ["[st]"].concat(n));
          }
        });
      const ui = ai;
      function li(e) {
        return (
          (li =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          li(e)
        );
      }
      function si(e, t, n) {
        return (
          (t = (function (e) {
            var t = (function (e, t) {
              if ("object" !== li(e) || null === e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var r = n.call(e, "string");
                if ("object" !== li(r)) return r;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(e);
            })(e);
            return "symbol" === li(t) ? t : String(t);
          })(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var ci,
        fi = i(6486),
        di = i.n(fi),
        pi = new Uint8Array(16);
      function hi() {
        if (
          !ci &&
          !(ci =
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
        return ci(pi);
      }
      const vi =
        /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
      for (var gi = [], mi = 0; mi < 256; ++mi)
        gi.push((mi + 256).toString(16).substr(1));
      const yi = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            n = (
              gi[e[t + 0]] +
              gi[e[t + 1]] +
              gi[e[t + 2]] +
              gi[e[t + 3]] +
              "-" +
              gi[e[t + 4]] +
              gi[e[t + 5]] +
              "-" +
              gi[e[t + 6]] +
              gi[e[t + 7]] +
              "-" +
              gi[e[t + 8]] +
              gi[e[t + 9]] +
              "-" +
              gi[e[t + 10]] +
              gi[e[t + 11]] +
              gi[e[t + 12]] +
              gi[e[t + 13]] +
              gi[e[t + 14]] +
              gi[e[t + 15]]
            ).toLowerCase();
          if (
            !(function (e) {
              return "string" == typeof e && vi.test(e);
            })(n)
          )
            throw TypeError("Stringified UUID is invalid");
          return n;
        },
        bi = function (e, t, n) {
          var r = (e = e || {}).random || (e.rng || hi)();
          if (((r[6] = (15 & r[6]) | 64), (r[8] = (63 & r[8]) | 128), t)) {
            n = n || 0;
            for (var i = 0; i < 16; ++i) t[n + i] = r[i];
            return t;
          }
          return yi(r);
        };
      var wi,
        _i,
        ki,
        xi = function (e, t) {
          return (wi =
            wi ||
            r(
              u().mark(function e(t, n) {
                var r;
                return u().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), chrome.storage.local.get([t]);
                      case 2:
                        return (
                          (r = e.sent),
                          ui.debug("before merge:", r[t]),
                          ui.debug("after merge:", di().merge(r[t], n)),
                          (e.next = 7),
                          chrome.storage.local.set(
                            si({}, t, di().merge(r[t], n))
                          )
                        );
                      case 7:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )).apply(this, arguments);
        },
        Si = function (e, t) {
          return (_i =
            _i ||
            r(
              u().mark(function e(t, n) {
                return u().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (t) {
                          e.next = 6;
                          break;
                        }
                        return (
                          (e.next = 3),
                          chrome.storage.local.get(null).then(function (e) {
                            return di().get(e, n);
                          })
                        );
                      case 3:
                      case 8:
                        return e.abrupt("return", e.sent);
                      case 6:
                        return (
                          (e.next = 8),
                          chrome.storage.local
                            .get(t ? [t] : null)
                            .then(function (e) {
                              return di().get(e[t], n);
                            })
                        );
                      case 9:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )).apply(this, arguments);
        },
        Ei = function () {
          return (ki =
            ki ||
            r(
              u().mark(function e() {
                var t, n, r;
                return u().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (t = oi.storageKeys.gaClientId),
                          (n = null),
                          (e.next = 4),
                          chrome.storage.local.get([t])
                        );
                      case 4:
                        return (
                          (r = e.sent),
                          ui.debug("storage get:", r),
                          r[t]
                            ? (ui.debug("got id from storage: ", r[t]),
                              (n = r[t]))
                            : ((n = bi()),
                              ui.debug("generate id from uuidv4: ", n),
                              chrome.storage.local.set(si({}, t, n))),
                          e.abrupt("return", n)
                        );
                      case 8:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )).apply(this, arguments);
        },
        Oi = function (e, t) {
          return (
            (Oi =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              }),
            Oi(e, t)
          );
        };
      function Ci(e, t) {
        if ("function" != typeof t && null !== t)
          throw new TypeError(
            "Class extends value " + String(t) + " is not a constructor or null"
          );
        function n() {
          this.constructor = e;
        }
        Oi(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n()));
      }
      var Ti,
        Pi = function () {
          return (
            (Pi =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var i in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            Pi.apply(this, arguments)
          );
        };
      function Ii(e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            t.indexOf(r) < 0 &&
            (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var i = 0;
          for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
            t.indexOf(r[i]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
              (n[r[i]] = e[r[i]]);
        }
        return n;
      }
      function Ri(e, t, n, r) {
        return new (n || (n = Promise))(function (i, o) {
          function a(e) {
            try {
              l(r.next(e));
            } catch (e) {
              o(e);
            }
          }
          function u(e) {
            try {
              l(r.throw(e));
            } catch (e) {
              o(e);
            }
          }
          function l(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(a, u);
          }
          l((r = r.apply(e, t || [])).next());
        });
      }
      function Ni(e, t) {
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
          (o = { next: u(0), throw: u(1), return: u(2) }),
          "function" == typeof Symbol &&
            (o[Symbol.iterator] = function () {
              return this;
            }),
          o
        );
        function u(u) {
          return function (l) {
            return (function (u) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; o && ((o = 0), u[0] && (a = 0)), a; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (i =
                        2 & u[0]
                          ? r.return
                          : u[0]
                          ? r.throw || ((i = r.return) && i.call(r), 0)
                          : r.next) &&
                      !(i = i.call(r, u[1])).done)
                  )
                    return i;
                  switch (((r = 0), i && (u = [2 & u[0], i.value]), u[0])) {
                    case 0:
                    case 1:
                      i = u;
                      break;
                    case 4:
                      return a.label++, { value: u[1], done: !1 };
                    case 5:
                      a.label++, (r = u[1]), (u = [0]);
                      continue;
                    case 7:
                      (u = a.ops.pop()), a.trys.pop();
                      continue;
                    default:
                      if (
                        !(
                          (i = (i = a.trys).length > 0 && i[i.length - 1]) ||
                          (6 !== u[0] && 2 !== u[0])
                        )
                      ) {
                        a = 0;
                        continue;
                      }
                      if (3 === u[0] && (!i || (u[1] > i[0] && u[1] < i[3]))) {
                        a.label = u[1];
                        break;
                      }
                      if (6 === u[0] && a.label < i[1]) {
                        (a.label = i[1]), (i = u);
                        break;
                      }
                      if (i && a.label < i[2]) {
                        (a.label = i[2]), a.ops.push(u);
                        break;
                      }
                      i[2] && a.ops.pop(), a.trys.pop();
                      continue;
                  }
                  u = t.call(e, a);
                } catch (e) {
                  (u = [6, e]), (r = 0);
                } finally {
                  n = i = 0;
                }
              if (5 & u[0]) throw u[1];
              return { value: u[0] ? u[1] : void 0, done: !0 };
            })([u, l]);
          };
        }
      }
      function Ai(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
          n = t && e[t],
          r = 0;
        if (n) return n.call(e);
        if (e && "number" == typeof e.length)
          return {
            next: function () {
              return (
                e && r >= e.length && (e = void 0),
                { value: e && e[r++], done: !e }
              );
            },
          };
        throw new TypeError(
          t ? "Object is not iterable." : "Symbol.iterator is not defined."
        );
      }
      function Li(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r,
          i,
          o = n.call(e),
          a = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(r = o.next()).done; )
            a.push(r.value);
        } catch (e) {
          i = { error: e };
        } finally {
          try {
            r && !r.done && (n = o.return) && n.call(o);
          } finally {
            if (i) throw i.error;
          }
        }
        return a;
      }
      function zi(e, t, n) {
        if (n || 2 === arguments.length)
          for (var r, i = 0, o = t.length; i < o; i++)
            (!r && i in t) ||
              (r || (r = Array.prototype.slice.call(t, 0, i)), (r[i] = t[i]));
        return e.concat(r || Array.prototype.slice.call(t));
      }
      Object.create,
        Object.create,
        "function" == typeof SuppressedError && SuppressedError,
        (function (e) {
          (e[(e.None = 0)] = "None"),
            (e[(e.Error = 1)] = "Error"),
            (e[(e.Warn = 2)] = "Warn"),
            (e[(e.Verbose = 3)] = "Verbose"),
            (e[(e.Debug = 4)] = "Debug");
        })(Ti || (Ti = {}));
      var ji = function (e) {
          return function () {
            var t = Pi({}, e.config);
            return { logger: t.loggerProvider, logLevel: t.logLevel };
          };
        },
        Mi = function (e, t) {
          var n, r;
          t = (t = t.replace(/\[(\w+)\]/g, ".$1")).replace(/^\./, "");
          try {
            for (
              var i = Ai(t.split(".")), o = i.next();
              !o.done;
              o = i.next()
            ) {
              var a = o.value;
              if (!(a in e)) return;
              e = e[a];
            }
          } catch (e) {
            n = { error: e };
          } finally {
            try {
              o && !o.done && (r = i.return) && r.call(i);
            } finally {
              if (n) throw n.error;
            }
          }
          return e;
        },
        $i = function (e, t) {
          return function () {
            var n,
              r,
              i = {};
            try {
              for (var o = Ai(t), a = o.next(); !a.done; a = o.next()) {
                var u = a.value;
                i[u] = Mi(e, u);
              }
            } catch (e) {
              n = { error: e };
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
        Di = function (e, t, n, r, i) {
          return (
            void 0 === i && (i = null),
            function () {
              for (var o = [], a = 0; a < arguments.length; a++)
                o[a] = arguments[a];
              var u = n(),
                l = u.logger,
                s = u.logLevel;
              if ((s && s < Ti.Debug) || !s || !l) return e.apply(i, o);
              var c,
                f = {
                  type: "invoke public method",
                  name: t,
                  args: o,
                  stacktrace:
                    ((c = 1),
                    void 0 === c && (c = 0),
                    (new Error().stack || "")
                      .split("\n")
                      .slice(2 + c)
                      .map(function (e) {
                        return e.trim();
                      })),
                  time: { start: new Date().toISOString() },
                  states: {},
                };
              r && f.states && (f.states.before = r());
              var d = e.apply(i, o);
              return (
                d && d.promise
                  ? d.promise.then(function () {
                      r && f.states && (f.states.after = r()),
                        f.time && (f.time.end = new Date().toISOString()),
                        l.debug(JSON.stringify(f, null, 2));
                    })
                  : (r && f.states && (f.states.after = r()),
                    f.time && (f.time.end = new Date().toISOString()),
                    l.debug(JSON.stringify(f, null, 2))),
                d
              );
            }
          );
        },
        Ui = "AMP",
        Fi = "".concat(Ui, "_unsent"),
        Bi = "https://api2.amplitude.com/2/httpapi",
        Vi = function (e, t, n) {
          return (
            void 0 === t && (t = ""),
            void 0 === n && (n = 10),
            [Ui, t, e.substring(0, n)].filter(Boolean).join("_")
          );
        },
        qi = function () {
          return "undefined" != typeof globalThis
            ? globalThis
            : "undefined" != typeof window
            ? window
            : "undefined" != typeof self
            ? self
            : void 0 !== i.g
            ? i.g
            : void 0;
        },
        Wi = function () {
          var e,
            t = qi();
          return (
            null === (e = null == t ? void 0 : t.location) || void 0 === e
              ? void 0
              : e.search
          )
            ? t.location.search
                .substring(1)
                .split("&")
                .filter(Boolean)
                .reduce(function (e, t) {
                  var n = t.split("=", 2),
                    r = Hi(n[0]),
                    i = Hi(n[1]);
                  return i ? ((e[r] = i), e) : e;
                }, {})
            : {};
        },
        Hi = function (e) {
          void 0 === e && (e = "");
          try {
            return decodeURIComponent(e);
          } catch (e) {
            return "";
          }
        },
        Ki = (function () {
          function e() {}
          return (
            (e.prototype.getApplicationContext = function () {
              return {
                versionName: this.versionName,
                language: Qi(),
                platform: "Web",
                os: void 0,
                deviceModel: void 0,
              };
            }),
            e
          );
        })(),
        Qi = function () {
          return (
            ("undefined" != typeof navigator &&
              ((navigator.languages && navigator.languages[0]) ||
                navigator.language)) ||
            ""
          );
        },
        Gi = (function () {
          function e() {
            this.queue = [];
          }
          return (
            (e.prototype.logEvent = function (e) {
              this.receiver
                ? this.receiver(e)
                : this.queue.length < 512 && this.queue.push(e);
            }),
            (e.prototype.setEventReceiver = function (e) {
              (this.receiver = e),
                this.queue.length > 0 &&
                  (this.queue.forEach(function (t) {
                    e(t);
                  }),
                  (this.queue = []));
            }),
            e
          );
        })(),
        Yi = function () {
          return (
            (Yi =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var i in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            Yi.apply(this, arguments)
          );
        },
        Xi = function (e, t) {
          var n = typeof e;
          if (n !== typeof t) return !1;
          for (
            var r = 0, i = ["string", "number", "boolean", "undefined"];
            r < i.length;
            r++
          )
            if (i[r] === n) return e === t;
          if (null == e && null == t) return !0;
          if (null == e || null == t) return !1;
          if (e.length !== t.length) return !1;
          var o = Array.isArray(e),
            a = Array.isArray(t);
          if (o !== a) return !1;
          if (!o || !a) {
            var u = Object.keys(e).sort(),
              l = Object.keys(t).sort();
            if (!Xi(u, l)) return !1;
            var s = !0;
            return (
              Object.keys(e).forEach(function (n) {
                Xi(e[n], t[n]) || (s = !1);
              }),
              s
            );
          }
          for (var c = 0; c < e.length; c++) if (!Xi(e[c], t[c])) return !1;
          return !0;
        };
      Object.entries ||
        (Object.entries = function (e) {
          for (var t = Object.keys(e), n = t.length, r = new Array(n); n--; )
            r[n] = [t[n], e[t[n]]];
          return r;
        });
      var Zi,
        Ji = (function () {
          function e() {
            (this.identity = { userProperties: {} }),
              (this.listeners = new Set());
          }
          return (
            (e.prototype.editIdentity = function () {
              var e = this,
                t = Yi({}, this.identity.userProperties),
                n = Yi(Yi({}, this.identity), { userProperties: t });
              return {
                setUserId: function (e) {
                  return (n.userId = e), this;
                },
                setDeviceId: function (e) {
                  return (n.deviceId = e), this;
                },
                setUserProperties: function (e) {
                  return (n.userProperties = e), this;
                },
                setOptOut: function (e) {
                  return (n.optOut = e), this;
                },
                updateUserProperties: function (e) {
                  for (
                    var t = n.userProperties || {},
                      r = 0,
                      i = Object.entries(e);
                    r < i.length;
                    r++
                  ) {
                    var o = i[r],
                      a = o[0],
                      u = o[1];
                    switch (a) {
                      case "$set":
                        for (
                          var l = 0, s = Object.entries(u);
                          l < s.length;
                          l++
                        ) {
                          var c = s[l],
                            f = c[0],
                            d = c[1];
                          t[f] = d;
                        }
                        break;
                      case "$unset":
                        for (var p = 0, h = Object.keys(u); p < h.length; p++)
                          delete t[(f = h[p])];
                        break;
                      case "$clearAll":
                        t = {};
                    }
                  }
                  return (n.userProperties = t), this;
                },
                commit: function () {
                  return e.setIdentity(n), this;
                },
              };
            }),
            (e.prototype.getIdentity = function () {
              return Yi({}, this.identity);
            }),
            (e.prototype.setIdentity = function (e) {
              var t = Yi({}, this.identity);
              (this.identity = Yi({}, e)),
                Xi(t, this.identity) ||
                  this.listeners.forEach(function (t) {
                    t(e);
                  });
            }),
            (e.prototype.addIdentityListener = function (e) {
              this.listeners.add(e);
            }),
            (e.prototype.removeIdentityListener = function (e) {
              this.listeners.delete(e);
            }),
            e
          );
        })(),
        eo =
          "undefined" != typeof globalThis
            ? globalThis
            : void 0 !== i.g
            ? i.g
            : self,
        to = (function () {
          function e() {
            (this.identityStore = new Ji()),
              (this.eventBridge = new Gi()),
              (this.applicationContextProvider = new Ki());
          }
          return (
            (e.getInstance = function (t) {
              return (
                eo.analyticsConnectorInstances ||
                  (eo.analyticsConnectorInstances = {}),
                eo.analyticsConnectorInstances[t] ||
                  (eo.analyticsConnectorInstances[t] = new e()),
                eo.analyticsConnectorInstances[t]
              );
            }),
            e
          );
        })(),
        no = function (e) {
          return void 0 === e && (e = "$default_instance"), to.getInstance(e);
        };
      !(function (e) {
        (e.BEFORE = "before"),
          (e.ENRICHMENT = "enrichment"),
          (e.DESTINATION = "destination");
      })(Zi || (Zi = {}));
      var ro,
        io = (function () {
          function e() {
            (this.name = "identity"),
              (this.type = Zi.BEFORE),
              (this.identityStore = no().identityStore);
          }
          return (
            (e.prototype.execute = function (e) {
              return Ri(this, void 0, void 0, function () {
                var t;
                return Ni(this, function (n) {
                  return (
                    (t = e.user_properties) &&
                      this.identityStore
                        .editIdentity()
                        .updateUserProperties(t)
                        .commit(),
                    [2, e]
                  );
                });
              });
            }),
            (e.prototype.setup = function (e) {
              return Ri(this, void 0, void 0, function () {
                return Ni(this, function (t) {
                  return (
                    e.instanceName &&
                      (this.identityStore = no(e.instanceName).identityStore),
                    [2]
                  );
                });
              });
            }),
            e
          );
        })(),
        oo = function (e) {
          return { promise: e || Promise.resolve() };
        };
      !(function (e) {
        (e.Unknown = "unknown"),
          (e.Skipped = "skipped"),
          (e.Success = "success"),
          (e.RateLimit = "rate_limit"),
          (e.PayloadTooLarge = "payload_too_large"),
          (e.Invalid = "invalid"),
          (e.Failed = "failed"),
          (e.Timeout = "Timeout"),
          (e.SystemError = "SystemError");
      })(ro || (ro = {}));
      var ao,
        uo = function (e, t, n) {
          return (
            void 0 === t && (t = 0),
            void 0 === n && (n = ro.Unknown),
            { event: e, code: t, message: n }
          );
        };
      !(function (e) {
        (e.US = "US"), (e.EU = "EU");
      })(ao || (ao = {}));
      var lo = "Amplitude Logger ",
        so = (function () {
          function e() {
            this.logLevel = Ti.None;
          }
          return (
            (e.prototype.disable = function () {
              this.logLevel = Ti.None;
            }),
            (e.prototype.enable = function (e) {
              void 0 === e && (e = Ti.Warn), (this.logLevel = e);
            }),
            (e.prototype.log = function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              this.logLevel < Ti.Verbose ||
                console.log("".concat(lo, "[Log]: ").concat(e.join(" ")));
            }),
            (e.prototype.warn = function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              this.logLevel < Ti.Warn ||
                console.warn("".concat(lo, "[Warn]: ").concat(e.join(" ")));
            }),
            (e.prototype.error = function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              this.logLevel < Ti.Error ||
                console.error("".concat(lo, "[Error]: ").concat(e.join(" ")));
            }),
            (e.prototype.debug = function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              this.logLevel < Ti.Debug ||
                console.log("".concat(lo, "[Debug]: ").concat(e.join(" ")));
            }),
            e
          );
        })(),
        co = function () {
          return {
            flushMaxRetries: 12,
            flushQueueSize: 200,
            flushIntervalMillis: 1e4,
            instanceName: "$default_instance",
            logLevel: Ti.Warn,
            loggerProvider: new so(),
            optOut: !1,
            serverUrl: Bi,
            serverZone: ao.US,
            useBatch: !1,
          };
        },
        fo = (function () {
          function e(e) {
            var t, n, r, i;
            this._optOut = !1;
            var o = co();
            (this.apiKey = e.apiKey),
              (this.flushIntervalMillis =
                null !== (t = e.flushIntervalMillis) && void 0 !== t
                  ? t
                  : o.flushIntervalMillis),
              (this.flushMaxRetries = e.flushMaxRetries || o.flushMaxRetries),
              (this.flushQueueSize = e.flushQueueSize || o.flushQueueSize),
              (this.instanceName = e.instanceName || o.instanceName),
              (this.loggerProvider = e.loggerProvider || o.loggerProvider),
              (this.logLevel =
                null !== (n = e.logLevel) && void 0 !== n ? n : o.logLevel),
              (this.minIdLength = e.minIdLength),
              (this.plan = e.plan),
              (this.ingestionMetadata = e.ingestionMetadata),
              (this.optOut =
                null !== (r = e.optOut) && void 0 !== r ? r : o.optOut),
              (this.serverUrl = e.serverUrl),
              (this.serverZone = e.serverZone || o.serverZone),
              (this.storageProvider = e.storageProvider),
              (this.transportProvider = e.transportProvider),
              (this.useBatch =
                null !== (i = e.useBatch) && void 0 !== i ? i : o.useBatch),
              this.loggerProvider.enable(this.logLevel);
            var a = ho(e.serverUrl, e.serverZone, e.useBatch);
            (this.serverZone = a.serverZone), (this.serverUrl = a.serverUrl);
          }
          return (
            Object.defineProperty(e.prototype, "optOut", {
              get: function () {
                return this._optOut;
              },
              set: function (e) {
                this._optOut = e;
              },
              enumerable: !1,
              configurable: !0,
            }),
            e
          );
        })(),
        po = function (e, t) {
          return e === ao.EU
            ? t
              ? "https://api.eu.amplitude.com/batch"
              : "https://api.eu.amplitude.com/2/httpapi"
            : t
            ? "https://api2.amplitude.com/batch"
            : Bi;
        },
        ho = function (e, t, n) {
          if (
            (void 0 === e && (e = ""),
            void 0 === t && (t = co().serverZone),
            void 0 === n && (n = co().useBatch),
            e)
          )
            return { serverUrl: e, serverZone: void 0 };
          var r = ["US", "EU"].includes(t) ? t : co().serverZone;
          return { serverZone: r, serverUrl: po(r, n) };
        };
      function vo(e) {
        var t = "";
        try {
          "body" in e && (t = JSON.stringify(e.body));
        } catch (e) {}
        return t;
      }
      var go,
        mo,
        yo,
        bo = (function () {
          function e() {
            (this.name = "amplitude"),
              (this.type = Zi.DESTINATION),
              (this.retryTimeout = 1e3),
              (this.throttleTimeout = 3e4),
              (this.storageKey = ""),
              (this.scheduled = null),
              (this.queue = []);
          }
          return (
            (e.prototype.setup = function (e) {
              var t;
              return Ri(this, void 0, void 0, function () {
                var n,
                  r = this;
                return Ni(this, function (i) {
                  switch (i.label) {
                    case 0:
                      return (
                        (this.config = e),
                        (this.storageKey = ""
                          .concat(Fi, "_")
                          .concat(this.config.apiKey.substring(0, 10))),
                        [
                          4,
                          null === (t = this.config.storageProvider) ||
                          void 0 === t
                            ? void 0
                            : t.get(this.storageKey),
                        ]
                      );
                    case 1:
                      return (
                        (n = i.sent()),
                        this.saveEvents(),
                        n &&
                          n.length > 0 &&
                          Promise.all(
                            n.map(function (e) {
                              return r.execute(e);
                            })
                          ).catch(),
                        [2, Promise.resolve(void 0)]
                      );
                  }
                });
              });
            }),
            (e.prototype.execute = function (e) {
              var t = this;
              return new Promise(function (n) {
                var r = {
                  event: e,
                  attempts: 0,
                  callback: function (e) {
                    return n(e);
                  },
                  timeout: 0,
                };
                t.addToQueue(r);
              });
            }),
            (e.prototype.addToQueue = function () {
              for (var e = this, t = [], n = 0; n < arguments.length; n++)
                t[n] = arguments[n];
              t
                .filter(function (t) {
                  return t.attempts < e.config.flushMaxRetries
                    ? ((t.attempts += 1), !0)
                    : (e.fulfillRequest(
                        [t],
                        500,
                        "Event rejected due to exceeded retry count"
                      ),
                      !1);
                })
                .forEach(function (t) {
                  (e.queue = e.queue.concat(t)),
                    0 !== t.timeout
                      ? setTimeout(function () {
                          (t.timeout = 0), e.schedule(0);
                        }, t.timeout)
                      : e.schedule(e.config.flushIntervalMillis);
                }),
                this.saveEvents();
            }),
            (e.prototype.schedule = function (e) {
              var t = this;
              this.scheduled ||
                (this.scheduled = setTimeout(function () {
                  t.flush(!0).then(function () {
                    t.queue.length > 0 && t.schedule(e);
                  });
                }, e));
            }),
            (e.prototype.flush = function (e) {
              return (
                void 0 === e && (e = !1),
                Ri(this, void 0, void 0, function () {
                  var t,
                    n,
                    r,
                    i = this;
                  return Ni(this, function (o) {
                    switch (o.label) {
                      case 0:
                        return (
                          (t = []),
                          (n = []),
                          this.queue.forEach(function (e) {
                            return 0 === e.timeout ? t.push(e) : n.push(e);
                          }),
                          (this.queue = n),
                          this.scheduled &&
                            (clearTimeout(this.scheduled),
                            (this.scheduled = null)),
                          (a = t),
                          (u = this.config.flushQueueSize),
                          (l = Math.max(u, 1)),
                          (r = a.reduce(function (e, t, n) {
                            var r = Math.floor(n / l);
                            return e[r] || (e[r] = []), e[r].push(t), e;
                          }, [])),
                          [
                            4,
                            Promise.all(
                              r.map(function (t) {
                                return i.send(t, e);
                              })
                            ),
                          ]
                        );
                      case 1:
                        return o.sent(), [2];
                    }
                    var a, u, l;
                  });
                })
              );
            }),
            (e.prototype.send = function (e, t) {
              return (
                void 0 === t && (t = !0),
                Ri(this, void 0, void 0, function () {
                  var n, r, i, o, a;
                  return Ni(this, function (u) {
                    switch (u.label) {
                      case 0:
                        if (!this.config.apiKey)
                          return [
                            2,
                            this.fulfillRequest(
                              e,
                              400,
                              "Event rejected due to missing API key"
                            ),
                          ];
                        (n = {
                          api_key: this.config.apiKey,
                          events: e.map(function (e) {
                            var t = e.event;
                            return t.extra, Ii(t, ["extra"]);
                          }),
                          options: { min_id_length: this.config.minIdLength },
                        }),
                          (u.label = 1);
                      case 1:
                        return (
                          u.trys.push([1, 3, , 4]),
                          (r = ho(
                            this.config.serverUrl,
                            this.config.serverZone,
                            this.config.useBatch
                          ).serverUrl),
                          [4, this.config.transportProvider.send(r, n)]
                        );
                      case 2:
                        return null === (i = u.sent())
                          ? (this.fulfillRequest(
                              e,
                              0,
                              "Unexpected error occurred"
                            ),
                            [2])
                          : t
                          ? (this.handleResponse(i, e), [3, 4])
                          : ("body" in i
                              ? this.fulfillRequest(
                                  e,
                                  i.statusCode,
                                  "".concat(i.status, ": ").concat(vo(i))
                                )
                              : this.fulfillRequest(e, i.statusCode, i.status),
                            [2]);
                      case 3:
                        return (
                          (o = u.sent()),
                          (a =
                            (l = o) instanceof Error ? l.message : String(l)),
                          this.config.loggerProvider.error(a),
                          this.fulfillRequest(e, 0, a),
                          [3, 4]
                        );
                      case 4:
                        return [2];
                    }
                    var l;
                  });
                })
              );
            }),
            (e.prototype.handleResponse = function (e, t) {
              var n = e.status;
              switch (n) {
                case ro.Success:
                  this.handleSuccessResponse(e, t);
                  break;
                case ro.Invalid:
                  this.handleInvalidResponse(e, t);
                  break;
                case ro.PayloadTooLarge:
                  this.handlePayloadTooLargeResponse(e, t);
                  break;
                case ro.RateLimit:
                  this.handleRateLimitResponse(e, t);
                  break;
                default:
                  this.config.loggerProvider.warn(
                    "{code: 0, error: \"Status '"
                      .concat(n, "' provided for ")
                      .concat(t.length, ' events"}')
                  ),
                    this.handleOtherResponse(t);
              }
            }),
            (e.prototype.handleSuccessResponse = function (e, t) {
              this.fulfillRequest(
                t,
                e.statusCode,
                "Event tracked successfully"
              );
            }),
            (e.prototype.handleInvalidResponse = function (e, t) {
              var n = this;
              if (
                e.body.missingField ||
                e.body.error.startsWith("Invalid API key")
              )
                this.fulfillRequest(t, e.statusCode, e.body.error);
              else {
                var r = zi(
                    zi(
                      zi(
                        zi(
                          [],
                          Li(Object.values(e.body.eventsWithInvalidFields)),
                          !1
                        ),
                        Li(Object.values(e.body.eventsWithMissingFields)),
                        !1
                      ),
                      Li(Object.values(e.body.eventsWithInvalidIdLengths)),
                      !1
                    ),
                    Li(e.body.silencedEvents),
                    !1
                  ).flat(),
                  i = new Set(r),
                  o = t.filter(function (t, r) {
                    if (!i.has(r)) return !0;
                    n.fulfillRequest([t], e.statusCode, e.body.error);
                  });
                o.length > 0 && this.config.loggerProvider.warn(vo(e)),
                  this.addToQueue.apply(this, zi([], Li(o), !1));
              }
            }),
            (e.prototype.handlePayloadTooLargeResponse = function (e, t) {
              1 !== t.length
                ? (this.config.loggerProvider.warn(vo(e)),
                  (this.config.flushQueueSize /= 2),
                  this.addToQueue.apply(this, zi([], Li(t), !1)))
                : this.fulfillRequest(t, e.statusCode, e.body.error);
            }),
            (e.prototype.handleRateLimitResponse = function (e, t) {
              var n = this,
                r = Object.keys(e.body.exceededDailyQuotaUsers),
                i = Object.keys(e.body.exceededDailyQuotaDevices),
                o = e.body.throttledEvents,
                a = new Set(r),
                u = new Set(i),
                l = new Set(o),
                s = t.filter(function (t, r) {
                  if (
                    !(
                      (t.event.user_id && a.has(t.event.user_id)) ||
                      (t.event.device_id && u.has(t.event.device_id))
                    )
                  )
                    return l.has(r) && (t.timeout = n.throttleTimeout), !0;
                  n.fulfillRequest([t], e.statusCode, e.body.error);
                });
              s.length > 0 && this.config.loggerProvider.warn(vo(e)),
                this.addToQueue.apply(this, zi([], Li(s), !1));
            }),
            (e.prototype.handleOtherResponse = function (e) {
              var t = this;
              this.addToQueue.apply(
                this,
                zi(
                  [],
                  Li(
                    e.map(function (e) {
                      return (e.timeout = e.attempts * t.retryTimeout), e;
                    })
                  ),
                  !1
                )
              );
            }),
            (e.prototype.fulfillRequest = function (e, t, n) {
              this.saveEvents(),
                e.forEach(function (e) {
                  return e.callback(uo(e.event, t, n));
                });
            }),
            (e.prototype.saveEvents = function () {
              if (this.config.storageProvider) {
                var e = Array.from(
                  this.queue.map(function (e) {
                    return e.event;
                  })
                );
                this.config.storageProvider.set(this.storageKey, e);
              }
            }),
            e
          );
        })(),
        wo = function (e) {
          return e
            ? (e ^ ((16 * Math.random()) >> (e / 4))).toString(16)
            : (
                String(1e7) +
                String(-1e3) +
                String(-4e3) +
                String(-8e3) +
                String(-1e11)
              ).replace(/[018]/g, wo);
        };
      !(function (e) {
        (e.SET = "$set"),
          (e.SET_ONCE = "$setOnce"),
          (e.ADD = "$add"),
          (e.APPEND = "$append"),
          (e.PREPEND = "$prepend"),
          (e.REMOVE = "$remove"),
          (e.PREINSERT = "$preInsert"),
          (e.POSTINSERT = "$postInsert"),
          (e.UNSET = "$unset"),
          (e.CLEAR_ALL = "$clearAll");
      })(go || (go = {})),
        (function (e) {
          (e.REVENUE_PRODUCT_ID = "$productId"),
            (e.REVENUE_QUANTITY = "$quantity"),
            (e.REVENUE_PRICE = "$price"),
            (e.REVENUE_TYPE = "$revenueType"),
            (e.REVENUE = "$revenue");
        })(mo || (mo = {})),
        (function (e) {
          (e.IDENTIFY = "$identify"),
            (e.GROUP_IDENTIFY = "$groupidentify"),
            (e.REVENUE = "revenue_amount");
        })(yo || (yo = {}));
      var _o,
        ko = function (e) {
          if (Object.keys(e).length > 1e3) return !1;
          for (var t in e) {
            var n = e[t];
            if (!xo(t, n)) return !1;
          }
          return !0;
        },
        xo = function (e, t) {
          var n, r;
          if ("string" != typeof e) return !1;
          if (Array.isArray(t)) {
            var i = !0;
            try {
              for (var o = Ai(t), a = o.next(); !a.done; a = o.next()) {
                var u = a.value;
                if (Array.isArray(u)) return !1;
                if ("object" == typeof u) i = i && ko(u);
                else if (!["number", "string"].includes(typeof u)) return !1;
                if (!i) return !1;
              }
            } catch (e) {
              n = { error: e };
            } finally {
              try {
                a && !a.done && (r = o.return) && r.call(o);
              } finally {
                if (n) throw n.error;
              }
            }
          } else {
            if (null == t) return !1;
            if ("object" == typeof t) return ko(t);
            if (!["number", "string", "boolean"].includes(typeof t)) return !1;
          }
          return !0;
        },
        So = (function () {
          function e() {
            (this._propertySet = new Set()), (this._properties = {});
          }
          return (
            (e.prototype.getUserProperties = function () {
              return Pi({}, this._properties);
            }),
            (e.prototype.set = function (e, t) {
              return this._safeSet(go.SET, e, t), this;
            }),
            (e.prototype.setOnce = function (e, t) {
              return this._safeSet(go.SET_ONCE, e, t), this;
            }),
            (e.prototype.append = function (e, t) {
              return this._safeSet(go.APPEND, e, t), this;
            }),
            (e.prototype.prepend = function (e, t) {
              return this._safeSet(go.PREPEND, e, t), this;
            }),
            (e.prototype.postInsert = function (e, t) {
              return this._safeSet(go.POSTINSERT, e, t), this;
            }),
            (e.prototype.preInsert = function (e, t) {
              return this._safeSet(go.PREINSERT, e, t), this;
            }),
            (e.prototype.remove = function (e, t) {
              return this._safeSet(go.REMOVE, e, t), this;
            }),
            (e.prototype.add = function (e, t) {
              return this._safeSet(go.ADD, e, t), this;
            }),
            (e.prototype.unset = function (e) {
              return this._safeSet(go.UNSET, e, "-"), this;
            }),
            (e.prototype.clearAll = function () {
              return (
                (this._properties = {}),
                (this._properties[go.CLEAR_ALL] = "-"),
                this
              );
            }),
            (e.prototype._safeSet = function (e, t, n) {
              if (this._validate(e, t, n)) {
                var r = this._properties[e];
                return (
                  void 0 === r && ((r = {}), (this._properties[e] = r)),
                  (r[t] = n),
                  this._propertySet.add(t),
                  !0
                );
              }
              return !1;
            }),
            (e.prototype._validate = function (e, t, n) {
              return (
                void 0 === this._properties[go.CLEAR_ALL] &&
                !this._propertySet.has(t) &&
                (e === go.ADD
                  ? "number" == typeof n
                  : e === go.UNSET || e === go.REMOVE || xo(t, n))
              );
            }),
            e
          );
        })(),
        Eo = (function () {
          function e() {
            (this.productId = ""), (this.quantity = 1), (this.price = 0);
          }
          return (
            (e.prototype.setProductId = function (e) {
              return (this.productId = e), this;
            }),
            (e.prototype.setQuantity = function (e) {
              return e > 0 && (this.quantity = e), this;
            }),
            (e.prototype.setPrice = function (e) {
              return (this.price = e), this;
            }),
            (e.prototype.setRevenueType = function (e) {
              return (this.revenueType = e), this;
            }),
            (e.prototype.setRevenue = function (e) {
              return (this.revenue = e), this;
            }),
            (e.prototype.setEventProperties = function (e) {
              return ko(e) && (this.properties = e), this;
            }),
            (e.prototype.getEventProperties = function () {
              var e = this.properties ? Pi({}, this.properties) : {};
              return (
                (e[mo.REVENUE_PRODUCT_ID] = this.productId),
                (e[mo.REVENUE_QUANTITY] = this.quantity),
                (e[mo.REVENUE_PRICE] = this.price),
                (e[mo.REVENUE_TYPE] = this.revenueType),
                (e[mo.REVENUE] = this.revenue),
                e
              );
            }),
            e
          );
        })(),
        Oo = function (e, t) {
          return Pi(Pi({}, t), {
            event_type: yo.IDENTIFY,
            user_properties: e.getUserProperties(),
          });
        },
        Co = (function () {
          function e(e) {
            (this.client = e),
              (this.queue = []),
              (this.applying = !1),
              (this.plugins = []);
          }
          return (
            (e.prototype.register = function (e, t) {
              return Ri(this, void 0, void 0, function () {
                return Ni(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [4, e.setup(t, this.client)];
                    case 1:
                      return n.sent(), this.plugins.push(e), [2];
                  }
                });
              });
            }),
            (e.prototype.deregister = function (e) {
              var t;
              return Ri(this, void 0, void 0, function () {
                var n, r;
                return Ni(this, function (i) {
                  switch (i.label) {
                    case 0:
                      return (
                        (n = this.plugins.findIndex(function (t) {
                          return t.name === e;
                        })),
                        (r = this.plugins[n]),
                        this.plugins.splice(n, 1),
                        [
                          4,
                          null === (t = r.teardown) || void 0 === t
                            ? void 0
                            : t.call(r),
                        ]
                      );
                    case 1:
                      return i.sent(), [2];
                  }
                });
              });
            }),
            (e.prototype.reset = function (e) {
              (this.applying = !1),
                this.plugins.map(function (e) {
                  var t;
                  return null === (t = e.teardown) || void 0 === t
                    ? void 0
                    : t.call(e);
                }),
                (this.plugins = []),
                (this.client = e);
            }),
            (e.prototype.push = function (e) {
              var t = this;
              return new Promise(function (n) {
                t.queue.push([e, n]), t.scheduleApply(0);
              });
            }),
            (e.prototype.scheduleApply = function (e) {
              var t = this;
              this.applying ||
                ((this.applying = !0),
                setTimeout(function () {
                  t.apply(t.queue.shift()).then(function () {
                    (t.applying = !1), t.queue.length > 0 && t.scheduleApply(0);
                  });
                }, e));
            }),
            (e.prototype.apply = function (e) {
              return Ri(this, void 0, void 0, function () {
                var t, n, r, i, o, a, u, l, s, c, f, d, p, h, v, g, m, y, b;
                return Ni(this, function (w) {
                  switch (w.label) {
                    case 0:
                      if (!e) return [2];
                      (t = Li(e, 1)),
                        (n = t[0]),
                        (r = Li(e, 2)),
                        (i = r[1]),
                        (o = this.plugins.filter(function (e) {
                          return e.type === Zi.BEFORE;
                        })),
                        (w.label = 1);
                    case 1:
                      w.trys.push([1, 6, 7, 8]),
                        (a = Ai(o)),
                        (u = a.next()),
                        (w.label = 2);
                    case 2:
                      return u.done ? [3, 5] : [4, u.value.execute(Pi({}, n))];
                    case 3:
                      if (null === (d = w.sent()))
                        return i({ event: n, code: 0, message: "" }), [2];
                      (n = d), (w.label = 4);
                    case 4:
                      return (u = a.next()), [3, 2];
                    case 5:
                      return [3, 8];
                    case 6:
                      return (l = w.sent()), (g = { error: l }), [3, 8];
                    case 7:
                      try {
                        u && !u.done && (m = a.return) && m.call(a);
                      } finally {
                        if (g) throw g.error;
                      }
                      return [7];
                    case 8:
                      (s = this.plugins.filter(function (e) {
                        return e.type === Zi.ENRICHMENT;
                      })),
                        (w.label = 9);
                    case 9:
                      w.trys.push([9, 14, 15, 16]),
                        (c = Ai(s)),
                        (f = c.next()),
                        (w.label = 10);
                    case 10:
                      return f.done ? [3, 13] : [4, f.value.execute(Pi({}, n))];
                    case 11:
                      if (null === (d = w.sent()))
                        return i({ event: n, code: 0, message: "" }), [2];
                      (n = d), (w.label = 12);
                    case 12:
                      return (f = c.next()), [3, 10];
                    case 13:
                      return [3, 16];
                    case 14:
                      return (p = w.sent()), (y = { error: p }), [3, 16];
                    case 15:
                      try {
                        f && !f.done && (b = c.return) && b.call(c);
                      } finally {
                        if (y) throw y.error;
                      }
                      return [7];
                    case 16:
                      return (
                        (h = this.plugins.filter(function (e) {
                          return e.type === Zi.DESTINATION;
                        })),
                        (v = h.map(function (e) {
                          var t = Pi({}, n);
                          return e.execute(t).catch(function (e) {
                            return uo(t, 0, String(e));
                          });
                        })),
                        Promise.all(v).then(function (e) {
                          var t = Li(e, 1)[0];
                          i(t);
                        }),
                        [2]
                      );
                  }
                });
              });
            }),
            (e.prototype.flush = function () {
              return Ri(this, void 0, void 0, function () {
                var e,
                  t,
                  n,
                  r = this;
                return Ni(this, function (i) {
                  switch (i.label) {
                    case 0:
                      return (
                        (e = this.queue),
                        (this.queue = []),
                        [
                          4,
                          Promise.all(
                            e.map(function (e) {
                              return r.apply(e);
                            })
                          ),
                        ]
                      );
                    case 1:
                      return (
                        i.sent(),
                        (t = this.plugins.filter(function (e) {
                          return e.type === Zi.DESTINATION;
                        })),
                        (n = t.map(function (e) {
                          return e.flush && e.flush();
                        })),
                        [4, Promise.all(n)]
                      );
                    case 2:
                      return i.sent(), [2];
                  }
                });
              });
            }),
            e
          );
        })(),
        To = (function () {
          function e(e) {
            void 0 === e && (e = "$default"),
              (this.initializing = !1),
              (this.q = []),
              (this.dispatchQ = []),
              (this.logEvent = this.track.bind(this)),
              (this.timeline = new Co(this)),
              (this.name = e);
          }
          return (
            (e.prototype._init = function (e) {
              return Ri(this, void 0, void 0, function () {
                return Ni(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return (
                        (this.config = e),
                        this.timeline.reset(this),
                        [4, this.runQueuedFunctions("q")]
                      );
                    case 1:
                      return t.sent(), [2];
                  }
                });
              });
            }),
            (e.prototype.runQueuedFunctions = function (e) {
              return Ri(this, void 0, void 0, function () {
                var t, n, r, i, o, a;
                return Ni(this, function (u) {
                  switch (u.label) {
                    case 0:
                      (t = this[e]), (this[e] = []), (u.label = 1);
                    case 1:
                      u.trys.push([1, 6, 7, 8]),
                        (n = Ai(t)),
                        (r = n.next()),
                        (u.label = 2);
                    case 2:
                      return r.done ? [3, 5] : [4, (0, r.value)()];
                    case 3:
                      u.sent(), (u.label = 4);
                    case 4:
                      return (r = n.next()), [3, 2];
                    case 5:
                      return [3, 8];
                    case 6:
                      return (i = u.sent()), (o = { error: i }), [3, 8];
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
            (e.prototype.track = function (e, t, n) {
              var r = (function (e, t, n) {
                return Pi(
                  Pi(Pi({}, "string" == typeof e ? { event_type: e } : e), n),
                  t && { event_properties: t }
                );
              })(e, t, n);
              return oo(this.dispatch(r));
            }),
            (e.prototype.identify = function (e, t) {
              var n = Oo(e, t);
              return oo(this.dispatch(n));
            }),
            (e.prototype.groupIdentify = function (e, t, n, r) {
              var i = (function (e, t, n, r) {
                var i;
                return Pi(Pi({}, r), {
                  event_type: yo.GROUP_IDENTIFY,
                  group_properties: n.getUserProperties(),
                  groups: ((i = {}), (i[e] = t), i),
                });
              })(e, t, n, r);
              return oo(this.dispatch(i));
            }),
            (e.prototype.setGroup = function (e, t, n) {
              var r = (function (e, t, n) {
                var r,
                  i = new So();
                return (
                  i.set(e, t),
                  Pi(Pi({}, n), {
                    event_type: yo.IDENTIFY,
                    user_properties: i.getUserProperties(),
                    groups: ((r = {}), (r[e] = t), r),
                  })
                );
              })(e, t, n);
              return oo(this.dispatch(r));
            }),
            (e.prototype.revenue = function (e, t) {
              var n = (function (e, t) {
                return Pi(Pi({}, t), {
                  event_type: yo.REVENUE,
                  event_properties: e.getEventProperties(),
                });
              })(e, t);
              return oo(this.dispatch(n));
            }),
            (e.prototype.add = function (e) {
              return this.config
                ? oo(this.timeline.register(e, this.config))
                : (this.q.push(this.add.bind(this, e)), oo());
            }),
            (e.prototype.remove = function (e) {
              return this.config
                ? oo(this.timeline.deregister(e))
                : (this.q.push(this.remove.bind(this, e)), oo());
            }),
            (e.prototype.dispatchWithCallback = function (e, t) {
              if (!this.config) return t(uo(e, 0, "Client not initialized"));
              this.process(e).then(t);
            }),
            (e.prototype.dispatch = function (e) {
              return Ri(this, void 0, void 0, function () {
                var t = this;
                return Ni(this, function (n) {
                  return this.config
                    ? [2, this.process(e)]
                    : [
                        2,
                        new Promise(function (n) {
                          t.dispatchQ.push(
                            t.dispatchWithCallback.bind(t, e, n)
                          );
                        }),
                      ];
                });
              });
            }),
            (e.prototype.process = function (e) {
              return Ri(this, void 0, void 0, function () {
                var t, n, r;
                return Ni(this, function (i) {
                  switch (i.label) {
                    case 0:
                      return (
                        i.trys.push([0, 2, , 3]),
                        this.config.optOut
                          ? [2, uo(e, 0, "Event skipped due to optOut config")]
                          : [4, this.timeline.push(e)]
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
                        (t = i.sent()),
                        (n = String(t)),
                        this.config.loggerProvider.error(n),
                        [2, (r = uo(e, 0, n))]
                      );
                    case 3:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.setOptOut = function (e) {
              this.config
                ? (this.config.optOut = Boolean(e))
                : this.q.push(this.setOptOut.bind(this, Boolean(e)));
            }),
            (e.prototype.flush = function () {
              return oo(this.timeline.flush());
            }),
            e
          );
        })(),
        Po = "dclid",
        Io = "fbclid",
        Ro = "gbraid",
        No = "gclid",
        Ao = "ko_click_id",
        Lo = "li_fat_id",
        zo = "msclkid",
        jo = "rtd_cid",
        Mo = "ttclid",
        $o = "twclid",
        Do = "wbraid",
        Uo = {
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
        Fo = (function () {
          function e() {}
          return (
            (e.prototype.parse = function () {
              return Ri(this, void 0, void 0, function () {
                return Ni(this, function (e) {
                  return [
                    2,
                    Pi(
                      Pi(
                        Pi(Pi({}, Uo), this.getUtmParam()),
                        this.getReferrer()
                      ),
                      this.getClickIds()
                    ),
                  ];
                });
              });
            }),
            (e.prototype.getUtmParam = function () {
              var e = Wi();
              return {
                utm_campaign: e.utm_campaign,
                utm_content: e.utm_content,
                utm_id: e.utm_id,
                utm_medium: e.utm_medium,
                utm_source: e.utm_source,
                utm_term: e.utm_term,
              };
            }),
            (e.prototype.getReferrer = function () {
              var e,
                t,
                n = { referrer: void 0, referring_domain: void 0 };
              try {
                (n.referrer = document.referrer || void 0),
                  (n.referring_domain =
                    null !==
                      (t =
                        null === (e = n.referrer) || void 0 === e
                          ? void 0
                          : e.split("/")[2]) && void 0 !== t
                      ? t
                      : void 0);
              } catch (e) {}
              return n;
            }),
            (e.prototype.getClickIds = function () {
              var e,
                t = Wi();
              return (
                ((e = {})[Po] = t[Po]),
                (e[Io] = t[Io]),
                (e[Ro] = t[Ro]),
                (e[No] = t[No]),
                (e[Ao] = t[Ao]),
                (e[Lo] = t[Lo]),
                (e[zo] = t[zo]),
                (e[jo] = t[jo]),
                (e[Mo] = t[Mo]),
                (e[$o] = t[$o]),
                (e[Do] = t[Do]),
                e
              );
            }),
            e
          );
        })(),
        Bo = function (e) {
          var t = {};
          for (var n in e) {
            var r = e[n];
            r && (t[n] = r);
          }
          return t;
        },
        Vo = function () {
          for (var e, t = [], n = 0; n < arguments.length; n++)
            t[n] = arguments[n];
          var r,
            i = {},
            o = qi(),
            a = void 0,
            u = Li(t, 2),
            l = u[0],
            s = u[1];
          l && "init" in l ? ((e = l), s && (i = s)) : l && (i = l);
          var c = function () {
              return Ri(void 0, void 0, void 0, function () {
                var e, t, n;
                return Ni(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return (
                        (t = {
                          event_type:
                            null !== (n = i.eventType) && void 0 !== n
                              ? n
                              : "Page View",
                        }),
                        (e = [{}]),
                        [4, qo()]
                      );
                    case 1:
                      return [
                        2,
                        ((t.event_properties = Pi.apply(void 0, [
                          Pi.apply(void 0, e.concat([r.sent()])),
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
                        t),
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
            d = "undefined" != typeof location ? location.href : null,
            p = function () {
              return Ri(void 0, void 0, void 0, function () {
                var t, n, r, o;
                return Ni(this, function (u) {
                  switch (u.label) {
                    case 0:
                      return (
                        (t = location.href),
                        (n = Ho(i.trackHistoryChanges, t, d || "") && f()),
                        (d = t),
                        n
                          ? (null == a || a.log("Tracking page view event"),
                            null != e ? [3, 1] : [3, 3])
                          : [3, 4]
                      );
                    case 1:
                      return (o = (r = e).track), [4, c()];
                    case 2:
                      o.apply(r, [u.sent()]), (u.label = 3);
                    case 3:
                      u.label = 4;
                    case 4:
                      return [2];
                  }
                });
              });
            },
            h = function () {
              p();
            },
            v = {
              name: "page-view-tracking",
              type: Zi.ENRICHMENT,
              setup: function (t, n) {
                return Ri(void 0, void 0, void 0, function () {
                  var u, s, d, v, g;
                  return Ni(this, function (m) {
                    switch (m.label) {
                      case 0:
                        return (e = null != e ? e : n)
                          ? ((a = t.loggerProvider).log(
                              "Installing @amplitude/plugin-page-view-tracking-browser"
                            ),
                            (i.trackOn = (
                              null === (v = t.attribution) || void 0 === v
                                ? void 0
                                : v.trackPageViews
                            )
                              ? "attribution"
                              : i.trackOn),
                            !n &&
                              (null === (g = t.attribution) || void 0 === g
                                ? void 0
                                : g.trackPageViews) &&
                              (a.warn(
                                "@amplitude/plugin-page-view-tracking-browser overrides page view tracking behavior defined in @amplitude/analytics-browser. Resolve by disabling page view tracking in @amplitude/analytics-browser."
                              ),
                              (t.attribution.trackPageViews = !1)),
                            i.trackHistoryChanges &&
                              o &&
                              (o.addEventListener("popstate", h),
                              (r = o.history.pushState),
                              (o.history.pushState = new Proxy(
                                o.history.pushState,
                                {
                                  apply: function (e, t, n) {
                                    var r = Li(n, 3),
                                      i = r[0],
                                      o = r[1],
                                      a = r[2];
                                    e.apply(t, [i, o, a]), p();
                                  },
                                }
                              ))),
                            f()
                              ? (a.log("Tracking page view event"),
                                (d = (s = e).track),
                                [4, c()])
                              : [3, 2])
                          : ((u = l ? "Options" : "undefined"),
                            t.loggerProvider.error(
                              "Argument of type '".concat(
                                u,
                                "' is not assignable to parameter of type 'BrowserClient'."
                              )
                            ),
                            [2]);
                      case 1:
                        d.apply(s, [m.sent()]), (m.label = 2);
                      case 2:
                        return [2];
                    }
                  });
                });
              },
              execute: function (e) {
                return Ri(void 0, void 0, void 0, function () {
                  var t;
                  return Ni(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return "attribution" === i.trackOn && Wo(e)
                          ? (null == a ||
                              a.log(
                                "Enriching campaign event to page view event with campaign parameters"
                              ),
                            [4, c()])
                          : [3, 2];
                      case 1:
                        (t = n.sent()),
                          (e.event_type = t.event_type),
                          (e.event_properties = Pi(
                            Pi({}, e.event_properties),
                            t.event_properties
                          )),
                          (n.label = 2);
                      case 2:
                        return [2, e];
                    }
                  });
                });
              },
              teardown: function () {
                return Ri(void 0, void 0, void 0, function () {
                  return Ni(this, function (e) {
                    return (
                      o &&
                        (o.removeEventListener("popstate", h),
                        r && (o.history.pushState = r)),
                      [2]
                    );
                  });
                });
              },
            };
          return (v.__trackHistoryPageView = p), v;
        },
        qo = function () {
          return Ri(void 0, void 0, void 0, function () {
            var e;
            return Ni(this, function (t) {
              switch (t.label) {
                case 0:
                  return (e = Bo), [4, new Fo().parse()];
                case 1:
                  return [2, e.apply(void 0, [t.sent()])];
              }
            });
          });
        },
        Wo = function (e) {
          if ("$identify" === e.event_type && e.user_properties) {
            var t = e.user_properties,
              n = t[go.SET] || {},
              r = t[go.UNSET] || {},
              i = zi(zi([], Li(Object.keys(n)), !1), Li(Object.keys(r)), !1);
            return Object.keys(Uo).every(function (e) {
              return i.includes(e);
            });
          }
          return !1;
        },
        Ho = function (e, t, n) {
          return "pathOnly" === e
            ? t.split("?")[0] !== n.split("?")[0]
            : t !== n;
        },
        Ko = function (e) {
          var t = e.split(".");
          return t.length <= 2 ? e : t.slice(t.length - 2, t.length).join(".");
        };
      !(function (e) {
        (e.XHR = "xhr"), (e.SendBeacon = "beacon"), (e.Fetch = "fetch");
      })(_o || (_o = {}));
      var Qo = (function () {
          function e() {
            this.memoryStorage = new Map();
          }
          return (
            (e.prototype.isEnabled = function () {
              return Ri(this, void 0, void 0, function () {
                return Ni(this, function (e) {
                  return [2, !0];
                });
              });
            }),
            (e.prototype.get = function (e) {
              return Ri(this, void 0, void 0, function () {
                return Ni(this, function (t) {
                  return [2, this.memoryStorage.get(e)];
                });
              });
            }),
            (e.prototype.getRaw = function (e) {
              return Ri(this, void 0, void 0, function () {
                var t;
                return Ni(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [4, this.get(e)];
                    case 1:
                      return [2, (t = n.sent()) ? JSON.stringify(t) : void 0];
                  }
                });
              });
            }),
            (e.prototype.set = function (e, t) {
              return Ri(this, void 0, void 0, function () {
                return Ni(this, function (n) {
                  return this.memoryStorage.set(e, t), [2];
                });
              });
            }),
            (e.prototype.remove = function (e) {
              return Ri(this, void 0, void 0, function () {
                return Ni(this, function (t) {
                  return this.memoryStorage.delete(e), [2];
                });
              });
            }),
            (e.prototype.reset = function () {
              return Ri(this, void 0, void 0, function () {
                return Ni(this, function (e) {
                  return this.memoryStorage.clear(), [2];
                });
              });
            }),
            e
          );
        })(),
        Go = (function () {
          function e() {}
          return (
            (e.prototype.send = function (e, t) {
              return Promise.resolve(null);
            }),
            (e.prototype.buildResponse = function (e) {
              var t,
                n,
                r,
                i,
                o,
                a,
                u,
                l,
                s,
                c,
                f,
                d,
                p,
                h,
                v,
                g,
                m,
                y,
                b,
                w,
                _,
                k;
              if ("object" != typeof e) return null;
              var x = e.code || 0,
                S = this.buildStatus(x);
              switch (S) {
                case ro.Success:
                  return {
                    status: S,
                    statusCode: x,
                    body: {
                      eventsIngested:
                        null !== (t = e.events_ingested) && void 0 !== t
                          ? t
                          : 0,
                      payloadSizeBytes:
                        null !== (n = e.payload_size_bytes) && void 0 !== n
                          ? n
                          : 0,
                      serverUploadTime:
                        null !== (r = e.server_upload_time) && void 0 !== r
                          ? r
                          : 0,
                    },
                  };
                case ro.Invalid:
                  return {
                    status: S,
                    statusCode: x,
                    body: {
                      error: null !== (i = e.error) && void 0 !== i ? i : "",
                      missingField:
                        null !== (o = e.missing_field) && void 0 !== o ? o : "",
                      eventsWithInvalidFields:
                        null !== (a = e.events_with_invalid_fields) &&
                        void 0 !== a
                          ? a
                          : {},
                      eventsWithMissingFields:
                        null !== (u = e.events_with_missing_fields) &&
                        void 0 !== u
                          ? u
                          : {},
                      eventsWithInvalidIdLengths:
                        null !== (l = e.events_with_invalid_id_lengths) &&
                        void 0 !== l
                          ? l
                          : {},
                      epsThreshold:
                        null !== (s = e.eps_threshold) && void 0 !== s ? s : 0,
                      exceededDailyQuotaDevices:
                        null !== (c = e.exceeded_daily_quota_devices) &&
                        void 0 !== c
                          ? c
                          : {},
                      silencedDevices:
                        null !== (f = e.silenced_devices) && void 0 !== f
                          ? f
                          : [],
                      silencedEvents:
                        null !== (d = e.silenced_events) && void 0 !== d
                          ? d
                          : [],
                      throttledDevices:
                        null !== (p = e.throttled_devices) && void 0 !== p
                          ? p
                          : {},
                      throttledEvents:
                        null !== (h = e.throttled_events) && void 0 !== h
                          ? h
                          : [],
                    },
                  };
                case ro.PayloadTooLarge:
                  return {
                    status: S,
                    statusCode: x,
                    body: {
                      error: null !== (v = e.error) && void 0 !== v ? v : "",
                    },
                  };
                case ro.RateLimit:
                  return {
                    status: S,
                    statusCode: x,
                    body: {
                      error: null !== (g = e.error) && void 0 !== g ? g : "",
                      epsThreshold:
                        null !== (m = e.eps_threshold) && void 0 !== m ? m : 0,
                      throttledDevices:
                        null !== (y = e.throttled_devices) && void 0 !== y
                          ? y
                          : {},
                      throttledUsers:
                        null !== (b = e.throttled_users) && void 0 !== b
                          ? b
                          : {},
                      exceededDailyQuotaDevices:
                        null !== (w = e.exceeded_daily_quota_devices) &&
                        void 0 !== w
                          ? w
                          : {},
                      exceededDailyQuotaUsers:
                        null !== (_ = e.exceeded_daily_quota_users) &&
                        void 0 !== _
                          ? _
                          : {},
                      throttledEvents:
                        null !== (k = e.throttled_events) && void 0 !== k
                          ? k
                          : [],
                    },
                  };
                case ro.Timeout:
                default:
                  return { status: S, statusCode: x };
              }
            }),
            (e.prototype.buildStatus = function (e) {
              return e >= 200 && e < 300
                ? ro.Success
                : 429 === e
                ? ro.RateLimit
                : 413 === e
                ? ro.PayloadTooLarge
                : 408 === e
                ? ro.Timeout
                : e >= 400 && e < 500
                ? ro.Invalid
                : e >= 500
                ? ro.Failed
                : ro.Unknown;
            }),
            e
          );
        })(),
        Yo = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Ci(t, e),
            (t.prototype.send = function (e, t) {
              return Ri(this, void 0, void 0, function () {
                var n, r;
                return Ni(this, function (i) {
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
                          body: JSON.stringify(t),
                          method: "POST",
                        }),
                        [4, fetch(e, n)]
                      );
                    case 1:
                      return [4, i.sent().json()];
                    case 2:
                      return (r = i.sent()), [2, this.buildResponse(r)];
                  }
                });
              });
            }),
            t
          );
        })(Go),
        Xo = (function () {
          function e(e) {
            this.options = Pi({}, e);
          }
          return (
            (e.prototype.isEnabled = function () {
              return Ri(this, void 0, void 0, function () {
                var t, n;
                return Ni(this, function (r) {
                  switch (r.label) {
                    case 0:
                      if (!qi()) return [2, !1];
                      (e.testValue = String(Date.now())),
                        (t = new e(this.options)),
                        (n = "AMP_TEST"),
                        (r.label = 1);
                    case 1:
                      return (
                        r.trys.push([1, 4, 5, 7]), [4, t.set(n, e.testValue)]
                      );
                    case 2:
                      return r.sent(), [4, t.get(n)];
                    case 3:
                      return [2, r.sent() === e.testValue];
                    case 4:
                      return r.sent(), [2, !1];
                    case 5:
                      return [4, t.remove(n)];
                    case 6:
                      return r.sent(), [7];
                    case 7:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.get = function (e) {
              return Ri(this, void 0, void 0, function () {
                var t;
                return Ni(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [4, this.getRaw(e)];
                    case 1:
                      if (!(t = n.sent())) return [2, void 0];
                      try {
                        try {
                          t = decodeURIComponent(atob(t));
                        } catch (e) {}
                        return [2, JSON.parse(t)];
                      } catch (e) {
                        return [2, void 0];
                      }
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.getRaw = function (e) {
              var t;
              return Ri(this, void 0, void 0, function () {
                var n, r, i;
                return Ni(this, function (o) {
                  return (
                    (n = qi()),
                    (r =
                      null !==
                        (t =
                          null == n ? void 0 : n.document.cookie.split("; ")) &&
                      void 0 !== t
                        ? t
                        : []),
                    (i = r.find(function (t) {
                      return 0 === t.indexOf(e + "=");
                    }))
                      ? [2, i.substring(e.length + 1)]
                      : [2, void 0]
                  );
                });
              });
            }),
            (e.prototype.set = function (e, t) {
              var n;
              return Ri(this, void 0, void 0, function () {
                var r, i, o, a, u, l;
                return Ni(this, function (s) {
                  try {
                    (r =
                      null !== (n = this.options.expirationDays) && void 0 !== n
                        ? n
                        : 0),
                      (o = void 0),
                      (i = null !== t ? r : -1) &&
                        ((a = new Date()).setTime(
                          a.getTime() + 24 * i * 60 * 60 * 1e3
                        ),
                        (o = a)),
                      (u = ""
                        .concat(e, "=")
                        .concat(btoa(encodeURIComponent(JSON.stringify(t))))),
                      o && (u += "; expires=".concat(o.toUTCString())),
                      (u += "; path=/"),
                      this.options.domain &&
                        (u += "; domain=".concat(this.options.domain)),
                      this.options.secure && (u += "; Secure"),
                      this.options.sameSite &&
                        (u += "; SameSite=".concat(this.options.sameSite)),
                      (l = qi()) && (l.document.cookie = u);
                  } catch (e) {}
                  return [2];
                });
              });
            }),
            (e.prototype.remove = function (e) {
              return Ri(this, void 0, void 0, function () {
                return Ni(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return [4, this.set(e, null)];
                    case 1:
                      return t.sent(), [2];
                  }
                });
              });
            }),
            (e.prototype.reset = function () {
              return Ri(this, void 0, void 0, function () {
                return Ni(this, function (e) {
                  return [2];
                });
              });
            }),
            e
          );
        })(),
        Zo = 1e3,
        Jo = (function () {
          function e(e) {
            this.loggerProvider = null == e ? void 0 : e.loggerProvider;
          }
          return (
            (e.prototype.isEnabled = function () {
              return Ri(this, void 0, void 0, function () {
                var t, n, r;
                return Ni(this, function (i) {
                  switch (i.label) {
                    case 0:
                      if (!qi()) return [2, !1];
                      (t = String(Date.now())),
                        (n = new e()),
                        (r = "AMP_TEST"),
                        (i.label = 1);
                    case 1:
                      return i.trys.push([1, 4, 5, 7]), [4, n.set(r, t)];
                    case 2:
                      return i.sent(), [4, n.get(r)];
                    case 3:
                      return [2, i.sent() === t];
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
            (e.prototype.get = function (e) {
              return Ri(this, void 0, void 0, function () {
                var t;
                return Ni(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return n.trys.push([0, 2, , 3]), [4, this.getRaw(e)];
                    case 1:
                      return (t = n.sent()) ? [2, JSON.parse(t)] : [2, void 0];
                    case 2:
                      return n.sent(), [2, void 0];
                    case 3:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.getRaw = function (e) {
              var t;
              return Ri(this, void 0, void 0, function () {
                return Ni(this, function (n) {
                  return [
                    2,
                    (null === (t = qi()) || void 0 === t
                      ? void 0
                      : t.localStorage.getItem(e)) || void 0,
                  ];
                });
              });
            }),
            (e.prototype.set = function (e, t) {
              var n, r;
              return Ri(this, void 0, void 0, function () {
                var i, o, a;
                return Ni(this, function (u) {
                  i = Array.isArray(t) && t.length > Zo;
                  try {
                    (o = i
                      ? JSON.stringify(t.slice(0, Zo))
                      : JSON.stringify(t)),
                      null === (n = qi()) ||
                        void 0 === n ||
                        n.localStorage.setItem(e, o);
                  } catch (e) {}
                  return (
                    i &&
                      ((a = t.length - Zo),
                      null === (r = this.loggerProvider) ||
                        void 0 === r ||
                        r.error(
                          "Failed to save "
                            .concat(
                              a,
                              " events because the queue length exceeded "
                            )
                            .concat(Zo, ".")
                        )),
                    [2]
                  );
                });
              });
            }),
            (e.prototype.remove = function (e) {
              var t;
              return Ri(this, void 0, void 0, function () {
                return Ni(this, function (n) {
                  try {
                    null === (t = qi()) ||
                      void 0 === t ||
                      t.localStorage.removeItem(e);
                  } catch (e) {}
                  return [2];
                });
              });
            }),
            (e.prototype.reset = function () {
              var e;
              return Ri(this, void 0, void 0, function () {
                return Ni(this, function (t) {
                  try {
                    null === (e = qi()) ||
                      void 0 === e ||
                      e.localStorage.clear();
                  } catch (e) {}
                  return [2];
                });
              });
            }),
            e
          );
        })(),
        ea = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (t.state = { done: 4 }), t;
          }
          return (
            Ci(t, e),
            (t.prototype.send = function (e, t) {
              return Ri(this, void 0, void 0, function () {
                var n = this;
                return Ni(this, function (r) {
                  return [
                    2,
                    new Promise(function (r, i) {
                      "undefined" == typeof XMLHttpRequest &&
                        i(new Error("XHRTransport is not supported."));
                      var o = new XMLHttpRequest();
                      o.open("POST", e, !0),
                        (o.onreadystatechange = function () {
                          if (o.readyState === n.state.done)
                            try {
                              var e = o.responseText,
                                t = JSON.parse(e),
                                a = n.buildResponse(t);
                              r(a);
                            } catch (e) {
                              i(e);
                            }
                        }),
                        o.setRequestHeader("Content-Type", "application/json"),
                        o.setRequestHeader("Accept", "*/*"),
                        o.send(JSON.stringify(t));
                    }),
                  ];
                });
              });
            }),
            t
          );
        })(Go),
        ta = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Ci(t, e),
            (t.prototype.send = function (e, t) {
              return Ri(this, void 0, void 0, function () {
                var n = this;
                return Ni(this, function (r) {
                  return [
                    2,
                    new Promise(function (r, i) {
                      var o = qi();
                      if (!(null == o ? void 0 : o.navigator.sendBeacon))
                        throw new Error("SendBeaconTransport is not supported");
                      try {
                        var a = JSON.stringify(t);
                        return r(
                          o.navigator.sendBeacon(e, JSON.stringify(t))
                            ? n.buildResponse({
                                code: 200,
                                events_ingested: t.events.length,
                                payload_size_bytes: a.length,
                                server_upload_time: Date.now(),
                              })
                            : n.buildResponse({ code: 500 })
                        );
                      } catch (e) {
                        i(e);
                      }
                    }),
                  ];
                });
              });
            }),
            t
          );
        })(Go),
        na = function () {
          return {
            cookieExpiration: 365,
            cookieSameSite: "Lax",
            cookieSecure: !1,
            cookieStorage: new Qo(),
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
            transportProvider: new Yo(),
          };
        },
        ra = (function (e) {
          function t(t, n) {
            var r,
              i,
              o,
              a,
              u,
              l,
              s,
              c,
              f,
              d = this,
              p = na();
            return (
              ((d =
                e.call(
                  this,
                  Pi(
                    Pi(
                      {
                        flushIntervalMillis: 1e3,
                        flushMaxRetries: 5,
                        flushQueueSize: 30,
                        transportProvider: p.transportProvider,
                      },
                      n
                    ),
                    { apiKey: t }
                  )
                ) || this)._optOut = !1),
              (d.cookieStorage =
                null !== (r = null == n ? void 0 : n.cookieStorage) &&
                void 0 !== r
                  ? r
                  : p.cookieStorage),
              (d.deviceId = null == n ? void 0 : n.deviceId),
              (d.lastEventId = null == n ? void 0 : n.lastEventId),
              (d.lastEventTime = null == n ? void 0 : n.lastEventTime),
              (d.optOut = Boolean(null == n ? void 0 : n.optOut)),
              (d.sessionId = null == n ? void 0 : n.sessionId),
              (d.userId = null == n ? void 0 : n.userId),
              (d.appVersion = null == n ? void 0 : n.appVersion),
              (d.attribution = null == n ? void 0 : n.attribution),
              (d.cookieExpiration =
                null !== (i = null == n ? void 0 : n.cookieExpiration) &&
                void 0 !== i
                  ? i
                  : p.cookieExpiration),
              (d.cookieSameSite =
                null !== (o = null == n ? void 0 : n.cookieSameSite) &&
                void 0 !== o
                  ? o
                  : p.cookieSameSite),
              (d.cookieSecure =
                null !== (a = null == n ? void 0 : n.cookieSecure) &&
                void 0 !== a
                  ? a
                  : p.cookieSecure),
              (d.cookieUpgrade =
                null !== (u = null == n ? void 0 : n.cookieUpgrade) &&
                void 0 !== u
                  ? u
                  : p.cookieUpgrade),
              (d.defaultTracking = null == n ? void 0 : n.defaultTracking),
              (d.disableCookies =
                null !== (l = null == n ? void 0 : n.disableCookies) &&
                void 0 !== l
                  ? l
                  : p.disableCookies),
              (d.defaultTracking = null == n ? void 0 : n.defaultTracking),
              (d.domain =
                null !== (s = null == n ? void 0 : n.domain) && void 0 !== s
                  ? s
                  : p.domain),
              (d.partnerId = null == n ? void 0 : n.partnerId),
              (d.sessionTimeout =
                null !== (c = null == n ? void 0 : n.sessionTimeout) &&
                void 0 !== c
                  ? c
                  : p.sessionTimeout),
              (d.trackingOptions =
                null !== (f = null == n ? void 0 : n.trackingOptions) &&
                void 0 !== f
                  ? f
                  : p.trackingOptions),
              d
            );
          }
          return (
            Ci(t, e),
            Object.defineProperty(t.prototype, "deviceId", {
              get: function () {
                return this._deviceId;
              },
              set: function (e) {
                this._deviceId !== e &&
                  ((this._deviceId = e), this.updateStorage());
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "userId", {
              get: function () {
                return this._userId;
              },
              set: function (e) {
                this._userId !== e &&
                  ((this._userId = e), this.updateStorage());
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "sessionId", {
              get: function () {
                return this._sessionId;
              },
              set: function (e) {
                this._sessionId !== e &&
                  ((this._sessionId = e), this.updateStorage());
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "optOut", {
              get: function () {
                return this._optOut;
              },
              set: function (e) {
                this._optOut !== e &&
                  ((this._optOut = e), this.updateStorage());
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "lastEventTime", {
              get: function () {
                return this._lastEventTime;
              },
              set: function (e) {
                this._lastEventTime !== e &&
                  ((this._lastEventTime = e), this.updateStorage());
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "lastEventId", {
              get: function () {
                return this._lastEventId;
              },
              set: function (e) {
                this._lastEventId !== e &&
                  ((this._lastEventId = e), this.updateStorage());
              },
              enumerable: !1,
              configurable: !0,
            }),
            (t.prototype.updateStorage = function () {
              var e,
                t = {
                  deviceId: this._deviceId,
                  userId: this._userId,
                  sessionId: this._sessionId,
                  optOut: this._optOut,
                  lastEventTime: this._lastEventTime,
                  lastEventId: this._lastEventId,
                };
              null === (e = this.cookieStorage) ||
                void 0 === e ||
                e.set(Vi(this.apiKey), t);
            }),
            t
          );
        })(fo),
        ia = function (e, t) {
          return Ri(void 0, void 0, void 0, function () {
            var n, r, i, o, a, u, l, s, c, f, d, p, h, v, g;
            return Ni(this, function (m) {
              switch (m.label) {
                case 0:
                  return (
                    (n = na()),
                    (r =
                      null !== (v = null == t ? void 0 : t.deviceId) &&
                      void 0 !== v
                        ? v
                        : wo()),
                    (i = null == t ? void 0 : t.lastEventId),
                    (o = null == t ? void 0 : t.lastEventTime),
                    (a = null == t ? void 0 : t.optOut),
                    (u = null == t ? void 0 : t.sessionId),
                    (l = null == t ? void 0 : t.userId),
                    (s = null == t ? void 0 : t.cookieStorage),
                    (c = null == t ? void 0 : t.domain),
                    (f = ra.bind),
                    (d = [void 0, e]),
                    (p = [Pi({}, t)]),
                    (h = {
                      cookieStorage: s,
                      deviceId: r,
                      domain: c,
                      lastEventId: i,
                      lastEventTime: o,
                      optOut: a,
                      sessionId: u,
                    }),
                    [4, ua(t)]
                  );
                case 1:
                  return [
                    2,
                    new (f.apply(
                      ra,
                      d.concat([
                        Pi.apply(
                          void 0,
                          p.concat([
                            ((h.storageProvider = m.sent()),
                            (h.trackingOptions = Pi(
                              Pi({}, n.trackingOptions),
                              null == t ? void 0 : t.trackingOptions
                            )),
                            (h.transportProvider =
                              null !==
                                (g =
                                  null == t ? void 0 : t.transportProvider) &&
                              void 0 !== g
                                ? g
                                : la(null == t ? void 0 : t.transport)),
                            (h.userId = l),
                            h),
                          ])
                        ),
                      ])
                    ))(),
                  ];
              }
            });
          });
        },
        oa = function (e, t) {
          return (
            void 0 === t && (t = na()),
            Ri(void 0, void 0, void 0, function () {
              var n, r, i;
              return Ni(this, function (o) {
                switch (o.label) {
                  case 0:
                    return (
                      (n = Pi(Pi({}, t), e)),
                      (r = null == e ? void 0 : e.cookieStorage),
                      (i = !r) ? [3, 2] : [4, r.isEnabled()]
                    );
                  case 1:
                    (i = !o.sent()), (o.label = 2);
                  case 2:
                    return i ? [2, aa(n)] : [2, r];
                }
              });
            })
          );
        },
        aa = function (e) {
          return Ri(void 0, void 0, void 0, function () {
            var t, n;
            return Ni(this, function (r) {
              switch (r.label) {
                case 0:
                  return (
                    (t = new Xo({
                      domain: e.domain,
                      expirationDays: e.cookieExpiration,
                      sameSite: e.cookieSameSite,
                      secure: e.cookieSecure,
                    })),
                    (n = e.disableCookies) ? [3, 2] : [4, t.isEnabled()]
                  );
                case 1:
                  (n = !r.sent()), (r.label = 2);
                case 2:
                  return n ? [4, (t = new Jo()).isEnabled()] : [3, 4];
                case 3:
                  r.sent() || (t = new Qo()), (r.label = 4);
                case 4:
                  return [2, t];
              }
            });
          });
        },
        ua = function (e) {
          return Ri(void 0, void 0, void 0, function () {
            var t, n, r, i, o, a, u, l, s;
            return Ni(this, function (c) {
              switch (c.label) {
                case 0:
                  if (
                    ((t =
                      e &&
                      Object.prototype.hasOwnProperty.call(
                        e,
                        "storageProvider"
                      )),
                    (n = e && e.loggerProvider),
                    t && !e.storageProvider)
                  )
                    return [3, 9];
                  c.label = 1;
                case 1:
                  c.trys.push([1, 7, 8, 9]),
                    (r = Ai([
                      null == e ? void 0 : e.storageProvider,
                      new Jo({ loggerProvider: n }),
                    ])),
                    (i = r.next()),
                    (c.label = 2);
                case 2:
                  return i.done
                    ? [3, 6]
                    : ((o = i.value), (a = o) ? [4, o.isEnabled()] : [3, 4]);
                case 3:
                  (a = c.sent()), (c.label = 4);
                case 4:
                  if (a) return [2, o];
                  c.label = 5;
                case 5:
                  return (i = r.next()), [3, 2];
                case 6:
                  return [3, 9];
                case 7:
                  return (u = c.sent()), (l = { error: u }), [3, 9];
                case 8:
                  try {
                    i && !i.done && (s = r.return) && s.call(r);
                  } finally {
                    if (l) throw l.error;
                  }
                  return [7];
                case 9:
                  return [2, void 0];
              }
            });
          });
        },
        la = function (e) {
          return e === _o.XHR
            ? new ea()
            : e === _o.SendBeacon
            ? new ta()
            : na().transportProvider;
        },
        sa = "[Amplitude]",
        ca = "".concat(sa, " Page Viewed"),
        fa = "".concat(sa, " Form Started"),
        da = "".concat(sa, " Form Submitted"),
        pa = "".concat(sa, " File Downloaded"),
        ha = "session_start",
        va = "session_end",
        ga = "".concat(sa, " File Extension"),
        ma = "".concat(sa, " File Name"),
        ya = "".concat(sa, " Link ID"),
        ba = "".concat(sa, " Link Text"),
        wa = "".concat(sa, " Link URL"),
        _a = "".concat(sa, " Form ID"),
        ka = "".concat(sa, " Form Name"),
        xa = "".concat(sa, " Form Destination"),
        Sa = function (e, t) {
          return Ri(void 0, void 0, void 0, function () {
            var n, r, i, o, a, u, l, s, c, f, d;
            return Ni(this, function (p) {
              switch (p.label) {
                case 0:
                  return [4, oa(t)];
                case 1:
                  return (
                    (n = p.sent()),
                    (r = (function (e) {
                      return ""
                        .concat(Ui.toLowerCase(), "_")
                        .concat(e.substring(0, 6));
                    })(e)),
                    [4, n.getRaw(r)]
                  );
                case 2:
                  return (i = p.sent())
                    ? (
                        null !== (d = t.cookieUpgrade) && void 0 !== d
                          ? d
                          : na().cookieUpgrade
                      )
                      ? [4, n.remove(r)]
                      : [3, 4]
                    : [2, { optOut: !1 }];
                case 3:
                  p.sent(), (p.label = 4);
                case 4:
                  return (
                    (o = Li(i.split("."), 6)),
                    (a = o[0]),
                    (u = o[1]),
                    (l = o[2]),
                    (s = o[3]),
                    (c = o[4]),
                    (f = o[5]),
                    [
                      2,
                      {
                        deviceId: a,
                        userId: Oa(u),
                        sessionId: Ea(s),
                        lastEventId: Ea(f),
                        lastEventTime: Ea(c),
                        optOut: Boolean(l),
                      },
                    ]
                  );
              }
            });
          });
        },
        Ea = function (e) {
          var t = parseInt(e, 32);
          if (!isNaN(t)) return t;
        },
        Oa = function (e) {
          if (atob && escape && e)
            try {
              return decodeURIComponent(escape(atob(e)));
            } catch (e) {
              return;
            }
        },
        Ca = i(9293),
        Ta = i.n(Ca),
        Pa = function () {
          var e, t, n, r;
          if ("undefined" == typeof navigator) return "";
          var i = navigator.userLanguage;
          return null !==
            (r =
              null !==
                (n =
                  null !==
                    (t =
                      null === (e = navigator.languages) || void 0 === e
                        ? void 0
                        : e[0]) && void 0 !== t
                    ? t
                    : navigator.language) && void 0 !== n
                ? n
                : i) && void 0 !== r
            ? r
            : "";
        },
        Ia = (function () {
          function e() {
            (this.name = "context"),
              (this.type = Zi.BEFORE),
              (this.library = "amplitude-ts/".concat("1.13.0")),
              "undefined" != typeof navigator &&
                (this.userAgent = navigator.userAgent),
              (this.uaResult = new (Ta())(this.userAgent).getResult());
          }
          return (
            (e.prototype.setup = function (e) {
              return (this.config = e), Promise.resolve(void 0);
            }),
            (e.prototype.execute = function (e) {
              var t, n;
              return Ri(this, void 0, void 0, function () {
                var r, i, o, a, u, l, s;
                return Ni(this, function (c) {
                  return (
                    (r = new Date().getTime()),
                    (i = this.uaResult.browser.name),
                    (o = this.uaResult.browser.version),
                    (a = this.uaResult.device.model || this.uaResult.os.name),
                    (u = this.uaResult.device.vendor),
                    (l =
                      null !== (t = this.config.lastEventId) && void 0 !== t
                        ? t
                        : -1),
                    (s = null !== (n = e.event_id) && void 0 !== n ? n : l + 1),
                    (this.config.lastEventId = s),
                    e.time || (this.config.lastEventTime = r),
                    [
                      2,
                      Pi(
                        Pi(
                          Pi(
                            Pi(
                              Pi(
                                Pi(
                                  Pi(
                                    Pi(
                                      Pi(
                                        Pi(
                                          Pi(
                                            Pi(
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
                                        device_manufacturer: u,
                                      }
                                    ),
                                    this.config.trackingOptions.deviceModel && {
                                      device_model: a,
                                    }
                                  ),
                                  this.config.trackingOptions.language && {
                                    language: Pa(),
                                  }
                                ),
                                this.config.trackingOptions.ipAddress && {
                                  ip: "$remote",
                                }
                              ),
                              {
                                insert_id: wo(),
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
                          e
                        ),
                        {
                          event_id: s,
                          library: this.library,
                          user_agent: this.userAgent,
                        }
                      ),
                    ]
                  );
                });
              });
            }),
            e
          );
        })(),
        Ra = {
          page_domain: "".concat(sa, " Page Domain"),
          page_location: "".concat(sa, " Page Location"),
          page_path: "".concat(sa, " Page Path"),
          page_title: "".concat(sa, " Page Title"),
          page_url: "".concat(sa, " Page URL"),
        },
        Na = function () {
          var e,
            t = [],
            n = function (e, n, r) {
              e.addEventListener(n, r),
                t.push({ element: e, type: n, handler: r });
            };
          return {
            name: "@amplitude/plugin-form-interaction-tracking-browser",
            type: Zi.ENRICHMENT,
            setup: function (t, r) {
              return Ri(void 0, void 0, void 0, function () {
                var i;
                return Ni(this, function (o) {
                  return r
                    ? ("undefined" == typeof document ||
                        ((i = function (e) {
                          var t = !1;
                          n(e, "change", function () {
                            var n;
                            t ||
                              r.track(
                                fa,
                                (((n = {})[_a] = e.id),
                                (n[ka] = e.name),
                                (n[xa] = e.action),
                                n)
                              ),
                              (t = !0);
                          }),
                            n(e, "submit", function () {
                              var n, i;
                              t ||
                                r.track(
                                  fa,
                                  (((n = {})[_a] = e.id),
                                  (n[ka] = e.name),
                                  (n[xa] = e.action),
                                  n)
                                ),
                                r.track(
                                  da,
                                  (((i = {})[_a] = e.id),
                                  (i[ka] = e.name),
                                  (i[xa] = e.action),
                                  i)
                                ),
                                (t = !1);
                            });
                        }),
                        Array.from(
                          document.getElementsByTagName("form")
                        ).forEach(i),
                        "undefined" != typeof MutationObserver &&
                          ((e = new MutationObserver(function (e) {
                            e.forEach(function (e) {
                              e.addedNodes.forEach(function (e) {
                                "FORM" === e.nodeName && i(e),
                                  "querySelectorAll" in e &&
                                    "function" == typeof e.querySelectorAll &&
                                    Array.from(e.querySelectorAll("form")).map(
                                      i
                                    );
                              });
                            });
                          })),
                          e.observe(document.body, {
                            subtree: !0,
                            childList: !0,
                          }))),
                      [2])
                    : (t.loggerProvider.warn(
                        "Form interaction tracking requires a later version of @amplitude/analytics-browser. Form interaction events are not tracked."
                      ),
                      [2]);
                });
              });
            },
            execute: function (e) {
              return Ri(void 0, void 0, void 0, function () {
                return Ni(this, function (t) {
                  return [2, e];
                });
              });
            },
            teardown: function () {
              return Ri(void 0, void 0, void 0, function () {
                return Ni(this, function (n) {
                  return (
                    null == e || e.disconnect(),
                    t.forEach(function (e) {
                      var t = e.element,
                        n = e.type,
                        r = e.handler;
                      null == t || t.removeEventListener(n, r);
                    }),
                    (t = []),
                    [2]
                  );
                });
              });
            },
          };
        },
        Aa = function (e, t) {
          La(e, t);
        },
        La = function (e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n],
              i = r.name,
              o = r.args,
              a = r.resolve,
              u = e && e[i];
            if ("function" == typeof u) {
              var l = u.apply(e, o);
              "function" == typeof a && a(null == l ? void 0 : l.promise);
            }
          }
          return e;
        },
        za = function (e) {
          return e && void 0 !== e._q;
        },
        ja = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            Ci(t, e),
            (t.prototype.init = function (e, t, n) {
              return (
                void 0 === e && (e = ""),
                oo(this._init(Pi(Pi({}, n), { userId: t, apiKey: e })))
              );
            }),
            (t.prototype._init = function (t) {
              var n, r, i, o, a, u, l, s, c, f, d, p, h, v, g, m, y, b, w, _;
              return Ri(this, void 0, void 0, function () {
                var k,
                  x,
                  S,
                  E,
                  O,
                  C,
                  T,
                  P,
                  I,
                  R,
                  N,
                  A,
                  L,
                  z,
                  j,
                  M,
                  $,
                  D,
                  U = this;
                return Ni(this, function (F) {
                  switch (F.label) {
                    case 0:
                      return this.initializing
                        ? [2]
                        : ((this.initializing = !0),
                          (k = t),
                          t.disableCookies ? ((x = ""), [3, 5]) : [3, 1]);
                    case 1:
                      return null === (n = t.domain) || void 0 === n
                        ? [3, 2]
                        : ((S = n), [3, 4]);
                    case 2:
                      return [
                        4,
                        Ri(void 0, void 0, void 0, function () {
                          var e, t, n, r, i, o, a;
                          return Ni(this, function (u) {
                            switch (u.label) {
                              case 0:
                                return [4, new Xo().isEnabled()];
                              case 1:
                                if (!u.sent() || "undefined" == typeof location)
                                  return [2, ""];
                                for (
                                  e = location.hostname,
                                    t = e.split("."),
                                    n = [],
                                    r = "AMP_TLDTEST",
                                    i = t.length - 2;
                                  i >= 0;
                                  --i
                                )
                                  n.push(t.slice(i).join("."));
                                (i = 0), (u.label = 2);
                              case 2:
                                return i < n.length
                                  ? ((o = n[i]),
                                    [
                                      4,
                                      (a = new Xo({ domain: "." + o })).set(
                                        r,
                                        1
                                      ),
                                    ])
                                  : [3, 7];
                              case 3:
                                return u.sent(), [4, a.get(r)];
                              case 4:
                                return u.sent() ? [4, a.remove(r)] : [3, 6];
                              case 5:
                                return u.sent(), [2, "." + o];
                              case 6:
                                return i++, [3, 2];
                              case 7:
                                return [2, ""];
                            }
                          });
                        }),
                      ];
                    case 3:
                      (S = F.sent()), (F.label = 4);
                    case 4:
                      (x = S), (F.label = 5);
                    case 5:
                      return (k.domain = x), [4, Sa(t.apiKey, t)];
                    case 6:
                      return (E = F.sent()), [4, oa(t)];
                    case 7:
                      return [4, (O = F.sent()).get(Vi(t.apiKey))];
                    case 8:
                      return (
                        (C = F.sent()),
                        (T = Wi()),
                        (P =
                          null !==
                            (o =
                              null !==
                                (i =
                                  null !== (r = t.deviceId) && void 0 !== r
                                    ? r
                                    : T.deviceId) && void 0 !== i
                                ? i
                                : null == C
                                ? void 0
                                : C.deviceId) && void 0 !== o
                            ? o
                            : E.deviceId),
                        (I =
                          null !== (a = null == C ? void 0 : C.sessionId) &&
                          void 0 !== a
                            ? a
                            : E.sessionId),
                        (R =
                          null !==
                            (l =
                              null !== (u = t.optOut) && void 0 !== u
                                ? u
                                : null == C
                                ? void 0
                                : C.optOut) && void 0 !== l
                            ? l
                            : E.optOut),
                        (N =
                          null !== (s = null == C ? void 0 : C.lastEventId) &&
                          void 0 !== s
                            ? s
                            : E.lastEventId),
                        (A =
                          null !== (c = null == C ? void 0 : C.lastEventTime) &&
                          void 0 !== c
                            ? c
                            : E.lastEventTime),
                        (L =
                          null !==
                            (d =
                              null !== (f = t.userId) && void 0 !== f
                                ? f
                                : null == C
                                ? void 0
                                : C.userId) && void 0 !== d
                            ? d
                            : E.userId),
                        (this.previousSessionDeviceId =
                          null !== (p = null == C ? void 0 : C.deviceId) &&
                          void 0 !== p
                            ? p
                            : E.deviceId),
                        (this.previousSessionUserId =
                          null !== (h = null == C ? void 0 : C.userId) &&
                          void 0 !== h
                            ? h
                            : E.userId),
                        [
                          4,
                          ia(
                            t.apiKey,
                            Pi(Pi({}, t), {
                              deviceId: P,
                              sessionId: I,
                              optOut: R,
                              lastEventId: N,
                              lastEventTime: A,
                              userId: L,
                              cookieStorage: O,
                            })
                          ),
                        ]
                      );
                    case 9:
                      return (
                        (z = F.sent()), [4, e.prototype._init.call(this, z)]
                      );
                    case 10:
                      return (
                        F.sent(),
                        (j = !1),
                        (!this.config.lastEventTime ||
                          !this.config.sessionId ||
                          (this.config.lastEventTime &&
                            Date.now() - this.config.lastEventTime >
                              this.config.sessionTimeout)) &&
                          (this.setSessionId(
                            null !==
                              (g =
                                null !== (v = t.sessionId) && void 0 !== v
                                  ? v
                                  : this.config.sessionId) && void 0 !== g
                              ? g
                              : Date.now()
                          ),
                          (j = !0)),
                        (M = no(t.instanceName)).identityStore.setIdentity({
                          userId: this.config.userId,
                          deviceId: this.config.deviceId,
                        }),
                        [4, this.add(new bo()).promise]
                      );
                    case 11:
                      return F.sent(), [4, this.add(new Ia()).promise];
                    case 12:
                      return F.sent(), [4, this.add(new io()).promise];
                    case 13:
                      return (
                        F.sent(),
                        (
                          "boolean" == typeof (q = this.config.defaultTracking)
                            ? q
                            : null == q
                            ? void 0
                            : q.fileDownloads
                        )
                          ? [
                              4,
                              this.add(
                                ((V = []),
                                {
                                  name: "@amplitude/plugin-file-download-tracking-browser",
                                  type: Zi.ENRICHMENT,
                                  setup: function (e, t) {
                                    return Ri(
                                      void 0,
                                      void 0,
                                      void 0,
                                      function () {
                                        var n, r;
                                        return Ni(this, function (i) {
                                          return t
                                            ? ("undefined" == typeof document ||
                                                ((n = function (e) {
                                                  var n;
                                                  try {
                                                    n = new URL(
                                                      e.href,
                                                      window.location.href
                                                    );
                                                  } catch (e) {
                                                    return;
                                                  }
                                                  var i,
                                                    o,
                                                    a,
                                                    u = r.exec(n.href),
                                                    l =
                                                      null == u ? void 0 : u[1];
                                                  l &&
                                                    ((o = "click"),
                                                    (a = function () {
                                                      var r;
                                                      l &&
                                                        t.track(
                                                          pa,
                                                          (((r = {})[ga] = l),
                                                          (r[ma] = n.pathname),
                                                          (r[ya] = e.id),
                                                          (r[ba] = e.text),
                                                          (r[wa] = e.href),
                                                          r)
                                                        );
                                                    }),
                                                    (i = e).addEventListener(
                                                      o,
                                                      a
                                                    ),
                                                    V.push({
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
                                                  ((B = new MutationObserver(
                                                    function (e) {
                                                      e.forEach(function (e) {
                                                        e.addedNodes.forEach(
                                                          function (e) {
                                                            "A" ===
                                                              e.nodeName &&
                                                              n(e),
                                                              "querySelectorAll" in
                                                                e &&
                                                                "function" ==
                                                                  typeof e.querySelectorAll &&
                                                                Array.from(
                                                                  e.querySelectorAll(
                                                                    "a"
                                                                  )
                                                                ).map(n);
                                                          }
                                                        );
                                                      });
                                                    }
                                                  )),
                                                  B.observe(document.body, {
                                                    subtree: !0,
                                                    childList: !0,
                                                  }))),
                                              [2])
                                            : (e.loggerProvider.warn(
                                                "File download tracking requires a later version of @amplitude/analytics-browser. File download events are not tracked."
                                              ),
                                              [2]);
                                        });
                                      }
                                    );
                                  },
                                  execute: function (e) {
                                    return Ri(
                                      void 0,
                                      void 0,
                                      void 0,
                                      function () {
                                        return Ni(this, function (t) {
                                          return [2, e];
                                        });
                                      }
                                    );
                                  },
                                  teardown: function () {
                                    return Ri(
                                      void 0,
                                      void 0,
                                      void 0,
                                      function () {
                                        return Ni(this, function (e) {
                                          return (
                                            null == B || B.disconnect(),
                                            V.forEach(function (e) {
                                              var t = e.element,
                                                n = e.type,
                                                r = e.handler;
                                              null == t ||
                                                t.removeEventListener(n, r);
                                            }),
                                            (V = []),
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
                      F.sent(), (F.label = 15);
                    case 15:
                      return (function (e) {
                        return "boolean" == typeof e
                          ? e
                          : !!(null == e ? void 0 : e.formInteractions);
                      })(this.config.defaultTracking)
                        ? [4, this.add(Na()).promise]
                        : [3, 17];
                    case 16:
                      F.sent(), (F.label = 17);
                    case 17:
                      return (
                        null === (m = this.config.attribution) || void 0 === m
                          ? void 0
                          : m.disabled
                      )
                        ? [3, 19]
                        : ((($ = (function () {
                            for (
                              var e, t, n = this, r = [], i = 0;
                              i < arguments.length;
                              i++
                            )
                              r[i] = arguments[i];
                            var o = {},
                              a = Li(r, 2),
                              u = a[0],
                              l = a[1];
                            u && "init" in u
                              ? ((t = u), l && (o = l))
                              : u && (o = u);
                            var s =
                              null !== (e = o.excludeReferrers) && void 0 !== e
                                ? e
                                : [];
                            "undefined" != typeof location &&
                              s.unshift(location.hostname),
                              (o = Pi(
                                Pi(
                                  {
                                    disabled: !1,
                                    initialEmptyValue: "EMPTY",
                                    resetSessionOnNewCampaign: !1,
                                  },
                                  o
                                ),
                                { excludeReferrers: s }
                              ));
                            var c = {
                              name: "web-attribution",
                              type: Zi.BEFORE,
                              setup: function (e, n) {
                                var r;
                                return Ri(this, void 0, void 0, function () {
                                  var i, a, l, s, c, f, d, p;
                                  return Ni(this, function (h) {
                                    switch (h.label) {
                                      case 0:
                                        return (t = null != t ? t : n)
                                          ? o.disabled
                                            ? (e.loggerProvider.log(
                                                "@amplitude/plugin-web-attribution-browser is disabled. Attribution is not tracked."
                                              ),
                                              [2])
                                            : (e.loggerProvider.log(
                                                "Installing @amplitude/plugin-web-attribution-browser."
                                              ),
                                              n ||
                                                (null === (r = e.attribution) ||
                                                void 0 === r
                                                  ? void 0
                                                  : r.disabled) ||
                                                (e.loggerProvider.warn(
                                                  "@amplitude/plugin-web-attribution-browser overrides web attribution behavior defined in @amplitude/analytics-browser. Resolve by disabling web attribution tracking in @amplitude/analytics-browser."
                                                ),
                                                (e.attribution = {
                                                  disabled: !0,
                                                })),
                                              (a = e.cookieStorage),
                                              (v = e.apiKey),
                                              void 0 === (g = "MKTG") &&
                                                (g = ""),
                                              void 0 === m && (m = 10),
                                              (l = [Ui, g, v.substring(0, m)]
                                                .filter(Boolean)
                                                .join("_")),
                                              [
                                                4,
                                                Promise.all([
                                                  new Fo().parse(),
                                                  a.get(l),
                                                ]),
                                              ])
                                          : ((i = u ? "Options" : "undefined"),
                                            e.loggerProvider.error(
                                              "Argument of type '".concat(
                                                i,
                                                "' is not assignable to parameter of type 'BrowserClient'."
                                              )
                                            ),
                                            [2]);
                                      case 1:
                                        return (
                                          (s = Li.apply(void 0, [h.sent(), 2])),
                                          (c = s[0]),
                                          (f = s[1]),
                                          (null !=
                                          (d = this.__pluginEnabledOverride)
                                            ? d
                                            : (function (e, t, n) {
                                                e.referrer;
                                                var r,
                                                  i = e.referring_domain,
                                                  o = Ii(e, [
                                                    "referrer",
                                                    "referring_domain",
                                                  ]),
                                                  a = t || {},
                                                  u =
                                                    (a.referrer,
                                                    a.referring_domain),
                                                  l = Ii(a, [
                                                    "referrer",
                                                    "referring_domain",
                                                  ]);
                                                if (
                                                  e.referring_domain &&
                                                  (null ===
                                                    (r = n.excludeReferrers) ||
                                                  void 0 === r
                                                    ? void 0
                                                    : r.includes(
                                                        e.referring_domain
                                                      ))
                                                )
                                                  return !1;
                                                var s =
                                                    JSON.stringify(o) !==
                                                    JSON.stringify(l),
                                                  c =
                                                    Ko(i || "") !== Ko(u || "");
                                                return !t || s || c;
                                              })(c, f, o)) &&
                                            (o.resetSessionOnNewCampaign &&
                                              (t.setSessionId(Date.now()),
                                              e.loggerProvider.log(
                                                "Created a new session for new campaign."
                                              )),
                                            e.loggerProvider.log(
                                              "Tracking attribution."
                                            ),
                                            (p = (function (e, t) {
                                              var n = Pi(Pi({}, Uo), e),
                                                r = Object.entries(n).reduce(
                                                  function (e, n) {
                                                    var r,
                                                      i = Li(n, 2),
                                                      o = i[0],
                                                      a = i[1];
                                                    return (
                                                      e.setOnce(
                                                        "initial_".concat(o),
                                                        null !==
                                                          (r =
                                                            null != a
                                                              ? a
                                                              : t.initialEmptyValue) &&
                                                          void 0 !== r
                                                          ? r
                                                          : "EMPTY"
                                                      ),
                                                      a
                                                        ? e.set(o, a)
                                                        : e.unset(o)
                                                    );
                                                  },
                                                  new So()
                                                );
                                              return Oo(r);
                                            })(c, o)),
                                            t.track(p),
                                            a.set(l, c)),
                                          [2]
                                        );
                                    }
                                    var v, g, m;
                                  });
                                });
                              },
                              execute: function (e) {
                                return Ri(n, void 0, void 0, function () {
                                  return Ni(this, function (t) {
                                    return [2, e];
                                  });
                                });
                              },
                              __pluginEnabledOverride: void 0,
                            };
                            return c;
                          })({
                            excludeReferrers:
                              null === (y = this.config.attribution) ||
                              void 0 === y
                                ? void 0
                                : y.excludeReferrers,
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
                              !j &&
                              !(null === (_ = this.config.attribution) ||
                              void 0 === _
                                ? void 0
                                : _.trackNewCampaigns)
                            ) && void 0),
                          [4, this.add($).promise]);
                    case 18:
                      F.sent(), (F.label = 19);
                    case 19:
                      return (
                        (D = (function (e) {
                          var t,
                            n,
                            r = (
                              null === (t = e.attribution) || void 0 === t
                                ? void 0
                                : t.trackPageViews
                            )
                              ? "attribution"
                              : function () {
                                  return !1;
                                },
                            i = void 0,
                            o = "Page View";
                          return (
                            ("boolean" == typeof (n = e.defaultTracking)
                              ? n
                              : !!(
                                  !0 === (null == n ? void 0 : n.pageViews) ||
                                  ((null == n ? void 0 : n.pageViews) &&
                                    "object" == typeof n.pageViews)
                                )) &&
                              ((r = void 0),
                              (o = void 0),
                              e.defaultTracking &&
                                "object" == typeof e.defaultTracking &&
                                e.defaultTracking.pageViews &&
                                "object" ==
                                  typeof e.defaultTracking.pageViews &&
                                ("trackOn" in e.defaultTracking.pageViews &&
                                  (r = e.defaultTracking.pageViews.trackOn),
                                "trackHistoryChanges" in
                                  e.defaultTracking.pageViews &&
                                  (i =
                                    e.defaultTracking.pageViews
                                      .trackHistoryChanges),
                                "eventType" in e.defaultTracking.pageViews &&
                                  e.defaultTracking.pageViews.eventType &&
                                  (o = e.defaultTracking.pageViews.eventType))),
                            { trackOn: r, trackHistoryChanges: i, eventType: o }
                          );
                        })(this.config)),
                        (D.eventType = D.eventType || ca),
                        [4, this.add(Vo(D)).promise]
                      );
                    case 20:
                      return (
                        F.sent(),
                        [
                          4,
                          this.add({
                            name: "@amplitude/plugin-default-page-view-event-enrichment-browser",
                            type: Zi.ENRICHMENT,
                            setup: function () {
                              return Ri(void 0, void 0, void 0, function () {
                                return Ni(this, function (e) {
                                  return [2, void 0];
                                });
                              });
                            },
                            execute: function (e) {
                              return Ri(void 0, void 0, void 0, function () {
                                return Ni(this, function (t) {
                                  return (
                                    e.event_type === ca &&
                                      e.event_properties &&
                                      (e.event_properties = Object.entries(
                                        e.event_properties
                                      ).reduce(function (e, t) {
                                        var n = Li(t, 2),
                                          r = n[0],
                                          i = n[1],
                                          o = Ra[r];
                                        return o ? (e[o] = i) : (e[r] = i), e;
                                      }, {})),
                                    [2, e]
                                  );
                                });
                              });
                            },
                          }).promise,
                        ]
                      );
                    case 21:
                      return (
                        F.sent(),
                        (this.initializing = !1),
                        [4, this.runQueuedFunctions("dispatchQ")]
                      );
                    case 22:
                      return (
                        F.sent(),
                        M.eventBridge.setEventReceiver(function (e) {
                          U.track(e.eventType, e.eventProperties);
                        }),
                        [2]
                      );
                  }
                  var B, V, q;
                });
              });
            }),
            (t.prototype.getUserId = function () {
              var e;
              return null === (e = this.config) || void 0 === e
                ? void 0
                : e.userId;
            }),
            (t.prototype.setUserId = function (e) {
              this.config
                ? (e === this.config.userId && void 0 !== e) ||
                  ((this.config.userId = e),
                  (function (e, t) {
                    no(t).identityStore.editIdentity().setUserId(e).commit();
                  })(e, this.config.instanceName))
                : this.q.push(this.setUserId.bind(this, e));
            }),
            (t.prototype.getDeviceId = function () {
              var e;
              return null === (e = this.config) || void 0 === e
                ? void 0
                : e.deviceId;
            }),
            (t.prototype.setDeviceId = function (e) {
              this.config
                ? ((this.config.deviceId = e),
                  (function (e, t) {
                    no(t).identityStore.editIdentity().setDeviceId(e).commit();
                  })(e, this.config.instanceName))
                : this.q.push(this.setDeviceId.bind(this, e));
            }),
            (t.prototype.setOptOut = function (t) {
              !(function (e, t) {
                no(t).identityStore.editIdentity().setOptOut(e).commit();
              })(t, this.config.instanceName),
                e.prototype.setOptOut.call(this, t);
            }),
            (t.prototype.reset = function () {
              this.setDeviceId(wo()), this.setUserId(void 0);
            }),
            (t.prototype.getSessionId = function () {
              var e;
              return null === (e = this.config) || void 0 === e
                ? void 0
                : e.sessionId;
            }),
            (t.prototype.setSessionId = function (e) {
              var t;
              if (this.config) {
                if (e !== this.config.sessionId) {
                  var n,
                    r = this.getSessionId(),
                    i = this.config.lastEventTime,
                    o =
                      null !== (t = this.config.lastEventId) && void 0 !== t
                        ? t
                        : -1;
                  (this.config.sessionId = e),
                    (this.config.lastEventTime = void 0),
                    ("boolean" == typeof (n = this.config.defaultTracking)
                      ? n
                      : null == n
                      ? void 0
                      : n.sessions) &&
                      (r &&
                        i &&
                        this.track(va, void 0, {
                          device_id: this.previousSessionDeviceId,
                          event_id: ++o,
                          session_id: r,
                          time: i + 1,
                          user_id: this.previousSessionUserId,
                        }),
                      (this.config.lastEventTime = this.config.sessionId),
                      this.track(ha, void 0, {
                        event_id: ++o,
                        session_id: this.config.sessionId,
                        time: this.config.lastEventTime,
                      })),
                    (this.previousSessionDeviceId = this.config.deviceId),
                    (this.previousSessionUserId = this.config.userId);
                }
              } else this.q.push(this.setSessionId.bind(this, e));
            }),
            (t.prototype.extendSession = function () {
              this.config
                ? (this.config.lastEventTime = Date.now())
                : this.q.push(this.extendSession.bind(this));
            }),
            (t.prototype.setTransport = function (e) {
              this.config
                ? (this.config.transportProvider = la(e))
                : this.q.push(this.setTransport.bind(this, e));
            }),
            (t.prototype.identify = function (t, n) {
              if (za(t)) {
                var r = t._q;
                (t._q = []), (t = La(new So(), r));
              }
              return (
                (null == n ? void 0 : n.user_id) && this.setUserId(n.user_id),
                (null == n ? void 0 : n.device_id) &&
                  this.setDeviceId(n.device_id),
                e.prototype.identify.call(this, t, n)
              );
            }),
            (t.prototype.groupIdentify = function (t, n, r, i) {
              if (za(r)) {
                var o = r._q;
                (r._q = []), (r = La(new So(), o));
              }
              return e.prototype.groupIdentify.call(this, t, n, r, i);
            }),
            (t.prototype.revenue = function (t, n) {
              if (za(t)) {
                var r = t._q;
                (t._q = []), (t = La(new Eo(), r));
              }
              return e.prototype.revenue.call(this, t, n);
            }),
            (t.prototype.process = function (t) {
              return Ri(this, void 0, void 0, function () {
                var n, r, i;
                return Ni(this, function (o) {
                  return (
                    (n = Date.now()),
                    (r = this.config.lastEventTime || Date.now()),
                    (i = n - r),
                    t.event_type !== ha &&
                      t.event_type !== va &&
                      (!t.session_id || t.session_id === this.getSessionId()) &&
                      i > this.config.sessionTimeout &&
                      this.setSessionId(n),
                    [2, e.prototype.process.call(this, t)]
                  );
                });
              });
            }),
            t
          );
        })(To),
        Ma = function () {
          var e = new ja();
          return {
            init: Di(e.init.bind(e), "init", ji(e), $i(e, ["config"])),
            add: Di(
              e.add.bind(e),
              "add",
              ji(e),
              $i(e, ["config.apiKey", "timeline.plugins"])
            ),
            remove: Di(
              e.remove.bind(e),
              "remove",
              ji(e),
              $i(e, ["config.apiKey", "timeline.plugins"])
            ),
            track: Di(
              e.track.bind(e),
              "track",
              ji(e),
              $i(e, ["config.apiKey", "timeline.queue.length"])
            ),
            logEvent: Di(
              e.logEvent.bind(e),
              "logEvent",
              ji(e),
              $i(e, ["config.apiKey", "timeline.queue.length"])
            ),
            identify: Di(
              e.identify.bind(e),
              "identify",
              ji(e),
              $i(e, ["config.apiKey", "timeline.queue.length"])
            ),
            groupIdentify: Di(
              e.groupIdentify.bind(e),
              "groupIdentify",
              ji(e),
              $i(e, ["config.apiKey", "timeline.queue.length"])
            ),
            setGroup: Di(
              e.setGroup.bind(e),
              "setGroup",
              ji(e),
              $i(e, ["config.apiKey", "timeline.queue.length"])
            ),
            revenue: Di(
              e.revenue.bind(e),
              "revenue",
              ji(e),
              $i(e, ["config.apiKey", "timeline.queue.length"])
            ),
            flush: Di(
              e.flush.bind(e),
              "flush",
              ji(e),
              $i(e, ["config.apiKey", "timeline.queue.length"])
            ),
            getUserId: Di(
              e.getUserId.bind(e),
              "getUserId",
              ji(e),
              $i(e, ["config", "config.userId"])
            ),
            setUserId: Di(
              e.setUserId.bind(e),
              "setUserId",
              ji(e),
              $i(e, ["config", "config.userId"])
            ),
            getDeviceId: Di(
              e.getDeviceId.bind(e),
              "getDeviceId",
              ji(e),
              $i(e, ["config", "config.deviceId"])
            ),
            setDeviceId: Di(
              e.setDeviceId.bind(e),
              "setDeviceId",
              ji(e),
              $i(e, ["config", "config.deviceId"])
            ),
            reset: Di(
              e.reset.bind(e),
              "reset",
              ji(e),
              $i(e, ["config", "config.userId", "config.deviceId"])
            ),
            getSessionId: Di(
              e.getSessionId.bind(e),
              "getSessionId",
              ji(e),
              $i(e, ["config"])
            ),
            setSessionId: Di(
              e.setSessionId.bind(e),
              "setSessionId",
              ji(e),
              $i(e, ["config"])
            ),
            extendSession: Di(
              e.extendSession.bind(e),
              "extendSession",
              ji(e),
              $i(e, ["config"])
            ),
            setOptOut: Di(
              e.setOptOut.bind(e),
              "setOptOut",
              ji(e),
              $i(e, ["config"])
            ),
            setTransport: Di(
              e.setTransport.bind(e),
              "setTransport",
              ji(e),
              $i(e, ["config"])
            ),
          };
        };
      const $a = Ma();
      var Da = $a.add,
        Ua = $a.extendSession,
        Fa = $a.flush,
        Ba = $a.getDeviceId,
        Va = $a.getSessionId,
        qa = $a.getUserId,
        Wa = $a.groupIdentify,
        Ha = $a.identify,
        Ka = $a.init,
        Qa = $a.logEvent,
        Ga = $a.remove,
        Ya = $a.reset,
        Xa = $a.revenue,
        Za = $a.setDeviceId,
        Ja = $a.setGroup,
        eu = $a.setOptOut,
        tu = $a.setSessionId,
        nu = $a.setTransport,
        ru = $a.setUserId,
        iu = $a.track;
      function ou() {
        var e,
          n = (function (e, t) {
            return (
              (function (e) {
                if (Array.isArray(e)) return e;
              })(e) ||
              (function (e, t) {
                var n =
                  null == e
                    ? null
                    : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                      e["@@iterator"];
                if (null != n) {
                  var r,
                    i,
                    o,
                    a,
                    u = [],
                    l = !0,
                    s = !1;
                  try {
                    if (((o = (n = n.call(e)).next), 0 === t)) {
                      if (Object(n) !== n) return;
                      l = !1;
                    } else
                      for (
                        ;
                        !(l = (r = o.call(n)).done) &&
                        (u.push(r.value), u.length !== t);
                        l = !0
                      );
                  } catch (e) {
                    (s = !0), (i = e);
                  } finally {
                    try {
                      if (
                        !l &&
                        null != n.return &&
                        ((a = n.return()), Object(a) !== a)
                      )
                        return;
                    } finally {
                      if (s) throw i;
                    }
                  }
                  return u;
                }
              })(e, t) ||
              (function (e, t) {
                if (e) {
                  if ("string" == typeof e) return o(e, t);
                  var n = Object.prototype.toString.call(e).slice(8, -1);
                  return (
                    "Object" === n && e.constructor && (n = e.constructor.name),
                    "Map" === n || "Set" === n
                      ? Array.from(e)
                      : "Arguments" === n ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                      ? o(e, t)
                      : void 0
                  );
                }
              })(e, t) ||
              (function () {
                throw new TypeError(
                  "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              })()
            );
          })((0, l.useState)(!1), 2),
          i = n[0],
          a = n[1];
        return (
          (0, l.useEffect)(
            r(
              u().mark(function e() {
                return u().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.t0 = t),
                          (e.t1 = oi.amp.key),
                          (e.t2 = void 0),
                          (e.t3 = { pageViews: !0 }),
                          (e.next = 6),
                          Ei()
                        );
                      case 6:
                        return (
                          (e.t4 = e.sent),
                          (e.t5 = { defaultTracking: e.t3, deviceId: e.t4 }),
                          e.t0.init.call(e.t0, e.t1, e.t2, e.t5),
                          (e.next = 11),
                          Si("settings", "debugMode")
                        );
                      case 11:
                        !0 === e.sent && a(!0);
                      case 13:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            ),
            []
          ),
          l.createElement(
            jn,
            { sx: { display: "flex", alignItems: "center" } },
            l.createElement(ni, {
              checked: i,
              onChange: function (t) {
                return (e =
                  e ||
                  r(
                    u().mark(function e(t) {
                      return u().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                a(t.target.checked),
                                ui.debug(
                                  "set state 'checked' to:",
                                  t.target.checked
                                ),
                                (e.next = 4),
                                xi("settings", { debugMode: t.target.checked })
                              );
                            case 4:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  )).apply(this, arguments);
              },
              inputProps: { "aria-label": "controlled" },
              color: "warning",
            })
          )
        );
      }
      c.render(
        l.createElement(l.StrictMode, null, l.createElement(ou, null)),
        document.getElementById("root")
      );
    })();
})();
