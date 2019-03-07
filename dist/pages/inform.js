'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _infolist = require('./../components/infolist.js');

var _infolist2 = _interopRequireDefault(_infolist);

var _newlist = require('./../components/newlist.js');

var _newlist2 = _interopRequireDefault(_newlist);

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
            navigationBarTitleText: '科研通知'
        }, _this.data = {
            tabs: ['项目', '成果', '科研', '其他', '校内'],
            activeIndex: 0,
            sliderOffset: 0,
            sliderLeft: 0,
            classify1: '项目',
            classify2: '成果',
            classify3: '科研通知',
            classify4: '其他',
            fid: '45',
            category: '科研通知',
            role: Number

        }, _this.$repeat = {}, _this.$props = { "inform1": { "v-bind:classify.sync": "classify1", "v-bind:fid.sync": "fid" }, "inform2": { "v-bind:classify.sync": "classify2", "v-bind:fid.sync": "fid" }, "inform3": { "v-bind:classify.sync": "classify3", "v-bind:fid.sync": "fid" }, "inform4": { "v-bind:classify.sync": "classify4", "v-bind:fid.sync": "fid" }, "searchbar": { "xmlns:v-bind": "", "v-bind:fid.sync": "fid" } }, _this.$events = {}, _this.components = {

            inform1: _infolist2.default,
            inform2: _infolist2.default,
            inform3: _infolist2.default,
            inform4: _infolist2.default,
            newlist: _newlist2.default,
            searchbar: _searchbar2.default
        }, _this.methods = {
            tabClick: function tabClick(e) {
                this.sliderOffset = e.currentTarget.offsetLeft;
                this.activeIndex = e.currentTarget.id;
            },
            click: function click(e) {
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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Toast , 'pages/inform'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZm9ybS5qcyJdLCJuYW1lcyI6WyJzbGlkZXJXaWR0aCIsIlRvYXN0IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJ0YWJzIiwiYWN0aXZlSW5kZXgiLCJzbGlkZXJPZmZzZXQiLCJzbGlkZXJMZWZ0IiwiY2xhc3NpZnkxIiwiY2xhc3NpZnkyIiwiY2xhc3NpZnkzIiwiY2xhc3NpZnk0IiwiZmlkIiwiY2F0ZWdvcnkiLCJyb2xlIiwiTnVtYmVyIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiaW5mb3JtMSIsImluZm9ybTIiLCJpbmZvcm0zIiwiaW5mb3JtNCIsIm5ld2xpc3QiLCJzZWFyY2hiYXIiLCJtZXRob2RzIiwidGFiQ2xpY2siLCJlIiwiY3VycmVudFRhcmdldCIsIm9mZnNldExlZnQiLCJpZCIsImNsaWNrIiwid3giLCJuYXZpZ2F0ZVRvIiwidXJsIiwidGFyZ2V0IiwiZ2V0U3lzdGVtSW5mbyIsInJlcyIsIiRwYXJlbnQiLCJnbG9iYWxEYXRhIiwidXNlcmluZm8iLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNJOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGNBQWMsRUFBcEIsQyxDQUF3Qjs7SUFFSEMsSzs7Ozs7Ozs7Ozs7Ozs7d0xBRWpCQyxNLEdBQU87QUFDSEMsb0NBQXVCO0FBRHBCLFMsUUFHUEMsSSxHQUFPO0FBQ0hDLGtCQUFNLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYSxJQUFiLEVBQWtCLElBQWxCLEVBQXVCLElBQXZCLENBREg7QUFFSEMseUJBQWEsQ0FGVjtBQUdIQywwQkFBYyxDQUhYO0FBSUhDLHdCQUFZLENBSlQ7QUFLSEMsdUJBQVUsSUFMUDtBQU1IQyx1QkFBVSxJQU5QO0FBT0hDLHVCQUFVLE1BUFA7QUFRSEMsdUJBQVUsSUFSUDtBQVNIQyxpQkFBSSxJQVREO0FBVUhDLHNCQUFTLE1BVk47QUFXSEMsa0JBQUtDOztBQVhGLFMsUUFnQlRDLE8sR0FBVSxFLFFBQ2hCQyxNLEdBQVMsRUFBQyxXQUFVLEVBQUMsd0JBQXVCLFdBQXhCLEVBQW9DLG1CQUFrQixLQUF0RCxFQUFYLEVBQXdFLFdBQVUsRUFBQyx3QkFBdUIsV0FBeEIsRUFBb0MsbUJBQWtCLEtBQXRELEVBQWxGLEVBQStJLFdBQVUsRUFBQyx3QkFBdUIsV0FBeEIsRUFBb0MsbUJBQWtCLEtBQXRELEVBQXpKLEVBQXNOLFdBQVUsRUFBQyx3QkFBdUIsV0FBeEIsRUFBb0MsbUJBQWtCLEtBQXRELEVBQWhPLEVBQTZSLGFBQVksRUFBQyxnQkFBZSxFQUFoQixFQUFtQixtQkFBa0IsS0FBckMsRUFBelMsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQVc7O0FBRUZDLHVDQUZFO0FBR0ZDLHVDQUhFO0FBSUZDLHVDQUpFO0FBS0ZDLHVDQUxFO0FBTUZDLHNDQU5FO0FBT0ZDO0FBUEUsUyxRQVNKQyxPLEdBQVU7QUFDTkMsb0JBRE0sb0JBQ0lDLENBREosRUFDTztBQUNULHFCQUFLdEIsWUFBTCxHQUFvQnNCLEVBQUVDLGFBQUYsQ0FBZ0JDLFVBQXBDO0FBQ0EscUJBQUt6QixXQUFMLEdBQW1CdUIsRUFBRUMsYUFBRixDQUFnQkUsRUFBbkM7QUFDSCxhQUpLO0FBS05DLGlCQUxNLGlCQUtBSixDQUxBLEVBS0U7QUFDSkssbUJBQUdDLFVBQUgsQ0FBYyxFQUFDQyxLQUFJLGlCQUFlUCxFQUFFUSxNQUFGLENBQVNMLEVBQXhCLEdBQTJCLFlBQTNCLEdBQXdDLEtBQUtsQixRQUFsRCxFQUFkO0FBQ0g7QUFQSyxTOzs7Ozs7Ozs7Ozs7O3VDQVdVLGVBQUt3QixhQUFMLEU7OztBQUFaQyxtQzs7O0FBRUo7O0FBRUMscUNBQUt4QixJQUFMLEdBQVUsS0FBS3lCLE9BQUwsQ0FBYUMsVUFBYixDQUF3QkMsUUFBeEIsQ0FBaUMzQixJQUEzQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWhEMEIsZUFBSzRCLEk7O2tCQUFuQjFDLEsiLCJmaWxlIjoiaW5mb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gICAgXHJcbiAgICBpbXBvcnQgaW5mb2xpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9pbmZvbGlzdCdcclxuICAgIGltcG9ydCBuZXdsaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvbmV3bGlzdCdcclxuICAgIFxyXG4gICAgaW1wb3J0IHNlYXJjaGJhciBmcm9tICcuLi9jb21wb25lbnRzL3NlYXJjaGJhcidcclxuXHJcbiAgICBjb25zdCBzbGlkZXJXaWR0aCA9IDk2OyAvLyDpnIDopoHorr7nva5zbGlkZXLnmoTlrr3luqbvvIznlKjkuo7orqHnrpfkuK3pl7TkvY3nva5cclxuXHJcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBUb2FzdCBleHRlbmRzIHdlcHkucGFnZSB7XHJcblxyXG4gICAgICAgIGNvbmZpZz17XHJcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6J+enkeeglOmAmuefpSdcclxuICAgICAgICB9XHJcbiAgICAgICAgZGF0YSA9IHtcclxuICAgICAgICAgICAgdGFiczogWyfpobnnm64nLCAn5oiQ5p6cJywgJ+enkeeglCcsJ+WFtuS7licsJ+agoeWGhSddLFxyXG4gICAgICAgICAgICBhY3RpdmVJbmRleDogMCxcclxuICAgICAgICAgICAgc2xpZGVyT2Zmc2V0OiAwLFxyXG4gICAgICAgICAgICBzbGlkZXJMZWZ0OiAwLFxyXG4gICAgICAgICAgICBjbGFzc2lmeTE6J+mhueebricsXHJcbiAgICAgICAgICAgIGNsYXNzaWZ5Mjon5oiQ5p6cJyxcclxuICAgICAgICAgICAgY2xhc3NpZnkzOifnp5HnoJTpgJrnn6UnLFxyXG4gICAgICAgICAgICBjbGFzc2lmeTQ6J+WFtuS7licsXHJcbiAgICAgICAgICAgIGZpZDonNDUnLFxyXG4gICAgICAgICAgICBjYXRlZ29yeTon56eR56CU6YCa55+lJyxcclxuICAgICAgICAgICAgcm9sZTpOdW1iZXIsXHJcblxyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcImluZm9ybTFcIjp7XCJ2LWJpbmQ6Y2xhc3NpZnkuc3luY1wiOlwiY2xhc3NpZnkxXCIsXCJ2LWJpbmQ6ZmlkLnN5bmNcIjpcImZpZFwifSxcImluZm9ybTJcIjp7XCJ2LWJpbmQ6Y2xhc3NpZnkuc3luY1wiOlwiY2xhc3NpZnkyXCIsXCJ2LWJpbmQ6ZmlkLnN5bmNcIjpcImZpZFwifSxcImluZm9ybTNcIjp7XCJ2LWJpbmQ6Y2xhc3NpZnkuc3luY1wiOlwiY2xhc3NpZnkzXCIsXCJ2LWJpbmQ6ZmlkLnN5bmNcIjpcImZpZFwifSxcImluZm9ybTRcIjp7XCJ2LWJpbmQ6Y2xhc3NpZnkuc3luY1wiOlwiY2xhc3NpZnk0XCIsXCJ2LWJpbmQ6ZmlkLnN5bmNcIjpcImZpZFwifSxcInNlYXJjaGJhclwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6ZmlkLnN5bmNcIjpcImZpZFwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHM9e1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgaW5mb3JtMTppbmZvbGlzdCxcclxuICAgICAgICAgIGluZm9ybTI6aW5mb2xpc3QsXHJcbiAgICAgICAgICBpbmZvcm0zOmluZm9saXN0LFxyXG4gICAgICAgICAgaW5mb3JtNDppbmZvbGlzdCxcclxuICAgICAgICAgIG5ld2xpc3Q6bmV3bGlzdCxcclxuICAgICAgICAgIHNlYXJjaGJhcjpzZWFyY2hiYXJcclxuICAgICAgIH1cclxuICAgICAgICBtZXRob2RzID0ge1xyXG4gICAgICAgICAgICB0YWJDbGljayAoZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zbGlkZXJPZmZzZXQgPSBlLmN1cnJlbnRUYXJnZXQub2Zmc2V0TGVmdDtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlSW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuaWQ7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNsaWNrKGUpe1xyXG4gICAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7dXJsOidwdWJsaXNoP2ZpZD0nK2UudGFyZ2V0LmlkKycmY2F0ZWdvcnk9Jyt0aGlzLmNhdGVnb3J5fSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXN5bmMgb25Mb2FkICgpIHtcclxuICAgICAgICAgICAgbGV0IHJlcyA9IGF3YWl0IHdlcHkuZ2V0U3lzdGVtSW5mbygpO1xyXG5cclxuICAgICAgICAgICAgLyp0aGlzLnNsaWRlckxlZnQgPSAocmVzLndpbmRvd1dpZHRoIC8gdGhpcy50YWJzLmxlbmd0aCAtIHNsaWRlcldpZHRoKSAvIDI7XHJcbiAgICAgICAgICAgIHRoaXMuc2xpZGVyT2Zmc2V0ID0gcmVzLndpbmRvd1dpZHRoIC8gdGhpcy50YWJzLmxlbmd0aCAqIHRoaXMuYWN0aXZlSW5kZXg7Ki9cclxuICAgICAgICAgICAgIHRoaXMucm9sZT10aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS51c2VyaW5mby5yb2xlXHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuIl19