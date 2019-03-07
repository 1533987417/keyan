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

var MsgSuccess = function (_wepy$page) {
    _inherits(MsgSuccess, _wepy$page);

    function MsgSuccess() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, MsgSuccess);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MsgSuccess.__proto__ || Object.getPrototypeOf(MsgSuccess)).call.apply(_ref, [this].concat(args))), _this), _this.components = {
            //为两个相同组件的不同实例分配不同的组件ID，从而避免数据同步变化的问题

        }, _this.config = {
            navigationBarTitleText: '提示页'
        }, _this.data = {
            tid: Number
        }, _this.methods = {
            priview: function priview() {
                this.$navigate("./article?tid=" + this.tid);
            },
            back: function back() {
                _wepy2.default.reLaunch({ url: "/pages/index" });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(MsgSuccess, [{
        key: 'onLoad',
        value: function onLoad(e) {
            console.log(e.tid);
            this.tid = e.tid;
        }
    }]);

    return MsgSuccess;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(MsgSuccess , 'pages/msg_success'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1zZ19zdWNjZXNzLmpzIl0sIm5hbWVzIjpbIk1zZ1N1Y2Nlc3MiLCJjb21wb25lbnRzIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJ0aWQiLCJOdW1iZXIiLCJtZXRob2RzIiwicHJpdmlldyIsIiRuYXZpZ2F0ZSIsImJhY2siLCJyZUxhdW5jaCIsInVybCIsImUiLCJjb25zb2xlIiwibG9nIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDSTs7Ozs7Ozs7Ozs7O0lBRXFCQSxVOzs7Ozs7Ozs7Ozs7OztrTUFFakJDLFUsR0FBYTtBQUNUOztBQURTLFMsUUFJYkMsTSxHQUFTO0FBQ0xDLG9DQUF3QjtBQURuQixTLFFBR1RDLEksR0FBSztBQUNGQyxpQkFBSUM7QUFERixTLFFBT05DLE8sR0FBUTtBQUNMQyxtQkFESyxxQkFDSTtBQUNOLHFCQUFLQyxTQUFMLENBQWUsbUJBQWlCLEtBQUtKLEdBQXJDO0FBQ0YsYUFISTtBQUlMSyxnQkFKSyxrQkFJQztBQUNKLCtCQUFLQyxRQUFMLENBQWMsRUFBQ0MsS0FBSSxjQUFMLEVBQWQ7QUFDRDtBQU5JLFM7Ozs7OytCQUpEQyxDLEVBQUU7QUFDTkMsb0JBQVFDLEdBQVIsQ0FBWUYsRUFBRVIsR0FBZDtBQUNBLGlCQUFLQSxHQUFMLEdBQVNRLEVBQUVSLEdBQVg7QUFDRjs7OztFQWZvQyxlQUFLVyxJOztrQkFBeEJoQixVIiwiZmlsZSI6Im1zZ19zdWNjZXNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuXHJcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBNc2dTdWNjZXNzIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuXHJcbiAgICAgICAgY29tcG9uZW50cyA9IHtcclxuICAgICAgICAgICAgLy/kuLrkuKTkuKrnm7jlkIznu4Tku7bnmoTkuI3lkIzlrp7kvovliIbphY3kuI3lkIznmoTnu4Tku7ZJRO+8jOS7juiAjOmBv+WFjeaVsOaNruWQjOatpeWPmOWMlueahOmXrumimFxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbmZpZyA9IHtcclxuICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aPkOekuumhtSdcclxuICAgICAgICB9XHJcbiAgICAgICAgZGF0YT17XHJcbiAgICAgICAgICAgdGlkOk51bWJlclxyXG4gICAgICAgfVxyXG4gICAgICAgb25Mb2FkKGUpe1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZS50aWQpO1xyXG4gICAgICAgICAgdGhpcy50aWQ9ZS50aWQ7XHJcbiAgICAgICB9XHJcbiAgICAgICBtZXRob2RzPXtcclxuICAgICAgICAgIHByaXZpZXcoKXtcclxuICAgICAgICAgICAgIHRoaXMuJG5hdmlnYXRlKFwiLi9hcnRpY2xlP3RpZD1cIit0aGlzLnRpZClcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBiYWNrKCl7XHJcbiAgICAgICAgICAgIHdlcHkucmVMYXVuY2goe3VybDpcIi9wYWdlcy9pbmRleFwifSlcclxuICAgICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICAgfVxyXG5cclxuICAgIH1cclxuIl19