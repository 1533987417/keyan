'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _data = require('./../data/data.js');

var _data2 = _interopRequireDefault(_data);

var _empty = require('./empty.js');

var _empty2 = _interopRequireDefault(_empty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var infolist = function (_wepy$component) {
  _inherits(infolist, _wepy$component);

  function infolist() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, infolist);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = infolist.__proto__ || Object.getPrototypeOf(infolist)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      info: [],
      isNone: Boolean

    }, _this.$repeat = {}, _this.$props = { "empty": { "xmlns:v-bind": "", "v-bind:isNone.sync": "isNone" } }, _this.$events = {}, _this.components = {
      empty: _empty2.default

    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(infolist, [{
    key: 'onLoad',
    value: function onLoad() {
      console.log(this.info);
    }
  }]);

  return infolist;
}(_wepy2.default.component);

exports.default = infolist;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc3VsdGxpc3QuanMiXSwibmFtZXMiOlsiaW5mb2xpc3QiLCJwcm9wcyIsImluZm8iLCJpc05vbmUiLCJCb29sZWFuIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiZW1wdHkiLCJtZXRob2RzIiwiY29uc29sZSIsImxvZyIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsUTs7Ozs7Ozs7Ozs7Ozs7MExBRVhDLEssR0FBTTtBQUNKQyxZQUFLLEVBREQ7QUFFSkMsY0FBT0M7O0FBRkgsSyxRQUtQQyxPLEdBQVUsRSxRQUNuQkMsTSxHQUFTLEVBQUMsU0FBUSxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLHNCQUFxQixRQUF4QyxFQUFULEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFXO0FBQ0FDOztBQURBLEssUUFJRkMsTyxHQUFRLEU7Ozs7OzZCQUdBO0FBQ05DLGNBQVFDLEdBQVIsQ0FBWSxLQUFLVixJQUFqQjtBQUNEOzs7O0VBbkIyQixlQUFLVyxTOztrQkFBdEJiLFEiLCJmaWxlIjoicmVzdWx0bGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuaW1wb3J0IG5ld3NsaXN0IGZyb20gJy4uL2RhdGEvZGF0YSc7XHJcbmltcG9ydCBlbXB0eSBmcm9tICcuLi9jb21wb25lbnRzL2VtcHR5J1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBpbmZvbGlzdCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgcHJvcHM9e1xyXG4gICAgICAgICAgICBpbmZvOltdLFxyXG4gICAgICAgICAgICBpc05vbmU6Qm9vbGVhbixcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiZW1wdHlcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOmlzTm9uZS5zeW5jXCI6XCJpc05vbmVcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzPXtcclxuICAgICAgICAgICAgZW1wdHk6ZW1wdHlcclxuICBcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIG1ldGhvZHM9e1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBvbkxvYWQoKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5pbmZvKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAiXX0=