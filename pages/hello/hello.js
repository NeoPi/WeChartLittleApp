// hello.js


// 获取app实例

var app = getApp();

Page({
  data:{
    hideModalWithOk : true ,
    name :"NeoPi",
    surveyList :{},
    loding_hidden : false,
    page:1,
    total_page:1,
    toastHidden:true
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    console.log("2222222");
  },
  onReady:function(){
    // 页面渲染完成
    // clickOkModal(options);

      var that = this ;
      that.setData({
          hideModalWithOk:true,
      });

      console.log("111111111111111");
      // 发起请求
      wx.request({
        url: 'https://api.xiaomi.cn/bbsapp/wan/activities/v/1/page/1/offset/5',
        header: {
          'Content-Type': 'application/json'
        },
        success: function(res) {

          console.log(res.data.data.list);
          that.setData({
            surveyList:res.data.data.list,
            loding_hidden : true ,
            total_page:res.data.data.page_count,
          });
        },
        fail: function(error){
          console.log(error);
        }
     })
  },
  onShow:function(){
    // 页面显示
    // clickOkModal(options);
    console.log("3333333333333");
  },
  onHide:function(){
    // 页面隐藏
    console.log("444444444");
  },
  onUnload:function(){
    // 页面关闭
    console.log("555555555555");
  },

  showModalWithOkFc:function(e){
      var that = this;
      that.setData({
          loding_hidden:true,
      });
  },


  loadingchange : function(){
      var that = this;
      that.setData({
          hideModalWithOk:false,
      });
  },

  clickOkModal:function(e){
      var that = this ;
      that.setData({
          hideModalWithOk:true,
      });

  
      // 发起请求
      wx.request({
        url: 'https://api.xiaomi.cn/bbsapp/wan/activities/v/1/page/1/offset/5',
        data: {
          x: '' ,
          y: ''
        },
        header: {
          'Content-Type': 'application/json'
        },
        success: function(res) {
          console.log(res.data.data.list);
          that.setData({
            surveyList:res.data.data.list,
            loding_hidden : true ,
            total_page:res.data.data.page_count,
          });
        }
     })
  },

  getListItem:function(){
      console.log(res.data.data.list);

  },

  getCurrentTime :function (){
    return Date.now() / 1000 ;
  },

  loadMore:function(e){
      var that = this ;

      that.setData({
            loding_hidden : false ,
            page : that.data.page+1,
      });
      
      // 发起请求
      wx.request({
        url: 'http://api.xiaomi.cn/bbsapp/wan/activities/v/1/page/'+ that.data.page +'/offset/5',
        data: {
        },
        header: {
          'Content-Type': 'application/json'
        },
        success: function(res) {
          console.log(res.data.data.list);
          var listData = that.data.surveyList.concat(res.data.data.list);
          that.setData({
            surveyList:listData,
            loding_hidden : true ,
            total_page:res.data.data.page_count,
          });
        }
     })

     console.log(this.getCurrentTime());
  },

  itemclick:function(){
    var that = this;
    that.setData({
        toastHidden:false
    });

    wx.navigateTo({
      url:"../detail/detail"
    });
  },

  bindChange:function(){
    var that = this;
    that.setData({
        toastHidden:true
    });
  }
})