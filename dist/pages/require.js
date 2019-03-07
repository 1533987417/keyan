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
            navigationBarTitleText: '地方需求'
        }, _this.data = {
            classify: '地方需求',
            fid: '2',
            category: '地方需求',
            role: Number

        }, _this.$repeat = {}, _this.$props = { "infolist": { "xmlns:v-bind": "", "v-bind:fid.sync": "fid", "v-bind:classify.sync": "classify", "class": "list" }, "searchbar": { "xmlns:v-bind": "", "v-bind:fid.sync": "fid" } }, _this.$events = {}, _this.components = {

            infolist: _infolist2.default,
            searchbar: _searchbar2.default
        }, _this.methods = {
            tabClick: function tabClick(e) {
                this.sliderOffset = e.currentTarget.offsetLeft;
                this.activeIndex = e.currentTarget.id;
            },
            click: function click(e) {
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

                                //this.sliderLeft = (res.windowWidth / this.tabs.length - sliderWidth) / 2;
                                //this.sliderOffset = res.windowWidth / this.tabs.length * this.activeIndex;
                                this.role = this.$parent.globalData.userinfo.role;

                            case 4:
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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Toast , 'pages/require'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcXVpcmUuanMiXSwibmFtZXMiOlsic2xpZGVyV2lkdGgiLCJUb2FzdCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiY2xhc3NpZnkiLCJmaWQiLCJjYXRlZ29yeSIsInJvbGUiLCJOdW1iZXIiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJpbmZvbGlzdCIsInNlYXJjaGJhciIsIm1ldGhvZHMiLCJ0YWJDbGljayIsImUiLCJzbGlkZXJPZmZzZXQiLCJjdXJyZW50VGFyZ2V0Iiwib2Zmc2V0TGVmdCIsImFjdGl2ZUluZGV4IiwiaWQiLCJjbGljayIsImNvbnNvbGUiLCJsb2ciLCJ3eCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJ0YXJnZXQiLCJnZXRTeXN0ZW1JbmZvIiwicmVzIiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJ1c2VyaW5mbyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0k7Ozs7QUFFQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGNBQWMsRUFBcEIsQyxDQUF3Qjs7SUFFSEMsSzs7Ozs7Ozs7Ozs7Ozs7d0xBRWpCQyxNLEdBQU87QUFDSEMsb0NBQXVCO0FBRHBCLFMsUUFHUEMsSSxHQUFPO0FBQ0hDLHNCQUFTLE1BRE47QUFFSEMsaUJBQUksR0FGRDtBQUdIQyxzQkFBUyxNQUhOO0FBSUhDLGtCQUFLQzs7QUFKRixTLFFBUVRDLE8sR0FBVSxFLFFBQ2hCQyxNLEdBQVMsRUFBQyxZQUFXLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsbUJBQWtCLEtBQXJDLEVBQTJDLHdCQUF1QixVQUFsRSxFQUE2RSxTQUFRLE1BQXJGLEVBQVosRUFBeUcsYUFBWSxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLG1CQUFrQixLQUFyQyxFQUFySCxFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBVzs7QUFFRkMsd0NBRkU7QUFHRkM7QUFIRSxTLFFBS0pDLE8sR0FBVTtBQUNOQyxvQkFETSxvQkFDSUMsQ0FESixFQUNPO0FBQ1QscUJBQUtDLFlBQUwsR0FBb0JELEVBQUVFLGFBQUYsQ0FBZ0JDLFVBQXBDO0FBQ0EscUJBQUtDLFdBQUwsR0FBbUJKLEVBQUVFLGFBQUYsQ0FBZ0JHLEVBQW5DO0FBQ0gsYUFKSztBQUtOQyxpQkFMTSxpQkFLQU4sQ0FMQSxFQUtFO0FBQ0pPLHdCQUFRQyxHQUFSLENBQVlSLENBQVo7QUFDQVMsbUJBQUdDLFVBQUgsQ0FBYyxFQUFDQyxLQUFJLGlCQUFlWCxFQUFFWSxNQUFGLENBQVNQLEVBQXhCLEdBQTJCLFlBQTNCLEdBQXdDLEtBQUtoQixRQUFsRCxFQUFkO0FBQ0g7QUFSSyxTOzs7Ozs7Ozs7Ozs7O3VDQVlVLGVBQUt3QixhQUFMLEU7OztBQUFaQyxtQzs7QUFDSDtBQUNEO0FBQ0EscUNBQUt4QixJQUFMLEdBQVUsS0FBS3lCLE9BQUwsQ0FBYUMsVUFBYixDQUF3QkMsUUFBeEIsQ0FBaUMzQixJQUEzQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXBDMkIsZUFBSzRCLEk7O2tCQUFuQm5DLEsiLCJmaWxlIjoicmVxdWlyZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICAgIFxyXG4gICAgaW1wb3J0IGluZm9saXN0IGZyb20gJy4uL2NvbXBvbmVudHMvaW5mb2xpc3QnXHJcbiAgICBpbXBvcnQgc2VhcmNoYmFyIGZyb20gJy4uL2NvbXBvbmVudHMvc2VhcmNoYmFyJ1xyXG5cclxuICAgIGNvbnN0IHNsaWRlcldpZHRoID0gOTY7IC8vIOmcgOimgeiuvue9rnNsaWRlcueahOWuveW6pu+8jOeUqOS6juiuoeeul+S4remXtOS9jee9rlxyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvYXN0IGV4dGVuZHMgd2VweS5wYWdlIHtcclxuXHJcbiAgICAgICAgY29uZmlnPXtcclxuICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDon5Zyw5pa56ZyA5rGCJ1xyXG4gICAgICAgIH1cclxuICAgICAgICBkYXRhID0ge1xyXG4gICAgICAgICAgICBjbGFzc2lmeTon5Zyw5pa56ZyA5rGCJyxcclxuICAgICAgICAgICAgZmlkOicyJyxcclxuICAgICAgICAgICAgY2F0ZWdvcnk6J+WcsOaWuemcgOaxgicsXHJcbiAgICAgICAgICAgIHJvbGU6TnVtYmVyXHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiaW5mb2xpc3RcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOmZpZC5zeW5jXCI6XCJmaWRcIixcInYtYmluZDpjbGFzc2lmeS5zeW5jXCI6XCJjbGFzc2lmeVwiLFwiY2xhc3NcIjpcImxpc3RcIn0sXCJzZWFyY2hiYXJcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOmZpZC5zeW5jXCI6XCJmaWRcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzPXtcclxuICAgICAgICBcclxuICAgICAgICAgIGluZm9saXN0OmluZm9saXN0LFxyXG4gICAgICAgICAgc2VhcmNoYmFyOnNlYXJjaGJhclxyXG4gICAgICAgfVxyXG4gICAgICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgICAgICAgIHRhYkNsaWNrIChlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNsaWRlck9mZnNldCA9IGUuY3VycmVudFRhcmdldC5vZmZzZXRMZWZ0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVJbmRleCA9IGUuY3VycmVudFRhcmdldC5pZDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2xpY2soZSl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKVxyXG4gICAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7dXJsOidwdWJsaXNoP2ZpZD0nK2UudGFyZ2V0LmlkKycmY2F0ZWdvcnk9Jyt0aGlzLmNhdGVnb3J5fSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXN5bmMgb25Mb2FkICgpIHtcclxuICAgICAgICAgICAgbGV0IHJlcyA9IGF3YWl0IHdlcHkuZ2V0U3lzdGVtSW5mbygpO1xyXG4gICAgICAgICAgICAgLy90aGlzLnNsaWRlckxlZnQgPSAocmVzLndpbmRvd1dpZHRoIC8gdGhpcy50YWJzLmxlbmd0aCAtIHNsaWRlcldpZHRoKSAvIDI7XHJcbiAgICAgICAgICAgIC8vdGhpcy5zbGlkZXJPZmZzZXQgPSByZXMud2luZG93V2lkdGggLyB0aGlzLnRhYnMubGVuZ3RoICogdGhpcy5hY3RpdmVJbmRleDtcclxuICAgICAgICAgICAgdGhpcy5yb2xlPXRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnVzZXJpbmZvLnJvbGVcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiJdfQ==