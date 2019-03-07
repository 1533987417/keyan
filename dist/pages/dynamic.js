'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _infolist = require('./../components/infolist.js');

var _infolist2 = _interopRequireDefault(_infolist);

var _searchbar = require('./../components/searchbar.js');

var _searchbar2 = _interopRequireDefault(_searchbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

var Toast = function (_wepy$page) {
    _inherits(Toast, _wepy$page);

    function Toast() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Toast);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Toast.__proto__ || Object.getPrototypeOf(Toast)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '科研动态'
        }, _this.data = {
            classify: '',
            fid: '48',
            category: '科研动态',
            role: Number

        }, _this.$repeat = {}, _this.$props = { "infolist": { "xmlns:v-bind": "", "v-bind:classify.sync": "classify", "v-bind:fid.sync": "fid", "class": "list" }, "searchbar": { "xmlns:v-bind": "", "v-bind:fid.sync": "fid" } }, _this.$events = {}, _this.components = {

            infolist: _infolist2.default,

            searchbar: _searchbar2.default
        }, _this.methods = {
            tabClick: function tabClick(e) {
                this.sliderOffset = e.currentTarget.offsetLeft;
                this.activeIndex = e.currentTarget.id;
            },
            click: function click(e) {
                console.log(e.target.id);
                console.log(e);
                wx.navigateTo({ url: 'publish?fid=' + e.target.id + '&category=' + this.category });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Toast, [{
        key: 'onLoad',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var res;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _wepy2.default.getSystemInfo();

                            case 2:
                                res = _context.sent;

                                /*this.sliderLeft = (res.windowWidth / this.tabs.length - sliderWidth) / 2;
                                this.sliderOffset = res.windowWidth / this.tabs.length * this.activeIndex;*/
                                this.role = this.$parent.globalData.userinfo.role;
                                console.log(this.role);

                            case 5:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function onLoad() {
                return _ref2.apply(this, arguments);
            }

            return onLoad;
        }()
    }]);

    return Toast;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Toast , 'pages/dynamic'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImR5bmFtaWMuanMiXSwibmFtZXMiOlsic2xpZGVyV2lkdGgiLCJUb2FzdCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiY2xhc3NpZnkiLCJmaWQiLCJjYXRlZ29yeSIsInJvbGUiLCJOdW1iZXIiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJpbmZvbGlzdCIsInNlYXJjaGJhciIsIm1ldGhvZHMiLCJ0YWJDbGljayIsImUiLCJzbGlkZXJPZmZzZXQiLCJjdXJyZW50VGFyZ2V0Iiwib2Zmc2V0TGVmdCIsImFjdGl2ZUluZGV4IiwiaWQiLCJjbGljayIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJ3eCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJnZXRTeXN0ZW1JbmZvIiwicmVzIiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJ1c2VyaW5mbyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0k7Ozs7QUFFQTs7OztBQUdBOzs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGNBQWMsRUFBcEIsQyxDQUF3Qjs7SUFFSEMsSzs7Ozs7Ozs7Ozs7Ozs7d0xBRWpCQyxNLEdBQU87QUFDSEMsb0NBQXVCO0FBRHBCLFMsUUFHUEMsSSxHQUFPO0FBQ0hDLHNCQUFTLEVBRE47QUFFSEMsaUJBQUksSUFGRDtBQUdIQyxzQkFBUyxNQUhOO0FBSUhDLGtCQUFLQzs7QUFKRixTLFFBUVRDLE8sR0FBVSxFLFFBQ2hCQyxNLEdBQVMsRUFBQyxZQUFXLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsd0JBQXVCLFVBQTFDLEVBQXFELG1CQUFrQixLQUF2RSxFQUE2RSxTQUFRLE1BQXJGLEVBQVosRUFBeUcsYUFBWSxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLG1CQUFrQixLQUFyQyxFQUFySCxFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBVzs7QUFFRkMsd0NBRkU7O0FBS0ZDO0FBTEUsUyxRQU9KQyxPLEdBQVU7QUFDTkMsb0JBRE0sb0JBQ0lDLENBREosRUFDTztBQUNULHFCQUFLQyxZQUFMLEdBQW9CRCxFQUFFRSxhQUFGLENBQWdCQyxVQUFwQztBQUNBLHFCQUFLQyxXQUFMLEdBQW1CSixFQUFFRSxhQUFGLENBQWdCRyxFQUFuQztBQUNILGFBSks7QUFLTkMsaUJBTE0saUJBS0FOLENBTEEsRUFLRTtBQUNKTyx3QkFBUUMsR0FBUixDQUFZUixFQUFFUyxNQUFGLENBQVNKLEVBQXJCO0FBQ0FFLHdCQUFRQyxHQUFSLENBQVlSLENBQVo7QUFDQVUsbUJBQUdDLFVBQUgsQ0FBYyxFQUFDQyxLQUFJLGlCQUFlWixFQUFFUyxNQUFGLENBQVNKLEVBQXhCLEdBQTJCLFlBQTNCLEdBQXdDLEtBQUtoQixRQUFsRCxFQUFkO0FBQ0g7QUFUSyxTOzs7Ozs7Ozs7Ozs7O3VDQWFVLGVBQUt3QixhQUFMLEU7OztBQUFaQyxtQzs7QUFDSDs7QUFFRCxxQ0FBS3hCLElBQUwsR0FBVSxLQUFLeUIsT0FBTCxDQUFhQyxVQUFiLENBQXdCQyxRQUF4QixDQUFpQzNCLElBQTNDO0FBQ0FpQix3Q0FBUUMsR0FBUixDQUFZLEtBQUtsQixJQUFqQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXhDMkIsZUFBSzRCLEk7O2tCQUFuQm5DLEsiLCJmaWxlIjoiZHluYW1pYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICAgIFxyXG4gICAgaW1wb3J0IGluZm9saXN0IGZyb20gJy4uL2NvbXBvbmVudHMvaW5mb2xpc3QnXHJcbiAgICBcclxuICAgIFxyXG4gICAgaW1wb3J0IHNlYXJjaGJhciBmcm9tICcuLi9jb21wb25lbnRzL3NlYXJjaGJhcidcclxuXHJcbiAgICBjb25zdCBzbGlkZXJXaWR0aCA9IDk2OyAvLyDpnIDopoHorr7nva5zbGlkZXLnmoTlrr3luqbvvIznlKjkuo7orqHnrpfkuK3pl7TkvY3nva5cclxuXHJcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBUb2FzdCBleHRlbmRzIHdlcHkucGFnZSB7XHJcblxyXG4gICAgICAgIGNvbmZpZz17XHJcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6J+enkeeglOWKqOaAgSdcclxuICAgICAgICB9XHJcbiAgICAgICAgZGF0YSA9IHtcclxuICAgICAgICAgICAgY2xhc3NpZnk6JycsXHJcbiAgICAgICAgICAgIGZpZDonNDgnLFxyXG4gICAgICAgICAgICBjYXRlZ29yeTon56eR56CU5Yqo5oCBJyxcclxuICAgICAgICAgICAgcm9sZTpOdW1iZXJcclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJpbmZvbGlzdFwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6Y2xhc3NpZnkuc3luY1wiOlwiY2xhc3NpZnlcIixcInYtYmluZDpmaWQuc3luY1wiOlwiZmlkXCIsXCJjbGFzc1wiOlwibGlzdFwifSxcInNlYXJjaGJhclwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6ZmlkLnN5bmNcIjpcImZpZFwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHM9e1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgaW5mb2xpc3Q6aW5mb2xpc3QsXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgc2VhcmNoYmFyOnNlYXJjaGJhclxyXG4gICAgICAgfVxyXG4gICAgICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgICAgICAgIHRhYkNsaWNrIChlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNsaWRlck9mZnNldCA9IGUuY3VycmVudFRhcmdldC5vZmZzZXRMZWZ0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVJbmRleCA9IGUuY3VycmVudFRhcmdldC5pZDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2xpY2soZSl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5pZCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe3VybDoncHVibGlzaD9maWQ9JytlLnRhcmdldC5pZCsnJmNhdGVnb3J5PScrdGhpcy5jYXRlZ29yeX0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGFzeW5jIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCB3ZXB5LmdldFN5c3RlbUluZm8oKTtcclxuICAgICAgICAgICAgIC8qdGhpcy5zbGlkZXJMZWZ0ID0gKHJlcy53aW5kb3dXaWR0aCAvIHRoaXMudGFicy5sZW5ndGggLSBzbGlkZXJXaWR0aCkgLyAyO1xyXG4gICAgICAgICAgICB0aGlzLnNsaWRlck9mZnNldCA9IHJlcy53aW5kb3dXaWR0aCAvIHRoaXMudGFicy5sZW5ndGggKiB0aGlzLmFjdGl2ZUluZGV4OyovXHJcbiAgICAgICAgICAgIHRoaXMucm9sZT10aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS51c2VyaW5mby5yb2xlXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucm9sZSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiJdfQ==