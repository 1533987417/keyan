'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _tip = require('./js/tip.js');

var _tip2 = _interopRequireDefault(_tip);

var _config = require('./js/config.js');

var _config2 = _interopRequireDefault(_config);

var _db = require('./js/db.js');

var _db2 = _interopRequireDefault(_db);

var _Request = require('./js/Request.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BindJwc = function (_wepy$page) {
  _inherits(BindJwc, _wepy$page);

  function BindJwc() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, BindJwc);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BindJwc.__proto__ || Object.getPrototypeOf(BindJwc)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: "绑定账号",
      navigationBarBackgroundColor: '#090a0f',
      navigationBarTextStyle: 'white'
    }, _this.components = {}, _this.data = {
      type: "bind",
      types: {
        "bind": {
          "name": "统一认证账号",
          "url": "/bind",
          "verify": "verify",
          "help": "密码为统一身份认证平台(即EDU邮箱)的密码，默认密码为身份证后六位,忘记密码可以访问 yzu.edu.cn 找回"
        }

      }
    }, _this.methods = {
      bind: function bind(e) {
        var params = e.detail.value;
        if (params.student_id == 0 || params.password == "") {
          _tip2.default.alert("学号密码必填！");
          return;
        }
        this.Bind(params);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(BindJwc, [{
    key: 'onLoad',
    value: function onLoad(option) {
      var _this2 = this;

      _wepy2.default.login().then(function (d) {
        _wepy2.default.request(_config2.default.service.loginbywx + '?code=' + d.code).then(function (e) {

          console.log(e);
          if (e.data.data.gzh != undefined) {
            _wepy2.default.showModal({
              title: "账号检测",
              content: "已检测到该微信绑定了工号" + e.data.data.gzh + "是否直接登陆",
              cancelText: "重新绑定",
              confirmText: "直接登陆"
            }).then(function (d) {
              console.log(d);
              if (d.confirm) {
                console.log("登陆啦");
                console.log(e.data.token);
                _db2.default.Set('token', e.data.token);
                _this2.$parent.globalData.userinfo = e.data.data;
                _db2.default.Set('userinfo', e.data.data);
                _wepy2.default.reLaunch({ url: "/pages/index" });
              } else if (d.cancel) {
                console.log("解绑啦");
              }
            });
          }
        });
      });
    }
  }, {
    key: 'Bind',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(params) {
        var _this3 = this;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                try {
                  console.log(params);

                  _wepy2.default.login().then(function (d) {
                    console.log(d.code);
                    var code = d.code;
                    _wepy2.default.request({ url: _config2.default.service.bindinfo + '?code=' + code + '&gzh=' + params.student_id + '&password=' + params.password }).then(function (d) {
                      console.log(d.data);
                      if (d.data.status) {
                        _db2.default.Set('token', d.data.token);
                        _this3.$parent.globalData.userinfo = d.data.data;
                        _db2.default.Set('userinfo', d.data.data);
                        _tip2.default.success("绑定成功");

                        _wepy2.default.reLaunch({ url: "/pages/index" });
                      } else {
                        _wepy2.default.showToast({
                          title: '账号密码不匹配',
                          icon: 'none',
                          duration: 1000
                        });
                      }
                    });
                  });

                  /*
                  
                          const res = await this.POST(this.types[this.type].url || "/bind", params);
                          db.Set(this.types[this.type].verify || "verify", 1);
                          wepy.showModal({
                            title: "绑定成功",
                            content: "点击确认掉转到首页，请在首页点击查看we川大使用说明！",
                            showCancel: false,
                            success: function(res) {
                              // 关闭所有页面并且跳转到首页，确保verify数据重新获取
                              wepy.reLaunch({
                                url: "/pages/index"
                              });
                            }
                          });*/
                } catch (error) {
                  console.log(error);
                }

              case 1:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function Bind(_x) {
        return _ref2.apply(this, arguments);
      }

      return Bind;
    }()
  }]);

  return BindJwc;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(BindJwc , 'pages/bind'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbmQuanMiXSwibmFtZXMiOlsiQmluZEp3YyIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRleHRTdHlsZSIsImNvbXBvbmVudHMiLCJkYXRhIiwidHlwZSIsInR5cGVzIiwibWV0aG9kcyIsImJpbmQiLCJlIiwicGFyYW1zIiwiZGV0YWlsIiwidmFsdWUiLCJzdHVkZW50X2lkIiwicGFzc3dvcmQiLCJhbGVydCIsIkJpbmQiLCJvcHRpb24iLCJsb2dpbiIsInRoZW4iLCJkIiwicmVxdWVzdCIsInNlcnZpY2UiLCJsb2dpbmJ5d3giLCJjb2RlIiwiY29uc29sZSIsImxvZyIsImd6aCIsInVuZGVmaW5lZCIsInNob3dNb2RhbCIsInRpdGxlIiwiY29udGVudCIsImNhbmNlbFRleHQiLCJjb25maXJtVGV4dCIsImNvbmZpcm0iLCJ0b2tlbiIsIlNldCIsIiRwYXJlbnQiLCJnbG9iYWxEYXRhIiwidXNlcmluZm8iLCJyZUxhdW5jaCIsInVybCIsImNhbmNlbCIsImJpbmRpbmZvIiwic3RhdHVzIiwic3VjY2VzcyIsInNob3dUb2FzdCIsImljb24iLCJkdXJhdGlvbiIsImVycm9yIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDRTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFHcUJBLE87Ozs7Ozs7Ozs7Ozs7O3dMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QixNQURqQjtBQUVQQyxvQ0FBOEIsU0FGdkI7QUFHUEMsOEJBQXdCO0FBSGpCLEssUUFNVEMsVSxHQUFhLEUsUUFDYkMsSSxHQUFPO0FBQ0xDLFlBQU0sTUFERDtBQUVMQyxhQUFPO0FBQ0wsZ0JBQVE7QUFDTixrQkFBUSxRQURGO0FBRU4saUJBQU8sT0FGRDtBQUdOLG9CQUFVLFFBSEo7QUFJTixrQkFBUTtBQUpGOztBQURIO0FBRkYsSyxRQVlQQyxPLEdB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O0FBQ0Esc0NBQUl5QyxPQUFKLENBQVksTUFBWjs7QUFFQSx1Q0FBS0wsUUFBTCxDQUFjLEVBQUNDLEtBQUksY0FBTCxFQUFkO0FBQ0QsdUJBUEMsTUFTSztBQUNILHVDQUFLSyxTQUFMLENBQWU7QUFDYmhCLGlDQUFPLFNBRE07QUFFYmlCLGdDQUFNLE1BRk87QUFHYkMsb0NBQVU7QUFIRyx5QkFBZjtBQUtBO0FBR0gscUJBcEJEO0FBdUJELG1CQTFCRDs7QUE4QlI7Ozs7Ozs7Ozs7Ozs7OztBQWVPLGlCQWhERCxDQWdERSxPQUFPQyxLQUFQLEVBQWM7QUFDZHhCLDBCQUFRQyxHQUFSLENBQVl1QixLQUFaO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUEvR2dDLGVBQUtDLEk7O2tCQUFyQnBELE8iLCJmaWxlIjoiYmluZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gXCJ3ZXB5XCJcclxuICBpbXBvcnQgdGlwIGZyb20gJy4uL3BhZ2VzL2pzL3RpcCdcclxuICBpbXBvcnQgIGNvbmZpZyAgZnJvbSAnLi4vcGFnZXMvanMvY29uZmlnJ1xyXG4gIGltcG9ydCBkYiBmcm9tICcuLi9wYWdlcy9qcy9kYidcclxuICBpbXBvcnQge3d4UmVxdWVzdH0gZnJvbSAnLi4vcGFnZXMvanMvUmVxdWVzdCdcclxuXHJcbiBcclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBCaW5kSndjIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogXCLnu5HlrprotKblj7dcIixcclxuICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyMwOTBhMGYnLFxyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnd2hpdGUnLFxyXG4gICAgfTtcclxuICAgIFxyXG4gICAgY29tcG9uZW50cyA9IHt9O1xyXG4gICAgZGF0YSA9IHtcclxuICAgICAgdHlwZTogXCJiaW5kXCIsXHJcbiAgICAgIHR5cGVzOiB7XHJcbiAgICAgICAgXCJiaW5kXCI6IHtcclxuICAgICAgICAgIFwibmFtZVwiOiBcIue7n+S4gOiupOivgei0puWPt1wiLFxyXG4gICAgICAgICAgXCJ1cmxcIjogXCIvYmluZFwiLFxyXG4gICAgICAgICAgXCJ2ZXJpZnlcIjogXCJ2ZXJpZnlcIixcclxuICAgICAgICAgIFwiaGVscFwiOiBcIuWvhueggeS4uue7n+S4gOi6q+S7veiupOivgeW5s+WPsCjljbNFRFXpgq7nrrEp55qE5a+G56CB77yM6buY6K6k5a+G56CB5Li66Lqr5Lu96K+B5ZCO5YWt5L2NLOW/mOiusOWvhueggeWPr+S7peiuv+mXriB5enUuZWR1LmNuIOaJvuWbnlwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgYmluZChlKSB7XHJcbiAgICAgICAgbGV0IHBhcmFtcyA9IGUuZGV0YWlsLnZhbHVlO1xyXG4gICAgICAgIGlmIChwYXJhbXMuc3R1ZGVudF9pZCA9PSAwIHx8IHBhcmFtcy5wYXNzd29yZCA9PSBcIlwiKSB7XHJcbiAgICAgICAgICB0aXAuYWxlcnQoXCLlrablj7flr4bnoIHlv4XloavvvIFcIik7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuQmluZChwYXJhbXMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAgb25Mb2FkKG9wdGlvbikge1xyXG4gICAgICB3ZXB5LmxvZ2luKCkudGhlbigoZCk9PntcclxuICAgICAgICAgd2VweS5yZXF1ZXN0KGNvbmZpZy5zZXJ2aWNlLmxvZ2luYnl3eCsnP2NvZGU9JytkLmNvZGUpLnRoZW4oKGUpPT57XHJcblxyXG4gICAgICAgICAgY29uc29sZS5sb2coZSlcclxuICAgICAgICAgIGlmKGUuZGF0YS5kYXRhLmd6aCE9dW5kZWZpbmVkKXtcclxuICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgdGl0bGU6IFwi6LSm5Y+35qOA5rWLXCIsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwi5bey5qOA5rWL5Yiw6K+l5b6u5L+h57uR5a6a5LqG5bel5Y+3XCIrZS5kYXRhLmRhdGEuZ3poK1wi5piv5ZCm55u05o6l55m76ZmGXCIsXHJcbiAgICAgICAgICAgIGNhbmNlbFRleHQ6XCLph43mlrDnu5HlrppcIixcclxuICAgICAgICAgICAgY29uZmlybVRleHQ6XCLnm7TmjqXnmbvpmYZcIlxyXG4gICAgICAgICAgICB9KS50aGVuKChkKT0+e1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZClcclxuICAgICAgICAgICAgICAgIGlmKGQuY29uZmlybSl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLnmbvpmYbllaZcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZS5kYXRhLnRva2VuKVxyXG4gICAgICAgICAgICAgICAgICAgIGRiLlNldCgndG9rZW4nLGUuZGF0YS50b2tlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEudXNlcmluZm89ZS5kYXRhLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgZGIuU2V0KCd1c2VyaW5mbycsZS5kYXRhLmRhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgd2VweS5yZUxhdW5jaCh7dXJsOlwiL3BhZ2VzL2luZGV4XCJ9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZihkLmNhbmNlbCl7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6Kej57uR5ZWmXCIpXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9KTt9XHJcbiAgICAgICAgIH0pO1xyXG4gICAgICAgICAgXHJcbiAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgYXN5bmMgQmluZChwYXJhbXMpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhwYXJhbXMpO1xyXG5cclxuICAgICAgICB3ZXB5LmxvZ2luKCkudGhlbigoZCk9PntcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGQuY29kZSk7XHJcbiAgICAgICAgICB2YXIgY29kZT0gZC5jb2RlO1xyXG4gICAgICAgICAgd2VweS5yZXF1ZXN0KHt1cmw6Y29uZmlnLnNlcnZpY2UuYmluZGluZm8rJz9jb2RlPScrY29kZSsnJmd6aD0nK3BhcmFtcy5zdHVkZW50X2lkKycmcGFzc3dvcmQ9JytwYXJhbXMucGFzc3dvcmR9KS50aGVuKChkKT0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkLmRhdGEpO1xyXG4gICAgICAgICAgICBpZihkLmRhdGEuc3RhdHVzKXtcclxuICAgICAgICAgICAgZGIuU2V0KCd0b2tlbicsZC5kYXRhLnRva2VuKVxyXG4gICAgICAgICAgICB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS51c2VyaW5mbz1kLmRhdGEuZGF0YTtcclxuICAgICAgICAgICAgZGIuU2V0KCd1c2VyaW5mbycsZC5kYXRhLmRhdGEpXHJcbiAgICAgICAgICAgIHRpcC5zdWNjZXNzKFwi57uR5a6a5oiQ5YqfXCIpO1xyXG5cclxuICAgICAgICAgICAgd2VweS5yZUxhdW5jaCh7dXJsOlwiL3BhZ2VzL2luZGV4XCJ9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAn6LSm5Y+35a+G56CB5LiN5Yy56YWNJyxcclxuICAgICAgICAgICAgICAgIGljb246ICdub25lJyxcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuLypcclxuXHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgdGhpcy5QT1NUKHRoaXMudHlwZXNbdGhpcy50eXBlXS51cmwgfHwgXCIvYmluZFwiLCBwYXJhbXMpO1xyXG4gICAgICAgIGRiLlNldCh0aGlzLnR5cGVzW3RoaXMudHlwZV0udmVyaWZ5IHx8IFwidmVyaWZ5XCIsIDEpO1xyXG4gICAgICAgIHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgICAgIHRpdGxlOiBcIue7keWumuaIkOWKn1wiLFxyXG4gICAgICAgICAgY29udGVudDogXCLngrnlh7vnoa7orqTmjonovazliLDpppbpobXvvIzor7flnKjpppbpobXngrnlh7vmn6XnnIt3ZeW3neWkp+S9v+eUqOivtOaYju+8gVwiLFxyXG4gICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2UsXHJcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgLy8g5YWz6Zet5omA5pyJ6aG16Z2i5bm25LiU6Lez6L2s5Yiw6aaW6aG177yM56Gu5L+ddmVyaWZ55pWw5o2u6YeN5paw6I635Y+WXHJcbiAgICAgICAgICAgIHdlcHkucmVMYXVuY2goe1xyXG4gICAgICAgICAgICAgIHVybDogXCIvcGFnZXMvaW5kZXhcIlxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTsqL1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuIl19