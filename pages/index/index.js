//index.js
//获取应用实例
const app = getApp()

Page({

  //事件处理函数
  clickItem: function (event) {
    wx.navigateTo({
      url: '../content/content?index=' + event.currentTarget.dataset.index,
    })
  },

  onLoad: function () {
    this.setData({
      items: app.globalData.items
    }) ;
  }
})
