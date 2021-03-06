
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    content:'aaaaaaa'
  },

  displayImage: function (e) {
    var current = e.target.dataset.src
    wx.navigateTo({
      url: '../showImage/showImage?image='+current,
    })
  },

  previewImage: function (e) {
    var current = e.target.dataset.src
    var imageList = new Array()
    imageList[0] = current
    wx.previewImage({
      current:'/pages/images/zy_cys.jpeg',
      urls: ['/pages/images/zy_cys.jpeg']
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    wx.setNavigationBarTitle({
      title: app.globalData.items[options.index].title,
    })

    this.setData({
      content: app.globalData.items[options.index].content
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})