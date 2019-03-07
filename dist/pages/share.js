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
            navigationBarTitleText: '资源共享'
        }, _this.data = {
            classify: '资源共享',
            fid: '3',
            category: '资源共享',
            role: Number

        }, _this.$repeat = {}, _this.$props = { "infolist": { "xmlns:v-bind": "", "v-bind:fid.sync": "fid", "v-bind:classify.sync": "classify", "class": "list" } }, _this.$events = {}, _this.components = {

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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(report , 'pages/share'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlLmpzIl0sIm5hbWVzIjpbInNsaWRlcldpZHRoIiwicmVwb3J0IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJjbGFzc2lmeSIsImZpZCIsImNhdGVnb3J5Iiwicm9sZSIsIk51bWJlciIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImluZm9saXN0Iiwic2VhcmNoYmFyIiwibWV0aG9kcyIsInRhYkNsaWNrIiwiZSIsInNsaWRlck9mZnNldCIsImN1cnJlbnRUYXJnZXQiLCJvZmZzZXRMZWZ0IiwiYWN0aXZlSW5kZXgiLCJpZCIsImNsaWNrIiwiY29uc29sZSIsImxvZyIsInd4IiwibmF2aWdhdGVUbyIsInVybCIsInRhcmdldCIsImdldFN5c3RlbUluZm8iLCJyZXMiLCIkcGFyZW50IiwiZ2xvYmFsRGF0YSIsInVzZXJpbmZvIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDSTs7OztBQUVBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsY0FBYyxFQUFwQixDLENBQXdCOztJQUVIQyxNOzs7Ozs7Ozs7Ozs7OzswTEFFakJDLE0sR0FBTztBQUNIQyxvQ0FBdUI7QUFEcEIsUyxRQUdQQyxJLEdBQU87QUFDSEMsc0JBQVMsTUFETjtBQUVIQyxpQkFBSSxHQUZEO0FBR0hDLHNCQUFTLE1BSE47QUFJSEMsa0JBQUtDOztBQUpGLFMsUUFRVEMsTyxHQUFVLEUsUUFDaEJDLE0sR0FBUyxFQUFDLFlBQVcsRUFBQyxnQkFBZSxFQUFoQixFQUFtQixtQkFBa0IsS0FBckMsRUFBMkMsd0JBQXVCLFVBQWxFLEVBQTZFLFNBQVEsTUFBckYsRUFBWixFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBVzs7QUFFRkMsd0NBRkU7QUFHRkM7QUFIRSxTLFFBS0pDLE8sR0FBVTtBQUNOQyxvQkFETSxvQkFDSUMsQ0FESixFQUNPO0FBQ1QscUJBQUtDLFlBQUwsR0FBb0JELEVBQUVFLGFBQUYsQ0FBZ0JDLFVBQXBDO0FBQ0EscUJBQUtDLFdBQUwsR0FBbUJKLEVBQUVFLGFBQUYsQ0FBZ0JHLEVBQW5DO0FBQ0gsYUFKSztBQUtOQyxpQkFMTSxpQkFLQU4sQ0FMQSxFQUtFO0FBQ0pPLHdCQUFRQyxHQUFSLENBQVlSLENBQVo7QUFDQVMsbUJBQUdDLFVBQUgsQ0FBYyxFQUFDQyxLQUFJLGlCQUFlWCxFQUFFWSxNQUFGLENBQVNQLEVBQXhCLEdBQTJCLFlBQTNCLEdBQXdDLEtBQUtoQixRQUFsRCxFQUFkO0FBQ0g7QUFSSyxTOzs7Ozs7Ozs7Ozs7O3VDQVlVLGVBQUt3QixhQUFMLEU7OztBQUFaQyxtQzs7QUFDSDtBQUNEO0FBQ0EscUNBQUt4QixJQUFMLEdBQVUsS0FBS3lCLE9BQUwsQ0FBYUMsVUFBYixDQUF3QkMsUUFBeEIsQ0FBaUMzQixJQUEzQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXBDNEIsZUFBSzRCLEk7O2tCQUFwQm5DLE0iLCJmaWxlIjoic2hhcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgICBcclxuICAgIGltcG9ydCBpbmZvbGlzdCBmcm9tICcuLi9jb21wb25lbnRzL2luZm9saXN0J1xyXG4gICAgaW1wb3J0IHNlYXJjaGJhciBmcm9tICcuLi9jb21wb25lbnRzL3NlYXJjaGJhcidcclxuXHJcbiAgICBjb25zdCBzbGlkZXJXaWR0aCA9IDk2OyAvLyDpnIDopoHorr7nva5zbGlkZXLnmoTlrr3luqbvvIznlKjkuo7orqHnrpfkuK3pl7TkvY3nva5cclxuXHJcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyByZXBvcnQgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG5cclxuICAgICAgICBjb25maWc9e1xyXG4gICAgICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OifotYTmupDlhbHkuqsnXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRhdGEgPSB7XHJcbiAgICAgICAgICAgIGNsYXNzaWZ5OifotYTmupDlhbHkuqsnLFxyXG4gICAgICAgICAgICBmaWQ6JzMnLFxyXG4gICAgICAgICAgICBjYXRlZ29yeTon6LWE5rqQ5YWx5LqrJyxcclxuICAgICAgICAgICAgcm9sZTpOdW1iZXJcclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJpbmZvbGlzdFwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6ZmlkLnN5bmNcIjpcImZpZFwiLFwidi1iaW5kOmNsYXNzaWZ5LnN5bmNcIjpcImNsYXNzaWZ5XCIsXCJjbGFzc1wiOlwibGlzdFwifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHM9e1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgaW5mb2xpc3Q6aW5mb2xpc3QsXHJcbiAgICAgICAgICBzZWFyY2hiYXI6c2VhcmNoYmFyXHJcbiAgICAgICB9XHJcbiAgICAgICAgbWV0aG9kcyA9IHtcclxuICAgICAgICAgICAgdGFiQ2xpY2sgKGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2xpZGVyT2Zmc2V0ID0gZS5jdXJyZW50VGFyZ2V0Lm9mZnNldExlZnQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmlkO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjbGljayhlKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHt1cmw6J3B1Ymxpc2g/ZmlkPScrZS50YXJnZXQuaWQrJyZjYXRlZ29yeT0nK3RoaXMuY2F0ZWdvcnl9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhc3luYyBvbkxvYWQgKCkge1xyXG4gICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgd2VweS5nZXRTeXN0ZW1JbmZvKCk7XHJcbiAgICAgICAgICAgICAvL3RoaXMuc2xpZGVyTGVmdCA9IChyZXMud2luZG93V2lkdGggLyB0aGlzLnRhYnMubGVuZ3RoIC0gc2xpZGVyV2lkdGgpIC8gMjtcclxuICAgICAgICAgICAgLy90aGlzLnNsaWRlck9mZnNldCA9IHJlcy53aW5kb3dXaWR0aCAvIHRoaXMudGFicy5sZW5ndGggKiB0aGlzLmFjdGl2ZUluZGV4O1xyXG4gICAgICAgICAgICB0aGlzLnJvbGU9dGhpcy4kcGFyZW50Lmdsb2JhbERhdGEudXNlcmluZm8ucm9sZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuIl19