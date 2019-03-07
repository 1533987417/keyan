'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _config = require('./../pages/js/config.js');

var _config2 = _interopRequireDefault(_config);

var _placeholder = require('./placeholder.js');

var _placeholder2 = _interopRequireDefault(_placeholder);

var _Request = require('./../pages/js/Request.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var test = function (_wepy$component) {
    _inherits(test, _wepy$component);

    function test() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, test);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = test.__proto__ || Object.getPrototypeOf(test)).call.apply(_ref, [this].concat(args))), _this), _this.components = {
            //为两个相同组件的不同实例分配不同的组件ID，从而避免数据同步变化的问题
            placeholder: _placeholder2.default
        }, _this.props = {
            teacher: []
        }, _this.config = {}, _this.data = {
            isNone: false,
            url: _config2.default.service.img
        }, _this.methods = {
            /* getColleges(College){
               /*console.log("有没有啊"+College);
               let that=this;
               wepy.request(config.service.GetCollegeMember+'?College='+College).then((d)=>{
               console.log(d.data);
               that.teacherlist=d.data;
               
               that.$apply();
                 })
             }*/
            getColleges: function getColleges(College) {
                var _this2 = this;

                return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                    var that, res;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    that = _this2;
                                    _context.next = 3;
                                    return (0, _Request.wxRequest)('get', _config2.default.service.GetCollegeMember + '?College=' + College);

                                case 3:
                                    res = _context.sent;

                                    that.teacherlist = res;
                                    that.$apply();

                                case 6:
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
        value: function onLoad() {}
    }, {
        key: 'onShow',
        value: function onShow() {}
    }]);

    return test;
}(_wepy2.default.component);

exports.default = test;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlYWNoZXJsaXN0LmpzIl0sIm5hbWVzIjpbInRlc3QiLCJjb21wb25lbnRzIiwicGxhY2Vob2xkZXIiLCJwcm9wcyIsInRlYWNoZXIiLCJjb25maWciLCJkYXRhIiwiaXNOb25lIiwidXJsIiwic2VydmljZSIsImltZyIsIm1ldGhvZHMiLCJnZXRDb2xsZWdlcyIsIkNvbGxlZ2UiLCJ0aGF0IiwiR2V0Q29sbGVnZU1lbWJlciIsInJlcyIsInRlYWNoZXJsaXN0IiwiJGFwcGx5IiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEk7Ozs7Ozs7Ozs7Ozs7O3NMQUNqQkMsVSxHQUFhO0FBQ1Q7QUFDQUM7QUFGUyxTLFFBSWJDLEssR0FBTTtBQUNKQyxxQkFBUTtBQURKLFMsUUFHTkMsTSxHQUFTLEUsUUFHUkMsSSxHQUFLO0FBQ0pDLG9CQUFPLEtBREg7QUFFSkMsaUJBQUksaUJBQU9DLE9BQVAsQ0FBZUM7QUFGZixTLFFBWU5DLE8sR0FBUTtBQUNMOzs7Ozs7Ozs7O0FBV09DLHVCQVpGLHVCQVljQyxPQVpkLEVBWXNCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3BCQyx3Q0FEb0I7QUFBQTtBQUFBLDJDQUVWLHdCQUFVLEtBQVYsRUFBZ0IsaUJBQU9MLE9BQVAsQ0FBZU0sZ0JBQWYsR0FBZ0MsV0FBaEMsR0FBNENGLE9BQTVELENBRlU7O0FBQUE7QUFFcEJHLHVDQUZvQjs7QUFHeEJGLHlDQUFLRyxXQUFMLEdBQWlCRCxHQUFqQjtBQUNBRix5Q0FBS0ksTUFBTDs7QUFKd0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLekI7QUFqQkcsUzs7Ozs7aUNBUkEsQ0FFUDs7O2lDQUNPLENBR1A7Ozs7RUFyQjZCLGVBQUtDLFM7O2tCQUFsQm5CLEkiLCJmaWxlIjoidGVhY2hlcmxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgICBpbXBvcnQgY29uZmlnIGZyb20gJy4uL3BhZ2VzL2pzL2NvbmZpZydcclxuICAgIGltcG9ydCBwbGFjZWhvbGRlciBmcm9tICcuLi9jb21wb25lbnRzL3BsYWNlaG9sZGVyJ1xyXG4gICAgaW1wb3J0IHt3eFJlcXVlc3R9IGZyb20gJy4uL3BhZ2VzL2pzL1JlcXVlc3QnXHJcbiAgICBcclxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIHRlc3QgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudHtcclxuICAgICAgICBjb21wb25lbnRzID0ge1xyXG4gICAgICAgICAgICAvL+S4uuS4pOS4quebuOWQjOe7hOS7tueahOS4jeWQjOWunuS+i+WIhumFjeS4jeWQjOeahOe7hOS7tklE77yM5LuO6ICM6YG/5YWN5pWw5o2u5ZCM5q2l5Y+Y5YyW55qE6Zeu6aKYXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOnBsYWNlaG9sZGVyXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByb3BzPXtcclxuICAgICAgICAgIHRlYWNoZXI6W11cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uZmlnID0ge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgfVxyXG4gICAgICAgICBkYXRhPXtcclxuICAgICAgICAgIGlzTm9uZTpmYWxzZSxcclxuICAgICAgICAgIHVybDpjb25maWcuc2VydmljZS5pbWdcclxuICAgICAgICAgfVxyXG4gICAgICAgIG9uTG9hZCgpe1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgb25TaG93KCl7XHJcblxyXG4gICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1ldGhvZHM9e1xyXG4gICAgICAgICAgIC8qIGdldENvbGxlZ2VzKENvbGxlZ2Upe1xyXG4gICAgICAgICAgICAgIC8qY29uc29sZS5sb2coXCLmnInmsqHmnInllYpcIitDb2xsZWdlKTtcclxuICAgICAgICAgICAgICBsZXQgdGhhdD10aGlzO1xyXG4gICAgICAgICAgICAgIHdlcHkucmVxdWVzdChjb25maWcuc2VydmljZS5HZXRDb2xsZWdlTWVtYmVyKyc/Q29sbGVnZT0nK0NvbGxlZ2UpLnRoZW4oKGQpPT57XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZC5kYXRhKTtcclxuICAgICAgICAgICAgICB0aGF0LnRlYWNoZXJsaXN0PWQuZGF0YTtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xyXG5cclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9Ki9cclxuICAgICAgICAgICAgYXN5bmMgZ2V0Q29sbGVnZXMoQ29sbGVnZSl7XHJcbiAgICAgICAgICAgICAgbGV0IHRoYXQ9dGhpcztcclxuICAgICAgICAgICAgICBsZXQgcmVzPWF3YWl0IHd4UmVxdWVzdCgnZ2V0Jyxjb25maWcuc2VydmljZS5HZXRDb2xsZWdlTWVtYmVyKyc/Q29sbGVnZT0nK0NvbGxlZ2UpXHJcbiAgICAgICAgICAgICAgdGhhdC50ZWFjaGVybGlzdD1yZXM7XHJcbiAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4iXX0=