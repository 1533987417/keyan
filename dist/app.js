'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

var _db = require('./pages/js/db.js');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_wepy$app) {
    _inherits(_class, _wepy$app);

    function _class() {
        _classCallCheck(this, _class);

        var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

        _this.config = {

            'pages': ['pages/index', 'pages/indextemp', 'pages/t', 'pages/share', 'pages/report', 'pages/bind', 'pages/advice', 'pages/myPosts', 'pages/collegeTopics', 'pages/searchresult', 'pages/require', 'pages/msg_success', 'pages/interaction', 'pages/article', 'pages/detail', 'pages/teacherinfo', 'pages/web', 'pages/dynamic', 'pages/zcinfo', 'pages/inform', 'pages/banshi', 'pages/mytopic', 'pages/publish', 'pages/Topten', 'pages/settings'],
            'window': {
                'navigationBarTextStyle': 'black',
                'navigationBarTitleText': 'WeUI in WePY',
                'navigationBarBackgroundColor': '#f8f8f8',
                'backgroundColor': '#f8f8f8',

                'enablePullDownRefresh': false,
                'onReachBottomDistance': 100

            },

            'networkTimeout': {
                'request': 10000,
                'connectSocket': 10000,
                'uploadFile': 10000,
                'downloadFile': 10000
            },
            /*tabBar: {
              color: '#929292',
              selectedColor: '#ff9630',
              backgroundColor: '#f7f7f8',
              borderStyle: 'white',
              list: [{
                pagePath: 'pages/indextemp',
                text: '首页',
                iconPath: './images/home-outline.png',
                selectedIconPath: './images/home-selected.png'
            }, {
                pagePath: 'pages/settings',
                text: '个人',
                iconPath: './images/settings-outline.png',
                selectedIconPath: './images/settings-selected.png'
            }]
            },*/
            "plugins": {
                "wxparserPlugin": {
                    "version": "0.1.0",
                    "provider": "wx9d4d4ffa781ff3ac"
                }

            }
        };
        _this.globalData = {
            userinfo: {
                gzh: String,
                xm: String,
                bmdm: String,
                bmmc: String,
                role: Number //1.只能查到个人，2.查学院

            },
            ip: 'wx',
            appid: 'wx6b121941b200ea50',
            secret: '36a76b0682bd2c3f1541fd012fac66f5',
            bigfont: false
        };

        _this.use('promisify');
        _this.use('requestfix');
        return _this;
    }

    _createClass(_class, [{
        key: 'onLaunch',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:

                                this.globalData.userinfo = _db2.default.Get('userinfo');
                                /*if(db.Get('token').length!=0){
                                    wepy.
                                 }*/
                                console.log(_db2.default.Get('userinfo'));
                                if (_db2.default.Get('userinfo').gzh == undefined || _db2.default.Get('userinfo').gzh == '') {
                                    _wepy2.default.showModal({
                                        title: "账号信息错误",
                                        content: "统一身份认证账号已过期！是否前往重新登陆？"
                                    }).then(function (d) {
                                        console.log(d);
                                        if (d.confirm) {
                                            wx.redirectTo({ url: 'bind' });
                                        }
                                    });
                                }

                            case 3:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function onLaunch() {
                return _ref.apply(this, arguments);
            }

            return onLaunch;
        }()
    }, {
        key: 'onShow',
        value: function onShow(e) {
            console.log(e.scene);
        }
    }]);

    return _class;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_class, {}));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJnbG9iYWxEYXRhIiwidXNlcmluZm8iLCJnemgiLCJTdHJpbmciLCJ4bSIsImJtZG0iLCJibW1jIiwicm9sZSIsIk51bWJlciIsImlwIiwiYXBwaWQiLCJzZWNyZXQiLCJiaWdmb250IiwidXNlIiwiR2V0IiwiY29uc29sZSIsImxvZyIsInVuZGVmaW5lZCIsInNob3dNb2RhbCIsInRpdGxlIiwiY29udGVudCIsInRoZW4iLCJkIiwiY29uZmlybSIsInd4IiwicmVkaXJlY3RUbyIsInVybCIsImUiLCJzY2VuZSIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQTRGSSxzQkFBZTtBQUFBOztBQUFBOztBQUFBLGNBckZmQSxNQXFGZSxHQXJGTjs7QUFFTCxxQkFBUyxDQUNULGFBRFMsRUFFVCxpQkFGUyxFQUVTLFNBRlQsRUFJVCxhQUpTLEVBS1QsY0FMUyxFQU1ULFlBTlMsRUFPVCxjQVBTLEVBUVQsZUFSUyxFQVNULHFCQVRTLEVBVVQsb0JBVlMsRUFXVCxlQVhTLEVBV08sbUJBWFAsRUFZVCxtQkFaUyxFQWFULGVBYlMsRUFjVCxjQWRTLEVBZVQsbUJBZlMsRUFnQlQsV0FoQlMsRUFpQlQsZUFqQlMsRUFrQlQsY0FsQlMsRUFtQlIsY0FuQlEsRUFvQlIsY0FwQlEsRUFxQlIsZUFyQlEsRUFzQlQsZUF0QlMsRUF1QlQsY0F2QlMsRUF3QlIsZ0JBeEJRLENBRko7QUE0Qkwsc0JBQVU7QUFDTiwwQ0FBMEIsT0FEcEI7QUFFTiwwQ0FBMEIsY0FGcEI7QUFHTixnREFBZ0MsU0FIMUI7QUFJTixtQ0FBbUIsU0FKYjs7QUFNTix5Q0FBd0IsS0FObEI7QUFPTix5Q0FBd0I7O0FBUGxCLGFBNUJMOztBQXVDTCw4QkFBa0I7QUFDZCwyQkFBVyxLQURHO0FBRWQsaUNBQWlCLEtBRkg7QUFHZCw4QkFBYyxLQUhBO0FBSWQsZ0NBQWdCO0FBSkYsYUF2Q2I7QUE2Q0w7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBLHVCQUFVO0FBQ0Ysa0NBQWlCO0FBQ2IsK0JBQVUsT0FERztBQUViLGdDQUFXO0FBRkU7O0FBRGY7QUE5REwsU0FxRk07QUFBQSxjQWZoQkMsVUFlZ0IsR0FmSDtBQUNKQyxzQkFBUztBQUNMQyxxQkFBSUMsTUFEQztBQUVMQyxvQkFBR0QsTUFGRTtBQUdMRSxzQkFBTUYsTUFIRDtBQUlMRyxzQkFBT0gsTUFKRjtBQUtMSSxzQkFBS0MsTUFMQSxDQUtPOztBQUxQLGFBREw7QUFTSkMsZ0JBQUcsSUFUQztBQVVKQyxtQkFBTyxvQkFWSDtBQVdKQyxvQkFBUSxrQ0FYSjtBQVlKQyxxQkFBUTtBQVpKLFNBZUc7O0FBRVgsY0FBS0MsR0FBTCxDQUFTLFdBQVQ7QUFDQSxjQUFLQSxHQUFMLENBQVMsWUFBVDtBQUhXO0FBSWQ7Ozs7Ozs7Ozs7O0FBSUUscUNBQUtiLFVBQUwsQ0FBZ0JDLFFBQWhCLEdBQXlCLGFBQUdhLEdBQUgsQ0FBTyxVQUFQLENBQXpCO0FBQ0M7OztBQUlBQyx3Q0FBUUMsR0FBUixDQUFZLGFBQUdGLEdBQUgsQ0FBTyxVQUFQLENBQVo7QUFDQSxvQ0FBRyxhQUFHQSxHQUFILENBQU8sVUFBUCxFQUFtQlosR0FBbkIsSUFBd0JlLFNBQXhCLElBQW1DLGFBQUdILEdBQUgsQ0FBTyxVQUFQLEVBQW1CWixHQUFuQixJQUF3QixFQUE5RCxFQUFpRTtBQUM3RCxtREFBS2dCLFNBQUwsQ0FBZTtBQUNmQywrQ0FBTyxRQURRO0FBRWZDLGlEQUFTO0FBRk0scUNBQWYsRUFHR0MsSUFISCxDQUdRLFVBQUNDLENBQUQsRUFBSztBQUNUUCxnREFBUUMsR0FBUixDQUFZTSxDQUFaO0FBQ0EsNENBQUdBLEVBQUVDLE9BQUwsRUFBYTtBQUNUQywrQ0FBR0MsVUFBSCxDQUFjLEVBQUNDLEtBQUksTUFBTCxFQUFkO0FBQ0g7QUFDSixxQ0FSRDtBQVNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7K0JBR0VDLEMsRUFBRTtBQUNMWixvQkFBUUMsR0FBUixDQUFZVyxFQUFFQyxLQUFkO0FBQ0g7Ozs7RUFwSHdCLGVBQUtDLEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJ1xuaW1wb3J0IGRiIGZyb20gJy4vcGFnZXMvanMvZGInXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgd2VweS5hcHAge1xuXG4gICAgY29uZmlnID0ge1xuXG4gICAgICAgICdwYWdlcyc6IFtcbiAgICAgICAgJ3BhZ2VzL2luZGV4JyxcbiAgICAgICAgJ3BhZ2VzL2luZGV4dGVtcCcsJ3BhZ2VzL3QnLFxuXG4gICAgICAgICdwYWdlcy9zaGFyZScsXG4gICAgICAgICdwYWdlcy9yZXBvcnQnLFxuICAgICAgICAncGFnZXMvYmluZCcsXG4gICAgICAgICdwYWdlcy9hZHZpY2UnLFxuICAgICAgICAncGFnZXMvbXlQb3N0cycsXG4gICAgICAgICdwYWdlcy9jb2xsZWdlVG9waWNzJyxcbiAgICAgICAgJ3BhZ2VzL3NlYXJjaHJlc3VsdCcsXG4gICAgICAgICdwYWdlcy9yZXF1aXJlJywncGFnZXMvbXNnX3N1Y2Nlc3MnLFxuICAgICAgICAncGFnZXMvaW50ZXJhY3Rpb24nLFxuICAgICAgICAncGFnZXMvYXJ0aWNsZScsXG4gICAgICAgICdwYWdlcy9kZXRhaWwnLFxuICAgICAgICAncGFnZXMvdGVhY2hlcmluZm8nLFxuICAgICAgICAncGFnZXMvd2ViJyxcbiAgICAgICAgJ3BhZ2VzL2R5bmFtaWMnLFxuICAgICAgICAncGFnZXMvemNpbmZvJyxcbiAgICAgICAgICdwYWdlcy9pbmZvcm0nLFxuICAgICAgICAgJ3BhZ2VzL2JhbnNoaScsXG4gICAgICAgICAncGFnZXMvbXl0b3BpYycsXG4gICAgICAgICdwYWdlcy9wdWJsaXNoJyxcbiAgICAgICAgJ3BhZ2VzL1RvcHRlbicsXG4gICAgICAgICAncGFnZXMvc2V0dGluZ3MnLFxuICAgICAgICBdLFxuICAgICAgICAnd2luZG93Jzoge1xuICAgICAgICAgICAgJ25hdmlnYXRpb25CYXJUZXh0U3R5bGUnOiAnYmxhY2snLFxuICAgICAgICAgICAgJ25hdmlnYXRpb25CYXJUaXRsZVRleHQnOiAnV2VVSSBpbiBXZVBZJyxcbiAgICAgICAgICAgICduYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yJzogJyNmOGY4ZjgnLFxuICAgICAgICAgICAgJ2JhY2tncm91bmRDb2xvcic6ICcjZjhmOGY4JyxcblxuICAgICAgICAgICAgJ2VuYWJsZVB1bGxEb3duUmVmcmVzaCc6ZmFsc2UsXG4gICAgICAgICAgICAnb25SZWFjaEJvdHRvbURpc3RhbmNlJzoxMDBcblxuICAgICAgICB9LFxuICAgICAgICBcbiAgICAgICAgJ25ldHdvcmtUaW1lb3V0Jzoge1xuICAgICAgICAgICAgJ3JlcXVlc3QnOiAxMDAwMCxcbiAgICAgICAgICAgICdjb25uZWN0U29ja2V0JzogMTAwMDAsXG4gICAgICAgICAgICAndXBsb2FkRmlsZSc6IDEwMDAwLFxuICAgICAgICAgICAgJ2Rvd25sb2FkRmlsZSc6IDEwMDAwXG4gICAgICAgIH0sXG4gICAgICAgIC8qdGFiQmFyOiB7XG4gICAgICAgICAgY29sb3I6ICcjOTI5MjkyJyxcbiAgICAgICAgICBzZWxlY3RlZENvbG9yOiAnI2ZmOTYzMCcsXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2Y3ZjdmOCcsXG4gICAgICAgICAgYm9yZGVyU3R5bGU6ICd3aGl0ZScsXG4gICAgICAgICAgbGlzdDogW3tcbiAgICAgICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvaW5kZXh0ZW1wJyxcbiAgICAgICAgICAgIHRleHQ6ICfpppbpobUnLFxuICAgICAgICAgICAgaWNvblBhdGg6ICcuL2ltYWdlcy9ob21lLW91dGxpbmUucG5nJyxcbiAgICAgICAgICAgIHNlbGVjdGVkSWNvblBhdGg6ICcuL2ltYWdlcy9ob21lLXNlbGVjdGVkLnBuZydcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9zZXR0aW5ncycsXG4gICAgICAgICAgICB0ZXh0OiAn5Liq5Lq6JyxcbiAgICAgICAgICAgIGljb25QYXRoOiAnLi9pbWFnZXMvc2V0dGluZ3Mtb3V0bGluZS5wbmcnLFxuICAgICAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJy4vaW1hZ2VzL3NldHRpbmdzLXNlbGVjdGVkLnBuZydcbiAgICAgICAgfV1cbiAgICB9LCovXG4gICAgICAgIFwicGx1Z2luc1wiOntcbiAgICAgICAgICAgICAgICBcInd4cGFyc2VyUGx1Z2luXCI6e1xuICAgICAgICAgICAgICAgICAgICBcInZlcnNpb25cIjpcIjAuMS4wXCIsXG4gICAgICAgICAgICAgICAgICAgIFwicHJvdmlkZXJcIjpcInd4OWQ0ZDRmZmE3ODFmZjNhY1wiXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgfTtcbiAgIGdsb2JhbERhdGEgPSB7XG4gICAgICAgICAgICB1c2VyaW5mbzp7XG4gICAgICAgICAgICAgICAgZ3poOlN0cmluZyxcbiAgICAgICAgICAgICAgICB4bTpTdHJpbmcsXG4gICAgICAgICAgICAgICAgYm1kbSA6U3RyaW5nLFxuICAgICAgICAgICAgICAgIGJtbWMgOiBTdHJpbmcsXG4gICAgICAgICAgICAgICAgcm9sZTpOdW1iZXIsLy8xLuWPquiDveafpeWIsOS4quS6uu+8jDIu5p+l5a2m6ZmiXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaXA6J3d4JyxcbiAgICAgICAgICAgIGFwcGlkOiAnd3g2YjEyMTk0MWIyMDBlYTUwJyxcbiAgICAgICAgICAgIHNlY3JldDogJzM2YTc2YjA2ODJiZDJjM2YxNTQxZmQwMTJmYWM2NmY1JyxcbiAgICAgICAgICAgIGJpZ2ZvbnQ6ZmFsc2VcbiAgICAgICAgfTtcblxuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy51c2UoJ3Byb21pc2lmeScpO1xuICAgICAgICB0aGlzLnVzZSgncmVxdWVzdGZpeCcpO1xuICAgIH1cbiAgICBcbiAgYXN5bmMgIG9uTGF1bmNoKCl7XG4gICAgICAgIFxuICAgICAgIHRoaXMuZ2xvYmFsRGF0YS51c2VyaW5mbz1kYi5HZXQoJ3VzZXJpbmZvJylcbiAgICAgICAgLyppZihkYi5HZXQoJ3Rva2VuJykubGVuZ3RoIT0wKXtcbiAgICAgICAgICAgIHdlcHkuXG5cbiAgICAgICAgfSovXG4gICAgICAgIGNvbnNvbGUubG9nKGRiLkdldCgndXNlcmluZm8nKSlcbiAgICAgICAgaWYoZGIuR2V0KCd1c2VyaW5mbycpLmd6aD09dW5kZWZpbmVkfHxkYi5HZXQoJ3VzZXJpbmZvJykuZ3poPT0nJyl7XG4gICAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICAgICAgICB0aXRsZTogXCLotKblj7fkv6Hmga/plJnor69cIixcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwi57uf5LiA6Lqr5Lu96K6k6K+B6LSm5Y+35bey6L+H5pyf77yB5piv5ZCm5YmN5b6A6YeN5paw55m76ZmG77yfXCJcbiAgICAgICAgICAgIH0pLnRoZW4oKGQpPT57XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZClcbiAgICAgICAgICAgICAgICBpZihkLmNvbmZpcm0pe1xuICAgICAgICAgICAgICAgICAgICB3eC5yZWRpcmVjdFRvKHt1cmw6J2JpbmQnfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIG9uU2hvdyhlKXtcbiAgICAgICAgY29uc29sZS5sb2coZS5zY2VuZSlcbiAgICB9XG4gICAgXG59XG4iXX0=