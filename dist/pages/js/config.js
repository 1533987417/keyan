'use strict';

/**
 * 小程序配置文件
 */

// 此处主机域名修改成腾讯云解决方案分配的域名
//var host = 'https://www.easywork.net.cn/kjc';
//var host = 'http://192.168.1.102:8082';
//var host = 'http://localhost:8080'
var host = 'http://172.20.10.5:8080';
var config = {

        // 下面的地址配合云端 Demo 工作
        service: {
                host: host,

                Topten: host + '/Topten',

                pageTopic: host + '/pageTopic',

                pagePost: host + '/pagePost',

                addTopics: host + '/addTopics',

                postdelete: host + '/postdelete',

                addpost: host + '/addpost',

                topicdetail: host + '/topicdetail',

                pageMyTopic: host + '/pageMyTopic',

                getMyCount: host + '/getMyCount',

                DeleteTopic: host + '/DeleteTopic',

                oneMore: host + '/oneMore',

                searchTopic: host + '/searchTopic',

                getColleges: host + '/getColleges',

                GetCollegeMember: host + '/GetCollegeMember',

                img: 'http://itedu.yzu.edu.cn/kygl/upload/portrait/',

                getGetProfile: host + '/getGetProfile',

                getGetResearch: host + '/getGetResearch',

                bindinfo: host + '/bind',

                loginbywx: host + '/loginbywx',

                getMyPost: host + '/getMyPost',

                getPostsCount: host + '/getPostsCount',

                getCollegeTopics: host + '/getCollegeTopics',

                getcollegeTopicsCount: host + '/getcollegeTopicsCount',

                Top5News: host + '/Top5News',

                PageNews: host + '/PageNews'

        }
};

