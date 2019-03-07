"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _placeholder = require('./placeholder.js');

var _placeholder2 = _interopRequireDefault(_placeholder);

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

    }, _this.props = {
      detail: {},
      list: [],
      id: Number

    }, _this.data = {
      toView: "lunwen",
      //list2:[["发表论文","lunwen"],["著作","zhuzuo"]],
      //list2:["lunwen","zhuzuo"],
      gzh: Number,
      role: Number,
      show: false,
      bigfont: {
        title: 20,
        subtitle: 15,
        body: 18
      },
      font: {
        title: 18,
        subtitle: 13,
        body: 15
      }

    }, _this.methods = {
      bindChange: function bindChange(e) {
        console.log(e.detail.value[0]);

        console.log(this.list2);
        var num = e.detail.value[0];

        console.log(this.list2[num]);
        this.toView = this.list2[num];
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: "onLoad",
    value: function onLoad() {
      if (this.$parent.$parent.globalData.bigfont) {
        this.font = this.bigfont;
      }
      console.log('onLoad');
      console.log(this.detail);
      this.gzh = this.$parent.$parent.globalData.userinfo.gzh;

      this.role = this.$parent.$parent.globalData.userinfo.role;
      console.log(this.role);

      var x = 0;
      for (x in this.list) {
        console.log(this.list[x]);
      }
    }
  }]);

  return Index;
}(_wepy2.default.component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFydGljbGUuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb21wb25lbnRzIiwicHJvcHMiLCJkZXRhaWwiLCJsaXN0IiwiaWQiLCJOdW1iZXIiLCJkYXRhIiwidG9WaWV3IiwiZ3poIiwicm9sZSIsInNob3ciLCJiaWdmb250IiwidGl0bGUiLCJzdWJ0aXRsZSIsImJvZHkiLCJmb250IiwibWV0aG9kcyIsImJpbmRDaGFuZ2UiLCJlIiwiY29uc29sZSIsImxvZyIsInZhbHVlIiwibGlzdDIiLCJudW0iLCIkcGFyZW50IiwiZ2xvYmFsRGF0YSIsInVzZXJpbmZvIiwieCIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNiQyxVLEdBQWE7QUFDVDs7QUFEUyxLLFFBSVhDLEssR0FBTTtBQUNIQyxjQUFPLEVBREo7QUFFSEMsWUFBSyxFQUZGO0FBR0hDLFVBQUdDOztBQUhBLEssUUFNTkMsSSxHQUFLO0FBQ0ZDLGNBQU8sUUFETDtBQUVGO0FBQ0E7QUFDQUMsV0FBSUgsTUFKRjtBQUtGSSxZQUFLSixNQUxIO0FBTUZLLFlBQUssS0FOSDtBQU9GQyxlQUFRO0FBQ1BDLGVBQU0sRUFEQztBQUVQQyxrQkFBUyxFQUZGO0FBR1BDLGNBQUs7QUFIRSxPQVBOO0FBWUhDLFlBQUs7QUFDUEgsZUFBTSxFQURDO0FBRVBDLGtCQUFTLEVBRkY7QUFHUEMsY0FBSztBQUhFOztBQVpGLEssUUF1Q0xFLE8sR0FBUTtBQUdOQyxnQkFITSxzQkFHS0MsQ0FITCxFQUdPO0FBQ1ZDLGdCQUFRQyxHQUFSLENBQVlGLEVBQUVoQixNQUFGLENBQVNtQixLQUFULENBQWUsQ0FBZixDQUFaOztBQUVBRixnQkFBUUMsR0FBUixDQUFZLEtBQUtFLEtBQWpCO0FBQ0EsWUFBSUMsTUFBSUwsRUFBRWhCLE1BQUYsQ0FBU21CLEtBQVQsQ0FBZSxDQUFmLENBQVI7O0FBRUFGLGdCQUFRQyxHQUFSLENBQVksS0FBS0UsS0FBTCxDQUFXQyxHQUFYLENBQVo7QUFDQSxhQUFLaEIsTUFBTCxHQUFZLEtBQUtlLEtBQUwsQ0FBV0MsR0FBWCxDQUFaO0FBQ0Y7QUFYSyxLOzs7Ozs2QkFuQkM7QUFDUCxVQUFHLEtBQUtDLE9BQUwsQ0FBYUEsT0FBYixDQUFxQkMsVUFBckIsQ0FBZ0NkLE9BQW5DLEVBQTJDO0FBQzVDLGFBQUtJLElBQUwsR0FBVSxLQUFLSixPQUFmO0FBQXdCO0FBQ3ZCUSxjQUFRQyxHQUFSLENBQVksUUFBWjtBQUNBRCxjQUFRQyxHQUFSLENBQVksS0FBS2xCLE1BQWpCO0FBQ0EsV0FBS00sR0FBTCxHQUFTLEtBQUtnQixPQUFMLENBQWFBLE9BQWIsQ0FBcUJDLFVBQXJCLENBQWdDQyxRQUFoQyxDQUF5Q2xCLEdBQWxEOztBQUVBLFdBQUtDLElBQUwsR0FBVSxLQUFLZSxPQUFMLENBQWFBLE9BQWIsQ0FBcUJDLFVBQXJCLENBQWdDQyxRQUFoQyxDQUF5Q2pCLElBQW5EO0FBQ0FVLGNBQVFDLEdBQVIsQ0FBWSxLQUFLWCxJQUFqQjs7QUFFQSxVQUFJa0IsSUFBRSxDQUFOO0FBQ0EsV0FBSUEsQ0FBSixJQUFTLEtBQUt4QixJQUFkLEVBQW1CO0FBQ2pCZ0IsZ0JBQVFDLEdBQVIsQ0FBWSxLQUFLakIsSUFBTCxDQUFVd0IsQ0FBVixDQUFaO0FBQ0Q7QUFHRjs7OztFQS9Dd0IsZUFBS0MsUzs7a0JBQW5CN0IsSyIsImZpbGUiOiJhcnRpY2xlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG5pbXBvcnQgUGxhY2Vob2xkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvcGxhY2Vob2xkZXJcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XHJcbiAgICAgICAgY29tcG9uZW50cyA9IHtcclxuICAgICAgICAgICAgLy/kuLrkuKTkuKrnm7jlkIznu4Tku7bnmoTkuI3lkIzlrp7kvovliIbphY3kuI3lkIznmoTnu4Tku7ZJRO+8jOS7juiAjOmBv+WFjeaVsOaNruWQjOatpeWPmOWMlueahOmXrumimFxyXG5cclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICBwcm9wcz17XHJcbiAgICAgICAgICAgICBkZXRhaWw6e30sXHJcbiAgICAgICAgICAgICBsaXN0OltdLFxyXG4gICAgICAgICAgICAgaWQ6TnVtYmVyLFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgICBkYXRhPXtcclxuICAgICAgICAgICAgIHRvVmlldzpcImx1bndlblwiLFxyXG4gICAgICAgICAgICAgLy9saXN0MjpbW1wi5Y+R6KGo6K665paHXCIsXCJsdW53ZW5cIl0sW1wi6JGX5L2cXCIsXCJ6aHV6dW9cIl1dLFxyXG4gICAgICAgICAgICAgLy9saXN0MjpbXCJsdW53ZW5cIixcInpodXp1b1wiXSxcclxuICAgICAgICAgICAgIGd6aDpOdW1iZXIsXHJcbiAgICAgICAgICAgICByb2xlOk51bWJlcixcclxuICAgICAgICAgICAgIHNob3c6ZmFsc2UsXHJcbiAgICAgICAgICAgICBiaWdmb250OntcclxuICAgICAgICAgICAgICB0aXRsZToyMCxcclxuICAgICAgICAgICAgICBzdWJ0aXRsZToxNSxcclxuICAgICAgICAgICAgICBib2R5OjE4XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZvbnQ6e1xyXG4gICAgICAgICAgdGl0bGU6MTgsXHJcbiAgICAgICAgICBzdWJ0aXRsZToxMyxcclxuICAgICAgICAgIGJvZHk6MTVcclxuICAgICAgICAgfSxcclxuXHJcblxyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIG9uTG9hZCgpIHtcclxuICAgICAgICAgICAgaWYodGhpcy4kcGFyZW50LiRwYXJlbnQuZ2xvYmFsRGF0YS5iaWdmb250KXtcclxuICAgICAgICAgICB0aGlzLmZvbnQ9dGhpcy5iaWdmb250O31cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ29uTG9hZCcpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmRldGFpbCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ3poPXRoaXMuJHBhcmVudC4kcGFyZW50Lmdsb2JhbERhdGEudXNlcmluZm8uZ3poO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5yb2xlPXRoaXMuJHBhcmVudC4kcGFyZW50Lmdsb2JhbERhdGEudXNlcmluZm8ucm9sZVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnJvbGUpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB2YXIgeD0wXHJcbiAgICAgICAgICAgIGZvcih4IGluIHRoaXMubGlzdCl7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5saXN0W3hdKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBtZXRob2RzPXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBiaW5kQ2hhbmdlKGUpe1xyXG4gICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLmRldGFpbC52YWx1ZVswXSk7XHJcblxyXG4gICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmxpc3QyKVxyXG4gICAgICAgICAgICAgICB2YXIgbnVtPWUuZGV0YWlsLnZhbHVlWzBdXHJcblxyXG4gICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmxpc3QyW251bV0pXHJcbiAgICAgICAgICAgICAgIHRoaXMudG9WaWV3PXRoaXMubGlzdDJbbnVtXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiJdfQ==