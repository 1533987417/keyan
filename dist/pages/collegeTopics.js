'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _config = require('./js/config.js');

var _config2 = _interopRequireDefault(_config);

var _tip = require('./js/tip.js');

var _tip2 = _interopRequireDefault(_tip);

var _Request = require('./js/Request.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var test = function (_wepy$page) {
  _inherits(test, _wepy$page);

  function test() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, test);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = test.__proto__ || Object.getPrototypeOf(test)).call.apply(_ref, [this].concat(args))), _this), _this.components = {
      //为两个相同组件的不同实例分配不同的组件ID，从而避免数据同步变化的问题


    }, _this.config = {
      "navigationBarBackgroundColor": "#fcfcfc",
      "navigationBarTitleText": ""

    }, _this.data = {
      flag: true,
      topiclist: [],
      PageIndex: 0,
      count: Number
    }, _this.methods = {
      open: function open(e) {
        var _this2 = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var that, res;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  that = _this2;
                  _context.next = 3;
                  return _wepy2.default.showActionSheet({
                    itemList: ['删除']
                  });

                case 3:
                  res = _context.sent;


                  if (!res.cancel) {
                    _wepy2.default.showModal({
                      title: "是否删除该主题",
                      content: "若主题删除，有关评论将一并清空",
                      cancelText: "取消",
                      confirmText: "删除"
                    }).then(function (d) {
                      console.log(d);
                      if (d.confirm) {
                        console.log(e.currentTarget.dataset.fid);
                        (0, _Request.wxRequest)('get', _config2.default.service.DeleteTopic + '?tid=' + e.currentTarget.dataset.tid + '&fid=' + e.currentTarget.dataset.fid).then(function (resp) {
                          if (resp == 1) {
                            _tip2.default.success('删除成功');
                            that.topiclist = [];
                            that.PageIndex = 0;
                            that.flag = true;
                            // that.$apply();
                            //tip.toast('加载中',false,'loading');
                            that.getmore();
                            that.onShow();
                          } else {
                            _tip2.default.error('数据不存在');
                          }
                        });
                      }
                    });
                  }

                case 5:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2);
        }))();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(test, [{
    key: 'onLoad',
    value: function onLoad() {
      this.getmore();
      wx.setNavigationBarTitle({ title: this.$parent.globalData.userinfo.bmmc });
    }
  }, {
    key: 'onReachBottom',
    value: function onReachBottom() {
      console.log("到达底部");
      this.getmore();
    }
  }, {
    key: 'onShow',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var that, res;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                that = this;
                _context2.next = 3;
                return (0, _Request.wxRequest)('get', _config2.default.service.getcollegeTopicsCount + '?bmdm=' + that.$parent.globalData.userinfo.bmdm);

              case 3:
                res = _context2.sent;

                that.count = res;
                that.$apply();

              case 6:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function onShow() {
        return _ref2.apply(this, arguments);
      }

      return onShow;
    }()
  }, {
    key: 'getmore',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var falg2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        var that, res, x;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!this.flag) {
                  _context3.next = 11;
                  break;
                }

                that = this;

                this.PageIndex = this.PageIndex + 1;

                _context3.next = 5;
                return (0, _Request.wxRequest)('get', _config2.default.service.getCollegeTopics + '?bmdm=' + that.$parent.globalData.userinfo.bmdm + '&PageIndex=' + that.PageIndex);

              case 5:
                res = _context3.sent;

                if (res.length == 0) {
                  that.flag = false;
                } else if (res.length < 10) {
                  that.flag = false;
                }

                for (x in res) {
                  res[x][6] = res[x][6].slice(0, 10);
                }
                console.log(res);
                this.topiclist = this.topiclist.concat(res);
                this.$apply();

              case 11:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getmore() {
        return _ref3.apply(this, arguments);
      }

      return getmore;
    }()
  }]);

  return test;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(test , 'pages/collegeTopics'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxlZ2VUb3BpY3MuanMiXSwibmFtZXMiOlsidGVzdCIsImNvbXBvbmVudHMiLCJjb25maWciLCJkYXRhIiwiZmxhZyIsInRvcGljbGlzdCIsIlBhZ2VJbmRleCIsImNvdW50IiwiTnVtYmVyIiwibWV0aG9kcyIsIm9wZW4iLCJlIiwidGhhdCIsInNob3dBY3Rpb25TaGVldCIsIml0ZW1MaXN0IiwicmVzIiwiY2FuY2VsIiwic2hvd01vZGFsIiwidGl0bGUiLCJjb250ZW50IiwiY2FuY2VsVGV4dCIsImNvbmZpcm1UZXh0IiwidGhlbiIsImQiLCJjb25zb2xlIiwibG9nIiwiY29uZmlybSIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiZmlkIiwic2VydmljZSIsIkRlbGV0ZVRvcGljIiwidGlkIiwicmVzcCIsInN1Y2Nlc3MiLCJnZXRtb3JlIiwib25TaG93IiwiZXJyb3IiLCJ3eCIsInNldE5hdmlnYXRpb25CYXJUaXRsZSIsIiRwYXJlbnQiLCJnbG9iYWxEYXRhIiwidXNlcmluZm8iLCJibW1jIiwiZ2V0Y29sbGVnZVRvcGljc0NvdW50IiwiYm1kbSIsIiRhcHBseSIsImZhbGcyIiwiZ2V0Q29sbGVnZVRvcGljcyIsImxlbmd0aCIsIngiLCJzbGljZSIsImNvbmNhdCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUlxQkEsSTs7Ozs7Ozs7Ozs7Ozs7a0xBQ25CQyxVLEdBQWE7QUFDSDs7O0FBREcsSyxRQUtMQyxNLEdBQVM7QUFDUCxzQ0FBK0IsU0FEeEI7QUFFUCxnQ0FBeUI7O0FBRmxCLEssUUFLVEMsSSxHQUFLO0FBQ0pDLFlBQUssSUFERDtBQUVKQyxpQkFBVSxFQUZOO0FBR0pDLGlCQUFVLENBSE47QUFJSkMsYUFBTUM7QUFKRixLLFFBNkNQQyxPLEdBQVE7QUFDQUMsVUFEQSxnQkFDTUMsQ0FETixFQUNTO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFB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QU8sQ0FBUCxJQUFVbkMsSUFBSW1DLENBQUosRUFBTyxDQUFQLEVBQVVDLEtBQVYsQ0FBZ0IsQ0FBaEIsRUFBa0IsRUFBbEIsQ0FBVjtBQUNEO0FBQ0QzQix3QkFBUUMsR0FBUixDQUFZVixHQUFaO0FBQ0EscUJBQUtWLFNBQUwsR0FBZSxLQUFLQSxTQUFMLENBQWUrQyxNQUFmLENBQXNCckMsR0FBdEIsQ0FBZjtBQUNBLHFCQUFLK0IsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXBEc0IsZUFBS08sSTs7a0JBQWxCckQsSSIsImZpbGUiOiJjb2xsZWdlVG9waWNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vcGFnZXMvanMvY29uZmlnJ1xyXG5pbXBvcnQgdGlwIGZyb20gJy4uL3BhZ2VzL2pzL3RpcCdcclxuaW1wb3J0IHt3eFJlcXVlc3R9IGZyb20gJy4uL3BhZ2VzL2pzL1JlcXVlc3QnXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHRlc3QgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gIGNvbXBvbmVudHMgPSB7XHJcbiAgICAgICAgICAgIC8v5Li65Lik5Liq55u45ZCM57uE5Lu255qE5LiN5ZCM5a6e5L6L5YiG6YWN5LiN5ZCM55qE57uE5Lu2SUTvvIzku47ogIzpgb/lhY3mlbDmja7lkIzmraXlj5jljJbnmoTpl67pophcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY29uZmlnID0ge1xyXG4gICAgICAgICAgICBcIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3JcIjpcIiNmY2ZjZmNcIixcclxuICAgICAgICAgICAgXCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0XCI6XCJcIixcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBkYXRhPXtcclxuICAgICAgICAgICBmbGFnOnRydWUsXHJcbiAgICAgICAgICAgdG9waWNsaXN0OltdLFxyXG4gICAgICAgICAgIFBhZ2VJbmRleDowLFxyXG4gICAgICAgICAgIGNvdW50Ok51bWJlclxyXG4gICAgICAgICB9XHJcbiAgICAgICAgIG9uTG9hZCgpe1xyXG4gICAgICAgICAgIHRoaXMuZ2V0bW9yZSgpO1xyXG4gICAgICAgICAgIHd4LnNldE5hdmlnYXRpb25CYXJUaXRsZSh7dGl0bGU6dGhpcy4kcGFyZW50Lmdsb2JhbERhdGEudXNlcmluZm8uYm1tY30pO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIG9uUmVhY2hCb3R0b20oKXtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwi5Yiw6L6+5bqV6YOoXCIpO1xyXG4gICAgICAgICAgdGhpcy5nZXRtb3JlKCk7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBhc3luYyBvblNob3coKXtcclxuICAgICAgICAgIGxldCB0aGF0PXRoaXM7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgbGV0IHJlcz0gYXdhaXQgd3hSZXF1ZXN0KCdnZXQnLGNvbmZpZy5zZXJ2aWNlLmdldGNvbGxlZ2VUb3BpY3NDb3VudCsnP2JtZG09Jyt0aGF0LiRwYXJlbnQuZ2xvYmFsRGF0YS51c2VyaW5mby5ibWRtKVxyXG4gICAgICAgICAgIHRoYXQuY291bnQ9cmVzXHJcbiAgICAgICAgICAgdGhhdC4kYXBwbHkoKVxyXG5cclxuICAgICAgICAgfVxyXG4gICAgICAgICBhc3luYyBnZXRtb3JlKGZhbGcyPXRydWUpe1xyXG4gICAgICAgICAgaWYodGhpcy5mbGFnKXtcclxuICAgICAgICAgICAgbGV0IHRoYXQ9dGhpcztcclxuICAgICAgICAgICAgdGhpcy5QYWdlSW5kZXg9dGhpcy5QYWdlSW5kZXgrMTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgcmVzPWF3YWl0IHd4UmVxdWVzdCgnZ2V0Jyxjb25maWcuc2VydmljZS5nZXRDb2xsZWdlVG9waWNzKyc/Ym1kbT0nK3RoYXQuJHBhcmVudC5nbG9iYWxEYXRhLnVzZXJpbmZvLmJtZG0rJyZQYWdlSW5kZXg9Jyt0aGF0LlBhZ2VJbmRleClcclxuICAgICAgICAgICAgaWYocmVzLmxlbmd0aD09MCl7XHJcbiAgICAgICAgICAgICAgdGhhdC5mbGFnPWZhbHNlXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1lbHNlIGlmKHJlcy5sZW5ndGg8MTApe1xyXG4gICAgICAgICAgICAgIHRoYXQuZmxhZz1mYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciB4XHJcbiAgICAgICAgICAgIGZvcih4IGluIHJlcyl7XHJcbiAgICAgICAgICAgICAgcmVzW3hdWzZdPXJlc1t4XVs2XS5zbGljZSgwLDEwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICAgIHRoaXMudG9waWNsaXN0PXRoaXMudG9waWNsaXN0LmNvbmNhdChyZXMpO1xyXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG5cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbWV0aG9kcz17XHJcbiAgICAgICAgICBhc3luYyBvcGVuIChlKSB7XHJcbiAgICAgICAgICAgIHZhciB0aGF0PXRoaXM7XHJcbiAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCB3ZXB5LnNob3dBY3Rpb25TaGVldCh7XHJcbiAgICAgICAgICAgICAgaXRlbUxpc3Q6IFsn5Yig6ZmkJ11cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoIXJlcy5jYW5jZWwpIHtcclxuICAgICAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCLmmK/lkKbliKDpmaTor6XkuLvpophcIixcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwi6Iul5Li76aKY5Yig6Zmk77yM5pyJ5YWz6K+E6K665bCG5LiA5bm25riF56m6XCIsXHJcbiAgICAgICAgICAgICAgICBjYW5jZWxUZXh0Olwi5Y+W5raIXCIsXHJcbiAgICAgICAgICAgICAgICBjb25maXJtVGV4dDpcIuWIoOmZpFwiXHJcbiAgICAgICAgICAgICAgfSkudGhlbigoZCk9PntcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGQpXHJcbiAgICAgICAgICAgICAgICBpZihkLmNvbmZpcm0pe1xyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5maWQpXHJcbiAgICAgICAgICAgICAgICAgIHd4UmVxdWVzdCgnZ2V0Jyxjb25maWcuc2VydmljZS5EZWxldGVUb3BpYysnP3RpZD0nK2UuY3VycmVudFRhcmdldC5kYXRhc2V0LnRpZCsnJmZpZD0nK2UuY3VycmVudFRhcmdldC5kYXRhc2V0LmZpZCkudGhlbigocmVzcCk9PntcclxuICAgICAgICAgICAgICAgICAgICBpZihyZXNwPT0xKXtcclxuICAgICAgICAgICAgICAgICAgICAgdGlwLnN1Y2Nlc3MoJ+WIoOmZpOaIkOWKnycpO1xyXG4gICAgICAgICAgICAgICAgICAgICB0aGF0LnRvcGljbGlzdD1bXTtcclxuICAgICAgICAgICAgICAgICAgICAgdGhhdC5QYWdlSW5kZXg9MDtcclxuICAgICAgICAgICAgICAgICAgICAgdGhhdC5mbGFnPXRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGF0LiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgIC8vdGlwLnRvYXN0KCfliqDovb3kuK0nLGZhbHNlLCdsb2FkaW5nJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5nZXRtb3JlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5vblNob3coKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aXAuZXJyb3IoJ+aVsOaNruS4jeWtmOWcqCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG5cclxuICAgICAgfVxyXG4gICAgICAiXX0=