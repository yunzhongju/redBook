// pages/home/childComponents/home-bangd/home-bangd.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data: Array,
    sex: Number
  },
  lifetimes: {
    created: function() {
      // console.log(this.properties)
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    isshow: 1,
    isshowsort: 1,
    list: ["人气榜", "完本榜", "新书榜", "收藏榜"],
    sexs: [{
      name: "男",
      id: 1
    }, {
      name: "女",
      id: 2
    }]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleClick: function(e) {
      var index = e.currentTarget.dataset.id
      this.triggerEvent("choose", index)
      this.setData({
        isshow: index
      })
    },
    handleSort: function(e) {
      var index = e.currentTarget.dataset.id
      this.triggerEvent("sort", index)
      this.setData({
        isshowsort: index
      })
    },
    handleMore: function(e) {
      this.triggerEvent("getMore", true)
    }
  }
})