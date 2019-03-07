'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _base = require('./../images/base64.js');

var _base2 = _interopRequireDefault(_base);

var _tip = require('./js/tip.js');

var _tip2 = _interopRequireDefault(_tip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Settings = function (_wepy$page) {
  _inherits(Settings, _wepy$page);

  function Settings() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Settings);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Settings.__proto__ || Object.getPrototypeOf(Settings)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '个人中心',
      navigationBarBackgroundColor: "#FF7181FF",
      navigationBarTextStyle: "white"

    }, _this.data = {
      userInfo: {
        nickName: 'loading...'

      },
      gzh: Number,

      icon8080: _base2.default.icon8080,
      auth: true,
      bigfont: false

    }, _this.methods = {
      onShareAppMessage: function onShareAppMessage(res) {

        if (res.from === 'button') {
          // 来自页面内转发按钮
          console.log(res.target);
        }
        return {
          title: "科研管理",
          path: '/pages/index',
          success: function success(res) {
            // 转发成功
          },
          fail: function fail(res) {
            // 转发失败
          }
        };
      },
      change: function change() {
        console.log(this.bigfont);
        //this.$parent.globalData.bigfont=true

        if (this.bigfont) {

          this.$parent.globalData.bigfont = false;
          this.bigfont = false;
          this.$apply();
        } else {
          _wepy2.default.showToast({
            title: '大号字体部分文字有效',
            icon: 'none',
            duration: 1000
          });
          this.$parent.globalData.bigfont = true;
          this.bigfont = true;
          this.$apply();
        }
      }
    }, _this.watch = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Settings, [{
    key: 'onLoad',
    value: function onLoad() {

      this.gzh = this.$parent.globalData.userinfo.gzh;
    }
  }]);

  return Settings;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Settings , 'pages/settings'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmdzLmpzIl0sIm5hbWVzIjpbIlNldHRpbmdzIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3IiLCJuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlIiwiZGF0YSIsInVzZXJJbmZvIiwibmlja05hbWUiLCJnemgiLCJOdW1iZXIiLCJpY29uODA4MCIsImF1dGgiLCJiaWdmb250IiwibWV0aG9kcyIsIm9uU2hhcmVBcHBNZXNzYWdlIiwicmVzIiwiZnJvbSIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJ0aXRsZSIsInBhdGgiLCJzdWNjZXNzIiwiZmFpbCIsImNoYW5nZSIsIiRwYXJlbnQiLCJnbG9iYWxEYXRhIiwiJGFwcGx5Iiwic2hvd1RvYXN0IiwiaWNvbiIsImR1cmF0aW9uIiwid2F0Y2giLCJ1c2VyaW5mbyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLFE7Ozs7Ozs7Ozs7Ozs7OzBMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QixNQURqQjtBQUVQQyxvQ0FBNkIsV0FGdEI7QUFHUEMsOEJBQXVCOztBQUhoQixLLFFBU1RDLEksR0FBTztBQUNMQyxnQkFBVTtBQUNSQyxrQkFBVTs7QUFERixPQURMO0FBS0xDLFdBQUlDLE1BTEM7O0FBT0xDLGdCQUFTLGVBQU9BLFFBUFg7QUFRTEMsWUFBSyxJQVJBO0FBU0xDLGVBQVE7O0FBVEgsSyxRQWFQQyxPLEdBQVU7QUFHUkMsdUJBSFEsNkJBR1VDLEdBSFYsRUFHZTs7QUFFbkIsWUFBSUEsSUFBSUMsSUFBSixLQUFhLFFBQWpCLEVBQTJCO0FBQ3pCO0FBQ0FDLGtCQUFRQyxHQUFSLENBQVlILElBQUlJLE1BQWhCO0FBRUQ7QUFDRCxlQUFPO0FBQ0xDLGlCQUFPLE1BREY7QUFFTEMsZ0JBQU0sY0FGRDtBQUdMQyxtQkFBUyxpQkFBU1AsR0FBVCxFQUFjO0FBQ3JCO0FBQ0QsV0FMSTtBQU1MUSxnQkFBTSxjQUFTUixHQUFULEVBQWM7QUFDbEI7QUFDRDtBQVJJLFNBQVA7QUFVRCxPQXBCSztBQXFCTlMsWUFyQk0sb0JBcUJFO0FBQ05QLGdCQUFRQyxHQUFSLENBQVksS0FBS04sT0FBakI7QUFDQTs7QUFFQSxZQUFJLEtBQUtBLE9BQVQsRUFBa0I7O0FBRWhCLGVBQUthLE9BQUwsQ0FBYUMsVUFBYixDQUF3QmQsT0FBeEIsR0FBZ0MsS0FBaEM7QUFDQSxlQUFLQSxPQUFMLEdBQWEsS0FBYjtBQUNBLGVBQUtlLE1BQUw7QUFDRCxTQUxELE1BS0s7QUFDSCx5QkFBS0MsU0FBTCxDQUFlO0FBQ1RSLG1CQUFPLFlBREU7QUFFVFMsa0JBQU0sTUFGRztBQUdUQyxzQkFBVTtBQUhELFdBQWY7QUFLRixlQUFLTCxPQUFMLENBQWFDLFVBQWIsQ0FBd0JkLE9BQXhCLEdBQWdDLElBQWhDO0FBQ0EsZUFBS0EsT0FBTCxHQUFhLElBQWI7QUFDQSxlQUFLZSxNQUFMO0FBQWM7QUFDZjtBQXZDSyxLLFFBMENWSSxLLEdBQVEsRTs7Ozs7NkJBSUM7O0FBRU4sV0FBS3ZCLEdBQUwsR0FBUyxLQUFLaUIsT0FBTCxDQUFhQyxVQUFiLENBQXdCTSxRQUF4QixDQUFpQ3hCLEdBQTFDO0FBU0Y7Ozs7RUFoRm1DLGVBQUt5QixJOztrQkFBdEJqQyxRIiwiZmlsZSI6InNldHRpbmdzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCBiYXNlNjQgZnJvbSAnLi4vaW1hZ2VzL2Jhc2U2NCdcclxuaW1wb3J0IHRpcCBmcm9tICcuLi9wYWdlcy9qcy90aXAnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXR0aW5ncyBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+S4quS6uuS4reW/gycsXHJcbiAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOlwiI0ZGNzE4MUZGXCIsXHJcbiAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOlwid2hpdGVcIixcclxuXHJcblxyXG5cclxuICB9XHJcblxyXG4gIGRhdGEgPSB7XHJcbiAgICB1c2VySW5mbzoge1xyXG4gICAgICBuaWNrTmFtZTogJ2xvYWRpbmcuLi4nLFxyXG4gICAgICBcclxuICAgIH0sXHJcbiAgICBnemg6TnVtYmVyLFxyXG4gICAgXHJcbiAgICBpY29uODA4MDpiYXNlNjQuaWNvbjgwODAsXHJcbiAgICBhdXRoOnRydWUsXHJcbiAgICBiaWdmb250OmZhbHNlXHJcblxyXG4gIH1cclxuXHJcbiAgbWV0aG9kcyA9IHtcclxuICAgIFxyXG4gICAgXHJcbiAgICBvblNoYXJlQXBwTWVzc2FnZShyZXMpIHtcclxuXHJcbiAgICAgICAgaWYgKHJlcy5mcm9tID09PSAnYnV0dG9uJykge1xyXG4gICAgICAgICAgLy8g5p2l6Ieq6aG16Z2i5YaF6L2s5Y+R5oyJ6ZKuXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMudGFyZ2V0KVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHRpdGxlOiBcIuenkeeglOeuoeeQhlwiLFxyXG4gICAgICAgICAgcGF0aDogJy9wYWdlcy9pbmRleCcsXHJcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgLy8g6L2s5Y+R5oiQ5YqfXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZmFpbDogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICAgIC8vIOi9rOWPkeWksei0pVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgY2hhbmdlKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5iaWdmb250KVxyXG4gICAgICAgIC8vdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuYmlnZm9udD10cnVlXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHRoaXMuYmlnZm9udCkge1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5iaWdmb250PWZhbHNlXHJcbiAgICAgICAgICB0aGlzLmJpZ2ZvbnQ9ZmFsc2VcclxuICAgICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAn5aSn5Y+35a2X5L2T6YOo5YiG5paH5a2X5pyJ5pWIJyxcclxuICAgICAgICAgICAgICAgIGljb246ICdub25lJyxcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5iaWdmb250PXRydWVcclxuICAgICAgICB0aGlzLmJpZ2ZvbnQ9dHJ1ZVxyXG4gICAgICAgIHRoaXMuJGFwcGx5KCl9XHJcbiAgICAgIH1cclxuICB9XHJcblxyXG4gIHdhdGNoID0ge1xyXG4gICAgXHJcbn1cclxuICBcclxuICBvbkxvYWQoKSB7XHJcbiAgICBcclxuICAgICB0aGlzLmd6aD10aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS51c2VyaW5mby5nemg7XHJcbiAgICAgXHJcbiAgICBcclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICBcclxuICAgICBcclxuICAgICBcclxuICB9XHJcbn1cclxuIl19