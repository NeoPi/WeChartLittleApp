// map.js
Page({
  data: {
      latitude: 23.099994,
      longitude:113.324520,
      mapWidth:1080,
      mapHeight:1920,


    controls: [{
      id: 1,
      iconPath: '/pages/resources/location.png',
      position: {
        left: 80,
        top: 400,
        width: 200,
        height: 80
      },
      clickable: true
    }]
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
    if(e.controlId == 1) {
      wx.navigateTo({
        url: '../login/login',
        success: function(res){
          // success
        },
        fail: function() {
          // fail
        },
        complete: function() {
          // complete
        }
      })
    }
  },
  onLoad: function () {
    console.log('location onLoad')
    var that = this

    const systemInfo = wx.getSystemInfoSync();
    that.setData({
                mapWidth : systemInfo.windowWidth,
                mapHeight : systemInfo.windowHeight,
            })

    //调用应用实例的方法获取全局数据
    wx.getLocation({
        type: 'wgs84',
        success: function(res) {

          console.log(res.latitude+",,,,"+res.longitude)
            that.setData({
                latitude :res.latitude,
                longitude : res.longitude,
            })
        }
    })
  
  },

  signin : function(){
    console.log("signin++++++");
  }

})