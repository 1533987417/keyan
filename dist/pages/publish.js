'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _util = require('./js/util.js');

var _util2 = _interopRequireDefault(_util);

var _data = require('./../data/data.js');

var _data2 = _interopRequireDefault(_data);

var _config = require('./js/config.js');

var _config2 = _interopRequireDefault(_config);

var _Request = require('./js/Request.js');

var _tip = require('./js/tip.js');

var _tip2 = _interopRequireDefault(_tip);

var _uploader = require('./../components/uploader.js');

var _uploader2 = _interopRequireDefault(_uploader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var test = function (_wepy$page) {
    _inherits(test, _wepy$page);

    function test() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, test);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = test.__proto__ || Object.getPrototypeOf(test)).call.apply(_ref, [this].concat(args))), _this), _this.components = {
            //为两个相同组件的不同实例分配不同的组件ID，从而避免数据同步变化的问题
            uploader: _uploader2.default
        }, _this.config = {
            navigationBarTitleText: '信息发布'
        }, _this.data = {
            index: 0,
            indexsub: 0,
            havasub: Boolean,
            subject: [],
            array: [],
            userinfo: {},
            fid: Number,
            category: String
        }, _this.methods = {
            bindPickerChange: function bindPickerChange(e) {
                console.log('picker发送选择改变，携带值为', e.detail);
                this.index = e.detail.value;
            },
            bindPickerChangesub: function bindPickerChangesub(e) {
                console.log('picker发送选择改变，携带值为', e.detail);
                this.indexsub = e.detail.value;
            },
            formSubmit: function formSubmit(e) {
                var _this2 = this;

                return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                    var data, res;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    if (!(e.detail.value.title == "" || e.detail.value.body == "")) {
                                        _context.next = 4;
                                        break;
                                    }

                                    _context.next = 3;
                                    return _wepy2.default.showToast({
                                        title: '请输入标题和内容',
                                        icon: 'none',
                                        duration: 1000
                                    });

                                case 3:
                                    return _context.abrupt('return');

                                case 4:
                                    //console.log(util.formatTime(new Date()));
                                    console.log('form发生了submit事件，携带数据为：', e.detail.value);
                                    console.log(e);
                                    if (e.detail.value.typesub != undefined) {
                                        _this2.category = e.detail.value.typesub;
                                        console.log("未定义");
                                    }
                                    data = { fid: _this2.fid,
                                        poster: _this2.userinfo.xm,
                                        posterid: _this2.userinfo.gzh,
                                        title: e.detail.value.title,
                                        summary: e.detail.value.body,
                                        figure: '',
                                        bmdm: _this2.userinfo.bmdm,
                                        bmmc: _this2.userinfo.bmmc,
                                        role: _this2.userinfo.role,
                                        category: _this2.category,
                                        classify: e.detail.value.type };
                                    _context.next = 10;
                                    return (0, _Request.wxRequest)('post', _config2.default.service.addTopics + '?ip=' + _this2.$parent.globalData.ip, data);

                                case 10:
                                    res = _context.sent;

                                    console.log(res);
                                    if (res != null) _this2.$navigate('./msg_success?tid=' + res);

                                case 13:
                                case 'end':
                                    return _context.stop();
                            }
                        }
                    }, _callee, _this2);
                }))();
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(test, [{
        key: 'onLoad',
        value: function onLoad(e) {
            var fid = e.fid;
            console.log(e.fid);
            this.fid = e.fid;
            if (fid > 40) {
                fid = fid - 41;
            } else {
                fid = fid - 1;
            }
            console.log(e.category + fid + this.fid);
            if (e.category.length == 0) {
                this.havasub = true;
                this.subject = _data2.default.subject;
                this.$apply();
            } else {
                this.category = e.category;
            }
            this.array = _data2.default.classify[fid];
            console.log(this.category);
            this.userinfo = this.$parent.globalData.userinfo;
        }
    }]);

    return test;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(test , 'pages/publish'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1Ymxpc2guanMiXSwibmFtZXMiOlsidGVzdCIsImNvbXBvbmVudHMiLCJ1cGxvYWRlciIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiaW5kZXgiLCJpbmRleHN1YiIsImhhdmFzdWIiLCJCb29sZWFuIiwic3ViamVjdCIsImFycmF5IiwidXNlcmluZm8iLCJmaWQiLCJOdW1iZXIiLCJjYXRlZ29yeSIsIlN0cmluZyIsIm1ldGhvZHMiLCJiaW5kUGlja2VyQ2hhbmdlIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJkZXRhaWwiLCJ2YWx1ZSIsImJpbmRQaWNrZXJDaGFuZ2VzdWIiLCJmb3JtU3VibWl0IiwidGl0bGUiLCJib2R5Iiwic2hvd1RvYXN0IiwiaWNvbiIsImR1cmF0aW9uIiwidHlwZXN1YiIsInVuZGVmaW5lZCIsInBvc3RlciIsInhtIiwicG9zdGVyaWQiLCJnemgiLCJzdW1tYXJ5IiwiZmlndXJlIiwiYm1kbSIsImJtbWMiLCJyb2xlIiwiY2xhc3NpZnkiLCJ0eXBlIiwic2VydmljZSIsImFkZFRvcGljcyIsIiRwYXJlbnQiLCJnbG9iYWxEYXRhIiwiaXAiLCJyZXMiLCIkbmF2aWdhdGUiLCJsZW5ndGgiLCIkYXBwbHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7SUFFcUJBLEk7Ozs7Ozs7Ozs7Ozs7O3NMQUNqQkMsVSxHQUFhO0FBQ1Q7QUFDQUM7QUFGUyxTLFFBSWJDLE0sR0FBUztBQUNMQyxvQ0FBd0I7QUFEbkIsUyxRQUdUQyxJLEdBQUs7QUFDSkMsbUJBQU0sQ0FERjtBQUVKQyxzQkFBUyxDQUZMO0FBR0pDLHFCQUFRQyxPQUhKO0FBSUpDLHFCQUFRLEVBSko7QUFLSkMsbUJBQU8sRUFMSDtBQU1KQyxzQkFBUyxFQU5MO0FBT0pDLGlCQUFJQyxNQVBBO0FBUUpDLHNCQUFTQztBQVJMLFMs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QUFGLEdBQVdGLEdBQVgsR0FBZSxLQUFLQSxHQUFoQztBQUNBLGdCQUFHTSxFQUFFSixRQUFGLENBQVdvQyxNQUFYLElBQW1CLENBQXRCLEVBQXdCO0FBQ3ZCLHFCQUFLM0MsT0FBTCxHQUFhLElBQWI7QUFDQSxxQkFBS0UsT0FBTCxHQUFhLGVBQUtBLE9BQWxCO0FBQ0EscUJBQUswQyxNQUFMO0FBQ0EsYUFKRCxNQUlLO0FBQ0wscUJBQUtyQyxRQUFMLEdBQWNJLEVBQUVKLFFBQWhCO0FBQ0U7QUFDRixpQkFBS0osS0FBTCxHQUFXLGVBQUsrQixRQUFMLENBQWM3QixHQUFkLENBQVg7QUFDQU8sb0JBQVFDLEdBQVIsQ0FBWSxLQUFLTixRQUFqQjtBQUNBLGlCQUFLSCxRQUFMLEdBQWMsS0FBS2tDLE9BQUwsQ0FBYUMsVUFBYixDQUF3Qm5DLFFBQXRDO0FBQ0Y7Ozs7RUF0QzZCLGVBQUt5QyxJOztrQkFBbEJyRCxJIiwiZmlsZSI6InB1Ymxpc2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgICBpbXBvcnQgdXRpbCBmcm9tICcuLi9wYWdlcy9qcy91dGlsJ1xyXG4gICAgaW1wb3J0IGRhdGEgZnJvbSAnLi4vZGF0YS9kYXRhJ1xyXG4gICAgaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9wYWdlcy9qcy9jb25maWcnXHJcbiAgICBpbXBvcnQge3d4UmVxdWVzdH0gZnJvbSAnLi4vcGFnZXMvanMvUmVxdWVzdCdcclxuICAgIGltcG9ydCB0aXAgZnJvbSAnLi4vcGFnZXMvanMvdGlwJ1xyXG4gICBcclxuICAgIGltcG9ydCB1cGxvYWRlciBmcm9tICcuLi9jb21wb25lbnRzL3VwbG9hZGVyJ1xyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIHRlc3QgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgICAgIGNvbXBvbmVudHMgPSB7XHJcbiAgICAgICAgICAgIC8v5Li65Lik5Liq55u45ZCM57uE5Lu255qE5LiN5ZCM5a6e5L6L5YiG6YWN5LiN5ZCM55qE57uE5Lu2SUTvvIzku47ogIzpgb/lhY3mlbDmja7lkIzmraXlj5jljJbnmoTpl67pophcclxuICAgICAgICAgICAgdXBsb2FkZXI6dXBsb2FkZXJcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbmZpZyA9IHtcclxuICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+S/oeaBr+WPkeW4gydcclxuICAgICAgICAgfVxyXG4gICAgICAgIGRhdGE9e1xyXG4gICAgICAgICBpbmRleDowLFxyXG4gICAgICAgICBpbmRleHN1YjowLFxyXG4gICAgICAgICBoYXZhc3ViOkJvb2xlYW4sXHJcbiAgICAgICAgIHN1YmplY3Q6W10sXHJcbiAgICAgICAgIGFycmF5OiBbXSxcclxuICAgICAgICAgdXNlcmluZm86e30sXHJcbiAgICAgICAgIGZpZDpOdW1iZXIsXHJcbiAgICAgICAgIGNhdGVnb3J5OlN0cmluZyxcclxuICAgICAgICAgIH1cclxuICAgICAgICBvbkxvYWQoZSl7XHJcbiAgICAgICAgICAgdmFyIGZpZD1lLmZpZDtcclxuICAgICAgICAgICBjb25zb2xlLmxvZyhlLmZpZClcclxuICAgICAgICAgICB0aGlzLmZpZD1lLmZpZDtcclxuICAgICAgICAgICBpZihmaWQ+NDApe1xyXG4gICAgICAgICAgICBmaWQ9ZmlkLTQxXHJcbiAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGZpZD1maWQtMVxyXG4gICAgICAgICAgIH1cclxuICAgICAgICAgICBjb25zb2xlLmxvZyhlLmNhdGVnb3J5K2ZpZCt0aGlzLmZpZCk7XHJcbiAgICAgICAgICAgaWYoZS5jYXRlZ29yeS5sZW5ndGg9PTApe1xyXG4gICAgICAgICAgICB0aGlzLmhhdmFzdWI9dHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLnN1YmplY3Q9ZGF0YS5zdWJqZWN0XHJcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICB0aGlzLmNhdGVnb3J5PWUuY2F0ZWdvcnlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIHRoaXMuYXJyYXk9ZGF0YS5jbGFzc2lmeVtmaWRdO1xyXG4gICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY2F0ZWdvcnkpXHJcbiAgICAgICAgICAgdGhpcy51c2VyaW5mbz10aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS51c2VyaW5mbztcclxuICAgICAgICB9XHJcbiAgICAgICAgbWV0aG9kcz17XHJcbiAgICAgICAgICAgIGJpbmRQaWNrZXJDaGFuZ2U6IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwaWNrZXLlj5HpgIHpgInmi6nmlLnlj5jvvIzmkLrluKblgLzkuLonLCBlLmRldGFpbClcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXg9ZS5kZXRhaWwudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBiaW5kUGlja2VyQ2hhbmdlc3ViKGUpe1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwaWNrZXLlj5HpgIHpgInmi6nmlLnlj5jvvIzmkLrluKblgLzkuLonLCBlLmRldGFpbClcclxuICAgICAgICAgICAgICB0aGlzLmluZGV4c3ViPWUuZGV0YWlsLnZhbHVlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhc3luYyBmb3JtU3VibWl0KGUpIHtcclxuICAgICAgICAgICAgXHRpZiAoZS5kZXRhaWwudmFsdWUudGl0bGUgPT0gXCJcIiB8fCBlLmRldGFpbC52YWx1ZS5ib2R5ID09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHdlcHkuc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAn6K+36L6T5YWl5qCH6aKY5ZKM5YaF5a65JyxcclxuICAgICAgICAgICAgICAgIGljb246ICdub25lJyxcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgfSAgICAgIFxyXG4gICAgICAgICAgICBcdCAgICAvL2NvbnNvbGUubG9nKHV0aWwuZm9ybWF0VGltZShuZXcgRGF0ZSgpKSk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Zvcm3lj5HnlJ/kuoZzdWJtaXTkuovku7bvvIzmkLrluKbmlbDmja7kuLrvvJonLCBlLmRldGFpbC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZSlcclxuICAgICAgICAgICAgICBpZihlLmRldGFpbC52YWx1ZS50eXBlc3ViIT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgIHRoaXMuY2F0ZWdvcnk9ZS5kZXRhaWwudmFsdWUudHlwZXN1YlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLmnKrlrprkuYlcIilcclxuICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgIHZhciBkYXRhPXsgICAgICAgICBmaWQ6IHRoaXMuZmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0ZXI6dGhpcy51c2VyaW5mby54bSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdGVyaWQ6dGhpcy51c2VyaW5mby5nemgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBlLmRldGFpbC52YWx1ZS50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VtbWFyeTplLmRldGFpbC52YWx1ZS5ib2R5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWd1cmU6JycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJtZG06dGhpcy51c2VyaW5mby5ibWRtLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBibW1jOnRoaXMudXNlcmluZm8uYm1tYyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9sZTp0aGlzLnVzZXJpbmZvLnJvbGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OnRoaXMuY2F0ZWdvcnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzaWZ5OmUuZGV0YWlsLnZhbHVlLnR5cGUgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBsZXQgcmVzPWF3YWl0IHd4UmVxdWVzdCgncG9zdCcsY29uZmlnLnNlcnZpY2UuYWRkVG9waWNzKyc/aXA9Jyt0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5pcCxkYXRhKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICAgIGlmKHJlcyE9bnVsbClcclxuICAgICAgICAgICAgICB0aGlzLiRuYXZpZ2F0ZSgnLi9tc2dfc3VjY2Vzcz90aWQ9JytyZXMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiJdfQ==