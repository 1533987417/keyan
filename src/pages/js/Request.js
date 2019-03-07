import wepy from 'wepy'
import db from '../js/db'
function wxRequest(method, url, params = {}, handler = {}) {
  handler.url = url
  handler.data = params
  handler.header = {
    'Authorization': db.Get('token')
  }
  handler.method = method
  if (method === 'POST') {
    handler.header['content-type'] = 'application/x-www-form-urlencoded; charset=UTF-8'
  }

  wx.showLoading && wx.showLoading({
    title: '加载中...'
  })

  return new Promise((resolve, reject) => {
    handler.success = res => {
        if(res.data.status=='401'){
            console.log ("重新登陆")
            wepy.showModal({
            title: "账号信息错误",
            content: "统一身份认证账号已过期！是否前往重新登陆？"
            }).then((d)=>{
                console.log(d)
                if(d.confirm){
                    wx.redirectTo({url:'bind'})
                }
            });
           
        }
        else{
        resolve(res.data)}
    }
    handler.fail = (res) => {
        
      wx.showModal({
        title: '网络错误',
        content: '网络错误',
        showCancel: false
      })
      reject('Network request failed')
    }
    handler.complete = () => wx.hideLoading && wx.hideLoading()
    wx.request(handler)
  })
}
export{
    wxRequest
}
