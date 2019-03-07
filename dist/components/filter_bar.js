"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var filterBar = function (_wepy$component) {
  _inherits(filterBar, _wepy$component);

  function filterBar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, filterBar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = filterBar.__proto__ || Object.getPrototypeOf(filterBar)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      currentType: "",

      flag: false

    }, _this.components = {}, _this.methods = {
      orderBy: function orderBy(e) {
        console.log(e.target.dataset.current);
        this.currentType = e.target.dataset.current;
      }
    }, _this.watch = {
      currentType: function currentType(newValue) {
        this.$emit("currentType", {
          orderfield: newValue

        });
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return filterBar;
}(_wepy2.default.component);

exports.default = filterBar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbHRlcl9iYXIuanMiXSwibmFtZXMiOlsiZmlsdGVyQmFyIiwiZGF0YSIsImN1cnJlbnRUeXBlIiwiZmxhZyIsImNvbXBvbmVudHMiLCJtZXRob2RzIiwib3JkZXJCeSIsImUiLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwiZGF0YXNldCIsImN1cnJlbnQiLCJ3YXRjaCIsIm5ld1ZhbHVlIiwiJGVtaXQiLCJvcmRlcmZpZWxkIiwiZXZlbnRzIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBRXFCQSxTOzs7Ozs7Ozs7Ozs7Ozs0TEFDbkJDLEksR0FBTztBQUNMQyxtQkFBYSxFQURSOztBQUdMQyxZQUFNOztBQUhELEssUUFNUEMsVSxHQUFhLEUsUUFHYkMsTyxHQUFVO0FBRVJDLGFBRlEsbUJBRUFDLENBRkEsRUFFRztBQUNUQyxnQkFBUUMsR0FBUixDQUFZRixFQUFFRyxNQUFGLENBQVNDLE9BQVQsQ0FBaUJDLE9BQTdCO0FBQ0EsYUFBS1YsV0FBTCxHQUFpQkssRUFBRUcsTUFBRixDQUFTQyxPQUFULENBQWlCQyxPQUFsQztBQUNIO0FBTFMsSyxRQU9WQyxLLEdBQVE7QUFDTlgsaUJBRE0sdUJBQ01ZLFFBRE4sRUFDZ0I7QUFDcEIsYUFBS0MsS0FBTCxDQUFXLGFBQVgsRUFBMEI7QUFDeEJDLHNCQUFZRjs7QUFEWSxTQUExQjtBQUlEO0FBTkssSyxRQVNSRyxNLEdBQVMsRTs7OztFQTFCNEIsZUFBS0MsUzs7a0JBQXZCbEIsUyIsImZpbGUiOiJmaWx0ZXJfYmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgZmlsdGVyQmFyIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xyXG4gICAgZGF0YSA9IHtcclxuICAgICAgY3VycmVudFR5cGU6IFwiXCIsXHJcbiAgICAgIFxyXG4gICAgICBmbGFnOiBmYWxzZSxcclxuICAgICAgXHJcbiAgICB9XHJcbiAgICBjb21wb25lbnRzID0ge1xyXG4gICAgICBcclxuICAgIH1cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgIFxyXG4gICAgICBvcmRlckJ5KGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5kYXRhc2V0LmN1cnJlbnQpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFR5cGU9ZS50YXJnZXQuZGF0YXNldC5jdXJyZW50O1xyXG4gICAgfX1cclxuICAgXHJcbiAgICB3YXRjaCA9IHtcclxuICAgICAgY3VycmVudFR5cGUobmV3VmFsdWUpIHtcclxuICAgICAgICB0aGlzLiRlbWl0KFwiY3VycmVudFR5cGVcIiwge1xyXG4gICAgICAgICAgb3JkZXJmaWVsZDogbmV3VmFsdWUsXHJcbiAgICAgICAgICBcclxuICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgICAgXHJcbiAgICB9XHJcbiAgICBldmVudHMgPSB7XHJcbiAgICAgIFxyXG4gICAgfVxyXG4gIH1cclxuIl19