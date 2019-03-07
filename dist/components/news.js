'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _util = require('./../pages/js/util.js');

var _util2 = _interopRequireDefault(_util);

var _config = require('./../pages/js/config.js');

var _config2 = _interopRequireDefault(_config);

var _Request = require('./../pages/js/Request.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$component) {
  _inherits(Index, _wepy$component);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.components = {
      //为两个相同组件的不同实例分配不同的组件ID，从而避免数据同步变化的问题

    }, _this.data = {

      page: 0,
      news: []
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      console.log('onLoad');
      this.getmore();

      //this.news=newslist.newslist;
    }
  }, {
    key: 'getmore',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var resp, x, n, l;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;

                console.log("加载没");
                //let res= await wxRequest('get',config.service.Top5News);
                _context.next = 4;
                return (0, _Request.wxRequest)('get', _config2.default.service.PageNews);

              case 4:
                resp = _context.sent;

                for (x in resp.content) {
                  resp.content[x].date = _util2.default.timechange(resp.content[x].date);
                  resp.content[x].url = resp.content[x].url.replace('?', '%3F');
                  resp.content[x].url = resp.content[x].url.replace('=', '%3D');
                }

                console.log(resp.content);
                this.news = resp.content;
                this.$apply();

                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context['catch'](0);

                console.log(_context.t0);

              case 14:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 11]]);
      }));

      function getmore() {
        return _ref2.apply(this, arguments);
      }

      return getmore;
    }()
  }]);

  return Index;
}(_wepy2.default.component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ld3MuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb21wb25lbnRzIiwiZGF0YSIsInBhZ2UiLCJuZXdzIiwiY29uc29sZSIsImxvZyIsImdldG1vcmUiLCJzZXJ2aWNlIiwiUGFnZU5ld3MiLCJyZXNwIiwieCIsImNvbnRlbnQiLCJkYXRlIiwidGltZWNoYW5nZSIsInVybCIsInJlcGxhY2UiLCIkYXBwbHkiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUlxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxVLEdBQWE7QUFDSDs7QUFERyxLLFFBTUxDLEksR0FBSzs7QUFFSEMsWUFBSyxDQUZGO0FBR0hDLFlBQUs7QUFIRixLOzs7Ozs2QkFLSTtBQUNQQyxjQUFRQyxHQUFSLENBQVksUUFBWjtBQUNBLFdBQUtDLE9BQUw7O0FBRUE7QUFDRDs7Ozs7Ozs7Ozs7O0FBS0dGLHdCQUFRQyxHQUFSLENBQVksS0FBWjtBQUNBOzt1QkFDZ0Isd0JBQVUsS0FBVixFQUFnQixpQkFBT0UsT0FBUCxDQUFlQyxRQUEvQixDOzs7QUFBWkMsb0I7O0FBSUoscUJBQUlDLENBQUosSUFBU0QsS0FBS0UsT0FBZCxFQUFzQjtBQUNsQkYsdUJBQUtFLE9BQUwsQ0FBYUQsQ0FBYixFQUFnQkUsSUFBaEIsR0FBcUIsZUFBS0MsVUFBTCxDQUFnQkosS0FBS0UsT0FBTCxDQUFhRCxDQUFiLEVBQWdCRSxJQUFoQyxDQUFyQjtBQUNDSCx1QkFBS0UsT0FBTCxDQUFhRCxDQUFiLEVBQWdCSSxHQUFoQixHQUFvQkwsS0FBS0UsT0FBTCxDQUFhRCxDQUFiLEVBQWdCSSxHQUFoQixDQUFvQkMsT0FBcEIsQ0FBNEIsR0FBNUIsRUFBZ0MsS0FBaEMsQ0FBcEI7QUFDQU4sdUJBQUtFLE9BQUwsQ0FBYUQsQ0FBYixFQUFnQkksR0FBaEIsR0FBb0JMLEtBQUtFLE9BQUwsQ0FBYUQsQ0FBYixFQUFnQkksR0FBaEIsQ0FBb0JDLE9BQXBCLENBQTRCLEdBQTVCLEVBQWdDLEtBQWhDLENBQXBCO0FBQ0o7O0FBR0RYLHdCQUFRQyxHQUFSLENBQVlJLEtBQUtFLE9BQWpCO0FBQ0EscUJBQUtSLElBQUwsR0FBVU0sS0FBS0UsT0FBZjtBQUNBLHFCQUFLSyxNQUFMOzs7Ozs7Ozs7QUFHQVosd0JBQVFDLEdBQVI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUF4Q3FCLGVBQUtZLFM7O2tCQUFuQmxCLEsiLCJmaWxlIjoibmV3cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQgdXRpbCBmcm9tICcuLi9wYWdlcy9qcy91dGlsJ1xyXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL3BhZ2VzL2pzL2NvbmZpZydcclxuaW1wb3J0IHt3eFJlcXVlc3R9IGZyb20gJy4uL3BhZ2VzL2pzL1JlcXVlc3QuanMnXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xyXG4gIGNvbXBvbmVudHMgPSB7XHJcbiAgICAgICAgICAgIC8v5Li65Lik5Liq55u45ZCM57uE5Lu255qE5LiN5ZCM5a6e5L6L5YiG6YWN5LiN5ZCM55qE57uE5Lu2SUTvvIzku47ogIzpgb/lhY3mlbDmja7lkIzmraXlj5jljJbnmoTpl67pophcclxuXHJcbiAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgZGF0YT17XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBwYWdlOjAsXHJcbiAgICAgICAgICAgIG5ld3M6W11cclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdvbkxvYWQnKTtcclxuICAgICAgICAgICAgdGhpcy5nZXRtb3JlKCk7XHJcblxyXG4gICAgICAgICAgICAvL3RoaXMubmV3cz1uZXdzbGlzdC5uZXdzbGlzdDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGFzeW5jIGdldG1vcmUoKXtcclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5Yqg6L295rKhXCIpXHJcbiAgICAgICAgICAgICAgLy9sZXQgcmVzPSBhd2FpdCB3eFJlcXVlc3QoJ2dldCcsY29uZmlnLnNlcnZpY2UuVG9wNU5ld3MpO1xyXG4gICAgICAgICAgICAgIGxldCByZXNwPSBhd2FpdCB3eFJlcXVlc3QoJ2dldCcsY29uZmlnLnNlcnZpY2UuUGFnZU5ld3MpXHJcbiAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICAgIC8vY29uc29sZS5sb2cocmVzcC5jb250ZW50WzBdLmRhdGUpXHJcbiAgICAgICAgICAgICAgdmFyIHg7dmFyIG47dmFyIGw7XHJcbiAgICAgICAgICAgICAgZm9yKHggaW4gcmVzcC5jb250ZW50KXtcclxuICAgICAgICAgICAgICAgICAgcmVzcC5jb250ZW50W3hdLmRhdGU9dXRpbC50aW1lY2hhbmdlKHJlc3AuY29udGVudFt4XS5kYXRlKVxyXG4gICAgICAgICAgICAgICAgICAgcmVzcC5jb250ZW50W3hdLnVybD1yZXNwLmNvbnRlbnRbeF0udXJsLnJlcGxhY2UoJz8nLCclM0YnKVxyXG4gICAgICAgICAgICAgICAgICAgcmVzcC5jb250ZW50W3hdLnVybD1yZXNwLmNvbnRlbnRbeF0udXJsLnJlcGxhY2UoJz0nLCclM0QnKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcC5jb250ZW50KVxyXG4gICAgICAgICAgICAgIHRoaXMubmV3cz1yZXNwLmNvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuXHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvKmxldCBzZWxmPXRoaXM7XHJcbiAgICAgICAgICAgIHdlcHkucmVxdWVzdChjb25maWcuc2VydmljZS5Ub3B0ZW4rJz9maWQ9JytzZWxmLmZpZCkudGhlbigoZCk9PntcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkLmRhdGEpO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0aGlzLm5ld3NsaXN0Jyk7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pOyovXHJcblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAiXX0=