


Page({

    data :{
      request_code : false,
      request_code_color :"#E2E2E2",
      login_disable:true,
    },


    onload:function (){

    },

    login : function (){

      wx.save

        // if login success
        wx.navigateBack({
          delta: 1, // 回退前 delta(默认为1) 页面
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

    },

    request_phonecode : function (){
      console.log("请求获取验证码");
    },


    phone_input : function (value){
      
      var that = this ;
      var str = value.detail.value;
      var pos = value.detail.cursor ;
      console.log("输入手机号码："+str+",pos:"+pos);
      if(pos >= 11){
        that.setData({
          request_code_color:"green",
        });
      }

    },

    code_input : function(value){
      console.log("输入验证码"+ value.detail.value);
      var that = this;
      if(value.detail.cursor >= 6) {
        that.setData({
          login_disable:false,
        });
      }
    }




    
})