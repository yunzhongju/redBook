// pages/classify/childComponents/classfiy-choose/classfiy-choose.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    active: 1
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleChoose(e) {
      var index = e.currentTarget.dataset.id;
      this.triggerEvent("choose", index)
      this.setData({
        active: index
      })
    }
  }
})