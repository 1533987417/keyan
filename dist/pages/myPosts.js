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
      "navigationBarTitleText": "我的帖子"

    }, _this.data = {
      flag: true,
      topiclist: [],
      PageIndex: 0,
      count: Number
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
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
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var that, res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                that = this;
                /*wepy.request(config.service.getMyCount+'?gzh='+that.$parent.globalData.userinfo.personid).then((d)=>{
                     console.log(d.data);
                     console.log(d);
                     that.count=d.data;
                     that.$apply();
                 }
                )*/

                _context.next = 3;
                return (0, _Request.wxRequest)('get', _config2.default.service.getPostsCount + '?gzh=' + that.$parent.globalData.userinfo.gzh);

              case 3:
                res = _context.sent;

                that.count = res;
                that.$apply();

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onShow() {
        return _ref2.apply(this, arguments);
      }

      return onShow;
    }()
  }, {
    key: 'getmore',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var falg2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        var that, res, x;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!this.flag) {
                  _context2.next = 11;
                  break;
                }

                that = this;

                this.PageIndex = this.PageIndex + 1;

                _context2.next = 5;
                return (0, _Request.wxRequest)('get', _config2.default.service.getMyPost + '?gzh=' + that.$parent.globalData.userinfo.gzh + '&PageIndex=' + that.PageIndex);

              case 5:
                res = _context2.sent;

                console.log(res);
                if (res.length == 0) {
                  that.flag = false;
                } else if (res.length < 8) {
                  that.flag = false;
                }

                for (x in res) {
                  res[x].postdatetime = res[x].postdatetime.slice(0, 10);
                }
                //console.log(res)
                this.topiclist = this.topiclist.concat(res);
                this.$apply();

              case 11:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getmore() {
        return _ref3.apply(this, arguments);
      }

      return getmore;
    }()
  }]);

  return test;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(test , 'pages/myPosts'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15UG9zdHMuanMiXSwibmFtZXMiOlsidGVzdCIsImNvbXBvbmVudHMiLCJjb25maWciLCJkYXRhIiwiZmxhZyIsInRvcGljbGlzdCIsIlBhZ2VJbmRleCIsImNvdW50IiwiTnVtYmVyIiwibWV0aG9kcyIsImdldG1vcmUiLCJjb25zb2xlIiwibG9nIiwidGhhdCIsInNlcnZpY2UiLCJnZXRQb3N0c0NvdW50IiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJ1c2VyaW5mbyIsImd6aCIsInJlcyIsIiRhcHBseSIsImZhbGcyIiwiZ2V0TXlQb3N0IiwibGVuZ3RoIiwieCIsInBvc3RkYXRldGltZSIsInNsaWNlIiwiY29uY2F0IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBSXFCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFDbkJDLFUsR0FBYTtBQUNIOzs7QUFERyxLLFFBS0xDLE0sR0FBUztBQUNQLHNDQUErQixTQUR4QjtBQUVQLGdDQUF5Qjs7QUFGbEIsSyxRQUtUQyxJLEdBQUs7QUFDSkMsWUFBSyxJQUREO0FBRUpDLGlCQUFVLEVBRk47QUFHSkMsaUJBQVUsQ0FITjtBQUlKQyxhQUFNQztBQUpGLEssUUFvRFBDLE8sR0FBUSxFOzs7Ozs2QkE5Q0M7QUFDTixXQUFLQyxPQUFMO0FBQ0Q7OztvQ0FDYztBQUNkQyxjQUFRQyxHQUFSLENBQVksTUFBWjtBQUNBLFdBQUtGLE9BQUw7QUFFRDs7Ozs7Ozs7OztBQUVLRyxvQixHQUFLLEk7QUFDUDs7Ozs7Ozs7O3VCQVFjLHdCQUFVLEtBQVYsRUFBZ0IsaUJBQU9DLE9BQVAsQ0FBZUMsYUFBZixHQUE2QixPQUE3QixHQUFxQ0YsS0FBS0csT0FBTCxDQUFhQyxVQUFiLENBQXdCQyxRQUF4QixDQUFpQ0MsR0FBdEYsQzs7O0FBQVhDLG1COztBQUNKUCxxQkFBS04sS0FBTCxHQUFXYSxHQUFYO0FBQ0FQLHFCQUFLUSxNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUdZQyxLLHVFQUFNLEk7Ozs7OztxQkFDaEIsS0FBS2xCLEk7Ozs7O0FBQ0ZTLG9CLEdBQUssSTs7QUFDVCxxQkFBS1AsU0FBTCxHQUFlLEtBQUtBLFNBQUwsR0FBZSxDQUE5Qjs7O3VCQUVjLHdCQUFVLEtBQVYsRUFBZ0IsaUJBQU9RLE9BQVAsQ0FBZVMsU0FBZixHQUF5QixPQUF6QixHQUFpQ1YsS0FBS0csT0FBTCxDQUFhQyxVQUFiLENBQXdCQyxRQUF4QixDQUFpQ0MsR0FBbEUsR0FBc0UsYUFBdEUsR0FBb0ZOLEtBQUtQLFNBQXpHLEM7OztBQUFWYyxtQjs7QUFDSlQsd0JBQVFDLEdBQVIsQ0FBWVEsR0FBWjtBQUNBLG9CQUFHQSxJQUFJSSxNQUFKLElBQVksQ0FBZixFQUFpQjtBQUNmWCx1QkFBS1QsSUFBTCxHQUFVLEtBQVY7QUFFRCxpQkFIRCxNQUdNLElBQUdnQixJQUFJSSxNQUFKLEdBQVcsQ0FBZCxFQUFnQjtBQUNwQlgsdUJBQUtULElBQUwsR0FBVSxLQUFWO0FBQ0Q7O0FBRUQscUJBQUlxQixDQUFKLElBQVNMLEdBQVQsRUFBYTtBQUNYQSxzQkFBSUssQ0FBSixFQUFPQyxZQUFQLEdBQW9CTixJQUFJSyxDQUFKLEVBQU9DLFlBQVAsQ0FBb0JDLEtBQXBCLENBQTBCLENBQTFCLEVBQTRCLEVBQTVCLENBQXBCO0FBQ0Q7QUFDRDtBQUNBLHFCQUFLdEIsU0FBTCxHQUFlLEtBQUtBLFNBQUwsQ0FBZXVCLE1BQWYsQ0FBc0JSLEdBQXRCLENBQWY7QUFDQSxxQkFBS0MsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTNEc0IsZUFBS1EsSTs7a0JBQWxCN0IsSSIsImZpbGUiOiJteVBvc3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vcGFnZXMvanMvY29uZmlnJ1xyXG5pbXBvcnQgdGlwIGZyb20gJy4uL3BhZ2VzL2pzL3RpcCdcclxuaW1wb3J0IHt3eFJlcXVlc3R9IGZyb20gJy4uL3BhZ2VzL2pzL1JlcXVlc3QnXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHRlc3QgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gIGNvbXBvbmVudHMgPSB7XHJcbiAgICAgICAgICAgIC8v5Li65Lik5Liq55u45ZCM57uE5Lu255qE5LiN5ZCM5a6e5L6L5YiG6YWN5LiN5ZCM55qE57uE5Lu2SUTvvIzku47ogIzpgb/lhY3mlbDmja7lkIzmraXlj5jljJbnmoTpl67pophcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY29uZmlnID0ge1xyXG4gICAgICAgICAgICBcIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3JcIjpcIiNmY2ZjZmNcIixcclxuICAgICAgICAgICAgXCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0XCI6XCLmiJHnmoTluJblrZBcIixcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBkYXRhPXtcclxuICAgICAgICAgICBmbGFnOnRydWUsXHJcbiAgICAgICAgICAgdG9waWNsaXN0OltdLFxyXG4gICAgICAgICAgIFBhZ2VJbmRleDowLFxyXG4gICAgICAgICAgIGNvdW50Ok51bWJlclxyXG4gICAgICAgICB9XHJcbiAgICAgICAgIG9uTG9hZCgpe1xyXG4gICAgICAgICAgIHRoaXMuZ2V0bW9yZSgpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIG9uUmVhY2hCb3R0b20oKXtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwi5Yiw6L6+5bqV6YOoXCIpO1xyXG4gICAgICAgICAgdGhpcy5nZXRtb3JlKCk7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBhc3luYyBvblNob3coKXtcclxuICAgICAgICAgIGxldCB0aGF0PXRoaXM7XHJcbiAgICAgICAgICAgIC8qd2VweS5yZXF1ZXN0KGNvbmZpZy5zZXJ2aWNlLmdldE15Q291bnQrJz9nemg9Jyt0aGF0LiRwYXJlbnQuZ2xvYmFsRGF0YS51c2VyaW5mby5wZXJzb25pZCkudGhlbigoZCk9PntcclxuICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGQpO1xyXG4gICAgICAgICAgICAgICAgIHRoYXQuY291bnQ9ZC5kYXRhO1xyXG4gICAgICAgICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XHJcblxyXG4gICAgICAgICAgIH1cclxuICAgICAgICAgICApKi9cclxuICAgICAgICAgICBsZXQgcmVzPSBhd2FpdCB3eFJlcXVlc3QoJ2dldCcsY29uZmlnLnNlcnZpY2UuZ2V0UG9zdHNDb3VudCsnP2d6aD0nK3RoYXQuJHBhcmVudC5nbG9iYWxEYXRhLnVzZXJpbmZvLmd6aClcclxuICAgICAgICAgICB0aGF0LmNvdW50PXJlc1xyXG4gICAgICAgICAgIHRoYXQuJGFwcGx5KClcclxuXHJcbiAgICAgICAgIH1cclxuICAgICAgICAgYXN5bmMgZ2V0bW9yZShmYWxnMj10cnVlKXtcclxuICAgICAgICAgIGlmKHRoaXMuZmxhZyl7XHJcbiAgICAgICAgICAgIGxldCB0aGF0PXRoaXM7XHJcbiAgICAgICAgICAgIHRoaXMuUGFnZUluZGV4PXRoaXMuUGFnZUluZGV4KzE7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IHJlcz1hd2FpdCB3eFJlcXVlc3QoJ2dldCcsY29uZmlnLnNlcnZpY2UuZ2V0TXlQb3N0Kyc/Z3poPScrdGhhdC4kcGFyZW50Lmdsb2JhbERhdGEudXNlcmluZm8uZ3poKycmUGFnZUluZGV4PScrdGhhdC5QYWdlSW5kZXgpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICAgICAgaWYocmVzLmxlbmd0aD09MCl7XHJcbiAgICAgICAgICAgICAgdGhhdC5mbGFnPWZhbHNlXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1lbHNlIGlmKHJlcy5sZW5ndGg8OCl7XHJcbiAgICAgICAgICAgICAgdGhhdC5mbGFnPWZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIHhcclxuICAgICAgICAgICAgZm9yKHggaW4gcmVzKXtcclxuICAgICAgICAgICAgICByZXNbeF0ucG9zdGRhdGV0aW1lPXJlc1t4XS5wb3N0ZGF0ZXRpbWUuc2xpY2UoMCwxMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICAgIHRoaXMudG9waWNsaXN0PXRoaXMudG9waWNsaXN0LmNvbmNhdChyZXMpO1xyXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG5cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbWV0aG9kcz17XHJcbiAgICAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgICAgXHJcblxyXG4gICAgICB9XHJcbiAgICAgICJdfQ==