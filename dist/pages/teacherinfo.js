'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _tip = require('./js/tip.js');

var _tip2 = _interopRequireDefault(_tip);

var _config = require('./js/config.js');

var _config2 = _interopRequireDefault(_config);

var _schoollist = require('./../components/schoollist.js');

var _schoollist2 = _interopRequireDefault(_schoollist);

var _teacherlist = require('./../components/teacherlist.js');

var _teacherlist2 = _interopRequireDefault(_teacherlist);

var _Request = require('./js/Request.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

var Toast = function (_wepy$page) {
    _inherits(Toast, _wepy$page);

    function Toast() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        _classCallCheck(this, Toast);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Toast.__proto__ || Object.getPrototypeOf(Toast)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '教师科研'
        }, _this.data = {
            tabs: ['学院', '教师'],
            activeIndex: 0,
            sliderOffset: 0,
            sliderLeft: 0,
            school: [],
            teacher: []

        }, _this.$repeat = {}, _this.$props = { "schoollist": { "xmlns:v-bind": "", "v-bind:school.sync": "school" }, "teacherlist": { "v-bind:teacher.sync": "teacher" } }, _this.$events = {}, _this.components = {

            schoollist: _schoollist2.default,
            teacherlist: _teacherlist2.default
        }, _this.methods = {
            tabClick: function tabClick(e) {
                console.log(e);
                this.sliderOffset = e.currentTarget.offsetLeft;
                this.activeIndex = e.currentTarget.id;
            },
            getColleges: function getColleges(e) {
                console.log("刷新啦");
            }
        }, _this.events = {
            'getColleges': function () {
                var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
                    var res;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:

                                    _this.activeIndex = 1;
                                    _this.sliderOffset = _this.fuzhu;

                                    console.log(e + "jsahhadhsadh");
                                    _this.$invoke('teacherlist', 'getColleges', e);

                                    /*tip.loading();
                                    wepy.request(config.service.GetCollegeMember+'?College='+e).then((d)=>{
                                    console.log(d.data);
                                    this.teacher=d.data;
                                    tip.loaded();
                                    this.$apply();
                                    })*/
                                    _context.next = 6;
                                    return (0, _Request.wxRequest)('get', _config2.default.service.GetCollegeMember + '?College=' + e);

                                case 6:
                                    res = _context.sent;

                                    _this.teacher = res;

                                    _this.$apply();

                                case 9:
                                case 'end':
                                    return _context.stop();
                            }
                        }
                    }, _callee, _this2);
                }));

                return function getColleges(_x) {
                    return _ref2.apply(this, arguments);
                };
            }()
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Toast, [{
        key: 'onLoad',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var res;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return _wepy2.default.getSystemInfo();

                            case 2:
                                res = _context2.sent;


                                this.sliderLeft = (res.windowWidth / this.tabs.length - sliderWidth) / 2;
                                this.sliderOffset = res.windowWidth / this.tabs.length * this.activeIndex;
                                this.fuzhu = res.windowWidth / 2;
                                console.log('test加载了');
                                //this.school=school.school;
                                //this.teacher=teacher.teacher;

                            case 7:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function onLoad() {
                return _ref3.apply(this, arguments);
            }

            return onLoad;
        }()
    }]);

    return Toast;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Toast , 'pages/teacherinfo'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlYWNoZXJpbmZvLmpzIl0sIm5hbWVzIjpbInNsaWRlcldpZHRoIiwiVG9hc3QiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInRhYnMiLCJhY3RpdmVJbmRleCIsInNsaWRlck9mZnNldCIsInNsaWRlckxlZnQiLCJzY2hvb2wiLCJ0ZWFjaGVyIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwic2Nob29sbGlzdCIsInRlYWNoZXJsaXN0IiwibWV0aG9kcyIsInRhYkNsaWNrIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50VGFyZ2V0Iiwib2Zmc2V0TGVmdCIsImlkIiwiZ2V0Q29sbGVnZXMiLCJldmVudHMiLCJmdXpodSIsIiRpbnZva2UiLCJzZXJ2aWNlIiwiR2V0Q29sbGVnZU1lbWJlciIsInJlcyIsIiRhcHBseSIsImdldFN5c3RlbUluZm8iLCJ3aW5kb3dXaWR0aCIsImxlbmd0aCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0k7Ozs7QUFFQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFJQSxJQUFNQSxjQUFjLEVBQXBCLEMsQ0FBd0I7O0lBRUhDLEs7Ozs7Ozs7Ozs7Ozs7Ozt3TEFFakJDLE0sR0FBTztBQUNIQyxvQ0FBdUI7QUFEcEIsUyxRQUdQQyxJLEdBQU87QUFDSEMsa0JBQU0sQ0FBQyxJQUFELEVBQU8sSUFBUCxDQURIO0FBRUhDLHlCQUFhLENBRlY7QUFHSEMsMEJBQWMsQ0FIWDtBQUlIQyx3QkFBWSxDQUpUO0FBS0hDLG9CQUFPLEVBTEo7QUFNSEMscUJBQVE7O0FBTkwsUyxRQVVUQyxPLEdBQVUsRSxRQUNoQkMsTSxHQUFTLEVBQUMsY0FBYSxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHNCQUFxQixRQUF4QyxFQUFkLEVBQWdFLGVBQWMsRUFBQyx1QkFBc0IsU0FBdkIsRUFBOUUsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQVc7O0FBRUZDLDRDQUZFO0FBR0ZDO0FBSEUsUyxRQUtKQyxPLEdBQVU7QUFDTkMsb0JBRE0sb0JBQ0lDLENBREosRUFDTztBQUNUQyx3QkFBUUMsR0FBUixDQUFZRixDQUFaO0FBQ0EscUJBQUtaLFlBQUwsR0FBb0JZLEVBQUVHLGFBQUYsQ0FBZ0JDLFVBQXBDO0FBQ0EscUJBQUtqQixXQUFMLEdBQW1CYSxFQUFFRyxhQUFGLENBQWdCRSxFQUFuQztBQUVILGFBTks7QUFPTkMsdUJBUE0sdUJBT01OLENBUE4sRUFPUTtBQUNWQyx3QkFBUUMsR0FBUixDQUFZLEtBQVo7QUFDSDtBQVRLLFMsUUFzQlZLLE0sR0FBTztBQUNIO0FBQUEsb0ZBQWMsaUJBQU9QLENBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVWLDBDQUFLYixXQUFMLEdBQWlCLENBQWpCO0FBQ0EsMENBQUtDLFlBQUwsR0FBa0IsTUFBS29CLEtBQXZCOztBQUVoQlAsNENBQVFDLEdBQVIsQ0FBWUYsSUFBRSxjQUFkO0FBQ2dCLDBDQUFLUyxPQUFMLENBQWEsYUFBYixFQUEyQixhQUEzQixFQUF5Q1QsQ0FBekM7O0FBRUQ7Ozs7Ozs7QUFSVztBQUFBLDJDQWVHLHdCQUFVLEtBQVYsRUFBZ0IsaUJBQU9VLE9BQVAsQ0FBZUMsZ0JBQWYsR0FBZ0MsV0FBaEMsR0FBNENYLENBQTVELENBZkg7O0FBQUE7QUFlUFksdUNBZk87O0FBZ0JYLDBDQUFLckIsT0FBTCxHQUFhcUIsR0FBYjs7QUFFRCwwQ0FBS0MsTUFBTDs7QUFsQlk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQWQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERyxTOzs7Ozs7Ozs7Ozs7O3VDQVRhLGVBQUtDLGFBQUwsRTs7O0FBQVpGLG1DOzs7QUFFSixxQ0FBS3ZCLFVBQUwsR0FBa0IsQ0FBQ3VCLElBQUlHLFdBQUosR0FBa0IsS0FBSzdCLElBQUwsQ0FBVThCLE1BQTVCLEdBQXFDbkMsV0FBdEMsSUFBcUQsQ0FBdkU7QUFDQSxxQ0FBS08sWUFBTCxHQUFvQndCLElBQUlHLFdBQUosR0FBa0IsS0FBSzdCLElBQUwsQ0FBVThCLE1BQTVCLEdBQXFDLEtBQUs3QixXQUE5RDtBQUNBLHFDQUFLcUIsS0FBTCxHQUFXSSxJQUFJRyxXQUFKLEdBQWtCLENBQTdCO0FBQ0FkLHdDQUFRQyxHQUFSLENBQVksU0FBWjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUEzQzJCLGVBQUtlLEk7O2tCQUFuQm5DLEsiLCJmaWxlIjoidGVhY2hlcmluZm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcblxyXG4gICAgaW1wb3J0IHRpcCBmcm9tICcuLi9wYWdlcy9qcy90aXAnXHJcbiAgICBpbXBvcnQgY29uZmlnIGZyb20gJy4uL3BhZ2VzL2pzL2NvbmZpZydcclxuICAgXHJcbiAgICBpbXBvcnQgc2Nob29sbGlzdCBmcm9tICcuLi9jb21wb25lbnRzL3NjaG9vbGxpc3QnXHJcbiAgICBpbXBvcnQgdGVhY2hlcmxpc3QgZnJvbSAnLi4vY29tcG9uZW50cy90ZWFjaGVybGlzdCdcclxuICAgIGltcG9ydCB7d3hSZXF1ZXN0fSBmcm9tICcuLi9wYWdlcy9qcy9SZXF1ZXN0J1xyXG4gICAgXHJcbiAgICBcclxuXHJcbiAgICBjb25zdCBzbGlkZXJXaWR0aCA9IDk2OyAvLyDpnIDopoHorr7nva5zbGlkZXLnmoTlrr3luqbvvIznlKjkuo7orqHnrpfkuK3pl7TkvY3nva5cclxuXHJcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBUb2FzdCBleHRlbmRzIHdlcHkucGFnZSB7XHJcblxyXG4gICAgICAgIGNvbmZpZz17XHJcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6J+aVmeW4iOenkeeglCdcclxuICAgICAgICB9XHJcbiAgICAgICAgZGF0YSA9IHtcclxuICAgICAgICAgICAgdGFiczogWyflrabpmaInLCAn5pWZ5biIJ10sXHJcbiAgICAgICAgICAgIGFjdGl2ZUluZGV4OiAwLFxyXG4gICAgICAgICAgICBzbGlkZXJPZmZzZXQ6IDAsXHJcbiAgICAgICAgICAgIHNsaWRlckxlZnQ6IDAsXHJcbiAgICAgICAgICAgIHNjaG9vbDpbXSxcclxuICAgICAgICAgICAgdGVhY2hlcjpbXVxyXG5cclxuXHJcbiAgICAgICAgfTtcclxuICAgICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJzY2hvb2xsaXN0XCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpzY2hvb2wuc3luY1wiOlwic2Nob29sXCJ9LFwidGVhY2hlcmxpc3RcIjp7XCJ2LWJpbmQ6dGVhY2hlci5zeW5jXCI6XCJ0ZWFjaGVyXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cz17XHJcbiAgICAgICAgXHJcbiAgICAgICAgICBzY2hvb2xsaXN0OnNjaG9vbGxpc3QsXHJcbiAgICAgICAgICB0ZWFjaGVybGlzdDp0ZWFjaGVybGlzdFxyXG4gICAgICAgfVxyXG4gICAgICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgICAgICAgIHRhYkNsaWNrIChlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2xpZGVyT2Zmc2V0ID0gZS5jdXJyZW50VGFyZ2V0Lm9mZnNldExlZnQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmlkO1xyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ2V0Q29sbGVnZXMoZSl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuWIt+aWsOWVplwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXN5bmMgb25Mb2FkICgpIHtcclxuICAgICAgICAgICAgbGV0IHJlcyA9IGF3YWl0IHdlcHkuZ2V0U3lzdGVtSW5mbygpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zbGlkZXJMZWZ0ID0gKHJlcy53aW5kb3dXaWR0aCAvIHRoaXMudGFicy5sZW5ndGggLSBzbGlkZXJXaWR0aCkgLyAyO1xyXG4gICAgICAgICAgICB0aGlzLnNsaWRlck9mZnNldCA9IHJlcy53aW5kb3dXaWR0aCAvIHRoaXMudGFicy5sZW5ndGggKiB0aGlzLmFjdGl2ZUluZGV4O1xyXG4gICAgICAgICAgICB0aGlzLmZ1emh1PXJlcy53aW5kb3dXaWR0aCAvIDI7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0ZXN05Yqg6L295LqGJyk7XHJcbiAgICAgICAgICAgIC8vdGhpcy5zY2hvb2w9c2Nob29sLnNjaG9vbDtcclxuICAgICAgICAgICAgLy90aGlzLnRlYWNoZXI9dGVhY2hlci50ZWFjaGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBldmVudHM9e1xyXG4gICAgICAgICAgICAnZ2V0Q29sbGVnZXMnOmFzeW5jIChlKT0+e1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUluZGV4PTE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNsaWRlck9mZnNldD10aGlzLmZ1emh1O1xyXG5cclxuY29uc29sZS5sb2coZStcImpzYWhoYWRoc2FkaFwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGludm9rZSgndGVhY2hlcmxpc3QnLCdnZXRDb2xsZWdlcycsZSk7XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAvKnRpcC5sb2FkaW5nKCk7XHJcbiAgICAgICAgICAgICAgIHdlcHkucmVxdWVzdChjb25maWcuc2VydmljZS5HZXRDb2xsZWdlTWVtYmVyKyc/Q29sbGVnZT0nK2UpLnRoZW4oKGQpPT57XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZC5kYXRhKTtcclxuICAgICAgICAgICAgICB0aGlzLnRlYWNoZXI9ZC5kYXRhO1xyXG4gICAgICAgICAgICAgIHRpcC5sb2FkZWQoKTtcclxuICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICB9KSovXHJcbiAgICAgICAgICAgICAgIGxldCByZXM9YXdhaXQgd3hSZXF1ZXN0KCdnZXQnLGNvbmZpZy5zZXJ2aWNlLkdldENvbGxlZ2VNZW1iZXIrJz9Db2xsZWdlPScrZSlcclxuICAgICAgICAgICAgICAgdGhpcy50ZWFjaGVyPXJlcztcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuIl19