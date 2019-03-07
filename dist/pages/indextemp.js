'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _subnavtemp = require('./../components/subnavtemp.js');

var _subnavtemp2 = _interopRequireDefault(_subnavtemp);

var _news = require('./../components/news.js');

var _news2 = _interopRequireDefault(_news);

var _placeholder = require('./../components/placeholder.js');

var _placeholder2 = _interopRequireDefault(_placeholder);

var _Request = require('./js/Request.js');

var _db = require('./js/db.js');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '科研系统'
    }, _this.components = {
      subnavtemp: _subnavtemp2.default,
      news: _news2.default

    }, _this.data = {
      imgUrls: ['http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', '../images/bc_qdyl.png'],
      indicatorDots: true,
      indicatorActiveColor: "#7AC5CD",
      autoplay: true,
      interval: 5000,
      duration: 500

    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      console.log("缓存");
      // this.$invoke('news','getmore');
      console.log(_db2.default.Get('token'));
      console.log(this.$parent.globalData.userinfo);
    }
  }, {
    key: 'onLaunch',
    value: function onLaunch() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/indextemp'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4dGVtcC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwic3VibmF2dGVtcCIsIm5ld3MiLCJkYXRhIiwiaW1nVXJscyIsImluZGljYXRvckRvdHMiLCJpbmRpY2F0b3JBY3RpdmVDb2xvciIsImF1dG9wbGF5IiwiaW50ZXJ2YWwiLCJkdXJhdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJHZXQiLCIkcGFyZW50IiwiZ2xvYmFsRGF0YSIsInVzZXJpbmZvIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDRTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7SUFHcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLFUsR0FBVztBQUNUQyxzQ0FEUztBQUVUQzs7QUFGUyxLLFFBS1hDLEksR0FBSztBQUNIQyxlQUFRLENBQ1Isc0VBRFEsRUFDK0QsdUJBRC9ELENBREw7QUFHSEMscUJBQWUsSUFIWjtBQUlIQyw0QkFBc0IsU0FKbkI7QUFLSEMsZ0JBQVMsSUFMTjtBQU1IQyxnQkFBUyxJQU5OO0FBT0hDLGdCQUFTOztBQVBOLEs7Ozs7OzZCQVVHO0FBQ0xDLGNBQVFDLEdBQVIsQ0FBWSxJQUFaO0FBQ0Y7QUFDQ0QsY0FBUUMsR0FBUixDQUFZLGFBQUdDLEdBQUgsQ0FBTyxPQUFQLENBQVo7QUFDQUYsY0FBUUMsR0FBUixDQUFZLEtBQUtFLE9BQUwsQ0FBYUMsVUFBYixDQUF3QkMsUUFBcEM7QUFHRDs7OytCQUNTLENBQ0g7Ozs7RUE1QjBCLGVBQUtDLEk7O2tCQUFuQm5CLEsiLCJmaWxlIjoiaW5kZXh0ZW1wLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuIFxyXG4gIGltcG9ydCBzdWJuYXZ0ZW1wIGZyb20gJy4uL2NvbXBvbmVudHMvc3VibmF2dGVtcCdcclxuICBpbXBvcnQgbmV3cyBmcm9tICcuLi9jb21wb25lbnRzL25ld3MnXHJcbiAgaW1wb3J0IHBsYWNlaG9sZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvcGxhY2Vob2xkZXInXHJcbiAgaW1wb3J0IHt3eFJlcXVlc3R9IGZyb20gJy4uL3BhZ2VzL2pzL1JlcXVlc3QuanMnXHJcbiAgaW1wb3J0IGRiIGZyb20gJy4uL3BhZ2VzL2pzL2RiJ1xyXG4gIFxyXG5cclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfnp5HnoJTns7vnu58nXHJcbiAgICB9O1xyXG4gICAgY29tcG9uZW50cz17XHJcbiAgICAgIHN1Ym5hdnRlbXA6c3VibmF2dGVtcCxcclxuICAgICAgbmV3czpuZXdzLFxyXG4gICAgICBcclxuICAgIH07XHJcbiAgICBkYXRhPXtcclxuICAgICAgaW1nVXJsczpbXHJcbiAgICAgICdodHRwOi8vaW1nMDIudG9vb3Blbi5jb20vaW1hZ2VzLzIwMTUwOTI4L3Rvb29wZW5fc3lfMTQzOTEyNzU1NzI2LmpwZycsJy4uL2ltYWdlcy9iY19xZHlsLnBuZyddLFxyXG4gICAgICBpbmRpY2F0b3JEb3RzOiB0cnVlLFxyXG4gICAgICBpbmRpY2F0b3JBY3RpdmVDb2xvcjogXCIjN0FDNUNEXCIsXHJcbiAgICAgIGF1dG9wbGF5OnRydWUsXHJcbiAgICAgIGludGVydmFsOjUwMDAsXHJcbiAgICAgIGR1cmF0aW9uOjUwMCxcclxuICAgICAgXHJcbiAgICB9XHJcbiAgICBvbkxvYWQoKXtcclxuICAgICAgIGNvbnNvbGUubG9nKFwi57yT5a2YXCIpXHJcbiAgICAgLy8gdGhpcy4kaW52b2tlKCduZXdzJywnZ2V0bW9yZScpO1xyXG4gICAgICBjb25zb2xlLmxvZyhkYi5HZXQoJ3Rva2VuJykpXHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnVzZXJpbmZvKVxyXG4gICAgICBcclxuIFxyXG4gICAgfVxyXG4gICAgb25MYXVuY2goKXtcclxuICAgICAgICAgIH1cclxuICAgIFxyXG4gIH1cclxuIl19