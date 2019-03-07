'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _util = require('./js/util.js');

var _util2 = _interopRequireDefault(_util);

var _tip = require('./js/tip.js');

var _tip2 = _interopRequireDefault(_tip);

var _config = require('./js/config.js');

var _config2 = _interopRequireDefault(_config);

var _Request = require('./js/Request.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

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
      navigationBarTitleText: '热帖榜'
    }, _this.data = {
      bigfont: Boolean,
      info: []
    }, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(web, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var res, x;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _Request.wxRequest)('get', _config2.default.service.Topten + '?fid=1');

              case 2:
                res = _context.sent;

                console.log(res);

                for (x in res) {

                  res[x][3] = res[x][3].slice(0, 10);
                }
                this.info = res;
                this.$apply();

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onLoad() {
        return _ref2.apply(this, arguments);
      }

      return onLoad;
    }()
  }]);

  return web;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(web , 'pages/Topten'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRvcHRlbi5qcyJdLCJuYW1lcyI6WyJ3ZWIiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImJpZ2ZvbnQiLCJCb29sZWFuIiwiaW5mbyIsIm1ldGhvZHMiLCJldmVudHMiLCJzZXJ2aWNlIiwiVG9wdGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsIngiLCJzbGljZSIsIiRhcHBseSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBSXFCQSxHOzs7Ozs7Ozs7Ozs7OztnTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxJLEdBQU87QUFDTkMsZUFBUUMsT0FERjtBQUVOQyxZQUFLO0FBRkMsSyxRQU1QQyxPLEdBQVUsRSxRQUtWQyxNLEdBQVMsRTs7Ozs7Ozs7Ozs7Ozt1QkFHTyx3QkFBVSxLQUFWLEVBQWdCLGlCQUFPQyxPQUFQLENBQWVDLE1BQWYsR0FBc0IsUUFBdEMsQzs7O0FBQVZDLG1COztBQUNKQyx3QkFBUUMsR0FBUixDQUFZRixHQUFaOztBQUVBLHFCQUFJRyxDQUFKLElBQVNILEdBQVQsRUFBYTs7QUFFWEEsc0JBQUlHLENBQUosRUFBTyxDQUFQLElBQVVILElBQUlHLENBQUosRUFBTyxDQUFQLEVBQVVDLEtBQVYsQ0FBZ0IsQ0FBaEIsRUFBa0IsRUFBbEIsQ0FBVjtBQUVDO0FBQ0gscUJBQUtULElBQUwsR0FBVUssR0FBVjtBQUNBLHFCQUFLSyxNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBNUI2QixlQUFLQyxJOztrQkFBakJqQixHIiwiZmlsZSI6IlRvcHRlbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQgdXRpbCBmcm9tICcuLi9wYWdlcy9qcy91dGlsJ1xyXG5pbXBvcnQgdGlwIGZyb20gJy4uL3BhZ2VzL2pzL3RpcCdcclxuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9wYWdlcy9qcy9jb25maWcnXHJcbmltcG9ydCB7d3hSZXF1ZXN0fSBmcm9tICcuLi9wYWdlcy9qcy9SZXF1ZXN0J1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB3ZWIgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gIGNvbmZpZyA9IHtcclxuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfng63luJbmppwnXHJcbiAgfVxyXG5cclxuICBkYXRhID0ge1xyXG4gICBiaWdmb250OkJvb2xlYW4sXHJcbiAgIGluZm86W11cclxuICB9XHJcblxyXG5cclxuICBtZXRob2RzID0ge1xyXG4gICAgXHJcbiAgICB9XHJcbiAgXHJcblxyXG4gIGV2ZW50cyA9IHt9XHJcblxyXG4gYXN5bmMgb25Mb2FkKCkge1xyXG4gICAgbGV0IHJlcz1hd2FpdCB3eFJlcXVlc3QoJ2dldCcsY29uZmlnLnNlcnZpY2UuVG9wdGVuKyc/ZmlkPTEnKVxyXG4gICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgdmFyIHhcclxuICAgIGZvcih4IGluIHJlcyl7XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICByZXNbeF1bM109cmVzW3hdWzNdLnNsaWNlKDAsMTApO1xyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgfVxyXG4gICAgdGhpcy5pbmZvPXJlc1xyXG4gICAgdGhpcy4kYXBwbHkoKVxyXG4gIH1cclxufVxyXG4iXX0=