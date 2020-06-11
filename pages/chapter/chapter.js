// pages/chapter/chapter.js
import request from "../../server/network.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    list: [],
    bid: ''
  },
  reverse() {
    var list = this.data.list.reverse()
    this.setData({
      list
    })
  },
  handleClick(e) {
    var index = e.currentTarget.dataset.index;
    var bid = this.data.bid;
    var cid = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `../chapterdetail/chapterdetail?bid=${bid}&cid=${cid}`
    })
    this.setData({
      active: index
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options.bid)
    var bid = options.bid;
    this.setData({
      bid
    })
    wx.setNavigationBarTitle({
      title: options.name
    })
    request({
      url: `https://api-freesy.jinhuyu.cn/api/book/${bid}/list`,
      header: {
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLWZyZWVzeS5qaW5odXl1LmNuXC9hcGlcL2xvZ2luIiwiaWF0IjoxNTgzNTAwODcyLCJuYmYiOjE1ODM1MDA4NzIsImp0aSI6IkVuQ25UVFZWckkyQXRoTlMiLCJzdWIiOjEzNjQyNDIxLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0`
      }
    }).then(res => {
      console.log(res.data)
      this.setData({
        list: res.data.data
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})