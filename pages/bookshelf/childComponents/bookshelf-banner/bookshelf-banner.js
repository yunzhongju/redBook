// pages/bookshelf/childComponents/bookshelf-banner/bookshelf-banner.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: Array
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
    handleClick(e) {
      console.log(e)
      var book_id = e.currentTarget.dataset.id;
      wx.navigateTo({
        url: '../../../../detail/detail?id=' + book_id
      })
    }
  }
})