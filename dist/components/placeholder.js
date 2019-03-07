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

var Placeholder = function (_wepy$component) {
    _inherits(Placeholder, _wepy$component);

    function Placeholder() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Placeholder);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Placeholder.__proto__ || Object.getPrototypeOf(Placeholder)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
            show: {
                type: Boolean,
                default: true
            },
            message: {
                default: '没有相关信息'
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Placeholder;
}(_wepy2.default.component);

exports.default = Placeholder;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYWNlaG9sZGVyLmpzIl0sIm5hbWVzIjpbIlBsYWNlaG9sZGVyIiwicHJvcHMiLCJzaG93IiwidHlwZSIsIkJvb2xlYW4iLCJkZWZhdWx0IiwibWVzc2FnZSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsVzs7Ozs7Ozs7Ozs7Ozs7b01BQ2pCQyxLLEdBQVE7QUFDSkMsa0JBQU07QUFDRkMsc0JBQU1DLE9BREo7QUFFRkMseUJBQVM7QUFGUCxhQURGO0FBS0pDLHFCQUFTO0FBQ0xELHlCQUFTO0FBREo7QUFMTCxTOzs7O0VBRDZCLGVBQUtFLFM7O2tCQUF6QlAsVyIsImZpbGUiOiJwbGFjZWhvbGRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGFjZWhvbGRlciBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuICAgIHByb3BzID0ge1xyXG4gICAgICAgIHNob3c6IHtcclxuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICAgICAgZGVmYXVsdDogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWVzc2FnZToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiAn5rKh5pyJ55u45YWz5L+h5oGvJ1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuIl19