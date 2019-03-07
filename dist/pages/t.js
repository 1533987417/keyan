'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var web = function (_wepy$page) {
  _inherits(web, _wepy$page);

  function web() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, web);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = web.__proto__ || Object.getPrototypeOf(web)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '设置'
    }, _this.data = {
      bigfont: Boolean
    }, _this.methods = {
      switch1Change: function switch1Change(e) {
        console.log(e.detail);
        if (!e.detail.value) {

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
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(web, [{
    key: 'onLoad',
    value: function onLoad(e) {
      this.bigfont = this.$parent.globalData.bigfont;
      this.$apply();
    }
  }]);

  return web;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(web , 'pages/t'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInQuanMiXSwibmFtZXMiOlsid2ViIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJiaWdmb250IiwiQm9vbGVhbiIsIm1ldGhvZHMiLCJzd2l0Y2gxQ2hhbmdlIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJkZXRhaWwiLCJ2YWx1ZSIsIiRwYXJlbnQiLCJnbG9iYWxEYXRhIiwiJGFwcGx5Iiwic2hvd1RvYXN0IiwidGl0bGUiLCJpY29uIiwiZHVyYXRpb24iLCJldmVudHMiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEc7Ozs7Ozs7Ozs7Ozs7O2dMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVRDLEksR0FBTztBQUNOQyxlQUFRQztBQURGLEssUUFJUEMsTyxHQUFVO0FBQ1JDLG1CQURRLHlCQUNNQyxDQUROLEVBQ1E7QUFDZEMsZ0JBQVFDLEdBQVIsQ0FBWUYsRUFBRUcsTUFBZDtBQUNBLFlBQUksQ0FBQ0gsRUFBRUcsTUFBRixDQUFTQyxLQUFkLEVBQXFCOztBQUVqQixlQUFLQyxPQUFMLENBQWFDLFVBQWIsQ0FBd0JWLE9BQXhCLEdBQWdDLEtBQWhDO0FBQ0EsZUFBS0EsT0FBTCxHQUFhLEtBQWI7QUFDQSxlQUFLVyxNQUFMO0FBQ0QsU0FMSCxNQUtPO0FBQ0gseUJBQUtDLFNBQUwsQ0FBZTtBQUNUQyxtQkFBTyxZQURFO0FBRVRDLGtCQUFNLE1BRkc7QUFHVEMsc0JBQVU7QUFIRCxXQUFmO0FBS0YsZUFBS04sT0FBTCxDQUFhQyxVQUFiLENBQXdCVixPQUF4QixHQUFnQyxJQUFoQztBQUNBLGVBQUtBLE9BQUwsR0FBYSxJQUFiO0FBQ0EsZUFBS1csTUFBTDtBQUNEO0FBRUY7QUFuQk8sSyxRQXNCVkssTSxHQUFTLEU7Ozs7OzJCQUVGWixDLEVBQUc7QUFDUixXQUFLSixPQUFMLEdBQWEsS0FBS1MsT0FBTCxDQUFhQyxVQUFiLENBQXdCVixPQUFyQztBQUNBLFdBQUtXLE1BQUw7QUFDRDs7OztFQXBDOEIsZUFBS00sSTs7a0JBQWpCckIsRyIsImZpbGUiOiJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB3ZWIgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gIGNvbmZpZyA9IHtcclxuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICforr7nva4nXHJcbiAgfVxyXG5cclxuICBkYXRhID0ge1xyXG4gICBiaWdmb250OkJvb2xlYW5cclxuICB9XHJcblxyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICBzd2l0Y2gxQ2hhbmdlKGUpe1xyXG4gICAgICBjb25zb2xlLmxvZyhlLmRldGFpbClcclxuICAgICAgaWYgKCFlLmRldGFpbC52YWx1ZSkge1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5iaWdmb250PWZhbHNlXHJcbiAgICAgICAgICB0aGlzLmJpZ2ZvbnQ9ZmFsc2VcclxuICAgICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAn5aSn5Y+35a2X5L2T6YOo5YiG5paH5a2X5pyJ5pWIJyxcclxuICAgICAgICAgICAgICAgIGljb246ICdub25lJyxcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS5iaWdmb250PXRydWVcclxuICAgICAgICB0aGlzLmJpZ2ZvbnQ9dHJ1ZVxyXG4gICAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGV2ZW50cyA9IHt9XHJcblxyXG4gIG9uTG9hZChlKSB7XHJcbiAgICB0aGlzLmJpZ2ZvbnQ9dGhpcy4kcGFyZW50Lmdsb2JhbERhdGEuYmlnZm9udFxyXG4gICAgdGhpcy4kYXBwbHkoKVxyXG4gIH1cclxufVxyXG4iXX0=