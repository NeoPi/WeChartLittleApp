// map.js
Page({
  data: {
      latitude: 23.099994,
      longitude:113.324520,
      mapWidth:1080,
      mapHeight:1920,


    controls: [
      {
      id: 0,
      iconPath: '/pages/resources/abc_btn_radio_to_on_mtrl_015.png',
      position: {
        left: 35,
        top: 520,
        width: 50,
        height: 50
      },
      clickable: true
    },
      
      {
      id: 1,
      iconPath: '/pages/resources/location.png',
      position: {
        left: 90,
        top: 500,
        width: 200,
        height: 80
      },
      clickable: true
    },

    {
      id: 2,
      iconPath: '/pages/resources/abc_ic_menu_copy_mtrl_am_alpha.png',
      position: {
        left: 305,
        top: 520,
        width: 40,
        height: 40
      },
      clickable: true
    },
    
    ]
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
    } else if (e.controlId == 0){
      this.moveToLocation();
    } else if (e.controlId == 2) {
      wx.navigateTo({
        url: '../city/city',
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

  onReady : function(e) {
    // 使用 wx.createMapContext 获取 map 上下文 
    this.mapCtx = wx.createMapContext('map')

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
  },

  // 移动定位位置
  moveToLocation: function () {
    this.mapCtx.moveToLocation()
  }

})