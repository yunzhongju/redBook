export default function(config) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: config.url,
      method: config.method || "get",
      success: resolve,
      fail: reject,
      data: config.data
    })
  })
}