module.exports = config;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy5qcyJdLCJuYW1lcyI6WyJob3N0IiwiY29uZmlnIiwic2VydmljZSIsIlRvcHRlbiIsInBhZ2VUb3BpYyIsInBhZ2VQb3N0IiwiYWRkVG9waWNzIiwicG9zdGRlbGV0ZSIsImFkZHBvc3QiLCJ0b3BpY2RldGFpbCIsInBhZ2VNeVRvcGljIiwiZ2V0TXlDb3VudCIsIkRlbGV0ZVRvcGljIiwib25lTW9yZSIsInNlYXJjaFRvcGljIiwiZ2V0Q29sbGVnZXMiLCJHZXRDb2xsZWdlTWVtYmVyIiwiaW1nIiwiZ2V0R2V0UHJvZmlsZSIsImdldEdldFJlc2VhcmNoIiwiYmluZGluZm8iLCJsb2dpbmJ5d3giLCJnZXRNeVBvc3QiLCJnZXRQb3N0c0NvdW50IiwiZ2V0Q29sbGVnZVRvcGljcyIsImdldGNvbGxlZ2VUb3BpY3NDb3VudCIsIlRvcDVOZXdzIiwiUGFnZU5ld3MiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJQSxPQUFPLHlCQUFYO0FBQ0EsSUFBSUMsU0FBUzs7QUFFVDtBQUNBQyxpQkFBUztBQUNMRiwwQkFESzs7QUFJTEcsd0JBQVVILElBQVYsWUFKSzs7QUFNTEksMkJBQWFKLElBQWIsZUFOSzs7QUFRTEssMEJBQVlMLElBQVosY0FSSzs7QUFVTE0sMkJBQWFOLElBQWIsZUFWSzs7QUFZTE8sNEJBQWNQLElBQWQsZ0JBWks7O0FBY0xRLHlCQUFXUixJQUFYLGFBZEs7O0FBZ0JMUyw2QkFBZVQsSUFBZixpQkFoQks7O0FBa0JMVSw2QkFBZVYsSUFBZixpQkFsQks7O0FBb0JMVyw0QkFBY1gsSUFBZCxnQkFwQks7O0FBc0JMWSw2QkFBZVosSUFBZixpQkF0Qks7O0FBd0JMYSx5QkFBV2IsSUFBWCxhQXhCSzs7QUEwQkxjLDZCQUFlZCxJQUFmLGlCQTFCSzs7QUE0QkxlLDZCQUFlZixJQUFmLGlCQTVCSzs7QUE4QkxnQixrQ0FBb0JoQixJQUFwQixzQkE5Qks7O0FBZ0NMaUIsb0VBaENLOztBQWtDTEMsK0JBQWlCbEIsSUFBakIsbUJBbENLOztBQW9DTG1CLGdDQUFrQm5CLElBQWxCLG9CQXBDSzs7QUFzQ0xvQiwwQkFBWXBCLElBQVosVUF0Q0s7O0FBd0NMcUIsMkJBQWNyQixJQUFkLGVBeENLOztBQTBDTHNCLDJCQUFjdEIsSUFBZCxlQTFDSzs7QUE0Q0x1QiwrQkFBaUJ2QixJQUFqQixtQkE1Q0s7O0FBOENMd0Isa0NBQW9CeEIsSUFBcEIsc0JBOUNLOztBQWdETHlCLHVDQUF5QnpCLElBQXpCLDJCQWhESzs7QUFrREwwQiwwQkFBWTFCLElBQVosY0FsREs7O0FBb0RMMkIsMEJBQVkzQixJQUFaOztBQXBESztBQUhBLENBQWI7O0FBNERBNEIsT0FBT0MsT0FBUCxHQUFpQjVCLE1BQWpCIiwiZmlsZSI6ImNvbmZpZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDlsI/nqIvluo/phY3nva7mlofku7ZcclxuICovXHJcblxyXG4vLyDmraTlpITkuLvmnLrln5/lkI3kv67mlLnmiJDohb7orq/kupHop6PlhrPmlrnmoYjliIbphY3nmoTln5/lkI1cclxuLy92YXIgaG9zdCA9ICdodHRwczovL3d3dy5lYXN5d29yay5uZXQuY24va2pjJztcclxuLy92YXIgaG9zdCA9ICdodHRwOi8vMTkyLjE2OC4xLjEwMjo4MDgyJztcclxuLy92YXIgaG9zdCA9ICdodHRwOi8vbG9jYWxob3N0OjgwODAnXHJcbnZhciBob3N0ID0gJ2h0dHA6Ly8xNzIuMjAuMTAuNTo4MDgwJztcclxudmFyIGNvbmZpZyA9IHtcclxuXHJcbiAgICAvLyDkuIvpnaLnmoTlnLDlnYDphY3lkIjkupHnq68gRGVtbyDlt6XkvZxcclxuICAgIHNlcnZpY2U6IHtcclxuICAgICAgICBob3N0LFxyXG5cclxuICAgICAgICBcclxuICAgICAgICBUb3B0ZW46YCR7aG9zdH0vVG9wdGVuYCxcclxuXHJcbiAgICAgICAgcGFnZVRvcGljOmAke2hvc3R9L3BhZ2VUb3BpY2AsXHJcblxyXG4gICAgICAgIHBhZ2VQb3N0OmAke2hvc3R9L3BhZ2VQb3N0YCxcclxuXHJcbiAgICAgICAgYWRkVG9waWNzOmAke2hvc3R9L2FkZFRvcGljc2AsXHJcblxyXG4gICAgICAgIHBvc3RkZWxldGU6YCR7aG9zdH0vcG9zdGRlbGV0ZWAsXHJcblxyXG4gICAgICAgIGFkZHBvc3Q6YCR7aG9zdH0vYWRkcG9zdGAsXHJcblxyXG4gICAgICAgIHRvcGljZGV0YWlsOmAke2hvc3R9L3RvcGljZGV0YWlsYCxcclxuXHJcbiAgICAgICAgcGFnZU15VG9waWM6YCR7aG9zdH0vcGFnZU15VG9waWNgLFxyXG5cclxuICAgICAgICBnZXRNeUNvdW50OmAke2hvc3R9L2dldE15Q291bnRgLFxyXG5cclxuICAgICAgICBEZWxldGVUb3BpYzpgJHtob3N0fS9EZWxldGVUb3BpY2AsXHJcblxyXG4gICAgICAgIG9uZU1vcmU6YCR7aG9zdH0vb25lTW9yZWAsXHJcblxyXG4gICAgICAgIHNlYXJjaFRvcGljOmAke2hvc3R9L3NlYXJjaFRvcGljYCxcclxuXHJcbiAgICAgICAgZ2V0Q29sbGVnZXM6YCR7aG9zdH0vZ2V0Q29sbGVnZXNgLFxyXG5cclxuICAgICAgICBHZXRDb2xsZWdlTWVtYmVyOmAke2hvc3R9L0dldENvbGxlZ2VNZW1iZXJgLFxyXG5cclxuICAgICAgICBpbWc6YGh0dHA6Ly9pdGVkdS55enUuZWR1LmNuL2t5Z2wvdXBsb2FkL3BvcnRyYWl0L2AsXHJcblxyXG4gICAgICAgIGdldEdldFByb2ZpbGU6YCR7aG9zdH0vZ2V0R2V0UHJvZmlsZWAsXHJcblxyXG4gICAgICAgIGdldEdldFJlc2VhcmNoOmAke2hvc3R9L2dldEdldFJlc2VhcmNoYCxcclxuXHJcbiAgICAgICAgYmluZGluZm86YCR7aG9zdH0vYmluZGAsXHJcblxyXG4gICAgICAgIGxvZ2luYnl3eDogYCR7aG9zdH0vbG9naW5ieXd4YCxcclxuXHJcbiAgICAgICAgZ2V0TXlQb3N0OiBgJHtob3N0fS9nZXRNeVBvc3RgLFxyXG5cclxuICAgICAgICBnZXRQb3N0c0NvdW50OmAke2hvc3R9L2dldFBvc3RzQ291bnRgLFxyXG5cclxuICAgICAgICBnZXRDb2xsZWdlVG9waWNzOmAke2hvc3R9L2dldENvbGxlZ2VUb3BpY3NgLFxyXG5cclxuICAgICAgICBnZXRjb2xsZWdlVG9waWNzQ291bnQ6YCR7aG9zdH0vZ2V0Y29sbGVnZVRvcGljc0NvdW50YCxcclxuXHJcbiAgICAgICAgVG9wNU5ld3M6YCR7aG9zdH0vVG9wNU5ld3NgLFxyXG5cclxuICAgICAgICBQYWdlTmV3czpgJHtob3N0fS9QYWdlTmV3c2AsXHJcblxyXG4gICAgfVxyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBjb25maWc7Il19