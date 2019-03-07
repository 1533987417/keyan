'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var zanTab = function (_wepy$component) {
  _inherits(zanTab, _wepy$component);

  function zanTab() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, zanTab);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = zanTab.__proto__ || Object.getPrototypeOf(zanTab)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      tab: Object,
      componentId: String
    }, _this.data = {}, _this.methods = {
      handleZanTabChange: function handleZanTabChange(e) {
        var _e$currentTarget$data = e.currentTarget.dataset,
            componentId = _e$currentTarget$data.componentId,
            selectedId = _e$currentTarget$data.itemId;

        console.info('[zan:tab:change]', { componentId: componentId, selectedId: selectedId });
        this.$emit('zanTabChange', selectedId);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return zanTab;
}(_wepy2.default.component);

exports.default = zanTab;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYi5qcyJdLCJuYW1lcyI6WyJ6YW5UYWIiLCJwcm9wcyIsInRhYiIsIk9iamVjdCIsImNvbXBvbmVudElkIiwiU3RyaW5nIiwiZGF0YSIsIm1ldGhvZHMiLCJoYW5kbGVaYW5UYWJDaGFuZ2UiLCJlIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJzZWxlY3RlZElkIiwiaXRlbUlkIiwiY29uc29sZSIsImluZm8iLCIkZW1pdCIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsTTs7Ozs7Ozs7Ozs7Ozs7c0xBQ25CQyxLLEdBQVE7QUFDTkMsV0FBS0MsTUFEQztBQUVOQyxtQkFBYUM7QUFGUCxLLFFBSVJDLEksR0FBTyxFLFFBQ1BDLE8sR0FBVTtBQUNSQyx3QkFEUSw4QkFDV0MsQ0FEWCxFQUNjO0FBQUEsb0NBQ3NCQSxFQUFFQyxhQUFGLENBQWdCQyxPQUR0QztBQUFBLFlBQ2RQLFdBRGMseUJBQ2RBLFdBRGM7QUFBQSxZQUNPUSxVQURQLHlCQUNEQyxNQURDOztBQUVwQkMsZ0JBQVFDLElBQVIsQ0FBYSxrQkFBYixFQUFpQyxFQUFFWCx3QkFBRixFQUFlUSxzQkFBZixFQUFqQztBQUNBLGFBQUtJLEtBQUwsQ0FBVyxjQUFYLEVBQTJCSixVQUEzQjtBQUNEO0FBTE8sSzs7OztFQU53QixlQUFLSyxTOztrQkFBcEJqQixNIiwiZmlsZSI6InRhYi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgemFuVGFiIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xyXG4gIHByb3BzID0ge1xyXG4gICAgdGFiOiBPYmplY3QsXHJcbiAgICBjb21wb25lbnRJZDogU3RyaW5nXHJcbiAgfVxyXG4gIGRhdGEgPSB7fVxyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICBoYW5kbGVaYW5UYWJDaGFuZ2UoZSkge1xyXG4gICAgICBsZXQgeyBjb21wb25lbnRJZCwgaXRlbUlkOiBzZWxlY3RlZElkIH0gPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldFxyXG4gICAgICBjb25zb2xlLmluZm8oJ1t6YW46dGFiOmNoYW5nZV0nLCB7IGNvbXBvbmVudElkLCBzZWxlY3RlZElkIH0pXHJcbiAgICAgIHRoaXMuJGVtaXQoJ3phblRhYkNoYW5nZScsIHNlbGVjdGVkSWQpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==