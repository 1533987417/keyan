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

var Searchbar = function (_wepy$component) {
    _inherits(Searchbar, _wepy$component);

    function Searchbar() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Searchbar);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Searchbar.__proto__ || Object.getPrototypeOf(Searchbar)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
            height: 0
        }, _this.props = {
            fid: String
        }, _this.methods = {
            disappear: function disappear() {
                this.height = -96;
                this.$apply();
            },
            appear: function appear() {
                this.height = 0;
                this.$apply();
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Searchbar;
}(_wepy2.default.component);

exports.default = Searchbar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaGJhci5qcyJdLCJuYW1lcyI6WyJTZWFyY2hiYXIiLCJkYXRhIiwiaGVpZ2h0IiwicHJvcHMiLCJmaWQiLCJTdHJpbmciLCJtZXRob2RzIiwiZGlzYXBwZWFyIiwiJGFwcGx5IiwiYXBwZWFyIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDSTs7Ozs7Ozs7Ozs7O0lBRXFCQSxTOzs7Ozs7Ozs7Ozs7OztnTUFFakJDLEksR0FBTztBQUNIQyxvQkFBTztBQURKLFMsUUFHUEMsSyxHQUFNO0FBQ0pDLGlCQUFLQztBQURELFMsUUFHTkMsTyxHQUFVO0FBQ05DLHFCQURNLHVCQUNLO0FBQ1AscUJBQUtMLE1BQUwsR0FBWSxDQUFDLEVBQWI7QUFDQSxxQkFBS00sTUFBTDtBQUNILGFBSks7QUFLTkMsa0JBTE0sb0JBS0U7QUFDSixxQkFBS1AsTUFBTCxHQUFZLENBQVo7QUFDQSxxQkFBS00sTUFBTDtBQUNIO0FBUkssUzs7OztFQVJ5QixlQUFLRSxTOztrQkFBdkJWLFMiLCJmaWxlIjoic2VhcmNoYmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaGJhciBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcblxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgaGVpZ2h0OjBcbiAgICAgICAgfTtcbiAgICAgICAgcHJvcHM9e1xuICAgICAgICAgIGZpZDogU3RyaW5nXG4gICAgICAgIH1cbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIGRpc2FwcGVhcigpe1xuICAgICAgICAgICAgICAgIHRoaXMuaGVpZ2h0PS05NlxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhcHBlYXIoKXtcbiAgICAgICAgICAgICAgICB0aGlzLmhlaWdodD0wXG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuIl19