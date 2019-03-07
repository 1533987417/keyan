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
            navigationBarTitleText: '互动交流'
        }, _this.data = {
            tabs: ['学术杂论', '合作需求', '问题求助'],
            activeIndex: 0,
            sliderOffset: 0,
            sliderLeft: 0,
            fid: '1',
            classify1: '学术杂论',
            classify2: '合作需求',
            classify3: '问题求助',
            role: Number,
            category: ''

        }, _this.$repeat = {}, _this.$props = { "infolist1": { "style": "margin-top:100rpx", "v-bind:classify.sync": "classify1", "v-bind:fid.sync": "fid" }, "infolist2": { "v-bind:classify.sync": "classify2", "v-bind:fid.sync": "fid" }, "infolist3": { "v-bind:classify.sync": "classify3", "v-bind:fid.sync": "fid" }, "searchbar": { "xmlns:v-bind": "", "v-bind:fid.sync": "fid" } }, _this.$events = {}, _this.components = {

            infolist1: _infolist2.default,
            infolist2: _infolist2.default,
            infolist3: _infolist2.default,

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
                                console.log(_data.subject);

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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Toast , 'pages/interaction'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludGVyYWN0aW9uLmpzIl0sIm5hbWVzIjpbInNsaWRlcldpZHRoIiwiVG9hc3QiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInRhYnMiLCJhY3RpdmVJbmRleCIsInNsaWRlck9mZnNldCIsInNsaWRlckxlZnQiLCJmaWQiLCJjbGFzc2lmeTEiLCJjbGFzc2lmeTIiLCJjbGFzc2lmeTMiLCJyb2xlIiwiTnVtYmVyIiwiY2F0ZWdvcnkiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJpbmZvbGlzdDEiLCJpbmZvbGlzdDIiLCJpbmZvbGlzdDMiLCJzZWFyY2hiYXIiLCJtZXRob2RzIiwidGFiQ2xpY2siLCJlIiwiY3VycmVudFRhcmdldCIsIm9mZnNldExlZnQiLCJpZCIsImNsaWNrIiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsInd4IiwibmF2aWdhdGVUbyIsInVybCIsImdldFN5c3RlbUluZm8iLCJyZXMiLCIkcGFyZW50IiwiZ2xvYmFsRGF0YSIsInVzZXJpbmZvIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDSTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsY0FBYyxFQUFwQixDLENBQXdCOztJQUVIQyxLOzs7Ozs7Ozs7Ozs7Ozt3TEFFakJDLE0sR0FBTztBQUNIQyxvQ0FBdUI7QUFEcEIsUyxRQUdQQyxJLEdBQU87QUFDSEMsa0JBQU0sQ0FBQyxNQUFELEVBQVMsTUFBVCxFQUFpQixNQUFqQixDQURIO0FBRUhDLHlCQUFhLENBRlY7QUFHSEMsMEJBQWMsQ0FIWDtBQUlIQyx3QkFBWSxDQUpUO0FBS0hDLGlCQUFJLEdBTEQ7QUFNSEMsdUJBQVUsTUFOUDtBQU9IQyx1QkFBVSxNQVBQO0FBUUhDLHVCQUFVLE1BUlA7QUFTSEMsa0JBQUtDLE1BVEY7QUFVSEMsc0JBQVM7O0FBVk4sUyxRQWNUQyxPLEdBQVUsRSxRQUNoQkMsTSxHQUFTLEVBQUMsYUFBWSxFQUFDLFNBQVEsbUJBQVQsRUFBNkIsd0JBQXVCLFdBQXBELEVBQWdFLG1CQUFrQixLQUFsRixFQUFiLEVBQXNHLGFBQVksRUFBQyx3QkFBdUIsV0FBeEIsRUFBb0MsbUJBQWtCLEtBQXRELEVBQWxILEVBQStLLGFBQVksRUFBQyx3QkFBdUIsV0FBeEIsRUFBb0MsbUJBQWtCLEtBQXRELEVBQTNMLEVBQXdQLGFBQVksRUFBQyxnQkFBZSxFQUFoQixFQUFtQixtQkFBa0IsS0FBckMsRUFBcFEsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQVc7O0FBRUZDLHlDQUZFO0FBR0ZDLHlDQUhFO0FBSUZDLHlDQUpFOztBQU9GQztBQVBFLFMsUUFTSkMsTyxHQUFVO0FBQ05DLG9CQURNLG9CQUNJQyxDQURKLEVBQ087QUFDVCxxQkFBS25CLFlBQUwsR0FBb0JtQixFQUFFQyxhQUFGLENBQWdCQyxVQUFwQztBQUNBLHFCQUFLdEIsV0FBTCxHQUFtQm9CLEVBQUVDLGFBQUYsQ0FBZ0JFLEVBQW5DO0FBQ0gsYUFKSztBQUtOQyxpQkFMTSxpQkFLQUosQ0FMQSxFQUtFO0FBQ0pLLHdCQUFRQyxHQUFSLENBQVlOLEVBQUVPLE1BQUYsQ0FBU0osRUFBckI7QUFDQUUsd0JBQVFDLEdBQVIsQ0FBWU4sQ0FBWjtBQUNBUSxtQkFBR0MsVUFBSCxDQUFjLEVBQUNDLEtBQUksaUJBQWVWLEVBQUVPLE1BQUYsQ0FBU0osRUFBeEIsR0FBMkIsWUFBM0IsR0FBd0MsS0FBS2QsUUFBbEQsRUFBZDtBQUNIO0FBVEssUzs7Ozs7Ozs7Ozs7Ozt1Q0FjVSxlQUFLc0IsYUFBTCxFOzs7QUFBWkMsbUM7O0FBQ0g7O0FBRUQscUNBQUt6QixJQUFMLEdBQVUsS0FBSzBCLE9BQUwsQ0FBYUMsVUFBYixDQUF3QkMsUUFBeEIsQ0FBaUM1QixJQUEzQztBQUNBa0Isd0NBQVFDLEdBQVI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFqRDJCLGVBQUtVLEk7O2tCQUFuQnpDLEsiLCJmaWxlIjoiaW50ZXJhY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgICBpbXBvcnQge3N1YmplY3R9IGZyb20gJy4uL2RhdGEvZGF0YSdcclxuICAgIGltcG9ydCBpbmZvbGlzdCBmcm9tICcuLi9jb21wb25lbnRzL2luZm9saXN0J1xyXG4gICAgaW1wb3J0IHNlYXJjaGJhciBmcm9tICcuLi9jb21wb25lbnRzL3NlYXJjaGJhcidcclxuXHJcbiAgICBjb25zdCBzbGlkZXJXaWR0aCA9IDk2OyAvLyDpnIDopoHorr7nva5zbGlkZXLnmoTlrr3luqbvvIznlKjkuo7orqHnrpfkuK3pl7TkvY3nva5cclxuXHJcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBUb2FzdCBleHRlbmRzIHdlcHkucGFnZSB7XHJcblxyXG4gICAgICAgIGNvbmZpZz17XHJcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6J+S6kuWKqOS6pOa1gSdcclxuICAgICAgICB9XHJcbiAgICAgICAgZGF0YSA9IHtcclxuICAgICAgICAgICAgdGFiczogWyflrabmnK/mnYLorronLCAn5ZCI5L2c6ZyA5rGCJywgJ+mXrumimOaxguWKqSddLFxyXG4gICAgICAgICAgICBhY3RpdmVJbmRleDogMCxcclxuICAgICAgICAgICAgc2xpZGVyT2Zmc2V0OiAwLFxyXG4gICAgICAgICAgICBzbGlkZXJMZWZ0OiAwLFxyXG4gICAgICAgICAgICBmaWQ6JzEnLFxyXG4gICAgICAgICAgICBjbGFzc2lmeTE6J+Wtpuacr+adguiuuicsXHJcbiAgICAgICAgICAgIGNsYXNzaWZ5Mjon5ZCI5L2c6ZyA5rGCJyxcclxuICAgICAgICAgICAgY2xhc3NpZnkzOifpl67popjmsYLliqknLFxyXG4gICAgICAgICAgICByb2xlOk51bWJlcixcclxuICAgICAgICAgICAgY2F0ZWdvcnk6JycsXHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiaW5mb2xpc3QxXCI6e1wic3R5bGVcIjpcIm1hcmdpbi10b3A6MTAwcnB4XCIsXCJ2LWJpbmQ6Y2xhc3NpZnkuc3luY1wiOlwiY2xhc3NpZnkxXCIsXCJ2LWJpbmQ6ZmlkLnN5bmNcIjpcImZpZFwifSxcImluZm9saXN0MlwiOntcInYtYmluZDpjbGFzc2lmeS5zeW5jXCI6XCJjbGFzc2lmeTJcIixcInYtYmluZDpmaWQuc3luY1wiOlwiZmlkXCJ9LFwiaW5mb2xpc3QzXCI6e1widi1iaW5kOmNsYXNzaWZ5LnN5bmNcIjpcImNsYXNzaWZ5M1wiLFwidi1iaW5kOmZpZC5zeW5jXCI6XCJmaWRcIn0sXCJzZWFyY2hiYXJcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOmZpZC5zeW5jXCI6XCJmaWRcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzPXtcclxuICAgICAgICBcclxuICAgICAgICAgIGluZm9saXN0MTppbmZvbGlzdCxcclxuICAgICAgICAgIGluZm9saXN0MjppbmZvbGlzdCxcclxuICAgICAgICAgIGluZm9saXN0MzppbmZvbGlzdCxcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBzZWFyY2hiYXI6c2VhcmNoYmFyXHJcbiAgICAgICB9XHJcbiAgICAgICAgbWV0aG9kcyA9IHtcclxuICAgICAgICAgICAgdGFiQ2xpY2sgKGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2xpZGVyT2Zmc2V0ID0gZS5jdXJyZW50VGFyZ2V0Lm9mZnNldExlZnQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmlkO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjbGljayhlKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LmlkKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7dXJsOidwdWJsaXNoP2ZpZD0nK2UudGFyZ2V0LmlkKycmY2F0ZWdvcnk9Jyt0aGlzLmNhdGVnb3J5fSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGFzeW5jIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCB3ZXB5LmdldFN5c3RlbUluZm8oKTtcclxuICAgICAgICAgICAgIC8qdGhpcy5zbGlkZXJMZWZ0ID0gKHJlcy53aW5kb3dXaWR0aCAvIHRoaXMudGFicy5sZW5ndGggLSBzbGlkZXJXaWR0aCkgLyAyO1xyXG4gICAgICAgICAgICB0aGlzLnNsaWRlck9mZnNldCA9IHJlcy53aW5kb3dXaWR0aCAvIHRoaXMudGFicy5sZW5ndGggKiB0aGlzLmFjdGl2ZUluZGV4OyovXHJcbiAgICAgICAgICAgIHRoaXMucm9sZT10aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS51c2VyaW5mby5yb2xlXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHN1YmplY3QpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4iXX0=