// pages/home/home.js
import request from "../../server/network.js"
import {
  getAdvs,
  getTemplate,
  getCondition
}
from "../../server/home.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isshow: true,
    sex: 1,
    advs: [],
    template: [],
    condition: [],
    redbook1: [],
    redbook2: [],
    choose: 1,
    sort: 1,
    choosesex: 0,
    page: 1

  },
  getMore: function(e) {
    var that = this;
    var isLoad = e.detail;
    var condition = that.data.condition;
    var newC = [];
    var page = this.page + 1;
    if (isLoad) {
      getCondition(that.data.sort, that.data.choosesex, page).then(res => {
        newC = res.data.data
        this.setData({
          condition: condition.concat(newC),
          page
        })
      })
    }
  },
  handleChoose: function(e) {
    this.data.condition = []
    getCondition(this.data.sort, e.detail, this.data.page).then(res => {
      this.setData({
        condition: res.data.data,
        choosesex: e.detail
      })
    })
  },
  handleSort: function(e) {
    this.data.condition = []
    getCondition(e.detail, this.data.choosesex, this.data.page).then(res => {
      this.setData({
        condition: res.data.data,
        sort: e.detail
      })
    })
  },
  handleCancle: function(e) {
    var sort = 1;
    var page = 1;
    var sex = e.detail;

    if (sex == 1) {
      var newsex = 22;

      getAdvs(newsex).then(res => {
        this.setData({
          advs: res.data.data
        })
      })

      getTemplate(newsex).then(res => {
        this.setData({
          template: res.data.data,
          redbook1: res.data.data[2].templatebook.slice(0, 1),
          redbook2: res.data.data[2].templatebook.slice(1, 3)
        })
      })

      getCondition(sort, sex, page).then(res => {
        this.setData({
          condition: res.data.data
        })
      })

      this.setData({
        isshow: true
      })
    } else if (sex == 2) {
      var newsex = 23;
      this.isshow = true;
      getAdvs(newsex).then(res => {
        this.setData({
          advs: res.data.data
        })
      })

      getTemplate(newsex).then(res => {
        this.setData({
          template: res.data.data
        })
      })

      getCondition(sort, sex, page).then(res => {
        this.setData({
          condition: res.data.data,
        })
      })

      this.setData({
        isshow: true
      })
    } else {
      this.setData({
        advs: [],
        template: [],
        isshow: false
      })
    }

    this.setData({
      sex
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var sex = 22;
    var sort = 1;
    var page = 1;

    getAdvs(sex).then(res => {
      this.setData({
        advs: res.data.data
      })
    })

    getTemplate(sex).then(res => {
      this.setData({
        template: res.data.data,
        redbook1: res.data.data[2].templatebook.slice(0, 1),
        redbook2: res.data.data[2].templatebook.slice(1, 4)
      })
    })

    getCondition(sort, this.sex, page).then(res => {
      this.setData({
        condition: res.data.data
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