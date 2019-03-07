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

var test = function (_wepy$component) {
  _inherits(test, _wepy$component);

  function test() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, test);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = test.__proto__ || Object.getPrototypeOf(test)).call.apply(_ref, [this].concat(args))), _this), _this.components = {
      //为两个相同组件的不同实例分配不同的组件ID，从而避免数据同步变化的问题

    }, _this.props = {
      user: []
    }, _this.config = {}, _this.data = {
      gzh: String
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(test, [{
    key: 'onLoad',
    value: function onLoad() {
      this.gzh = this.$parent.$parent.globalData.userinfo.gzh;
    }
  }, {
    key: 'onShow',
    value: function onShow() {}
  }]);

  return test;
}(_wepy2.default.component);

exports.default = test;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlYWNoZXJpbmZvLmpzIl0sIm5hbWVzIjpbInRlc3QiLCJjb21wb25lbnRzIiwicHJvcHMiLCJ1c2VyIiwiY29uZmlnIiwiZGF0YSIsImd6aCIsIlN0cmluZyIsIm1ldGhvZHMiLCIkcGFyZW50IiwiZ2xvYmFsRGF0YSIsInVzZXJpbmZvIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNJOzs7Ozs7Ozs7Ozs7SUFHcUJBLEk7Ozs7Ozs7Ozs7Ozs7O2tMQUNqQkMsVSxHQUFhO0FBQ1Q7O0FBRFMsSyxRQUliQyxLLEdBQU07QUFDSkMsWUFBSztBQURELEssUUFHTkMsTSxHQUFTLEUsUUFHVEMsSSxHQUFLO0FBQ0hDLFdBQUlDO0FBREQsSyxRQVlMQyxPLEdBQVEsRTs7Ozs7NkJBVEE7QUFDTixXQUFLRixHQUFMLEdBQVMsS0FBS0csT0FBTCxDQUFhQSxPQUFiLENBQXFCQyxVQUFyQixDQUFnQ0MsUUFBaEMsQ0FBeUNMLEdBQWxEO0FBRUQ7Ozs2QkFDTyxDQUdQOzs7O0VBckI2QixlQUFLTSxTOztrQkFBbEJaLEkiLCJmaWxlIjoidGVhY2hlcmluZm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgICBcclxuICAgIFxyXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgdGVzdCBleHRlbmRzIHdlcHkuY29tcG9uZW50e1xyXG4gICAgICAgIGNvbXBvbmVudHMgPSB7XHJcbiAgICAgICAgICAgIC8v5Li65Lik5Liq55u45ZCM57uE5Lu255qE5LiN5ZCM5a6e5L6L5YiG6YWN5LiN5ZCM55qE57uE5Lu2SUTvvIzku47ogIzpgb/lhY3mlbDmja7lkIzmraXlj5jljJbnmoTpl67pophcclxuICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBwcm9wcz17XHJcbiAgICAgICAgICB1c2VyOltdXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbmZpZyA9IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgIH1cclxuICAgICAgICBkYXRhPXtcclxuICAgICAgICAgIGd6aDpTdHJpbmdcclxuICAgICAgICB9XHJcbiAgICAgICAgb25Mb2FkKCl7XHJcbiAgICAgICAgICB0aGlzLmd6aD10aGlzLiRwYXJlbnQuJHBhcmVudC5nbG9iYWxEYXRhLnVzZXJpbmZvLmd6aDtcclxuICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgb25TaG93KCl7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWV0aG9kcz17XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4iXX0=