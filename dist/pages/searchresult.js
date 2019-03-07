'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _resultlist = require('./../components/resultlist.js');

var _resultlist2 = _interopRequireDefault(_resultlist);

var _util = require('./js/util.js');

var _util2 = _interopRequireDefault(_util);

var _Request = require('./js/Request.js');

var _search = require('./../components/search.js');

var _search2 = _interopRequireDefault(_search);

var _filter_bar = require('./../components/filter_bar.js');

var _filter_bar2 = _interopRequireDefault(_filter_bar);

var _tip = require('./js/tip.js');

var _tip2 = _interopRequireDefault(_tip);

var _config = require('./js/config.js');

var _config2 = _interopRequireDefault(_config);

var _placeholder = require('./../components/placeholder.js');

var _placeholder2 = _interopRequireDefault(_placeholder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Search = function (_wepy$page) {
  _inherits(Search, _wepy$page);

  function Search() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Search);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Search.__proto__ || Object.getPrototypeOf(Search)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '搜索'
    }, _this.$repeat = {}, _this.$props = { "search": { "xmlns:v-on": "" }, "filterBar": { "xmlns:wx": "" }, "resultlist": { "xmlns:v-bind": "", "v-bind:info.sync": "list", "v-bind:isNone.sync": "isNone" }, "placeholder": { "v-bind:show.sync": "show" } }, _this.$events = { "search": { "v-on:searchValue": "doSearch" }, "filterBar": { "v-on:currentType": "currentType" } }, _this.components = {
      search: _search2.default,
      filterBar: _filter_bar2.default,
      resultlist: _resultlist2.default,
      placeholder: _placeholder2.default
    }, _this.data = {
      list: [],

      isNone: false,

      //当前页面
      PageIndex: 0,

      show: true,

      //搜索类别
      orderfield: Number,
      poster: '',
      content: '',
      fid: '',
      classify: '科研政策'

    }, _this.computed = {}, _this.methods = {
      doSearch: function doSearch() {
        var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.val;

        this.list = [];

        //tip.success("搜索：" + val);

        this.PageIndex = 0;
        this.isNone = false;
        this.doSearchResult(val);

        //this.list = bb.result.products;
        //this.$apply();
      },
      currentType: function currentType(obj) {
        //tip.success("状态:" + obj);
        /*var name = obj.name;
        var type = obj.type;
        if (name == "zhonghe") {
          this.sort = -1;
        } else if (name == "sale") {
          this.sort = 3;
        } else if (name == "price") {
          if (type == "desc") {
            this.sort = 2;
          } else if (type == "asc") {
            this.sort = 1;
          }
        } else if (name == "sku") {
          this.skuval = type;
        }
        this.list = [];
        this.is_empty = false;
        this.showLoading = true;
        //this.$invoke('search', 'show', "0");
        this.show = false;
        this.doSearchGoods(this.keyword);*/
        console.log("监听到变化值为" + obj.orderfield);
        this.orderfield = obj.orderfield;
      },


      onShareAppMessage: function onShareAppMessage(res) {
        if (res.from === 'button') {
          // 来自页面内转发按钮
          console.log(res.target);
        }
        return {
          title: this.detail.name,
          path: '/pages/search?cateCode=' + this.cateCode + '&title=' + this.title,
          success: function success(res) {
            // 转发成功
          },
          fail: function fail(res) {
            // 转发失败
          }
        };
      }
      //加载更多

    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Search, [{
    key: 'setTitle',
    value: function setTitle(title) {
      _wepy2.default.setNavigationBarTitle({
        title: title
      });
    }
  }, {
    key: 'onLoad',
    value: function onLoad(option) {
      console.log(option.fid);
      this.fid = option.fid;
    }
  }, {
    key: 'doSearchResult',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(keyword) {
        var that, res, x;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                that = this;

                that.poster = '';
                that.content = '';
                console.log("这里发送搜索" + that.orderfield);

                if (!(that.orderfield == 0)) {
                  _context.next = 8;
                  break;
                }

                //发帖人
                that.poster = keyword;
                _context.next = 15;
                break;

              case 8:
                if (!(that.orderfield == 1)) {
                  _context.next = 12;
                  break;
                }

                that.content = keyword;
                _context.next = 15;
                break;

              case 12:
                _context.next = 14;
                return _wepy2.default.showToast({
                  title: '请选择搜索类型',
                  icon: 'none',
                  duration: 1000
                });

              case 14:
                return _context.abrupt('return');

              case 15:
                //console.log(keyword);
                that.PageIndex++;

                _context.next = 18;
                return (0, _Request.wxRequest)('get', _config2.default.service.pageTopic + '?fid=' + that.fid + '&PageIndex=' + that.PageIndex + '&poster=' + that.poster + '&content=' + that.content);

              case 18:
                res = _context.sent;

                console.log(res);
                if (res.length == 0) {
                  that.flag = false;
                  that.show = true;
                  that.isNone = true;
                }

                for (x in res) {

                  res[x][5] = _util2.default.timechange(res[x][5]);
                }
                this.list = this.list.concat(res);
                if (this.list.length < 6) {
                  this.isNone = true;
                }
                this.$apply();

              case 25:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function doSearchResult(_x2) {
        return _ref2.apply(this, arguments);
      }

      return doSearchResult;
    }()
  }, {
    key: 'onReachBottom',
    value: function onReachBottom() {
      console.log("加载更多");
      this.doSearchResult(this.val);
    }
  }]);

  return Search;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Search , 'pages/searchresult'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaHJlc3VsdC5qcyJdLCJuYW1lcyI6WyJTZWFyY2giLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwic2VhcmNoIiwiZmlsdGVyQmFyIiwicmVzdWx0bGlzdCIsInBsYWNlaG9sZGVyIiwiZGF0YSIsImxpc3QiLCJpc05vbmUiLCJQYWdlSW5kZXgiLCJzaG93Iiwib3JkZXJmaWVsZCIsIk51bWJlciIsInBvc3RlciIsImNvbnRlbnQiLCJmaWQiLCJjbGFzc2lmeSIsImNvbXB1dGVkIiwibWV0aG9kcyIsImRvU2VhcmNoIiwidmFsIiwiZG9TZWFyY2hSZXN1bHQiLCJjdXJyZW50VHlwZSIsIm9iaiIsImNvbnNvbGUiLCJsb2ciLCJvblNoYXJlQXBwTWVzc2FnZSIsInJlcyIsImZyb20iLCJ0YXJnZXQiLCJ0aXRsZSIsImRldGFpbCIsIm5hbWUiLCJwYXRoIiwiY2F0ZUNvZGUiLCJzdWNjZXNzIiwiZmFpbCIsInNldE5hdmlnYXRpb25CYXJUaXRsZSIsIm9wdGlvbiIsImtleXdvcmQiLCJ0aGF0Iiwic2hvd1RvYXN0IiwiaWNvbiIsImR1cmF0aW9uIiwic2VydmljZSIsInBhZ2VUb3BpYyIsImxlbmd0aCIsImZsYWciLCJ4IiwidGltZWNoYW5nZSIsImNvbmNhdCIsIiRhcHBseSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBR0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLE07Ozs7Ozs7Ozs7Ozs7O3NMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1ZDLE8sR0FBVSxFLFFBQ2JDLE0sR0FBUyxFQUFDLFVBQVMsRUFBQyxjQUFhLEVBQWQsRUFBVixFQUE0QixhQUFZLEVBQUMsWUFBVyxFQUFaLEVBQXhDLEVBQXdELGNBQWEsRUFB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QXVFLFVBQXZFLEdBQWtGK0IsS0FBSzNCLE1BQXZGLEdBQThGLFdBQTlGLEdBQTBHMkIsS0FBSzFCLE9BQS9ILEM7OztBQUFYYSxtQjs7QUFDQUgsd0JBQVFDLEdBQVIsQ0FBWUUsR0FBWjtBQUNBLG9CQUFHQSxJQUFJbUIsTUFBSixJQUFZLENBQWYsRUFBaUI7QUFDYk4sdUJBQUtPLElBQUwsR0FBVSxLQUFWO0FBQ0FQLHVCQUFLOUIsSUFBTCxHQUFVLElBQVY7QUFDQThCLHVCQUFLaEMsTUFBTCxHQUFZLElBQVo7QUFDRDs7QUFFRCxxQkFBSXdDLENBQUosSUFBU3JCLEdBQVQsRUFBYTs7QUFFVEEsc0JBQUlxQixDQUFKLEVBQU8sQ0FBUCxJQUFVLGVBQUtDLFVBQUwsQ0FBZ0J0QixJQUFJcUIsQ0FBSixFQUFPLENBQVAsQ0FBaEIsQ0FBVjtBQUVIO0FBQ0QscUJBQUt6QyxJQUFMLEdBQVUsS0FBS0EsSUFBTCxDQUFVMkMsTUFBVixDQUFpQnZCLEdBQWpCLENBQVY7QUFDQSxvQkFBSSxLQUFLcEIsSUFBTCxDQUFVdUMsTUFBVixHQUFpQixDQUFyQixFQUF3QjtBQUN0Qix1QkFBS3RDLE1BQUwsR0FBWSxJQUFaO0FBQ0Q7QUFDRCxxQkFBSzJDLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQ0FRSztBQUNUM0IsY0FBUUMsR0FBUixDQUFZLE1BQVo7QUFDQSxXQUFLSixjQUFMLENBQW9CLEtBQUtELEdBQXpCO0FBRUQ7Ozs7RUEvRjZCLGVBQUtnQyxJOztrQkFBcEJ6RCxNIiwiZmlsZSI6InNlYXJjaHJlc3VsdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgaW1wb3J0IHJlc3VsdGxpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9yZXN1bHRsaXN0J1xyXG4gIGltcG9ydCB1dGlsIGZyb20gJy4uL3BhZ2VzL2pzL3V0aWwnXHJcbiAgaW1wb3J0IHt3eFJlcXVlc3R9IGZyb20gJy4uL3BhZ2VzL2pzL1JlcXVlc3QnXHJcbiAgXHJcbiAgXHJcbiAgaW1wb3J0IFNlYXJjaHMgZnJvbSAnLi4vY29tcG9uZW50cy9zZWFyY2gnXHJcbiAgaW1wb3J0IEZpbHRlckJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9maWx0ZXJfYmFyXCJcclxuICBpbXBvcnQgdGlwIGZyb20gJy4uL3BhZ2VzL2pzL3RpcCdcclxuICBpbXBvcnQgY29uZmlnIGZyb20gJy4uL3BhZ2VzL2pzL2NvbmZpZydcclxuICBcclxuICBpbXBvcnQgUGxhY2Vob2xkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvcGxhY2Vob2xkZXJcIlxyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmkJzntKInLFxyXG4gICAgfVxyXG4gICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcInNlYXJjaFwiOntcInhtbG5zOnYtb25cIjpcIlwifSxcImZpbHRlckJhclwiOntcInhtbG5zOnd4XCI6XCJcIn0sXCJyZXN1bHRsaXN0XCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDppbmZvLnN5bmNcIjpcImxpc3RcIixcInYtYmluZDppc05vbmUuc3luY1wiOlwiaXNOb25lXCJ9LFwicGxhY2Vob2xkZXJcIjp7XCJ2LWJpbmQ6c2hvdy5zeW5jXCI6XCJzaG93XCJ9fTtcclxuJGV2ZW50cyA9IHtcInNlYXJjaFwiOntcInYtb246c2VhcmNoVmFsdWVcIjpcImRvU2VhcmNoXCJ9LFwiZmlsdGVyQmFyXCI6e1widi1vbjpjdXJyZW50VHlwZVwiOlwiY3VycmVudFR5cGVcIn19O1xyXG4gY29tcG9uZW50cyA9IHtcclxuICAgICAgc2VhcmNoOiBTZWFyY2hzLFxyXG4gICAgICBmaWx0ZXJCYXI6IEZpbHRlckJhcixcclxuICAgICAgcmVzdWx0bGlzdDpyZXN1bHRsaXN0LFxyXG4gICAgICBwbGFjZWhvbGRlcjogUGxhY2Vob2xkZXJcclxuICAgIH1cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIGxpc3Q6IFtdLFxyXG4gICAgICBcclxuICAgICAgXHJcbiAgICAgIGlzTm9uZTogZmFsc2UsXHJcbiAgICAgIFxyXG4gICAgICAvL+W9k+WJjemhtemdolxyXG4gICAgICBQYWdlSW5kZXg6IDAsXHJcbiAgICAgIFxyXG4gICAgICBzaG93OiB0cnVlLFxyXG4gICAgXHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgICAgLy/mkJzntKLnsbvliKtcclxuICAgICAgb3JkZXJmaWVsZDpOdW1iZXIsXHJcbiAgICAgIHBvc3RlcjonJyxcclxuICAgICAgY29udGVudDonJyxcclxuICAgICAgZmlkOicnLFxyXG4gICAgICBjbGFzc2lmeTon56eR56CU5pS/562WJ1xyXG5cclxuICAgIH1cclxuICAgIFxyXG4gICAgc2V0VGl0bGUodGl0bGUpIHtcclxuICAgICAgd2VweS5zZXROYXZpZ2F0aW9uQmFyVGl0bGUoe1xyXG4gICAgICAgIHRpdGxlOiB0aXRsZVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgb25Mb2FkKG9wdGlvbikge1xyXG4gICAgICBjb25zb2xlLmxvZyhvcHRpb24uZmlkKTtcclxuICAgICAgdGhpcy5maWQ9b3B0aW9uLmZpZFxyXG4gICAgfVxyXG4gICAgY29tcHV0ZWQgPSB7fVxyXG4gICAgYXN5bmMgZG9TZWFyY2hSZXN1bHQoa2V5d29yZCkge1xyXG4gICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgIHRoYXQucG9zdGVyPScnO1xyXG4gICAgICB0aGF0LmNvbnRlbnQ9Jyc7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwi6L+Z6YeM5Y+R6YCB5pCc57SiXCIrdGhhdC5vcmRlcmZpZWxkKTtcclxuICAgICAgaWYodGhhdC5vcmRlcmZpZWxkPT0wKXtcclxuICAgICAgICAvL+WPkeW4luS6ulxyXG4gICAgICAgIHRoYXQucG9zdGVyPWtleXdvcmRcclxuICAgICAgfWVsc2UgaWYodGhhdC5vcmRlcmZpZWxkPT0xKXtcclxuICAgICAgICB0aGF0LmNvbnRlbnQ9a2V5d29yZFxyXG4gICAgICB9ZWxzZXtcclxuICAgICAgIGF3YWl0IHdlcHkuc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAn6K+36YCJ5oup5pCc57Si57G75Z6LJyxcclxuICAgICAgICAgICAgICAgIGljb246ICdub25lJyxcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuICAgICAgLy9jb25zb2xlLmxvZyhrZXl3b3JkKTtcclxuICAgICAgdGhhdC5QYWdlSW5kZXgrKztcclxuXHJcbiAgICAgICAgbGV0IHJlcz0gYXdhaXQgd3hSZXF1ZXN0KCdnZXQnLGNvbmZpZy5zZXJ2aWNlLnBhZ2VUb3BpYysnP2ZpZD0nK3RoYXQuZmlkKycmUGFnZUluZGV4PScrdGhhdC5QYWdlSW5kZXgrJyZwb3N0ZXI9Jyt0aGF0LnBvc3RlcisnJmNvbnRlbnQ9Jyt0aGF0LmNvbnRlbnQpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICBpZihyZXMubGVuZ3RoPT0wKXtcclxuICAgICAgICAgICAgICAgIHRoYXQuZmxhZz1mYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoYXQuc2hvdz10cnVlXHJcbiAgICAgICAgICAgICAgICB0aGF0LmlzTm9uZT10cnVlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB2YXIgeDtcclxuICAgICAgICAgICAgICBmb3IoeCBpbiByZXMpe1xyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgcmVzW3hdWzVdPXV0aWwudGltZWNoYW5nZShyZXNbeF1bNV0pO1xyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgdGhpcy5saXN0PXRoaXMubGlzdC5jb25jYXQocmVzKTtcclxuICAgICAgICAgICAgICBpZiAodGhpcy5saXN0Lmxlbmd0aDw2KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzTm9uZT10cnVlO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgIH1cclxuICAgIG9uUmVhY2hCb3R0b20oKXtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwi5Yqg6L295pu05aSaXCIpO1xyXG4gICAgICAgICAgdGhpcy5kb1NlYXJjaFJlc3VsdCh0aGlzLnZhbCk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIGRvU2VhcmNoKHZhbD10aGlzLnZhbCkge1xyXG4gICAgICAgIHRoaXMubGlzdCA9IFtdO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vdGlwLnN1Y2Nlc3MoXCLmkJzntKLvvJpcIiArIHZhbCk7XHJcbiAgICAgIFxyXG4gICAgICAgIHRoaXMuUGFnZUluZGV4PTA7XHJcbiAgICAgICAgdGhpcy5pc05vbmU9ZmFsc2U7XHJcbiAgICAgICAgdGhpcy5kb1NlYXJjaFJlc3VsdCh2YWwpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vdGhpcy5saXN0ID0gYmIucmVzdWx0LnByb2R1Y3RzO1xyXG4gICAgICAgIC8vdGhpcy4kYXBwbHkoKTtcclxuICAgICAgfSxcclxuICAgICAgXHJcbiAgICAgIGN1cnJlbnRUeXBlKG9iaikge1xyXG4gICAgICAgIC8vdGlwLnN1Y2Nlc3MoXCLnirbmgIE6XCIgKyBvYmopO1xyXG4gICAgICAgIC8qdmFyIG5hbWUgPSBvYmoubmFtZTtcclxuICAgICAgICB2YXIgdHlwZSA9IG9iai50eXBlO1xyXG4gICAgICAgIGlmIChuYW1lID09IFwiemhvbmdoZVwiKSB7XHJcbiAgICAgICAgICB0aGlzLnNvcnQgPSAtMTtcclxuICAgICAgICB9IGVsc2UgaWYgKG5hbWUgPT0gXCJzYWxlXCIpIHtcclxuICAgICAgICAgIHRoaXMuc29ydCA9IDM7XHJcbiAgICAgICAgfSBlbHNlIGlmIChuYW1lID09IFwicHJpY2VcIikge1xyXG4gICAgICAgICAgaWYgKHR5cGUgPT0gXCJkZXNjXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5zb3J0ID0gMjtcclxuICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PSBcImFzY1wiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc29ydCA9IDE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChuYW1lID09IFwic2t1XCIpIHtcclxuICAgICAgICAgIHRoaXMuc2t1dmFsID0gdHlwZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5saXN0ID0gW107XHJcbiAgICAgICAgdGhpcy5pc19lbXB0eSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2hvd0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIC8vdGhpcy4kaW52b2tlKCdzZWFyY2gnLCAnc2hvdycsIFwiMFwiKTtcclxuICAgICAgICB0aGlzLnNob3cgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmRvU2VhcmNoR29vZHModGhpcy5rZXl3b3JkKTsqL1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi55uR5ZCs5Yiw5Y+Y5YyW5YC85Li6XCIrb2JqLm9yZGVyZmllbGQpO1xyXG4gICAgICAgIHRoaXMub3JkZXJmaWVsZD1vYmoub3JkZXJmaWVsZFxyXG4gICAgICAgIFxyXG4gICAgICB9LFxyXG4gICAgICBcclxuICAgICAgb25TaGFyZUFwcE1lc3NhZ2U6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgIGlmIChyZXMuZnJvbSA9PT0gJ2J1dHRvbicpIHtcclxuICAgICAgICAgIC8vIOadpeiHqumhtemdouWGhei9rOWPkeaMiemSrlxyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzLnRhcmdldClcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHRpdGxlOiB0aGlzLmRldGFpbC5uYW1lLFxyXG4gICAgICAgICAgcGF0aDogJy9wYWdlcy9zZWFyY2g/Y2F0ZUNvZGU9JyArIHRoaXMuY2F0ZUNvZGUgKyAnJnRpdGxlPScgKyB0aGlzLnRpdGxlLFxyXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICAgIC8vIOi9rOWPkeaIkOWKn1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICAvLyDovazlj5HlpLHotKVcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8v5Yqg6L295pu05aSaXHJcblxyXG4gIH1cclxuIl19