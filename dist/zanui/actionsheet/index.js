'use strict';

var _require = require('./../common/helper.js'),
    extractComponentId = _require.extractComponentId;

module.exports = {
  _handleZanActionsheetMaskClick: function _handleZanActionsheetMaskClick(_ref) {
    var _ref$currentTarget = _ref.currentTarget,
        currentTarget = _ref$currentTarget === undefined ? {} : _ref$currentTarget;

    var dataset = currentTarget.dataset || {};
    var componentId = dataset.componentId,
        closeOnClickOverlay = dataset.closeOnClickOverlay;

    // 判断是否在点击背景时需要关闭弹层

    if (!closeOnClickOverlay) {
      return;
    }

    resolveCancelClick.call(this, { componentId: componentId });
  },
  _handleZanActionsheetCancelBtnClick: function _handleZanActionsheetCancelBtnClick(e) {
    var componentId = extractComponentId(e);

    resolveCancelClick.call(this, { componentId: componentId });
  },
  _handleZanActionsheetBtnClick: function _handleZanActionsheetBtnClick(_ref2) {
    var _ref2$currentTarget = _ref2.currentTarget,
        currentTarget = _ref2$currentTarget === undefined ? {} : _ref2$currentTarget;

    var dataset = currentTarget.dataset || {};
    var componentId = dataset.componentId,
        index = dataset.index;


    if (this.handleZanActionsheetClick) {
      this.handleZanActionsheetClick({ componentId: componentId, index: index });
    } else {
      console.warn('页面缺少 handleZanActionsheetClick 回调函数');
    }
  }
};

