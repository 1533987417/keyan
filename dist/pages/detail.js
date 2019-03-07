'use strict';

Object.defineProperty(exports, "__esModule", {
            value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _tab = require('./../components/tab.js');

var _tab2 = _interopRequireDefault(_tab);

var _teacherinfo = require('./../components/teacherinfo.js');

var _teacherinfo2 = _interopRequireDefault(_teacherinfo);

var _article = require('./../components/article.js');

var _article2 = _interopRequireDefault(_article);

var _config = require('./js/config.js');

var _config2 = _interopRequireDefault(_config);

var _util = require('./js/util.js');

var _util2 = _interopRequireDefault(_util);

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
                        var _ref;

                        var _temp, _this, _ret;

                        _classCallCheck(this, Toast);

                        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                                    args[_key] = arguments[_key];
                        }

                        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Toast.__proto__ || Object.getPrototypeOf(Toast)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
                                    navigationBarTitleText: ''
                        }, _this.data = {
                                    user: [],
                                    tab1: {
                                                list: [{
                                                            id: 0,
                                                            title: '基本信息'
                                                }, {
                                                            id: 1,
                                                            title: '科研情况'
                                                }],
                                                selectedId: 0,
                                                scroll: false

                                    },
                                    detail: {},
                                    list: [],
                                    list2: [],
                                    id: Number

                        }, _this.$repeat = {}, _this.$props = { "tab": { "xmlns:v-bind": "", "v-bind:tab.sync": "tab1", "componentId": "tab1" }, "teacherinfo": { "xmlns:v-bind": "", "v-bind:user.sync": "user" }, "article": { "xmlns:v-bind": "", "v-bind:list.sync": "list", "v-bind:detail.sync": "detail", "v-bind:id.sync": "id", "v-bind:list2.sync": "list2" } }, _this.$events = {}, _this.components = {
                                    tab: _tab2.default,
                                    teacherinfo: _teacherinfo2.default,
                                    article: _article2.default

                        }, _this.methods = {}, _this.events = {
                                    zanTabChange: function zanTabChange(selectedId, event) {
                                                var componentId = event.source.componentId;

                                                this[componentId].selectedId = selectedId;
                                                this.$apply();
                                    }
                        }, _temp), _possibleConstructorReturn(_this, _ret);
            }

            _createClass(Toast, [{
                        key: 'onLoad',
                        value: function () {
                                    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
                                                var that, res;
                                                return regeneratorRuntime.wrap(function _callee$(_context) {
                                                            while (1) {
                                                                        switch (_context.prev = _context.next) {
                                                                                    case 0:
                                                                                                that = this;

                                                                                                console.log(e.gzh);

                                                                                                _context.next = 4;
                                                                                                return (0, _Request.wxRequest)('get', _config2.default.service.getGetProfile + '?gzh=' + e.gzh);

                                                                                    case 4:
                                                                                                res = _context.sent;

                                                                                                that.user = res;
                                                                                                that.id = res[0][0];
                                                                                                console.log(that.user[0][0]);

                                                                                                wx.setNavigationBarTitle({ title: that.user[0][1] });
                                                                                                that.$apply();
                                                                                                this.getlists(e.gzh);

                                                                                                //that.$apply();


                                                                                    case 11:
                                                                                    case 'end':
                                                                                                return _context.stop();
                                                                        }
                                                            }
                                                }, _callee, this);
                                    }));

                                    function onLoad(_x) {
                                                return _ref2.apply(this, arguments);
                                    }

                                    return onLoad;
                        }()
            }, {
                        key: 'getlists',
                        value: function () {
                                    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(gzh) {
                                                var that, resp;
                                                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                                                            while (1) {
                                                                        switch (_context2.prev = _context2.next) {
                                                                                    case 0:
                                                                                                that = this;
                                                                                                _context2.next = 3;
                                                                                                return (0, _Request.wxRequest)('get', _config2.default.service.getGetResearch + '?gzh=' + gzh);

                                                                                    case 3:
                                                                                                resp = _context2.sent;

                                                                                                console.log(resp);
                                                                                                if (resp.lunwen.length > 0) {
                                                                                                            that.list.push("发表论文");this.list2.push("lunwen");
                                                                                                }
                                                                                                that.detail.lunwen = _util2.default.addnum(resp.lunwen);

                                                                                                if (resp.zhuzuo.length > 0) {
                                                                                                            that.list.push("著作");this.list2.push("zhuzuo");
                                                                                                }
                                                                                                that.detail.zhuzuo = _util2.default.addnum(resp.zhuzuo);

                                                                                                if (resp.hengxiang.length > 0 && that.id == that.$parent.globalData.userinfo.gzh) {
                                                                                                            that.list.push("横向项目");this.list2.push("hengxiang");
                                                                                                }
                                                                                                that.detail.hengxiang = _util2.default.addnum(resp.hengxiang);

                                                                                                if (resp.zongxiang.length > 0 && that.id == that.$parent.globalData.userinfo.gzh) {
                                                                                                            that.list.push("纵向项目");this.list2.push("zongxiang");
                                                                                                }
                                                                                                that.detail.zongxiang = _util2.default.addnum(resp.zongxiang);

                                                                                                if (resp.dongwu.length > 0) {
                                                                                                            that.list.push("动物品种");this.list2.push("dongwu");
                                                                                                }
                                                                                                that.detail.dongwu = _util2.default.addnum(resp.dongwu);

                                                                                                if (resp.zhiwu.length > 0) {
                                                                                                            that.list.push("植物品种");this.list2.push("zhiwu");
                                                                                                }
                                                                                                that.detail.zhiwu = _util2.default.addnum(resp.zhiwu);

                                                                                                if (resp.zhiwuzq.length > 0) {
                                                                                                            that.list.push("植物品种权");this.list2.push("zhiwuzq");
                                                                                                }
                                                                                                that.detail.zhiwuzq = _util2.default.addnum(resp.zhiwuzq);

                                                                                                if (resp.rjzz.length > 0) {
                                                                                                            that.list.push("软件著作权");this.list2.push("rjzz");
                                                                                                }
                                                                                                that.detail.rjzz = _util2.default.addnum(resp.rjzz);

                                                                                                if (resp.reward.length > 0) {
                                                                                                            that.list.push("获奖");this.list2.push("reward");
                                                                                                }
                                                                                                that.detail.reward = _util2.default.addnum(resp.reward);

                                                                                                if (resp.standard.length > 0) {
                                                                                                            that.list.push("标准");this.list2.push("standard");
                                                                                                }
                                                                                                that.detail.standard = _util2.default.addnum(resp.standard);

                                                                                                if (resp.zhuanli.length > 0) {
                                                                                                            that.list.push("专利");this.list2.push("zhuanli");
                                                                                                }
                                                                                                that.detail.zhuanli = _util2.default.addnum(resp.zhuanli);

                                                                                                if (resp.other.length > 0) {
                                                                                                            that.list.push("其他成果");this.list2.push("other");
                                                                                                }
                                                                                                that.detail.other = _util2.default.addnum(resp.other);

                                                                                                console.log(that.list);
                                                                                                that.$apply();

                                                                                    case 31:
                                                                                    case 'end':
                                                                                                return _context2.stop();
                                                                        }
                                                            }
                                                }, _callee2, this);
                                    }));

                                    function getlists(_x2) {
                                                return _ref3.apply(this, arguments);
                                    }

                                    return getlists;
                        }()
            }]);

            return Toast;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Toast , 'pages/detail'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC5qcyJdLCJuYW1lcyI6WyJzbGlkZXJXaWR0aCIsIlRvYXN0IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJ1c2VyIiwidGFiMSIsImxpc3QiLCJpZCIsInRpdGxlIiwic2VsZWN0ZWRJZCIsInNjcm9sbCIsImRldGFpbCIsImxpc3QyIiwiTnVtYmVyIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwidGFiIiwidGVhY2hlcmluZm8iLCJhcnRpY2xlIiwibWV0aG9kcyIsImV2ZW50cyIsInphblRhYkNoYW5nZSIsImV2ZW50IiwiY29tcG9uZW50SWQiLCJzb3VyY2UiLCIkYXBwbHkiLCJlIiwidGhhdCIsImNvbnNvbGUiLCJsb2ciLCJnemgiLCJzZXJ2aWNlIiwiZ2V0R2V0UHJvZmlsZSIsInJlcyIsInd4Iiwic2V0TmF2aWdhdGlvbkJhclRpdGxlIiwiZ2V0bGlzdHMiLCJnZXRHZXRSZXNlYXJjaCIsInJlc3AiLCJsdW53ZW4iLCJsZW5ndGgiLCJwdXNoIiwiYWRkbnVtIiwiemh1enVvIiwiaGVuZ3hpYW5nIiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJ1c2VyaW5mbyIsInpvbmd4aWFuZyIsImRvbmd3dSIsInpoaXd1Iiwiemhpd3V6cSIsInJqenoiLCJyZXdhcmQiLCJzdGFuZGFyZCIsInpodWFubGkiLCJvdGhlciIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQU1BLElBQU1BLGNBQWMsRUFBcEIsQyxDQUF3Qjs7SUFFSEMsSzs7Ozs7Ozs7Ozs7Ozs7d01BRWpCQyxNLEdBQU87QUFDSEMsNERBQXVCO0FBRHBCLHlCLFFBR1BDLEksR0FBTztBQUNIQywwQ0FBSyxFQURGO0FBRUhDLDBDQUFNO0FBQ0pDLHNEQUFNLENBQ047QUFDSUMsZ0VBQUksQ0FEUjtBQUVJ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ZUFBS1osTUFBTCxDQUFZSixLQUFLZ0IsUUFBakIsQ0FBckI7O0FBRUYsb0dBQUdoQixLQUFLaUIsT0FBTCxDQUFhZixNQUFiLEdBQW9CLENBQXZCLEVBQXlCO0FBQUNiLGlIQUFLdkIsSUFBTCxDQUFVcUMsSUFBVixDQUFlLElBQWYsRUFBcUIsS0FBSy9CLEtBQUwsQ0FBVytCLElBQVgsQ0FBZ0IsU0FBaEI7QUFBMkI7QUFDeEVkLHFHQUFLbEIsTUFBTCxDQUFZOEMsT0FBWixHQUFvQixlQUFLYixNQUFMLENBQVlKLEtBQUtpQixPQUFqQixDQUFwQjs7QUFHRixvR0FBR2pCLEtBQUtrQixLQUFMLENBQVdoQixNQUFYLEdBQWtCLENBQXJCLEVBQXVCO0FBQUNiLGlIQUFLdkIsSUFBTCxDQUFVcUMsSUFBVixDQUFlLE1BQWYsRUFBdUIsS0FBSy9CLEtBQUwsQ0FBVytCLElBQVgsQ0FBZ0IsT0FBaEI7QUFBeUI7QUFDdEVkLHFHQUFLbEIsTUFBTCxDQUFZK0MsS0FBWixHQUFrQixlQUFLZCxNQUFMLENBQVlKLEtBQUtrQixLQUFqQixDQUFsQjs7QUFRQTVCLHdHQUFRQyxHQUFSLENBQVlGLEtBQUt2QixJQUFqQjtBQUNBdUIscUdBQUtGLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUF2SDJCLGVBQUtnQyxJOztrQkFBbkIzRCxLIiwiZmlsZSI6ImRldGFpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICAgIGltcG9ydCB0YWIgZnJvbSAnLi4vY29tcG9uZW50cy90YWInXHJcbiAgICBpbXBvcnQgdGVhY2hlcmluZm8gZnJvbSAnLi4vY29tcG9uZW50cy90ZWFjaGVyaW5mbydcclxuICAgIGltcG9ydCBhcnRpY2xlIGZyb20gJy4uL2NvbXBvbmVudHMvYXJ0aWNsZSdcclxuICAgIGltcG9ydCBjb25maWcgZnJvbSAnLi4vcGFnZXMvanMvY29uZmlnJ1xyXG4gICAgaW1wb3J0IHV0aWwgZnJvbSAnLi4vcGFnZXMvanMvdXRpbCdcclxuICAgIGltcG9ydCB7d3hSZXF1ZXN0fSBmcm9tICcuLi9wYWdlcy9qcy9SZXF1ZXN0J1xyXG4gICBcclxuXHJcbiAgICBcclxuICAgIFxyXG5cclxuICAgIGNvbnN0IHNsaWRlcldpZHRoID0gOTY7IC8vIOmcgOimgeiuvue9rnNsaWRlcueahOWuveW6pu+8jOeUqOS6juiuoeeul+S4remXtOS9jee9rlxyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvYXN0IGV4dGVuZHMgd2VweS5wYWdlIHtcclxuXHJcbiAgICAgICAgY29uZmlnPXtcclxuICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDonJ1xyXG4gICAgICAgIH1cclxuICAgICAgICBkYXRhID0ge1xyXG4gICAgICAgICAgICB1c2VyOltdLFxyXG4gICAgICAgICAgICB0YWIxOiB7XHJcbiAgICAgICAgICAgICAgbGlzdDogW1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgaWQ6IDAsXHJcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5Z+65pys5L+h5oGvJ1xyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBpZDoxLFxyXG4gICAgICAgICAgICAgICAgICB0aXRsZTogJ+enkeeglOaDheWGtSdcclxuICAgICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgICBzZWxlY3RlZElkOjAsXHJcbiAgICAgICAgICAgICAgc2Nyb2xsOiBmYWxzZSxcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgZGV0YWlsOnt9LFxyXG4gICAgICAgICAgIGxpc3Q6W10sXHJcbiAgICAgICAgICAgbGlzdDI6W10sXHJcbiAgICAgICAgICAgaWQ6TnVtYmVyXHJcbiAgICAgICAgICBcclxuXHJcblxyXG4gICAgICAgIH07XHJcbiAgICAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1widGFiXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDp0YWIuc3luY1wiOlwidGFiMVwiLFwiY29tcG9uZW50SWRcIjpcInRhYjFcIn0sXCJ0ZWFjaGVyaW5mb1wiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6dXNlci5zeW5jXCI6XCJ1c2VyXCJ9LFwiYXJ0aWNsZVwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6bGlzdC5zeW5jXCI6XCJsaXN0XCIsXCJ2LWJpbmQ6ZGV0YWlsLnN5bmNcIjpcImRldGFpbFwiLFwidi1iaW5kOmlkLnN5bmNcIjpcImlkXCIsXCJ2LWJpbmQ6bGlzdDIuc3luY1wiOlwibGlzdDJcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzPXtcclxuICAgICAgICB0YWI6dGFiLFxyXG4gICAgICAgIHRlYWNoZXJpbmZvLFxyXG4gICAgICAgIGFydGljbGU6YXJ0aWNsZVxyXG4gICAgICAgICAgXHJcbiAgICAgICB9XHJcbiAgICAgICBtZXRob2RzID0ge1xyXG4gICAgICAgXHJcbn1cclxuICAgICAgIFxyXG5cclxuICAgICAgICBldmVudHMgPSB7XHJcbiAgICAgICAgICAgIHphblRhYkNoYW5nZShzZWxlY3RlZElkLCBldmVudCkge1xyXG4gICAgICAgICAgICAgIGxldCB7IGNvbXBvbmVudElkIH0gPSBldmVudC5zb3VyY2VcclxuICAgICAgICAgICAgICB0aGlzW2NvbXBvbmVudElkXS5zZWxlY3RlZElkID0gc2VsZWN0ZWRJZFxyXG4gICAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgICAgIH1cclxuICB9XHJcbiAgICAgICAgYXN5bmMgb25Mb2FkIChlKSB7XHJcbiAgICAgICAgICBsZXQgdGhhdD10aGlzXHJcbiAgICAgICAgICAgY29uc29sZS5sb2coZS5nemgpXHJcbiAgICAgICAgICBcclxuICAgICAgICAgXHJcbiAgICAgICAgICAgbGV0IHJlcz1hd2FpdCB3eFJlcXVlc3QoJ2dldCcsY29uZmlnLnNlcnZpY2UuZ2V0R2V0UHJvZmlsZSsnP2d6aD0nK2UuZ3poKVxyXG4gICAgICAgICAgICB0aGF0LnVzZXI9cmVzO1xyXG4gICAgICAgICAgICB0aGF0LmlkPXJlc1swXVswXVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGF0LnVzZXJbMF1bMF0pO1xyXG5cclxuICAgICAgICAgICAgd3guc2V0TmF2aWdhdGlvbkJhclRpdGxlKHt0aXRsZTp0aGF0LnVzZXJbMF1bMV19KTtcclxuICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcclxuICAgICAgICAgICAgdGhpcy5nZXRsaXN0cyhlLmd6aClcclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvL3RoYXQuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgIFxyXG5cclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgIGFzeW5jIGdldGxpc3RzKGd6aCl7XHJcbiAgICAgICAgbGV0IHRoYXQ9dGhpc1xyXG4gICAgICAgICAgbGV0IHJlc3A9YXdhaXQgd3hSZXF1ZXN0KCdnZXQnLGNvbmZpZy5zZXJ2aWNlLmdldEdldFJlc2VhcmNoKyc/Z3poPScrZ3poKVxyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzcClcclxuICAgICAgICAgICAgaWYocmVzcC5sdW53ZW4ubGVuZ3RoPjApe3RoYXQubGlzdC5wdXNoKFwi5Y+R6KGo6K665paHXCIpO3RoaXMubGlzdDIucHVzaChcImx1bndlblwiKX1cclxuICAgICAgICAgICB0aGF0LmRldGFpbC5sdW53ZW49dXRpbC5hZGRudW0ocmVzcC5sdW53ZW4pXHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgICBpZihyZXNwLnpodXp1by5sZW5ndGg+MCl7dGhhdC5saXN0LnB1c2goXCLokZfkvZxcIik7dGhpcy5saXN0Mi5wdXNoKFwiemh1enVvXCIpfVxyXG4gICAgICAgICAgICB0aGF0LmRldGFpbC56aHV6dW89dXRpbC5hZGRudW0ocmVzcC56aHV6dW8pXHJcblxyXG4gICAgICAgICAgICBpZihyZXNwLmhlbmd4aWFuZy5sZW5ndGg+MCYmdGhhdC5pZD09dGhhdC4kcGFyZW50Lmdsb2JhbERhdGEudXNlcmluZm8uZ3poKXt0aGF0Lmxpc3QucHVzaChcIuaoquWQkemhueebrlwiKTt0aGlzLmxpc3QyLnB1c2goXCJoZW5neGlhbmdcIil9XHJcbiAgICAgICAgICAgIHRoYXQuZGV0YWlsLmhlbmd4aWFuZz11dGlsLmFkZG51bShyZXNwLmhlbmd4aWFuZylcclxuXHJcbiAgICAgICAgICAgIGlmKHJlc3Auem9uZ3hpYW5nLmxlbmd0aD4wJiZ0aGF0LmlkPT10aGF0LiRwYXJlbnQuZ2xvYmFsRGF0YS51c2VyaW5mby5nemgpe3RoYXQubGlzdC5wdXNoKFwi57q15ZCR6aG555uuXCIpO3RoaXMubGlzdDIucHVzaChcInpvbmd4aWFuZ1wiKX1cclxuICAgICAgICAgICAgdGhhdC5kZXRhaWwuem9uZ3hpYW5nPXV0aWwuYWRkbnVtKHJlc3Auem9uZ3hpYW5nKVxyXG5cclxuICAgICAgICAgICAgaWYocmVzcC5kb25nd3UubGVuZ3RoPjApe3RoYXQubGlzdC5wdXNoKFwi5Yqo54mp5ZOB56eNXCIpO3RoaXMubGlzdDIucHVzaChcImRvbmd3dVwiKX1cclxuICAgICAgICAgICAgdGhhdC5kZXRhaWwuZG9uZ3d1PXV0aWwuYWRkbnVtKHJlc3AuZG9uZ3d1KVxyXG5cclxuICAgICAgICAgICAgaWYocmVzcC56aGl3dS5sZW5ndGg+MCl7dGhhdC5saXN0LnB1c2goXCLmpI3nianlk4Hnp41cIik7dGhpcy5saXN0Mi5wdXNoKFwiemhpd3VcIil9XHJcbiAgICAgICAgICAgIHRoYXQuZGV0YWlsLnpoaXd1PXV0aWwuYWRkbnVtKHJlc3Auemhpd3UpXHJcblxyXG4gICAgICAgICAgICBpZihyZXNwLnpoaXd1enEubGVuZ3RoPjApe3RoYXQubGlzdC5wdXNoKFwi5qSN54mp5ZOB56eN5p2DXCIpO3RoaXMubGlzdDIucHVzaChcInpoaXd1enFcIil9XHJcbiAgICAgICAgICAgIHRoYXQuZGV0YWlsLnpoaXd1enE9dXRpbC5hZGRudW0ocmVzcC56aGl3dXpxKVxyXG5cclxuICAgICAgICAgICAgaWYocmVzcC5yanp6Lmxlbmd0aD4wKXt0aGF0Lmxpc3QucHVzaChcIui9r+S7tuiRl+S9nOadg1wiKTt0aGlzLmxpc3QyLnB1c2goXCJyanp6XCIpfVxyXG4gICAgICAgICAgICB0aGF0LmRldGFpbC5yanp6PXV0aWwuYWRkbnVtKHJlc3Aucmp6eilcclxuXHJcblxyXG4gICAgICAgICAgIGlmKHJlc3AucmV3YXJkLmxlbmd0aD4wKXt0aGF0Lmxpc3QucHVzaChcIuiOt+WlllwiKTt0aGlzLmxpc3QyLnB1c2goXCJyZXdhcmRcIil9XHJcbiAgICAgICAgICAgIHRoYXQuZGV0YWlsLnJld2FyZD11dGlsLmFkZG51bShyZXNwLnJld2FyZClcclxuXHJcbiAgICAgICAgICBpZihyZXNwLnN0YW5kYXJkLmxlbmd0aD4wKXt0aGF0Lmxpc3QucHVzaChcIuagh+WHhlwiKTt0aGlzLmxpc3QyLnB1c2goXCJzdGFuZGFyZFwiKX1cclxuICAgICAgICAgICAgdGhhdC5kZXRhaWwuc3RhbmRhcmQ9dXRpbC5hZGRudW0ocmVzcC5zdGFuZGFyZClcclxuXHJcbiAgICAgICAgICBpZihyZXNwLnpodWFubGkubGVuZ3RoPjApe3RoYXQubGlzdC5wdXNoKFwi5LiT5YipXCIpO3RoaXMubGlzdDIucHVzaChcInpodWFubGlcIil9XHJcbiAgICAgICAgICAgIHRoYXQuZGV0YWlsLnpodWFubGk9dXRpbC5hZGRudW0ocmVzcC56aHVhbmxpKVxyXG4gICAgICAgICAgXHJcblxyXG4gICAgICAgICAgaWYocmVzcC5vdGhlci5sZW5ndGg+MCl7dGhhdC5saXN0LnB1c2goXCLlhbbku5bmiJDmnpxcIik7dGhpcy5saXN0Mi5wdXNoKFwib3RoZXJcIil9XHJcbiAgICAgICAgICAgIHRoYXQuZGV0YWlsLm90aGVyPXV0aWwuYWRkbnVtKHJlc3Aub3RoZXIpXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGF0Lmxpc3QpXHJcbiAgICAgICAgICAgIHRoYXQuJGFwcGx5KClcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4iXX0=