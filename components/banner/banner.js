// components/banner/banner.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    advs: Array
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleClick: function(e) {
      var id = e.currentTarget.dataset.id
      console.log(id)
      wx.navigateTo({
        url: '../../pages/detail/detail?id=' + id,
      })
    }
  }
})