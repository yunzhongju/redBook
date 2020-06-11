// pages/detail/detail.js
import {
  getInfo,
  getRandomBook,
  getReadLog
}
from "../../server/detail.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '',
    detail: '',
    random_books: [],
    first_chapter_id: '',
    readlog: '',
    bookshelf: false,
    isread: false
  },
  handleShelf() {
    var that = this;
    wx.request({
      url: 'https://api-freesy.jinhuyu.cn/api/bookshelf',
      method: "POST",
      data: {
        book_id: that.data.id
      },
      header: {
        "Authorization": `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLWZyZWVzeS5qaW5odXl1LmNuXC9hcGlcL2xvZ2luIiwiaWF0IjoxNTgzNTAwODcyLCJuYmYiOjE1ODM1MDA4NzIsImp0aSI6IkVuQ25UVFZWckkyQXRoTlMiLCJzdWIiOjEzNjQyNDIxLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.1UgxmwWTkc0K8ceg10ZSlHeUhEUkeGTAM1vftH7lQAo
`
      },
      success: function(res) {
        getInfo(that.data.id).then(res => {
          console.log(res.data)
          that.setData({
            bookshelf: true
          })
        })
      }
    })
  },
  handleClick(e) {
    var bid = this.data.id;
    var cid = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `../chapterdetail/chapterdetail?bid=${bid}&cid=${cid}`
    })
  },
  update(e) {
    if (e.detail) {
      getRandomBook(this.data.id, 3).then(res => {
        this.setData({
          random_books: res.data.data
        })
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var book_id = options.id;
    var that = this;
    getInfo(book_id).then(res => {
      console.log(res.data)
      wx.setNavigationBarTitle({
        title: res.data.data.name
      })
      wx.setNavigationBarColor({
        frontColor: '#000000',
        backgroundColor: '#ffffff'
      })
      if (res.data.data.is_shelfbook == 0) {
        that.setData({
          bookshelf: false
        })
      } else if (res.data.data.is_shelfbook == 1) {
        that.setData({
          bookshelf: true
        })
      }
      that.setData({
        detail: res.data.data,
        id: book_id,
        first_chapter_id: res.data.data.first_chapter_id
      })
    })

    getRandomBook(book_id, 3).then(res => {
      that.setData({
        random_books: res.data.data
      })
    })
    wx.request({
      url: `https://api-freesy.jinhuyu.cn/api/readinglog/${book_id}`,
      header: {
        "Authorization": `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLWZyZWVzeS5qaW5odXl1LmNuXC9hcGlcL2xvZ2luIiwiaWF0IjoxNTgzNTAwODcyLCJuYmYiOjE1ODM1MDA4NzIsImp0aSI6IkVuQ25UVFZWckkyQXRoTlMiLCJzdWIiOjEzNjQyNDIxLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.1UgxmwWTkc0K8ceg10ZSlHeUhEUkeGTAM1vftH7lQAo
`
      },
      success: function(res) {
        console.log(res.data)
        // that.setData({
        //   readlog: res.data
        // })
      }
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