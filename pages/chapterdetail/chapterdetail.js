// pages/chapterdetail/chapterdetail.js
import request from "../../server/network.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data: '',
    current_id: '',
    prevcid: '',
    nextcid: '',
    bid: '',
    bname: ''
  },
  toList() {
    wx.navigateTo({
      url: `../chapter/chapter?bid=${this.data.bid}&name=${this.data.bname}`
    })
  },
  btnClick() {
    var nextcid = this.data.nextcid;
    request({
      url: `https://api-freesy.jinhuyu.cn/api/book/${this.data.bid}/chapter/${nextcid}`,
      header: {
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLWZyZWVzeS5qaW5odXl1LmNuXC9hcGlcL2xvZ2luIiwiaWF0IjoxNTgzNTAwODcyLCJuYmYiOjE1ODM1MDA4NzIsImp0aSI6IkVuQ25UVFZWckkyQXRoTlMiLCJzdWIiOjEzNjQyNDIxLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0`
      }
    }).then(res => {
      console.log(res.data)
      this.setData({
        data: res.data.data,
        prevcid: res.data.data.page.prev,
        nextcid: res.data.data.page.next,
      })
    })
    wx.pageScrollTo({
      scrollTop: 0,
    })
  },
  upPage() {
    var prevcid = this.data.prevcid;
    request({
      url: `https://api-freesy.jinhuyu.cn/api/book/${this.data.bid}/chapter/${prevcid}`,
      header: {
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLWZyZWVzeS5qaW5odXl1LmNuXC9hcGlcL2xvZ2luIiwiaWF0IjoxNTgzNTAwODcyLCJuYmYiOjE1ODM1MDA4NzIsImp0aSI6IkVuQ25UVFZWckkyQXRoTlMiLCJzdWIiOjEzNjQyNDIxLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0`
      }
    }).then(res => {
      this.setData({
        data: res.data.data,
        prev_cid: res.data.data.page.prev,
        next_cid: res.data.data.page.next,
      })
    })
    wx.pageScrollTo({
      scrollTop: 0,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var bid = options.bid;
    var cid = options.cid;
    request({
      url: `https://api-freesy.jinhuyu.cn/api/book/${bid}/chapter/${cid}`,
      header: {
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLWZyZWVzeS5qaW5odXl1LmNuXC9hcGlcL2xvZ2luIiwiaWF0IjoxNTgzNTAwODcyLCJuYmYiOjE1ODM1MDA4NzIsImp0aSI6IkVuQ25UVFZWckkyQXRoTlMiLCJzdWIiOjEzNjQyNDIxLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0`
      }
    }).then(res => {
      console.log(res.data)
      wx.setNavigationBarTitle({
        title: res.data.data.book_name
      })
      this.setData({
        data: res.data.data,
        current_id: cid,
        bname: res.data.data.book_name,
        prevcid: res.data.data.page.prev,
        nextcid: res.data.data.page.next,
        bid
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