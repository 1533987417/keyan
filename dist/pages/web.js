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
      navigationBarTitleText: '校内通知'
    }, _this.data = {
      src: String
    }, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(web, [{
    key: 'onLoad',
    value: function onLoad(e) {
      console.log(e);
      e.url = e.url.replace('%3F', '?');
      e.url = e.url.replace('%3D', '=');
      this.src = e.url;
      this.$apply();
    }
  }]);

  return web;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(web , 'pages/web'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYi5qcyJdLCJuYW1lcyI6WyJ3ZWIiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInNyYyIsIlN0cmluZyIsIm1ldGhvZHMiLCJldmVudHMiLCJlIiwiY29uc29sZSIsImxvZyIsInVybCIsInJlcGxhY2UiLCIkYXBwbHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEc7Ozs7Ozs7Ozs7Ozs7O2dMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBSVRDLEksR0FBTztBQUNOQyxXQUFJQztBQURFLEssUUFJUEMsTyxHQUFVLEUsUUFFVkMsTSxHQUFTLEU7Ozs7OzJCQUVGQyxDLEVBQUc7QUFDUkMsY0FBUUMsR0FBUixDQUFZRixDQUFaO0FBQ0FBLFFBQUVHLEdBQUYsR0FBTUgsRUFBRUcsR0FBRixDQUFNQyxPQUFOLENBQWMsS0FBZCxFQUFvQixHQUFwQixDQUFOO0FBQ0FKLFFBQUVHLEdBQUYsR0FBTUgsRUFBRUcsR0FBRixDQUFNQyxPQUFOLENBQWMsS0FBZCxFQUFvQixHQUFwQixDQUFOO0FBQ0EsV0FBS1IsR0FBTCxHQUFTSSxFQUFFRyxHQUFYO0FBQ0EsV0FBS0UsTUFBTDtBQUNEOzs7O0VBbkI4QixlQUFLQyxJOztrQkFBakJkLEciLCJmaWxlIjoid2ViLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB3ZWIgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gIGNvbmZpZyA9IHtcclxuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmoKHlhoXpgJrnn6UnXHJcbiAgfVxyXG5cclxuICBkYXRhID0ge1xyXG4gICBzcmM6U3RyaW5nXHJcbiAgfVxyXG5cclxuICBtZXRob2RzID0ge31cclxuXHJcbiAgZXZlbnRzID0ge31cclxuXHJcbiAgb25Mb2FkKGUpIHtcclxuICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgICBlLnVybD1lLnVybC5yZXBsYWNlKCclM0YnLCc/JylcclxuICAgIGUudXJsPWUudXJsLnJlcGxhY2UoJyUzRCcsJz0nKVxyXG4gICAgdGhpcy5zcmM9ZS51cmxcclxuICAgIHRoaXMuJGFwcGx5KClcclxuICB9XHJcbn1cclxuIl19