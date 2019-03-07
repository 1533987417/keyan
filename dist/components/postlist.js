'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _tip = require('./../pages/js/tip.js');

var _tip2 = _interopRequireDefault(_tip);

var _empty = require('./empty.js');

var _empty2 = _interopRequireDefault(_empty);

var _config = require('./../pages/js/config.js');

var _config2 = _interopRequireDefault(_config);

var _Request = require('./../pages/js/Request.js');

var _db = require('./../pages/js/db.js');

var _db2 = _interopRequireDefault(_db);

var _util = require('./../pages/js/util.js');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var test = function (_wepy$component) {
  _inherits(test, _wepy$component);

  function test() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, test);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = test.__proto__ || Object.getPrototypeOf(test)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "empty": { "xmlns:v-bind": "", "v-bind:isNone.sync": "isNone" } }, _this.$events = {}, _this.components = {
      //为两个相同组件的不同实例分配不同的组件ID，从而避免数据同步变化的问题
      empty: _empty2.default
    }, _this.config = {
      enablePullDownRefresh: true,
      "usingComponents": {
        "wxparser": "plugin://wxparserPlugin/wxparser"
      }
    }, _this.props = {
      tid: Number

    }, _this.data = {

      postlist: [],
      gzh: Number,
      dbmm: String,
      role: Number,
      PageIndex: 0,
      flag: true,
      text: ' ',
      disclick: true,
      isNone: false,
      font: {
        title: 18,
        subtitle: 13,
        body: 15
      },
      bigfont: {
        title: 20,
        subtitle: 15,
        body: 18
      }

    }, _this.computed = {}, _this.methods = {
      open: function open(e) {
        var _this2 = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var that, res, resp;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  that = _this2;
                  _context.next = 3;
                  return _wepy2.default.showActionSheet({
                    itemList: ['删除']
                  });

                case 3:
                  res = _context.sent;

                  if (res.cancel) {
                    _context.next = 10;
                    break;
                  }

                  _context.next = 7;
                  return (0, _Request.wxRequest)('get', _config2.default.service.postdelete + '?pid=' + e.currentTarget.id + '&tid=' + that.$parent.article.tid + '&fid=' + that.$parent.article.fid);

                case 7:
                  resp = _context.sent;

                  console.log(resp);
                  if (resp == 1) {
                    _tip2.default.success('删除成功');
                    that.postlist = [];
                    that.PageIndex = 0;
                    that.flag = true;
                    that.$apply();
                    _tip2.default.toast('加载中', false, 'loading');
                    that.getmore();
                  } else {
                    _tip2.default.error('数据不存在');
                  }

                case 10:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2);
        }))();
      },
      getmore: function getmore() {
        var that = this;

        if (this.flag) {

          that.getmore();
        }
      },
      focus: function focus() {
        this.disclick = false;
        this.$apply();
      },
      submit: function submit(e) {
        this.text = '';
        this.$apply();
        var that = this;
        if (e.detail.value.text != '') {
          console.log(e.detail.value.text);
          _wepy2.default.request({ url: _config2.default.service.addpost,
            data: { fid: that.$parent.article.fid, tid: that.$parent.article.tid,
              posterid: that.$parent.$parent.globalData.userinfo.gzh,
              poster: that.$parent.$parent.globalData.userinfo.xm,
              title: that.$parent.article.title,
              message: e.detail.value.text,
              ip: that.$parent.$parent.globalData.ip,
              bmdm: that.$parent.$parent.globalData.userinfo.bmdm,
              bmmc: that.$parent.$parent.globalData.userinfo.bmmc,
              role: that.$parent.$parent.globalData.userinfo.role },
            method: 'post',
            header: {
              'Authorization': _db2.default.Get('token')
            }
          }).then(function (d) {
            // console.log(this.$parent.$parent.globalData.userinfo);
            if (d.data == 1) {
              _tip2.default.success('发送成功');
              _wepy2.default.request({ url: _config2.default.service.oneMore + '?tid=' + that.tid, header: {
                  'Authorization': _db2.default.Get('token')
                } }).then(function (d) {
                d.data[0][7] = d.data[0][7].slice(0, 10);
                that.postlist = that.postlist.concat(d.data);
                that.$apply();
              });
            }
          });
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(test, [{
    key: 'onLoad',
    value: function onLoad() {
      if (this.$parent.$parent.globalData.bigfont) {
        this.font = this.bigfont;
      }
      console.log(this.$parent.$parent.globalData.bigfont);
      this.gzh = this.$parent.$parent.globalData.userinfo.gzh;
      this.dbmm = this.$parent.$parent.globalData.userinfo.dbmm;
      this.role = this.$parent.$parent.globalData.userinfo.role;

      //console.log(this.$parent.$parent.globalData.personid);

    }
    //////判断权限

  }, {
    key: 'getmore',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var falg2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        var that, res, x;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!this.flag) {
                  _context2.next = 12;
                  break;
                }

                that = this;

                console.log(falg2);
                if (falg2) {
                  this.PageIndex = this.PageIndex + 1;
                }

                _context2.next = 6;
                return (0, _Request.wxRequest)('get', _config2.default.service.pagePost + '?tid=' + that.tid + '&PageIndex=' + that.PageIndex);

              case 6:
                res = _context2.sent;

                if (res.length < 8) {
                  that.flag = false;
                  that.isNone = true;
                }

                for (x in res) {
                  res[x][7] = res[x][7].slice(0, 10);
                  res[x][10] = _util2.default.trim(res[x][10]);
                }
                this.postlist = this.postlist.concat(res);
                console.log(res);
                this.$apply();

              case 12:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getmore() {
        return _ref2.apply(this, arguments);
      }

      return getmore;
    }()
  }, {
    key: 'onShow',
    value: function onShow() {

      this.getmore();
    }
  }]);

  return test;
}(_wepy2.default.component);

