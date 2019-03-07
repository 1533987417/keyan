'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _config = require('./../pages/js/config.js');

var _config2 = _interopRequireDefault(_config);

var _tip = require('./../pages/js/tip.js');

var _tip2 = _interopRequireDefault(_tip);

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

        }, _this.props = {
            school: []
        }, _this.config = {}, _this.data = {}, _this.methods = {
            load: function load(e) {
                console.log(e);
                console.log(e.currentTarget.id);
                this.$emit("getColleges", e.currentTarget.id);
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(test, [{
        key: 'onLoad',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var res;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.prev = 0;

                                console.log("我要看看");
                                _context.next = 4;
                                return (0, _Request.wxRequest)('get', _config2.default.service.getColleges);

                            case 4:
                                res = _context.sent;

                                this.school = res;
                                this.$apply();
                                _context.next = 12;
                                break;

                            case 9:
                                _context.prev = 9;
                                _context.t0 = _context['catch'](0);

                                console.log('有错误' + _context.t0);

                            case 12:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[0, 9]]);
            }));

            function onLoad() {
                return _ref2.apply(this, arguments);
            }

            return onLoad;
        }()
    }, {
        key: 'onShow',
        value: function onShow() {}
    }]);

    return test;
}(_wepy2.default.component);

exports.default = test;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjaG9vbGxpc3QuanMiXSwibmFtZXMiOlsidGVzdCIsImNvbXBvbmVudHMiLCJwcm9wcyIsInNjaG9vbCIsImNvbmZpZyIsImRhdGEiLCJtZXRob2RzIiwibG9hZCIsImUiLCJjb25zb2xlIiwibG9nIiwiY3VycmVudFRhcmdldCIsImlkIiwiJGVtaXQiLCJzZXJ2aWNlIiwiZ2V0Q29sbGVnZXMiLCJyZXMiLCIkYXBwbHkiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSTs7Ozs7Ozs7Ozs7Ozs7c0xBQ2pCQyxVLEdBQWE7QUFDVDs7QUFEUyxTLFFBSWJDLEssR0FBTTtBQUNKQyxvQkFBTztBQURILFMsUUFHTkMsTSxHQUFTLEUsUUFHUkMsSSxHQUFLLEUsUUFxQk5DLE8sR0FBUTtBQUNKQyxnQkFESSxnQkFDQ0MsQ0FERCxFQUNHO0FBQ0xDLHdCQUFRQyxHQUFSLENBQVlGLENBQVo7QUFDQUMsd0JBQVFDLEdBQVIsQ0FBWUYsRUFBRUcsYUFBRixDQUFnQkMsRUFBNUI7QUFDQSxxQkFBS0MsS0FBTCxDQUFXLGFBQVgsRUFBeUJMLEVBQUVHLGFBQUYsQ0FBZ0JDLEVBQXpDO0FBQ0M7QUFMQyxTOzs7Ozs7Ozs7Ozs7OztBQVhMSCx3Q0FBUUMsR0FBUixDQUFZLE1BQVo7O3VDQUNjLHdCQUFVLEtBQVYsRUFBZ0IsaUJBQU9JLE9BQVAsQ0FBZUMsV0FBL0IsQzs7O0FBQVZDLG1DOztBQUNKLHFDQUFLYixNQUFMLEdBQVlhLEdBQVo7QUFDQSxxQ0FBS0MsTUFBTDs7Ozs7Ozs7QUFFRFIsd0NBQVFDLEdBQVIsQ0FBWSxtQkFBWjs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lDQUlNLENBQUU7Ozs7RUE5Qm9CLGVBQUtRLFM7O2tCQUFsQmxCLEkiLCJmaWxlIjoic2Nob29sbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICAgIGltcG9ydCBjb25maWcgZnJvbSAnLi4vcGFnZXMvanMvY29uZmlnJ1xyXG4gICAgaW1wb3J0IHRpcCBmcm9tICcuLi9wYWdlcy9qcy90aXAnXHJcbiAgICBpbXBvcnQge3d4UmVxdWVzdH0gZnJvbSAnLi4vcGFnZXMvanMvUmVxdWVzdCdcclxuICAgIFxyXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgdGVzdCBleHRlbmRzIHdlcHkuY29tcG9uZW50e1xyXG4gICAgICAgIGNvbXBvbmVudHMgPSB7XHJcbiAgICAgICAgICAgIC8v5Li65Lik5Liq55u45ZCM57uE5Lu255qE5LiN5ZCM5a6e5L6L5YiG6YWN5LiN5ZCM55qE57uE5Lu2SUTvvIzku47ogIzpgb/lhY3mlbDmja7lkIzmraXlj5jljJbnmoTpl67pophcclxuICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBwcm9wcz17XHJcbiAgICAgICAgICBzY2hvb2w6W11cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uZmlnID0ge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgfVxyXG4gICAgICAgICBkYXRhPXt9XHJcbiAgICAgICAgYXN5bmMgb25Mb2FkKCl7XHJcbiAgICAgICAgICAgLyp0aXAubG9hZGluZygpO1xyXG4gICAgICAgICAgIHdlcHkucmVxdWVzdChjb25maWcuc2VydmljZS5nZXRDb2xsZWdlcykudGhlbigoZD0+e1xyXG4gICAgICAgICAgICAgICB0aGlzLnNjaG9vbD1kLmRhdGE7XHJcbiAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGQuZGF0YSk7XHJcbiAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgIHRpcC5sb2FkZWQoKTsqL1xyXG4gICAgICAgICAgIHRyeXtcclxuICAgICAgICAgICBjb25zb2xlLmxvZyhcIuaIkeimgeeci+eci1wiKVxyXG4gICAgICAgICAgIGxldCByZXM9YXdhaXQgd3hSZXF1ZXN0KCdnZXQnLGNvbmZpZy5zZXJ2aWNlLmdldENvbGxlZ2VzKTtcclxuICAgICAgICAgICB0aGlzLnNjaG9vbD1yZXM7XHJcbiAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgfWNhdGNoKGVycm9yKXtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCfmnInplJnor68nK2Vycm9yKVxyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBvblNob3coKXt9XHJcblxyXG4gICAgICAgIG1ldGhvZHM9e1xyXG4gICAgICAgICAgICBsb2FkKGUpe1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUuY3VycmVudFRhcmdldC5pZCk7XHJcbiAgICAgICAgICAgICAgdGhpcy4kZW1pdChcImdldENvbGxlZ2VzXCIsZS5jdXJyZW50VGFyZ2V0LmlkKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiJdfQ==