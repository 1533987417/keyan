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
      "navigationBarTitleText": "我的主题"

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
                return (0, _Request.wxRequest)('get', _config2.default.service.getMyCount + '?gzh=' + that.$parent.globalData.userinfo.gzh);

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
                return (0, _Request.wxRequest)('get', _config2.default.service.pageMyTopic + '?gzh=' + that.$parent.globalData.userinfo.gzh + '&PageIndex=' + that.PageIndex);

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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(test , 'pages/mytopic'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15dG9waWMuanMiXSwibmFtZXMiOlsidGVzdCIsImNvbXBvbmVudHMiLCJjb25maWciLCJkYXRhIiwiZmxhZyIsInRvcGljbGlzdCIsIlBhZ2VJbmRleCIsImNvdW50IiwiTnVtYmVyIiwibWV0aG9kcyIsIm9wZW4iLCJlIiwidGhhdCIsInNob3dBY3Rpb25TaGVldCIsIml0ZW1MaXN0IiwicmVzIiwiY2FuY2VsIiwic2hvd01vZGFsIiwidGl0bGUiLCJjb250ZW50IiwiY2FuY2VsVGV4dCIsImNvbmZpcm1UZXh0IiwidGhlbiIsImQiLCJjb25zb2xlIiwibG9nIiwiY29uZmlybSIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiZmlkIiwic2VydmljZSIsIkRlbGV0ZVRvcGljIiwidGlkIiwicmVzcCIsInN1Y2Nlc3MiLCJnZXRtb3JlIiwib25TaG93IiwiZXJyb3IiLCJnZXRNeUNvdW50IiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJ1c2VyaW5mbyIsImd6aCIsIiRhcHBseSIsImZhbGcyIiwicGFnZU15VG9waWMiLCJsZW5ndGgiLCJ4Iiwic2xpY2UiLCJjb25jYXQiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFJcUJBLEk7Ozs7Ozs7Ozs7Ozs7O2tMQUNuQkMsVSxHQUFhO0FBQ0g7OztBQURHLEssUUFLTEMsTSxHQUFTO0FBQ1Asc0NBQStCLFNBRHhCO0FBRVAsZ0NBQXlCOztBQUZsQixLLFFBS1RDLEksR0FBSztBQUNKQyxZQUFLLElBREQ7QUFFSkMsaUJBQVUsRUFGTjtBQUdKQyxpQkFBVSxDQUhOO0FBSUpDLGFBQU1DO0FBSkYsSyxRQTZDUEMsTyxHQUFRO0FBQ0FDLFVBREEsZ0JBQ01DLENBRE4sRUFDUztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNUQyxzQkFEUztBQUFBO0FBQUEseUJBRUcsZUFBS0MsZUFBTCxDQUFxQjtBQUNuQ0MsOEJBQVUsQ0FBQyxJQUFEO0FBRHlCLG1CQUFyQixDQUZIOztBQUFBO0FBRVRDLHFCQUZTOzs7QUFNYixzQkFBSSxDQUFDQSxJQUFJQyxNQUFULEVBQWlCO0FBQ2YsbUNBQUtDLFNBQUwsQ0FBZTtBQUNiQyw2QkFBTyxTQURNO0FBRWJDLCtCQUFTLGlCQUZJO0FBR2JDLGtDQUFXLElBSEU7QUFJYkMsbUNBQVk7QUFKQyxxQkFBZixFQUtHQyxJQUxILENBS1EsVUFBQ0MsQ0FBRCxFQUFLO0FBQ1hDLDhCQUFRQyxHQUFSLENBQVlGLENBQVo7QUFDQSwwQkFBR0EsRUFBRUcsT0FBTCxFQUFhO0FBQ1hGLGdDQUFRQyxHQUFSLENBQVlkLEVBQUVnQixhQUFGLENBQWdCQyxPQUFoQixDQUF3QkMsR0FBcEM7QUFDQSxnREFBVSxLQUFWLEVBQWdCLGlCQUFPQyxPQUFQLENBQWVDLFdBQWYsR0FBMkIsT0FBM0IsR0FBbUNwQixFQUFFZ0IsYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JJLEdBQTNELEdBQStELE9BQS9ELEdBQXVFckIsRUFBRWdCLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCQyxHQUEvRyxFQUFvSFAsSUFBcEgsQ0FBeUgsVUFBQ1csSUFBRCxFQUFRO0FBQy9ILDhCQUFHQSxRQUFNLENBQVQsRUFBVztBQUNWLDBDQUFJQyxPQUFKLENBQVksTUFBWjtBQUNBdEIsaUNBQUtQLFNBQUwsR0FBZSxFQUFmO0FBQ0FPLGlDQUFLTixTQUFMLEdBQWUsQ0FBZjtBQUNBTSxpQ0FBS1IsSUFBTCxHQUFVLElBQVY7QUFDSztBQUNIO0FBQ0FRLGlDQUFLdUIsT0FBTDtBQUNBdkIsaUNBQUt3QixNQUFMO0FBRUQsMkJBVkYsTUFZSztBQUNILDBDQUFJQyxLQUFKLENBQVUsT0FBVjtBQUNEO0FBQ0YseUJBaEJEO0FBb0JEO0FBR0YscUJBaENEO0FBa0NEOztBQXpDWTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTBDZDtBQTNDSyxLOzs7Ozs2QkF2Q0M7QUFDTixXQUFLRixPQUFMO0FBRUQ7OztvQ0FDYztBQUNkWCxjQUFRQyxHQUFSLENBQVksTUFBWjtBQUNBLFdBQUtVLE9BQUw7QUFFRDs7Ozs7Ozs7OztBQUVLdkIsb0IsR0FBSyxJOzt1QkFFTyx3QkFBVSxLQUFWLEVBQWdCLGlCQUFPa0IsT0FBUCxDQUFlUSxVQUFmLEdBQTBCLE9BQTFCLEdBQWtDMUIsS0FBSzJCLE9BQUwsQ0FBYUMsVUFBYixDQUF3QkMsUUFBeEIsQ0FBaUNDLEdBQW5GLEM7OztBQUFYM0IsbUI7O0FBQ0pILHFCQUFLTCxLQUFMLEdBQVdRLEdBQVg7QUFDQUgscUJBQUsrQixNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUdZQyxLLHVFQUFNLEk7Ozs7OztxQkFDaEIsS0FBS3hDLEk7Ozs7O0FBQ0ZRLG9CLEdBQUssSTs7QUFDVCxxQkFBS04sU0FBTCxHQUFlLEtBQUtBLFNBQUwsR0FBZSxDQUE5Qjs7O3VCQUVjLHdCQUFVLEtBQVYsRUFBZ0IsaUJBQU93QixPQUFQLENBQWVlLFdBQWYsR0FBMkIsT0FBM0IsR0FBbUNqQyxLQUFLMkIsT0FBTCxDQUFhQyxVQUFiLENBQXdCQyxRQUF4QixDQUFpQ0MsR0FBcEUsR0FBd0UsYUFBeEUsR0FBc0Y5QixLQUFLTixTQUEzRyxDOzs7QUFBVlMsbUI7O0FBQ0osb0JBQUdBLElBQUkrQixNQUFKLElBQVksQ0FBZixFQUFpQjtBQUNmbEMsdUJBQUtSLElBQUwsR0FBVSxLQUFWO0FBRUQsaUJBSEQsTUFHTSxJQUFHVyxJQUFJK0IsTUFBSixHQUFXLEVBQWQsRUFBaUI7QUFDckJsQyx1QkFBS1IsSUFBTCxHQUFVLEtBQVY7QUFDRDs7QUFFRCxxQkFBSTJDLENBQUosSUFBU2hDLEdBQVQsRUFBYTtBQUNYQSxzQkFBSWdDLENBQUosRUFBTyxDQUFQLElBQVVoQyxJQUFJZ0MsQ0FBSixFQUFPLENBQVAsRUFBVUMsS0FBVixDQUFnQixDQUFoQixFQUFrQixFQUFsQixDQUFWO0FBQ0Q7QUFDRHhCLHdCQUFRQyxHQUFSLENBQVlWLEdBQVo7QUFDQSxxQkFBS1YsU0FBTCxHQUFlLEtBQUtBLFNBQUwsQ0FBZTRDLE1BQWYsQ0FBc0JsQyxHQUF0QixDQUFmO0FBQ0EscUJBQUs0QixNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBcERzQixlQUFLTyxJOztrQkFBbEJsRCxJIiwiZmlsZSI6Im15dG9waWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9wYWdlcy9qcy9jb25maWcnXHJcbmltcG9ydCB0aXAgZnJvbSAnLi4vcGFnZXMvanMvdGlwJ1xyXG5pbXBvcnQge3d4UmVxdWVzdH0gZnJvbSAnLi4vcGFnZXMvanMvUmVxdWVzdCdcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgdGVzdCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgY29tcG9uZW50cyA9IHtcclxuICAgICAgICAgICAgLy/kuLrkuKTkuKrnm7jlkIznu4Tku7bnmoTkuI3lkIzlrp7kvovliIbphY3kuI3lkIznmoTnu4Tku7ZJRO+8jOS7juiAjOmBv+WFjeaVsOaNruWQjOatpeWPmOWMlueahOmXrumimFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjb25maWcgPSB7XHJcbiAgICAgICAgICAgIFwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvclwiOlwiI2ZjZmNmY1wiLFxyXG4gICAgICAgICAgICBcIm5hdmlnYXRpb25CYXJUaXRsZVRleHRcIjpcIuaIkeeahOS4u+mimFwiLFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGRhdGE9e1xyXG4gICAgICAgICAgIGZsYWc6dHJ1ZSxcclxuICAgICAgICAgICB0b3BpY2xpc3Q6W10sXHJcbiAgICAgICAgICAgUGFnZUluZGV4OjAsXHJcbiAgICAgICAgICAgY291bnQ6TnVtYmVyXHJcbiAgICAgICAgIH1cclxuICAgICAgICAgb25Mb2FkKCl7XHJcbiAgICAgICAgICAgdGhpcy5nZXRtb3JlKCk7XHJcblxyXG4gICAgICAgICB9XHJcbiAgICAgICAgIG9uUmVhY2hCb3R0b20oKXtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwi5Yiw6L6+5bqV6YOoXCIpO1xyXG4gICAgICAgICAgdGhpcy5nZXRtb3JlKCk7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBhc3luYyBvblNob3coKXtcclxuICAgICAgICAgIGxldCB0aGF0PXRoaXM7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgbGV0IHJlcz0gYXdhaXQgd3hSZXF1ZXN0KCdnZXQnLGNvbmZpZy5zZXJ2aWNlLmdldE15Q291bnQrJz9nemg9Jyt0aGF0LiRwYXJlbnQuZ2xvYmFsRGF0YS51c2VyaW5mby5nemgpXHJcbiAgICAgICAgICAgdGhhdC5jb3VudD1yZXNcclxuICAgICAgICAgICB0aGF0LiRhcHBseSgpXHJcblxyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGFzeW5jIGdldG1vcmUoZmFsZzI9dHJ1ZSl7XHJcbiAgICAgICAgICBpZih0aGlzLmZsYWcpe1xyXG4gICAgICAgICAgICBsZXQgdGhhdD10aGlzO1xyXG4gICAgICAgICAgICB0aGlzLlBhZ2VJbmRleD10aGlzLlBhZ2VJbmRleCsxO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCByZXM9YXdhaXQgd3hSZXF1ZXN0KCdnZXQnLGNvbmZpZy5zZXJ2aWNlLnBhZ2VNeVRvcGljKyc/Z3poPScrdGhhdC4kcGFyZW50Lmdsb2JhbERhdGEudXNlcmluZm8uZ3poKycmUGFnZUluZGV4PScrdGhhdC5QYWdlSW5kZXgpXHJcbiAgICAgICAgICAgIGlmKHJlcy5sZW5ndGg9PTApe1xyXG4gICAgICAgICAgICAgIHRoYXQuZmxhZz1mYWxzZVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9ZWxzZSBpZihyZXMubGVuZ3RoPDEwKXtcclxuICAgICAgICAgICAgICB0aGF0LmZsYWc9ZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgeFxyXG4gICAgICAgICAgICBmb3IoeCBpbiByZXMpe1xyXG4gICAgICAgICAgICAgIHJlc1t4XVs2XT1yZXNbeF1bNl0uc2xpY2UoMCwxMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgICAgICB0aGlzLnRvcGljbGlzdD10aGlzLnRvcGljbGlzdC5jb25jYXQocmVzKTtcclxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1ldGhvZHM9e1xyXG4gICAgICAgICAgYXN5bmMgb3BlbiAoZSkge1xyXG4gICAgICAgICAgICB2YXIgdGhhdD10aGlzO1xyXG4gICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgd2VweS5zaG93QWN0aW9uU2hlZXQoe1xyXG4gICAgICAgICAgICAgIGl0ZW1MaXN0OiBbJ+WIoOmZpCddXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKCFyZXMuY2FuY2VsKSB7XHJcbiAgICAgICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwi5piv5ZCm5Yig6Zmk6K+l5Li76aKYXCIsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIuiLpeS4u+mimOWIoOmZpO+8jOacieWFs+ivhOiuuuWwhuS4gOW5tua4heepulwiLFxyXG4gICAgICAgICAgICAgICAgY2FuY2VsVGV4dDpcIuWPlua2iFwiLFxyXG4gICAgICAgICAgICAgICAgY29uZmlybVRleHQ6XCLliKDpmaRcIlxyXG4gICAgICAgICAgICAgIH0pLnRoZW4oKGQpPT57XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkKVxyXG4gICAgICAgICAgICAgICAgaWYoZC5jb25maXJtKXtcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuZmlkKVxyXG4gICAgICAgICAgICAgICAgICB3eFJlcXVlc3QoJ2dldCcsY29uZmlnLnNlcnZpY2UuRGVsZXRlVG9waWMrJz90aWQ9JytlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC50aWQrJyZmaWQ9JytlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5maWQpLnRoZW4oKHJlc3ApPT57XHJcbiAgICAgICAgICAgICAgICAgICAgaWYocmVzcD09MSl7XHJcbiAgICAgICAgICAgICAgICAgICAgIHRpcC5zdWNjZXNzKCfliKDpmaTmiJDlip8nKTtcclxuICAgICAgICAgICAgICAgICAgICAgdGhhdC50b3BpY2xpc3Q9W107XHJcbiAgICAgICAgICAgICAgICAgICAgIHRoYXQuUGFnZUluZGV4PTA7XHJcbiAgICAgICAgICAgICAgICAgICAgIHRoYXQuZmxhZz10cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhhdC4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAvL3RpcC50b2FzdCgn5Yqg6L295LitJyxmYWxzZSwnbG9hZGluZycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgIHRoYXQuZ2V0bW9yZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgIHRoYXQub25TaG93KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGlwLmVycm9yKCfmlbDmja7kuI3lrZjlnKgnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuXHJcbiAgICAgIH1cclxuICAgICAgIl19