exports.default = test;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3RsaXN0LmpzIl0sIm5hbWVzIjpbInRlc3QiLCIkcmVwZWF0IiwiJHByb3BzIiwiJGV2ZW50cyIsImNvbXBvbmVudHMiLCJlbXB0eSIsImNvbmZpZyIsImVuYWJsZVB1bGxEb3duUmVmcmVzaCIsInByb3BzIiwidGlkIiwiTnVtYmVyIiwiZGF0YSIsInBvc3RsaXN0IiwiZ3poIiwiZGJtbSIsIlN0cmluZyIsInJvbGUiLCJQYWdlSW5kZXgiLCJmbGFnIiwidGV4dCIsImRpc2NsaWNrIiwiaXNOb25lIiwiZm9udCIsInRpdGxlIiwic3VidGl0bGUiLCJib2R5IiwiYmlnZm9udCIsImNvbXB1dGVkIiwibWV0aG9kcyIsIm9wZW4iLCJlIiwidGhhdCIsInNob3dBY3Rpb25TaGVldCIsIml0ZW1MaXN0IiwicmVzIiwiY2FuY2VsIiwic2VydmljZSIsInBvc3RkZWxldGUiLCJjdXJyZW50VGFyZ2V0IiwiaWQiLCIkcGFyZW50IiwiYXJ0aWNsZSIsImZpZCIsInJlc3AiLCJjb25zb2xlIiwibG9nIiwic3VjY2VzcyIsIiRhcHBseSIsInRvYXN0IiwiZ2V0bW9yZSIsImVycm9yIiwiZm9jdXMiLCJzdWJtaXQiLCJkZXRhaWwiLCJ2YWx1ZSIsInJlcXVlc3QiLCJ1cmwiLCJhZGRwb3N0IiwicG9zdGVyaWQiLCJnbG9iYWxEYXRhIiwidXNlcmluZm8iLCJwb3N0ZXIiLCJ4bSIsIm1lc3NhZ2UiLCJpcCIsImJtZG0iLCJibW1jIiwibWV0aG9kIiwiaGVhZGVyIiwiR2V0IiwidGhlbiIsImQiLCJvbmVNb3JlIiwic2xpY2UiLCJjb25jYXQiLCJmYWxnMiIsInBhZ2VQb3N0IiwibGVuZ3RoIiwieCIsInRyaW0iLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUdxQkEsSTs7Ozs7Ozs7Ozs7Ozs7a0xBQ2xCQyxPLEdBQVUsRSxRQUNqQkMs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QUFDSmEsb0IsR0FBSyxJOztBQUNUYSx3QkFBUUMsR0FBUixDQUFZOEIsS0FBWjtBQUNBLG9CQUFHQSxLQUFILEVBQVM7QUFDVCx1QkFBSzFELFNBQUwsR0FBZSxLQUFLQSxTQUFMLEdBQWUsQ0FBOUI7QUFBaUM7Ozt1QkFFbkIsd0JBQVUsS0FBVixFQUFnQixpQkFBT21CLE9BQVAsQ0FBZXdDLFFBQWYsR0FBd0IsT0FBeEIsR0FBZ0M3QyxLQUFLdEIsR0FBckMsR0FBeUMsYUFBekMsR0FBdURzQixLQUFLZCxTQUE1RSxDOzs7QUFBVmlCLG1COztBQUNKLG9CQUFHQSxJQUFJMkMsTUFBSixHQUFXLENBQWQsRUFBZ0I7QUFDVjlDLHVCQUFLYixJQUFMLEdBQVUsS0FBVjtBQUNBYSx1QkFBS1YsTUFBTCxHQUFZLElBQVo7QUFDRDs7QUFFRCxxQkFBSXlELENBQUosSUFBUzVDLEdBQVQsRUFBYTtBQUNYQSxzQkFBSTRDLENBQUosRUFBTyxDQUFQLElBQVU1QyxJQUFJNEMsQ0FBSixFQUFPLENBQVAsRUFBVUwsS0FBVixDQUFnQixDQUFoQixFQUFrQixFQUFsQixDQUFWO0FBQ0F2QyxzQkFBSTRDLENBQUosRUFBTyxFQUFQLElBQVcsZUFBS0MsSUFBTCxDQUFVN0MsSUFBSTRDLENBQUosRUFBTyxFQUFQLENBQVYsQ0FBWDtBQUNEO0FBQ0QscUJBQUtsRSxRQUFMLEdBQWMsS0FBS0EsUUFBTCxDQUFjOEQsTUFBZCxDQUFxQnhDLEdBQXJCLENBQWQ7QUFDQVUsd0JBQVFDLEdBQVIsQ0FBWVgsR0FBWjtBQUNBLHFCQUFLYSxNQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBTUU7O0FBRUosV0FBS0UsT0FBTDtBQUVEOzs7O0VBM0YyQixlQUFLK0IsUzs7a0JBQWxCaEYsSSIsImZpbGUiOiJwb3N0bGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICAgIGltcG9ydCB0aXAgZnJvbSAnLi4vcGFnZXMvanMvdGlwJ1xyXG4gICAgaW1wb3J0IGVtcHR5IGZyb20gJy4uL2NvbXBvbmVudHMvZW1wdHknXHJcbiAgICBpbXBvcnQgY29uZmlnIGZyb20gJy4uL3BhZ2VzL2pzL2NvbmZpZydcclxuICAgIGltcG9ydCB7d3hSZXF1ZXN0fSBmcm9tICcuLi9wYWdlcy9qcy9SZXF1ZXN0J1xyXG4gICAgaW1wb3J0IGRiIGZyb20gJy4uL3BhZ2VzL2pzL2RiJ1xyXG4gICAgaW1wb3J0IHV0aWwgZnJvbSAnLi4vcGFnZXMvanMvdXRpbCdcclxuXHJcbiAgICBcclxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIHRlc3QgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudHtcclxuICAgICAgICRyZXBlYXQgPSB7fTtcclxuJHByb3BzID0ge1wiZW1wdHlcIjp7XCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOmlzTm9uZS5zeW5jXCI6XCJpc05vbmVcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xyXG4gICAgICAgICAgICAvL+S4uuS4pOS4quebuOWQjOe7hOS7tueahOS4jeWQjOWunuS+i+WIhumFjeS4jeWQjOeahOe7hOS7tklE77yM5LuO6ICM6YG/5YWN5pWw5o2u5ZCM5q2l5Y+Y5YyW55qE6Zeu6aKYXHJcbiAgICAgICAgIGVtcHR5OmVtcHR5XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbmZpZz17XHJcbiAgICAgICAgICBlbmFibGVQdWxsRG93blJlZnJlc2g6IHRydWUsXHJcbiAgICAgICAgICBcInVzaW5nQ29tcG9uZW50c1wiOntcclxuICAgICAgICAgICAgICBcInd4cGFyc2VyXCI6XCJwbHVnaW46Ly93eHBhcnNlclBsdWdpbi93eHBhcnNlclwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcHJvcHM9e1xyXG4gICAgICAgICAgdGlkOk51bWJlcixcclxuICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgZGF0YT17XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIHBvc3RsaXN0OltdLFxyXG4gICAgICAgICAgZ3poOk51bWJlcixcclxuICAgICAgICAgIGRibW06U3RyaW5nLFxyXG4gICAgICAgICAgcm9sZTpOdW1iZXIsXHJcbiAgICAgICAgICBQYWdlSW5kZXg6MCxcclxuICAgICAgICAgIGZsYWc6dHJ1ZSxcclxuICAgICAgICAgIHRleHQ6JyAnLFxyXG4gICAgICAgICAgZGlzY2xpY2s6dHJ1ZSxcclxuICAgICAgICAgIGlzTm9uZTogZmFsc2UsXHJcbiAgICAgICAgICBmb250OntcclxuICAgICAgICAgIHRpdGxlOjE4LFxyXG4gICAgICAgICAgc3VidGl0bGU6MTMsXHJcbiAgICAgICAgICBib2R5OjE1XHJcbiAgICAgICAgIH0sXHJcbiAgICAgICAgIGJpZ2ZvbnQ6e1xyXG4gICAgICAgICAgdGl0bGU6MjAsXHJcbiAgICAgICAgICBzdWJ0aXRsZToxNSxcclxuICAgICAgICAgIGJvZHk6MThcclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgfVxyXG4gICAgICAgICBjb21wdXRlZCA9IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgICAgb25Mb2FkKCl7XHJcbiAgICAgICAgICBpZih0aGlzLiRwYXJlbnQuJHBhcmVudC5nbG9iYWxEYXRhLmJpZ2ZvbnQpXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgdGhpcy5mb250PXRoaXMuYmlnZm9udDtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBjb25zb2xlLmxvZyh0aGlzLiRwYXJlbnQuJHBhcmVudC5nbG9iYWxEYXRhLmJpZ2ZvbnQpXHJcbiAgICAgICAgICB0aGlzLmd6aD10aGlzLiRwYXJlbnQuJHBhcmVudC5nbG9iYWxEYXRhLnVzZXJpbmZvLmd6aDtcclxuICAgICAgICAgIHRoaXMuZGJtbT10aGlzLiRwYXJlbnQuJHBhcmVudC5nbG9iYWxEYXRhLnVzZXJpbmZvLmRibW07XHJcbiAgICAgICAgICB0aGlzLnJvbGU9dGhpcy4kcGFyZW50LiRwYXJlbnQuZ2xvYmFsRGF0YS51c2VyaW5mby5yb2xlO1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLiRwYXJlbnQuJHBhcmVudC5nbG9iYWxEYXRhLnBlcnNvbmlkKTtcclxuICAgICAgICAgXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICAvLy8vLy/liKTmlq3mnYPpmZBcclxuICAgICAgICBcclxuICAgICAgICBhc3luYyBnZXRtb3JlKGZhbGcyPXRydWUpe1xyXG4gICAgICAgICAgaWYodGhpcy5mbGFnKXtcclxuICAgICAgICAgIGxldCB0aGF0PXRoaXM7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhmYWxnMik7XHJcbiAgICAgICAgICBpZihmYWxnMil7XHJcbiAgICAgICAgICB0aGlzLlBhZ2VJbmRleD10aGlzLlBhZ2VJbmRleCsxO31cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgbGV0IHJlcz1hd2FpdCB3eFJlcXVlc3QoJ2dldCcsY29uZmlnLnNlcnZpY2UucGFnZVBvc3QrJz90aWQ9Jyt0aGF0LnRpZCsnJlBhZ2VJbmRleD0nK3RoYXQuUGFnZUluZGV4KVxyXG4gICAgICAgICAgaWYocmVzLmxlbmd0aDw4KXtcclxuICAgICAgICAgICAgICAgIHRoYXQuZmxhZz1mYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoYXQuaXNOb25lPXRydWU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHZhciB4O1xyXG4gICAgICAgICAgICAgIGZvcih4IGluIHJlcyl7XHJcbiAgICAgICAgICAgICAgICByZXNbeF1bN109cmVzW3hdWzddLnNsaWNlKDAsMTApO1xyXG4gICAgICAgICAgICAgICAgcmVzW3hdWzEwXT11dGlsLnRyaW0ocmVzW3hdWzEwXSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgdGhpcy5wb3N0bGlzdD10aGlzLnBvc3RsaXN0LmNvbmNhdChyZXMpO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG5cclxuICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBcclxuICAgICAgICBvblNob3coKXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0bW9yZSgpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICBcclxuICAgICAgICBtZXRob2RzPXtcclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBhc3luYyBvcGVuIChlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGhhdD10aGlzO1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlcyA9IGF3YWl0IHdlcHkuc2hvd0FjdGlvblNoZWV0KHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtTGlzdDogWyfliKDpmaQnXVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmICghcmVzLmNhbmNlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGxldCByZXNwPWF3YWl0IHd4UmVxdWVzdCgnZ2V0Jyxjb25maWcuc2VydmljZS5wb3N0ZGVsZXRlKyc/cGlkPScrZS5jdXJyZW50VGFyZ2V0LmlkKycmdGlkPScrdGhhdC4kcGFyZW50LmFydGljbGUudGlkKycmZmlkPScrdGhhdC4kcGFyZW50LmFydGljbGUuZmlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3ApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgaWYocmVzcD09MSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpcC5zdWNjZXNzKCfliKDpmaTmiJDlip8nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5wb3N0bGlzdD1bXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5QYWdlSW5kZXg9MDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5mbGFnPXRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpcC50b2FzdCgn5Yqg6L295LitJyxmYWxzZSwnbG9hZGluZycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmdldG1vcmUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXAuZXJyb3IoJ+aVsOaNruS4jeWtmOWcqCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIH0sIFxyXG4gICAgICAgICAgICBnZXRtb3JlKCl7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGhhdD10aGlzO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmZsYWcpe1xyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgdGhhdC5nZXRtb3JlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZvY3VzKCl7XHJcbiAgICAgICAgICAgICAgdGhpcy5kaXNjbGljaz1mYWxzZTtcclxuICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgc3VibWl0KGUpe1xyXG4gICAgICAgICAgICAgIHRoaXMudGV4dD0nJztcclxuICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgIGxldCB0aGF0PXRoaXM7XHJcbiAgICAgICAgICAgICAgaWYoZS5kZXRhaWwudmFsdWUudGV4dCE9Jycpe1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUuZGV0YWlsLnZhbHVlLnRleHQpO1xyXG4gICAgICAgICAgICAgIHdlcHkucmVxdWVzdCh7dXJsOmNvbmZpZy5zZXJ2aWNlLmFkZHBvc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6e2ZpZDogdGhhdC4kcGFyZW50LmFydGljbGUuZmlkLHRpZDogIHRoYXQuJHBhcmVudC5hcnRpY2xlLnRpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0ZXJpZDp0aGF0LiRwYXJlbnQuJHBhcmVudC5nbG9iYWxEYXRhLnVzZXJpbmZvLmd6aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdGVyOnRoYXQuJHBhcmVudC4kcGFyZW50Lmdsb2JhbERhdGEudXNlcmluZm8ueG0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0aGF0LiRwYXJlbnQuYXJ0aWNsZS50aXRsZSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGUuZGV0YWlsLnZhbHVlLnRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlwOnRoYXQuJHBhcmVudC4kcGFyZW50Lmdsb2JhbERhdGEuaXAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJtZG06dGhhdC4kcGFyZW50LiRwYXJlbnQuZ2xvYmFsRGF0YS51c2VyaW5mby5ibWRtLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBibW1jOnRoYXQuJHBhcmVudC4kcGFyZW50Lmdsb2JhbERhdGEudXNlcmluZm8uYm1tYyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9sZTp0aGF0LiRwYXJlbnQuJHBhcmVudC5nbG9iYWxEYXRhLnVzZXJpbmZvLnJvbGUgICAgICAgICAgICAgICAgICAgICAgIH0gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6J3Bvc3QnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogZGIuR2V0KCd0b2tlbicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbigoZCk9PntcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuJHBhcmVudC4kcGFyZW50Lmdsb2JhbERhdGEudXNlcmluZm8pO1xyXG4gICAgICAgICAgICAgICAgaWYoZC5kYXRhPT0xKXtcclxuICAgICAgICAgICAgICAgICAgdGlwLnN1Y2Nlc3MoJ+WPkemAgeaIkOWKnycpO1xyXG4gICAgICAgICAgICAgICAgICB3ZXB5LnJlcXVlc3Qoe3VybDpjb25maWcuc2VydmljZS5vbmVNb3JlKyc/dGlkPScrdGhhdC50aWQsaGVhZGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBkYi5HZXQoJ3Rva2VuJylcclxuICAgICAgICAgICAgICAgICAgfX0pLnRoZW4oKGQpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICBkLmRhdGFbMF1bN109ZC5kYXRhWzBdWzddLnNsaWNlKDAsMTApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGhhdC5wb3N0bGlzdD10aGF0LnBvc3RsaXN0LmNvbmNhdChkLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgIH0pIH1cclxuICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4iXX0=