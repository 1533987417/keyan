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

var report = function (_wepy$page) {
    _inherits(report, _wepy$page);

    function report() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, report);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = report.__proto__ || Object.getPrototypeOf(report)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '学术报告'
        }, _this.data = {
            classify: '学术报告',
            fid: '47',
            category: '学术报告',
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

    _createClass(report, [{
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

    return report;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(report , 'pages/report'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcG9ydC5qcyJdLCJuYW1lcyI6WyJzbGlkZXJXaWR0aCIsInJlcG9ydCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiY2xhc3NpZnkiLCJmaWQiLCJjYXRlZ29yeSIsInJvbGUiLCJOdW1iZXIiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJpbmZvbGlzdCIsInNlYXJjaGJhciIsIm1ldGhvZHMiLCJ0YWJDbGljayIsImUiLCJzbGlkZXJPZmZzZXQiLCJjdXJyZW50VGFyZ2V0Iiwib2Zmc2V0TGVmdCIsImFjdGl2ZUluZGV4IiwiaWQiLCJjbGljayIsImNvbnNvbGUiLCJsb2ciLCJ3eCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJ0YXJnZXQiLCJnZXRTeXN0ZW1JbmZvIiwicmVzIiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJ1c2VyaW5mbyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0k7Ozs7QUFFQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLGNBQWMsRUFBcEIsQyxDQUF3Qjs7SUFFSEMsTTs7Ozs7Ozs7Ozs7Ozs7MExBRWpCQyxNLEdBQU87QUFDSEMsb0NBQXVCO0FBRHBCLFMsUUFHUEMsSSxHQUFPO0FBQ0hDLHNCQUFTLE1BRE47QUFFSEMsaUJBQUksSUFGRDtBQUdIQyxzQkFBUyxNQUhOO0FBSUhDLGtCQUFLQzs7QUFKRixTLFFBUVRDLE8sR0FBVSxFLFFBQ2hCQyxNLEdBQVMsRUFBQyxZQUFXLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsbUJBQWtCLEtBQXJDLEVBQTJDLHdCQUF1QixVQUFsRSxFQUE2RSxTQUFRLE1BQXJGLEVBQVosRUFBeUcsYUFBWSxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLG1CQUFrQixLQUFyQyxFQUFySCxFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBVzs7QUFFRkMsd0NBRkU7QUFHRkM7QUFIRSxTLFFBS0pDLE8sR0FBVTtBQUNOQyxvQkFETSxvQkFDSUMsQ0FESixFQUNPO0FBQ1QscUJBQUtDLFlBQUwsR0FBb0JELEVBQUVFLGFBQUYsQ0FBZ0JDLFVBQXBDO0FBQ0EscUJBQUtDLFdBQUwsR0FBbUJKLEVBQUVFLGFBQUYsQ0FBZ0JHLEVBQW5DO0FBQ0gsYUFKSztBQUtOQyxpQkFMTSxpQkFLQU4sQ0FMQSxFQUtFO0FBQ0pPLHdCQUFRQyxHQUFSLENBQVlSLENBQVo7QUFDQVMsbUJBQUdDLFVBQUgsQ0FBYyxFQUFDQyxLQUFJLGlCQUFlWCxFQUFFWSxNQUFGLENBQVNQLEVBQXhCLEdBQTJCLFlBQTNCLEdBQXdDLEtBQUtoQixRQUFsRCxFQUFkO0FBQ0g7QUFSSyxTOzs7Ozs7Ozs7Ozs7O3VDQVlVLGVBQUt3QixhQUFMLEU7OztBQUFaQyxtQzs7QUFDSDtBQUNEO0FBQ0EscUNBQUt4QixJQUFMLEdBQVUsS0FBS3lCLE9BQUwsQ0FBYUMsVUFBYixDQUF3QkMsUUFBeEIsQ0FBaUMzQixJQUEzQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXBDNEIsZUFBSzRCLEk7O2tCQUFwQm5DLE0iLCJmaWxlIjoicmVwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gICAgXHJcbiAgICBpbXBvcnQgaW5mb2xpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9pbmZvbGlzdCdcclxuICAgIGltcG9ydCBzZWFyY2hiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9zZWFyY2hiYXInXHJcblxyXG4gICAgY29uc3Qgc2xpZGVyV2lkdGggPSA5NjsgLy8g6ZyA6KaB6K6+572uc2xpZGVy55qE5a695bqm77yM55So5LqO6K6h566X5Lit6Ze05L2N572uXHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgcmVwb3J0IGV4dGVuZHMgd2VweS5wYWdlIHtcclxuXHJcbiAgICAgICAgY29uZmlnPXtcclxuICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDon5a2m5pyv5oql5ZGKJ1xyXG4gICAgICAgIH1cclxuICAgICAgICBkYXRhID0ge1xyXG4gICAgICAgICAgICBjbGFzc2lmeTon5a2m5pyv5oql5ZGKJyxcclxuICAgICAgICAgICAgZmlkOic0NycsXHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiflrabmnK/miqXlkYonLFxyXG4gICAgICAgICAgICByb2xlOk51bWJlclxyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcImluZm9saXN0XCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpmaWQuc3luY1wiOlwiZmlkXCIsXCJ2LWJpbmQ6Y2xhc3NpZnkuc3luY1wiOlwiY2xhc3NpZnlcIixcImNsYXNzXCI6XCJsaXN0XCJ9LFwic2VhcmNoYmFyXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDpmaWQuc3luY1wiOlwiZmlkXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cz17XHJcbiAgICAgICAgXHJcbiAgICAgICAgICBpbmZvbGlzdDppbmZvbGlzdCxcclxuICAgICAgICAgIHNlYXJjaGJhcjpzZWFyY2hiYXJcclxuICAgICAgIH1cclxuICAgICAgICBtZXRob2RzID0ge1xyXG4gICAgICAgICAgICB0YWJDbGljayAoZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zbGlkZXJPZmZzZXQgPSBlLmN1cnJlbnRUYXJnZXQub2Zmc2V0TGVmdDtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlSW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuaWQ7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNsaWNrKGUpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSlcclxuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe3VybDoncHVibGlzaD9maWQ9JytlLnRhcmdldC5pZCsnJmNhdGVnb3J5PScrdGhpcy5jYXRlZ29yeX0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGFzeW5jIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCB3ZXB5LmdldFN5c3RlbUluZm8oKTtcclxuICAgICAgICAgICAgIC8vdGhpcy5zbGlkZXJMZWZ0ID0gKHJlcy53aW5kb3dXaWR0aCAvIHRoaXMudGFicy5sZW5ndGggLSBzbGlkZXJXaWR0aCkgLyAyO1xyXG4gICAgICAgICAgICAvL3RoaXMuc2xpZGVyT2Zmc2V0ID0gcmVzLndpbmRvd1dpZHRoIC8gdGhpcy50YWJzLmxlbmd0aCAqIHRoaXMuYWN0aXZlSW5kZXg7XHJcbiAgICAgICAgICAgIHRoaXMucm9sZT10aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS51c2VyaW5mby5yb2xlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4iXX0=