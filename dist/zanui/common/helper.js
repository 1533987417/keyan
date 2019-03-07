'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// 从事件对象中解析得到 componentId
// 需要在元素上声明 data-component-id
function extractComponentId() {
  var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _ref = event.currentTarget || {},
      componentId = _ref.dataset.componentId;

  return componentId;
}

/*
  注：默认合并所有生命周期函数
  配置合并指定的生命周期 or 忽略指定字段
  const extend = extendCreator({
    life: ['onLoad', 'onPullDownRefresh'],
    exclude: ['binder']
  });

  Page(extend({}, {
    onLoad() {},
    ...
  }));
*/

var LIFE_CYCLE = ['onLoad', 'onReady', 'onShow', 'onHide', 'onUnload', 'onPullDownRefresh', 'onReachBottom', 'onShareAppMessage', 'onPageScroll'];

var extendCreator = function extendCreator() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _config$life = config.life,
      life = _config$life === undefined ? LIFE_CYCLE : _config$life,
      _config$exclude = config.exclude,
      exclude = _config$exclude === undefined ? [] : _config$exclude;


  var excludeList = exclude.concat(LIFE_CYCLE.map(getFuncArrayName));

  if (!Array.isArray(life) || !Array.isArray(exclude)) throw new Error('Invalid Extend Config');
  var lifeCycleList = life.filter(function (item) {
    return LIFE_CYCLE.indexOf(item) >= 0;
  });
  return function extend(target) {
    for (var _len = arguments.length, objList = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      objList[_key - 1] = arguments[_key];
    }

    objList.forEach(function (source) {
      if (source) {
        var keys = Object.keys(source);
        keys.forEach(function (key) {
          var value = source[key];
          if (excludeList.indexOf(key) >= 0) return;
          if (lifeCycleList.indexOf(key) >= 0 && typeof value === 'function') {
            var funcArrayName = getFuncArrayName(key);
            if (!target[funcArrayName]) {
              target[funcArrayName] = [];
              if (target[key]) {
                target[funcArrayName].push(target[key]);
              }
              target[key] = function () {
                var _this = this;

                for (var _len2 = arguments.length, rest = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                  rest[_key2] = arguments[_key2];
                }

                target[funcArrayName].forEach(function (func) {
                  return func.apply(_this, rest);
                });
              };
            }

            if (source[funcArrayName]) {
              var _target$funcArrayName;

              // 经过生命周期合并的组件直接整合函数列表
              (_target$funcArrayName = target[funcArrayName]).push.apply(_target$funcArrayName, _toConsumableArray(source[funcArrayName]));
            } else {
              // 添加生命周期函数进入函数列表
              target[funcArrayName].push(value);
            }
          } else {
            target[key] = value;
          }
        });
      }
    });
    return target;
  };
};

var getFuncArrayName = function getFuncArrayName(name) {
  return '__$' + name;
};

