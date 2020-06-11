// pages/bookshelf/bookshelf.js
import {
  getBookshelfbook,
  getBookshelf
} from "../../server/bookshelf.js"
import request from "../../server/network.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banner: [],
    books: [],
    first_chapter_id: '',
    read_log_chapter_id: '',
    bid: ''
  },
  handleClick(e) {
    var chapter_id = e.currentTarget.dataset.cid;
    var bid = e.currentTarget.dataset.bid;
    wx.navigateTo({
      url: `../chapterdetail/chapterdetail?bid=${bid}&cid=${chapter_id}`
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    var sex = 1
    wx.request({
      url: `https://api-freesy.jinhuyu.cn/api/bookshelf`,
      header: {
        "Authorization": `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLWZyZWVzeS5qaW5odXl1LmNuXC9hcGlcL2xvZ2luIiwiaWF0IjoxNTgzNTAwODcyLCJuYmYiOjE1ODM1MDA4NzIsImp0aSI6IkVuQ25UVFZWckkyQXRoTlMiLCJzdWIiOjEzNjQyNDIxLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.1UgxmwWTkc0K8ceg10ZSlHeUhEUkeGTAM1vftH7lQAo
`
      },
      success: function(res) {
        console.log(res.data)
        that.setData({
          books: res.data.data
        })
      }
    })
    getBookshelfbook(sex).then(res => {
      console.log(res.data)
      that.setData({
        banner: res.data.data
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
    var that = this;
    var sex = 1
    wx.request({
      url: `https://api-freesy.jinhuyu.cn/api/bookshelf`,
      header: {
        "Authorization": `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLWZyZWVzeS5qaW5odXl1LmNuXC9hcGlcL2xvZ2luIiwiaWF0IjoxNTgzNTAwODcyLCJuYmYiOjE1ODM1MDA4NzIsImp0aSI6IkVuQ25UVFZWckkyQXRoTlMiLCJzdWIiOjEzNjQyNDIxLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.1UgxmwWTkc0K8ceg10ZSlHeUhEUkeGTAM1vftH7lQAo
`
      },
      success: function(res) {
        console.log(res.data)
        that.setData({
          books: res.data.data
        })
      }
    })
    getBookshelfbook(sex).then(res => {
      console.log(res.data)
      that.setData({
        banner: res.data.data
      })
    })
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