'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _tip = require('./../pages/js/tip.js');

var _tip2 = _interopRequireDefault(_tip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$component) {
    _inherits(Index, _wepy$component);

    function Index() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Index);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.components = {
            //为两个相同组件的不同实例分配不同的组件ID，从而避免数据同步变化的问题

        }, _this.data = {}, _this.methods = {
            click: function click() {
                _tip2.default.confirm('打开app查看使用指南');
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Index;
}(_wepy2.default.component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbXBvbmVudHMiLCJkYXRhIiwibWV0aG9kcyIsImNsaWNrIiwiY29uZmlybSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0k7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7Ozt3TEFDakJDLFUsR0FBYTtBQUNUOztBQURTLFMsUUFJYkMsSSxHQUFLLEUsUUFJTEMsTyxHQUFRO0FBQ05DLGlCQURNLG1CQUNDO0FBQ0QsOEJBQUlDLE9BQUosQ0FBWSxhQUFaO0FBQ0w7QUFISyxTOzs7O0VBVHVCLGVBQUtDLFM7O2tCQUFuQk4sSyIsImZpbGUiOiJuYXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG4gICAgaW1wb3J0IHRpcCBmcm9tICcuLi9wYWdlcy9qcy90aXAnXHJcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuICAgICAgICBjb21wb25lbnRzID0ge1xyXG4gICAgICAgICAgICAvL+S4uuS4pOS4quebuOWQjOe7hOS7tueahOS4jeWQjOWunuS+i+WIhumFjeS4jeWQjOeahOe7hOS7tklE77yM5LuO6ICM6YG/5YWN5pWw5o2u5ZCM5q2l5Y+Y5YyW55qE6Zeu6aKYXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgZGF0YT17XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIH07XHJcbiAgICAgICAgbWV0aG9kcz17XHJcbiAgICAgICAgICBjbGljaygpe1xyXG4gICAgICAgICAgICAgICAgdGlwLmNvbmZpcm0oJ+aJk+W8gGFwcOafpeeci+S9v+eUqOaMh+WNlycpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4iXX0=