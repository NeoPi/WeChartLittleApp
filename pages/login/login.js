


Page({
    data :{
      request_code : false,
      request_code_color :"#E2E2E2",
    },
    onload:function (){

    },

    login : function (e){
        console.log(e);
        // e.detail.value.phonenum 的phonenum 对应组件的name属性，下同
        var phoneNum = e.detail.value.phonenum ;
        var phoneCode = e.detail.value.phonecode ;
        
        if ( !/^1[34578]\d{9}$/.test(phoneNum)){
          wx.showToast({
            title:"请输入正确的手机号码！",
            icon:"loading"
          });
          return ;
        }
        
        if(!/^\d{6}$/.test(phoneCode)) {
          wx.showToast({
            title:"请输入正确的验证码！",
            icon:"error"
          });
          return ;
        }

        // goto login
      
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
      console.log("输入手机号码："+str);
      if (/^1[34578]\d{9}$/.test(str)){
          that.setData({
          request_code_color:"green",
        });
      }
    },

    code_input : function(value){
      console.log("输入验证码"+ value.detail.value);
      var that = this;
      if(/^\d{6}$/.test(value.detail.value)) {
        console.log("输入验证码"+ value.detail.value);
      }
    }


    
})