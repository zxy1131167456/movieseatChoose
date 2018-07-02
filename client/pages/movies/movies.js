// pages/movies/movies.js
var util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movieName:"",
    movieTimes:"",
    //屏幕宽度/2
    left:1,
    level:1,
    room:1,
    seatArr:[],
    buy:"请先选座",
    opacity:0.2,
    seatFinish:[],
    num:0,
    price:10,
    modalHidden:true,
    seatrecommendBackground1:"#fff",
    seatrecommendBackground2: "#fff",
    seatrecommendBackground3: "#fff",
    seatrecommendBackground4: "#fff",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var movieName = "超人总动员2";
    var movieTimes = "今天 06-28 15:05 (3D)";
    that.setData({
      movieName:movieName,
      movieTimes:movieTimes,
      left:wx.getSystemInfoSync().windowWidth/2
    })
    console.log(that.data.left)
    //座位循环
    var row = 8;
    var col = 8;
    var seatArr = new Array(row);   //row行
    var src = "../img/seat1.png";
    for(let i = 0;i<row;i++){
      seatArr[i] = new Array(col); 
      for(let j = 0;j<col;j++){
        seatArr[i][j] = src;
      }
    }
    that.setData({
      seatArr:seatArr
    })
    console.log(that.data.seatArr)
  },

  seatChange:function(e){
    var that = this;
    var rowCol = e.currentTarget.dataset.index;
    var row = parseInt(rowCol.substring(0, 1))
    var col = parseInt(rowCol.substring(1, 2))
    var row1 = row + 1;
    var col1 = col + 1;
    var arr = that.data.seatArr
    var num = 0;
    if (arr[row][col] == "../img/seat2.png"){
      var num = that.data.num;
      var seatFinish = that.data.seatFinish;
      --num;
      if(num <= 0){
        that.setData({
          opacity: 0.2,
          buy: "请先选座",
        })
      }
      arr[row][col] = "../img/seat1.png"
      seatFinish.splice(seatFinish.length-1,1)
      console.log(seatFinish)
      that.setData({
        seatArr: arr,
        num :num,
        seatFinish:seatFinish
      })
      console.log("您取消了" + row1 + "排" + col1 + "座")
    }else{
      var num = that.data.num;
      var seatFinish = that.data.seatFinish;
      ++num;
      if(num > 4){
          that.setData({
            modalHidden: false,
          })
          return false;
      }
      arr[row][col] = "../img/seat2.png"
      var seat = {
      row:row1,
      col:col1
    }
    seatFinish.push(seat)
    console.log(seatFinish)
    that.setData({
      opacity:1,
      buy:"点击购买",
      seatArr : arr,
      num : num,
      seatFinish: seatFinish
    })
    console.log("您选择了" + row1 + "排" + col1 + "座")
    console.log(arr)
    }
  },

  modalChange:function(){
    var that = this;
    that.setData({
      modalHidden: true,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})