module.exports = {
  extractComponentId: extractComponentId,
  extend: Object.assign,
  extendCreator: extendCreator
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbHBlci5qcyJdLCJuYW1lcyI6WyJleHRyYWN0Q29tcG9uZW50SWQiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJjb21wb25lbnRJZCIsImRhdGFzZXQiLCJMSUZFX0NZQ0xFIiwiZXh0ZW5kQ3JlYXRvciIsImNvbmZpZyIsImxpZmUiLCJleGNsdWRlIiwiZXhjbHVkZUxpc3QiLCJjb25jYXQiLCJtYXAiLCJnZXRGdW5jQXJyYXlOYW1lIiwiQXJyYXkiLCJpc0FycmF5IiwiRXJyb3IiLCJsaWZlQ3ljbGVMaXN0IiwiZmlsdGVyIiwiaW5kZXhPZiIsIml0ZW0iLCJleHRlbmQiLCJ0YXJnZXQiLCJvYmpMaXN0IiwiZm9yRWFjaCIsInNvdXJjZSIsImtleXMiLCJPYmplY3QiLCJrZXkiLCJ2YWx1ZSIsImZ1bmNBcnJheU5hbWUiLCJwdXNoIiwicmVzdCIsImZ1bmMiLCJhcHBseSIsIm5hbWUiLCJtb2R1bGUiLCJleHBvcnRzIiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBLFNBQVNBLGtCQUFULEdBQXdDO0FBQUEsTUFBWkMsS0FBWSx1RUFBSixFQUFJOztBQUFBLGFBQ0RBLE1BQU1DLGFBQU4sSUFBdUIsRUFEdEI7QUFBQSxNQUNuQkMsV0FEbUIsUUFDOUJDLE9BRDhCLENBQ25CRCxXQURtQjs7QUFFdEMsU0FBT0EsV0FBUDtBQUNEOztBQUVEOzs7Ozs7Ozs7Ozs7OztBQWNBLElBQU1FLGFBQWEsQ0FBQyxRQUFELEVBQVcsU0FBWCxFQUFzQixRQUF0QixFQUFnQyxRQUFoQyxFQUEwQyxVQUExQyxFQUFzRCxtQkFBdEQsRUFBMkUsZUFBM0UsRUFBNEYsbUJBQTVGLEVBQWlILGNBQWpILENBQW5COztBQUVBLElBQU1DLGdCQUFnQixTQUFoQkEsYUFBZ0IsR0FBaUI7QUFBQSxNQUFoQkMsTUFBZ0IsdUVBQVAsRUFBTztBQUFBLHFCQUlqQ0EsTUFKaUMsQ0FFbkNDLElBRm1DO0FBQUEsTUFFbkNBLElBRm1DLGdDQUU1QkgsVUFGNEI7QUFBQSx3QkFJakNFLE1BSmlDLENBR25DRSxPQUhtQztBQUFBLE1BR25DQSxPQUhtQyxtQ0FHekIsRUFIeUI7OztBQU1yQyxNQUFNQyxjQUFjRCxRQUFRRSxNQUFSLENBQWVOLFdBQVdPLEdBQVgsQ0FBZUMsZ0JBQWYsQ0FBZixDQUFwQjs7QUFFQSxNQUFJLENBQUNDLE1BQU1DLE9BQU4sQ0FBY1AsSUFBZCxDQUFELElBQXdCLENBQUNNLE1BQU1DLE9BQU4sQ0FBY04sT0FBZCxDQUE3QixFQUFxRCxNQUFNLElBQUlPLEtBQUosQ0FBVSx1QkFBVixDQUFOO0FBQ3JELE1BQUlDLGdCQUFnQlQsS0FBS1UsTUFBTCxDQUFZO0FBQUEsV0FBUWIsV0FBV2MsT0FBWCxDQUFtQkMsSUFBbkIsS0FBNEIsQ0FBcEM7QUFBQSxHQUFaLENBQXBCO0FBQ0EsU0FBTyxTQUFTQyxNQUFULENBQWdCQyxNQUFoQixFQUFvQztBQUFBLHNDQUFUQyxPQUFTO0FBQVRBLGFBQVM7QUFBQTs7QUFDekNBLFlBQVFDLE9BQVIsQ0FBZ0IsVUFBQ0MsTUFBRCxFQUFZO0FBQzFCLFVBQUlBLE1BQUosRUFBWTtBQUNWLFlBQUlDLE9BQU9DLE9BQU9ELElBQVAsQ0FBWUQsTUFBWixDQUFYO0FBQ0FDLGFBQUtGLE9BQUwsQ0FBYSxVQUFDSSxHQUFELEVBQVM7QUFDcEIsY0FBSUMsUUFBUUosT0FBT0csR0FBUCxDQUFaO0FBQ0EsY0FBSWxCLFlBQVlTLE9BQVosQ0FBb0JTLEdBQXBCLEtBQTRCLENBQWhDLEVBQW1DO0FBQ25DLGNBQUlYLGNBQWNFLE9BQWQsQ0FBc0JTLEdBQXRCLEtBQThCLENBQTlCLElBQW1DLE9BQU9DLEtBQVAsS0FBaUIsVUFBeEQsRUFBb0U7QUFDbEUsZ0JBQUlDLGdCQUFnQmpCLGlCQUFpQmUsR0FBakIsQ0FBcEI7QUFDQSxnQkFBSSxDQUFDTixPQUFPUSxhQUFQLENBQUwsRUFBNEI7QUFDMUJSLHFCQUFPUSxhQUFQLElBQXdCLEVBQXhCO0FBQ0Esa0JBQUlSLE9BQU9NLEdBQVAsQ0FBSixFQUFpQjtBQUNmTix1QkFBT1EsYUFBUCxFQUFzQkMsSUFBdEIsQ0FBMkJULE9BQU9NLEdBQVAsQ0FBM0I7QUFDRDtBQUNETixxQkFBT00sR0FBUCxJQUFjLFlBQW1CO0FBQUE7O0FBQUEsbURBQU5JLElBQU07QUFBTkEsc0JBQU07QUFBQTs7QUFDL0JWLHVCQUFPUSxhQUFQLEVBQXNCTixPQUF0QixDQUE4QjtBQUFBLHlCQUFRUyxLQUFLQyxLQUFMLFFBQWlCRixJQUFqQixDQUFSO0FBQUEsaUJBQTlCO0FBQ0QsZUFGRDtBQUdEOztBQUVELGdCQUFJUCxPQUFPSyxhQUFQLENBQUosRUFBMkI7QUFBQTs7QUFDekI7QUFDQSw4Q0FBT0EsYUFBUCxHQUFzQkMsSUFBdEIsaURBQThCTixPQUFPSyxhQUFQLENBQTlCO0FBQ0QsYUFIRCxNQUdPO0FBQ0w7QUFDQVIscUJBQU9RLGFBQVAsRUFBc0JDLElBQXRCLENBQTJCRixLQUEzQjtBQUNEO0FBQ0YsV0FuQkQsTUFtQk87QUFDTFAsbUJBQU9NLEdBQVAsSUFBY0MsS0FBZDtBQUNEO0FBQ0YsU0F6QkQ7QUEwQkQ7QUFDRixLQTlCRDtBQStCQSxXQUFPUCxNQUFQO0FBQ0QsR0FqQ0Q7QUFrQ0QsQ0E1Q0Q7O0FBOENBLElBQU1ULG1CQUFtQixTQUFuQkEsZ0JBQW1CO0FBQUEsaUJBQWNzQixJQUFkO0FBQUEsQ0FBekI7O0FBRUFDLE9BQU9DLE9BQVAsR0FBaUI7QUFDZnJDLHdDQURlO0FBRWZxQixVQUFRTSxPQUFPVyxNQUZBO0FBR2ZoQztBQUhlLENBQWpCIiwiZmlsZSI6ImhlbHBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIOS7juS6i+S7tuWvueixoeS4reino+aekOW+l+WIsCBjb21wb25lbnRJZFxuLy8g6ZyA6KaB5Zyo5YWD57Sg5LiK5aOw5piOIGRhdGEtY29tcG9uZW50LWlkXG5mdW5jdGlvbiBleHRyYWN0Q29tcG9uZW50SWQoZXZlbnQgPSB7fSkge1xuICBjb25zdCB7IGRhdGFzZXQ6IHsgY29tcG9uZW50SWQgfSB9ID0gZXZlbnQuY3VycmVudFRhcmdldCB8fCB7fTtcbiAgcmV0dXJuIGNvbXBvbmVudElkO1xufVxuXG4vKlxuICDms6jvvJrpu5jorqTlkIjlubbmiYDmnInnlJ/lkb3lkajmnJ/lh73mlbBcbiAg6YWN572u5ZCI5bm25oyH5a6a55qE55Sf5ZG95ZGo5pyfIG9yIOW/veeVpeaMh+WumuWtl+autVxuICBjb25zdCBleHRlbmQgPSBleHRlbmRDcmVhdG9yKHtcbiAgICBsaWZlOiBbJ29uTG9hZCcsICdvblB1bGxEb3duUmVmcmVzaCddLFxuICAgIGV4Y2x1ZGU6IFsnYmluZGVyJ11cbiAgfSk7XG5cbiAgUGFnZShleHRlbmQoe30sIHtcbiAgICBvbkxvYWQoKSB7fSxcbiAgICAuLi5cbiAgfSkpO1xuKi9cblxuY29uc3QgTElGRV9DWUNMRSA9IFsnb25Mb2FkJywgJ29uUmVhZHknLCAnb25TaG93JywgJ29uSGlkZScsICdvblVubG9hZCcsICdvblB1bGxEb3duUmVmcmVzaCcsICdvblJlYWNoQm90dG9tJywgJ29uU2hhcmVBcHBNZXNzYWdlJywgJ29uUGFnZVNjcm9sbCddO1xuXG5jb25zdCBleHRlbmRDcmVhdG9yID0gKGNvbmZpZyA9IHt9KSA9PiB7XG4gIGNvbnN0IHtcbiAgICBsaWZlID0gTElGRV9DWUNMRSxcbiAgICBleGNsdWRlID0gW11cbiAgfSA9IGNvbmZpZztcblxuICBjb25zdCBleGNsdWRlTGlzdCA9IGV4Y2x1ZGUuY29uY2F0KExJRkVfQ1lDTEUubWFwKGdldEZ1bmNBcnJheU5hbWUpKTtcblxuICBpZiAoIUFycmF5LmlzQXJyYXkobGlmZSkgfHwgIUFycmF5LmlzQXJyYXkoZXhjbHVkZSkpIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBFeHRlbmQgQ29uZmlnJyk7XG4gIGxldCBsaWZlQ3ljbGVMaXN0ID0gbGlmZS5maWx0ZXIoaXRlbSA9PiBMSUZFX0NZQ0xFLmluZGV4T2YoaXRlbSkgPj0gMCk7XG4gIHJldHVybiBmdW5jdGlvbiBleHRlbmQodGFyZ2V0LCAuLi5vYmpMaXN0KSB7XG4gICAgb2JqTGlzdC5mb3JFYWNoKChzb3VyY2UpID0+IHtcbiAgICAgIGlmIChzb3VyY2UpIHtcbiAgICAgICAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICAgICAgICBrZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgIGxldCB2YWx1ZSA9IHNvdXJjZVtrZXldO1xuICAgICAgICAgIGlmIChleGNsdWRlTGlzdC5pbmRleE9mKGtleSkgPj0gMCkgcmV0dXJuO1xuICAgICAgICAgIGlmIChsaWZlQ3ljbGVMaXN0LmluZGV4T2Yoa2V5KSA+PSAwICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgbGV0IGZ1bmNBcnJheU5hbWUgPSBnZXRGdW5jQXJyYXlOYW1lKGtleSk7XG4gICAgICAgICAgICBpZiAoIXRhcmdldFtmdW5jQXJyYXlOYW1lXSkge1xuICAgICAgICAgICAgICB0YXJnZXRbZnVuY0FycmF5TmFtZV0gPSBbXTtcbiAgICAgICAgICAgICAgaWYgKHRhcmdldFtrZXldKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W2Z1bmNBcnJheU5hbWVdLnB1c2godGFyZ2V0W2tleV0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRhcmdldFtrZXldID0gZnVuY3Rpb24gKC4uLnJlc3QpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRbZnVuY0FycmF5TmFtZV0uZm9yRWFjaChmdW5jID0+IGZ1bmMuYXBwbHkodGhpcywgcmVzdCkpO1xuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc291cmNlW2Z1bmNBcnJheU5hbWVdKSB7XG4gICAgICAgICAgICAgIC8vIOe7j+i/h+eUn+WRveWRqOacn+WQiOW5tueahOe7hOS7tuebtOaOpeaVtOWQiOWHveaVsOWIl+ihqFxuICAgICAgICAgICAgICB0YXJnZXRbZnVuY0FycmF5TmFtZV0ucHVzaCguLi5zb3VyY2VbZnVuY0FycmF5TmFtZV0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8g5re75Yqg55Sf5ZG95ZGo5pyf5Ye95pWw6L+b5YWl5Ye95pWw5YiX6KGoXG4gICAgICAgICAgICAgIHRhcmdldFtmdW5jQXJyYXlOYW1lXS5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG59O1xuXG5jb25zdCBnZXRGdW5jQXJyYXlOYW1lID0gbmFtZSA9PiBgX18kJHtuYW1lfWA7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBleHRyYWN0Q29tcG9uZW50SWQsXG4gIGV4dGVuZDogT2JqZWN0LmFzc2lnbixcbiAgZXh0ZW5kQ3JlYXRvclxufTtcbiJdfQ==