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

var _empty = require('./empty.js');

var _empty2 = _interopRequireDefault(_empty);

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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "empty": { "xmlns:v-bind": "", "v-bind:isNone.sync": "isNone" } }, _this.$events = {}, _this.components = {
      //为两个相同组件的不同实例分配不同的组件ID，从而避免数据同步变化的问题
      empty: _empty2.default
    }, _this.data = {

      flag: true,
      isNone: false,
      page: 0,
      news: []
    }, _this.methods = {
      lower: function lower(e) {
        if (this.flag) {

          //console.log(e+'到底部了');
          this.getmore();
        }
      }
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
        var resp, x;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;

                console.log("加载没");
                //let res= await wxRequest('get',config.service.Top5News);
                _context.next = 4;
                return (0, _Request.wxRequest)('get', _config2.default.service.PageNews + '?page=' + this.page);

              case 4:
                resp = _context.sent;

                //console.log(res);
                //console.log(resp.content[0].date)
                this.page = this.page + 1;
                if (resp.content.length == 0 || resp.content.length < 7) {
                  this.flag = false;
                  this.isNone = true;
                }

                for (x in resp.content) {
                  resp.content[x].date = _util2.default.timechange(resp.content[x].date);
                  resp.content[x].url = resp.content[x].url.replace('?', '%3F');
                  resp.content[x].url = resp.content[x].url.replace('=', '%3D');
                }
                console.log(resp.content);
                this.news = this.news.concat(resp.content);
                this.$apply();

                _context.next = 16;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context['catch'](0);

                console.log(_context.t0);

              case 16:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 13]]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ld2xpc3QuanMiXSwibmFtZXMiOlsiSW5kZXgiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJlbXB0eSIsImRhdGEiLCJmbGFnIiwiaXNOb25lIiwicGFnZSIsIm5ld3MiLCJtZXRob2RzIiwibG93ZXIiLCJlIiwiZ2V0bW9yZSIsImNvbnNvbGUiLCJsb2ciLCJzZXJ2aWNlIiwiUGFnZU5ld3MiLCJyZXNwIiwiY29udGVudCIsImxlbmd0aCIsIngiLCJkYXRlIiwidGltZWNoYW5nZSIsInVybCIsInJlcGxhY2UiLCJjb25jYXQiLCIkYXBwbHkiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBR3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDcEJDLE8sR0FBVSxFLFFBQ1hDLE0sR0FBUyxFQUFDLFNBQVEsRUFBQyxnQkFBZSxFQUFoQixFQUFtQixzQkFBcUIsUUFBeEMsRUFBVCxFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNGO0FBQ0RDO0FBRkcsSyxRQU1KQyxJLEdBQUs7O0FBR0hDLFlBQUssSUFIRjtBQUlIQyxjQUFPLEtBSko7QUFLSEMsWUFBSyxDQUxGO0FBTUhDLFlBQUs7QUFORixLLFFBUUxDLE8sR0FBUTtBQUNOQyxXQURNLGlCQUNBQyxDQURBLEVBQ0c7QUFDVixZQUFHLEtBQUtOLElBQVIsRUFBYTs7QUFFWjtBQUNBLGVBQUtPLE9BQUw7QUFFRDtBQUFDO0FBUE0sSzs7Ozs7NkJBU0M7QUFDUEMsY0FBUUMsR0FBUixDQUFZLFFBQVo7QUFDQSxXQUFLRixPQUFMOztBQUVBO0FBQ0Q7Ozs7Ozs7Ozs7OztBQUtHQyx3QkFBUUMsR0FBUixDQUFZLEtBQVo7QUFDQTs7dUJBQ2Usd0JBQVUsS0FBVixFQUFnQixpQkFBT0MsT0FBUCxDQUFlQyxRQUFmLEdBQXdCLFFBQXhCLEdBQWlDLEtBQUtULElBQXRELEM7OztBQUFYVSxvQjs7QUFDSjtBQUNBO0FBQ0EscUJBQUtWLElBQUwsR0FBVSxLQUFLQSxJQUFMLEdBQVUsQ0FBcEI7QUFDQSxvQkFBR1UsS0FBS0MsT0FBTCxDQUFhQyxNQUFiLElBQXFCLENBQXJCLElBQXdCRixLQUFLQyxPQUFMLENBQWFDLE1BQWIsR0FBb0IsQ0FBL0MsRUFBaUQ7QUFDL0MsdUJBQUtkLElBQUwsR0FBVSxLQUFWO0FBQ0EsdUJBQUtDLE1BQUwsR0FBWSxJQUFaO0FBQ0Q7O0FBR0QscUJBQUljLENBQUosSUFBU0gsS0FBS0MsT0FBZCxFQUFzQjtBQUNsQkQsdUJBQUtDLE9BQUwsQ0FBYUUsQ0FBYixFQUFnQkMsSUFBaEIsR0FBcUIsZUFBS0MsVUFBTCxDQUFnQkwsS0FBS0MsT0FBTCxDQUFhRSxDQUFiLEVBQWdCQyxJQUFoQyxDQUFyQjtBQUNBSix1QkFBS0MsT0FBTCxDQUFhRSxDQUFiLEVBQWdCRyxHQUFoQixHQUFvQk4sS0FBS0MsT0FBTCxDQUFhRSxDQUFiLEVBQWdCRyxHQUFoQixDQUFvQkMsT0FBcEIsQ0FBNEIsR0FBNUIsRUFBZ0MsS0FBaEMsQ0FBcEI7QUFDQ1AsdUJBQUtDLE9BQUwsQ0FBYUUsQ0FBYixFQUFnQkcsR0FBaEIsR0FBb0JOLEtBQUtDLE9BQUwsQ0FBYUUsQ0FBYixFQUFnQkcsR0FBaEIsQ0FBb0JDLE9BQXBCLENBQTRCLEdBQTVCLEVBQWdDLEtBQWhDLENBQXBCO0FBRUo7QUFDQVgsd0JBQVFDLEdBQVIsQ0FBWUcsS0FBS0MsT0FBakI7QUFDRCxxQkFBS1YsSUFBTCxHQUFVLEtBQUtBLElBQUwsQ0FBVWlCLE1BQVYsQ0FBaUJSLEtBQUtDLE9BQXRCLENBQVY7QUFDQSxxQkFBS1EsTUFBTDs7Ozs7Ozs7O0FBR0FiLHdCQUFRQyxHQUFSOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBNURxQixlQUFLYSxTOztrQkFBbkI3QixLIiwiZmlsZSI6Im5ld2xpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0IHV0aWwgZnJvbSAnLi4vcGFnZXMvanMvdXRpbCdcclxuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9wYWdlcy9qcy9jb25maWcnXHJcbmltcG9ydCB7d3hSZXF1ZXN0fSBmcm9tICcuLi9wYWdlcy9qcy9SZXF1ZXN0LmpzJ1xyXG5pbXBvcnQgZW1wdHkgZnJvbSAnLi4vY29tcG9uZW50cy9lbXB0eSdcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiZW1wdHlcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOmlzTm9uZS5zeW5jXCI6XCJpc05vbmVcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xyXG4gICAgICAgICAgICAvL+S4uuS4pOS4quebuOWQjOe7hOS7tueahOS4jeWQjOWunuS+i+WIhumFjeS4jeWQjOeahOe7hOS7tklE77yM5LuO6ICM6YG/5YWN5pWw5o2u5ZCM5q2l5Y+Y5YyW55qE6Zeu6aKYXHJcbiAgICAgICAgICAgZW1wdHk6ZW1wdHlcclxuICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBkYXRhPXtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICBmbGFnOnRydWUsXHJcbiAgICAgICAgICAgIGlzTm9uZTpmYWxzZSxcclxuICAgICAgICAgICAgcGFnZTowLFxyXG4gICAgICAgICAgICBuZXdzOltdXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgbWV0aG9kcz17XHJcbiAgICAgICAgICAgIGxvd2VyKGUpIHtcclxuICAgICAgICAgICBpZih0aGlzLmZsYWcpe1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhlKyfliLDlupXpg6jkuoYnKTtcclxuICAgICAgICAgICAgdGhpcy5nZXRtb3JlKCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIG9uTG9hZCgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ29uTG9hZCcpO1xyXG4gICAgICAgICAgICB0aGlzLmdldG1vcmUoKTtcclxuXHJcbiAgICAgICAgICAgIC8vdGhpcy5uZXdzPW5ld3NsaXN0Lm5ld3NsaXN0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgYXN5bmMgZ2V0bW9yZSgpe1xyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLliqDovb3msqFcIilcclxuICAgICAgICAgICAgICAvL2xldCByZXM9IGF3YWl0IHd4UmVxdWVzdCgnZ2V0Jyxjb25maWcuc2VydmljZS5Ub3A1TmV3cyk7XHJcbiAgICAgICAgICAgICAgbGV0IHJlc3A9YXdhaXQgd3hSZXF1ZXN0KCdnZXQnLGNvbmZpZy5zZXJ2aWNlLlBhZ2VOZXdzKyc/cGFnZT0nK3RoaXMucGFnZSlcclxuICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXNwLmNvbnRlbnRbMF0uZGF0ZSlcclxuICAgICAgICAgICAgICB0aGlzLnBhZ2U9dGhpcy5wYWdlKzFcclxuICAgICAgICAgICAgICBpZihyZXNwLmNvbnRlbnQubGVuZ3RoPT0wfHxyZXNwLmNvbnRlbnQubGVuZ3RoPDcpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mbGFnPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc05vbmU9dHJ1ZTtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIHZhciB4O1xyXG4gICAgICAgICAgICAgIGZvcih4IGluIHJlc3AuY29udGVudCl7XHJcbiAgICAgICAgICAgICAgICAgIHJlc3AuY29udGVudFt4XS5kYXRlPXV0aWwudGltZWNoYW5nZShyZXNwLmNvbnRlbnRbeF0uZGF0ZSlcclxuICAgICAgICAgICAgICAgICAgcmVzcC5jb250ZW50W3hdLnVybD1yZXNwLmNvbnRlbnRbeF0udXJsLnJlcGxhY2UoJz8nLCclM0YnKVxyXG4gICAgICAgICAgICAgICAgICAgcmVzcC5jb250ZW50W3hdLnVybD1yZXNwLmNvbnRlbnRbeF0udXJsLnJlcGxhY2UoJz0nLCclM0QnKVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwLmNvbnRlbnQpXHJcbiAgICAgICAgICAgICAgdGhpcy5uZXdzPXRoaXMubmV3cy5jb25jYXQocmVzcC5jb250ZW50KTtcclxuICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG5cclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8qbGV0IHNlbGY9dGhpcztcclxuICAgICAgICAgICAgd2VweS5yZXF1ZXN0KGNvbmZpZy5zZXJ2aWNlLlRvcHRlbisnP2ZpZD0nK3NlbGYuZmlkKS50aGVuKChkKT0+e1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3RoaXMubmV3c2xpc3QnKTtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSk7Ki9cclxuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICJdfQ==