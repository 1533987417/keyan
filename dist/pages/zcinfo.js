'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _infolist = require('./../components/infolist.js');

var _infolist2 = _interopRequireDefault(_infolist);

var _data = require('./../data/data.js');

var _data2 = _interopRequireDefault(_data);

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
            navigationBarTitleText: '科研政策'
        }, _this.data = {
            tabs: ['学校政策', '国家政策', '地方政策', '科研政策'],
            activeIndex: 0,
            sliderOffset: 0,
            sliderLeft: 0,
            classify1: '学校政策',
            classify2: '国家政策',
            classify3: '地方政策',
            classify4: '科研政策',
            fid: '46',
            category: '科研政策',
            role: Number

        }, _this.$repeat = {}, _this.$props = { "infolist1": { "style": "margin-top:100rpx", "v-bind:classify.sync": "classify1", "v-bind:fid.sync": "fid" }, "infolist2": { "v-bind:classify.sync": "classify2", "v-bind:fid.sync": "fid" }, "infolist3": { "v-bind:classify.sync": "classify3", "v-bind:fid.sync": "fid" }, "infolist4": { "v-bind:classify.sync": "classify4", "v-bind:fid.sync": "fid" }, "searchbar": { "xmlns:v-bind": "", "v-bind:fid.sync": "fid" } }, _this.$events = {}, _this.components = {

            infolist1: _infolist2.default,
            infolist2: _infolist2.default,
            infolist3: _infolist2.default,
            infolist4: _infolist2.default,
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


                                this.sliderLeft = (res.windowWidth / this.tabs.length - sliderWidth) / 2;
                                this.sliderOffset = res.windowWidth / this.tabs.length * this.activeIndex;
                                console.log(this.$parent.globalData.userinfo.role);
                                this.role = this.$parent.globalData.userinfo.role;

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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Toast , 'pages/zcinfo'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInpjaW5mby5qcyJdLCJuYW1lcyI6WyJzbGlkZXJXaWR0aCIsIlRvYXN0IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJ0YWJzIiwiYWN0aXZlSW5kZXgiLCJzbGlkZXJPZmZzZXQiLCJzbGlkZXJMZWZ0IiwiY2xhc3NpZnkxIiwiY2xhc3NpZnkyIiwiY2xhc3NpZnkzIiwiY2xhc3NpZnk0IiwiZmlkIiwiY2F0ZWdvcnkiLCJyb2xlIiwiTnVtYmVyIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiaW5mb2xpc3QxIiwiaW5mb2xpc3QyIiwiaW5mb2xpc3QzIiwiaW5mb2xpc3Q0Iiwic2VhcmNoYmFyIiwibWV0aG9kcyIsInRhYkNsaWNrIiwiZSIsImN1cnJlbnRUYXJnZXQiLCJvZmZzZXRMZWZ0IiwiaWQiLCJjbGljayIsImNvbnNvbGUiLCJsb2ciLCJ3eCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJ0YXJnZXQiLCJnZXRTeXN0ZW1JbmZvIiwicmVzIiwid2luZG93V2lkdGgiLCJsZW5ndGgiLCIkcGFyZW50IiwiZ2xvYmFsRGF0YSIsInVzZXJpbmZvIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDSTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxjQUFjLEVBQXBCLEMsQ0FBd0I7O0lBRUhDLEs7Ozs7Ozs7Ozs7Ozs7O3dMQUVqQkMsTSxHQUFPO0FBQ0hDLG9DQUF1QjtBQURwQixTLFFBR1BDLEksR0FBTztBQUNIQyxrQkFBTSxDQUFDLE1BQUQsRUFBUyxNQUFULEVBQWlCLE1BQWpCLEVBQXdCLE1BQXhCLENBREg7QUFFSEMseUJBQWEsQ0FGVjtBQUdIQywwQkFBYyxDQUhYO0FBSUhDLHdCQUFZLENBSlQ7QUFLSEMsdUJBQVUsTUFMUDtBQU1IQyx1QkFBVSxNQU5QO0FBT0hDLHVCQUFVLE1BUFA7QUFRSEMsdUJBQVUsTUFSUDtBQVNIQyxpQkFBSSxJQVREO0FBVUhDLHNCQUFTLE1BVk47QUFXSEMsa0JBQUtDOztBQVhGLFMsUUFlVEMsTyxHQUFVLEUsUUFDaEJDLE0sR0FBUyxFQUFDLGFBQVksRUFBQyxTQUFRLG1CQUFULEVBQTZCLHdCQUF1QixXQUFwRCxFQUFnRSxtQkFBa0IsS0FBbEYsRUFBYixFQUFzRyxhQUFZLEVBQUMsd0JBQXVCLFdBQXhCLEVBQW9DLG1CQUFrQixLQUF0RCxFQUFsSCxFQUErSyxhQUFZLEVBQUMsd0JBQXVCLFdBQXhCLEVBQW9DLG1CQUFrQixLQUF0RCxFQUEzTCxFQUF3UCxhQUFZLEVBQUMsd0JBQXVCLFdBQXhCLEVBQW9DLG1CQUFrQixLQUF0RCxFQUFwUSxFQUFpVSxhQUFZLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsbUJBQWtCLEtBQXJDLEVBQTdVLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFXOztBQUVGQyx5Q0FGRTtBQUdGQyx5Q0FIRTtBQUlGQyx5Q0FKRTtBQUtGQyx5Q0FMRTtBQU1GQztBQU5FLFMsUUFRSkMsTyxHQUFVO0FBQ05DLG9CQURNLG9CQUNJQyxDQURKLEVBQ087QUFDVCxxQkFBS3JCLFlBQUwsR0FBb0JxQixFQUFFQyxhQUFGLENBQWdCQyxVQUFwQztBQUNBLHFCQUFLeEIsV0FBTCxHQUFtQnNCLEVBQUVDLGFBQUYsQ0FBZ0JFLEVBQW5DO0FBQ0gsYUFKSztBQUtOQyxpQkFMTSxpQkFLQUosQ0FMQSxFQUtFOztBQUVKSyx3QkFBUUMsR0FBUixDQUFZTixDQUFaO0FBQ0FPLG1CQUFHQyxVQUFILENBQWMsRUFBQ0MsS0FBSSxpQkFBZVQsRUFBRVUsTUFBRixDQUFTUCxFQUF4QixHQUEyQixZQUEzQixHQUF3QyxLQUFLakIsUUFBbEQsRUFBZDtBQUNIO0FBVEssUzs7Ozs7Ozs7Ozs7Ozt1Q0FjVSxlQUFLeUIsYUFBTCxFOzs7QUFBWkMsbUM7OztBQUVKLHFDQUFLaEMsVUFBTCxHQUFrQixDQUFDZ0MsSUFBSUMsV0FBSixHQUFrQixLQUFLcEMsSUFBTCxDQUFVcUMsTUFBNUIsR0FBcUMxQyxXQUF0QyxJQUFxRCxDQUF2RTtBQUNBLHFDQUFLTyxZQUFMLEdBQW9CaUMsSUFBSUMsV0FBSixHQUFrQixLQUFLcEMsSUFBTCxDQUFVcUMsTUFBNUIsR0FBcUMsS0FBS3BDLFdBQTlEO0FBQ0EyQix3Q0FBUUMsR0FBUixDQUFZLEtBQUtTLE9BQUwsQ0FBYUMsVUFBYixDQUF3QkMsUUFBeEIsQ0FBaUM5QixJQUE3QztBQUNBLHFDQUFLQSxJQUFMLEdBQVksS0FBSzRCLE9BQUwsQ0FBYUMsVUFBYixDQUF3QkMsUUFBeEIsQ0FBaUM5QixJQUE3Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWxEMkIsZUFBSytCLEk7O2tCQUFuQjdDLEsiLCJmaWxlIjoiemNpbmZvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gICAgXHJcbiAgICBpbXBvcnQgaW5mb2xpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9pbmZvbGlzdCdcclxuICAgIGltcG9ydCBuZXdzbGlzdCBmcm9tICcuLi9kYXRhL2RhdGEnXHJcbiAgICBpbXBvcnQgc2VhcmNoYmFyIGZyb20gJy4uL2NvbXBvbmVudHMvc2VhcmNoYmFyJ1xyXG5cclxuICAgIGNvbnN0IHNsaWRlcldpZHRoID0gOTY7IC8vIOmcgOimgeiuvue9rnNsaWRlcueahOWuveW6pu+8jOeUqOS6juiuoeeul+S4remXtOS9jee9rlxyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvYXN0IGV4dGVuZHMgd2VweS5wYWdlIHtcclxuXHJcbiAgICAgICAgY29uZmlnPXtcclxuICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDon56eR56CU5pS/562WJ1xyXG4gICAgICAgIH1cclxuICAgICAgICBkYXRhID0ge1xyXG4gICAgICAgICAgICB0YWJzOiBbJ+WtpuagoeaUv+etlicsICflm73lrrbmlL/nrZYnLCAn5Zyw5pa55pS/562WJywn56eR56CU5pS/562WJ10sXHJcbiAgICAgICAgICAgIGFjdGl2ZUluZGV4OiAwLFxyXG4gICAgICAgICAgICBzbGlkZXJPZmZzZXQ6IDAsXHJcbiAgICAgICAgICAgIHNsaWRlckxlZnQ6IDAsXHJcbiAgICAgICAgICAgIGNsYXNzaWZ5MTon5a2m5qCh5pS/562WJyxcclxuICAgICAgICAgICAgY2xhc3NpZnkyOiflm73lrrbmlL/nrZYnLFxyXG4gICAgICAgICAgICBjbGFzc2lmeTM6J+WcsOaWueaUv+etlicsXHJcbiAgICAgICAgICAgIGNsYXNzaWZ5NDon56eR56CU5pS/562WJyxcclxuICAgICAgICAgICAgZmlkOic0NicsXHJcbiAgICAgICAgICAgIGNhdGVnb3J5Oifnp5HnoJTmlL/nrZYnLFxyXG4gICAgICAgICAgICByb2xlOk51bWJlclxyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcImluZm9saXN0MVwiOntcInN0eWxlXCI6XCJtYXJnaW4tdG9wOjEwMHJweFwiLFwidi1iaW5kOmNsYXNzaWZ5LnN5bmNcIjpcImNsYXNzaWZ5MVwiLFwidi1iaW5kOmZpZC5zeW5jXCI6XCJmaWRcIn0sXCJpbmZvbGlzdDJcIjp7XCJ2LWJpbmQ6Y2xhc3NpZnkuc3luY1wiOlwiY2xhc3NpZnkyXCIsXCJ2LWJpbmQ6ZmlkLnN5bmNcIjpcImZpZFwifSxcImluZm9saXN0M1wiOntcInYtYmluZDpjbGFzc2lmeS5zeW5jXCI6XCJjbGFzc2lmeTNcIixcInYtYmluZDpmaWQuc3luY1wiOlwiZmlkXCJ9LFwiaW5mb2xpc3Q0XCI6e1widi1iaW5kOmNsYXNzaWZ5LnN5bmNcIjpcImNsYXNzaWZ5NFwiLFwidi1iaW5kOmZpZC5zeW5jXCI6XCJmaWRcIn0sXCJzZWFyY2hiYXJcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOmZpZC5zeW5jXCI6XCJmaWRcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzPXtcclxuICAgICAgICBcclxuICAgICAgICAgIGluZm9saXN0MTppbmZvbGlzdCxcclxuICAgICAgICAgIGluZm9saXN0MjppbmZvbGlzdCxcclxuICAgICAgICAgIGluZm9saXN0MzppbmZvbGlzdCxcclxuICAgICAgICAgIGluZm9saXN0NDppbmZvbGlzdCxcclxuICAgICAgICAgIHNlYXJjaGJhcjpzZWFyY2hiYXJcclxuICAgICAgIH1cclxuICAgICAgICBtZXRob2RzID0ge1xyXG4gICAgICAgICAgICB0YWJDbGljayAoZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zbGlkZXJPZmZzZXQgPSBlLmN1cnJlbnRUYXJnZXQub2Zmc2V0TGVmdDtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlSW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuaWQ7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNsaWNrKGUpe1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe3VybDoncHVibGlzaD9maWQ9JytlLnRhcmdldC5pZCsnJmNhdGVnb3J5PScrdGhpcy5jYXRlZ29yeX0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGFzeW5jIG9uTG9hZCAoKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgd2VweS5nZXRTeXN0ZW1JbmZvKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNsaWRlckxlZnQgPSAocmVzLndpbmRvd1dpZHRoIC8gdGhpcy50YWJzLmxlbmd0aCAtIHNsaWRlcldpZHRoKSAvIDI7XHJcbiAgICAgICAgICAgIHRoaXMuc2xpZGVyT2Zmc2V0ID0gcmVzLndpbmRvd1dpZHRoIC8gdGhpcy50YWJzLmxlbmd0aCAqIHRoaXMuYWN0aXZlSW5kZXg7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnVzZXJpbmZvLnJvbGUpXHJcbiAgICAgICAgICAgIHRoaXMucm9sZSA9IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnVzZXJpbmZvLnJvbGVcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxuIl19