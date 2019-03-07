'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _data = require('./../data/data.js');

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
            navigationBarTitleText: '办事指南'
        }, _this.data = {
            tabs: ['人员分工', '办事流程'],
            activeIndex: 0,
            sliderOffset: 0,
            sliderLeft: 0,
            fid: '49',
            classify1: '人员分工',
            classify2: '办事流程',

            role: Number,
            category: ''

        }, _this.$repeat = {}, _this.$props = { "infolist1": { "style": "margin-top:100rpx", "v-bind:classify.sync": "classify1", "v-bind:fid.sync": "fid" }, "infolist2": { "v-bind:classify.sync": "classify2", "v-bind:fid.sync": "fid" }, "searchbar": { "xmlns:v-bind": "", "v-bind:fid.sync": "fid" } }, _this.$events = {}, _this.components = {

            infolist1: _infolist2.default,
            infolist2: _infolist2.default,

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

                                this.sliderLeft = (res.windowWidth / this.tabs.length - sliderWidth) / 2;
                                this.sliderOffset = res.windowWidth / this.tabs.length * this.activeIndex;
                                this.role = this.$parent.globalData.userinfo.role;
                                console.log(_data.subject);

                            case 7:
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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Toast , 'pages/banshi'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbnNoaS5qcyJdLCJuYW1lcyI6WyJzbGlkZXJXaWR0aCIsIlRvYXN0IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJ0YWJzIiwiYWN0aXZlSW5kZXgiLCJzbGlkZXJPZmZzZXQiLCJzbGlkZXJMZWZ0IiwiZmlkIiwiY2xhc3NpZnkxIiwiY2xhc3NpZnkyIiwicm9sZSIsIk51bWJlciIsImNhdGVnb3J5IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiaW5mb2xpc3QxIiwiaW5mb2xpc3QyIiwic2VhcmNoYmFyIiwibWV0aG9kcyIsInRhYkNsaWNrIiwiZSIsImN1cnJlbnRUYXJnZXQiLCJvZmZzZXRMZWZ0IiwiaWQiLCJjbGljayIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJ3eCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJnZXRTeXN0ZW1JbmZvIiwicmVzIiwid2luZG93V2lkdGgiLCJsZW5ndGgiLCIkcGFyZW50IiwiZ2xvYmFsRGF0YSIsInVzZXJpbmZvIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDSTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsY0FBYyxFQUFwQixDLENBQXdCOztJQUVIQyxLOzs7Ozs7Ozs7Ozs7Ozt3TEFFakJDLE0sR0FBTztBQUNIQyxvQ0FBdUI7QUFEcEIsUyxRQUdQQyxJLEdBQU87QUFDSEMsa0JBQU0sQ0FBQyxNQUFELEVBQVMsTUFBVCxDQURIO0FBRUhDLHlCQUFhLENBRlY7QUFHSEMsMEJBQWMsQ0FIWDtBQUlIQyx3QkFBWSxDQUpUO0FBS0hDLGlCQUFJLElBTEQ7QUFNSEMsdUJBQVUsTUFOUDtBQU9IQyx1QkFBVSxNQVBQOztBQVNIQyxrQkFBS0MsTUFURjtBQVVIQyxzQkFBUzs7QUFWTixTLFFBY1RDLE8sR0FBVSxFLFFBQ2hCQyxNLEdBQVMsRUFBQyxhQUFZLEVBQUMsU0FBUSxtQkFBVCxFQUE2Qix3QkFBdUIsV0FBcEQsRUFBZ0UsbUJBQWtCLEtBQWxGLEVBQWIsRUFBc0csYUFBWSxFQUFDLHdCQUF1QixXQUF4QixFQUFvQyxtQkFBa0IsS0FBdEQsRUFBbEgsRUFBK0ssYUFBWSxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLG1CQUFrQixLQUFyQyxFQUEzTCxFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBVzs7QUFFRkMseUNBRkU7QUFHRkMseUNBSEU7O0FBT0ZDO0FBUEUsUyxRQVNKQyxPLEdBQVU7QUFDTkMsb0JBRE0sb0JBQ0lDLENBREosRUFDTztBQUNULHFCQUFLakIsWUFBTCxHQUFvQmlCLEVBQUVDLGFBQUYsQ0FBZ0JDLFVBQXBDO0FBQ0EscUJBQUtwQixXQUFMLEdBQW1Ca0IsRUFBRUMsYUFBRixDQUFnQkUsRUFBbkM7QUFDSCxhQUpLO0FBS05DLGlCQUxNLGlCQUtBSixDQUxBLEVBS0U7QUFDSkssd0JBQVFDLEdBQVIsQ0FBWU4sRUFBRU8sTUFBRixDQUFTSixFQUFyQjtBQUNBRSx3QkFBUUMsR0FBUixDQUFZTixDQUFaO0FBQ0FRLG1CQUFHQyxVQUFILENBQWMsRUFBQ0MsS0FBSSxpQkFBZVYsRUFBRU8sTUFBRixDQUFTSixFQUF4QixHQUEyQixZQUEzQixHQUF3QyxLQUFLYixRQUFsRCxFQUFkO0FBQ0g7QUFUSyxTOzs7Ozs7Ozs7Ozs7O3VDQWNVLGVBQUtxQixhQUFMLEU7OztBQUFaQyxtQzs7QUFDSCxxQ0FBSzVCLFVBQUwsR0FBa0IsQ0FBQzRCLElBQUlDLFdBQUosR0FBa0IsS0FBS2hDLElBQUwsQ0FBVWlDLE1BQTVCLEdBQXFDdEMsV0FBdEMsSUFBcUQsQ0FBdkU7QUFDRCxxQ0FBS08sWUFBTCxHQUFvQjZCLElBQUlDLFdBQUosR0FBa0IsS0FBS2hDLElBQUwsQ0FBVWlDLE1BQTVCLEdBQXFDLEtBQUtoQyxXQUE5RDtBQUNBLHFDQUFLTSxJQUFMLEdBQVUsS0FBSzJCLE9BQUwsQ0FBYUMsVUFBYixDQUF3QkMsUUFBeEIsQ0FBaUM3QixJQUEzQztBQUNBaUIsd0NBQVFDLEdBQVI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFqRDJCLGVBQUtZLEk7O2tCQUFuQnpDLEsiLCJmaWxlIjoiYmFuc2hpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gICAgaW1wb3J0IHtzdWJqZWN0fSBmcm9tICcuLi9kYXRhL2RhdGEnXHJcbiAgICBpbXBvcnQgaW5mb2xpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9pbmZvbGlzdCdcclxuICAgIGltcG9ydCBzZWFyY2hiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9zZWFyY2hiYXInXHJcblxyXG4gICAgY29uc3Qgc2xpZGVyV2lkdGggPSA5NjsgLy8g6ZyA6KaB6K6+572uc2xpZGVy55qE5a695bqm77yM55So5LqO6K6h566X5Lit6Ze05L2N572uXHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9hc3QgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG5cclxuICAgICAgICBjb25maWc9e1xyXG4gICAgICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0Oiflip7kuovmjIfljZcnXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRhdGEgPSB7XHJcbiAgICAgICAgICAgIHRhYnM6IFsn5Lq65ZGY5YiG5belJywgJ+WKnuS6i+a1geeoiyddLFxyXG4gICAgICAgICAgICBhY3RpdmVJbmRleDogMCxcclxuICAgICAgICAgICAgc2xpZGVyT2Zmc2V0OiAwLFxyXG4gICAgICAgICAgICBzbGlkZXJMZWZ0OiAwLFxyXG4gICAgICAgICAgICBmaWQ6JzQ5JyxcclxuICAgICAgICAgICAgY2xhc3NpZnkxOifkurrlkZjliIblt6UnLFxyXG4gICAgICAgICAgICBjbGFzc2lmeTI6J+WKnuS6i+a1geeoiycsXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByb2xlOk51bWJlcixcclxuICAgICAgICAgICAgY2F0ZWdvcnk6JycsXHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiaW5mb2xpc3QxXCI6e1wic3R5bGVcIjpcIm1hcmdpbi10b3A6MTAwcnB4XCIsXCJ2LWJpbmQ6Y2xhc3NpZnkuc3luY1wiOlwiY2xhc3NpZnkxXCIsXCJ2LWJpbmQ6ZmlkLnN5bmNcIjpcImZpZFwifSxcImluZm9saXN0MlwiOntcInYtYmluZDpjbGFzc2lmeS5zeW5jXCI6XCJjbGFzc2lmeTJcIixcInYtYmluZDpmaWQuc3luY1wiOlwiZmlkXCJ9LFwic2VhcmNoYmFyXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpmaWQuc3luY1wiOlwiZmlkXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cz17XHJcbiAgICAgICAgXHJcbiAgICAgICAgICBpbmZvbGlzdDE6aW5mb2xpc3QsXHJcbiAgICAgICAgICBpbmZvbGlzdDI6aW5mb2xpc3QsXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBzZWFyY2hiYXI6c2VhcmNoYmFyXHJcbiAgICAgICB9XHJcbiAgICAgICAgbWV0aG9kcyA9IHtcclxuICAgICAgICAgICAgdGFiQ2xpY2sgKGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2xpZGVyT2Zmc2V0ID0gZS5jdXJyZW50VGFyZ2V0Lm9mZnNldExlZnQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmlkO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjbGljayhlKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LmlkKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7dXJsOidwdWJsaXNoP2ZpZD0nK2UudGFyZ2V0LmlkKycmY2F0ZWdvcnk9Jyt0aGlzLmNhdGVnb3J5fSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGFzeW5jIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCB3ZXB5LmdldFN5c3RlbUluZm8oKTtcclxuICAgICAgICAgICAgIHRoaXMuc2xpZGVyTGVmdCA9IChyZXMud2luZG93V2lkdGggLyB0aGlzLnRhYnMubGVuZ3RoIC0gc2xpZGVyV2lkdGgpIC8gMjtcclxuICAgICAgICAgICAgdGhpcy5zbGlkZXJPZmZzZXQgPSByZXMud2luZG93V2lkdGggLyB0aGlzLnRhYnMubGVuZ3RoICogdGhpcy5hY3RpdmVJbmRleDtcclxuICAgICAgICAgICAgdGhpcy5yb2xlPXRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnVzZXJpbmZvLnJvbGVcclxuICAgICAgICAgICAgY29uc29sZS5sb2coc3ViamVjdClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiJdfQ==