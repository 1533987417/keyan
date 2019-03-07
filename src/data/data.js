

var forums=[{"id":1,"parentid":1,"name":"互动交流","status":1,"displayorder":0,"topics":78,"curtopics":0,"posts":96,"todayposts":0,"lasttid":307,"lasttitle":"看看","lastpost":"2018-01-30T11:49:36.940","lastposterid":"5441","lastposter":"章小卫"},
{"id":2,"parentid":1,"name":"地方需求","status":1,"displayorder":1,"topics":51,"curtopics":0,"posts":112,"todayposts":0,"lasttid":324,"lasttitle":"测试","lastpost":"2018-03-16T09:51:35.610","lastposterid":"2822","lastposter":"李志强"},
{"id":3,"parentid":1,"name":"资源分享","status":1,"displayorder":2,"topics":10,"curtopics":0,"posts":10,"todayposts":0,"lasttid":97,"lasttitle":"温州市委书记调任中央深改办 一直任职浙江","lastpost":"2015-12-01T16:19:16.840","lastposterid":"2822","lastposter":"李四"},
{"id":44,"parentid":1,"name":"意见建议","status":1,"displayorder":3,"topics":10,"curtopics":0,"posts":10,"todayposts":0,"lasttid":279,"lasttitle":"dfgg","lastpost":"2017-12-29T22:18:11.183","lastposterid":"5021","lastposter":"章永龙","icon":""},
{"id":45,"parentid":1,"name":"校内通知","status":1,"displayorder":0,"topics":89,"curtopics":0,"posts":114,"todayposts":0,"lasttid":322,"lasttitle":"gh","lastpost":"2018-02-10T12:05:08.967","lastposterid":"248","lastposter":"张丹","icon":""},
{"id":46,"parentid":1,"name":"科研政策","status":1,"displayorder":0,"topics":31,"curtopics":0,"posts":33,"todayposts":0,"lasttid":292,"lasttitle":"扬州大学专利管理办法（2018年修订）","lastpost":"2018-01-18T16:43:29.513","lastposterid":"248","lastposter":"张丹","icon":""},
{"id":47,"parentid":1,"name":"学术报告","status":1,"displayorder":0,"topics":1,"curtopics":0,"posts":1,"todayposts":0,"lasttid":245,"lasttitle":"测试","lastpost":"2017-12-13T21:45:43.240","lastposterid":"5021","lastposter":"章永龙","icon":""},
{"id":48,"parentid":1,"name":"科研动态","status":1,"displayorder":0,"topics":8,"curtopics":0,"posts":8,"todayposts":0,"lasttid":323,"lasttitle":"我校3项科研成果喜获2017年度江苏省科学技术奖","lastpost":"2018-03-06T08:16:19.217","lastposterid":"5213","lastposter":"刘艳阳","icon":""}]


var posts=[{"pid":313,"fid":1,"tid":176,"layer":0,"poster":"张丹","posterid":"248","title":"f g h","postdatetime":"2017-11-28T16:10:29.893","message":"f g g","ip":"mobile","bmdm":"   ","bmmc":"科学技术处","role":1,"display":0,"category":"数理化","classify":"消息发布"},
{"pid":314,"fid":45,"tid":177,"layer":0,"poster":"张丹","posterid":"248","title":"g g j","postdatetime":"2017-11-28T16:10:47.293","message":"f g j","ip":"mobile","bmdm":"   ","bmmc":"科学技术处","role":1,"display":0,"category":"科研通知","classify":"科研通知"},
{"pid":315,"fid":1,"tid":178,"layer":0,"poster":"张丹","posterid":"248","title":"c g h","postdatetime":"2017-11-28T16:11:45.467","message":"vgh","ip":"mobile","bmdm":"   ","bmmc":"科学技术处","role":1,"display":0,"category":"数理化","classify":"消息发布"},
{"pid":316,"fid":45,"tid":179,"layer":0,"poster":"张丹","posterid":"248","title":"c j","postdatetime":"2017-11-28T16:11:56.763","message":"vvh","ip":"mobile","bmdm":"   ","bmmc":"科学技术处","role":1,"display":0,"category":"科研通知","classify":"科研通知"},
{"pid":317,"fid":1,"tid":178,"layer":1,"poster":"章永龙","posterid":"5021","title":"                                                            ","postdatetime":"2017-11-28T17:24:46.520","message":"1234","ip":"mobile","bmdm":"380                                               ","bmmc":"信息学院                                              ","role":1,"display":0,"category":""},
{"pid":318,"fid":1,"tid":178,"layer":2,"poster":"章永龙                 ","posterid":"5021                ","title":"                                                            ","postdatetime":"2017-11-28T18:18:35.513","message":"好","ip":"mobile","bmdm":"380                                               ","bmmc":"信息学院                                              ","role":1,"display":0}]


var topics=[]

var classify=[
['学术杂论','合作需求','问题求助'],['地方需求'],['资源共享'],['意见建议'],['科研通知', '成果', '项目','其他'],
['学校政策', '国家政策', '地方政策','科研政策'],['学术报告'],['科研动态']

]

var subject=['数理化','电子信息及系统科学','生物技术与医药','能源与节能','材料与化学工程','先进制造与重大装备',
'资源与环境','建筑、水利与交通','农业','医疗卫生','其他']


module.exports={
	

	forums:forums,
  classify:classify,
  subject:subject
  
}