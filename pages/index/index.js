//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    items: [
      '物业费',
      '水电费',
      '天燃气',
      '公交卡',
      '旅游年卡',
      '停车费'
    ]
  },
  //事件处理函数
  clickItem: function (event) {
    wx.navigateTo({
      url: '../content/content?text=' + this.data.items[event.currentTarget.dataset.index],
    })
  },

  onLoad: function () {
    
  }
})
