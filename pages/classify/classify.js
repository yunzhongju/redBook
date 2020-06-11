// pages/classify/classify.js
import {
  getCondition,
  getCategory
} from "../../server/classify.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isClick: false,
    isshow: true,
    sex: 1,
    cat_id: "",
    serial_status: "",
    sort: 1,
    page: 1,
    category: [],
    list: []
  },
  handleParams: function(e) {
    console.log(e)
    var sex = this.data.sex;
    var cat = e.detail.cat;
    var ser = e.detail.ser;
    var sor = e.detail.sor;
    var page = 1;
    getCondition(sex, cat, ser, sor, page).then(res => {
      this.setData({
        list: res.data.data,
        cat_id: cat,
        serial_status: ser,
        sort: sor
      })
    })
  },
  handlePull: function() {
    this.setData({
      isshow: true
    })
  },

  // 加载更多
  handleMore: function(e) {
    var page = this.data.page + 1;
    getCondition(this.data.sex, this.data.cat_id, this.data.serial_status, this.data.sort, page).then(res => {
      this.setData({
        list: this.data.list.concat(res.data.data),
        page
      })
    })
  },
  handleChannle(e) {
    var sex = e.detail;
    var cat_id = "";
    getCondition(sex, cat_id, this.data.serial_status, this.data.page).then(res => {
      this.setData({
        sex,
        list: res.data.data,
        cat_id,
        isClick: true
      })
    })
    getCategory(sex).then(res => {
      this.setData({
        category: res.data.data
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    getCategory(this.data.sex).then(res => {
      this.setData({
        category: res.data.data
      })
    })

    getCondition(this.data.sex, this.data.cat_id, this.data.serial_status, this.data.sort, this.data.page).then(res => {
      this.setData({
        list: res.data.data
      })
    })
  },
  // handleScore: function() {
  //   this.setData({
  //     isshow: true
  //   })
  // },
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
    this.setData({
      isshow: true
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    this.setData({
      isshow: false
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})