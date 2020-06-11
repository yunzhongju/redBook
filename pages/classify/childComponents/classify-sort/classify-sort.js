// pages/classify/childComponents/classify-sort/classify-sort.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    cat: Array,
    isClick: Boolean
  },
  lifetimes: {
    created() {
      if (this.properties.isClick) {
        this.setData({
          cat_active: "",
          ser_active: "",
          sor_active: 1,
        })
      }
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    cat_active: "",
    ser_active: "",
    sor_active: 1
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleChange(e) {
      var cat_active = ""
      var ser_active = ""
      var sor_active = ""
      console.log(e.currentTarget.dataset)
      if (e.currentTarget.dataset.cat_id) {
        cat_active = e.currentTarget.dataset.cat_id
        this.setData({
          cat_active
        })
      } else if (e.currentTarget.dataset.ser_id) {
        ser_active = e.currentTarget.dataset.ser_id
        this.setData({
          ser_active
        })
      } else {
        sor_active = e.currentTarget.dataset.sor_id
        this.setData({
          sor_active
        })
      }
      this.triggerEvent("handleParams", {
        cat: this.data.cat_active,
        ser: this.data.ser_active,
        sor: this.data.sor_active
      })
    }
  }
})