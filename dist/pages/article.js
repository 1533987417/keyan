'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _postlist = require('./../components/postlist.js');

var _postlist2 = _interopRequireDefault(_postlist);

require('./../npm/wepy-async-function/index.js');

var _config = require('./js/config.js');

var _config2 = _interopRequireDefault(_config);

var _Request = require('./js/Request.js');

var _tip = require('./js/tip.js');

var _tip2 = _interopRequireDefault(_tip);

var _util = require('./js/util.js');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var test = function (_wepy$page) {
  _inherits(test, _wepy$page);

  function test() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, test);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = test.__proto__ || Object.getPrototypeOf(test)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "postlist": { "xmlns:v-bind": "", "v-bind:tid.sync": "tid", "v-bind:font.sync": "font" } }, _this.$events = {}, _this.components = {
      //为两个相同组件的不同实例分配不同的组件ID，从而避免数据同步变化的问题
      postlist: _postlist2.default

    }, _this.config = {
      navigationBarTitleText: '帖子详情',
      "usingComponents": {
        "wxparser": "plugin://wxparserPlugin/wxparser"
      }
    }, _this.data = {
      article: {},
      tid: Number,
      bmdm: String,
      role: Number,
      gzh: String,
      font: {
        title: 18,
        subtitle: 13,
        body: 15
      },
      bigfont: {
        title: 20,
        subtitle: 15,
        body: 18
        // role=3||(role==2&&dbmm==article.dbmm)||(role==1&&gzh==article.posterid)
      } }, _this.computed = {
      aPlus: function aPlus() {

        if (this.role == 3) {
          return true;
        } else if (this.role == 2 && this.bmdm == this.article.bmdm) {
          return true;
        } else if (this.role == 1 && this.gzh == this.article.posterid) {
          return true;
        } else {
          return false;
        }
      }
    }, _this.methods = {
      open: function open(e) {
        var _this2 = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var that, res;
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


                  if (!res.cancel) {
                    _wepy2.default.showModal({
                      title: "是否删除该主题",
                      content: "若主题删除，有关评论将一并清空",
                      cancelText: "取消",
                      confirmText: "删除"
                    }).then(function (d) {
                      console.log(d);
                      if (d.confirm) {
                        console.log(e.currentTarget.dataset.fid);
                        (0, _Request.wxRequest)('get', _config2.default.service.DeleteTopic + '?tid=' + e.currentTarget.dataset.tid + '&fid=' + e.currentTarget.dataset.fid).then(function (resp) {
                          if (resp == 1) {
                            _tip2.default.success('删除成功');
                            _wepy2.default.reLaunch({ url: "/pages/index" });
                            // that.$apply();
                            //tip.toast('加载中',false,'loading');

                          } else {
                            _tip2.default.error('数据不存在');
                          }
                        });
                      }
                    });
                  }

                case 5:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this2);
        }))();
      },
      onShareAppMessage: function onShareAppMessage(res) {

        if (res.from === 'button') {
          // 来自页面内转发按钮
          console.log(res.target);
        }
        return {
          title: this.article.title,
          path: '/pages/article?tid=' + this.article.tid,
          success: function success(res) {
            // 转发成功
          },
          fail: function fail(res) {
            // 转发失败
          }
        };
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(test, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(option) {
        var that, res;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:

                this.tid = option.tid;
                console.log(this.tid);
                this.bmdm = this.$parent.globalData.userinfo.bmdm;
                this.role = this.$parent.globalData.userinfo.role;
                this.gzh = this.$parent.globalData.userinfo.gzh;
                console.log(this.bmdm);
                if (this.$parent.globalData.bigfont) {
                  this.font = this.bigfont;
                }

                that = this;
                _context2.next = 10;
                return (0, _Request.wxRequest)('get', _config2.default.service.topicdetail + '?tid=' + this.tid);

              case 10:
                res = _context2.sent;

                //console.log(res)
                //res[0].postdatetime=res[0].postdatetime.slice(0,10)+" "+res[0].postdatetime.slice(11,16);
                res[0].postdatetime = _util2.default.timechange(res[0].postdatetime);
                res[0].bmdm = _util2.default.trim(res[0].bmdm);
                that.article = res[0];
                console.log(res);
                that.$apply();
                console.log(this.article.bmdm.length + "sdadas" + this.bmdm.length);

              case 17:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function onLoad(_x) {
        return _ref2.apply(this, arguments);
      }

      return onLoad;
    }()
  }, {
    key: 'onReachBottom',
    value: function onReachBottom() {

      this.$invoke('postlist', 'getmore');
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      this.$invoke('postlist', 'getmore');
    }
  }]);

  return test;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(test , 'pages/article'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFydGljbGUuanMiXSwibmFtZXMiOlsidGVzdCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsInBvc3RsaXN0IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJhcnRpY2xlIiwidGlkIiwiTnVtYmVyIiwiYm1kbSIsIlN0cmluZyIsInJvbGUiLCJnemgiLCJmb250IiwidGl0bGUiLCJzdWJ0aXRsZSIsImJvZHkiLCJiaWdmb250IiwiY29tcHV0ZWQiLCJhUGx1cyIsInBvc3RlcmlkIiwibWV0aG9kcyIsIm9wZW4iLCJlIiwidGhhdCIsInNob3dBY3Rpb25TaGVldCIsIml0ZW1MaXN0IiwicmVzIiwiY2FuY2VsIiwic2hvd01vZGFsIiwiY29udGVudCIsImNhbmNlbFRleHQiLCJjb25maXJtVGV4dCIsInRoZW4iLCJkIiwiY29uc29sZSIsImxvZyIsImNvbmZpcm0iLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImZpZCIsInNlcnZpY2UiLCJEZWxldGVUb3BpYyIsInJlc3AiLCJzdWNjZXNzIiwicmVMYXVuY2giLCJ1cmwiLCJlcnJvciIsIm9uU2hhcmVBcHBNZXNzYWdlIiwiZnJvbSIsInRhcmdldCIsInBhdGgiLCJmYWlsIiwib3B0aW9uIiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJ1c2VyaW5mbyIsInRvcGljZGV0YWlsIiwicG9zdGRhdGV0aW1lIiwidGltZWNoYW5nZSIsInRyaW0iLCIkYXBwbHkiLCJsZW5ndGgiLCIkaW52b2tlIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDSTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztJQUNxQkEsSTs7Ozs7Ozs7Ozs7Ozs7a0xBQ2xCQyxPLEdBQVUsRSxRQUNqQkMsTSxHQUFTLEVBQUMsWUFBVyxFQUFDLGdCQUFlLEVBQWhCLEVBQW1CLG1CQUFrQixLQUFyQyxFQUEyQyxvQkFBbUIsTUFBOUQsRUFBWixFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNGO0FBQ0FDOztBQUZFLEssUUFLTkMsTSxHQUFTO0FBQ0xDLDhCQUF3QixNQURuQjtBQUVMLHlCQUFrQjtBQUNoQixvQkFBVztBQURLO0FBRmIsSyxRQU1UQyxJLEdBQUs7QUFDSkMsZUFBUSxFQURKO0FBRUpDLFdBQUlDLE1BRkE7QUFHSkMsWUFBS0MsTUFIRDtBQUlKQyxZQUFLSCxNQUpEO0FBS0pJLFdBQUlGLE1BTEE7QUFNSkcsWUFBSztBQUNKQyxlQUFNLEVBREY7QUFFSkMsa0JBQVMsRUFGTDtBQUdKQyxjQUFLO0FBSEQsT0FORDtBQVdKQyxlQUFRO0FBQ1BILGVBQU0sRUFEQztBQUVQQyxrQkFBUyxFQUZGO0FBR1BDLGNBQUs7QUFFUDtBQUxTLE9BWEosRSxRQW1ETEUsUSxHQUFXO0FBQ1RDLFdBRFMsbUJBQ0E7O0FBRVAsWUFBRyxLQUFLUixJQUFMLElBQVcsQ0FBZCxFQUFnQjtBQUNkLGlCQUFPLElBQVA7QUFDRCxTQUZELE1BR0ssSUFBRyxLQUFLQSxJQUFMLElBQVcsQ0FBWCxJQUFlLEtBQUtGLElBQUwsSUFBVyxLQUFLSCxPQUFMLENBQWFHLElBQTFDLEVBQWdEO0FBQ25ELGlCQUFRLElBQVI7QUFFRCxTQUhJLE1BR0MsSUFBSSxLQUFLRSxJQUFMLElBQVcsQ0FBWCxJQUFlLEtBQUtDLEdBQUwsSUFBVSxLQUFLTixPQUFMLENBQWFjLFFBQTFDLEVBQW9EO0FBQ3hELGlCQUFPLElBQVA7QUFDRCxTQUZLLE1BR0E7QUFDSixpQkFBUSxLQUFSO0FBQ0Q7QUFDRjtBQWZRLEssUUFvQlhDLE8sR0FBUTtBQUNFQyxVQURGLGdCQUNRQyxDQURSLEVBQ1c7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDWEMsc0JBRFc7QUFBQTtBQUFBLHlCQUVDLGVBQUtDLGVBQUwsQ0FBcUI7QUFDbkNDLDhCQUFVLENBQUMsSUFBRDtBQUR5QixtQkFBckIsQ0FGRDs7QUFBQTtBQUVYQyxxQkFGVzs7O0FBTWYsc0JBQUksQ0FBQ0EsSUFBSUMsTUFBVCxFQUFpQjtBQUNmLG1DQUFLQyxTQUFMLENBQWU7QUFDYmYsNkJBQU8sU0FETTtBQUViZ0IsK0JBQVMsaUJBRkk7QUFHYkMsa0NBQVcsSUFIRTtBQUliQyxtQ0FBWTtBQUpDLHFCQUFmLEVBS0dDLElBTEgsQ0FLUSxVQUFDQyxDQUFELEVBQUs7QUFDWEMsOEJBQVFDLEdBQVIsQ0FBWUYsQ0FBWjtBQUNBLDBCQUFHQSxFQUFFRyxPQUFMLEVBQWE7QUFDWEYsZ0NBQVFDLEdBQVIsQ0FBWWIsRUFBRWUsYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JDLEdBQXBDO0FBQ0EsZ0RBQVUsS0FBVixFQUFnQixpQkFBT0MsT0FBUCxDQUFlQyxXQUFmLEdBQTJCLE9BQTNCLEdBQW1DbkIsRUFBRWUsYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JoQyxHQUEzRCxHQUErRCxPQUEvRCxHQUF1RWdCLEVBQUVlLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCQyxHQUEvRyxFQUFvSFAsSUFBcEgsQ0FBeUgsVUFBQ1UsSUFBRCxFQUFRO0FBQy9ILDhCQUFHQSxRQUFNLENBQVQsRUFBVztBQUNWLDBDQUFJQyxPQUFKLENBQVksTUFBWjtBQUNBLDJDQUFLQyxRQUFMLENBQWMsRUFBQ0MsS0FBSSxjQUFMLEVBQWQ7QUFDSztBQUNIOztBQUdELDJCQVBGLE1BU0s7QUFDSCwwQ0FBSUMsS0FBSixDQUFVLE9BQVY7QUFDRDtBQUNGLHlCQWJEO0FBaUJEO0FBR0YscUJBN0JEO0FBK0JEOztBQXRDYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXVDaEIsT0F4Q0s7QUF5Q05DLHVCQXpDTSw2QkF5Q1lyQixHQXpDWixFQXlDaUI7O0FBRXpCLFlBQUlBLElBQUlzQixJQUFKLEtBQWEsUUFBakIsRUFBMkI7QUFDekI7QUFDQWQsa0JBQVFDLEdBQVIsQ0FBWVQsSUFBSXVCLE1BQWhCO0FBRUQ7QUFDRCxlQUFPO0FBQ0xwQyxpQkFBTyxLQUFLUixPQUFMLENBQWFRLEtBRGY7QUFFTHFDLGdCQUFNLHdCQUFzQixLQUFLN0MsT0FBTCxDQUFhQyxHQUZwQztBQUdMcUMsbUJBQVMsaUJBQVNqQixHQUFULEVBQWM7QUFDckI7QUFDRCxXQUxJO0FBTUx5QixnQkFBTSxjQUFTekIsR0FBVCxFQUFjO0FBQ2xCO0FBQ0Q7QUFSSSxTQUFQO0FBVUQ7QUExRFMsSzs7Ozs7OzRGQXJESzBCLE07Ozs7Ozs7QUFFWCxxQkFBSzlDLEdBQUwsR0FBUzhDLE9BQU85QyxHQUFoQjtBQUNBNEIsd0JBQVFDLEdBQVIsQ0FBWSxLQUFLN0IsR0FBakI7QUFDQSxxQkFBS0UsSUFBTCxHQUFVLEtBQUs2QyxPQUFMLENBQWFDLFVBQWIsQ0FBd0JDLFFBQXhCLENBQWlDL0MsSUFBM0M7QUFDQSxxQkFBS0UsSUFBTCxHQUFVLEtBQUsyQyxPQUFMLENBQWFDLFVBQWIsQ0FBd0JDLFFBQXhCLENBQWlDN0MsSUFBM0M7QUFDQSxxQkFBS0MsR0FBTCxHQUFTLEtBQUswQyxPQUFMLENBQWFDLFVBQWIsQ0FBd0JDLFFBQXhCLENBQWlDNUMsR0FBMUM7QUFDQXVCLHdCQUFRQyxHQUFSLENBQVksS0FBSzNCLElBQWpCO0FBQ0Esb0JBQUcsS0FBSzZDLE9BQUwsQ0FBYUMsVUFBYixDQUF3QnRDLE9BQTNCLEVBQ0M7QUFDQSx1QkFBS0osSUFBTCxHQUFVLEtBQUtJLE9BQWY7QUFDRDs7QUFFRU8sb0IsR0FBSyxJOzt1QkFDTSx3QkFBVSxLQUFWLEVBQWdCLGlCQUFPaUIsT0FBUCxDQUFlZ0IsV0FBZixHQUEyQixPQUEzQixHQUFtQyxLQUFLbEQsR0FBeEQsQzs7O0FBQVZvQixtQjs7QUFDQTtBQUNBO0FBQ0RBLG9CQUFJLENBQUosRUFBTytCLFlBQVAsR0FBb0IsZUFBS0MsVUFBTCxDQUFnQmhDLElBQUksQ0FBSixFQUFPK0IsWUFBdkIsQ0FBcEI7QUFDQy9CLG9CQUFJLENBQUosRUFBT2xCLElBQVAsR0FBWSxlQUFLbUQsSUFBTCxDQUFVakMsSUFBSSxDQUFKLEVBQU9sQixJQUFqQixDQUFaO0FBQ0NlLHFCQUFLbEIsT0FBTCxHQUFhcUIsSUFBSSxDQUFKLENBQWI7QUFDQVEsd0JBQVFDLEdBQVIsQ0FBWVQsR0FBWjtBQUNBSCxxQkFBS3FDLE1BQUw7QUFDQTFCLHdCQUFRQyxHQUFSLENBQVksS0FBSzlCLE9BQUwsQ0FBYUcsSUFBYixDQUFrQnFELE1BQWxCLEdBQTBCLFFBQTFCLEdBQW1DLEtBQUtyRCxJQUFMLENBQVVxRCxNQUF6RDs7Ozs7Ozs7Ozs7Ozs7Ozs7O29DQU1TOztBQUViLFdBQUtDLE9BQUwsQ0FBYSxVQUFiLEVBQXdCLFNBQXhCO0FBRUQ7Ozs2QkFrQlE7QUFDTixXQUFLQSxPQUFMLENBQWEsVUFBYixFQUF3QixTQUF4QjtBQUNGOzs7O0VBckY2QixlQUFLQyxJOztrQkFBbEJuRSxJIiwiZmlsZSI6ImFydGljbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgICBpbXBvcnQgcG9zdGxpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9wb3N0bGlzdCdcclxuICAgIGltcG9ydCAnd2VweS1hc3luYy1mdW5jdGlvbidcclxuICAgIGltcG9ydCBjb25maWcgZnJvbSAnLi4vcGFnZXMvanMvY29uZmlnJ1xyXG4gICAgaW1wb3J0IHt3eFJlcXVlc3R9IGZyb20gJy4uL3BhZ2VzL2pzL1JlcXVlc3QnXHJcbiAgICBpbXBvcnQgdGlwIGZyb20gJy4uL3BhZ2VzL2pzL3RpcCdcclxuICAgIGltcG9ydCB1dGlsIGZyb20gICcuLi9wYWdlcy9qcy91dGlsJ1xyXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgdGVzdCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICAgICAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcInBvc3RsaXN0XCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDp0aWQuc3luY1wiOlwidGlkXCIsXCJ2LWJpbmQ6Zm9udC5zeW5jXCI6XCJmb250XCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcclxuICAgICAgICAgICAgLy/kuLrkuKTkuKrnm7jlkIznu4Tku7bnmoTkuI3lkIzlrp7kvovliIbphY3kuI3lkIznmoTnu4Tku7ZJRO+8jOS7juiAjOmBv+WFjeaVsOaNruWQjOatpeWPmOWMlueahOmXrumimFxyXG4gICAgICAgICAgICBwb3N0bGlzdDpwb3N0bGlzdCxcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25maWcgPSB7XHJcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfluJblrZDor6bmg4UnLFxyXG4gICAgICAgICAgICBcInVzaW5nQ29tcG9uZW50c1wiOntcclxuICAgICAgICAgICAgICBcInd4cGFyc2VyXCI6XCJwbHVnaW46Ly93eHBhcnNlclBsdWdpbi93eHBhcnNlclwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG4gICAgICAgIGRhdGE9e1xyXG4gICAgICAgICBhcnRpY2xlOnt9LFxyXG4gICAgICAgICB0aWQ6TnVtYmVyLFxyXG4gICAgICAgICBibWRtOlN0cmluZyAsXHJcbiAgICAgICAgIHJvbGU6TnVtYmVyICxcclxuICAgICAgICAgZ3poOlN0cmluZyAsXHJcbiAgICAgICAgIGZvbnQ6e1xyXG4gICAgICAgICAgdGl0bGU6MTgsXHJcbiAgICAgICAgICBzdWJ0aXRsZToxMyxcclxuICAgICAgICAgIGJvZHk6MTVcclxuICAgICAgICAgfSxcclxuICAgICAgICAgYmlnZm9udDp7XHJcbiAgICAgICAgICB0aXRsZToyMCxcclxuICAgICAgICAgIHN1YnRpdGxlOjE1LFxyXG4gICAgICAgICAgYm9keToxOFxyXG4gICAgICAgICB9XHJcbiAgICAgICAgLy8gcm9sZT0zfHwocm9sZT09MiYmZGJtbT09YXJ0aWNsZS5kYm1tKXx8KHJvbGU9PTEmJmd6aD09YXJ0aWNsZS5wb3N0ZXJpZClcclxuICAgICAgICAgIH1cclxuICAgICAgICBhc3luYyBvbkxvYWQob3B0aW9uKXtcclxuICAgICAgICAgICBcclxuICAgICAgICAgIHRoaXMudGlkPW9wdGlvbi50aWQ7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnRpZClcclxuICAgICAgICAgIHRoaXMuYm1kbT10aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS51c2VyaW5mby5ibWRtO1xyXG4gICAgICAgICAgdGhpcy5yb2xlPXRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnVzZXJpbmZvLnJvbGU7XHJcbiAgICAgICAgICB0aGlzLmd6aD10aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS51c2VyaW5mby5nemhcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYm1kbSlcclxuICAgICAgICAgIGlmKHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLmJpZ2ZvbnQpXHJcbiAgICAgICAgICAge1xyXG4gICAgICAgICAgIHRoaXMuZm9udD10aGlzLmJpZ2ZvbnQ7XHJcbiAgICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICAgIHZhciB0aGF0PXRoaXM7XHJcbiAgICAgICAgIGxldCByZXM9YXdhaXQgd3hSZXF1ZXN0KCdnZXQnLGNvbmZpZy5zZXJ2aWNlLnRvcGljZGV0YWlsKyc/dGlkPScrdGhpcy50aWQpO1xyXG4gICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICAgICAvL3Jlc1swXS5wb3N0ZGF0ZXRpbWU9cmVzWzBdLnBvc3RkYXRldGltZS5zbGljZSgwLDEwKStcIiBcIityZXNbMF0ucG9zdGRhdGV0aW1lLnNsaWNlKDExLDE2KTtcclxuICAgICAgICAgICAgcmVzWzBdLnBvc3RkYXRldGltZT11dGlsLnRpbWVjaGFuZ2UocmVzWzBdLnBvc3RkYXRldGltZSk7XHJcbiAgICAgICAgICAgICByZXNbMF0uYm1kbT11dGlsLnRyaW0ocmVzWzBdLmJtZG0pXHJcbiAgICAgICAgICAgICAgdGhhdC5hcnRpY2xlPXJlc1swXTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5hcnRpY2xlLmJtZG0ubGVuZ3RoICtcInNkYWRhc1wiK3RoaXMuYm1kbS5sZW5ndGggIClcclxuICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgXHJcblxyXG4gICAgICAgIG9uUmVhY2hCb3R0b20oKXtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgdGhpcy4kaW52b2tlKCdwb3N0bGlzdCcsJ2dldG1vcmUnKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbXB1dGVkID0ge1xyXG4gICAgICAgICAgYVBsdXMgKCkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYodGhpcy5yb2xlPT0zKXtcclxuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYodGhpcy5yb2xlPT0yJiYodGhpcy5ibWRtPT10aGlzLmFydGljbGUuYm1kbSkpe1xyXG4gICAgICAgICAgICAgIHJldHVybiAgdHJ1ZSAgXHJcblxyXG4gICAgICAgICAgICB9ZWxzZSBpZiAodGhpcy5yb2xlPT0xJiYodGhpcy5nemg9PXRoaXMuYXJ0aWNsZS5wb3N0ZXJpZCkpe1xyXG4gICAgICAgICAgICAgIHJldHVybiB0cnVlIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgIHtcclxuICAgICAgICAgICAgICByZXR1cm4gIGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgb25TaG93KCkge1xyXG4gICAgICAgICAgIHRoaXMuJGludm9rZSgncG9zdGxpc3QnLCdnZXRtb3JlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1ldGhvZHM9e1xyXG4gICAgICAgICAgICBhc3luYyBvcGVuIChlKSB7XHJcbiAgICAgICAgICAgIHZhciB0aGF0PXRoaXM7XHJcbiAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCB3ZXB5LnNob3dBY3Rpb25TaGVldCh7XHJcbiAgICAgICAgICAgICAgaXRlbUxpc3Q6IFsn5Yig6ZmkJ11cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoIXJlcy5jYW5jZWwpIHtcclxuICAgICAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCLmmK/lkKbliKDpmaTor6XkuLvpophcIixcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwi6Iul5Li76aKY5Yig6Zmk77yM5pyJ5YWz6K+E6K665bCG5LiA5bm25riF56m6XCIsXHJcbiAgICAgICAgICAgICAgICBjYW5jZWxUZXh0Olwi5Y+W5raIXCIsXHJcbiAgICAgICAgICAgICAgICBjb25maXJtVGV4dDpcIuWIoOmZpFwiXHJcbiAgICAgICAgICAgICAgfSkudGhlbigoZCk9PntcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGQpXHJcbiAgICAgICAgICAgICAgICBpZihkLmNvbmZpcm0pe1xyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5maWQpXHJcbiAgICAgICAgICAgICAgICAgIHd4UmVxdWVzdCgnZ2V0Jyxjb25maWcuc2VydmljZS5EZWxldGVUb3BpYysnP3RpZD0nK2UuY3VycmVudFRhcmdldC5kYXRhc2V0LnRpZCsnJmZpZD0nK2UuY3VycmVudFRhcmdldC5kYXRhc2V0LmZpZCkudGhlbigocmVzcCk9PntcclxuICAgICAgICAgICAgICAgICAgICBpZihyZXNwPT0xKXtcclxuICAgICAgICAgICAgICAgICAgICAgdGlwLnN1Y2Nlc3MoJ+WIoOmZpOaIkOWKnycpO1xyXG4gICAgICAgICAgICAgICAgICAgICB3ZXB5LnJlTGF1bmNoKHt1cmw6XCIvcGFnZXMvaW5kZXhcIn0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhhdC4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAvL3RpcC50b2FzdCgn5Yqg6L295LitJyxmYWxzZSwnbG9hZGluZycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgIHRpcC5lcnJvcign5pWw5o2u5LiN5a2Y5ZyoJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBvblNoYXJlQXBwTWVzc2FnZShyZXMpIHtcclxuXHJcbiAgICAgICAgaWYgKHJlcy5mcm9tID09PSAnYnV0dG9uJykge1xyXG4gICAgICAgICAgLy8g5p2l6Ieq6aG16Z2i5YaF6L2s5Y+R5oyJ6ZKuXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMudGFyZ2V0KVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHRpdGxlOiB0aGlzLmFydGljbGUudGl0bGUsXHJcbiAgICAgICAgICBwYXRoOiAnL3BhZ2VzL2FydGljbGU/dGlkPScrdGhpcy5hcnRpY2xlLnRpZCxcclxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICAvLyDovazlj5HmiJDlip9cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBmYWlsOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgLy8g6L2s5Y+R5aSx6LSlXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuIl19