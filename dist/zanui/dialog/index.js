'use strict';

var _f = function _f() {};

module.exports = {
  showZanDialog: function showZanDialog() {
    var _this = this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var _options$buttons = options.buttons,
        buttons = _options$buttons === undefined ? [] : _options$buttons,
        _options$title = options.title,
        title = _options$title === undefined ? '' : _options$title,
        _options$content = options.content,
        content = _options$content === undefined ? ' ' : _options$content,
        _options$buttonsShowV = options.buttonsShowVertical,
        buttonsShowVertical = _options$buttonsShowV === undefined ? false : _options$buttonsShowV,
        _options$showConfirm = options.showConfirm,
        showConfirm = _options$showConfirm === undefined ? true : _options$showConfirm,
        _options$confirmText = options.confirmText,
        confirmText = _options$confirmText === undefined ? '确定' : _options$confirmText,
        _options$confirmColor = options.confirmColor,
        confirmColor = _options$confirmColor === undefined ? '#3CC51F' : _options$confirmColor,
        _options$showCancel = options.showCancel,
        showCancel = _options$showCancel === undefined ? false : _options$showCancel,
        _options$cancelText = options.cancelText,
        cancelText = _options$cancelText === undefined ? '取消' : _options$cancelText,
        _options$cancelColor = options.cancelColor,
        cancelColor = _options$cancelColor === undefined ? '#333' : _options$cancelColor;

    // 处理默认按钮的展示
    // 纵向排布确认按钮在上方

    var showCustomBtns = false;
    if (buttons.length === 0) {
      if (showConfirm) {
        buttons.push({
          type: 'confirm',
          text: confirmText,
          color: confirmColor
        });
      }

      if (showCancel) {
        var cancelButton = {
          type: 'cancel',
          text: cancelText,
          color: cancelColor
        };
        if (buttonsShowVertical) {
          buttons.push(cancelButton);
        } else {
          buttons.unshift(cancelButton);
        }
      }
    } else {
      showCustomBtns = true;
    }

    return new Promise(function (resolve, reject) {
      _this.setData({
        zanDialog: {
          show: true,
          showCustomBtns: showCustomBtns,
          buttons: buttons,
          title: title,
          content: content,
          buttonsShowVertical: buttonsShowVertical,
          showConfirm: showConfirm,
          confirmText: confirmText,
          confirmColor: confirmColor,
          showCancel: showCancel,
          cancelText: cancelText,
          cancelColor: cancelColor,
          // 回调钩子
          resolve: resolve,
          reject: reject
        }
      });
    });
  },
  _handleZanDialogButtonClick: function _handleZanDialogButtonClick(e) {
    var _e$currentTarget = e.currentTarget,
        currentTarget = _e$currentTarget === undefined ? {} : _e$currentTarget;
    var _currentTarget$datase = currentTarget.dataset,
        dataset = _currentTarget$datase === undefined ? {} : _currentTarget$datase;

    // 获取当次弹出框的信息

    var zanDialogData = this.data.zanDialog || {};
    var _zanDialogData$resolv = zanDialogData.resolve,
        resolve = _zanDialogData$resolv === undefined ? _f : _zanDialogData$resolv,
        _zanDialogData$reject = zanDialogData.reject,
        reject = _zanDialogData$reject === undefined ? _f : _zanDialogData$reject;

    // 重置 zanDialog 里的内容

    this.setData({
      zanDialog: { show: false }
    });

    // 自定义按钮，全部 resolve 形式返回，根据 type 区分点击按钮
    if (zanDialogData.showCustomBtns) {
      resolve({
        type: dataset.type
      });
      return;
    }

    // 默认按钮，确认为 resolve，取消为 reject
    if (dataset.type === 'confirm') {
      resolve({
        type: 'confirm'
      });
    } else {
      reject({
        type: 'cancel'
      });
    }
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIl9mIiwibW9kdWxlIiwiZXhwb3J0cyIsInNob3daYW5EaWFsb2ciLCJvcHRpb25zIiwiYnV0dG9ucyIsInRpdGxlIiwiY29udGVudCIsImJ1dHRvbnNTaG93VmVydGljYWwiLCJzaG93Q29uZmlybSIsImNvbmZpcm1UZXh0IiwiY29uZmlybUNvbG9yIiwic2hvd0NhbmNlbCIsImNhbmNlbFRleHQiLCJjYW5jZWxDb2xvciIsInNob3dDdXN0b21CdG5zIiwibGVuZ3RoIiwicHVzaCIsInR5cGUiLCJ0ZXh0IiwiY29sb3IiLCJjYW5jZWxCdXR0b24iLCJ1bnNoaWZ0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzZXREYXRhIiwiemFuRGlhbG9nIiwic2hvdyIsIl9oYW5kbGVaYW5EaWFsb2dCdXR0b25DbGljayIsImUiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsInphbkRpYWxvZ0RhdGEiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQU1BLEtBQUssU0FBTEEsRUFBSyxHQUFZLENBQUUsQ0FBekI7O0FBRUFDLE9BQU9DLE9BQVAsR0FBaUI7QUFDZkMsZUFEZSwyQkFDYTtBQUFBOztBQUFBLFFBQWRDLE9BQWMsdUVBQUosRUFBSTtBQUFBLDJCQXVCdEJBLE9BdkJzQixDQUl4QkMsT0FKd0I7QUFBQSxRQUl4QkEsT0FKd0Isb0NBSWQsRUFKYztBQUFBLHlCQXVCdEJELE9BdkJzQixDQU14QkUsS0FOd0I7QUFBQSxRQU14QkEsS0FOd0Isa0NBTWhCLEVBTmdCO0FBQUEsMkJBdUJ0QkYsT0F2QnNCLENBUXhCRyxPQVJ3QjtBQUFBLFFBUXhCQSxPQVJ3QixvQ0FRZCxHQVJjO0FBQUEsZ0NBdUJ0QkgsT0F2QnNCLENBVXhCSSxtQkFWd0I7QUFBQSxRQVV4QkEsbUJBVndCLHlDQVVGLEtBVkU7QUFBQSwrQkF1QnRCSixPQXZCc0IsQ0FZeEJLLFdBWndCO0FBQUEsUUFZeEJBLFdBWndCLHdDQVlWLElBWlU7QUFBQSwrQkF1QnRCTCxPQXZCc0IsQ0FjeEJNLFdBZHdCO0FBQUEsUUFjeEJBLFdBZHdCLHdDQWNWLElBZFU7QUFBQSxnQ0F1QnRCTixPQXZCc0IsQ0FnQnhCTyxZQWhCd0I7QUFBQSxRQWdCeEJBLFlBaEJ3Qix5Q0FnQlQsU0FoQlM7QUFBQSw4QkF1QnRCUCxPQXZCc0IsQ0FrQnhCUSxVQWxCd0I7QUFBQSxRQWtCeEJBLFVBbEJ3Qix1Q0FrQlgsS0FsQlc7QUFBQSw4QkF1QnRCUixPQXZCc0IsQ0FvQnhCUyxVQXBCd0I7QUFBQSxRQW9CeEJBLFVBcEJ3Qix1Q0FvQlgsSUFwQlc7QUFBQSwrQkF1QnRCVCxPQXZCc0IsQ0FzQnhCVSxXQXRCd0I7QUFBQSxRQXNCeEJBLFdBdEJ3Qix3Q0FzQlYsTUF0QlU7O0FBeUIxQjtBQUNBOztBQUNBLFFBQUlDLGlCQUFpQixLQUFyQjtBQUNBLFFBQUlWLFFBQVFXLE1BQVIsS0FBbUIsQ0FBdkIsRUFBMEI7QUFDeEIsVUFBSVAsV0FBSixFQUFpQjtBQUNmSixnQkFBUVksSUFBUixDQUFhO0FBQ1hDLGdCQUFNLFNBREs7QUFFWEMsZ0JBQU1ULFdBRks7QUFHWFUsaUJBQU9UO0FBSEksU0FBYjtBQUtEOztBQUVELFVBQUlDLFVBQUosRUFBZ0I7QUFDZCxZQUFNUyxlQUFlO0FBQ25CSCxnQkFBTSxRQURhO0FBRW5CQyxnQkFBTU4sVUFGYTtBQUduQk8saUJBQU9OO0FBSFksU0FBckI7QUFLQSxZQUFJTixtQkFBSixFQUF5QjtBQUN2Qkgsa0JBQVFZLElBQVIsQ0FBYUksWUFBYjtBQUNELFNBRkQsTUFFTztBQUNMaEIsa0JBQVFpQixPQUFSLENBQWdCRCxZQUFoQjtBQUNEO0FBQ0Y7QUFDRixLQXJCRCxNQXFCTztBQUNMTix1QkFBaUIsSUFBakI7QUFDRDs7QUFFRCxXQUFPLElBQUlRLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdEMsWUFBS0MsT0FBTCxDQUFhO0FBQ1hDLG1CQUFXO0FBQ1RDLGdCQUFNLElBREc7QUFFVGIsd0NBRlM7QUFHVFYsMEJBSFM7QUFJVEMsc0JBSlM7QUFLVEMsMEJBTFM7QUFNVEMsa0RBTlM7QUFPVEMsa0NBUFM7QUFRVEMsa0NBUlM7QUFTVEMsb0NBVFM7QUFVVEMsZ0NBVlM7QUFXVEMsZ0NBWFM7QUFZVEMsa0NBWlM7QUFhVDtBQUNBVSwwQkFkUztBQWVUQztBQWZTO0FBREEsT0FBYjtBQW1CRCxLQXBCTSxDQUFQO0FBcUJELEdBM0VjO0FBNkVmSSw2QkE3RWUsdUNBNkVhQyxDQTdFYixFQTZFZ0I7QUFBQSwyQkFDRUEsQ0FERixDQUNyQkMsYUFEcUI7QUFBQSxRQUNyQkEsYUFEcUIsb0NBQ0wsRUFESztBQUFBLGdDQUVKQSxhQUZJLENBRXJCQyxPQUZxQjtBQUFBLFFBRXJCQSxPQUZxQix5Q0FFWCxFQUZXOztBQUk3Qjs7QUFDQSxRQUFNQyxnQkFBZ0IsS0FBS0MsSUFBTCxDQUFVUCxTQUFWLElBQXVCLEVBQTdDO0FBTDZCLGdDQU1TTSxhQU5ULENBTXJCVCxPQU5xQjtBQUFBLFFBTXJCQSxPQU5xQix5Q0FNWHhCLEVBTlc7QUFBQSxnQ0FNU2lDLGFBTlQsQ0FNUFIsTUFOTztBQUFBLFFBTVBBLE1BTk8seUNBTUV6QixFQU5GOztBQVE3Qjs7QUFDQSxTQUFLMEIsT0FBTCxDQUFhO0FBQ1hDLGlCQUFXLEVBQUVDLE1BQU0sS0FBUjtBQURBLEtBQWI7O0FBSUE7QUFDQSxRQUFJSyxjQUFjbEIsY0FBbEIsRUFBa0M7QUFDaENTLGNBQVE7QUFDTk4sY0FBTWMsUUFBUWQ7QUFEUixPQUFSO0FBR0E7QUFDRDs7QUFFRDtBQUNBLFFBQUljLFFBQVFkLElBQVIsS0FBaUIsU0FBckIsRUFBZ0M7QUFDOUJNLGNBQVE7QUFDTk4sY0FBTTtBQURBLE9BQVI7QUFHRCxLQUpELE1BSU87QUFDTE8sYUFBTztBQUNMUCxjQUFNO0FBREQsT0FBUDtBQUdEO0FBQ0Y7QUE1R2MsQ0FBakIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBfZiA9IGZ1bmN0aW9uICgpIHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2hvd1phbkRpYWxvZyhvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCB7XG4gICAgICAvLyDoh6rlrprkuYkgYnRuIOWIl+ihqFxuICAgICAgLy8geyB0eXBlOiDmjInpkq7nsbvlnovvvIzlm57osIPml7bku6XmraTkvZzkuLrljLrliIbkvp3mja7vvIx0ZXh0OiDmjInpkq7mlofmoYgsIGNvbG9yOiDmjInpkq7mloflrZfpopzoibIgfVxuICAgICAgYnV0dG9ucyA9IFtdLFxuICAgICAgLy8g5qCH6aKYXG4gICAgICB0aXRsZSA9ICcnLFxuICAgICAgLy8g5YaF5a65XG4gICAgICBjb250ZW50ID0gJyAnLFxuICAgICAgLy8g5oyJ6ZKu5piv5ZCm5bGV56S65Li657q15ZCRXG4gICAgICBidXR0b25zU2hvd1ZlcnRpY2FsID0gZmFsc2UsXG4gICAgICAvLyDmmK/lkKblsZXnpLrnoa7lrppcbiAgICAgIHNob3dDb25maXJtID0gdHJ1ZSxcbiAgICAgIC8vIOehruiupOaMiemSruaWh+ahiFxuICAgICAgY29uZmlybVRleHQgPSAn56Gu5a6aJyxcbiAgICAgIC8vIOehruiupOaMiemSruminOiJslxuICAgICAgY29uZmlybUNvbG9yID0gJyMzQ0M1MUYnLFxuICAgICAgLy8g5piv5ZCm5bGV56S65Y+W5raIXG4gICAgICBzaG93Q2FuY2VsID0gZmFsc2UsXG4gICAgICAvLyDlj5bmtojmjInpkq7mlofmoYhcbiAgICAgIGNhbmNlbFRleHQgPSAn5Y+W5raIJyxcbiAgICAgIC8vIOWPlua2iOaMiemSruminOiJslxuICAgICAgY2FuY2VsQ29sb3IgPSAnIzMzMydcbiAgICB9ID0gb3B0aW9ucztcblxuICAgIC8vIOWkhOeQhum7mOiupOaMiemSrueahOWxleekulxuICAgIC8vIOe6teWQkeaOkuW4g+ehruiupOaMiemSruWcqOS4iuaWuVxuICAgIGxldCBzaG93Q3VzdG9tQnRucyA9IGZhbHNlO1xuICAgIGlmIChidXR0b25zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgaWYgKHNob3dDb25maXJtKSB7XG4gICAgICAgIGJ1dHRvbnMucHVzaCh7XG4gICAgICAgICAgdHlwZTogJ2NvbmZpcm0nLFxuICAgICAgICAgIHRleHQ6IGNvbmZpcm1UZXh0LFxuICAgICAgICAgIGNvbG9yOiBjb25maXJtQ29sb3JcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzaG93Q2FuY2VsKSB7XG4gICAgICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IHtcbiAgICAgICAgICB0eXBlOiAnY2FuY2VsJyxcbiAgICAgICAgICB0ZXh0OiBjYW5jZWxUZXh0LFxuICAgICAgICAgIGNvbG9yOiBjYW5jZWxDb2xvclxuICAgICAgICB9O1xuICAgICAgICBpZiAoYnV0dG9uc1Nob3dWZXJ0aWNhbCkge1xuICAgICAgICAgIGJ1dHRvbnMucHVzaChjYW5jZWxCdXR0b24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGJ1dHRvbnMudW5zaGlmdChjYW5jZWxCdXR0b24pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHNob3dDdXN0b21CdG5zID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgemFuRGlhbG9nOiB7XG4gICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICBzaG93Q3VzdG9tQnRucyxcbiAgICAgICAgICBidXR0b25zLFxuICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgIGNvbnRlbnQsXG4gICAgICAgICAgYnV0dG9uc1Nob3dWZXJ0aWNhbCxcbiAgICAgICAgICBzaG93Q29uZmlybSxcbiAgICAgICAgICBjb25maXJtVGV4dCxcbiAgICAgICAgICBjb25maXJtQ29sb3IsXG4gICAgICAgICAgc2hvd0NhbmNlbCxcbiAgICAgICAgICBjYW5jZWxUZXh0LFxuICAgICAgICAgIGNhbmNlbENvbG9yLFxuICAgICAgICAgIC8vIOWbnuiwg+mSqeWtkFxuICAgICAgICAgIHJlc29sdmUsXG4gICAgICAgICAgcmVqZWN0XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9LFxuXG4gIF9oYW5kbGVaYW5EaWFsb2dCdXR0b25DbGljayhlKSB7XG4gICAgY29uc3QgeyBjdXJyZW50VGFyZ2V0ID0ge30gfSA9IGU7XG4gICAgY29uc3QgeyBkYXRhc2V0ID0ge30gfSA9IGN1cnJlbnRUYXJnZXQ7XG5cbiAgICAvLyDojrflj5blvZPmrKHlvLnlh7rmoYbnmoTkv6Hmga9cbiAgICBjb25zdCB6YW5EaWFsb2dEYXRhID0gdGhpcy5kYXRhLnphbkRpYWxvZyB8fCB7fTtcbiAgICBjb25zdCB7IHJlc29sdmUgPSBfZiwgcmVqZWN0ID0gX2YgfSA9IHphbkRpYWxvZ0RhdGE7XG5cbiAgICAvLyDph43nva4gemFuRGlhbG9nIOmHjOeahOWGheWuuVxuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICB6YW5EaWFsb2c6IHsgc2hvdzogZmFsc2UgfVxuICAgIH0pO1xuXG4gICAgLy8g6Ieq5a6a5LmJ5oyJ6ZKu77yM5YWo6YOoIHJlc29sdmUg5b2i5byP6L+U5Zue77yM5qC55o2uIHR5cGUg5Yy65YiG54K55Ye75oyJ6ZKuXG4gICAgaWYgKHphbkRpYWxvZ0RhdGEuc2hvd0N1c3RvbUJ0bnMpIHtcbiAgICAgIHJlc29sdmUoe1xuICAgICAgICB0eXBlOiBkYXRhc2V0LnR5cGVcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIOm7mOiupOaMiemSru+8jOehruiupOS4uiByZXNvbHZl77yM5Y+W5raI5Li6IHJlamVjdFxuICAgIGlmIChkYXRhc2V0LnR5cGUgPT09ICdjb25maXJtJykge1xuICAgICAgcmVzb2x2ZSh7XG4gICAgICAgIHR5cGU6ICdjb25maXJtJ1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlamVjdCh7XG4gICAgICAgIHR5cGU6ICdjYW5jZWwnXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn07XG4iXX0=