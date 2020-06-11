// pages/home/childComponents/home-showdata/home-showdata.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: Array,
    redbook1: Array,
    redbook2: Array
  },
  lifetimes: {
    created: function() {}
  },
  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {
    handleClick: function(e) {
      var id = e.currentTarget.dataset.id
      wx.navigateTo({
        url: '../../pages/detail/detail?id=' + id,
      })
    }
  }
})