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
            navigationBarTitleText: '意见建议'
        }, _this.data = {
            classify: '',
            fid: '44',
            category: '意见建议',
            role: Number

        }, _this.$repeat = {}, _this.$props = { "infolist": { "xmlns:v-bind": "", "v-bind:classify.sync": "classify", "v-bind:fid.sync": "fid" }, "searchbar": { "xmlns:v-bind": "", "v-bind:fid.sync": "fid" } }, _this.$events = {}, _this.components = {

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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Toast , 'pages/advice'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkdmljZS5qcyJdLCJuYW1lcyI6WyJzbGlkZXJXaWR0aCIsIlRvYXN0IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJjbGFzc2lmeSIsImZpZCIsImNhdGVnb3J5Iiwicm9sZSIsIk51bWJlciIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImluZm9saXN0Iiwic2VhcmNoYmFyIiwibWV0aG9kcyIsInRhYkNsaWNrIiwiZSIsInNsaWRlck9mZnNldCIsImN1cnJlbnRUYXJnZXQiLCJvZmZzZXRMZWZ0IiwiYWN0aXZlSW5kZXgiLCJpZCIsImNsaWNrIiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsInd4IiwibmF2aWdhdGVUbyIsInVybCIsImdldFN5c3RlbUluZm8iLCJyZXMiLCIkcGFyZW50IiwiZ2xvYmFsRGF0YSIsInVzZXJpbmZvIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDSTs7OztBQUVBOzs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsY0FBYyxFQUFwQixDLENBQXdCOztJQUVIQyxLOzs7Ozs7Ozs7Ozs7Ozt3TEFFakJDLE0sR0FBTztBQUNIQyxvQ0FBdUI7QUFEcEIsUyxRQUdQQyxJLEdBQU87QUFDSEMsc0JBQVMsRUFETjtBQUVIQyxpQkFBSSxJQUZEO0FBR0hDLHNCQUFTLE1BSE47QUFJSEMsa0JBQUtDOztBQUpGLFMsUUFRVEMsTyxHQUFVLEUsUUFDaEJDLE0sR0FBUyxFQUFDLFlBQVcsRUFBQyxnQkFBZSxFQUFoQixFQUFtQix3QkFBdUIsVUFBMUMsRUFBcUQsbUJBQWtCLEtBQXZFLEVBQVosRUFBMEYsYUFBWSxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLG1CQUFrQixLQUFyQyxFQUF0RyxFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBVzs7QUFFRkMsd0NBRkU7O0FBS0ZDO0FBTEUsUyxRQU9KQyxPLEdBQVU7QUFDTkMsb0JBRE0sb0JBQ0lDLENBREosRUFDTztBQUNULHFCQUFLQyxZQUFMLEdBQW9CRCxFQUFFRSxhQUFGLENBQWdCQyxVQUFwQztBQUNBLHFCQUFLQyxXQUFMLEdBQW1CSixFQUFFRSxhQUFGLENBQWdCRyxFQUFuQztBQUNILGFBSks7QUFLTkMsaUJBTE0saUJBS0FOLENBTEEsRUFLRTtBQUNKTyx3QkFBUUMsR0FBUixDQUFZUixFQUFFUyxNQUFGLENBQVNKLEVBQXJCO0FBQ0FFLHdCQUFRQyxHQUFSLENBQVlSLENBQVo7QUFDQVUsbUJBQUdDLFVBQUgsQ0FBYyxFQUFDQyxLQUFJLGlCQUFlWixFQUFFUyxNQUFGLENBQVNKLEVBQXhCLEdBQTJCLFlBQTNCLEdBQXdDLEtBQUtoQixRQUFsRCxFQUFkO0FBQ0g7QUFUSyxTOzs7Ozs7Ozs7Ozs7O3VDQWFVLGVBQUt3QixhQUFMLEU7OztBQUFaQyxtQzs7QUFDSDs7QUFFRCxxQ0FBS3hCLElBQUwsR0FBVSxLQUFLeUIsT0FBTCxDQUFhQyxVQUFiLENBQXdCQyxRQUF4QixDQUFpQzNCLElBQTNDO0FBQ0FpQix3Q0FBUUMsR0FBUixDQUFZLEtBQUtsQixJQUFqQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXhDMkIsZUFBSzRCLEk7O2tCQUFuQm5DLEsiLCJmaWxlIjoiYWR2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gICAgXHJcbiAgICBpbXBvcnQgaW5mb2xpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9pbmZvbGlzdCdcclxuICAgIFxyXG4gICAgXHJcbiAgICBpbXBvcnQgc2VhcmNoYmFyIGZyb20gJy4uL2NvbXBvbmVudHMvc2VhcmNoYmFyJ1xyXG5cclxuICAgIGNvbnN0IHNsaWRlcldpZHRoID0gOTY7IC8vIOmcgOimgeiuvue9rnNsaWRlcueahOWuveW6pu+8jOeUqOS6juiuoeeul+S4remXtOS9jee9rlxyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvYXN0IGV4dGVuZHMgd2VweS5wYWdlIHtcclxuXHJcbiAgICAgICAgY29uZmlnPXtcclxuICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDon5oSP6KeB5bu66K6uJ1xyXG4gICAgICAgIH1cclxuICAgICAgICBkYXRhID0ge1xyXG4gICAgICAgICAgICBjbGFzc2lmeTonJyxcclxuICAgICAgICAgICAgZmlkOic0NCcsXHJcbiAgICAgICAgICAgIGNhdGVnb3J5OifmhI/op4Hlu7rorq4nLFxyXG4gICAgICAgICAgICByb2xlOk51bWJlclxyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcImluZm9saXN0XCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpjbGFzc2lmeS5zeW5jXCI6XCJjbGFzc2lmeVwiLFwidi1iaW5kOmZpZC5zeW5jXCI6XCJmaWRcIn0sXCJzZWFyY2hiYXJcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOmZpZC5zeW5jXCI6XCJmaWRcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzPXtcclxuICAgICAgICBcclxuICAgICAgICAgIGluZm9saXN0OmluZm9saXN0LFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIHNlYXJjaGJhcjpzZWFyY2hiYXJcclxuICAgICAgIH1cclxuICAgICAgICBtZXRob2RzID0ge1xyXG4gICAgICAgICAgICB0YWJDbGljayAoZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zbGlkZXJPZmZzZXQgPSBlLmN1cnJlbnRUYXJnZXQub2Zmc2V0TGVmdDtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlSW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuaWQ7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNsaWNrKGUpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQuaWQpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHt1cmw6J3B1Ymxpc2g/ZmlkPScrZS50YXJnZXQuaWQrJyZjYXRlZ29yeT0nK3RoaXMuY2F0ZWdvcnl9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhc3luYyBvbkxvYWQgKCkge1xyXG4gICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgd2VweS5nZXRTeXN0ZW1JbmZvKCk7XHJcbiAgICAgICAgICAgICAvKnRoaXMuc2xpZGVyTGVmdCA9IChyZXMud2luZG93V2lkdGggLyB0aGlzLnRhYnMubGVuZ3RoIC0gc2xpZGVyV2lkdGgpIC8gMjtcclxuICAgICAgICAgICAgdGhpcy5zbGlkZXJPZmZzZXQgPSByZXMud2luZG93V2lkdGggLyB0aGlzLnRhYnMubGVuZ3RoICogdGhpcy5hY3RpdmVJbmRleDsqL1xyXG4gICAgICAgICAgICB0aGlzLnJvbGU9dGhpcy4kcGFyZW50Lmdsb2JhbERhdGEudXNlcmluZm8ucm9sZVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnJvbGUpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4iXX0=