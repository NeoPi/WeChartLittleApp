//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo,
        motto:userInfo.nickName
      })
    })
  },
  hello:function(){
    console.log('come in hello...');
    wx.navigateTo({
      url:'../hello/hello'
    })
  },
  pullDownRefresh:function(){
    wx.navigateTo({
      url:'../pull-down-refresh/pull-down-refresh'
    })
  },

  countDown : function(){
    wx.navigateTo({
      url:'../count/count'
    })
  },
  swiper : function (){
    wx.navigateTo({
      url:'../swiper/index'
    })
  },
  location : function (){
    console.log("go to location");
    wx.navigateTo({
      url: '../location/location',
      success: function(res){
        // success
        console.log("success");
      },
      fail: function(res) {
        // fail
        console.log("fail"+res);
      },
      complete: function() {
        // complete
        console.log("complete");
      }
    })
  },
})
