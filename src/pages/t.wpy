<template>
<view class="weui-cells__title">字体设置</view>
            <view class="weui-cells weui-cells_after-title">
                <view class="weui-cell">
                    <view class="weui-cell__bd">大号字体</view>
                    <view class="weui-cell__ft"><switch checked="{{bigfont}}"  bindchange="switch1Change"/></view>
                </view>
            </view>
</template>

<style lang="less" scoped>

</style>


<script>
import wepy from 'wepy'

export default class web extends wepy.page {
  config = {
    navigationBarTitleText: '设置'
  }

  data = {
   bigfont:Boolean
  }

  methods = {
    switch1Change(e){
      console.log(e.detail)
      if (!e.detail.value) {
          
          this.$parent.globalData.bigfont=false
          this.bigfont=false
          this.$apply()
        }else{
          wepy.showToast({
                title: '大号字体部分文字有效',
                icon: 'none',
                duration: 1000
              })
        this.$parent.globalData.bigfont=true
        this.bigfont=true
        this.$apply()
      }
      
    }
  }

  events = {}

  onLoad(e) {
    this.bigfont=this.$parent.globalData.bigfont
    this.$apply()
  }
}
</script>