function resolveCancelClick(_ref3) {
  var componentId = _ref3.componentId;

  console.info('[zan:actionsheet:cancel]');
  if (this.handleZanActionsheetCancel) {
    this.handleZanActionsheetCancel({ componentId: componentId });
  } else {
    console.warn('页面缺少 handleZanActionsheetCancel 回调函数');
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJleHRyYWN0Q29tcG9uZW50SWQiLCJtb2R1bGUiLCJleHBvcnRzIiwiX2hhbmRsZVphbkFjdGlvbnNoZWV0TWFza0NsaWNrIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJjb21wb25lbnRJZCIsImNsb3NlT25DbGlja092ZXJsYXkiLCJyZXNvbHZlQ2FuY2VsQ2xpY2siLCJjYWxsIiwiX2hhbmRsZVphbkFjdGlvbnNoZWV0Q2FuY2VsQnRuQ2xpY2siLCJlIiwiX2hhbmRsZVphbkFjdGlvbnNoZWV0QnRuQ2xpY2siLCJpbmRleCIsImhhbmRsZVphbkFjdGlvbnNoZWV0Q2xpY2siLCJjb25zb2xlIiwid2FybiIsImluZm8iLCJoYW5kbGVaYW5BY3Rpb25zaGVldENhbmNlbCJdLCJtYXBwaW5ncyI6Ijs7ZUFBK0JBLFFBQVEsa0JBQVIsQztJQUF2QkMsa0IsWUFBQUEsa0I7O0FBRVJDLE9BQU9DLE9BQVAsR0FBaUI7QUFDZkMsZ0NBRGUsZ0RBQ3dDO0FBQUEsa0NBQXRCQyxhQUFzQjtBQUFBLFFBQXRCQSxhQUFzQixzQ0FBTixFQUFNOztBQUNyRCxRQUFNQyxVQUFVRCxjQUFjQyxPQUFkLElBQXlCLEVBQXpDO0FBRHFELFFBRTdDQyxXQUY2QyxHQUVSRCxPQUZRLENBRTdDQyxXQUY2QztBQUFBLFFBRWhDQyxtQkFGZ0MsR0FFUkYsT0FGUSxDQUVoQ0UsbUJBRmdDOztBQUlyRDs7QUFDQSxRQUFJLENBQUNBLG1CQUFMLEVBQTBCO0FBQ3hCO0FBQ0Q7O0FBRURDLHVCQUFtQkMsSUFBbkIsQ0FBd0IsSUFBeEIsRUFBOEIsRUFBRUgsd0JBQUYsRUFBOUI7QUFDRCxHQVhjO0FBYWZJLHFDQWJlLCtDQWFxQkMsQ0FickIsRUFhd0I7QUFDckMsUUFBTUwsY0FBY04sbUJBQW1CVyxDQUFuQixDQUFwQjs7QUFFQUgsdUJBQW1CQyxJQUFuQixDQUF3QixJQUF4QixFQUE4QixFQUFFSCx3QkFBRixFQUE5QjtBQUNELEdBakJjO0FBbUJmTSwrQkFuQmUsZ0RBbUJ1QztBQUFBLG9DQUF0QlIsYUFBc0I7QUFBQSxRQUF0QkEsYUFBc0IsdUNBQU4sRUFBTTs7QUFDcEQsUUFBTUMsVUFBVUQsY0FBY0MsT0FBZCxJQUF5QixFQUF6QztBQURvRCxRQUU1Q0MsV0FGNEMsR0FFckJELE9BRnFCLENBRTVDQyxXQUY0QztBQUFBLFFBRS9CTyxLQUYrQixHQUVyQlIsT0FGcUIsQ0FFL0JRLEtBRitCOzs7QUFJcEQsUUFBSSxLQUFLQyx5QkFBVCxFQUFvQztBQUNsQyxXQUFLQSx5QkFBTCxDQUErQixFQUFFUix3QkFBRixFQUFlTyxZQUFmLEVBQS9CO0FBQ0QsS0FGRCxNQUVPO0FBQ0xFLGNBQVFDLElBQVIsQ0FBYSxxQ0FBYjtBQUNEO0FBQ0Y7QUE1QmMsQ0FBakI7O0FBK0JBLFNBQVNSLGtCQUFULFFBQTZDO0FBQUEsTUFBZkYsV0FBZSxTQUFmQSxXQUFlOztBQUMzQ1MsVUFBUUUsSUFBUixDQUFhLDBCQUFiO0FBQ0EsTUFBSSxLQUFLQywwQkFBVCxFQUFxQztBQUNuQyxTQUFLQSwwQkFBTCxDQUFnQyxFQUFFWix3QkFBRixFQUFoQztBQUNELEdBRkQsTUFFTztBQUNMUyxZQUFRQyxJQUFSLENBQWEsc0NBQWI7QUFDRDtBQUNGIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBleHRyYWN0Q29tcG9uZW50SWQgfSA9IHJlcXVpcmUoJy4uL2NvbW1vbi9oZWxwZXInKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIF9oYW5kbGVaYW5BY3Rpb25zaGVldE1hc2tDbGljayh7IGN1cnJlbnRUYXJnZXQgPSB7fSB9KSB7XG4gICAgY29uc3QgZGF0YXNldCA9IGN1cnJlbnRUYXJnZXQuZGF0YXNldCB8fCB7fTtcbiAgICBjb25zdCB7IGNvbXBvbmVudElkLCBjbG9zZU9uQ2xpY2tPdmVybGF5IH0gPSBkYXRhc2V0O1xuXG4gICAgLy8g5Yik5pat5piv5ZCm5Zyo54K55Ye76IOM5pmv5pe26ZyA6KaB5YWz6Zet5by55bGCXG4gICAgaWYgKCFjbG9zZU9uQ2xpY2tPdmVybGF5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcmVzb2x2ZUNhbmNlbENsaWNrLmNhbGwodGhpcywgeyBjb21wb25lbnRJZCB9KTtcbiAgfSxcblxuICBfaGFuZGxlWmFuQWN0aW9uc2hlZXRDYW5jZWxCdG5DbGljayhlKSB7XG4gICAgY29uc3QgY29tcG9uZW50SWQgPSBleHRyYWN0Q29tcG9uZW50SWQoZSk7XG5cbiAgICByZXNvbHZlQ2FuY2VsQ2xpY2suY2FsbCh0aGlzLCB7IGNvbXBvbmVudElkIH0pO1xuICB9LFxuXG4gIF9oYW5kbGVaYW5BY3Rpb25zaGVldEJ0bkNsaWNrKHsgY3VycmVudFRhcmdldCA9IHt9IH0pIHtcbiAgICBjb25zdCBkYXRhc2V0ID0gY3VycmVudFRhcmdldC5kYXRhc2V0IHx8IHt9O1xuICAgIGNvbnN0IHsgY29tcG9uZW50SWQsIGluZGV4IH0gPSBkYXRhc2V0O1xuXG4gICAgaWYgKHRoaXMuaGFuZGxlWmFuQWN0aW9uc2hlZXRDbGljaykge1xuICAgICAgdGhpcy5oYW5kbGVaYW5BY3Rpb25zaGVldENsaWNrKHsgY29tcG9uZW50SWQsIGluZGV4IH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLndhcm4oJ+mhtemdoue8uuWwkSBoYW5kbGVaYW5BY3Rpb25zaGVldENsaWNrIOWbnuiwg+WHveaVsCcpO1xuICAgIH1cbiAgfVxufTtcblxuZnVuY3Rpb24gcmVzb2x2ZUNhbmNlbENsaWNrKHsgY29tcG9uZW50SWQgfSkge1xuICBjb25zb2xlLmluZm8oJ1t6YW46YWN0aW9uc2hlZXQ6Y2FuY2VsXScpO1xuICBpZiAodGhpcy5oYW5kbGVaYW5BY3Rpb25zaGVldENhbmNlbCkge1xuICAgIHRoaXMuaGFuZGxlWmFuQWN0aW9uc2hlZXRDYW5jZWwoeyBjb21wb25lbnRJZCB9KTtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLndhcm4oJ+mhtemdoue8uuWwkSBoYW5kbGVaYW5BY3Rpb25zaGVldENhbmNlbCDlm57osIPlh73mlbAnKTtcbiAgfVxufVxuIl19