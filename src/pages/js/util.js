import wepy from 'wepy';
function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}
function formatNumber(n) {  
  n = n.toString()  
  return n[1] ? n : '0' + n  
}


function timechange(time){
  /*var dateee = new Date(time).toJSON();  
  var date = new Date(+new Date(dateee)+8*3600*1000).toISOString().replace(/T/g,' ').replace(/\.[\d]{3}Z/,'')
  return date*/
  return time.slice(0,10)+" "+time.slice(11,16);

}
function getObjectKeys(object)
    {
        var keys = [];
        for (var property in object)
            keys.push(property);
        return keys;
    }
    function addnum(object){

      var i=1
      for (var a = 0;a < object.length; a++) {
        object[a].push(i++)
      }
      return object
    }
function trim(s){
  return s.replace(/(^\s*)|(\s*$)/g, "");
}


module.exports={
	formatTime:formatTime,
  timechange:timechange,
   trim:trim,
  getObjectKeys:getObjectKeys,
  addnum:addnum

}
