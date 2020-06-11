// pages/detail/childComponents/detail-info/detail-info.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data: Object
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
    handleClick() {
      wx.navigateTo({
        url: `../../../../chapter/chapter?bid=${this.properties.data.id}&name=${this.properties.data.name}`
      })
    },
    handleWrap() {
      this.triggerEvent("update", true)
    }
  }
})