(this.webpackJsonptyping_guru = this.webpackJsonptyping_guru || []).push([
  [0],
  {
    34: function (e, t, n) {
      e.exports = n(46);
    },
    46: function (e, t, n) {
      'use strict';
      n.r(t);
      var r = n(2),
        a = n(0),
        c = n.n(a),
        l = n(18),
        s = n.n(l),
        o = n(20),
        i = n(1),
        m = n(3),
        u = n(4),
        d = Object(a.createContext)({
          isLoggedIn: !1,
          userData: null,
          registerUser: function () {},
          loginUser: function () {},
          logoutUser: function () {},
        }),
        f = {
          main_bg: '#F0f0f0',
          sub_bg: '#E0E0E0',
          black: '#29353D',
          grey: '#738290',
          lightpink: '#DD614A',
          green: '#9FD356',
          blue: '#9CBFD3',
          box_shadow_lg:
            '\n  0 2.8px 2.2px rgba(0, 0, 0, 0.02),\n  0 6.7px 5.3px rgba(0, 0, 0, 0.028),\n  0 12.5px 10px rgba(0, 0, 0, 0.035),\n  0 22.3px 17.9px rgba(0, 0, 0, 0.042),\n  0 41.8px 33.4px rgba(0, 0, 0, 0.05),\n  0 100px 80px rgba(0, 0, 0, 0.07)\n  ',
          box_shadow_st:
            '\n  0 0 2.2px rgba(0, 0, 0, 0.02),\n  0 0 5.3px rgba(0, 0, 0, 0.028),\n  0 0 10px rgba(0, 0, 0, 0.035),\n  0 0 17.9px rgba(0, 0, 0, 0.1)  ',
          box_shadow_md:
            '\n  0 2px 2.2px rgba(0, 0, 0, 0.02),\n  0 4.5px 5.3px rgba(0, 0, 0, 0.028),\n  0 8px 10px rgba(0, 0, 0, 0.035),\n  0 16px 17.9px rgba(0, 0, 0, 0.042),\n  0 25px 33.4px rgba(0, 0, 0, 0.05)\n  ',
          box_shadow_sm:
            '\n  0 1.4px 2.2px rgba(0, 0, 0, 0.02),\n  0 3.8px 5.3px rgba(0, 0, 0, 0.028),\n  0 6.3px 10px rgba(0, 0, 0, 0.035),\n  0 11px 17.9px rgba(0, 0, 0, 0.042)\n  ',
        };
      function p() {
        return (p =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function h(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              c = Object.keys(e);
            for (r = 0; r < c.length; r++) (n = c[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var c = Object.getOwnPropertySymbols(e);
          for (r = 0; r < c.length; r++)
            (n = c[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]));
        }
        return a;
      }
      var b = a.createElement('path', {
          d:
            'M61.715 238.222H19.958c-4.274 0-7.739-3.464-7.739-7.739s3.465-7.739 7.739-7.739h41.756c4.274 0 7.739 3.464 7.739 7.739s-3.464 7.739-7.738 7.739z',
          fill: '#afafaf',
        }),
        x = a.createElement('path', {
          d:
            'M19.958 250.65c-4.274 0-7.739-3.464-7.739-7.739v-22.694c0-4.275 3.465-7.739 7.739-7.739s7.739 3.464 7.739 7.739v22.694c0 4.274-3.465 7.739-7.739 7.739z',
          fill: '#757574',
        }),
        v = a.createElement('path', {
          d:
            'M473.358 290.635h-22.23c-7.83 0-14.2-6.37-14.2-14.2v-38.214H409.2c-4.275 0-7.739-3.464-7.739-7.739s3.464-7.739 7.739-7.739h29.007c7.83 0 14.2 6.37 14.2 14.2v38.214h20.951c4.275 0 7.739 3.464 7.739 7.739s-3.465 7.739-7.739 7.739zm-35.151-52.413h.01-.01z',
          fill: '#afafaf',
        }),
        g = a.createElement('path', {
          d:
            'M385.23 168.556v46.75H84.799v-59.133c0-6.408 5.198-11.607 11.607-11.607h277.218c6.407.001 11.606 5.2 11.606 23.99z',
          fill: '#757574',
        }),
        E = a.createElement('path', {
          d:
            'M371.57 258.58l-.462-7.438H266.203v7.438c-4.993 12.957-17.55 22.154-32.269 22.154s-27.277-9.197-32.269-22.154v-5.422H98.555l-.096 5.422-52.565 161.562h378.24L371.57 258.58z',
          fill: '#e2b17d',
        }),
        y = a.createElement('path', {
          d:
            'M320.794 253.158v5.422c4.993 12.957 17.55 22.154 32.269 22.154 8.787 0 16.789-3.295 22.886-8.695l-4.379-13.46-.462-7.438H266.203v2.017h54.592zm-119.129 5.422v-5.422H98.555l-.096 5.422-52.565 161.562h119.129l47.724-146.687c-4.925-3.831-8.801-8.952-11.082-14.875z',
          fill: '#d69c67',
        }),
        O = a.createElement('path', {
          d:
            'M413.327 215.99v28.984c0 7.219-5.847 13.066-13.066 13.066H67.606c-7.219 0-13.066-5.847-13.066-13.066V215.99c0-7.219 5.847-13.066 13.066-13.066h332.656c7.219 0 13.065 5.847 13.065 13.066z',
          fill: '#b56c30',
        }),
        j = a.createElement('path', {
          d:
            'M400.262 235.052H67.606c-7.219 0-13.066-5.847-13.066-13.066v22.987c0 7.219 5.847 13.066 13.066 13.066h332.656c7.219 0 13.066-5.847 13.066-13.066v-22.987c-.001 7.22-5.847 13.066-13.066 13.066z',
          fill: '#aa5f26',
        }),
        w = a.createElement('path', {
          d:
            'M98.555 382.784l7.478 1.994c-.186.698.064 1.221.306 1.536.242.316.684.692 1.405.692h254.538c.721 0 1.162-.377 1.404-.692.242-.317.494-.839.308-1.536l-19.129-71.754c-.206-.775-.911-1.316-1.713-1.316H126.875c-.802 0-1.506.541-1.712 1.316l-19.13 71.754-7.478-1.994zm-44.922 45.098v29.395c0 .284.231.515.515.515h361.733c.284 0 .515-.231.515-.515v-29.395H53.633zm82.133-232.696h196.337V58.208L284.107 7.739H139.214c-1.902 0-3.449 1.547-3.449 3.449v183.998z',
        }),
        z = a.createElement('path', {
          d:
            'M300.936 379.251H168.012c-4.274 0-7.739-3.464-7.739-7.739s3.465-7.739 7.739-7.739h132.924c4.275 0 7.739 3.464 7.739 7.739s-3.464 7.739-7.739 7.739zm-157.78 0h-7.565c-4.274 0-7.739-3.464-7.739-7.739s3.465-7.739 7.739-7.739h7.565c4.274 0 7.739 3.464 7.739 7.739s-3.465 7.739-7.739 7.739zm17.291-43.228h-7.565c-4.274 0-7.739-3.464-7.739-7.739s3.465-7.739 7.739-7.739h7.565c4.274 0 7.739 3.464 7.739 7.739s-3.465 7.739-7.739 7.739zm15.13 20.533h-7.566c-4.274 0-7.739-3.464-7.739-7.739s3.465-7.739 7.739-7.739h7.566c4.274 0 7.739 3.464 7.739 7.739s-3.465 7.739-7.739 7.739zm33.501 0h-7.565c-4.274 0-7.739-3.464-7.739-7.739s3.465-7.739 7.739-7.739h7.565c4.274 0 7.739 3.464 7.739 7.739s-3.465 7.739-7.739 7.739zm33.501 0h-7.565c-4.274 0-7.739-3.464-7.739-7.739s3.465-7.739 7.739-7.739h7.565c4.275 0 7.739 3.464 7.739 7.739s-3.464 7.739-7.739 7.739zm33.501 0h-7.565c-4.275 0-7.739-3.464-7.739-7.739s3.464-7.739 7.739-7.739h7.565c4.275 0 7.739 3.464 7.739 7.739s-3.464 7.739-7.739 7.739zm33.502 0h-7.565c-4.275 0-7.739-3.464-7.739-7.739s3.464-7.739 7.739-7.739h7.565c4.275 0 7.739 3.464 7.739 7.739s-3.464 7.739-7.739 7.739zm-117.794-20.533h-7.566c-4.274 0-7.739-3.464-7.739-7.739s3.465-7.739 7.739-7.739h7.566c4.274 0 7.739 3.464 7.739 7.739s-3.465 7.739-7.739 7.739zm31.339 0h-7.565c-4.274 0-7.739-3.464-7.739-7.739s3.465-7.739 7.739-7.739h7.565c4.274 0 7.739 3.464 7.739 7.739s-3.465 7.739-7.739 7.739zm31.34 0h-7.565c-4.274 0-7.739-3.464-7.739-7.739s3.465-7.739 7.739-7.739h7.565c4.275 0 7.739 3.464 7.739 7.739s-3.465 7.739-7.739 7.739zm31.339 0h-7.565c-4.275 0-7.739-3.464-7.739-7.739s3.464-7.739 7.739-7.739h7.565c4.275 0 7.739 3.464 7.739 7.739s-3.464 7.739-7.739 7.739zm31.341 0h-7.565c-4.275 0-7.739-3.464-7.739-7.739s3.464-7.739 7.739-7.739h7.565c4.275 0 7.739 3.464 7.739 7.739s-3.464 7.739-7.739 7.739zm17.291 43.228h-7.565c-4.275 0-7.739-3.464-7.739-7.739s3.464-7.739 7.739-7.739h7.565c4.275 0 7.739 3.464 7.739 7.739s-3.465 7.739-7.739 7.739z',
        }),
        N = a.createElement('path', {
          d:
            'M371.473 382.783c1.61 6.041-2.94 11.964-9.186 11.964H107.743c-6.246 0-10.797-5.922-9.186-11.964l19.128-71.758c1.113-4.161 4.885-7.057 9.186-7.057h216.288c4.301 0 8.072 2.896 9.186 7.057l19.128 71.758z',
          fill: '#b56c30',
        }),
        k = a.createElement('path', {
          d:
            'M371.473 382.783l-19.128-71.758c-1.113-4.161-4.885-7.057-9.186-7.057H126.87c-4.301 0-8.072 2.896-9.186 7.057l-1.014 3.806h207.325c4.301 0 8.072 2.897 9.186 7.057l19.128 71.758c.098.367.171.735.225 1.101h9.753c6.246-.001 10.796-5.923 9.186-11.964z',
          fill: '#a85e27',
        }),
        M = a.createElement('path', {
          d:
            'M424.134 420.142v37.132c0 4.561-3.696 8.256-8.256 8.256H54.151c-4.561 0-8.256-3.696-8.256-8.256v-37.132h378.239z',
          fill: '#c6854a',
        }),
        S = a.createElement('path', {
          d:
            'M164.286 457.274v-37.132H45.894v37.132c0 4.56 3.696 8.256 8.256 8.256h118.392c-4.56.001-8.256-3.695-8.256-8.256z',
          fill: '#b27542',
        }),
        V = a.createElement('path', {
          d:
            'M499.782 277.308v11.174c0 3.479-2.82 6.301-6.301 6.301h-18.739c-3.48 0-6.301-2.82-6.301-6.301v-11.174c0-3.48 2.82-6.301 6.301-6.301h18.739c3.481.001 6.301 2.822 6.301 6.301zM140.995 465.531v14.168c0 6.495-5.274 11.769-11.769 11.769H115.61c-4.636 0-8.818 1.88-11.855 4.907-3.025 3.037-4.907 7.219-4.907 11.855 0 2.085-1.686 3.772-3.772 3.772H60.473c-2.085 0-3.772-1.686-3.772-3.772v-42.698h42.146l42.148-.001zm270.171 0v42.698c0 2.085-1.686 3.772-3.772 3.772h-34.603c-2.085 0-3.772-1.686-3.772-3.772 0-4.636-1.88-8.818-4.907-11.855-3.037-3.025-7.219-4.907-11.855-4.907H338.64c-6.495 0-11.769-5.274-11.769-11.769V465.53h58.357l25.938.001z',
          fill: '#757574',
        }),
        C = a.createElement('path', {
          d:
            'M339.841 55.115v147.809H128.027V11.186C128.027 5.015 133.041 0 139.212 0h148.216l52.413 55.115z',
          fill: '#dddbc7',
        }),
        I = a.createElement('path', {
          d:
            'M293.275 55.115h46.566L287.427 0l.488 49.808c.029 2.94 2.421 5.307 5.36 5.307z',
          fill: '#bcb9a2',
        }),
        R = a.createElement('path', {
          d:
            'M300.936 379.251H168.012c-4.274 0-7.739-3.464-7.739-7.739s3.465-7.739 7.739-7.739h132.924c4.275 0 7.739 3.464 7.739 7.739s-3.464 7.739-7.739 7.739zm-157.78 0h-7.565c-4.274 0-7.739-3.464-7.739-7.739s3.465-7.739 7.739-7.739h7.565c4.274 0 7.739 3.464 7.739 7.739s-3.465 7.739-7.739 7.739zm17.291-43.228h-7.565c-4.274 0-7.739-3.464-7.739-7.739s3.465-7.739 7.739-7.739h7.565c4.274 0 7.739 3.464 7.739 7.739s-3.465 7.739-7.739 7.739zm15.13 20.533h-7.566c-4.274 0-7.739-3.464-7.739-7.739s3.465-7.739 7.739-7.739h7.566c4.274 0 7.739 3.464 7.739 7.739s-3.465 7.739-7.739 7.739zm33.501 0h-7.565c-4.274 0-7.739-3.464-7.739-7.739s3.465-7.739 7.739-7.739h7.565c4.274 0 7.739 3.464 7.739 7.739s-3.465 7.739-7.739 7.739zm33.501 0h-7.565c-4.274 0-7.739-3.464-7.739-7.739s3.465-7.739 7.739-7.739h7.565c4.275 0 7.739 3.464 7.739 7.739s-3.464 7.739-7.739 7.739zm33.501 0h-7.565c-4.275 0-7.739-3.464-7.739-7.739s3.464-7.739 7.739-7.739h7.565c4.275 0 7.739 3.464 7.739 7.739s-3.464 7.739-7.739 7.739zm33.502 0h-7.565c-4.275 0-7.739-3.464-7.739-7.739s3.464-7.739 7.739-7.739h7.565c4.275 0 7.739 3.464 7.739 7.739s-3.464 7.739-7.739 7.739zm-117.794-20.533h-7.566c-4.274 0-7.739-3.464-7.739-7.739s3.465-7.739 7.739-7.739h7.566c4.274 0 7.739 3.464 7.739 7.739s-3.465 7.739-7.739 7.739zm31.339 0h-7.565c-4.274 0-7.739-3.464-7.739-7.739s3.465-7.739 7.739-7.739h7.565c4.274 0 7.739 3.464 7.739 7.739s-3.465 7.739-7.739 7.739zm31.34 0h-7.565c-4.274 0-7.739-3.464-7.739-7.739s3.465-7.739 7.739-7.739h7.565c4.275 0 7.739 3.464 7.739 7.739s-3.465 7.739-7.739 7.739zm31.339 0h-7.565c-4.275 0-7.739-3.464-7.739-7.739s3.464-7.739 7.739-7.739h7.565c4.275 0 7.739 3.464 7.739 7.739s-3.464 7.739-7.739 7.739zm31.341 0h-7.565c-4.275 0-7.739-3.464-7.739-7.739s3.464-7.739 7.739-7.739h7.565c4.275 0 7.739 3.464 7.739 7.739s-3.464 7.739-7.739 7.739zm17.291 43.228h-7.565c-4.275 0-7.739-3.464-7.739-7.739s3.464-7.739 7.739-7.739h7.565c4.275 0 7.739 3.464 7.739 7.739s-3.465 7.739-7.739 7.739z',
          fill: '#914a16',
        });
      function L(e, t) {
        var n = e.title,
          r = e.titleId,
          c = h(e, ['title', 'titleId']);
        return a.createElement(
          'svg',
          p({ viewBox: '0 0 512.001 512.001', ref: t, 'aria-labelledby': r }, c),
          n ? a.createElement('title', { id: r }, n) : null,
          b,
          x,
          v,
          g,
          E,
          y,
          O,
          j,
          w,
          z,
          N,
          k,
          M,
          S,
          V,
          C,
          I,
          R
        );
      }
      var H = a.forwardRef(L);
      n.p;
      function P() {
        var e = Object(r.a)([
          '\n  font-size: 1.7rem;\n  margin-left: 10px;\n  color: ',
          ';\n  font-family: "Recursive", sans-serif;\n  font-weight: 600;\n  letter-spacing: 1px;\n',
        ]);
        return (
          (P = function () {
            return e;
          }),
          e
        );
      }
      function A() {
        var e = Object(r.a)(['\n  display: flex;\n  align-items: center;\n']);
        return (
          (A = function () {
            return e;
          }),
          e
        );
      }
      var _ = i.d.div(A()),
        B = i.d.p(P(), function (e) {
          return e.theme.black;
        }),
        X = function () {
          return c.a.createElement(
            _,
            null,
            c.a.createElement(H, { style: { width: '47px' } }),
            c.a.createElement(B, null, 'Typing Guru')
          );
        };
      function U() {
        return (U =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function D(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              c = Object.keys(e);
            for (r = 0; r < c.length; r++) (n = c[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var c = Object.getOwnPropertySymbols(e);
          for (r = 0; r < c.length; r++)
            (n = c[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]));
        }
        return a;
      }
      var F = a.createElement('path', {
          d:
            'M512 50c0-16.542-13.458-30-30-30H30C13.458 20 0 33.458 0 50v219c0 .049.007.096.007.145-.001.097-.007.193-.007.29v70.456c0 20.641 3.131 41.091 9.307 60.783l11.32 36.098V482c0 5.522 4.478 10 10 10s10-4.478 10-10v-46.76c0-1.015-.154-2.023-.458-2.992l-11.778-37.559C22.823 376.936 20 358.499 20 339.891v-70.456c0-5.557 4.521-10.077 10.077-10.077s10.077 4.521 10.077 10.077v24.506c0 5.522 4.478 10 10 10s10-4.478 10-10V254.64c0-5.557 4.521-10.077 10.078-10.077s10.077 4.521 10.077 10.077v39.301c0 5.522 4.478 10 10 10s10-4.478 10-10v-52.018c0-5.557 4.521-10.077 10.077-10.077s10.077 4.521 10.077 10.077v52.018c0 5.522 4.478 10 10 10s10-4.478 10-10V176.262c0-5.557 4.521-10.077 10.077-10.077s10.078 4.521 10.078 10.077v145.385c0 4.579 3.11 8.573 7.55 9.695 4.436 1.12 9.073-.914 11.249-4.943l23.578-43.662c2.896-5.36 9.422-7.411 14.861-4.667 4.654 2.349 7.052 7.527 5.829 12.595L208.4 354.026c-3.003 12.446-8.355 23.998-15.91 34.335l-29.945 40.979c-1.251 1.713-1.926 3.779-1.926 5.9V482c0 5.522 4.478 10 10 10s10-4.478 10-10v-43.495l28.019-38.343c9.119-12.478 15.581-26.422 19.204-41.445L236.7 322h38.6l8.857 36.716c3.624 15.024 10.086 28.969 19.204 41.446l28.02 38.343V482c0 5.522 4.478 10 10 10s10-4.478 10-10v-46.76c0-2.121-.675-4.188-1.926-5.9l-29.946-40.979c-7.554-10.337-12.906-21.889-15.909-34.336l-15.286-63.361c-1.223-5.067 1.175-10.246 5.828-12.594 5.437-2.743 11.967-.693 14.862 4.666l23.578 43.662c2.176 4.03 6.82 6.063 11.249 4.943 4.439-1.122 7.55-5.116 7.55-9.695V176.262c0-5.557 4.521-10.077 10.078-10.077s10.077 4.521 10.077 10.077V293.94c0 5.522 4.478 10 10 10s10-4.478 10-10v-52.018c0-5.557 4.521-10.077 10.077-10.077s10.077 4.521 10.077 10.077v52.018c0 5.522 4.478 10 10 10s10-4.478 10-10v-39.3c0-5.557 4.521-10.077 10.077-10.077s10.078 4.521 10.078 10.077v39.301c0 5.522 4.478 10 10 10s10-4.478 10-10v-24.506c0-5.557 4.521-10.077 10.077-10.077S492 263.878 492 269.435v70.456c0 18.608-2.823 37.045-8.391 54.799l-11.778 37.559c-.304.969-.458 1.978-.458 2.992V482c0 5.522 4.478 10 10 10s10-4.478 10-10v-45.229l11.32-36.098C508.869 380.981 512 360.53 512 339.89v-70.456c0-.097-.006-.193-.007-.289 0-.049.007-.096.007-.145V50zM268.872 295.355l1.603 6.645h-28.95l1.603-6.645c2.858-11.843-1.373-23.903-10.454-31.358h46.652c-9.08 7.455-13.312 19.515-10.454 31.358zm223.127-54.256c-3.151-1.124-6.542-1.742-10.076-1.742-4.563 0-8.892 1.021-12.77 2.847-4.74-10.397-15.232-17.642-27.386-17.642-4.891 0-9.51 1.173-13.596 3.252-5.063-9.492-15.069-15.969-26.559-15.969-3.533 0-6.926.612-10.077 1.736v-37.32c0-16.585-13.492-30.077-30.077-30.077s-30.078 13.492-30.078 30.077v105.821l-4.779-8.851c-4.544-8.413-12.296-13.904-20.911-15.734.409-1.091.643-2.267.643-3.501 0-5.522-4.478-10-10-10H227c-5.522 0-10 4.478-10 10 0 1.124.194 2.201.536 3.209-12.703-1.992-25.67 4.051-32.138 16.026l-4.779 8.851v-105.82c0-16.585-13.493-30.077-30.078-30.077s-30.077 13.492-30.077 30.077v37.32c-3.151-1.124-6.544-1.736-10.077-1.736-11.489 0-21.495 6.477-26.559 15.969-4.086-2.079-8.705-3.252-13.596-3.252-12.153 0-22.646 7.244-27.386 17.642-3.878-1.826-8.206-2.847-12.77-2.847-3.534 0-6.925.617-10.077 1.742V50c0-5.514 4.486-10 10-10h452c5.514 0 10 4.486 10 10v191.099z',
        }),
        G = a.createElement('path', {
          d:
            'M107 132.003H64c-5.522 0-10 4.478-10 10s4.478 10 10 10h43c5.522 0 10-4.478 10-10s-4.478-10-10-10zM207.261 132.003h-15.839c-5.522 0-10 4.478-10 10s4.478 10 10 10h15.839c5.522 0 10-4.478 10-10s-4.478-10-10-10zM81.275 188H64c-5.522 0-10 4.478-10 10s4.478 10 10 10h17.275c5.522 0 10-4.478 10-10s-4.478-10-10-10zM233.973 188h-18.615c-5.522 0-10 4.478-10 10s4.478 10 10 10h18.615c5.522 0 10-4.478 10-10s-4.478-10-10-10zM98.552 76.005H64c-5.522 0-10 4.478-10 10s4.478 10 10 10h34.552c5.522 0 10-4.478 10-10s-4.478-10-10-10zM207.261 76.005h-31.679c-5.522 0-10 4.478-10 10s4.478 10 10 10h31.679c5.522 0 10-4.478 10-10s-4.478-10-10-10zM144.66 78.93c-1.86-1.86-4.431-2.92-7.07-2.92-2.63 0-5.21 1.06-7.07 2.92-1.859 1.86-2.93 4.44-2.93 7.07 0 2.64 1.07 5.21 2.93 7.08 1.86 1.859 4.44 2.92 7.07 2.92s5.21-1.061 7.07-2.92c1.859-1.87 2.93-4.44 2.93-7.08 0-2.63-1.07-5.21-2.93-7.07zM269.999 132.003H243.5c-5.522 0-10 4.477-10 10 0 5.522 4.478 10 10 10h26.499c5.522 0 10-4.478 10-10s-4.478-10-10-10zM324.569 134.93c-1.859-1.86-4.439-2.93-7.069-2.93s-5.21 1.069-7.07 2.93c-1.86 1.861-2.93 4.44-2.93 7.07 0 2.64 1.069 5.21 2.93 7.069 1.86 1.87 4.44 2.931 7.07 2.931s5.21-1.061 7.069-2.931c1.86-1.859 2.931-4.439 2.931-7.069s-1.07-5.21-2.931-7.07zM448.345 132.003h-37.634c-5.523 0-10 4.477-10 10 0 5.522 4.478 10 10 10h37.634c5.522 0 10-4.478 10-10s-4.478-10-10-10zM305 188h-20.167c-5.522 0-10 4.478-10 10s4.478 10 10 10H305c5.522 0 10-4.478 10-10s-4.478-10-10-10zM446.394 188h-18.615c-5.522 0-10 4.478-10 10s4.478 10 10 10h18.615c5.522 0 10-4.478 10-10s-4.478-10-10-10zM282.499 76.005H256c-5.522 0-10 4.478-10 10s4.478 10 10 10h26.499c5.522 0 10-4.478 10-10s-4.478-10-10-10zM448.127 76.005h-33.103c-5.522 0-10 4.478-10 10s4.478 10 10 10h33.103c5.522 0 10-4.478 10-10s-4.478-10-10-10zM363.5 76.005h-21.908c-5.522 0-10 4.478-10 10s4.478 10 10 10H363.5c5.522 0 10-4.478 10-10s-4.478-10-10-10z',
        });
      function T(e, t) {
        var n = e.title,
          r = e.titleId,
          c = D(e, ['title', 'titleId']);
        return a.createElement(
          'svg',
          U({ viewBox: '0 0 512 512', ref: t, 'aria-labelledby': r }, c),
          n ? a.createElement('title', { id: r }, n) : null,
          F,
          G
        );
      }
      var W = a.forwardRef(T);
      n.p;
      function q() {
        return (q =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function Z(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              c = Object.keys(e);
            for (r = 0; r < c.length; r++) (n = c[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var c = Object.getOwnPropertySymbols(e);
          for (r = 0; r < c.length; r++)
            (n = c[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]));
        }
        return a;
      }
      var $ = a.createElement('path', {
          d:
            'M275.531 172.228l-.05 120.493c0 4.575 1.816 8.948 5.046 12.177l86.198 86.181 24.354-24.354-81.153-81.136.05-113.361z',
        }),
        Y = a.createElement('path', {
          d:
            'M310.011 34.445c-121.23 0-221.563 90.033-238.367 206.674H0l86.114 86.114 86.114-86.114h-65.78C122.925 143.53 207.803 68.891 310.011 68.891c113.966 0 206.674 92.707 206.674 206.674s-92.707 206.674-206.674 206.674c-64.064 0-123.469-28.996-162.978-79.555l-27.146 21.192c46.084 58.968 115.379 92.808 190.124 92.808 132.955 0 241.119-108.181 241.119-241.119S442.966 34.446 310.011 34.445z',
        });
      function J(e, t) {
        var n = e.title,
          r = e.titleId,
          c = Z(e, ['title', 'titleId']);
        return a.createElement(
          'svg',
          q({ viewBox: '0 0 551.13 551.13', ref: t, 'aria-labelledby': r }, c),
          n ? a.createElement('title', { id: r }, n) : null,
          $,
          Y
        );
      }
      var Q = a.forwardRef(J);
      n.p;
      function K() {
        return (K =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function ee(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              c = Object.keys(e);
            for (r = 0; r < c.length; r++) (n = c[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var c = Object.getOwnPropertySymbols(e);
          for (r = 0; r < c.length; r++)
            (n = c[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]));
        }
        return a;
      }
      var te = a.createElement('path', {
        d:
          'M0 464h480v16H0zM32 448h80c4.418 0 8-3.582 8-8V296c0-4.418-3.582-8-8-8H32c-4.418 0-8 3.582-8 8v144c0 4.418 3.582 8 8 8zm8-144h64v128H40V304zM256 448h80c4.418 0 8-3.582 8-8V200c0-4.418-3.582-8-8-8h-80c-4.418 0-8 3.582-8 8v240c0 4.418 3.582 8 8 8zm8-240h64v224h-64V208zM144 448h80c4.418 0 8-3.582 8-8V104c0-4.418-3.582-8-8-8h-80c-4.418 0-8 3.582-8 8v336c0 4.418 3.582 8 8 8zm8-336h64v320h-64V112zM368 448h80c4.418 0 8-3.582 8-8V8c0-4.418-3.582-8-8-8h-80c-4.418 0-8 3.582-8 8v432c0 4.418 3.582 8 8 8zm8-432h64v416h-64V16z',
      });
      function ne(e, t) {
        var n = e.title,
          r = e.titleId,
          c = ee(e, ['title', 'titleId']);
        return a.createElement(
          'svg',
          K({ viewBox: '0 0 480 480', ref: t, 'aria-labelledby': r }, c),
          n ? a.createElement('title', { id: r }, n) : null,
          te
        );
      }
      var re = a.forwardRef(ne);
      n.p;
      function ae() {
        return (ae =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function ce(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              c = Object.keys(e);
            for (r = 0; r < c.length; r++) (n = c[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var c = Object.getOwnPropertySymbols(e);
          for (r = 0; r < c.length; r++)
            (n = c[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]));
        }
        return a;
      }
      var le = a.createElement('path', {
          d:
            'M256 0C114.841 0 0 114.841 0 256s114.841 256 256 256 256-114.841 256-256S397.159 0 256 0zm0 482C131.383 482 30 380.617 30 256S131.383 30 256 30s226 101.383 226 226-101.383 226-226 226z',
        }),
        se = a.createElement('path', {
          d:
            'M256 270c57.897 0 105-47.103 105-105S313.897 60 256 60s-105 47.103-105 105 47.103 105 105 105zm0-180c41.355 0 75 33.645 75 75s-33.645 75-75 75-75-33.645-75-75 33.645-75 75-75zM424.649 335.443C404.716 312.918 376.049 300 346 300H166c-30.049 0-58.716 12.918-78.649 35.443l-7.11 8.035 5.306 9.325C120.364 413.99 185.678 452 256 452s135.636-38.01 170.454-99.198l5.306-9.325zM256 422c-55.736 0-107.761-28.197-138.383-74.295C131.069 336.353 148.196 330 166 330h180c17.804 0 34.931 6.353 48.383 17.705C363.761 393.803 311.736 422 256 422z',
        });
      function oe(e, t) {
        var n = e.title,
          r = e.titleId,
          c = ce(e, ['title', 'titleId']);
        return a.createElement(
          'svg',
          ae({ viewBox: '0 0 512 512', ref: t, 'aria-labelledby': r }, c),
          n ? a.createElement('title', { id: r }, n) : null,
          le,
          se
        );
      }
      var ie = a.forwardRef(oe);
      n.p;
      function me() {
        return (me =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function ue(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              c = Object.keys(e);
            for (r = 0; r < c.length; r++) (n = c[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var c = Object.getOwnPropertySymbols(e);
          for (r = 0; r < c.length; r++)
            (n = c[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]));
        }
        return a;
      }
      var de = a.createElement('path', {
          d:
            'M325.332031 251H16c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h309.332031c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0',
        }),
        fe = a.createElement('path', {
          d:
            'M240 336.332031c-4.097656 0-8.191406-1.554687-11.308594-4.691406-6.25-6.25-6.25-16.382813 0-22.636719l74.027344-74.023437-74.027344-74.027344c-6.25-6.25-6.25-16.386719 0-22.636719 6.253906-6.25 16.386719-6.25 22.636719 0l85.332031 85.335938c6.25 6.25 6.25 16.382812 0 22.632812l-85.332031 85.332032c-3.136719 3.160156-7.230469 4.714843-11.328125 4.714843zm0 0',
        }),
        pe = a.createElement('path', {
          d:
            'M256 469.667969c-97.089844 0-182.804688-58.410157-218.410156-148.824219-3.242188-8.191406.808594-17.492188 9.023437-20.734375 8.191407-3.199219 17.515625.789063 20.757813 9.046875C98.113281 387.214844 172.160156 437.667969 256 437.667969c111.742188 0 202.667969-90.925781 202.667969-202.667969S367.742188 32.332031 256 32.332031c-83.839844 0-157.886719 50.453125-188.628906 128.511719-3.265625 8.257812-12.566406 12.246094-20.757813 9.046875-8.214843-3.242187-12.265625-12.542969-9.023437-20.734375C73.195312 58.742188 158.910156.332031 256 .332031 385.386719.332031 490.667969 105.613281 490.667969 235S385.386719 469.667969 256 469.667969zm0 0',
        });
      function he(e, t) {
        var n = e.title,
          r = e.titleId,
          c = ue(e, ['title', 'titleId']);
        return a.createElement(
          'svg',
          me({ viewBox: '0 -10 490.66667 490', ref: t, 'aria-labelledby': r }, c),
          n ? a.createElement('title', { id: r }, n) : null,
          de,
          fe,
          pe
        );
      }
      var be = a.forwardRef(he),
        xe = (n.p, n(15));
      function ve() {
        var e = Object(r.a)([
          '\n  position: absolute;\n  padding: 5px 8px;\n  opacity: 0;\n  border-radius: 5px;\n  background-color: rgba(0, 0, 0, 0.9);\n  z-index: 10;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  animation: fadeIn 0.2s forwards 0.2s ease-in-out;\n\n  @keyframes fadeIn {\n    0% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n\n  & span {\n    font-size: 0.9rem;\n    color: ',
          ';\n  }\n\n  &.position-left {\n    left: calc(100% + 7px);\n    top: 50%;\n    transform: translateY(-50%);\n  }\n  &.position-right {\n    right: calc(100% + 7px);\n    top: 50%;\n    transform: translateY(-50%);\n  }\n\n  &.position-top {\n    left: 50%;\n    top: -7px;\n    transform: translateX(-50%);\n  }\n\n  &.position-bottom {\n    left: 50%;\n    top: calc(100% + 7px);\n    transform: translateX(-50%);\n\n    &:before {\n      content: "";\n      position: absolute;\n      top: -3px;\n      left: 50%;\n      transform: translateX(calc(-50% + 1px)) rotate(-45deg);\n      z-index: -10;\n      background-color: rgba(0, 0, 0, 0.9);\n      height: 12px;\n      width: 12px;\n    }\n  }\n',
        ]);
        return (
          (ve = function () {
            return e;
          }),
          e
        );
      }
      function ge() {
        var e = Object(r.a)(['\n  position: relative;\n']);
        return (
          (ge = function () {
            return e;
          }),
          e
        );
      }
      var Ee = i.d.div(ge()),
        ye = i.d.div(ve(), function (e) {
          return e.theme.main_bg;
        }),
        Oe = function (e) {
          var t = e.text,
            n = e.position,
            r = Object(a.useState)(null),
            l = Object(m.a)(r, 2),
            s = l[0],
            o = l[1],
            i = Object(a.useState)(null),
            u = Object(m.a)(i, 2),
            d = u[0],
            f = u[1],
            p = Object(a.useRef)(null);
          return (
            Object(a.useEffect)(
              function () {
                p.current &&
                  (o(p.current.getBoundingClientRect().height),
                  f(p.current.getBoundingClientRect().width));
              },
              [p]
            ),
            c.a.createElement(
              ye,
              { height: s, width: d, className: 'position-'.concat(n), ref: p },
              c.a.createElement('span', null, t)
            )
          );
        },
        je = function (e) {
          var t = e.text,
            n = e.render,
            r = e.position,
            l = void 0 === r ? 'bottom' : r,
            s = e.style,
            o = void 0 === s ? {} : s,
            i = Object(a.useState)(!1),
            u = Object(m.a)(i, 2),
            d = u[0],
            f = u[1],
            p = Object(a.useRef)(null);
          return (
            Object(a.useEffect)(
              function () {
                if (p.current) {
                  var e = function () {
                      f(!0);
                    },
                    t = function () {
                      f(!1);
                    };
                  return (
                    p.current.addEventListener('click', t),
                    p.current.addEventListener('mouseover', e),
                    p.current.addEventListener('mouseleave', t),
                    function () {
                      var n, r, a;
                      null === (n = p.current) ||
                        void 0 === n ||
                        n.removeEventListener('click', t),
                        null === (r = p.current) ||
                          void 0 === r ||
                          r.removeEventListener('mouseover', e),
                        null === (a = p.current) ||
                          void 0 === a ||
                          a.removeEventListener('mouseleave', t);
                    }
                  );
                }
              },
              [p]
            ),
            c.a.createElement(
              Ee,
              { style: Object(xe.a)({}, o) },
              n(p),
              d && c.a.createElement(Oe, { text: t, position: l })
            )
          );
        };
      function we() {
        var e = Object(r.a)([
          '\n  position: relative;\n  border: none;\n  cursor: pointer;\n  outline: none;\n  height: 40px;\n  width: 40px;\n  flex-shrink: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 20px;\n  background-color: rgba(0, 0, 0, 0.2);\n\n  & svg {\n    flex: 1;\n    width: 22px;\n    height: 22px;\n  }\n\n  &:hover {\n    background-color: rgba(0, 0, 0, 0.6);\n\n    & svg {\n      fill: ',
          ';\n    }\n  }\n',
        ]);
        return (
          (we = function () {
            return e;
          }),
          e
        );
      }
      function ze() {
        var e = Object(r.a)([
          '\n  position: relative;\n  height: 40px;\n  width: 40px;\n  flex-shrink: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 20px;\n  background-color: rgba(0, 0, 0, 0.2);\n\n  &:hover {\n    background-color: rgba(0, 0, 0, 0.35);\n    transition: background-color 0.15s ease;\n  }\n\n  & svg {\n    flex: 1;\n    width: 22px;\n    height: 22px;\n  }\n\n  &.active {\n    background-color: rgba(0, 0, 0, 0.6);\n\n    & svg {\n      fill: ',
          ';\n    }\n  }\n',
        ]);
        return (
          (ze = function () {
            return e;
          }),
          e
        );
      }
      var Ne = Object(i.d)(o.b)(ze(), function (e) {
          return e.theme.blue;
        }),
        ke = i.d.button(we(), function (e) {
          return e.theme.blue;
        }),
        Me = function (e) {
          var t = e.name,
            n = e.icon,
            r = e.path,
            a = e.onClick,
            l = void 0 === a ? function () {} : a;
          return c.a.createElement(je, {
            text: t,
            position: 'bottom',
            render: function (e) {
              return r
                ? c.a.createElement(Ne, { to: r, activeClassName: 'active', ref: e }, n)
                : c.a.createElement(ke, { ref: e, onClick: l }, n);
            },
            style: { marginLeft: '15px' },
          });
        };
      function Se() {
        var e = Object(r.a)(['\n  display: flex;\n']);
        return (
          (Se = function () {
            return e;
          }),
          e
        );
      }
      var Ve = i.d.div(Se()),
        Ce = [
          {
            id: 0,
            name: 'Practice',
            icon: c.a.createElement(W, null),
            path: '/practice',
          },
          { id: 1, name: 'History', icon: c.a.createElement(Q, null), path: '/history' },
          {
            id: 2,
            name: 'Rankings',
            icon: c.a.createElement(re, null),
            path: '/rankings',
          },
        ],
        Ie = function (e) {
          var t = e.toggleAdmin,
            n = e.toggleAuth,
            r = Object(a.useContext)(d).isLoggedIn,
            l = Object(a.useMemo)(
              function () {
                return [].concat(
                  Ce,
                  r
                    ? [
                        {
                          id: 3,
                          name: 'User',
                          icon: c.a.createElement(ie, null),
                          onClick: t,
                        },
                      ]
                    : [
                        {
                          id: 3,
                          name: 'Login/Register',
                          icon: c.a.createElement(be, null),
                          onClick: n,
                        },
                      ]
                );
              },
              [r, t, n]
            );
          return c.a.createElement(
            Ve,
            null,
            l.map(function (e) {
              return c.a.createElement(Me, {
                key: e.id,
                name: e.name,
                icon: e.icon,
                path: e.path,
                onClick: e.onClick,
              });
            })
          );
        },
        Re = n(48),
        Le = n(49);
      function He() {
        var e = Object(r.a)([
          '\n  outline: none;\n  width: 100%;\n  height: 100%;\n  padding: 7px;\n  border: none;\n  background-color: rgb(230, 230, 230);\n',
        ]);
        return (
          (He = function () {
            return e;
          }),
          e
        );
      }
      var Pe = i.d.input(He()),
        Ae = c.a.forwardRef(function (e, t) {
          return c.a.createElement(Pe, Object.assign({}, e, { ref: t }));
        });
      function _e() {
        var e = Object(r.a)([
          '\n  font-size: 0.85rem;\n  font-weight: 700;\n  color: ',
          ';\n  text-transform: capitalize;\n  padding-left: 3px;\n',
        ]);
        return (
          (_e = function () {
            return e;
          }),
          e
        );
      }
      var Be = i.d.label(_e(), function (e) {
          return e.theme.black;
        }),
        Xe = function (e) {
          var t = e.children;
          return c.a.createElement(Be, { htmlFor: t }, t);
        };
      function Ue() {
        var e = Object(r.a)(['\n  margin-bottom: 7px;\n']);
        return (
          (Ue = function () {
            return e;
          }),
          e
        );
      }
      var De = i.d.h3(Ue()),
        Fe = function (e) {
          var t = e.children;
          return c.a.createElement(De, null, t);
        };
      function Ge() {
        var e = Object(r.a)([
          '\n      color: ',
          ';\n      border-color: ',
          ';\n      &:hover {\n        background-color: ',
          ';\n        color: ',
          ';\n      }\n    ',
        ]);
        return (
          (Ge = function () {
            return e;
          }),
          e
        );
      }
      function Te() {
        var e = Object(r.a)([
          '\n      color: ',
          ';\n      border-color: ',
          ';\n      &:hover {\n        background-color: ',
          ';\n        color: ',
          ';\n      }\n    ',
        ]);
        return (
          (Te = function () {
            return e;
          }),
          e
        );
      }
      function We() {
        var e = Object(r.a)([
          '\n  border-radius: 7px;\n  margin: 10px;\n  padding: 5px 10px;\n  text-transform: uppercase;\n  font-size: 0.8rem;\n  cursor: pointer;\n  font-weight: 600;\n  outline: none;\n  border-width: 1px;\n  border-style: solid;\n  background-color: transparent;\n  transition: background-color 0.3s ease, color 0.2s ease;\n\n  ',
          '\n  ',
          '\n',
        ]);
        return (
          (We = function () {
            return e;
          }),
          e
        );
      }
      var qe = i.d.button(
        We(),
        function (e) {
          return (
            e.primary &&
            Object(i.c)(
              Te(),
              function (e) {
                return e.theme.green;
              },
              function (e) {
                return e.theme.green;
              },
              function (e) {
                return e.theme.green;
              },
              function (e) {
                return e.theme.black;
              }
            )
          );
        },
        function (e) {
          return (
            e.danger &&
            Object(i.c)(
              Ge(),
              function (e) {
                return e.theme.lightpink;
              },
              function (e) {
                return e.theme.lightpink;
              },
              function (e) {
                return e.theme.lightpink;
              },
              function (e) {
                return e.theme.black;
              }
            )
          );
        }
      );
      function Ze() {
        return (Ze =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function $e(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              c = Object.keys(e);
            for (r = 0; r < c.length; r++) (n = c[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var c = Object.getOwnPropertySymbols(e);
          for (r = 0; r < c.length; r++)
            (n = c[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]));
        }
        return a;
      }
      var Ye = a.createElement('path', {
          d:
            'M510.096 249.937c-4.032-5.867-100.928-143.275-254.101-143.275-131.435 0-248.555 136.619-253.483 142.443-3.349 3.968-3.349 9.792 0 13.781C7.44 268.71 124.56 405.329 255.995 405.329S504.549 268.71 509.477 262.886c3.094-3.669 3.371-8.981.619-12.949zM255.995 383.996c-105.365 0-205.547-100.48-230.997-128 25.408-27.541 125.483-128 230.997-128 123.285 0 210.304 100.331 231.552 127.424-24.534 26.645-125.291 128.576-231.552 128.576z',
        }),
        Je = a.createElement('path', {
          d:
            'M255.995 170.662c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333 85.333-38.272 85.333-85.333-38.272-85.333-85.333-85.333zm0 149.334c-35.285 0-64-28.715-64-64s28.715-64 64-64 64 28.715 64 64-28.715 64-64 64z',
        });
      function Qe(e, t) {
        var n = e.title,
          r = e.titleId,
          c = $e(e, ['title', 'titleId']);
        return a.createElement(
          'svg',
          Ze({ viewBox: '0 0 511.992 511.992', ref: t, 'aria-labelledby': r }, c),
          n ? a.createElement('title', { id: r }, n) : null,
          Ye,
          Je
        );
      }
      var Ke = a.forwardRef(Qe);
      n.p;
      function et() {
        return (et =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function tt(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              c = Object.keys(e);
            for (r = 0; r < c.length; r++) (n = c[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var c = Object.getOwnPropertySymbols(e);
          for (r = 0; r < c.length; r++)
            (n = c[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]));
        }
        return a;
      }
      var nt = a.createElement('path', {
          d:
            'M316.332 195.662c-4.16-4.16-10.923-4.16-15.083 0s-4.16 10.944 0 15.083c12.075 12.075 18.752 28.139 18.752 45.248 0 35.285-28.715 64-64 64-17.109 0-33.173-6.656-45.248-18.752-4.16-4.16-10.923-4.16-15.083 0-4.16 4.139-4.16 10.923 0 15.083 16.085 16.128 37.525 25.003 60.331 25.003 47.061 0 85.333-38.272 85.333-85.333 0-22.807-8.874-44.247-25.002-60.332zM270.87 172.131c-4.843-.853-9.792-1.472-14.869-1.472-47.061 0-85.333 38.272-85.333 85.333 0 5.077.619 10.027 1.493 14.869.917 5.163 5.419 8.811 10.475 8.811.619 0 1.237-.043 1.877-.171 5.781-1.024 9.664-6.571 8.64-12.352-.661-3.627-1.152-7.317-1.152-11.157 0-35.285 28.715-64 64-64 3.84 0 7.531.491 11.157 1.131 5.675 1.152 11.328-2.859 12.352-8.64 1.024-5.781-2.858-11.328-8.64-12.352z',
        }),
        rt = a.createElement('path', {
          d:
            'M509.462 249.102c-2.411-2.859-60.117-70.208-139.712-111.445-5.163-2.709-11.669-.661-14.379 4.587-2.709 5.227-.661 11.669 4.587 14.379 61.312 31.744 110.293 81.28 127.04 99.371-25.429 27.541-125.504 128-230.997 128-35.797 0-71.872-8.64-107.264-25.707-5.248-2.581-11.669-.341-14.229 4.971-2.581 5.291-.341 11.669 4.971 14.229 38.293 18.496 77.504 27.84 116.523 27.84 131.435 0 248.555-136.619 253.483-142.443 3.369-3.969 3.348-9.793-.023-13.782zM325.996 118.947c-24.277-8.171-47.829-12.288-69.995-12.288-131.435 0-248.555 136.619-253.483 142.443-3.115 3.669-3.371 9.003-.597 12.992 1.472 2.112 36.736 52.181 97.856 92.779 1.813 1.216 3.84 1.792 5.888 1.792 3.435 0 6.827-1.664 8.875-4.8 3.264-4.885 1.92-11.52-2.987-14.763-44.885-29.845-75.605-65.877-87.104-80.533 24.555-26.667 125.291-128.576 231.552-128.576 19.861 0 41.131 3.755 63.189 11.157 5.589 2.005 11.648-1.088 13.504-6.699 1.878-5.589-1.109-11.626-6.698-13.504z',
        }),
        at = a.createElement('path', {
          d:
            'M444.865 67.128c-4.16-4.16-10.923-4.16-15.083 0L67.116 429.795c-4.16 4.16-4.16 10.923 0 15.083 2.091 2.069 4.821 3.115 7.552 3.115s5.461-1.045 7.531-3.115L444.865 82.211c4.16-4.16 4.16-10.923 0-15.083z',
        });
      function ct(e, t) {
        var n = e.title,
          r = e.titleId,
          c = tt(e, ['title', 'titleId']);
        return a.createElement(
          'svg',
          et({ viewBox: '0 0 512.001 512.001', ref: t, 'aria-labelledby': r }, c),
          n ? a.createElement('title', { id: r }, n) : null,
          nt,
          rt,
          at
        );
      }
      var lt,
        st = a.forwardRef(ct);
      n.p;
      function ot() {
        var e = Object(r.a)([
          '\n      border: none;\n      background-color: ',
          ';\n      color: ',
          ';\n    ',
        ]);
        return (
          (ot = function () {
            return e;
          }),
          e
        );
      }
      function it() {
        var e = Object(r.a)(['\n  margin: 0;\n  ', '\n']);
        return (
          (it = function () {
            return e;
          }),
          e
        );
      }
      function mt() {
        var e = Object(r.a)([
          '\n  width: 100%;\n  padding: 5px 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n',
        ]);
        return (
          (mt = function () {
            return e;
          }),
          e
        );
      }
      function ut() {
        var e = Object(r.a)([
          '\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  height: 25px;\n  width: 25px;\n  right: 5px;\n  top: 50%;\n  transform: translateY(-50%);\n  border-radius: 15px;\n  background-color: transparent;\n\n  &:hover {\n    background-color: ',
          ';\n  }\n\n  & svg {\n    height: 80%;\n    width: 80%;\n  }\n',
        ]);
        return (
          (ut = function () {
            return e;
          }),
          e
        );
      }
      function dt() {
        var e = Object(r.a)([
          '\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 30px;\n  margin-bottom: 10px;\n  border-radius: 7px;\n',
        ]);
        return (
          (dt = function () {
            return e;
          }),
          e
        );
      }
      function ft() {
        var e = Object(r.a)(['\n  width: 100%;\n  padding: 15px;\n']);
        return (
          (ft = function () {
            return e;
          }),
          e
        );
      }
      !(function (e) {
        (e.USERNAME = 'username'), (e.PASSWORD = 'password');
      })(lt || (lt = {}));
      var pt,
        ht = i.d.form(ft()),
        bt = i.d.div(dt()),
        xt = i.d.div(ut(), function (e) {
          return e.theme.main_bg;
        }),
        vt = i.d.div(mt()),
        gt = Object(i.d)(qe)(it(), function (e) {
          return (
            e.primary &&
            Object(i.c)(
              ot(),
              function (e) {
                return e.theme.green;
              },
              function (e) {
                return e.theme.black;
              }
            )
          );
        }),
        Et = function (e) {
          var t = e.toggleCurrentView,
            n = Object(a.useState)(''),
            r = Object(m.a)(n, 2),
            l = r[0],
            s = r[1],
            o = Object(a.useState)(''),
            i = Object(m.a)(o, 2),
            u = i[0],
            d = i[1],
            f = Object(a.useState)(!1),
            p = Object(m.a)(f, 2),
            h = p[0],
            b = p[1],
            x = function (e) {
              switch (e.target.name) {
                case lt.USERNAME:
                  s(e.target.value);
                  break;
                case lt.PASSWORD:
                  d(e.target.value);
                  break;
                default:
                  return;
              }
            };
          return c.a.createElement(
            ht,
            {
              onSubmit: function (e) {
                return e.preventDefault();
              },
            },
            c.a.createElement(Fe, null, 'Login'),
            c.a.createElement(Xe, null, lt.USERNAME),
            c.a.createElement(
              bt,
              null,
              c.a.createElement(Ae, {
                type: 'text',
                name: lt.USERNAME,
                value: l,
                onChange: x,
                placeholder: 'johnyb04',
              })
            ),
            c.a.createElement(Xe, null, lt.PASSWORD),
            c.a.createElement(
              bt,
              null,
              c.a.createElement(Ae, {
                type: h ? 'text' : 'password',
                name: lt.PASSWORD,
                value: u,
                onChange: x,
                placeholder: '********',
              }),
              c.a.createElement(
                xt,
                null,
                h
                  ? c.a.createElement(Ke, {
                      onClick: function () {
                        return b(!1);
                      },
                    })
                  : c.a.createElement(st, {
                      onClick: function () {
                        return b(!0);
                      },
                    })
              )
            ),
            c.a.createElement(
              vt,
              null,
              c.a.createElement(gt, { onClick: t }, 'Register'),
              c.a.createElement(
                gt,
                {
                  primary: !0,
                  onClick: function () {
                    console.log(l);
                  },
                },
                'Submit'
              )
            )
          );
        },
        yt = n(32);
      function Ot() {
        var e = Object(r.a)([
          '\n      border: none;\n      background-color: ',
          ';\n      color: ',
          ';\n    ',
        ]);
        return (
          (Ot = function () {
            return e;
          }),
          e
        );
      }
      function jt() {
        var e = Object(r.a)(['\n  margin: 0;\n  ', '\n']);
        return (
          (jt = function () {
            return e;
          }),
          e
        );
      }
      function wt() {
        var e = Object(r.a)([
          '\n  width: 100%;\n  padding: 5px 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n',
        ]);
        return (
          (wt = function () {
            return e;
          }),
          e
        );
      }
      function zt() {
        var e = Object(r.a)([
          '\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  height: 25px;\n  width: 25px;\n  right: 5px;\n  top: 50%;\n  transform: translateY(-50%);\n  border-radius: 15px;\n  background-color: transparent;\n\n  &:hover {\n    background-color: ',
          ';\n  }\n\n  & svg {\n    height: 80%;\n    width: 80%;\n  }\n',
        ]);
        return (
          (zt = function () {
            return e;
          }),
          e
        );
      }
      function Nt() {
        var e = Object(r.a)([
          '\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 30px;\n  margin-bottom: 10px;\n  border-radius: 7px;\n',
        ]);
        return (
          (Nt = function () {
            return e;
          }),
          e
        );
      }
      function kt() {
        var e = Object(r.a)(['\n  width: 100%;\n  padding: 15px;\n']);
        return (
          (kt = function () {
            return e;
          }),
          e
        );
      }
      !(function (e) {
        (e.FULL_NAME = 'full name'),
          (e.EMAIL = 'email'),
          (e.USERNAME = 'username'),
          (e.PASSWORD = 'password');
      })(pt || (pt = {}));
      var Mt,
        St = i.d.form(kt()),
        Vt = i.d.div(Nt()),
        Ct =
          (i.d.div(zt(), function (e) {
            return e.theme.main_bg;
          }),
          i.d.div(wt())),
        It = Object(i.d)(qe)(jt(), function (e) {
          return (
            e.primary &&
            Object(i.c)(
              Ot(),
              function (e) {
                return e.theme.green;
              },
              function (e) {
                return e.theme.black;
              }
            )
          );
        }),
        Rt = function (e) {
          var t = e.toggleCurrentView,
            n = Object(a.useState)(''),
            r = Object(m.a)(n, 2),
            l = r[0],
            s = r[1],
            o = Object(a.useState)(''),
            i = Object(m.a)(o, 2),
            u = i[0],
            f = i[1],
            p = Object(a.useState)(''),
            h = Object(m.a)(p, 2),
            b = h[0],
            x = h[1],
            v = Object(a.useState)(''),
            g = Object(m.a)(v, 2),
            E = g[0],
            y = g[1],
            O = Object(yt.a)(),
            j = O.handleSubmit,
            w = O.register,
            z = (O.errors, Object(a.useContext)(d).registerUser),
            N = function (e) {
              var t = e.target,
                n = t.name,
                r = t.value;
              switch (n) {
                case pt.FULL_NAME:
                  s(r);
                  break;
                case pt.EMAIL:
                  f(r);
                  break;
                case pt.USERNAME:
                  x(r);
                  break;
                case pt.PASSWORD:
                  y(r);
                  break;
                default:
                  return;
              }
            };
          return c.a.createElement(
            St,
            {
              onSubmit: function (e) {
                return e.preventDefault();
              },
            },
            c.a.createElement(Fe, null, 'Register'),
            c.a.createElement(Xe, null, pt.FULL_NAME),
            c.a.createElement(
              Vt,
              null,
              c.a.createElement(Ae, {
                type: 'text',
                placeholder: 'John Doe',
                value: l,
                onChange: N,
                name: pt.FULL_NAME,
                ref: w({
                  required: 'required',
                  pattern: {
                    value: new RegExp('^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$'),
                    message: 'ivalid input',
                  },
                }),
              })
            ),
            c.a.createElement(Xe, null, pt.EMAIL),
            c.a.createElement(
              Vt,
              null,
              c.a.createElement(Ae, {
                type: 'text',
                placeholder: 'johndoe@somemail.com',
                value: u,
                onChange: N,
                name: pt.EMAIL,
                ref: w({
                  required: 'required',
                  pattern: {
                    value: new RegExp('^w+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$'),
                    message: 'ivalid input',
                  },
                }),
              })
            ),
            c.a.createElement(Xe, null, pt.USERNAME),
            c.a.createElement(
              Vt,
              null,
              c.a.createElement(Ae, {
                type: 'text',
                placeholder: 'johnyboiii',
                value: b,
                onChange: N,
                name: pt.USERNAME,
                ref: w({
                  required: 'required',
                  pattern: {
                    value: new RegExp(
                      '^(?=[a-zA-Z0-9._]{8,20}$)(?!.*[_.]{2})[^_.].*[^_.]$'
                    ),
                    message: 'ivalid input',
                  },
                }),
              })
            ),
            c.a.createElement(Xe, null, pt.PASSWORD),
            c.a.createElement(
              Vt,
              null,
              c.a.createElement(Ae, {
                type: 'text',
                placeholder: 'Somepw123+',
                value: E,
                onChange: N,
                name: pt.PASSWORD,
                ref: w({
                  required: 'required',
                  pattern: {
                    value: new RegExp(
                      '^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$'
                    ),
                    message: 'ivalid password',
                  },
                }),
              })
            ),
            c.a.createElement(
              Ct,
              null,
              c.a.createElement(It, { onClick: t }, 'Login'),
              c.a.createElement(
                It,
                {
                  primary: !0,
                  onClick: function () {
                    try {
                      j(function () {
                        return z({ fullName: l, username: b, email: u, password: E });
                      });
                    } catch (e) {
                      console.log('error');
                    }
                  },
                },
                'Submit'
              )
            )
          );
        };
      function Lt() {
        var e = Object(r.a)([
          '\n  position: absolute;\n  z-index: 1;\n  right: 0;\n\n  overflow: hidden;\n  top: calc(100% + 10px);\n  width: 300px;\n  border-radius: 10px;\n  background-color: ',
          ';\n  box-shadow: ',
          ';\n  transition: height 0.2s ease;\n\n  .login-enter {\n    transform: scale(0.8) translateX(-300px);\n  }\n\n  .login-enter-active {\n    animation: login-enter 0.5s forwards ease-in-out;\n  }\n\n  .login-exit {\n    transform: scale(1) translateX(0);\n  }\n  .login-exit-active {\n    animation: login-leave 0.4s forwards ease-in-out;\n  }\n\n  .register-enter {\n    transform: scale(0.8) translateX(300px);\n  }\n\n  .register-enter-active {\n    animation: register-enter 0.5s forwards ease-in-out;\n  }\n\n  .register-exit {\n    transform: scale(1) translateX(0);\n  }\n\n  .register-exit-active {\n    animation: register-leave 0.4s forwards ease-in-out;\n  }\n\n  @keyframes login-enter {\n    0% {\n      transform: scale(0.85) translateX(-300px);\n    }\n    45% {\n      transform: scale(0.85) translateX(0);\n    }\n    100% {\n      transform: scale(1) translateX(0);\n    }\n  }\n  @keyframes login-leave {\n    0% {\n      transform: scale(1) translateX(0);\n    }\n    45% {\n      transform: scale(0.85) translateX(0);\n    }\n    100% {\n      transform: scale(0.85) translateX(-600px);\n    }\n  }\n\n  @keyframes register-enter {\n    0% {\n      transform: scale(0.85) translateX(300px);\n    }\n    45% {\n      transform: scale(0.85) translateX(0);\n    }\n    100% {\n      transform: scale(1) translateX(0);\n    }\n  }\n\n  @keyframes register-leave {\n    0% {\n      transform: scale(1) translateX(0);\n    }\n    45% {\n      transform: scale(0.85) translateX(0);\n    }\n    100% {\n      transform: scale(0.85) translateX(600px);\n    }\n  }\n',
        ]);
        return (
          (Lt = function () {
            return e;
          }),
          e
        );
      }
      !(function (e) {
        (e[(e.LOGIN = 0)] = 'LOGIN'), (e[(e.REGISTER = 1)] = 'REGISTER');
      })(Mt || (Mt = {}));
      var Ht = i.d.div(
          Lt(),
          function (e) {
            return e.theme.main_bg;
          },
          function (e) {
            return e.theme.box_shadow_md;
          }
        ),
        Pt = function (e) {
          var t,
            n,
            r,
            l = e.handleClickOutside,
            s = e.navBarRef,
            o = Object(a.useState)('LOGIN'),
            i = Object(m.a)(o, 2),
            u = i[0],
            d = i[1],
            f = Object(a.useRef)(null),
            p = Object(a.useState)(null),
            h = Object(m.a)(p, 2),
            b = h[0],
            x = h[1];
          (t = f),
            (n = l),
            (r = s),
            Object(a.useEffect)(
              function () {
                if (t.current) {
                  var e = function (e) {
                    var a = e ? e.target || e.srcElement : null;
                    a &&
                      r &&
                      a !== r.current &&
                      !r.current.contains(a) &&
                      (t.current.contains(a) || n());
                  };
                  return (
                    document.addEventListener('mousedown', e),
                    function () {
                      document.removeEventListener('mousedown', e);
                    }
                  );
                }
              },
              [t, n, r]
            ),
            Object(a.useEffect)(
              function () {
                f.current && x(f.current.offsetHeight);
              },
              [u]
            );
          var v = function () {
            switch (u) {
              case 'LOGIN':
                d('REGISTER');
                break;
              case 'REGISTER':
                d('LOGIN');
                break;
              default:
                return;
            }
          };
          return c.a.createElement(
            Ht,
            { ref: f, style: { height: b ? ''.concat(b, 'px') : '' } },
            c.a.createElement(
              Re.a,
              null,
              c.a.createElement(
                Le.a,
                {
                  key: u,
                  timeout: { enter: 600, exit: 400 },
                  unmountOnExit: !0,
                  classNames: 'LOGIN' === u ? 'login' : 'register',
                  onEnter: function (e) {
                    x(e.offsetHeight);
                  },
                },
                'LOGIN' === u
                  ? c.a.createElement(Et, { toggleCurrentView: v })
                  : c.a.createElement(Rt, { toggleCurrentView: v })
              )
            )
          );
        };
      function At() {
        var e = Object(r.a)([
          '\n  position: relative;\n  height: 66px;\n  background-color: ',
          ';\n  box-shadow: ',
          ';\n  padding: 0 calc(20px + 0.5vw);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-radius: 6px;\n',
        ]);
        return (
          (At = function () {
            return e;
          }),
          e
        );
      }
      var _t = i.d.header(
          At(),
          function (e) {
            return e.theme.blue;
          },
          function (e) {
            return e.theme.box_shadow_lg;
          }
        ),
        Bt = function () {
          var e = Object(a.useState)(!1),
            t = Object(m.a)(e, 2),
            n = t[0],
            r = t[1],
            l = Object(a.useState)(!1),
            s = Object(m.a)(l, 2),
            o = (s[0], s[1], Object(a.useRef)(null)),
            i = function () {
              r(!n);
            };
          return c.a.createElement(
            _t,
            { ref: o },
            c.a.createElement(X, null),
            c.a.createElement(Ie, { toggleAuth: i, toggleAdmin: i }),
            n && c.a.createElement(Pt, { handleClickOutside: i, navBarRef: o })
          );
        },
        Xt = n(6),
        Ut = n(9),
        Dt = n(7),
        Ft = n.n(Dt),
        Gt = n(14);
      function Tt() {
        return (Tt =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function Wt(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              c = Object.keys(e);
            for (r = 0; r < c.length; r++) (n = c[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var c = Object.getOwnPropertySymbols(e);
          for (r = 0; r < c.length; r++)
            (n = c[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]));
        }
        return a;
      }
      var qt = a.createElement(
          'style',
          { type: 'text/css' },
          "\n\t.st0{fill:none;stroke:#666666;stroke-width:0.5;stroke-miterlimit:10;}\n\t.st1{\n        opacity: 0;\n        font-family:'ArialMT', 'Arial', 'Helvetica', 'sans-serif';\n        font-size:15px;\n    }\n    .st2{\n        opacity: 1;\n        fill:#666666;\n    }\n\n\t.b{font-size:26px;}\n\t.b2{font-size:24px;}\n\t.s{font-size:12px;}\n\n\tpath.active{ fill: #9CBFD3; }\n\tpath.deadkey{fill: orange;}\n    text {user-select: none; opacity: 0;}\n\ttext.active{fill:#FFFFFF;}\n\tpath.correct{stroke:#C2EA9A;stroke-width:4;}\n\ttext.correct{}\n\tpath.incorrect{fill:#E97E7E;}\n\ttext.incorrect{fill:white;}\n\t\n\t.theme-bone .st0 {fill: #fff; stroke-width: 1; stroke: #d1d1d1;}\n\t.theme-bone\t.st0.active { fill: #0383F2; }\n\t.theme-bone .st1 {font-size:14px;}\n\t.theme-bone .s {font-size:11px;}\n\t.theme-bone .b {font-size: 24px;}\n\t\n\t.theme-bone .st2 {opacity: 0;}\n\t.theme-bone .st0.incorrect {transition: none; fill:#F5687C;}\n\t.theme-bone .b.incorrect {opacity: 1; transition: none;}\n\t.theme-bone .hide-on-bone {opacity: 0;}\n\t.theme-bone .b.focus-row {opacity: 1;}\n\t.theme-bone .st0, .theme-bone text {\n\t\ttransition: fill .5s, opacity 1.2s;\n\t\ttransition-delay: .25s;\n\t}\n\t\n\t.is-blind .st2 {fill: #d7ff12;}\n\t.is-blind .st0 {fill: #272822; stroke: #858585;}\n\t.is-blind .b {font-size:30px;}\n\t.is-blind .b2 {font-size:28px;}\n\t.is-blind path.active{ fill: rgb(121, 187, 255); }\n\t.is-blind path.deadkey{fill: orange;}\n\t.is-blind path.incorrect{fill:#E97E7E;}\n"
        ),
        Zt = a.createElement(
          'g',
          { id: 'keys' },
          a.createElement('path', {
            id: 'tilda',
            className: 'st0',
            d:
              'M58.4,53.7c0,1.7-1.4,3-3,3H18.9c-1.6,0-3-1.3-3-3V18.3c0-1.7,1.3-3,3-3h36.5c1.6,0,3,1.3,3,3V53.7z',
          }),
          a.createElement('path', {
            id: 'key-1',
            className: 'st0',
            d:
              'M103.4,53.7c0,1.7-1.3,3-3,3H63.9c-1.7,0-3-1.3-3-3V18.3c0-1.6,1.3-3,3-3h36.5c1.7,0,3,1.4,3,3V53.7z',
          }),
          a.createElement('path', {
            id: 'q',
            className: 'st0',
            d:
              'M126.7,97.6c0,1.6-1.3,3-3,3H87.2c-1.7,0-3-1.4-3-3V62.3c0-1.6,1.3-3,3-3h36.5c1.7,0,3,1.4,3,3V97.6z',
          }),
          a.createElement('path', {
            id: 'a',
            className: 'st0',
            d:
              'M137.4,141.5c0,1.6-1.4,3-3,3H97.9c-1.7,0-3-1.4-3-3v-35.4c0-1.7,1.3-3,3-3h36.5c1.6,0,3,1.3,3,3V141.5z',
          }),
          a.createElement('path', {
            id: 'z',
            className: 'st0',
            d:
              'M160.8,185.4c0,1.7-1.4,3-3,3h-36.5c-1.7,0-3-1.3-3-3v-35.3c0-1.7,1.3-3,3-3h36.5c1.6,0,3,1.3,3,3V185.4z',
          }),
          a.createElement('path', {
            id: 'x',
            className: 'st0',
            d:
              'M205.8,185.4c0,1.7-1.4,3-3,3h-36.5c-1.7,0-3-1.3-3-3v-35.3c0-1.6,1.3-3,3-3h36.5c1.6,0,3,1.4,3,3V185.4z',
          }),
          a.createElement('path', {
            id: 'c',
            className: 'st0',
            d:
              'M250.8,185.4c0,1.7-1.4,3-3,3h-36.5c-1.7,0-3-1.3-3-3v-35.3c0-1.6,1.3-3,3-3h36.5c1.6,0,3,1.4,3,3V185.4z',
          }),
          a.createElement('path', {
            id: 'v',
            className: 'st0',
            d:
              'M295.8,185.4c0,1.7-1.4,3-3,3h-36.5c-1.7,0-3-1.3-3-3v-35.3c0-1.6,1.3-3,3-3h36.5c1.6,0,3,1.4,3,3V185.4z',
          }),
          a.createElement('path', {
            id: 'b',
            className: 'st0',
            d:
              'M340.8,185.4c0,1.7-1.4,3-3,3h-36.6c-1.6,0-3-1.3-3-3v-35.3c0-1.6,1.4-3,3-3h36.6c1.6,0,3,1.4,3,3V185.4z',
          }),
          a.createElement('path', {
            id: 'n',
            className: 'st0',
            d:
              'M385.8,185.4c0,1.7-1.4,3-3,3h-36.5c-1.6,0-3-1.3-3-3v-35.3c0-1.6,1.4-3,3-3h36.5c1.6,0,3,1.4,3,3V185.4z',
          }),
          a.createElement('path', {
            id: 'm',
            className: 'st0',
            d:
              'M430.8,185.4c0,1.7-1.4,3-3,3h-36.5c-1.6,0-3-1.3-3-3v-35.3c0-1.6,1.4-3,3-3h36.5c1.6,0,3,1.4,3,3V185.4z',
          }),
          a.createElement('path', {
            id: 'comma',
            className: 'st0',
            d:
              'M475.8,185.4c0,1.7-1.4,3-3,3h-36.5c-1.6,0-3-1.3-3-3v-35.3c0-1.6,1.4-3,3-3h36.5c1.6,0,3,1.4,3,3V185.4z',
          }),
          a.createElement('path', {
            id: 'dot',
            className: 'st0',
            d:
              'M520.8,185.4c0,1.7-1.3,3-3,3h-36.5c-1.6,0-3-1.3-3-3v-35.3c0-1.6,1.4-3,3-3h36.5c1.7,0,3,1.4,3,3V185.4z',
          }),
          a.createElement('path', {
            id: 'slash',
            className: 'st0',
            d:
              'M565.8,185.4c0,1.7-1.3,3-3,3h-36.5c-1.6,0-3-1.3-3-3v-35.3c0-1.6,1.4-3,3-3h36.5c1.7,0,3,1.4,3,3V185.4z',
          }),
          a.createElement('path', {
            id: 's',
            className: 'st0',
            d:
              'M182.4,141.5c0,1.6-1.4,3-3,3h-36.5c-1.6,0-3-1.4-3-3v-35.4c0-1.7,1.4-3,3-3h36.5c1.6,0,3,1.3,3,3V141.5z',
          }),
          a.createElement('path', {
            id: 'd',
            className: 'st0',
            d:
              'M227.4,141.5c0,1.6-1.4,3-3,3h-36.5c-1.6,0-3-1.4-3-3v-35.4c0-1.7,1.4-3,3-3h36.5c1.6,0,3,1.3,3,3V141.5z',
          }),
          a.createElement('path', {
            id: 'f',
            className: 'st0',
            d:
              'M272.4,141.5c0,1.6-1.4,3-3,3h-36.5c-1.6,0-3-1.4-3-3v-35.4c0-1.7,1.4-3,3-3h36.5c1.6,0,3,1.3,3,3V141.5z',
          }),
          a.createElement('path', {
            id: 'g',
            className: 'st0',
            d:
              'M317.4,141.5c0,1.6-1.4,3-3,3h-36.5c-1.6,0-3-1.4-3-3v-35.4c0-1.7,1.4-3,3-3h36.5c1.6,0,3,1.3,3,3V141.5z',
          }),
          a.createElement('path', {
            id: 'h',
            className: 'st0',
            d:
              'M362.4,141.5c0,1.6-1.4,3-3,3h-36.5c-1.6,0-3-1.4-3-3v-35.4c0-1.7,1.4-3,3-3h36.5c1.6,0,3,1.3,3,3V141.5z',
          }),
          a.createElement('path', {
            id: 'j',
            className: 'st0',
            d:
              'M407.4,141.5c0,1.6-1.4,3-3,3h-36.5c-1.6,0-3-1.4-3-3v-35.4c0-1.7,1.4-3,3-3h36.5c1.6,0,3,1.3,3,3V141.5z',
          }),
          a.createElement('path', {
            id: 'k',
            className: 'st0',
            d:
              'M452.4,141.5c0,1.6-1.4,3-3,3h-36.5c-1.6,0-3-1.4-3-3v-35.4c0-1.7,1.4-3,3-3h36.5c1.6,0,3,1.3,3,3V141.5z',
          }),
          a.createElement('path', {
            id: 'l',
            className: 'st0',
            d:
              'M497.4,141.5c0,1.6-1.4,3-3,3h-36.5c-1.6,0-3-1.4-3-3v-35.4c0-1.7,1.4-3,3-3h36.5c1.6,0,3,1.3,3,3V141.5z',
          }),
          a.createElement('path', {
            id: 'semicolon',
            className: 'st0',
            d:
              'M542.4,141.5c0,1.6-1.4,3-3,3h-36.5c-1.6,0-3-1.4-3-3v-35.4c0-1.7,1.4-3,3-3h36.5c1.6,0,3,1.3,3,3V141.5z',
          }),
          a.createElement('path', {
            id: 'quote',
            className: 'st0',
            d:
              'M587.4,141.5c0,1.6-1.4,3-3,3h-36.5c-1.7,0-3-1.4-3-3v-35.4c0-1.7,1.3-3,3-3h36.5c1.6,0,3,1.3,3,3V141.5z',
          }),
          a.createElement('path', {
            id: 'w',
            className: 'st0',
            d:
              'M171.7,97.6c0,1.6-1.3,3-3,3h-36.5c-1.6,0-3-1.4-3-3V62.3c0-1.6,1.4-3,3-3h36.5c1.7,0,3,1.4,3,3V97.6z',
          }),
          a.createElement('path', {
            id: 'e',
            className: 'st0',
            d:
              'M216.7,97.6c0,1.6-1.3,3-3,3h-36.5c-1.6,0-3-1.4-3-3V62.3c0-1.7,1.4-3,3-3h36.5c1.7,0,3,1.3,3,3V97.6z',
          }),
          a.createElement('path', {
            id: 'r',
            className: 'st0',
            d:
              'M261.7,97.6c0,1.6-1.4,3-3,3h-36.5c-1.6,0-3-1.4-3-3V62.3c0-1.6,1.4-3,3-3h36.5c1.6,0,3,1.4,3,3V97.6z',
          }),
          a.createElement('path', {
            id: 't',
            className: 'st0',
            d:
              'M306.7,97.6c0,1.6-1.4,3-3,3h-36.5c-1.6,0-3-1.4-3-3V62.3c0-1.6,1.4-3,3-3h36.5c1.6,0,3,1.4,3,3V97.6z',
          }),
          a.createElement('path', {
            id: 'y',
            className: 'st0',
            d:
              'M351.7,97.6c0,1.6-1.4,3-3,3h-36.5c-1.6,0-3-1.4-3-3V62.3c0-1.6,1.4-3,3-3h36.5c1.6,0,3,1.4,3,3V97.6z',
          }),
          a.createElement('path', {
            id: 'u',
            className: 'st0',
            d:
              'M396.7,97.6c0,1.6-1.4,3-3,3h-36.5c-1.6,0-3-1.4-3-3V62.3c0-1.6,1.4-3,3-3h36.5c1.6,0,3,1.4,3,3V97.6z',
          }),
          a.createElement('path', {
            id: 'i',
            className: 'st0',
            d:
              'M441.7,97.6c0,1.6-1.4,3-3,3h-36.5c-1.6,0-3-1.4-3-3V62.3c0-1.6,1.4-3,3-3h36.5c1.6,0,3,1.4,3,3V97.6z',
          }),
          a.createElement('path', {
            id: 'o',
            className: 'st0',
            d:
              'M486.7,97.6c0,1.6-1.4,3-3,3h-36.5c-1.6,0-3-1.4-3-3V62.3c0-1.6,1.4-3,3-3h36.5c1.6,0,3,1.4,3,3V97.6z',
          }),
          a.createElement('path', {
            id: 'p',
            className: 'st0',
            d:
              'M531.7,97.6c0,1.6-1.3,3-3,3h-36.5c-1.6,0-3-1.4-3-3V62.3c0-1.6,1.4-3,3-3h36.5c1.7,0,3,1.4,3,3V97.6z',
          }),
          a.createElement('path', {
            id: 'open-bracket',
            className: 'st0',
            d:
              'M576.7,97.6c0,1.6-1.3,3-3,3h-36.5c-1.6,0-3-1.4-3-3V62.3c0-1.6,1.4-3,3-3h36.5c1.7,0,3,1.4,3,3V97.6z',
          }),
          a.createElement('path', {
            id: 'close-bracket',
            className: 'st0',
            d:
              'M621.7,97.6c0,1.6-1.3,3-3,3h-36.5c-1.6,0-3-1.4-3-3V62.3c0-1.6,1.4-3,3-3h36.5c1.7,0,3,1.4,3,3V97.6z',
          }),
          a.createElement('path', {
            id: 'backslash',
            className: 'st0',
            d:
              'M668.8,97.6c0,1.6-1.3,3-3,3h-38.6c-1.6,0-3-1.4-3-3V62.4c0-1.6,1.4-3,3-3h38.6c1.7,0,3,1.4,3,3V97.6z',
          }),
          a.createElement('path', {
            id: 'key-2',
            className: 'st0',
            d:
              'M148.4,53.7c0,1.7-1.4,3-3,3h-36.5c-1.6,0-3-1.3-3-3V18.3c0-1.6,1.4-3,3-3h36.5c1.6,0,3,1.4,3,3V53.7z',
          }),
          a.createElement('path', {
            id: 'key-3',
            className: 'st0',
            d:
              'M193.4,53.7c0,1.7-1.4,3-3,3h-36.5c-1.7,0-3-1.3-3-3V18.3c0-1.6,1.3-3,3-3h36.5c1.6,0,3,1.4,3,3V53.7z',
          }),
          a.createElement('path', {
            id: 'key-4',
            className: 'st0',
            d:
              'M238.4,53.7c0,1.7-1.4,3-3,3H199c-1.7,0-3-1.3-3-3V18.3c0-1.7,1.3-3,3-3h36.5c1.6,0,3,1.3,3,3V53.7z',
          }),
          a.createElement('path', {
            id: 'key-5',
            className: 'st0',
            d:
              'M283.4,53.7c0,1.7-1.3,3-3,3h-36.5c-1.7,0-3-1.3-3-3V18.3c0-1.7,1.3-3,3-3h36.5c1.7,0,3,1.3,3,3V53.7z',
          }),
          a.createElement('path', {
            id: 'key-6',
            className: 'st0',
            d:
              'M328.4,53.7c0,1.7-1.3,3-3,3h-36.5c-1.6,0-3-1.3-3-3V18.3c0-1.7,1.4-3,3-3h36.5c1.7,0,3,1.3,3,3V53.7z',
          }),
          a.createElement('path', {
            id: 'key-7',
            className: 'st0',
            d:
              'M373.4,53.7c0,1.7-1.3,3-3,3h-36.5c-1.6,0-3-1.3-3-3V18.3c0-1.6,1.4-3,3-3h36.5c1.7,0,3,1.4,3,3V53.7z',
          }),
          a.createElement('path', {
            id: 'key-8',
            className: 'st0',
            d:
              'M418.4,53.7c0,1.7-1.3,3-3,3h-36.5c-1.6,0-3-1.3-3-3V18.3c0-1.6,1.4-3,3-3h36.5c1.7,0,3,1.4,3,3V53.7z',
          }),
          a.createElement('path', {
            id: 'key-9',
            className: 'st0',
            d:
              'M463.4,53.7c0,1.7-1.3,3-3,3h-36.5c-1.6,0-3-1.3-3-3V18.3c0-1.6,1.4-3,3-3h36.5c1.7,0,3,1.4,3,3V53.7z',
          }),
          a.createElement('path', {
            id: 'key-0',
            className: 'st0',
            d:
              'M508.4,53.7c0,1.7-1.3,3-3,3h-36.5c-1.6,0-3-1.3-3-3V18.3c0-1.6,1.4-3,3-3h36.5c1.7,0,3,1.4,3,3V53.7z',
          }),
          a.createElement('path', {
            id: 'minus',
            className: 'st0',
            d:
              'M553.4,53.7c0,1.7-1.4,3-3,3h-36.5c-1.7,0-3-1.3-3-3V18.3c0-1.7,1.4-3,3-3h36.5c1.6,0,3,1.3,3,3V53.7z',
          }),
          a.createElement('path', {
            id: 'equal',
            className: 'st0',
            d:
              'M598.4,53.7c0,1.7-1.4,3-3,3h-36.5c-1.7,0-3-1.3-3-3V18.3c0-1.6,1.3-3,3-3h36.5c1.6,0,3,1.4,3,3V53.7z',
          }),
          a.createElement('path', {
            id: 'backspace',
            className: 'st0',
            d:
              'M668.8,53.7c0,1.7-1.3,3-3,3h-61.9c-1.7,0-3-1.3-3-3V18.3c0-1.6,1.3-3,3-3h61.9c1.7,0,3,1.4,3,3V53.7z',
          }),
          a.createElement('path', {
            id: 'tab',
            className: 'st0',
            d:
              'M81.7,97.6c0,1.6-1.3,3-3,3H18.9c-1.6,0-3-1.4-3-3V62.3c0-1.6,1.3-3,3-3h59.8c1.7,0,3,1.4,3,3V97.6z',
          }),
          a.createElement('path', {
            id: 'capslock',
            className: 'st0',
            d:
              'M92.4,141.5c0,1.6-1.3,3-3,3H18.9c-1.6,0-3-1.4-3-3v-35.4c0-1.7,1.3-3,3-3h70.4c1.7,0,3,1.3,3,3V141.5z',
          }),
          a.createElement('path', {
            id: 'enter',
            className: 'st0',
            d:
              'M668.8,141.5c0,1.6-1.3,3-3,3h-72.9c-1.7,0-3-1.4-3-3v-35.4c0-1.7,1.3-3,3-3h72.9c1.7,0,3,1.3,3,3V141.5z',
          }),
          a.createElement('path', {
            id: 'shift-left',
            className: 'st0',
            d:
              'M115.8,185.4c0,1.7-1.3,3-3,3H18.9c-1.6,0-3-1.3-3-3v-35.3c0-1.6,1.3-3,3-3h93.8c1.7,0,3,1.4,3,3V185.4z',
          }),
          a.createElement('path', {
            id: 'control',
            className: 'st0 hide-on-bone',
            d:
              'M105,236c0,1.6-1.3,3-3,3H18.9c-1.6,0-3-1.4-3-3v-42c0-1.7,1.3-3,3-3H102c1.7,0,3,1.3,3,3V236z',
          }),
          a.createElement('path', {
            id: 'option-left',
            className: 'st0 hide-on-bone',
            d:
              'M182.4,236c0,1.7-1.4,3-3,3h-68.8c-1.7,0-3-1.3-3-3v-42c0-1.7,1.3-3,3-3h68.8c1.6,0,3,1.3,3,3V236z',
          }),
          a.createElement('path', {
            id: 'option-right',
            className: 'st0 hide-on-bone',
            d:
              'M531.8,191c1.7,0,3,1.4,3,3v42c0,1.7-1.3,3-3,3h-62.9c-1.6,0-3-1.3-3-3v-42c0-1.6,1.4-3,3-3H531.8z',
          }),
          a.createElement('path', {
            className: 'st0 hide-on-bone',
            d:
              'M668.8,236.1c0,1.7-1.3,3-3,3H540.3c-1.6,0-3-1.3-3-3v-42c0-1.6,1.4-3,3-3h125.5c1.7,0,3,1.4,3,3V236.1z',
          }),
          a.createElement('path', {
            id: 'space',
            className: 'st0 ',
            d:
              'M460.4,191c1.6,0,3,1.4,3,3v42c0,1.7-1.4,3-3,3H187.5c-1.6,0-3-1.3-3-3v-42c0-1.6,1.4-3,3-3H460.4z',
          }),
          a.createElement('path', {
            id: 'shift-right',
            className: 'st0',
            d:
              'M668.8,185.4c0,1.7-1.3,3-3,3h-94.5c-1.6,0-3-1.3-3-3v-35.3c0-1.6,1.4-3,3-3h94.5c1.7,0,3,1.4,3,3V185.4z',
          })
        ),
        $t = a.createElement(
          'g',
          { id: 'letters' },
          a.createElement(
            'text',
            {
              transform: 'matrix(1 0 0 1 33.4903 33.804)',
              className: 'st1 st2',
              dx: 0,
              dy: 0,
            },
            '~'
          ),
          a.createElement(
            'text',
            {
              transform: 'matrix(1 0 0 1 35.8009 52.6643)',
              className: 'st1 st2',
              dx: 0,
              dy: 0,
            },
            '`'
          ),
          a.createElement(
            'text',
            {
              transform: 'matrix(1 0 0 1 78.626 50.4071)',
              className: 'st1 st2',
              dx: 0,
              dy: 0,
            },
            '1'
          ),
          a.createElement(
            'text',
            {
              transform: 'matrix(1 0 0 1 123.299 51.1765)',
              className: 'st1 st2',
              dx: 0,
              dy: 0,
            },
            '2'
          ),
          a.createElement(
            'text',
            {
              transform: 'matrix(1 0 0 1 169.6841 51.404)',
              className: 'st1 st2',
              dx: 0,
              dy: 0,
            },
            '3'
          ),
          a.createElement(
            'text',
            {
              transform: 'matrix(1 0 0 1 213.0758 51.404)',
              className: 'st1 st2',
              dx: 0,
              dy: 0,
            },
            '4'
          ),
          a.createElement(
            'text',
            {
              transform: 'matrix(1 0 0 1 258.0724 51.404)',
              className: 'st1 st2',
              dx: 0,
              dy: 0,
            },
            '5'
          ),
          a.createElement(
            'text',
            {
              transform: 'matrix(1 0 0 1 303.2822 51.0891)',
              className: 'st1 st2',
              dx: 0,
              dy: 0,
            },
            '6'
          ),
          a.createElement(
            'text',
            {
              transform: 'matrix(1 0 0 1 349.5064 51.0891)',
              className: 'st1 st2',
              dx: 0,
              dy: 0,
            },
            '7'
          ),
          a.createElement(
            'text',
            {
              transform: 'matrix(1 0 0 1 393.281 51.2157)',
              className: 'st1 st2',
              dx: 0,
              dy: 0,
            },
            '8'
          ),
          a.createElement(
            'text',
            {
              transform: 'matrix(1 0 0 1 438.5742 51.2157)',
              className: 'st1 st2',
              dx: 0,
              dy: 0,
            },
            '9'
          ),
          a.createElement(
            'text',
            {
              transform: 'matrix(1 0 0 1 483.4907 51.2157)',
              className: 'st1 st2',
              dx: 0,
              dy: 0,
            },
            '0'
          ),
          a.createElement(
            'text',
            {
              transform: 'matrix(1 0 0 1 530.4011 50.4071)',
              className: 'st1 st2',
              dx: 0,
              dy: 0,
            },
            '-'
          ),
          a.createElement(
            'text',
            {
              transform: 'matrix(1 0 0 1 573.5195 51.2157)',
              className: 'st1 st2',
              dx: 0,
              dy: 0,
            },
            '='
          ),
          a.createElement(
            'text',
            {
              transform: 'matrix(1 0 0 1 80.5513 31.7605)',
              className: 'st1 st2',
              dx: 0,
              dy: 0,
            },
            '!'
          ),
          a.createElement(
            'text',
            {
              transform: 'matrix(1 0 0 1 119.8565 30.45)',
              className: 'st1 st2',
              dx: 0,
              dy: 0,
            },
            '@'
          ),
          a.createElement(
            'text',
            {
              transform: 'matrix(1 0 0 1 169.6841 31.76)',
              className: 'st1 st2',
              dx: 0,
              dy: 0,
            },
            '#'
          ),
          a.createElement(
            'text',
            {
              transform: 'matrix(1 0 0 1 213.0758 31.2171)',
              className: 'st1 st2',
              dx: 0,
              dy: 0,
            },
            '$'
          ),
          a.createElement(
            'text',
            {
              transform: 'matrix(1 0 0 1 255.5748 30.8318)',
              className: 'st1 st2',
              dx: 0,
              dy: 0,
            },
            '%'
          ),
          a.createElement(
            'text',
            {
              transform: 'matrix(1 0 0 1 303.9556 32.4427)',
              className: 'st1 st2',
              dx: 0,
              dy: 0,
            },
            '^'
          ),
          a.createElement(
            'text',
            {
              transform: 'matrix(1 0 0 1 348.2554 31.76)',
              className: 'st1 st2',
              dx: 0,
              dy: 0,
            },
            '&'
          ),
          a.createElement(
            'text',
            {
              transform: 'matrix(1 0 0 1 394.5334 32.8236)',
              className: 'st1 st2',
              dx: 0,
              dy: 0,
            },
            '*'
          ),
          a.createElement(
            'text',
            {
              transform: 'matrix(1 0 0 1 440.3076 30.6435)',
              className: 'st1 st2',
              dx: 0,
              dy: 0,
            },
            '('
          ),
          a.createElement(
            'text',
            {
              transform: 'matrix(1 0 0 1 485.1645 30.6435)',
              className: 'st1 st2',
              dx: 0,
              dy: 0,
            },
            ')'
          ),
          a.createElement(
            'text',
            {
              transform: 'matrix(1 0 0 1 528.7588 25.5423)',
              className: 'st1 st2',
              dx: 0,
              dy: 0,
            },
            '_'
          ),
          a.createElement(
            'text',
            {
              transform: 'matrix(1 0 0 1 573.5195 32.4422)',
              className: 'st1 st2',
              dx: 0,
              dy: 0,
            },
            '+'
          ),
          a.createElement(
            'text',
            {
              transform: 'matrix(1 0 0 1 100.9088 75.4743)',
              className: 'st1',
              dx: 0,
              dy: 0,
            },
            'Q'
          ),
          a.createElement(
            'text',
            {
              transform: 'matrix(1 0 0 1 100.9088 93.4743)',
              className: 'st1 st2 b',
              dx: -2.0701217651367188,
              dy: -6,
            },
            'q'
          ),
          a.createElement(
            'text',
            {
              transform: 'matrix(1 0 0 1 145.3644 75.4744)',
              className: 'st1',
              dx: 0,
              dy: 0,
            },
            'W'
          ),
          a.createElement(
            'text',
            {
              transform: 'matrix(1 0 0 1 145.3644 93.4744)',
              className: 'st1 st2 b',
              dx: -2.9864578247070312,
              dy: -6,
            },
            'w'
          ),
          a.createElement(
            'text',
            {
              transform: 'matrix(1 0 0 1 190.5943 75.4744)',
              className: 'st1',
              dx: 0,
              dy: 0,
            },
            'E'
          ),
          a.createElement(
            'text',
            {
              transform: 'matrix(1 0 0 1 190.5943 93.4744)',
              className: 'st1 st2 b',
              dx: -2.0701217651367188,
              dy: -6,
            },
            'e'
          ),
          a.createElement(
            'text',
            {
              transform: 'matrix(1 0 0 1 236.9933 75.4743)',
              className: 'st1',
              dx: 0,
              dy: 0,
            },
            'R'
          ),
          a.createElement(
            'text',
            {
              transform: 'matrix(1 0 0 1 236.9933 93.4743)',
              className: 'st1 st2 b',
              dx: -0.9109954833984375,
              dy: -6,
            },
            'r'
          ),
          a.createElement(
            'text',
            {
              transform: 'matrix(1 0 0 1 280.6080 75.4744)',
              className: 'st1',
              dx: 0,
              dy: 0,
            },
            'T'
          ),
          a.createElement(
            'text',
            {
              transform: 'matrix(1 0 0 1 280.6080 93.4744)',
              className: 'st1 st2 b',
              dx: -0.5350494384765625,
              dy: -6,
            },
            't'
          ),
          a.createElement(
            'text',
            {
              transform: 'matrix(1 0 0 1 326.5138 75.4744)',
              className: 'st1',
              dx: 0,
              dy: 0,
            },
            'Y'
          ),
          a.createElement(
            'text',
            {
              transform: 'matrix(1 0 0 1 326.5138 93.4744)',
              className: 'st1 st2 b',
              dx: -1.7568511962890625,
              dy: -6,
            },
            'y'
          ),
          a.createElement(
            'text',
            {
              transform: 'matrix(1 0 0 1 371.1386 75.4743)',
              className: 'st1',
              dx: 0,
              dy: 0,
            },
            'U'
          ),
          a.createElement(
            'text',
            {
              transform: 'matrix(1 0 0 1 371.1386 93.4743)',
              className: 'st1 st2 b',
              dx: -2.07012939453125,
              dy: -6,
            },
            'u'
          ),
          a.createElement(
            'text',
            {
              transform: 'matrix(1 0 0 1 418.5557 75.4743)',
              className: 'st1',
              dx: 0,
              dy: 0,
            },
            'I'
          ),
          a.createElement(
            'text',
            {
              transform: 'matrix(1 0 0 1 418.5557 93.4743)',
              className: 'st1 st2 b',
              dx: -0.2217864990234375,
              dy: -6,
            },
            'i'
          ),
          a.createElement(
            'text',
            {
              transform: 'matrix(1 0 0 1 459.9639 75.4743)',
              className: 'st1',
              dx: 0,
              dy: 0,
            },
            'O'
          ),
          a.createElement(
            'text',
            {
              transform: 'matrix(1 0 0 1 459.9639 93.4743)',
              className: 'st1 st2 b',
              dx: -2.0701141357421875,
              dy: -6,
            },
            'o'
          ),
          a.createElement(
            'text',
            {
              transform: 'matrix(1 0 0 1 506.9335 75.4743)',
              className: 'st1',
              dx: 0,
              dy: 0,
            },
            'P'
          ),
          a.createElement(
            'text',
            {
              transform: 'matrix(1 0 0 1 506.9335 93.4743)',
              className: 'st1 st2 b',
              dx: -2.07012939453125,
              dy: -6,
            },
            'p'
          ),
          a.createElement(
            'text',
            {
              transform: 'matrix(1 0 0 1 112.1346 120.3303)',
              className: 'st1',
              dx: 0,
              dy: 0,
            },
            'A'
          ),
          a.createElement(
            'text',
            {
              transform: 'matrix(1 0 0 1 112.1346 138.3303)',
              className: 'st1 st2 b',
              dx: -2.0701217651367188,
              dy: -6,
            },
            'a'
          ),
          a.createElement(
            'text',
            {
              transform: 'matrix(1 0 0 1 156.0135 120.3303)',
              className: 'st1',
              dx: 0,
              dy: 0,
            },
            'S'
          ),
          a.createElement(
            'text',
            {
              transform: 'matrix(1 0 0 1 156.0135 138.3303)',
              className: 'st1 st2 b',
              dx: -1.7568435668945312,
              dy: -6,
            },
            's'
          ),
          a.createElement(
            'text',
            {
              transform: 'matrix(1 0 0 1 201.5241 120.3303)',
              className: 'st1',
              dx: 0,
              dy: 0,
            },
            'D'
          ),
          a.createElement(
            'text',
            {
              transform: 'matrix(1 0 0 1 201.5241 138.3303)',
              className: 'st1 st2 b',
              dx: -2.0701217651367188,
              dy: -6,
            },
            'd'
          ),
          a.createElement(
            'text',
            {
              transform: 'matrix(1 0 0 1 247.1121 120.3303)',
              className: 'st1',
              dx: 0,
              dy: 0,
            },
            'F'
          ),
          a.createElement(
            'text',
            {
              transform: 'matrix(1 0 0 1 247.1121 138.3303)',
              className: 'st1 st2 b',
              dx: -0.7230224609375,
              dy: -6,
            },
            'f'
          ),
          a.createElement(
            'text',
            {
              transform: 'matrix(1 0 0 1 289.4753 120.3303)',
              className: 'st1',
              dx: 0,
              dy: 0,
            },
            'G'
          ),
          a.createElement(
            'text',
            {
              transform: 'matrix(1 0 0 1 289.4753 138.3303)',
              className: 'st1 st2 b',
              dx: -2.0701141357421875,
              dy: -6,
            },
            'g'
          ),
          a.createElement(
            'text',
            {
              transform: 'matrix(1 0 0 1 335.5886 120.3303)',
              className: 'st1',
              dx: 0,
              dy: 0,
            },
            'H'
          ),
          a.createElement(
            'text',
            {
              transform: 'matrix(1 0 0 1 335.5886 138.3303)',
              className: 'st1 st2 b',
              dx: -2.0701141357421875,
              dy: -6,
            },
            'h'
          ),
          a.createElement(
            'text',
            {
              transform: 'matrix(1 0 0 1 382.2692 120.3303)',
              className: 'st1',
              dx: 0,
              dy: 0,
            },
            'J'
          ),
          a.createElement(
            'text',
            {
              transform: 'matrix(1 0 0 1 382.2692 138.3303)',
              className: 'st1 st2 b',
              dx: -0.472412109375,
              dy: -6,
            },
            'j'
          ),
          a.createElement(
            'text',
            {
              transform: 'matrix(1 0 0 1 426.0182 120.3303)',
              className: 'st1',
              dx: 0,
              dy: 0,
            },
            'K'
          ),
          a.createElement(
            'text',
            {
              transform: 'matrix(1 0 0 1 426.0182 138.3303)',
              className: 'st1 st2 b',
              dx: -1.7568359375,
              dy: -6,
            },
            'k'
          ),
          a.createElement(
            'text',
            {
              transform: 'matrix(1 0 0 1 470.8706 120.3303)',
              className: 'st1',
              dx: 0,
              dy: 0,
            },
            'L'
          ),
          a.createElement(
            'text',
            {
              transform: 'matrix(1 0 0 1 470.8706 138.3303)',
              className: 'st1 st2 b',
              dx: -0.2217864990234375,
              dy: -6,
            },
            'l'
          ),
          a.createElement(
            'text',
            {
              transform: 'matrix(1 0 0 1 134.7896 163.7458)',
              className: 'st1',
              dx: 0,
              dy: 0,
            },
            'Z'
          ),
          a.createElement(
            'text',
            {
              transform: 'matrix(1 0 0 1 134.7896 181.7458)',
              className: 'st1 st2 b',
              dx: -1.7568435668945312,
              dy: -6,
            },
            'z'
          ),
          a.createElement(
            'text',
            {
              transform: 'matrix(1 0 0 1 179.2339 163.7458)',
              className: 'st1',
              dx: 0,
              dy: 0,
            },
            'X'
          ),
          a.createElement(
            'text',
            {
              transform: 'matrix(1 0 0 1 179.2339 181.7458)',
              className: 'st1 st2 b',
              dx: -1.7568435668945312,
              dy: -6,
            },
            'x'
          ),
          a.createElement(
            'text',
            {
              transform: 'matrix(1 0 0 1 222.5416 163.7458)',
              className: 'st1',
              dx: 0,
              dy: 0,
            },
            'C'
          ),
          a.createElement(
            'text',
            {
              transform: 'matrix(1 0 0 1 222.5416 181.7458)',
              className: 'st1 st2 b',
              dx: -1.7568435668945312,
              dy: -6,
            },
            'c'
          ),
          a.createElement(
            'text',
            {
              transform: 'matrix(1 0 0 1 269.3973 163.7458)',
              className: 'st1',
              dx: 0,
              dy: 0,
            },
            'V'
          ),
          a.createElement(
            'text',
            {
              transform: 'matrix(1 0 0 1 269.3973 181.7458)',
              className: 'st1 st2 b',
              dx: -1.7568359375,
              dy: -6,
            },
            'v'
          ),
          a.createElement(
            'text',
            {
              transform: 'matrix(1 0 0 1 314.0098 163.7458)',
              className: 'st1',
              dx: 0,
              dy: 0,
            },
            'B'
          ),
          a.createElement(
            'text',
            {
              transform: 'matrix(1 0 0 1 314.0098 181.7458)',
              className: 'st1 st2 b',
              dx: -2.0701141357421875,
              dy: -6,
            },
            'b'
          ),
          a.createElement(
            'text',
            {
              transform: 'matrix(1 0 0 1 358.4863 163.7458)',
              className: 'st1',
              dx: 0,
              dy: 0,
            },
            'N'
          ),
          a.createElement(
            'text',
            {
              transform: 'matrix(1 0 0 1 358.4863 181.7458)',
              className: 'st1 st2 b',
              dx: -2.0701141357421875,
              dy: -6,
            },
            'n'
          ),
          a.createElement(
            'text',
            {
              transform: 'matrix(1 0 0 1 401.6816 163.7458)',
              className: 'st1',
              dx: 0,
              dy: 0,
            },
            'M'
          ),
          a.createElement(
            'text',
            {
              transform: 'matrix(1 0 0 1 401.6816 181.7458)',
              className: 'st1 st2 b',
              dx: -3.5895233154296875,
              dy: -6,
            },
            'm'
          ),
          a.createElement(
            'text',
            {
              transform: 'matrix(1 0 0 1 519.074 136.7127)',
              className: 'st1 st2',
              dx: 0,
              dy: 0,
            },
            ';'
          ),
          a.createElement(
            'text',
            {
              transform: 'matrix(1 0 0 1 519.074 119.3763)',
              className: 'st1 st2',
              dx: 0,
              dy: 0,
            },
            ':'
          ),
          a.createElement(
            'text',
            {
              transform: 'matrix(1 0 0 1 451.3285 180.0409)',
              className: 'st1 st2 b2',
              dx: -1.2530975341796875,
              dy: 0,
            },
            ','
          ),
          a.createElement('text', {
            transform: 'matrix(1 0 0 1 450.2827 164.3396)',
            className: 'st1 st2',
            dx: 0,
            dy: 0,
          }),
          a.createElement(
            'text',
            {
              transform: 'matrix(1 0 0 1 495.9731 181.0409)',
              className: 'st1 st2 b2',
              dx: -1.25311279296875,
              dy: 0,
            },
            '.'
          ),
          a.createElement('text', {
            transform: 'matrix(1 0 0 1 494.9274 164.3396)',
            className: 'st1 st2',
            dx: 0,
            dy: 0,
          }),
          a.createElement(
            'text',
            {
              transform: 'matrix(1 0 0 1 543.4077 181.0408)',
              className: 'st1 st2',
              dx: 0,
              dy: 0,
            },
            '/'
          ),
          a.createElement(
            'text',
            {
              transform: 'matrix(1 0 0 1 541.3276 163.2498)',
              className: 'st1 st2',
              dx: 0,
              dy: 0,
            },
            '?'
          ),
          a.createElement(
            'text',
            {
              transform: 'matrix(1 0 0 1 565.621 138.7127)',
              className: 'st1 st2',
              dx: 0,
              dy: 0,
            },
            "'"
          ),
          a.createElement(
            'text',
            {
              transform: 'matrix(1 0 0 1 565.621 120.3763)',
              className: 'st1 st2',
              dx: 0,
              dy: 0,
            },
            '"'
          ),
          a.createElement(
            'text',
            {
              transform: 'matrix(1 0 0 1 553.3923 94.426)',
              className: 'st1 st2',
              dx: 0,
              dy: 0,
            },
            '['
          ),
          a.createElement(
            'text',
            {
              transform: 'matrix(1 0 0 1 552.9709 74.8769)',
              className: 'st1 st2',
              dx: 0,
              dy: 0,
            },
            '{'
          ),
          a.createElement(
            'text',
            {
              transform: 'matrix(1 0 0 1 598.7657 94.426)',
              className: 'st1 st2',
              dx: 0,
              dy: 0,
            },
            ']'
          ),
          a.createElement(
            'text',
            {
              transform: 'matrix(1 0 0 1 598.3443 74.7849)',
              className: 'st1 st2',
              dx: 0,
              dy: 0,
            },
            '}'
          ),
          a.createElement(
            'text',
            {
              transform: 'matrix(1 0 0 1 644.3574 96.8807)',
              className: 'st1 st2',
              dx: 0,
              dy: 0,
            },
            '\\'
          ),
          a.createElement(
            'text',
            {
              transform: 'matrix(1 0 0 1 644.4941 74.8769)',
              className: 'st1 st2',
              dx: 0,
              dy: 0,
            },
            '|'
          ),
          a.createElement(
            'text',
            {
              id: 'text-tab',
              transform: 'matrix(1 0 0 1 23.3467 93.2342)',
              className: 'st1 s st2',
            },
            'tab'
          ),
          a.createElement(
            'text',
            {
              id: 'text-caps-lock',
              transform: 'matrix(1 0 0 1 23.3467 137.7127)',
              className: 'st1 s st2',
            },
            'caps lock'
          ),
          a.createElement(
            'text',
            {
              id: 'text-shift-left',
              transform: 'matrix(1 0 0 1 23.3467 181.0408)',
              className: 'st1 s st2',
            },
            'shift'
          ),
          a.createElement(
            'text',
            {
              id: 'text-shift-right',
              transform: 'matrix(1 0 0 1 641.826 180.0408)',
              className: 'st1 s st2',
            },
            'shift'
          ),
          a.createElement(
            'text',
            {
              id: 'text-backspace',
              transform: 'matrix(1 0 0 1 606.4653 51.1765)',
              className: 'st1 s st2',
            },
            'backspace'
          ),
          a.createElement(
            'text',
            {
              id: 'text-enter',
              transform: 'matrix(1 0 0 1 636.3144 137.7128)',
              className: 'st1 s st2',
            },
            'enter'
          ),
          a.createElement(
            'text',
            {
              id: 'text-control',
              transform: 'matrix(1 0 0 1 23.3467 232.465)',
              className: 'st1 s st2',
            },
            'control '
          ),
          a.createElement(
            'text',
            {
              id: 'text-option-left',
              transform: 'matrix(1 0 0 1 129.2338 231.4646)',
              className: 'st1 s st2',
            },
            'option'
          ),
          a.createElement(
            'text',
            {
              id: 'text-space',
              transform: 'matrix(1 0 0 1 199.7899 232.4646)',
              className: 'st1 s st2',
            },
            'space'
          ),
          a.createElement(
            'text',
            {
              id: 'text-option-right',
              transform: 'matrix(1 0 0 1 483.8864 231.4646)',
              className: 'st1 s st2',
            },
            'option'
          )
        );
      function Yt(e, t) {
        var n = e.title,
          r = e.titleId,
          c = Wt(e, ['title', 'titleId']);
        return a.createElement(
          'svg',
          Tt(
            {
              id: 'keyboard',
              x: '0px',
              y: '0px',
              viewBox: '0 0 683.3 254',
              style: { enableBackground: 'new 0 0 683.3 254' },
              xmlSpace: 'preserve',
              className: '',
              ref: t,
              'aria-labelledby': r,
            },
            c
          ),
          n ? a.createElement('title', { id: r }, n) : null,
          qt,
          Zt,
          $t
        );
      }
      var Jt = a.forwardRef(Yt);
      n.p;
      function Qt() {
        var e = Object(r.a)([
          '\n  margin: 0 20px;\n\n  & span {\n    position: relative;\n    font-size: 2.2rem;\n    margin-right: 2px;\n    font-family: "Concert One", cursive;\n    color: #110303;\n\n    &.correct {\n      color: #9cbfd3;\n    }\n\n    &.incorrect {\n      color: red;\n    }\n\n    &.underlined:before {\n      content: "";\n      position: absolute;\n      bottom: -2px;\n      left: 0;\n      right: 0;\n      height: 2px;\n      background-color: #9cbfd3;\n    }\n  }\n',
        ]);
        return (
          (Qt = function () {
            return e;
          }),
          e
        );
      }
      var Kt = i.d.div(Qt()),
        en = function (e) {
          var t = e.word,
            n = e.setRef,
            r = e.charMap,
            a = e.isCurrentWord,
            l = e.currentLetterIndex;
          return c.a.createElement(
            Kt,
            { ref: n },
            t.split('').map(function (e, t) {
              return c.a.createElement(
                'span',
                {
                  key: t,
                  className: ''
                    .concat(
                      r ? (!0 === r[t] ? 'correct' : !1 === r[t] ? 'incorrect' : '') : ''
                    )
                    .concat(a && t === l ? 'underlined' : ''),
                },
                e
              );
            })
          );
        };
      function tn() {
        return (tn =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function nn(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              c = Object.keys(e);
            for (r = 0; r < c.length; r++) (n = c[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var c = Object.getOwnPropertySymbols(e);
          for (r = 0; r < c.length; r++)
            (n = c[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]));
        }
        return a;
      }
      var rn = a.createElement('path', {
        d:
          'M185.878 39.294c.511-8.512.979-17.03 1.382-25.558.468-9.883-12.069-17.519-20.462-11.738-18.765 12.912-40.619 19.358-58.573 33.673-4.4 3.508-5.374 11.966-2.127 16.475 13.668 18.999 30.519 36.415 50.192 49.311 1.501 1.789 3.568 2.991 5.912 3.59 8.191 3.862 15.654-1.572 17.965-8.664.468-1.164.854-2.393 1.028-3.775 1.088-8.708 1.936-17.427 2.692-26.156 80.819 6.995 112.197 95.771 78.23 166.495-19.265 40.108-56.626 58.524-99.823 58.377-77.996-.261-126.365-54.314-118.914-132.446 1.664-17.459-25.547-17.302-27.195 0-7.81 81.896 39.466 146.224 120.867 157.684 56.996 8.028 109.456-9.045 141.834-58.008 26.934-40.728 31.101-96.81 14.044-141.97-17.742-46.967-59.166-73.531-107.052-77.29zm-29.3 28.555c-6.978-5.956-13.451-12.575-19.303-19.581 6.902-4.09 14.223-7.484 21.528-10.933-.599 10.183-1.322 20.354-2.225 30.514z',
        fill: '#010002',
      });
      function an(e, t) {
        var n = e.title,
          r = e.titleId,
          c = nn(e, ['title', 'titleId']);
        return a.createElement(
          'svg',
          tn({ viewBox: '0 0 318.46 318.46', ref: t, 'aria-labelledby': r }, c),
          n ? a.createElement('title', { id: r }, n) : null,
          rn
        );
      }
      var cn = a.forwardRef(an);
      n.p;
      function ln() {
        var e = Object(r.a)([
          '\n  position: absolute;\n  z-index: 100;\n  right: 10px;\n  top: 10px;\n  height: 28px;\n  padding: 8px;\n  display: flex;\n  align-items: center;\n  background-color: ',
          ';\n  border-radius: 14px;\n  cursor: pointer;\n  font-size: 0.9rem;\n  box-shadow: ',
          ';\n  transition: all 0.15s ease-in-out;\n\n  &:hover {\n    box-shadow: ',
          ';\n  }\n\n  &.disabled {\n    pointer-events: none;\n    opacity: 0.8;\n    cursor: not-allowed;\n  }\n\n  & svg#retry {\n    display: inline-block;\n    height: 13px;\n    width: 13px;\n    margin-bottom: 1px;\n  }\n',
        ]);
        return (
          (ln = function () {
            return e;
          }),
          e
        );
      }
      var sn = i.d.div(
          ln(),
          function (e) {
            return e.theme.blue;
          },
          function (e) {
            return e.theme.box_shadow_sm;
          },
          function (e) {
            return e.theme.box_shadow_st;
          }
        ),
        on = function (e) {
          var t = e.onClick,
            n = e.loading;
          return c.a.createElement(
            sn,
            { onClick: t, className: n ? 'disabled' : '' },
            c.a.createElement(cn, { id: 'retry' })
          );
        };
      function mn() {
        var e = Object(r.a)([
          '\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  min-width: 100%;\n  display: flex;\n  align-items: center;\n  transition: left 0.08s ease-in;\n',
        ]);
        return (
          (mn = function () {
            return e;
          }),
          e
        );
      }
      function un() {
        var e = Object(r.a)([
          '\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 150px;\n  background-color: rgb(230, 230, 230);\n  &:before {\n    content: "";\n    position: absolute;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    width: 150px;\n    box-shadow: 0 0 10px rgba(230, 230, 230, 0.5);\n    background-image: linear-gradient(\n      rgba(230, 230, 230, 0.95),\n      rgba(230, 230, 230, 0.03)\n    );\n  }\n\n  &:after {\n    content: "";\n    position: absolute;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    width: 150px;\n    box-shadow: 0 0 10px rgba(230, 230, 230, 0.5);\n    background-image: linear-gradient(\n      rgba(230, 230, 230, 0.03),\n      rgba(230, 230, 230, 0.95)\n    );\n  }\n',
        ]);
        return (
          (un = function () {
            return e;
          }),
          e
        );
      }
      var dn = i.d.div(un()),
        fn = i.d.div(mn()),
        pn = function (e) {
          var t = e.loading,
            n = e.words,
            r = e.error,
            a = e.setRef,
            l = e.offset,
            s = e.wordsToInputMap,
            o = e.currentLetterIndex,
            i = e.currentWordIndex,
            m = e.onRetryClick;
          return c.a.createElement(
            dn,
            null,
            c.a.createElement(on, { onClick: m, loading: t }),
            c.a.createElement(
              fn,
              { style: { left: 'calc(50% - '.concat(l, 'px)') } },
              t &&
                c.a.createElement(
                  'p',
                  { style: { justifySelf: 'center' } },
                  'Loading...'
                ),
              r && c.a.createElement('p', null, 'Error...'),
              !!n.length &&
                n.map(function (e, t) {
                  return c.a.createElement(en, {
                    word: e,
                    key: t,
                    setRef: a,
                    charMap: s[t],
                    isCurrentWord: t === i,
                    currentLetterIndex: o,
                  });
                })
            )
          );
        };
      function hn() {
        var e = Object(r.a)([
          '\n  position: relative;\n  width: 70px;\n  margin: 0 auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 70px;\n  border-radius: 35px;\n  box-shadow: ',
          ';\n  background-color: rgb(230, 230, 230);\n\n  & span {\n    left: 50%;\n    transform: translateX(-50%);\n  }\n\n  & span#number {\n    position: absolute;\n    font-size: 1.8rem;\n    top: 10px;\n  }\n\n  & span#sec {\n    position: absolute;\n    bottom: 10px;\n    font-size: 0.7rem;\n  }\n',
        ]);
        return (
          (hn = function () {
            return e;
          }),
          e
        );
      }
      var bn = i.d.div(hn(), function (e) {
          return e.theme.box_shadow_st;
        }),
        xn = function (e) {
          var t = e.remainingTime;
          return c.a.createElement(
            bn,
            null,
            c.a.createElement('span', { id: 'number' }, t),
            ' ',
            c.a.createElement('span', { id: 'sec' }, 'SEC')
          );
        };
      function vn() {
        var e = Object(r.a)([
          '\n  padding: 3px 13px;\n  background-color: rgb(230, 230, 230);\n  border-radius: 5px;\n  box-shadow: ',
          ';\n\n  & span {\n    font-variant-numeric: tabular-nums;\n    font-size: 1.8rem;\n  }\n',
        ]);
        return (
          (vn = function () {
            return e;
          }),
          e
        );
      }
      function gn() {
        var e = Object(r.a)([
          '\n  width: 70%;\n  display: flex;\n  justify-content: space-evenly;\n  margin-top: 80px;\n',
        ]);
        return (
          (gn = function () {
            return e;
          }),
          e
        );
      }
      var En = i.d.div(gn()),
        yn = i.d.div(vn(), function (e) {
          return e.theme.box_shadow_sm;
        }),
        On = function (e) {
          var t = e.wpm,
            n = e.cpm,
            r = e.accuracy;
          return c.a.createElement(
            En,
            null,
            c.a.createElement(
              yn,
              null,
              c.a.createElement('p', null, c.a.createElement('span', null, t), ' WPM')
            ),
            c.a.createElement(
              yn,
              null,
              c.a.createElement('p', null, c.a.createElement('span', null, n), ' CPM')
            ),
            c.a.createElement(
              yn,
              null,
              c.a.createElement('p', null, c.a.createElement('span', null, r), '% ACC')
            )
          );
        };
      function jn() {
        var e = Object(r.a)([
          '\n  position: absolute;\n  left: 0;\n  right: 0;\n  height: 100vh;\n  top: -100%;\n  opacity: 0.5;\n  z-index: 1000;\n  background-color: rgba(0, 0, 0, 0.7);\n  animation: dropAnimation 0.5s forwards ease;\n\n  @keyframes dropAnimation {\n    from {\n      opacity: 0.5;\n      top: -100%;\n    }\n    to {\n      opacity: 1;\n      top: 0%;\n    }\n  }\n',
        ]);
        return (
          (jn = function () {
            return e;
          }),
          e
        );
      }
      var wn = i.d.div(jn()),
        zn = function (e) {
          var t = e.render,
            n = e.inProp,
            r = e.onClickOutside,
            a = e.className,
            l = void 0 === a ? '' : a,
            s = e.style,
            o = void 0 === s ? {} : s;
          return n
            ? c.a.createElement(
                wn,
                {
                  id: 'backdrop',
                  onClick: function (e) {
                    'backdrop' === e.target.id && r();
                  },
                  className: l,
                  style: o,
                },
                t && t()
              )
            : c.a.createElement(c.a.Fragment, null);
        };
      function Nn() {
        return (Nn =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function kn(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              c = Object.keys(e);
            for (r = 0; r < c.length; r++) (n = c[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var c = Object.getOwnPropertySymbols(e);
          for (r = 0; r < c.length; r++)
            (n = c[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]));
        }
        return a;
      }
      var Mn = a.createElement('path', {
        d:
          'M114.617188 491.136719c-5.632813 0-11.203126-1.746094-15.957032-5.183594-8.855468-6.398437-12.992187-17.429687-10.582031-28.09375l32.9375-145.066406L9.3125 214.828125c-8.210938-7.1875-11.347656-18.515625-7.976562-28.90625 3.371093-10.367187 12.542968-17.726563 23.402343-18.730469l147.820313-13.417968L230.96875 17.027344C235.277344 6.980469 245.089844.492188 255.992188.492188c10.902343 0 20.714843 6.488281 25.023437 16.511718l58.410156 136.769532 147.796875 13.417968c10.882813.980469 20.054688 8.34375 23.425782 18.710938 3.371093 10.386718.253906 21.738281-7.980469 28.90625L390.988281 312.75l32.9375 145.066406c2.414063 10.667969-1.726562 21.695313-10.578125 28.09375-8.8125 6.378906-20.566406 6.914063-29.890625 1.324219l-127.464843-76.160156-127.445313 76.203125c-4.308594 2.582031-9.109375 3.859375-13.929687 3.859375zm141.375-112.871094c4.84375 0 9.640624 1.300781 13.953124 3.859375l120.277344 71.9375-31.085937-136.941406c-2.21875-9.769532 1.089843-19.925782 8.621093-26.515625l105.472657-92.523438L333.6875 185.410156c-10.003906-.894531-18.667969-7.1875-22.59375-16.46875L255.992188 39.894531 200.84375 168.960938c-3.902344 9.238281-12.5625 15.53125-22.589844 16.429687L38.734375 198.0625l105.46875 92.519531c7.554687 6.59375 10.839844 16.769531 8.621094 26.539063L121.742188 454.0625l120.277343-71.9375c4.328125-2.558594 9.128907-3.859375 13.972657-3.859375zM171.40625 156.441406v.019532zm169.152344-.066406v0zm0 0',
      });
      function Sn(e, t) {
        var n = e.title,
          r = e.titleId,
          c = kn(e, ['title', 'titleId']);
        return a.createElement(
          'svg',
          Nn({ viewBox: '0 -10 511.98645 511', ref: t, 'aria-labelledby': r }, c),
          n ? a.createElement('title', { id: r }, n) : null,
          Mn
        );
      }
      var Vn = a.forwardRef(Sn);
      n.p;
      function Cn() {
        return (Cn =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      function In(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              c = Object.keys(e);
            for (r = 0; r < c.length; r++) (n = c[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var c = Object.getOwnPropertySymbols(e);
          for (r = 0; r < c.length; r++)
            (n = c[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]));
        }
        return a;
      }
      var Rn = a.createElement('path', {
        d:
          'M499.574219 188.503906c-3.199219-9.921875-11.988281-16.9375-22.398438-17.898437l-141.355469-12.84375-55.894531-130.835938c-4.117187-9.578125-13.503906-15.765625-23.933593-15.765625-10.433594 0-19.820313 6.207032-23.9375 15.808594l-55.890626 130.816406L34.785156 170.625c-10.386718.941406-19.175781 7.957031-22.378906 17.878906-3.21875 9.921875-.234375 20.777344 7.617188 27.648438l106.859374 93.695312-31.511718 138.773438c-2.300782 10.199218 1.664062 20.734375 10.136718 26.878906 4.519532 3.328125 9.875 4.992188 15.230469 4.992188 4.628907 0 9.238281-1.234376 13.355469-3.710938l121.898438-72.894531 121.875 72.875c8.917968 5.351562 20.160156 4.882812 28.609374-1.238281 8.46875-6.144532 12.4375-16.683594 10.132813-26.882813l-31.507813-138.769531 106.859376-93.699219c7.847656-6.867187 10.835937-17.726563 7.613281-27.667969zm0 0',
        fill: '#ffc107',
      });
      function Ln(e, t) {
        var n = e.title,
          r = e.titleId,
          c = In(e, ['title', 'titleId']);
        return a.createElement(
          'svg',
          Cn({ viewBox: '0 -10 511.98645 511', ref: t, 'aria-labelledby': r }, c),
          n ? a.createElement('title', { id: r }, n) : null,
          Rn
        );
      }
      var Hn = a.forwardRef(Ln);
      n.p;
      function Pn() {
        var e = Object(r.a)([
          '\n  transform: scale(0);\n  opacity: 0;\n  animation: scale 0.5s ',
          ' forwards ease;\n\n  @keyframes scale {\n    from {\n      opacity: 0;\n      transform: scale(0);\n    }\n    to {\n      opacity: 1;\n      transform: scale(1);\n    }\n  }\n',
        ]);
        return (
          (Pn = function () {
            return e;
          }),
          e
        );
      }
      function An() {
        var e = Object(r.a)([
          '\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: transparent;\n',
        ]);
        return (
          (An = function () {
            return e;
          }),
          e
        );
      }
      function _n() {
        var e = Object(r.a)([
          '\n  position: absolute;\n  top: 0;\n  z-index: 2;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: transparent;\n  fill: black;\n',
        ]);
        return (
          (_n = function () {
            return e;
          }),
          e
        );
      }
      function Bn() {
        var e = Object(r.a)([
          '\n  position: relative;\n  height: 70px;\n  width: 70px;\n',
        ]);
        return (
          (Bn = function () {
            return e;
          }),
          e
        );
      }
      var Xn = i.d.div(Bn()),
        Un = Object(i.d)(Vn)(_n()),
        Dn = Object(i.d)(Hn)(An()),
        Fn = Object(i.d)(Dn)(Pn(), function (e) {
          var t = e.delay;
          return ''.concat(t, 's');
        }),
        Gn = function (e) {
          var t = e.active,
            n = e.animationDelay,
            r = e.animated;
          return c.a.createElement(
            Xn,
            null,
            c.a.createElement(Un, null),
            t
              ? r
                ? c.a.createElement(Fn, { delay: n })
                : c.a.createElement(Dn, null)
              : null
          );
        };
      function Tn() {
        var e = Object(r.a)([
          '\n  width: 60%;\n  height: 70px;\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n',
        ]);
        return (
          (Tn = function () {
            return e;
          }),
          e
        );
      }
      var Wn = i.d.div(Tn()),
        qn = function (e) {
          var t = e.animated,
            n = e.rating;
          return c.a.createElement(
            Wn,
            null,
            [1, 2, 3].map(function (e) {
              return c.a.createElement(Gn, {
                key: e,
                active: e <= n,
                animated: t,
                animationDelay: t ? 1 + 0.2 * e : void 0,
              });
            })
          );
        };
      function Zn() {
        var e = Object(r.a)([
          '\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  justify-content: flex-end;\n',
        ]);
        return (
          (Zn = function () {
            return e;
          }),
          e
        );
      }
      function $n() {
        var e = Object(r.a)([
          '\n  position: relative;\n  height: 100px;\n\n  & span#number {\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n    font-size: 2rem;\n    color: ',
          ';\n  }\n\n  & span#label {\n    position: absolute;\n    font-size: 0.9rem;\n    top: 50%;\n    width: 140px;\n    left: 50%;\n    text-align: center;\n    transform: translateX(-50%);\n    color: ',
          ';\n  }\n',
        ]);
        return (
          ($n = function () {
            return e;
          }),
          e
        );
      }
      function Yn() {
        var e = Object(r.a)([
          '\n  width: 100%;\n  display: flex;\n  justify-content: space-around;\n',
        ]);
        return (
          (Yn = function () {
            return e;
          }),
          e
        );
      }
      function Jn() {
        var e = Object(r.a)([
          '\n  text-align: center;\n  margin: 15px 0;\n  font-size: 1.2rem;\n  color: ',
          ';\n',
        ]);
        return (
          (Jn = function () {
            return e;
          }),
          e
        );
      }
      function Qn() {
        var e = Object(r.a)([
          '\n  position: absolute;\n  opacity: 0;\n  left: 50%;\n  transform: translateX(-50%);\n  height: 300px;\n  width: 480px;\n  padding: 35px 15px 20px 15px;\n  top: 100%;\n  border-radius: 15px;\n  background-color: ',
          ';\n  box-shadow: ',
          ';\n\n  animation: popUp 0.5s 0.5s forwards ease;\n\n  @keyframes popUp {\n    from {\n      opacity: 0.5;\n      top: 100%;\n      transform: translate(-50%, 0);\n    }\n    to {\n      opacity: 1;\n      top: 50%;\n      transform: translate(-50%, -50%);\n    }\n  }\n',
        ]);
        return (
          (Qn = function () {
            return e;
          }),
          e
        );
      }
      var Kn = i.d.div(
          Qn(),
          function (e) {
            return e.theme.main_bg;
          },
          function (e) {
            return e.theme.box_shadow_lg;
          }
        ),
        er = i.d.p(Jn(), function (e) {
          return e.theme.black;
        }),
        tr = i.d.div(Yn()),
        nr = i.d.div(
          $n(),
          function (e) {
            return e.theme.black;
          },
          function (e) {
            return e.theme.black;
          }
        ),
        rr = i.d.div(Zn()),
        ar = function (e) {
          var t = e.wpm,
            n = e.cpm,
            r = e.accuracy,
            a = e.rating,
            l = e.onGoBack,
            s = e.onTryAgain;
          return c.a.createElement(
            Kn,
            null,
            c.a.createElement(qn, { rating: a, animated: !0 }),
            c.a.createElement(er, null, 'Your Scores'),
            c.a.createElement(
              tr,
              null,
              c.a.createElement(
                nr,
                null,
                c.a.createElement('span', { id: 'number' }, t),
                c.a.createElement('span', { id: 'label' }, 'Words per Minute')
              ),
              c.a.createElement(
                nr,
                null,
                c.a.createElement('span', { id: 'number' }, n),
                c.a.createElement('span', { id: 'label' }, 'Charachters per Minute')
              ),
              c.a.createElement(
                nr,
                null,
                c.a.createElement('span', { id: 'number' }, r, '%'),
                c.a.createElement('span', { id: 'label' }, 'Typing Accuracy')
              )
            ),
            c.a.createElement(
              rr,
              null,
              c.a.createElement(qe, { primary: !0, onClick: s }, 'Try Again'),
              c.a.createElement(qe, { danger: !0, onClick: l }, 'Go Back')
            )
          );
        };
      function cr() {
        var e = Object(r.a)([
          '\n  position: relative;\n  background-color: ',
          ';\n  width: 110px;\n  height: 35px;\n  border-radius: 14px;\n  border: none;\n\n  &:after {\n    content: "";\n    position: absolute;\n    z-index: -2;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    border-radius: 14px;\n    border: none;\n    box-shadow: 0 0 0 0px ',
          ';\n    animation: wave 1.5s infinite;\n  }\n  @keyframes wave {\n    0% {\n      transform: scale(0.95);\n      box-shadow: 0 0 10px ',
          ';\n    }\n\n    50% {\n      transform: scale(1);\n      box-shadow: 0 0 25px ',
          ';\n    }\n\n    100% {\n      transform: scale(0.95);\n      box-shadow: 0 0 10px ',
          ';\n    }\n  }\n',
        ]);
        return (
          (cr = function () {
            return e;
          }),
          e
        );
      }
      function lr() {
        var e = Object(r.a)([
          '\n  position: absolute;\n  z-index: 1000;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n',
        ]);
        return (
          (lr = function () {
            return e;
          }),
          e
        );
      }
      var sr = i.d.div(lr()),
        or = Object(i.d)(qe)(
          cr(),
          function (e) {
            return e.theme.green;
          },
          function (e) {
            return e.theme.green;
          },
          function (e) {
            return e.theme.green;
          },
          function (e) {
            return e.theme.green;
          },
          function (e) {
            return e.theme.green;
          }
        ),
        ir = function (e) {
          var t = e.onStartClicked;
          return c.a.createElement(
            sr,
            null,
            c.a.createElement(or, { onClick: t }, 'Start')
          );
        };
      function mr() {
        var e = Object(r.a)([
          '\n  position: relative;\n  width: 80%;\n  margin-top: 40px;\n  border-radius: 20px;\n  overflow: hidden;\n  box-shadow: ',
          ';\n',
        ]);
        return (
          (mr = function () {
            return e;
          }),
          e
        );
      }
      function ur() {
        var e = Object(r.a)([
          '\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 35px;\n\n  outline: none;\n\n  & svg#keyboard {\n    margin-top: 50px;\n    width: 70%;\n    min-width: 300px;\n    max-width: 700px;\n    background-color: white;\n    border-radius: 7px;\n    background-color: #e0e0e0;\n    margin-bottom: 40px;\n    box-shadow: ',
          ';\n  }\n',
        ]);
        return (
          (ur = function () {
            return e;
          }),
          e
        );
      }
      var dr = i.d.div(ur(), function (e) {
          return e.theme.box_shadow_lg;
        }),
        fr = i.d.div(mr(), function (e) {
          return e.theme.box_shadow_md;
        }),
        pr = function () {
          var e = Object(a.useState)(null),
            t = Object(m.a)(e, 2),
            n = t[0],
            r = t[1],
            l = Object(a.useState)(0),
            s = Object(m.a)(l, 2),
            o = s[0],
            i = s[1],
            u = Object(a.useState)(0),
            d = Object(m.a)(u, 2),
            f = d[0],
            p = d[1],
            h = Object(a.useState)(60),
            b = Object(m.a)(h, 2),
            x = b[0],
            v = b[1],
            g = Object(a.useState)(0),
            E = Object(m.a)(g, 2),
            y = E[0],
            O = E[1],
            j = Object(a.useState)([]),
            w = Object(m.a)(j, 2),
            z = w[0],
            N = w[1],
            k = Object(a.useRef)(1),
            M = (function (e) {
              var t = Object(a.useState)(!1),
                n = Object(m.a)(t, 2),
                r = n[0],
                c = n[1],
                l = Object(a.useState)([]),
                s = Object(m.a)(l, 2),
                o = s[0],
                i = s[1],
                u = Object(a.useState)(null),
                d = Object(m.a)(u, 2),
                f = d[0],
                p = d[1];
              return (
                Object(a.useEffect)(
                  function () {
                    i([]),
                      (function () {
                        var e = Object(Gt.a)(
                          Ft.a.mark(function e() {
                            var t, n;
                            return Ft.a.wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        c(!0),
                                        (e.prev = 1),
                                        (e.next = 4),
                                        fetch(
                                          'https://random-word-api.herokuapp.com/word?number=10000'
                                        )
                                      );
                                    case 4:
                                      return (t = e.sent), (e.next = 7), t.json();
                                    case 7:
                                      (n = e.sent),
                                        i(
                                          n.filter(function (e, t) {
                                            return (
                                              e.length > 3 && e.length < 15 && t <= 70
                                            );
                                          })
                                        ),
                                        (e.next = 14);
                                      break;
                                    case 11:
                                      (e.prev = 11), (e.t0 = e.catch(1)), p(e.t0);
                                    case 14:
                                      return (e.prev = 14), c(!1), e.finish(14);
                                    case 17:
                                    case 'end':
                                      return e.stop();
                                  }
                              },
                              e,
                              null,
                              [[1, 11, 14, 17]]
                            );
                          })
                        );
                        return function () {
                          return e.apply(this, arguments);
                        };
                      })()();
                  },
                  [e]
                ),
                { loading: r, words: o, error: f }
              );
            })(k.current),
            S = M.loading,
            V = M.words,
            C = M.error,
            I = Object(a.useState)([]),
            R = Object(m.a)(I, 2),
            L = R[0],
            H = R[1],
            P = Object(a.useState)(0),
            A = Object(m.a)(P, 2),
            _ = A[0],
            B = A[1],
            X = Object(a.useState)(0),
            U = Object(m.a)(X, 2),
            D = U[0],
            F = U[1],
            G = Object(a.useState)(0),
            T = Object(m.a)(G, 2),
            W = T[0],
            q = T[1],
            Z = Object(a.useState)(0),
            $ = Object(m.a)(Z, 2),
            Y = $[0],
            J = $[1],
            Q = Object(a.useState)(0),
            K = Object(m.a)(Q, 2),
            ee = K[0],
            te = K[1],
            ne = Object(a.useState)(0),
            re = Object(m.a)(ne, 2),
            ae = re[0],
            ce = re[1],
            le = Object(a.useState)(!1),
            se = Object(m.a)(le, 2),
            oe = se[0],
            ie = se[1],
            me = Object(a.useState)(!1),
            ue = Object(m.a)(me, 2),
            de = ue[0],
            fe = ue[1],
            pe = Object(a.useState)(1),
            he = Object(m.a)(pe, 2),
            be = he[0],
            ve = he[1],
            ge = Object(a.useRef)(null),
            Ee = Object(a.useRef)(null),
            ye = Object(a.useRef)(null);
          Object(a.useEffect)(
            function () {
              V.length &&
                N(
                  V.map(function (e) {
                    var t = {};
                    return (
                      e.split('').forEach(function (e, n) {
                        t[n] = null;
                      }),
                      t
                    );
                  })
                );
            },
            [V]
          ),
            Object(a.useEffect)(
              function () {
                0 !== W && 0 !== D && ce(Math.floor((W / D) * 100));
              },
              [D, W]
            ),
            Object(a.useEffect)(
              function () {
                D && te(Math.min(Math.floor((D / (60 - Math.floor(x))) * 60), 500));
              },
              [x, D]
            ),
            Object(a.useEffect)(
              function () {
                _ && J(Math.floor((_ / (60 - x)) * 60));
              },
              [x, _]
            ),
            Object(a.useEffect)(
              function () {
                if ('finished' !== n) {
                  var e = function (e) {
                    if (
                      (null === n &&
                        de &&
                        (r('started'),
                        (Ee.current = setInterval(function () {
                          v(function (e) {
                            return e - 1;
                          });
                        }, 1e3))),
                      (8 === e.keyCode || 46 === e.keyCode) && o > 0)
                    )
                      return (
                        z[o][o] && (q(W - 1), F(D - 1)),
                        i(o - 1),
                        void N(
                          z.map(function (e, t) {
                            return t === f
                              ? Object(xe.a)(
                                  Object(xe.a)({}, e),
                                  {},
                                  Object(Ut.a)({}, o - 1, null)
                                )
                              : e;
                          })
                        )
                      );
                    if (32 === e.keyCode) {
                      if (o <= V[f].length - 1)
                        for (var t = o; t < V[f].length; t += 1) z[f][t] = !1;
                      B(function (e) {
                        return e + 1;
                      }),
                        p(f + 1),
                        i(0);
                    }
                    if (e.keyCode >= 65 && e.keyCode <= 90) {
                      if (o === V[f].length - 1 && null !== z[f][o]) return;
                      F(D + 1),
                        e.key === V[f][o]
                          ? (q(W + 1),
                            i(o + 1),
                            N(function (e) {
                              return e.map(function (e, t) {
                                return t === f
                                  ? Object(xe.a)(
                                      Object(xe.a)({}, e),
                                      {},
                                      Object(Ut.a)({}, o, !0)
                                    )
                                  : e;
                              });
                            }))
                          : (i(o + 1),
                            N(function (e) {
                              return e.map(function (e, t) {
                                return t === f
                                  ? Object(xe.a)(
                                      Object(xe.a)({}, e),
                                      {},
                                      Object(Ut.a)({}, o, !1)
                                    )
                                  : e;
                              });
                            }));
                    }
                  };
                  return (
                    de
                      ? document.addEventListener('keydown', e)
                      : document.removeEventListener('keydown', e),
                    function () {
                      document.removeEventListener('keydown', e);
                    }
                  );
                }
              },
              [o, f, de, n, W, D, V, z]
            ),
            Object(a.useEffect)(
              function () {
                'finished' === n && ie(!0);
              },
              [n]
            ),
            Object(a.useEffect)(
              function () {
                var e, t;
                ge.current &&
                  V.length &&
                  (null === (e = ge.current.querySelectorAll('path')) ||
                    void 0 === e ||
                    e.forEach(function (e) {
                      return e.classList.remove('active');
                    }),
                  null === (t = ge.current.querySelector('path#'.concat(V[f][o]))) ||
                    void 0 === t ||
                    t.classList.toggle('active'));
              },
              [o, f, V]
            ),
            Object(a.useEffect)(
              function () {
                V.length &&
                  L.length &&
                  O(
                    0 === f
                      ? function (e) {
                          return e + L[f].getBoundingClientRect().width / 2 + 20;
                        }
                      : function (e) {
                          return (
                            e +
                            L[f - 1].getBoundingClientRect().width / 2 +
                            L[f].getBoundingClientRect().width / 2 +
                            40
                          );
                        }
                  );
              },
              [f, V.length, L]
            );
          var Oe = Object(a.useCallback)(function (e) {
              e &&
                H(function (t) {
                  return [].concat(Object(Xt.a)(t), [e]);
                });
            }, []),
            je = function () {
              clearTimeout(ye.current),
                clearInterval(Ee.current),
                fe(!1),
                ce(0),
                te(0),
                i(0),
                p(0),
                O(0),
                r(null),
                v(60),
                q(0),
                F(0),
                B(0),
                H([]),
                N([]),
                J(0),
                ve(1),
                (k.current += 1);
            };
          Object(a.useEffect)(
            function () {
              0 === x &&
                'started' === n &&
                (r('finished'),
                Y < 10 && ve(1),
                Y >= 10 && Y <= 20 && ve(2),
                Y > 20 && ve(3),
                ie(!0),
                fe(!1),
                clearInterval(Ee.current));
            },
            [n, x, Y]
          );
          var we = function () {
              ie(!1);
            },
            ze = function () {
              ie(!1), je(), fe(!0);
            };
          return c.a.createElement(
            dr,
            null,
            c.a.createElement(Jt, { ref: ge }),
            c.a.createElement(xn, { remainingTime: x }),
            c.a.createElement(
              fr,
              null,
              c.a.createElement(pn, {
                loading: S,
                words: V,
                error: C,
                setRef: Oe,
                offset: y,
                wordsToInputMap: z,
                currentWordIndex: f,
                currentLetterIndex: o,
                onRetryClick: je,
              }),
              !de &&
                c.a.createElement(ir, {
                  onStartClicked: function () {
                    null !== n && je(), fe(!0);
                  },
                })
            ),
            c.a.createElement(On, { wpm: Y, cpm: ee, accuracy: ae }),
            c.a.createElement(zn, {
              inProp: oe,
              onClickOutside: function () {
                ie(!1);
              },
              render: function () {
                return c.a.createElement(ar, {
                  wpm: Y,
                  cpm: ee,
                  accuracy: ae,
                  rating: be,
                  onGoBack: we,
                  onTryAgain: ze,
                });
              },
            })
          );
        };
      function hr() {
        var e = Object(r.a)([
          '\n  position: relative;\n  overflow: auto;\n  width: 100%;\n  min-width: 300px;\n  height: 100vh;\n  padding: 10px 10px;\n  background-color: ',
          ';\n',
        ]);
        return (
          (hr = function () {
            return e;
          }),
          e
        );
      }
      var br = i.d.div(hr(), function (e) {
          return e.theme.main_bg;
        }),
        xr = function () {
          var e = Object(a.useState)(!1),
            t = Object(m.a)(e, 2),
            n = t[0],
            r = (t[1], Object(a.useState)(null)),
            l = Object(m.a)(r, 2),
            s = l[0],
            o = (l[1], d.Provider);
          return c.a.createElement(
            i.a,
            { theme: f },
            c.a.createElement(
              o,
              {
                value: {
                  isLoggedIn: n,
                  userData: s,
                  loginUser: function (e) {
                    console.log(e);
                  },
                  registerUser: function (e) {
                    console.log(e);
                  },
                  logoutUser: function () {
                    console.log('logout');
                  },
                },
              },
              c.a.createElement(
                br,
                null,
                c.a.createElement(Bt, null),
                c.a.createElement(u.a, { from: '/', to: '/practice' }),
                c.a.createElement(
                  u.d,
                  null,
                  c.a.createElement(u.b, {
                    path: '/practice',
                    render: function () {
                      return c.a.createElement(pr, null);
                    },
                  })
                )
              )
            )
          );
        };
      function vr() {
        var e = Object(r.a)([
          "\n  *{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n  body{\n    font-size: 16px;\n    font-family: 'Quicksand', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    text-shadow: rgba(0, 0, 0, 0.05) 0 0 5px;\n  }\n",
        ]);
        return (
          (vr = function () {
            return e;
          }),
          e
        );
      }
      var gr = Object(i.b)(vr());
      s.a.render(
        c.a.createElement(
          o.a,
          null,
          c.a.createElement(
            c.a.StrictMode,
            null,
            c.a.createElement(gr, null),
            c.a.createElement(xr, null)
          )
        ),
        document.getElementById('root')
      );
    },
  },
  [[34, 1, 2]],
]);
//# sourceMappingURL=main.9a6026ba.chunk.js.map
