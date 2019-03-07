'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _util = require('./../pages/js/util.js');

var _util2 = _interopRequireDefault(_util);

var _tip = require('./../pages/js/tip.js');

var _tip2 = _interopRequireDefault(_tip);

var _config = require('./../pages/js/config.js');

var _config2 = _interopRequireDefault(_config);

var _empty = require('./empty.js');

var _empty2 = _interopRequireDefault(_empty);

var _Request = require('./../pages/js/Request.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var infolist = function (_wepy$component) {
  _inherits(infolist, _wepy$component);

  function infolist() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, infolist);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = infolist.__proto__ || Object.getPrototypeOf(infolist)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      classify: String,
      fid: String

    }, _this.$repeat = {}, _this.$props = { "empty": { "xmlns:v-bind": "", "v-bind:isNone.sync": "isNone" } }, _this.$events = {}, _this.components = {
      empty: _empty2.default
    }, _this.data = {
      info: [],
      PageIndex: 0,
      flag: true,
      isNone: false

    }, _this.methods = {
      bindscroll: function bindscroll(e) {
        //console.log(e.detail)
        if (e.detail.scrollTop > 50) {
          this.$invoke('/searchbar', 'disappear');
        } else {
          this.$invoke('/searchbar', 'appear');
        }
      },
      lower: function lower(e) {
        if (this.flag) {

          //console.log(e+'到底部了');
          this.getInfo();
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(infolist, [{
    key: 'onLoad',
    value: function onLoad() {
      _tip2.default.loading();
      this.getInfo();
      _tip2.default.loaded();
    }
  }, {
    key: 'getInfo',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var that, res, x;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                that = this;

                this.PageIndex = this.PageIndex + 1;
                _context.next = 4;
                return (0, _Request.wxRequest)('get', _config2.default.service.pageTopic + '?fid=' + that.fid + '&PageIndex=' + that.PageIndex + '&classify=' + that.classify);

              case 4:
                res = _context.sent;

                console.log(res);
                if (res.length == 0) {
                  that.flag = false;
                  that.isNone = true;
                }

                for (x in res) {

                  res[x][5] = res[x][5].slice(0, 10);
                }
                console.log(res);
                this.info = this.info.concat(res);
                if (this.info.length < 10) {
                  this.isNone = true;
                }
                this.$apply();

              case 12:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInfo() {
        return _ref2.apply(this, arguments);
      }

      return getInfo;
    }()
  }]);

  return infolist;
}(_wepy2.default.component);

exports.default = infolist;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZm9saXN0LmpzIl0sIm5hbWVzIjpbImluZm9saXN0IiwicHJvcHMiLCJjbGFzc2lmeSIsIlN0cmluZyIsImZpZCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImVtcHR5IiwiZGF0YSIsImluZm8iLCJQYWdlSW5kZXgiLCJmbGFnIiwiaXNOb25lIiwibWV0aG9kcyIsImJpbmRzY3JvbGwiLCJlIiwiZGV0YWlsIiwic2Nyb2xsVG9wIiwiJGludm9rZSIsImxvd2VyIiwiZ2V0SW5mbyIsImxvYWRpbmciLCJsb2FkZWQiLCJ0aGF0Iiwic2VydmljZSIsInBhZ2VUb3BpYyIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJ4Iiwic2xpY2UiLCJjb25jYXQiLCIkYXBwbHkiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFJcUJBLFE7Ozs7Ozs7Ozs7Ozs7OzBMQUdYQyxLLEdBQU87QUFDUEMsZ0JBQVNDLE1BREY7QUFFUEMsV0FBSUQ7O0FBRkcsSyxRQUtQRSxPLEdBQVUsRSxRQUNwQkMsTSxHQUFTLEVBQUMsU0FBUSxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHNCQUFxQixRQUF4QyxFQUFULEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFXO0FBQ0RDO0FBREMsSyxRQUdIQyxJLEdBQUs7QUFDSkMsWUFBSyxFQUREO0FBRUpDLGlCQUFVLENBRk47QUFHSkMsWUFBSyxJQUhEO0FBSUpDLGNBQVE7O0FBSkosSyxRQU9QQyxPLEdBQVE7QUFDTEMsZ0JBREssc0JBQ01DLENBRE4sRUFDUTtBQUNWO0FBQ0EsWUFBR0EsRUFBRUMsTUFBRixDQUFTQyxTQUFULEdBQW1CLEVBQXRCLEVBQXlCO0FBQ3hCLGVBQUtDLE9BQUwsQ0FBYSxZQUFiLEVBQTBCLFdBQTFCO0FBQ0EsU0FGRCxNQUVLO0FBQ0osZUFBS0EsT0FBTCxDQUFhLFlBQWIsRUFBMEIsUUFBMUI7QUFDQTtBQUNILE9BUkk7QUFTTEMsV0FUSyxpQkFTQ0osQ0FURCxFQVNJO0FBQ1IsWUFBRyxLQUFLSixJQUFSLEVBQWE7O0FBRVo7QUFDQSxlQUFLUyxPQUFMO0FBRUQ7QUFBQztBQWZHLEs7Ozs7OzZCQWtCSztBQUNSLG9CQUFJQyxPQUFKO0FBQ0EsV0FBS0QsT0FBTDtBQUNBLG9CQUFJRSxNQUFKO0FBQ0M7Ozs7Ozs7Ozs7QUFHR0Msb0IsR0FBSyxJOztBQUNULHFCQUFLYixTQUFMLEdBQWUsS0FBS0EsU0FBTCxHQUFlLENBQTlCOzt1QkFDZSx3QkFBVSxLQUFWLEVBQWdCLGlCQUFPYyxPQUFQLENBQWVDLFNBQWYsR0FBeUIsT0FBekIsR0FBaUNGLEtBQUtyQixHQUF0QyxHQUEwQyxhQUExQyxHQUF3RHFCLEtBQUtiLFNBQTdELEdBQXVFLFlBQXZFLEdBQW9GYSxLQUFLdkIsUUFBekcsQzs7O0FBQVgwQixtQjs7QUFDSkMsd0JBQVFDLEdBQVIsQ0FBWUYsR0FBWjtBQUNBLG9CQUFHQSxJQUFJRyxNQUFKLElBQVksQ0FBZixFQUFpQjtBQUNiTix1QkFBS1osSUFBTCxHQUFVLEtBQVY7QUFDQVksdUJBQUtYLE1BQUwsR0FBWSxJQUFaO0FBQ0Q7O0FBRUQscUJBQUlrQixDQUFKLElBQVNKLEdBQVQsRUFBYTs7QUFFVEEsc0JBQUlJLENBQUosRUFBTyxDQUFQLElBQVVKLElBQUlJLENBQUosRUFBTyxDQUFQLEVBQVVDLEtBQVYsQ0FBZ0IsQ0FBaEIsRUFBa0IsRUFBbEIsQ0FBVjtBQUVIO0FBQ0RKLHdCQUFRQyxHQUFSLENBQVlGLEdBQVo7QUFDQSxxQkFBS2pCLElBQUwsR0FBVSxLQUFLQSxJQUFMLENBQVV1QixNQUFWLENBQWlCTixHQUFqQixDQUFWO0FBQ0Esb0JBQUksS0FBS2pCLElBQUwsQ0FBVW9CLE1BQVYsR0FBaUIsRUFBckIsRUFBeUI7QUFDdkIsdUJBQUtqQixNQUFMLEdBQVksSUFBWjtBQUNEO0FBQ0QscUJBQUtxQixNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBakV3QixlQUFLQyxTOztrQkFBdEJwQyxRIiwiZmlsZSI6ImluZm9saXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCB1dGlsIGZyb20gJy4uL3BhZ2VzL2pzL3V0aWwnXHJcbmltcG9ydCB0aXAgZnJvbSAnLi4vcGFnZXMvanMvdGlwJ1xyXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL3BhZ2VzL2pzL2NvbmZpZydcclxuaW1wb3J0IGVtcHR5IGZyb20gJy4uL2NvbXBvbmVudHMvZW1wdHknXHJcbmltcG9ydCB7d3hSZXF1ZXN0fSBmcm9tICcuLi9wYWdlcy9qcy9SZXF1ZXN0J1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBpbmZvbGlzdCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBwcm9wcyA9e1xyXG4gICAgICAgICAgY2xhc3NpZnk6U3RyaW5nLFxyXG4gICAgICAgICAgZmlkOlN0cmluZyxcclxuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcImVtcHR5XCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDppc05vbmUuc3luY1wiOlwiaXNOb25lXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cz17XHJcbiAgICAgICAgICAgZW1wdHk6ZW1wdHlcclxuICB9XHJcbiAgICAgICAgIGRhdGE9e1xyXG4gICAgICAgICAgaW5mbzpbXSxcclxuICAgICAgICAgIFBhZ2VJbmRleDowLFxyXG4gICAgICAgICAgZmxhZzp0cnVlLFxyXG4gICAgICAgICAgaXNOb25lOiBmYWxzZSxcclxuICAgICAgICAgIFxyXG4gICAgICAgICB9XHJcbiAgICAgICBtZXRob2RzPXtcclxuICAgICAgICAgIGJpbmRzY3JvbGwoZSl7XHJcbiAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGUuZGV0YWlsKVxyXG4gICAgICAgICAgICAgaWYoZS5kZXRhaWwuc2Nyb2xsVG9wPjUwKXtcclxuICAgICAgICAgICAgICB0aGlzLiRpbnZva2UoJy9zZWFyY2hiYXInLCdkaXNhcHBlYXInKVxyXG4gICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgdGhpcy4kaW52b2tlKCcvc2VhcmNoYmFyJywnYXBwZWFyJylcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBsb3dlcihlKSB7XHJcbiAgICAgICAgICAgaWYodGhpcy5mbGFnKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coZSsn5Yiw5bqV6YOo5LqGJyk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0SW5mbygpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgIG9uTG9hZCAoKXtcclxuICAgICAgICAgICAgdGlwLmxvYWRpbmcoKTtcclxuICAgICAgICAgICAgdGhpcy5nZXRJbmZvKCk7XHJcbiAgICAgICAgICAgIHRpcC5sb2FkZWQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgYXN5bmMgZ2V0SW5mbygpe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IHRoYXQ9dGhpcztcclxuICAgICAgICAgICAgdGhpcy5QYWdlSW5kZXg9dGhpcy5QYWdlSW5kZXgrMTtcclxuICAgICAgICAgICAgbGV0IHJlcz0gYXdhaXQgd3hSZXF1ZXN0KCdnZXQnLGNvbmZpZy5zZXJ2aWNlLnBhZ2VUb3BpYysnP2ZpZD0nK3RoYXQuZmlkKycmUGFnZUluZGV4PScrdGhhdC5QYWdlSW5kZXgrJyZjbGFzc2lmeT0nK3RoYXQuY2xhc3NpZnkpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICBpZihyZXMubGVuZ3RoPT0wKXtcclxuICAgICAgICAgICAgICAgIHRoYXQuZmxhZz1mYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoYXQuaXNOb25lPXRydWU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHZhciB4O1xyXG4gICAgICAgICAgICAgIGZvcih4IGluIHJlcyl7XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICByZXNbeF1bNV09cmVzW3hdWzVdLnNsaWNlKDAsMTApO1xyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgICAgICAgIHRoaXMuaW5mbz10aGlzLmluZm8uY29uY2F0KHJlcyk7XHJcbiAgICAgICAgICAgICAgaWYgKHRoaXMuaW5mby5sZW5ndGg8MTApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNOb25lPXRydWU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICBcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgIl19