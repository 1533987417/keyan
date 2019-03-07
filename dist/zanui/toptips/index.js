'use strict';

module.exports = {
  showZanTopTips: function showZanTopTips() {
    var _this = this;

    var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var zanTopTips = this.data.zanTopTips || {};
    // 如果已经有一个计时器在了，就清理掉先
    if (zanTopTips.timer) {
      clearTimeout(zanTopTips.timer);
      zanTopTips.timer = 0;
    }

    if (typeof options === 'number') {
      options = {
        duration: options
      };
    }

    // options参数默认参数扩展
    options = Object.assign({
      duration: 3000
    }, options);

    // 设置定时器，定时关闭topTips
    var timer = setTimeout(function () {
      _this.setData({
        'zanTopTips.show': false,
        'zanTopTips.timer': 0
      });
    }, options.duration);

    // 展示出topTips
    this.setData({
      zanTopTips: {
        show: true,
        content: content,
        options: options,
        timer: timer
      }
    });
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJzaG93WmFuVG9wVGlwcyIsImNvbnRlbnQiLCJvcHRpb25zIiwiemFuVG9wVGlwcyIsImRhdGEiLCJ0aW1lciIsImNsZWFyVGltZW91dCIsImR1cmF0aW9uIiwiT2JqZWN0IiwiYXNzaWduIiwic2V0VGltZW91dCIsInNldERhdGEiLCJzaG93Il0sIm1hcHBpbmdzIjoiOztBQUFBQSxPQUFPQyxPQUFQLEdBQWlCO0FBQ2ZDLGdCQURlLDRCQUM0QjtBQUFBOztBQUFBLFFBQTVCQyxPQUE0Qix1RUFBbEIsRUFBa0I7QUFBQSxRQUFkQyxPQUFjLHVFQUFKLEVBQUk7O0FBQ3pDLFFBQUlDLGFBQWEsS0FBS0MsSUFBTCxDQUFVRCxVQUFWLElBQXdCLEVBQXpDO0FBQ0E7QUFDQSxRQUFJQSxXQUFXRSxLQUFmLEVBQXNCO0FBQ3BCQyxtQkFBYUgsV0FBV0UsS0FBeEI7QUFDQUYsaUJBQVdFLEtBQVgsR0FBbUIsQ0FBbkI7QUFDRDs7QUFFRCxRQUFJLE9BQU9ILE9BQVAsS0FBbUIsUUFBdkIsRUFBaUM7QUFDL0JBLGdCQUFVO0FBQ1JLLGtCQUFVTDtBQURGLE9BQVY7QUFHRDs7QUFFRDtBQUNBQSxjQUFVTSxPQUFPQyxNQUFQLENBQWM7QUFDdEJGLGdCQUFVO0FBRFksS0FBZCxFQUVQTCxPQUZPLENBQVY7O0FBSUE7QUFDQSxRQUFJRyxRQUFRSyxXQUFXLFlBQU07QUFDM0IsWUFBS0MsT0FBTCxDQUFhO0FBQ1gsMkJBQW1CLEtBRFI7QUFFWCw0QkFBb0I7QUFGVCxPQUFiO0FBSUQsS0FMVyxFQUtUVCxRQUFRSyxRQUxDLENBQVo7O0FBT0E7QUFDQSxTQUFLSSxPQUFMLENBQWE7QUFDWFIsa0JBQVk7QUFDVlMsY0FBTSxJQURJO0FBRVZYLHdCQUZVO0FBR1ZDLHdCQUhVO0FBSVZHO0FBSlU7QUFERCxLQUFiO0FBUUQ7QUFyQ2MsQ0FBakIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2hvd1phblRvcFRpcHMoY29udGVudCA9ICcnLCBvcHRpb25zID0ge30pIHtcbiAgICBsZXQgemFuVG9wVGlwcyA9IHRoaXMuZGF0YS56YW5Ub3BUaXBzIHx8IHt9O1xuICAgIC8vIOWmguaenOW3sue7j+acieS4gOS4quiuoeaXtuWZqOWcqOS6hu+8jOWwsea4heeQhuaOieWFiFxuICAgIGlmICh6YW5Ub3BUaXBzLnRpbWVyKSB7XG4gICAgICBjbGVhclRpbWVvdXQoemFuVG9wVGlwcy50aW1lcik7XG4gICAgICB6YW5Ub3BUaXBzLnRpbWVyID0gMDtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdudW1iZXInKSB7XG4gICAgICBvcHRpb25zID0ge1xuICAgICAgICBkdXJhdGlvbjogb3B0aW9uc1xuICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBvcHRpb25z5Y+C5pWw6buY6K6k5Y+C5pWw5omp5bGVXG4gICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgZHVyYXRpb246IDMwMDBcbiAgICB9LCBvcHRpb25zKTtcblxuICAgIC8vIOiuvue9ruWumuaXtuWZqO+8jOWumuaXtuWFs+mXrXRvcFRpcHNcbiAgICBsZXQgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICd6YW5Ub3BUaXBzLnNob3cnOiBmYWxzZSxcbiAgICAgICAgJ3phblRvcFRpcHMudGltZXInOiAwXG4gICAgICB9KTtcbiAgICB9LCBvcHRpb25zLmR1cmF0aW9uKTtcblxuICAgIC8vIOWxleekuuWHunRvcFRpcHNcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgemFuVG9wVGlwczoge1xuICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICBjb250ZW50LFxuICAgICAgICBvcHRpb25zLFxuICAgICAgICB0aW1lclxuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuIl19