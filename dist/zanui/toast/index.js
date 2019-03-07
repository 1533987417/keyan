'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

module.exports = {
  showZanToast: function showZanToast(title, timeout) {
    var _this = this;

    var options = formatParameter(title, timeout);

    // 清除上一轮的计时器

    var _ref = this.data.zanToast || {},
        _ref$timer = _ref.timer,
        timer = _ref$timer === undefined ? 0 : _ref$timer;

    clearTimeout(timer);

    // 弹层设置~
    var zanToast = {
      show: true,
      icon: options.icon,
      image: options.image,
      title: options.title
    };
    this.setData({
      zanToast: zanToast
    });

    // 传入的显示时长小于0，就认为需要一直显示
    if (timeout < 0) {
      return;
    }

    // 下一轮计时器
    var nextTimer = setTimeout(function () {
      _this.clearZanToast();
    }, timeout || 3000);

    this.setData({
      'zanToast.timer': nextTimer
    });
  },


  // 清除所有 toast
  clearZanToast: function clearZanToast() {
    var _ref2 = this.data.zanToast || {},
        _ref2$timer = _ref2.timer,
        timer = _ref2$timer === undefined ? 0 : _ref2$timer;

    clearTimeout(timer);

    this.setData({
      'zanToast.show': false
    });
  },


  // 快捷方法，显示 loading
  showZanLoading: function showZanLoading(title) {
    var options = formatParameter(title);

    this.showZanToast(_extends({}, options, {
      icon: 'loading'
    }));
  }
};

function formatParameter(title) {
  var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  // 如果传入的 title 是对象，那么认为所有的配置属性都在这个对象中了
  if ((typeof title === 'undefined' ? 'undefined' : _typeof(title)) === 'object') {
    return title;
  }

  return {
    title: title,
    timeout: timeout
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJzaG93WmFuVG9hc3QiLCJ0aXRsZSIsInRpbWVvdXQiLCJvcHRpb25zIiwiZm9ybWF0UGFyYW1ldGVyIiwiZGF0YSIsInphblRvYXN0IiwidGltZXIiLCJjbGVhclRpbWVvdXQiLCJzaG93IiwiaWNvbiIsImltYWdlIiwic2V0RGF0YSIsIm5leHRUaW1lciIsInNldFRpbWVvdXQiLCJjbGVhclphblRvYXN0Iiwic2hvd1phbkxvYWRpbmciXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBQSxPQUFPQyxPQUFQLEdBQWlCO0FBQ2ZDLGNBRGUsd0JBQ0ZDLEtBREUsRUFDS0MsT0FETCxFQUNjO0FBQUE7O0FBQzNCLFFBQU1DLFVBQVVDLGdCQUFnQkgsS0FBaEIsRUFBdUJDLE9BQXZCLENBQWhCOztBQUVBOztBQUgyQixlQUlMLEtBQUtHLElBQUwsQ0FBVUMsUUFBVixJQUFzQixFQUpqQjtBQUFBLDBCQUluQkMsS0FKbUI7QUFBQSxRQUluQkEsS0FKbUIsOEJBSVgsQ0FKVzs7QUFLM0JDLGlCQUFhRCxLQUFiOztBQUVBO0FBQ0EsUUFBTUQsV0FBVztBQUNmRyxZQUFNLElBRFM7QUFFZkMsWUFBTVAsUUFBUU8sSUFGQztBQUdmQyxhQUFPUixRQUFRUSxLQUhBO0FBSWZWLGFBQU9FLFFBQVFGO0FBSkEsS0FBakI7QUFNQSxTQUFLVyxPQUFMLENBQWE7QUFDWE47QUFEVyxLQUFiOztBQUlBO0FBQ0EsUUFBSUosVUFBVSxDQUFkLEVBQWlCO0FBQ2Y7QUFDRDs7QUFFRDtBQUNBLFFBQU1XLFlBQVlDLFdBQVcsWUFBTTtBQUNqQyxZQUFLQyxhQUFMO0FBQ0QsS0FGaUIsRUFFZmIsV0FBVyxJQUZJLENBQWxCOztBQUlBLFNBQUtVLE9BQUwsQ0FBYTtBQUNYLHdCQUFrQkM7QUFEUCxLQUFiO0FBR0QsR0FoQ2M7OztBQWtDZjtBQUNBRSxlQW5DZSwyQkFtQ0M7QUFBQSxnQkFDUSxLQUFLVixJQUFMLENBQVVDLFFBQVYsSUFBc0IsRUFEOUI7QUFBQSw0QkFDTkMsS0FETTtBQUFBLFFBQ05BLEtBRE0sK0JBQ0UsQ0FERjs7QUFFZEMsaUJBQWFELEtBQWI7O0FBRUEsU0FBS0ssT0FBTCxDQUFhO0FBQ1gsdUJBQWlCO0FBRE4sS0FBYjtBQUdELEdBMUNjOzs7QUE0Q2Y7QUFDQUksZ0JBN0NlLDBCQTZDQWYsS0E3Q0EsRUE2Q087QUFDcEIsUUFBTUUsVUFBVUMsZ0JBQWdCSCxLQUFoQixDQUFoQjs7QUFFQSxTQUFLRCxZQUFMLGNBQ0tHLE9BREw7QUFFRU8sWUFBTTtBQUZSO0FBSUQ7QUFwRGMsQ0FBakI7O0FBdURBLFNBQVNOLGVBQVQsQ0FBeUJILEtBQXpCLEVBQTZDO0FBQUEsTUFBYkMsT0FBYSx1RUFBSCxDQUFHOztBQUMzQztBQUNBLE1BQUksUUFBT0QsS0FBUCx5Q0FBT0EsS0FBUCxPQUFpQixRQUFyQixFQUErQjtBQUM3QixXQUFPQSxLQUFQO0FBQ0Q7O0FBRUQsU0FBTztBQUNMQSxnQkFESztBQUVMQztBQUZLLEdBQVA7QUFJRCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0ge1xuICBzaG93WmFuVG9hc3QodGl0bGUsIHRpbWVvdXQpIHtcbiAgICBjb25zdCBvcHRpb25zID0gZm9ybWF0UGFyYW1ldGVyKHRpdGxlLCB0aW1lb3V0KTtcblxuICAgIC8vIOa4hemZpOS4iuS4gOi9rueahOiuoeaXtuWZqFxuICAgIGNvbnN0IHsgdGltZXIgPSAwIH0gPSB0aGlzLmRhdGEuemFuVG9hc3QgfHwge307XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcblxuICAgIC8vIOW8ueWxguiuvue9rn5cbiAgICBjb25zdCB6YW5Ub2FzdCA9IHtcbiAgICAgIHNob3c6IHRydWUsXG4gICAgICBpY29uOiBvcHRpb25zLmljb24sXG4gICAgICBpbWFnZTogb3B0aW9ucy5pbWFnZSxcbiAgICAgIHRpdGxlOiBvcHRpb25zLnRpdGxlXG4gICAgfTtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgemFuVG9hc3RcbiAgICB9KTtcblxuICAgIC8vIOS8oOWFpeeahOaYvuekuuaXtumVv+Wwj+S6jjDvvIzlsLHorqTkuLrpnIDopoHkuIDnm7TmmL7npLpcbiAgICBpZiAodGltZW91dCA8IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyDkuIvkuIDova7orqHml7blmahcbiAgICBjb25zdCBuZXh0VGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuY2xlYXJaYW5Ub2FzdCgpO1xuICAgIH0sIHRpbWVvdXQgfHwgMzAwMCk7XG5cbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgJ3phblRvYXN0LnRpbWVyJzogbmV4dFRpbWVyXG4gICAgfSk7XG4gIH0sXG5cbiAgLy8g5riF6Zmk5omA5pyJIHRvYXN0XG4gIGNsZWFyWmFuVG9hc3QoKSB7XG4gICAgY29uc3QgeyB0aW1lciA9IDAgfSA9IHRoaXMuZGF0YS56YW5Ub2FzdCB8fCB7fTtcbiAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuXG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICd6YW5Ub2FzdC5zaG93JzogZmFsc2VcbiAgICB9KTtcbiAgfSxcblxuICAvLyDlv6vmjbfmlrnms5XvvIzmmL7npLogbG9hZGluZ1xuICBzaG93WmFuTG9hZGluZyh0aXRsZSkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSBmb3JtYXRQYXJhbWV0ZXIodGl0bGUpO1xuXG4gICAgdGhpcy5zaG93WmFuVG9hc3Qoe1xuICAgICAgLi4ub3B0aW9ucyxcbiAgICAgIGljb246ICdsb2FkaW5nJ1xuICAgIH0pO1xuICB9XG59O1xuXG5mdW5jdGlvbiBmb3JtYXRQYXJhbWV0ZXIodGl0bGUsIHRpbWVvdXQgPSAwKSB7XG4gIC8vIOWmguaenOS8oOWFpeeahCB0aXRsZSDmmK/lr7nosaHvvIzpgqPkuYjorqTkuLrmiYDmnInnmoTphY3nva7lsZ7mgKfpg73lnKjov5nkuKrlr7nosaHkuK3kuoZcbiAgaWYgKHR5cGVvZiB0aXRsZSA9PT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gdGl0bGU7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHRpdGxlLFxuICAgIHRpbWVvdXRcbiAgfTtcbn1cbiJdfQ==