// pages/home/childComponents/home-navbar/home-navbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },
  lifetimes: {

  },
  /**
   * 组件的初始数据
   */
  data: {
    isshow: 1,
    nav: [{
      name: "男频",
      id: 1
    }, {
      name: "女频",
      id: 2
    }, {
      name: "榜单",
      id: 3
    }]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleClick: function(e) {
      var index = e.currentTarget.dataset.id
      this.triggerEvent("cancle", index)
      this.setData({
        isshow: index
      })
    },
    handleSerach: function() {
      wx.navigateTo({
        url: '../../pages/serach/serach',
      })
    }
  },

})