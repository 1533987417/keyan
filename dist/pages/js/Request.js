'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wxRequest = undefined;

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _db = require('./db.js');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function wxRequest(method, url) {
  var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var handler = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  handler.url = url;
  handler.data = params;
  handler.header = {
    'Authorization': _db2.default.Get('token')
  };
  handler.method = method;
  if (method === 'POST') {
    handler.header['content-type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
  }

  wx.showLoading && wx.showLoading({
    title: '加载中...'
  });

  return new Promise(function (resolve, reject) {
    handler.success = function (res) {
      if (res.data.status == '401') {
        console.log("重新登陆");
        _wepy2.default.showModal({
          title: "账号信息错误",
          content: "统一身份认证账号已过期！是否前往重新登陆？"
        }).then(function (d) {
          console.log(d);
          if (d.confirm) {
            wx.redirectTo({ url: 'bind' });
          }
        });
      } else {
        resolve(res.data);
      }
    };
    handler.fail = function (res) {

      wx.showModal({
        title: '网络错误',
        content: '网络错误',
        showCancel: false
      });
      reject('Network request failed');
    };
    handler.complete = function () {
      return wx.hideLoading && wx.hideLoading();
    };
    wx.request(handler);
  });
}
exports.wxRequest = wxRequest;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlJlcXVlc3QuanMiXSwibmFtZXMiOlsid3hSZXF1ZXN0IiwibWV0aG9kIiwidXJsIiwicGFyYW1zIiwiaGFuZGxlciIsImRhdGEiLCJoZWFkZXIiLCJHZXQiLCJ3eCIsInNob3dMb2FkaW5nIiwidGl0bGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInN1Y2Nlc3MiLCJyZXMiLCJzdGF0dXMiLCJjb25zb2xlIiwibG9nIiwic2hvd01vZGFsIiwiY29udGVudCIsInRoZW4iLCJkIiwiY29uZmlybSIsInJlZGlyZWN0VG8iLCJmYWlsIiwic2hvd0NhbmNlbCIsImNvbXBsZXRlIiwiaGlkZUxvYWRpbmciLCJyZXF1ZXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBQ0EsU0FBU0EsU0FBVCxDQUFtQkMsTUFBbkIsRUFBMkJDLEdBQTNCLEVBQTJEO0FBQUEsTUFBM0JDLE1BQTJCLHVFQUFsQixFQUFrQjtBQUFBLE1BQWRDLE9BQWMsdUVBQUosRUFBSTs7QUFDekRBLFVBQVFGLEdBQVIsR0FBY0EsR0FBZDtBQUNBRSxVQUFRQyxJQUFSLEdBQWVGLE1BQWY7QUFDQUMsVUFBUUUsTUFBUixHQUFpQjtBQUNmLHFCQUFpQixhQUFHQyxHQUFILENBQU8sT0FBUDtBQURGLEdBQWpCO0FBR0FILFVBQVFILE1BQVIsR0FBaUJBLE1BQWpCO0FBQ0EsTUFBSUEsV0FBVyxNQUFmLEVBQXVCO0FBQ3JCRyxZQUFRRSxNQUFSLENBQWUsY0FBZixJQUFpQyxrREFBakM7QUFDRDs7QUFFREUsS0FBR0MsV0FBSCxJQUFrQkQsR0FBR0MsV0FBSCxDQUFlO0FBQy9CQyxXQUFPO0FBRHdCLEdBQWYsQ0FBbEI7O0FBSUEsU0FBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDVCxZQUFRVSxPQUFSLEdBQWtCLGVBQU87QUFDckIsVUFBR0MsSUFBSVYsSUFBSixDQUFTVyxNQUFULElBQWlCLEtBQXBCLEVBQTBCO0FBQ3RCQyxnQkFBUUMsR0FBUixDQUFhLE1BQWI7QUFDQSx1QkFBS0MsU0FBTCxDQUFlO0FBQ2ZULGlCQUFPLFFBRFE7QUFFZlUsbUJBQVM7QUFGTSxTQUFmLEVBR0dDLElBSEgsQ0FHUSxVQUFDQyxDQUFELEVBQUs7QUFDVEwsa0JBQVFDLEdBQVIsQ0FBWUksQ0FBWjtBQUNBLGNBQUdBLEVBQUVDLE9BQUwsRUFBYTtBQUNUZixlQUFHZ0IsVUFBSCxDQUFjLEVBQUN0QixLQUFJLE1BQUwsRUFBZDtBQUNIO0FBQ0osU0FSRDtBQVVILE9BWkQsTUFhSTtBQUNKVSxnQkFBUUcsSUFBSVYsSUFBWjtBQUFrQjtBQUNyQixLQWhCRDtBQWlCQUQsWUFBUXFCLElBQVIsR0FBZSxVQUFDVixHQUFELEVBQVM7O0FBRXRCUCxTQUFHVyxTQUFILENBQWE7QUFDWFQsZUFBTyxNQURJO0FBRVhVLGlCQUFTLE1BRkU7QUFHWE0sb0JBQVk7QUFIRCxPQUFiO0FBS0FiLGFBQU8sd0JBQVA7QUFDRCxLQVJEO0FBU0FULFlBQVF1QixRQUFSLEdBQW1CO0FBQUEsYUFBTW5CLEdBQUdvQixXQUFILElBQWtCcEIsR0FBR29CLFdBQUgsRUFBeEI7QUFBQSxLQUFuQjtBQUNBcEIsT0FBR3FCLE9BQUgsQ0FBV3pCLE9BQVg7QUFDRCxHQTdCTSxDQUFQO0FBOEJEO1FBRUdKLFMsR0FBQUEsUyIsImZpbGUiOiJSZXF1ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0IGRiIGZyb20gJy4uL2pzL2RiJ1xyXG5mdW5jdGlvbiB3eFJlcXVlc3QobWV0aG9kLCB1cmwsIHBhcmFtcyA9IHt9LCBoYW5kbGVyID0ge30pIHtcclxuICBoYW5kbGVyLnVybCA9IHVybFxyXG4gIGhhbmRsZXIuZGF0YSA9IHBhcmFtc1xyXG4gIGhhbmRsZXIuaGVhZGVyID0ge1xyXG4gICAgJ0F1dGhvcml6YXRpb24nOiBkYi5HZXQoJ3Rva2VuJylcclxuICB9XHJcbiAgaGFuZGxlci5tZXRob2QgPSBtZXRob2RcclxuICBpZiAobWV0aG9kID09PSAnUE9TVCcpIHtcclxuICAgIGhhbmRsZXIuaGVhZGVyWydjb250ZW50LXR5cGUnXSA9ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9VVRGLTgnXHJcbiAgfVxyXG5cclxuICB3eC5zaG93TG9hZGluZyAmJiB3eC5zaG93TG9hZGluZyh7XHJcbiAgICB0aXRsZTogJ+WKoOi9veS4rS4uLidcclxuICB9KVxyXG5cclxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgaGFuZGxlci5zdWNjZXNzID0gcmVzID0+IHtcclxuICAgICAgICBpZihyZXMuZGF0YS5zdGF0dXM9PSc0MDEnKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cgKFwi6YeN5paw55m76ZmGXCIpXHJcbiAgICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgdGl0bGU6IFwi6LSm5Y+35L+h5oGv6ZSZ6K+vXCIsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwi57uf5LiA6Lqr5Lu96K6k6K+B6LSm5Y+35bey6L+H5pyf77yB5piv5ZCm5YmN5b6A6YeN5paw55m76ZmG77yfXCJcclxuICAgICAgICAgICAgfSkudGhlbigoZCk9PntcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGQpXHJcbiAgICAgICAgICAgICAgICBpZihkLmNvbmZpcm0pe1xyXG4gICAgICAgICAgICAgICAgICAgIHd4LnJlZGlyZWN0VG8oe3VybDonYmluZCd9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICByZXNvbHZlKHJlcy5kYXRhKX1cclxuICAgIH1cclxuICAgIGhhbmRsZXIuZmFpbCA9IChyZXMpID0+IHtcclxuICAgICAgICBcclxuICAgICAgd3guc2hvd01vZGFsKHtcclxuICAgICAgICB0aXRsZTogJ+e9kee7nOmUmeivrycsXHJcbiAgICAgICAgY29udGVudDogJ+e9kee7nOmUmeivrycsXHJcbiAgICAgICAgc2hvd0NhbmNlbDogZmFsc2VcclxuICAgICAgfSlcclxuICAgICAgcmVqZWN0KCdOZXR3b3JrIHJlcXVlc3QgZmFpbGVkJylcclxuICAgIH1cclxuICAgIGhhbmRsZXIuY29tcGxldGUgPSAoKSA9PiB3eC5oaWRlTG9hZGluZyAmJiB3eC5oaWRlTG9hZGluZygpXHJcbiAgICB3eC5yZXF1ZXN0KGhhbmRsZXIpXHJcbiAgfSlcclxufVxyXG5leHBvcnR7XHJcbiAgICB3eFJlcXVlc3RcclxufVxyXG4iXX0=