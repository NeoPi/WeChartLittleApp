Page({
  data:{    
    pageFirstHover:false,
  },
  
  bindClass:function(){
    console.log(11111111)
    console.log(this.pageFirstHover);
    console.log(this);
    var a = this.data.pageFirstHover;
    this.setData({
      pageFirstHover : !this.data.pageFirstHover,
    });
    console.log(this);
  }
})