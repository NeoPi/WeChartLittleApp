

Page({
  data:{
    dots:true,
    autoPlay:true,
    interval:3000,
    duration:1000,
    imageurls:[
        'http://img07.mifile.cn/v1/MI_7230F3A58BDCB/a26b7e3a5cc5078a74cd82798a1b2bc3.jpg',
        'http://img07.mifile.cn/v1/MI_7230F3A58BDCB/e31978b15e3618bff0805f6c04e2c4d9.jpg',
        'http://img07.mifile.cn/v1/MI_7230F3A58BDCB/f64f7235aefc85d82db2a4e063f32e37.jpg'
        ],
    goodsdetail:[
        'http://cdn.fds.api.xiaomi.com/b2c-bbs-cms/2016/1012/20161012093334752.jpg',
        'http://cdn.fds.api.xiaomi.com/b2c-bbs-cms/2016/1012/20161012093353992.jpg',
        'http://cdn.fds.api.xiaomi.com/b2c-bbs-cms/2016/1012/20161012093410719.jpg',
        'http://cdn.fds.api.xiaomi.com/b2c-bbs-cms/2016/1012/20161012093425860.jpg',
        'http://cdn.fds.api.xiaomi.com/b2c-bbs-cms/2016/1012/20161012093446236.jpg',
    ]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },

  wxPay:function(){
      console.log("wxPay:");
      wx.requestPayment({
        //   "appid":"wx9b837fe74402a2fe",
        //   "partnerid":"1379371202",
        //   "prepayid":"wx20161012165110fd52c424470171568353",
          "nonceStr":"HvZVGAV6uTwVjZxU",
          "package":"Sign=WXPay",
          "timeStamp":1476262270,
          "signType":"DM5",
          "paySign":"2B618A21B5D4975447E13F0BEF675984",
          "success":function(res){
              console.log("success:"+res);
          },

          "fail":function(error){
              console.log("error"+error);
          }
    })
  }
})